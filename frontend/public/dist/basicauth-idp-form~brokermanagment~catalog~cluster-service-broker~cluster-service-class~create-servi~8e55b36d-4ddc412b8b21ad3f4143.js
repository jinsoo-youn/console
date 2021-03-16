(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basicauth-idp-form~brokermanagment~catalog~cluster-service-broker~cluster-service-class~create-servi~8e55b36d"],{

/***/ "./public/components/catalog/catalog-item-icon.tsx":
/*!*********************************************************!*\
  !*** ./public/components/catalog/catalog-item-icon.tsx ***!
  \*********************************************************/
/*! exports provided: normalizeIconClass, getImageForIconClass, getServiceClassIcon, getServiceClassImage, getImageStreamIcon, getTemplateIcon, ClusterServiceClassIcon, ImageStreamIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeIconClass", function() { return normalizeIconClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageForIconClass", function() { return getImageForIconClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceClassIcon", function() { return getServiceClassIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceClassImage", function() { return getServiceClassImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageStreamIcon", function() { return getImageStreamIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateIcon", function() { return getTemplateIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceClassIcon", function() { return ClusterServiceClassIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamIcon", function() { return ImageStreamIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_logos_3scale_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imgs/logos/3scale.svg */ "./public/imgs/logos/3scale.svg");
/* harmony import */ var _imgs_logos_3scale_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_3scale_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imgs_logos_aerogear_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imgs/logos/aerogear.svg */ "./public/imgs/logos/aerogear.svg");
/* harmony import */ var _imgs_logos_aerogear_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_aerogear_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_logos_amq_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imgs/logos/amq.svg */ "./public/imgs/logos/amq.svg");
/* harmony import */ var _imgs_logos_amq_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_amq_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _imgs_logos_angularjs_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../imgs/logos/angularjs.svg */ "./public/imgs/logos/angularjs.svg");
/* harmony import */ var _imgs_logos_angularjs_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_angularjs_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imgs_logos_ansible_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imgs/logos/ansible.svg */ "./public/imgs/logos/ansible.svg");
/* harmony import */ var _imgs_logos_ansible_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_ansible_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _imgs_logos_apache_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../imgs/logos/apache.svg */ "./public/imgs/logos/apache.svg");
/* harmony import */ var _imgs_logos_apache_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_apache_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _imgs_logos_beaker_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imgs/logos/beaker.svg */ "./public/imgs/logos/beaker.svg");
/* harmony import */ var _imgs_logos_beaker_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_beaker_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _imgs_logos_camel_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imgs/logos/camel.svg */ "./public/imgs/logos/camel.svg");
/* harmony import */ var _imgs_logos_camel_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_camel_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _imgs_logos_capedwarf_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../imgs/logos/capedwarf.svg */ "./public/imgs/logos/capedwarf.svg");
/* harmony import */ var _imgs_logos_capedwarf_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_capedwarf_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imgs/logos/catalog-icon.svg */ "./public/imgs/logos/catalog-icon.svg");
/* harmony import */ var _imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _imgs_logos_cassandra_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../imgs/logos/cassandra.svg */ "./public/imgs/logos/cassandra.svg");
/* harmony import */ var _imgs_logos_cassandra_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_cassandra_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _imgs_logos_clojure_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../imgs/logos/clojure.svg */ "./public/imgs/logos/clojure.svg");
/* harmony import */ var _imgs_logos_clojure_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_clojure_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _imgs_logos_codeigniter_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../imgs/logos/codeigniter.svg */ "./public/imgs/logos/codeigniter.svg");
/* harmony import */ var _imgs_logos_codeigniter_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_codeigniter_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _imgs_logos_cordova_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../imgs/logos/cordova.png */ "./public/imgs/logos/cordova.png");
/* harmony import */ var _imgs_logos_cordova_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_cordova_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _imgs_logos_datagrid_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../imgs/logos/datagrid.svg */ "./public/imgs/logos/datagrid.svg");
/* harmony import */ var _imgs_logos_datagrid_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_datagrid_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _imgs_logos_datavirt_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../imgs/logos/datavirt.svg */ "./public/imgs/logos/datavirt.svg");
/* harmony import */ var _imgs_logos_datavirt_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_datavirt_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _imgs_logos_debian_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../imgs/logos/debian.svg */ "./public/imgs/logos/debian.svg");
/* harmony import */ var _imgs_logos_debian_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_debian_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _imgs_logos_decisionserver_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../imgs/logos/decisionserver.svg */ "./public/imgs/logos/decisionserver.svg");
/* harmony import */ var _imgs_logos_decisionserver_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_decisionserver_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _imgs_logos_django_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../imgs/logos/django.svg */ "./public/imgs/logos/django.svg");
/* harmony import */ var _imgs_logos_django_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_django_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _imgs_logos_dotnet_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../imgs/logos/dotnet.svg */ "./public/imgs/logos/dotnet.svg");
/* harmony import */ var _imgs_logos_dotnet_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_dotnet_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _imgs_logos_drupal_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../imgs/logos/drupal.svg */ "./public/imgs/logos/drupal.svg");
/* harmony import */ var _imgs_logos_drupal_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_drupal_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _imgs_logos_eap_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../imgs/logos/eap.svg */ "./public/imgs/logos/eap.svg");
/* harmony import */ var _imgs_logos_eap_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_eap_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _imgs_logos_elastic_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../imgs/logos/elastic.svg */ "./public/imgs/logos/elastic.svg");
/* harmony import */ var _imgs_logos_elastic_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_elastic_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _imgs_logos_erlang_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../imgs/logos/erlang.svg */ "./public/imgs/logos/erlang.svg");
/* harmony import */ var _imgs_logos_erlang_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_erlang_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _imgs_logos_fedora_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../imgs/logos/fedora.svg */ "./public/imgs/logos/fedora.svg");
/* harmony import */ var _imgs_logos_fedora_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_fedora_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _imgs_logos_freebsd_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../imgs/logos/freebsd.svg */ "./public/imgs/logos/freebsd.svg");
/* harmony import */ var _imgs_logos_freebsd_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_freebsd_svg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _imgs_logos_git_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../imgs/logos/git.svg */ "./public/imgs/logos/git.svg");
/* harmony import */ var _imgs_logos_git_svg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_git_svg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _imgs_logos_github_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../imgs/logos/github.svg */ "./public/imgs/logos/github.svg");
/* harmony import */ var _imgs_logos_github_svg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_github_svg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _imgs_logos_gitlab_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../imgs/logos/gitlab.svg */ "./public/imgs/logos/gitlab.svg");
/* harmony import */ var _imgs_logos_gitlab_svg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_gitlab_svg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _imgs_logos_glassfish_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../imgs/logos/glassfish.svg */ "./public/imgs/logos/glassfish.svg");
/* harmony import */ var _imgs_logos_glassfish_svg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_glassfish_svg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _imgs_logos_golang_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../imgs/logos/golang.svg */ "./public/imgs/logos/golang.svg");
/* harmony import */ var _imgs_logos_golang_svg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_golang_svg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _imgs_logos_grails_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../imgs/logos/grails.svg */ "./public/imgs/logos/grails.svg");
/* harmony import */ var _imgs_logos_grails_svg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_grails_svg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _imgs_logos_hadoop_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../imgs/logos/hadoop.svg */ "./public/imgs/logos/hadoop.svg");
/* harmony import */ var _imgs_logos_hadoop_svg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_hadoop_svg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _imgs_logos_haproxy_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../imgs/logos/haproxy.svg */ "./public/imgs/logos/haproxy.svg");
/* harmony import */ var _imgs_logos_haproxy_svg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_haproxy_svg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _imgs_logos_helm_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../imgs/logos/helm.svg */ "./public/imgs/logos/helm.svg");
/* harmony import */ var _imgs_logos_helm_svg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_helm_svg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _imgs_logos_infinispan_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../imgs/logos/infinispan.svg */ "./public/imgs/logos/infinispan.svg");
/* harmony import */ var _imgs_logos_infinispan_svg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_infinispan_svg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _imgs_logos_jboss_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../imgs/logos/jboss.svg */ "./public/imgs/logos/jboss.svg");
/* harmony import */ var _imgs_logos_jboss_svg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_jboss_svg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _imgs_logos_jenkins_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../imgs/logos/jenkins.svg */ "./public/imgs/logos/jenkins.svg");
/* harmony import */ var _imgs_logos_jenkins_svg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_jenkins_svg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _imgs_logos_jetty_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../imgs/logos/jetty.svg */ "./public/imgs/logos/jetty.svg");
/* harmony import */ var _imgs_logos_jetty_svg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_jetty_svg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _imgs_logos_joomla_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../imgs/logos/joomla.svg */ "./public/imgs/logos/joomla.svg");
/* harmony import */ var _imgs_logos_joomla_svg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_joomla_svg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _imgs_logos_jruby_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../imgs/logos/jruby.svg */ "./public/imgs/logos/jruby.svg");
/* harmony import */ var _imgs_logos_jruby_svg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_jruby_svg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _imgs_logos_js_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../imgs/logos/js.svg */ "./public/imgs/logos/js.svg");
/* harmony import */ var _imgs_logos_js_svg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_js_svg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _imgs_logos_knative_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../imgs/logos/knative.svg */ "./public/imgs/logos/knative.svg");
/* harmony import */ var _imgs_logos_knative_svg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_knative_svg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _imgs_logos_kubevirt_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../imgs/logos/kubevirt.svg */ "./public/imgs/logos/kubevirt.svg");
/* harmony import */ var _imgs_logos_kubevirt_svg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_kubevirt_svg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _imgs_logos_laravel_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../imgs/logos/laravel.svg */ "./public/imgs/logos/laravel.svg");
/* harmony import */ var _imgs_logos_laravel_svg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_laravel_svg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _imgs_logos_load_balancer_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../imgs/logos/load-balancer.svg */ "./public/imgs/logos/load-balancer.svg");
/* harmony import */ var _imgs_logos_load_balancer_svg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_load_balancer_svg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _imgs_logos_mariadb_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../imgs/logos/mariadb.svg */ "./public/imgs/logos/mariadb.svg");
/* harmony import */ var _imgs_logos_mariadb_svg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_mariadb_svg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _imgs_logos_mediawiki_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../imgs/logos/mediawiki.svg */ "./public/imgs/logos/mediawiki.svg");
/* harmony import */ var _imgs_logos_mediawiki_svg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_mediawiki_svg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _imgs_logos_memcached_svg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../imgs/logos/memcached.svg */ "./public/imgs/logos/memcached.svg");
/* harmony import */ var _imgs_logos_memcached_svg__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_memcached_svg__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _imgs_logos_mongodb_svg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../imgs/logos/mongodb.svg */ "./public/imgs/logos/mongodb.svg");
/* harmony import */ var _imgs_logos_mongodb_svg__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_mongodb_svg__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _imgs_logos_mssql_svg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../imgs/logos/mssql.svg */ "./public/imgs/logos/mssql.svg");
/* harmony import */ var _imgs_logos_mssql_svg__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_mssql_svg__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _imgs_logos_mysql_database_svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../imgs/logos/mysql-database.svg */ "./public/imgs/logos/mysql-database.svg");
/* harmony import */ var _imgs_logos_mysql_database_svg__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_mysql_database_svg__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _imgs_logos_nginx_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../imgs/logos/nginx.svg */ "./public/imgs/logos/nginx.svg");
/* harmony import */ var _imgs_logos_nginx_svg__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_nginx_svg__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _imgs_logos_nodejs_svg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../imgs/logos/nodejs.svg */ "./public/imgs/logos/nodejs.svg");
/* harmony import */ var _imgs_logos_nodejs_svg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_nodejs_svg__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _imgs_logos_openjdk_svg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../imgs/logos/openjdk.svg */ "./public/imgs/logos/openjdk.svg");
/* harmony import */ var _imgs_logos_openjdk_svg__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_openjdk_svg__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _imgs_logos_redhat_svg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../imgs/logos/redhat.svg */ "./public/imgs/logos/redhat.svg");
/* harmony import */ var _imgs_logos_redhat_svg__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_redhat_svg__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _imgs_logos_openliberty_svg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../imgs/logos/openliberty.svg */ "./public/imgs/logos/openliberty.svg");
/* harmony import */ var _imgs_logos_openliberty_svg__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_openliberty_svg__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _imgs_logos_openshift_svg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../imgs/logos/openshift.svg */ "./public/imgs/logos/openshift.svg");
/* harmony import */ var _imgs_logos_openshift_svg__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_openshift_svg__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _imgs_logos_openstack_svg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../imgs/logos/openstack.svg */ "./public/imgs/logos/openstack.svg");
/* harmony import */ var _imgs_logos_openstack_svg__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_openstack_svg__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _imgs_logos_other_linux_svg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../imgs/logos/other-linux.svg */ "./public/imgs/logos/other-linux.svg");
/* harmony import */ var _imgs_logos_other_linux_svg__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_other_linux_svg__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _imgs_logos_other_unknown_svg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../imgs/logos/other-unknown.svg */ "./public/imgs/logos/other-unknown.svg");
/* harmony import */ var _imgs_logos_other_unknown_svg__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_other_unknown_svg__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _imgs_logos_perl_svg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../imgs/logos/perl.svg */ "./public/imgs/logos/perl.svg");
/* harmony import */ var _imgs_logos_perl_svg__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_perl_svg__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _imgs_logos_phalcon_svg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../imgs/logos/phalcon.svg */ "./public/imgs/logos/phalcon.svg");
/* harmony import */ var _imgs_logos_phalcon_svg__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_phalcon_svg__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _imgs_logos_php_svg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../imgs/logos/php.svg */ "./public/imgs/logos/php.svg");
/* harmony import */ var _imgs_logos_php_svg__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_php_svg__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _imgs_logos_play_svg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../imgs/logos/play.svg */ "./public/imgs/logos/play.svg");
/* harmony import */ var _imgs_logos_play_svg__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_play_svg__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _imgs_logos_postgresql_svg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../imgs/logos/postgresql.svg */ "./public/imgs/logos/postgresql.svg");
/* harmony import */ var _imgs_logos_postgresql_svg__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_postgresql_svg__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _imgs_logos_processserver_svg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../imgs/logos/processserver.svg */ "./public/imgs/logos/processserver.svg");
/* harmony import */ var _imgs_logos_processserver_svg__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_processserver_svg__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _imgs_logos_python_svg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../../imgs/logos/python.svg */ "./public/imgs/logos/python.svg");
/* harmony import */ var _imgs_logos_python_svg__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_python_svg__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _imgs_logos_quarkus_svg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../imgs/logos/quarkus.svg */ "./public/imgs/logos/quarkus.svg");
/* harmony import */ var _imgs_logos_quarkus_svg__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_quarkus_svg__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _imgs_logos_rabbitmq_svg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../../imgs/logos/rabbitmq.svg */ "./public/imgs/logos/rabbitmq.svg");
/* harmony import */ var _imgs_logos_rabbitmq_svg__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_rabbitmq_svg__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _imgs_logos_rails_svg__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../../imgs/logos/rails.svg */ "./public/imgs/logos/rails.svg");
/* harmony import */ var _imgs_logos_rails_svg__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_rails_svg__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var _imgs_logos_redis_svg__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../../imgs/logos/redis.svg */ "./public/imgs/logos/redis.svg");
/* harmony import */ var _imgs_logos_redis_svg__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_redis_svg__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var _imgs_logos_rh_integration_svg__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../../imgs/logos/rh-integration.svg */ "./public/imgs/logos/rh-integration.svg");
/* harmony import */ var _imgs_logos_rh_integration_svg__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_rh_integration_svg__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var _imgs_logos_rh_spring_boot_svg__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../../imgs/logos/rh-spring-boot.svg */ "./public/imgs/logos/rh-spring-boot.svg");
/* harmony import */ var _imgs_logos_rh_spring_boot_svg__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_rh_spring_boot_svg__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var _imgs_logos_rh_tomcat_svg__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../imgs/logos/rh-tomcat.svg */ "./public/imgs/logos/rh-tomcat.svg");
/* harmony import */ var _imgs_logos_rh_tomcat_svg__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_rh_tomcat_svg__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var _imgs_logos_ruby_svg__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../../imgs/logos/ruby.svg */ "./public/imgs/logos/ruby.svg");
/* harmony import */ var _imgs_logos_ruby_svg__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_ruby_svg__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var _imgs_logos_scala_svg__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../../imgs/logos/scala.svg */ "./public/imgs/logos/scala.svg");
/* harmony import */ var _imgs_logos_scala_svg__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_scala_svg__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var _imgs_logos_shadowman_svg__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../../imgs/logos/shadowman.svg */ "./public/imgs/logos/shadowman.svg");
/* harmony import */ var _imgs_logos_shadowman_svg__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_shadowman_svg__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _imgs_logos_spring_svg__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../../imgs/logos/spring.svg */ "./public/imgs/logos/spring.svg");
/* harmony import */ var _imgs_logos_spring_svg__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_spring_svg__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var _imgs_logos_spring_boot_svg__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../../imgs/logos/spring-boot.svg */ "./public/imgs/logos/spring-boot.svg");
/* harmony import */ var _imgs_logos_spring_boot_svg__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_spring_boot_svg__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _imgs_logos_sso_svg__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../../imgs/logos/sso.svg */ "./public/imgs/logos/sso.svg");
/* harmony import */ var _imgs_logos_sso_svg__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_sso_svg__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var _imgs_logos_stackoverflow_svg__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../../imgs/logos/stackoverflow.svg */ "./public/imgs/logos/stackoverflow.svg");
/* harmony import */ var _imgs_logos_stackoverflow_svg__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_stackoverflow_svg__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var _imgs_logos_suse_svg__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../imgs/logos/suse.svg */ "./public/imgs/logos/suse.svg");
/* harmony import */ var _imgs_logos_suse_svg__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_suse_svg__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var _imgs_logos_symfony_svg__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../../imgs/logos/symfony.svg */ "./public/imgs/logos/symfony.svg");
/* harmony import */ var _imgs_logos_symfony_svg__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_symfony_svg__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var _imgs_logos_tomcat_svg__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../imgs/logos/tomcat.svg */ "./public/imgs/logos/tomcat.svg");
/* harmony import */ var _imgs_logos_tomcat_svg__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_tomcat_svg__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var _imgs_logos_ubuntu_svg__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../imgs/logos/ubuntu.svg */ "./public/imgs/logos/ubuntu.svg");
/* harmony import */ var _imgs_logos_ubuntu_svg__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_ubuntu_svg__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var _imgs_logos_vertx_svg__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../imgs/logos/vertx.svg */ "./public/imgs/logos/vertx.svg");
/* harmony import */ var _imgs_logos_vertx_svg__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_vertx_svg__WEBPACK_IMPORTED_MODULE_89__);
/* harmony import */ var _imgs_logos_wildfly_svg__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../imgs/logos/wildfly.svg */ "./public/imgs/logos/wildfly.svg");
/* harmony import */ var _imgs_logos_wildfly_svg__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_wildfly_svg__WEBPACK_IMPORTED_MODULE_90__);
/* harmony import */ var _imgs_logos_windows_svg__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../imgs/logos/windows.svg */ "./public/imgs/logos/windows.svg");
/* harmony import */ var _imgs_logos_windows_svg__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_windows_svg__WEBPACK_IMPORTED_MODULE_91__);
/* harmony import */ var _imgs_logos_wordpress_svg__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../../imgs/logos/wordpress.svg */ "./public/imgs/logos/wordpress.svg");
/* harmony import */ var _imgs_logos_wordpress_svg__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_wordpress_svg__WEBPACK_IMPORTED_MODULE_92__);
/* harmony import */ var _imgs_logos_xamarin_svg__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../../imgs/logos/xamarin.svg */ "./public/imgs/logos/xamarin.svg");
/* harmony import */ var _imgs_logos_xamarin_svg__WEBPACK_IMPORTED_MODULE_93___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_xamarin_svg__WEBPACK_IMPORTED_MODULE_93__);
/* harmony import */ var _imgs_logos_zend_svg__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../imgs/logos/zend.svg */ "./public/imgs/logos/zend.svg");
/* harmony import */ var _imgs_logos_zend_svg__WEBPACK_IMPORTED_MODULE_94___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_zend_svg__WEBPACK_IMPORTED_MODULE_94__);































































































