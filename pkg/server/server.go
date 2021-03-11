package server

import (
	"net/url"

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

func (s *Server) run() {
	s.Log = logrus.StandardLogger()
	s.BaseURL = &url.URL{}
	s.PublicDir = "dfdfd"

}
