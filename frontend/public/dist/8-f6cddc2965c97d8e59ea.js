(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/resource-requirements.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/resource-requirements.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: ResourceRequirements, ResourceRequirementsModal, ResourceRequirementsModalLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRequirements", function() { return ResourceRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRequirementsModal", function() { return ResourceRequirementsModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRequirementsModalLink", function() { return ResourceRequirementsModalLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");








const ResourceRequirements = (props) => {
    const { cpu, memory, storage, onChangeCPU, onChangeMemory, onChangeStorage, path = '' } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { style: { fontWeight: 300 }, className: "text-muted text-uppercase", htmlFor: `${path}.cpu` }, "CPU cores"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: cpu, onChange: (e) => onChangeCPU(e.target.value), id: `${path}.cpu`, name: "cpu", type: "text", className: "pf-c-form-control", placeholder: "500m" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { style: { fontWeight: 300 }, className: "text-muted text-uppercase", htmlFor: `${path}.memory` }, "Memory"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: memory, onChange: (e) => onChangeMemory(e.target.value), id: `${path}.memory`, name: "memory", type: "text", className: "pf-c-form-control", placeholder: "50Mi" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { style: { fontWeight: 300 }, className: "text-muted text-uppercase", htmlFor: `${path}.ephemeral-storage` }, "Storage"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: storage, onChange: (e) => onChangeStorage(e.target.value), id: `${path}.ephemeral-storage`, name: "ephemeral-storage", type: "text", className: "pf-c-form-control", placeholder: "50Mi" }))));
};
const ResourceRequirementsModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["withHandlePromise"])((props) => {
    const { obj, path, type, model } = props;
    const [cpu, setCPU] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.spec, `${path}.${type}.cpu`, ''));
    const [memory, setMemory] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.spec, `${path}.${type}.memory`, ''));
    const [storage, setStorage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.spec, `${path}.${type}.ephemeral-storage`));
    const submit = (e) => {
        e.preventDefault();
        let newObj = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](obj);
        if (cpu !== '' || memory !== '' || storage !== '') {
            newObj = lodash__WEBPACK_IMPORTED_MODULE_1__["set"](newObj, `spec.${path}.${type}`, {
                cpu,
                memory,
                'ephemeral-storage': storage,
            });
        }
        return props.handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sUpdate"])(model, newObj)).then(props.close);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: (e) => submit(e), className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_7__["ModalTitle"], null, props.title),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_7__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" }, props.description)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ResourceRequirements, { cpu: cpu, memory: memory, storage: storage, onChangeCPU: setCPU, onChangeMemory: setMemory, onChangeStorage: setStorage, path: path })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_7__["ModalSubmitFooter"], { errorMessage: props.errorMessage, inProgress: props.inProgress, submitText: "Save", cancel: props.cancel })));
});
const stateToProps = ({ k8s }, { obj }) => ({
    model: k8s.getIn(['RESOURCES', 'models', Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceFor"])(obj)]),
});
const ResourceRequirementsModalLink = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps)((props) => {
    const { obj, type, path, model } = props;
    const { cpu, memory, 'ephemeral-storage': storage } = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.spec, `${path}.${type}`, 'none');
    const onClick = () => {
        const modal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_7__["createModalLauncher"])(ResourceRequirementsModal);
        const description = `Define the resource ${type} for this ${obj.kind} instance.`;
        const title = `${obj.kind} Resource ${lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"](type)}`;
        return modal({ title, description, obj, model, type, path });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", isInline: true, "data-test-id": "configure-modal-btn", onClick: onClick, variant: "link" },
        `CPU: ${cpu || 'none'}, Memory: ${memory || 'none'}, Storage: ${storage || 'none'}`,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })));
});
ResourceRequirements.displayName = 'ResourceRequirements';
ResourceRequirementsModalLink.displayName = 'ResourceRequirementsModalLink';
ResourceRequirementsModal.displayName = 'ResourceRequirementsModal';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts":
/*!*********************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/types.ts ***!
  \*********************************************************************************/
