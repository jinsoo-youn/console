(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configure-cluster-nodes-modal"],{

/***/ "./public/components/hypercloud/modals/configure-count-modal.tsx":
/*!***********************************************************************!*\
  !*** ./public/components/hypercloud/modals/configure-count-modal.tsx ***!
  \***********************************************************************/
/*! exports provided: ConfigureCountModal, configureCountModal, configureClusterNodesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureCountModal", function() { return ConfigureCountModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureCountModal", function() { return configureCountModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureClusterNodesModal", function() { return configureClusterNodesModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/section */ "./public/components/hypercloud/utils/section.tsx");






const ConfigureCountModal = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])((props) => {
    console.log('configure count modal');
    console.log({ props });
    const getPath1 = props.path1.substring(1).replace('/', '.');
    const [value1, setValue1] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.resource, getPath1) || props.defaultValue);
    const getPath2 = props.path2.substring(1).replace('/', '.');
    const [value2, setValue2] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.resource, getPath2) || props.defaultValue);
    const submit = (e) => {
        e.preventDefault();
        const patch1 = [{ op: 'replace', path: props.path1, value: lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value1) }];
        const patch2 = [{ op: 'replace', path: props.path2, value: lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value2) }];
        const invalidateState = props.invalidateState || lodash_es__WEBPACK_IMPORTED_MODULE_0__["noop"];
        invalidateState(true, lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value1));
        invalidateState(true, lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value2));
        props
            .handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(props.resourceKind, props.resource, patch1))
            .then(props.close)
            .catch((error) => {
            invalidateState(false);
            throw error;
        });
        props
            .handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(props.resourceKind, props.resource, patch2))
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
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: "Master Node", id: "master-node" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["NumberSpinner"], { className: "pf-c-form-control", value: value1, onChange: (e) => setValue1(e.target.value), changeValueBy: (operation) => setValue1(lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value1) + operation * 2), autoFocus: true, required: true, min: 1 })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_5__["Section"], { label: "Worker Node", id: "worker-node" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["NumberSpinner"], { className: "pf-c-form-control", value: value2, onChange: (e) => setValue2(e.target.value), changeValueBy: (operation) => setValue2(lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value2) + operation), autoFocus: true, required: true, min: 1 }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: props.errorMessage, inProgress: props.inProgress, submitText: props.buttonText, cancel: props.cancel })));
});
const configureCountModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(ConfigureCountModal);
const configureClusterNodesModal = (props) => {
    console.log('configure cluster nodes modal');
    console.log({ props });
    return configureCountModal(lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaults"]({}, {
        defaultValue: 1,
        title: 'Edit Nodes',
        message: `Master node and worker node can be scaled.`,
        // path: '/spec/masterNum',
        path1: '/spec/masterNum',
        path2: '/spec/workerNum',
        buttonText: 'Save',
    }, props));
};


/***/ }),

/***/ "./public/components/hypercloud/utils/section.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/utils/section.tsx ***!
  \********************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Node = ({ className, children, description }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, children),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, description)));
const CombineNodes = (id, label, description, children, isRequired) => {
    // children node 개수에 따라 가로 분할 class 적용
    let isArray = Array.isArray(children);
    let className = isArray ? `col-md-${12 / children.length}` : 'col-md-12';
    return isArray ? children.map(cur => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: cur, description: description })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: children, description: description });
};
const Section = ({ id, label, description, children, isRequired = false }) => {
    let result = CombineNodes(id, label, description, children, isRequired);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=configure-cluster-nodes-modal-dc5cce85159e92f88669.js.map