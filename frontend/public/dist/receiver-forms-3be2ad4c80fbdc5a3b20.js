(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receiver-forms"],{

/***/ "./public/components/monitoring/receiver-forms/alert-manager-receiver-forms.tsx":
/*!**************************************************************************************!*\
  !*** ./public/components/monitoring/receiver-forms/alert-manager-receiver-forms.tsx ***!
  \**************************************************************************************/
/*! exports provided: SaveAsDefaultCheckbox, SendResolvedAlertsCheckbox, CreateReceiver, EditReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAsDefaultCheckbox", function() { return SaveAsDefaultCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendResolvedAlertsCheckbox", function() { return SendResolvedAlertsCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReceiver", function() { return CreateReceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReceiver", function() { return EditReceiver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_button_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/button-bar */ "./public/components/utils/button-bar.jsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/utils/dropdown.jsx");
/* harmony import */ var _utils_firehose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/firehose */ "./public/components/utils/firehose.jsx");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _utils_status_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/status-box */ "./public/components/utils/status-box.tsx");
/* harmony import */ var _alert_manager_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../alert-manager-utils */ "./public/components/monitoring/alert-manager-utils.tsx");
/* harmony import */ var _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../alert-manager-config */ "./public/components/monitoring/alert-manager-config.tsx");
/* harmony import */ var _routing_labels_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing-labels-editor */ "./public/components/monitoring/receiver-forms/routing-labels-editor.tsx");
/* harmony import */ var _pagerduty_receiver_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagerduty-receiver-form */ "./public/components/monitoring/receiver-forms/pagerduty-receiver-form.tsx");
/* harmony import */ var _webhook_receiver_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./webhook-receiver-form */ "./public/components/monitoring/receiver-forms/webhook-receiver-form.tsx");
/* harmony import */ var _email_receiver_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./email-receiver-form */ "./public/components/monitoring/receiver-forms/email-receiver-form.tsx");
/* harmony import */ var _slack_receiver_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slack-receiver-form */ "./public/components/monitoring/receiver-forms/slack-receiver-form.tsx");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../co-fetch */ "./public/co-fetch.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable camelcase */




















/**
 * Converts routes of a specific Receiver:
 * {
 *   receiver: "MyReceiver",
 *   match: {
 *     severity: "warning",
 *     cluster: "myCluster"
 *   },
 *   match_re: {
 *    service: "$foobar"
 *  }
};
 * ...to array of labels for Routing Labels Editor component
 * [
 *   {
 *     "name": "severity",
 *     "value": "warning",
 *     "isRegex": false
 *   },
 *   {
 *     "name": "cluster",
 *     "value": "myCluster",
 *     "isRegex": false
 *   },
 *   {
 *     "name": "service",
 *     "value": "$foobar",
 *     "isRegex": true
 *   }
 * ]
 */
const convertReceiverRoutesToEditorLabels = (receiver, routes) => {
    if (!receiver) {
        return [];
    }
    const routesOfReceiver = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](routes, (aRoute) => aRoute.receiver === receiver.name);
    const matches = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"]((routesOfReceiver === null || routesOfReceiver === void 0 ? void 0 : routesOfReceiver.match) || {}, (v, k) => {
        return { name: k, value: v, isRegex: false };
    });
    const regexMatches = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"]((routesOfReceiver === null || routesOfReceiver === void 0 ? void 0 : routesOfReceiver.match_re) || {}, (v, k) => {
        return { name: k, value: v, isRegex: true };
    });
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["concat"]([], matches, regexMatches);
};
/**
 * Returns new Route object
 * Ex:
 * {
 *   receiver: myNewReceiver,
 *   match: {
 *     "severity": "warning",
 *     "cluster": "myCluster"
 *   }
 *   match_re {
 *     "service": "^(foo1|foo2|baz)$",
 *   }
 * }
 */
const createRoute = (receiver, routeLabels) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](routeLabels, (acc, label) => {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](acc, [label.isRegex ? 'match_re' : 'match', label.name], label.value);
        return acc;
    }, { receiver: receiver.name });
};
/**
 * Returns new Receiver object
 * Ex:
 * {
 *   name: MyNewReceiver
 *   pagerduty_configs: {
 *     routing_key: <integration_key>
 *   }
 * }
 */
