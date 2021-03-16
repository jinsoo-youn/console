(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-namespace-modal"],{

/***/ "./public/components/modals/delete-namespace-modal.jsx":
/*!*************************************************************!*\
  !*** ./public/components/modals/delete-namespace-modal.jsx ***!
  \*************************************************************/
/*! exports provided: deleteNamespaceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNamespaceModal", function() { return deleteNamespaceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");






class DeleteNamespaceModal extends _utils__WEBPACK_IMPORTED_MODULE_4__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.state = Object.assign(this.state, { isTypedNsMatching: false });
        this._submit = this._submit.bind(this);
        this._close = props.close.bind(this);
        this._cancel = props.cancel.bind(this);
        this._matchTypedNamespace = this._matchTypedNamespace.bind(this);
    }
    _matchTypedNamespace(e) {
        this.setState({ isTypedNsMatching: e.target.value === this.props.resource.metadata.name });
    }
    _submit(event) {
        event.preventDefault();
        this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sKill"])(this.props.kind, this.props.resource)).then(() => {
            this._close();
            _utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(`/k8s/cluster/${this.props.kind.plural}`);
        });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content " },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], { className: "modal-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
                " Delete",
                ' ',
                this.props.kind.label,
                "?"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "This action cannot be undone. It will destroy all pods, services and other objects in the namespace",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, this.props.resource.metadata.name),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "Confirm deletion by typing",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, this.props.resource.metadata.name),
                    " below:"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", onKeyUp: this._matchTypedNamespace, placeholder: "Enter name", autoFocus: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { submitText: "Delete", submitDisabled: !this.state.isTypedNsMatching, cancel: this._cancel, errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitDanger: true })));
    }
}
DeleteNamespaceModal.propTypes = {
    kind: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
    resource: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
};
const deleteNamespaceModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(DeleteNamespaceModal);


/***/ })

}]);
//# sourceMappingURL=delete-namespace-modal-cc1467a55101e9400920.js.map