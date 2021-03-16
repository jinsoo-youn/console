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
	"context"

	v1 "console/pkg/api/v1"
	"console/pkg/hypercloud"

	homedir "github.com/mitchellh/go-homedir"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var cfgFile string
var cfg *v1.Config

var (
	defaultServer = &hypercloud.HttpServer{}
	log           = logrus.New().WithField("MODULE", "CMD")
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "console",
	Short: "A brief description of your application",
	Long: `A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	PersistentPreRun: func(cmd *cobra.Command, args []string) {

		log.WithField("FILE", "root.go").Println("root persistentPreRun called")

		log.WithField("FILE", "root.go").Printf("On ROOT: %v \n", *cfg)
		err := v1.ValidateConfig(cfg)
		if err != nil {
			log.WithField("FILE", "root.go").Errorf("Validate Error: v1.ValidateConfig, line: 56 %v \n", err)
		}

		defaultServer, _ := hypercloud.New(&cfg.ConsoleInfo)
		log.WithField("FILE", "root.go").Printf("Check server config: %v \n", defaultServer.DefaultConfig)
		defaultServer.Start(context.TODO())
		viper.Set("SERVER", defaultServer)
	},
	// Uncomment the following line if your bare application
	// has an action associated with it:
	// Run: func(cmd *cobra.Command, args []string) { },
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	cobra.CheckErr(rootCmd.Execute())
}

func init() {
	cobra.OnInitialize(initConfig)
	log.Println("root init func called")
	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.

	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "-c", "config file (default is $HOME/console.yaml)")

	rootCmd.Flags().StringP("listen", "l", "http://0.0.0.0:3000", "listen Address")
	rootCmd.Flags().StringP("base-address", "b", "", "Format: <http | https>://domainOrIPAddress[:port]. Example: https://hypercloud.example.com.")
	rootCmd.Flags().StringP("base-path", "p", "/", "defalut base path")
	rootCmd.Flags().StringP("certFile", "", "./cert/ca.csr", "Cert file for TLS server")
	rootCmd.Flags().StringP("keyFile", "", "./cert/ca.key", "Key file for TLS server")

	err := viper.BindPFlags(rootCmd.Flags())
	if err != nil {
		log.WithField("FILE", "root.go").Errorf("error: viper.BindPFlags, line: 88 %v \n", err)
	}
}

// initConfig reads in config file and ENV variables if set.
func initConfig() {
	if cfgFile != "" {
		// Use config file from the flag.
		viper.SetConfigFile(cfgFile)
	} else {
		// Find home directory.
		home, err := homedir.Dir()
		cobra.CheckErr(err)

		// Search config in home directory with name ".console" (without extension).
		viper.AddConfigPath(home)
		viper.SetConfigName(".console")
	}

	viper.AutomaticEnv() // read in environment variables that match
	// viper.Set("test", "test is ok ^_^")
	// If a config file is found, read it in.
	if err := viper.ReadInConfig(); err != nil {
		log.WithField("FILE", "root.go").Errorf("error: viper.ReadInConfig(), line: 111 %v \n", err)
	}

	viper.Unmarshal(&cfg)
	log.WithField("FILE", "root.go").Printf("%v \n", cfg)
}
