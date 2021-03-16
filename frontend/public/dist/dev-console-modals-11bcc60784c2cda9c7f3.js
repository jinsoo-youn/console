(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-modals"],{

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

/***/ "./packages/dev-console/src/components/modals/DeleteResourceModal.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/modals/DeleteResourceModal.tsx ***!
  \****************************************************************************/
/*! exports provided: deleteResourceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResourceModal", function() { return deleteResourceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");






const DeleteResourceForm = ({ handleSubmit, resourceName, resourceType, actionLabel = 'Delete', isSubmitting, cancel, values, status, }) => {
    const isValid = values.resourceName === resourceName;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: handleSubmit, className: "modal-content modal-content--no-inner-scroll" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " ",
            actionLabel,
            " ",
            resourceType,
            "?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "This action cannot be undone. All associated Deployments, Routes, Builds, Pipelines, Storage/PVC's, secrets, and configmaps will be deleted."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Confirm deletion by typing ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, resourceName),
                ' ',
                "below:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: "resourceName" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { submitText: actionLabel, submitDisabled: (status && !!status.submitError) || !isValid, cancel: cancel, inProgress: isSubmitting, submitDanger: true, errorMessage: status && status.submitError })));
};
class DeleteResourceModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.handleSubmit = (values, actions) => {
            actions.setSubmitting(true);
            const { onSubmit, close, redirect } = this.props;
            onSubmit &&
                this.handlePromise(onSubmit(values))
                    .then(() => {
                    actions.setSubmitting(false);
                    close();
                    redirect && _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["history"].push(redirect);
                })
                    .catch((errorMessage) => {
                    actions.setSubmitting(false);
                    actions.setStatus({ submitError: errorMessage });
                });
        };
    }
    render() {
        const initialValues = {
            resourceName: '',
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], { initialValues: initialValues, onSubmit: this.handleSubmit }, (formProps) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeleteResourceForm, Object.assign({}, formProps, this.props))));
    }
}
const deleteResourceModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeleteResourceModal, Object.assign({}, props))));


/***/ }),

/***/ "./packages/dev-console/src/components/modals/EditApplicationModal.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/modals/EditApplicationModal.tsx ***!
  \*****************************************************************************/
/*! exports provided: editApplicationModal, groupEditApplicationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editApplicationModal", function() { return editApplicationModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupEditApplicationModal", function() { return groupEditApplicationModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _import_app_ApplicationSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import/app/ApplicationSelector */ "./packages/dev-console/src/components/import/app/ApplicationSelector.tsx");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _topology_topology_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../topology/topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");











const EditApplicationForm = ({ resource, handleSubmit, isSubmitting, cancel, values, initialApplication, status, }) => {
    const dirty = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](values, 'application.selectedKey') !== initialApplication;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: handleSubmit, className: "modal-content modal-content--no-inner-scroll" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Edit Application Grouping"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], { size: "sm", className: "co-m-form-row" },
                "Select an application group to add the component",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, ` ${resource.metadata.name} `),
                "to"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_6__["default"], { fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_app_ApplicationSelector__WEBPACK_IMPORTED_MODULE_7__["default"], { namespace: resource.metadata.namespace }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { submitText: "Save", submitDisabled: !dirty, cancel: cancel, inProgress: isSubmitting, errorMessage: status && status.submitError })));
};
class EditApplicationModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.handleSubmit = (values, actions) => {
            const { resourceKind, resource } = this.props;
            const application = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](values, 'application.name');
            this.handlePromise(Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_8__["updateResourceApplication"])(resourceKind, resource, application))
                .then(() => {
                actions.setSubmitting(false);
                this.props.close();
            })
                .catch((errorMessage) => {
                actions.setSubmitting(false);
                actions.setStatus({ submitError: errorMessage });
            });
        };
    }
    render() {
        const { resource } = this.props;
        const application = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resource, ['metadata', 'labels', 'app.kubernetes.io/part-of']);
        const initialValues = {
            application: {
                name: application,
                selectedKey: application || _const__WEBPACK_IMPORTED_MODULE_10__["UNASSIGNED_KEY"],
            },
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], { initialValues: initialValues, onSubmit: this.handleSubmit, render: (formProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EditApplicationForm, Object.assign({}, formProps, this.props, { initialApplication: application }))) }));
    }
}
class GroupEditApplicationModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.handleSubmit = (values, actions) => {
            const application = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](values, 'application.name');
            this.handlePromise(Object(_topology_topology_utils__WEBPACK_IMPORTED_MODULE_9__["updateTopologyResourceApplication"])(this.props.group.getData(), application))
                .then(() => {
                actions.setSubmitting(false);
                this.props.close();
            })
                .catch((errorMessage) => {
                actions.setSubmitting(false);
                actions.setStatus({ submitError: errorMessage });
            });
        };
    }
    render() {
        const { group } = this.props;
        const resource = group.getData().resources.obj;
        const application = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resource, ['metadata', 'labels', 'app.kubernetes.io/part-of']);
        const initialValues = {
            application: {
                name: application,
                selectedKey: application,
            },
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], { initialValues: initialValues, onSubmit: this.handleSubmit, render: (formProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EditApplicationForm, Object.assign({}, formProps, this.props, { resource: resource, initialApplication: application }))) }));
    }
}
const editApplicationModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EditApplicationModal, Object.assign({}, props))));
const groupEditApplicationModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])((props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](GroupEditApplicationModal, Object.assign({}, props)));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/const.ts":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/const.ts ***!
  \**************************************************************************/
