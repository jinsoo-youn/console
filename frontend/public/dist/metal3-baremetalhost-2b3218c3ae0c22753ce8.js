(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metal3-baremetalhost"],{

/***/ "./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx":
/*!************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx ***!
  \************************************************************************************/
/*! exports provided: StatusItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusItem", function() { return StatusItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_notification_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/notification-drawer */ "./public/components/notification-drawer.tsx");
/* harmony import */ var _console_internal_components_utils_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/timestamp */ "./public/components/utils/timestamp.tsx");
/* harmony import */ var _console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/monitoring */ "./public/components/monitoring.tsx");
/* harmony import */ var _status_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../status/icons */ "./packages/console-shared/src/components/status/icons.tsx");
/* harmony import */ var _alert_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-utils */ "./packages/console-shared/src/components/dashboard/status-card/alert-utils.ts");







const getSeverityIcon = (severity) => {
    switch (severity) {
        case 'critical':
            return _status_icons__WEBPACK_IMPORTED_MODULE_5__["RedExclamationCircleIcon"];
        case 'warning':
        default:
            return _status_icons__WEBPACK_IMPORTED_MODULE_5__["YellowExclamationTriangleIcon"];
    }
};
const StatusItem = ({ Icon, timestamp, message, children }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-icon co-dashboard-icon" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, null)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-message" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-health-card__alert-item-timestamp co-status-card__health-item-text text-secondary" }, timestamp && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { simple: true, timestamp: timestamp })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-status-card__health-item-text co-break-word" }, message)),
            children && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-more" }, children))));
};
const AlertItem = ({ alert }) => {
    const action = _console_internal_components_notification_drawer__WEBPACK_IMPORTED_MODULE_2__["alertActions"].get(alert.rule.name);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusItem, { Icon: getSeverityIcon(Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertSeverity"])(alert)), timestamp: Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertTime"])(alert), message: Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertDescription"])(alert) || Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertMessage"])(alert) }, action ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: action.path }, action.text)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: Object(_console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_4__["alertURL"])(alert, alert.rule.id) }, "View details"))));
};
/* harmony default export */ __webpack_exports__["default"] = (AlertItem);


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



const AlertsBody = ({ error = false, children }) => (error || !!react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).length) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-card__body--no-padding co-status-card__alerts-body co-dashboard-card__body--top-margin" }, error ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateVariant"].full, className: "co-status-card__alerts-msg" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], { className: "co-status-card__alerts-icon", icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["UnknownIcon"] }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "Alerts could not be loaded."))) : (children)));
/* harmony default export */ __webpack_exports__["default"] = (AlertsBody);


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");




const HealthItemIcon = ({ state }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-icon" }, (_states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][state] || _states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][_states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].UNKNOWN]).icon));
const HealthItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ className, state, title, details, popupTitle, noIcon = false, children }) => {
    const detailMessage = details || (_states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][state] || _states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][_states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].UNKNOWN]).message;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('co-status-card__health-item', className) },
        state === _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-health" })) : (!noIcon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HealthItemIcon, { state: state })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-dashboard-text--small co-status-card__health-item-text" }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).length && state !== _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_2__["DashboardCardPopupLink"], { linkTitle: title, popupTitle: popupTitle, className: "co-status-card__popup" }, children)) : (title)),
            state !== _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING && detailMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-text--small co-status-card__health-item-text co-status-card__health-item-subtitle" }, detailMessage)))));
});
/* harmony default export */ __webpack_exports__["default"] = (HealthItem);


/***/ }),

/***/ "./packages/dev-console/src/components/import/validation-schema.ts":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/validation-schema.ts ***!
  \*************************************************************************/
/*! exports provided: gitUrlRegex, nameValidationSchema, projectNameValidationSchema, applicationNameValidationSchema, deploymentValidationSchema, resourcesValidationSchema, serverlessValidationSchema, routeValidationSchema, limitsValidationSchema, imageValidationSchema, gitValidationSchema, dockerValidationSchema, buildValidationSchema, searchTermValidationSchema, isiValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gitUrlRegex", function() { return gitUrlRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameValidationSchema", function() { return nameValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectNameValidationSchema", function() { return projectNameValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationNameValidationSchema", function() { return applicationNameValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deploymentValidationSchema", function() { return deploymentValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourcesValidationSchema", function() { return resourcesValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverlessValidationSchema", function() { return serverlessValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeValidationSchema", function() { return routeValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitsValidationSchema", function() { return limitsValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageValidationSchema", function() { return imageValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gitValidationSchema", function() { return gitValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dockerValidationSchema", function() { return dockerValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildValidationSchema", function() { return buildValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTermValidationSchema", function() { return searchTermValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isiValidationSchema", function() { return isiValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/yup-validation-util */ "./packages/dev-console/src/utils/yup-validation-util.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");






const hostnameRegex = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/;
const pathRegex = /^\/.*$/;
const nameRegex = /^([a-z]([-a-z0-9]*[a-z0-9])?)*$/;
const projectNameRegex = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/;
const gitUrlRegex = /^((((ssh|git|https?:?):\/\/:?)(([^\s@]+@|[^@]:?)[-\w.]+(:\d\d+:?)?(\/[-\w.~/?[\]!$&'()*+,;=:@%]*:?)?:?))|([^\s@]+@[-\w.]+:[-\w.~/?[\]!$&'()*+,;=:@%]*?:?))$/;
const nameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
    .matches(nameRegex, {
    message: 'Name must consist of lower-case letters, numbers and hyphens. It must start with a letter and end with a letter or number.',
    excludeEmptyString: true,
})
    .max(253, 'Cannot be longer than 253 characters.')
    .required('Required');
const projectNameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(projectNameRegex, "Name must consist of lower case alphanumeric characters or '-' and must start and end with an alphanumeric character.")
        .required('Required'),
});
const applicationNameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    selectedKey: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .max(63, 'Cannot be longer than 63 characters.')
        .when('selectedKey', {
        is: _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_APPLICATION_KEY"],
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    }),
});
const deploymentValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    replicas: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
        .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
        .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Replicas must be an Integer.'))
        .min(0, 'Replicas must be greater than or equal to 0.')
        .max(Number.MAX_SAFE_INTEGER, `Replicas must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`)
        .test({
        name: 'isEmpty',
        test: (value) => value !== undefined,
        message: 'This field cannot be empty.',
    }),
});
const resourcesValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
    .oneOf([_import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].OpenShift, _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].Kubernetes, _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].KnativeService])
    .required();
const serverlessValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('resources', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].KnativeService,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        scaling: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            minpods: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Min Pods must be an Integer.'))
                .min(0, 'Min Pods must be greater than or equal to 0.')
                .max(Number.MAX_SAFE_INTEGER, `Min Pods must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`),
            maxpods: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Max Pods must be an Integer.'))
                .min(1, 'Max Pods must be greater than or equal to 1.')
                .max(Number.MAX_SAFE_INTEGER, `Max Pods must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`)
                .test({
                test(limit) {
                    const { minpods } = this.parent;
                    return limit ? limit >= minpods : true;
                },
                message: 'Max Pods must be greater than or equal to Min Pods.',
            }),
            concurrencytarget: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Concurrency Target must be an Integer.'))
                .min(0, 'Concurrency Target must be greater than or equal to 0.')
                .max(Number.MAX_SAFE_INTEGER, `Concurrency Target must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`),
            concurrencylimit: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Concurrency Limit must be an Integer.'))
                .min(0, 'Concurrency Limit must be greater than or equal to 0.')
                .max(Number.MAX_SAFE_INTEGER, `Concurrency Limit must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`),
        }),
    }),
});
const routeValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    secure: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
    tls: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('secure', {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            termination: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Please select a termination type.'),
        }),
    }),
    hostname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(hostnameRegex, {
        message: 'Hostname must consist of lower-case letters, numbers, periods, and hyphens. It must start and end with a letter or number.',
        excludeEmptyString: true,
    })
        .max(253, 'Cannot be longer than 253 characters.'),
    path: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(pathRegex, { message: 'Path must start with /.', excludeEmptyString: true }),
    unknownTargetPort: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(/^\d+$/, { message: 'Port must be an Integer.', excludeEmptyString: true }),
});
const limitsValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    cpu: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        request: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((request) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](request) ? undefined : request))
            .min(0, 'Request must be greater than or equal to 0.')
            .test({
            test(request) {
                const { requestUnit, limit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`) <=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`));
                }
                return true;
            },
            message: 'CPU request must be less than or equal to limit.',
        }),
        requestUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be millicores or cores.').ensure(),
        limitUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be millicores or cores.').ensure(),
        limit: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((limit) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](limit) ? undefined : limit))
            .min(0, 'Limit must be greater than or equal to 0.')
            .test({
            test(limit) {
                const { request, requestUnit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`) >=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`));
                }
                return true;
            },
            message: 'CPU limit must be greater than or equal to request.',
        }),
    }),
    memory: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        request: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((request) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](request) ? undefined : request))
            .min(0, 'Request must be greater than or equal to 0.')
            .test({
            test(request) {
                const { requestUnit, limit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`) <=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`));
                }
                return true;
            },
            message: 'Memory request must be less than or equal to limit.',
        }),
        requestUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be Mi or Gi.'),
        limit: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((limit) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](limit) ? undefined : limit))
            .min(0, 'Limit must be greater than or equal to 0.')
            .test({
            test(limit) {
                const { request, requestUnit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`) <=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`));
                }
                return true;
            },
            message: 'Memory limit must be greater than or equal to request.',
        }),
        limitUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be Mi or Gi.'),
    }),
});
const imageValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('build', {
    is: (build) => build.strategy !== 'Docker',
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        selected: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        tag: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    }),
});
const gitValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    url: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .max(2000, 'Please enter a URL that is less then 2000 characters.')
        .matches(gitUrlRegex, 'Invalid Git URL.')
        .required('Required'),
    type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('showGitType', {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('We failed to detect the git type. Please choose a git type.'),
    }),
    showGitType: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
});
const dockerValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('build', {
    is: (build) => build.strategy === 'Docker',
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        containerPort: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Container port should be an Integer')),
    }),
});
const buildValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    strategy: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
});
const searchTermValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required');
const isiValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    image: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().required('Required'),
    tag: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    status: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
});


/***/ }),

/***/ "./packages/dev-console/src/utils/yup-validation-util.ts":
/*!***************************************************************!*\
  !*** ./packages/dev-console/src/utils/yup-validation-util.ts ***!
  \***************************************************************/
/*! exports provided: isInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
const isInteger = (message) => ({
    test(value) {
        return value == null || Number.isInteger(value);
    },
    message,
});


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDetails.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDetails.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _status_host_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../status/host-status */ "./packages/metal3-plugin/src/status/host-status.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _constants_bare_metal_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/bare-metal-host */ "./packages/metal3-plugin/src/constants/bare-metal-host.ts");
/* harmony import */ var _MachineLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MachineLink */ "./packages/metal3-plugin/src/components/baremetal-hosts/MachineLink.tsx");
/* harmony import */ var _BareMetalHostPowerStatusIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BareMetalHostPowerStatusIcon */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostPowerStatusIcon.tsx");
/* harmony import */ var _BareMetalHostStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalHostStatus */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostStatus.tsx");
/* harmony import */ var _BareMetalHostSecondaryStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BareMetalHostSecondaryStatus */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostSecondaryStatus.tsx");














const BareMetalHostDetails = ({ obj: host, machines, nodes, nodeMaintenances, }) => {
    const { creationTimestamp } = host.metadata;
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getNamespace"])(host);
    const nics = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostNICs"])(host);
    const ips = nics.map((nic) => nic.ip).join(', ');
    const machineName = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostMachineName"])(host);
    const machine = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostMachine"])(host, machines);
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getMachineNodeName"])(machine);
    const node = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getMachineNode"])(machine, nodes);
    const role = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getMachineRole"])(machine);
    const RAMGB = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["humanizeDecimalBytes"])(Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostRAMMiB"])(host) * 2 ** 20).string;
    const totalStorageCapacity = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["humanizeDecimalBytes"])(Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostTotalStorageCapacity"])(host)).string;
    const description = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostDescription"])(host);
    const powerStatus = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostPowerStatus"])(host);
    const provisioningState = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostProvisioningState"])(host);
    const { count: CPUCount, model: CPUModel } = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostCPU"])(host);
    const { manufacturer, productName, serialNumber } = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostVendorInfo"])(host);
    const bios = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostBios"])(host);
    const nodeMaintenance = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["findNodeMaintenance"])(nodeMaintenances, nodeName);
    const status = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_7__["getHostStatus"])({ host, machine, node, nodeMaintenance });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Bare Metal Host Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12 col-sm-6", id: "name-description-column" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getName"])(host)),
                    description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Description"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, description))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Host Addresses"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyList"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "Management" }, Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostBMCAddress"])(host)),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "NICs" }, ips),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "Boot Interface MAC" }, Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostBootMACAddress"])(host)))),
                    machineName && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Machine"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MachineLink__WEBPACK_IMPORTED_MODULE_10__["default"], { host: host })))),
                    nodeName && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Node"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_5__["NodeModel"]), name: nodeName, namespace: namespace, title: nodeName })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Created at"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: creationTimestamp })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12 col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostStatus__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, status, { nodeMaintenance: nodeMaintenance, host: host }))),
                    !_constants_bare_metal_host__WEBPACK_IMPORTED_MODULE_9__["HOST_REGISTERING_STATES"].includes(provisioningState) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Power Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["StatusIconAndText"], { title: powerStatus, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostPowerStatusIcon__WEBPACK_IMPORTED_MODULE_11__["default"], { powerStatus: powerStatus }) }),
                            Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["isHostScheduledForRestart"])(host) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["StatusIconAndText"], { title: _BareMetalHostSecondaryStatus__WEBPACK_IMPORTED_MODULE_13__["HOST_SCHEDULED_FOR_RESTART"], icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["RebootingIcon"], null) }))))),
                    role && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Role"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, role))),
                    (manufacturer || productName) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Model"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_1__["filter"]([manufacturer, productName]).join(', ')))),
                    bios && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Bios"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyList"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "Version" }, bios.version),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "Vendor" }, bios.vendor),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "Date" }, bios.date))))),
                    serialNumber && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Serial Number"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serialNumber))),
                    lodash__WEBPACK_IMPORTED_MODULE_1__["get"](host, 'status.hardware') && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Hardware"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyList"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "CPU" },
                                    CPUCount,
                                    "x ",
                                    CPUModel),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "RAM" }, RAMGB),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DetailPropertyListItem"], { title: "Storage" }, totalStorageCapacity))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostDetails);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDetailsPage.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDetailsPage.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _dashboard_BareMetalHostDashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/BareMetalHostDashboard */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboard.tsx");
