(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operand"],{

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/configure-size.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/configure-size.tsx ***!
  \************************************************************************************************/
/*! exports provided: configureSizeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureSizeModal", function() { return configureSizeModal; });
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");

const configureSizeModal = ({ kindObj, resource, specDescriptor, specValue, }) => {
    return Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_0__["configureCountModal"])({
        resourceKind: kindObj,
        resource,
        defaultValue: specValue || 0,
        title: `Modify ${specDescriptor.displayName}`,
        message: specDescriptor.description,
        path: `/spec/${specDescriptor.path}`,
        buttonText: `Update ${specDescriptor.displayName}`,
    });
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/configure-update-strategy.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/configure-update-strategy.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: configureUpdateStrategyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureUpdateStrategyModal", function() { return configureUpdateStrategyModal; });
/* harmony import */ var _modals_update_strategy_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modals/update-strategy-modal */ "./packages/operator-lifecycle-manager/src/components/modals/update-strategy-modal.tsx");

const configureUpdateStrategyModal = ({ kindObj, resource, specDescriptor, specValue, }) => {
    return Object(_modals_update_strategy_modal__WEBPACK_IMPORTED_MODULE_0__["updateStrategyModal"])({
        resourceKind: kindObj,
        resource,
        defaultValue: specValue,
        title: `Edit ${specDescriptor.displayName}`,
        path: `/spec/${specDescriptor.path}`,
    });
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/endpoint.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/endpoint.tsx ***!
  \******************************************************************************************/
/*! exports provided: EndpointRow, EndpointList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointRow", function() { return EndpointRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointList", function() { return EndpointList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");



const EndpointRow = ({ endpoint }) => {
    const detail = ['scheme', 'honorLabels', 'targetPort'].reduce((element, field) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](endpoint, field) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
            field,
            ":"),
        lodash__WEBPACK_IMPORTED_MODULE_1__["get"](endpoint, field))) : (element), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "--"));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-ip-row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceIcon"], { kind: "Service" }),
                    endpoint.port || '--')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-2" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, endpoint.interval || '--')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" }, detail))));
};
const EndpointList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "service-ips" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-ip-header" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" }, "Port"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-2" }, "Interval"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "rows" }, props.endpoints ? (props.endpoints.map((e) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EndpointRow, { endpoint: e, key: e.port }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No endpoints")))));


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/index.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/index.tsx ***!
  \***************************************************************************************/
/*! exports provided: SpecDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecDescriptor", function() { return SpecDescriptor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/error/error-boundary */ "./packages/console-shared/src/components/error/error-boundary.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/configmap-and-secret-data */ "./public/components/configmap-and-secret-data.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _resource_requirements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resource-requirements */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/resource-requirements.tsx");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./endpoint */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/endpoint.tsx");
/* harmony import */ var _configure_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configure-size */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/configure-size.tsx");
/* harmony import */ var _configure_update_strategy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configure-update-strategy */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/configure-update-strategy.tsx");