/*! exports provided: SpecCapability, StatusCapability */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecCapability", function() { return SpecCapability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCapability", function() { return StatusCapability; });
var SpecCapability;
(function (SpecCapability) {
    SpecCapability["podCount"] = "urn:alm:descriptor:com.tectonic.ui:podCount";
    SpecCapability["endpointList"] = "urn:alm:descriptor:com.tectonic.ui:endpointList";
    SpecCapability["label"] = "urn:alm:descriptor:com.tectonic.ui:label";
    SpecCapability["resourceRequirements"] = "urn:alm:descriptor:com.tectonic.ui:resourceRequirements";
    SpecCapability["selector"] = "urn:alm:descriptor:com.tectonic.ui:selector:";
    SpecCapability["namespaceSelector"] = "urn:alm:descriptor:com.tectonic.ui:namespaceSelector";
    SpecCapability["k8sResourcePrefix"] = "urn:alm:descriptor:io.kubernetes:";
    SpecCapability["booleanSwitch"] = "urn:alm:descriptor:com.tectonic.ui:booleanSwitch";
    SpecCapability["password"] = "urn:alm:descriptor:com.tectonic.ui:password";
    SpecCapability["checkbox"] = "urn:alm:descriptor:com.tectonic.ui:checkbox";
    SpecCapability["imagePullPolicy"] = "urn:alm:descriptor:com.tectonic.ui:imagePullPolicy";
    SpecCapability["updateStrategy"] = "urn:alm:descriptor:com.tectonic.ui:updateStrategy";
    SpecCapability["text"] = "urn:alm:descriptor:com.tectonic.ui:text";
    SpecCapability["number"] = "urn:alm:descriptor:com.tectonic.ui:number";
    SpecCapability["nodeAffinity"] = "urn:alm:descriptor:com.tectonic.ui:nodeAffinity";
    SpecCapability["podAffinity"] = "urn:alm:descriptor:com.tectonic.ui:podAffinity";
    SpecCapability["podAntiAffinity"] = "urn:alm:descriptor:com.tectonic.ui:podAntiAffinity";
    SpecCapability["fieldGroup"] = "urn:alm:descriptor:com.tectonic.ui:fieldGroup:";
    SpecCapability["arrayFieldGroup"] = "urn:alm:descriptor:com.tectonic.ui:arrayFieldGroup:";
    SpecCapability["select"] = "urn:alm:descriptor:com.tectonic.ui:select:";
    SpecCapability["advanced"] = "urn:alm:descriptor:com.tectonic.ui:advanced";
    SpecCapability["fieldDependency"] = "urn:alm:descriptor:com.tectonic.ui:fieldDependency:";
    SpecCapability["hidden"] = "urn:alm:descriptor:com.tectonic.ui:hidden";
})(SpecCapability || (SpecCapability = {}));
var StatusCapability;
(function (StatusCapability) {
    StatusCapability["podStatuses"] = "urn:alm:descriptor:com.tectonic.ui:podStatuses";
    StatusCapability["podCount"] = "urn:alm:descriptor:com.tectonic.ui:podCount";
    StatusCapability["w3Link"] = "urn:alm:descriptor:org.w3:link";
    StatusCapability["conditions"] = "urn:alm:descriptor:io.kubernetes.conditions";
    StatusCapability["text"] = "urn:alm:descriptor:text";
    StatusCapability["prometheusEndpoint"] = "urn:alm:descriptor:prometheusEndpoint";
    StatusCapability["k8sPhase"] = "urn:alm:descriptor:io.kubernetes.phase";
    StatusCapability["k8sPhaseReason"] = "urn:alm:descriptor:io.kubernetes.phase:reason";
    // Prefix for all kubernetes resource status descriptors.
    StatusCapability["k8sResourcePrefix"] = "urn:alm:descriptor:io.kubernetes:";
    StatusCapability["hidden"] = "urn:alm:descriptor:com.tectonic.ui:hidden";
})(StatusCapability || (StatusCapability = {}));


/***/ }),

/***/ "./public/components/modals/configure-update-strategy-modal.tsx":
/*!**********************************************************************!*\
  !*** ./public/components/modals/configure-update-strategy-modal.tsx ***!
  \**********************************************************************/
/*! exports provided: UPDATE_STRATEGY_DESCRIPTION, getNumberOrPercent, ConfigureUpdateStrategy, ConfigureUpdateStrategyModal, configureUpdateStrategyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STRATEGY_DESCRIPTION", function() { return UPDATE_STRATEGY_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOrPercent", function() { return getNumberOrPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureUpdateStrategy", function() { return ConfigureUpdateStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureUpdateStrategyModal", function() { return ConfigureUpdateStrategyModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureUpdateStrategyModal", function() { return configureUpdateStrategyModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radio */ "./public/components/radio.tsx");








