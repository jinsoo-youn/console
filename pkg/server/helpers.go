package server

import (
	"net/http"
	"strings"
)

func (s *Server) serverError(w http.ResponseWriter, err error) {

	http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
}

// func (s *Server) clientError(w http.ResponseWriter, status int) {
// 	http.Error(w, http.StatusText(status), status)
// }

// func (s *Server) notFound(w http.ResponseWriter) {
// 	s.clientError(w, http.StatusNotFound)
// }

func singleJoiningSlash(a, b string) string {
	aslash := strings.HasSuffix(a, "/")
	bslash := strings.HasPrefix(b, "/")
	switch {
	case aslash && bslash:
		return a + b[1:]
	case !aslash && !bslash:
		return a + "/" + b
	}
	return a + b
}
