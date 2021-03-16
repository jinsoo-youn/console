(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-deployImage~dev-console-edit~dev-console-healthCheck~git-import-form~source-to-image-form"],{

/***/ "./packages/dev-console/src/components/health-checks/HealthChecks.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/HealthChecks.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _HealthChecksProbe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HealthChecksProbe */ "./packages/dev-console/src/components/health-checks/HealthChecksProbe.tsx");
/* harmony import */ var _health_checks_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-checks-types */ "./packages/dev-console/src/components/health-checks/health-checks-types.ts");
/* harmony import */ var _import_import_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import/import-types */ "./packages/dev-console/src/components/import/import-types.ts");





const HealthChecks = ({ title, resourceType }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"], { title: title },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HealthChecksProbe__WEBPACK_IMPORTED_MODULE_2__["default"], { probeType: _health_checks_types__WEBPACK_IMPORTED_MODULE_3__["HealthChecksProbeType"].ReadinessProbe }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HealthChecksProbe__WEBPACK_IMPORTED_MODULE_2__["default"], { probeType: _health_checks_types__WEBPACK_IMPORTED_MODULE_3__["HealthChecksProbeType"].LivenessProbe }),
    resourceType !== _import_import_types__WEBPACK_IMPORTED_MODULE_4__["Resources"].KnativeService && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HealthChecksProbe__WEBPACK_IMPORTED_MODULE_2__["default"], { probeType: _health_checks_types__WEBPACK_IMPORTED_MODULE_3__["HealthChecksProbeType"].StartupProbe }))));
/* harmony default export */ __webpack_exports__["default"] = (HealthChecks);


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/HealthChecksProbe.scss":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/HealthChecksProbe.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/HealthChecksProbe.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/HealthChecksProbe.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _ProbeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProbeForm */ "./packages/dev-console/src/components/health-checks/ProbeForm.tsx");
/* harmony import */ var _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-utils.ts");
/* harmony import */ var _HealthChecksProbe_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HealthChecksProbe.scss */ "./packages/dev-console/src/components/health-checks/HealthChecksProbe.scss");
/* harmony import */ var _HealthChecksProbe_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HealthChecksProbe_scss__WEBPACK_IMPORTED_MODULE_7__);








const HealthCheckProbe = ({ probeType }) => {
    var _a;
    const { values: { healthChecks }, setFieldValue, } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const [temporaryProbeData, setTemporaryProbeData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const onEditProbe = () => {
        setFieldValue(`healthChecks.${probeType}.showForm`, true);
        setTemporaryProbeData(healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType].data);
    };
    const handleDeleteProbe = () => {
        var _a;
        setFieldValue(`healthChecks.${probeType}`, _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__["healthChecksDefaultValues"]);
        if ((_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.modified) {
            setFieldValue(`healthChecks.${probeType}.modified`, false);
        }
        else {
            setFieldValue(`healthChecks.${probeType}.modified`, true);
        }
    };
    const handleReset = () => {
        var _a;
        if (!((_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.enabled)) {
            setFieldValue(`healthChecks.${probeType}`, _health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__["healthChecksDefaultValues"]);
        }
        else {
            setFieldValue(`healthChecks.${probeType}.showForm`, false);
            setFieldValue(`healthChecks.${probeType}.data`, temporaryProbeData);
        }
        setFieldValue(`healthChecks.${probeType}.modified`, false);
    };
    const handleSubmit = () => {
        setFieldValue(`healthChecks.${probeType}.showForm`, false);
        setFieldValue(`healthChecks.${probeType}.enabled`, true);
        setFieldValue(`healthChecks.${probeType}.modified`, true);
    };
    const handleAddProbe = () => {
        setFieldValue(`healthChecks.${probeType}.showForm`, true);
    };
    const renderProbe = () => {
        var _a, _b;
        if ((_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.showForm) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProbeForm__WEBPACK_IMPORTED_MODULE_5__["default"], { onSubmit: handleSubmit, onClose: handleReset, probeType: probeType });
        }
        if ((_b = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _b === void 0 ? void 0 : _b.enabled) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "odc-heath-check-probe__successText" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["GreenCheckCircleIcon"], null),
                    " ",
                    `${Object(_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__["getHealthChecksProbeConfig"])(probeType).formTitle} Added`),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: "pf-m-plain--align-left", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ButtonVariant"].plain, onClick: handleDeleteProbe },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], null))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: "pf-m-link--align-left", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ButtonVariant"].link, onClick: handleAddProbe, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], null) }, `Add ${Object(_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__["getHealthChecksProbeConfig"])(probeType).formTitle}`));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-section-heading-tertiary odc-heath-check-probe__formTitle" },
            Object(_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__["getHealthChecksProbeConfig"])(probeType).formTitle,
            ((_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.enabled) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: "pf-m-link--align-left", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ButtonVariant"].link, onClick: onEditProbe },
                "\u00A0\u00A0",
                'Edit Probe'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form__helper-text" }, Object(_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_6__["getHealthChecksProbeConfig"])(probeType).formSubtitle),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__group co-toolbar__group--left" }, renderProbe())));
};
/* harmony default export */ __webpack_exports__["default"] = (HealthCheckProbe);


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/ProbeForm.scss":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/ProbeForm.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/ProbeForm.tsx":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/ProbeForm.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _RequestTypeForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequestTypeForms */ "./packages/dev-console/src/components/health-checks/RequestTypeForms.tsx");
/* harmony import */ var _health_checks_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-checks-types */ "./packages/dev-console/src/components/health-checks/health-checks-types.ts");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _ProbeForm_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProbeForm.scss */ "./packages/dev-console/src/components/health-checks/ProbeForm.scss");
/* harmony import */ var _ProbeForm_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ProbeForm_scss__WEBPACK_IMPORTED_MODULE_8__);









