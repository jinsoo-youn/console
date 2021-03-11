package server

import "net/http"

func (s *Server) home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("ok server is working"))
}
