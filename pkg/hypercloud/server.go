package hypercloud

import (
	"context"
	"crypto/tls"
	"net/http"
	"net/url"

	v1 "console/pkg/api/v1"
	"console/pkg/hypercloud/safe"

	"github.com/openshift/library-go/pkg/crypto"
	"github.com/sirupsen/logrus"
	log "github.com/sirupsen/logrus"
)

type stoppableServer interface {
	Shutdown(ctx context.Context) error
	Close() error
	ListenAndServe() error
}
type HttpServer struct {
	Server        stoppableServer
	Switcher      *HTTPHandlerSwitcher
	DefaultConfig *v1.ConsoleInfo
	Log           *logrus.Logger
}

func New(config *v1.ConsoleInfo) (*HttpServer, error) {
	logger := log.StandardLogger()
	// logger.SetFormatter(&log.JSONFormatter{})

	logger.Infoln("New Server")
	httpSwitcher := NewHandlerSwitcher(http.NotFoundHandler())
	// r := mux.NewRouter()
	// httpSwitcher := NewHandlerSwitcher(r.NotFoundHandler)
	handler := httpSwitcher
	listenURL, err := url.Parse(config.Listen)
	if err != nil {
		log.Errorf("Failed to parse consoleInfo.listen %v \n", err)
	}

	serverHTTP := &http.Server{
		Addr:         listenURL.Host,
		Handler:      handler,
		TLSNextProto: make(map[string]func(*http.Server, *tls.Conn, http.Handler)),
		TLSConfig: &tls.Config{
			CipherSuites: crypto.DefaultCiphers(),
		},
	}

	return &HttpServer{
		Server:        serverHTTP,
		Switcher:      httpSwitcher,
		DefaultConfig: config,
		Log:           logger,
	}, nil
}

func (s *HttpServer) Start(ctx context.Context) {

	s.Log.Info("Start Server")

	serverHTTP := s.Server.(*http.Server)
	listenURL, err := url.Parse(s.DefaultConfig.Listen)
	if err != nil {
		s.Log.Println("failt to parsing URL")
	}
	s.Log.Info("Run Server using go func()")
	csr := s.DefaultConfig.CertFile
	key := s.DefaultConfig.KeyFile

	// RUN default server
	go func() {
		s.Log.Infof("Binding to %s...", serverHTTP.Addr)
		if listenURL.Scheme == "https" {
			s.Log.Info("using TLS")
			s.Log.Fatal(serverHTTP.ListenAndServeTLS(csr, key))
		} else {
			s.Log.Info("not using TLS")
			s.Log.Fatal(serverHTTP.ListenAndServe())
		}
	}()
}

type HTTPHandlerSwitcher struct {
	handler *safe.Safe
}

// NewHandlerSwitcher builds a new instance of HTTPHandlerSwitcher.
func NewHandlerSwitcher(newHandler http.Handler) (hs *HTTPHandlerSwitcher) {
	return &HTTPHandlerSwitcher{
		handler: safe.New(newHandler),
	}
}

func (h *HTTPHandlerSwitcher) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	handlerBackup := h.handler.Get().(http.Handler)
	handlerBackup.ServeHTTP(rw, req)
}

// GetHandler returns the current http.ServeMux.
func (h *HTTPHandlerSwitcher) GetHandler() (newHandler http.Handler) {
	handler := h.handler.Get().(http.Handler)
	return handler
}

// UpdateHandler safely updates the current http.ServeMux with a new one.
func (h *HTTPHandlerSwitcher) UpdateHandler(newHandler http.Handler) {
	h.handler.Set(newHandler)
}
