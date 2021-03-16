(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knative-overview"],{

/***/ "./packages/knative-plugin/src/components/overview/ConfigurationsOverviewList.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/ConfigurationsOverviewList.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ConfigurationsOverviewListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigurationsOverviewListItem */ "./packages/knative-plugin/src/components/overview/ConfigurationsOverviewListItem.tsx");




const ConfigurationsOverviewList = ({ configurations, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SidebarSectionHeading"], { text: "Configurations" }),
    lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](configurations) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No Configurations found for this resource.")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](configurations, (configuration) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationsOverviewListItem__WEBPACK_IMPORTED_MODULE_3__["default"], { key: configuration.metadata.uid, configuration: configuration })))))));
/* harmony default export */ __webpack_exports__["default"] = (ConfigurationsOverviewList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/ConfigurationsOverviewListItem.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/ConfigurationsOverviewListItem.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");




const ConfigurationsOverviewListItem = ({ configuration: { metadata: { name, namespace }, status: { latestCreatedRevisionName, latestReadyRevisionName }, }, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["ConfigurationModel"]), name: name, namespace: namespace }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Latest Created Revision name: "),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, latestCreatedRevisionName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Latest Ready Revision name: "),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, latestReadyRevisionName)));
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigurationsOverviewListItem);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/DeploymentOverviewList.tsx":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/DeploymentOverviewList.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const DeploymentOverviewList = ({ current }) => {
    var _a, _b;
    const { obj } = current || {};
    const namespace = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
    const deploymentData = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.ownerReferences[0];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["SidebarSectionHeading"], { text: "Deployment" }),
        deploymentData && deploymentData.name ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: deploymentData.kind, name: deploymentData.name, namespace: namespace })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No Deployment found for this resource."))));
};
/* harmony default export */ __webpack_exports__["default"] = (DeploymentOverviewList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/EventSinkServicesOverviewList.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/EventSinkServicesOverviewList.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/overview/pods-overview */ "./public/components/overview/pods-overview.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");







const EventSinkServicesOverviewList = ({ obj, pods, current, }) => {
    var _a, _b, _c, _d;
    const { kind: resKind, apiVersion, metadata: { name, namespace }, } = obj;
    const sink = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.sink.ref') || lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.sink');
    const sinkUri = (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.sinkUri;
    const deploymentData = (_d = (_c = (_b = current === null || current === void 0 ? void 0 : current.obj) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.ownerReferences) === null || _d === void 0 ? void 0 : _d[0];
    const apiGroup = apiVersion.split('/')[0];
    const linkUrl = `/search/ns/${namespace}?kind=${_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["PodModel"].kind}&q=${encodeURIComponent(`${apiGroup}/${lodash__WEBPACK_IMPORTED_MODULE_1__["lowerFirst"](resKind)}=${name}`)}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["SidebarSectionHeading"], { text: "Knative Services" }),
        sink && sink.kind === _models__WEBPACK_IMPORTED_MODULE_6__["ServiceModel"].kind ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ServiceModel"]), name: sink.name, namespace: namespace }),
                sinkUri && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Sink URI: "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: sinkUri, additionalClassName: "co-external-link--block", text: sinkUri })))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No services found for this resource.")),
        (pods === null || pods === void 0 ? void 0 : pods.length) > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_5__["PodsOverview"], { pods: pods, obj: obj, allPodsLink: linkUrl }),
        (deploymentData === null || deploymentData === void 0 ? void 0 : deploymentData.name) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["SidebarSectionHeading"], { text: "Deployment" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: deploymentData.kind, name: deploymentData.name, namespace: namespace })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSinkServicesOverviewList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/KnativeRevisionResources.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/KnativeRevisionResources.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/overview/pods-overview */ "./public/components/overview/pods-overview.tsx");
/* harmony import */ var _ConfigurationsOverviewList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigurationsOverviewList */ "./packages/knative-plugin/src/components/overview/ConfigurationsOverviewList.tsx");
/* harmony import */ var _RoutesOverviewList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoutesOverviewList */ "./packages/knative-plugin/src/components/overview/RoutesOverviewList.tsx");
/* harmony import */ var _DeploymentOverviewList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeploymentOverviewList */ "./packages/knative-plugin/src/components/overview/DeploymentOverviewList.tsx");







const AUTOSCALED = 'Autoscaled to 0';
const KnativeRevisionResources = ({ ksroutes, configurations, obj, pods, current, }) => {
    const { kind: resKind, metadata: { name, namespace }, } = obj;
    const activePods = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](pods, (pod) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["podPhase"])(pod) !== AUTOSCALED);
    const linkUrl = `/search/ns/${namespace}?kind=Pod&q=${encodeURIComponent(`serving.knative.dev/${resKind.toLowerCase()}=${name}`)}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_3__["PodsOverview"], { pods: activePods, obj: obj, emptyText: AUTOSCALED, allPodsLink: linkUrl }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DeploymentOverviewList__WEBPACK_IMPORTED_MODULE_6__["default"], { current: current }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RoutesOverviewList__WEBPACK_IMPORTED_MODULE_5__["default"], { ksroutes: ksroutes, resource: obj }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationsOverviewList__WEBPACK_IMPORTED_MODULE_4__["default"], { configurations: configurations })));
};
/* harmony default export */ __webpack_exports__["default"] = (KnativeRevisionResources);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/KnativeServiceResources.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/KnativeServiceResources.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_overview_build_overview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/overview/build-overview */ "./public/components/overview/build-overview.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/overview/pods-overview */ "./public/components/overview/pods-overview.tsx");
/* harmony import */ var _RevisionsOverviewList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RevisionsOverviewList */ "./packages/knative-plugin/src/components/overview/RevisionsOverviewList.tsx");
/* harmony import */ var _RoutesOverviewList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RoutesOverviewList */ "./packages/knative-plugin/src/components/overview/RoutesOverviewList.tsx");