/* harmony import */ var _BareMetalHostNICs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BareMetalHostNICs */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostNICs.tsx");
/* harmony import */ var _host_menu_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./host-menu-actions */ "./packages/metal3-plugin/src/components/baremetal-hosts/host-menu-actions.tsx");
/* harmony import */ var _BareMetalHostDisks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BareMetalHostDisks */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDisks.tsx");
/* harmony import */ var _BareMetalHostDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalHostDetails */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDetails.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");














const BareMetalHostDetailsPage = (props) => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_6__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_13__["NODE_MAINTENANCE_FLAG"]);
    const resources = [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]),
            namespaced: true,
            isList: true,
            prop: 'machines',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineSetModel"]),
            namespaced: true,
            isList: true,
            prop: 'machineSets',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"].kind,
            namespaced: false,
            isList: true,
            prop: 'nodes',
        },
    ];
    if (hasNodeMaintenanceCapability) {
        resources.push({
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["NodeMaintenanceModel"]),
            namespaced: false,
            isList: true,
            prop: 'nodeMaintenances',
            optional: true,
        });
    }
    const nicsPage = {
        href: 'nics',
        name: 'Network Interfaces',
        component: _BareMetalHostNICs__WEBPACK_IMPORTED_MODULE_9__["default"],
    };
    const disksPage = {
        href: 'disks',
        name: 'Disks',
        component: _BareMetalHostDisks__WEBPACK_IMPORTED_MODULE_11__["default"],
    };
    const dashboardPage = {
        href: '',
        name: 'Overview',
        component: _dashboard_BareMetalHostDashboard__WEBPACK_IMPORTED_MODULE_8__["default"],
    };
    const detailsPage = {
        href: 'details',
        name: 'Details',
        component: _BareMetalHostDetails__WEBPACK_IMPORTED_MODULE_12__["default"],
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["DetailsPage"], Object.assign({}, props, { pagesFor: () => [
            dashboardPage,
            detailsPage,
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["navFactory"].editYaml(),
            nicsPage,
            disksPage,
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["navFactory"].events(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_5__["ResourceEventStream"]),
        ], kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["BareMetalHostModel"]), resources: resources, menuActions: _host_menu_actions__WEBPACK_IMPORTED_MODULE_10__["menuActionsCreator"], customData: { hasNodeMaintenanceCapability } })));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostDetailsPage);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDisks.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDisks.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");





const DisksTableHeader = () => [
    { title: 'Name', sortField: 'name', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Size', sortField: 'sizeBytes', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Type', sortField: 'rotational', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Model', sortField: 'model', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Serial Number', sortField: 'serialNumber', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Vendor', sortField: 'vendor', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'HCTL', sortField: 'hctl', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
];
const DisksTableRow = ({ obj, index, key, style }) => {
    const { hctl, model, name, rotational, serialNumber, sizeBytes, vendor } = obj;
    const { string: size } = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["humanizeDecimalBytes"])(sizeBytes);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableRow"], { id: name, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, size),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, rotational ? 'Rotational' : 'SSD'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, model),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, serialNumber),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, vendor),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, hctl)));
};
const BareMetalHostDisks = ({ obj: host, loadError }) => {
    const disks = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getHostStorage"])(host);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["Table"], { data: disks, "aria-label": "Bare Metal Host Disks", Header: DisksTableHeader, Row: DisksTableRow, loaded: !!host, loadError: loadError }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostDisks);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostNICs.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostNICs.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");





const NICsTableHeader = () => [
    { title: 'Name', sortField: 'name', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'Model', sortField: 'model', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'PXE', sortField: 'pxe', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'IP', sortField: 'ip', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'Speed', sortField: 'speedGbps', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'MAC Address', sortField: 'mac', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'VLAN ID', sortField: 'vlanId', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
];
const NICsTableRow = ({ obj: nic, index, key, style }) => {
    const { ip, mac, model, name, pxe, speedGbps, vlanId } = nic;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: ip, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, model),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, pxe ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OutlinedCheckSquareIcon"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OutlinedSquareIcon"], null)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, ip),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null,
            speedGbps,
            " Gbps"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, mac),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, vlanId)));
};
const BareMetalHostNICs = ({ obj: host, loadError }) => {
    const nics = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getHostNICs"])(host);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], { data: nics, "aria-label": "Bare Metal Host NICs", Header: NICsTableHeader, Row: NICsTableRow, loaded: !!host, loadError: loadError }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostNICs);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostPowerStatusIcon.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostPowerStatusIcon.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
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



const BareMetalHostPowerStatusIcon = (_a) => {
    var { powerStatus } = _a, iconProps = __rest(_a, ["powerStatus"]);
    if (powerStatus === _constants__WEBPACK_IMPORTED_MODULE_2__["HOST_POWER_STATUS_POWERED_ON"])
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OnRunningIcon"], Object.assign({}, iconProps));
    if (powerStatus === _constants__WEBPACK_IMPORTED_MODULE_2__["HOST_POWER_STATUS_POWERED_OFF"])
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OffIcon"], Object.assign({}, iconProps));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["InProgressIcon"], Object.assign({}, iconProps));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostPowerStatusIcon);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/MachineLink.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/MachineLink.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");






const MachineLink = ({ host }) => {
    const machineName = Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostMachineName"])(host);
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(host);
    if (machineName) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["MachineModel"]), name: machineName, namespace: namespace, title: machineName }));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"]);
};
/* harmony default export */ __webpack_exports__["default"] = (MachineLink);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHost.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHost.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_dev_console_src_components_import_validation_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/components/import/validation-schema */ "./packages/dev-console/src/components/import/validation-schema.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../k8s/requests/bare-metal-host */ "./packages/metal3-plugin/src/k8s/requests/bare-metal-host.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _selectors_secret__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../selectors/secret */ "./packages/metal3-plugin/src/selectors/secret.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils */ "./packages/metal3-plugin/src/utils/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../hooks */ "./packages/metal3-plugin/src/hooks/index.ts");
/* harmony import */ var _AddBareMetalHostForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AddBareMetalHostForm */ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHostForm.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/utils.ts");