/*! exports provided: TYPE_WORKLOAD, TYPE_CONNECTS_TO, TYPE_AGGREGATE_EDGE, TYPE_SERVICE_BINDING, TYPE_APPLICATION_GROUP, TYPE_TRAFFIC_CONNECTOR, LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY, DEFAULT_NODE_PAD, DEFAULT_GROUP_PAD, NODE_WIDTH, NODE_HEIGHT, NODE_PADDING, GROUP_WIDTH, GROUP_HEIGHT, GROUP_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_WORKLOAD", function() { return TYPE_WORKLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CONNECTS_TO", function() { return TYPE_CONNECTS_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_AGGREGATE_EDGE", function() { return TYPE_AGGREGATE_EDGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SERVICE_BINDING", function() { return TYPE_SERVICE_BINDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_APPLICATION_GROUP", function() { return TYPE_APPLICATION_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRAFFIC_CONNECTOR", function() { return TYPE_TRAFFIC_CONNECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY", function() { return LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NODE_PAD", function() { return DEFAULT_NODE_PAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_PAD", function() { return DEFAULT_GROUP_PAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_WIDTH", function() { return NODE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_HEIGHT", function() { return NODE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_PADDING", function() { return NODE_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_WIDTH", function() { return GROUP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_HEIGHT", function() { return GROUP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_PADDING", function() { return GROUP_PADDING; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");

const TYPE_WORKLOAD = 'workload';
const TYPE_CONNECTS_TO = 'connects-to';
const TYPE_AGGREGATE_EDGE = 'aggregate-edge';
const TYPE_SERVICE_BINDING = 'service-binding';
const TYPE_APPLICATION_GROUP = 'part-of';
const TYPE_TRAFFIC_CONNECTOR = 'traffic-connector';
const LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY = `${_console_shared__WEBPACK_IMPORTED_MODULE_0__["STORAGE_PREFIX"]}/last-topology-view`;
const DEFAULT_NODE_PAD = 20;
const DEFAULT_GROUP_PAD = 40;
const NODE_WIDTH = 104;
const NODE_HEIGHT = 104;
const NODE_PADDING = [0, DEFAULT_NODE_PAD];
const GROUP_WIDTH = 300;
const GROUP_HEIGHT = 180;
const GROUP_PADDING = [DEFAULT_GROUP_PAD];


/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/const.ts":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/const.ts ***!
  \************************************************************************************/
/*! exports provided: TYPE_OPERATOR_BACKED_SERVICE, TYPE_OPERATOR_WORKLOAD, OPERATOR_GROUP_WIDTH, OPERATOR_GROUP_HEIGHT, OPERATOR_GROUP_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_OPERATOR_BACKED_SERVICE", function() { return TYPE_OPERATOR_BACKED_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_OPERATOR_WORKLOAD", function() { return TYPE_OPERATOR_WORKLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GROUP_WIDTH", function() { return OPERATOR_GROUP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GROUP_HEIGHT", function() { return OPERATOR_GROUP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GROUP_PADDING", function() { return OPERATOR_GROUP_PADDING; });
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");

const TYPE_OPERATOR_BACKED_SERVICE = 'operator-backed-service';
const TYPE_OPERATOR_WORKLOAD = 'operator-workload';
const OPERATOR_GROUP_WIDTH = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_WIDTH"];
const OPERATOR_GROUP_HEIGHT = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_HEIGHT"];
const OPERATOR_GROUP_PADDING = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_PADDING"];


/***/ }),

/***/ "./packages/dev-console/src/components/topology/topology-utils.ts":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/topology-utils.ts ***!
  \************************************************************************/
/*! exports provided: allowedResources, getServiceBindingStatus, getCheURL, getEditURL, getHelmReleaseKey, isHelmReleaseNode, getKialiLink, filterBasedOnActiveApplication, getRoutesURL, getTopologyResourceObject, updateTopologyResourceApplication, createTopologyResourceConnection, removeTopologyResourceConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedResources", function() { return allowedResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceBindingStatus", function() { return getServiceBindingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheURL", function() { return getCheURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditURL", function() { return getEditURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmReleaseKey", function() { return getHelmReleaseKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHelmReleaseNode", function() { return isHelmReleaseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKialiLink", function() { return getKialiLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBasedOnActiveApplication", function() { return filterBasedOnActiveApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutesURL", function() { return getRoutesURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyResourceObject", function() { return getTopologyResourceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTopologyResourceApplication", function() { return updateTopologyResourceApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopologyResourceConnection", function() { return createTopologyResourceConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTopologyResourceConnection", function() { return removeTopologyResourceConnection; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/routes */ "./public/components/routes.tsx");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _operators_components_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/components/const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");






