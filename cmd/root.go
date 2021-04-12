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

var (
	defaultServer = &hypercloud.HttpServer{}
)

// rootCmd represents the base command when called without any subcommands
var (
	cfgFile string
	cfg     *v1.Config

	log = logrus.New().WithField("MODULE", "CMD")

	rootCmd = &cobra.Command{
		Use:   "console",
		Short: "",
		Long:  ``,

		PersistentPreRun: func(cmd *cobra.Command, args []string) {
			log.WithField("FILE", "root.go").Println("CALL: root persistentPreRun")
			log.WithField("FILE", "root.go").Printf("On ROOT: %v \n", *cfg)
			err := v1.ValidateConfig(cfg)
			if err != nil {
				log.WithField("FILE", "root.go").Errorf("Validate Error: v1.ValidateConfig, line: 56 %v \n", err)
			}
			server, err := hypercloud.New(&cfg.ConsoleInfo)
			if err != nil {
				log.WithField("FILE", "root.go").Errorf("Error is occur while create default server %v \n", err)
			}
			log.WithField("FILE", "root.go").Printf("DEFAULT SERVER CONFIG: \n %v \n", server.DefaultConfig)
			server.Start(context.TODO())
			viper.Set("SERVER", server)
		},

		Run: func(cmd *cobra.Command, args []string) {
			cmd.HelpFunc()(cmd, args)
		},
	}
)

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	cobra.CheckErr(rootCmd.Execute())
}

// config file 로 받아서 서버 기동? 혹은 개별 flag 값으로 기동--> 둘다 만족 했으면 좋겠음
//

func init() {
	cfg = &v1.Config{}
	cobra.OnInitialize(initConfig)
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "./configs/console.yaml", "config file (default is $HOME/configs/console.yaml)")

	rootCmd.PersistentFlags().StringVar(&cfg.Listen, "listen", "http://0.0.0.0:3000", "listen Address")

	// rootCmd.PersistentFlags().StringP("listen", "l", "http://0.0.0.0:3000", "listen Address")
	// rootCmd.PersistentFlags().StringP("base-address", "b", "", "Format: <http | https>://domainOrIPAddress[:port]. Example: https://hypercloud.example.com.")
	// rootCmd.PersistentFlags().StringP("base-path", "p", "/", "defalut base path")
	// rootCmd.PersistentFlags().StringP("certFile", "", "./cert/ca.csr", "Cert file for TLS server")
	// rootCmd.PersistentFlags().StringP("keyFile", "", "./cert/ca.key", "Key file for TLS server")

	err := viper.BindPFlags(rootCmd.Flags())
	if err != nil {
		log.WithField("FILE", "root.go").Errorf("error: viper.BindPFlags, line: 88 %v \n", err)
	}

	rootCmd.AddCommand(serverCmd)
	rootCmd.AddCommand(proxyCmd)
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
		viper.SetConfigName("console")
	}
	viper.AutomaticEnv() // read in environment variables that match

	if err := viper.ReadInConfig(); err == nil {
		log.WithField("FILE", "root.go").Println("Using config file:", viper.ConfigFileUsed())
	}
	if err := viper.Unmarshal(&cfg); err != nil {
		log.WithField("FILE", "root.go").Errorf("Fail to unmarshal the config %v \n", err)
	}
	log.WithField("FILE", "root.go").Printf("config ==> \n %v \n", cfg)
}
