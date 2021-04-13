(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sink-source"],{

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

/***/ "./packages/knative-plugin/src/components/sink-source/SinkSource.tsx":
/*!***************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/sink-source/SinkSource.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _SinkSourceModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SinkSourceModal */ "./packages/knative-plugin/src/components/sink-source/SinkSourceModal.tsx");




const SinkSource = ({ source, cancel, close }) => {
    const { metadata: { namespace, name }, spec: { sink: { ref: { name: sinkName, apiVersion, kind }, }, }, } = source;
    const initialValues = {
        sink: {
            ref: {
                apiVersion: apiVersion || '',
                kind: kind || '',
                name: sinkName || '',
            },
        },
    };
    const handleSubmit = (values, action) => {
        var _a, _b;
        const updatePayload = Object.assign(Object.assign({}, source), (sinkName !== ((_b = (_a = values === null || values === void 0 ? void 0 : values.sink) === null || _a === void 0 ? void 0 : _a.ref) === null || _b === void 0 ? void 0 : _b.name) && { spec: Object.assign(Object.assign({}, source.spec), values) }));
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(source)), updatePayload)
            .then(() => {
            action.setSubmitting(false);
            action.setStatus({ error: '' });
            close();
        })
            .catch((err) => {
            action.setStatus({ error: err.message || 'An error occurred. Please try again' });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: cancel, initialStatus: { error: '' } }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SinkSourceModal__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { namespace: namespace, resourceName: name, cancel: cancel })))));
};
/* harmony default export */ __webpack_exports__["default"] = (SinkSource);


/***/ }),

/***/ "./packages/knative-plugin/src/components/sink-source/SinkSourceController.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/sink-source/SinkSourceController.tsx ***!
  \*************************************************************************************/
/*! exports provided: sinkModalLauncher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinkModalLauncher", function() { return sinkModalLauncher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _SinkSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SinkSource */ "./packages/knative-plugin/src/components/sink-source/SinkSource.tsx");
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



const SinkSourceController = (_a) => {
    var { source } = _a, props = __rest(_a, ["source"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SinkSource__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, { source: source })));
};
const sinkModalLauncher = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(SinkSourceController);
/* harmony default export */ __webpack_exports__["default"] = (SinkSourceController);


/***/ }),

/***/ "./packages/knative-plugin/src/components/sink-source/SinkSourceModal.tsx":
/*!********************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/sink-source/SinkSourceModal.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _utils_get_knative_resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/get-knative-resources */ "./packages/knative-plugin/src/utils/get-knative-resources.ts");






const SinkSourceModal = ({ namespace, resourceName, handleSubmit, cancel, isSubmitting, status, setFieldValue, setFieldTouched, validateForm, values, initialValues, }) => {
    var _a, _b, _c, _d;
    const autocompleteFilter = (strText, item) => { var _a; return fuzzysearch__WEBPACK_IMPORTED_MODULE_1__(strText, (_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.name); };
    const onSinkChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((selectedValue, target) => {
        var _a;
        const modelResource = (_a = target === null || target === void 0 ? void 0 : target.props) === null || _a === void 0 ? void 0 : _a.model;
        if (selectedValue) {
            setFieldTouched('sink.ref.name', true);
            setFieldValue('sink.ref.name', selectedValue);
            if (modelResource) {
                const { apiGroup, apiVersion, kind } = modelResource;
                const sinkApiversion = `${apiGroup}/${apiVersion}`;
                setFieldValue('sink.ref.apiVersion', sinkApiversion);
                setFieldTouched('sink.ref.apiVersion', true);
                setFieldValue('sink.ref.kind', kind);
                setFieldTouched('sink.ref.kind', true);
            }
            validateForm();
        }
    }, [setFieldValue, setFieldTouched, validateForm]);
    const dirty = ((_b = (_a = values === null || values === void 0 ? void 0 : values.sink) === null || _a === void 0 ? void 0 : _a.ref) === null || _b === void 0 ? void 0 : _b.name) !== initialValues.sink.ref.name;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "modal-content modal-content--no-inner-scroll", onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null, "Move Sink"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Select a sink to move the event source ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, resourceName),
                " to"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ResourceDropdownField"], { name: "sink.ref.name", resources: Object(_utils_get_knative_resources__WEBPACK_IMPORTED_MODULE_5__["knativeServingResourcesServices"])(namespace), dataSelector: ['metadata', 'name'], fullWidth: true, required: true, placeholder: "Select a sink", showBadge: true, autocompleteFilter: autocompleteFilter, onChange: onSinkChange, autoSelect: true, selectedKey: (_d = (_c = values === null || values === void 0 ? void 0 : values.sink) === null || _c === void 0 ? void 0 : _c.ref) === null || _d === void 0 ? void 0 : _d.name }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { inProgress: isSubmitting, submitText: "Save", submitDisabled: !dirty, cancel: cancel, errorMessage: status.error })));
};
/* harmony default export */ __webpack_exports__["default"] = (SinkSourceModal);


/***/ })

}]);
//# sourceMappingURL=sink-source-69a4b4f2d9f4a05064ff.js.map