(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-deployImage~dev-console-edit~git-import-form~source-to-image-form"],{

/***/ "./packages/dev-console/src/components/import/CreateSecretModal.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/CreateSecretModal.tsx ***!
  \**************************************************************************/
/*! exports provided: secretModalLauncher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretModalLauncher", function() { return secretModalLauncher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");



const getSecretForm = (type) => {
    switch (type) {
        case _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__["SecretTypeAbstraction"].source:
            return Object(_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__["withSecretForm"])(_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__["SourceSecretForm"], true);
        case _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__["SecretTypeAbstraction"].image:
            return Object(_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__["withSecretForm"])(_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_1__["ImageSecretForm"], true);
        default:
            return null;
    }
};
const CreateSecretModal = ({ close, namespace, save, secretType }) => {
    const handleSave = (name) => {
        close();
        save(name);
    };
    const CreateSecretForm = getSecretForm(secretType);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CreateSecretForm, { onCancel: close, onSave: handleSave, fixed: { metadata: { namespace } }, secretTypeAbstraction: secretType, titleVerb: "Create", isCreate: true }));
};
const secretModalLauncher = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(CreateSecretModal);
/* harmony default export */ __webpack_exports__["default"] = (CreateSecretModal);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/AdvancedSection.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/AdvancedSection.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progressive_list_ProgressiveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../progressive-list/ProgressiveList */ "./packages/dev-console/src/components/progressive-list/ProgressiveList.tsx");
/* harmony import */ var _progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../progressive-list/ProgressiveListItem */ "./packages/dev-console/src/components/progressive-list/ProgressiveListItem.tsx");
/* harmony import */ var _route_RouteSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route/RouteSection */ "./packages/dev-console/src/components/import/route/RouteSection.tsx");
/* harmony import */ var _serverless_ServerlessRouteSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../serverless/ServerlessRouteSection */ "./packages/dev-console/src/components/import/serverless/ServerlessRouteSection.tsx");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _route_RouteCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route/RouteCheckbox */ "./packages/dev-console/src/components/import/route/RouteCheckbox.tsx");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _LabelSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LabelSection */ "./packages/dev-console/src/components/import/advanced/LabelSection.tsx");
/* harmony import */ var _ScalingSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScalingSection */ "./packages/dev-console/src/components/import/advanced/ScalingSection.tsx");
/* harmony import */ var _ServerlessScalingSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ServerlessScalingSection */ "./packages/dev-console/src/components/import/advanced/ServerlessScalingSection.tsx");
/* harmony import */ var _BuildConfigSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BuildConfigSection */ "./packages/dev-console/src/components/import/advanced/BuildConfigSection.tsx");
/* harmony import */ var _DeploymentConfigSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DeploymentConfigSection */ "./packages/dev-console/src/components/import/advanced/DeploymentConfigSection.tsx");
/* harmony import */ var _ResourceLimitSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ResourceLimitSection */ "./packages/dev-console/src/components/import/advanced/ResourceLimitSection.tsx");
/* harmony import */ var _health_checks_HealthChecks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../health-checks/HealthChecks */ "./packages/dev-console/src/components/health-checks/HealthChecks.tsx");















const AdvancedSection = ({ values, appResources }) => {
    var _a, _b;
    const [visibleItems, setVisibleItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const handleVisibleItemChange = (item) => {
        setVisibleItems([...visibleItems, item]);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "Advanced Options", fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_route_RouteCheckbox__WEBPACK_IMPORTED_MODULE_6__["default"], { isDisabled: values.route.disable }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveList__WEBPACK_IMPORTED_MODULE_1__["default"], { text: "Click on the names to access advanced options for", visibleItems: visibleItems, onVisibleItemChange: handleVisibleItemChange },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Routing" }, values.resources === _import_types__WEBPACK_IMPORTED_MODULE_7__["Resources"].KnativeService ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_serverless_ServerlessRouteSection__WEBPACK_IMPORTED_MODULE_4__["default"], { route: values.route })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_route_RouteSection__WEBPACK_IMPORTED_MODULE_3__["default"], { route: values.route }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Health Checks" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_health_checks_HealthChecks__WEBPACK_IMPORTED_MODULE_14__["default"], { title: "Health Checks", resourceType: values.resources })),
            values.isi ? null : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Build Configuration" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BuildConfigSection__WEBPACK_IMPORTED_MODULE_11__["default"], { namespace: values.project.name, resource: (_a = appResources === null || appResources === void 0 ? void 0 : appResources.buildConfig) === null || _a === void 0 ? void 0 : _a.data }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Deployment" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DeploymentConfigSection__WEBPACK_IMPORTED_MODULE_12__["default"], { namespace: values.project.name, resource: (_b = appResources === null || appResources === void 0 ? void 0 : appResources.editAppResource) === null || _b === void 0 ? void 0 : _b.data })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Scaling" }, values.resources === _import_types__WEBPACK_IMPORTED_MODULE_7__["Resources"].KnativeService ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ServerlessScalingSection__WEBPACK_IMPORTED_MODULE_10__["default"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ScalingSection__WEBPACK_IMPORTED_MODULE_9__["default"], null))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Resource Limits" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ResourceLimitSection__WEBPACK_IMPORTED_MODULE_13__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "Labels" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelSection__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (AdvancedSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/BuildConfigSection.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/BuildConfigSection.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_build__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/build */ "./public/components/build.tsx");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");