const createReceiver = (globals, formValues, createReceiverConfig, receiverToEdit) => {
    const receiverConfig = createReceiverConfig(globals, formValues, receiverToEdit && receiverToEdit[formValues.receiverType]
        ? receiverToEdit[formValues.receiverType][0] // pass in receiver config if editing existing receiver
        : {});
    return {
        name: formValues.receiverName,
        [formValues.receiverType]: [Object.assign({}, receiverConfig)],
    };
};
const subformFactory = (receiverType) => {
    switch (receiverType) {
        case 'pagerduty_configs':
            return _pagerduty_receiver_form__WEBPACK_IMPORTED_MODULE_15__;
        case 'webhook_configs':
            return _webhook_receiver_form__WEBPACK_IMPORTED_MODULE_16__;
        case 'email_configs':
            return _email_receiver_form__WEBPACK_IMPORTED_MODULE_17__;
        case 'slack_configs':
            return _slack_receiver_form__WEBPACK_IMPORTED_MODULE_18__;
        default:
            return null;
    }
};
const formReducer = (formValues, action) => {
    if (action.type === 'setFormValues') {
        return Object.assign(Object.assign({}, formValues), action.payload);
    }
    // eslint-disable-next-line no-console
    console.error('Unrecognized Alertmanager form reducer action', action);
    return formValues;
};
const getRouteLabelsForEditor = (isDefaultReceiver, receiverToEdit, allRoutes) => {
    const routeLabels = convertReceiverRoutesToEditorLabels(receiverToEdit, allRoutes);
    return !isDefaultReceiver && lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](routeLabels)
        ? [{ name: '', value: '', isRegex: false }]
        : routeLabels;
};
const alertMsg = (type) => {
    switch (type) {
        case _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__["InitialReceivers"].Default:
            return 'Your default receiver will automatically receive all alerts from this cluster that are not caught by other receivers first.';
        case _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__["InitialReceivers"].Critical:
            return 'The routing labels for this receiver are configured to capture critical alerts.  Finish setting up this receiver by selecting a "Receiver Type" to choose a destination for these alerts.  If this receiver is deleted, critical alerts will go to the default receiver instead.';
        case _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__["InitialReceivers"].Watchdog:
            return 'The Watchdog alert fires constantly to confirm that your alerting stack is functioning correctly. This receiver is configured to prevent it from creating unnecessary notifications. You can edit this receiver if you plan to use the information that Watchdog provides, otherwise this receiver should remain in its current state with no set receiver type.';
        default:
            return 'unknown receiver type'; // should never get here
    }
};
const ReceiverInfoTip = ({ type }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: "info", title: `${type} Receiver` },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-pre-line" }, alertMsg(type))));
};
const ReceiverBaseForm = ({ obj: secret, // Secret "alertmanager-main" which contains alertmanager.yaml config
titleVerb, saveButtonText, editReceiverNamed, alertmanagerGlobals, }) => {
    var _a, _b;
    const [errorMsg, setErrorMsg] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [inProgress, setInProgress] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    let config;
    if (!errorMsg) {
        config = Object(_alert_manager_utils__WEBPACK_IMPORTED_MODULE_12__["getAlertmanagerConfig"])(secret, setErrorMsg);
    }
    const doesReceiverNameAlreadyExist = (receiverName) => {
        if (!(config === null || config === void 0 ? void 0 : config.receivers)) {
            return false;
        }
        const receiverNames = config.receivers
            .filter((receiver) => receiver.name !== editReceiverNamed)
            .map((receiver) => receiver.name);
        return receiverNames.includes(receiverName);
    };
    const { route, global } = config || {};
    // there is no api to get default values for these adv. config props
    const advancedConfigGlobals = {
        ['pagerduty_send_resolved']: true,
        ['pagerduty_client']: '{{ template "pagerduty.default.client" . }}',
        ['pagerduty_client_url']: '{{ template "pagerduty.default.clientURL" . }}',
        ['pagerduty_description']: '{{ template "pagerduty.default.description" .}}',
        ['pagerduty_severity']: 'error',
        ['email_send_resolved']: false,
        ['email_html']: '{{ template "email.default.html" . }}',
        ['slack_send_resolved']: false,
        ['slack_username']: '{{ template "slack.default.username" . }}',
        ['slack_icon_emoji']: '{{ template "slack.default.iconemoji" .}}',
        ['slack_icon_url']: '{{ template "slack.default.iconurl" .}}',
        ['slack_link_names']: false,
        ['webhook_send_resolved']: true,
    };
    // default globals to config.global props first, then alertmanagerGlobals
    const defaultGlobals = Object.assign(Object.assign(Object.assign({}, alertmanagerGlobals), global), advancedConfigGlobals);
    const INITIAL_STATE = Object.assign(Object.assign(Object.assign(Object.assign({ receiverName: '', receiverType: '', routeLabels: [] }, _pagerduty_receiver_form__WEBPACK_IMPORTED_MODULE_15__["getInitialValues"](defaultGlobals, null)), _webhook_receiver_form__WEBPACK_IMPORTED_MODULE_16__["getInitialValues"](defaultGlobals, null)), _email_receiver_form__WEBPACK_IMPORTED_MODULE_17__["getInitialValues"](defaultGlobals, null)), _slack_receiver_form__WEBPACK_IMPORTED_MODULE_18__["getInitialValues"](defaultGlobals, null));
    let receiverToEdit;
    if (editReceiverNamed) {
        receiverToEdit = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, 'receivers'), { name: editReceiverNamed });
        INITIAL_STATE.receiverName = receiverToEdit ? receiverToEdit.name : '';
        INITIAL_STATE.receiverType = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](receiverToEdit), (key) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["endsWith"](key, '_configs'));
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](INITIAL_STATE.receiverType)) {
            const receiverConfig = (_a = receiverToEdit === null || receiverToEdit === void 0 ? void 0 : receiverToEdit[INITIAL_STATE.receiverType]) === null || _a === void 0 ? void 0 : _a[0];
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["assign"](INITIAL_STATE, subformFactory(INITIAL_STATE.receiverType).getInitialValues(defaultGlobals, receiverConfig));
        }
    }
    const { receiver: defaultReceiver } = route || {}; // top level route.receiver is the default receiver for all alarms
    // if default receiver name defined but no receiver exists with that name, or editing the default receiver,
    const isDefaultReceiver = defaultReceiver
        ? lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]((_b = config === null || config === void 0 ? void 0 : config.receivers) === null || _b === void 0 ? void 0 : _b.filter((receiver) => receiver.name === defaultReceiver)) ||
            defaultReceiver === editReceiverNamed
        : true; // defaultReceiver (the name stored in config.routes.receiver) is not defined, so this should be the default receiver
    INITIAL_STATE.routeLabels = getRouteLabelsForEditor(isDefaultReceiver, receiverToEdit, route.routes);
    const [formValues, dispatchFormChange] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](formReducer, INITIAL_STATE);
    const SubForm = subformFactory(formValues.receiverType);
    const receiverNameAlreadyExist = doesReceiverNameAlreadyExist(formValues.receiverName);
    const isFormInvalid = !formValues.receiverName ||
        receiverNameAlreadyExist ||
        !formValues.receiverType ||
        SubForm.isFormInvalid(formValues) ||
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](formValues.routeLabelFieldErrors) ||
        formValues.routeLabelDuplicateNamesError ||
        (!isDefaultReceiver &&
            formValues.routeLabels.length === 1 &&
            (formValues.routeLabels[0].name === '' || formValues.routeLabels[0].value === ''));
    const save = (e) => {
        e.preventDefault();
        // Update Global params
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["assign"](config.global, SubForm.updateGlobals(defaultGlobals, formValues));
        // Update Receivers
        const newReceiver = createReceiver(defaultGlobals, formValues, SubForm.createReceiverConfig, receiverToEdit);
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["update"](config, 'receivers', (receivers = []) => {
            if (editReceiverNamed) {
                const index = lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](receivers, { name: editReceiverNamed });
                receivers.splice(index, 1, newReceiver);
            }
            else {
                receivers.push(newReceiver);
            }
            return receivers;
        });
        // Update Route & RouteLabels
        if (isDefaultReceiver) {
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](route, 'receiver', newReceiver.name);
        }
        const newRoute = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](formValues.routeLabels)
            ? undefined
            : createRoute(newReceiver, formValues.routeLabels);
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["update"](route, 'routes', (routes = []) => {
            if (editReceiverNamed) {
                const index = lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](routes, { receiver: editReceiverNamed });
                if (index !== -1) {
                    if (!newRoute) {
                        // no routing labels for receiver, remove old route
                        routes.splice(index, 1);
                    }
                    else {
                        // update receiver's route with new route/labels
                        routes.splice(index, 1, newRoute);
                    }
                }
                else if (newRoute) {
                    // receiver didn't have a prior route, so add new route
                    routes.push(newRoute);
                }
            }
            else if (newRoute) {
                // add route for new receiver
                routes.push(newRoute);
            }
            return routes;
        });
        // Update 'alertmanager-main' Secret with new alertmanager.yaml configuration
        setInProgress(true);
        Object(_alert_manager_utils__WEBPACK_IMPORTED_MODULE_12__["patchAlertmanagerConfig"])(secret, config).then(() => {
            setErrorMsg('');
            setInProgress(false);
            _utils_router__WEBPACK_IMPORTED_MODULE_10__["history"].push('/monitoring/alertmanagerconfig');
        }, (err) => {
            setErrorMsg(err.message);
            setInProgress(false);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null,
                titleVerb,
                " Receiver")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "co-m-pane__body-group", onSubmit: save },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
                titleVerb,
                " ",
                _alert_manager_utils__WEBPACK_IMPORTED_MODULE_12__["receiverTypes"][formValues.receiverType],
                " ",
                isDefaultReceiver && 'Default',
                ' ',
                "Receiver"),
            isDefaultReceiver && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReceiverInfoTip, { type: _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__["InitialReceivers"].Default }),
            formValues.receiverName === 'Critical' && !formValues.receiverType && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReceiverInfoTip, { type: _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__["InitialReceivers"].Critical })),
            formValues.receiverName === 'Watchdog' && !formValues.receiverType && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReceiverInfoTip, { type: _alert_manager_config__WEBPACK_IMPORTED_MODULE_13__["InitialReceivers"].Watchdog })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_5__('form-group', {
                    'has-error': receiverNameAlreadyExist,
                }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required" }, "Receiver Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", value: formValues.receiverName, onChange: (e) => dispatchFormChange({
                        type: 'setFormValues',
                        payload: { receiverName: e.target.value },
                    }), "aria-describedby": "receiver-name-help", name: "receiverName", "data-test-id": "receiver-name", required: true }),
                receiverNameAlreadyExist && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "help-block" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "data-test-id": "receiver-name-already-exists-error" }, "A receiver with that name already exists.")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group co-m-pane__dropdown" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required" }, "Receiver Type"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { title: 'Select Receiver Type...', name: "receiverType", items: _alert_manager_utils__WEBPACK_IMPORTED_MODULE_12__["receiverTypes"], dropDownClassName: "dropdown--full-width", "data-test-id": "receiver-type", selectedKey: formValues.receiverType, onChange: (receiverType) => dispatchFormChange({
                        type: 'setFormValues',
                        payload: {
                            receiverType,
                        },
                    }) })),
            formValues.receiverType && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubForm.Form, { globals: defaultGlobals, formValues: formValues, dispatchFormChange: dispatchFormChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_routing_labels_editor__WEBPACK_IMPORTED_MODULE_14__["RoutingLabelEditor"], { formValues: formValues, dispatchFormChange: dispatchFormChange, isDefaultReceiver: isDefaultReceiver }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_button_bar__WEBPACK_IMPORTED_MODULE_7__["ButtonBar"], { errorMessage: errorMsg, inProgress: inProgress },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary", "data-test-id": "save-changes", isDisabled: isFormInvalid }, saveButtonText),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", "data-test-id": "cancel", onClick: _utils_router__WEBPACK_IMPORTED_MODULE_10__["history"].goBack }, "Cancel"))))));
};
const SaveAsDefaultCheckbox = ({ formField, disabled, label, formValues, dispatchFormChange, tooltip, }) => {
    const saveAsDefaultLabelClass = classnames__WEBPACK_IMPORTED_MODULE_5__('checkbox', { 'co-no-bold': disabled });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: saveAsDefaultLabelClass, htmlFor: formField },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", id: formField, "data-test-id": "save-as-default", onChange: (e) => dispatchFormChange({
                type: 'setFormValues',
                payload: { [formField]: e.target.checked },
            }), checked: formValues[formField], "aria-checked": formValues[formField], disabled: disabled, "aria-disabled": disabled }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-alert-manager-config__save-as-default-label" }, label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, tooltip) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["BlueInfoCircleIcon"], null))));
};
const SendResolvedAlertsCheckbox = ({ formField, formValues, dispatchFormChange }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: formField },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", id: formField, "data-test-id": "send-resolved-alerts", onChange: (e) => dispatchFormChange({
                    type: 'setFormValues',
                    payload: { [formField]: e.target.checked },
                }), checked: formValues[formField], "aria-checked": formValues[formField] }),
            "Send resolved alerts to this receiver?")));
};
const ReceiverWrapper = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((_a) => {
    var { obj } = _a, props = __rest(_a, ["obj"]);
    const { alertManagerBaseURL } = window.SERVER_FLAGS;
    const [alertmanagerGlobals, setAlertmanagerGlobals] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!alertManagerBaseURL) {
            setLoadError({ message: `Error alertManagerBaseURL not set` });
            return;
        }
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_19__["coFetchJSON"])(`${alertManagerBaseURL}/api/v2/status/`)
            .then((data) => {
            var _a;
            const originalAlertmanagerConfigJSON = (_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.original;
            if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](originalAlertmanagerConfigJSON)) {
                setLoadError({ message: 'alertmanager.v2.status.config.original not found.' });
            }
            else {
                try {
                    const { global } = Object(js_yaml__WEBPACK_IMPORTED_MODULE_4__["safeLoad"])(originalAlertmanagerConfigJSON);
                    setAlertmanagerGlobals(global);
                    setLoaded(true);
                }
                catch (error) {
                    setLoadError({
                        message: `Error parsing Alertmanager config.original: ${error.message ||
                            'invalid YAML'}`,
                    });
                }
            }
        })
            .catch((e) => setLoadError({
            message: `Error loading ${alertManagerBaseURL}/api/v2/status/: ${e.message}`,
        }));
    }, [alertManagerBaseURL]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_status_box__WEBPACK_IMPORTED_MODULE_11__["StatusBox"], Object.assign({}, obj, { label: "Alertmanager Globals", loaded: loaded, loadError: loadError }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReceiverBaseForm, Object.assign({}, props, { obj: obj.data, alertmanagerGlobals: alertmanagerGlobals }))));
});
const resources = [
    {
        kind: 'Secret',
        name: 'alertmanager-main',
        namespace: 'openshift-monitoring',
        isList: false,
        prop: 'obj',
    },
];
const CreateReceiver = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_firehose__WEBPACK_IMPORTED_MODULE_9__["Firehose"], { resources: resources },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReceiverWrapper, { titleVerb: "Create", saveButtonText: "Create" })));
const EditReceiver = ({ match: { params } }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_firehose__WEBPACK_IMPORTED_MODULE_9__["Firehose"], { resources: resources },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReceiverWrapper, { titleVerb: "Edit", saveButtonText: "Save", editReceiverNamed: params.name })));


