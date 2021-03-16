(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-deployImage~dev-console-edit~dev-console-import~dev-console-projectDetails"],{

/***/ "./packages/dev-console/src/components/NamespacedPage.scss":
/*!*****************************************************************!*\
  !*** ./packages/dev-console/src/components/NamespacedPage.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/NamespacedPage.tsx":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/components/NamespacedPage.tsx ***!
  \****************************************************************/
/*! exports provided: NamespacedPageVariants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespacedPageVariants", function() { return NamespacedPageVariants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown/ApplicationSelector */ "./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx");
/* harmony import */ var _NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NamespacedPage.scss */ "./packages/dev-console/src/components/NamespacedPage.scss");
/* harmony import */ var _NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4__);





var NamespacedPageVariants;
(function (NamespacedPageVariants) {
    NamespacedPageVariants["light"] = "light";
    NamespacedPageVariants["default"] = "default";
})(NamespacedPageVariants || (NamespacedPageVariants = {}));
const NamespacedPage = ({ children, disabled, onNamespaceChange, hideApplications = false, variant = NamespacedPageVariants.default, toolbar, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["NamespaceBar"], { disabled: disabled, onNamespaceChange: onNamespaceChange },
        !hideApplications && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: disabled }),
        toolbar && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page__toolbar" }, toolbar)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-namespaced-page__content', {
            [`is-${variant}`]: variant !== NamespacedPageVariants.default,
        }) }, children)));
/* harmony default export */ __webpack_exports__["default"] = (NamespacedPage);


/***/ }),

/***/ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_kubevirt_plugin_src_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/kubevirt-plugin/src/models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






const ApplicationDropdown = (_a) => {
    var { namespace } = _a, props = __rest(_a, ["namespace"]);
    const resources = [
        {
            isList: true,
            namespace,
            kind: 'DeploymentConfig',
            prop: 'deploymentConfigs',
        },
        {
            isList: true,
            namespace,
            kind: 'Deployment',
            prop: 'deployments',
        },
        {
            isList: true,
            kind: 'StatefulSet',
            namespace,
            prop: 'statefulSets',
        },
        {
            isList: true,
            kind: 'DaemonSet',
            namespace,
            prop: 'daemonSets',
        },
        {
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"]),
            namespace,
            prop: 'knativeService',
            optional: true,
        },
        {
            isList: true,
            kind: 'Secret',
            namespace,
            prop: 'secrets',
        },
        {
            isList: true,
            kind: _console_kubevirt_plugin_src_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"].kind,
            namespace,
            prop: 'virtualMachines',
            optional: true,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["ResourceDropdown"], Object.assign({}, props, { placeholder: "Select an Application", dataSelector: ['metadata', 'labels', 'app.kubernetes.io/part-of'] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ApplicationDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _ApplicationDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationDropdown */ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx");






const ApplicationSelector = ({ namespace, application, onChange, disabled }) => {
    if (namespace === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_NAMESPACES_KEY"])
        return null;
    const allApplicationsTitle = 'all applications';
    const title = application === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"] ? allApplicationsTitle : application;
    const onApplicationChange = (newApplication, key) => {
        key === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"] ? onChange(key) : onChange(newApplication);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "co-namespace-selector", menuClassName: "co-namespace-selector__menu", buttonClassName: "pf-m-plain", namespace: namespace, title: title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "btn-link__title" }, title), titlePrefix: "Application", allSelectorItem: {
            allSelectorKey: _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"],
            allSelectorTitle: allApplicationsTitle,
        }, selectedKey: application || _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"], onChange: onApplicationChange, storageKey: _console_shared__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_LOCAL_STORAGE_KEY"], disabled: disabled }));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveNamespace"])(state),
    application: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveApplication"])(state),
});
const mapDispatchToProps = (dispatch) => ({
    onChange: (app) => {
        dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__["setActiveApplication"])(app));
    },
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ApplicationSelector));


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts ***!
  \***********************************************************************************************/
/*! exports provided: constructProbeData, getRequestType, getHealthChecksData, getProbesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructProbeData", function() { return constructProbeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestType", function() { return getRequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHealthChecksData", function() { return getHealthChecksData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProbesData", function() { return getProbesData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _health_checks_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-checks-types */ "./packages/dev-console/src/components/health-checks/health-checks-types.ts");
/* harmony import */ var _import_import_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../import/import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-utils.ts");




