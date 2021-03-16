(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["claim-modal"],{

/***/ "./public/components/hypercloud/modals/claim-modal.jsx":
/*!*************************************************************!*\
  !*** ./public/components/hypercloud/modals/claim-modal.jsx ***!
  \*************************************************************/
/*! exports provided: claimModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimModal", function() { return claimModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");





const STATUS_PATH = '/status/phase';
const REASON_PATH = '/status/reason';
// const STATUS_PATH = '/status';
const TEMPLATE_SELECTOR_PATH = '/spec/template/metadata/status';
class BaseClaimModal extends _utils__WEBPACK_IMPORTED_MODULE_4__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.successSubmit = () => {
            this.props.close();
            location.reload();
        };
        this.onChangeApproval = (e) => {
            this.setState({ status: e.target.value });
        };
        this.onChangeReason = (e) => {
            this.setState({ reason: e.target.value });
        };
        this._submit = this._submit.bind(this);
        this._cancel = props.cancel.bind(this);
        let status = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.resource, props.path.split('/').slice(1));
        if (status === 'Awaiting') {
            status = 'Approved';
        }
        const reason = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.resource, props.reasonPath.split('/').slice(1));
        this.state = Object.assign(this.state, {
            status,
            reason
        });
    }
    _submit(e) {
        e.preventDefault();
        const { kind, resource } = this.props;
        const clusterClaim = resource.metadata.name;
        // resourceURL
        const admit = this.state.status === 'Approved' ? true : false;
        const reason = this.state.reason;
        const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdateClaim"])(kind, clusterClaim, admit, reason);
        this.handlePromise(promise)
            .then(this.successSubmit);
    }
    render() {
        const { kind, resource, description, message } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, "Approval Processing"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" }, message || '')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m=-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12", style: { marginBottom: '15px' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "col-sm-12", value: this.state.status, onChange: this.onChangeApproval },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Approved" }, "Approved"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Rejected" }, "Rejected"))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "col-sm-12", style: { height: '100px' }, onChange: this.onChangeReason, value: this.state.reason })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" }, "Please enter a reason for refusal."))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Confirm", cancel: this._cancel })));
    }
}
const claimModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BaseClaimModal, Object.assign({ path: STATUS_PATH, reasonPath: REASON_PATH }, props))));


/***/ })

}]);
//# sourceMappingURL=claim-modal-452d49fadc8480c1607c.js.map