const UPDATE_STRATEGY_DESCRIPTION = 'How should the pods be replaced when a new revision is created?';
const getNumberOrPercent = (value) => {
    if (typeof value === 'undefined') {
        return null;
    }
    if (typeof value === 'string' && value.indexOf('%') > -1) {
        return value;
    }
    return lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value);
};
const ConfigureUpdateStrategy = (props) => {
    const { showDescription = true } = props;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        showDescription && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-form-row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, UPDATE_STRATEGY_DESCRIPTION))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_7__["RadioInput"], { name: `${props.uid || 'update-strategy'}-type`, onChange: (e) => {
                        props.onChangeStrategyType(e.target.value);
                    }, value: "RollingUpdate", checked: props.strategyType === 'RollingUpdate', title: "RollingUpdate", subTitle: "(default)", autoFocus: props.strategyType === 'RollingUpdate' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-radio-desc" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "text-muted" }, "Execute a smooth roll out of the new revision, based on the settings below"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-3" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "input-max-unavailable", className: "control-label" }, "Max Unavailable")),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-form-col col-sm-9" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-inline" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pf-c-input-group" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { disabled: props.strategyType !== 'RollingUpdate', placeholder: "25%", size: 5, type: "text", className: "pf-c-form-control", id: "input-max-unavailable", value: props.maxUnavailable, onChange: (e) => props.onChangeMaxUnavailable(e.target.value), "aria-describedby": "input-max-unavailable-help" }),
                                        props.replicas && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "pf-c-input-group__text" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { content: "Current desired pod count" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                                                    "of ",
                                                    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pluralize"])(props.replicas, 'pod'))))))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block text-muted", id: "input-max-unavailable-help" }, "Number or percentage of total pods at the start of the update (optional)"))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-3" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "input-max-surge", className: "control-label" }, "Max Surge")),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-form-col col-sm-9" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-inline" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pf-c-input-group" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { disabled: props.strategyType !== 'RollingUpdate', placeholder: "25%", size: 5, type: "text", className: "pf-c-form-control", id: "input-max-surge", value: props.maxSurge, onChange: (e) => props.onChangeMaxSurge(e.target.value), "aria-describedby": "input-max-surge-help" }),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "pf-c-input-group__text" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { content: "Current desired pod count" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                                                    "greater than ",
                                                    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pluralize"])(props.replicas, 'pod')))))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block text-muted", id: "input-max-surge-help" }, "Number or percentage of total pods at the start of the update (optional)")))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-12" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_7__["RadioInput"], { name: `${props.uid || 'update-strategy'}-type`, onChange: (e) => {
                        props.onChangeStrategyType(e.target.value);
                    }, value: "Recreate", checked: props.strategyType === 'Recreate', title: "Recreate", desc: "Shut down all existing pods before creating new ones", autoFocus: props.strategyType === 'Recreate' })))));
};
const ConfigureUpdateStrategyModal = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["withHandlePromise"])((props) => {
    const [strategyType, setStrategyType] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.deployment.spec, 'strategy.type'));
    const [maxUnavailable, setMaxUnavailable] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.deployment.spec, 'strategy.rollingUpdate.maxUnavailable', '25%'));
    const [maxSurge, setMaxSurge] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.deployment.spec, 'strategy.rollingUpdate.maxSurge', '25%'));
    const submit = (event) => {
        event.preventDefault();
        const patch = { path: '/spec/strategy/rollingUpdate', op: 'remove' };
        if (strategyType === 'RollingUpdate') {
            patch.value = {
                maxUnavailable: getNumberOrPercent(maxUnavailable || '25%'),
                maxSurge: getNumberOrPercent(maxSurge || '25%'),
            };
            patch.op = 'add';
        }
        props
            .handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"], props.deployment, [
            patch,
            { path: '/spec/strategy/type', value: strategyType, op: 'replace' },
        ]))
            .then(props.close, () => { });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null, "Edit Update Strategy"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ConfigureUpdateStrategy, { strategyType: strategyType, maxUnavailable: maxUnavailable, maxSurge: maxSurge, onChangeStrategyType: setStrategyType, onChangeMaxUnavailable: setMaxUnavailable, onChangeMaxSurge: setMaxSurge })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { errorMessage: props.errorMessage, inProgress: props.inProgress, submitText: "Save", cancel: props.cancel })));
});
const configureUpdateStrategyModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(ConfigureUpdateStrategyModal);
ConfigureUpdateStrategy.displayName = 'ConfigureUpdateStrategy';


/***/ })

}]);
//# sourceMappingURL=8-f6cddc2965c97d8e59ea.js.map