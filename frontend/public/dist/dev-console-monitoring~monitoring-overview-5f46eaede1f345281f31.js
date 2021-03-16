(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-monitoring~monitoring-overview"],{

/***/ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.scss":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.tsx ***!
  \***********************************************************************************************/
/*! exports provided: GraphTypes, MonitoringDashboardGraph, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphTypes", function() { return GraphTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringDashboardGraph", function() { return MonitoringDashboardGraph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_internal_components_monitoring_query_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/monitoring/query-browser */ "./public/components/monitoring/query-browser.tsx");
/* harmony import */ var _console_internal_components_graphs_prometheus_graph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/graphs/prometheus-graph */ "./public/components/graphs/prometheus-graph.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _MonitoringDashboardGraph_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MonitoringDashboardGraph.scss */ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.scss");
/* harmony import */ var _MonitoringDashboardGraph_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MonitoringDashboardGraph_scss__WEBPACK_IMPORTED_MODULE_9__);










var GraphTypes;
(function (GraphTypes) {
    GraphTypes["area"] = "Area";
    GraphTypes["line"] = "Line";
})(GraphTypes || (GraphTypes = {}));
const DEFAULT_TIME_SPAN = 30 * 60 * 1000;
const DEFAULT_SAMPLES = 30;
const MonitoringDashboardGraph = ({ query, namespace, title, patchQuery, graphType = GraphTypes.area, timespan, pollInterval, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "odc-monitoring-dashboard-graph" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_graphs_prometheus_graph__WEBPACK_IMPORTED_MODULE_7__["PrometheusGraphLink"], { query: query },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { onMouseEnter: () => patchQuery({ query }) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_monitoring_query_browser__WEBPACK_IMPORTED_MODULE_6__["QueryBrowser"], { hideControls: true, defaultTimespan: DEFAULT_TIME_SPAN, defaultSamples: DEFAULT_SAMPLES, namespace: namespace, queries: [query], isStack: graphType === GraphTypes.area, timespan: timespan, pollInterval: pollInterval }))))));
};
const mapDispatchToProps = (dispatch) => ({
    patchQuery: (v) => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_8__["queryBrowserPatchQuery"])(0, v)),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(MonitoringDashboardGraph));


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/queries.ts":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/queries.ts ***!
  \*******************************************************************/
/*! exports provided: metricsQuery, monitoringDashboardQueries, topWorkloadMetricsQueries, workloadMetricsQueries, getTopMetricsQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metricsQuery", function() { return metricsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitoringDashboardQueries", function() { return monitoringDashboardQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topWorkloadMetricsQueries", function() { return topWorkloadMetricsQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workloadMetricsQueries", function() { return workloadMetricsQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopMetricsQueries", function() { return getTopMetricsQueries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/MonitoringDashboardGraph */ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/graph-helper/data-utils */ "./packages/console-shared/src/graph-helper/data-utils.ts");




