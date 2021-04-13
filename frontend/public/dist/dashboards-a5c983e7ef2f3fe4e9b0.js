(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards"],{

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

/***/ "./packages/console-shared/src/components/dashboard/status-card/OperatorStatusBody.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/OperatorStatusBody.tsx ***!
  \*********************************************************************************************/
/*! exports provided: OperatorsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsSection", function() { return OperatorsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-utils */ "./packages/console-shared/src/components/dashboard/status-card/state-utils.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _operator_body_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operator-body.scss */ "./packages/console-shared/src/components/dashboard/status-card/operator-body.scss");
/* harmony import */ var _operator_body_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_operator_body_scss__WEBPACK_IMPORTED_MODULE_7__);








const OperatorsSection = ({ resources, getOperatorsWithStatuses, title, linkTo, rowLoader }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    const error = lodash__WEBPACK_IMPORTED_MODULE_1__["values"](resources).some(r => r.loadError);
    const operatorStatuses = getOperatorsWithStatuses(resources);
    const sortedOperatorStatuses = Object(_state_utils__WEBPACK_IMPORTED_MODULE_5__["getMostImportantStatuses"])(operatorStatuses).sort((a, b) => a.operators[0].metadata.name.localeCompare(b.operators[0].metadata.name));
    const operatorsHealthy = sortedOperatorStatuses.every(o => o.status.health === _states__WEBPACK_IMPORTED_MODULE_4__["HealthState"].OK);
    const RowLoading = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status__operator-skeleton" }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-popup__section" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-popup__row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-status-popup__text--bold" }, t('SINGLE:MSG_OVERVIEW_MAIN_CARDSTATUS_OPERATORS_1')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary" }, ` (${operatorStatuses.length} installed)`)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" }, t('SINGLE:MSG_OVERVIEW_MAIN_POPOVEROPERATOR_STATUS_1'))),
        error ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" }, t('SINGLE:MSG_OVERVIEW_MAIN_CARDSTATUS_1')) : !operatorsHealthy && sortedOperatorStatuses.map(operatorStatus => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], { key: operatorStatus.operators[0].metadata.uid, operatorStatus: operatorStatus, loader: rowLoader, LoadingComponent: RowLoading })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-popup__row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: linkTo }, t('SINGLE:MSG_OVERVIEW_MAIN_POPOVEROPERATOR_ALL_1')),
            !error && operatorsHealthy && operatorStatuses.length && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-popup__status" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" },
                    "All ",
                    operatorStatuses[0].status.title.toLowerCase()),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-popup__icon" }, operatorStatuses[0].status.icon))))));
};


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/status-card/operator-body.scss":
/*!*****************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/operator-body.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/console-shared/src/hooks/flag.ts":
/*!***************************************************!*\
  !*** ./packages/console-shared/src/hooks/flag.ts ***!
  \***************************************************/
/*! exports provided: useFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFlag", function() { return useFlag; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: FIXME missing exports due to out-of-sync @types/react-redux version

const useFlag = (flag) => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(({ FLAGS }) => FLAGS.get(flag));


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/activity-card.tsx":
/*!*****************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/activity-card.tsx ***!
  \*****************************************************************************************/
/*! exports provided: ActivityCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCard", function() { return ActivityCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityBody */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityBody.tsx");
/* harmony import */ var _console_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/plugin-sdk */ "./packages/console-plugin-sdk/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utils.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");