const REVISIONS_AUTOSCALED = 'All Revisions are autoscaled to 0';
const KnativeServiceResources = ({ item }) => {
    const { revisions, ksroutes, obj, pods, buildConfigs } = item;
    const { kind: resKind, metadata: { name, namespace }, } = obj;
    const activePods = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](pods, (pod) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["podPhase"])(pod) !== _console_shared__WEBPACK_IMPORTED_MODULE_5__["AllPodStatus"].AutoScaledTo0);
    const linkUrl = `/search/ns/${namespace}?kind=${_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["PodModel"].kind}&q=${encodeURIComponent(`serving.knative.dev/${resKind.toLowerCase()}=${name}`)}`;
    const pluginComponents = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["usePluginsOverviewTabSection"])(item);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_6__["PodsOverview"], { pods: activePods, obj: obj, emptyText: REVISIONS_AUTOSCALED, allPodsLink: linkUrl }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RevisionsOverviewList__WEBPACK_IMPORTED_MODULE_7__["default"], { revisions: revisions, service: obj }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RoutesOverviewList__WEBPACK_IMPORTED_MODULE_8__["default"], { ksroutes: ksroutes, resource: obj }),
        buildConfigs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_build_overview__WEBPACK_IMPORTED_MODULE_3__["BuildOverview"], { buildConfigs: buildConfigs }),
        pluginComponents.map(({ Component, key }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { key: key, item: item })))));
};
/* harmony default export */ __webpack_exports__["default"] = (KnativeServiceResources);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/OverviewDetailsKnativeResourcesTab.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/OverviewDetailsKnativeResourcesTab.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _KnativeServiceResources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KnativeServiceResources */ "./packages/knative-plugin/src/components/overview/KnativeServiceResources.tsx");
/* harmony import */ var _KnativeRevisionResources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KnativeRevisionResources */ "./packages/knative-plugin/src/components/overview/KnativeRevisionResources.tsx");
/* harmony import */ var _RevisionsOverviewList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RevisionsOverviewList */ "./packages/knative-plugin/src/components/overview/RevisionsOverviewList.tsx");
/* harmony import */ var _RoutesOverviewList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RoutesOverviewList */ "./packages/knative-plugin/src/components/overview/RoutesOverviewList.tsx");
/* harmony import */ var _ConfigurationsOverviewList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfigurationsOverviewList */ "./packages/knative-plugin/src/components/overview/ConfigurationsOverviewList.tsx");
/* harmony import */ var _EventSinkServicesOverviewList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventSinkServicesOverviewList */ "./packages/knative-plugin/src/components/overview/EventSinkServicesOverviewList.tsx");
/* harmony import */ var _utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/fetch-dynamic-eventsources-utils */ "./packages/knative-plugin/src/utils/fetch-dynamic-eventsources-utils.ts");











