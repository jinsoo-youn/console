(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-monitoring"],{

/***/ "./packages/dev-console/src/components/NamespacedPage.scss":
/*!*****************************************************************!*\
  !*** ./packages/dev-console/src/components/NamespacedPage.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/NamespacedPage.tsx":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/components/NamespacedPage.tsx ***!
  \****************************************************************/
/*! exports provided: NamespacedPageVariants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespacedPageVariants", function() { return NamespacedPageVariants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown/ApplicationSelector */ "./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx");
/* harmony import */ var _NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NamespacedPage.scss */ "./packages/dev-console/src/components/NamespacedPage.scss");
/* harmony import */ var _NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4__);





var NamespacedPageVariants;
(function (NamespacedPageVariants) {
    NamespacedPageVariants["light"] = "light";
    NamespacedPageVariants["default"] = "default";
})(NamespacedPageVariants || (NamespacedPageVariants = {}));
const NamespacedPage = ({ children, disabled, onNamespaceChange, hideApplications = false, variant = NamespacedPageVariants.default, toolbar, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["NamespaceBar"], { disabled: disabled, onNamespaceChange: onNamespaceChange },
        !hideApplications && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: disabled }),
        toolbar && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page__toolbar" }, toolbar)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-namespaced-page__content', {
            [`is-${variant}`]: variant !== NamespacedPageVariants.default,
        }) }, children)));
/* harmony default export */ __webpack_exports__["default"] = (NamespacedPage);


/***/ }),

/***/ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_kubevirt_plugin_src_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/kubevirt-plugin/src/models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






const ApplicationDropdown = (_a) => {
    var { namespace } = _a, props = __rest(_a, ["namespace"]);
    const resources = [
        {
            isList: true,
            namespace,
            kind: 'DeploymentConfig',
            prop: 'deploymentConfigs',
        },
        {
            isList: true,
            namespace,
            kind: 'Deployment',
            prop: 'deployments',
        },
        {
            isList: true,
            kind: 'StatefulSet',
            namespace,
            prop: 'statefulSets',
        },
        {
            isList: true,
            kind: 'DaemonSet',
            namespace,
            prop: 'daemonSets',
        },
        {
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"]),
            namespace,
            prop: 'knativeService',
            optional: true,
        },
        {
            isList: true,
            kind: 'Secret',
            namespace,
            prop: 'secrets',
        },
        {
            isList: true,
            kind: _console_kubevirt_plugin_src_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"].kind,
            namespace,
            prop: 'virtualMachines',
            optional: true,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["ResourceDropdown"], Object.assign({}, props, { placeholder: "Select an Application", dataSelector: ['metadata', 'labels', 'app.kubernetes.io/part-of'] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ApplicationDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _ApplicationDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationDropdown */ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx");






const ApplicationSelector = ({ namespace, application, onChange, disabled }) => {
    if (namespace === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_NAMESPACES_KEY"])
        return null;
    const allApplicationsTitle = 'all applications';
    const title = application === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"] ? allApplicationsTitle : application;
    const onApplicationChange = (newApplication, key) => {
        key === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"] ? onChange(key) : onChange(newApplication);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "co-namespace-selector", menuClassName: "co-namespace-selector__menu", buttonClassName: "pf-m-plain", namespace: namespace, title: title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "btn-link__title" }, title), titlePrefix: "Application", allSelectorItem: {
            allSelectorKey: _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"],
            allSelectorTitle: allApplicationsTitle,
        }, selectedKey: application || _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"], onChange: onApplicationChange, storageKey: _console_shared__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_LOCAL_STORAGE_KEY"], disabled: disabled }));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveNamespace"])(state),
    application: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveApplication"])(state),
});
const mapDispatchToProps = (dispatch) => ({
    onChange: (app) => {
        dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__["setActiveApplication"])(app));
    },
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ApplicationSelector));


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/MonitoringPage.tsx":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/MonitoringPage.tsx ***!
  \***************************************************************************/