const logos = new Map()
    .set('icon-3scale', _imgs_logos_3scale_svg__WEBPACK_IMPORTED_MODULE_3__)
    .set('icon-aerogear', _imgs_logos_aerogear_svg__WEBPACK_IMPORTED_MODULE_4__)
    .set('icon-amq', _imgs_logos_amq_svg__WEBPACK_IMPORTED_MODULE_5__)
    .set('icon-angularjs', _imgs_logos_angularjs_svg__WEBPACK_IMPORTED_MODULE_6__)
    .set('icon-ansible', _imgs_logos_ansible_svg__WEBPACK_IMPORTED_MODULE_7__)
    .set('icon-apache', _imgs_logos_apache_svg__WEBPACK_IMPORTED_MODULE_8__)
    .set('icon-beaker', _imgs_logos_beaker_svg__WEBPACK_IMPORTED_MODULE_9__)
    .set('icon-camel', _imgs_logos_camel_svg__WEBPACK_IMPORTED_MODULE_10__)
    .set('icon-capedwarf', _imgs_logos_capedwarf_svg__WEBPACK_IMPORTED_MODULE_11__)
    .set('icon-catalog', _imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_12__)
    .set('icon-cassandra', _imgs_logos_cassandra_svg__WEBPACK_IMPORTED_MODULE_13__)
    .set('icon-clojure', _imgs_logos_clojure_svg__WEBPACK_IMPORTED_MODULE_14__)
    .set('icon-codeigniter', _imgs_logos_codeigniter_svg__WEBPACK_IMPORTED_MODULE_15__)
    .set('icon-cordova', _imgs_logos_cordova_png__WEBPACK_IMPORTED_MODULE_16__)
    .set('icon-datagrid', _imgs_logos_datagrid_svg__WEBPACK_IMPORTED_MODULE_17__)
    .set('icon-datavirt', _imgs_logos_datavirt_svg__WEBPACK_IMPORTED_MODULE_18__)
    .set('icon-debian', _imgs_logos_debian_svg__WEBPACK_IMPORTED_MODULE_19__)
    .set('icon-decisionserver', _imgs_logos_decisionserver_svg__WEBPACK_IMPORTED_MODULE_20__)
    .set('icon-django', _imgs_logos_django_svg__WEBPACK_IMPORTED_MODULE_21__)
    .set('icon-dotnet', _imgs_logos_dotnet_svg__WEBPACK_IMPORTED_MODULE_22__)
    .set('icon-drupal', _imgs_logos_drupal_svg__WEBPACK_IMPORTED_MODULE_23__)
    .set('icon-eap', _imgs_logos_eap_svg__WEBPACK_IMPORTED_MODULE_24__)
    .set('icon-elastic', _imgs_logos_elastic_svg__WEBPACK_IMPORTED_MODULE_25__)
    .set('icon-erlang', _imgs_logos_erlang_svg__WEBPACK_IMPORTED_MODULE_26__)
    .set('icon-fedora', _imgs_logos_fedora_svg__WEBPACK_IMPORTED_MODULE_27__)
    .set('icon-freebsd', _imgs_logos_freebsd_svg__WEBPACK_IMPORTED_MODULE_28__)
    .set('icon-git', _imgs_logos_git_svg__WEBPACK_IMPORTED_MODULE_29__)
    .set('icon-github', _imgs_logos_github_svg__WEBPACK_IMPORTED_MODULE_30__)
    .set('icon-gitlab', _imgs_logos_gitlab_svg__WEBPACK_IMPORTED_MODULE_31__)
    .set('icon-glassfish', _imgs_logos_glassfish_svg__WEBPACK_IMPORTED_MODULE_32__)
    .set('icon-go-gopher', _imgs_logos_golang_svg__WEBPACK_IMPORTED_MODULE_33__)
    .set('icon-golang', _imgs_logos_golang_svg__WEBPACK_IMPORTED_MODULE_33__)
    .set('icon-grails', _imgs_logos_grails_svg__WEBPACK_IMPORTED_MODULE_34__)
    .set('icon-hadoop', _imgs_logos_hadoop_svg__WEBPACK_IMPORTED_MODULE_35__)
    .set('icon-haproxy', _imgs_logos_haproxy_svg__WEBPACK_IMPORTED_MODULE_36__)
    .set('icon-helm', _imgs_logos_helm_svg__WEBPACK_IMPORTED_MODULE_37__)
    .set('icon-infinispan', _imgs_logos_infinispan_svg__WEBPACK_IMPORTED_MODULE_38__)
    .set('icon-jboss', _imgs_logos_jboss_svg__WEBPACK_IMPORTED_MODULE_39__)
    .set('icon-jenkins', _imgs_logos_jenkins_svg__WEBPACK_IMPORTED_MODULE_40__)
    .set('icon-jetty', _imgs_logos_jetty_svg__WEBPACK_IMPORTED_MODULE_41__)
    .set('icon-joomla', _imgs_logos_joomla_svg__WEBPACK_IMPORTED_MODULE_42__)
    .set('icon-jruby', _imgs_logos_jruby_svg__WEBPACK_IMPORTED_MODULE_43__)
    .set('icon-js', _imgs_logos_js_svg__WEBPACK_IMPORTED_MODULE_44__)
    .set('icon-knative', _imgs_logos_knative_svg__WEBPACK_IMPORTED_MODULE_45__)
    .set('icon-kubevirt', _imgs_logos_kubevirt_svg__WEBPACK_IMPORTED_MODULE_46__)
    .set('icon-laravel', _imgs_logos_laravel_svg__WEBPACK_IMPORTED_MODULE_47__)
    .set('icon-load-balancer', _imgs_logos_load_balancer_svg__WEBPACK_IMPORTED_MODULE_48__)
    .set('icon-mariadb', _imgs_logos_mariadb_svg__WEBPACK_IMPORTED_MODULE_49__)
    .set('icon-mediawiki', _imgs_logos_mediawiki_svg__WEBPACK_IMPORTED_MODULE_50__)
    .set('icon-memcached', _imgs_logos_memcached_svg__WEBPACK_IMPORTED_MODULE_51__)
    .set('icon-mongodb', _imgs_logos_mongodb_svg__WEBPACK_IMPORTED_MODULE_52__)
    .set('icon-mssql', _imgs_logos_mssql_svg__WEBPACK_IMPORTED_MODULE_53__)
    .set('icon-mysql-database', _imgs_logos_mysql_database_svg__WEBPACK_IMPORTED_MODULE_54__)
    .set('icon-nginx', _imgs_logos_nginx_svg__WEBPACK_IMPORTED_MODULE_55__)
    .set('icon-nodejs', _imgs_logos_nodejs_svg__WEBPACK_IMPORTED_MODULE_56__)
    .set('icon-openjdk', _imgs_logos_openjdk_svg__WEBPACK_IMPORTED_MODULE_57__)
    .set('icon-openliberty', _imgs_logos_openliberty_svg__WEBPACK_IMPORTED_MODULE_59__)
    .set('icon-openshift', _imgs_logos_openshift_svg__WEBPACK_IMPORTED_MODULE_60__)
    .set('icon-openstack', _imgs_logos_openstack_svg__WEBPACK_IMPORTED_MODULE_61__)
    .set('icon-other-linux', _imgs_logos_other_linux_svg__WEBPACK_IMPORTED_MODULE_62__)
    .set('icon-other-unknown', _imgs_logos_other_unknown_svg__WEBPACK_IMPORTED_MODULE_63__)
    .set('icon-perl', _imgs_logos_perl_svg__WEBPACK_IMPORTED_MODULE_64__)
    .set('icon-phalcon', _imgs_logos_phalcon_svg__WEBPACK_IMPORTED_MODULE_65__)
    .set('icon-php', _imgs_logos_php_svg__WEBPACK_IMPORTED_MODULE_66__)
    .set('icon-play', _imgs_logos_play_svg__WEBPACK_IMPORTED_MODULE_67__)
    .set('icon-postgresql', _imgs_logos_postgresql_svg__WEBPACK_IMPORTED_MODULE_68__)
    .set('icon-processserver', _imgs_logos_processserver_svg__WEBPACK_IMPORTED_MODULE_69__)
    .set('icon-python', _imgs_logos_python_svg__WEBPACK_IMPORTED_MODULE_70__)
    .set('icon-quarkus', _imgs_logos_quarkus_svg__WEBPACK_IMPORTED_MODULE_71__)
    .set('icon-rabbitmq', _imgs_logos_rabbitmq_svg__WEBPACK_IMPORTED_MODULE_72__)
    .set('icon-rails', _imgs_logos_rails_svg__WEBPACK_IMPORTED_MODULE_73__)
    .set('icon-redis', _imgs_logos_redis_svg__WEBPACK_IMPORTED_MODULE_74__)
    .set('icon-rh-integration', _imgs_logos_rh_integration_svg__WEBPACK_IMPORTED_MODULE_75__)
    .set('icon-rh-spring-boot', _imgs_logos_rh_spring_boot_svg__WEBPACK_IMPORTED_MODULE_76__)
    .set('icon-java', _imgs_logos_openjdk_svg__WEBPACK_IMPORTED_MODULE_57__)
    // Use the upstream icon.
    .set('icon-redhat', _imgs_logos_redhat_svg__WEBPACK_IMPORTED_MODULE_58__)
    .set('icon-rh-openjdk', _imgs_logos_openjdk_svg__WEBPACK_IMPORTED_MODULE_57__)
    .set('icon-rh-tomcat', _imgs_logos_rh_tomcat_svg__WEBPACK_IMPORTED_MODULE_77__)
    .set('icon-ruby', _imgs_logos_ruby_svg__WEBPACK_IMPORTED_MODULE_78__)
    .set('icon-scala', _imgs_logos_scala_svg__WEBPACK_IMPORTED_MODULE_79__)
    .set('icon-shadowman', _imgs_logos_shadowman_svg__WEBPACK_IMPORTED_MODULE_80__)
    .set('icon-spring', _imgs_logos_spring_svg__WEBPACK_IMPORTED_MODULE_81__)
    .set('icon-spring-boot', _imgs_logos_spring_boot_svg__WEBPACK_IMPORTED_MODULE_82__)
    .set('icon-sso', _imgs_logos_sso_svg__WEBPACK_IMPORTED_MODULE_83__)
    .set('icon-stackoverflow', _imgs_logos_stackoverflow_svg__WEBPACK_IMPORTED_MODULE_84__)
    .set('icon-suse', _imgs_logos_suse_svg__WEBPACK_IMPORTED_MODULE_85__)
    .set('icon-symfony', _imgs_logos_symfony_svg__WEBPACK_IMPORTED_MODULE_86__)
    .set('icon-tomcat', _imgs_logos_tomcat_svg__WEBPACK_IMPORTED_MODULE_87__)
    .set('icon-ubuntu', _imgs_logos_ubuntu_svg__WEBPACK_IMPORTED_MODULE_88__)
    .set('icon-vertx', _imgs_logos_vertx_svg__WEBPACK_IMPORTED_MODULE_89__)
    .set('icon-wildfly', _imgs_logos_wildfly_svg__WEBPACK_IMPORTED_MODULE_90__)
    .set('icon-windows', _imgs_logos_windows_svg__WEBPACK_IMPORTED_MODULE_91__)
    .set('icon-wordpress', _imgs_logos_wordpress_svg__WEBPACK_IMPORTED_MODULE_92__)
    .set('icon-xamarin', _imgs_logos_xamarin_svg__WEBPACK_IMPORTED_MODULE_93__)
    .set('icon-zend', _imgs_logos_zend_svg__WEBPACK_IMPORTED_MODULE_94__);