const BuildConfigSection = ({ namespace, resource }) => {
    var _a, _b;
    const buildConfigObj = resource || {
        kind: 'BuildConfig',
        metadata: {
            namespace,
        },
    };
    const strategyType = Object(_console_internal_components_build__WEBPACK_IMPORTED_MODULE_3__["getStrategyType"])((_b = (_a = resource === null || resource === void 0 ? void 0 : resource.spec) === null || _a === void 0 ? void 0 : _a.strategy) === null || _b === void 0 ? void 0 : _b.type);
    const envs = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](buildConfigObj, `spec.strategy.${strategyType}.env`, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Build Configuration", fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { name: "build.triggers.webhook", label: "Configure a webhook build trigger" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { name: "build.triggers.image", label: "Automatically build a new image when the builder image changes" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { name: "build.triggers.config", label: "Launch the first build when the build configuration is created" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["EnvironmentField"], { name: "build.env", label: "Environment Variables (Build and Runtime)", obj: buildConfigObj, envs: envs, envPath: ['spec', 'strategy'] })));
};
/* harmony default export */ __webpack_exports__["default"] = (BuildConfigSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/DeploymentConfigSection.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/DeploymentConfigSection.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");






const DeploymentConfigSection = ({ namespace, resource, }) => {
    const { values: { resources }, } = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormikContext"])();
    const deploymentConfigObj = resource || {
        kind: 'DeploymentConfig',
        metadata: {
            namespace,
        },
    };
    const envs = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](deploymentConfigObj, 'spec.template.spec.containers[0].env', []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Deployment", fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { name: "deployment.triggers.image", label: "Auto deploy when new image is available" }),
        resources === _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].OpenShift && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { name: "deployment.triggers.config", label: "Auto deploy when deployment configuration changes" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["EnvironmentField"], { name: "deployment.env", label: "Environment Variables (Runtime only)", envs: envs, obj: deploymentConfigObj, envPath: ['spec', 'template', 'spec', 'containers'] })));
};
/* harmony default export */ __webpack_exports__["default"] = (DeploymentConfigSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/LabelSection.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/LabelSection.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");




const LabelSection = () => {
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const labels = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SelectorInput"].arrayify(values.labels);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Labels", subTitle: "Each label is applied to each created resource." },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SelectorInput"], { onChange: (val) => setFieldValue('labels', _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SelectorInput"].objectify(val)), tags: labels })));
};
/* harmony default export */ __webpack_exports__["default"] = (LabelSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/ResourceLimitSection.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/ResourceLimitSection.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");





const ResourceLimitSection = () => {
    const { values: { limits: { cpu, memory }, }, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Resource Limit" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-section-heading-tertiary" }, "CPU"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["ResourceLimitField"], { name: "limits.cpu.request", label: "Request", unitName: "limits.cpu.requestUnit", unitOptions: _import_types__WEBPACK_IMPORTED_MODULE_4__["CPUUnits"], defaultUnitSize: `${cpu.defaultRequestUnit}`, helpText: "The minimum amount of CPU the container is guaranteed." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["ResourceLimitField"], { name: "limits.cpu.limit", label: "Limit", unitName: "limits.cpu.limitUnit", unitOptions: _import_types__WEBPACK_IMPORTED_MODULE_4__["CPUUnits"], defaultUnitSize: `${cpu.defaultLimitUnit}`, helpText: "The maximum amount of CPU the container is allowed to use when running." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-section-heading-tertiary" }, "Memory"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["ResourceLimitField"], { name: "limits.memory.request", label: "Request", unitName: "limits.memory.requestUnit", unitOptions: _import_types__WEBPACK_IMPORTED_MODULE_4__["MemoryUnits"], defaultUnitSize: `${memory.defaultRequestUnit}`, helpText: "The minimum amount of Memory the container is guaranteed." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["ResourceLimitField"], { name: "limits.memory.limit", label: "Limit", unitName: "limits.memory.limitUnit", unitOptions: _import_types__WEBPACK_IMPORTED_MODULE_4__["MemoryUnits"], defaultUnitSize: `${memory.defaultLimitUnit}`, helpText: "The maximum amount of Memory the container is allowed to use when running." })));
};
/* harmony default export */ __webpack_exports__["default"] = (ResourceLimitSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/ScalingSection.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/ScalingSection.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");



const ScalingSection = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Scaling", subTitle: "Replicas are scaled manually based on CPU usage." },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["NumberSpinnerField"], { name: "deployment.replicas", label: "Replicas", helpText: "The number of instances of your image." })));
};
/* harmony default export */ __webpack_exports__["default"] = (ScalingSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/advanced/ServerlessScalingSection.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/advanced/ServerlessScalingSection.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");



const ServerlessScalingSection = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Scaling", subTitle: "Set the autoscaler parameters around pods and concurrency limits in this section." },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["NumberSpinnerField"], { name: "serverless.scaling.minpods", label: "Min Pods", helpText: "The lower limit for the number of pods that can be set by autoscaler. If not specified defaults to 0." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["NumberSpinnerField"], { name: "serverless.scaling.maxpods", label: "Max Pods", helpText: "The upper limit for the number of pods that can be set by autoscaler." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["NumberSpinnerField"], { name: "serverless.scaling.concurrencytarget", label: "Concurrency Target", helpText: "Defines how many concurrent requests are wanted per instance of the application at a given time (soft limit) and is the recommended configuration for autoscaling. If not specified, will be defaulted to the value set in the cluster config." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["NumberSpinnerField"], { name: "serverless.scaling.concurrencylimit", label: "Concurrency Limit", helpText: "Limits the amount of concurrent requests allowed into one instance of the application at a given time (hard limit), and is configured in the revision template. If not specified, will be defaulted to the value set in the cluster config." })));
};
/* harmony default export */ __webpack_exports__["default"] = (ServerlessScalingSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/app/AppSection.tsx":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/import/app/AppSection.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _ApplicationSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationSelector */ "./packages/dev-console/src/components/import/app/ApplicationSelector.tsx");






const AppSection = ({ project, noProjectsAvailable, extraMargin }) => {
    const [initialApplication] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('application.initial');
    const [formType] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('formType');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "General", extraMargin: extraMargin },
        noProjectsAvailable && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, "data-test-id": "application-form-project-name", name: "project.name", label: "Project Name", helpText: "A unique name for the project.", required: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, "data-test-id": "application-form-project-display-name", name: "project.displayName", label: "Project Display Name" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["TextAreaField"], { "data-test-id": "application-form-project-description", name: "project.description", label: "Project Description" }))),
        !initialApplication.value && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationSelector__WEBPACK_IMPORTED_MODULE_5__["default"], { namespace: project.name, noProjectsAvailable: noProjectsAvailable })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, "data-test-id": "application-form-app-name", name: "name", label: "Name", helpText: "A unique name given to the component that will be used to name associated resources.", isDisabled: formType.value && formType.value === 'edit', required: !(formType.value && formType.value === 'edit') })));
};
/* harmony default export */ __webpack_exports__["default"] = (AppSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/app/ApplicationSelector.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/app/ApplicationSelector.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _dropdown_ApplicationDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dropdown/ApplicationDropdown */ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx");








const ApplicationSelector = ({ namespace, noProjectsAvailable, }) => {
    const [applicationsAvailable, setApplicationsAvailable] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const projectsAvailable = !noProjectsAvailable;
    const [selectedKey, { touched, error }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])('application.selectedKey');
    const { setFieldValue, setFieldTouched } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getFieldId"])('application-name', 'dropdown');
    const isValid = !(touched && error);
    const errorMessage = !isValid ? error : '';
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["useFormikValidationFix"])(selectedKey.value);
    const onDropdownChange = (key, application) => {
        setFieldValue('application.selectedKey', key);
        setFieldTouched('application.selectedKey', true);
        setFieldValue('application.name', Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeApplicationValue"])(application, key));
        setFieldTouched('application.name', true);
    };
    const handleOnLoad = (applicationList) => {
        const noApplicationsAvailable = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](applicationList);
        setApplicationsAvailable(!noApplicationsAvailable);
        if (noApplicationsAvailable) {
            setFieldValue('application.selectedKey', '');
            setFieldValue('application.name', '');
        }
    };
    const actionItems = [
        {
            actionTitle: 'Create Application',
            actionKey: _const__WEBPACK_IMPORTED_MODULE_5__["CREATE_APPLICATION_KEY"],
        },
        {
            actionTitle: 'Unassigned',
            actionKey: _const__WEBPACK_IMPORTED_MODULE_5__["UNASSIGNED_KEY"],
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        projectsAvailable && applicationsAvailable && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: fieldId, label: "Application", helperTextInvalid: errorMessage, isValid: isValid, helperText: "Select an application for your grouping or Unassigned to not use an application grouping." },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_ApplicationDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], { dropDownClassName: "dropdown--full-width", menuClassName: "dropdown-menu--text-wrap", id: fieldId, namespace: namespace, actionItems: actionItems, autoSelect: true, selectedKey: selectedKey.value, onChange: onDropdownChange, onLoad: handleOnLoad }))),
        (!applicationsAvailable || selectedKey.value === _const__WEBPACK_IMPORTED_MODULE_5__["CREATE_APPLICATION_KEY"]) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, required: selectedKey.value === _const__WEBPACK_IMPORTED_MODULE_5__["CREATE_APPLICATION_KEY"], name: "application.name", label: "Application Name", "data-test-id": "application-form-app-input", helpText: "A unique name given to the application grouping to label your resources." }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ApplicationSelector);


