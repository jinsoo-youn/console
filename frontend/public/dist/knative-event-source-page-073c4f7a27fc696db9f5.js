(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knative-event-source-page"],{

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
const NamespacedPage = ({ children, disabled, onNamespaceChange, hideApplications = true, variant = NamespacedPageVariants.default, toolbar, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page" },
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

/***/ "./packages/dev-console/src/components/import/section/FormSection.scss":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/section/FormSection.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormSection.scss */ "./packages/dev-console/src/components/import/section/FormSection.scss");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormSection_scss__WEBPACK_IMPORTED_MODULE_3__);




const flexStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 'var(--pf-global--spacer--md) 0',
};
const FormSection = ({ title, subTitle, fullWidth, children, flexLayout, extraMargin, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pf-c-form', {
        'co-m-pane__form': !fullWidth,
        'odc-form-section--extra-margin': extraMargin,
    }), style: flexLayout ? flexStyle : {} },
    title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "odc-form-section__heading" }, title),
    subTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false }, subTitle),
    children));
/* harmony default export */ __webpack_exports__["default"] = (FormSection);


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


/***/ }),

/***/ "./packages/dev-console/src/utils/resource-label-utils.ts":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/utils/resource-label-utils.ts ***!
  \****************************************************************/
/*! exports provided: getAppLabels, getGitAnnotations, getCommonAnnotations, getTriggerAnnotation, getPodLabels, mergeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppLabels", function() { return getAppLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGitAnnotations", function() { return getGitAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonAnnotations", function() { return getCommonAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerAnnotation", function() { return getTriggerAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodLabels", function() { return getPodLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const getAppLabels = (name, application, imageStreamName, selectedTag, namespace) => {
    const labels = Object.assign({ app: name, 'app.kubernetes.io/instance': name, 'app.kubernetes.io/component': name }, (imageStreamName && {
        'app.kubernetes.io/name': imageStreamName,
        'app.openshift.io/runtime': imageStreamName,
    }));
    if (application && application.trim().length > 0) {
        labels['app.kubernetes.io/part-of'] = application;
    }
    if (selectedTag) {
        labels['app.openshift.io/runtime-version'] = selectedTag;
    }
    if (namespace) {
        labels['app.openshift.io/runtime-namespace'] = namespace;
    }
    return labels;
};
const getGitAnnotations = (gitURL, gitRef) => {
    const ref = gitRef || 'master';
    return {
        'app.openshift.io/vcs-uri': gitURL,
        'app.openshift.io/vcs-ref': ref,
    };
};
const getCommonAnnotations = () => {
    return {
        'openshift.io/generated-by': 'OpenShiftWebConsole',
    };
};
const getTriggerAnnotation = (name, namespace, imageTrigger, tag = 'latest') => ({
    [_console_shared__WEBPACK_IMPORTED_MODULE_1__["TRIGGERS_ANNOTATION"]]: JSON.stringify([
        {
            from: { kind: 'ImageStreamTag', name: `${name}:${tag}`, namespace },
            fieldPath: `spec.template.spec.containers[?(@.name=="${name}")].image`,
            pause: `${!imageTrigger}`,
        },
    ]),
});
const getPodLabels = (name) => {
    return {
        app: name,
        deploymentconfig: name,
    };
};
const mergeData = (originalResource, newResource) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const mergedData = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, originalResource || {}, newResource);
    mergedData.metadata.labels = newResource.metadata.labels;
    if (mergedData.metadata.annotations) {
        mergedData.metadata.annotations = newResource.metadata.annotations;
    }
    if ((_c = (_b = (_a = mergedData.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.labels) {
        mergedData.spec.template.metadata.labels = (_f = (_e = (_d = newResource.spec) === null || _d === void 0 ? void 0 : _d.template) === null || _e === void 0 ? void 0 : _e.metadata) === null || _f === void 0 ? void 0 : _f.labels;
    }
    if ((_j = (_h = (_g = mergedData.spec) === null || _g === void 0 ? void 0 : _g.template) === null || _h === void 0 ? void 0 : _h.spec) === null || _j === void 0 ? void 0 : _j.containers) {
        mergedData.spec.template.spec.containers = newResource.spec.template.spec.containers;
    }
    if ((_k = mergedData === null || mergedData === void 0 ? void 0 : mergedData.spec) === null || _k === void 0 ? void 0 : _k.strategy) {
        mergedData.spec.strategy = newResource.spec.strategy;
    }
    if ((_l = mergedData.spec) === null || _l === void 0 ? void 0 : _l.triggers) {
        mergedData.spec.triggers = newResource.spec.triggers;
    }
    return mergedData;
};


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/AdvancedSection.tsx":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/AdvancedSection.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_dev_console_src_components_import_advanced_ResourceLimitSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/dev-console/src/components/import/advanced/ResourceLimitSection */ "./packages/dev-console/src/components/import/advanced/ResourceLimitSection.tsx");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _console_dev_console_src_components_progressive_list_ProgressiveList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/progressive-list/ProgressiveList */ "./packages/dev-console/src/components/progressive-list/ProgressiveList.tsx");
/* harmony import */ var _console_dev_console_src_components_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/progressive-list/ProgressiveListItem */ "./packages/dev-console/src/components/progressive-list/ProgressiveListItem.tsx");