const normalizeIconClass = (iconClass) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["startsWith"](iconClass, 'icon-') ? `font-icon ${iconClass}` : iconClass;
};
const getImageForIconClass = (iconClass) => {
    return logos.get(iconClass);
};
const getServiceClassIcon = (serviceClass) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, ['spec', 'externalMetadata', 'console.openshift.io/iconClass'], logos.get('icon-catalog'));
};
const getServiceClassImage = (serviceClass) => {
    const iconClass = getServiceClassIcon(serviceClass);
    const iconClassImg = getImageForIconClass(iconClass);
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, ['spec', 'externalMetadata', 'imageUrl']) || iconClassImg;
};
const getImageStreamIcon = (tag) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](tag, 'annotations.iconClass');
};
const getTemplateIcon = (template) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](template, 'metadata.annotations.iconClass');
};
const ClusterServiceClassIcon = ({ serviceClass, iconSize, }) => {
    const iconClass = getServiceClassIcon(serviceClass);
    const imageUrl = getServiceClassImage(serviceClass);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-icon" }, imageUrl ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-catalog-item-icon__img', iconSize && `co-catalog-item-icon__img--${iconSize}`), src: imageUrl })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-catalog-item-icon__icon', iconSize && `co-catalog-item-icon__icon--${iconSize}`, normalizeIconClass(iconClass)) }))));
};
ClusterServiceClassIcon.displayName = 'ClusterServiceClassIcon';
const ImageStreamIcon = ({ tag, iconSize }) => {
    const iconClass = getImageStreamIcon(tag);
    const iconClassImg = getImageForIconClass(iconClass);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-icon" }, iconClassImg ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-catalog-item-icon__img', iconSize && `co-catalog-item-icon__img--${iconSize}`), src: iconClassImg })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-catalog-item-icon__icon', iconSize && `co-catalog-item-icon__icon--${iconSize}`, normalizeIconClass(iconClass)) }))));
};