/***/ }),

/***/ "./public/components/monitoring/receiver-forms/email-receiver-form.tsx":
/*!*****************************************************************************!*\
  !*** ./public/components/monitoring/receiver-forms/email-receiver-form.tsx ***!
  \*****************************************************************************/
/*! exports provided: Form, getInitialValues, isFormInvalid, updateGlobals, createReceiverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialValues", function() { return getInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormInvalid", function() { return isFormInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGlobals", function() { return updateGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReceiverConfig", function() { return createReceiverConfig; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-manager-receiver-forms */ "./public/components/monitoring/receiver-forms/alert-manager-receiver-forms.tsx");
/* eslint-disable camelcase */




const SMTP_GLOBAL_FIELDS = [
    'smtp_from',
    'smtp_smarthost',
    'smtp_hello',
    'smtp_auth_username',
    'smtp_auth_password',
    'smtp_auth_identity',
    'smtp_auth_secret',
    'smtp_require_tls',
];
const GLOBAL_FIELDS = [...SMTP_GLOBAL_FIELDS, 'email_send_resolved', 'email_html'];
const Form = ({ globals, formValues, dispatchFormChange }) => {
    // disable saveAsDefault if all SMTP form fields match global values
    const disableSaveAsDefault = SMTP_GLOBAL_FIELDS.every((propName) => formValues[propName] === globals[propName]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-test-id": "email-receiver-form" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "email-to" }, "To Address"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "email-to-help", id: "email-to", "data-test-id": "email-to", value: formValues.emailTo, onChange: (e) => dispatchFormChange({
                    type: 'setFormValues',
                    payload: { emailTo: e.target.value },
                }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "email-to-help" }, "The email address to send notifications to.")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body--section-heading" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: "SMTP Configuration" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__["SaveAsDefaultCheckbox"], { formField: "emailSaveAsDefault", disabled: disableSaveAsDefault, label: "Save as default SMTP configuration", formValues: formValues, dispatchFormChange: dispatchFormChange, tooltip: "Checking this box will write these values to the global section of the\n                configuration file where they will become defaults for future email receivers." }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "email-from" }, "From Address"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "email-from-help", id: "email-from", "data-test-id": "email-from", value: formValues.smtp_from, onChange: (e) => dispatchFormChange({
                            type: 'setFormValues',
                            payload: { smtp_from: e.target.value },
                        }) }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "email-from-help" }, "The email address to send notifications from.")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "email-smarthost" }, "SMTP Smarthost"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "email-smarthost-help", id: "email-smarthost", "data-test-id": "email-smarthost", value: formValues.smtp_smarthost, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { smtp_smarthost: e.target.value },
                                }) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "email-smarthost-help" }, "Smarthost used for sending emails, including port number."))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "email-hello" }, "SMTP Hello"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "email-hello-help", id: "email-hello", "data-test-id": "email-hello", value: formValues.smtp_hello, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { smtp_hello: e.target.value },
                                }) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "email-hello-help" }, "The hostname to identify to the SMTP server.")))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "email-auth-username" }, "Auth Username"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", id: "email-auth-username", "data-test-id": "email-auth-username", value: formValues.smtp_auth_username, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { smtp_auth_username: e.target.value },
                                }) }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "email-auth-password" }, "Auth Password (Using LOGIN and PLAIN)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "password", id: "email-auth-password", "data-test-id": "email-auth-password", value: formValues.smtp_auth_password, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { smtp_auth_password: e.target.value },
                                }) })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "email-auth-identity" }, "Auth Identity (Using PLAIN)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", id: "email-auth-identity", "data-test-id": "email-auth-identity", value: formValues.smtp_auth_identity, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { smtp_auth_identity: e.target.value },
                                }) }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "email-auth-secret" }, "Auth Secret (CRAM-MDS)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "password", id: "email-auth-secret", "data-test-id": "email-auth-secret", value: formValues.smtp_auth_secret, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { smtp_auth_secret: e.target.value },
                                }) })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkbox" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "email-require-tls" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", id: "email-require-tls", "data-test-id": "email-require-tls", onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: {
                                    smtp_require_tls: e.target.checked,
                                },
                            }), checked: formValues.smtp_require_tls, "aria-checked": formValues.smtp_require_tls }),
                        "Require TLS")))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["ExpandCollapse"], { textCollapsed: "Show advanced configuration", textExpanded: "Hide advanced configuration" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-subsection" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__["SendResolvedAlertsCheckbox"], { formField: "email_send_resolved", formValues: formValues, dispatchFormChange: dispatchFormChange })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "email-html" }, "Body of Email Notifications (HTML)"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "html-help", id: "email-html", "data-test-id": "email-html", value: formValues.email_html, onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: { email_html: e.target.value },
                            }) })))))));
};
const getConfigFieldName = (fld) => fld.substring(fld.indexOf('_') + 1); //strip off leading 'email_' or 'smtp_' prefix
const getInitialValues = (globals, receiverConfig) => {
    const initValues = {
        emailSaveAsDefault: false,
        emailTo: receiverConfig === null || receiverConfig === void 0 ? void 0 : receiverConfig.to,
    };
    GLOBAL_FIELDS.forEach((fld) => {
        initValues[fld] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](receiverConfig, getConfigFieldName(fld), globals[fld]);
    });
    return initValues;
};
const isFormInvalid = (formValues) => {
    return (!formValues.emailTo ||
        !formValues.smtp_from ||
        !formValues.smtp_smarthost ||
        !formValues.smtp_hello);
};
const updateGlobals = (globals, formValues) => {
    const updatedGlobals = {};
    if (formValues.emailSaveAsDefault) {
        SMTP_GLOBAL_FIELDS.forEach((propName) => {
            const formValue = formValues[propName];
            if (formValue !== undefined) {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](updatedGlobals, propName, formValue);
            }
        });
    }
    return updatedGlobals;
};
const createReceiverConfig = (globals, formValues, receiverConfig) => {
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, 'to', formValues.emailTo);
    // Only save these props in receiverConfig if different from global
    GLOBAL_FIELDS.forEach((fld) => {
        const formValue = formValues[fld];
        const configFieldName = getConfigFieldName(fld);
        if (formValue !== globals[fld]) {
            if (SMTP_GLOBAL_FIELDS.includes(fld) && formValues.emailSaveAsDefault) {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, configFieldName); // saving as global so unset in config
            }
            else {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, configFieldName, formValue);
            }
        }
        else {
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, configFieldName); // equals global, unset in config so global is used
        }
    });
    return receiverConfig;
};