const eventsResource = { isList: true, kind: _models__WEBPACK_IMPORTED_MODULE_9__["EventModel"].kind, prop: 'events' };
const viewEvents = '/k8s/all-namespaces/events';
const RecentEvent = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__["withDashboardResources"])(({ watchK8sResource, stopWatchK8sResource, resources }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(eventsResource);
        return () => {
            stopWatchK8sResource(eventsResource);
        };
    }, [watchK8sResource, stopWatchK8sResource]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_10__["RecentEventsBody"], { events: resources.events, moreLink: viewEvents });
});
const mapStateToProps = ({ k8s }) => ({
    models: k8s.getIn(['RESOURCES', 'models']),
});
const OngoingActivity = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__["withDashboardResources"])(({ watchK8sResource, stopWatchK8sResource, resources, watchPrometheus, stopWatchPrometheusQuery, prometheusResults, models }) => {
    const resourceActivityExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__["useExtensions"])(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__["isDashboardsOverviewResourceActivity"]);
    const resourceActivities = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => resourceActivityExtensions.filter(e => !!models.get(e.properties.k8sResource.kind)), [resourceActivityExtensions, models]);
    const prometheusActivities = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__["useExtensions"])(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__["isDashboardsOverviewPrometheusActivity"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        resourceActivities.forEach((a, index) => {
            watchK8sResource(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["uniqueResource"])(a.properties.k8sResource, index));
        });
        prometheusActivities.forEach(a => a.properties.queries.forEach(q => watchPrometheus(q)));
        return () => {
            resourceActivities.forEach((a, index) => {
                stopWatchK8sResource(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["uniqueResource"])(a.properties.k8sResource, index));
            });
            prometheusActivities.forEach(a => a.properties.queries.forEach(stopWatchPrometheusQuery));
        };
    }, [watchK8sResource, stopWatchK8sResource, watchPrometheus, stopWatchPrometheusQuery, resourceActivities, prometheusActivities]);
    const allResourceActivities = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatten"](resourceActivities.map((a, index) => {
        const k8sResources = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](resources, [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["uniqueResource"])(a.properties.k8sResource, index).prop, 'data'], []);
        return k8sResources
            .filter(r => (a.properties.isActivity ? a.properties.isActivity(r) : true))
            .map(r => ({
            resource: r,
            timestamp: a.properties.getTimestamp ? a.properties.getTimestamp(r) : null,
            loader: a.properties.loader,
        }));
    })), [resourceActivities, resources]);
    const allPrometheusActivities = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => prometheusActivities
        .filter(a => {
        const queryResults = a.properties.queries.map(q => prometheusResults.getIn([q, 'data']));
        return a.properties.isActivity(queryResults);
    })
        .map(a => {
        const queryResults = a.properties.queries.map(q => prometheusResults.getIn([q, 'data']));
        return {
            loader: a.properties.loader,
            results: queryResults,
        };
    }), [prometheusActivities, prometheusResults]);
    const resourcesLoaded = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => resourceActivities.every((a, index) => {
        var _a, _b;
        const uniqueProp = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["uniqueResource"])(a.properties.k8sResource, index).prop;
        return ((_a = resources[uniqueProp]) === null || _a === void 0 ? void 0 : _a.loaded) || ((_b = resources[uniqueProp]) === null || _b === void 0 ? void 0 : _b.loadError);
    }), [resourceActivities, resources]);
    const queriesLoaded = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => prometheusActivities.every(a => a.properties.queries.every(q => prometheusResults.getIn([q, 'data']) || prometheusResults.getIn([q, 'loadError']))), [prometheusActivities, prometheusResults]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_10__["OngoingActivityBody"], { loaded: resourcesLoaded && queriesLoaded, resourceActivities: allResourceActivities, prometheusActivities: allPrometheusActivities });
}));
const ActivityCard = react__WEBPACK_IMPORTED_MODULE_0__["memo"](() => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__["default"], { gradient: true, "data-test-id": "activity-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, t('SINGLE:MSG_OVERVIEW_MAIN_CARDACTIVITY_TITLE_1')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: viewEvents }, t('SINGLE:MSG_OVERVIEW_MAIN_CARDACTIVITY_ALL_1'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "co-overview-dashboard__activity-body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OngoingActivity, null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RecentEvent, null)))));
});


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/cluster-dashboard.tsx":
/*!*********************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/cluster-dashboard.tsx ***!
  \*********************************************************************************************/
/*! exports provided: ClusterDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterDashboard", function() { return ClusterDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/Dashboard */ "./packages/console-shared/src/components/dashboard/Dashboard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/DashboardGrid */ "./packages/console-shared/src/components/dashboard/DashboardGrid.tsx");
/* harmony import */ var _status_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/status-card.tsx");
/* harmony import */ var _details_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/details-card.tsx");
/* harmony import */ var _inventory_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/inventory-card.tsx");
/* harmony import */ var _utilization_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilization-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utilization-card.tsx");
/* harmony import */ var _activity_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/activity-card.tsx");
/* harmony import */ var _utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/k8s-get-hook */ "./public/components/utils/k8s-get-hook.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./public/components/dashboard/dashboards-page/cluster-dashboard/context.ts");











const mainCards = [{ Card: _status_card__WEBPACK_IMPORTED_MODULE_3__["StatusCard"] }, { Card: _utilization_card__WEBPACK_IMPORTED_MODULE_6__["UtilizationCard"] }];
const leftCards = [{ Card: _details_card__WEBPACK_IMPORTED_MODULE_4__["DetailsCard"] }];
const rightCards = [{ Card: _inventory_card__WEBPACK_IMPORTED_MODULE_5__["InventoryCard"] }, { Card: _activity_card__WEBPACK_IMPORTED_MODULE_7__["ActivityCard"] }];
const ClusterDashboard = () => {
    const [infrastructure, infrastructureLoaded, infrastructureError] = Object(_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_8__["useK8sGet"])(_models__WEBPACK_IMPORTED_MODULE_9__["InfrastructureModel"], 'cluster');
    const context = {
        infrastructure,
        infrastructureLoaded,
        infrastructureError,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context__WEBPACK_IMPORTED_MODULE_10__["ClusterDashboardContext"].Provider, { value: context },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_2__["default"], { mainCards: mainCards, leftCards: leftCards, rightCards: rightCards }))));
};


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/context.ts":
/*!**********************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/context.ts ***!
  \**********************************************************************************/
