(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details~pipeline-overview-list~pi~3bd37dc8"],{

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

/***/ "./packages/dev-console/src/components/pipelines/modals/common/ModalStructure.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/ModalStructure.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");




const ModalStructure = (props) => {
    const { children, close, errors, isSubmitting, handleSubmit, status, submitBtnText, submitDanger, title, } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form" }, children)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: status === null || status === void 0 ? void 0 : status.submitError, inProgress: isSubmitting, submitText: submitBtnText, submitDisabled: !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), submitDanger: submitDanger, cancel: close }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ModalStructure);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/MultipleKeySelector.scss":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/MultipleKeySelector.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/MultipleKeySelector.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/MultipleKeySelector.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _MultipleKeySelector_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultipleKeySelector.scss */ "./packages/dev-console/src/components/pipelines/modals/common/MultipleKeySelector.scss");
/* harmony import */ var _MultipleKeySelector_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MultipleKeySelector_scss__WEBPACK_IMPORTED_MODULE_7__);








const MultipleKeySelector = ({ name, keys }) => {
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const items = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](values, name, [{ key: '', path: '' }]);
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["useFormikValidationFix"])(items);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["FieldArray"], { name: name, key: "multiple-key-selector", render: ({ push, remove }) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], { fieldId: Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getFieldId"])(name, 'multiple-key-selector'), label: "Items", className: "odc-multiple-key-selector" },
                items.length > 0 &&
                    items.map((item, index) => {
                        const fieldKey = `${name}.${index}.${item.key}`;
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group odc-multiple-key-selector__item", key: fieldKey },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["DropdownField"], { name: `${name}.${index}.key`, title: "Select a key", items: keys, fullWidth: true }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["InputField"], { name: `${name}.${index}.path`, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextInputTypes"].text, placeholder: "Enter a path", isDisabled: !item.key }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('odc-multiple-key-selector__deleteButton', {
                                    '--disabled': items.length <= 1,
                                }) },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["MinusCircleIcon"], { "aria-hidden": "true", onClick: () => remove(index) }))));
                    }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { variant: "link", onClick: () => push({ key: '', path: '' }), icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PlusCircleIcon"], null), isInline: true }, "Add items")));
        } }));
};
/* harmony default export */ __webpack_exports__["default"] = (MultipleKeySelector);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/MultipleResourceKeySelector.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/MultipleResourceKeySelector.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _MultipleKeySelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MultipleKeySelector */ "./packages/dev-console/src/components/pipelines/modals/common/MultipleKeySelector.tsx");











const MultipleResourceKeySelector = ({ label, namespace, resourceModel, required, resourceNameField, resourceKeysField, }) => {
    const { setFieldValue, setFieldTouched } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const [field, { touched, error }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(resourceNameField);
    const isValid = !(touched && error);
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getFieldId"])(resourceNameField, 'res-dropdown');
    const [keys, setKeys] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["useFormikValidationFix"])(field.value);
    const resource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        kind: resourceModel.kind,
        isList: true,
        namespace,
        optional: true,
    }), [namespace, resourceModel.kind]);
    const [resources, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__["useK8sWatchResource"])(resource);
    const autocompleteFilter = (strText, item) => { var _a; return fuzzysearch__WEBPACK_IMPORTED_MODULE_4__(strText, (_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.name); };
    const generateKeys = (resourceName) => {
        const selectedResource = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](resources, (res) => {
            return lodash__WEBPACK_IMPORTED_MODULE_5__["get"](res, 'metadata.name') === resourceName;
        });
        const keyMap = selectedResource === null || selectedResource === void 0 ? void 0 : selectedResource.data;
        const itemKeys = Object.keys(keyMap).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: key })), {});
        setKeys(itemKeys);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], { fieldId: fieldId, label: label, isValid: isValid, className: "odc-multiple-key-selector", isRequired: required },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["ResourceDropdown"], { resources: [
                { kind: resourceModel.kind, loaded, loadError, data: resources },
            ], loaded: loaded, loadError: loadError, dataSelector: ['metadata', 'name'], selectedKey: field.value, placeholder: `Select a ${resourceModel.label}`, autocompleteFilter: autocompleteFilter, dropDownClassName: classnames__WEBPACK_IMPORTED_MODULE_3___default()({ 'dropdown--full-width': true }), onChange: (value) => {
                setFieldValue(resourceKeysField, undefined);
                setFieldValue(resourceNameField, value);
                setFieldTouched(resourceNameField, true);
                generateKeys(value);
            }, showBadge: true }),
        field.value && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultipleKeySelector__WEBPACK_IMPORTED_MODULE_10__["default"], { name: resourceKeysField, keys: keys })));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_6__["getActiveNamespace"])(state),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MultipleResourceKeySelector));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PVCDropdown.scss":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PVCDropdown.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PVCDropdown.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PVCDropdown.tsx ***!
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
/* harmony import */ var _PVCDropdown_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PVCDropdown.scss */ "./packages/dev-console/src/components/pipelines/modals/common/PVCDropdown.scss");
/* harmony import */ var _PVCDropdown_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PVCDropdown_scss__WEBPACK_IMPORTED_MODULE_6__);







const PVCDropdown = ({ name, namespace }) => {
    const autocompleteFilter = (strText, item) => { var _a; return fuzzysearch__WEBPACK_IMPORTED_MODULE_1__(strText, (_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.name); };
    const resources = [
        {
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["PersistentVolumeClaimModel"].kind,
            namespace,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["PersistentVolumeClaimModel"].id,
            optional: true,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ResourceDropdownField"], { name: name, className: "odc-pvc-dropdown", resources: resources, dataSelector: ['metadata', 'name'], placeholder: "Select a PVC", autocompleteFilter: autocompleteFilter, fullWidth: true, showBadge: true }));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_5__["getActiveNamespace"])(state),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(PVCDropdown));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineParameterSection.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineParameterSection.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");





const PipelineParameterSection = ({ parameters }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["FieldArray"], { name: "parameters", key: "parameters-row", render: () => parameters.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Parameters", fullWidth: true }, parameters.map((parameter, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { key: parameter.name, name: `parameters.${index}.default`, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, label: parameter.name, helpText: parameter.description, placeholder: "Name", required: true }))))) }));
/* harmony default export */ __webpack_exports__["default"] = (PipelineParameterSection);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdown.scss":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdown.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdown.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdown.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/modals/common/const.ts");
/* harmony import */ var _PipelineResourceDropdown_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PipelineResourceDropdown.scss */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdown.scss");
/* harmony import */ var _PipelineResourceDropdown_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PipelineResourceDropdown_scss__WEBPACK_IMPORTED_MODULE_9__);










const PipelineResourceDropdown = (props) => {
    const { autoSelect, filterType, name, namespace, selectedKey } = props;
    const [isExpanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const { setFieldValue, setFieldTouched } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const [, { touched }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(name);
    const resourceDefinition = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        isList: true,
        namespace,
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineResourceModel"]),
    }), [namespace]);
    const [resources, loaded, error] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_5__["useK8sWatchResource"])(resourceDefinition);
    const availableResources = resources.filter((resource) => resource.spec.type === filterType);
    const canAutoSelect = autoSelect && !touched && loaded && !error;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (canAutoSelect) {
            if (availableResources.length === 0) {
                setFieldValue(name, _const__WEBPACK_IMPORTED_MODULE_8__["CREATE_PIPELINE_RESOURCE"]);
            }
            else {
                setFieldValue(name, availableResources[0].metadata.name);
            }
            setFieldTouched(name);
        }
    }, [canAutoSelect, name, availableResources, setFieldTouched, setFieldValue]);
    const options = [
        { label: 'Create Pipeline Resource', value: _const__WEBPACK_IMPORTED_MODULE_8__["CREATE_PIPELINE_RESOURCE"] },
        ...availableResources.map((resource) => {
            var _a;
            const resourceName = resource.metadata.name;
            const url = ((_a = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](resource.spec.params, ['name', 'url'])) === null || _a === void 0 ? void 0 : _a.value) || '';
            const label = url.trim().length > 0 ? `${url} (${resourceName})` : resourceName;
            return { label, value: resourceName };
        }),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Select"], { className: "odc-pipeline-resource-dropdown", selections: selectedKey, isExpanded: isExpanded, onToggle: () => setExpanded(!isExpanded), onSelect: (e, value) => {
            setFieldValue(name, value);
            setExpanded(false);
        }, placeholderText: !loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["LoadingInline"], null) : 'Select Pipeline Resource', isDisabled: loaded && availableResources.length === 0 }, options.map(({ label, value }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SelectOption"], { key: value, value: value }, label)))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineResourceDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdownField.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdownField.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _pipeline_resource_PipelineResourceParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipeline-resource/PipelineResourceParam */ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineResourceParam.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/modals/common/const.ts");
/* harmony import */ var _PipelineResourceDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineResourceDropdown */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdown.tsx");







const PipelineResourceDropdownField = (props) => {
    const { filterType, name, label } = props;
    const [field] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(name);
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const { namespace } = values;
    const { value: { selection }, } = field;
    const creating = selection === _const__WEBPACK_IMPORTED_MODULE_5__["CREATE_PIPELINE_RESOURCE"];
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["useFormikValidationFix"])(field.value);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: name, label: label, isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineResourceDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, { autoSelect: selection == null, filterType: filterType, namespace: namespace, name: `${name}.selection`, selectedKey: selection }))),
        creating && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_resource_PipelineResourceParam__WEBPACK_IMPORTED_MODULE_4__["default"], { name: `${name}.data`, type: filterType })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineResourceDropdownField);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceSection.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceSection.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _PipelineResourceDropdownField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineResourceDropdownField */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceDropdownField.tsx");





