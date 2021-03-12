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
	"console/pkg/server"
	"fmt"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// serverCmd represents the server command
var serverCmd = &cobra.Command{
	Use:   "server",
	Short: "Run Web Server Only Serving Static Contents",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("server called")
		env := viper.GetViper()
		fmt.Println(env.AllSettings())

		srv, _ := server.NewServer(env)
		srv.Start()

	},
}

func init() {
	// Here you will define your flags and configuration settings.
	serverCmd.Flags().StringP("listen", "l", "http://0.0.0.0:3000", "listen Address")
	serverCmd.Flags().StringP("base-address", "b", "", "Format: <http | https>://domainOrIPAddress[:port]. Example: https://hypercloud.example.com.")
	serverCmd.Flags().StringP("base-path", "p", "/", "defalut base path")
	serverCmd.Flags().StringP("public-dir", "d", "./frontend/public/dist", "directory containing static web assets.")

	serverCmd.Flags().String("keycloak-realm", "", "Keycloak Realm Name")
	serverCmd.Flags().String("keycloak-auth-url", "", "URL of the Keycloak Auth server.")
	serverCmd.Flags().String("keycloak-client-id", "", "Keycloak Client Id")

	viper.BindPFlags(serverCmd.Flags())
	rootCmd.AddCommand(serverCmd)

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// serverCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// serverCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