const AdvancedSection = () => {
    const [visibleItems, setVisibleItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const handleVisibleItemChange = (item) => {
        setVisibleItems([...visibleItems, item]);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Advanced Options", fullWidth: true, extraMargin: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_progressive_list_ProgressiveList__WEBPACK_IMPORTED_MODULE_3__["default"], { text: "Click on the names to access advanced options for", visibleItems: visibleItems, onVisibleItemChange: handleVisibleItemChange },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_progressive_list_ProgressiveListItem__WEBPACK_IMPORTED_MODULE_4__["default"], { name: "Resource Limits" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_advanced_ResourceLimitSection__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (AdvancedSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/EventSource.tsx":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/EventSource.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_dev_console_src_utils_application_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/dev-console/src/utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _eventSource_validation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventSource-validation-utils */ "./packages/knative-plugin/src/components/add/eventSource-validation-utils.ts");
/* harmony import */ var _EventSourceForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventSourceForm */ "./packages/knative-plugin/src/components/add/EventSourceForm.tsx");
/* harmony import */ var _utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/create-eventsources-utils */ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts");











const EventSource = ({ namespace, eventSourceStatus, activeApplication, contextSource, }) => {
    const serviceName = (contextSource === null || contextSource === void 0 ? void 0 : contextSource.split('/').pop()) || '';
    const initialValues = {
        project: {
            name: namespace || '',
            displayName: '',
            description: '',
        },
        application: {
            initial: Object(_console_dev_console_src_utils_application_utils__WEBPACK_IMPORTED_MODULE_7__["sanitizeApplicationValue"])(activeApplication),
            name: Object(_console_dev_console_src_utils_application_utils__WEBPACK_IMPORTED_MODULE_7__["sanitizeApplicationValue"])(activeApplication),
            selectedKey: activeApplication,
        },
        name: '',
        apiVersion: '',
        sink: {
            knativeService: serviceName,
        },
        limits: {
            cpu: {
                request: '',
                requestUnit: 'm',
                defaultRequestUnit: 'm',
                limit: '',
                limitUnit: 'm',
                defaultLimitUnit: 'm',
            },
            memory: {
                request: '',
                requestUnit: 'Mi',
                defaultRequestUnit: 'Mi',
                limit: '',
                limitUnit: 'Mi',
                defaultLimitUnit: 'Mi',
            },
        },
        type: '',
        data: {},
        yamlData: '',
    };
    const createResources = (rawFormData) => {
        const knEventSourceResource = Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_10__["getEventSourceResource"])(rawFormData);
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceFor"])(knEventSourceResource)), knEventSourceResource);
    };
    const handleSubmit = (values, actions) => {
        const { project: { name: projectName }, } = values;
        const eventSrcRequest = createResources(values);
        eventSrcRequest
            .then(() => {
            actions.setSubmitting(false);
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(`/topology/ns/${projectName}`);
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].goBack, validateOnBlur: false, validateOnChange: false, validationSchema: _eventSource_validation_utils__WEBPACK_IMPORTED_MODULE_8__["eventSourceValidationSchema"] }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EventSourceForm__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, { namespace: namespace, eventSourceStatus: eventSourceStatus })))));
};
const mapStateToProps = (state, ownProps) => {
    const activeApplication = ownProps.selectedApplication || Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveApplication"])(state);
    return {
        activeApplication: activeApplication !== _console_shared__WEBPACK_IMPORTED_MODULE_5__["ALL_APPLICATIONS_KEY"] ? activeApplication : '',
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(EventSource));


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/EventSourceAlert.tsx":
/*!*************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/EventSourceAlert.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _utils_get_knative_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/get-knative-resources */ "./packages/knative-plugin/src/utils/get-knative-resources.ts");





const EventSourceAlert = ({ namespace, eventSourceStatus }) => {
    const knServiceResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => (Object.assign(Object.assign({}, Object(_utils_get_knative_resources__WEBPACK_IMPORTED_MODULE_4__["knativeServingResourcesServices"])(namespace)[0]), { limit: 1 })), [namespace]);
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_3__["useK8sWatchResource"])(knServiceResource);
    const noEventSources = eventSourceStatus === null;
    const noEventSourceAccess = !noEventSources && eventSourceStatus.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](eventSourceStatus.eventSourceList);
    const noKnativeService = loaded && !loadError && !(data === null || data === void 0 ? void 0 : data.length);
    const showAlert = noKnativeService || noEventSources || noEventSourceAccess;
    return showAlert ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "default", title: "Event Source cannot be created", isInline: true },
        noEventSourceAccess && 'You do not have write access in this project.',
        noEventSources && 'Creation of event sources are not currently supported on this cluster.',
        noKnativeService &&
            !noEventSourceAccess &&
            !noEventSources &&
            'Event Sources can only sink to Knative Services. No Knative Services exist in this project.')) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (EventSourceAlert);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/EventSourceForm.tsx":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/EventSourceForm.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _event_sources_EventSourcesSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-sources/EventSourcesSelector */ "./packages/knative-plugin/src/components/add/event-sources/EventSourcesSelector.tsx");
/* harmony import */ var _event_sources_EventSourceSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-sources/EventSourceSection */ "./packages/knative-plugin/src/components/add/event-sources/EventSourceSection.tsx");






const EventSourceForm = ({ errors, handleSubmit, handleReset, status, isSubmitting, dirty, namespace, eventSourceStatus, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["FlexForm"], { onSubmit: handleSubmit },
    eventSourceStatus && !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](eventSourceStatus.eventSourceList) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_event_sources_EventSourcesSelector__WEBPACK_IMPORTED_MODULE_4__["default"], { eventSourceList: eventSourceStatus.eventSourceList }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_event_sources_EventSourceSection__WEBPACK_IMPORTED_MODULE_5__["default"], { namespace: namespace }),
        ' ')),
    eventSourceStatus && !eventSourceStatus.loaded && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["FormFooter"], { handleReset: handleReset, errorMessage: status && status.submitError, isSubmitting: isSubmitting, submitLabel: "Create", disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel", sticky: true })));
/* harmony default export */ __webpack_exports__["default"] = (EventSourceForm);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/EventSourcePage.tsx":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/EventSourcePage.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_dev_console_src_components_NamespacedPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _console_dev_console_src_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _EventSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventSource */ "./packages/knative-plugin/src/components/add/EventSource.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _EventSourceAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventSourceAlert */ "./packages/knative-plugin/src/components/add/EventSourceAlert.tsx");
/* harmony import */ var _utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/create-eventsources-utils */ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts");










