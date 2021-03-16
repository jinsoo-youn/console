(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pod"],{

/***/ "./public/components/hypercloud/federated-pod.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/federated-pod.tsx ***!
  \********************************************************/
/*! exports provided: menuActions, ClusterRow, PodDistributionTable, FederatedPods, FederatedPodsPage, FederatedPodsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterRow", function() { return ClusterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodDistributionTable", function() { return PodDistributionTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedPods", function() { return FederatedPods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedPodsPage", function() { return FederatedPodsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedPodsDetailsPage", function() { return FederatedPodsDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_8__["FederatedPodModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_8__["FederatedPodModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const FederatedPodTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'podPhase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Annotations',
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
FederatedPodTableHeader.displayName = 'FederatedPodTableHeader';
const FederatedPodTableRow = ({ obj: pod, index, key, style }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: pod.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: pod.metadata.name, namespace: pod.metadata.namespace, title: pod.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["Status"], { status: pod.status.phase })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LabelList"], { kind: kind, labels: pod.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, t('MSG_DETAILS_TABDETAILS_DETAILS_100', { 0: lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](pod.metadata.annotations) })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: pod.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: pod }))));
};
const ClusterRow = ({ pod }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-4 col-xs-5" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: kind }),
            pod.metadata.name),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-5 col-xs-7" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Cluster", name: pod.spec.placement.clusters[0].name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-3 hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["Status"], { status: pod.status.phase })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 hidden-md hidden-sm hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: pod.metadata.creationTimestamp }))));
};
const PodDistributionTable = ({ heading, pod }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: heading }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-table-grid__head" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-4 col-xs-5" }, t('COMMON:MSG_DETAILS_TABOVERVIEW_TABLEHEADER_1')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-5 col-xs-7" }, t('COMMON:MSG_DETAILS_TABOVERVIEW_TABLEHEADER_2')),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-3 hidden-xs" }, "Result"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-1 col-md-2 hidden-sm hidden-xs" }, t('COMMON:MSG_DETAILS_TABOVERVIEW_TABLEHEADER_3'))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid__body" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ClusterRow, { pod: pod })))));
};
const FederatedPodDetails = ({ obj: pod }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: `${t('COMMON:MSG_MAIN_DIV1_3', { 0: t('COMMON:MSG_LNB_MENU_23') })} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}` }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: pod })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PodDistributionTable, { key: "distributionTable", heading: "Distribution", pod: pod }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const FederatedPods = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Federated Pods", Header: FederatedPodTableHeader.bind(null, t), Row: FederatedPodTableRow, virtualize: true }));
};
const FederatedPodsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ canCreate: true, ListComponent: FederatedPods, kind: kind }, props));
const FederatedPodsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(FederatedPodDetails)), editYaml()] }));


/***/ }),

/***/ "./public/components/overview/pod-overview.tsx":
/*!*****************************************************!*\
  !*** ./public/components/overview/pod-overview.tsx ***!
  \*****************************************************/
/*! exports provided: PodOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodOverviewPage", function() { return PodOverviewPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pod */ "./public/components/pod.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _resource_overview_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-overview-details */ "./public/components/overview/resource-overview-details.tsx");
/* harmony import */ var _networking_overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networking-overview */ "./public/components/overview/networking-overview.tsx");





const PodOverviewDetails = ({ item: { obj: pod } }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__summary" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pod__WEBPACK_IMPORTED_MODULE_1__["PodResourceSummary"], { pod: pod })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pod__WEBPACK_IMPORTED_MODULE_1__["PodDetailsList"], { pod: pod }))));
};
const PodResourcesTab = ({ item: { routes, services } }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_networking_overview__WEBPACK_IMPORTED_MODULE_4__["NetworkingOverview"], { services: services, routes: routes })));
const tabs = [
    {
        name: 'Details',
        component: PodOverviewDetails,
    },
    {
        name: 'Resources',
        component: PodResourcesTab,
    },
];
const PodOverviewPage = ({ item, customActions }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_details__WEBPACK_IMPORTED_MODULE_3__["ResourceOverviewDetails"], { item: item, kindObj: _models__WEBPACK_IMPORTED_MODULE_2__["PodModel"], menuActions: customActions ? [...customActions, ..._pod__WEBPACK_IMPORTED_MODULE_1__["menuActions"]] : _pod__WEBPACK_IMPORTED_MODULE_1__["menuActions"], tabs: tabs }));


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
//# sourceMappingURL=pod-49d29a835465c2046bb0.js.map