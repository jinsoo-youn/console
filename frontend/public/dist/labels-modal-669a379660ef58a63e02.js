(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["labels-modal"],{

/***/ "./public/components/modals/labels-modal.jsx":
/*!***************************************************!*\
  !*** ./public/components/modals/labels-modal.jsx ***!
  \***************************************************/
/*! exports provided: labelsModal, podSelectorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelsModal", function() { return labelsModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "podSelectorModal", function() { return podSelectorModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");





const LABELS_PATH = '/metadata/labels';
const TEMPLATE_SELECTOR_PATH = '/spec/template/metadata/labels';
class BaseLabelsModal extends _utils__WEBPACK_IMPORTED_MODULE_4__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this._submit = this._submit.bind(this);
        this._cancel = props.cancel.bind(this);
        const labels = _utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"].arrayify(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.resource, props.path.split('/').slice(1)));
        this.state = Object.assign(this.state, {
            labels,
        });
        this.createPath = !labels.length;
    }
    _submit(e) {
        e.preventDefault();
        const { kind, path, resource, isPodSelector } = this.props;
        const patch = [
            {
                op: this.createPath ? 'add' : 'replace',
                path,
                value: _utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"].objectify(this.state.labels),
            },
        ];
        // https://kubernetes.io/docs/user-guide/deployments/#selector
        //   .spec.selector must match .spec.template.metadata.labels, or it will be rejected by the API
        const updateTemplate = isPodSelector && !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, TEMPLATE_SELECTOR_PATH.split('/').slice(1)));
        if (updateTemplate) {
            patch.push({
                path: TEMPLATE_SELECTOR_PATH,
                op: 'replace',
                value: _utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"].objectify(this.state.labels),
            });
        }
        const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(kind, resource, patch);
        this.handlePromise(promise).then(this.props.close);
    }
    render() {
        const { kind, resource, description, message, labelClassName } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null,
                "Edit ",
                description || 'Labels'),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" }, message ||
                        'Labels help you organize and select resources. Adding labels below will let you query for objects that have similar, overlapping or dissimilar labels.')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "tags-input", className: "control-label" },
                            lodash_es__WEBPACK_IMPORTED_MODULE_0__["capitalize"](description) || 'Labels',
                            " for",
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: kind.crd ? Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(kind) : kind.kind }),
                            ' ',
                            resource.metadata.name),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"], { onChange: (labels) => this.setState({ labels }), tags: this.state.labels, labelClassName: labelClassName || `co-text-${kind.id}`, autoFocus: true })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Save", cancel: this._cancel })));
    }
}
const labelsModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BaseLabelsModal, Object.assign({ path: LABELS_PATH }, props))));
const podSelectorModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BaseLabelsModal, Object.assign({ path: ['replicationcontrolleres', 'services'].includes(props.kind.plural)
        ? '/spec/selector'
        : '/spec/selector/matchLabels', isPodSelector: true, description: "Pod Selector", message: `Determines the set of pods targeted by this ${props.kind.label.toLowerCase()}.`, labelClassName: "co-text-pod" }, props))));


/***/ })

}]);
//# sourceMappingURL=labels-modal-669a379660ef58a63e02.js.map