const EventSourcePage = ({ match, location }) => {
    const namespace = match.params.ns;
    const eventSourceStatus = Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_9__["useEventSourceList"])(namespace);
    const searchParams = new URLSearchParams(location.search);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_NamespacedPage__WEBPACK_IMPORTED_MODULE_4__["default"], { disabled: true, variant: _console_dev_console_src_components_NamespacedPage__WEBPACK_IMPORTED_MODULE_4__["NamespacedPageVariants"].light },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Event Sources")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_7__["KnativeEventingModel"].badge), title: "Event Sources" }, "Create an event source to register interest in a class of events from a particular system"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PageBody"], { flexLayout: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EventSourceAlert__WEBPACK_IMPORTED_MODULE_8__["default"], { namespace: namespace, eventSourceStatus: eventSourceStatus }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EventSource__WEBPACK_IMPORTED_MODULE_6__["default"], { namespace: namespace, eventSourceStatus: eventSourceStatus, selectedApplication: searchParams.get(_console_dev_console_src_const__WEBPACK_IMPORTED_MODULE_5__["QUERY_PROPERTIES"].APPLICATION), contextSource: searchParams.get(_console_dev_console_src_const__WEBPACK_IMPORTED_MODULE_5__["QUERY_PROPERTIES"].CONTEXT_SOURCE) }))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSourcePage);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/SecretKeySelector.tsx":
/*!**************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/SecretKeySelector.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/modals/error-modal */ "./public/components/modals/error-modal.jsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_value_from_pair__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils/value-from-pair */ "./public/components/utils/value-from-pair.jsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");










const SecretKeySelector = ({ name, label, namespace, }) => {
    const { setFieldValue, setFieldTouched } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const [field, { touched, error }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(name);
    const [secrets, setSecrets] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["getFieldId"])(name, 'secret-key-input');
    const isValid = !(touched && error);
    const getErrorMessage = (err) => {
        let errMsg = '';
        if (typeof err === 'string') {
            errMsg = err;
        }
        else {
            errMsg = (err === null || err === void 0 ? void 0 : err.name) || (err === null || err === void 0 ? void 0 : err.key);
        }
        return errMsg;
    };
    const errorMessage = !isValid ? getErrorMessage(error) : '';
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["useFormikValidationFix"])(field.value);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"], null, namespace)
            .then((nsSecrets) => {
            setSecrets(nsSecrets);
        })
            .catch((err) => {
            var _a;
            if (((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.status) !== 403) {
                Object(_console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_5__["errorModal"])({ error: err === null || err === void 0 ? void 0 : err.message });
            }
        });
    }, [namespace]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], { fieldId: fieldId, label: label, helperTextInvalid: errorMessage, isValid: isValid, isRequired: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_value_from_pair__WEBPACK_IMPORTED_MODULE_7__["ValueFromPair"], { pair: { secretKeyRef: field.value }, secrets: secrets, configMaps: {}, onChange: (val) => {
                setFieldValue(name, val.target.value.secretKeyRef);
                setFieldTouched(name, true);
            } })));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_9__["getActiveNamespace"])(state),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(SecretKeySelector));


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/ApiServerSection.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/ApiServerSection.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _dropdowns_ServiceAccountDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dropdowns/ServiceAccountDropdown */ "./packages/knative-plugin/src/components/dropdowns/ServiceAccountDropdown.tsx");