/***/ }),

/***/ "./public/components/monitoring/receiver-forms/pagerduty-receiver-form.tsx":
/*!*********************************************************************************!*\
  !*** ./public/components/monitoring/receiver-forms/pagerduty-receiver-form.tsx ***!
  \*********************************************************************************/
/*! exports provided: Form, getInitialValues, isFormInvalid, updateGlobals, createReceiverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialValues", function() { return getInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormInvalid", function() { return isFormInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGlobals", function() { return updateGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReceiverConfig", function() { return createReceiverConfig; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../radio */ "./public/components/radio.tsx");
/* harmony import */ var _alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-manager-receiver-forms */ "./public/components/monitoring/receiver-forms/alert-manager-receiver-forms.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* eslint-disable camelcase */





const GLOBAL_FIELDS = [
    'pagerduty_url',
    'pagerduty_send_resolved',
    'pagerduty_client',
    'pagerduty_client_url',
    'pagerduty_description',
    'pagerduty_severity',
];
const Form = ({ globals, formValues, dispatchFormChange }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-test-id": "pagerduty-receiver-form" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "integration-type-events" }, "Integration Type"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_2__["RadioInput"], { title: "Events API v2", id: "integration-type-events", value: "events", onChange: (e) => dispatchFormChange({
                        type: 'setFormValues',
                        payload: { pagerdutyIntegrationKeyType: e.target.value },
                    }), checked: formValues.pagerdutyIntegrationKeyType === 'events', "aria-checked": formValues.pagerdutyIntegrationKeyType === 'events', inline: true }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_2__["RadioInput"], { title: "Prometheus", name: "pagerdutyIntegrationKeyType", "data-test-id": "integration-type-prometheus", value: "prometheus", onChange: (e) => dispatchFormChange({
                        type: 'setFormValues',
                        payload: { pagerdutyIntegrationKeyType: e.target.value },
                    }), checked: formValues.pagerdutyIntegrationKeyType === 'prometheus', "aria-checked": formValues.pagerdutyIntegrationKeyType === 'prometheus', inline: true }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { "data-test-id": "pagerduty-key-label", className: "control-label co-required", htmlFor: "integration-key" },
                formValues.pagerdutyIntegrationKeyType === 'events' ? 'Routing' : 'Service',
                " Key"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "integration-key-help", id: "integration-key", "data-test-id": "integration-key", value: formValues.pagerdutyIntegrationKey, onChange: (e) => dispatchFormChange({
                    type: 'setFormValues',
                    payload: { pagerdutyIntegrationKey: e.target.value },
                }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "integration-key-help" }, "PagerDuty integration key.")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { "data-test-id": "pagerduty-url-label", className: "control-label co-required", htmlFor: "pagerduty-url" }, "PagerDuty URL"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-7" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", id: "pagerduty-url", "aria-describedby": "pagerduty-url-help", "data-test-id": "pagerduty-url", value: formValues.pagerduty_url, onChange: (e) => dispatchFormChange({
                            type: 'setFormValues',
                            payload: { pagerduty_url: e.target.value },
                        }) })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-5" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__["SaveAsDefaultCheckbox"], { formField: "pagerdutySaveAsDefault", disabled: formValues.pagerduty_url === (globals === null || globals === void 0 ? void 0 : globals.pagerduty_url), label: "Save as default PagerDuty URL", formValues: formValues, dispatchFormChange: dispatchFormChange, tooltip: "Checking this box will write the url to the global section of the\n                configuration file where it will become default url for future PagerDuty receivers." }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "pagerduty-url-help" }, "The URL of your PagerDuty Installation.")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExpandCollapse"], { textCollapsed: "Show advanced configuration", textExpanded: "Hide advanced configuration" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-subsection" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__["SendResolvedAlertsCheckbox"], { formField: "pagerduty_send_resolved", formValues: formValues, dispatchFormChange: dispatchFormChange }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Client Details"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "pagerduty-client" }, "Client"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "client-help", id: "pagerduty-client", "data-test-id": "pagerduty-client", value: formValues.pagerduty_client, onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: { pagerduty_client: e.target.value },
                            }) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "client-help" }, "The client identification of the Alertmanager.")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "pagerduty-client-url" }, "Client URL"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "client-url-help", id: "pagerduty-client-url", "data-test-id": "pagerduty-client-url", value: formValues.pagerduty_client_url, onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: { pagerduty_client_url: e.target.value },
                            }) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "client-url-help" }, "A backlink to the sender of the notification.")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Incident Details"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "pagerduty-description" }, "Description"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "description-help", id: "pagerduty-description", "data-test-id": "pagerduty-description", value: formValues.pagerduty_description, onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: { pagerduty_description: e.target.value },
                            }) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "description-help" }, "Description of the incident.")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "pagerduty-severity" }, "Severity"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "severity-help", id: "pagerduty-severity", "data-test-id": "pagerduty-severity", value: formValues.pagerduty_severity, onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: { pagerduty_severity: e.target.value },
                            }) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "severity-help" }, "Severity of the incident.")))))));
};
const getInitialValues = (globals, receiverConfig) => {
    const initValues = { pagerdutySaveAsDefault: false };
    initValues.pagerdutyIntegrationKeyType = lodash_es__WEBPACK_IMPORTED_MODULE_0__["has"](receiverConfig, 'service_key')
        ? 'prometheus'
        : 'events';
    initValues.pagerdutyIntegrationKey = (receiverConfig === null || receiverConfig === void 0 ? void 0 : receiverConfig.service_key) || (receiverConfig === null || receiverConfig === void 0 ? void 0 : receiverConfig.routing_key);
    GLOBAL_FIELDS.forEach((fld) => {
        const configFieldName = fld.substring(fld.indexOf('_') + 1); //strip off leading 'pagerduty_' prefix
        initValues[fld] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](receiverConfig, configFieldName, globals[fld]);
    });
    return initValues;
};
const isFormInvalid = (formValues) => {
    return !formValues.pagerdutyIntegrationKey;
};
const updateGlobals = (globals, formValues) => {
    const updatedGlobals = {};
    if (formValues.pagerdutySaveAsDefault && formValues.pagerduty_url) {
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](updatedGlobals, 'pagerduty_url', formValues.pagerduty_url);
    }
    return updatedGlobals;
};
const createReceiverConfig = (globals, formValues, receiverConfig) => {
    // handle integration key props
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, 'routing_key');
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, 'service_key');
    const pagerdutyIntegrationKeyName = `${formValues.pagerdutyIntegrationKeyType === 'events' ? 'routing' : 'service'}_key`;
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, pagerdutyIntegrationKeyName, formValues.pagerdutyIntegrationKey);
    // Only save these props in formValues different from globals
    GLOBAL_FIELDS.forEach((fld) => {
        const formValue = formValues[fld];
        const configFieldName = fld.substring(fld.indexOf('_') + 1); //strip off leading 'pagerduty_' prefix
        if (formValue !== globals[fld]) {
            if (fld === 'pagerduty_url' && formValues.pagerdutySaveAsDefault) {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, 'url'); // saving as global so unset in config
            }
            else {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, configFieldName, formValue);
            }
        }
        else {
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, configFieldName); // equals global, unset in config so global is used
        }
    });
    return receiverConfig;
};


