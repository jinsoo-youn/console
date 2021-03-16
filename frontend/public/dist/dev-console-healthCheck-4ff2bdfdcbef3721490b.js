(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-healthCheck"],{

/***/ "./packages/dev-console/src/components/health-checks/AddHealthChecks.scss":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/AddHealthChecks.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/AddHealthChecks.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/AddHealthChecks.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _edit_application_edit_application_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-application/edit-application-utils */ "./packages/dev-console/src/components/edit-application/edit-application-utils.ts");
/* harmony import */ var _HealthChecks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HealthChecks */ "./packages/dev-console/src/components/health-checks/HealthChecks.tsx");
/* harmony import */ var _create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _AddHealthChecks_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AddHealthChecks.scss */ "./packages/dev-console/src/components/health-checks/AddHealthChecks.scss");
/* harmony import */ var _AddHealthChecks_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_AddHealthChecks_scss__WEBPACK_IMPORTED_MODULE_12__);













const AddHealthChecks = ({ resource, currentContainer, handleSubmit, handleReset, errors, status, isSubmitting, setFieldValue, values, dirty, }) => {
    var _a, _b, _c, _d, _e;
    const [currentKey, setCurrentKey] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](currentContainer);
    const containers = (_c = (_b = (_a = resource === null || resource === void 0 ? void 0 : resource.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.containers;
    const healthCheckAdded = lodash__WEBPACK_IMPORTED_MODULE_1__["every"](containers, (container) => container.readinessProbe || container.livenessProbe || container.startupProbe);
    const containersByKey = lodash__WEBPACK_IMPORTED_MODULE_1__["keyBy"](containers, 'name');
    const pageTitle = healthCheckAdded ? 'Edit Health Checks' : 'Add Health Checks';
    const { kind, metadata: { name, namespace }, } = resource;
    const kindForCRDResource = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(resource);
    const resourceKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["modelFor"])(kindForCRDResource).crd ? kindForCRDResource : kind;
    const isFormClean = lodash__WEBPACK_IMPORTED_MODULE_1__["every"](values.healthChecks, { modified: false });
    const handleSelectContainer = (containerName) => {
        const containerIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](resource.spec.template.spec.containers, [
            'name',
            containerName,
        ]);
        setCurrentKey(containerName);
        setFieldValue('containerName', containerName);
        setFieldValue('healthChecks', Object(_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_11__["getHealthChecksData"])(resource, containerIndex));
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].replace(`/k8s/ns/${namespace}/${resourceKind}/${name}/containers/${containerName}/health-checks`);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, pageTitle)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["PageHeading"], { title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                pageTitle,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", component: "a", href: `${_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["openshiftHelpBase"]}applications/application-health.html`, target: "_blank" },
                    "Learn More ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["ExternalLinkAltIcon"], null))) }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-add-health-checks__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Health checks for \u00A0",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(resource), name: name, namespace: namespace, title: name, inline: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], { onSubmit: handleSubmit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    "Container \u00A0",
                    lodash__WEBPACK_IMPORTED_MODULE_1__["size"](containers) > 1 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ContainerDropdown"], { currentKey: currentKey, containers: containersByKey, onChange: handleSelectContainer })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceIcon"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ContainerModel"].kind }),
                        containers[0].name))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HealthChecks__WEBPACK_IMPORTED_MODULE_10__["default"], { resourceType: Object(_edit_application_edit_application_utils__WEBPACK_IMPORTED_MODULE_9__["getResourcesType"])(resource) }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["FormFooter"], { handleReset: handleReset, errorMessage: status && ((_e = (_d = status === null || status === void 0 ? void 0 : status.errors) === null || _d === void 0 ? void 0 : _d.json) === null || _e === void 0 ? void 0 : _e.message), isSubmitting: isSubmitting, submitLabel: healthCheckAdded ? 'Save' : 'Add', disableSubmit: isFormClean || !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddHealthChecks);


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/AddHealthChecksForm.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/AddHealthChecksForm.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _edit_application_edit_application_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-application/edit-application-utils */ "./packages/dev-console/src/components/edit-application/edit-application-utils.ts");
/* harmony import */ var _health_checks_probe_validation_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-checks-probe-validation-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-validation-utils.ts");
/* harmony import */ var _create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _AddHealthChecks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddHealthChecks */ "./packages/dev-console/src/components/health-checks/AddHealthChecks.tsx");
/* harmony import */ var _health_checks_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./health-checks-utils */ "./packages/dev-console/src/components/health-checks/health-checks-utils.ts");











