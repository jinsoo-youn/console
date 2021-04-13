(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PipelineBuilderPage~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details"],{

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/MultiParametersField.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/MultiParametersField.tsx ***!
  \*************************************************************************************************/
/*! exports provided: MultiParametersField, pipelineParameterTypeSelections, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiParametersField", function() { return MultiParametersField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineParameterTypeSelections", function() { return pipelineParameterTypeSelections; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");









const MultiParametersField = ({ name }) => {
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const fieldValue = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](values, name, []);
    const defaultItem = {
        name: '',
        description: '',
        type: '',
        default: '',
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], { name: name, render: ({ push, remove }) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: `form-multi-column-input-${name.replace(/\./g, '-')}-field` },
                fieldValue.length > 0 &&
                    fieldValue.map((value, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "parameter-input-field-wrapper", key: `${name}-${index}-inputFieldWrapper` },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "remove-button-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link remove-button", "data-test-id": "pairs-list__delete-btn", onClick: () => {
                                    remove(index);
                                }, type: "button", variant: "link" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["MinusCircleIcon"], { "data-test-id": "pairs-list__delete-icon", className: "pairs-list__side-btn pairs-list__delete-ico co-icon-space-r" }),
                                "Remove Pipeline Parameter")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputSection, { label: "Name", customClass: "short-margin-top", isRequired: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { name: `${name}.${index}.name`, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, placeholder: "Name" })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputSection, { label: "Description" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { name: `${name}.${index}.description`, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, placeholder: "Description" })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputSection, { label: "Type" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DropdownValueComponent, { nameValue: `${name}.${index}` }))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "add-button-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link--align-left", "data-test-id": "pairs-list__add-btn", onClick: () => {
                            push(defaultItem);
                        }, type: "button", variant: "link" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                        "Add Pipeline Parameter"))));
        } }));
};
const DropdownValueComponent = props => {
    const { nameValue } = props;
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const [valueType, setValueType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    const renderValueField = (valueType, name) => {
        if (valueType === '') {
            valueType = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](values, `${name}.type`);
        }
        switch (valueType) {
            case 'string': {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputSection, { label: "Default Value", customClass: "input-section-without-margin-left" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { name: `${name}.default`, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, placeholder: "Default Value" })));
            }
            case 'array': {
                let arrayFieldValue = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](values, `${name}.default`, []);
                arrayFieldValue = arrayFieldValue === '' ? [] : arrayFieldValue;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputSection, { label: "Default Value" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], { name: `${name}.default`, render: ({ push, remove }) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: `form-multi-column-input-${name.replace(/\./g, '-')}-field` },
                                arrayFieldValue.length > 0 &&
                                    arrayFieldValue.map((value, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: `${name}-default-${index}-inputWrapper`, id: "parameter-array-row-input-wrapper" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { className: "input-field", name: `${name}.default.${index}`, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, placeholder: "Default Value" }),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link remove-button", "data-test-id": "pairs-list__delete-btn", onClick: () => {
                                                remove(index);
                                            }, type: "button", variant: "link" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["MinusCircleIcon"], { "data-test-id": "pairs-list__delete-icon", className: "pairs-list__side-btn pairs-list__delete-ico delete-button" }))))),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link--align-left space-left", "data-test-id": "pairs-list__add-btn", onClick: () => {
                                        push('');
                                    }, type: "button", variant: "link" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                                    "Add Default Value")));
                        } })));
            }
            default: {
                return null;
            }
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["DropdownField"], { fullWidth: true, items: pipelineParameterTypeSelections, name: `${nameValue}.type`, onChange: data => {
                switch (data) {
                    case 'string': {
                        setFieldValue(`${nameValue}.default`, '');
                        break;
                    }
                    case 'array': {
                        setFieldValue(`${nameValue}.default`, []);
                        break;
                    }
                    default: {
                    }
                }
                setValueType(data);
            } }),
        renderValueField(valueType, nameValue)));
};
const InputSection = ({ label, isRequired, children, customClass = '' }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'form-group parameter-input-section-wrapper ' + customClass },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : '') }, label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, children)));
};
const pipelineParameterTypeSelections = {
    '': 'Select resource type',
    string: 'String',
    array: 'Array',
};
/* harmony default export */ __webpack_exports__["default"] = (MultiParametersField);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineForm.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineForm.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");





const PipelineForm = ({ PipelineFormComponent, formName, validationSchema, obj, }) => {
    const initialValues = {
        parameters: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.spec, 'params', []),
        resources: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.spec, 'resources', []),
    };
    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sUpdate"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineModel"], Object.assign(Object.assign({}, obj), { spec: Object.assign(Object.assign({}, obj.spec), { params: values.parameters, resources: values.resources }) }), obj.metadata.namespace, obj.metadata.name)
            .then((newObj) => {
            actions.setSubmitting(false);
            actions.resetForm({
                values: {
                    parameters: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](newObj.spec, 'params', []),
                    resources: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](newObj.spec, 'resources', []),
                },
                status: { success: `Successfully updated the pipeline ${formName}.` },
            });
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    const handleReset = (values, actions) => {
        actions.resetForm({ status: {} });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: handleReset, validationSchema: validationSchema, render: (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipelineFormComponent, Object.assign({ namespace: obj.metadata.namespace }, props)) })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParameters.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParameters.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MultiParametersField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiParametersField */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/MultiParametersField.tsx");


