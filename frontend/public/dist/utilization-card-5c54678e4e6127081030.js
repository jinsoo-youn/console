(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utilization-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/independent-dashboard-page/utilization-card/card.tsx":
/*!**********************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-dashboard-page/utilization-card/card.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/UtilizationBody */ "./packages/console-shared/src/components/dashboard/utilization-card/UtilizationBody.tsx");
/* harmony import */ var _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/graph-helper/data-utils */ "./packages/console-shared/src/graph-helper/data-utils.ts");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/duration-hook */ "./packages/console-shared/src/components/dashboard/duration-hook.ts");
/* harmony import */ var _console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/dashboard/dashboards-page/cluster-dashboard/utilization-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utilization-card.tsx");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");











const UtilizationCard = () => {
    const [duration, setDuration] = Object(_console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_8__["useMetricDuration"])();
    const [timestamps, setTimestamps] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Utilization"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { items: _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_8__["Duration"], onChange: setDuration, selectedKey: duration, title: duration })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_5__["default"], { timestamps: timestamps },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "Used Capacity", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_10__["INDEPENDENT_UTILIZATION_QUERIES"][_constants_queries__WEBPACK_IMPORTED_MODULE_10__["StorageDashboardQuery"].USED_CAPACITY], duration: duration, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["humanizeBinaryBytes"], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_6__["ByteDataTypes"].BinaryBytes, setTimestamps: setTimestamps }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_9__["PrometheusUtilizationItem"], { title: "Requested capacity", utilizationQuery: _constants_queries__WEBPACK_IMPORTED_MODULE_10__["INDEPENDENT_UTILIZATION_QUERIES"][_constants_queries__WEBPACK_IMPORTED_MODULE_10__["StorageDashboardQuery"].REQUESTED_CAPACITY], duration: duration, humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["humanizeBinaryBytes"], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_6__["ByteDataTypes"].BinaryBytes, setTimestamps: setTimestamps })))));
};
/* harmony default export */ __webpack_exports__["default"] = (UtilizationCard);


/***/ })

}]);
//# sourceMappingURL=utilization-card-5c54678e4e6127081030.js.map