(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-activity-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/activity-card.scss":
/*!***********************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/activity-card.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/activity-card.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/activity-card.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: getOCSSubscription, ActivityCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOCSSubscription", function() { return getOCSSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCard", function() { return ActivityCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityBody */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityBody.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/module/k8s/k8s */ "./public/module/k8s/k8s.ts");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constants/index */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utils */ "./packages/ceph-storage-plugin/src/utils/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _cluster_expand_activity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cluster-expand-activity */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/cluster-expand-activity.tsx");
/* harmony import */ var _ocs_upgrade_activity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ocs-upgrade-activity */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/ocs-upgrade-activity.tsx");
/* harmony import */ var _activity_card_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./activity-card.scss */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/activity-card.scss");
/* harmony import */ var _activity_card_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_activity_card_scss__WEBPACK_IMPORTED_MODULE_18__);



















const eventsResource = { isList: true, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["EventModel"].kind, prop: 'events' };
const subscriptionResource = {
    isList: true,
    kind: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_11__["SubscriptionModel"]),
    namespaced: false,
    prop: 'subs',
};
const storageClusterResource = {
    isList: true,
    kind: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_15__["OCSServiceModel"]),
    namespaced: false,
    prop: 'storage-cluster',
};
const getOCSSubscription = (subscriptions) => {
    const itemsData = subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.data;
    return lodash__WEBPACK_IMPORTED_MODULE_1__["find"](itemsData, (item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.spec) === null || _a === void 0 ? void 0 : _a.name) === _constants_index__WEBPACK_IMPORTED_MODULE_12__["OCS_OPERATOR"]; });
};
const ocsEventNamespaceKindFilter = (event) => {
    var _a;
    const eventKind = (_a = event === null || event === void 0 ? void 0 : event.involvedObject) === null || _a === void 0 ? void 0 : _a.kind;
    const eventNamespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["getNamespace"])(event);
    return eventNamespace === _constants_index__WEBPACK_IMPORTED_MODULE_12__["CEPH_STORAGE_NAMESPACE"] || eventKind === _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind;
};
const RecentEvent = Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_9__["withDashboardResources"])(({ watchK8sResource, stopWatchK8sResource, resources }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(eventsResource);
        return () => {
            stopWatchK8sResource(eventsResource);
        };
    }, [watchK8sResource, stopWatchK8sResource]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_7__["RecentEventsBody"], { events: resources.events, filter: ocsEventNamespaceKindFilter }));
});
const OngoingActivity = Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_9__["withDashboardResources"])(({ watchPrometheus, stopWatchPrometheusQuery, watchK8sResource, stopWatchK8sResource, resources, prometheusResults, }) => {
    var _a, _b;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(subscriptionResource);
        watchK8sResource(storageClusterResource);
        watchPrometheus(_constants_queries__WEBPACK_IMPORTED_MODULE_13__["DATA_RESILIENCY_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_13__["StorageDashboardQuery"].RESILIENCY_PROGRESS]);
        return () => {
            stopWatchK8sResource(subscriptionResource);
            stopWatchK8sResource(storageClusterResource);
            stopWatchPrometheusQuery(_constants_queries__WEBPACK_IMPORTED_MODULE_13__["DATA_RESILIENCY_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_13__["StorageDashboardQuery"].RESILIENCY_PROGRESS]);
        };
    }, [watchPrometheus, stopWatchPrometheusQuery, watchK8sResource, stopWatchK8sResource]);
    const progressResponse = prometheusResults.getIn([
        _constants_queries__WEBPACK_IMPORTED_MODULE_13__["DATA_RESILIENCY_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_13__["StorageDashboardQuery"].RESILIENCY_PROGRESS],
        'data',
    ]);
    const progressError = prometheusResults.getIn([
        _constants_queries__WEBPACK_IMPORTED_MODULE_13__["DATA_RESILIENCY_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_13__["StorageDashboardQuery"].RESILIENCY_PROGRESS],
        'loadError',
    ]);
    const subscriptions = resources === null || resources === void 0 ? void 0 : resources.subs;
    const subscriptionsLoaded = subscriptions === null || subscriptions === void 0 ? void 0 : subscriptions.loaded;
    const ocsSubscription = getOCSSubscription(subscriptions);
    const storageClusters = resources === null || resources === void 0 ? void 0 : resources['storage-cluster'];
    const storageClustersLoaded = storageClusters === null || storageClusters === void 0 ? void 0 : storageClusters.loaded;
    const ocsCluster = (_a = storageClusters === null || storageClusters === void 0 ? void 0 : storageClusters.data) === null || _a === void 0 ? void 0 : _a[0];
    const prometheusActivities = [];
    const resourceActivities = [];
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_14__["getResiliencyProgress"])(progressResponse) < 1) {
        prometheusActivities.push({
            results: progressResponse,
            loader: () => __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./data-resiliency-activity */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/data-resiliency-activity.tsx")).then((m) => m.DataResiliency),
        });
    }
    if (Object(_ocs_upgrade_activity__WEBPACK_IMPORTED_MODULE_17__["isOCSUpgradeActivity"])(ocsSubscription)) {
        resourceActivities.push({
            resource: ocsSubscription,
            timestamp: (_b = ocsSubscription === null || ocsSubscription === void 0 ? void 0 : ocsSubscription.status) === null || _b === void 0 ? void 0 : _b.lastUpdated,
            loader: () => Promise.resolve(_ocs_upgrade_activity__WEBPACK_IMPORTED_MODULE_17__["OCSUpgradeActivity"]),
        });
    }
    if (Object(_cluster_expand_activity__WEBPACK_IMPORTED_MODULE_16__["isClusterExpandActivity"])(ocsCluster)) {
        resourceActivities.push({
            resource: ocsCluster,
            timestamp: null,
            loader: () => Promise.resolve(_cluster_expand_activity__WEBPACK_IMPORTED_MODULE_16__["ClusterExpandActivity"]),
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_7__["OngoingActivityBody"], { loaded: (progressResponse || progressError) && subscriptionsLoaded && storageClustersLoaded, resourceActivities: resourceActivities, prometheusActivities: prometheusActivities }));
});
const ActivityCard = react__WEBPACK_IMPORTED_MODULE_0__["memo"](() => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], { gradient: true },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Activity")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "ceph-activity-card__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OngoingActivity, null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RecentEvent, null))))));


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/ocs-upgrade-activity.tsx":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/ocs-upgrade-activity.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: isOCSUpgradeActivity, OCSUpgradeActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOCSUpgradeActivity", function() { return isOCSUpgradeActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCSUpgradeActivity", function() { return OCSUpgradeActivity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityItem */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityItem.tsx");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager_src_status_csv_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/status/csv-status */ "./packages/operator-lifecycle-manager/src/status/csv-status.ts");




const isOCSUpgradeActivity = (subscription) => Object(_console_operator_lifecycle_manager_src_status_csv_status__WEBPACK_IMPORTED_MODULE_3__["getSubscriptionStatus"])(subscription).status === _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_2__["SubscriptionState"].SubscriptionStateUpgradePending;
const OCSUpgradeActivity = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Upgrading OCS Operator"));


/***/ })

}]);
//# sourceMappingURL=ceph-storage-activity-card-e6bf8d1408ef01309422.js.map