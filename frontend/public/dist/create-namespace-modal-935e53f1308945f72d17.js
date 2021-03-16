(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-namespace-modal"],{

/***/ "./public/components/modals/create-namespace-modal.jsx":
/*!*************************************************************!*\
  !*** ./public/components/modals/create-namespace-modal.jsx ***!
  \*************************************************************/
/*! exports provided: createNamespaceModal, createProjectModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespaceModal", function() { return createNamespaceModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProjectModal", function() { return createProjectModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _actions_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/features */ "./public/actions/features.ts");








const allow = 'allow';
const deny = 'deny';
const defaultDeny = {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'NetworkPolicy',
    spec: {
        podSelector: null,
    },
};
const mapDispatchToProps = (dispatch) => ({
    hideStartGuide: () => Object(_actions_features__WEBPACK_IMPORTED_MODULE_7__["setFlag"])(dispatch, _console_shared__WEBPACK_IMPORTED_MODULE_2__["FLAGS"].SHOW_OPENSHIFT_START_GUIDE, false),
});
const CreateNamespaceModal = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(class CreateNamespaceModal extends _utils__WEBPACK_IMPORTED_MODULE_6__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.state.np = allow;
        this.handleChange = this.handleChange.bind(this);
        this.onLabels = this.onLabels.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    createNamespace() {
        const { name, labels } = this.state;
        const namespace = {
            metadata: {
                name,
                labels: _utils__WEBPACK_IMPORTED_MODULE_6__["SelectorInput"].objectify(labels),
            },
        };
        return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["NamespaceModel"], namespace);
    }
    createProject() {
        const { hideStartGuide } = this.props;
        const { name, displayName, description } = this.state;
        const project = {
            metadata: {
                name,
            },
            displayName,
            description,
        };
        return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["ProjectRequestModel"], project).then((obj) => {
            // Immediately update the start guide flag to avoid the empty state
            // message from displaying when projects watch is slow.
            hideStartGuide();
            return obj;
        });
    }
    _submit(event) {
        event.preventDefault();
        const { createProject, close, onSubmit } = this.props;
        let promise = createProject ? this.createProject() : this.createNamespace();
        if (this.state.np === deny) {
            promise = promise.then((ns) => {
                const policy = Object.assign({}, defaultDeny, {
                    metadata: { namespace: ns.metadata.name, name: 'default-deny' },
                });
                // Resolve the promise with the namespace object, not the network policy object, since we want to redirect to the namespace.
                return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["NetworkPolicyModel"], policy).then(() => ns);
            });
        }
        this.handlePromise(promise).then((obj) => {
            close();
            if (onSubmit) {
                onSubmit(obj);
            }
            else {
                _utils__WEBPACK_IMPORTED_MODULE_6__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["resourceObjPath"])(obj, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(obj)));
            }
        });
    }
    onLabels(labels) {
        this.setState({ labels });
    }
    render() {
        const label = this.props.createProject ? 'Project' : 'Namespace';
        const defaultNetworkPolicies = {
            [allow]: 'No restrictions',
            [deny]: 'Deny all inbound traffic',
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit.bind(this), name: "form", className: "modal-content modal-content--no-inner-scroll" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null,
                "Create ",
                label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "input-name", className: "control-label co-required" }, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body__field" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { id: "input-name", name: "name", type: "text", className: "pf-c-form-control", onChange: this.handleChange, value: this.state.name || '', autoFocus: true, required: true }))),
                this.props.createProject && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "input-display-name", className: "control-label" }, "Display Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body__field" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { id: "input-display-name", name: "displayName", type: "text", className: "pf-c-form-control", onChange: this.handleChange, value: this.state.displayName || '' })))),
                this.props.createProject && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "input-description", className: "control-label" }, "Description"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body__field" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { id: "input-description", name: "description", className: "pf-c-form-control", onChange: this.handleChange, value: this.state.description || '' })))),
                !this.props.createProject && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "tags-input", className: "control-label" }, "Labels"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body__field" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SelectorInput"], { labelClassName: "co-text-namespace", onChange: this.onLabels, tags: [] })))),
                !this.props.createProject && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "network-policy", className: "control-label" }, "Default Network Policy"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body__field " },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], { selectedKey: this.state.np, items: defaultNetworkPolicies, dropDownClassName: "dropdown--full-width", id: "dropdown-selectbox", onChange: (np) => this.setState({ np }) }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Create", cancel: this.props.cancel.bind(this) })));
    }
});
const createNamespaceModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(CreateNamespaceModal);
const createProjectModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CreateNamespaceModal, Object.assign({}, props, { createProject: true }))));


/***/ })

}]);
//# sourceMappingURL=create-namespace-modal-935e53f1308945f72d17.js.map