/*! exports provided: ClusterDashboardContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterDashboardContext", function() { return ClusterDashboardContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ClusterDashboardContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    infrastructureLoaded: true,
    infrastructureError: null,
});


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/details-card.scss":
/*!*****************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/details-card.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/details-card.tsx":
/*!****************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/details-card.tsx ***!
  \****************************************************************************************/
/*! exports provided: DetailsCardPopup, DetailsCard_, DetailsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCardPopup", function() { return DetailsCardPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCard_", function() { return DetailsCard_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCard", function() { return DetailsCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailsBody */ "./packages/console-shared/src/components/dashboard/details-card/DetailsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailItem */ "./packages/console-shared/src/components/dashboard/details-card/DetailItem.tsx");
/* harmony import */ var _with_dashboard_resources__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../modals */ "./public/components/modals/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./context */ "./public/components/dashboard/dashboards-page/cluster-dashboard/context.ts");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var _actions_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _details_card_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./details-card.scss */ "./public/components/dashboard/dashboards-page/cluster-dashboard/details-card.scss");
/* harmony import */ var _details_card_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_details_card_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _frontend_packages_console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../frontend/packages/console-shared/src/components/status/icons */ "./packages/console-shared/src/components/status/icons.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




























const ClusterVersion = ({ cv }) => {
    const desiredVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getDesiredClusterVersion"])(cv);
    const lastVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getLastCompletedUpdate"])(cv);
    const status = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getClusterUpdateStatus"])(cv);
    switch (status) {
        case _module_k8s__WEBPACK_IMPORTED_MODULE_13__["ClusterUpdateStatus"].Updating:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-select-to-copy" }, desiredVersion),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Link"], { to: "/settings/cluster/" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["InProgressIcon"], { className: "co-icon-and-text__icon" }),
                        "Updating"))));
        case _module_k8s__WEBPACK_IMPORTED_MODULE_13__["ClusterUpdateStatus"].UpdatesAvailable:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-select-to-copy" }, desiredVersion),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "link", className: "btn-link--no-btn-default-values", onClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_16__["clusterUpdateModal"])({ cv }), icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowCircleUpIcon"], null), isInline: true }, "Update"))));
        default:
            return lastVersion ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-select-to-copy" }, lastVersion) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary" }, "Not available");
    }
};
const clusterVersionResource = {
    kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterVersionModel"]),
    namespaced: false,
    name: 'version',
    isList: false,
};
const mapStateToProps = (state) => ({
    openshiftFlag: state[_reducers_features__WEBPACK_IMPORTED_MODULE_14__["featureReducerName"]].get(_console_shared__WEBPACK_IMPORTED_MODULE_4__["FLAGS"].OPENSHIFT),
});
const ModuleStatus = ({ status }) => {
    switch (status) {
        case 'Normal':
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_packages_console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_26__["GreenCheckCircleIcon"], null);
        case 'Not Installed':
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_frontend_packages_console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_26__["RedExclamationCircleIcon"], null);
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null);
    }
};
const DetailsCardPopup = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ list }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_22__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_27__["DashboardCardPopupLink"], { linkTitle: String(Object.keys(list).length), popupTitle: t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERSOFTWARE_TITLE_1'), className: "co-status-card__popup" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERSOFTWARE_DESCRIPTION_1')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_24__('details-card__popup-subtitle') }, t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERSOFTWARE_SOFTWARE_1')),
        lodash__WEBPACK_IMPORTED_MODULE_23__["map"](list, item => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'name') }, lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'name'))))));
});
const DetailsSubHeader = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ hcVersion }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_22__["useTranslation"])();
    console.log(typeof hcVersion);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_24__('details-card__popup-style') }, t('SINGLE:MSG_OVERVIEW_MAIN_CARDSOFTWARE_INSTALLATION_1')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DetailsCardPopup, { list: lodash__WEBPACK_IMPORTED_MODULE_23__["filter"](hcVersion, item => item.status === 'Not Installed') })));
});
const DetailsModuleList = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ hcVersion, hcVersionError }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, lodash__WEBPACK_IMPORTED_MODULE_23__["map"](hcVersion, item => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'name'), className: classnames__WEBPACK_IMPORTED_MODULE_24__('details-card__head-style') },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__["default"], { title: lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'name'), error: !!hcVersionError || (item && !lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'version')), isLoading: !item, valueClassName: "co-select-to-copy" }, lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'version'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_24__('details-card__body-icon') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ModuleStatus, { status: lodash__WEBPACK_IMPORTED_MODULE_23__["get"](item, 'status') })))))));
});
const DetailsCard_ = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(({ watchK8sResource, stopWatchK8sResource, openshiftFlag }) => {
    const { infrastructure, infrastructureLoaded, infrastructureError } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context__WEBPACK_IMPORTED_MODULE_19__["ClusterDashboardContext"]);
    const [hcVersion, setHcVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [hcVersionError, setHcVersionError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_22__["useTranslation"])();
    const [clusterVersionData, clusterVersionLoaded, clusterVersionError] = Object(_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_18__["useK8sWatchResource"])(clusterVersionResource);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (Object(_reducers_features__WEBPACK_IMPORTED_MODULE_14__["flagPending"])(openshiftFlag)) {
            return;
        }
        const fetchHcVersion = () => __awaiter(void 0, void 0, void 0, function* () {
            let url;
            let headers;
            if (Object(_actions_ui__WEBPACK_IMPORTED_MODULE_21__["getActivePerspective"])() === 'master') {
                url = 'api/hypercloud/version';
            }
            else {
                url = `api/${Object(_actions_ui__WEBPACK_IMPORTED_MODULE_21__["getActiveCluster"])()}/version`;
                headers = new Headers();
                headers.append('Authorization', `Bearer ${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_20__["getAccessToken"])()}`);
            }
            try {
                let version = yield (yield fetch(url)).json();
                setHcVersion(version);
            }
            catch (error) {
                setHcVersionError(error);
            }
        });
        fetchHcVersion();
    }, [openshiftFlag, watchK8sResource, stopWatchK8sResource]);
    const clusterId = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getClusterID"])(clusterVersionData);
    const openShiftVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getOpenShiftVersion"])(clusterVersionData);
    const cvChannel = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getClusterVersionChannel"])(clusterVersionData);
    const infrastructurePlatform = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getInfrastructurePlatform"])(infrastructure);
    const infrastuctureApiUrl = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getInfrastructureAPIURL"])(infrastructure);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_5__["default"], { "data-test-id": "details-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_8__["default"], null, t('COMMON:MSG_DETAILS_TAB_1'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DetailsSubHeader, { hcVersion: hcVersion }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: Object(_reducers_features__WEBPACK_IMPORTED_MODULE_14__["flagPending"])(openshiftFlag), className: classnames__WEBPACK_IMPORTED_MODULE_24__('details-card__body-style') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_9__["default"], null, openshiftFlag ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__["default"], { title: "Cluster API address", isLoading: !infrastructureLoaded, error: !!infrastructureError || (infrastructure && !infrastuctureApiUrl), valueClassName: "co-select-to-copy" }, infrastuctureApiUrl),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__["default"], { title: "Cluster ID", error: !!clusterVersionError || (clusterVersionLoaded && !clusterId), isLoading: !clusterVersionLoaded },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-select-to-copy" }, clusterId),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], { text: "OpenShift Cluster Manager", href: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getOCMLink"])(clusterId) })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__["default"], { title: "Provider", error: !!infrastructureError || (infrastructure && !infrastructurePlatform), isLoading: !infrastructureLoaded, valueClassName: "co-select-to-copy" }, infrastructurePlatform),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__["default"], { title: "OpenShift version", error: !!clusterVersionError || (clusterVersionLoaded && !openShiftVersion), isLoading: !clusterVersionLoaded },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterVersion, { cv: clusterVersionData })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_10__["default"], { title: "Update channel", isLoading: !clusterVersionLoaded && !clusterVersionError, error: !!clusterVersionError || (clusterVersionLoaded && !cvChannel), valueClassName: "co-select-to-copy" }, cvChannel))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DetailsModuleList, { hcVersion: hcVersion, hcVersionError: hcVersionError }))))));
});
const DetailsCard = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_11__["withDashboardResources"])(DetailsCard_);


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/health-item.tsx":
/*!***************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/health-item.tsx ***!
  \***************************************************************************************/
