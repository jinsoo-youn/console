(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./public/components/graphs/bar.tsx":
/*!******************************************!*\
  !*** ./public/components/graphs/bar.tsx ***!
  \******************************************/
/*! exports provided: BarChart, Bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/index.js");
/* harmony import */ var _utils_ref_width_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ref-width-hook */ "./public/components/utils/ref-width-hook.ts");
/* harmony import */ var _prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prometheus-poll-hook */ "./public/components/graphs/prometheus-poll-hook.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./public/components/graphs/helpers.ts");
/* harmony import */ var _prometheus_graph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prometheus-graph */ "./public/components/graphs/prometheus-graph.tsx");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes */ "./public/components/graphs/themes.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/graphs/utils.ts");
/* harmony import */ var _graph_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graph-empty */ "./public/components/graphs/graph-empty.tsx");










const DEFAULT_BAR_WIDTH = 10;
const PADDING_RATIO = 1 / 3;
const BarChart = ({ barSpacing = 15, barWidth = DEFAULT_BAR_WIDTH, data = [], LabelComponent, loading = false, noLink = false, query, theme = Object(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_1__["getCustomTheme"])(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_1__["ChartThemeColor"].blue, _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_1__["ChartThemeVariant"].light, _themes__WEBPACK_IMPORTED_MODULE_6__["barTheme"]), title, titleClassName, }) => {
    const [containerRef, width] = Object(_utils_ref_width_hook__WEBPACK_IMPORTED_MODULE_2__["useRefWidth"])();
    // Max space that horizontal padding should take up. By default, 2/3 of the horizontal space is always available for the actual bar graph.
    const maxHorizontalPadding = PADDING_RATIO * width;
    const padding = {
        bottom: barSpacing,
        left: 0,
        right: Math.min(100, maxHorizontalPadding),
        top: 0,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_prometheus_graph__WEBPACK_IMPORTED_MODULE_5__["PrometheusGraph"], { ref: containerRef, title: title, className: titleClassName }, data.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_prometheus_graph__WEBPACK_IMPORTED_MODULE_5__["PrometheusGraphLink"], { query: noLink ? undefined : query }, data.map((datum, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: index },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "graph-bar__label" }, LabelComponent ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LabelComponent, { title: datum.x, metric: datum.metric })) : (datum.x)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "graph-bar__chart" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_1__["ChartBar"], { barWidth: barWidth, data: [datum], horizontal: true, labelComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_1__["ChartLabel"], { x: width }), theme: theme, height: barWidth + padding.bottom, width: width, domain: { y: [0, data[0].y] }, padding: padding }))))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_graph_empty__WEBPACK_IMPORTED_MODULE_9__["GraphEmpty"], { loading: loading }))));
};
const Bar = ({ barSpacing, barWidth, delay = undefined, humanize = _utils__WEBPACK_IMPORTED_MODULE_7__["humanizeNumber"], LabelComponent, metric, namespace, noLink = false, query, theme, title, }) => {
    const [response, , loading] = Object(_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_3__["usePrometheusPoll"])({
        delay,
        endpoint: _helpers__WEBPACK_IMPORTED_MODULE_4__["PrometheusEndpoint"].QUERY,
        namespace,
        query,
    });
    const data = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getInstantVectorStats"])(response, metric, humanize);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BarChart, { barSpacing: barSpacing, barWidth: barWidth, data: data, LabelComponent: LabelComponent, loading: loading, noLink: noLink, query: query, theme: theme, title: title }));
};


/***/ }),

/***/ "./public/components/graphs/graph-loader.ts":
/*!**************************************************!*\
  !*** ./public/components/graphs/graph-loader.ts ***!
  \**************************************************/
/*! exports provided: Bar, Gauge, Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar */ "./public/components/graphs/bar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _bar__WEBPACK_IMPORTED_MODULE_0__["Bar"]; });

/* harmony import */ var _gauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauge */ "./public/components/graphs/gauge.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gauge", function() { return _gauge__WEBPACK_IMPORTED_MODULE_1__["Gauge"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area */ "./public/components/graphs/area.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return _area__WEBPACK_IMPORTED_MODULE_2__["Area"]; });






/***/ })

}]);
//# sourceMappingURL=16-dfdb9f54dbf6586d2af4.js.map