const allowedResources = ['deployments', 'deploymentConfigs', 'daemonSets', 'statefulSets'];
const getServiceBindingStatus = ({ FLAGS }) => FLAGS.get(_const__WEBPACK_IMPORTED_MODULE_5__["ALLOW_SERVICE_BINDING"]);
const getCheURL = (consoleLinks) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](lodash__WEBPACK_IMPORTED_MODULE_0__["find"](consoleLinks, ['metadata.name', 'che']), 'spec.href', '');
const getEditURL = (gitURL, cheURL) => {
    return gitURL && cheURL ? `${cheURL}/f?url=${gitURL}&policies.create=peruser` : gitURL;
};
const getHelmReleaseKey = (resource) => `${resource.kind}---${resource.metadata.name}`;
const isHelmReleaseNode = (obj, helmResourcesMap) => {
    if (helmResourcesMap) {
        return helmResourcesMap.hasOwnProperty(getHelmReleaseKey(obj));
    }
    return false;
};
const getKialiLink = (consoleLinks, namespace) => {
    var _a, _b;
    const kialiLink = (_b = (_a = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](consoleLinks, ['metadata.name', `kiali-namespace-${namespace}`])) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.href;
    return kialiLink || '';
};
/**
 * filter data based on the active application
 */
const filterBasedOnActiveApplication = (data, application) => {
    const PART_OF = 'app.kubernetes.io/part-of';
    if (!application) {
        return data;
    }
    return data.filter((dc) => {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'labels', PART_OF]) === application;
    });
};
/**
 * get the route data
 */
const getRouteData = (ksroutes, resource) => {
    if (ksroutes && ksroutes.length > 0 && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](ksroutes[0].status)) {
        const trafficData = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](ksroutes[0].status.traffic, {
            revisionName: resource.obj.metadata.name,
        });
        return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](trafficData, 'url', ksroutes[0].status.url);
    }
    return null;
};
/**
 * get routes url
 */
const getRoutesURL = (resource) => {
    const { routes, ksroutes } = resource;
    if (routes.length > 0 && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](routes[0].spec)) {
        return Object(_console_internal_components_routes__WEBPACK_IMPORTED_MODULE_2__["getRouteWebURL"])(routes[0]);
    }
    return getRouteData(ksroutes, resource);
};
const getTopologyResourceObject = (topologyObject) => {
    if (!topologyObject) {
        return null;
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](topologyObject, ['resources', 'obj']);
};
const updateTopologyResourceApplication = (item, application) => {
    if (!item || !lodash__WEBPACK_IMPORTED_MODULE_0__["size"](item.resources)) {
        return Promise.reject();
    }
    const resources = [];
    const updates = [];
    resources.push(getTopologyResourceObject(item));
    if (item.type === _operators_components_const__WEBPACK_IMPORTED_MODULE_4__["TYPE_OPERATOR_BACKED_SERVICE"]) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](item.groupResources, (groupResource) => {
            resources.push(getTopologyResourceObject(groupResource));
        });
    }
    for (const resource of resources) {
        const resourceKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource));
        if (!resourceKind) {
            return Promise.reject(new Error(`Unable to update application, invalid resource type: ${resource.kind}`));
        }
        updates.push(Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["updateResourceApplication"])(resourceKind, resource, application));
    }
    return Promise.all(updates);
};
const createTopologyResourceConnection = (source, target, replaceTarget = null, serviceBindingFlag) => {
    if (!source || !target || source === target) {
        return Promise.reject(new Error('Can not create a connection from a node to itself.'));
    }
    const sourceObj = getTopologyResourceObject(source);
    const targetObj = getTopologyResourceObject(target);
    const replaceTargetObj = replaceTarget && getTopologyResourceObject(replaceTarget);
    if (serviceBindingFlag && target.operatorBackedService) {
        if (replaceTarget) {
            return new Promise((resolve, reject) => {
                Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["createServiceBinding"])(sourceObj, targetObj)
                    .then(() => {
                    // eslint-disable-next-line promise/no-nesting
                    Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["removeResourceConnection"])(sourceObj, replaceTargetObj)
                        .then(resolve)
                        .catch(reject);
                })
                    .catch(reject);
            });
        }
        return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["createServiceBinding"])(sourceObj, targetObj);
    }
    return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["createResourceConnection"])(sourceObj, targetObj, replaceTargetObj);
};
const removeTopologyResourceConnection = (source, target, sbr, edgeType) => {
    if (!source || !target) {
        return Promise.reject();
    }
    const sourceObj = getTopologyResourceObject(source);
    const targetObj = getTopologyResourceObject(target);
    if (edgeType === 'service-binding') {
        return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["removeServiceBinding"])(sbr);
    }
    return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["removeResourceConnection"])(sourceObj, targetObj);
};


/***/ })

}]);
//# sourceMappingURL=dev-console-modals-11bcc60784c2cda9c7f3.js.map