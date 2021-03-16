(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expand-pvc-modal"],{

/***/ "./public/components/modals/expand-pvc-modal.jsx":
/*!*******************************************************!*\
  !*** ./public/components/modals/expand-pvc-modal.jsx ***!
  \*******************************************************/
/*! exports provided: expandPVCModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandPVCModal", function() { return expandPVCModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s/ */ "./public/module/k8s/index.ts");




// Modal for expanding persistent volume claims
class ExpandPVCModal extends _utils__WEBPACK_IMPORTED_MODULE_2__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.state = {
            inProgress: false,
            errorMessage: '',
            requestSizeValue: '',
            requestSizeUnit: 'Gi',
        };
        this._handleRequestSizeInputChange = this._handleRequestSizeInputChange.bind(this);
        this._cancel = this.props.cancel.bind(this);
        this._submit = this._submit.bind(this);
    }
    _handleRequestSizeInputChange(obj) {
        this.setState({ requestSizeValue: obj.value, requestSizeUnit: obj.unit });
    }
    _submit(e) {
        e.preventDefault();
        const { requestSizeUnit, requestSizeValue } = this.state;
        const patch = [
            {
                op: 'replace',
                path: '/spec/resources/requests',
                value: { storage: `${requestSizeValue}${requestSizeUnit}` },
            },
        ];
        this.handlePromise(Object(_module_k8s___WEBPACK_IMPORTED_MODULE_3__["k8sPatch"])(this.props.kind, this.props.resource, patch)).then((resource) => {
            this.props.close();
            // redirected to the details page for persitent volume claim
            _utils__WEBPACK_IMPORTED_MODULE_2__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["resourceObjPath"])(resource, Object(_module_k8s___WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resource)));
        });
    }
    render() {
        const { kind, resource } = this.props;
        const dropdownUnits = {
            Mi: 'MiB',
            Gi: 'GiB',
            Ti: 'TiB',
        };
        const { requestSizeUnit, requestSizeValue } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content modal-content--no-inner-scroll" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null,
                "Expand ",
                kind.label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "Increase the capacity of claim",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" },
                        resource.metadata.name,
                        "."),
                    " This can be a time-consuming process."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required" }, "Size"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["RequestSizeInput"], { name: "requestSize", required: true, onChange: this._handleRequestSizeInputChange, defaultRequestSizeUnit: requestSizeUnit, defaultRequestSizeValue: requestSizeValue, dropdownUnits: dropdownUnits })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Expand", cancel: this._cancel })));
    }
}
const expandPVCModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(ExpandPVCModal);


/***/ })

}]);
//# sourceMappingURL=expand-pvc-modal-b4a33990324f23d2d881.js.map