/*! exports provided: OperatorsPopup, OperatorHealthItem, URLHealthItem, PrometheusHealthItem, ResourceHealthItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsPopup", function() { return OperatorsPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHealthItem", function() { return OperatorHealthItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLHealthItem", function() { return URLHealthItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrometheusHealthItem", function() { return PrometheusHealthItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceHealthItem", function() { return ResourceHealthItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthItem */ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_OperatorStatusBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/OperatorStatusBody */ "./packages/console-shared/src/components/dashboard/status-card/OperatorStatusBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_state_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/state-utils */ "./packages/console-shared/src/components/dashboard/status-card/state-utils.ts");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utils.ts");
/* harmony import */ var _actions_dashboards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../actions/dashboards */ "./public/actions/dashboards.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");











const OperatorsPopup = ({ resources, operatorExtensions }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    const sections = operatorExtensions
        .map((o, index) => {
        const operatorResources = o.properties.resources.reduce((acc, r) => {
            acc[r.prop] = resources[Object(_utils__WEBPACK_IMPORTED_MODULE_8__["uniqueResource"])(r, index).prop];
            return acc;
        }, {});
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_OperatorStatusBody__WEBPACK_IMPORTED_MODULE_2__["OperatorsSection"], { key: o.properties.title, resources: operatorResources, getOperatorsWithStatuses: o.properties.getOperatorsWithStatuses, title: o.properties.title, linkTo: o.properties.viewAllLink || Object(_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePath"])(o.properties.resources[0].kind), rowLoader: o.properties.operatorRowLoader });
    })
        .reverse();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        t('SINGLE:MSG_OVERVIEW_MAIN_POPOVEROPERATOR_DESCRIPTION_1'),
        sections));
};
const OperatorHealthItem = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__["withDashboardResources"])(({ resources, watchK8sResource, stopWatchK8sResource, operatorExtensions }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        operatorExtensions.forEach((o, index) => o.properties.resources.forEach(r => watchK8sResource(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["uniqueResource"])(r, index))));
        return () => {
            operatorExtensions.forEach((o, index) => o.properties.resources.forEach(r => stopWatchK8sResource(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["uniqueResource"])(r, index))));
        };
    }, [watchK8sResource, stopWatchK8sResource, operatorExtensions]);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    const healthStatuses = operatorExtensions.map((o, index) => {
        const operatorResources = o.properties.resources.reduce((acc, r) => {
            acc[r.prop] = resources[Object(_utils__WEBPACK_IMPORTED_MODULE_8__["uniqueResource"])(r, index).prop] || {};
            return acc;
        }, {});
        if (Object.keys(operatorResources).some(resource => operatorResources[resource].loadError)) {
            return { health: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_4__["HealthState"].NOT_AVAILABLE };
        }
        if (Object.keys(operatorResources).some(resource => !operatorResources[resource].loaded)) {
            return { health: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_4__["HealthState"].LOADING };
        }
        const operatorStatuses = o.properties.getOperatorsWithStatuses(operatorResources);
        const importantStatuses = Object(_console_shared_src_components_dashboard_status_card_state_utils__WEBPACK_IMPORTED_MODULE_3__["getMostImportantStatuses"])(operatorStatuses);
        return {
            health: importantStatuses[0].status.health,
            count: importantStatuses.length,
        };
    });
    const operatorsHealth = Object(_console_shared_src_components_dashboard_status_card_state_utils__WEBPACK_IMPORTED_MODULE_3__["getOperatorsHealthState"])(healthStatuses);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_1__["default"], { title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDSTATUS_OPERATORS_1'), state: operatorsHealth.health, details: operatorsHealth.detailMessage, popupTitle: t('SINGLE:MSG_OVERVIEW_MAIN_POPOVEROPERATOR_TITLE_1') },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorsPopup, { resources: resources, operatorExtensions: operatorExtensions })));
});
const URLHealthItem = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__["withDashboardResources"])(({ watchURL, stopWatchURL, urlResults, resources, watchK8sResource, stopWatchK8sResource, subsystem, models }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    const modelExists = subsystem.additionalResource && !!models.get(subsystem.additionalResource.kind);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchURL(subsystem.url, subsystem.fetch);
        if (modelExists) {
            watchK8sResource(subsystem.additionalResource);
        }
        return () => {
            stopWatchURL(subsystem.url);
            if (modelExists) {
                stopWatchK8sResource(subsystem.additionalResource);
            }
        };
    }, [watchURL, stopWatchURL, watchK8sResource, stopWatchK8sResource, subsystem, modelExists]);
    const healthResult = urlResults.getIn([subsystem.url, 'data']);
    const healthResultError = urlResults.getIn([subsystem.url, 'loadError']);
    const k8sResult = subsystem.additionalResource ? resources[subsystem.additionalResource.prop] : null;
    const healthState = subsystem.healthHandler(healthResult, healthResultError, k8sResult);
    if (subsystem.title === 'Cluster') {
        subsystem.title = t('SINGLE:MSG_OVERVIEW_MAIN_TABCLUSTER_1');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_1__["default"], { title: subsystem.title, state: healthState.state, details: healthState.message, popupTitle: subsystem.popupTitle }, subsystem.popupComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: subsystem.popupComponent, healthResult: healthResult, healthResultError: healthResultError, k8sResult: k8sResult })));
});
const PrometheusHealthItem = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__["withDashboardResources"])(({ watchK8sResource, stopWatchK8sResource, resources, watchPrometheus, stopWatchPrometheusQuery, prometheusResults, subsystem, models }) => {
    const modelExists = subsystem.additionalResource && !!models.get(subsystem.additionalResource.kind);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        subsystem.queries.forEach(q => watchPrometheus(q));
        if (modelExists) {
            watchK8sResource(subsystem.additionalResource);
        }
        return () => {
            subsystem.queries.forEach(q => stopWatchPrometheusQuery(q));
            if (modelExists) {
                stopWatchK8sResource(subsystem.additionalResource);
            }
        };
    }, [watchK8sResource, stopWatchK8sResource, watchPrometheus, stopWatchPrometheusQuery, subsystem, modelExists]);
    const queryResults = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => subsystem.queries.map(q => {
        const [response, error] = Object(_actions_dashboards__WEBPACK_IMPORTED_MODULE_9__["getPrometheusQueryResponse"])(prometheusResults, q);
        return {
            response,
            error,
        };
    }), [prometheusResults, subsystem.queries]);
    const k8sResult = subsystem.additionalResource ? resources[subsystem.additionalResource.prop] : null;
    const healthState = subsystem.healthHandler(queryResults, k8sResult);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_1__["default"], { title: subsystem.title, state: healthState.state, details: healthState.message, popupTitle: subsystem.popupTitle }, subsystem.popupComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: subsystem.popupComponent, responses: queryResults, k8sResult: k8sResult })));
});
const ResourceHealthItem = ({ subsystem }) => {
    const { title, resources, healthHandler, popupComponent, popupTitle } = subsystem;
    const resourcesResult = Object(_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResources"])(resources);
    const healthState = healthHandler(resourcesResult);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_1__["default"], { title: title, state: healthState.state, details: healthState.message, popupTitle: popupTitle }, popupComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], Object.assign({ loader: popupComponent }, resourcesResult))));
};


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/inventory-card.tsx":
/*!******************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/inventory-card.tsx ***!
  \******************************************************************************************/