/***/ }),

/***/ "./public/imgs/logos/3scale.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/3scale.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3scale.svg";

/***/ }),

/***/ "./public/imgs/logos/aerogear.svg":
/*!****************************************!*\
  !*** ./public/imgs/logos/aerogear.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/aerogear.svg";

/***/ }),

/***/ "./public/imgs/logos/amq.svg":
/*!***********************************!*\
  !*** ./public/imgs/logos/amq.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/amq.svg";

/***/ }),

/***/ "./public/imgs/logos/angularjs.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/angularjs.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/angularjs.svg";

/***/ }),

/***/ "./public/imgs/logos/ansible.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/ansible.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ansible.svg";

/***/ }),

/***/ "./public/imgs/logos/apache.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/apache.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/apache.svg";

/***/ }),

/***/ "./public/imgs/logos/beaker.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/beaker.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/beaker.svg";

/***/ }),

/***/ "./public/imgs/logos/camel.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/camel.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/camel.svg";

/***/ }),

/***/ "./public/imgs/logos/capedwarf.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/capedwarf.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/capedwarf.svg";

/***/ }),

/***/ "./public/imgs/logos/cassandra.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/cassandra.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/cassandra.svg";

/***/ }),

/***/ "./public/imgs/logos/catalog-icon.svg":
/*!********************************************!*\
  !*** ./public/imgs/logos/catalog-icon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/catalog-icon.svg";

/***/ }),