const AddHealthChecksForm = ({ resource, currentContainer, }) => {
    if (!resource.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resource.loadError)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
    }
    if (resource.loadError) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["StatusBox"], { loaded: resource.loaded, loadError: resource.loadError });
    }
    const container = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](resource.data.spec.template.spec.containers, (data) => data.name === currentContainer);
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](container)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-center" }, "Container not found");
    }
    const handleSubmit = (values, actions) => {
        const updatedResource = Object(_health_checks_utils__WEBPACK_IMPORTED_MODULE_10__["updateHealthChecksProbe"])(values, resource.data, container);
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sUpdate"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceFor"])(resource.data)), updatedResource)
            .then(() => {
            actions.setSubmitting(false);
            actions.setStatus({ error: '' });
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].goBack();
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ errors: err });
        });
    };
    const containerIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](resource.data.spec.template.spec.containers, [
        'name',
        currentContainer,
    ]);
    const initialValues = {
        healthChecks: Object(_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__["getHealthChecksData"])(resource.data, containerIndex),
        containerName: container.name,
        resources: Object(_edit_application_edit_application_utils__WEBPACK_IMPORTED_MODULE_6__["getResourcesType"])(resource.data),
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], { initialValues: initialValues, validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
            healthChecks: _health_checks_probe_validation_utils__WEBPACK_IMPORTED_MODULE_7__["healthChecksProbesValidationSchema"],
        }), onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].goBack }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddHealthChecks__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ resource: resource.data, currentContainer: currentContainer }, props)))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddHealthChecksForm);


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/HealthChecksPage.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/HealthChecksPage.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _AddHealthChecksForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddHealthChecksForm */ "./packages/dev-console/src/components/health-checks/AddHealthChecksForm.tsx");



const HealthChecksPage = ({ match }) => {
    const { ns, kind, name, containerName } = match.params;
    const resource = [
        {
            kind,
            namespace: ns,
            isList: false,
            name,
            prop: 'resource',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: resource },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddHealthChecksForm__WEBPACK_IMPORTED_MODULE_2__["default"], { currentContainer: containerName })));
};
/* harmony default export */ __webpack_exports__["default"] = (HealthChecksPage);


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

/***/ "./packages/dev-console/src/components/health-checks/health-checks-utils.ts":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/health-checks-utils.ts ***!
  \**********************************************************************************/
/*! exports provided: updateHealthChecksProbe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHealthChecksProbe", function() { return updateHealthChecksProbe; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _edit_application_edit_application_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-application/edit-application-utils */ "./packages/dev-console/src/components/edit-application/edit-application-utils.ts");
/* harmony import */ var _health_checks_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-checks-types */ "./packages/dev-console/src/components/health-checks/health-checks-types.ts");