/***/ }),

/***/ "./packages/dev-console/src/components/import/route/CreateRoute.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/route/CreateRoute.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");






const CreateRoute = () => {
    const { values: { image: { ports }, route: { defaultUnknownPort, targetPort }, }, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const portOptions = ports.reduce((acc, port) => {
        const name = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_5__["makePortName"])(port);
        acc[name] = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            port.containerPort,
            " \u2192 ",
            port.containerPort,
            " (",
            port.protocol,
            ")"));
        return acc;
    }, {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: "route.hostname", label: "Hostname", helpText: "Public hostname for the route. If not specified, a hostname is generated." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: "route.path", label: "Path", placeholder: "/", helpText: "Path that the router watches to route traffic to the service." }),
        lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](ports) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: "route.unknownTargetPort", label: "Target Port", placeholder: defaultUnknownPort, helpText: "Target port for traffic." })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["DropdownField"], { name: "route.targetPort", label: "Target Port", items: portOptions, title: portOptions[targetPort] || 'Select target port', helpText: "Target port for traffic.", fullWidth: true }))));
};
/* harmony default export */ __webpack_exports__["default"] = (CreateRoute);


/***/ }),

/***/ "./packages/dev-console/src/components/import/route/RouteCheckbox.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/route/RouteCheckbox.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const RouteCheckbox = ({ isDisabled }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["CheckboxField"], { name: "route.create", label: "Create a route to the application", helpText: "Exposes your application at a public URL", isDisabled: isDisabled }));
};
/* harmony default export */ __webpack_exports__["default"] = (RouteCheckbox);