const getInitialValues = (host, secret) => ({
    name: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_6__["getName"])(host) || '',
    BMCAddress: Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["getHostBMCAddress"])(host) || '',
    username: Object(_selectors_secret__WEBPACK_IMPORTED_MODULE_10__["getSecretUsername"])(secret) || '',
    password: Object(_selectors_secret__WEBPACK_IMPORTED_MODULE_10__["getSecretPassword"])(secret) || '',
    disableCertificateVerification: Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["getHostDisableCertificateVerification"])(host) || false,
    bootMACAddress: Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["getHostBootMACAddress"])(host) || '',
    online: Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["isHostOnline"])(host) || true,
    description: Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["getHostDescription"])(host) || '',
});
const AddBareMetalHost = ({ namespace, isEditing, hosts, host: resultHost, secret: resultSecret, }) => {
    const [reload, setReload] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const hostNames = lodash__WEBPACK_IMPORTED_MODULE_2__["flatMap"](Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getLoadedData"])(hosts, []), (host) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_6__["getName"])(host));
    const initialHost = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getLoadedData"])(resultHost);
    const initialSecret = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getLoadedData"])(resultSecret);
    const prevInitialHost = Object(_hooks__WEBPACK_IMPORTED_MODULE_12__["usePrevious"])(initialHost);
    const prevInitialSecret = Object(_hooks__WEBPACK_IMPORTED_MODULE_12__["usePrevious"])(initialSecret);
    const initialValues = getInitialValues(initialHost, initialSecret);
    const prevInitialValues = getInitialValues(prevInitialHost, prevInitialSecret);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (reload) {
            setReload(false);
        }
    }, [reload, setReload]);
    const showUpdated = isEditing &&
        prevInitialHost &&
        prevInitialSecret &&
        !lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](prevInitialValues, initialValues);
    const addHostValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_1__["mixed"]()
            .test('unique-name', 'Name "${value}" is already taken.', // eslint-disable-line no-template-curly-in-string
        (value) => !hostNames.includes(value))
            .concat(_console_dev_console_src_components_import_validation_schema__WEBPACK_IMPORTED_MODULE_5__["nameValidationSchema"]),
        BMCAddress: yup__WEBPACK_IMPORTED_MODULE_1__["string"]()
            .matches(_utils__WEBPACK_IMPORTED_MODULE_14__["BMC_ADDRESS_REGEX"], 'Value provided is not a valid BMC address')
            .required('Required.'),
        username: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Required.'),
        password: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Required.'),
        bootMACAddress: yup__WEBPACK_IMPORTED_MODULE_1__["string"]()
            .matches(_utils__WEBPACK_IMPORTED_MODULE_14__["MAC_REGEX"], 'Value provided is not a valid MAC Address.')
            .required('Required.'),
    });
    const handleSubmit = (values, actions) => {
        const opts = Object.assign(Object.assign({}, values), { namespace });
        const promise = isEditing
            ? Object(_k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["updateBareMetalHost"])(initialHost, initialSecret, opts)
            : Object(_k8s_requests_bare_metal_host__WEBPACK_IMPORTED_MODULE_7__["createBareMetalHost"])(opts);
        promise
            .then(() => {
            actions.setSubmitting(false);
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["BareMetalHostModel"], values.name, namespace));
        })
            .catch((error) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: error.message });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], { initialValues: initialValues, enableReinitialize: isEditing && (reload || !prevInitialHost || !prevInitialSecret), onSubmit: handleSubmit, onReset: () => setReload(true), validationSchema: addHostValidationSchema }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddBareMetalHostForm__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({}, props, { isEditing: isEditing, showUpdated: showUpdated })))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddBareMetalHost);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHostForm.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHostForm.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");





const AddBareMetalHostForm = ({ errors, handleSubmit, handleReset, status, isSubmitting, dirty, isEditing, showUpdated, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], { onSubmit: handleSubmit },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, "data-test-id": "add-baremetal-host-form-name-input", name: "name", label: "Name", placeholder: "openshift-worker", helpText: "Provide unique name for the new Bare Metal Host.", required: true, isDisabled: isEditing }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["TextAreaField"], { "data-test-id": "add-baremetal-host-form-description-input", name: "description", label: "Description" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, "data-test-id": "add-baremetal-host-form-bmc-address-input", name: "BMCAddress", label: "BMC Address", helpText: "The URL for communicating with the BMC (Baseboard Management Controller) on the host, based on the provider being used.", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["CheckboxField"], { "data-test-id": "add-baremetal-host-form-disable-certificate-verification-input", name: "disableCertificateVerification", label: "Disable Certificate Verification", helpText: "Disable verification of server certificates when using HTTPS to connect to the BMC. This is required when the server certificate is self-signed, but is insecure because it allows a man-in-the-middle to intercept the connection." }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, "data-test-id": "add-baremetal-host-form-username-input", name: "username", label: "BMC Username", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].password, "data-test-id": "add-baremetal-host-form-password-input", name: "password", label: "BMC Password", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInputTypes"].text, "data-test-id": "add-baremetal-host-form-boot-mac-address-input", name: "bootMACAddress", label: "Boot MAC Address", helpText: "The MAC address of the NIC connected to the network that will be used to provision the host.", required: true }),
    !isEditing && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["SwitchField"], { name: "online", "data-test-id": "add-baremetal-host-form-online-switch", label: "Power host on after creation" })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["FormFooter"], { isSubmitting: isSubmitting, handleReset: showUpdated && handleReset, handleCancel: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["history"].goBack, submitLabel: isEditing ? 'Save' : 'Create', errorMessage: status && status.submitError, disableSubmit: isSubmitting || !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), infoTitle: 'Bare Metal Host has been updated', infoMessage: 'Click reload to see the recent changes', showAlert: showUpdated })));
/* harmony default export */ __webpack_exports__["default"] = (AddBareMetalHostForm);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHostPage.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHostPage.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _k8s_objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../k8s/objects/bare-metal-host */ "./packages/metal3-plugin/src/k8s/objects/bare-metal-host.ts");
/* harmony import */ var _AddBareMetalHost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddBareMetalHost */ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/AddBareMetalHost.tsx");








const AddBareMetalHostPage = ({ match }) => {
    const { name, ns: namespace } = match.params;
    const resources = [];
    const isEditing = !!name;
    if (isEditing) {
        resources.push({
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["BareMetalHostModel"]),
            namespaced: true,
            namespace,
            name,
            isList: false,
            prop: 'host',
        }, {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"].kind,
            namespaced: true,
            namespace,
            name: Object(_k8s_objects_bare_metal_host__WEBPACK_IMPORTED_MODULE_6__["getSecretName"])(name),
            isList: false,
            prop: 'secret',
        });
    }
    else {
        resources.push({
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["BareMetalHostModel"]),
            namespaced: true,
            namespace,
            isList: true,
            prop: 'hosts',
        });
    }
    const title = `${isEditing ? 'Edit' : 'Add'} Bare Metal Host`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name" }, title)),
            !isEditing && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "Expand the hardware inventory by registering new Bare Metal Host.")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddBareMetalHost__WEBPACK_IMPORTED_MODULE_7__["default"], { namespace: namespace, isEditing: isEditing })))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddBareMetalHostPage);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/utils.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/add-baremetal-host/utils.ts ***!
  \*******************************************************************************************/