const getSidebarResources = (item) => {
    const { obj, ksroutes, revisions, configurations, pods, current } = item;
    if (Object(_utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_10__["isDynamicEventResourceKind"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(obj))) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EventSinkServicesOverviewList__WEBPACK_IMPORTED_MODULE_9__["default"], { obj: obj, pods: pods, current: current });
    }
    switch (obj.kind) {
        case _models__WEBPACK_IMPORTED_MODULE_3__["RevisionModel"].kind:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_KnativeRevisionResources__WEBPACK_IMPORTED_MODULE_5__["default"], { ksroutes: ksroutes, obj: obj, configurations: configurations, pods: pods, current: current }));
        case _models__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"].kind:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_KnativeServiceResources__WEBPACK_IMPORTED_MODULE_4__["default"], { item: item });
        default:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RevisionsOverviewList__WEBPACK_IMPORTED_MODULE_6__["default"], { revisions: revisions, service: obj }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RoutesOverviewList__WEBPACK_IMPORTED_MODULE_7__["default"], { ksroutes: ksroutes, resource: obj }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationsOverviewList__WEBPACK_IMPORTED_MODULE_8__["default"], { configurations: configurations })));
    }
};
const OverviewDetailsKnativeResourcesTab = ({ item, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["default"], { item: item }),
    getSidebarResources(item)));
/* harmony default export */ __webpack_exports__["default"] = (OverviewDetailsKnativeResourcesTab);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/RevisionsOverviewList.scss":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/RevisionsOverviewList.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/RevisionsOverviewList.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/RevisionsOverviewList.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals */ "./packages/knative-plugin/src/components/modals/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _RevisionsOverviewListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RevisionsOverviewListItem */ "./packages/knative-plugin/src/components/overview/RevisionsOverviewListItem.tsx");
/* harmony import */ var _RevisionsOverviewList_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RevisionsOverviewList.scss */ "./packages/knative-plugin/src/components/overview/RevisionsOverviewList.scss");
/* harmony import */ var _RevisionsOverviewList_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_RevisionsOverviewList_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");










const MAX_REVISIONS = 3;
const RevisionsOverviewList = ({ revisions, service }) => {
    var _a, _b, _c;
    const canSetTrafficDistribution = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: _models__WEBPACK_IMPORTED_MODULE_6__["ServiceModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_6__["ServiceModel"].plural,
        namespace: service.metadata.namespace,
        verb: 'update',
    });
    const namespace = (_a = service.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
    const traffic = (_b = service.status) === null || _b === void 0 ? void 0 : _b.traffic;
    const name = (_c = service.metadata) === null || _c === void 0 ? void 0 : _c.name;
    const filteredRevisions = () => {
        if (!revisions || !revisions.length) {
            return [];
        }
        const [revWithTraffic, revWithoutTraffic] = lodash__WEBPACK_IMPORTED_MODULE_1__["partition"](revisions, (element) => {
            var _a;
            return traffic ? lodash__WEBPACK_IMPORTED_MODULE_1__["find"](traffic, { revisionName: (_a = element.metadata) === null || _a === void 0 ? void 0 : _a.name }) : false;
        }).map((element) => lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"](element, ['metadata.creationTimestamp']));
        return revWithTraffic.length < MAX_REVISIONS
            ? lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](revWithTraffic, revWithoutTraffic.slice(0, MAX_REVISIONS - revWithTraffic.length))
            : revWithTraffic;
    };
    const getRevisionsLink = () => {
        const url = `/search/ns/${namespace}`;
        const searchQuery = `serving.knative.dev/service=${name}`;
        const params = new URLSearchParams();
        params.append('kind', Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["RevisionModel"]));
        params.append('q', searchQuery);
        return `${url}?${params.toString()}`;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["SidebarSectionHeading"], { text: "Revisions", className: "revision-overview-list" },
            (revisions === null || revisions === void 0 ? void 0 : revisions.length) > MAX_REVISIONS && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], { className: "sidebar__section-view-all", to: getRevisionsLink() }, `View all (${revisions.length})`)),
            canSetTrafficDistribution && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "secondary", onClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_5__["setTrafficDistributionModal"])({ obj: service }), isDisabled: !(revisions && revisions.length) }, "Set Traffic Distribution"))),
        lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](revisions) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No Revisions found for this resource.")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](filteredRevisions(), (revision) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RevisionsOverviewListItem__WEBPACK_IMPORTED_MODULE_7__["default"], { key: revision.metadata.uid, revision: revision, service: service })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionsOverviewList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/RevisionsOverviewListItem.scss":
/*!****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/RevisionsOverviewListItem.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/RevisionsOverviewListItem.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/RevisionsOverviewListItem.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _RevisionsOverviewListItem_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RevisionsOverviewListItem.scss */ "./packages/knative-plugin/src/components/overview/RevisionsOverviewListItem.scss");
/* harmony import */ var _RevisionsOverviewListItem_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_RevisionsOverviewListItem_scss__WEBPACK_IMPORTED_MODULE_7__);