/*! exports provided: InventoryCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCard", function() { return InventoryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/InventoryItem */ "./packages/console-shared/src/components/dashboard/inventory-card/InventoryItem.tsx");
/* harmony import */ var _with_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/plugin-sdk */ "./packages/console-plugin-sdk/src/index.ts");
/* harmony import */ var _utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../models/hypercloud */ "./public/models/hypercloud/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);












// import { find } from 'lodash';



const getFirehoseResource = (model) => ({
    isList: true,
    kind: model.crd ? Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(model) : model.kind,
    prop: 'resource',
});
const ClusterInventoryItem = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__["withDashboardResources"])(react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ model, mapper, useAbbr, additionalResources, expandedComponent }) => {
    const mainResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => getFirehoseResource(model), [model]);
    const otherResources = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => additionalResources || {}, [additionalResources]);
    const [resourceData, resourceLoaded, resourceLoadError] = Object(_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_10__["useK8sWatchResource"])(mainResource);
    const resources = Object(_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_10__["useK8sWatchResources"])(otherResources);
    const additionalResourcesData = {};
    let additionalResourcesLoaded = true;
    let additionalResourcesLoadError = false;
    if (additionalResources) {
        additionalResourcesLoaded = Object.keys(additionalResources)
            .filter(key => !additionalResources[key].optional)
            .every(key => resources[key].loaded);
        Object.keys(additionalResources).forEach(key => {
            additionalResourcesData[key] = resources[key].data;
        });
        additionalResourcesLoadError = Object.keys(additionalResources)
            .filter(key => !additionalResources[key].optional)
            .some(key => !!resources[key].loadError);
    }
    const ExpandedComponent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["AsyncComponent"], { loader: expandedComponent, resource: resourceData, additionalResources: additionalResourcesData }), [resourceData, additionalResourcesData, expandedComponent]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["ResourceInventoryItem"], { isLoading: !resourceLoaded || !additionalResourcesLoaded, error: !!resourceLoadError || additionalResourcesLoadError, kind: model, resources: resourceData, mapper: mapper, useAbbr: useAbbr, additionalResources: additionalResourcesData, ExpandedComponent: expandedComponent ? ExpandedComponent : null });
}));
const splitItems = (items) => {
    const RESOURCE_KINDS = [_models__WEBPACK_IMPORTED_MODULE_13__["NodeModel"].kind, _models__WEBPACK_IMPORTED_MODULE_13__["PodModel"].kind, _models__WEBPACK_IMPORTED_MODULE_13__["ServiceModel"].kind, _models__WEBPACK_IMPORTED_MODULE_13__["PersistentVolumeClaimModel"].kind];
    const CLAIM_KINDS = [_models_hypercloud__WEBPACK_IMPORTED_MODULE_12__["NamespaceClaimModel"].kind, _models_hypercloud__WEBPACK_IMPORTED_MODULE_12__["ResourceQuotaClaimModel"].kind];
    const resourceItems = items.filter(item => RESOURCE_KINDS.includes(item.properties.model.kind));
    const claimItems = items.filter(item => CLAIM_KINDS.includes(item.properties.model.kind));
    return { resourceItems, claimItems };
};
const RCCard = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ rcItems }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, rcItems.map(item => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterInventoryItem, { key: item.properties.model.kind, model: item.properties.model, mapper: item.properties.mapper, additionalResources: item.properties.additionalResources, useAbbr: item.properties.useAbbr, expandedComponent: item.properties.expandedComponent })))));
});
const InventoryCard = () => {
    const itemExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__["useExtensions"])(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__["isDashboardsOverviewInventoryItem"]);
    const { resourceItems, claimItems } = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => splitItems(itemExtensions), [itemExtensions]);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], { "data-test-id": "inventory-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, t('SINGLE:MSG_OVERVIEW_MAIN_CARDRESOURCES_TITLE_1'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RCCard, { rcItems: resourceItems }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_14__('co-status-card__alerts-body', 'co-dashboard-card__body--top-margin') },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RCCard, { rcItems: claimItems })))));
};


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/cluster-dashboard/status-card.tsx":
/*!***************************************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/cluster-dashboard/status-card.tsx ***!
  \***************************************************************************************/
