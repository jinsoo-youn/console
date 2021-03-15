package server

import (
	"fmt"
	"net/http"
	"net/url"

	"github.com/gorilla/mux"
	"github.com/justinas/alice"

	v1 "console/pkg/api/v1"
	"console/pkg/hypercloud/proxy"

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
	StaticUser *User
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
	tokenMiddleware := alice.New(router.tokenHandler)

	gmux := mux.NewRouter()

	k8sProxy := proxy.NewProxy(router.K8sProxyConfig)
	gmux.PathPrefix(k8sProxyEndpoint).Handler(
		http.StripPrefix(singleJoiningSlash(router.BaseURL.Path, k8sProxyEndpoint), tokenMiddleware.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
			r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", router.StaticUser.Token))
			k8sProxy.ServeHTTP(w, r)
		})),
	)

	fileServer := http.FileServer(http.Dir(router.PublicDir))
	gmux.PathPrefix("/static/").Handler(http.StripPrefix(singleJoiningSlash(router.BaseURL.Path, "/static/"), gzipHandler(fileServer)))

	return standardMiddleware.Then(gmux)

}
