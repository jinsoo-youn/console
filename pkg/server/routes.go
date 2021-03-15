package server

import (
	"crypto/tls"
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/gorilla/mux"
	"github.com/justinas/alice"

	v1 "console/pkg/api/v1"
	"console/pkg/auth"
	"console/pkg/hypercloud/proxy"
	"console/pkg/terminal"

	"github.com/sirupsen/logrus"
)

var (
	log = logrus.New().WithField("name", "router")
)

const (
	indexPageTemplateName = "index.html"

	k8sProxyEndpoint               = "/api/kubernetes/"
	prometheusProxyEndpoint        = "/api/prometheus"
	prometheusTenancyProxyEndpoint = "/api/prometheus-tenancy"
	alertManagerProxyEndpoint      = "/api/alertmanager"
	customLogoEndpoint             = "/custom-logo"

	grafanaProxyEndpoint          = "/api/grafana/"
	kialiProxyEndpoint            = "/api/kiali/"
	webhookEndpoint               = "/api/webhook/"
	hypercloudServerEndpoint      = "/api/hypercloud/"
	multiHypercloudServerEndpoint = "/api/multi-hypercloud/"
	kibanaEndpoint                = "/api/kibana/"
)

type jsGlobals struct {
	ConsoleVersion string `json:"consoleVersion"`
	BasePath       string `json:"basePath"`

	KubeAPIServerURL         string `json:"kubeAPIServerURL"`
	PrometheusBaseURL        string `json:"prometheusBaseURL"`
	PrometheusTenancyBaseURL string `json:"prometheusTenancyBaseURL"`
	AlertManagerBaseURL      string `json:"alertManagerBaseURL"`
	MeteringBaseURL          string `json:"meteringBaseURL"`
	Branding                 string `json:"branding"`
	CustomProductName        string `json:"customProductName"`

	GrafanaPublicURL    string `json:"grafanaPublicURL"`
	PrometheusPublicURL string `json:"prometheusPublicURL"`
	ThanosPublicURL     string `json:"thanosPublicURL"`
	LoadTestFactor      int    `json:"loadTestFactor"`
	GOARCH              string `json:"GOARCH"`
	GOOS                string `json:"GOOS"`

	KeycloakRealm    string `json:keycloakRealm`
	KeycloakAuthURL  string `json:keycloakAuthURL`
	KeycloakClientId string `json:keycloakClientId`

	McMode         bool   `json:mcMode`
	McModeFile     string `json:mcModeFile`
	McModeOperator bool   `json:mcModeOperator`

	ReleaseModeFlag bool `json:"releaseModeFlag"`
}

type Router struct {
	BaseURL    *url.URL
	PublicDir  string
	StaticUser *auth.User
	// A lister for resource listing a particular kind
	GOARCH string
	GOOS   string
	// customization
	Branding          string
	CustomProductName string
	CustomLogoFile    string
	McMode            bool
	ReleaseModeFlag   bool
	// Keycloak (Hyperauth) information for logging to console
	KeycloakRealm    string
	KeycloakAuthURL  string
	KeycloakClientId string
	// Proxy
	K8sProxyConfig                   *proxy.Config
	TerminalProxyTLSConfig           *tls.Config
	PrometheusProxyConfig            *proxy.Config
	ThanosProxyConfig                *proxy.Config
	ThanosTenancyProxyConfig         *proxy.Config
	AlertManagerProxyConfig          *proxy.Config
	GrafanaProxyConfig               *proxy.Config
	KialiProxyConfig                 *proxy.Config
	WebhookProxyConfig               *proxy.Config
	HypercloudServerProxyConfig      *proxy.Config
	MultiHypercloudServerProxyConfig *proxy.Config
	KibanaProxyConfig                *proxy.Config
}

func New(config *v1.Config) (*Router, error) {
	temp := config.DeepCopy()
	baseURL, _ := url.Parse(temp.Listen)
	return &Router{
		BaseURL:   baseURL,
		PublicDir: temp.PublicDir,
		Branding:  temp.Branding,
		McMode:    temp.McMode,
	}, nil

}