/*! exports provided: MONITORING_ALL_NS_PAGE_URI, PageContents, MonitoringPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONITORING_ALL_NS_PAGE_URI", function() { return MONITORING_ALL_NS_PAGE_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContents", function() { return PageContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringPage", function() { return MonitoringPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
/* harmony import */ var _dashboard_MonitoringDashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/MonitoringDashboard */ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboard.tsx");
/* harmony import */ var _metrics_MonitoringMetrics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metrics/MonitoringMetrics */ "./packages/dev-console/src/components/monitoring/metrics/MonitoringMetrics.tsx");
/* harmony import */ var _events_MonitoringEvents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/MonitoringEvents */ "./packages/dev-console/src/components/monitoring/events/MonitoringEvents.tsx");










const MONITORING_ALL_NS_PAGE_URI = '/dev-monitoring/all-namespaces';
const handleNamespaceChange = (newNamespace) => {
    if (newNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_3__["ALL_NAMESPACES_KEY"]) {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["history"].push(MONITORING_ALL_NS_PAGE_URI);
    }
};
const PageContents = ({ match }) => {
    const activeNamespace = match.params.ns;
    const pages = [
        {
            href: '',
            name: 'Dashboard',
            component: _dashboard_MonitoringDashboard__WEBPACK_IMPORTED_MODULE_7__["default"],
        },
        {
            href: 'metrics',
            name: 'Metrics',
            component: _metrics_MonitoringMetrics__WEBPACK_IMPORTED_MODULE_8__["default"],
        },
        {
            href: 'events',
            name: 'Events',
            component: _events_MonitoringEvents__WEBPACK_IMPORTED_MODULE_9__["default"],
        },
    ];
    return activeNamespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageHeading"], { badge: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["TechPreviewBadge"], null), title: "Monitoring" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["HorizontalNav"], { pages: pages, match: match, noStatusBox: true }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_6__["default"], { badge: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["TechPreviewBadge"], null), title: "Monitoring" }, "Select a project to view monitoring metrics"));
};
const PageContentsWithStartGuide = Object(_console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_4__["withStartGuide"])(PageContents);
const MonitoringPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Monitoring")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["default"], { hideApplications: true, variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["NamespacedPageVariants"].light, onNamespaceChange: handleNamespaceChange },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageContentsWithStartGuide, Object.assign({}, props)))));
/* harmony default export */ __webpack_exports__["default"] = (MonitoringPage);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboard.scss":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboard.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboard.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboard.tsx ***!
  \******************************************************************************************/
/*! exports provided: MonitoringDashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringDashboard", function() { return MonitoringDashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/Dashboard */ "./packages/console-shared/src/components/dashboard/Dashboard.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_monitoring_dashboards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/monitoring/dashboards */ "./public/components/monitoring/dashboards/index.tsx");
/* harmony import */ var _MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MonitoringDashboardGraph */ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboardGraph.tsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries */ "./packages/dev-console/src/components/monitoring/queries.ts");
/* harmony import */ var _MonitoringDashboard_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MonitoringDashboard.scss */ "./packages/dev-console/src/components/monitoring/dashboard/MonitoringDashboard.scss");
/* harmony import */ var _MonitoringDashboard_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MonitoringDashboard_scss__WEBPACK_IMPORTED_MODULE_9__);