const PipelineParameters = props => {
    const { fieldName } = props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultiParametersField__WEBPACK_IMPORTED_MODULE_1__["MultiParametersField"], { name: fieldName });
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineParameters);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParametersForm.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParametersForm.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _PipelineParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineParameters */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParameters.tsx");





const PipelineParametersForm = ({ namespace, handleSubmit, handleReset, isSubmitting, status, errors, dirty, }) => {
    const pipelineParameterAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["useAccessReview"])({
        group: 'tekton.dev',
        resource: 'pipelines',
        namespace,
        verb: 'update',
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Form"], { onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineParameters__WEBPACK_IMPORTED_MODULE_4__["default"], { fieldName: "parameters", isReadOnly: !pipelineParameterAccess }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
            pipelineParameterAccess && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["FormFooter"], { handleReset: handleReset, isSubmitting: isSubmitting, errorMessage: status && status.submitError, successMessage: status && !dirty && status.success, disableSubmit: !dirty, showAlert: dirty })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineParametersForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResources.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResources.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./packages/dev-console/src/components/pipelines/const.ts");




const PipelineResources = (props) => {
    const { addLabel = 'Add Pipeline Resource', fieldName, isReadOnly = false } = props;
    const emptyMessage = 'No resources are associated with this pipeline.';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["MultiColumnField"], { name: fieldName, addLabel: addLabel, headers: ['Name', 'Resource Type'], emptyValues: { name: '', type: '' }, emptyMessage: emptyMessage, isReadOnly: isReadOnly },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { name: "name", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, placeholder: "Name", isReadOnly: isReadOnly }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DropdownField"], { name: "type", items: _const__WEBPACK_IMPORTED_MODULE_3__["pipelineResourceTypeSelections"], fullWidth: true, disabled: isReadOnly })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineResources);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResourcesForm.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResourcesForm.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _PipelineResources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineResources */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResources.tsx");







const PipelineResourcesForm = ({ namespace, handleSubmit, handleReset, isSubmitting, status, errors, dirty, }) => {
    const pipelineResourceAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: 'tekton.dev',
        resource: 'pipelines',
        namespace,
        verb: 'update',
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineResources__WEBPACK_IMPORTED_MODULE_6__["default"], { fieldName: "resources", isReadOnly: !pipelineResourceAccess }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
            pipelineResourceAccess && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["FormFooter"], { handleReset: handleReset, isSubmitting: isSubmitting, errorMessage: status && status.submitError, successMessage: status && !dirty && status.success, disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](lodash__WEBPACK_IMPORTED_MODULE_1__["compact"](Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(errors, 'resources'))), showAlert: dirty })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineResourcesForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/index.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/index.ts ***!
  \*********************************************************************************/
