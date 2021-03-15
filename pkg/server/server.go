package server

import (
	"crypto/tls"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"time"

	v1 "console/pkg/api/v1"

	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

type Server struct {
	Log *logrus.Logger

	BaseURL   *url.URL
	PublicDir string

	// A client with the correct TLS setup for communticating with the API server.

	// Keycloak (Hyperauth) information for logging to console
	KeycloakRealm    string
	KeycloakAuthURL  string
	KeycloakClientId string
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

func New(config *v1.Config) (*Server, error) {
	var log = logrus.StandardLogger()
	log.Out = os.Stdout
	file, err := os.OpenFile("./logrus.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	log.WithField("type", "server")
	if err == nil {
		log.Out = file
	}
	log.Out = os.Stdout
	fmt.Printf("base Addr %v, \n ", config.ConsoleInfo.Listen)
	addr, _ := url.Parse(config.Listen)
	return &Server{
		BaseURL: &url.URL{
			Scheme: addr.Scheme,
			Host:   addr.Host,
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
		Addr:         s.BaseURL.Host,
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