const reduceToSections = (acc, resource, formikIndex) => {
    const resourceType = resource.data.type;
    if (!resourceType) {
        return acc;
    }
    return Object.assign(Object.assign({}, acc), { [resourceType]: [...(acc[resourceType] || []), { formikIndex, resource }] });
};
const PipelineResourceSection = () => {
    const [{ value: resources }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])('resources');
    const sections = resources.reduce(reduceToSections, {});
    const types = Object.keys(sections);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, types.map((type) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], { name: type, key: type, render: () => {
            const section = sections[type];
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: `${Object(lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(type)} Resources`, fullWidth: true }, section.map((sectionData) => {
                const { formikIndex, resource } = sectionData;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineResourceDropdownField__WEBPACK_IMPORTED_MODULE_4__["default"], { key: resource.name, name: `resources.${formikIndex}`, filterType: type, label: resource.name }));
            })));
        } })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineResourceSection);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineSecretSection.scss":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineSecretSection.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PipelineSecretSection.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PipelineSecretSection.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _validation_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation-utils */ "./packages/dev-console/src/components/pipelines/modals/common/validation-utils.ts");
/* harmony import */ var _SecretForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SecretForm */ "./packages/dev-console/src/components/pipelines/modals/common/SecretForm.tsx");
/* harmony import */ var _SecretsList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SecretsList */ "./packages/dev-console/src/components/pipelines/modals/common/SecretsList.tsx");
/* harmony import */ var _PipelineSecretSection_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PipelineSecretSection.scss */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineSecretSection.scss");
/* harmony import */ var _PipelineSecretSection_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_PipelineSecretSection_scss__WEBPACK_IMPORTED_MODULE_13__);














const initialValues = {
    secretName: '',
    annotations: { key: _const__WEBPACK_IMPORTED_MODULE_9__["SecretAnnotationId"].Image, value: '' },
    type: _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].dockerconfigjson,
    formData: {},
};
const PipelineSecretSection = ({ namespace }) => {
    const [secretOpenField] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('secretOpen');
    const { setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        const newSecret = {
            apiVersion: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["SecretModel"].apiVersion,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["SecretModel"].kind,
            metadata: {
                name: values.secretName,
                namespace,
                annotations: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_8__["getSecretAnnotations"])(values.annotations),
            },
            type: values.type,
            stringData: values.formData,
        };
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["SecretModel"], newSecret)
            .then((resp) => {
            actions.setSubmitting(false);
            setFieldValue(secretOpenField.name, false);
            Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_8__["associateServiceAccountToSecret"])(resp, namespace);
        })
            .catch((err) => {
            actions.setSubmitting(false);
            setFieldValue(secretOpenField.name, false);
            actions.setStatus({ submitError: err.message });
        });
    };
    const handleReset = (values, actions) => {
        actions.resetForm({ values: initialValues, status: {} });
        setFieldValue(secretOpenField.name, false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExpandCollapse"], { textExpanded: "Hide Credential Options", textCollapsed: "Show Credential Options" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-secret-section" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "The following secrets are available for all pipelines in this namespace to authenticate to the specified git server or docker registry:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-secret-section__secrets" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretsList__WEBPACK_IMPORTED_MODULE_12__["default"], { namespace: namespace }),
                secretOpenField.value ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-secret-section__secret-form" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, validationSchema: _validation_utils__WEBPACK_IMPORTED_MODULE_10__["advancedSectionValidationSchema"], onSubmit: handleSubmit, onReset: handleReset }, (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretForm__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", onClick: () => {
                        setFieldValue(secretOpenField.name, true);
                    }, className: "odc-pipeline-secret-section__secret-action", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], null) }, "Add Secret"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineSecretSection);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/PiplelineWorkspacesSection.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/PiplelineWorkspacesSection.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _PVCDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PVCDropdown */ "./packages/dev-console/src/components/pipelines/modals/common/PVCDropdown.tsx");
/* harmony import */ var _MultipleResourceKeySelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultipleResourceKeySelector */ "./packages/dev-console/src/components/pipelines/modals/common/MultipleResourceKeySelector.tsx");








const getVolumeTypeFields = (volumeType, index) => {
    switch (_const__WEBPACK_IMPORTED_MODULE_5__["VolumeTypes"][volumeType]) {
        case _const__WEBPACK_IMPORTED_MODULE_5__["VolumeTypes"].Secret: {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultipleResourceKeySelector__WEBPACK_IMPORTED_MODULE_7__["default"], { resourceNameField: `workspaces.${index}.data.secret.secretName`, resourceKeysField: `workspaces.${index}.data.secret.items`, label: "Secret", resourceModel: _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["SecretModel"], required: true }));
        }
        case _const__WEBPACK_IMPORTED_MODULE_5__["VolumeTypes"].ConfigMap: {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultipleResourceKeySelector__WEBPACK_IMPORTED_MODULE_7__["default"], { resourceNameField: `workspaces.${index}.data.configMap.name`, resourceKeysField: `workspaces.${index}.data.configMap.items`, label: "Config Map", resourceModel: _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ConfigMapModel"], required: true }));
        }
        case _const__WEBPACK_IMPORTED_MODULE_5__["VolumeTypes"].PVC: {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PVCDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], { name: `workspaces.${index}.data.persistentVolumeClaim.claimName` });
        }
        default:
            return null;
    }
};
const PipelineWorkspacesSection = () => {
    const { setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const [{ value: workspaces }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('workspaces');
    return (workspaces.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Workspaces", fullWidth: true }, workspaces.map((workspace, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group", key: workspace.name },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DropdownField"], { name: `workspaces.${index}.type`, label: workspace.name, items: _const__WEBPACK_IMPORTED_MODULE_5__["VolumeTypes"], onChange: () => setFieldValue(`workspaces.${index}.data`, {}), fullWidth: true, required: true }),
        getVolumeTypeFields(workspace.type, index)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineWorkspacesSection);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/SecretAnnotation.scss":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/SecretAnnotation.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/SecretAnnotation.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/SecretAnnotation.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _SecretAnnotation_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecretAnnotation.scss */ "./packages/dev-console/src/components/pipelines/modals/common/SecretAnnotation.scss");
/* harmony import */ var _SecretAnnotation_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SecretAnnotation_scss__WEBPACK_IMPORTED_MODULE_4__);





const SecretAnnotation = (props) => {
    const { fieldName, isReadOnly = false } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-secret-annotation" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "odc-secret-annotation__label" }, "Designate provider to be authenticated"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DropdownField"], { name: `${fieldName}.key`, items: _const__WEBPACK_IMPORTED_MODULE_3__["SecretAnnotationType"], label: "Access to", disabled: isReadOnly, fullWidth: true, required: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { name: `${fieldName}.value`, helpText: "The base server url (e.g. https://github.com)", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, isReadOnly: isReadOnly, label: "Server URL", required: true }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SecretAnnotation);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/SecretForm.scss":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/SecretForm.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/SecretForm.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/SecretForm.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _SecretAnnotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SecretAnnotation */ "./packages/dev-console/src/components/pipelines/modals/common/SecretAnnotation.tsx");
/* harmony import */ var _SecretForm_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SecretForm.scss */ "./packages/dev-console/src/components/pipelines/modals/common/SecretForm.scss");
/* harmony import */ var _SecretForm_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SecretForm_scss__WEBPACK_IMPORTED_MODULE_8__);