/***/ }),

/***/ "./packages/dev-console/src/components/import/route/RouteSection.tsx":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/route/RouteSection.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _CreateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateRoute */ "./packages/dev-console/src/components/import/route/CreateRoute.tsx");
/* harmony import */ var _SecureRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecureRoute */ "./packages/dev-console/src/components/import/route/SecureRoute.tsx");




const RouteSection = ({ route }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"], { title: "Routing" }, route.create && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CreateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecureRoute__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (RouteSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/route/SecureRoute.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/route/SecureRoute.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");





const SecureRoute = () => {
    const { values: { route: { secure, tls }, }, } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["CheckboxField"], { name: "route.secure", label: "Secure Route", formLabel: "Security", helpText: "Routes can be secured using several TLS termination types for serving certificates." }),
        secure && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DropdownField"], { name: "route.tls.termination", label: "TLS Termination", items: _import_types__WEBPACK_IMPORTED_MODULE_4__["TerminationTypes"], title: "Select termination type", fullWidth: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DropdownField"], { name: "route.tls.insecureEdgeTerminationPolicy", label: "Insecure Traffic", items: tls.termination === 'passthrough'
                    ? _import_types__WEBPACK_IMPORTED_MODULE_4__["PassthroughInsecureTrafficTypes"]
                    : _import_types__WEBPACK_IMPORTED_MODULE_4__["InsecureTrafficTypes"], title: "Select insecure traffic type", helpText: "Policy for traffic on insecure schemes like HTTP.", fullWidth: true }),
            tls.termination && tls.termination !== 'passthrough' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Certificates"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false }, "TLS certificates for edge and re-encrypt termination. If not specified, the router's default certificate is used."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DroppableFileInputField"], { name: "route.tls.certificate", label: "Certificate", helpText: "The PEM format certificate. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DroppableFileInputField"], { name: "route.tls.privateKey", label: "Private Key", helpText: "The PEM format key. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DroppableFileInputField"], { name: "route.tls.caCertificate", label: "CA Certificate", helpText: "The PEM format CA certificate chain. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." }),
                tls.termination === 'reencrypt' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DroppableFileInputField"], { name: "route.tls.destinationCaCertificate", label: "Destination CA Certificate", helpText: "The PEM format CA certificate chain to validate the endpoint certificate for re-encrypt termination. Upload file by dragging & dropping, selecting it, or pasting from the clipboard." }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (SecureRoute);