/*! exports provided: PipelineDetails, PipelineParameters, PipelineParametersForm, PipelineResources, PipelineResourcesForm, PipelineRuns, PipelineForm, resourcesValidationSchema, parametersValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pipeline_details_PipelineDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipeline-details/PipelineDetails */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineDetails.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineDetails", function() { return _pipeline_details_PipelineDetails__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PipelineParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PipelineParameters */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParameters.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineParameters", function() { return _PipelineParameters__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PipelineParametersForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PipelineParametersForm */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineParametersForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineParametersForm", function() { return _PipelineParametersForm__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PipelineResources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PipelineResources */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResources.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineResources", function() { return _PipelineResources__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PipelineResourcesForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineResourcesForm */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineResourcesForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineResourcesForm", function() { return _PipelineResourcesForm__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _PipelineRuns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineRuns */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineRuns.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineRuns", function() { return _PipelineRuns__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _PipelineForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineForm */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelineForm", function() { return _PipelineForm__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _pipelineForm_validation_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipelineForm-validation-utils */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipelineForm-validation-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resourcesValidationSchema", function() { return _pipelineForm_validation_utils__WEBPACK_IMPORTED_MODULE_7__["resourcesValidationSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parametersValidationSchema", function() { return _pipelineForm_validation_utils__WEBPACK_IMPORTED_MODULE_7__["parametersValidationSchema"]; });











/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineDetails.tsx":
/*!*************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineDetails.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _resource_overview_DynamicResourceLinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resource-overview/DynamicResourceLinkList */ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx");
/* harmony import */ var _resource_overview_TriggerTemplateResourceLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resource-overview/TriggerTemplateResourceLink */ "./packages/dev-console/src/components/pipelines/resource-overview/TriggerTemplateResourceLink.tsx");
/* harmony import */ var _PipelineVisualization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineVisualization */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx");







const PipelineDetails = ({ obj: pipeline, customData: routeTemplates, }) => {
    const taskLinks = pipeline.spec.tasks
        .filter((pipelineTask) => !!pipelineTask.taskRef)
        .map((task) => ({
        model: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["getResourceModelFromTaskKind"])(task.taskRef.kind),
        name: task.taskRef.name,
        displayName: task.name,
    }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: "Pipeline Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineVisualization__WEBPACK_IMPORTED_MODULE_6__["default"], { pipeline: pipeline }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: pipeline })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_TriggerTemplateResourceLink__WEBPACK_IMPORTED_MODULE_5__["default"], { namespace: pipeline.metadata.namespace, model: _models__WEBPACK_IMPORTED_MODULE_3__["TriggerTemplateModel"], links: routeTemplates }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_DynamicResourceLinkList__WEBPACK_IMPORTED_MODULE_4__["default"], { namespace: pipeline.metadata.namespace, links: taskLinks, title: "Tasks" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineDetails);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline-topology/PipelineTopologyGraph */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.tsx");
/* harmony import */ var _pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipeline-topology/utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");
/* harmony import */ var _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipeline-topology/const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineVisualization.scss */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.scss");
/* harmony import */ var _PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5__);






const PipelineVisualization = ({ pipeline, pipelineRun, }) => {
    var _a;
    const { nodes, edges } = Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodesEdges"])(pipeline, pipelineRun);
    if (nodes.length === 0 && edges.length === 0) {
        // Nothing to render
        // TODO: Confirm wording with UX; ODC-1860
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "info", isInline: true, title: "This Pipeline has no tasks to visualize." });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-visualization" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_2__["default"], { id: ((_a = pipelineRun === null || pipelineRun === void 0 ? void 0 : pipelineRun.metadata) === null || _a === void 0 ? void 0 : _a.name) || pipeline.metadata.name, nodes: nodes, edges: edges, layout: _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__["PipelineLayout"].DAGRE_VIEWER })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineVisualization);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipelineForm-validation-utils.ts":
/*!*********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipelineForm-validation-utils.ts ***!
  \*********************************************************************************************************/
/*! exports provided: resourcesValidationSchema, parametersValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourcesValidationSchema", function() { return resourcesValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parametersValidationSchema", function() { return parametersValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const resourcesValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    resources: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    })),
});
const parametersValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    parameters: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        description: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        default: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    })),
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DynamicResourceLinkList.scss */ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss");
/* harmony import */ var _DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3__);




const DynamicResourceLinkList = ({ links = [], namespace, title, }) => {
    if (links.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-dynamic-resource-link-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, links.map(({ name, model, displayName = '' }) => {
                const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(model);
                let linkName = name;
                if (displayName.length > 0 && name !== displayName) {
                    linkName += ` (${displayName})`;
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: `${kind}/${name}` },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: kind, name: name, displayName: linkName, namespace: namespace, title: name, inline: true })));
            })))));
};
/* harmony default export */ __webpack_exports__["default"] = (DynamicResourceLinkList);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/TriggerTemplateResourceLink.scss":
/*!**********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/TriggerTemplateResourceLink.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/TriggerTemplateResourceLink.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/TriggerTemplateResourceLink.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _TriggerTemplateResourceLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TriggerTemplateResourceLink.scss */ "./packages/dev-console/src/components/pipelines/resource-overview/TriggerTemplateResourceLink.scss");
/* harmony import */ var _TriggerTemplateResourceLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TriggerTemplateResourceLink_scss__WEBPACK_IMPORTED_MODULE_3__);




const TriggerTemplateResourceLink = ({ links = [], namespace, model, }) => {
    const title = model.labelPlural;
    const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(model);
    if (links.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-trigger-template-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, title),
            links.map(({ routeURL, triggerTemplateName }) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: triggerTemplateName },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: kind, name: triggerTemplateName, namespace: namespace, title: triggerTemplateName, inline: true }),
                    routeURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-trigger-template-list__url" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ExternalLink"], { href: routeURL, text: routeURL })))));
            }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggerTemplateResourceLink);


/***/ })

}]);
//# sourceMappingURL=PipelineBuilderPage~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details-ae158702bb385b0f86e4.js.map