const authTypes = {
    [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].dockerconfigjson]: 'Image Registry Credentials',
    [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].basicAuth]: 'Basic Authentication',
    [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].sshAuth]: 'SSH Key',
};
const renderSecretForm = (type, stringData, onDataChanged) => {
    switch (type) {
        case _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].basicAuth:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["BasicAuthSubform"], { onChange: onDataChanged, stringData: stringData[_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].basicAuth] }));
        case _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].sshAuth:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SSHAuthSubform"], { onChange: onDataChanged, stringData: stringData[_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].sshAuth] }));
        case _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].dockerconfigjson:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["CreateConfigSubform"], { onChange: onDataChanged, stringData: stringData[_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].dockerconfigjson] }));
        default:
            return null;
    }
};
const SecretForm = ({ handleSubmit, handleReset, status, isSubmitting, }) => {
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const [stringData, setStringData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
        [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].basicAuth]: {},
        [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].sshAuth]: {},
        [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].dockerconfigjson]: {},
    });
    const setValues = (type) => {
        if (type === _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].dockerconfigjson) {
            setFieldValue('formData', lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"]({ '.dockerconfigjson': stringData[type] }, JSON.stringify));
        }
        else {
            setFieldValue('formData', stringData[type]);
        }
    };
    const onDataChanged = (value) => {
        setStringData(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](stringData, { [values.type]: value }));
        setValues(values.type);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-secret-form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-section-heading-tertiary odc-secret-form__title" }, "Create Source Secret"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, required: true, name: "secretName", label: "Secret Name", helpText: "Unique name of the new secret." })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecretAnnotation__WEBPACK_IMPORTED_MODULE_7__["default"], { fieldName: "annotations" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DropdownField"], { name: "type", label: "Authentication Type", items: authTypes, title: authTypes[values.type], onChange: (type) => setValues(type), fullWidth: true, required: true })),
        renderSecretForm(values.type, stringData, onDataChanged),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ButtonBar"], { errorMessage: status === null || status === void 0 ? void 0 : status.submitError, inProgress: isSubmitting },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["ActionGroupWithIcons"], { onSubmit: handleSubmit, onClose: handleReset }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SecretForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/SecretsList.scss":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/SecretsList.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/SecretsList.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/SecretsList.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _SecretsList_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SecretsList.scss */ "./packages/dev-console/src/components/pipelines/modals/common/SecretsList.scss");
/* harmony import */ var _SecretsList_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SecretsList_scss__WEBPACK_IMPORTED_MODULE_7__);