/*! exports provided: StatusCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCard", function() { return StatusCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/plugin-sdk */ "./packages/console-plugin-sdk/src/index.ts");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertsBody */ "./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthBody */ "./packages/console-shared/src/components/dashboard/status-card/HealthBody.tsx");
/* harmony import */ var _with_dashboard_resources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertItem */ "./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx");
/* harmony import */ var _monitoring__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../monitoring */ "./public/components/monitoring.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var _modals_cluster_update_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../modals/cluster-update-modal */ "./public/components/modals/cluster-update-modal.tsx");
/* harmony import */ var _health_item__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./health-item */ "./public/components/dashboard/dashboards-page/cluster-dashboard/health-item.tsx");
/* harmony import */ var _utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./context */ "./public/components/dashboard/dashboards-page/cluster-dashboard/context.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

























const filterSubsystems = (subsystems, k8sModels) => subsystems.filter(s => {
    if (Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthURLSubsystem"])(s) || Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthPrometheusSubsystem"])(s)) {
        const subsystem = s;
        return subsystem.properties.additionalResource && !subsystem.properties.additionalResource.optional ? !!k8sModels.get(subsystem.properties.additionalResource.kind) : true;
    }
    return true;
});
const cvResource = {
    kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_17__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ClusterVersionModel"]),
    namespaced: false,
    name: 'version',
    isList: false,
};
const ClusterAlerts = Object(_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_14__["withDashboardResources"])(({ watchAlerts, stopWatchAlerts, notificationAlerts }) => {
    const hasCVResource = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_22__["useFlag"])(_console_shared__WEBPACK_IMPORTED_MODULE_6__["FLAGS"].CLUSTER_VERSION);
    const [cv, cvLoaded] = Object(_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_21__["useK8sWatchResource"])(hasCVResource ? cvResource : {});
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchAlerts();
        return stopWatchAlerts;
    }, [watchAlerts, stopWatchAlerts]);
    const { data: alerts, loaded: alertsLoaded, loadError: alertsResponseError } = notificationAlerts || {};
    const UpdateIcon = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowCircleUpIcon"], { className: "update-pending" }), []);
    const items = [];
    if (hasCVResource && cvLoaded && Object(_module_k8s__WEBPACK_IMPORTED_MODULE_17__["hasAvailableUpdates"])(cv)) {
        items.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_15__["StatusItem"], { Icon: UpdateIcon, message: "A cluster version update is available" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", onClick: () => Object(_modals_cluster_update_modal__WEBPACK_IMPORTED_MODULE_19__["clusterUpdateModal"])({ cv }), isInline: true }, "View details")));
    }
    if (alertsLoaded && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](alerts)) {
        items.push(...alerts.map(alert => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_15__["default"], { key: Object(_monitoring__WEBPACK_IMPORTED_MODULE_16__["alertURL"])(alert, alert.rule.id), alert: alert })));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_12__["default"], { error: !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](alertsResponseError) }, items);
});
const mapStateToProps = (state) => ({
    k8sModels: state.k8s.getIn(['RESOURCES', 'models']),
});
const StatusCard = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(({ k8sModels }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_24__["useTranslation"])();
    const subsystemExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["useExtensions"])(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthSubsystem"]);
    const subsystems = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => filterSubsystems(subsystemExtensions, k8sModels), [subsystemExtensions, k8sModels]);
    const operatorSubsystemIndex = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => subsystems.findIndex(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthOperator"]), [subsystems]);
    const { infrastructure, infrastructureLoaded } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context__WEBPACK_IMPORTED_MODULE_23__["ClusterDashboardContext"]);
    const healthItems = [];
    subsystems.forEach(subsystem => {
        if (Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthURLSubsystem"])(subsystem)) {
            healthItems.push({
                title: subsystem.properties.title,
                Component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_health_item__WEBPACK_IMPORTED_MODULE_20__["URLHealthItem"], { subsystem: subsystem.properties, models: k8sModels }),
            });
        }
        else if (Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthPrometheusSubsystem"])(subsystem)) {
            const { disallowedProviders } = subsystem.properties;
            const subsystemItem = Object.assign(Object.assign({}, subsystem.properties), { title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDSTATUS_CONTROLPLANE_1'), popupTitle: t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_TITLE_1') });
            if ((disallowedProviders === null || disallowedProviders === void 0 ? void 0 : disallowedProviders.length) && (!infrastructureLoaded || disallowedProviders.includes(Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getInfrastructurePlatform"])(infrastructure)))) {
                return;
            }
            healthItems.push({
                title: subsystemItem.title,
                Component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_health_item__WEBPACK_IMPORTED_MODULE_20__["PrometheusHealthItem"], { subsystem: subsystemItem, models: k8sModels }),
            });
        }
        else if (Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthResourceSubsystem"])(subsystem)) {
            healthItems.push({
                title: subsystem.properties.title,
                Component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_health_item__WEBPACK_IMPORTED_MODULE_20__["ResourceHealthItem"], { subsystem: subsystem.properties }),
            });
        }
    });
    if (operatorSubsystemIndex !== -1) {
        const operatorSubsystems = subsystems.filter(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__["isDashboardsOverviewHealthOperator"]);
        healthItems.splice(operatorSubsystemIndex, 0, {
            title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDSTATUS_OPERATORS_1'),
            Component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_health_item__WEBPACK_IMPORTED_MODULE_20__["OperatorHealthItem"], { operatorExtensions: operatorSubsystems }),
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_7__["default"], { gradient: true, "data-test-id": "status-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_11__["default"], null, t('SINGLE:MSG_OVERVIEW_MAIN_CARDSTATUS_TITLE_1')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/monitoring/alerts" }, "View alerts")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_8__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Gallery"], { className: "co-overview-status__health", gutter: "md" }, healthItems.map(item => {
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["GalleryItem"], { key: item.title }, item.Component);
                }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterAlerts, null))));
});