/***/ "./public/imgs/logos/clojure.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/clojure.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/clojure.svg";

/***/ }),

/***/ "./public/imgs/logos/codeigniter.svg":
/*!*******************************************!*\
  !*** ./public/imgs/logos/codeigniter.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/codeigniter.svg";

/***/ }),

/***/ "./public/imgs/logos/cordova.png":
/*!***************************************!*\
  !*** ./public/imgs/logos/cordova.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/cordova.png";

/***/ }),

/***/ "./public/imgs/logos/datagrid.svg":
/*!****************************************!*\
  !*** ./public/imgs/logos/datagrid.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/datagrid.svg";

/***/ }),

/***/ "./public/imgs/logos/datavirt.svg":
/*!****************************************!*\
  !*** ./public/imgs/logos/datavirt.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/datavirt.svg";

/***/ }),

/***/ "./public/imgs/logos/debian.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/debian.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/debian.svg";

/***/ }),

/***/ "./public/imgs/logos/decisionserver.svg":
/*!**********************************************!*\
  !*** ./public/imgs/logos/decisionserver.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/decisionserver.svg";

/***/ }),

/***/ "./public/imgs/logos/django.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/django.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/django.svg";

/***/ }),

/***/ "./public/imgs/logos/dotnet.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/dotnet.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dotnet.svg";