const secretTypes = [_console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_4__["SecretType"].dockerconfigjson, _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_4__["SecretType"].basicAuth, _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_4__["SecretType"].sshAuth];
const Secrets = ({ secrets, serviceaccounts }) => {
    const serviceAccountSecrets = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](serviceaccounts.data.secrets, 'name');
    const filterData = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](secrets.data, (secret) => lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](secretTypes, secret.type) &&
        lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](serviceAccountSecrets, secret.metadata.name));
    const sortedFilterData = lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"](filterData, (data) => data.metadata.name);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-secrets-list" },
        sortedFilterData.map((secret) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { key: secret.metadata.uid, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"].kind, name: secret.metadata.name, namespace: secret.metadata.namespace, title: secret.metadata.name, linkTo: false }));
        }),
        lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](sortedFilterData) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["SecondaryStatus"], { status: "No source secrets found" })));
};
const SecretsList = ({ namespace }) => {
    const resources = [
        {
            isList: true,
            namespace,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"].kind,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"].plural,
        },
        {
            isList: false,
            namespace,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ServiceAccountModel"].kind,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ServiceAccountModel"].plural,
            name: _const__WEBPACK_IMPORTED_MODULE_6__["PIPELINE_SERVICE_ACCOUNT"],
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Secrets, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (SecretsList);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/const.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/const.ts ***!
  \******************************************************************************/
/*! exports provided: CREATE_PIPELINE_RESOURCE, initialResourceFormValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PIPELINE_RESOURCE", function() { return CREATE_PIPELINE_RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialResourceFormValues", function() { return initialResourceFormValues; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");

const CREATE_PIPELINE_RESOURCE = '#CREATE_PIPELINE_RESOURCE#';
const initialResourceFormValues = {
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].git]: {
        params: {
            url: '',
            revision: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].image]: {
        params: {
            url: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].storage]: {
        params: {
            type: '',
            location: '',
            dir: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].cluster]: {
        params: {
            name: '',
            url: '',
            username: '',
            password: '',
            insecure: '',
        },
        secrets: {
            cadata: '',
            token: '',
        },
    },
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/utils.ts ***!
  \******************************************************************************/
/*! exports provided: migratePipelineRun, getPipelineRunData, convertPipelineToModalData, convertMapToNameValueArray, getPipelineRunFromForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migratePipelineRun", function() { return migratePipelineRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunData", function() { return getPipelineRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPipelineToModalData", function() { return convertPipelineToModalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertMapToNameValueArray", function() { return convertMapToNameValueArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunFromForm", function() { return getPipelineRunFromForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/modals/common/const.ts");





/**
 * Migrates a PipelineRun from one version to another to support auto-upgrades with old (and invalid) PipelineRuns.
 *
 * Note: Each check within this method should be driven by the apiVersion number if the API is properly up-versioned
 * for these breaking changes. (should be done moving from 0.10.x forward)
 */
const migratePipelineRun = (pipelineRun) => {
    let newPipelineRun = pipelineRun;
    const serviceAccountPath = 'spec.serviceAccount';
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](newPipelineRun, serviceAccountPath)) {
        // .spec.serviceAccount was removed for .spec.serviceAccountName in 0.9.x
        // Note: apiVersion was not updated for this change and thus we cannot gate this change behind a version number
        const serviceAccountName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](newPipelineRun, serviceAccountPath);
        newPipelineRun = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](newPipelineRun, [serviceAccountPath]);
        newPipelineRun = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](newPipelineRun, {
            spec: {
                serviceAccountName,
            },
        });
    }
    return newPipelineRun;
};
const getPipelineRunData = (pipeline = null, latestRun) => {
    var _a, _b;
    if (!pipeline && !latestRun) {
        // eslint-disable-next-line no-console
        console.error('Missing parameters, unable to create new PipelineRun');
        return null;
    }
    const pipelineName = pipeline ? pipeline.metadata.name : latestRun.spec.pipelineRef.name;
    const resources = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.resources;
    const workspaces = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.workspaces;
    const latestRunParams = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.params;
    const pipelineParams = pipeline === null || pipeline === void 0 ? void 0 : pipeline.spec.params;
    const params = latestRunParams || Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunParams"])(pipelineParams);
    const newPipelineRun = {
        apiVersion: pipeline ? pipeline.apiVersion : latestRun.apiVersion,
        kind: _models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].kind,
        metadata: {
            name: `${pipelineName}-${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getRandomChars"])(6)}`,
            namespace: pipeline ? pipeline.metadata.namespace : latestRun.metadata.namespace,
            labels: lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, (_a = pipeline === null || pipeline === void 0 ? void 0 : pipeline.metadata) === null || _a === void 0 ? void 0 : _a.labels, (_b = latestRun === null || latestRun === void 0 ? void 0 : latestRun.metadata) === null || _b === void 0 ? void 0 : _b.labels, {
                'tekton.dev/pipeline': pipelineName,
            }),
        },
        spec: Object.assign(Object.assign(Object.assign(Object.assign({}, ((latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec) || {})), { pipelineRef: {
                name: pipelineName,
            }, resources }), (params && { params })), { workspaces, status: null }),
    };
    return migratePipelineRun(newPipelineRun);
};
const convertPipelineToModalData = (pipeline, alwaysCreateResources = false) => {
    const { metadata: { namespace }, spec: { params, resources }, } = pipeline;
    return {
        namespace,
        parameters: params || [],
        resources: (resources || []).map((resource) => ({
            name: resource.name,
            selection: alwaysCreateResources ? _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_PIPELINE_RESOURCE"] : null,
            data: Object.assign(Object.assign({}, _const__WEBPACK_IMPORTED_MODULE_4__["initialResourceFormValues"][resource.type]), { type: resource.type }),
        })),
    };
};
const convertMapToNameValueArray = (map) => {
    return Object.keys(map).map((name) => {
        const value = map[name];
        return { name, value };
    });
};
const convertResources = (resource) => {
    if (resource.selection === _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_PIPELINE_RESOURCE"]) {
        return {
            name: resource.name,
            resourceSpec: {
                params: convertMapToNameValueArray(resource.data.params),
                type: resource.data.type,
            },
        };
    }
    return {
        name: resource.name,
        resourceRef: {
            name: resource.selection,
        },
    };
};
const getPipelineRunFromForm = (pipeline, formValues, labels) => {
    const { parameters, resources, workspaces } = formValues;
    const pipelineRunData = {
        metadata: {
            labels,
        },
        spec: {
            pipelineRef: {
                name: pipeline.metadata.name,
            },
            params: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunParams"])(parameters),
            resources: resources.map(convertResources),
            workspaces: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunWorkspaces"])(workspaces),
        },
    };
    return getPipelineRunData(pipeline, pipelineRunData);
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/validation-utils.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/validation-utils.ts ***!
  \*****************************************************************************************/
/*! exports provided: validateResourceType, formResources, startPipelineSchema, addTriggerSchema, advancedSectionValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateResourceType", function() { return validateResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formResources", function() { return formResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPipelineSchema", function() { return startPipelineSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTriggerSchema", function() { return addTriggerSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedSectionValidationSchema", function() { return advancedSectionValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/modals/common/const.ts");



const validateResourceType = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    params: yup__WEBPACK_IMPORTED_MODULE_0__["object"]()
        .when('type', {
        is: _const__WEBPACK_IMPORTED_MODULE_1__["PipelineResourceType"].git,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            url: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            revision: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        }),
    })
        .when('type', {
        is: _const__WEBPACK_IMPORTED_MODULE_1__["PipelineResourceType"].image,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            url: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        }),
    })
        .when('type', {
        is: _const__WEBPACK_IMPORTED_MODULE_1__["PipelineResourceType"].storage,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            location: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            dir: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        }),
    })
        .when('type', {
        is: _const__WEBPACK_IMPORTED_MODULE_1__["PipelineResourceType"].cluster,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            url: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            username: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            password: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
            insecure: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        }),
    }),
    secrets: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('type', {
        is: _const__WEBPACK_IMPORTED_MODULE_1__["PipelineResourceType"].cluster,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            cadata: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            token: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        }),
    }),
});
const formResources = yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    selection: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    data: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('selection', {
        is: _const__WEBPACK_IMPORTED_MODULE_2__["CREATE_PIPELINE_RESOURCE"],
        then: validateResourceType,
    }),
}));
const volumeTypeSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]()
    .when('type', {
    is: (type) => _const__WEBPACK_IMPORTED_MODULE_1__["VolumeTypes"][type] === _const__WEBPACK_IMPORTED_MODULE_1__["VolumeTypes"].Secret,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        secret: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            secretName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            items: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
                path: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('key', {
                    is: (key) => !!key,
                    then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                }),
            })),
        }),
    }),
})
    .when('type', {
    is: (type) => _const__WEBPACK_IMPORTED_MODULE_1__["VolumeTypes"][type] === _const__WEBPACK_IMPORTED_MODULE_1__["VolumeTypes"].ConfigMap,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        configMap: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            items: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                key: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
                path: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('key', {
                    is: (key) => !!key,
                    then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
                }),
            })),
        }),
    }),
})
    .when('type', {
    is: (type) => _const__WEBPACK_IMPORTED_MODULE_1__["VolumeTypes"][type] === _const__WEBPACK_IMPORTED_MODULE_1__["VolumeTypes"].PVC,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        persistentVolumeClaim: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            claimName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        }),
    }),
});
const commonPipelineSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    parameters: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        description: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        default: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    })),
    resources: formResources,
});
const startPipelineSchema = commonPipelineSchema.shape({
    workspaces: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        data: volumeTypeSchema,
    })),
    secretOpen: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().equals([false]),
});
const addTriggerSchema = commonPipelineSchema.shape({
    triggerBinding: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        resource: yup__WEBPACK_IMPORTED_MODULE_0__["object"]()
            .shape({
            metadata: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            }),
        })
            .required('Required'),
    }),
});
const advancedSectionValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    secretName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    annotations: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        key: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        value: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    }),
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/index.ts":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/index.ts ***!
  \***********************************************************************/
/*! exports provided: removeTriggerModal, startPipelineModal, addTriggerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _triggers_RemoveTriggerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers/RemoveTriggerModal */ "./packages/dev-console/src/components/pipelines/modals/triggers/RemoveTriggerModal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTriggerModal", function() { return _triggers_RemoveTriggerModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _start_pipeline_StartPipelineModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-pipeline/StartPipelineModal */ "./packages/dev-console/src/components/pipelines/modals/start-pipeline/StartPipelineModal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPipelineModal", function() { return _start_pipeline_StartPipelineModal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _triggers_AddTriggerModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triggers/AddTriggerModal */ "./packages/dev-console/src/components/pipelines/modals/triggers/AddTriggerModal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTriggerModal", function() { return _triggers_AddTriggerModal__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/start-pipeline/StartPipelineForm.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/start-pipeline/StartPipelineForm.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _common_PipelineParameterSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/PipelineParameterSection */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineParameterSection.tsx");
/* harmony import */ var _common_PipelineResourceSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PipelineResourceSection */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceSection.tsx");
/* harmony import */ var _common_PiplelineWorkspacesSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/PiplelineWorkspacesSection */ "./packages/dev-console/src/components/pipelines/modals/common/PiplelineWorkspacesSection.tsx");
/* harmony import */ var _common_PipelineSecretSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PipelineSecretSection */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineSecretSection.tsx");






const StartPipelineForm = ({ values }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_PipelineParameterSection__WEBPACK_IMPORTED_MODULE_2__["default"], { parameters: values.parameters }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_PipelineResourceSection__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_PiplelineWorkspacesSection__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"], { title: "Advanced Options", fullWidth: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_PipelineSecretSection__WEBPACK_IMPORTED_MODULE_5__["default"], { namespace: values.namespace }))));
};
/* harmony default export */ __webpack_exports__["default"] = (StartPipelineForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/start-pipeline/StartPipelineModal.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/start-pipeline/StartPipelineModal.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _common_ModalStructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ModalStructure */ "./packages/dev-console/src/components/pipelines/modals/common/ModalStructure.tsx");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");
/* harmony import */ var _common_validation_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/validation-utils */ "./packages/dev-console/src/components/pipelines/modals/common/validation-utils.ts");
/* harmony import */ var _StartPipelineForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StartPipelineForm */ "./packages/dev-console/src/components/pipelines/modals/start-pipeline/StartPipelineForm.tsx");
/* harmony import */ var _submit_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit-utils */ "./packages/dev-console/src/components/pipelines/modals/start-pipeline/submit-utils.ts");




//import { useUserLabelForManualStart } from '../../../pipelineruns/triggered-by';





