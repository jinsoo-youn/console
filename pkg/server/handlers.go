package server

// func (r *Server) home(w http.ResponseWriter, r *http.Request) {
// 	w.Write([]byte("ok server is working"))
// }

// func (s *Server) indexHandler(w http.ResponseWriter, r *http.Request) {
// 	jsg := &jsGlobals{
// 		ConsoleVersion: "1.0.0",
// 		BasePath:       "/",
// 	}

// 	tpl := template.New("index.html")
// 	tpl.Delims("[[", "]]")
// 	tpls, err := tpl.ParseFiles(path.Join(s.PublicDir, ""))
// 	if err != nil {
// 		fmt.Printf("index.html not found in configured public-dir path: %v", err)
// 		os.Exit(1)
// 	}

// 	if err := tpls.ExecuteTemplate(w, "index.html", jsg); err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 	}
// }