const getRequestTypeForm = (value, probeType) => {
    switch (value) {
        case _health_checks_types__WEBPACK_IMPORTED_MODULE_6__["RequestType"].HTTPGET:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RequestTypeForms__WEBPACK_IMPORTED_MODULE_5__["HTTPRequestTypeForm"], { probeType: probeType });
        case _health_checks_types__WEBPACK_IMPORTED_MODULE_6__["RequestType"].ContainerCommand:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RequestTypeForms__WEBPACK_IMPORTED_MODULE_5__["CommandRequestTypeForm"], { probeType: probeType });
        case _health_checks_types__WEBPACK_IMPORTED_MODULE_6__["RequestType"].TCPSocket:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RequestTypeForms__WEBPACK_IMPORTED_MODULE_5__["TCPRequestTypeForm"], { probeType: probeType });
        default:
            return null;
    }
};
var RequestTypeOptions;
(function (RequestTypeOptions) {
    RequestTypeOptions["httpGet"] = "HTTP GET";
    RequestTypeOptions["command"] = "Container Command";
    RequestTypeOptions["tcpSocket"] = "TCP Socket";
})(RequestTypeOptions || (RequestTypeOptions = {}));
const ProbeForm = ({ onSubmit, onClose, probeType }) => {
    var _a, _b, _c;
    const { values: { healthChecks }, errors, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-heath-check-probe-form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["DropdownField"], { name: `healthChecks.${probeType}.data.requestType`, label: "Type", items: RequestTypeOptions, title: _health_checks_types__WEBPACK_IMPORTED_MODULE_6__["RequestType"].HTTPGET, fullWidth: true }),
            getRequestTypeForm((_b = (_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.requestType, probeType),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].number, name: `healthChecks.${probeType}.data.failureThreshold`, label: "Failure Threshold", style: { maxWidth: '100%' }, helpText: "How many times the probe will try starting or restarting before giving up." }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].number, name: `healthChecks.${probeType}.data.successThreshold`, label: "Success Threshold", style: { maxWidth: '100%' }, helpText: "How many consecutive successes for the probe to be considered successful after having failed." }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputGroupField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].number, name: `healthChecks.${probeType}.data.initialDelaySeconds`, label: "Initial Delay", helpText: "How long to wait after the container starts before checking it's health.", afterInput: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, 'seconds'), style: { maxWidth: '100%' } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputGroupField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].number, name: `healthChecks.${probeType}.data.periodSeconds`, label: "Period", helpText: "How often to perform the probe.", afterInput: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, 'seconds'), style: { maxWidth: '100%' } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputGroupField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].number, name: `healthChecks.${probeType}.data.timeoutSeconds`, label: "Timeout", helpText: "How long to wait for the probe to finish, if the time is exceeded, the probe is considered failed.", afterInput: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null, 'seconds'), style: { maxWidth: '100%' } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["ActionGroupWithIcons"], { onSubmit: onSubmit, onClose: onClose, isDisabled: !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]((_c = errors === null || errors === void 0 ? void 0 : errors.healthChecks) === null || _c === void 0 ? void 0 : _c[probeType]) })));
};
/* harmony default export */ __webpack_exports__["default"] = (ProbeForm);


/***/ }),

/***/ "./packages/dev-console/src/components/health-checks/RequestTypeForms.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/RequestTypeForms.tsx ***!
  \********************************************************************************/