const constructProbeData = (data, resourceType) => {
    var _a, _b;
    const probeData = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (data.failureThreshold && { failureThreshold: data.failureThreshold })), (data.successThreshold && { successThreshold: data.successThreshold })), (data.requestType === _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].ContainerCommand && {
        exec: data.exec,
    })), (data.requestType === _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].HTTPGET && {
        httpGet: Object.assign(Object.assign(Object.assign({}, data[data.requestType]), (((_b = (_a = data[data.requestType]) === null || _a === void 0 ? void 0 : _a.scheme) === null || _b === void 0 ? void 0 : _b[0]) === 'HTTPS' && {
            scheme: data[data.requestType].scheme[0],
        })), { port: resourceType === _import_import_types__WEBPACK_IMPORTED_MODULE_2__["Resources"].KnativeService ? 0 : lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](data.httpGet.port) }),
    })), (data.requestType === _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].TCPSocket && {
        tcpSocket: {
            port: resourceType === _import_import_types__WEBPACK_IMPORTED_MODULE_2__["Resources"].KnativeService ? 0 : lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](data.tcpSocket.port),
        },
    })), (data.initialDelaySeconds && {
        initialDelaySeconds: data.initialDelaySeconds,
    })), (data.periodSeconds && { periodSeconds: data.periodSeconds })), (data.timeoutSeconds && { timeoutSeconds: data.timeoutSeconds }));
    return probeData;
};
const getRequestType = (data) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](data, _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].HTTPGET))
        return _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].HTTPGET;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](data, _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].TCPSocket))
        return _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].TCPSocket;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](data, 'exec.command'))
        return _health_checks_types__WEBPACK_IMPORTED_MODULE_1__["RequestType"].ContainerCommand;
    return '';
};
const getHealthChecksData = (resource, containerIndex = 0) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const containers = (_d = (_c = (_b = (_a = resource === null || resource === void 0 ? void 0 : resource.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.containers) !== null && _d !== void 0 ? _d : [];
    const readinessProbe = (_f = (_e = containers === null || containers === void 0 ? void 0 : containers[containerIndex]) === null || _e === void 0 ? void 0 : _e[_health_checks_types__WEBPACK_IMPORTED_MODULE_1__["HealthChecksProbeType"].ReadinessProbe]) !== null && _f !== void 0 ? _f : {};
    const livenessProbe = (_h = (_g = containers === null || containers === void 0 ? void 0 : containers[containerIndex]) === null || _g === void 0 ? void 0 : _g[_health_checks_types__WEBPACK_IMPORTED_MODULE_1__["HealthChecksProbeType"].LivenessProbe]) !== null && _h !== void 0 ? _h : {};
    const startupProbe = (_k = (_j = containers === null || containers === void 0 ? void 0 : containers[containerIndex]) === null || _j === void 0 ? void 0 : _j[_health_checks_types__WEBPACK_IMPORTED_MODULE_1__["HealthChecksProbeType"].StartupProbe]) !== null && _k !== void 0 ? _k : {};
    const healthChecks = {
        readinessProbe: {
            showForm: false,
            modified: false,
            enabled: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](readinessProbe),
            data: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](readinessProbe)
                ? Object.assign(Object.assign(Object.assign({}, readinessProbe), { requestType: getRequestType(readinessProbe) }), (((_l = readinessProbe.httpGet) === null || _l === void 0 ? void 0 : _l.scheme) === 'HTTPS' && {
                    httpGet: Object.assign(Object.assign({}, readinessProbe.httpGet), { scheme: ['HTTPS'] }),
                })) : _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_3__["healthChecksDefaultValues"].data,
        },
        livenessProbe: {
            showForm: false,
            modified: false,
            enabled: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](livenessProbe),
            data: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](livenessProbe)
                ? Object.assign(Object.assign(Object.assign({}, livenessProbe), { requestType: getRequestType(livenessProbe) }), (((_m = livenessProbe.httpGet) === null || _m === void 0 ? void 0 : _m.scheme) === 'HTTPS' && {
                    httpGet: Object.assign(Object.assign({}, livenessProbe.httpGet), { scheme: ['HTTPS'] }),
                })) : _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_3__["healthChecksDefaultValues"].data,
        },
        startupProbe: {
            showForm: false,
            modified: false,
            enabled: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](startupProbe),
            data: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](startupProbe)
                ? Object.assign(Object.assign(Object.assign({}, startupProbe), { requestType: getRequestType(startupProbe) }), (((_o = startupProbe.httpGet) === null || _o === void 0 ? void 0 : _o.scheme) === 'HTTPS' && {
                    httpGet: Object.assign(Object.assign({}, startupProbe.httpGet), { scheme: ['HTTPS'] }),
                })) : _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_3__["healthChecksDefaultValues"].data,
        },
    };
    return healthChecks;
};
const getProbesData = (healthChecks, resourceType) => {
    const { readinessProbe, livenessProbe, startupProbe } = healthChecks;
    return Object.assign(Object.assign(Object.assign({}, (readinessProbe.enabled
        ? { readinessProbe: constructProbeData(readinessProbe.data, resourceType) }
        : {})), (livenessProbe.enabled
        ? { livenessProbe: constructProbeData(livenessProbe.data, resourceType) }
        : {})), (resourceType !== _import_import_types__WEBPACK_IMPORTED_MODULE_2__["Resources"].KnativeService && (startupProbe === null || startupProbe === void 0 ? void 0 : startupProbe.enabled)
        ? { startupProbe: constructProbeData(startupProbe.data) }
        : {}));
};


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/health-checks-probe-utils.ts":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/health-checks-probe-utils.ts ***!
  \****************************************************************************************/