const ApiServerSection = () => {
    var _a, _b;
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const initVal = ((_b = (_a = values === null || values === void 0 ? void 0 : values.data) === null || _a === void 0 ? void 0 : _a.apiserversource) === null || _b === void 0 ? void 0 : _b.resources) || [];
    const initialValueResources = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](initVal)
        ? initVal.map((val) => lodash__WEBPACK_IMPORTED_MODULE_1__["values"](val))
        : [['', '']];
    const [nameValue, setNameValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialValueResources);
    const handleNameValuePairs = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ nameValuePairs }) => {
        const updatedNameValuePairs = lodash__WEBPACK_IMPORTED_MODULE_1__["compact"](nameValuePairs.map(([name, value]) => {
            if (value.length) {
                return { apiVersion: name, kind: value };
            }
            return null;
        }));
        setNameValue(nameValuePairs);
        setFieldValue('data.apiserversource.resources', updatedNameValuePairs);
    }, [setFieldValue]);
    const modeItems = {
        Ref: 'Ref',
        Resource: 'Resource',
    };
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getFieldId"])(values.type, 'res-input');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "ApiServerSource", extraMargin: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: fieldId, label: "Resource", helperText: "The list of resources to watch", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_4__["AsyncComponent"], { loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then((c) => c.NameValueEditor), nameValuePairs: nameValue, valueString: "kind", nameString: "apiVersion", addString: "Add Resource", readOnly: false, allowSorting: false, updateParentData: handleNameValuePairs })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["DropdownField"], { name: "data.apiserversource.mode", label: "Mode", items: modeItems, title: modeItems.Ref, helpText: "The mode the receive adapter controller runs under", fullWidth: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdowns_ServiceAccountDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "data.apiserversource.serviceAccountName" })));
};
/* harmony default export */ __webpack_exports__["default"] = (ApiServerSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/ContainerSourceSection.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/ContainerSourceSection.tsx ***!
  \*********************************************************************************************/
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
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _console_dev_console_src_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/dev-console/src/utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");








const containerPaths = {
    Image: 'data.containersource.template.spec.containers[0].image',
    Name: 'data.containersource.template.spec.containers[0].name',
    Env: 'data.containersource.template.spec.containers[0].env',
    Args: 'data.containersource.template.spec.containers[0].args',
};
const ContainerSourceSection = () => {
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const { data: { containersource: { template: { spec: { containers: [{ env: envs, args }], }, }, }, }, } = values;
    const initialEnvValues = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](envs) ? lodash__WEBPACK_IMPORTED_MODULE_1__["map"](envs, (env) => lodash__WEBPACK_IMPORTED_MODULE_1__["values"](env)) : [['', '']];
    const [nameValue, setNameValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialEnvValues);
    const handleNameValuePairs = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ nameValuePairs }) => {
        const updatedNameValuePairs = lodash__WEBPACK_IMPORTED_MODULE_1__["compact"](nameValuePairs.map(([name, value]) => (value.length ? { name, value } : null)));
        setNameValue(nameValuePairs);
        setFieldValue(containerPaths.Env, updatedNameValuePairs);
    }, [setFieldValue]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "ContainerSource", extraMargin: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "co-section-heading-tertiary" }, "Container"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { "data-test-id": "container-image-field", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: containerPaths.Image, label: "Image", helpText: "The image to run inside of the container", required: true, onChange: (e) => {
                setFieldValue(containerPaths.Name, Object(_console_dev_console_src_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["getSuggestedName"])(e.target.value));
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { "data-test-id": "container-name-field", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: containerPaths.Name, label: "Name", helpText: "The name of the image" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["TextColumnField"], { "data-test-id": "container-arg-field", name: containerPaths.Args, label: "Arguments", addLabel: "Add args", placeholder: "argument", helpText: "Arguments passed to the container", disableDeleteRow: (args === null || args === void 0 ? void 0 : args.length) === 1 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: "containersource-env", label: "Environment variables", helperText: "The list of variables to set in the container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then((c) => c.NameValueEditor), "data-test-id": "container-env-field", nameValuePairs: nameValue, valueString: "Value", nameString: "Name", readOnly: false, allowSorting: false, updateParentData: handleNameValuePairs }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ContainerSourceSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/CronJobSection.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/CronJobSection.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");




const CronJobSection = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "CronJobSource", extraMargin: true },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: "data.cronjobsource.data", label: "Data", helpText: "The data posted to the target function" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: "data.cronjobsource.schedule", label: "Schedule", helpText: "Schedule is described using the unix-cron string format (* * * * *)", required: true })));
/* harmony default export */ __webpack_exports__["default"] = (CronJobSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/EventSourceSection.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/EventSourceSection.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_dev_console_src_components_import_app_AppSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/components/import/app/AppSection */ "./packages/dev-console/src/components/import/app/AppSection.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _CronJobSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CronJobSection */ "./packages/knative-plugin/src/components/add/event-sources/CronJobSection.tsx");
/* harmony import */ var _SinkBindingSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SinkBindingSection */ "./packages/knative-plugin/src/components/add/event-sources/SinkBindingSection.tsx");
/* harmony import */ var _ApiServerSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ApiServerSection */ "./packages/knative-plugin/src/components/add/event-sources/ApiServerSection.tsx");
/* harmony import */ var _ContainerSourceSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContainerSourceSection */ "./packages/knative-plugin/src/components/add/event-sources/ContainerSourceSection.tsx");
/* harmony import */ var _PingSourceSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PingSourceSection */ "./packages/knative-plugin/src/components/add/event-sources/PingSourceSection.tsx");
/* harmony import */ var _KafkaSourceSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KafkaSourceSection */ "./packages/knative-plugin/src/components/add/event-sources/KafkaSourceSection.tsx");
/* harmony import */ var _YAMLEditorSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./YAMLEditorSection */ "./packages/knative-plugin/src/components/add/event-sources/YAMLEditorSection.tsx");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../import-types */ "./packages/knative-plugin/src/components/add/import-types.ts");
/* harmony import */ var _SinkSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SinkSection */ "./packages/knative-plugin/src/components/add/event-sources/SinkSection.tsx");
/* harmony import */ var _AdvancedSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../AdvancedSection */ "./packages/knative-plugin/src/components/add/AdvancedSection.tsx");
/* harmony import */ var _utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils/create-eventsources-utils */ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts");


















const EventSourceSection = ({ namespace }) => {
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const projectResource = { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"].kind, prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"].id, isList: true };
    const [data, loaded] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_4__["useK8sWatchResource"])(projectResource);
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["useFormikValidationFix"])(values);
    if (!values.type) {
        return null;
    }
    let EventSource;
    switch (values.type) {
        case _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].CronJobSource:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CronJobSection__WEBPACK_IMPORTED_MODULE_7__["default"], null);
            break;
        case _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].SinkBinding:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SinkBindingSection__WEBPACK_IMPORTED_MODULE_8__["default"], null);
            break;
        case _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].ApiServerSource:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApiServerSection__WEBPACK_IMPORTED_MODULE_9__["default"], null);
            break;
        case _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].KafkaSource:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_KafkaSourceSection__WEBPACK_IMPORTED_MODULE_12__["default"], null);
            break;
        case _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].ContainerSource:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ContainerSourceSection__WEBPACK_IMPORTED_MODULE_10__["default"], null);
            break;
        case _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].PingSource:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PingSourceSection__WEBPACK_IMPORTED_MODULE_11__["default"], null);
            break;
        default:
            EventSource = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_YAMLEditorSection__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        EventSource,
        Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_17__["isKnownEventSource"])(values.type) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SinkSection__WEBPACK_IMPORTED_MODULE_15__["default"], { namespace: namespace }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_app_AppSection__WEBPACK_IMPORTED_MODULE_5__["default"], { project: values.project, noProjectsAvailable: loaded && lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](data), extraMargin: true }))),
        values.type === _import_types__WEBPACK_IMPORTED_MODULE_14__["EventSources"].KafkaSource && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AdvancedSection__WEBPACK_IMPORTED_MODULE_16__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSourceSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/EventSourcesSelector.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/EventSourcesSelector.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./packages/knative-plugin/src/const.ts");
/* harmony import */ var _utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/fetch-dynamic-eventsources-utils */ "./packages/knative-plugin/src/utils/fetch-dynamic-eventsources-utils.ts");
/* harmony import */ var _utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/create-eventsources-utils */ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts");
/* harmony import */ var _console_dev_console_src_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/dev-console/src/const */ "./packages/dev-console/src/const.ts");









