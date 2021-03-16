(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stateful-set"],{

/***/ "./packages/console-shared/src/components/pod/PodRingSet.tsx":
/*!*******************************************************************!*\
  !*** ./packages/console-shared/src/components/pod/PodRingSet.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _PodRing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PodRing */ "./packages/console-shared/src/components/pod/PodRing.tsx");






const PodRingSet = ({ podData, resourceKind, obj, path }) => {
    const { inProgressDeploymentData, completedDeploymentData } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getPodData"])(obj, podData.pods, podData.current, podData.previous, podData.isRollingOut);
    const current = podData.current && podData.current.obj;
    const previous = podData.previous && podData.previous.obj;
    const progressRC = inProgressDeploymentData && current;
    const completedRC = !!inProgressDeploymentData && completedDeploymentData ? previous : current;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Split"], { gutter: "lg" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PodRing__WEBPACK_IMPORTED_MODULE_5__["default"], { key: inProgressDeploymentData ? 'deploy' : 'notDeploy', pods: completedDeploymentData, rc: completedRC, resourceKind: resourceKind, obj: obj, path: path, enableScaling: !podData.isRollingOut })),
        inProgressDeploymentData && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Bullseye"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["LongArrowAltRightIcon"], { size: "xl", color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__["global_Color_200"].value }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PodRing__WEBPACK_IMPORTED_MODULE_5__["default"], { pods: inProgressDeploymentData, rc: progressRC, resourceKind: resourceKind, obj: obj, path: path, enableScaling: false }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PodRingSet);


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


/***/ }),

/***/ "./public/components/overview/stateful-set-overview.tsx":
/*!**************************************************************!*\
  !*** ./public/components/overview/stateful-set-overview.tsx ***!
  \**************************************************************/
/*! exports provided: StatefulSetOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetOverview", function() { return StatefulSetOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _stateful_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stateful-set */ "./public/components/stateful-set.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");
/* harmony import */ var _resource_overview_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-overview-page */ "./public/components/overview/resource-overview-page.tsx");
/* harmony import */ var _resource_overview_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource-overview-details */ "./public/components/overview/resource-overview-details.tsx");







const StatefulSetOverviewDetails = ({ item: { obj: ss, pods: pods, current, previous, isRollingOut }, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__pod-counts" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_4__["default"], { key: ss.metadata.uid, podData: {
                pods,
                current,
                previous,
                isRollingOut,
            }, obj: ss, resourceKind: _models__WEBPACK_IMPORTED_MODULE_1__["StatefulSetModel"], path: "/spec/replicas" })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceSummary"], { resource: ss, showPodSelector: true, showNodeSelector: true, showTolerations: true })));
const tabs = [
    {
        name: 'Details',
        component: StatefulSetOverviewDetails,
    },
    {
        name: 'Resources',
        component: _resource_overview_page__WEBPACK_IMPORTED_MODULE_5__["OverviewDetailsResourcesTab"],
    },
];
const StatefulSetOverview = ({ item, customActions, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_details__WEBPACK_IMPORTED_MODULE_6__["ResourceOverviewDetails"], { item: item, kindObj: _models__WEBPACK_IMPORTED_MODULE_1__["StatefulSetModel"], menuActions: customActions ? [...customActions, ..._stateful_set__WEBPACK_IMPORTED_MODULE_2__["menuActions"]] : _stateful_set__WEBPACK_IMPORTED_MODULE_2__["menuActions"], tabs: tabs }));


/***/ }),

/***/ "./public/components/stateful-set.tsx":
/*!********************************************!*\
  !*** ./public/components/stateful-set.tsx ***!
  \********************************************/
/*! exports provided: menuActions, StatefulSetsList, StatefulSetsPage, StatefulSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetsList", function() { return StatefulSetsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetsPage", function() { return StatefulSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetsDetailsPage", function() { return StatefulSetsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _workload_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workload-table */ "./public/components/workload-table.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");












const { AddStorage, common, ModifyCount } = _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory;
const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["AddHealthChecks"], ModifyCount, AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["StatefulSetModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["EditHealthChecks"], ...common];
const kind = 'StatefulSet';
const StatefulSetTableRow = ({ obj, index, key, style }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_workload_table__WEBPACK_IMPORTED_MODULE_7__["WorkloadTableRow"], { obj: obj, index: index, rowKey: key, style: style, menuActions: menuActions, kind: kind });
};
const StatefulSetTableHeader = (t) => {
    return Object(_workload_table__WEBPACK_IMPORTED_MODULE_7__["WorkloadTableHeader"])(t);
};
StatefulSetTableHeader.displayName = 'StatefulSetTableHeader';
const StatefulSetDetails = ({ obj: ss }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(ss, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodRingController"], { namespace: ss.metadata.namespace, kind: ss.kind, render: d => {
                    return d.loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_1__["default"], { key: ss.metadata.uid, podData: d.data[ss.metadata.uid], obj: ss, resourceKind: _models__WEBPACK_IMPORTED_MODULE_10__["StatefulSetModel"], path: "/spec/replicas" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingInline"], null);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: ss, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ContainerTable"], { containers: ss.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: ss, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') }))));
};
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const EnvironmentTab = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const StatefulSetsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Stateful Sets", Header: StatefulSetTableHeader.bind(null, t), Row: StatefulSetTableRow, virtualize: true }));
};
const StatefulSetsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, props, { title: t('COMMON:MSG_LNB_MENU_25'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_25') }), ListComponent: StatefulSetsList, kind: kind, canCreate: true }));
};
const StatefulSetPods = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["PodsComponent"], Object.assign({}, props, { customData: { showNodes: true } }));
const pages = [_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(StatefulSetDetails), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml(), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].pods(StatefulSetPods), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].envEditor(EnvironmentTab), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_4__["ResourceEventStream"])];
const StatefulSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: pages }));


/***/ }),

/***/ "./public/components/workload-table.tsx":
/*!**********************************************!*\
  !*** ./public/components/workload-table.tsx ***!
  \**********************************************/
/*! exports provided: WorkloadTableRow, WorkloadTableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkloadTableRow", function() { return WorkloadTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkloadTableHeader", function() { return WorkloadTableHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");






const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const WorkloadTableRow = ({ obj, index, rowKey, style, kind, menuActions }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: obj.metadata.uid, index: index, trKey: rowKey, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePath"])(kind, obj.metadata.name, obj.metadata.namespace)}/pods`, title: "pods" },
                obj.status.replicas || 0,
                " of ",
                obj.spec.replicas,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["LabelList"], { kind: kind, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Selector"], { selector: obj.spec.selector, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: obj }))));
};
WorkloadTableRow.displayName = 'WorkloadTableRow';
const WorkloadTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'numReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
WorkloadTableHeader.displayName = 'WorkloadTableHeader';


/***/ })

}]);
//# sourceMappingURL=stateful-set-3b942df2c1a90a49fe19.js.map