/***/ }),

/***/ "./public/components/monitoring/receiver-forms/routing-labels-editor.tsx":
/*!*******************************************************************************!*\
  !*** ./public/components/monitoring/receiver-forms/routing-labels-editor.tsx ***!
  \*******************************************************************************/
/*! exports provided: getRouteLabelFieldErrors, RoutingLabelEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouteLabelFieldErrors", function() { return getRouteLabelFieldErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingLabelEditor", function() { return RoutingLabelEditor; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");






const DEFAULT_RECEIVER_LABEL = 'All (default receiver)';
const labelNamePattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
const getRouteLabelFieldErrors = (labels) => {
    const routeLabelFieldErrors = {};
    labels.forEach((label, i) => {
        if (label.name && !label.name.match(labelNamePattern)) {
            routeLabelFieldErrors[`${i}_name`] = true;
        }
    });
    return routeLabelFieldErrors;
};
const hasDuplicateNames = (labels) => {
    const names = lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](labels, (label) => label.name);
    return names.length !== lodash_es__WEBPACK_IMPORTED_MODULE_0__["uniq"](names).length;
};
const RoutingLabelEditor = ({ formValues, dispatchFormChange, isDefaultReceiver }) => {
    const setRouteLabel = (path, v) => {
        const labels = lodash_es__WEBPACK_IMPORTED_MODULE_0__["clone"](formValues.routeLabels);
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](labels, path.split(', '), v);
        dispatchFormChange({
            type: 'setFormValues',
            payload: {
                routeLabels: labels,
                routeLabelFieldErrors: getRouteLabelFieldErrors(labels),
                routeLabelDuplicateNamesError: hasDuplicateNames(labels),
            },
        });
    };
    const onRoutingLabelChange = (path) => {
        return (e) => setRouteLabel(path, e.target.value);
    };
    const onRoutingLabelRegexChange = (e, i) => {
        setRouteLabel(`${i}, isRegex`, e.target.checked);
    };
    const addRoutingLabel = () => {
        setRouteLabel(`${formValues.routeLabels.length}`, {
            name: '',
            value: '',
            isRegex: false,
        });
    };
    const removeRoutingLabel = (i) => {
        const labels = lodash_es__WEBPACK_IMPORTED_MODULE_0__["clone"](formValues.routeLabels);
        labels.splice(i, 1);
        dispatchFormChange({
            type: 'setFormValues',
            payload: {
                routeLabels: labels,
                routeLabelDuplicateNamesError: hasDuplicateNames(labels),
            },
        });
    };
    const InvalidLabelName = () => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "data-test-id": "invalid-label-name-error" },
        "Invalid name.",
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Label name must not begin with a digit and contain only alphanumeric characters or '_'.") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["InfoCircleIcon"], { className: "co-icon-space-l" }))));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-test-id": "receiver-routing-labels-editor", className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Routing Labels", required: !isDefaultReceiver }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-help-text" },
            "Firing alerts with labels that match all of these selectors will be sent to this receiver. Label values can be matched exactly or with a \u00A0",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ExternalLink"], { href: "https://github.com/google/re2/wiki/Syntax", text: "regular expression" }),
            "."),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row monitoring-grid-head text-secondary text-uppercase" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-5" }, "Name"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6" }, "Value")),
        isDefaultReceiver && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row form-group", key: "default" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-10" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6 pairs-list__name-field" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", "data-test-id": "label-name-default", value: DEFAULT_RECEIVER_LABEL, disabled: true, required: true }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6 pairs-list__value-field" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", "data-test-id": "label-value-default", value: DEFAULT_RECEIVER_LABEL, disabled: true, required: true }))))))),
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](formValues.routeLabels, (routeLabel, i) => {
            var _a;
            const hasLabelNameError = (_a = formValues === null || formValues === void 0 ? void 0 : formValues.routeLabelFieldErrors) === null || _a === void 0 ? void 0 : _a[`${i}_name`];
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row form-group", key: i },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-10" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6 pairs-list__name-field" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('form-group', {
                                    'has-error': hasLabelNameError,
                                }) },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", "data-test-id": `label-name-${i}`, onChange: onRoutingLabelChange(`${i}, name`), placeholder: "Name", value: routeLabel.name, required: true }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "help-block" }, hasLabelNameError && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InvalidLabelName, null)))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6 pairs-list__value-field" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", "data-test-id": `label-value-${i}`, onChange: onRoutingLabelChange(`${i}, value`), placeholder: "Value", value: routeLabel.value, required: true })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-12 col-sm-12" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkbox" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", onChange: (e) => onRoutingLabelRegexChange(e, i), checked: routeLabel.isRegex }),
                                        "Regular Expression")))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-2 pairs-list__action" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { type: "button", onClick: () => removeRoutingLabel(i), "aria-label": "Remove Route Label", isDisabled: !isDefaultReceiver && formValues.routeLabels.length <= 1, variant: "plain", "data-test-id": "remove-routing-label" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], null)))));
        }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('form-group', {
                'has-error': formValues.routeLabelDuplicateNamesError,
            }, 'co-routing-label-editor__error-message') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "help-block" }, formValues.routeLabelDuplicateNamesError ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "data-test-id": "duplicate-label-name-error" }, "Routing label names must be unique.")) : (''))),
        !isDefaultReceiver && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: "pf-m-link--align-left", onClick: addRoutingLabel, type: "button", variant: "link", "data-test-id": "add-routing-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { className: "co-icon-space-r" }),
            "Add Label"))));
};


/***/ }),