const metricsQuery = {
    PODS_BY_CPU: 'CPU Usage',
    PODS_BY_MEMORY: 'Memory Usage',
    PODS_BY_FILESYSTEM: 'Filesystem Usage',
    PODS_BY_NETWORK_IN: 'Receive Bandwidth',
    PODS_BY_NETWORK_OUT: 'Transmit Bandwidth',
    RATE_OF_RECEIVED_PACKETS: 'Rate of Received Packets',
    RATE_OF_TRANSMITTED_PACKETS: 'Rate of Transmitted Packets',
    RATE_OF_RECEIVED_PACKETS_DROPPED: 'Rate of Received Packets Dropped',
    RATE_OF_TRANSMITTED_PACKETS_DROPPED: 'Rate of Transmitted Packets Dropped',
};
const monitoringDashboardQueries = [
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_rate{cluster="", namespace='<%= namespace %>'}) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'CPU Usage',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeCpuCores"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(container_memory_working_set_bytes{cluster="", container!="", namespace='<%= namespace %>'}) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Memory Usage',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeBinaryBytes"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_bytes_total{cluster="", namespace='<%= namespace %>'}[2h])) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Receive Bandwidth',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_transmit_bytes_total{cluster="", namespace='<%= namespace %>'}[2h])) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Transmit Bandwidth',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_packets_total{cluster="", namespace='<%= namespace %>'}[2h])) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Rate of Received Packets',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_transmit_packets_total{cluster="", namespace='<%= namespace %>'}[2h])) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Rate of Transmitted Packets',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_packets_dropped_total{cluster="", namespace='<%= namespace %>'}[2h])) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Rate of Received Packets Dropped',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
    {
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_transmit_packets_dropped_total{cluster="", namespace='<%= namespace %>'}[2h])) by (pod)`),
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        title: 'Rate of Transmitted Packets Dropped',
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
    },
];
const topWorkloadMetricsQueries = [
    {
        title: 'CPU Usage',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeCpuCores"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_rate{cluster='', namespace='<%= namespace %>'}
          * on(namespace,pod) group_left(workload, workload_type) mixin_pod_workload{cluster='',
          namespace='<%= namespace %>', workload='<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Memory Usage',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeBinaryBytes"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].BinaryBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(container_memory_working_set_bytes{cluster='', namespace='<%= namespace %>', container!=""}
          * on(namespace,pod) group_left(workload, workload_type) mixin_pod_workload{cluster='',
          namespace='<%= namespace %>', workload='<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Receive Bandwidth',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_bytes_total{cluster="", namespace=~'<%= namespace %>'}[4h])
          * on (namespace,pod) group_left(workload,workload_type) mixin_pod_workload{cluster="",
          namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
];
const workloadMetricsQueries = [
    {
        title: 'Transmit Bandwidth',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_bytes_total{cluster="", namespace=~'<%= namespace %>'}[4h])
         * on (namespace,pod) group_left(workload,workload_type) mixin_pod_workload{cluster="",
         namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Rate of Received Packets',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_packets_total{cluster="", namespace=~'<%= namespace %>'}[4h])* on (namespace,pod)group_left(workload,workload_type) mixin_pod_workload{cluster="", namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Rate of Transmitted Packets',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_transmit_packets_total{cluster="", namespace=~'<%= namespace %>'}[4h])* on (namespace,pod)group_left(workload,workload_type) mixin_pod_workload{cluster="", namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Rate of Received Packets Dropped',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_receive_packets_dropped_total{cluster="", namespace=~'<%= namespace %>'}[4h])* on (namespace,pod) group_left(workload,workload_type) mixin_pod_workload{cluster="", namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Rate of Transmitted Packets Dropped',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(irate(container_network_transmit_packets_dropped_total{cluster="", namespace=~'<%= namespace %>'}[4h])* on (namespace,pod)
      group_left(workload,workload_type) mixin_pod_workload{cluster="", namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)
      `),
    },
    {
        title: 'Average Container Bandwidth by Pod: Received',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`avg(irate(container_network_receive_bytes_total{cluster="", namespace=~'<%= namespace %>'}[4h])* on (namespace,pod)group_left(workload,workload_type) mixin_pod_workload{cluster="", namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
    {
        title: 'Average Container Bandwidth by Pod: Transmitted',
        chartType: _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_1__["GraphTypes"].area,
        humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeDecimalBytesPerSec"],
        byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_3__["ByteDataTypes"].DecimalBytes,
        query: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`avg(irate(container_network_transmit_bytes_total{cluster="", namespace=~'<%= namespace %>'}[4h])* on (namespace,pod)group_left(workload,workload_type) mixin_pod_workload{cluster="", namespace=~'<%= namespace %>', workload=~'<%= workloadName %>', workload_type='<%= workloadType %>'}) by (pod)`),
    },
];
const getMetricsQuery = (title) => {
    const queryObject = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](monitoringDashboardQueries, (q) => q.title === title);
    return queryObject.query;
};
const topMetricsQueries = {
    PODS_BY_CPU: getMetricsQuery('CPU Usage'),
    PODS_BY_MEMORY: getMetricsQuery('Memory Usage'),
    PODS_BY_FILESYSTEM: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(pod:container_fs_usage_bytes:sum{container="",pod!="",namespace='<%= namespace %>'}) BY (pod, namespace)))`),
    PODS_BY_NETWORK_IN: getMetricsQuery('Receive Bandwidth'),
    PODS_BY_NETWORK_OUT: getMetricsQuery('Transmit Bandwidth'),
    RATE_OF_RECEIVED_PACKETS: getMetricsQuery('Rate of Received Packets'),
    RATE_OF_TRANSMITTED_PACKETS: getMetricsQuery('Rate of Transmitted Packets'),
    RATE_OF_RECEIVED_PACKETS_DROPPED: getMetricsQuery('Rate of Received Packets Dropped'),
    RATE_OF_TRANSMITTED_PACKETS_DROPPED: getMetricsQuery('Rate of Transmitted Packets Dropped'),
};
const getTopMetricsQueries = (namespace) => ({
    [metricsQuery.PODS_BY_CPU]: topMetricsQueries.PODS_BY_CPU({ namespace }),
    [metricsQuery.PODS_BY_MEMORY]: topMetricsQueries.PODS_BY_MEMORY({ namespace }),
    [metricsQuery.PODS_BY_FILESYSTEM]: topMetricsQueries.PODS_BY_FILESYSTEM({
        namespace,
    }),
    [metricsQuery.PODS_BY_NETWORK_IN]: topMetricsQueries.PODS_BY_NETWORK_IN({
        namespace,
    }),
    [metricsQuery.PODS_BY_NETWORK_OUT]: topMetricsQueries.PODS_BY_NETWORK_OUT({
        namespace,
    }),
    [metricsQuery.RATE_OF_RECEIVED_PACKETS]: topMetricsQueries.RATE_OF_RECEIVED_PACKETS({
        namespace,
    }),
    [metricsQuery.RATE_OF_TRANSMITTED_PACKETS]: topMetricsQueries.RATE_OF_TRANSMITTED_PACKETS({
        namespace,
    }),
    [metricsQuery.RATE_OF_RECEIVED_PACKETS_DROPPED]: topMetricsQueries.RATE_OF_RECEIVED_PACKETS_DROPPED({
        namespace,
    }),
    [metricsQuery.RATE_OF_TRANSMITTED_PACKETS_DROPPED]: topMetricsQueries.RATE_OF_TRANSMITTED_PACKETS_DROPPED({
        namespace,
    }),
});


/***/ })

}]);
//# sourceMappingURL=dev-console-monitoring~monitoring-overview-5f46eaede1f345281f31.js.map