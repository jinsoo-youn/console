(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tolerations-modal"],{

/***/ "./public/components/modals/tolerations-modal.tsx":
/*!********************************************************!*\
  !*** ./public/components/modals/tolerations-modal.tsx ***!
  \********************************************************/
/*! exports provided: tolerationsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tolerationsModal", function() { return tolerationsModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");







class TolerationsModal extends _utils__WEBPACK_IMPORTED_MODULE_4__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.props = props;
        this._getTolerationsFromResource = () => {
            const { resource } = this.props;
            return this.props.resourceKind.kind === 'Pod'
                ? resource.spec.tolerations
                : resource.spec.template.spec.tolerations;
        };
        this._submit = (e) => {
            e.preventDefault();
            const path = this.props.resourceKind.kind === 'Pod'
                ? '/spec/tolerations'
                : '/spec/template/spec/tolerations';
            // Remove the internal `isNew` property
            const tolerations = lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](this.state.tolerations, (t) => lodash_es__WEBPACK_IMPORTED_MODULE_0__["omit"](t, 'isNew'));
            // Make sure to 'add' if the path does not already exist, otherwise the patch request will fail
            const op = lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](this._getTolerationsFromResource()) ? 'replace' : 'add';
            const patch = [{ path, op, value: tolerations }];
            this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(this.props.resourceKind, this.props.resource, patch)).then(this.props.close);
        };
        this._cancel = () => {
            this.props.close();
        };
        this._change = (e, i, field) => {
            const newValue = e.target ? e.target.value : e;
            this.setState((prevState) => {
                const clonedTolerations = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](prevState.tolerations);
                clonedTolerations[i][field] = newValue;
                return {
                    tolerations: clonedTolerations,
                };
            });
        };
        this._opChange = (op, i) => {
            this.setState((prevState) => {
                const clonedTolerations = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](prevState.tolerations);
                clonedTolerations[i].operator = op;
                if (op === 'Exists') {
                    clonedTolerations[i].value = '';
                }
                return {
                    tolerations: clonedTolerations,
                };
            });
        };
        this._remove = (i) => {
            this.setState((state) => {
                const tolerations = [...state.tolerations];
                tolerations.splice(i, 1);
                return { tolerations };
            });
        };
        this._addRow = () => {
            this.setState((state) => ({
                tolerations: [...state.tolerations, this._newToleration()],
            }));
        };
        this._isEditable = (t) => {
            return this.props.resourceKind.kind !== 'Pod' || t.isNew;
        };
        this.state.tolerations = this._getTolerationsFromResource() || [];
    }
    _newToleration() {
        return { key: '', operator: 'Exists', value: '', effect: '', isNew: true };
    }
    render() {
        const operators = {
            Exists: 'Exists',
            Equal: 'Equal',
        };
        const effects = {
            '': 'All Effects',
            NoSchedule: 'NoSchedule',
            PreferNoSchedule: 'PreferNoSchedule',
            NoExecute: 'NoExecute',
        };
        const { tolerations, errorMessage, inProgress } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content modal-content--accommodate-dropdown toleration-modal" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ModalTitle"], null, "Edit Tolerations"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null,
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](tolerations) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["EmptyBox"], { label: "Tolerations" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row toleration-modal__heading hidden-sm hidden-xs" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-4 text-secondary text-uppercase" }, "Key"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-2 text-secondary text-uppercase" }, "Operator"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-3 text-secondary text-uppercase" }, "Value"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-2 text-secondary text-uppercase" }, "Effect"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-1" })),
                    lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](tolerations, (t, i) => {
                        const { key, operator, value, effect = '' } = t;
                        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row toleration-modal__row", key: i },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-4 col-sm-5 col-xs-5 toleration-modal__field" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "toleration-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Key"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", value: key, onChange: (e) => this._change(e, i, 'key'), readOnly: !this._isEditable(t) })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-2 col-sm-5 col-xs-5 toleration-modal__field" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "toleration-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Operator"),
                                this._isEditable(t) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { className: "toleration-modal__dropdown", dropDownClassName: "dropdown--full-width", items: operators, onChange: (op) => this._opChange(op, i), selectedKey: operator, title: operators[operator] })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", value: operator, readOnly: true }))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "clearfix visible-sm visible-xs" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-3 col-sm-5 col-xs-5 toleration-modal__field" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "toleration-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Value"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", value: value, onChange: (e) => this._change(e, i, 'value'), readOnly: !this._isEditable(t) || operator === 'Exists' })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-2 col-sm-5 col-xs-5 toleration-modal__field" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "toleration-modal__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Effect"),
                                this._isEditable(t) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { className: "toleration-modal__dropdown", dropDownClassName: "dropdown--full-width", items: effects, onChange: (e) => this._change(e, i, 'effect'), selectedKey: effect, title: effects[effect] })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", value: effects[effect], readOnly: true }))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-1 col-sm-2 col-xs-2" }, this._isEditable(t) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", className: "toleration-modal__delete-icon", onClick: () => this._remove(i), "aria-label": "Delete", variant: "plain" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], { className: "pairs-list__side-btn pairs-list__delete-icon" }))))));
                    }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "pf-m-link--align-left", onClick: this._addRow, type: "button", variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                    "Add More")),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: inProgress, submitText: "Save", cancel: this._cancel })));
    }
}
const tolerationsModal = Object(_factory__WEBPACK_IMPORTED_MODULE_6__["createModalLauncher"])(TolerationsModal);


/***/ })

}]);
//# sourceMappingURL=tolerations-modal-5bc8c46add21e86d5d61.js.map