const Default = ({ value }) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](value) && !lodash__WEBPACK_IMPORTED_MODULE_1__["isNumber"](value) && !lodash__WEBPACK_IMPORTED_MODULE_1__["isBoolean"](value)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None");
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"](value)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Unsupported");
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, lodash__WEBPACK_IMPORTED_MODULE_1__["toString"](value));
};
const PodCount = ({ model, obj, descriptor, value }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { isInline: true, type: "button", onClick: () => Object(_configure_size__WEBPACK_IMPORTED_MODULE_13__["configureSizeModal"])({
        kindObj: model,
        resource: obj,
        specDescriptor: descriptor,
        specValue: value,
    }), variant: "link" },
    value,
    " pods",
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })));
const Endpoints = ({ value }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_endpoint__WEBPACK_IMPORTED_MODULE_12__["EndpointList"], { endpoints: value });
const Label = ({ value }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, value || '--');
const NamespaceSelector = ({ value }) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](value, 'matchNames[0]') ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: value.matchNames[0], title: value.matchNames[0] })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None"));
const ResourceRequirements = ({ obj, descriptor }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-spec-descriptor--resource-requirements" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Resource Limits"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_requirements__WEBPACK_IMPORTED_MODULE_11__["ResourceRequirementsModalLink"], { type: "limits", obj: obj, path: descriptor.path })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Resource Requests"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_requirements__WEBPACK_IMPORTED_MODULE_11__["ResourceRequirementsModalLink"], { type: "requests", obj: obj, path: descriptor.path }))));
const K8sResourceLink = (props) => {
    if (!props.value) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None");
    }
    const kind = props.capability.split(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].k8sResourcePrefix)[1];
    if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isString"](props.value)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["YellowExclamationTriangleIcon"], null),
            " Invalid spec descriptor: value at path '",
            props.descriptor.path,
            "' must be a ",
            kind,
            " resource name."));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: props.value, namespace: props.namespace });
};
const BasicSelector = ({ value, capability }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Selector"], { selector: value, kind: capability.split(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].selector)[1] }));
const BooleanSwitch = (props) => {
    const { model, obj, descriptor, onHandleError } = props;
    const convertedValue = !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](props.value) ? props.value : false;
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](convertedValue);
    const [confirmed, setConfirmed] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const errorCb = (err) => {
        setConfirmed(false);
        setValue(convertedValue);
        setErrorMessage(err.message);
        onHandleError(err.message);
    };
    const update = () => {
        setConfirmed(true);
        setErrorMessage(null);
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["has"](obj, `spec.${descriptor.path}`)) {
            const patchFor = (val) => [
                { op: 'add', path: `/spec/${descriptor.path.replace(/\./g, '/')}`, value: val },
            ];
            return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sPatch"])(model, obj, patchFor(value)).catch((err) => errorCb(err));
        }
        const newObj = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](obj);
        lodash__WEBPACK_IMPORTED_MODULE_1__["set"](newObj, `spec.${descriptor.path}`, value);
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sUpdate"])(model, newObj).catch((err) => errorCb(err));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-spec-descriptor--switch" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], { id: descriptor.path, isChecked: value, onChange: (val) => {
                    setValue(val);
                    setConfirmed(false);
                    setErrorMessage(null);
                    onHandleError(null);
                }, label: "True", labelOff: "False" }),
            "\u00A0\u00A0",
            value !== convertedValue && confirmed && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LoadingInline"], null),
            value !== convertedValue && !confirmed && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                "\u00A0\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link--align-left", type: "button", variant: "link", onClick: update },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r pf-c-button-icon--plain" }),
                    "Confirm change")))),
        errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "cos-error-title co-break-word" }, errorMessage || 'An error occurred'))));
};
const CheckboxUIComponent = (props) => {
    const convertedValue = !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](props.value) ? props.value : false;
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](convertedValue);
    const [confirmed, setConfirmed] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const patchFor = (val) => [
        { op: 'add', path: `/spec/${props.descriptor.path.replace('.', '/')}`, value: val },
    ];
    const update = () => {
        setConfirmed(true);
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sPatch"])(props.model, props.obj, patchFor(value));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-spec-descriptor--switch" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], { id: props.descriptor.path, style: { marginLeft: '10px' }, isChecked: value, label: props.descriptor.displayName, onChange: (val) => {
                setValue(val);
                setConfirmed(false);
            } }),
        "\u00A0\u00A0",
        value !== convertedValue && confirmed && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LoadingInline"], null),
        value !== convertedValue && !confirmed && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "\u00A0\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link--align-left", type: "button", variant: "link", onClick: update },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r pf-c-button-icon--plain" }),
                "Confirm change")))));
};
const Secret = (props) => {
    const [reveal, setReveal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toggle-reveal-value" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "link", isInline: true, className: "pf-m-link--align-right co-toggle-reveal-value__btn", onClick: () => setReveal(!reveal) }, reveal ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["EyeSlashIcon"], { className: "co-icon-space-r" }),
                "Hide Values")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["EyeIcon"], { className: "co-icon-space-r" }),
                "Reveal Values"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_9__["SecretValue"], { value: props.value, encoded: false, reveal: reveal }))));
};
const UpdateStrategy = ({ model, obj, descriptor, value }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "link", isInline: true, onClick: () => Object(_configure_update_strategy__WEBPACK_IMPORTED_MODULE_14__["configureUpdateStrategyModal"])({
        kindObj: model,
        resource: obj,
        specDescriptor: descriptor,
        specValue: value,
    }) },
    lodash__WEBPACK_IMPORTED_MODULE_1__["get"](value, 'type', 'None'),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })));
const capabilityComponents = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])()
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].podCount, PodCount)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].endpointList, Endpoints)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].label, Label)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].namespaceSelector, NamespaceSelector)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].resourceRequirements, ResourceRequirements)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].k8sResourcePrefix, K8sResourceLink)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].selector, BasicSelector)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].booleanSwitch, BooleanSwitch)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].password, Secret)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].updateStrategy, UpdateStrategy)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].checkbox, CheckboxUIComponent)
    .set(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].hidden, null);
const capabilityFor = (specCapability) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](specCapability)) {
        return Default;
    }
    if (specCapability.startsWith(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].k8sResourcePrefix)) {
        return capabilityComponents.get(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].k8sResourcePrefix);
    }
    if (specCapability.startsWith(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].selector)) {
        return capabilityComponents.get(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].selector);
    }
    return capabilityComponents.get(specCapability, Default);
};
/**
 * Main entrypoint component for rendering custom UI for a given spec descriptor. This should be used instead of importing
 * individual components from this module.
 */
const SpecDescriptor = Object(_console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_6__["withFallback"])((props) => {
    const { model, obj, descriptor, value, namespace, onHandleError } = props;
    const capability = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](descriptor, ['x-descriptors'], []).find((c) => !c.startsWith(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].fieldGroup) &&
        !c.startsWith(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].arrayFieldGroup) &&
        !c.startsWith(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].advanced) &&
        !c.startsWith(_types__WEBPACK_IMPORTED_MODULE_10__["SpecCapability"].fieldDependency));
    const Capability = capabilityFor(capability);
    return Capability ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "olm-descriptor" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: descriptor.description },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "olm-descriptor__title", "data-test-descriptor-label": descriptor.displayName }, descriptor.displayName)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "olm-descriptor__value" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Capability, { descriptor: descriptor, capability: capability, value: value, namespace: namespace, model: model, obj: obj, onHandleError: onHandleError })))) : null;
});


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/status/index.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/status/index.tsx ***!
  \*****************************************************************************************/