const EventSourcesSelector = ({ eventSourceList }) => {
    const eventSourceItems = Object.keys(eventSourceList).length;
    const { values: { application: { selectedKey }, }, setFieldValue, setFieldTouched, validateForm, setErrors, setStatus, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const handleItemChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((item) => {
        setErrors({});
        setStatus({});
        if (Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_7__["isKnownEventSource"])(item)) {
            const nameData = `data.${item.toLowerCase()}`;
            const sourceData = Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_7__["getEventSourceData"])(item.toLowerCase());
            setFieldValue(nameData, sourceData);
            setFieldTouched(nameData, true);
        }
        const selDataModel = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](Object(_utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_6__["getEventSourceModels"])(), { kind: item });
        const selApiVersion = selDataModel
            ? `${selDataModel === null || selDataModel === void 0 ? void 0 : selDataModel.apiGroup}/${selDataModel === null || selDataModel === void 0 ? void 0 : selDataModel.apiVersion}`
            : `${_const__WEBPACK_IMPORTED_MODULE_5__["KNATIVE_EVENT_SOURCE_APIGROUP"]}/v1alpha1`;
        const name = lodash__WEBPACK_IMPORTED_MODULE_1__["kebabCase"](item);
        setFieldValue('name', name);
        setFieldTouched('name', true);
        if (!selectedKey || selectedKey === _console_dev_console_src_const__WEBPACK_IMPORTED_MODULE_8__["CREATE_APPLICATION_KEY"]) {
            setFieldValue('application.name', `${name}-app`);
            setFieldTouched('application.name', true);
        }
        setFieldValue('apiVersion', selApiVersion);
        setFieldTouched('apiVersion', true);
        validateForm();
    }, [setErrors, setStatus, setFieldValue, setFieldTouched, selectedKey, validateForm]);
    const itemSelectorField = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ItemSelectorField"], { itemList: eventSourceList, loadingItems: !eventSourceItems, name: "type", onSelect: handleItemChange, autoSelect: true }));
    return eventSourceItems > 1 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Type", fullWidth: true, extraMargin: true }, itemSelectorField)) : (itemSelectorField);
};
/* harmony default export */ __webpack_exports__["default"] = (EventSourcesSelector);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/KafkaSourceNetSection.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/KafkaSourceNetSection.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _SecretKeySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SecretKeySelector */ "./packages/knative-plugin/src/components/add/SecretKeySelector.tsx");




const KafkaSourceNetSection = () => {
    var _a, _b, _c, _d, _e, _f;
    const { values: { data }, } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const saslEnable = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.kafkasource) === null || _a === void 0 ? void 0 : _a.net) === null || _b === void 0 ? void 0 : _b.sasl) === null || _c === void 0 ? void 0 : _c.enable;
    const tlsEnable = (_f = (_e = (_d = data === null || data === void 0 ? void 0 : data.kafkasource) === null || _d === void 0 ? void 0 : _d.net) === null || _e === void 0 ? void 0 : _e.tls) === null || _f === void 0 ? void 0 : _f.enable;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "co-section-heading-tertiary" }, "Net"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { "data-test-id": "kafkasource-sasl-field", name: "data.kafkasource.net.sasl.enable", formLabel: "SASL", label: "Enable" }),
        saslEnable && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretKeySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "data.kafkasource.net.sasl.user.secretKeyRef", label: "User" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretKeySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "data.kafkasource.net.sasl.password.secretKeyRef", label: "Password" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["CheckboxField"], { "data-test-id": "kafkasource-tls-field", name: "data.kafkasource.net.tls.enable", formLabel: "TLS", label: "Enable" }),
        tlsEnable && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretKeySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "data.kafkasource.net.tls.caCert.secretKeyRef", label: "CA Certificate" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretKeySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "data.kafkasource.net.tls.cert.secretKeyRef", label: "Certificate" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretKeySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "data.kafkasource.net.tls.key.secretKeyRef", label: "Key" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (KafkaSourceNetSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/KafkaSourceSection.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/KafkaSourceSection.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _KafkaSourceNetSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KafkaSourceNetSection */ "./packages/knative-plugin/src/components/add/event-sources/KafkaSourceNetSection.tsx");
/* harmony import */ var _dropdowns_ServiceAccountDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dropdowns/ServiceAccountDropdown */ "./packages/knative-plugin/src/components/dropdowns/ServiceAccountDropdown.tsx");







const KafkaSourceSection = () => {
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const { data: { kafkasource: { bootstrapServers, topics }, }, } = values;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "KafkaSource", extraMargin: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["TextColumnField"], { "data-test-id": "kafkasource-bootstrapservers-field", name: "data.kafkasource.bootstrapServers", label: "BootstrapServers", addLabel: "Add Bootstrapservers", helpText: "The address of the Kafka broker", required: true, disableDeleteRow: (bootstrapServers === null || bootstrapServers === void 0 ? void 0 : bootstrapServers.length) === 1 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["TextColumnField"], { "data-test-id": "kafkasource-topics-field", name: "data.kafkasource.topics", label: "Topics", addLabel: "Add Topics", helpText: "Virtual groups across Kafka brokers", required: true, disableDeleteRow: (topics === null || topics === void 0 ? void 0 : topics.length) === 1 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { "data-test-id": "kafkasource-consumergroup-field", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInputTypes"].text, name: "data.kafkasource.consumerGroup", label: "ConsumerGroup", helpText: "A group that tracks maximum offset consumed", required: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_KafkaSourceNetSection__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdowns_ServiceAccountDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "data.kafkasource.serviceAccountName" })));
};
/* harmony default export */ __webpack_exports__["default"] = (KafkaSourceSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/PingSourceSection.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/PingSourceSection.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");




const PingSourceSection = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "PingSource", extraMargin: true },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: "data.pingsource.data", label: "Data", helpText: "The data posted to the target function" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: "data.pingsource.schedule", label: "Schedule", helpText: "Schedule is described using the unix-cron string format (* * * * *)", required: true })));
/* harmony default export */ __webpack_exports__["default"] = (PingSourceSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/SinkBindingSection.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/SinkBindingSection.tsx ***!
  \*****************************************************************************************/
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
/* harmony import */ var _console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");







const SinkBindingSection = () => {
    var _a, _b, _c, _d;
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const initVal = ((_d = (_c = (_b = (_a = values === null || values === void 0 ? void 0 : values.data) === null || _a === void 0 ? void 0 : _a.sinkbinding) === null || _b === void 0 ? void 0 : _b.subject) === null || _c === void 0 ? void 0 : _c.selector) === null || _d === void 0 ? void 0 : _d.matchLabels) || {};
    const initialValueResources = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](initVal)
        ? lodash__WEBPACK_IMPORTED_MODULE_1__["map"](initVal, (key, val) => [val, key])
        : [['', '']];
    const [nameValue, setNameValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialValueResources);
    const handleNameValuePairs = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ nameValuePairs }) => {
        let updatedNameValuePairs = {};
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](nameValuePairs, ([name, value]) => {
            if (value.length) {
                updatedNameValuePairs = Object.assign(Object.assign({}, updatedNameValuePairs), { [name]: value });
                return updatedNameValuePairs;
            }
            return updatedNameValuePairs;
        });
        setNameValue(nameValuePairs);
        setFieldValue('data.sinkbinding.subject.selector.matchLabels', updatedNameValuePairs);
    }, [setFieldValue]);
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getFieldId"])(values.type, 'subject-matchLabels');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "SinkBinding", extraMargin: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "co-section-heading-tertiary" }, "Subject"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { "data-test-id": "sinkbinding-apiversion-field", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: "data.sinkbinding.subject.apiVersion", label: "apiVersion", required: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { "data-test-id": "sinkbinding-kind-field", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: "data.sinkbinding.subject.kind", label: "Kind", required: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: fieldId, label: "Match Labels" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then((c) => c.NameValueEditor), nameValuePairs: nameValue, valueString: "Value", nameString: "Name", addString: "Add Values", readOnly: false, allowSorting: false, updateParentData: handleNameValuePairs }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SinkBindingSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/SinkSection.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/SinkSection.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _utils_get_knative_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/get-knative-resources */ "./packages/knative-plugin/src/utils/get-knative-resources.ts");