const MonitoringDashboard = ({ match, timespan, pollInterval }) => {
    const namespace = match.params.ns;
    const params = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["getURLSearchParams"])();
    const { workloadName, workloadType } = params;
    const workLoadPresent = workloadName && workloadType;
    const queries = workLoadPresent
        ? [..._queries__WEBPACK_IMPORTED_MODULE_8__["topWorkloadMetricsQueries"], ..._queries__WEBPACK_IMPORTED_MODULE_8__["workloadMetricsQueries"]]
        : _queries__WEBPACK_IMPORTED_MODULE_8__["monitoringDashboardQueries"];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Dashboard")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-dashboard" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-dashboard__dropdown-options" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_monitoring_dashboards__WEBPACK_IMPORTED_MODULE_6__["TimespanDropdown"], null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_monitoring_dashboards__WEBPACK_IMPORTED_MODULE_6__["PollIntervalDropdown"], null)),
            workLoadPresent && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-monitoring-dashboard__resource-link" },
                "Showing metrics for \u00A0",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: workloadType, name: workloadName, namespace: namespace, title: workloadName, inline: true }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](queries, (q) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MonitoringDashboardGraph__WEBPACK_IMPORTED_MODULE_7__["default"], { title: q.title, namespace: namespace, graphType: q.chartType, query: q.query({ namespace, workloadName, workloadType: lodash__WEBPACK_IMPORTED_MODULE_1__["toLower"](workloadType) }), humanize: q.humanize, byteDataType: q.byteDataType, key: q.title, timespan: timespan, pollInterval: pollInterval })))))));
};
const mapStateToProps = (state) => ({
    timespan: state.UI.getIn(['monitoringDashboards', 'timespan']),
    pollInterval: state.UI.getIn(['monitoringDashboards', 'pollInterval']),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(MonitoringDashboard));


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/events/MonitoringEvents.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/events/MonitoringEvents.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");


const MonitoringEvents = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_events__WEBPACK_IMPORTED_MODULE_1__["EventsList"], Object.assign({}, props, { namespace: props.match.params.ns }));
};
/* harmony default export */ __webpack_exports__["default"] = (MonitoringEvents);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/metrics/EmptyStateQuery.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/metrics/EmptyStateQuery.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



const EmptyStateQuery = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateVariant"].full },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], { size: "sm", icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["ChartLineIcon"] }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "Select a query or enter your own to view metrics for this project")));
/* harmony default export */ __webpack_exports__["default"] = (EmptyStateQuery);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/metrics/MetricsChart.scss":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/metrics/MetricsChart.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/metrics/MetricsChart.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/metrics/MetricsChart.tsx ***!
  \*********************************************************************************/
/*! exports provided: MetricsChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsChart", function() { return MetricsChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_internal_components_monitoring_query_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/monitoring/query-browser */ "./public/components/monitoring/query-browser.tsx");
/* harmony import */ var _console_internal_components_monitoring_metrics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/monitoring/metrics */ "./public/components/monitoring/metrics.tsx");
/* harmony import */ var _EmptyStateQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmptyStateQuery */ "./packages/dev-console/src/components/monitoring/metrics/EmptyStateQuery.tsx");
/* harmony import */ var _MetricsChart_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MetricsChart.scss */ "./packages/dev-console/src/components/monitoring/metrics/MetricsChart.scss");
/* harmony import */ var _MetricsChart_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MetricsChart_scss__WEBPACK_IMPORTED_MODULE_8__);









const DEFAULT_TIME_SPAN = 30 * 60 * 1000;
const MetricsChart = ({ deleteAll, queries, namespace }) => {
    const [queryStrings, setQueryStrings] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [disabledSeries, setDisabledSeries] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    // TO delete all queries patched on componenet unmount
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => deleteAll, [deleteAll]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        setQueryStrings((prev) => {
            const next = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](queries, 'query'));
            return lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](prev, next) ? prev : next;
        });
        setDisabledSeries((prev) => {
            const next = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](queries, 'disabledSeries'));
            return lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](prev, next) ? prev : next;
        });
    }, [queries]);
    return queryStrings.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EmptyStateQuery__WEBPACK_IMPORTED_MODULE_7__["default"], null)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "odc-metrics-chart" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_monitoring_query_browser__WEBPACK_IMPORTED_MODULE_5__["QueryBrowser"], { defaultTimespan: DEFAULT_TIME_SPAN, disabledSeries: disabledSeries, namespace: namespace, queries: queryStrings }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_monitoring_metrics__WEBPACK_IMPORTED_MODULE_6__["QueryTable"], { index: 0, namespace: namespace })));
};
const mapStateToProps = (state) => ({
    queries: state.UI.getIn(['queryBrowser', 'queries']).toJS(),
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveNamespace"])(state),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, { deleteAll: _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__["queryBrowserDeleteAllQueries"] })(MetricsChart));


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/metrics/MetricsQueryInput.scss":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/metrics/MetricsQueryInput.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/metrics/MetricsQueryInput.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/metrics/MetricsQueryInput.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_internal_components_monitoring_metrics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/monitoring/metrics */ "./public/components/monitoring/metrics.tsx");
/* harmony import */ var _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/graphs/helpers */ "./public/components/graphs/helpers.ts");
/* harmony import */ var _console_internal_components_graphs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/graphs */ "./public/components/graphs/index.tsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries */ "./packages/dev-console/src/components/monitoring/queries.ts");
/* harmony import */ var _MetricsQueryInput_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MetricsQueryInput.scss */ "./packages/dev-console/src/components/monitoring/metrics/MetricsQueryInput.scss");
/* harmony import */ var _MetricsQueryInput_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_MetricsQueryInput_scss__WEBPACK_IMPORTED_MODULE_12__);


