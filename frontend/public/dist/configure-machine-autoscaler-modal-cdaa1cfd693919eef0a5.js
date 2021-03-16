(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configure-machine-autoscaler-modal"],{

/***/ "./public/components/modals/configure-machine-autoscaler-modal.tsx":
/*!*************************************************************************!*\
  !*** ./public/components/modals/configure-machine-autoscaler-modal.tsx ***!
  \*************************************************************************/
/*! exports provided: ConfigureMachineAutoscalerModal, configureMachineAutoscalerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureMachineAutoscalerModal", function() { return ConfigureMachineAutoscalerModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureMachineAutoscalerModal", function() { return configureMachineAutoscalerModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");






class ConfigureMachineAutoscalerModal extends _utils__WEBPACK_IMPORTED_MODULE_4__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            inProgress: false,
            errorMessage: '',
            minReplicas: 1,
            maxReplicas: 12,
        };
        this.changeMinReplicas = (event) => {
            const minReplicas = lodash_es__WEBPACK_IMPORTED_MODULE_1__["toInteger"](event.target.value);
            this.setState({ minReplicas });
        };
        this.changeMinReplicasBy = (operation) => {
            const minReplicas = this.state.minReplicas + operation;
            this.setState({ minReplicas });
        };
        this.changeMaxReplicas = (event) => {
            const maxReplicas = lodash_es__WEBPACK_IMPORTED_MODULE_1__["toInteger"](event.target.value);
            this.setState({ maxReplicas });
        };
        this.changeMaxReplicasBy = (operation) => {
            const maxReplicas = this.state.maxReplicas + operation;
            this.setState({ maxReplicas });
        };
        this.createAutoscaler = () => {
            const { apiVersion, kind, metadata: { name, namespace }, } = this.props.machineSet;
            const { minReplicas, maxReplicas } = this.state;
            const machineAutoscaler = {
                apiVersion: 'autoscaling.openshift.io/v1beta1',
                kind: 'MachineAutoscaler',
                metadata: {
                    name,
                    namespace,
                },
                spec: {
                    minReplicas,
                    maxReplicas,
                    scaleTargetRef: {
                        apiVersion,
                        kind,
                        name,
                    },
                },
            };
            return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineAutoscalerModel"], machineAutoscaler);
        };
        this.submit = (event) => {
            event.preventDefault();
            const { close } = this.props;
            const promise = this.createAutoscaler();
            this.handlePromise(promise).then((obj) => {
                close();
                _utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["MachineAutoscalerModel"], obj.metadata.name, obj.metadata.namespace));
            });
        };
    }
    render() {
        const { name } = this.props.machineSet.metadata;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], { className: "modal-header" }, "Create Machine Autoscaler"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "This will automatically scale machine set ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, name),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                        "Minimum Replicas:",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["NumberSpinner"], { className: "pf-c-form-control", value: this.state.minReplicas, onChange: this.changeMinReplicas, changeValueBy: this.changeMinReplicasBy, autoFocus: true, required: true }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                        "Maximum Replicas:",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["NumberSpinner"], { className: "pf-c-form-control", value: this.state.maxReplicas, onChange: this.changeMaxReplicas, changeValueBy: this.changeMaxReplicasBy, required: true })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { inProgress: this.state.inProgress, errorMessage: this.state.errorMessage, cancel: this.props.cancel, submitText: "Create" })));
    }
}
const configureMachineAutoscalerModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(ConfigureMachineAutoscalerModal);


/***/ })

}]);
//# sourceMappingURL=configure-machine-autoscaler-modal-cdaa1cfd693919eef0a5.js.map