/*! exports provided: StatusDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDescriptor", function() { return StatusDescriptor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/error/error-boundary */ "./packages/console-shared/src/components/error/error-boundary.tsx");
/* harmony import */ var _console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _phase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phase */ "./packages/operator-lifecycle-manager/src/components/descriptors/status/phase.tsx");
/* harmony import */ var _pods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pods */ "./packages/operator-lifecycle-manager/src/components/descriptors/status/pods.tsx");











const Invalid = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["YellowExclamationTriangleIcon"], null),
    "\u00A0\u00A0The field ",
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null,
        "status.",
        props.descriptor.path),
    " is invalid"));
const Default = ({ value }) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](value) && !lodash__WEBPACK_IMPORTED_MODULE_1__["isNumber"](value) && !lodash__WEBPACK_IMPORTED_MODULE_1__["isBoolean"](value)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None");
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"](value)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](value, (v, k) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: k },
            k,
            ": ",
            v)))));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, lodash__WEBPACK_IMPORTED_MODULE_1__["toString"](value));
};
const PodStatuses = (props) => {
    return (((!lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"](props.value) || lodash__WEBPACK_IMPORTED_MODULE_1__["some"](props.value, (v) => !lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"](v))) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Invalid, Object.assign({}, props)))) ||
        (lodash__WEBPACK_IMPORTED_MODULE_1__["every"](props.value, (v) => lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"](v) && v.length === 0) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No members"))) || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pods__WEBPACK_IMPORTED_MODULE_10__["PodStatusChart"], { statuses: props.value, statusDescriptor: props.descriptor }));
};
const StatusConditions = (props) => {
    return ((!lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"](props.value) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Invalid, Object.assign({}, props))) ||
        (props.value.length === 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No conditions present")) || (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_7__["Conditions"], { conditions: props.value })));
};
const Link = ({ value }) => !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](value) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: value }, value.replace(/https?:\/\//, ''))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None"));
const K8sPhase = ({ value }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_phase__WEBPACK_IMPORTED_MODULE_9__["Phase"], { status: value });
const K8sPhaseReason = ({ value }) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](value) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", { style: { width: 'max-content' } }, value));
const K8sResourceLink = ({ capability, namespace, value }) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](value) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: capability.substr(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].k8sResourcePrefix.length), name: value, namespace: namespace, title: value }));
const capabilityComponents = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])()
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].podStatuses, PodStatuses)
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].conditions, StatusConditions)
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].w3Link, Link)
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].k8sPhase, K8sPhase)
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].k8sPhaseReason, K8sPhaseReason)
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].k8sResourcePrefix, K8sResourceLink)
    .set(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].hidden, null);
const capabilityFor = (statusCapability) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](statusCapability)) {
        return Default;
    }
    if (statusCapability.startsWith(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].k8sResourcePrefix)) {
        return capabilityComponents.get(_types__WEBPACK_IMPORTED_MODULE_8__["StatusCapability"].k8sResourcePrefix);
    }
    return capabilityComponents.get(statusCapability, Default);
};
/**
 * Main entrypoint component for rendering custom UI for a given status descriptor. This should be used instead of importing
 * individual components from this module.
 */
const StatusDescriptor = Object(_console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_6__["withFallback"])((props) => {
    const { descriptor, value, namespace } = props;
    // Only using first capability instead of dealing with combimations/permutations
    const capability = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](descriptor, ['x-descriptors', 0], null);
    const Capability = capabilityFor(capability);
    return Capability ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "olm-descriptor" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: descriptor.description },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "olm-descriptor__title", "data-test-descriptor-label": descriptor.displayName }, descriptor.displayName)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "olm-descriptor__value" }, descriptor.displayName === 'Status' ? (value === 'Running' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["SuccessStatus"], { title: value })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: value }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Capability, { descriptor: descriptor, capability: capability, value: value, namespace: namespace }))))) : null;
});
StatusDescriptor.displayName = 'StatusDescriptor';
_phase__WEBPACK_IMPORTED_MODULE_9__["Phase"].displayName = 'Phase';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/status/phase.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/status/phase.tsx ***!
  \*****************************************************************************************/
/*! exports provided: Phase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase", function() { return Phase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");


const Phase = ({ status }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: status === 'Failed' ? 'co-error' : '' },
    status === 'Failed' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["BanIcon"], { "data-test-id": "ban-icon" }),
    " ",
    status));
Phase.displayName = 'Phase';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/status/pods.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/status/pods.tsx ***!
  \****************************************************************************************/
/*! exports provided: PodStatusChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodStatusChart", function() { return PodStatusChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/ */ "./packages/console-shared/src/index.ts");






const colorScale = [_patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__["chart_color_blue_300"].value, _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__["chart_color_blue_200"].value, _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__["chart_color_blue_100"].value];
const PodStatusChart = ({ statuses, statusDescriptor }) => {
    const [ref, width] = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useRefWidth"])();
    const data = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](statuses, (podList, status) => {
        const x = status;
        const y = podList.length;
        return {
            label: `${y} ${x}`,
            x,
            y,
        };
    });
    const total = data.reduce((sum, dataPoint) => sum + dataPoint.y, 0);
    const { podStatusInnerRadius, podStatusOuterRadius } = Object(_console_shared___WEBPACK_IMPORTED_MODULE_5__["calculateRadius"])(130); // default value of size is 130
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: ref, className: "graph-wrapper--gauge" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartDonut"], { colorScale: colorScale, data: data, height: width, title: total.toString(), width: width, innerRadius: podStatusInnerRadius, radius: podStatusOuterRadius }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "graph-donut-subtitle", "data-test-id": "chart-donut-subtitle" }, statusDescriptor.path)));
};
PodStatusChart.displayName = 'PodStatusChart';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/k8s-resource.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/k8s-resource.tsx ***!
  \*****************************************************************************/