/*! exports provided: MAC_REGEX_COLON_DELIMITER, MAC_REGEX_DASH_DELIMITER, MAC_REGEX_PERIOD_DELIMITER, MAC_REGEX, IPV6_ADDRESS, URL_REGEX, BMC_ADDRESS_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_REGEX_COLON_DELIMITER", function() { return MAC_REGEX_COLON_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_REGEX_DASH_DELIMITER", function() { return MAC_REGEX_DASH_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_REGEX_PERIOD_DELIMITER", function() { return MAC_REGEX_PERIOD_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_REGEX", function() { return MAC_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPV6_ADDRESS", function() { return IPV6_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_REGEX", function() { return URL_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMC_ADDRESS_REGEX", function() { return BMC_ADDRESS_REGEX; });
const HEXCH_REGEX = '[0-9A-Fa-f]';
const MAC_REGEX_COLON_DELIMITER = new RegExp(`^((${HEXCH_REGEX}{2}[:]){19}${HEXCH_REGEX}{2})$|` + // 01:23:45:67:89:ab:cd:ef:00:00:01:23:45:67:89:ab:cd:ef:00:00
    `^((${HEXCH_REGEX}{2}[:]){7}${HEXCH_REGEX}{2})$|` + // 01:23:45:67:89:ab:cd:ef
    `^((${HEXCH_REGEX}{2}[:]){5}${HEXCH_REGEX}{2})$`);
const MAC_REGEX_DASH_DELIMITER = new RegExp(`^((${HEXCH_REGEX}{2}[-]){19}${HEXCH_REGEX}{2})$|` + // 01-23-45-67-89-ab-cd-ef-00-00-01-23-45-67-89-ab-cd-ef-00-00
    `^((${HEXCH_REGEX}{2}[-]){7}${HEXCH_REGEX}{2})$|` + // 01-23-45-67-89-ab-cd-ef
    `^((${HEXCH_REGEX}{2}[-]){5}${HEXCH_REGEX}{2})$`);
const MAC_REGEX_PERIOD_DELIMITER = new RegExp(`^((${HEXCH_REGEX}{4}.){9}${HEXCH_REGEX}{4})$|` + // 0123.4567.89ab.cdef.0000.0123.4567.89ab.cdef.0000
    `^((${HEXCH_REGEX}{4}.){3}${HEXCH_REGEX}{4})$|` + // 0123.4567.89ab.cdef
    `^((${HEXCH_REGEX}{4}.){2}${HEXCH_REGEX}{4})$`);
// Validates that the provided MAC address meets one of following formats supported by the golang ParseMAC function:
// IEEE 802 MAC-48, EUI-48, EUI-64, or a 20-octet IP over InfiniBand link-layer address
// https://golang.org/pkg/net/#ParseMAC
const MAC_REGEX = new RegExp(`^(${MAC_REGEX_COLON_DELIMITER.source}|${MAC_REGEX_DASH_DELIMITER.source}|${MAC_REGEX_PERIOD_DELIMITER.source})$`);
const IPV6_ADDRESS = new RegExp(/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/);
const URL_REGEX = new RegExp(/^([a-z][a-z0-9+\-.]*:(\/\/([a-z0-9\-._~%!$&'()*+,;=]+@)?([a-z0-9\-._~%]+|\[[a-f0-9:.]+\]|\[v[a-f0-9][a-z0-9\-._~%!$&'()*+,;=:]+\])(:[0-9]+)?(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)*\/?|(\/?[a-z0-9\-._~%!$&'()*+,;=:@]+(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)*\/?)?)|([a-z0-9\-._~%!$&'()*+,;=@]+(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)*\/?|(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)+\/?))(\?[a-z0-9\-._~%!$&'()*+,;=:@/?]*)?(#[a-z0-9\-._~%!$&'()*+,;=:@/?]*)?$/i);
const BMC_ADDRESS_REGEX = new RegExp(/^((ipmi|idrac|idrac\+http|idrac-virtualmedia|irmc|redfish|redfish\+http|redfish-virtualmedia|ilo5-virtualmedia|https?|ftp):(\/\/([a-z0-9\-._~%!$&'()*+,;=]+@)?([a-z0-9\-._~%]+|\[[a-f0-9:.]+\]|\[v[a-f0-9][a-z0-9\-._~%!$&'()*+,;=:]+\])(:[0-9]+)?(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)*\/?|(\/?[a-z0-9\-._~%!$&'()*+,;=:@]+(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)*\/?)?)|([a-z0-9\-._~%!$&'()*+,;=@]+(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)*\/?|(\/[a-z0-9\-._~%!$&'()*+,;=:@]+)+\/?))(\?[a-z0-9\-._~%!$&'()*+,;=:@/?]*)?(#[a-z0-9\-._~%!$&'()*+,;=:@/?]*)?$/i);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboard.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboard.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/Dashboard */ "./packages/console-shared/src/components/dashboard/Dashboard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/DashboardGrid */ "./packages/console-shared/src/components/dashboard/DashboardGrid.tsx");
/* harmony import */ var _console_shared_src_selectors_machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/selectors/machine */ "./packages/console-shared/src/selectors/machine.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BareMetalHostDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx");
/* harmony import */ var _StatusCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StatusCard */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/StatusCard.tsx");
/* harmony import */ var _UtilizationCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UtilizationCard */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/UtilizationCard.tsx");
/* harmony import */ var _EventsCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventsCard */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/EventsCard.tsx");
/* harmony import */ var _InventoryCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InventoryCard */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/InventoryCard.tsx");
/* harmony import */ var _DetailsCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DetailsCard */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/DetailsCard.tsx");