/***/ }),

/***/ "./public/imgs/logos/drupal.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/drupal.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/drupal.svg";

/***/ }),

/***/ "./public/imgs/logos/eap.svg":
/*!***********************************!*\
  !*** ./public/imgs/logos/eap.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/eap.svg";

/***/ }),

/***/ "./public/imgs/logos/elastic.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/elastic.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/elastic.svg";

/***/ }),

/***/ "./public/imgs/logos/erlang.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/erlang.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/erlang.svg";

/***/ }),

/***/ "./public/imgs/logos/fedora.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/fedora.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fedora.svg";

/***/ }),

/***/ "./public/imgs/logos/freebsd.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/freebsd.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/freebsd.svg";

/***/ }),

/***/ "./public/imgs/logos/git.svg":
/*!***********************************!*\
  !*** ./public/imgs/logos/git.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/git.svg";

/***/ }),

/***/ "./public/imgs/logos/github.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/github.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/github.svg";

/***/ }),

/***/ "./public/imgs/logos/gitlab.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/gitlab.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/gitlab.svg";

/***/ }),

/***/ "./public/imgs/logos/glassfish.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/glassfish.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/glassfish.svg";

/***/ }),

/***/ "./public/imgs/logos/golang.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/golang.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/golang.svg";

/***/ }),