/*! exports provided: ResourceTableHeader, ResourceTableRow, ResourceTable, Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTableHeader", function() { return ResourceTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTableRow", function() { return ResourceTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTable", function() { return ResourceTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resources", function() { return Resources; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _operand_operand_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operand/operand-link */ "./packages/operator-lifecycle-manager/src/components/operand/operand-link.tsx");










const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-2', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-4', 'col-md-4', 'col-sm-4', 'hidden-xs'),
];
const ResourceTableHeader = () => [
    {
        title: 'Name',
        sortField: 'metadata.name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses[0] },
    },
    {
        title: 'Kind',
        sortField: 'kind',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses[1] },
    },
    {
        title: 'Status',
        sortField: 'status.phase',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses[2] },
    },
    {
        title: 'Created',
        sortField: 'metadata.creationTimestamp',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses[3] },
    },
];
const ResourceTableRow = ({ obj, index, style, customData: { linkFor } }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: obj.metadata.uid, style: style },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] }, linkFor(obj)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[1] }, obj.kind),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'phase', 'Created') })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: obj.metadata.creationTimestamp }))));
const ResourceTable = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Operand Resources", Header: ResourceTableHeader, Row: ResourceTableRow, EmptyMsg: () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["MsgBox"], { title: "No Resources Found", detail: "There are no Kubernetes resources used by this operand." })), virtualize: true })));
const Resources = (props) => {
    const providedAPI = Object(_index__WEBPACK_IMPORTED_MODULE_8__["providedAPIsFor"])(props.clusterServiceVersion).find((desc) => Object(_index__WEBPACK_IMPORTED_MODULE_8__["referenceForProvidedAPI"])(desc) === props.match.params.plural);
    const defaultResources = ['Deployment', 'Service', 'ReplicaSet', 'Pod', 'Secret', 'ConfigMap'];
    const firehoseResources = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](providedAPI, 'resources', defaultResources.map((kind) => ({
        kind,
    }))).map(({ name, kind, version }) => {
        const group = name ? name.substring(name.indexOf('.') + 1) : '';
        const reference = group ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForGroupVersionKind"])(group)(version)(kind) : kind;
        const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["modelFor"])(reference);
        return {
            kind: model && !model.crd ? kind : reference,
            namespaced: model ? model.namespaced : true,
            prop: kind,
        };
    });
    // NOTE: This is us building the `ownerReferences` graph client-side
    const flattenFor = (parentObj) => (resources) => {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["flatMap"](resources, (resource, kind) => lodash__WEBPACK_IMPORTED_MODULE_1__["map"](resource.data, (item) => (Object.assign(Object.assign({}, item), { kind })))).reduce((owned, resource) => {
            return (resource.metadata.ownerReferences || []).some((ref) => ref.uid === parentObj.metadata.uid ||
                owned.some(({ metadata }) => metadata.uid === ref.uid))
                ? owned.concat([resource])
                : owned;
        }, []);
    };
    // FIXME: Comparing `kind` is not enough to determine if an object is a custom resource
    const linkFor = (obj) => obj.metadata.namespace &&
        lodash__WEBPACK_IMPORTED_MODULE_1__["get"](providedAPI, 'resources', []).some(({ kind, name }) => name && kind === obj.kind) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_operand_operand_link__WEBPACK_IMPORTED_MODULE_9__["OperandLink"], { obj: obj })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: obj.kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["MultiListPage"], { filterLabel: "Resources by name", resources: firehoseResources, rowFilters: [
            {
                type: 'clusterserviceversion-resource-kind',
                filterGroupName: 'Kind',
                reducer: ({ kind }) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["kindForReference"])(kind),
                items: firehoseResources.map(({ kind }) => ({
                    id: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["kindForReference"])(kind),
                    title: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["kindForReference"])(kind),
                })),
            },
        ], flatten: flattenFor(props.obj), namespace: props.obj.metadata.namespace, ListComponent: ResourceTable, customData: { linkFor } }));
};
ResourceTableHeader.displayName = 'ResourceTableHeader';
ResourceTable.displayName = 'ResourceTable';
Resources.displayName = 'Resources';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/modals/update-strategy-modal.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/update-strategy-modal.tsx ***!
  \*********************************************************************************************/
/*! exports provided: UpdateStrategyModal, updateStrategyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStrategyModal", function() { return UpdateStrategyModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStrategyModal", function() { return updateStrategyModal; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/modals/configure-update-strategy-modal */ "./public/components/modals/configure-update-strategy-modal.tsx");






const UpdateStrategyModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])((props) => {
    const { path, resource, resourceKind, title, handlePromise, errorMessage, inProgress, defaultValue, cancel, close, } = props;
    const getPath = path.substring(1).replace('/', '.');
    const [strategyType, setStrategyType] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, `${getPath}.type`) || defaultValue);
    const [maxUnavailable, setMaxUnavailable] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, `${getPath}.rollingUpdate.maxUnavailable`, '25%'));
    const [maxSurge, setMaxSurge] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, `${getPath}.rollingUpdate.maxSurge`, '25%'));
    const submit = (event) => {
        event.preventDefault();
        const patch = { path: `${path}/rollingUpdate`, op: 'remove' };
        if (strategyType === 'RollingUpdate') {
            patch.value = {
                maxUnavailable: Object(_console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_5__["getNumberOrPercent"])(maxUnavailable || '25%'),
                maxSurge: Object(_console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_5__["getNumberOrPercent"])(maxSurge || '25%'),
            };
            patch.op = 'add';
        }
        return handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(resourceKind, resource, [
            patch,
            { path: `${path}/type`, value: strategyType, op: 'replace' },
        ])).then(close, () => { });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, title),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_5__["ConfigureUpdateStrategy"], { strategyType: strategyType, maxUnavailable: maxUnavailable, maxSurge: maxSurge, onChangeStrategyType: setStrategyType, onChangeMaxUnavailable: setMaxUnavailable, onChangeMaxSurge: setMaxSurge })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: inProgress, submitText: "Save", cancel: cancel })));
});
const updateStrategyModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(UpdateStrategyModal);
UpdateStrategyModal.displayName = 'UpdateStrategyModal';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/index.tsx":
/*!******************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/index.tsx ***!
  \******************************************************************************/
/*! exports provided: OperandTableHeader, OperandStatus, OperandTableRow, OperandList_, OperandList, ProvidedAPIsPage, ProvidedAPIPage, OperandDetails, OperandDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandTableHeader", function() { return OperandTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandStatus", function() { return OperandStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandTableRow", function() { return OperandTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandList_", function() { return OperandList_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandList", function() { return OperandList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedAPIsPage", function() { return ProvidedAPIsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedAPIPage", function() { return ProvidedAPIPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandDetails", function() { return OperandDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandDetailsPage", function() { return OperandDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _console_internal_components_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/error */ "./public/components/error.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_kinds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/kinds */ "./public/kinds.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/internal/plugins */ "./public/plugins.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils */ "./packages/operator-lifecycle-manager/src/utils.ts");
/* harmony import */ var _descriptors_status__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../descriptors/status */ "./packages/operator-lifecycle-manager/src/components/descriptors/status/index.tsx");
/* harmony import */ var _descriptors_spec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../descriptors/spec */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/index.tsx");
/* harmony import */ var _descriptors_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../descriptors/types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _k8s_resource__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../k8s-resource */ "./packages/operator-lifecycle-manager/src/components/k8s-resource.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _operand_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./operand-link */ "./packages/operator-lifecycle-manager/src/components/operand/operand-link.tsx");
/* harmony import */ var _console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @console/internal/reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _console_shared_src_components_alerts_error__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @console/shared/src/components/alerts/error */ "./packages/console-shared/src/components/alerts/error.tsx");

























