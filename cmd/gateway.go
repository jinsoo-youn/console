/*
Copyright © 2021 NAME HERE <EMAIL ADDRESS>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package cmd

import (
	v1 "console/pkg/api/v1"
	"console/pkg/config/dynamic"
	"console/pkg/console"
	"console/pkg/hypercloud"
	pServer "console/pkg/hypercloud"
	"console/pkg/hypercloud/provider/file"
	"console/pkg/hypercloud/proxy"
	"console/pkg/hypercloud/router"
	"console/pkg/hypercloud/safe"
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"strings"

	"github.com/openshift/library-go/pkg/crypto"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// serverCmd represents the server command
var serverCmd = &cobra.Command{
	Use: "gateway ( -f CONFIGFILE | [])",

	Short: "Run as API gateway",

	Long: `hypercloud api gateway`,

	Run: func(cmd *cobra.Command, args []string) {
		log.Infof("On SERVER: %v \n", *cfg)
		log.Infoln("Use Gateway handler")
		// Create Static handler
		err := v1.ValidateConfig(cfg)
		if err != nil {
			log.WithField("FILE", "root.go").Errorf("Validate Error: v1.ValidateConfig, line: 56 %v \n", err)
			os.Exit(1)
		}
		staticServer, err := console.New(cfg)
		if err != nil {
			log.Errorf("error occure when create console.New(cfg) %v \n", err)
		}
		staticHandler := staticServer.Gateway()

		// Get Default Server
		defaultServer = viper.Get("SERVER").(*hypercloud.HttpServer)

		var pvd = new(file.Provider)
		pvd.Watch = true
		dir, _ := os.Getwd()
		pvd.Filename = dir + "/configs/proxy.yaml"
		routinesPool := safe.NewPool(context.Background())
		watcher := pServer.NewWatcher(pvd, routinesPool)
		watcher.AddListener(switchRouter(staticHandler, defaultServer))
		watcher.Start()
	},
}

func init() {
}

// Create Router when changing proxy config
func switchRouter(defaultHandler http.Handler, proxySrv *pServer.HttpServer) func(config dynamic.Configuration) {
	return func(config dynamic.Configuration) {
		log.Info("===Starting SwitchRouter====")
		routerTemp, err := router.NewRouter()
		if err != nil {
			log.Info("Failed to create router ", err)
			// return nil, err
		}
		log.Infof("buildHandler : %v  \n", config.Routers)
		for name, value := range config.Routers {
			log.Infof("Create Hypercloud proxy based on %v: %v \n", name, value)
			backURL, err := url.Parse(value.Server)
			if err != nil {
				log.Error(errors.Wrapf(err, "URL Parsing failed for: %s", value.Server))
			}
			dhconfig := &proxy.Config{
				TLSClientConfig: &tls.Config{
					InsecureSkipVerify: true,
					CipherSuites:       crypto.DefaultCiphers(),
				},
				HeaderBlacklist: []string{"X-CSRFToken"},
				Endpoint:        backURL,
			}
			dhproxy := proxy.NewProxy(dhconfig)
			err = routerTemp.AddRoute(value.Rule, 0, http.StripPrefix(value.Path, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				token := r.Header.Clone().Get("Authorization")
				temp := strings.Split(token, "Bearer ")
				if len(temp) > 1 {
					token = temp[1]
				} else {
					token = temp[0]
				}
				// NOTE: query에 token 정보가 있을 시 해당 token으로 설정
				queryToken := r.URL.Query().Get("token")
				if queryToken != "" && token == "" {
					r.URL.Query().Del("token")
					token = queryToken
				}
				r.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
				dhproxy.ServeHTTP(w, r)
			})))
			if err != nil {
				log.Error("failed to put proxy handler into Router", err)
			}
		}
		err = routerTemp.AddRoute("PathPrefix(`/api/console/dynamic`)", 0, http.HandlerFunc(
			func(rw http.ResponseWriter, r *http.Request) {
				rw.Header().Set("Content-Type", "application/json")
				err := json.NewEncoder(rw).Encode(config)
				if err != nil {
					http.NotFound(rw, r)
					return
				}
			},
		))
		if err != nil {
			log.Error("/api/k8sAll/ has a problem", err)
		}

		err = routerTemp.AddRoute("PathPrefix(`/`)", 0, defaultHandler)
		if err != nil {
			log.Error("failed to put hypercloud proxy", err)
			// return nil, err
		}

		log.Info("===End SwitchRouter ===")
		log.Info("Call updateHandler --> routerTemp.Router")
		// olderSrv:=proxySrv.Handler.Switcher.GetHandler()

		if proxySrv.Switcher.GetHandler() == nil {
			proxySrv.Switcher.UpdateHandler(http.NotFoundHandler())
		}

		proxySrv.Switcher.UpdateHandler(routerTemp)

	}
}