const StartPipelineModal = ({ pipeline, close, onSubmit, }) => {
    //const userStartedLabel = useUserLabelForManualStart();
    const initialValues = Object.assign(Object.assign({}, Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["convertPipelineToModalData"])(pipeline)), { workspaces: (pipeline.spec.workspaces || []).map((workspace) => (Object.assign(Object.assign({}, workspace), { type: 'EmptyDirectory' }))), secretOpen: false });
    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        Object(_submit_utils__WEBPACK_IMPORTED_MODULE_8__["submitStartPipeline"])(values, pipeline)
            .then((res) => {
            actions.setSubmitting(false);
            onSubmit && onSubmit(res);
            close();
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
            Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["errorModal"])({ error: err.message });
            close();
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, validationSchema: _common_validation_utils__WEBPACK_IMPORTED_MODULE_6__["startPipelineSchema"] }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_ModalStructure__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ submitBtnText: "Start", title: "Start Pipeline", close: close }, props),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StartPipelineForm__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(StartPipelineModal));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/start-pipeline/submit-utils.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/start-pipeline/submit-utils.ts ***!
  \*********************************************************************************************/
/*! exports provided: resourceSubmit, submitStartPipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceSubmit", function() { return resourceSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitStartPipeline", function() { return submitStartPipeline; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline-resource/pipelineResource-utils */ "./packages/dev-console/src/components/pipelines/pipeline-resource/pipelineResource-utils.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/const */ "./packages/dev-console/src/components/pipelines/modals/common/const.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const resourceSubmit = (resourceValues, namespace) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { params, secrets, type }, } = resourceValues;
    return secrets
        ? Object(_pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_2__["createSecretResource"])(secrets, type, namespace).then((secretResp) => {
            return Object(_pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_2__["createPipelineResource"])(params, type, namespace, secretResp);
        })
        : Object(_pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_2__["createPipelineResource"])(params, type, namespace);
});
const submitStartPipeline = (values, pipeline, labels) => __awaiter(void 0, void 0, void 0, function* () {
    const { namespace, resources } = values;
    const toCreateResources = resources.reduce((acc, resource, index) => {
        return resource.selection === _common_const__WEBPACK_IMPORTED_MODULE_3__["CREATE_PIPELINE_RESOURCE"] ? Object.assign(Object.assign({}, acc), { [index]: resource }) : acc;
    }, {});
    const createdResources = yield Promise.all(Object.values(toCreateResources).map((resource) => resourceSubmit(resource, namespace)));
    let formValues = values;
    if (createdResources.length > 0) {
        const indexLookup = Object.keys(toCreateResources);
        formValues = Object.assign(Object.assign({}, formValues), { resources: formValues.resources.map((resource, index) => {
                if (toCreateResources[index]) {
                    const creationIndex = indexLookup.indexOf(index.toString());
                    return Object.assign(Object.assign({}, resource), { selection: createdResources[creationIndex].metadata.name });
                }
                return resource;
            }) });
    }
    const pipelineRunResource = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_1__["PipelineRunModel"], Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["getPipelineRunFromForm"])(pipeline, formValues, labels));
    return Promise.resolve(pipelineRunResource);
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/AddTriggerForm.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/AddTriggerForm.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_PipelineResourceSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/PipelineResourceSection */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineResourceSection.tsx");
/* harmony import */ var _common_PipelineParameterSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/PipelineParameterSection */ "./packages/dev-console/src/components/pipelines/modals/common/PipelineParameterSection.tsx");
/* harmony import */ var _TriggerBindingSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TriggerBindingSection */ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSection.tsx");




const AddTriggerForm = (props) => {
    const { values } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TriggerBindingSection__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_PipelineParameterSection__WEBPACK_IMPORTED_MODULE_2__["default"], { parameters: values.parameters }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_PipelineResourceSection__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (AddTriggerForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/AddTriggerModal.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/AddTriggerModal.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _common_ModalStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ModalStructure */ "./packages/dev-console/src/components/pipelines/modals/common/ModalStructure.tsx");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");
/* harmony import */ var _common_validation_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/validation-utils */ "./packages/dev-console/src/components/pipelines/modals/common/validation-utils.ts");
/* harmony import */ var _AddTriggerForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddTriggerForm */ "./packages/dev-console/src/components/pipelines/modals/triggers/AddTriggerForm.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/modals/triggers/const.ts");
/* harmony import */ var _submit_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit-utils */ "./packages/dev-console/src/components/pipelines/modals/triggers/submit-utils.ts");









const AddTriggerModal = ({ pipeline, close }) => {
    const initialValues = Object.assign(Object.assign({}, Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["convertPipelineToModalData"])(pipeline, true)), { triggerBinding: {
            name: _const__WEBPACK_IMPORTED_MODULE_7__["TRIGGER_BINDING_EMPTY"],
            resource: null,
        } });
    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        Object(_submit_utils__WEBPACK_IMPORTED_MODULE_8__["submitTrigger"])(pipeline, values)
            .then(() => {
            actions.setSubmitting(false);
            close();
        })
            .catch((error) => {
            actions.setStatus({ submitError: (error === null || error === void 0 ? void 0 : error.message) || 'There was an unknown error' });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, validationSchema: _common_validation_utils__WEBPACK_IMPORTED_MODULE_5__["addTriggerSchema"] }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_ModalStructure__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ submitBtnText: "Add", title: "Add Trigger", close: close }, props),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddTriggerForm__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(AddTriggerModal));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/RemoveTriggerForm.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/RemoveTriggerForm.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _TriggerTemplateSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TriggerTemplateSelector */ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerTemplateSelector.tsx");





const RemoveTriggerForm = (props) => {
    const { pipeline } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Split"], { className: "odc-modal-content", gutter: "md" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationTriangleIcon"], { size: "md", color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_2__["global_warning_color_100"].value })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], { isFilled: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-break-word" },
                "Select the trigger to remove from pipeline ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, pipeline.metadata.name),
                "."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TriggerTemplateSelector__WEBPACK_IMPORTED_MODULE_4__["default"], { name: "selectedTrigger", placeholder: "Select Trigger Template", pipeline: pipeline }))));
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveTriggerForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/RemoveTriggerModal.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/RemoveTriggerModal.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _common_ModalStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ModalStructure */ "./packages/dev-console/src/components/pipelines/modals/common/ModalStructure.tsx");
/* harmony import */ var _RemoveTriggerForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveTriggerForm */ "./packages/dev-console/src/components/pipelines/modals/triggers/RemoveTriggerForm.tsx");
/* harmony import */ var _remove_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove-utils */ "./packages/dev-console/src/components/pipelines/modals/triggers/remove-utils.ts");
/* harmony import */ var _validation_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation-utils */ "./packages/dev-console/src/components/pipelines/modals/triggers/validation-utils.ts");







const RemoveTriggerModal = ({ pipeline, close }) => {
    const initialValues = {
        selectedTrigger: null,
    };
    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        Object(_remove_utils__WEBPACK_IMPORTED_MODULE_5__["removeTrigger"])(values, pipeline)
            .then(() => {
            actions.setSubmitting(false);
            close();
        })
            .catch((e) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: e.message });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, validationSchema: _validation_utils__WEBPACK_IMPORTED_MODULE_6__["removeTriggerSchema"] }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_ModalStructure__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { submitBtnText: "Remove", submitDanger: true, title: "Remove Trigger", close: close }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RemoveTriggerForm__WEBPACK_IMPORTED_MODULE_4__["default"], { pipeline: pipeline })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(RemoveTriggerModal));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSection.scss":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSection.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSection.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSection.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _TriggerBindingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TriggerBindingSelector */ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSelector.tsx");
/* harmony import */ var _TriggerBindingSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TriggerBindingSection.scss */ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSection.scss");
/* harmony import */ var _TriggerBindingSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TriggerBindingSection_scss__WEBPACK_IMPORTED_MODULE_5__);






