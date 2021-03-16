(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configure-count-modal"],{

/***/ "./public/components/modals/configure-count-modal.tsx":
/*!************************************************************!*\
  !*** ./public/components/modals/configure-count-modal.tsx ***!
  \************************************************************/
/*! exports provided: ConfigureCountModal, configureCountModal, configureReplicaCountModal, configureJobParallelismModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureCountModal", function() { return ConfigureCountModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureCountModal", function() { return configureCountModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureReplicaCountModal", function() { return configureReplicaCountModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureJobParallelismModal", function() { return configureJobParallelismModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");





const ConfigureCountModal = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])((props) => {
    const getPath = props.path.substring(1).replace('/', '.');
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.resource, getPath) || props.defaultValue);
    const submit = (e) => {
        e.preventDefault();
        const patch = [{ op: 'replace', path: props.path, value: lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value) }];
        const invalidateState = props.invalidateState || lodash_es__WEBPACK_IMPORTED_MODULE_0__["noop"];
        invalidateState(true, lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value));
        props
            .handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(props.resourceKind, props.resource, patch))
            .then(props.close)
            .catch((error) => {
            invalidateState(false);
            throw error;
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, props.title),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, props.message),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["NumberSpinner"], { className: "pf-c-form-control", value: value, onChange: (e) => setValue(e.target.value), changeValueBy: (operation) => setValue(lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value) + operation), autoFocus: true, required: true, min: 0 })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: props.errorMessage, inProgress: props.inProgress, submitText: props.buttonText, cancel: props.cancel })));
});
const configureCountModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(ConfigureCountModal);
const configureReplicaCountModal = (props) => {
    return configureCountModal(lodash_es__WEBPACK_IMPORTED_MODULE_0__["assign"]({}, {
        defaultValue: 0,
        title: 'Edit Pod Count',
        message: `${props.resourceKind.labelPlural} maintain the desired number of healthy pods.`,
        path: '/spec/replicas',
        buttonText: 'Save',
    }, props));
};
const configureJobParallelismModal = (props) => {
    return configureCountModal(lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaults"]({}, {
        defaultValue: 1,
        title: 'Edit Parallelism',
        message: `${props.resourceKind.labelPlural} create one or more pods and ensure that a specified number of them successfully terminate. When the specified number of completions is successfully reached, the job is complete.`,
        path: '/spec/parallelism',
        buttonText: 'Save',
    }, props));
};


/***/ })

}]);
//# sourceMappingURL=configure-count-modal-b42192345a5711d86ea3.js.map