const RevisionsOverviewListItem = ({ revision, service, }) => {
    const { metadata: { name, namespace }, } = revision;
    const { status: { traffic }, } = service;
    const getTraffic = (revName) => {
        if (!traffic || !traffic.length) {
            return null;
        }
        const trafficPercent = traffic
            .filter((t) => t.revisionName === revName)
            .map((tr) => tr.percent)
            .reduce((a, b) => a + b, 0);
        return trafficPercent ? `${trafficPercent}%` : null;
    };
    const deploymentData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](revision, 'resources.current.obj.metadata.ownerReferences[0]', {});
    const current = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](revision, 'resources.current', null);
    const availableReplicas = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](revision, 'resources.current.obj.status.availableReplicas', '0');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-8 col-xs-9" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["RevisionModel"]), name: name, namespace: namespace })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "col-sm-4 col-xs-3 text-right" }, getTraffic(name))),
        deploymentData.name && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-revision-deployment-list" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-8 col-xs-9" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: deploymentData.kind, name: deploymentData.name, namespace: namespace })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-4 col-xs-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-revision-deployment-list__pod" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodStatus"], { standalone: true, data: current ? current.pods : [], size: 25, innerRadius: 8, outerRadius: 12, title: availableReplicas, titleComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_3__["ChartLabel"], { style: { fontSize: '10px' } }), showTooltip: false }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionsOverviewListItem);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/RoutesOverviewList.tsx":
/*!********************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/RoutesOverviewList.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_resource_overview_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resource-overview-utils */ "./packages/knative-plugin/src/utils/resource-overview-utils.ts");
/* harmony import */ var _RoutesOverviewListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoutesOverviewListItem */ "./packages/knative-plugin/src/components/overview/RoutesOverviewListItem.tsx");





const RoutesOverviewList = ({ ksroutes, resource }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SidebarSectionHeading"], { text: "Routes" }),
    lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](ksroutes) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No Routes found for this resource.")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](ksroutes, (route) => {
        const routeLinks = Object(_utils_resource_overview_utils__WEBPACK_IMPORTED_MODULE_3__["getKnativeRoutesLinks"])(route, resource);
        return routeLinks.map((routeLink) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RoutesOverviewListItem__WEBPACK_IMPORTED_MODULE_4__["default"], { key: routeLink.uid, routeLink: routeLink })));
    })))));
/* harmony default export */ __webpack_exports__["default"] = (RoutesOverviewList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/RoutesOverviewListItem.tsx":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/RoutesOverviewListItem.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");




const RoutesOverviewListItem = ({ routeLink: { url, name, namespace, percent }, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-10" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["RouteModel"]), name: name, namespace: namespace }),
            url.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Location: "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"], { href: url, additionalClassName: "co-external-link--block", text: url })))),
        percent.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "col-xs-2 text-right" }, percent))));
/* harmony default export */ __webpack_exports__["default"] = (RoutesOverviewListItem);


/***/ }),

/***/ "./packages/knative-plugin/src/utils/resource-overview-utils.ts":
/*!**********************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/resource-overview-utils.ts ***!
  \**********************************************************************/
/*! exports provided: getKnativeRoutesLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeRoutesLinks", function() { return getKnativeRoutesLinks; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");


/**
 * Return the knative routes list items.
 * @param route
 * @param resource | resource can be a knative service or revision;
 */
const getKnativeRoutesLinks = (route, resource) => {
    var _a;
    if (!route.status) {
        return [];
    }
    const { metadata: { name, namespace }, status: { url = '', traffic: trafficData = [{ revisionName: resource.metadata.name, url: (_a = route === null || route === void 0 ? void 0 : route.status) === null || _a === void 0 ? void 0 : _a.url }], }, } = route;
    const filterTrafficBasedOnResource = (tr) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(resource) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_1__["ServiceModel"]) ||
        (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(resource) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_1__["RevisionModel"]) &&
            tr.revisionName === resource.metadata.name);
    return trafficData
        .filter(filterTrafficBasedOnResource)
        .map((traffic, index) => ({
        uid: `${traffic.revisionName}-${(traffic === null || traffic === void 0 ? void 0 : traffic.tag) ? traffic === null || traffic === void 0 ? void 0 : traffic.tag : 'tag'}-${index}`,
        url: (traffic === null || traffic === void 0 ? void 0 : traffic.url) || url,
        percent: traffic.percent ? `${traffic.percent}%` : '',
        name,
        namespace,
    }));
};


/***/ })

}]);
//# sourceMappingURL=knative-overview-d3523cd8426a8a6b4766.js.map