/*! exports provided: getHealthChecksProbeConfig, healthChecksDefaultValues, healthChecksProbeInitialData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHealthChecksProbeConfig", function() { return getHealthChecksProbeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthChecksDefaultValues", function() { return healthChecksDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthChecksProbeInitialData", function() { return healthChecksProbeInitialData; });
/* harmony import */ var _health_checks_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-checks-types */ "./packages/dev-console/src/components/health-checks/health-checks-types.ts");

const getHealthChecksProbeConfig = (probe) => {
    switch (probe) {
        case _health_checks_types__WEBPACK_IMPORTED_MODULE_0__["HealthChecksProbeType"].ReadinessProbe: {
            return {
                formTitle: 'Readiness Probe',
                formSubtitle: "A Readiness probe checks if the container is ready to handle requests. A failed readiness probe means that a container should not receive any traffic from a proxy, even if it's running.",
            };
        }
        case _health_checks_types__WEBPACK_IMPORTED_MODULE_0__["HealthChecksProbeType"].LivenessProbe: {
            return {
                formTitle: 'Liveness Probe',
                formSubtitle: 'A Liveness probe checks if the container is still running. If the liveness probe fails the container is killed.',
            };
        }
        case _health_checks_types__WEBPACK_IMPORTED_MODULE_0__["HealthChecksProbeType"].StartupProbe: {
            return {
                formTitle: 'Startup Probe',
                formSubtitle: 'A Startup probe checks if the application within the container is started. If the startup probe fails the container is killed.',
            };
        }
        default:
            return undefined;
    }
};
const healthChecksDefaultValues = {
    showForm: false,
    enabled: false,
    modified: false,
    data: {
        failureThreshold: 3,
        requestType: _health_checks_types__WEBPACK_IMPORTED_MODULE_0__["RequestType"].HTTPGET,
        httpGet: {
            scheme: 'HTTP',
            path: '/',
            port: 8080,
            httpHeaders: [],
        },
        tcpSocket: {
            port: 8080,
        },
        exec: { command: [''] },
        initialDelaySeconds: 0,
        periodSeconds: 10,
        timeoutSeconds: 1,
        successThreshold: 1,
    },
};
const healthChecksProbeInitialData = {
    readinessProbe: healthChecksDefaultValues,
    livenessProbe: healthChecksDefaultValues,
    startupProbe: healthChecksDefaultValues,
};


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/health-checks-types.ts":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/health-checks-types.ts ***!
  \**********************************************************************************/
/*! exports provided: HealthChecksProbeType, RequestType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthChecksProbeType", function() { return HealthChecksProbeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
var HealthChecksProbeType;
(function (HealthChecksProbeType) {
    HealthChecksProbeType["ReadinessProbe"] = "readinessProbe";
    HealthChecksProbeType["LivenessProbe"] = "livenessProbe";
    HealthChecksProbeType["StartupProbe"] = "startupProbe";
})(HealthChecksProbeType || (HealthChecksProbeType = {}));
var RequestType;
(function (RequestType) {
    RequestType["HTTPGET"] = "httpGet";
    RequestType["ContainerCommand"] = "command";
    RequestType["TCPSocket"] = "tcpSocket";
})(RequestType || (RequestType = {}));


/***/ }),

