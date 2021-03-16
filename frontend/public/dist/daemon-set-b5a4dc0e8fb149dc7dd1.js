(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daemon-set"],{

/***/ "./public/components/daemon-set.tsx":
/*!******************************************!*\
  !*** ./public/components/daemon-set.tsx ***!
  \******************************************/
/*! exports provided: menuActions, DaemonSetDetailsList, DaemonSets, DaemonSetsPage, DaemonSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetDetailsList", function() { return DaemonSetDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSets", function() { return DaemonSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetsPage", function() { return DaemonSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetsDetailsPage", function() { return DaemonSetsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");













const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__["AddHealthChecks"], _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["DaemonSetModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__["EditHealthChecks"], ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.common];
const kind = 'DaemonSet';
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const DaemonSetTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'daemonsetNumScheduled',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
DaemonSetTableHeader.displayName = 'DaemonSetTableHeader';
const DaemonSetTableRow = ({ obj: daemonset, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: daemonset.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: daemonset.metadata.name, namespace: daemonset.metadata.namespace, title: daemonset.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: daemonset.metadata.namespace, title: daemonset.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${daemonset.metadata.namespace}/daemonsets/${daemonset.metadata.name}/pods`, title: "pods" },
                daemonset.status.currentNumberScheduled,
                " of ",
                daemonset.status.desiredNumberScheduled,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: kind, labels: daemonset.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Selector"], { selector: daemonset.spec.selector, namespace: daemonset.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: kind, resource: daemonset }))));
};
const DaemonSetDetailsList = ({ ds }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_38'), obj: ds, path: "status.currentNumberScheduled" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_39'), obj: ds, path: "status.desiredNumberScheduled" })));
};
const DaemonSetDetails = ({ obj: daemonset }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_12__["ResourceLabel"])(daemonset, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["PodRingController"], { namespace: daemonset.metadata.namespace, kind: daemonset.kind, render: d => {
                    return d.loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["PodRing"], { key: daemonset.metadata.uid, pods: d.data[daemonset.metadata.uid].pods, obj: daemonset, resourceKind: _models__WEBPACK_IMPORTED_MODULE_10__["DaemonSetModel"], enableScaling: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LoadingInline"], null);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: daemonset, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DaemonSetDetailsList, { ds: daemonset })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ContainerTable"], { containers: daemonset.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: daemonset, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') }))));
};
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const EnvironmentTab = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const { details, pods, editYaml, envEditor, events } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const DaemonSets = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Daemon Sets", Header: DaemonSetTableHeader.bind(null, t), Row: DaemonSetTableRow, virtualize: true }));
};
const DaemonSetsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_30'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_30') }), canCreate: true, ListComponent: DaemonSets, kind: kind }, props));
};
const DaemonSetPods = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["PodsComponent"], Object.assign({}, props, { customData: { showNodes: true } }));
const DaemonSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["detailsPage"])(DaemonSetDetails)), editYaml(), pods(DaemonSetPods), envEditor(EnvironmentTab), events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"])] }));


/***/ }),

/***/ "./public/components/overview/daemon-set-overview.tsx":
/*!************************************************************!*\
  !*** ./public/components/overview/daemon-set-overview.tsx ***!
  \************************************************************/
/*! exports provided: DaemonSetOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetOverview", function() { return DaemonSetOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _daemon_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../daemon-set */ "./public/components/daemon-set.tsx");
/* harmony import */ var _resource_overview_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-overview-page */ "./public/components/overview/resource-overview-page.tsx");
/* harmony import */ var _resource_overview_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource-overview-details */ "./public/components/overview/resource-overview-details.tsx");







const DaemonSetOverviewDetails = ({ item: { obj, pods }, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__pod-counts" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["PodRing"], { pods: pods, resourceKind: _models__WEBPACK_IMPORTED_MODULE_2__["DaemonSetModel"], obj: obj, enableScaling: false })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__summary" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceSummary"], { resource: obj, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_daemon_set__WEBPACK_IMPORTED_MODULE_4__["DaemonSetDetailsList"], { ds: obj }))));
const tabs = [
    {
        name: 'Details',
        component: DaemonSetOverviewDetails,
    },
    {
        name: 'Resources',
        component: _resource_overview_page__WEBPACK_IMPORTED_MODULE_5__["OverviewDetailsResourcesTab"],
    },
];
const DaemonSetOverview = ({ item, customActions }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_details__WEBPACK_IMPORTED_MODULE_6__["ResourceOverviewDetails"], { item: item, kindObj: _models__WEBPACK_IMPORTED_MODULE_2__["DaemonSetModel"], menuActions: customActions ? [...customActions, ..._daemon_set__WEBPACK_IMPORTED_MODULE_4__["menuActions"]] : _daemon_set__WEBPACK_IMPORTED_MODULE_4__["menuActions"], tabs: tabs }));


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
//# sourceMappingURL=daemon-set-b5a4dc0e8fb149dc7dd1.js.map