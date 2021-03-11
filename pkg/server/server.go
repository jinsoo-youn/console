package server

import (
	"crypto/tls"
	"net/http"
	"net/url"
	"time"

	"github.com/sirupsen/logrus"
)

type Server struct {
	BaseURL   *url.URL
	PublicDir string
	Log       *logrus.Logger
}

type jsGlobals struct {
	ConsoleVersion string `json:"consoleVersion"`
	BasePath       string `json:"basePath"`
}

func NewServer() (*Server, error) {
	return &Server{
		BaseURL: &url.URL{
			Scheme: "http",
			Host:   "localhost:3000",
		},
		PublicDir: "/",
		Log:       logrus.StandardLogger(),
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