const SinkSection = ({ namespace }) => {
    const { setFieldValue, setFieldTouched, validateForm, initialValues } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const autocompleteFilter = (strText, item) => { var _a; return fuzzysearch__WEBPACK_IMPORTED_MODULE_1__(strText, (_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.name); };
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getFieldId"])('sink-name', 'dropdown');
    const onChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((selectedValue) => {
        if (selectedValue) {
            setFieldTouched('sink.knativeService', true);
            setFieldValue('sink.knativeService', selectedValue);
            validateForm();
        }
    }, [setFieldValue, setFieldTouched, validateForm]);
    const contextAvailable = !!initialValues.sink.knativeService;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "Sink", extraMargin: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: fieldId, helperText: !contextAvailable ? 'Select a Service to sink to.' : '', isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["ResourceDropdownField"], { name: "sink.knativeService", label: "Knative Service", resources: Object(_utils_get_knative_resources__WEBPACK_IMPORTED_MODULE_6__["knativeServingResourcesServices"])(namespace), dataSelector: ['metadata', 'name'], fullWidth: true, required: true, placeholder: "Select Knative Service", showBadge: true, disabled: contextAvailable, onChange: onChange, autocompleteFilter: autocompleteFilter, autoSelect: true }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SinkSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/event-sources/YAMLEditorSection.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/event-sources/YAMLEditorSection.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/create-eventsources-utils */ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts");






const YAMLEditorSection = () => {
    const { setFieldValue, setFieldTouched, values } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const formData = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](values);
    if (formData.current.type !== values.type) {
        formData.current = values;
    }
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_5__["isKnownEventSource"])(values.type)) {
            setFieldValue('yamlData', Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_5__["getEventSourcesDepResource"])(formData.current)));
            setFieldTouched('yamlData', true);
        }
    }, [values.type, setFieldTouched, setFieldValue]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { title: values.type, flexLayout: true, fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["YAMLEditorField"], { name: "yamlData" })));
};
/* harmony default export */ __webpack_exports__["default"] = (YAMLEditorSection);


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/eventSource-validation-utils.ts":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/eventSource-validation-utils.ts ***!
  \************************************************************************************/
/*! exports provided: sourceDataSpecSchema, eventSourceValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataSpecSchema", function() { return sourceDataSpecSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventSourceValidationSchema", function() { return eventSourceValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_dev_console_src_components_import_validation_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/dev-console/src/components/import/validation-schema */ "./packages/dev-console/src/components/import/validation-schema.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-types */ "./packages/knative-plugin/src/components/add/import-types.ts");
/* harmony import */ var _utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/create-eventsources-utils */ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts");




const sinkServiceSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    knativeService: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
});
const sourceDataSpecSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]()
    .when('type', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_2__["EventSources"].CronJobSource,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        cronjobsource: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            data: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(253, 'Cannot be longer than 253 characters.'),
            schedule: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
                .max(253, 'Cannot be longer than 253 characters.')
                .required('Required'),
        }),
    }),
})
    .when('type', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_2__["EventSources"].PingSource,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        pingsource: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            data: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().max(253, 'Cannot be longer than 253 characters.'),
            schedule: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
                .max(253, 'Cannot be longer than 253 characters.')
                .required('Required'),
        }),
    }),
})
    .when('type', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_2__["EventSources"].SinkBinding,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        sinkbinding: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            subject: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                selector: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                    matchLabels: yup__WEBPACK_IMPORTED_MODULE_0__["object"](),
                }),
                apiVersion: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
                    .max(253, 'Cannot be longer than 253 characters.')
                    .required('Required'),
                kind: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
                    .max(253, 'Cannot be longer than 253 characters.')
                    .required('Required'),
            }),
        }),
    }),
})
    .when('type', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_2__["EventSources"].ApiServerSource,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        apiserversource: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            resources: yup__WEBPACK_IMPORTED_MODULE_0__["array"]()
                .of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                apiVersion: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                kind: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            }))
                .required('Required'),
        }),
    }),
})
    .when('type', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_2__["EventSources"].KafkaSource,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        kafkasource: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            bootstrapServers: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')),
            consumerGroup: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            topics: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')),
            net: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                sasl: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                    enable: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
                    user: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('enable', {
                        is: true,
                        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                            secretKeyRef: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                                name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                            }),
                        }),
                    }),
                    password: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('enable', {
                        is: true,
                        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                            secretKeyRef: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                                name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                            }),
                        }),
                    }),
                }),
                tls: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                    enable: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
                    caCert: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('enable', {
                        is: true,
                        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                            secretKeyRef: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                                name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                            }),
                        }),
                    }),
                    cert: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('enable', {
                        is: true,
                        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                            secretKeyRef: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                                name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                            }),
                        }),
                    }),
                    key: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('enable', {
                        is: true,
                        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                            secretKeyRef: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                                name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                            }),
                        }),
                    }),
                }),
            }),
        }),
    }),
})
    .when('type', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_2__["EventSources"].ContainerSource,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        containersource: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            template: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                spec: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                    containers: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                        image: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                    })),
                }),
            }),
        }),
    }),
});
const eventSourceValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["lazy"]((formData) => {
    if (Object(_utils_create_eventsources_utils__WEBPACK_IMPORTED_MODULE_3__["isKnownEventSource"])(formData.type)) {
        return yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            project: _console_dev_console_src_components_import_validation_schema__WEBPACK_IMPORTED_MODULE_1__["projectNameValidationSchema"],
            application: _console_dev_console_src_components_import_validation_schema__WEBPACK_IMPORTED_MODULE_1__["applicationNameValidationSchema"],
            name: _console_dev_console_src_components_import_validation_schema__WEBPACK_IMPORTED_MODULE_1__["nameValidationSchema"],
            sink: sinkServiceSchema,
            data: sourceDataSpecSchema,
        });
    }
    return yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        yamlData: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    });
});