const updateHealthChecksProbe = (values, resource, container) => {
    const { healthChecks: { readinessProbe, livenessProbe, startupProbe }, containerName, healthChecks, } = values;
    const updatedResource = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](resource);
    const containerIndex = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](updatedResource.spec.template.spec.containers, [
        'name',
        containerName,
    ]);
    updatedResource.spec.template.spec.containers[containerIndex] = Object.assign(Object.assign({}, container), Object(_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_1__["getProbesData"])(healthChecks, Object(_edit_application_edit_application_utils__WEBPACK_IMPORTED_MODULE_2__["getResourcesType"])(resource)));
    if (!readinessProbe.enabled) {
        updatedResource.spec.template.spec.containers[containerIndex] = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](updatedResource.spec.template.spec.containers[containerIndex], `${_health_checks_types__WEBPACK_IMPORTED_MODULE_3__["HealthChecksProbeType"].ReadinessProbe}`);
    }
    if (!livenessProbe.enabled) {
        updatedResource.spec.template.spec.containers[containerIndex] = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](updatedResource.spec.template.spec.containers[containerIndex], `${_health_checks_types__WEBPACK_IMPORTED_MODULE_3__["HealthChecksProbeType"].LivenessProbe}`);
    }
    if (!startupProbe.enabled) {
        updatedResource.spec.template.spec.containers[containerIndex] = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](updatedResource.spec.template.spec.containers[containerIndex], `${_health_checks_types__WEBPACK_IMPORTED_MODULE_3__["HealthChecksProbeType"].StartupProbe}`);
    }
    return updatedResource;
};


/***/ }),

/***/ "./packages/dev-console/src/utils/imagestream-utils.ts":
/*!*************************************************************!*\
  !*** ./packages/dev-console/src/utils/imagestream-utils.ts ***!
  \*************************************************************/
/*! exports provided: imageStreamLabels, getRuntime, getSampleRepo, getSampleRef, getSampleContextDir, getPorts, makePortName, prettifyName, normalizeBuilderImages, getTagDataWithDisplayName, getSuggestedName, RegistryType, BuilderImagesNamespace, imageRegistryType, getSortedTags, getImageStreamTags, getProjectResource, getImageStreamResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageStreamLabels", function() { return imageStreamLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRuntime", function() { return getRuntime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleRepo", function() { return getSampleRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleRef", function() { return getSampleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleContextDir", function() { return getSampleContextDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPorts", function() { return getPorts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePortName", function() { return makePortName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettifyName", function() { return prettifyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeBuilderImages", function() { return normalizeBuilderImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagDataWithDisplayName", function() { return getTagDataWithDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestedName", function() { return getSuggestedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryType", function() { return RegistryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderImagesNamespace", function() { return BuilderImagesNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageRegistryType", function() { return imageRegistryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedTags", function() { return getSortedTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageStreamTags", function() { return getImageStreamTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectResource", function() { return getProjectResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageStreamResource", function() { return getImageStreamResource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semver */ "./node_modules/semver/semver.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/image-stream */ "./public/components/image-stream.tsx");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");