/***/ "./packages/knative-plugin/src/utils/create-knative-utils.ts":
/*!*******************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/create-knative-utils.ts ***!
  \*******************************************************************/
/*! exports provided: getKnativeServiceDepResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeServiceDepResource", function() { return getKnativeServiceDepResource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_dev_console_src_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/utils/resource-label-utils */ "./packages/dev-console/src/utils/resource-label-utils.ts");
/* harmony import */ var _console_dev_console_src_components_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/health-checks/create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");





const getKnativeServiceDepResource = (formData, imageStreamUrl, imageStreamName, imageStreamTag, imageNamespace, annotations, originalKnativeService) => {
    const { name, application: { name: applicationName }, project: { name: namespace }, serverless: { scaling }, limits, route: { unknownTargetPort, create, targetPort }, labels, image: { tag: imageTag }, deployment: { env, triggers: { image: imagePolicy }, }, healthChecks, resources, } = formData;
    const contTargetPort = targetPort
        ? parseInt(targetPort.split('-')[0], 10)
        : parseInt(unknownTargetPort, 10);
    const imgPullPolicy = imagePolicy ? _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["ImagePullPolicy"].Always : _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["ImagePullPolicy"].IfNotPresent;
    const { concurrencylimit, concurrencytarget, minpods, maxpods } = scaling;
    const { cpu: { request: cpuRequest, requestUnit: cpuRequestUnit, limit: cpuLimit, limitUnit: cpuLimitUnit, }, memory: { request: memoryRequest, requestUnit: memoryRequestUnit, limit: memoryLimit, limitUnit: memoryLimitUnit, }, } = limits;
    const defaultLabel = Object(_console_dev_console_src_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_2__["getAppLabels"])(name, applicationName, imageStreamName, imageStreamTag || imageTag, imageNamespace);
    delete defaultLabel.app;
    const newKnativeDeployResource = {
        kind: _models__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].kind,
        apiVersion: `${_models__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].apiGroup}/${_models__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].apiVersion}`,
        metadata: {
            name,
            namespace,
            labels: Object.assign(Object.assign(Object.assign({}, defaultLabel), labels), (!create && { 'serving.knative.dev/visibility': `cluster-local` })),
            annotations,
        },
        spec: {
            template: {
                metadata: {
                    labels: Object.assign(Object.assign({}, defaultLabel), labels),
                    annotations: Object.assign(Object.assign(Object.assign(Object.assign({}, (concurrencytarget && {
                        'autoscaling.knative.dev/target': `${concurrencytarget}`,
                    })), (minpods && { 'autoscaling.knative.dev/minScale': `${minpods}` })), (maxpods && { 'autoscaling.knative.dev/maxScale': `${maxpods}` })), annotations),
                },
                spec: Object.assign(Object.assign({}, (concurrencylimit && { containerConcurrency: concurrencylimit })), { containers: [
                        Object.assign(Object.assign(Object.assign({ image: `${imageStreamUrl}` }, (contTargetPort && {
                            ports: [
                                {
                                    containerPort: contTargetPort,
                                },
                            ],
                        })), { imagePullPolicy: imgPullPolicy, env, resources: Object.assign(Object.assign({}, ((cpuLimit || memoryLimit) && {
                                limits: Object.assign(Object.assign({}, (cpuLimit && { cpu: `${cpuLimit}${cpuLimitUnit}` })), (memoryLimit && { memory: `${memoryLimit}${memoryLimitUnit}` })),
                            })), ((cpuRequest || memoryRequest) && {
                                requests: Object.assign(Object.assign({}, (cpuRequest && { cpu: `${cpuRequest}${cpuRequestUnit}` })), (memoryRequest && { memory: `${memoryRequest}${memoryRequestUnit}` })),
                            })) }), Object(_console_dev_console_src_components_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_3__["getProbesData"])(healthChecks, resources)),
                    ] }),
            },
        },
    };
    let knativeServiceUpdated = {};
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](originalKnativeService)) {
        knativeServiceUpdated = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](originalKnativeService, [
            'status',
            'spec.template.metadata.name',
        ]);
    }
    const knativeDeployResource = Object(_console_dev_console_src_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_2__["mergeData"])(knativeServiceUpdated || {}, newKnativeDeployResource);
    return knativeDeployResource;
};


/***/ })

}]);
//# sourceMappingURL=dev-console-deployImage~dev-console-edit~dev-console-import~dev-console-projectDetails-ba91848ed75c457139c5.js.map