/***/ }),

/***/ "./packages/knative-plugin/src/components/add/import-types.ts":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/add/import-types.ts ***!
  \********************************************************************/
/*! exports provided: EventSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSources", function() { return EventSources; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");

const EventSources = {
    ApiServerSource: _models__WEBPACK_IMPORTED_MODULE_0__["EventSourceApiServerModel"].kind,
    ContainerSource: _models__WEBPACK_IMPORTED_MODULE_0__["EventSourceContainerModel"].kind,
    CronJobSource: _models__WEBPACK_IMPORTED_MODULE_0__["EventSourceCronJobModel"].kind,
    KafkaSource: _models__WEBPACK_IMPORTED_MODULE_0__["EventSourceKafkaModel"].kind,
    PingSource: _models__WEBPACK_IMPORTED_MODULE_0__["EventSourcePingModel"].kind,
    SinkBinding: _models__WEBPACK_IMPORTED_MODULE_0__["EventSourceSinkBindingModel"].kind,
};


/***/ }),

/***/ "./packages/knative-plugin/src/components/dropdowns/ServiceAccountDropdown.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/dropdowns/ServiceAccountDropdown.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");






const ServiceAccountDropdown = ({ name, namespace, }) => {
    const autocompleteFilter = (strText, item) => { var _a; return fuzzysearch__WEBPACK_IMPORTED_MODULE_1__(strText, (_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.name); };
    const resources = [
        {
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ServiceAccountModel"].kind,
            namespace,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ServiceAccountModel"].id,
            optional: true,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ResourceDropdownField"], { name: name, label: "Service Account Name", resources: resources, dataSelector: ['metadata', 'name'], placeholder: "Select a Service Account Name", autocompleteFilter: autocompleteFilter, helpText: "The name of Service Account use to run this", fullWidth: true, showBadge: true }));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_5__["getActiveNamespace"])(state),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ServiceAccountDropdown));


/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/apiserversource.png":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/apiserversource.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/apiserversource.png";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/camelsource.svg":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/camelsource.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/camelsource.svg";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/containersource.png":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/containersource.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/containersource.png";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/cronjobsource.svg":
/*!******************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/cronjobsource.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/cronjobsource.svg";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/kafkasource.svg":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/kafkasource.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/kafkasource.svg";

/***/ }),

/***/ "./packages/knative-plugin/src/utils/create-eventsources-utils.ts":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/create-eventsources-utils.ts ***!
  \************************************************************************/
/*! exports provided: isKnownEventSource, getEventSourcesDepResource, getKafkaSourceResource, getEventSourceResource, getEventSourceData, useEventSourceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKnownEventSource", function() { return isKnownEventSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventSourcesDepResource", function() { return getEventSourcesDepResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKafkaSourceResource", function() { return getKafkaSourceResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventSourceResource", function() { return getEventSourceResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventSourceData", function() { return getEventSourceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventSourceList", function() { return useEventSourceList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_dev_console_src_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/utils/resource-label-utils */ "./packages/dev-console/src/utils/resource-label-utils.ts");
/* harmony import */ var _console_internal_components_safety_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/safety-first */ "./public/components/safety-first.tsx");
/* harmony import */ var _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/add/import-types */ "./packages/knative-plugin/src/components/add/import-types.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _get_knative_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-knative-icon */ "./packages/knative-plugin/src/utils/get-knative-icon.ts");
/* harmony import */ var _fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-dynamic-eventsources-utils */ "./packages/knative-plugin/src/utils/fetch-dynamic-eventsources-utils.ts");