const BareMetalHostDashboard = ({ obj, machines, nodes, loaded, }) => {
    const machine = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getHostMachine"])(obj, machines);
    const node = Object(_console_shared_src_selectors_machine__WEBPACK_IMPORTED_MODULE_3__["getMachineNode"])(machine, nodes);
    const context = {
        obj,
        machine,
        node,
        loaded,
    };
    const mainCards = [{ Card: _StatusCard__WEBPACK_IMPORTED_MODULE_6__["default"] }, { Card: _UtilizationCard__WEBPACK_IMPORTED_MODULE_7__["default"] }];
    const leftCards = [{ Card: _DetailsCard__WEBPACK_IMPORTED_MODULE_10__["default"] }, { Card: _InventoryCard__WEBPACK_IMPORTED_MODULE_9__["default"] }];
    const rightCards = [{ Card: _EventsCard__WEBPACK_IMPORTED_MODULE_8__["default"] }];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_5__["BareMetalHostDashboardContext"].Provider, { value: context },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_2__["default"], { mainCards: mainCards, leftCards: leftCards, rightCards: rightCards }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostDashboard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: BareMetalHostDashboardContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BareMetalHostDashboardContext", function() { return BareMetalHostDashboardContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BareMetalHostDashboardContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/DetailsCard.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/DetailsCard.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailsBody */ "./packages/console-shared/src/components/dashboard/details-card/DetailsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailItem */ "./packages/console-shared/src/components/dashboard/details-card/DetailItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _NodeLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NodeLink */ "./packages/metal3-plugin/src/components/baremetal-hosts/NodeLink.tsx");
/* harmony import */ var _BareMetalHostRole__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../BareMetalHostRole */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostRole.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BareMetalHostDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx");















const DetailsCard = () => {
    const { obj, machine, node } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_14__["BareMetalHostDashboardContext"]);
    const hostName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getName"])(obj);
    const nodeCell = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeLink__WEBPACK_IMPORTED_MODULE_11__["default"], { nodeName: Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getName"])(node) });
    const hostRole = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostRole__WEBPACK_IMPORTED_MODULE_12__["default"], { machine: machine, node: node });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Details"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostModel"], Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getName"])(obj), Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getNamespace"])(obj))}/details` }, "View all")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "Host name", isLoading: false, error: null }, hostName),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "Role", isLoading: false, error: null }, hostRole),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "Node", isLoading: false, error: null }, nodeCell)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__["withDashboardResources"])(DetailsCard));


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/EventsCard.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/EventsCard.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityBody */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityItem */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityItem.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _status_host_status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../status/host-status */ "./packages/metal3-plugin/src/status/host-status.ts");
/* harmony import */ var _BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BareMetalHostDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx");
















const eventsResource = { isList: true, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["EventModel"].kind, prop: 'events' };
const matchesInvolvedObject = (kind, name, namespace, event) => name &&
    lodash__WEBPACK_IMPORTED_MODULE_1__["isMatch"](event.involvedObject, {
        kind,
        name,
        namespace,
    });
const hostEventsFilter = (host, machine, event) => matchesInvolvedObject(_models__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostModel"].kind, Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getName"])(host), Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getNamespace"])(host), event) ||
    matchesInvolvedObject(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["MachineModel"].kind, Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getName"])(machine), Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getNamespace"])(machine), event) ||
    matchesInvolvedObject(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["NodeModel"].kind, Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getMachineNodeName"])(machine), null, event);
const getHostEventsFilter = (host, machine) => lodash__WEBPACK_IMPORTED_MODULE_1__["partial"](hostEventsFilter, host, machine);
const EventsCard = ({ watchK8sResource, stopWatchK8sResource, resources, }) => {
    const { obj, machine } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_15__["BareMetalHostDashboardContext"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(eventsResource);
        return () => {
            stopWatchK8sResource(eventsResource);
        };
    }, [watchK8sResource, stopWatchK8sResource]);
    const filter = getHostEventsFilter(obj, machine);
    const inProgress = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_14__["isHostInProgressState"])(obj);
    const hostStatus = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_14__["getBareMetalHostStatus"])(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_4__["default"], { gradient: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Activity"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostModel"], Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getName"])(obj), Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getNamespace"])(obj))}/events` }, "View events")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-activity-card__ongoing-title" }, "Ongoing"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-activity-card__ongoing-body" }, inProgress ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_9__["Activity"], { timestamp: null },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                        hostStatus.title,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: _models__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostModel"].kind, name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getName"])(obj), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_12__["getNamespace"])(obj) })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_9__["Activity"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" }, "There are no ongoing activities.")))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_9__["RecentEventsBody"], { events: resources.events, filter: filter })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_11__["withDashboardResources"])(EventsCard));


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/InventoryCard.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/InventoryCard.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/InventoryItem */ "./packages/console-shared/src/components/dashboard/inventory-card/InventoryItem.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/utils */ "./packages/console-shared/src/components/dashboard/inventory-card/utils.ts");
/* harmony import */ var _console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BareMetalHostDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx");















const PodInventoryItem = () => {
    const { node, loaded } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_14__["BareMetalHostDashboardContext"]);
    const nodeName = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_7__["getName"])(node);
    const podResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => loaded && nodeName
        ? {
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PodModel"].kind,
            fieldSelector: `spec.nodeName=${nodeName}`,
        }
        : null, [nodeName, loaded]);
    const [pods, podsLoaded, podsError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_10__["useK8sWatchResource"])(podResource);
    if (!nodeName || !loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], { title: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PodModel"].label, count: 0, isLoading: !loaded });
    }
    const basePath = `${Object(_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NodeModel"], nodeName)}/pods`;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["ResourceInventoryItem"], { resources: pods, basePath: basePath, mapper: _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_8__["getPodStatusGroups"], kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PodModel"], isLoading: !podsLoaded, error: !!podsError });
};
const InventoryCard = () => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_14__["BareMetalHostDashboardContext"]);
    const namespace = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(obj);
    const hostName = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_7__["getName"])(obj);
    const NICTitleComponent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ children }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], { to: `${Object(_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostModel"], hostName, namespace)}/nics` }, children), [hostName, namespace]);
    const DiskTitleComponent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ children }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], { to: `${Object(_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostModel"], hostName, namespace)}/disks` }, children), [hostName, namespace]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Inventory")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PodInventoryItem, null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "Disk", isLoading: !obj, count: Object(_selectors__WEBPACK_IMPORTED_MODULE_12__["getHostStorage"])(obj).length, TitleComponent: DiskTitleComponent }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "NIC", isLoading: !obj, count: Object(_selectors__WEBPACK_IMPORTED_MODULE_12__["getHostNICs"])(obj).length, TitleComponent: NICTitleComponent }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], { title: "CPU", isLoading: !obj, count: Object(_selectors__WEBPACK_IMPORTED_MODULE_12__["getHostCPU"])(obj).count }))));
};
/* harmony default export */ __webpack_exports__["default"] = (InventoryCard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/StatusCard.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/StatusCard.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthBody */ "./packages/console-shared/src/components/dashboard/status-card/HealthBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthItem */ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertsBody */ "./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertItem */ "./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx");
/* harmony import */ var _console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/components/monitoring */ "./public/components/monitoring.tsx");
/* harmony import */ var _status_host_status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../status/host-status */ "./packages/metal3-plugin/src/status/host-status.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
/* harmony import */ var _BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BareMetalHostDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx");

















