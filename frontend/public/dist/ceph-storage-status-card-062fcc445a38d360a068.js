(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-status-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/status-card/status-card.tsx":
/*!******************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/status-card/status-card.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: CephAlerts, StatusCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CephAlerts", function() { return CephAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCard", function() { return StatusCard; });
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
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _constants_resources__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../constants/resources */ "./packages/ceph-storage-plugin/src/constants/resources.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/status-card/utils.ts");


















const resiliencyProgressQuery = _constants_queries__WEBPACK_IMPORTED_MODULE_14__["DATA_RESILIENCY_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_14__["StorageDashboardQuery"].RESILIENCY_PROGRESS];
const CephAlerts = Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_12__["withDashboardResources"])(({ watchAlerts, stopWatchAlerts, notificationAlerts }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchAlerts();
        return () => {
            stopWatchAlerts();
        };
    }, [watchAlerts, stopWatchAlerts]);
    const { data, loaded, loadError } = notificationAlerts || {};
    const alerts = Object(_selectors__WEBPACK_IMPORTED_MODULE_16__["filterCephAlerts"])(data);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_3__["default"], { error: !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](loadError) }, loaded &&
        alerts.length > 0 &&
        alerts.map((alert) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__["default"], { key: Object(_console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_5__["alertURL"])(alert, alert.rule.id), alert: alert }))));
});
const StatusCard = ({ watchPrometheus, stopWatchPrometheusQuery, prometheusResults, }) => {
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_13__["useK8sWatchResource"])(_constants_resources__WEBPACK_IMPORTED_MODULE_15__["cephClusterResource"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchPrometheus(resiliencyProgressQuery);
        return () => {
            stopWatchPrometheusQuery(resiliencyProgressQuery);
        };
    }, [watchPrometheus, stopWatchPrometheusQuery]);
    const resiliencyProgress = prometheusResults.getIn([
        resiliencyProgressQuery,
        'data',
    ]);
    const resiliencyProgressError = prometheusResults.getIn([resiliencyProgressQuery, 'loadError']);
    const cephHealthState = Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getCephHealthState"])({ ceph: { data, loaded, loadError } });
    const dataResiliencyState = Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getDataResiliencyState"])([
        { response: resiliencyProgress, error: resiliencyProgressError },
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_6__["default"], { gradient: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Status")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], { className: "co-overview-status__health", gutter: "md" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_11__["default"], { title: "OCS Cluster", state: cephHealthState.state, details: cephHealthState.message })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_11__["default"], { title: "Data Resiliency", state: dataResiliencyState.state, details: dataResiliencyState.message })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CephAlerts, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_12__["withDashboardResources"])(StatusCard));


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/constants/resources.ts":
/*!*****************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/constants/resources.ts ***!
  \*****************************************************************/
/*! exports provided: cephClusterResource, pvResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cephClusterResource", function() { return cephClusterResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pvResource", function() { return pvResource; });
/* harmony import */ var _console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s/k8s */ "./public/module/k8s/k8s.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./packages/ceph-storage-plugin/src/models.ts");



const cephClusterResource = {
    kind: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["CephClusterModel"]),
    namespaced: false,
    isList: true,
    prop: 'ceph',
};
const pvResource = {
    kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["PersistentVolumeModel"].kind,
    namespaced: false,
    isList: true,
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/selectors/index.ts":
/*!*************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/selectors/index.ts ***!
  \*************************************************************/
/*! exports provided: cephStorageLabel, filterCephAlerts, getCephPVs, getCephPVCs, getCephNodes, getCephSC, getOCSVersion, calcPVsCapacity, getSCAvailablePVs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cephStorageLabel", function() { return cephStorageLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCephAlerts", function() { return filterCephAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephPVs", function() { return getCephPVs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephPVCs", function() { return getCephPVCs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephNodes", function() { return getCephNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephSC", function() { return getCephSC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOCSVersion", function() { return getOCSVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPVsCapacity", function() { return calcPVsCapacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCAvailablePVs", function() { return getSCAvailablePVs; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");




const cephStorageLabel = 'cluster.ocs.openshift.io/openshift-storage';
var status;
(function (status) {
    status["BOUND"] = "Bound";
    status["AVAILABLE"] = "Available";
})(status || (status = {}));
const filterCephAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'ceph');
const getCephPVs = (pvsData = []) => pvsData.filter((pv) => {
    return _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["cephStorageProvisioners"].some((provisioner) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pv, 'metadata.annotations["pv.kubernetes.io/provisioned-by"]', '').includes(provisioner));
});
const getPVStorageClass = (pv) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pv, 'spec.storageClassName');
const getStorageClassName = (pvc) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, ['metadata', 'annotations', 'volume.beta.kubernetes.io/storage-class']) ||
    lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, 'spec.storageClassName');
const isBound = (pvc) => pvc.status.phase === status.BOUND;
const getCephPVCs = (cephSCNames = [], pvcsData = [], pvsData = []) => {
    const cephPVs = getCephPVs(pvsData);
    const cephSCNameSet = new Set([...cephSCNames, ...cephPVs.map(getPVStorageClass)]);
    const cephBoundPVCUIDSet = new Set(lodash__WEBPACK_IMPORTED_MODULE_0__["map"](cephPVs, 'spec.claimRef.uid'));
    // If the PVC is bound use claim uid(links PVC to PV) else storage class to verify it's provisioned by ceph.
    return pvcsData.filter((pvc) => isBound(pvc)
        ? cephBoundPVCUIDSet.has(pvc.metadata.uid)
        : cephSCNameSet.has(getStorageClassName(pvc)));
};
const getCephNodes = (nodesData = []) => nodesData.filter((node) => lodash__WEBPACK_IMPORTED_MODULE_0__["keys"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'metadata.labels')).includes(cephStorageLabel));
const getCephSC = (scData) => scData.filter((sc) => {
    return _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["cephStorageProvisioners"].some((provisioner) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](sc, 'provisioner', '').includes(provisioner));
});
const getOCSVersion = (items) => {
    const itemsData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](items, 'data');
    const operator = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](itemsData, (item) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](item, 'spec.name') === _constants__WEBPACK_IMPORTED_MODULE_3__["OCS_OPERATOR"]);
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](operator, 'status.installedCSV');
};
const calcPVsCapacity = (pvs) => pvs.reduce((sum, pv) => {
    const storage = Number(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["convertToBaseValue"])(pv.spec.capacity.storage));
    return sum + storage;
}, 0);
const getSCAvailablePVs = (pvsData, sc) => pvsData.filter((pv) => getPVStorageClass(pv) === sc && pv.status.phase === status.AVAILABLE);


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=ceph-storage-status-card-062fcc445a38d360a068.js.map