const imageStreamLabels = ['app.kubernetes.io/name', 'app.openshift.io/runtime'];
const getRuntime = (labels) => (labels === null || labels === void 0 ? void 0 : labels['app.openshift.io/runtime']) || (labels === null || labels === void 0 ? void 0 : labels['app.kubernetes.io/name']);
const getSampleRepo = (tag) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](tag, 'annotations.sampleRepo', '');
const getSampleRef = (tag) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](tag, 'annotations.sampleRef', '');
const getSampleContextDir = (tag) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](tag, 'annotations.sampleContextDir', '');
// Transform image ports to k8s structure.
// `{ '3306/tcp': {} }` -> `{ containerPort: 3306, protocol: 'TCP' }`
const portsFromSpec = (portSpec) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](portSpec, (result, value, key) => {
        const parts = key.split('/');
        if (parts.length === 1) {
            parts.push('tcp');
        }
        const containerPort = parseInt(parts[0], 10);
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isFinite"](containerPort)) {
            result.push({
                containerPort,
                protocol: parts[1].toUpperCase(),
            });
        }
        else {
            // eslint-disable-next-line no-console
            console.warn('Unrecognized image port format', key);
        }
        return result;
    }, []);
};
const getPorts = (imageStreamImage) => {
    const portSpec = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStreamImage, 'image.dockerImageMetadata.Config.ExposedPorts') ||
        lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStreamImage, 'image.dockerImageMetadata.ContainerConfig.ExposedPorts');
    return portsFromSpec(portSpec);
};
// Use the same naming convention as the CLI.
const makePortName = (port) => `${port.containerPort}-${port.protocol}`.toLowerCase();
const prettifyName = (name) => {
    return name.replace(/(-|^)([^-]?)/g, (first, prep, letter) => {
        return (prep && ' ') + letter.toUpperCase();
    });
};
const normalizeBuilderImages = (imageStreams) => {
    const data = Array.isArray(imageStreams) ? imageStreams : [imageStreams];
    const builderImageStreams = data.filter((imageStream) => Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["isBuilder"])(imageStream));
    return builderImageStreams.reduce((builderImages, imageStream) => {
        const tags = Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["getBuilderTagsSortedByVersion"])(imageStream);
        const recentTag = Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["getMostRecentBuilderTag"])(imageStream);
        const { name } = imageStream.metadata;
        const displayName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStream, [
            'metadata',
            'annotations',
            'openshift.io/display-name',
        ]);
        const imageStreamNamespace = imageStream.metadata.namespace;
        const title = displayName && displayName.length < 14 ? displayName : prettifyName(name);
        const iconClass = Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageStreamIcon"])(recentTag);
        const iconUrl = Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageForIconClass"])(iconClass);
        builderImages[name] = {
            obj: imageStream,
            name,
            displayName,
            title,
            iconUrl,
            tags,
            recentTag,
            imageStreamNamespace,
        };
        return builderImages;
    }, {});
};
const getTagDataWithDisplayName = (imageTags, selectedTag, defaultName) => {
    const imageTag = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](imageTags, { name: selectedTag });
    const displayName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageTag, ['annotations', 'openshift.io/display-name'], defaultName);
    return [imageTag, displayName];
};
const getSuggestedName = (name) => {
    if (!name) {
        return undefined;
    }
    const imageName = lodash__WEBPACK_IMPORTED_MODULE_0__["last"](name.split('/'));
    return lodash__WEBPACK_IMPORTED_MODULE_0__["first"](imageName.split(/[^a-z0-9-]/));
};
var RegistryType;
(function (RegistryType) {
    RegistryType["External"] = "external";
    RegistryType["Internal"] = "internal";
})(RegistryType || (RegistryType = {}));
var BuilderImagesNamespace;
(function (BuilderImagesNamespace) {
    BuilderImagesNamespace["Openshift"] = "openshift";
})(BuilderImagesNamespace || (BuilderImagesNamespace = {}));
const imageRegistryType = {
    External: {
        value: RegistryType.External,
        label: 'Image name from external registry',
    },
    Internal: {
        value: RegistryType.Internal,
        label: 'Image stream tag from internal registry',
    },
};
const getSortedTags = (imageStream) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"](imageStream.status.tags) && imageStream.status.tags.length
        ? imageStream.status.tags.sort(({ tag: a }, { tag: b }) => {
            const v1 = semver__WEBPACK_IMPORTED_MODULE_1__["coerce"](a);
            const v2 = semver__WEBPACK_IMPORTED_MODULE_1__["coerce"](b);
            if (!v1 && !v2) {
                return a.localeCompare(b);
            }
            if (!v1) {
                return 1;
            }
            if (!v2) {
                return -1;
            }
            return semver__WEBPACK_IMPORTED_MODULE_1__["rcompare"](v1, v2);
        })
        : [];
};
const getImageStreamTags = (imageStream) => {
    const sortedTags = imageStream && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](imageStream) ? getSortedTags(imageStream) : [];
    return sortedTags.reduce((tags, { tag }) => {
        tags[tag] = tag;
        return tags;
    }, {});
};
const getProjectResource = () => {
    return [
        {
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ProjectModel"].kind,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ProjectModel"].id,
        },
    ];
};
const getImageStreamResource = (namespace) => {
    const resource = [];
    if (namespace) {
        resource.push({
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ImageStreamModel"].kind,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ImageStreamModel"].id,
            namespace,
        });
    }
    return resource;
};


/***/ })

}]);
//# sourceMappingURL=dev-console-healthCheck-4ff2bdfdcbef3721490b.js.map