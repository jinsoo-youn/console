(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-usage-breakdown-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.tsx":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/graphs/utils */ "./public/components/graphs/utils.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constants/index */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _breakdown_card_breakdown_body__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../breakdown-card/breakdown-body */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-body.tsx");
/* harmony import */ var _breakdown_card_breakdown_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../breakdown-card/breakdown-header */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-header.tsx");
/* harmony import */ var _breakdown_card_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../breakdown-card/utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx");
/* harmony import */ var _capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./capacity-breakdown-card.scss */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss");
/* harmony import */ var _capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_14__);















const keys = Object.keys(_constants_queries__WEBPACK_IMPORTED_MODULE_9__["breakdownQueryMap"]);
const dropdownOptions = lodash__WEBPACK_IMPORTED_MODULE_1__["zipObject"](keys, keys);
const BreakdownCard = ({ watchPrometheus, stopWatchPrometheusQuery, prometheusResults, }) => {
    const [metricType, setMetricType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_constants_index__WEBPACK_IMPORTED_MODULE_10__["PROJECTS"]);
    const { queries, model, metric } = _constants_queries__WEBPACK_IMPORTED_MODULE_9__["breakdownQueryMap"][metricType];
    const queryKeys = Object.keys(queries);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        queryKeys.forEach((q) => watchPrometheus(queries[q]));
        return () => queryKeys.forEach((key) => stopWatchPrometheusQuery(queries[key]));
    }, [watchPrometheus, stopWatchPrometheusQuery, metricType, queryKeys, queries]);
    const results = queryKeys.map((key) => prometheusResults.getIn([queries[key], 'data']));
    const queriesLoadError = queryKeys.some((q) => prometheusResults.getIn([queries[q], 'loadError']));
    const queriesDataLoaded = queryKeys.some((q) => !prometheusResults.getIn([queries[q], 'data']));
    const humanize = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeBinaryBytes"];
    const top6MetricsData = Object(_console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_8__["getInstantVectorStats"])(results[0], metric);
    const top5SortedMetricsData = Object(_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_13__["sortInstantVectorStats"])(top6MetricsData);
    const top5MetricsStats = Object(_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_13__["getStackChartStats"])(top5SortedMetricsData, humanize);
    const metricTotal = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](results[1], 'data.result[0].value[1]');
    const cephAvailable = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](results[2], 'data.result[0].value[1]');
    const cephUsed = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](results[3], 'data.result[0].value[1]');
    const link = `topk(20, (${_constants_queries__WEBPACK_IMPORTED_MODULE_9__["CAPACITY_BREAKDOWN_QUERIES"][queryKeys[0]]}))`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_5__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Capacity breakdown"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-capacity-breakdown-card__header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_breakdown_card_breakdown_header__WEBPACK_IMPORTED_MODULE_12__["HeaderPrometheusViewLink"], { link: link }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { items: dropdownOptions, onChange: setMetricType, selectedKey: metricType, title: metricType }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__["default"], { classname: "ceph-capacity-breakdown-card__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_breakdown_card_breakdown_body__WEBPACK_IMPORTED_MODULE_11__["BreakdownCardBody"], { isLoading: queriesDataLoaded, hasLoadError: queriesLoadError, metricTotal: metricTotal, top5MetricsStats: top5MetricsStats, capacityAvailable: cephAvailable, capacityUsed: cephUsed, metricModel: model, humanize: humanize }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_3__["withDashboardResources"])(BreakdownCard));


/***/ })

}]);
//# sourceMappingURL=ceph-storage-usage-breakdown-card-2463e24c8e951ad9e45c.js.map