/***/ "./public/components/monitoring/receiver-forms/slack-receiver-form.tsx":
/*!*****************************************************************************!*\
  !*** ./public/components/monitoring/receiver-forms/slack-receiver-form.tsx ***!
  \*****************************************************************************/
/*! exports provided: Form, getInitialValues, isFormInvalid, updateGlobals, createReceiverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialValues", function() { return getInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormInvalid", function() { return isFormInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGlobals", function() { return updateGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReceiverConfig", function() { return createReceiverConfig; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../radio */ "./public/components/radio.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-manager-receiver-forms */ "./public/components/monitoring/receiver-forms/alert-manager-receiver-forms.tsx");
/* eslint-disable camelcase */





const GLOBAL_FIELDS = [
    'slack_api_url',
    'slack_send_resolved',
    'slack_username',
    'slack_icon_emoji',
    'slack_icon_url',
    'slack_link_names',
];
const Form = ({ globals, formValues, dispatchFormChange }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-test-id": "slack-receiver-form" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { "data-test-id": "api-url-label", className: "control-label co-required", htmlFor: "slack-api-url" }, "Slack API URL"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-7" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", id: "slack-api-url", "aria-describedby": "slack-api-url-help", "data-test-id": "slack-api-url", value: formValues.slack_api_url, onChange: (e) => dispatchFormChange({
                            type: 'setFormValues',
                            payload: { slack_api_url: e.target.value },
                        }) })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-5" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_4__["SaveAsDefaultCheckbox"], { formField: "slackSaveAsDefault", disabled: formValues.slack_api_url === (globals === null || globals === void 0 ? void 0 : globals.slack_api_url), label: "Save as default Slack API URL", formValues: formValues, dispatchFormChange: dispatchFormChange, tooltip: "Checking this box will write the API URL to the global section of the\n                configuration file where it will become the default API URL for future Slack receivers." }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "slack-api-url-help" }, "The URL of the Slack Webhook.")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "slack-channel" }, "Channel"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", id: "slack-channel", "aria-describedby": "slack-channel-help", "data-test-id": "slack-channel", value: formValues.slackChannel, onChange: (e) => dispatchFormChange({
                    type: 'setFormValues',
                    payload: { slackChannel: e.target.value },
                }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "slack-channel-help" }, "The Slack channel or user to send notifications to.")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["ExpandCollapse"], { textCollapsed: "Show advanced configuration", textExpanded: "Hide advanced configuration" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-subsection" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_4__["SendResolvedAlertsCheckbox"], { formField: "slack_send_resolved", formValues: formValues, dispatchFormChange: dispatchFormChange })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "slack-icon-type" },
                            "Icon \u00A0",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_2__["RadioInput"], { title: "URL", name: "slackIconType", id: "slack-icon-type", value: "url", onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { slackIconType: e.target.value },
                                }), checked: formValues.slackIconType === 'url', inline: true }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_2__["RadioInput"], { title: "Emoji", name: "slackIconType", value: "emoji", "data-test-id": "slack-icon-type-emoji", onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { slackIconType: e.target.value },
                                }), checked: formValues.slackIconType === 'emoji', inline: true })),
                        formValues.slackIconType === 'url' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "slack-icon-url-help", "aria-label": "The URL of the icon.", "data-test-id": "slack-icon-url", value: formValues.slack_icon_url, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { slack_icon_url: e.target.value },
                                }) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "slack-icon-url-help" }, "The URL of the icon."))),
                        formValues.slackIconType === 'emoji' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "slack-icon-emoji-help", "aria-label": "An emoji code to use in place of the default icon.", name: "slackIconEmoji", "data-test-id": "slack-icon-emoji", value: formValues.slack_icon_emoji, onChange: (e) => dispatchFormChange({
                                    type: 'setFormValues',
                                    payload: { slack_icon_emoji: e.target.value },
                                }) }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "slack-icon-emoji-help" },
                                "An",
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: "https://www.webfx.com/tools/emoji-cheat-sheet/", text: "emoji code" }),
                                ' ',
                                "to use in place of the default icon.")))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "slack-username" }, "Username"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "slack-username-help", id: "slack-username", "data-test-id": "slack-username", value: formValues.slack_username, onChange: (e) => dispatchFormChange({
                                type: 'setFormValues',
                                payload: { slack_username: e.target.value },
                            }) }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "slack-username-help" }, "The displayed username.")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkbox" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "slack-link-names" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", id: "slack-link-names", "data-test-id": "slack-link-names", "aria-describedby": "slack-link-names-help", onChange: (e) => dispatchFormChange({
                                        type: 'setFormValues',
                                        payload: { slack_link_names: e.target.checked },
                                    }), checked: formValues.slack_link_names }),
                                "Link Names")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "slack-link-names-help" }, "Find and link channel names and usernames.")))))));
};
const getInitialValues = (globals, receiverConfig) => {
    const initValues = {
        slackSaveAsDefault: false,
        slackChannel: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](receiverConfig, 'channel'),
    };
    initValues.slackIconType = lodash_es__WEBPACK_IMPORTED_MODULE_0__["has"](receiverConfig, 'icon_emoji') ? 'emoji' : 'url';
    GLOBAL_FIELDS.forEach((fld) => {
        const configFieldName = fld.substring(fld.indexOf('_') + 1); //strip off leading 'slack_' prefix
        initValues[fld] = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](receiverConfig, configFieldName, globals[fld]);
    });
    return initValues;
};
const isFormInvalid = (formValues) => {
    return !formValues.slack_api_url || !formValues.slackChannel;
};
const updateGlobals = (globals, formValues) => {
    const updatedGlobals = {};
    if (formValues.slackSaveAsDefault && formValues.slack_api_url) {
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](updatedGlobals, 'slack_api_url', formValues.slack_api_url);
    }
    return updatedGlobals;
};
const createReceiverConfig = (globals, formValues, receiverConfig) => {
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, 'channel', formValues.slackChannel);
    // Only save these props in receiverConfig if different from global
    GLOBAL_FIELDS.forEach((fld) => {
        const formValue = formValues[fld];
        const configFieldName = fld.substring(fld.indexOf('_') + 1); //strip off leading 'slack_' prefix
        if (formValue !== globals[fld]) {
            if (fld === 'slack_api_url' && formValues.slackSaveAsDefault) {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, 'api_url'); // saving as global so unset in config
            }
            else {
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, configFieldName, formValue);
            }
        }
        else {
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, configFieldName); // equals global, unset in config so global is used
        }
    });
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, formValues.slackIconType === 'url' ? 'icon_emoji' : 'icon_url');
    return receiverConfig;
};


