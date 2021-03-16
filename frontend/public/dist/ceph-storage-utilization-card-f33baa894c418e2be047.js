(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-utilization-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/utilization-card/utilization-card.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/utilization-card/utilization-card.tsx ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_internal_components_utils_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/dropdown */ "./public/components/utils/dropdown.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/UtilizationBody */ "./packages/console-shared/src/components/dashboard/utilization-card/UtilizationBody.tsx");
/* harmony import */ var _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/graph-helper/data-utils */ "./packages/console-shared/src/graph-helper/data-utils.ts");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/TopConsumerPopover */ "./packages/console-shared/src/components/dashboard/utilization-card/TopConsumerPopover.tsx");
/* harmony import */ var _console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/dashboard/dashboards-page/cluster-dashboard/utilization-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utilization-card.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared/src/components/dashboard/duration-hook */ "./packages/console-shared/src/components/dashboard/duration-hook.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/utilization-card/utils.tsx");













const UtilizationCard = () => {
    const [duration, setDuration] = Object(_console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_10__["useMetricDuration"])();
    const [timestamps, setTimestamps] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const storagePopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_8__["default"], { title: "Used Capacity", current: current, consumers: _constants_queries__WEBPACK_IMPORTED_MODULE_11__["utilizationPopoverQueryMap"], humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["humanizeBinaryBytes"] })), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Utilization"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { items: _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_10__["Duration"], onChange: setDuration, selectedKey: duration, title: duration })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_6__["default"], { timestamps: timestamps },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "Used Capacity", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_11__["UTILIZATION_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_11__["StorageDashboardQuery"].CEPH_CAPACITY_USED], duration: duration, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["humanizeBinaryBytes"], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_7__["ByteDataTypes"].BinaryBytes, setTimestamps: setTimestamps, TopConsumerPopover: storagePopover }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "IOPS", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_11__["UTILIZATION_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_11__["StorageDashboardQuery"].UTILIZATION_IOPS_QUERY], duration: duration, humanizeValue: _utils__WEBPACK_IMPORTED_MODULE_12__["humanizeIOPS"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "Latency", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_11__["UTILIZATION_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_11__["StorageDashboardQuery"].UTILIZATION_LATENCY_QUERY], duration: duration, humanizeValue: _utils__WEBPACK_IMPORTED_MODULE_12__["humanizeLatency"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "Throughput", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_11__["UTILIZATION_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_11__["StorageDashboardQuery"].UTILIZATION_THROUGHPUT_QUERY], duration: duration, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["humanizeDecimalBytesPerSec"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "Recovery", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_11__["UTILIZATION_QUERY"][_constants_queries__WEBPACK_IMPORTED_MODULE_11__["StorageDashboardQuery"].UTILIZATION_RECOVERY_RATE_QUERY], duration: duration, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["humanizeDecimalBytesPerSec"] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UtilizationCard);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/utilization-card/utils.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/utilization-card/utils.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: humanizeIOPS, humanizeLatency, getLatestValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeIOPS", function() { return humanizeIOPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanizeLatency", function() { return humanizeLatency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestValue", function() { return getLatestValue; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const humanizeIOPS = (value) => {
    const humanizedNumber = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"])(value);
    const unit = 'IOPS';
    return Object.assign(Object.assign({}, humanizedNumber), { string: `${humanizedNumber.value} ${unit}`, unit });
};
const humanizeLatency = (value) => {
    const humanizedTime = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeSeconds"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["secondsToNanoSeconds"])(value), null, 'ms');
    return humanizedTime;
};
const getLatestValue = (stats) => Number(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](stats[stats.length - 1], 'y'));


/***/ })

}]);
//# sourceMappingURL=ceph-storage-utilization-card-f33baa894c418e2be047.js.map