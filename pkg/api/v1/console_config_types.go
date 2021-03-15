package v1

type Config struct {
	APIVersion    string `yaml:"apiVersion"`
	Kind          string `yaml:"kind"`
	ConsoleInfo   `yaml:"consoleInfo"`
	ClusterInfo   `yaml:"clusterInfo"`
	Auth          `yaml:"auth"`
	Customization `yaml:"customization"`
}

type ConsoleInfo struct {
	Listen       string `yaml:"listen,omitempty"`
	BaseAddress  string `yaml:"baseAddress,omitempty"`
	BasePath     string `yaml:"basePath,omitempty"`
	CertFile     string `yaml:"certFile,omitempty"`
	KeyFile      string `yaml:"keyFile,omitempty"`
	RedirectPort int    `yaml:"redirectPort,omitempty"`
}

// Auth holds configuration for authenticating with OpenShift. The auth method is assumed to be "openshift".
type Auth struct {
	KeycloakRealm    string `yaml:"keycloakRealm,omitempty"`
	KeycloakAuthURL  string `yaml:"keycloakAuthURL,omitempty"`
	KeycloakClientId string `yaml:"keycloakClientId,omitempty"`
}

// ClusterInfo holds information the about the cluster such as master public URL and console public URL.
type ClusterInfo struct {
	MasterEndpoint string `yaml:"masterPublicURL,omitempty"`
	// main app
	HypercloudEndpoint      string `yaml:"hypercloudEndpoint,omitempty"`
	MultiHypercloudEndpoint string `yaml:"multiHypercloudEndpoint,omitempty"`
	WebhookEndpoint         string `yaml:"WebhookEndpoint,omitempty"`
	// Third party app
	KialiEndpoint  string `yaml:"kialiEndpoint,omitempty"`
	KibanaEndpoint string `yaml:"kibanaEndpoint,omitempty"`
	// Monitoring app
	GrafanaEndpoint      string `yaml:"grafanaEndpoint,omitempty"`
	AlertmanagerEndpoint string `yaml:"alertmanagerEndpoint,omitempty"`
	PrometheusEndpoint   string `yaml:"prometheusEndpoint,omitempty"`
	ThanosEndpoint       string `yaml:"thanosEndpoint,omitempty"`
}

type Customization struct {
	Branding             string `yaml:"branding,omitempty"`
	DocumentationBaseURL string `yaml:"documentationBaseURL,omitempty"`
	CustomProductName    string `yaml:"customProductName,omitempty"`
	CustomLogoFile       string `yaml:"customLogoFile,omitempty"`
	McMode               string `yaml:"mcMode,omitempty"`
	ReleaseMode          string `yaml:"releaseMode,omitempty"`
}
