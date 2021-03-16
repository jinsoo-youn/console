(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-service-data-consumption-card"],{

/***/ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card-dropdown.tsx":
/*!****************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card-dropdown.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: DataConsumptionDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConsumptionDropdown", function() { return DataConsumptionDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");



const DataConsumptionDropdown = ({ type, kpi, setType, setKpi, }) => {
    const [isOpenTypeDropdown, setIsOpenTypeDropdown] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [isOpenKpiDropdown, setIsOpenKpiDropdown] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const typesDropdown = {
        providers: _constants__WEBPACK_IMPORTED_MODULE_2__["PROVIDERS"],
        accounts: _constants__WEBPACK_IMPORTED_MODULE_2__["ACCOUNTS"],
    };
    const kpiDropdown = {
        iops: _constants__WEBPACK_IMPORTED_MODULE_2__["BY_IOPS"],
        usage: type === typesDropdown.accounts ? _constants__WEBPACK_IMPORTED_MODULE_2__["BY_LOGICAL_USAGE"] : _constants__WEBPACK_IMPORTED_MODULE_2__["BY_PHYSICAL_VS_LOGICAL_USAGE"],
        egress: _constants__WEBPACK_IMPORTED_MODULE_2__["BY_EGRESS"],
    };
    const typeDropdownItems = [
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "providers", key: "Providers", component: "button" }, "Providers"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "accounts", key: "Accounts", component: "button" }, "Accounts"),
    ];
    const providersKpiDropdownItems = [
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "iops", key: "iops", component: "button" }, "I/O Operations"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "usage", key: "phyVslog", component: "button" }, "Physical vs. Logical Usage"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "egress", key: "egress", component: "button" }, "Egress"),
    ];
    const accountKpiDropdownItems = [
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "iops", key: "iops", component: "button" }, "I/O Operations"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], { id: "usage", key: "phyVslog", component: "button" }, "Logical Used Capacity"),
    ];
    const onToggleTypeDropdown = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => {
        setIsOpenTypeDropdown(props);
    }, []);
    const onSelectTypeDropdown = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((e) => {
        setIsOpenTypeDropdown(!isOpenTypeDropdown);
        setType(typesDropdown[e.currentTarget.id]);
        if (kpi === _constants__WEBPACK_IMPORTED_MODULE_2__["BY_LOGICAL_USAGE"] || kpi === _constants__WEBPACK_IMPORTED_MODULE_2__["BY_PHYSICAL_VS_LOGICAL_USAGE"]) {
            const val = e.currentTarget.id === 'accounts' ? _constants__WEBPACK_IMPORTED_MODULE_2__["BY_LOGICAL_USAGE"] : _constants__WEBPACK_IMPORTED_MODULE_2__["BY_PHYSICAL_VS_LOGICAL_USAGE"];
            setKpi(val);
        }
        if (kpi === 'Egress' && e.currentTarget.id === 'accounts') {
            setKpi(kpiDropdown.iops);
        }
    }, [isOpenTypeDropdown, typesDropdown, kpiDropdown, kpi, setKpi, setType]);
    const onToggleKpiDropdown = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => {
        setIsOpenKpiDropdown(props);
    }, []);
    const onSelectKpiDropdown = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((e) => {
        setIsOpenKpiDropdown(!isOpenKpiDropdown);
        setKpi(kpiDropdown[e.currentTarget.id]);
    }, [isOpenKpiDropdown, kpiDropdown, setKpi]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-consumption-card__dropdown" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], { className: "nb-data-consumption-card__dropdown-item", autoFocus: false, onSelect: onSelectTypeDropdown, toggle: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], { onToggle: onToggleTypeDropdown }, type), position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownPosition"].right, isOpen: isOpenTypeDropdown, dropdownItems: typeDropdownItems }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], { className: "nb-data-consumption-card__dropdown-item", autoFocus: false, onSelect: onSelectKpiDropdown, toggle: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], { onToggle: onToggleKpiDropdown }, kpi), position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownPosition"].right, isOpen: isOpenKpiDropdown, dropdownItems: type === typesDropdown.accounts ? accountKpiDropdownItems : providersKpiDropdownItems })));
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card-utils.ts":
/*!************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card-utils.ts ***!
  \************************************************************************************************************/
/*! exports provided: DataConsumersValue, DataConsumersSortByValue, numberInWords, getQueries, getChartData, getLegendData, getDataConsumptionChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConsumersValue", function() { return DataConsumersValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConsumersSortByValue", function() { return DataConsumersSortByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInWords", function() { return numberInWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueries", function() { return getQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartData", function() { return getChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegendData", function() { return getLegendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataConsumptionChartData", function() { return getDataConsumptionChartData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/queries */ "./packages/noobaa-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");





