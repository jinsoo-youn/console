(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision~deployment-config~dev-console-topology~set-traffic-splitting"],{

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

/***/ "./public/components/deployment-config.tsx":
/*!*************************************************!*\
  !*** ./public/components/deployment-config.tsx ***!
  \*************************************************/
/*! exports provided: menuActions, DeploymentConfigDetailsList, DeploymentConfigsDetails, DeploymentConfigsDetailsPage, DeploymentConfigsList, DeploymentConfigsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfigDetailsList", function() { return DeploymentConfigDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfigsDetails", function() { return DeploymentConfigsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfigsDetailsPage", function() { return DeploymentConfigsDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfigsList", function() { return DeploymentConfigsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentConfigsPage", function() { return DeploymentConfigsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _replication_controller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./replication-controller */ "./public/components/replication-controller.jsx");
/* harmony import */ var _workload_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workload-table */ "./public/components/workload-table.tsx");
















const DeploymentConfigsReference = 'DeploymentConfig';
const rollout = (dc) => {
    const req = {
        kind: 'DeploymentRequest',
        apiVersion: 'apps.openshift.io/v1',
        name: dc.metadata.name,
        latest: true,
        force: true,
    };
    const opts = {
        name: dc.metadata.name,
        ns: dc.metadata.namespace,
        path: 'instantiate',
    };
    return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_7__["DeploymentConfigModel"], req, opts);
};
const RolloutAction = (kind, obj) => ({
    label: 'Start Rollout',
    callback: () => rollout(obj).catch((err) => {
        const error = err.message;
        Object(_modals__WEBPACK_IMPORTED_MODULE_6__["errorModal"])({ error });
    }),
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        subresource: 'instantiate',
        name: obj.metadata.name,
        namespace: obj.metadata.namespace,
        verb: 'create',
    },
});
const PauseAction = (kind, obj) => ({
    label: obj.spec.paused ? 'Resume Rollouts' : 'Pause Rollouts',
    callback: () => Object(_utils__WEBPACK_IMPORTED_MODULE_13__["togglePaused"])(kind, obj).catch((err) => Object(_modals__WEBPACK_IMPORTED_MODULE_6__["errorModal"])({ error: err.message })),
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: obj.metadata.name,
        namespace: obj.metadata.namespace,
        verb: 'patch',
    },
});
const { ModifyCount, AddStorage, common } = _utils__WEBPACK_IMPORTED_MODULE_13__["Kebab"].factory;
const menuActions = [
    RolloutAction,
    PauseAction,
    ModifyCount,
    _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__["AddHealthChecks"],
    AddStorage,
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getExtensionsKebabActionsForKind"])(_models__WEBPACK_IMPORTED_MODULE_7__["DeploymentConfigModel"]),
    _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__["EditHealthChecks"],
    ...common,
];
const DeploymentConfigDetailsList = ({ dc }) => {
    const timeout = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](dc, 'spec.strategy.rollingParams.timeoutSeconds');
    const updatePeriod = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](dc, 'spec.strategy.rollingParams.updatePeriodSeconds');
    const interval = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](dc, 'spec.strategy.rollingParams.intervalSeconds');
    const triggers = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](dc.spec.triggers, 'type').join(', ');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Latest Version", obj: dc, path: "status.latestVersion" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Message", obj: dc, path: "status.details.message", hideEmpty: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Update Strategy", obj: dc, path: "spec.strategy.type" }),
        dc.spec.strategy.type === 'RollingUpdate' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Timeout", obj: dc, path: "spec.strategy.rollingParams.timeoutSeconds", hideEmpty: true }, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(timeout, 'second')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Update Period", obj: dc, path: "spec.strategy.rollingParams.updatePeriodSeconds", hideEmpty: true }, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(updatePeriod, 'second')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Interval", obj: dc, path: "spec.strategy.rollingParams.intervalSeconds", hideEmpty: true }, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(interval, 'second')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Max Unavailable", obj: dc, path: "spec.strategy.rollingParams.maxUnavailable" },
                dc.spec.strategy.rollingUpdate.maxUnavailable || 1,
                " of",
                ' ',
                Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(dc.spec.replicas, 'pod')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Max Surge", obj: dc, path: "spec.strategy.rollingParams.maxSurge" },
                dc.spec.strategy.rollingUpdate.maxSurge || 1,
                " greater than",
                ' ',
                Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(dc.spec.replicas, 'pod')))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Min Ready Seconds", obj: dc, path: "spec.minReadySeconds" }, dc.spec.minReadySeconds ? Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(dc.spec.minReadySeconds, 'second') : 'Not Configured'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["DetailsItem"], { label: "Triggers", obj: dc, path: "spec.triggers", hideEmpty: true }, triggers)));
};
const DeploymentConfigsDetails = ({ obj: dc }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Deployment Config Details" }),
            dc.spec.paused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["WorkloadPausedAlert"], { obj: dc, model: _models__WEBPACK_IMPORTED_MODULE_7__["DeploymentConfigModel"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodRingController"], { namespace: dc.metadata.namespace, kind: dc.kind, render: (d) => {
                    return d.loaded ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_3__["default"], { key: dc.metadata.uid, podData: d.data[dc.metadata.uid], obj: dc, resourceKind: _models__WEBPACK_IMPORTED_MODULE_7__["DeploymentConfigModel"], path: "/spec/replicas" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["LoadingInline"], null));
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["ResourceSummary"], { resource: dc, showPodSelector: true, showNodeSelector: true, showTolerations: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, dc.status.availableReplicas === dc.status.updatedReplicas &&
                                dc.spec.replicas === dc.status.availableReplicas ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: "Up to date" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: "Updating" }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeploymentConfigDetailsList, { dc: dc }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Containers" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["ContainerTable"], { containers: dc.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_10__["VolumesTable"], { resource: dc, heading: "Volumes" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_8__["Conditions"], { conditions: dc.status.conditions }))));
};
const EnvironmentPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then((c) => c.EnvironmentPage) }, props)));
const envPath = ['spec', 'template', 'spec', 'containers'];
const environmentComponent = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false }));
const ReplicationControllersTab = ({ obj }) => {
    const { metadata: { namespace, name }, } = obj;
    // Hide the create button to avoid confusion when showing replication controllers for an object.
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_replication_controller__WEBPACK_IMPORTED_MODULE_14__["ReplicationControllersPage"], { showTitle: false, namespace: namespace, selector: {
            'openshift.io/deployment-config.name': name,
        }, canCreate: false }));
};
const pages = [
    _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].details(DeploymentConfigsDetails),
    _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].editYaml(),
    {
        href: 'replicationcontrollers',
        name: 'Replication Controllers',
        component: ReplicationControllersTab,
    },
    _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].pods(),
    _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].envEditor(environmentComponent),
    _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_9__["ResourceEventStream"]),
];
const DeploymentConfigsDetailsPage = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["DetailsPage"], Object.assign({}, props, { kind: DeploymentConfigsReference, menuActions: menuActions, pages: pages })));
};
DeploymentConfigsDetailsPage.displayName = 'DeploymentConfigsDetailsPage';
const kind = 'DeploymentConfig';
const DeploymentConfigTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_workload_table__WEBPACK_IMPORTED_MODULE_15__["WorkloadTableRow"], { obj: obj, index: index, rowKey: key, style: style, menuActions: menuActions, kind: kind }));
};
const DeploymentConfigTableHeader = (t) => {
    return Object(_workload_table__WEBPACK_IMPORTED_MODULE_15__["WorkloadTableHeader"])(t);
};
DeploymentConfigTableHeader.displayName = 'DeploymentConfigTableHeader';
const DeploymentConfigsList = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["Table"], Object.assign({}, props, { "aria-label": "Deployment Configs", Header: DeploymentConfigTableHeader.bind(null, t), Row: DeploymentConfigTableRow, virtualize: true })));
};
DeploymentConfigsList.displayName = 'DeploymentConfigsList';
const DeploymentConfigsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["ListPage"], Object.assign({ kind: DeploymentConfigsReference, ListComponent: DeploymentConfigsList, canCreate: true }, props)));
DeploymentConfigsPage.displayName = 'DeploymentConfigsListPage';


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
//# sourceMappingURL=delete-revision~deployment-config~dev-console-topology~set-traffic-splitting-d3af31e6f020f8430eba.js.map