// FIXME upgrading redux types is causing many errors at this time
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore











const ADD_NEW_QUERY = '#ADD_NEW_QUERY#';
const CUSTOM_QUERY = 'Custom Query';
const MetricsQueryInput = ({ query }) => {
    const items = _queries__WEBPACK_IMPORTED_MODULE_11__["metricsQuery"];
    const autocompleteFilter = (strText, item) => fuzzysearch__WEBPACK_IMPORTED_MODULE_3__(strText, item);
    const defaultActionItem = [
        {
            actionTitle: CUSTOM_QUERY,
            actionKey: ADD_NEW_QUERY,
        },
    ];
    const namespace = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])((state) => Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_7__["getActiveNamespace"])(state));
    const queries = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])((state) => state.UI.getIn(['queryBrowser', 'queries', 0]).toJS());
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Select Query');
    const [selectedKey, setSelectedKey] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [metric, setMetric] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [showPromQl, setShowPromQl] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [isPromQlDisabled, setIsPromQlDisabled] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const safeFetch = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["useSafeFetch"])(), []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const runQueries = () => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__["queryBrowserRunQueries"])());
        const patchQuery = (v) => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__["queryBrowserPatchQuery"])(0, v));
        if (metric) {
            const queryMetrics = Object(_queries__WEBPACK_IMPORTED_MODULE_11__["getTopMetricsQueries"])(namespace)[metric];
            patchQuery({ text: queryMetrics || '' });
            runQueries();
        }
    }, [dispatch, metric, namespace]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const q = queries === null || queries === void 0 ? void 0 : queries.query;
        const text = queries === null || queries === void 0 ? void 0 : queries.text;
        if (text && text.localeCompare(q) !== 0) {
            setTitle(CUSTOM_QUERY);
            setIsPromQlDisabled(true);
            if (query) {
                Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["removeQueryArgument"])('query0');
            }
        }
    }, [query, queries]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (query) {
            const topMetricsQueries = Object(_queries__WEBPACK_IMPORTED_MODULE_11__["getTopMetricsQueries"])(namespace);
            const selectedQuery = lodash__WEBPACK_IMPORTED_MODULE_1__["findKey"](topMetricsQueries, (topQuery) => topQuery === query);
            const sKey = lodash__WEBPACK_IMPORTED_MODULE_1__["findKey"](items, (item) => item === selectedQuery);
            setMetric(selectedQuery);
            selectedQuery ? setSelectedKey(sKey) : setTitle(CUSTOM_QUERY);
        }
    }, [query, namespace, items]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const setMetrics = (metrics) => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__["queryBrowserSetMetrics"])(metrics));
        const url = namespace
            ? Object(_console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_9__["getPrometheusURL"])({
                endpoint: _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_9__["PrometheusEndpoint"].QUERY,
                namespace,
                query: `count({namespace="${namespace}"}) by (__name__)`,
            })
            : `${_console_internal_components_graphs__WEBPACK_IMPORTED_MODULE_10__["PROMETHEUS_BASE_PATH"]}/${_console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_9__["PrometheusEndpoint"].LABEL}/__name__/values`;
        safeFetch(url)
            .then((response) => {
            const metrics = namespace
                ? lodash__WEBPACK_IMPORTED_MODULE_1__["map"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'data.result'), 'metric.__name__').sort()
                : lodash__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'data');
            setMetrics(metrics);
        })
            .catch(() => { });
    }, [namespace, safeFetch, dispatch]);
    const onChange = (selectedValue) => {
        setMetric(_queries__WEBPACK_IMPORTED_MODULE_11__["metricsQuery"][selectedValue]);
        if (selectedValue && selectedValue === ADD_NEW_QUERY) {
            setTitle(CUSTOM_QUERY);
            setIsPromQlDisabled(true);
            setShowPromQl(true);
        }
        else {
            setTitle(_queries__WEBPACK_IMPORTED_MODULE_11__["metricsQuery"][selectedValue]);
            setIsPromQlDisabled(false);
        }
        if (query) {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["removeQueryArgument"])('query0');
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-8 col-md-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { autocompleteFilter: autocompleteFilter, items: items || {}, selectedKey: selectedKey, actionItems: defaultActionItem, dropDownClassName: "odc-metrics-query-input dropdown--full-width", menuClassName: "odc-metrics-query-input__menu dropdown-menu--text-wrap", onChange: onChange, title: title })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4 col-md-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "link", type: "button", isDisabled: isPromQlDisabled, onClick: () => setShowPromQl(!showPromQl) }, showPromQl ? 'Hide PromQL' : 'Show PromQL'))),
        showPromQl && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_monitoring_metrics__WEBPACK_IMPORTED_MODULE_8__["QueryInput"], { index: 0, namespace: namespace }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (MetricsQueryInput);


