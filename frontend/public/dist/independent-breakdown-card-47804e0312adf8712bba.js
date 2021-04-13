(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["independent-breakdown-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/independent-dashboard-page/breakdown-card/card.tsx":
/*!********************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-dashboard-page/breakdown-card/card.tsx ***!
  \********************************************************************************************************/
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
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _dashboard_page_storage_dashboard_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../dashboard-page/storage-dashboard/breakdown-card/utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx");
/* harmony import */ var _dashboard_page_storage_dashboard_breakdown_card_breakdown_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dashboard-page/storage-dashboard/breakdown-card/breakdown-header */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-header.tsx");
/* harmony import */ var _dashboard_page_storage_dashboard_breakdown_card_breakdown_body__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dashboard-page/storage-dashboard/breakdown-card/breakdown-body */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-body.tsx");
/* harmony import */ var _dashboard_page_storage_dashboard_capacity_breakdown_capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/capacity-breakdown/capacity-breakdown-card.scss");
/* harmony import */ var _dashboard_page_storage_dashboard_capacity_breakdown_capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_dashboard_page_storage_dashboard_capacity_breakdown_capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_14__);















const keys = Object.keys(_constants_queries__WEBPACK_IMPORTED_MODULE_9__["breakdownIndependentQueryMap"]);
const dropdownOptions = lodash__WEBPACK_IMPORTED_MODULE_1__["zipObject"](keys, keys);
const BreakdownCard = ({ watchPrometheus, stopWatchPrometheusQuery, prometheusResults, }) => {
    var _a, _b, _c;
    const [metricType, setMetricType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_constants__WEBPACK_IMPORTED_MODULE_10__["PROJECTS"]);
    const { queries, model, metric } = _constants_queries__WEBPACK_IMPORTED_MODULE_9__["breakdownIndependentQueryMap"][metricType];
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
    const top5SortedMetricsData = Object(_dashboard_page_storage_dashboard_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_11__["sortInstantVectorStats"])(top6MetricsData);
    const top5MetricsStats = Object(_dashboard_page_storage_dashboard_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_11__["getStackChartStats"])(top5SortedMetricsData, humanize);
    const metricTotal = (_c = (_b = (_a = results[1]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.result[0]) === null || _c === void 0 ? void 0 : _c.value[1];
    const link = `topk(20, (${_constants_queries__WEBPACK_IMPORTED_MODULE_9__["CAPACITY_BREAKDOWN_QUERIES"][queryKeys[0]]}))`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_5__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Capacity breakdown"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-capacity-breakdown-card__header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dashboard_page_storage_dashboard_breakdown_card_breakdown_header__WEBPACK_IMPORTED_MODULE_12__["HeaderPrometheusViewLink"], { link: link }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { items: dropdownOptions, onChange: setMetricType, selectedKey: metricType, title: metricType }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__["default"], { classname: "ceph-capacity-breakdown-card__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dashboard_page_storage_dashboard_breakdown_card_breakdown_body__WEBPACK_IMPORTED_MODULE_13__["BreakdownCardBody"], { isLoading: queriesDataLoaded, hasLoadError: queriesLoadError, metricTotal: metricTotal, capacityUsed: metricTotal, top5MetricsStats: top5MetricsStats, metricModel: model, humanize: humanize }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_3__["withDashboardResources"])(BreakdownCard));


/***/ })

}]);
//# sourceMappingURL=independent-breakdown-card-47804e0312adf8712bba.js.map