package server

import (
	"fmt"
	"net/http"
	"strings"
)

type User struct {
	ID       string
	Username string
	Token    string
}

func (router *Router) tokenHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if router.ReleaseModeFlag {
			token := r.Header.Clone().Get("Authorization")
			temp := strings.Split(token, "Bearer ")
			if len(temp) > 1 {
				token = temp[1]
			} else {
				token = temp[0]
			}
			router.StaticUser.Token = token

			// NOTE: query에 token 정보가 있을 시 해당 token으로 설정
			queryToken := r.URL.Query().Get("token")
			if queryToken != "" && token == "" {
				r.URL.Query().Del("token")
				router.StaticUser.Token = queryToken
			}
		}
		next.ServeHTTP(w, r)
	})
}

func secureHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-XSS-Protection", "1; mode=block")
		w.Header().Set("X-Frame-Options", "deny")

		next.ServeHTTP(w, r)
	})
}

func (router *Router) logRequest(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Infof("%s - %s %s %s", r.RemoteAddr, r.Proto, r.Method, r.URL.RequestURI())
		next.ServeHTTP(w, r)
	})
}

func (router *Router) recoverPanic(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				w.Header().Set("Connection", "close")
				router.serverError(w, fmt.Errorf("%s", err))
			}
		}()

		next.ServeHTTP(w, r)
	})
}