const getHostHealthState = (obj) => {
    const { status, title } = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_14__["getBareMetalHostStatus"])(obj);
    let state = _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__["HealthState"].UNKNOWN;
    if (_constants__WEBPACK_IMPORTED_MODULE_15__["HOST_SUCCESS_STATES"].includes(status)) {
        state = _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__["HealthState"].OK;
    }
    if (_constants__WEBPACK_IMPORTED_MODULE_15__["HOST_ERROR_STATES"].includes(status)) {
        state = _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__["HealthState"].ERROR;
    }
    if (_constants__WEBPACK_IMPORTED_MODULE_15__["HOST_PROGRESS_STATES"].includes(status)) {
        state = _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__["HealthState"].PROGRESS;
    }
    return {
        title,
        state,
    };
};
const getHostHardwareHealthState = (obj) => {
    const { status, title } = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_14__["getBareMetalHostStatus"])(obj);
    return _constants__WEBPACK_IMPORTED_MODULE_15__["HOST_HARDWARE_ERROR_STATES"].includes(status)
        ? {
            state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__["HealthState"].ERROR,
            title,
        }
        : {
            title: '',
            state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_10__["HealthState"].OK,
        };
};
const filterAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](alert, 'labels.hwalert'));
const HealthCard = ({ watchAlerts, stopWatchAlerts, notificationAlerts, }) => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_16__["BareMetalHostDashboardContext"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchAlerts();
        return () => stopWatchAlerts();
    }, [watchAlerts, stopWatchAlerts]);
    const health = getHostHealthState(obj);
    const hwHealth = getHostHardwareHealthState(obj);
    const { data, loaded, loadError } = notificationAlerts || {};
    const alerts = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => filterAlerts(data), [data]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_4__["default"], { gradient: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Status")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_8__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], { className: "co-overview-status__health", gutter: "md" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_9__["default"], { title: "Status", state: health.state, details: health.title })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_9__["default"], { title: "Hardware", state: hwHealth.state, details: hwHealth.title })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_11__["default"], { error: !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](loadError) }, loaded && alerts.length !== 0
                ? alerts.map((alert) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_12__["default"], { key: Object(_console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_13__["alertURL"])(alert, alert.rule.id), alert: alert })))
                : null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_3__["withDashboardResources"])(HealthCard));


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/UtilizationCard.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/UtilizationCard.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/dropdown */ "./public/components/utils/dropdown.jsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/UtilizationBody */ "./packages/console-shared/src/components/dashboard/utilization-card/UtilizationBody.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/TopConsumerPopover */ "./packages/console-shared/src/components/dashboard/utilization-card/TopConsumerPopover.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/graph-helper/data-utils */ "./packages/console-shared/src/graph-helper/data-utils.ts");
/* harmony import */ var _console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/dashboard/dashboards-page/cluster-dashboard/utilization-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utilization-card.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared/src/components/dashboard/duration-hook */ "./packages/console-shared/src/components/dashboard/duration-hook.ts");
/* harmony import */ var _BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BareMetalHostDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalHostDashboardContext.tsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./queries */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/queries.ts");















const UtilizationCard = () => {
    const [timestamps, setTimestamps] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [duration, setDuration] = Object(_console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_12__["useMetricDuration"])();
    const { machine } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalHostDashboardContext__WEBPACK_IMPORTED_MODULE_13__["BareMetalHostDashboardContext"]);
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getMachineNodeName"])(machine);
    const queries = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_queries__WEBPACK_IMPORTED_MODULE_14__["getUtilizationQueries"])(nodeName), [nodeName]);
    const multilineQueries = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_queries__WEBPACK_IMPORTED_MODULE_14__["getMultilineUtilizationQueries"])(nodeName), [
        nodeName,
    ]);
    const humanizePods = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((v) => ({
        string: `${v}`,
        value: v,
        unit: '',
    }), []);
    const cpuPopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => {
        const topConsumerQueries = Object(_queries__WEBPACK_IMPORTED_MODULE_14__["getTopConsumerQueries"])(nodeName);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_7__["default"], { title: "CPU", current: current, humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeCpuCores"], consumers: [
                {
                    query: topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].PROJECTS_BY_CPU],
                    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"],
                    metric: 'namespace',
                },
                {
                    query: topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].PODS_BY_CPU],
                    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PodModel"],
                    metric: 'pod',
                },
            ] }));
    }, [nodeName]);
    const memPopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => {
        const topConsumerQueries = Object(_queries__WEBPACK_IMPORTED_MODULE_14__["getTopConsumerQueries"])(nodeName);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_7__["default"], { title: "Memory", current: current, humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeBinaryBytes"], consumers: [
                {
                    query: topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].PROJECTS_BY_MEMORY],
                    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"],
                    metric: 'namespace',
                },
                {
                    query: topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].PODS_BY_MEMORY],
                    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PodModel"],
                    metric: 'pod',
                },
            ] }));
    }, [nodeName]);
    const storagePopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => {
        const topConsumerQueries = Object(_queries__WEBPACK_IMPORTED_MODULE_14__["getTopConsumerQueries"])(nodeName);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_7__["default"], { title: "Disk Usage", current: current, humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeBinaryBytes"], consumers: [
                {
                    query: topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].PROJECTS_BY_STORAGE],
                    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"],
                    metric: 'namespace',
                },
                {
                    query: topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].PODS_BY_STORAGE],
                    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PodModel"],
                    metric: 'pod',
                },
            ] }));
    }, [nodeName]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Utilization"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_dropdown__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], { items: _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_12__["Duration"], onChange: setDuration, selectedKey: duration, title: duration })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_5__["default"], { timestamps: timestamps },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_11__["PrometheusUtilizationItem"], { title: "CPU", utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].CPU_UTILIZATION].utilization, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeCpuCores"], TopConsumerPopover: cpuPopover, duration: duration, setTimestamps: setTimestamps }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_11__["PrometheusUtilizationItem"], { title: "Memory", utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].MEMORY_UTILIZATION].utilization, totalQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].MEMORY_UTILIZATION].total, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeBinaryBytes"], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_10__["ByteDataTypes"].BinaryBytes, TopConsumerPopover: memPopover, duration: duration }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_11__["PrometheusUtilizationItem"], { title: "Filesystem", utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].STORAGE_UTILIZATION].utilization, totalQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].STORAGE_UTILIZATION].total, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeBinaryBytes"], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_10__["ByteDataTypes"].BinaryBytes, TopConsumerPopover: storagePopover, duration: duration }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_11__["PrometheusMultilineUtilizationItem"], { title: "Network Transfer", queries: multilineQueries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].NETWORK_UTILIZATION], humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["humanizeDecimalBytesPerSec"], duration: duration }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_11__["PrometheusUtilizationItem"], { title: "Pod count", utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_14__["HostQuery"].NUMBER_OF_PODS].utilization, humanizeValue: humanizePods, duration: duration }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UtilizationCard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/queries.ts":
/*!************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/queries.ts ***!
  \************************************************************************************/