/***/ }),

/***/ "./public/components/dashboard/dashboards-page/dashboards.tsx":
/*!********************************************************************!*\
  !*** ./public/components/dashboard/dashboards-page/dashboards.tsx ***!
  \********************************************************************/
/*! exports provided: DashboardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsPage", function() { return DashboardsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cluster_dashboard_cluster_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cluster-dashboard/cluster-dashboard */ "./public/components/dashboard/dashboards-page/cluster-dashboard/cluster-dashboard.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/Dashboard */ "./packages/console-shared/src/components/dashboard/Dashboard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/DashboardGrid */ "./packages/console-shared/src/components/dashboard/DashboardGrid.tsx");
/* harmony import */ var _console_plugin_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/plugin-sdk */ "./packages/console-plugin-sdk/src/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









const getCardsOnPosition = (cards, position) => cards
    .filter(c => c.properties.position === position)
    .map(c => ({
    Card: () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["AsyncComponent"], { loader: c.properties.loader }),
    span: c.properties.span,
}));
const getPluginTabPages = (tabs, cards) => tabs.map(tab => {
    const tabCards = cards.filter(c => c.properties.tab === tab.properties.id);
    return {
        href: tab.properties.id,
        name: tab.properties.title,
        component: () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_6__["default"], { mainCards: getCardsOnPosition(tabCards, _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_6__["GridPosition"].MAIN), leftCards: getCardsOnPosition(tabCards, _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_6__["GridPosition"].LEFT), rightCards: getCardsOnPosition(tabCards, _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_6__["GridPosition"].RIGHT) }))),
    };
});
const DashboardsPage_ = ({ match, kindsInFlight, k8sModels }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    const title = t('COMMON:MSG_LNB_MENU_90');
    const tabExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_7__["useExtensions"])(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_7__["isDashboardsTab"]);
    const cardExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_7__["useExtensions"])(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_7__["isDashboardsCard"]);
    const pluginPages = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => getPluginTabPages(tabExtensions, cardExtensions), [tabExtensions, cardExtensions]);
    const allPages = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => [
        {
            href: '',
            name: t('SINGLE:MSG_OVERVIEW_MAIN_TABCLUSTER_1'),
            component: _cluster_dashboard_cluster_dashboard__WEBPACK_IMPORTED_MODULE_3__["ClusterDashboard"],
        },
        ...pluginPages,
    ], [pluginPages]);
    return kindsInFlight && k8sModels.size === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["PageHeading"], { title: title, detail: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["HorizontalNav"], { match: match, pages: allPages, noStatusBox: true })));
};
const mapStateToProps = (state) => ({
    kindsInFlight: state.k8s.getIn(['RESOURCES', 'inFlight']),
    k8sModels: state.k8s.getIn(['RESOURCES', 'models']),
});
const DashboardsPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DashboardsPage_);


/***/ }),

/***/ "./public/components/utils/k8s-get-hook.ts":
/*!*************************************************!*\
  !*** ./public/components/utils/k8s-get-hook.ts ***!
  \*************************************************/
/*! exports provided: useK8sGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useK8sGet", function() { return useK8sGet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const useK8sGet = (kind, name, namespace, opts) => {
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoadError(null);
                setLoaded(false);
                setData(null);
                const resource = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(kind, name, namespace, opts);
                setData(resource);
            }
            catch (error) {
                setLoadError(error);
            }
            finally {
                setLoaded(true);
            }
        });
        fetch();
    }, [kind, name, namespace, opts]);
    return [data, loaded, loadError];
};


/***/ })

}]);
//# sourceMappingURL=dashboards-a5c983e7ef2f3fe4e9b0.js.map