(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deployment-config"],{

/***/ "./public/components/overview/deployment-config-overview.tsx":
/*!*******************************************************************!*\
  !*** ./public/components/overview/deployment-config-overview.tsx ***!
  \*******************************************************************/
/*! exports provided: DeploymentConfigOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfigOverviewPage", function() { return DeploymentConfigOverviewPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _deployment_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deployment-config */ "./public/components/deployment-config.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _resource_overview_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-overview-page */ "./public/components/overview/resource-overview-page.tsx");
/* harmony import */ var _resource_overview_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-overview-details */ "./public/components/overview/resource-overview-details.tsx");
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");







const DeploymentConfigOverviewDetails = ({ item: { obj: dc, pods: pods, current, previous, isRollingOut }, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
        dc.spec.paused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["WorkloadPausedAlert"], { obj: dc, model: _models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__pod-counts" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_6__["default"], { key: dc.metadata.uid, podData: {
                    pods,
                    current,
                    previous,
                    isRollingOut,
                }, obj: dc, resourceKind: _models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"], path: "/spec/replicas" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__summary" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceSummary"], { resource: dc, showPodSelector: true, showNodeSelector: true, showTolerations: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, dc.status.availableReplicas === dc.status.updatedReplicas ? ('Active') : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-space-r" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null)),
                    ' ',
                    "Updating"))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_deployment_config__WEBPACK_IMPORTED_MODULE_2__["DeploymentConfigDetailsList"], { dc: dc }))));
};
const tabs = [
    {
        name: 'Details',
        component: DeploymentConfigOverviewDetails,
    },
    {
        name: 'Resources',
        component: _resource_overview_page__WEBPACK_IMPORTED_MODULE_4__["OverviewDetailsResourcesTab"],
    },
];
const DeploymentConfigOverviewPage = ({ item, customActions, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_details__WEBPACK_IMPORTED_MODULE_5__["ResourceOverviewDetails"], { item: item, kindObj: _models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"], menuActions: customActions ? [...customActions, ..._deployment_config__WEBPACK_IMPORTED_MODULE_2__["menuActions"]] : _deployment_config__WEBPACK_IMPORTED_MODULE_2__["menuActions"], tabs: tabs }));


/***/ }),

/***/ "./public/components/overview/resource-overview-details.tsx":
/*!******************************************************************!*\
  !*** ./public/components/overview/resource-overview-details.tsx ***!
  \******************************************************************/
/*! exports provided: ResourceOverviewDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceOverviewDetails", function() { return ResourceOverviewDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plugins */ "./public/plugins.ts");






const stateToProps = ({ UI }) => ({
    selectedDetailsTab: UI.getIn(['overview', 'selectedDetailsTab']),
});
const dispatchToProps = (dispatch) => ({
    onClickTab: (name) => dispatch(_actions_ui__WEBPACK_IMPORTED_MODULE_3__["selectOverviewDetailsTab"](name)),
});
const getResourceTabComp = (t) => (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["AsyncComponent"], Object.assign({}, props, { loader: t.properties.loader })));
const getPluginTabResources = (item, tabs) => {
    let tabEntry = _plugins__WEBPACK_IMPORTED_MODULE_5__["registry"]
        .getOverviewResourceTabs()
        .filter((tab) => item[tab.properties.key]);
    const overridenTabs = tabs.map((tab) => {
        const tabEntryConfig = tabEntry.find((t) => tab.name === t.properties.name);
        if (tabEntryConfig) {
            tabEntry = tabEntry.filter((entry) => tab.name !== entry.properties.name);
            return {
                name: tab.name,
                component: getResourceTabComp(tabEntryConfig),
            };
        }
        return tab;
    });
    /** Add new tabs from plugin */
    const newTabs = tabEntry.map((entry) => {
        return {
            name: entry.properties.name,
            component: getResourceTabComp(entry),
        };
    });
    return overridenTabs.concat(newTabs);
};
const ResourceOverviewDetails = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(({ kindObj, item, menuActions, onClickTab, selectedDetailsTab, tabs, }) => {
    const keys = Object.keys(item);
    const keysRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](keys);
    const tabsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](tabs);
    const pluginTabsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!pluginTabsRef.current ||
        !lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](keys, keysRef.current) ||
        !lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](tabs, tabsRef.current)) {
        keysRef.current = keys;
        tabsRef.current = tabs;
        pluginTabsRef.current = getPluginTabResources(item, tabs);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane resource-overview" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceOverviewHeading"], { actions: menuActions, kindObj: kindObj, resource: item.obj }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SimpleTabNav"], { onClickTab: onClickTab, selectedTab: selectedDetailsTab, tabProps: { item }, tabs: pluginTabsRef.current, additionalClassNames: "co-m-horizontal-nav__menu--within-sidebar co-m-horizontal-nav__menu--within-overview-sidebar" })));
});


/***/ })

}]);
//# sourceMappingURL=deployment-config-f8875bcae1e7dcb12d9b.js.map