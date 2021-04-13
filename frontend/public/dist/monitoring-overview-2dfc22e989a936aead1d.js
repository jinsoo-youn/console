(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitoring-overview"],{

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringMetrics.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringMetrics.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_graphs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/graphs */ "./public/components/graphs/index.tsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries */ "./packages/dev-console/src/components/monitoring/queries.ts");
/* harmony import */ var _dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/MonitoringDashboardGraph */ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.tsx");





const WorkloadGraphs = Object(_console_internal_components_graphs__WEBPACK_IMPORTED_MODULE_2__["requirePrometheus"])(({ resource }) => {
    var _a, _b, _c;
    const namespace = (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
    const workloadName = (_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.name;
    const workloadType = (_c = resource === null || resource === void 0 ? void 0 : resource.kind) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](_queries__WEBPACK_IMPORTED_MODULE_3__["topWorkloadMetricsQueries"], (q) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dashboard_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_4__["default"], { key: q.title, title: q.title, namespace: namespace, graphType: q.chartType, query: q.query({ namespace, workloadName, workloadType }), humanize: q.humanize, byteDataType: q.byteDataType })))));
});
/* harmony default export */ __webpack_exports__["default"] = (WorkloadGraphs);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverview.scss":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringOverview.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverview.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringOverview.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _MonitoringOverviewEventsWarning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MonitoringOverviewEventsWarning */ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEventsWarning.tsx");
/* harmony import */ var _MonitoringOverviewEvents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MonitoringOverviewEvents */ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEvents.tsx");
/* harmony import */ var _MonitoringMetrics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MonitoringMetrics */ "./packages/dev-console/src/components/monitoring/overview/MonitoringMetrics.tsx");
/* harmony import */ var _MonitoringOverview_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MonitoringOverview.scss */ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverview.scss");
/* harmony import */ var _MonitoringOverview_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MonitoringOverview_scss__WEBPACK_IMPORTED_MODULE_11__);












const MonitoringOverview = (props) => {
    var _a, _b;
    const { resource, pods, resourceEvents } = props;
    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](['metrics']);
    if (!resourceEvents ||
        !resourceEvents.loaded ||
        (pods && pods.find((pod) => !props[pod.metadata.uid] || !props[pod.metadata.uid].loaded))) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["LoadingBox"], null);
    }
    let events = [...resourceEvents.data];
    if (pods) {
        pods.forEach((pod) => {
            const podData = props[pod.metadata.uid];
            if (podData) {
                events.push(...podData.data);
            }
        });
    }
    events = Object(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_6__["sortEvents"])(events);
    const eventWarning = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](events, ['type', 'Warning']);
    const onToggle = (id) => {
        const index = expanded.indexOf(id);
        const newExpanded = index >= 0
            ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)]
            : [...expanded, id];
        setExpanded(newExpanded);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-overview" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Accordion"], { asDefinitionList: false, noBoxShadow: true, className: "odc-monitoring-overview__metric-accordion", headingLevel: "h5" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionToggle"], { onClick: () => {
                        onToggle('events-warning');
                    }, isExpanded: expanded.includes('events-warning'), id: "events-warning", className: "odc-monitoring-overview__event-warning-toggle" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Split"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SplitItem"], null, "Events (Warning)"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SplitItem"], { isFilled: true }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SplitItem"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Badge"], null, eventWarning.length)))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionContent"], { className: "odc-monitoring-overview__event-warning-body", id: "events-warning-content", isHidden: !expanded.includes('events-warning') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MonitoringOverviewEventsWarning__WEBPACK_IMPORTED_MODULE_8__["default"], { events: eventWarning }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionToggle"], { onClick: () => {
                        onToggle('metrics');
                    }, isExpanded: expanded.includes('metrics'), id: "metrics" }, "Metrics"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionContent"], { id: "metrics-content", isHidden: !expanded.includes('metrics') }, resource.kind === _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentConfigModel"].kind ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["EmptyState"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["EmptyStateIcon"], { className: "odc-monitoring-overview__empty-state-icon", icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["InfoCircleIcon"] }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], { size: "md" }, "No Metrics Found"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["EmptyStateBody"], null, "Deployment Configuration metrics are not yet supported."))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-overview__view-monitoring-dashboard" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/dev-monitoring/ns/${(_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.namespace}/?workloadName=${(_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.name}&workloadType=${resource === null || resource === void 0 ? void 0 : resource.kind}` }, "View monitoring dashboard")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MonitoringMetrics__WEBPACK_IMPORTED_MODULE_10__["default"], { resource: resource }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionToggle"], { onClick: () => {
                        onToggle('all-events');
                    }, isExpanded: expanded.includes('all-events'), id: "all-events" }, "All Events"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["AccordionContent"], { id: "all-events-content", isHidden: !expanded.includes('all-events') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MonitoringOverviewEvents__WEBPACK_IMPORTED_MODULE_9__["default"], { events: events }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (MonitoringOverview);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEvents.scss":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEvents.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEvents.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEvents.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _MonitoringOverviewEvents_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MonitoringOverviewEvents.scss */ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEvents.scss");
