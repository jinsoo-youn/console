(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-service-status-card"],{

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

/***/ "./packages/noobaa-storage-plugin/src/components/status-card/status-card.scss":
/*!************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/status-card/status-card.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/status-card/status-card.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/status-card/status-card.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertsBody */ "./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertItem */ "./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx");
/* harmony import */ var _console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/monitoring */ "./public/components/monitoring.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthBody */ "./packages/console-shared/src/components/dashboard/status-card/HealthBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthItem */ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_status_card_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/status-card/utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/status-card/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../queries */ "./packages/noobaa-storage-plugin/src/queries.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _statuses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./statuses */ "./packages/noobaa-storage-plugin/src/components/status-card/statuses.tsx");
/* harmony import */ var _status_card_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./status-card.scss */ "./packages/noobaa-storage-plugin/src/components/status-card/status-card.scss");
/* harmony import */ var _status_card_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_status_card_scss__WEBPACK_IMPORTED_MODULE_19__);




















const statusCardQueries = Object.keys(_queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"]);
const noobaaResource = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["NooBaaSystemModel"]),
    isList: true,
    prop: 'noobaa',
};
const NooBaaAlerts = Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_12__["withDashboardResources"])(({ watchAlerts, stopWatchAlerts, notificationAlerts }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchAlerts();
        return () => {
            stopWatchAlerts();
        };
    }, [watchAlerts, stopWatchAlerts]);
    const { data, loaded, loadError } = notificationAlerts || {};
    const alerts = Object(_utils__WEBPACK_IMPORTED_MODULE_15__["filterNooBaaAlerts"])(data);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_3__["default"], { error: !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](loadError) }, loaded &&
        alerts.length > 0 &&
        alerts.map((alert) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__["default"], { key: Object(_console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_5__["alertURL"])(alert, alert.rule.id), alert: alert }))));
});
const StatusCard = ({ watchK8sResource, stopWatchK8sResource, watchPrometheus, resources, stopWatchPrometheusQuery, prometheusResults, }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(noobaaResource);
        statusCardQueries.forEach((key) => watchPrometheus(_queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"][key]));
        watchPrometheus(_queries__WEBPACK_IMPORTED_MODULE_16__["DATA_RESILIENCE_QUERIES"].REBUILD_PROGRESS_QUERY);
        return () => {
            stopWatchK8sResource(noobaaResource);
            statusCardQueries.forEach((key) => stopWatchPrometheusQuery(_queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"][key]));
            stopWatchPrometheusQuery(_queries__WEBPACK_IMPORTED_MODULE_16__["DATA_RESILIENCE_QUERIES"].REBUILD_PROGRESS_QUERY);
        };
    }, [watchK8sResource, stopWatchK8sResource, watchPrometheus, stopWatchPrometheusQuery]);
    const buckets = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"].BUCKETS_COUNT,
        'data',
    ]);
    const unhealthyBuckets = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"].UNHEALTHY_BUCKETS,
        'data',
    ]);
    const pools = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"].POOLS_COUNT,
        'data',
    ]);
    const unhealthyPools = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"].UNHEALTHY_POOLS,
        'data',
    ]);
    const progressResult = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_16__["DATA_RESILIENCE_QUERIES"].REBUILD_PROGRESS_QUERY,
        'data',
    ]);
    const progressError = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_16__["DATA_RESILIENCE_QUERIES"].REBUILD_PROGRESS_QUERY,
        'loadError',
    ]);
    const noobaa = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources, 'noobaa');
    const queriesLoadError = statusCardQueries.some((q) => {
        return prometheusResults.getIn([_queries__WEBPACK_IMPORTED_MODULE_16__["StatusCardQueries"][q], 'loadError']);
    });
    const hasStatusLoadError = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](noobaa, 'loadError') || queriesLoadError;
    const allStatusLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](noobaa, 'loaded') && buckets && unhealthyBuckets && pools && unhealthyPools;
    const objectServiceState = Object(_statuses__WEBPACK_IMPORTED_MODULE_18__["getNooBaaState"])([buckets, unhealthyBuckets, pools, unhealthyPools], !!hasStatusLoadError, !allStatusLoaded, noobaa);
    const dataResiliencyState = Object(_console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_status_card_utils__WEBPACK_IMPORTED_MODULE_14__["getDataResiliencyState"])([
        { response: progressResult, error: progressError },
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_6__["default"], { gradient: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Status")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], { className: "nb-status-card__health", gutter: "md" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_11__["default"], { title: "Multi Cloud Object Gateway", state: objectServiceState.state, details: objectServiceState.message })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_11__["default"], { title: "Data Resiliency", state: dataResiliencyState.state, details: dataResiliencyState.message })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NooBaaAlerts, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_12__["withDashboardResources"])(StatusCard));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/status-card/statuses.tsx":
/*!********************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/status-card/statuses.tsx ***!
  \********************************************************************************/
/*! exports provided: getNooBaaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNooBaaState", function() { return getNooBaaState; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");



const NooBaaStatus = [
    {
        state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].ERROR,
        message: 'MCG is not running',
    },
    {
        state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].ERROR,
        message: 'All resources are unhealthy',
    },
    {
        state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].WARNING,
        message: 'Object Bucket has an issue',
    },
    {
        state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].ERROR,
        message: 'Many buckets have issues',
    },
    {
        state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].WARNING,
        message: 'Some buckets have issues',
    },
];
const getNooBaaState = (prometheusResponses = [], hasLoadError, isLoading, k8sResponse) => {
    const [buckets, unhealthyBuckets, pools, unhealthyPools] = prometheusResponses.map((r) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGaugeValue"])(r));
    const noobaaPhase = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](k8sResponse, 'data[0].status.phase');
    const unhealthyBucketsRatio = unhealthyBuckets / buckets;
    const noData = !(buckets && unhealthyBuckets && pools && unhealthyPools && noobaaPhase);
    if (hasLoadError) {
        return { state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].UNKNOWN };
    }
    if (noData) {
        return { state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].NOT_AVAILABLE };
    }
    if (isLoading) {
        return { state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].LOADING };
    }
    if (noobaaPhase !== 'Ready') {
        return NooBaaStatus[0];
    }
    if (Number(pools) === Number(unhealthyPools)) {
        return NooBaaStatus[1];
    }
    if (Number(unhealthyBuckets) === 1) {
        return NooBaaStatus[2];
    }
    if (unhealthyBucketsRatio >= 0.5) {
        return NooBaaStatus[3];
    }
    if (unhealthyBucketsRatio >= 0.3) {
        return NooBaaStatus[4];
    }
    return { state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].OK };
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/constants/index.ts":
/*!***************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/constants/index.ts ***!
  \***************************************************************/
/*! exports provided: ACCOUNTS, PROVIDERS, BY_IOPS, BY_LOGICAL_USAGE, BY_PHYSICAL_VS_LOGICAL_USAGE, BY_EGRESS, PROJECTS, BUCKET_CLASS, OCS_NS, NB_PROVISIONER, CHART_LABELS, BC_PROVIDERS, PROVIDERS_NOOBAA_MAP, BUCKET_LABEL_NOOBAA_MAP, NOOBAA_TYPE_MAP, AWS_REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNTS", function() { return ACCOUNTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDERS", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_IOPS", function() { return BY_IOPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_LOGICAL_USAGE", function() { return BY_LOGICAL_USAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_PHYSICAL_VS_LOGICAL_USAGE", function() { return BY_PHYSICAL_VS_LOGICAL_USAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_EGRESS", function() { return BY_EGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_CLASS", function() { return BUCKET_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCS_NS", function() { return OCS_NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_PROVISIONER", function() { return NB_PROVISIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_LABELS", function() { return CHART_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BC_PROVIDERS", function() { return BC_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDERS_NOOBAA_MAP", function() { return PROVIDERS_NOOBAA_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_LABEL_NOOBAA_MAP", function() { return BUCKET_LABEL_NOOBAA_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOOBAA_TYPE_MAP", function() { return NOOBAA_TYPE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_REGIONS", function() { return AWS_REGIONS; });
const ACCOUNTS = 'Accounts';
const PROVIDERS = 'Providers';
const BY_IOPS = 'I/O Operations';
const BY_LOGICAL_USAGE = 'Logical Used Capacity';
const BY_PHYSICAL_VS_LOGICAL_USAGE = 'Physical Vs Logical Usage';
const BY_EGRESS = 'Egress';
const PROJECTS = 'Projects';
const BUCKET_CLASS = 'Bucket Class';
const OCS_NS = 'openshift-storage';
const NB_PROVISIONER = 'noobaa.io/obc';
const CHART_LABELS = {
    [BY_LOGICAL_USAGE]: 'Logical used capacity per account',
    [BY_PHYSICAL_VS_LOGICAL_USAGE]: 'Physical vs. Logical used capacity',
    [BY_EGRESS]: 'Egress Per Provider',
    [BY_IOPS]: 'I/O Operations count',
};
var BC_PROVIDERS;
(function (BC_PROVIDERS) {
    BC_PROVIDERS["AWS"] = "AWS S3";
    BC_PROVIDERS["S3"] = "S3 Compatible";
    BC_PROVIDERS["PVC"] = "PVC";
    BC_PROVIDERS["GCP"] = "Google cloud storage";
    BC_PROVIDERS["AZURE"] = "Azure Blob";
    BC_PROVIDERS["IBM"] = "IBM COS";
})(BC_PROVIDERS || (BC_PROVIDERS = {}));
const PROVIDERS_NOOBAA_MAP = {
    [BC_PROVIDERS.AWS]: 'awsS3',
    [BC_PROVIDERS.S3]: 's3Compatible',
    [BC_PROVIDERS.AZURE]: 'azureBlob',
    [BC_PROVIDERS.GCP]: 'googleCloudStorage',
    [BC_PROVIDERS.PVC]: 'pvPool',
    [BC_PROVIDERS.IBM]: 'ibmCos',
};
const BUCKET_LABEL_NOOBAA_MAP = {
    [BC_PROVIDERS.AWS]: 'targetBucket',
    [BC_PROVIDERS.S3]: 'targetBucket',
    [BC_PROVIDERS.AZURE]: 'targetBlobContainer',
    [BC_PROVIDERS.GCP]: 'targetBucket',
    [BC_PROVIDERS.IBM]: 'targetBucket',
};
const NOOBAA_TYPE_MAP = {
    [BC_PROVIDERS.AWS]: 'aws-s3',
    [BC_PROVIDERS.S3]: 's3-compatible',
    [BC_PROVIDERS.AZURE]: 'azure-blob',
    [BC_PROVIDERS.GCP]: 'google-cloud-storage',
    [BC_PROVIDERS.PVC]: 'pv-pool',
    [BC_PROVIDERS.IBM]: 'ibm-cos',
};
const AWS_REGIONS = [
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'ca-central-1',
    'eu-central-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-north-1',
    'ap-east-1',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-south-1',
    'me-south-1',
    'sa-east-1',
];


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/queries.ts":
/*!*******************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/queries.ts ***!
  \*******************************************************/
/*! exports provided: ObjectDashboardQuery, DATA_RESILIENCE_QUERIES, ObjectDataReductionQueries, StatusCardQueries, CAPACITY_BREAKDOWN_QUERIES, breakdownQueryMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDashboardQuery", function() { return ObjectDashboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_RESILIENCE_QUERIES", function() { return DATA_RESILIENCE_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDataReductionQueries", function() { return ObjectDataReductionQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCardQueries", function() { return StatusCardQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPACITY_BREAKDOWN_QUERIES", function() { return CAPACITY_BREAKDOWN_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakdownQueryMap", function() { return breakdownQueryMap; });
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./packages/noobaa-storage-plugin/src/models.ts");



var ObjectDashboardQuery;
(function (ObjectDashboardQuery) {
    ObjectDashboardQuery["CAPACITY_USAGE_PROJECT_QUERY"] = "CAPACITY_USAGE_PROJECT_QUERY";
    ObjectDashboardQuery["CAPACITY_USAGE_BUCKET_CLASS_QUERY"] = "CAPACITY_USAGE_BUCKET_CLASS_QUERY";
    ObjectDashboardQuery["PROJECTS_TOTAL_USED"] = "PROJECTS_TOTAL_USED";
    ObjectDashboardQuery["PROJECTS_BY_USED"] = "PROJECTS_BY_USED";
    ObjectDashboardQuery["BUCKETS_TOTAL_USED"] = "BUCKETS_TOTAL_USED";
    ObjectDashboardQuery["BUCKETS_BY_USED"] = "BUCKETS_BY_USED";
    ObjectDashboardQuery["NOOBAA_USED"] = "NOOBAA_USED";
    ObjectDashboardQuery["NOOBAA_TOTAL"] = "NOOBAA_TOTAL";
    ObjectDashboardQuery["PROJECTS_OTHERS"] = "PROJECTS_OTHERS";
    ObjectDashboardQuery["BUCKETS_BY_OTHERS"] = "BUCKETS_BY_OTHERS";
    ObjectDashboardQuery["PROJECT_CAPACITY_USAGE_QUERY"] = "PROJECT_CAPACITY_USAGE_QUERY";
    ObjectDashboardQuery["BUCKET_CLASS_CAPACITY_USAGE_QUERY"] = "BUCKET_CLASS_CAPACITY_USAGE_QUERY";
    ObjectDashboardQuery["PROJECTS_QUERY"] = "PROJECTS_QUERY";
    ObjectDashboardQuery["BUCKETS_QUERY"] = "BUCKETS_QUERY";
})(ObjectDashboardQuery || (ObjectDashboardQuery = {}));
var DATA_RESILIENCE_QUERIES;
(function (DATA_RESILIENCE_QUERIES) {
    DATA_RESILIENCE_QUERIES["REBUILD_PROGRESS_QUERY"] = "NooBaa_rebuild_progress/100";
    DATA_RESILIENCE_QUERIES["REBUILD_TIME_QUERY"] = "NooBaa_rebuild_time";
})(DATA_RESILIENCE_QUERIES || (DATA_RESILIENCE_QUERIES = {}));
var ObjectDataReductionQueries;
(function (ObjectDataReductionQueries) {
    ObjectDataReductionQueries["EFFICIENCY_QUERY"] = "NooBaa_reduction_ratio";
    ObjectDataReductionQueries["SAVINGS_QUERY"] = "(NooBaa_object_savings_logical_size - NooBaa_object_savings_physical_size)";
    ObjectDataReductionQueries["LOGICAL_SAVINGS_QUERY"] = "NooBaa_object_savings_logical_size";
})(ObjectDataReductionQueries || (ObjectDataReductionQueries = {}));
var StatusCardQueries;
(function (StatusCardQueries) {
    StatusCardQueries["BUCKETS_COUNT"] = "NooBaa_num_buckets";
    StatusCardQueries["UNHEALTHY_BUCKETS"] = "NooBaa_num_unhealthy_buckets";
    StatusCardQueries["POOLS_COUNT"] = "NooBaa_num_pools";
    StatusCardQueries["UNHEALTHY_POOLS"] = "NooBaa_num_unhealthy_pools";
})(StatusCardQueries || (StatusCardQueries = {}));
const CAPACITY_BREAKDOWN_QUERIES = {
    [ObjectDashboardQuery.PROJECTS_BY_USED]: 'NooBaa_projects_capacity_usage',
    [ObjectDashboardQuery.BUCKETS_BY_USED]: 'NooBaa_bucket_class_capacity_usage',
};
const breakdownQueryMap = {
    [_constants__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"],
        metric: 'project',
        queries: {
            [ObjectDashboardQuery.PROJECTS_BY_USED]: `sort_desc(topk(5, ${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.PROJECTS_BY_USED]}))`,
            [ObjectDashboardQuery.PROJECTS_TOTAL_USED]: `sum(${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.PROJECTS_BY_USED]})`,
        },
    },
    [_constants__WEBPACK_IMPORTED_MODULE_1__["BUCKET_CLASS"]]: {
        model: _models__WEBPACK_IMPORTED_MODULE_2__["NooBaaBucketClassModel"],
        metric: 'bucket_class',
        queries: {
            [ObjectDashboardQuery.BUCKETS_BY_USED]: `sort_desc(topk(5, ${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.BUCKETS_BY_USED]}))`,
            [ObjectDashboardQuery.BUCKETS_TOTAL_USED]: `sum(${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.BUCKETS_BY_USED]})`,
        },
    },
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/utils.ts ***!
  \*****************************************************/
/*! exports provided: filterNooBaaAlerts, getGaugeValue, getMetric, getPhase, isBound, getSCProvisioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNooBaaAlerts", function() { return filterNooBaaAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeValue", function() { return getGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetric", function() { return getMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhase", function() { return getPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBound", function() { return isBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCProvisioner", function() { return getSCProvisioner; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterNooBaaAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'NooBaa');
const getGaugeValue = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'data.result[0].value[1]');
const getMetric = (result, metric) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, ['data', 'result', '0', 'metric', metric], null);
const getPhase = (obj) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.phase', 'Lost');
};
const isBound = (obj) => getPhase(obj) === 'Bound';
const getSCProvisioner = (obj) => obj.provisioner;


/***/ })

}]);
//# sourceMappingURL=object-service-status-card-2c7879e867a28880adfd.js.map