/*! exports provided: renderPortField, HTTPRequestTypeForm, TCPRequestTypeForm, CommandRequestTypeForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPortField", function() { return renderPortField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestTypeForm", function() { return HTTPRequestTypeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TCPRequestTypeForm", function() { return TCPRequestTypeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRequestTypeForm", function() { return CommandRequestTypeForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils_name_value_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx");
/* harmony import */ var _import_import_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../import/import-types */ "./packages/dev-console/src/components/import/import-types.ts");







const renderPortField = (fieldName, resourceType) => {
    if (resourceType === _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].KnativeService) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: "knative-port", label: "Port", placeholder: "0", isDisabled: true }));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: fieldName, label: "Port", required: true });
};
const HTTPRequestTypeForm = ({ probeType }) => {
    var _a, _b, _c;
    const { values: { healthChecks, resources }, setFieldValue, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const httpHeaders = (_c = (_b = (_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.httpGet) === null || _c === void 0 ? void 0 : _c.httpHeaders;
    const initialNameValuePairs = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](httpHeaders)
        ? httpHeaders.map((val) => lodash__WEBPACK_IMPORTED_MODULE_1__["values"](val))
        : [['', '']];
    const [nameValue, setNameValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialNameValuePairs);
    const portFieldName = `healthChecks.${probeType}.data.httpGet.port`;
    const handleNameValuePairs = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ nameValuePairs }) => {
        const updatedNameValuePairs = lodash__WEBPACK_IMPORTED_MODULE_1__["compact"](nameValuePairs.map(([name, value]) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"](value)) {
                return { name, valueFrom: value };
            }
            if (value.length) {
                return { name, value };
            }
            return null;
        }));
        setNameValue(nameValuePairs);
        setFieldValue(`healthChecks.${probeType}.data.httpGet.httpHeaders`, updatedNameValuePairs);
    }, [setFieldValue, probeType]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["CheckboxField"], { name: `healthChecks.${probeType}.data.httpGet.scheme`, label: "Use HTTPS", value: "HTTPS" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getFieldId"])(`healthChecks.${probeType}.data.httpGet.httpHeaders`, 'name-value'), name: `healthChecks.${probeType}.data.httpGet.httpHeaders`, label: "HTTP Headers" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_name_value_editor__WEBPACK_IMPORTED_MODULE_5__["NameValueEditor"], { nameValuePairs: nameValue, valueString: "Value", nameString: "Header Name", addString: "Add Header", readOnly: false, allowSorting: false, updateParentData: handleNameValuePairs })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, name: `healthChecks.${probeType}.data.httpGet.path`, label: "Path", placeholder: "/" }),
        renderPortField(portFieldName, resources)));
};
const TCPRequestTypeForm = ({ probeType }) => {
    const { values: { resources }, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const portFieldName = `healthChecks.${probeType}.data.tcpSocket.port`;
    return renderPortField(portFieldName, resources);
};
const CommandRequestTypeForm = ({ probeType }) => {
    var _a, _b, _c;
    const { values: { healthChecks }, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const commands = ((_c = (_b = (_a = healthChecks === null || healthChecks === void 0 ? void 0 : healthChecks[probeType]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.exec) === null || _c === void 0 ? void 0 : _c.command) || [''];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["TextColumnField"], { name: `healthChecks.${probeType}.data.exec.command`, label: "Command", addLabel: "Add command", placeholder: "argument", helpText: "The command to run inside the container.", required: true, disableDeleteRow: commands.length === 1 }));
};


/***/ }),

/***/ "./packages/dev-console/src/components/import/section/FormSection.scss":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/section/FormSection.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormSection.scss */ "./packages/dev-console/src/components/import/section/FormSection.scss");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormSection_scss__WEBPACK_IMPORTED_MODULE_3__);




const flexStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 'var(--pf-global--spacer--md) 0',
};
const FormSection = ({ title, subTitle, fullWidth, children, flexLayout, extraMargin, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pf-c-form', {
        'co-m-pane__form': !fullWidth,
        'odc-form-section--extra-margin': extraMargin,
    }), style: flexLayout ? flexStyle : {} },
    title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "odc-form-section__heading" }, title),
    subTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false }, subTitle),
    children));
/* harmony default export */ __webpack_exports__["default"] = (FormSection);


/***/ })

}]);
//# sourceMappingURL=dev-console-deployImage~dev-console-edit~dev-console-healthCheck~git-import-form~source-to-image-form-3bdfca6fc1b5e1c01694.js.map