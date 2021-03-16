(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-usage-breakdown-card~independent-breakdown-card~object-service-capacity-breakdown-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-body.tsx":
/*!************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-body.tsx ***!
  \************************************************************************************************************************/
/*! exports provided: BreakdownCardBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownCardBody", function() { return BreakdownCardBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx");
/* harmony import */ var _breakdown_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breakdown-chart */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-chart.tsx");
/* harmony import */ var _breakdown_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breakdown-loading */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-loading.tsx");
/* harmony import */ var _breakdown_capacity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breakdown-capacity */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-capacity.tsx");






const BreakdownCardBody = ({ top5MetricsStats, metricTotal, capacityUsed, capacityAvailable, metricModel, humanize, isLoading, hasLoadError, ocsVersion = '', }) => {
    if (isLoading && !hasLoadError) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_breakdown_loading__WEBPACK_IMPORTED_MODULE_4__["BreakdownChartLoading"], null);
    }
    if (!capacityUsed || !top5MetricsStats.length || hasLoadError) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" }, "Not available");
    }
    if (capacityUsed === '0') {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" }, "Not enough usage data");
    }
    const usedCapacity = `${humanize(capacityUsed).string} used`;
    const availableCapacity = `${humanize(capacityAvailable).string} available`;
    const chartData = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addAvailable"])(top5MetricsStats, capacityAvailable, metricTotal, humanize);
    const legends = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getLegends"])(chartData);
    // Removes Legend for available
    if (capacityAvailable) {
        legends.pop();
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_breakdown_capacity__WEBPACK_IMPORTED_MODULE_5__["TotalCapacityBody"], { value: usedCapacity })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 }, capacityAvailable && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_breakdown_capacity__WEBPACK_IMPORTED_MODULE_5__["TotalCapacityBody"], { value: availableCapacity, className: "capacity-breakdown-card__available-body text-secondary" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 12 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_breakdown_chart__WEBPACK_IMPORTED_MODULE_3__["BreakdownChart"], { data: chartData, legends: legends, metricModel: metricModel, ocsVersion: ocsVersion }))));
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-capacity.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-capacity.tsx ***!
  \****************************************************************************************************************************/
/*! exports provided: TotalCapacityBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalCapacityBody", function() { return TotalCapacityBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakdown_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakdown-card.scss */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-card.scss");
/* harmony import */ var _breakdown_card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const TotalCapacityBody = ({ value, className }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('capacity-breakdown-card__capacity-body', className) }, value);
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-card.scss":
/*!*************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-card.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-chart.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-chart.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: LinkableLegend, BreakdownChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkableLegend", function() { return LinkableLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownChart", function() { return BreakdownChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_ceph_storage_plugin_src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consts */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/consts.ts");
/* harmony import */ var _breakdown_card_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./breakdown-card.scss */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-card.scss");
/* harmony import */ var _breakdown_card_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_9__);