/***/ }),

/***/ "./packages/dev-console/src/components/monitoring/metrics/MonitoringMetrics.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/monitoring/metrics/MonitoringMetrics.tsx ***!
  \**************************************************************************************/
/*! exports provided: MonitoringMetrics, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringMetrics", function() { return MonitoringMetrics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MetricsQueryInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetricsQueryInput */ "./packages/dev-console/src/components/monitoring/metrics/MetricsQueryInput.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _MetricsChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MetricsChart */ "./packages/dev-console/src/components/monitoring/metrics/MetricsChart.tsx");







const MonitoringMetrics = ({ patchQuery, runQueries }) => {
    const params = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["getURLSearchParams"])();
    const query = params.query0;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (query) {
            patchQuery({ text: query });
            runQueries();
        }
    }, [query, patchQuery, runQueries]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Metrics")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MetricsQueryInput__WEBPACK_IMPORTED_MODULE_2__["default"], { query: query }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MetricsChart__WEBPACK_IMPORTED_MODULE_6__["default"], null))))));
};
const mapDispatchToProps = (dispatch) => ({
    runQueries: () => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__["queryBrowserRunQueries"])()),
    patchQuery: (v) => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__["queryBrowserPatchQuery"])(0, v)),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(MonitoringMetrics));


/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.scss":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectListPage.scss */ "./packages/dev-console/src/components/projects/ProjectListPage.scss");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





const ProjectListPage = (_a) => {
    var { badge, title, children, listComponent } = _a, listPageProps = __rest(_a, ["badge", "title", "children", "listComponent"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-project-list-page" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { title: title, badge: badge }, children),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", { className: "odc-project-list-page__section-border" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, listPageProps, { showTitle: false, kind: "Project", ListComponent: listComponent || _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["ProjectsTable"], canCreate: false, filterLabel: "by name or display name", textFilter: "project-name" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectListPage);


/***/ })

}]);
//# sourceMappingURL=dev-console-monitoring-1d97540b7f4b380c1e3e.js.map