const TriggerBindingSection = () => {
    const { setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const [bindingVars, setBindingVars] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const updateTriggerBindingVariables = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((selectedTriggerBinding) => {
        setBindingVars(selectedTriggerBinding.spec.params);
        setFieldValue('triggerBinding.resource', selectedTriggerBinding);
    }, [setFieldValue]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-trigger-binding-section" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Webhook", fullWidth: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TriggerBindingSelector__WEBPACK_IMPORTED_MODULE_4__["default"], { description: "Select your git provider type to be associated with the Trigger", label: "Git Provider Type", onChange: updateTriggerBindingVariables }),
            bindingVars && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Expandable"], { toggleTextExpanded: "Hide Variables", toggleTextCollapsed: "Show Variables" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-trigger-binding-section__variable-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "odc-trigger-binding-section__variable-descriptor" }, "The following variables can be used in the Parameters or when created new Resources."),
                    bindingVars.map(({ name }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], { key: name, className: "odc-trigger-binding-section__variable-badge", isRead: true }, name)))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false, className: "odc-trigger-binding-section__variable-help-text" },
                    "Use this format when referencing variables in this form:",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, '$(params.parameter)')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggerBindingSection);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSelector.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSelector.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _TriggerBindingSelectorDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TriggerBindingSelectorDropdown */ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSelectorDropdown.tsx");






const TriggerBindingSelector = (props) => {
    const { description, label = _models__WEBPACK_IMPORTED_MODULE_4__["TriggerBindingModel"].label, onChange } = props;
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: [
            {
                isList: true,
                namespace: values.namespace,
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["TriggerBindingModel"]),
                prop: 'triggerBindingData',
                isOptional: true,
            },
            {
                isList: true,
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["ClusterTriggerBindingModel"]),
                prop: 'clusterTriggerBindingData',
                isOptional: true,
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TriggerBindingSelectorDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], { description: description, label: label, onChange: onChange })));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggerBindingSelector);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSelectorDropdown.tsx":
/*!**********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/TriggerBindingSelectorDropdown.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const TriggerBindingSelectorDropdown = (props) => {
    const { clusterTriggerBindingData, description, label, onChange, triggerBindingData } = props;
    const triggerBindings = (triggerBindingData === null || triggerBindingData === void 0 ? void 0 : triggerBindingData.data) || [];
    const clusterTriggerBindings = (clusterTriggerBindingData === null || clusterTriggerBindingData === void 0 ? void 0 : clusterTriggerBindingData.data) || [];
    const bindings = [...triggerBindings, ...clusterTriggerBindings];
    const dropdownItems = bindings.reduce((acc, triggerBinding) => (Object.assign(Object.assign({}, acc), { [triggerBinding.metadata.name]: triggerBinding.metadata.name })), {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["DropdownField"], { fullWidth: true, helpText: description, items: dropdownItems, disabled: Object.keys(dropdownItems).length === 0, label: label, name: "triggerBinding.name", onChange: (name) => {
            onChange(bindings.find((triggerBinding) => triggerBinding.metadata.name === name));
        }, title: `Select ${label}` }));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggerBindingSelectorDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerTemplateSelector.scss":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/TriggerTemplateSelector.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerTemplateSelector.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/TriggerTemplateSelector.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/triggers */ "./packages/dev-console/src/components/pipelines/utils/triggers.ts");
/* harmony import */ var _TriggerTemplateSelector_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TriggerTemplateSelector.scss */ "./packages/dev-console/src/components/pipelines/modals/triggers/TriggerTemplateSelector.scss");
/* harmony import */ var _TriggerTemplateSelector_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TriggerTemplateSelector_scss__WEBPACK_IMPORTED_MODULE_4__);





const TriggerTemplateSelector = (props) => {
    const { name, pipeline, placeholder } = props;
    const { metadata: { name: pipelineName, namespace }, } = pipeline;
    const [field] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(name);
    const selection = field.value;
    const templateNames = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_3__["usePipelineTriggerTemplateNames"])(pipelineName, namespace) || [];
    const items = templateNames.reduce((acc, { triggerTemplateName }) => (Object.assign(Object.assign({}, acc), { [triggerTemplateName]: triggerTemplateName })), {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-trigger-template-selector" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["DropdownField"], { fullWidth: true, disabled: templateNames.length === 0, items: items, name: name, title: placeholder }),
        selection ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-break-word odc-trigger-template-selector__confirmationMessage" },
            "Are you sure you want to remove ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, selection),
            " from ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, pipeline.metadata.name),
            "?")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-trigger-template-selector__pfModalHack" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggerTemplateSelector);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/const.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/const.ts ***!
  \********************************************************************************/
/*! exports provided: TRIGGER_BINDING_EMPTY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_BINDING_EMPTY", function() { return TRIGGER_BINDING_EMPTY; });
const TRIGGER_BINDING_EMPTY = '#empty-trigger-binding#';


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/remove-utils.ts":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/remove-utils.ts ***!
  \***************************************************************************************/
/*! exports provided: removeTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrigger", function() { return removeTrigger; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const removeTrigger = (values, pipeline) => __awaiter(void 0, void 0, void 0, function* () {
    const ns = pipeline.metadata.namespace;
    const selectedTriggerTemplate = values.selectedTrigger;
    // Remove the selected TriggerTemplate
    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_1__["TriggerTemplateModel"], {
        metadata: { name: selectedTriggerTemplate, namespace: ns },
    });
    const triggerMatchesTriggerTemplate = ({ template: { name } }) => name === selectedTriggerTemplate;
    // Get all the event listeners so we can update their references
    const eventListeners = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_1__["EventListenerModel"], { ns });
    const matchingEventListeners = eventListeners.filter(({ spec: { triggers } }) => triggers.find(triggerMatchesTriggerTemplate));
    const singleTriggers = ({ spec: { triggers } }) => triggers.length === 1;
    // Delete all EventListeners that only had the one trigger
    const deletableEventListeners = matchingEventListeners.filter(singleTriggers);
    yield Promise.all(deletableEventListeners.map((eventListener) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_1__["EventListenerModel"], eventListener)));
    // Update all EventListeners that had more than one trigger
    const updatableEventListeners = matchingEventListeners.filter((eventListener) => !singleTriggers(eventListener));
    yield Promise.all(updatableEventListeners.map((eventListener) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_1__["EventListenerModel"], eventListener, [
        {
            opt: 'replace',
            path: '/spec/triggers',
            value: eventListener.spec.triggers.filter(triggerMatchesTriggerTemplate),
        },
    ])));
    return Promise.resolve();
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/resource-utils.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/resource-utils.ts ***!
  \*****************************************************************************************/
/*! exports provided: createTriggerTemplate, createEventListener, createEventListenerRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTriggerTemplate", function() { return createTriggerTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventListener", function() { return createEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventListenerRoute", function() { return createEventListenerRoute; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");





const createTriggerTemplate = (pipelineRun, params) => {
    return {
        apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["TriggerTemplateModel"]),
        kind: _models__WEBPACK_IMPORTED_MODULE_3__["TriggerTemplateModel"].kind,
        metadata: {
            name: `trigger-template-${pipelineRun.metadata.name}`,
        },
        spec: {
            params,
            resourcetemplates: [pipelineRun],
        },
    };
};
const createEventListener = (triggerBindings, triggerTemplate) => {
    return {
        apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["EventListenerModel"]),
        kind: _models__WEBPACK_IMPORTED_MODULE_3__["EventListenerModel"].kind,
        metadata: {
            name: `event-listener-${Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getRandomChars"])()}`,
        },
        spec: {
            serviceAccountName: _const__WEBPACK_IMPORTED_MODULE_4__["PIPELINE_SERVICE_ACCOUNT"],
            triggers: [
                {
                    bindings: triggerBindings.map(({ kind, metadata: { name } }) => ({ kind, name })),
                    template: { name: triggerTemplate.metadata.name },
                },
            ],
        },
    };
};
const createEventListenerRoute = (eventListener, generatedName, targetPort = 8080) => {
    const eventListenerName = eventListener.metadata.name;
    // Not ideal, but if all else fails, we can do our best guess
    const referenceName = generatedName || `el-${eventListenerName}`;
    return {
        apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"]),
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"].kind,
        metadata: {
            name: referenceName,
            labels: {
                'app.kubernetes.io/managed-by': _models__WEBPACK_IMPORTED_MODULE_3__["EventListenerModel"].kind,
                'app.kubernetes.io/part-of': 'Triggers',
                eventlistener: eventListenerName,
            },
        },
        spec: {
            port: {
                targetPort,
            },
            to: {
                kind: 'Service',
                name: referenceName,
                weight: 100,
            },
        },
    };
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/submit-utils.ts":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/submit-utils.ts ***!
  \***************************************************************************************/
/*! exports provided: submitTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitTrigger", function() { return submitTrigger; });
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");
/* harmony import */ var _resource_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-utils */ "./packages/dev-console/src/components/pipelines/modals/triggers/resource-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const exposeRoute = (elName, ns, iteration = 0) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const elResource = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_3__["EventListenerModel"], elName, ns);
    const serviceGeneratedName = (_a = elResource === null || elResource === void 0 ? void 0 : elResource.status) === null || _a === void 0 ? void 0 : _a.configuration.generatedName;
    try {
        if (!serviceGeneratedName) {
            if (iteration < 3) {
                setTimeout(() => exposeRoute(elName, ns, iteration + 1), 500);
            }
            else {
                // Unable to deterministically create the route; create a default one
                yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_0__["RouteModel"], Object(_resource_utils__WEBPACK_IMPORTED_MODULE_5__["createEventListenerRoute"])(elResource), { ns });
            }
            return;
        }
        // Get the service, find out what port we are exposed on
        const serviceResource = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ServiceModel"], serviceGeneratedName, ns);
        const servicePort = (_d = (_c = (_b = serviceResource.spec) === null || _b === void 0 ? void 0 : _b.ports) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.targetPort;
        // Build the exposed route on the correct port
        const route = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_5__["createEventListenerRoute"])(elResource, serviceGeneratedName, servicePort);
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_0__["RouteModel"], route, { ns });
    }
    catch (e) {
        Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["errorModal"])({
            title: 'Error Exposing Route',
            error: e.message || 'Unknown error exposing the Webhook route',
        });
    }
});
const submitTrigger = (pipeline, formValues) => __awaiter(void 0, void 0, void 0, function* () {
    const { triggerBinding } = formValues;
    const thisNamespace = pipeline.metadata.namespace;
    const pipelineRun = Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["getPipelineRunFromForm"])(pipeline, formValues);
    const triggerTemplateParams = triggerBinding.resource.spec.params.map(({ name }) => ({ name }));
    const triggerTemplate = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_5__["createTriggerTemplate"])(pipelineRun, triggerTemplateParams);
    const eventListener = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_5__["createEventListener"])([triggerBinding.resource], triggerTemplate);
    const metadata = { ns: thisNamespace };
    let resources;
    try {
        // Validates the modal contents, should be done first
        const ttResource = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_3__["TriggerTemplateModel"], triggerTemplate, metadata);
        // Creates the linkages and will provide the link to non-trigger resources created
        const elResource = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_3__["EventListenerModel"], eventListener, metadata);
        // Capture all related resources
        resources = [ttResource, elResource];
    }
    catch (e) {
        return Promise.reject(e);
    }
    exposeRoute(eventListener.metadata.name, thisNamespace);
    return Promise.resolve(resources);
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/triggers/validation-utils.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/triggers/validation-utils.ts ***!
  \*******************************************************************************************/
