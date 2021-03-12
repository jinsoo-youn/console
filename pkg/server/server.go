package server

import (
	"crypto/tls"
	"net/http"
	"net/url"
	"os"
	"time"

	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

type Server struct {
	BaseURL   *url.URL
	PublicDir string
	Log       *logrus.Logger
}

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

func NewServer(env *viper.Viper) (*Server, error) {
	var log = logrus.StandardLogger()
	log.Out = os.Stdout
	file, err := os.OpenFile("./logrus.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err == nil {
		log.Out = file
	}
	return &Server{
		BaseURL: &url.URL{
			Scheme: "http",
			Host:   "localhost:3000",
		},
		PublicDir: viper.GetViper().GetString("public-dir"),
		Log:       log,
	}, nil
}

func (s *Server) Start() {
	tlsConfig := &tls.Config{
		PreferServerCipherSuites: true,
		CurvePreferences:         []tls.CurveID{tls.X25519, tls.CurveP256},
	}
	srv := &http.Server{
		Addr:         "localhost:3000",
		Handler:      s.routes(),
		TLSConfig:    tlsConfig,
		IdleTimeout:  time.Minute,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
	s.Log.Infof("Starting server on %s", srv.Addr)
	// err := srv.ListenAndServeTLS("./tls/cert.pem", "./tls/key.pem")
	err := srv.ListenAndServe()
	s.Log.Fatal(err)
}