/***/ }),

/***/ "./public/components/monitoring/receiver-forms/webhook-receiver-form.tsx":
/*!*******************************************************************************!*\
  !*** ./public/components/monitoring/receiver-forms/webhook-receiver-form.tsx ***!
  \*******************************************************************************/
/*! exports provided: Form, getInitialValues, isFormInvalid, updateGlobals, createReceiverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialValues", function() { return getInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormInvalid", function() { return isFormInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGlobals", function() { return updateGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReceiverConfig", function() { return createReceiverConfig; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-manager-receiver-forms */ "./public/components/monitoring/receiver-forms/alert-manager-receiver-forms.tsx");
/* eslint-disable camelcase */




const Form = ({ formValues, dispatchFormChange }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-test-id": "webhook-receiver-form", className: "form-group" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "webhook-url" }, "URL"),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", "aria-describedby": "webhook-url-help", id: "webhook-url", "data-test-id": "webhook-url", value: formValues.webhookUrl, onChange: (e) => dispatchFormChange({
            type: 'setFormValues',
            payload: { webhookUrl: e.target.value },
        }) }),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "help-block", id: "webhook-url-help" }, "The endpoint to send HTTP POST requests to."),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["ExpandCollapse"], { textCollapsed: "Show advanced configuration", textExpanded: "Hide advanced configuration" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-subsection" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_alert_manager_receiver_forms__WEBPACK_IMPORTED_MODULE_3__["SendResolvedAlertsCheckbox"], { formField: "webhookSendResolved", formValues: formValues, dispatchFormChange: dispatchFormChange })))))));
const getInitialValues = (globals, receiverConfig) => {
    return {
        webhookUrl: (receiverConfig === null || receiverConfig === void 0 ? void 0 : receiverConfig.url) || '',
        webhookSendResolved: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](receiverConfig, 'send_resolved', globals === null || globals === void 0 ? void 0 : globals.webhook_send_resolved),
    };
};
const isFormInvalid = (formValues) => {
    return !formValues.webhookUrl;
};
const updateGlobals = () => {
    return {};
};
const createReceiverConfig = (globals, formValues, receiverConfig) => {
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, 'url', formValues.webhookUrl);
    if (formValues.webhookSendResolved !== globals.webhook_send_resolved) {
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["set"](receiverConfig, 'send_resolved', formValues === null || formValues === void 0 ? void 0 : formValues.webhookSendResolved);
    }
    else {
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["unset"](receiverConfig, 'send_resolved'); // equals global, unset in config so global is used
    }
    return receiverConfig;
};


/***/ })

}]);
//# sourceMappingURL=receiver-forms-3be2ad4c80fbdc5a3b20.js.map