const isKnownEventSource = (eventSource) => Object.keys(_components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"]).includes(eventSource);
const getEventSourcesDepResource = (formData) => {
    const { type, name, apiVersion, application: { name: applicationName }, project: { name: namespace }, data, sink: { knativeService }, } = formData;
    const defaultLabel = Object(_console_dev_console_src_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_4__["getAppLabels"])(name, applicationName);
    const eventSrcData = data[type.toLowerCase()];
    const eventSourceResource = {
        kind: type,
        apiVersion,
        metadata: {
            name,
            namespace,
            labels: Object.assign({}, defaultLabel),
            annotations: Object(_console_dev_console_src_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_4__["getCommonAnnotations"])(),
        },
        spec: Object.assign({ sink: {
                ref: {
                    apiVersion: `${_models__WEBPACK_IMPORTED_MODULE_7__["ServiceModel"].apiGroup}/${_models__WEBPACK_IMPORTED_MODULE_7__["ServiceModel"].apiVersion}`,
                    kind: _models__WEBPACK_IMPORTED_MODULE_7__["ServiceModel"].kind,
                    name: knativeService,
                },
            } }, (eventSrcData && eventSrcData)),
    };
    return eventSourceResource;
};
const getKafkaSourceResource = (formData) => {
    var _a, _b;
    const { limits: { cpu, memory }, } = formData;
    const baseResource = getEventSourcesDepResource(formData);
    const { net } = baseResource.spec;
    baseResource.spec.net = Object.assign(Object.assign(Object.assign({}, net), (!((_a = net.sasl) === null || _a === void 0 ? void 0 : _a.enable) && { sasl: { user: {}, password: {} } })), (!((_b = net.tls) === null || _b === void 0 ? void 0 : _b.enable) && { tls: { caCert: {}, cert: {}, key: {} } }));
    const kafkaSource = {
        spec: {
            resources: Object.assign(Object.assign({}, ((cpu.limit || memory.limit) && {
                limits: Object.assign(Object.assign({}, (cpu.limit && { cpu: `${cpu.limit}${cpu.limitUnit}` })), (memory.limit && { memory: `${memory.limit}${memory.limitUnit}` })),
            })), ((cpu.request || memory.request) && {
                requests: Object.assign(Object.assign({}, (cpu.request && { cpu: `${cpu.request}${cpu.requestUnit}` })), (memory.request && { memory: `${memory.request}${memory.requestUnit}` })),
            })),
        },
    };
    return lodash__WEBPACK_IMPORTED_MODULE_1__["merge"]({}, baseResource, kafkaSource);
};
const getEventSourceResource = (formData) => {
    switch (formData.type) {
        case _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"].KafkaSource:
            return getKafkaSourceResource(formData);
        case _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"].ContainerSource:
        case _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"].CronJobSource:
        case _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"].ApiServerSource:
        case _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"].SinkBinding:
        case _components_add_import_types__WEBPACK_IMPORTED_MODULE_6__["EventSources"].PingSource:
            return getEventSourcesDepResource(formData);
        default:
            return Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeLoad"])(formData.yamlData);
    }
};
const getEventSourceData = (source) => {
    const eventSourceData = {
        cronjobsource: {
            data: '',
            schedule: '',
        },
        pingsource: {
            data: '',
            schedule: '',
        },
        sinkbinding: {
            subject: {
                apiVersion: '',
                kind: '',
                selector: {
                    matchLabels: {},
                },
            },
        },
        apiserversource: {
            mode: 'Ref',
            serviceAccountName: '',
            resources: [
                {
                    apiVersion: '',
                    kind: '',
                },
            ],
        },
        kafkasource: {
            bootstrapServers: [''],
            topics: [''],
            consumerGroup: '',
            net: {
                sasl: {
                    enable: false,
                    user: { secretKeyRef: { name: '', key: '' } },
                    password: { secretKeyRef: { name: '', key: '' } },
                },
                tls: {
                    enable: false,
                    caCert: { secretKeyRef: { name: '', key: '' } },
                    cert: { secretKeyRef: { name: '', key: '' } },
                    key: { secretKeyRef: { name: '', key: '' } },
                },
            },
            serviceAccountName: '',
        },
        containersource: {
            template: {
                spec: {
                    containers: [
                        {
                            image: '',
                            name: '',
                            args: [''],
                            env: [],
                        },
                    ],
                },
            },
        },
    };
    return eventSourceData[source];
};
const useEventSourceList = (namespace) => {
    const [accessData, setAccessData] = Object(_console_internal_components_safety_first__WEBPACK_IMPORTED_MODULE_5__["useSafetyFirst"])({ loaded: false, eventSourceList: {} });
    const { eventSourceModels, loaded: modelLoaded } = Object(_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_9__["useEventSourceModels"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const accessList = [];
        if (modelLoaded) {
            eventSourceModels.map((model) => {
                const { apiGroup, plural, kind } = model;
                const modelData = {
                    [model.kind]: {
                        name: kind,
                        iconUrl: Object(_get_knative_icon__WEBPACK_IMPORTED_MODULE_8__["getKnativeEventSourceIcon"])(kind),
                        displayName: kind,
                        title: kind,
                    },
                };
                return accessList.push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["checkAccess"])({
                    group: apiGroup,
                    resource: plural,
                    namespace,
                    verb: 'create',
                }).then((result) => (result.status.allowed ? modelData : {})));
            });
            Promise.all(accessList)
                .then((results) => {
                const eventSourceList = results.reduce((acc, result) => {
                    return Object.assign(Object.assign({}, acc), result);
                }, {});
                setAccessData({ loaded: true, eventSourceList });
            })
                // eslint-disable-next-line no-console
                .catch((err) => console.warn(err.message));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modelLoaded]);
    return eventSourceModels.length === 0 && modelLoaded ? null : accessData;
};


/***/ }),

/***/ "./packages/knative-plugin/src/utils/get-knative-icon.ts":
/*!***************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/get-knative-icon.ts ***!
  \***************************************************************/
/*! exports provided: getKnativeEventSourceIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeEventSourceIcon", function() { return getKnativeEventSourceIcon; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/logos/apiserversource.png */ "./packages/knative-plugin/src/imgs/logos/apiserversource.png");
/* harmony import */ var _imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/logos/camelsource.svg */ "./packages/knative-plugin/src/imgs/logos/camelsource.svg");
/* harmony import */ var _imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/logos/containersource.png */ "./packages/knative-plugin/src/imgs/logos/containersource.png");
/* harmony import */ var _imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/logos/cronjobsource.svg */ "./packages/knative-plugin/src/imgs/logos/cronjobsource.svg");
/* harmony import */ var _imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/logos/kafkasource.svg */ "./packages/knative-plugin/src/imgs/logos/kafkasource.svg");
/* harmony import */ var _imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/event-source.svg */ "./packages/knative-plugin/src/imgs/event-source.svg");
/* harmony import */ var _imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");








const getKnativeEventSourceIcon = (kind) => {
    switch (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["kindForReference"])(kind)) {
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceApiServerModel"].kind:
            return _imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceCamelModel"].kind:
            return _imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceContainerModel"].kind:
            return _imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceCronJobModel"].kind:
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourcePingModel"].kind:
            return _imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceKafkaModel"].kind:
            return _imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5__;
        default:
            return _imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6__;
    }
};


/***/ })

}]);
//# sourceMappingURL=knative-event-source-page-073c4f7a27fc696db9f5.js.map