func (router *Router) Start() http.Handler {
	standardMiddleware := alice.New(router.recoverPanic, router.logRequest, secureHeaders)
	// tokenMiddleware := alice.New(router.tokenHandler)

	gmux := mux.NewRouter()

	handle := func(path string, handler http.Handler) {
		gmux.Handle(proxy.SingleJoiningSlash(router.BaseURL.Path, path), handler)
	}
	handleFunc := func(path string, handler http.HandlerFunc) { handle(path, handler) }

	authHandlerWithUser := func(hf func(*auth.User, http.ResponseWriter, *http.Request)) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

			// if s.StaticUser.Username == "hypercloud" {
			if router.ReleaseModeFlag {
				token := r.Header.Clone().Get("Authorization")
				temp := strings.Split(token, "Bearer ")
				if len(temp) > 1 {
					token = temp[1]
				} else {
					token = temp[0]
				}
				// plog.Infof("check token is on : %v", token)
				router.StaticUser.Token = token

				// NOTE: query에 token 정보가 있을 시 해당 token으로 설정
				queryToken := r.URL.Query().Get("token")
				if queryToken != "" && token == "" {
					r.URL.Query().Del("token")
					router.StaticUser.Token = queryToken
				}

			}

			hf(router.StaticUser, w, r)
		})
	}

	k8sProxy := proxy.NewProxy(router.K8sProxyConfig)
	gmux.PathPrefix(k8sProxyEndpoint).Handler(
		http.StripPrefix(singleJoiningSlash(router.BaseURL.Path, k8sProxyEndpoint), authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
			r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", router.StaticUser.Token))
			k8sProxy.ServeHTTP(w, r)
		})),
	)

	terminalProxy := terminal.NewProxy(
		router.TerminalProxyTLSConfig,
		router.K8sProxyConfig.TLSClientConfig,
		router.K8sProxyConfig.Endpoint)

	handle(terminal.ProxyEndpoint, authHandlerWithUser(terminalProxy.HandleProxy))
	handleFunc(terminal.AvailableEndpoint, terminalProxy.HandleProxyEnabled)

	if router.prometheusProxyEnabled() {
		// Only proxy requests to the Prometheus API, not the UI.
		var (
			labelSourcePath      = prometheusProxyEndpoint + "/api/v1/label/"
			rulesSourcePath      = prometheusProxyEndpoint + "/api/v1/rules"
			querySourcePath      = prometheusProxyEndpoint + "/api/v1/query"
			queryRangeSourcePath = prometheusProxyEndpoint + "/api/v1/query_range"
			targetAPIPath        = prometheusProxyEndpoint + "/api/"

			tenancyQuerySourcePath      = prometheusTenancyProxyEndpoint + "/api/v1/query"
			tenancyQueryRangeSourcePath = prometheusTenancyProxyEndpoint + "/api/v1/query_range"
			tenancyTargetAPIPath        = prometheusTenancyProxyEndpoint + "/api/"

			prometheusProxy    = proxy.NewProxy(router.PrometheusProxyConfig)
			thanosProxy        = proxy.NewProxy(router.ThanosProxyConfig)
			thanosTenancyProxy = proxy.NewProxy(router.ThanosTenancyProxyConfig)
		)

		// global label, query, and query_range requests have to be proxied via thanos
		handle(querySourcePath, http.StripPrefix(
			proxy.SingleJoiningSlash(router.BaseURL.Path, targetAPIPath),
			authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", user.Token))
				thanosProxy.ServeHTTP(w, r)
			})),
		)
		handle(queryRangeSourcePath, http.StripPrefix(
			proxy.SingleJoiningSlash(router.BaseURL.Path, targetAPIPath),
			authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", user.Token))
				thanosProxy.ServeHTTP(w, r)
			})),
		)
		handle(labelSourcePath, http.StripPrefix(
			proxy.SingleJoiningSlash(router.BaseURL.Path, targetAPIPath),
			authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", user.Token))
				thanosProxy.ServeHTTP(w, r)
			})),
		)

		// alerting (rules) have to be proxied via cluster monitoring prometheus
		handle(rulesSourcePath, http.StripPrefix(
			proxy.SingleJoiningSlash(router.BaseURL.Path, targetAPIPath),
			authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", user.Token))
				prometheusProxy.ServeHTTP(w, r)
			})),
		)

		// tenancy queries and query ranges have to be proxied via thanos
		handle(tenancyQuerySourcePath, http.StripPrefix(
			proxy.SingleJoiningSlash(router.BaseURL.Path, tenancyTargetAPIPath),
			authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", user.Token))
				thanosTenancyProxy.ServeHTTP(w, r)
			})),
		)
		handle(tenancyQueryRangeSourcePath, http.StripPrefix(
			proxy.SingleJoiningSlash(router.BaseURL.Path, tenancyTargetAPIPath),
			authHandlerWithUser(func(user *auth.User, w http.ResponseWriter, r *http.Request) {
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", user.Token))
				thanosTenancyProxy.ServeHTTP(w, r)
			})),
		)
	}

	fileServer := http.FileServer(http.Dir(router.PublicDir))
	gmux.PathPrefix("/static/").Handler(http.StripPrefix(singleJoiningSlash(router.BaseURL.Path, "/static/"), gzipHandler(fileServer)))

	return standardMiddleware.Then(gmux)

}

func (router *Router) prometheusProxyEnabled() bool {
	return router.PrometheusProxyConfig != nil && router.ThanosTenancyProxyConfig != nil
}