const csvName = () => window.location.pathname
    .split('/')
    .find((part, i, allParts) => allParts[i - 1] === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"]) ||
    allParts[i - 1] === _models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"].plural);
const getActions = (ref, flags) => {
    const actions = _console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__["registry"]
        .getClusterServiceVersionActions()
        .filter((action) => _console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__["registry"].isExtensionInUse(action, flags) &&
        action.properties.kind === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["kindForReference"])(ref) &&
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["apiGroupForReference"])(ref) === action.properties.apiGroup);
    const pluginActions = actions.map((action) => (kind, ocsObj) => ({
        label: action.properties.label,
        callback: action.properties.callback(kind, ocsObj),
    }));
    return [
        ...pluginActions,
        (kind, obj) => {
            const reference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj);
            const href = kind.namespaced
                ? `/k8s/ns/${obj.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"].plural}/${csvName()}/${reference}/${obj.metadata.name}/yaml`
                : `/k8s/cluster/${reference}/${obj.metadata.name}/yaml`;
            return {
                label: `Edit ${kind.label}`,
                href,
                accessReview: {
                    group: kind.apiGroup,
                    resource: kind.plural,
                    name: obj.metadata.name,
                    namespace: obj.metadata.namespace,
                    verb: 'update',
                },
            };
        },
        (kind, obj) => ({
            label: `Delete ${kind.label}`,
            callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_13__["deleteModal"])({
                kind,
                resource: obj,
                namespace: obj.metadata.namespace,
                redirectTo: `/k8s/ns/${obj.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"].plural}/${csvName()}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj)}`,
            }),
            accessReview: {
                group: kind.apiGroup,
                resource: kind.plural,
                name: obj.metadata.name,
                namespace: obj.metadata.namespace,
                verb: 'delete',
            },
        }),
    ];
};
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-xl'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-2xl'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Kebab"].columnClass,
];
const OperandTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Kind',
            sortField: 'kind',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortFunc: 'operandStatus',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Labels',
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Last Updated',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
const getOperandStatus = (obj) => {
    const { phase, status, state, conditions } = (obj === null || obj === void 0 ? void 0 : obj.status) || {};
    if (phase && lodash__WEBPACK_IMPORTED_MODULE_1__["isString"](phase)) {
        return {
            type: 'Phase',
            value: phase,
        };
    }
    if (status && lodash__WEBPACK_IMPORTED_MODULE_1__["isString"](status)) {
        return {
            type: 'Status',
            value: status,
        };
    }
    if (state && lodash__WEBPACK_IMPORTED_MODULE_1__["isString"](state)) {
        return {
            type: 'State',
            value: state,
        };
    }
    const trueConditions = conditions === null || conditions === void 0 ? void 0 : conditions.filter((c) => c.status === 'True');
    if (trueConditions === null || trueConditions === void 0 ? void 0 : trueConditions.length) {
        const types = trueConditions.map((c) => c.type);
        return {
            type: types.length === 1 ? 'Condition' : 'Conditions',
            value: types.join(', '),
        };
    }
    return null;
};
const OperandStatus = ({ operand }) => {
    const status = getOperandStatus(operand);
    if (!status) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "-");
    }
    const { type, value } = status;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-and-text" },
        type,
        ":\u00A0",
        value === 'Running' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["SuccessStatus"], { title: value }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: value })));
};
const getOperandStatusText = (operand) => {
    const status = getOperandStatus(operand);
    return status ? `${status.type}: ${status.value}` : '';
};
const OperandTableRow = ({ obj, index, rowKey, style, flags, }) => {
    const actions = getActions(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj), flags);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableRow"], { id: obj.metadata.uid, index: index, trKey: rowKey, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_operand_link__WEBPACK_IMPORTED_MODULE_22__["OperandLink"], { obj: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[1], 'co-break-word'), "data-test-operand-kind": obj.kind }, obj.kind),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperandStatus, { operand: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["LabelList"], { kind: obj.kind, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceKebab"], { actions: actions, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj), resource: obj }))));
};
// eslint-disable-next-line no-underscore-dangle
const OperandList_ = (props) => {
    const { flags } = props;
    const Row = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((rowArgs) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperandTableRow, { obj: rowArgs.obj, index: rowArgs.index, rowKey: rowArgs.key, style: rowArgs.style, flags: flags !== null && flags !== void 0 ? flags : null })), [flags]);
    const ensureKind = (data) => data.map((obj) => {
        if (obj.apiVersion && obj.kind) {
            return obj;
        }
        const reference = props.kinds[0];
        return Object.assign({ apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["apiVersionForReference"])(reference), kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["kindForReference"])(reference) }, obj);
    });
    const EmptyMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["MsgBox"], { title: "No Operands Found", detail: "Operands are declarative components used to define the behavior of the application." }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["Table"], Object.assign({}, props, { customSorts: {
            operandStatus: getOperandStatusText,
        }, data: ensureKind(props.data), EmptyMsg: EmptyMsg, "aria-label": "Operands", Header: OperandTableHeader, Row: Row, virtualize: true })));
};
const OperandList = Object(_console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_23__["connectToFlags"])(..._console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__["registry"].getGatingFlagNames([_console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__["isClusterServiceVersionAction"]]))(OperandList_);
const inFlightStateToProps = ({ k8s }) => ({
    inFlight: k8s.getIn(['RESOURCES', 'inFlight']),
});
const ProvidedAPIsPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(inFlightStateToProps)((props) => {
    const { obj } = props;
    const { owned = [] } = obj.spec.customresourcedefinitions;
    const internalObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_16__["getInternalObjects"])(obj);
    const internalAPIs = Object(_utils__WEBPACK_IMPORTED_MODULE_16__["getInternalAPIReferences"])(obj);
    const firehoseResources = owned.reduce((resources, desc) => {
        const reference = Object(_index__WEBPACK_IMPORTED_MODULE_21__["referenceForProvidedAPI"])(desc);
        const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["modelFor"])(reference);
        return model && !internalAPIs.some((api) => api === reference)
            ? [
                ...resources,
                {
                    kind: Object(_index__WEBPACK_IMPORTED_MODULE_21__["referenceForProvidedAPI"])(desc),
                    namespaced: model.namespaced,
                    prop: desc.kind,
                },
            ]
            : resources;
    }, []);
    const EmptyMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["MsgBox"], { title: "No Provided APIs Defined", detail: "This application was not properly installed or configured." }));
    const createLink = (name) => `/k8s/ns/${obj.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"].plural}/${obj.metadata.name}/${Object(_index__WEBPACK_IMPORTED_MODULE_21__["referenceForProvidedAPI"])(lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owned, { name }))}/~new`;
    const createProps = owned.length > 1
        ? {
            items: owned.reduce((acc, crd) => !Object(_utils__WEBPACK_IMPORTED_MODULE_16__["isInternalObject"])(internalObjects, crd.name)
                ? Object.assign(Object.assign({}, acc), { [crd.name]: crd.displayName }) : acc, {}),
            createLink,
        }
        : { to: owned.length === 1 ? createLink(owned[0].name) : null };
    const owners = (ownerRefs, items) => ownerRefs.filter(({ uid }) => items.filter(({ metadata }) => metadata.uid === uid).length > 0);
    const flatten = (resources) => lodash__WEBPACK_IMPORTED_MODULE_1__["flatMap"](resources, (resource) => lodash__WEBPACK_IMPORTED_MODULE_1__["map"](resource.data, (item) => item)).filter(({ kind, metadata }, i, allResources) => owned.filter((item) => item.kind === kind).length > 0 ||
        owners(metadata.ownerReferences || [], allResources).length > 0);
    const rowFilters = [
        {
            filterGroupName: 'Resource Kind',
            type: 'clusterserviceversion-resource-kind',
            reducer: ({ kind }) => kind,
            items: firehoseResources.map(({ kind }) => ({
                id: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["kindForReference"])(kind),
                title: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["kindForReference"])(kind),
            })),
        },
    ];
    if (props.inFlight) {
        return null;
    }
    return firehoseResources.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["MultiListPage"], Object.assign({}, props, { ListComponent: OperandList, filterLabel: "Resources by name", resources: firehoseResources, namespace: obj.metadata.namespace, canCreate: owned.length > 0, createProps: createProps, createButtonText: owned.length > 1 ? 'Create New' : `Create ${owned[0].displayName}`, flatten: flatten, rowFilters: firehoseResources.length > 1 ? rowFilters : null }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["StatusBox"], { loaded: true, EmptyMsg: EmptyMsg }));
});
const ProvidedAPIPage = Object(_console_internal_kinds__WEBPACK_IMPORTED_MODULE_11__["connectToModel"])((props) => {
    const { namespace, kind, kindsInFlight, kindObj, csv } = props;
    if (!kindObj) {
        return kindsInFlight ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["LoadingBox"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_error__WEBPACK_IMPORTED_MODULE_8__["ErrorPage404"], { message: `The server doesn't have a resource type ${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["kindForReference"])(kind)}. Try refreshing the page if it was recently added.` }));
    }
    const to = `/k8s/ns/${csv.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"].plural}/${csv.metadata.name}/${kind}/~new`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["ListPage"], { kind: kind, ListComponent: OperandList, canCreate: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](kindObj, 'verbs', []).some((v) => v === 'create'), createProps: { to }, namespace: kindObj.namespaced ? namespace : null }));
});
const OperandDetails = Object(_console_internal_kinds__WEBPACK_IMPORTED_MODULE_11__["connectToModel"])((props) => {
    // TODO(alecmerdler): Use additional `x-descriptor` to specify if should be considered main?
    const isMainDescriptor = (descriptor) => {
        return (descriptor['x-descriptors'] || []).some((type) => {
            switch (type) {
                case _descriptors_types__WEBPACK_IMPORTED_MODULE_19__["StatusCapability"].podStatuses:
                    return true;
                default:
                    return false;
            }
        });
    };
    const blockValue = (descriptor, block) => !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](descriptor) ? lodash__WEBPACK_IMPORTED_MODULE_1__["get"](block, descriptor.path, descriptor.value) : undefined;
    const { kind, metadata, spec, status } = props.obj;
    // Find the matching CRD spec for the kind of this resource in the CSV.
    const ownedDefinitions = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.clusterServiceVersion, 'spec.customresourcedefinitions.owned', []);
    const reqDefinitions = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.clusterServiceVersion, 'spec.customresourcedefinitions.required', []);
    const thisDefinition = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](ownedDefinitions.concat(reqDefinitions), (def) => def.name.split('.')[0] === props.kindObj.plural);
    const statusDescriptors = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](thisDefinition, 'statusDescriptors', []).filter(
    // exclude Conditions since they are included in their own section
    (descriptor) => descriptor.path !== 'conditions');
    const specDescriptors = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](thisDefinition, 'specDescriptors', []);
    const currentStatus = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](statusDescriptors, { displayName: 'Status' });
    const primaryDescriptors = statusDescriptors.filter((descriptor) => isMainDescriptor(descriptor));
    const header = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-section-heading" },
        (thisDefinition === null || thisDefinition === void 0 ? void 0 : thisDefinition.displayName) || kind,
        " Overview"));
    const primaryDescriptor = primaryDescriptors.map((statusDescriptor) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: statusDescriptor.displayName, className: "col-sm-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_descriptors_status__WEBPACK_IMPORTED_MODULE_17__["StatusDescriptor"], { descriptor: statusDescriptor, value: blockValue(statusDescriptor, status), obj: props.obj, model: props.kindObj })));
    });
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const handleError = (errorMsg) => setErrorMessage(errorMsg);
    const details = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-operand-details__section co-operand-details__section--info" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceSummary"], { resource: props.obj })),
            currentStatus && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6", key: currentStatus.path },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_descriptors_status__WEBPACK_IMPORTED_MODULE_17__["StatusDescriptor"], { namespace: metadata.namespace, obj: props.obj, model: props.kindObj, descriptor: currentStatus, value: blockValue(currentStatus, status) }))),
            specDescriptors.map((specDescriptor) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: specDescriptor.path, className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_descriptors_spec__WEBPACK_IMPORTED_MODULE_18__["SpecDescriptor"], { namespace: metadata.namespace, obj: props.obj, model: props.kindObj, value: blockValue(specDescriptor, spec), descriptor: specDescriptor, onHandleError: handleError })))),
            statusDescriptors
                .filter(function (descriptor) {
                return !isMainDescriptor(descriptor) && descriptor.displayName !== 'Status';
            })
                .map((statusDescriptor) => {
                const statusValue = blockValue(statusDescriptor, status);
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6", key: statusDescriptor.path },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_descriptors_status__WEBPACK_IMPORTED_MODULE_17__["StatusDescriptor"], { namespace: metadata.namespace, obj: props.obj, model: props.kindObj, descriptor: statusDescriptor, value: statusValue })));
            }))));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-operand-details co-m-pane" },
        lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](primaryDescriptors) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            errorMessage && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_alerts_error__WEBPACK_IMPORTED_MODULE_24__["default"], { message: errorMessage }),
            header,
            details)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
                header,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, primaryDescriptor)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" }, details))),
        lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"](status === null || status === void 0 ? void 0 : status.conditions) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_7__["Conditions"], { conditions: status.conditions })))));
});
const ResourcesTab = (resourceProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_k8s_resource__WEBPACK_IMPORTED_MODULE_20__["Resources"], Object.assign({}, resourceProps, { clusterServiceVersion: resourceProps.csv })));
const OperandDetailsPage = Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_23__["connectToFlags"])(..._console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__["registry"].getGatingFlagNames([_console_internal_plugins__WEBPACK_IMPORTED_MODULE_14__["isClusterServiceVersionAction"]])), _console_internal_kinds__WEBPACK_IMPORTED_MODULE_11__["connectToPlural"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["DetailsPage"], { match: props.match, name: props.match.params.name, kind: props.modelRef, namespace: props.match.params.ns, resources: [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"]),
            name: props.match.params.appName,
            namespace: props.match.params.ns,
            isList: false,
            prop: 'csv',
        },
    ], menuActions: getActions(props.modelRef, props.flags), breadcrumbsFor: () => [
        {
            name: 'Installed Operators',
            path: `/k8s/ns/${props.match.params.ns}/${_models__WEBPACK_IMPORTED_MODULE_15__["ClusterServiceVersionModel"].plural}`,
        },
        {
            name: props.match.params.appName,
            path: props.match.url.slice(0, props.match.url.lastIndexOf('/')),
        },
        { name: `${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["kindForReference"])(props.modelRef)} Details`, path: `${props.match.url}` },
    ], pages: [
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].details((detailsProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperandDetails, Object.assign({}, detailsProps, { clusterServiceVersion: detailsProps.csv, appName: props.match.params.appName })))),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].editYaml(),
        {
            name: 'Resources',
            href: 'resources',
            component: ResourcesTab,
        },
    ] })));