/***/ }),

/***/ "./packages/dev-console/src/components/import/serverless/ServerlessRouteSection.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/serverless/ServerlessRouteSection.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");






const ServerlessRouteSection = ({ route }) => {
    const { values: { image: { ports }, route: { defaultUnknownPort, targetPort: routeTargetPort }, }, } = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
    const targetPort = routeTargetPort.split('-')[0];
    const portOptions = ports.reduce((acc, port) => {
        const name = port === null || port === void 0 ? void 0 : port.containerPort;
        if (name) {
            acc[name] = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, port.containerPort);
        }
        return acc;
    }, {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "Routing" }, route.create && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](ports) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, name: "route.unknownTargetPort", label: "Target Port", placeholder: defaultUnknownPort, helpText: "Target port for traffic." })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["DropdownField"], { name: "route.targetPort", label: "Target Port", items: portOptions, title: portOptions[targetPort] || 'Select target port', helpText: "Target port for traffic.", fullWidth: true }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ServerlessRouteSection);


/***/ }),

/***/ "./packages/dev-console/src/components/progressive-list/ProgressiveList.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/progressive-list/ProgressiveList.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressiveListFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressiveListFooter */ "./packages/dev-console/src/components/progressive-list/ProgressiveListFooter.tsx");
/* harmony import */ var _ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressiveListItem */ "./packages/dev-console/src/components/progressive-list/ProgressiveListItem.tsx");



const ProgressiveList = ({ visibleItems, children, onVisibleItemChange, text, }) => {
    const items = [];
    const validChildren = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).filter((child) => {
        const { name } = child.props;
        const validChild = child.type === _ProgressiveListItem__WEBPACK_IMPORTED_MODULE_2__["default"];
        const isNameInVisibleItems = visibleItems.includes(name);
        if (validChild && !isNameInVisibleItems)
            items.push(name);
        return validChild;
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        visibleItems.map((item) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: item }, validChildren.find(({ props }) => item === props.name)))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProgressiveListFooter__WEBPACK_IMPORTED_MODULE_1__["default"], { text: text, items: items, onShowItem: onVisibleItemChange })));
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressiveList);


/***/ }),

/***/ "./packages/dev-console/src/components/progressive-list/ProgressiveListFooter.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/progressive-list/ProgressiveListFooter.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");


const ProgressiveListFooter = ({ text, items, onShowItem, }) => {
    if (!items || items.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        text,
        items.map((opt, index) => {
            let preText = ' ';
            let postText = '';
            if (items.length - 1 === index) {
                preText = items.length !== 1 ? ' and ' : ' ';
                postText = '.';
            }
            else {
                postText = items.length - 2 !== index ? ',' : '';
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: opt },
                preText,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: "link", isInline: true, onClick: () => onShowItem(opt) }, opt),
                postText));
        })));
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressiveListFooter);


/***/ }),

/***/ "./packages/dev-console/src/components/progressive-list/ProgressiveListItem.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/progressive-list/ProgressiveListItem.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProgressiveListItem = ({ children }) => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        element.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: element }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressiveListItem);


/***/ })

}]);
//# sourceMappingURL=dev-console-deployImage~dev-console-edit~git-import-form~source-to-image-form-f38d4141cb6962e598ec.js.map