/* harmony import */ var _MonitoringOverviewEvents_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MonitoringOverviewEvents_scss__WEBPACK_IMPORTED_MODULE_8__);









const MonitoringOverviewEvents = ({ events }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-events" }, !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](events) ? (lodash__WEBPACK_IMPORTED_MODULE_1__["map"](events, (e) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-events__event-item", key: e.metadata.uid },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], { breakpointMods: [{ modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexModifiers"]['align-self-baseline'] }] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexItem"], { title: e.lastTimestamp, className: "text-secondary" }, Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["twentyFourHourTime"])(new Date(Object(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_7__["getLastTime"])(e)))),
            e.type === 'Warning' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["YellowExclamationTriangleIcon"], { className: "odc-monitoring-events__warning-icon" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceFor"])(e.involvedObject), namespace: e.involvedObject.namespace, name: e.involvedObject.name, title: e.involvedObject.uid }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-events__event-message" }, e.message)));
})) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary" }, "There are no recent events."))));
/* harmony default export */ __webpack_exports__["default"] = (MonitoringOverviewEvents);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEventsWarning.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEventsWarning.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEventsWarning.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEventsWarning.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _MonitoringOverviewEventsWarning_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonitoringOverviewEventsWarning.scss */ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverviewEventsWarning.scss");
/* harmony import */ var _MonitoringOverviewEventsWarning_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MonitoringOverviewEventsWarning_scss__WEBPACK_IMPORTED_MODULE_4__);





const MonitoringOverviewEventsWarning = ({ events, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-events-warning" }, !lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](events) ? (lodash__WEBPACK_IMPORTED_MODULE_2__["map"](events, (e) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "warning", isInline: true, title: e.reason, key: e.metadata.uid },
        e.message,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-events-warning__timestamp" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", { className: "text-secondary" }, Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["fromNow"])(e.lastTimestamp)))));
})) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary odc-monitoring-events-warning__no-alerts" }, "There are no warning events."))));
/* harmony default export */ __webpack_exports__["default"] = (MonitoringOverviewEventsWarning);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/overview/MonitoringTab.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/overview/MonitoringTab.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _MonitoringOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonitoringOverview */ "./packages/dev-console/src/components/monitoring/overview/MonitoringOverview.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");




const MonitoringTab = ({ item }) => {
    const { pods } = item;
    const { kind, metadata: { uid, name, namespace }, } = item.obj;
    const resources = [
        {
            isList: true,
            kind: 'Event',
            namespace,
            prop: 'resourceEvents',
            fieldSelector: `involvedObject.uid=${uid},involvedObject.name=${name},involvedObject.kind=${kind}`,
        },
    ];
    if (pods) {
        pods.forEach((pod) => {
            const fieldSelector = `involvedObject.uid=${pod.metadata.uid},involvedObject.name=${pod.metadata.name},involvedObject.kind=${_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["PodModel"].kind}`;
            resources.push({
                isList: true,
                kind: 'Event',
                namespace: pod.metadata.namespace,
                prop: pod.metadata.uid,
                fieldSelector,
            });
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MonitoringOverview__WEBPACK_IMPORTED_MODULE_2__["default"], { resource: item.obj, pods: pods })));
};
/* harmony default export */ __webpack_exports__["default"] = (MonitoringTab);


/***/ })

}]);
//# sourceMappingURL=monitoring-overview-2dfc22e989a936aead1d.js.map