const LinkableLegend = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((props) => {
    const { metricModel, datum, ocsVersion } = props;
    let href = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(metricModel, datum.link, datum.ns);
    const customLegend = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: datum.link, enableFlip: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartLabel"], Object.assign({}, props, { lineHeight: 1.2, style: [
                Object.assign(Object.assign({}, datum.labels), { fontSize: 9 }),
                { fill: 'black', fontSize: 8 },
            ] }))));
    if (datum.labelId === _consts__WEBPACK_IMPORTED_MODULE_8__["OTHER"] || datum.labelId === _consts__WEBPACK_IMPORTED_MODULE_8__["CLUSTERWIDE"]) {
        return customLegend;
    }
    if (metricModel.kind === _consts__WEBPACK_IMPORTED_MODULE_8__["BUCKETCLASSKIND"]) {
        if (ocsVersion) {
            href = `/k8s/ns/${_console_ceph_storage_plugin_src_constants__WEBPACK_IMPORTED_MODULE_6__["CEPH_STORAGE_NAMESPACE"]}/clusterserviceversions/${ocsVersion}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(metricModel)}/${datum.link}`;
        }
        else {
            return customLegend;
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: href, className: "capacity-breakdown-card__legend-link" }, customLegend));
});
const BreakdownChart = ({ data, legends, metricModel, ocsVersion, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["Chart"], { legendPosition: "bottom-left", legendComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartLegend"], { themeColor: _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartThemeColor"].multiOrdered, data: legends, y: 40, labelComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkableLegend, { metricModel: metricModel, ocsVersion: ocsVersion }), orientation: "horizontal", symbolSpacer: 7, gutter: 10, height: 50, style: { labels: { fontSize: 8 } } }), height: 60, padding: {
            bottom: 35,
            top: 0,
            right: 0,
            left: 0,
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartAxis"], { style: { axis: { stroke: 'none' }, ticks: { stroke: 'none' } }, tickFormat: () => '' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartStack"], { horizontal: true }, data.map((d, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartBar"], { key: d.id, style: { data: { stroke: 'white', strokeWidth: 0.7, fill: d.fill } }, cornerRadius: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getBarRadius"])(index, data.length), barWidth: 12, padding: 0, data: [d], labelComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartTooltip"], { dx: 0, style: { fontSize: 8, padding: 5 } }) })))))));


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-header.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-header.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: HeaderPrometheusViewLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPrometheusViewLink", function() { return HeaderPrometheusViewLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