/*! exports provided: removeTriggerSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTriggerSchema", function() { return removeTriggerSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const removeTriggerSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    selectedTrigger: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineClusterOptions.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineClusterOptions.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const PipelineClusterOptions = ({ prefixName }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.name`, label: "Name", helpText: "Name of the cluster.", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.url`, label: "URL", helpText: "Host URL of the master node.", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.username`, label: "Username", helpText: "The user with access to the cluster.", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].password, name: `${prefixName}.params.password`, label: "Password", helpText: "Please provide Password." }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.insecure`, label: "Insecure", helpText: "Indicate server should be accessed without verifying the TLS certificate." }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DroppableFileInputField"], { name: `${prefixName}.secrets.cadata`, label: "Cadata", helpText: "The PEM format certificate. Upload file by dragging & dropping, selecting it, or pasting from the clipboard.", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DroppableFileInputField"], { name: `${prefixName}.secrets.token`, label: "Token", helpText: "Upload file by dragging & dropping, selecting it, or pasting from the clipboard.", required: true })));
/* harmony default export */ __webpack_exports__["default"] = (PipelineClusterOptions);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineGitOptions.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineGitOptions.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const PipelineGitOptions = ({ prefixName }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.url`, label: "URL", helpText: "Please provide git URL.", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.revision`, label: "Revision", helpText: "Please provide Revisions. i.e master" })));
/* harmony default export */ __webpack_exports__["default"] = (PipelineGitOptions);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineImageOptions.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineImageOptions.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const PipelineImageOptions = ({ prefixName }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.url`, label: "URL", helpText: "Please provide Image URL.", required: true }));
/* harmony default export */ __webpack_exports__["default"] = (PipelineImageOptions);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineResourceParam.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineResourceParam.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _PipelineGitOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PipelineGitOptions */ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineGitOptions.tsx");
/* harmony import */ var _PipelineImageOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PipelineImageOptions */ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineImageOptions.tsx");
/* harmony import */ var _PipelineClusterOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineClusterOptions */ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineClusterOptions.tsx");
/* harmony import */ var _PipelineStorageOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineStorageOptions */ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineStorageOptions.tsx");






const PipelineResourceParam = (props) => {
    const { name, type } = props;
    const renderTypeFields = () => {
        switch (type) {
            case 'git':
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineGitOptions__WEBPACK_IMPORTED_MODULE_2__["default"], { prefixName: name });
            case 'image':
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineImageOptions__WEBPACK_IMPORTED_MODULE_3__["default"], { prefixName: name });
            case 'cluster':
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineClusterOptions__WEBPACK_IMPORTED_MODULE_4__["default"], { prefixName: name });
            case 'storage':
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineStorageOptions__WEBPACK_IMPORTED_MODULE_5__["default"], { prefixName: name });
            default:
                return null;
        }
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"], { fullWidth: true }, renderTypeFields());
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineResourceParam);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineStorageOptions.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/PipelineStorageOptions.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const PipelineStorageOptions = ({ prefixName }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.type`, label: "Type", helpText: "Represents the type of blob storage i.e gcs", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.location`, label: "Location", helpText: "Represents the location of the blob storage i.e gs://some-private-bucket", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: `${prefixName}.params.dir`, label: "Directory", helpText: "Represents whether the blob storage is a directory or not" })));
/* harmony default export */ __webpack_exports__["default"] = (PipelineStorageOptions);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/pipelineResource-utils.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/pipelineResource-utils.ts ***!
  \***************************************************************************************************/
/*! exports provided: getDefinedObj, createPipelineResource, createSecretResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefinedObj", function() { return getDefinedObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipelineResource", function() { return createPipelineResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSecretResource", function() { return createSecretResource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/utils/utils */ "./packages/console-shared/src/utils/utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _modals_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");






const getDefinedObj = (objData) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"](objData, (v) => lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](v) || lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"](v) || v === '');
};
const createPipelineResource = (params, type, namespace, secretResp) => {
    const resourceName = `${type}-${Object(_console_shared_src_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomChars"])(6)}`;
    const pipelineResource = {
        apiVersion: 'tekton.dev/v1alpha1',
        kind: _models__WEBPACK_IMPORTED_MODULE_4__["PipelineResourceModel"].kind,
        metadata: {
            name: resourceName,
            namespace,
        },
        spec: Object.assign({ type, params: Object(_modals_common_utils__WEBPACK_IMPORTED_MODULE_5__["convertMapToNameValueArray"])(getDefinedObj(params)) }, (secretResp && {
            secrets: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](secretResp.data, (value, name) => {
                return {
                    fieldName: name,
                    secretKey: name,
                    secretName: secretResp.metadata.name,
                };
            }),
        })),
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineResourceModel"], pipelineResource);
};
const createSecretResource = (secret, type, namespace) => {
    const resourceName = `${type}-secret-${Object(_console_shared_src_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomChars"])(6)}`;
    const secretResource = {
        apiVersion: 'v1',
        kind: 'Secret',
        metadata: {
            name: resourceName,
            namespace,
        },
        stringData: getDefinedObj(secret),
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["SecretModel"], secretResource);
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/utils/triggers.ts":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/utils/triggers.ts ***!
  \*************************************************************************/
/*! exports provided: usePipelineTriggerTemplateNames, useEventListenerTriggerTemplateNames, getEventListenerTriggerBindingNames, getTriggerTemplatePipelineName, useTriggerTemplateEventListenerNames, useTriggerBindingEventListenerNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePipelineTriggerTemplateNames", function() { return usePipelineTriggerTemplateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListenerTriggerTemplateNames", function() { return useEventListenerTriggerTemplateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventListenerTriggerBindingNames", function() { return getEventListenerTriggerBindingNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerTemplatePipelineName", function() { return getTriggerTemplatePipelineName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTriggerTemplateEventListenerNames", function() { return useTriggerTemplateEventListenerNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTriggerBindingEventListenerNames", function() { return useTriggerBindingEventListenerNames; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/routes */ "./public/components/routes.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/k8s-get-hook */ "./public/components/utils/k8s-get-hook.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");









const getResourceName = (resource) => resource.metadata.name;
const getEventListenerTemplateNames = (el) => el.spec.triggers.map((elTrigger) => elTrigger.template.name);
const getEventListenerGeneratedName = (eventListener) => { var _a; return (_a = eventListener.status) === null || _a === void 0 ? void 0 : _a.configuration.generatedName; };
const useEventListenerRoutes = (namespace, eventListenerResources) => {
    const memoResources = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        return (eventListenerResources || []).map(getEventListenerGeneratedName).reduce((acc, generatedName) => (Object.assign(Object.assign({}, acc), { [generatedName]: {
                kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"].kind,
                name: generatedName,
                namespace,
                optional: true,
            } })), {});
    }, [namespace, eventListenerResources]);
    const results = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResources"])(memoResources);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(results, (result) => result.data);
};
const useAllEventListeners = (namespace) => {
    const eventListenerResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["EventListenerModel"]),
        isList: true,
        namespace,
    }), [namespace]);
    const [resources, eventListenerLoaded] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResource"])(eventListenerResource);
    return eventListenerLoaded ? resources : null;
};
const usePipelineTriggerTemplateNames = (pipelineName, namespace) => {
    const eventListenerResources = useAllEventListeners(namespace);
    const triggerTemplateResources = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        if (!eventListenerResources) {
            return {};
        }
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(eventListenerResources.map(getEventListenerTemplateNames)).reduce((resourceMap, triggerTemplateName) => (Object.assign(Object.assign({}, resourceMap), { [triggerTemplateName]: {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["TriggerTemplateModel"]),
                name: triggerTemplateName,
                namespace,
                optional: true,
            } })), {});
    }, [namespace, eventListenerResources]);
    const triggerTemplates = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResources"])(triggerTemplateResources);
    const routes = useEventListenerRoutes(namespace, eventListenerResources);
    const triggerTemplateResults = Object.values(triggerTemplates);
    const countExpected = Object.keys(triggerTemplateResources).length;
    const countLoaded = triggerTemplateResults.filter(({ loaded }) => loaded).length;
    const countErrored = triggerTemplateResults.filter(({ loadError }) => !!loadError).length;
    if (countLoaded === 0 || countLoaded !== countExpected - countErrored) {
        return null;
    }
    const matchingTriggerTemplateNames = triggerTemplateResults
        .filter((resourceWatch) => resourceWatch.loaded)
        .map((resourceWatch) => resourceWatch.data)
        .filter((triggerTemplate) => {
        var _a, _b, _c, _d;
        const plr = (_b = (_a = triggerTemplate === null || triggerTemplate === void 0 ? void 0 : triggerTemplate.spec) === null || _a === void 0 ? void 0 : _a.resourcetemplates) === null || _b === void 0 ? void 0 : _b.find(({ kind }) => kind === _models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"].kind);
        return ((_d = (_c = plr === null || plr === void 0 ? void 0 : plr.spec) === null || _c === void 0 ? void 0 : _c.pipelineRef) === null || _d === void 0 ? void 0 : _d.name) === pipelineName;
    })
        .map(getResourceName);
    return (eventListenerResources || []).reduce((acc, ev) => {
        const eventListenerTemplateNames = getEventListenerTemplateNames(ev);
        const generatedRouteName = getEventListenerGeneratedName(ev);
        const triggerTemplateName = matchingTriggerTemplateNames.find((name) => eventListenerTemplateNames.includes(name));
        const route = routes[generatedRouteName];
        if (!triggerTemplateName) {
            return acc;
        }
        let routeURL = null;
        try {
            if (route) {
                routeURL = Object(_console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__["getRouteWebURL"])(route);
            }
        }
        catch (e) {
            // swallow errors, we don't care if we can't create a good route right now
        }
        return [...acc, { routeURL, triggerTemplateName }];
    }, []);
};
const useEventListenerTriggerTemplateNames = (eventListener) => {
    const { metadata: { namespace }, } = eventListener;
    const [route, routeLoaded] = Object(_console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_5__["useK8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"], getEventListenerGeneratedName(eventListener), namespace);
    return eventListener.spec.triggers.reduce((acc, trigger) => {
        var _a;
        return [
            ...acc,
            {
                routeURL: route && ((_a = route === null || route === void 0 ? void 0 : route.status) === null || _a === void 0 ? void 0 : _a.ingress) && routeLoaded ? Object(_console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__["getRouteWebURL"])(route) : null,
                triggerTemplateName: trigger.template.name,
            },
        ];
    }, []);
};
const getEventListenerTriggerBindingNames = (eventListener) => {
    return eventListener.spec.triggers.reduce((acc, trigger) => [
        ...acc,
        ...trigger.bindings.map((binding) => ({
            model: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__["getResourceModelFromBindingKind"])(binding.kind),
            name: binding.name,
        })),
    ], []);
};
const getTriggerTemplatePipelineName = (triggerTemplate) => {
    var _a;
    return (((_a = triggerTemplate.spec.resourcetemplates.find(({ kind }) => kind === _models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"].kind)) === null || _a === void 0 ? void 0 : _a.spec.pipelineRef.name) || '');
};
const useTriggerTemplateEventListenerNames = (triggerTemplate) => {
    const eventListenerResources = useAllEventListeners(triggerTemplate.metadata.namespace) || [];
    return eventListenerResources
        .filter((eventListener) => eventListener.spec.triggers.find(({ template: { name } }) => name === getResourceName(triggerTemplate)))
        .map(getResourceName);
};
const useTriggerBindingEventListenerNames = (triggerBinding) => {
    const eventListenerResources = useAllEventListeners(triggerBinding.metadata.namespace) || [];
    return eventListenerResources
        .filter((eventListener) => eventListener.spec.triggers.find(({ bindings }) => bindings.find(({ kind, name }) => getResourceName(triggerBinding) === name &&
        Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__["getResourceModelFromBindingKind"])(kind).kind === triggerBinding.kind)))
        .map(getResourceName);
};


/***/ }),

/***/ "./public/components/utils/k8s-get-hook.ts":
/*!*************************************************!*\
  !*** ./public/components/utils/k8s-get-hook.ts ***!
  \*************************************************/
/*! exports provided: useK8sGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useK8sGet", function() { return useK8sGet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const useK8sGet = (kind, name, namespace, opts) => {
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoadError(null);
                setLoaded(false);
                setData(null);
                const resource = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(kind, name, namespace, opts);
                setData(resource);
            }
            catch (error) {
                setLoadError(error);
            }
            finally {
                setLoaded(true);
            }
        });
        fetch();
    }, [kind, name, namespace, opts]);
    return [data, loaded, loadError];
};


/***/ })

}]);
//# sourceMappingURL=pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details~pipeline-overview-list~pi~3bd37dc8-28373152389603de9c92.js.map