// TODO(alecmerdler): Find Webpack loader/plugin to add `displayName` to React components automagically
OperandList.displayName = 'OperandList';
OperandList_.displayName = 'OperandList';
OperandDetails.displayName = 'OperandDetails';
OperandList.displayName = 'OperandList';
ProvidedAPIsPage.displayName = 'ProvidedAPIsPage';
OperandDetailsPage.displayName = 'OperandDetailsPage';
OperandTableRow.displayName = 'OperandTableRow';
OperandTableHeader.displayName = 'OperandTableHeader';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/operand-link.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/operand-link.tsx ***!
  \*************************************************************************************/
/*! exports provided: OperandLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandLink", function() { return OperandLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");





const OperandLink = (props) => {
    const { namespace, name } = props.obj.metadata;
    const csvName = () => window.location.pathname
        .split('/')
        .find((part, i, allParts) => allParts[i - 1] === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["ClusterServiceVersionModel"]) ||
        allParts[i - 1] === _models__WEBPACK_IMPORTED_MODULE_4__["ClusterServiceVersionModel"].plural);
    const reference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(props.obj);
    const to = namespace
        ? `/k8s/ns/${namespace}/${_models__WEBPACK_IMPORTED_MODULE_4__["ClusterServiceVersionModel"].plural}/${csvName()}/${reference}/${name}`
        : `/k8s/cluster/${reference}/${name}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceIcon"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(props.obj) }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: to, className: "co-resource-item__resource-name", "data-test-operand-link": name }, name)));
};
OperandLink.displayName = 'OperandLink';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/utils.ts":
/*!**********************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/utils.ts ***!
  \**********************************************************/
