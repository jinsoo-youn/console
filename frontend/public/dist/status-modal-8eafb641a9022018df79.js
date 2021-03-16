(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-modal"],{

/***/ "./public/components/hypercloud/modals/status-modal.jsx":
/*!**************************************************************!*\
  !*** ./public/components/hypercloud/modals/status-modal.jsx ***!
  \**************************************************************/
/*! exports provided: statusModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusModal", function() { return statusModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");






const STATUS_PATH = '/status/result';
const REASON_PATH = '/status/reason';
// const STATUS_PATH = '/status';
const TEMPLATE_SELECTOR_PATH = '/spec/template/metadata/status';
class BaseStatusModal extends _utils__WEBPACK_IMPORTED_MODULE_5__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.successSubmit = () => {
            this.props.close();
            // location.reload();
        };
        this.onChangeApproval = e => {
            this.setState({ status: e.target.value });
        };
        this.onSelect = (event, selection) => {
            this.setState({ status: selection, isOptionsOpen: false });
        };
        this.onToggle = isOpen => {
            this.setState({ isOptionsOpen: isOpen });
        };
        this.onChangeReason = e => {
            this.setState({ reason: e.target.value });
        };
        this._submit = this._submit.bind(this);
        this._cancel = props.cancel.bind(this);
        // let status = _.get(props.resource, props.path.split('/').slice(1));
        let status = '';
        // if (status === 'Waiting') {
        //   status = 'Approved';
        // }
        // const reason = _.get(props.resource, props.reasonPath.split('/').slice(1));
        const reason = '';
        this.state = Object.assign(this.state, {
            status,
            reason,
            isOptionsOpen: false,
        });
        this.options = [
            { value: 'Approved', disabled: false },
            { value: 'Rejected', disabled: false },
        ];
    }
    _submit(e) {
        e.preventDefault();
        const { kind, path, resource } = this.props;
        switch (kind.kind) {
            case _models__WEBPACK_IMPORTED_MODULE_1__["ResourceQuotaClaimModel"].kind:
            case _models__WEBPACK_IMPORTED_MODULE_1__["NamespaceClaimModel"].kind: {
                const stat = this.state.status === 'Approved' ? 'Success' : 'Reject';
                const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdateApproval"])(kind, resource, 'status', [
                    { op: 'replace', path: '/status/status', value: stat },
                    { op: 'replace', path: '/status/reason', value: this.state.reason },
                ], 'PATCH');
                this.handlePromise(promise).then(this.successSubmit);
                break;
            }
            default: {
                // resourceURL
                const approval = this.state.status === 'Approved' ? 'approve' : 'reject';
                const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdateApproval"])(kind, resource, approval, {
                    reason: this.state.reason,
                });
                this.handlePromise(promise).then(this.successSubmit);
                break;
            }
        }
    }
    render() {
        const { kind, resource, description, message } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Approval Processing"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" }, message || '')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m=-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12 approval-dropdown--short-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Select"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SelectVariant"].single, placeholderText: "Select status", selections: this.state.status, onSelect: this.onSelect, onToggle: this.onToggle, isExpanded: this.state.isOptionsOpen, isDisabled: false }, this.options.map((option, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SelectOption"], { isDisabled: option.disabled, key: index, value: option.value }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "col-sm-12 pf-c-form-control query-browser__query-input", style: { height: '100px' }, onChange: this.onChangeReason, value: this.state.reason })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" }, "Please enter a reason."))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Confirm", cancel: this._cancel })));
    }
}
const statusModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseStatusModal, Object.assign({ path: STATUS_PATH, reasonPath: REASON_PATH }, props)));


/***/ })

}]);
//# sourceMappingURL=status-modal-8eafb641a9022018df79.js.map