const DataConsumersValue = {
    [_constants__WEBPACK_IMPORTED_MODULE_2__["PROVIDERS"]]: 'PROVIDERS_',
    [_constants__WEBPACK_IMPORTED_MODULE_2__["ACCOUNTS"]]: 'ACCOUNTS_',
};
const DataConsumersSortByValue = {
    [_constants__WEBPACK_IMPORTED_MODULE_2__["BY_IOPS"]]: 'BY_IOPS',
    [_constants__WEBPACK_IMPORTED_MODULE_2__["BY_LOGICAL_USAGE"]]: 'BY_LOGICAL_USAGE',
    [_constants__WEBPACK_IMPORTED_MODULE_2__["BY_PHYSICAL_VS_LOGICAL_USAGE"]]: 'BY_PHYSICAL_VS_LOGICAL_USAGE',
    [_constants__WEBPACK_IMPORTED_MODULE_2__["BY_EGRESS"]]: 'BY_EGRESS',
};
/* utility mapper to convert number in words */
const numberInWords = {
    '': '',
    k: 'thousands',
    m: 'millions',
    b: 'billions',
};
const getQueries = (metric, kpi) => {
    const queries = _constants_queries__WEBPACK_IMPORTED_MODULE_3__["DATA_CONSUMPTION_QUERIES"][_constants_queries__WEBPACK_IMPORTED_MODULE_3__["ObjectServiceDashboardQuery"][DataConsumersValue[metric] + DataConsumersSortByValue[kpi]]];
    const keys = Object.keys(queries);
    return { queries, keys };
};
const getMaxVal = (response, humanize) => {
    const result = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](response, 'data.result', []);
    let maxVal = { unit: '', value: 0, string: '' };
    if (result.length) {
        maxVal = humanize(lodash__WEBPACK_IMPORTED_MODULE_0__["maxBy"](result, (r) => Number(r.value[1])).value[1]);
    }
    return maxVal;
};
const getChartData = (response, metric, humanize, unit, name) => {
    const result = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](response, 'data.result', []);
    return result.map((r) => {
        const x = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](r, ['metric', metric], '');
        const y = parseFloat(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](r, 'value[1]'));
        let val = name;
        if (!name)
            val = x; // For Egress, which have the legend name(name) as providers name(x)
        return {
            name: val,
            x: lodash__WEBPACK_IMPORTED_MODULE_0__["truncate"](x, { length: 18 }),
            y: Number(humanize(y, null, unit).value),
        };
    });
};
const getLegendData = (response, humanize) => {
    const value = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getGaugeValue"])(response);
    return value ? humanize(value).string : '';
};
const getDataConsumptionChartData = (result, metric, dropdownValue) => {
    let chartData;
    let legendData;
    let max;
    let firstBarMax;
    let secondBarMax;
    let nonFormattedData;
    switch (dropdownValue) {
        case 'PROVIDERS_BY_IOPS':
        case 'ACCOUNTS_BY_IOPS':
            firstBarMax = getMaxVal(result.read, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"]);
            secondBarMax = getMaxVal(result.write, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"]);
            max = firstBarMax.value > secondBarMax.value ? firstBarMax : secondBarMax;
            chartData = [
                getChartData(result.read, metric, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"], max.unit, 'Total Reads'),
                getChartData(result.write, metric, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"], max.unit, 'Total Writes'),
            ];
            legendData = [
                { name: `Total Reads ${getLegendData(result.totalRead, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"])}` },
                { name: `Total Writes ${getLegendData(result.totalWrite, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeNumber"])}` },
            ];
            break;
        case 'ACCOUNTS_BY_LOGICAL_USAGE':
            max = getMaxVal(result.logicalUsage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"]);
            chartData = [
                getChartData(result.logicalUsage, metric, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"], max.unit, 'Total Logical Used Capacity'),
            ];
            legendData = [
                {
                    name: `Total Logical Used Capacity ${getLegendData(result.totalLogicalUsage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])}`,
                },
            ];
            break;
        case 'PROVIDERS_BY_PHYSICAL_VS_LOGICAL_USAGE':
            firstBarMax = getMaxVal(result.physicalUsage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"]);
            secondBarMax = getMaxVal(result.logicalUsage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"]);
            max = firstBarMax.value > secondBarMax.value ? firstBarMax : secondBarMax;
            chartData = [
                getChartData(result.logicalUsage, metric, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"], max.unit, 'Total Logical Used Capacity'),
                getChartData(result.physicalUsage, metric, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"], max.unit, 'Total Physical Used Capacity'),
            ];
            legendData = [
                {
                    name: `Total Logical Used Capacity ${getLegendData(result.totalLogicalUsage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])}`,
                },
                {
                    name: `Total Physical Used Capacity ${getLegendData(result.totalPhysicalUsage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])}`,
                },
            ];
            break;
        case 'PROVIDERS_BY_EGRESS':
            max = getMaxVal(result.egress, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"]);
            nonFormattedData = getChartData(result.egress, metric, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"], max.unit);
            chartData = nonFormattedData.length ? nonFormattedData.map((dataPoint) => [dataPoint]) : [[]];
            legendData = nonFormattedData.map((dataPoint) => ({
                name: `${dataPoint.x.replace(/(^[A-Z]|_[A-Z])([A-Z]+)/g, (_g, g1, g2) => g1 + g2.toLowerCase())} ${dataPoint.y} ${max.unit}`,
            }));
            break;
        default:
            chartData = [[{ x: '', y: 0, name: '' }]];
            legendData = [{ name: '' }];
    }
    return { chartData, legendData, max };
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card.scss":
/*!********************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_internal_components_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/graphs/graph-empty */ "./public/components/graphs/graph-empty.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
/* harmony import */ var _data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-consumption-card-utils */ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card-utils.ts");
/* harmony import */ var _data_consumption_card_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-consumption-card-dropdown */ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card-dropdown.tsx");
/* harmony import */ var _data_consumption_card_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-consumption-card.scss */ "./packages/noobaa-storage-plugin/src/components/data-consumption-card/data-consumption-card.scss");
/* harmony import */ var _data_consumption_card_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_data_consumption_card_scss__WEBPACK_IMPORTED_MODULE_12__);













const DataConsumptionCard = ({ watchPrometheus, stopWatchPrometheusQuery, prometheusResults, }) => {
    const [metricType, setMetricType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_constants__WEBPACK_IMPORTED_MODULE_9__["PROVIDERS"]);
    const [sortByKpi, setsortByKpi] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_constants__WEBPACK_IMPORTED_MODULE_9__["BY_IOPS"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const { queries, keys } = Object(_data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__["getQueries"])(metricType, sortByKpi);
        keys.forEach((key) => watchPrometheus(queries[key]));
        return () => keys.forEach((key) => stopWatchPrometheusQuery(queries[key]));
    }, [watchPrometheus, stopWatchPrometheusQuery, metricType, sortByKpi]);
    const { queries, keys } = Object(_data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__["getQueries"])(metricType, sortByKpi);
    const result = {};
    const error = keys.some((key) => prometheusResults.getIn([queries[key], 'loadError']));
    keys.forEach((key) => {
        result[key] = prometheusResults.getIn([queries[key], 'data']); // building an object having 'key'from the queries object and 'value' as the Prometheus response
    });
    let padding;
    let suffixLabel = '';
    let maxVal;
    let maxUnit;
    let body;
    const isLoading = lodash__WEBPACK_IMPORTED_MODULE_1__["values"](result).includes(undefined);
    const metric = metricType === _constants__WEBPACK_IMPORTED_MODULE_9__["PROVIDERS"] ? 'type' : 'account';
    const curentDropdown = _data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__["DataConsumersValue"][metricType] + _data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__["DataConsumersSortByValue"][sortByKpi];
    const { chartData, legendData, max } = Object(_data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__["getDataConsumptionChartData"])(result, metric, curentDropdown);
    // chartData = [[],[],[],[],[],[]] or []
    if (!chartData.some(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])) {
        padding =
            chartData[0].length === 2 || (sortByKpi === _constants__WEBPACK_IMPORTED_MODULE_9__["BY_EGRESS"] && chartData.length === 2) ? 125 : 25; // Adjusts spacing between each BarGroup
        maxVal = max.value;
        maxUnit = max.unit;
        suffixLabel = maxUnit;
        if (sortByKpi === _constants__WEBPACK_IMPORTED_MODULE_9__["BY_IOPS"]) {
            suffixLabel = _data_consumption_card_utils__WEBPACK_IMPORTED_MODULE_10__["numberInWords"][maxUnit];
        }
        // if suffixLabel is a non-empty string, show it in expected form
        if (suffixLabel)
            suffixLabel = `(in ${suffixLabel})`;
    }
    if (isLoading) {
        body = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text nb-data-consumption-card__chart-skeleton" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_8__["GraphEmpty"], { height: 200, loading: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text nb-data-consumption-card__chart-legend-skeleton" })));
    }
    else if (!error && !chartData.some(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])) {
        body = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-consumption-card__chart-label text-secondary" },
                _constants__WEBPACK_IMPORTED_MODULE_9__["CHART_LABELS"][sortByKpi],
                " ",
                suffixLabel),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["Chart"], { containerComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartVoronoiContainer"], { labelComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartTooltip"], { style: { fontSize: 8, paddingBottom: 0 } }), labels: ({ datum }) => `${datum.y} ${maxUnit}`, voronoiDimension: "x" }), minDomain: { y: 0 }, maxDomain: { y: maxVal + Math.round(maxVal * 0.25) }, domainPadding: { x: [padding, padding] }, legendComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartLegend"], { themeColor: _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartThemeColor"].purple, data: legendData, orientation: "horizontal", symbolSpacer: 5, gutter: 2, height: 30, padding: { top: 50, bottom: 0 }, style: { labels: { fontSize: 8 } } }), legendPosition: "bottom-left", padding: {
                    bottom: 50,
                    left: 30,
                    right: 20,
                    top: 30,
                }, themeColor: _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartThemeColor"].purple },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartAxis"], { style: { tickLabels: { fontSize: 8, padding: 2 } } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartAxis"], { dependentAxis: true, showGrid: true, tickCount: 10, style: {
                        tickLabels: { fontSize: 8, padding: 0 },
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartGroup"], { offset: sortByKpi === _constants__WEBPACK_IMPORTED_MODULE_9__["BY_EGRESS"] ? 0 : 11 }, chartData.map((data, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_2__["ChartBar"], { key: `chartbar-${i}`, data: data }) // eslint-disable-line react/no-array-index-key
                ))))));
    }
    else {
        body = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_8__["GraphEmpty"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Data Consumption"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_data_consumption_card_dropdown__WEBPACK_IMPORTED_MODULE_11__["DataConsumptionDropdown"], { type: metricType, setType: setMetricType, kpi: sortByKpi, setKpi: setsortByKpi })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "co-dashboard-card__body--top-margin" }, body)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__["withDashboardResources"])(DataConsumptionCard));


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

/***/ "./packages/noobaa-storage-plugin/src/constants/queries.ts":
/*!*****************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/constants/queries.ts ***!
  \*****************************************************************/
/*! exports provided: ObjectServiceDashboardQuery, DATA_CONSUMPTION_QUERIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectServiceDashboardQuery", function() { return ObjectServiceDashboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_CONSUMPTION_QUERIES", function() { return DATA_CONSUMPTION_QUERIES; });
var ObjectServiceDashboardQuery;
(function (ObjectServiceDashboardQuery) {
    ObjectServiceDashboardQuery["ACCOUNTS_BY_IOPS"] = "ACCOUNTS_BY_IOPS";
    ObjectServiceDashboardQuery["ACCOUNTS_BY_LOGICAL_USAGE"] = "ACCOUNTS_BY_LOGICAL_USAGE";
    ObjectServiceDashboardQuery["PROVIDERS_BY_IOPS"] = "PROVIDERS_BY_IOPS";
    ObjectServiceDashboardQuery["PROVIDERS_BY_PHYSICAL_VS_LOGICAL_USAGE"] = "PROVIDERS_BY_PHYSICAL_VS_LOGICAL_USAGE";
    ObjectServiceDashboardQuery["PROVIDERS_BY_EGRESS"] = "PROVIDERS_BY_EGRESS";
})(ObjectServiceDashboardQuery || (ObjectServiceDashboardQuery = {}));
const DATA_CONSUMPTION_QUERIES = {
    [ObjectServiceDashboardQuery.ACCOUNTS_BY_IOPS]: {
        read: 'topk(5,NooBaa_accounts_usage_read_count)',
        write: 'topk(5,NooBaa_accounts_usage_write_count)',
        totalRead: 'sum(topk(5,NooBaa_accounts_usage_read_count))',
        totalWrite: 'sum(topk(5,NooBaa_accounts_usage_write_count))',
    },
    [ObjectServiceDashboardQuery.ACCOUNTS_BY_LOGICAL_USAGE]: {
        logicalUsage: 'topk(5,NooBaa_accounts_usage_logical)',
        totalLogicalUsage: 'sum(topk(5,NooBaa_accounts_usage_logical))',
    },
    [ObjectServiceDashboardQuery.PROVIDERS_BY_IOPS]: {
        read: 'topk(5,NooBaa_providers_ops_read_num)',
        write: 'topk(5,NooBaa_providers_ops_write_num)',
        totalRead: 'sum(topk(5,NooBaa_providers_ops_read_num))',
        totalWrite: 'sum(topk(5,NooBaa_providers_ops_write_num))',
    },
    [ObjectServiceDashboardQuery.PROVIDERS_BY_PHYSICAL_VS_LOGICAL_USAGE]: {
        physicalUsage: 'topk(5,NooBaa_providers_physical_size)',
        logicalUsage: 'topk(5,NooBaa_providers_logical_size)',
        totalPhysicalUsage: 'sum(topk(5,NooBaa_providers_physical_size))',
        totalLogicalUsage: 'sum(topk(5,NooBaa_providers_logical_size))',
    },
    [ObjectServiceDashboardQuery.PROVIDERS_BY_EGRESS]: {
        egress: 'topk(5,NooBaa_providers_bandwidth_read_size + NooBaa_providers_bandwidth_write_size)',
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
//# sourceMappingURL=object-service-data-consumption-card-cc9249febec8b4061d8b.js.map