/***/ "./public/imgs/logos/grails.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/grails.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/grails.svg";

/***/ }),

/***/ "./public/imgs/logos/hadoop.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/hadoop.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/hadoop.svg";

/***/ }),

/***/ "./public/imgs/logos/haproxy.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/haproxy.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/haproxy.svg";

/***/ }),

/***/ "./public/imgs/logos/infinispan.svg":
/*!******************************************!*\
  !*** ./public/imgs/logos/infinispan.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/infinispan.svg";

/***/ }),

/***/ "./public/imgs/logos/jboss.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/jboss.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/jboss.svg";

/***/ }),

/***/ "./public/imgs/logos/jenkins.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/jenkins.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/jenkins.svg";

/***/ }),

/***/ "./public/imgs/logos/jetty.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/jetty.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/jetty.svg";

/***/ }),

/***/ "./public/imgs/logos/joomla.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/joomla.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/joomla.svg";

/***/ }),

/***/ "./public/imgs/logos/jruby.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/jruby.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/jruby.svg";

/***/ }),

/***/ "./public/imgs/logos/js.svg":
/*!**********************************!*\
  !*** ./public/imgs/logos/js.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/js.svg";

/***/ }),

/***/ "./public/imgs/logos/knative.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/knative.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/knative.svg";

/***/ }),

/***/ "./public/imgs/logos/kubevirt.svg":
/*!****************************************!*\
  !*** ./public/imgs/logos/kubevirt.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/kubevirt.svg";

/***/ }),

/***/ "./public/imgs/logos/laravel.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/laravel.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/laravel.svg";

/***/ }),

/***/ "./public/imgs/logos/load-balancer.svg":
/*!*********************************************!*\
  !*** ./public/imgs/logos/load-balancer.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/load-balancer.svg";

/***/ }),

/***/ "./public/imgs/logos/mariadb.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/mariadb.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mariadb.svg";

/***/ }),

/***/ "./public/imgs/logos/mediawiki.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/mediawiki.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mediawiki.svg";

/***/ }),

/***/ "./public/imgs/logos/memcached.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/memcached.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/memcached.svg";

/***/ }),

/***/ "./public/imgs/logos/mongodb.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/mongodb.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mongodb.svg";

/***/ }),

/***/ "./public/imgs/logos/mssql.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/mssql.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mssql.svg";

/***/ }),

/***/ "./public/imgs/logos/mysql-database.svg":
/*!**********************************************!*\
  !*** ./public/imgs/logos/mysql-database.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/mysql-database.svg";

/***/ }),

/***/ "./public/imgs/logos/nginx.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/nginx.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/nginx.svg";