const HeaderPrometheusViewLink = ({ link }) => {
    const params = new URLSearchParams();
    params.set('query0', link);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "capacity-breakdown-card__header-link" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/monitoring/query-browser?${params}` }, "View more")));
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-loading.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-loading.tsx ***!
  \***************************************************************************************************************************/
/*! exports provided: BreakdownChartLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownChartLoading", function() { return BreakdownChartLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _breakdown_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakdown-card.scss */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-card.scss");
/* harmony import */ var _breakdown_card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_2__);



const BreakdownChartLoading = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], { className: "skeleton-box" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4, className: "skeleton-activity" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4, className: "skeleton-activity skeleton-stack-no-show" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4, className: "skeleton-activity" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 12, className: "skeleton-activity skeleton-stack-bar" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2, className: "skeleton-activity skeleton-stack-legend" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2, className: "skeleton-activity skeleton-stack-legend" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2, className: "skeleton-activity skeleton-stack-legend" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2, className: "skeleton-activity skeleton-stack-legend" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2, className: "skeleton-activity skeleton-stack-legend" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2, className: "skeleton-activity skeleton-stack-legend" })));


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/consts.ts":
/*!***************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/consts.ts ***!
  \***************************************************************************************************************/
/*! exports provided: Colors, COLORMAP, OTHER, CLUSTERWIDE, BUCKETCLASSKIND, OTHER_TOOLTIP, CLUSTERWIDE_TOOLTIP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORMAP", function() { return COLORMAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER", function() { return OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLUSTERWIDE", function() { return CLUSTERWIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKETCLASSKIND", function() { return BUCKETCLASSKIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER_TOOLTIP", function() { return OTHER_TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLUSTERWIDE_TOOLTIP", function() { return CLUSTERWIDE_TOOLTIP; });
var Colors;
(function (Colors) {
    Colors["AVAILABLE"] = "#b8bbbe";
    Colors["OTHER"] = "#000";
    Colors["LINK"] = "#0066cc";
})(Colors || (Colors = {}));
const COLORMAP = [
    'rgb(236, 122, 8)',
    'rgb(139, 193, 247)',
    'rgb(76, 177, 64)',
    'rgb(160, 158, 220)',
    'rgb(0, 149, 150)',
];
const OTHER = 'Other';
const CLUSTERWIDE = 'Cluster-wide';
const BUCKETCLASSKIND = 'BucketClass';
const OTHER_TOOLTIP = 'All other capacity usage that are not a part of the top 5 consumers.';
const CLUSTERWIDE_TOOLTIP = 'Any NON Object bucket claims that were created via an S3 client or via the NooBaa UI system.';


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx":
/*!***************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: addAvailable, getLegends, getBarRadius, sortInstantVectorStats, getStackChartStats, getCapacityValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAvailable", function() { return addAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegends", function() { return getLegends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarRadius", function() { return getBarRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortInstantVectorStats", function() { return sortInstantVectorStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStackChartStats", function() { return getStackChartStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapacityValue", function() { return getCapacityValue; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/consts.ts");


const getTotal = (stats) => stats.reduce((total, dataPoint) => total + dataPoint.y, 0);
const addOthers = (stats, metricTotal, humanize) => {
    const top5Total = getTotal(stats);
    const others = Number(metricTotal) - top5Total;
    const othersData = {
        x: '0',
        y: others,
        name: 'Other',
        color: _consts__WEBPACK_IMPORTED_MODULE_1__["Colors"].OTHER,
        label: humanize(others).string,
        fill: 'rgb(96, 98, 103)',
        link: _consts__WEBPACK_IMPORTED_MODULE_1__["OTHER_TOOLTIP"],
        id: 6,
        ns: '',
    };
    return othersData;
};
const addAvailable = (stats, capacityAvailable, metricTotal, humanize) => {
    let othersData;
    let availableData;
    let newChartData = [...stats];
    if (stats.length === 5) {
        othersData = addOthers(stats, metricTotal, humanize);
        newChartData = [...stats, othersData];
    }
    if (capacityAvailable) {
        const availableInBytes = Number(capacityAvailable);
        availableData = {
            x: '0',
            y: availableInBytes,
            name: 'Available',
            link: '',
            color: '',
            label: humanize(availableInBytes).string,
            fill: '#b8bbbe',
            id: 7,
            ns: '',
        };
        newChartData = [...newChartData, availableData];
    }
    return newChartData;
};
const getLegends = (data) => data.map((d) => ({
    name: `${d.name}\n${d.label}`,
    labels: { fill: d.color },
    symbol: { fill: d.fill },
    link: d.link,
    labelId: d.name,
    ns: d.ns,
}));
const getBarRadius = (index, length) => {
    if (index === length - 1) {
        return {
            bottom: 3,
            top: 3,
        };
    }
    if (index === 0) {
        return { bottom: 3 };
    }
    return {};
};
const sortInstantVectorStats = (stats) => {
    stats.sort((a, b) => {
        const y1 = a.y;
        const y2 = b.y;
        if (y1 === y2) {
            const x1 = a.x;
            const x2 = b.x;
            return x1 < x2 ? -1 : x1 > x2 ? 1 : 0;
        }
        return y2 - y1;
    });
    return stats.length === 6 ? stats.splice(0, 5) : stats;
};
const getStackChartStats = (response, humanize) => response.map((r, i) => {
    const capacity = humanize(r.y).string;
    return {
        // x value needs to be same for single bar stack chart
        x: '0',
        y: r.y,
        name: lodash__WEBPACK_IMPORTED_MODULE_0__["truncate"](`${r.x}`, { length: 12 }),
        link: `${r.x}`,
        color: _consts__WEBPACK_IMPORTED_MODULE_1__["Colors"].LINK,
        fill: _consts__WEBPACK_IMPORTED_MODULE_1__["COLORMAP"][i],
        label: capacity,
        id: i,
        ns: r.metric.namespace,
    };
});
const getCapacityValue = (cephUsed, cephTotal, humanize) => {
    const totalFormatted = humanize(cephTotal || 0);
    const usedFormatted = humanize(cephUsed || 0, null, totalFormatted.unit);
    const available = humanize(totalFormatted.value - usedFormatted.value, totalFormatted.unit, totalFormatted.unit);
    return available;
};


/***/ })

}]);
//# sourceMappingURL=ceph-storage-usage-breakdown-card~independent-breakdown-card~object-service-capacity-breakdown-card-28103a04ad7f5e6917a1.js.map