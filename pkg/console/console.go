package console

import (
	"net/http"
	"net/url"

	"github.com/gorilla/mux"

	v1 "console/pkg/api/v1"
	"console/pkg/auth"
	"console/pkg/hypercloud/proxy"

	"github.com/sirupsen/logrus"
)

var (
	log = logrus.New().WithField("MODULE", "CONSOLE")
)

const (
	indexPageTemplateName = "index.html"

	k8sProxyPath               = "/api/kubernetes/"
	prometheusProxyPath        = "/api/prometheus"
	prometheusTenancyProxyPath = "/api/prometheus-tenancy"
	alertManagerProxyPath      = "/api/alertmanager"

	grafanaProxyPath          = "/api/grafana/"
	kialiProxyPath            = "/api/kiali/"
	webhookPath               = "/api/webhook/"
	hypercloudServerPath      = "/api/hypercloud/"
	multiHypercloudServerPath = "/api/multi-hypercloud/"
	kibanaPath                = "/api/kibana/"
)

type jsGlobals struct {
	ConsoleVersion string `json:"consoleVersion"`
	BasePath       string `json:"basePath"`

	KubeAPIServerURL         string `json:"kubeAPIServerURL"`
	PrometheusBaseURL        string `json:"prometheusBaseURL"`
	PrometheusTenancyBaseURL string `json:"prometheusTenancyBaseURL"`
	AlertManagerBaseURL      string `json:"alertManagerBaseURL"`

	GrafanaPublicURL    string `json:"grafanaPublicURL"`
	PrometheusPublicURL string `json:"prometheusPublicURL"`
	ThanosPublicURL     string `json:"thanosPublicURL"`
	GitlabURL           string `json:"gitlabURL"`

	GOARCH string `json:"GOARCH"`
	GOOS   string `json:"GOOS"`

	KeycloakRealm           string `json:"keycloakRealm"`
	KeycloakAuthURL         string `json:"keycloakAuthURL"`
	KeycloakClientId        string `json:"keycloakClientId"`
	KeycloakUseHiddenIframe bool   `json:"keycloakUseHiddenIframe"`

	McMode          bool `json:"mcMode"`
	ReleaseModeFlag bool `json:"releaseModeFlag"`
}

type Console struct {
	BaseURL    *url.URL
	PublicDir  string
	StaticUser *auth.User
	// A lister for resource listing a particular kind
	GOARCH string
	GOOS   string
	// customization
	// Branding          string
	// CustomProductName string
	// CustomLogoFile    string
	McMode          bool
	ReleaseModeFlag bool
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

func New(cfg *v1.Config) (*Console, error) {
	log.WithField("FILE", "routes.go").Infoln("Create Router based on *v1.Config")
	config := cfg.DeepCopy()
	return createConsole(config)
}

func (c *Console) Gateway() http.Handler {
	r := mux.NewRouter()
	return r
}

func (c *Console) Server() http.Handler {
	r := mux.NewRouter()
	return r
}

func (c *Console) Dashboard() http.Handler {
	r := mux.NewRouter()
	return r
}