/*! exports provided: HostQuery, getUtilizationQueries, getMultilineUtilizationQueries, getHostQueryResultError, getTopConsumerQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostQuery", function() { return HostQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUtilizationQueries", function() { return getUtilizationQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultilineUtilizationQueries", function() { return getMultilineUtilizationQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostQueryResultError", function() { return getHostQueryResultError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopConsumerQueries", function() { return getTopConsumerQueries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

var HostQuery;
(function (HostQuery) {
    HostQuery["CPU_UTILIZATION"] = "CPU_UTILIZATION";
    HostQuery["MEMORY_UTILIZATION"] = "MEMORY_UTILIZATION";
    HostQuery["MEMORY_TOTAL"] = "MEMORY_TOTAL";
    HostQuery["STORAGE_UTILIZATION"] = "STORAGE_UTILIZATION";
    HostQuery["STORAGE_TOTAL"] = "STORAGE_TOTAL";
    HostQuery["NETWORK_IN_UTILIZATION"] = "NETWORK_IN_UTILIZATION";
    HostQuery["NETWORK_OUT_UTILIZATION"] = "NETWORK_OUT_UTILIZATION";
    HostQuery["NETWORK_UTILIZATION"] = "NETWORK_UTILIZATION";
    HostQuery["NUMBER_OF_PODS"] = "NUMBER_OF_PODS";
    HostQuery["NUMBER_OF_FANS"] = "NUMBER_OF_FANS";
    HostQuery["NUMBER_OF_PSUS"] = "NUMBER_OF_PSUS";
    // popover queries
    HostQuery["PODS_BY_CPU"] = "PODS_BY_CPU";
    HostQuery["PODS_BY_MEMORY"] = "PODS_BY_MEMORY";
    HostQuery["PODS_BY_STORAGE"] = "PODS_BY_STORAGE";
    HostQuery["PROJECTS_BY_CPU"] = "PROJECTS_BY_CPU";
    HostQuery["PROJECTS_BY_MEMORY"] = "PROJECTS_BY_MEMORY";
    HostQuery["PROJECTS_BY_STORAGE"] = "PROJECTS_BY_STORAGE";
})(HostQuery || (HostQuery = {}));
const nodeQueriesByNodeName = {
    [HostQuery.CPU_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_cpu:rate:sum{instance=~'<%= node %>'}`),
    [HostQuery.MEMORY_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`node_memory_Active_bytes{instance=~'<%= node %>'}`),
    [HostQuery.MEMORY_TOTAL]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`node_memory_MemTotal_bytes{instance=~'<%= node %>'}`),
    [HostQuery.STORAGE_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_filesystem_usage:sum{instance=~'<%= node %>'}`),
    [HostQuery.STORAGE_TOTAL]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(node_filesystem_size_bytes{instance=~'<%= node %>'})`),
    [HostQuery.NETWORK_IN_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_network_receive_bytes:rate:sum{instance=~'<%= node %>'}`),
    [HostQuery.NETWORK_OUT_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_network_transmit_bytes:rate:sum{instance=~'<%= node %>'}`),
    [HostQuery.NUMBER_OF_PODS]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`kubelet_running_pod_count{node='<%= node %>'}`),
    [HostQuery.PODS_BY_CPU]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_cpu_usage_seconds_total{node="<%= node %>",container_name="",pod!=""}[5m])) BY (pod, namespace)))`),
    [HostQuery.PROJECTS_BY_CPU]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_cpu_usage_seconds_total{node="<%= node %>",container_name="",pod!=""}[5m])) BY (namespace)))`),
    [HostQuery.PODS_BY_MEMORY]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(container_memory_working_set_bytes{node="<%= node %>",container="",pod!=""}) BY (pod, namespace)))`),
    [HostQuery.PROJECTS_BY_MEMORY]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(container_memory_working_set_bytes{node="<%= node %>",container="",pod!=""}) BY (namespace)))`),
    [HostQuery.PODS_BY_STORAGE]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(avg by (pod, namespace)(irate(container_fs_io_time_seconds_total{node="<%= node %>",container="POD", pod!=""}[1m]))))`),
    [HostQuery.PROJECTS_BY_STORAGE]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(avg by (namespace)(irate(container_fs_io_time_seconds_total{node="<%= node %>",container="POD", pod!=""}[1m]))))`),
};
// TODO(jtomasek): enable and use these once ironic-exporter is available
// const nodeQueriesByHostName = {
//   [HostQuery.NUMBER_OF_FANS]: _.template(`baremetal_fan_rpm`),
//   [HostQuery.NUMBER_OF_PSUS]: _.template(`baremetal_current`),
// };
const getQuery = (node, query) => query({ node });
const getUtilizationQueries = (nodeName) => ({
    [HostQuery.CPU_UTILIZATION]: {
        utilization: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.CPU_UTILIZATION]),
    },
    [HostQuery.MEMORY_UTILIZATION]: {
        utilization: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.MEMORY_UTILIZATION]),
        total: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.MEMORY_TOTAL]),
    },
    [HostQuery.STORAGE_UTILIZATION]: {
        utilization: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.STORAGE_UTILIZATION]),
        total: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.STORAGE_TOTAL]),
    },
    [HostQuery.NUMBER_OF_PODS]: {
        utilization: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.NUMBER_OF_PODS]),
    },
});
const getMultilineUtilizationQueries = (nodeName) => ({
    [HostQuery.NETWORK_UTILIZATION]: [
        {
            query: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.NETWORK_IN_UTILIZATION]),
            desc: 'In',
        },
        {
            query: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.NETWORK_OUT_UTILIZATION]),
            desc: 'Out',
        },
    ],
});
const getHostQueryResultError = (result) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, 'status', '') !== 'success';
const getTopConsumerQueries = (nodeName) => ({
    [HostQuery.PODS_BY_CPU]: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.PODS_BY_CPU]),
    [HostQuery.PROJECTS_BY_CPU]: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.PROJECTS_BY_CPU]),
    [HostQuery.PODS_BY_MEMORY]: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.PODS_BY_MEMORY]),
    [HostQuery.PROJECTS_BY_MEMORY]: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.PROJECTS_BY_MEMORY]),
    [HostQuery.PODS_BY_STORAGE]: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.PODS_BY_STORAGE]),
    [HostQuery.PROJECTS_BY_STORAGE]: getQuery(nodeName, nodeQueriesByNodeName[HostQuery.PROJECTS_BY_STORAGE]),
});


/***/ }),

/***/ "./packages/metal3-plugin/src/selectors/secret.ts":
/*!********************************************************!*\
  !*** ./packages/metal3-plugin/src/selectors/secret.ts ***!
  \********************************************************/
/*! exports provided: getSecretUsername, getSecretPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecretUsername", function() { return getSecretUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecretPassword", function() { return getSecretPassword; });
const getSecretUsername = (secret) => secret && secret.data && atob(secret.data.username);
const getSecretPassword = (secret) => secret && secret.data && atob(secret.data.password);


/***/ }),

/***/ "./packages/metal3-plugin/src/utils/index.ts":
/*!***************************************************!*\
  !*** ./packages/metal3-plugin/src/utils/index.ts ***!
  \***************************************************/
/*! exports provided: getLoadedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadedData", function() { return getLoadedData; });
const getLoadedData = (result, defaultValue = null) => (result && result.loaded && !result.loadError ? result.data : defaultValue);


/***/ })

}]);
//# sourceMappingURL=metal3-baremetalhost-2b3218c3ae0c22753ce8.js.map