/***/ }),

/***/ "./public/imgs/logos/nodejs.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/nodejs.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/nodejs.svg";

/***/ }),

/***/ "./public/imgs/logos/openjdk.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/openjdk.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/openjdk.svg";

/***/ }),

/***/ "./public/imgs/logos/openliberty.svg":
/*!*******************************************!*\
  !*** ./public/imgs/logos/openliberty.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/openliberty.svg";

/***/ }),

/***/ "./public/imgs/logos/openshift.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/openshift.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/openshift.svg";

/***/ }),

/***/ "./public/imgs/logos/openstack.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/openstack.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/openstack.svg";

/***/ }),

/***/ "./public/imgs/logos/other-linux.svg":
/*!*******************************************!*\
  !*** ./public/imgs/logos/other-linux.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/other-linux.svg";

/***/ }),

/***/ "./public/imgs/logos/other-unknown.svg":
/*!*********************************************!*\
  !*** ./public/imgs/logos/other-unknown.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/other-unknown.svg";

/***/ }),

/***/ "./public/imgs/logos/perl.svg":
/*!************************************!*\
  !*** ./public/imgs/logos/perl.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/perl.svg";

/***/ }),

/***/ "./public/imgs/logos/phalcon.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/phalcon.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/phalcon.svg";

/***/ }),

/***/ "./public/imgs/logos/php.svg":
/*!***********************************!*\
  !*** ./public/imgs/logos/php.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/php.svg";

/***/ }),

/***/ "./public/imgs/logos/play.svg":
/*!************************************!*\
  !*** ./public/imgs/logos/play.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/play.svg";

/***/ }),

/***/ "./public/imgs/logos/postgresql.svg":
/*!******************************************!*\
  !*** ./public/imgs/logos/postgresql.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/postgresql.svg";

/***/ }),

/***/ "./public/imgs/logos/processserver.svg":
/*!*********************************************!*\
  !*** ./public/imgs/logos/processserver.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/processserver.svg";

/***/ }),

/***/ "./public/imgs/logos/python.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/python.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/python.svg";

/***/ }),

/***/ "./public/imgs/logos/quarkus.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/quarkus.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/quarkus.svg";

/***/ }),

/***/ "./public/imgs/logos/rabbitmq.svg":
/*!****************************************!*\
  !*** ./public/imgs/logos/rabbitmq.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/rabbitmq.svg";

/***/ }),

/***/ "./public/imgs/logos/rails.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/rails.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/rails.svg";

/***/ }),

/***/ "./public/imgs/logos/redis.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/redis.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/redis.svg";

/***/ }),

/***/ "./public/imgs/logos/rh-integration.svg":
/*!**********************************************!*\
  !*** ./public/imgs/logos/rh-integration.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/rh-integration.svg";

/***/ }),

/***/ "./public/imgs/logos/rh-spring-boot.svg":
/*!**********************************************!*\
  !*** ./public/imgs/logos/rh-spring-boot.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/rh-spring-boot.svg";

/***/ }),

/***/ "./public/imgs/logos/rh-tomcat.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/rh-tomcat.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/rh-tomcat.svg";

/***/ }),

/***/ "./public/imgs/logos/ruby.svg":
/*!************************************!*\
  !*** ./public/imgs/logos/ruby.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ruby.svg";

/***/ }),

/***/ "./public/imgs/logos/scala.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/scala.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/scala.svg";

/***/ }),

/***/ "./public/imgs/logos/shadowman.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/shadowman.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/shadowman.svg";

/***/ }),

/***/ "./public/imgs/logos/spring-boot.svg":
/*!*******************************************!*\
  !*** ./public/imgs/logos/spring-boot.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/spring-boot.svg";

/***/ }),

/***/ "./public/imgs/logos/spring.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/spring.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/spring.svg";

/***/ }),

/***/ "./public/imgs/logos/sso.svg":
/*!***********************************!*\
  !*** ./public/imgs/logos/sso.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/sso.svg";

/***/ }),

/***/ "./public/imgs/logos/stackoverflow.svg":
/*!*********************************************!*\
  !*** ./public/imgs/logos/stackoverflow.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/stackoverflow.svg";

/***/ }),

/***/ "./public/imgs/logos/suse.svg":
/*!************************************!*\
  !*** ./public/imgs/logos/suse.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/suse.svg";

/***/ }),

/***/ "./public/imgs/logos/symfony.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/symfony.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/symfony.svg";

/***/ }),

/***/ "./public/imgs/logos/tomcat.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/tomcat.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/tomcat.svg";

/***/ }),

/***/ "./public/imgs/logos/ubuntu.svg":
/*!**************************************!*\
  !*** ./public/imgs/logos/ubuntu.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ubuntu.svg";

/***/ }),

/***/ "./public/imgs/logos/vertx.svg":
/*!*************************************!*\
  !*** ./public/imgs/logos/vertx.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/vertx.svg";

/***/ }),

/***/ "./public/imgs/logos/wildfly.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/wildfly.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/wildfly.svg";

/***/ }),

/***/ "./public/imgs/logos/windows.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/windows.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/windows.svg";

/***/ }),

/***/ "./public/imgs/logos/wordpress.svg":
/*!*****************************************!*\
  !*** ./public/imgs/logos/wordpress.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/wordpress.svg";

/***/ }),

/***/ "./public/imgs/logos/xamarin.svg":
/*!***************************************!*\
  !*** ./public/imgs/logos/xamarin.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/xamarin.svg";

/***/ }),

/***/ "./public/imgs/logos/zend.svg":
/*!************************************!*\
  !*** ./public/imgs/logos/zend.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/zend.svg";

/***/ })

}]);
//# sourceMappingURL=basicauth-idp-form~brokermanagment~catalog~cluster-service-broker~cluster-service-class~create-servi~8e55b36d-4ddc412b8b21ad3f4143.js.map