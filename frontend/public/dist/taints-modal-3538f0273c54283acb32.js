(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taints-modal"],{

/***/ "./public/components/modals/taints-modal.tsx":
/*!***************************************************!*\
  !*** ./public/components/modals/taints-modal.tsx ***!
  \***************************************************/
/*! exports provided: taintsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taintsModal", function() { return taintsModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");







class TaintsModal extends _utils__WEBPACK_IMPORTED_MODULE_4__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.props = props;
        this._submit = (e) => {
            e.preventDefault();
            const { taints } = this.state;
            // Make sure to 'add' if the path does not already exist, otherwise the patch request will fail
            const op = this.props.resource.spec.taints ? 'replace' : 'add';
            const patch = [{ path: '/spec/taints', op, value: taints }];
            this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(this.props.resourceKind, this.props.resource, patch)).then(this.props.close);
        };
        this._cancel = () => {
            this.props.close();
        };
        this._change = (e, i, field) => {
            const newValue = e.target ? e.target.value : e;
            this.setState((prevState) => {
                const clonedTaints = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](prevState.taints);
                clonedTaints[i][field] = newValue;
                return {
                    taints: clonedTaints,
                };
            });
        };
        this._remove = (i) => {
            this.setState((state) => {
                const taints = [...state.taints];
                taints.splice(i, 1);
                return { taints };
            });
        };
        this._addRow = () => {
            this.setState((state) => ({
                taints: [...state.taints, this._newTaint()],
            }));
        };
        // Add an empty row for editing if no taints exist.
        this.state.taints = this.props.resource.spec.taints || [];
    }
    _newTaint() {
        return { key: '', value: '', effect: 'NoSchedule' };
    }
    render() {
        const effects = {
            NoSchedule: 'NoSchedule',
            PreferNoSchedule: 'PreferNoSchedule',
            NoExecute: 'NoExecute',
        };
        const { taints, errorMessage, inProgress } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content modal-content--accommodate-dropdown taint-modal" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ModalTitle"], null, "Edit Taints"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null,
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](taints) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["EmptyBox"], { label: "Taints" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row taint-modal__heading hidden-sm hidden-xs" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-4 text-secondary text-uppercase" }, "Key"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-3 text-secondary text-uppercase" }, "Value"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-4 text-secondary text-uppercase" }, "Effect"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-1 co-empty__header" })),
                    lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](taints, (c, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row taint-modal__row", key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-4 col-xs-5 taint-modal__field" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taint-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Key"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control taint-modal__input", value: c.key, onChange: (e) => this._change(e, i, 'key'), required: true })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-3 col-xs-5 taint-modal__field" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taint-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Value"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control taint-modal__input", value: c.value, onChange: (e) => this._change(e, i, 'value') })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "clearfix visible-sm visible-xs" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-4 col-xs-5 taint-modal__field" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taint-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Effect"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { className: "taint-modal__dropdown", dropDownClassName: "dropdown--full-width", items: effects, onChange: (e) => this._change(e, i, 'effect'), selectedKey: c.effect, title: effects[c.effect] })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-1 col-md-offset-0 col-sm-offset-10 col-xs-offset-10" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", className: "taint-modal__delete-icon", onClick: () => this._remove(i), "aria-label": "Delete", variant: "plain" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], { className: "pairs-list__side-btn pairs-list__delete-icon" })))))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "pf-m-link--align-left", onClick: this._addRow, type: "button", variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                    "Add More")),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: inProgress, submitText: "Save", cancel: this._cancel })));
    }
}
const taintsModal = Object(_factory__WEBPACK_IMPORTED_MODULE_6__["createModalLauncher"])(TaintsModal);


/***/ })

}]);
//# sourceMappingURL=taints-modal-3538f0273c54283acb32.js.map