/*! exports provided: getInternalObjects, isInternalObject, getInternalAPIReferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalObjects", function() { return getInternalObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInternalObject", function() { return isInternalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalAPIReferences", function() { return getInternalAPIReferences; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./packages/operator-lifecycle-manager/src/components/index.tsx");


const getInternalObjects = (csv, path = 'metadata.annotations') => {
    const internals = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](csv, [
        ...lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](path),
        'operators.operatorframework.io/internal-objects',
    ]);
    if (!internals) {
        return [];
    }
    try {
        return JSON.parse(internals);
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error parsing internal object annotation.', e);
        return [];
    }
};
const isInternalObject = (internalObjects, objectName) => internalObjects.some((obj) => obj === objectName);
const getInternalAPIReferences = (csv) => {
    var _a, _b;
    const owned = ((_b = (_a = csv === null || csv === void 0 ? void 0 : csv.spec) === null || _a === void 0 ? void 0 : _a.customresourcedefinitions) === null || _b === void 0 ? void 0 : _b.owned) || [];
    const internalObjects = getInternalObjects(csv);
    return owned.reduce((acc, obj) => isInternalObject(internalObjects, obj.name) ? [Object(_components__WEBPACK_IMPORTED_MODULE_1__["referenceForProvidedAPI"])(obj), ...acc] : acc, []);
};


/***/ })

}]);
//# sourceMappingURL=operand-fb994497177a99d94b01.js.map