(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configure-update-strategy-modal"],{

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
//# sourceMappingURL=configure-update-strategy-modal-c4e34107a96a7a459196.js.map