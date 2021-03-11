package server

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/justinas/alice"
)

func (s *Server) routes() http.Handler {
	standardMiddleware := alice.New(s.recoverPanic, s.logRequest, secureHeaders)

	r := mux.NewRouter()

	r.HandleFunc("/", s.home)
	r.HandleFunc("/index", s.indexHandler)
	fileServer := http.FileServer(http.Dir(s.PublicDir))
	r.PathPrefix(singleJoiningSlash(s.BaseURL.Path, "/static/")).Handler(fileServer)

	return standardMiddleware.Then(r)

}
