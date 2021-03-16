(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deployment"],{

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

/***/ "./public/components/deployment.tsx":
/*!******************************************!*\
  !*** ./public/components/deployment.tsx ***!
  \******************************************/
/*! exports provided: menuActions, DeploymentDetailsList, DeploymentsDetailsPage, DeploymentsList, DeploymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentDetailsList", function() { return DeploymentDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsDetailsPage", function() { return DeploymentsDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsList", function() { return DeploymentsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsPage", function() { return DeploymentsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _replicaset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./replicaset */ "./public/components/replicaset.jsx");
/* harmony import */ var _workload_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workload-table */ "./public/components/workload-table.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");















const deploymentsReference = 'Deployment';
const { ModifyCount, AddStorage, common } = _utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].factory;
const UpdateStrategy = (kind, deployment) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return {
        label: t('COMMON:MSG_MAIN_ACTIONBUTTON_8'),
        callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_6__["configureUpdateStrategyModal"])({ deployment }),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: deployment.metadata.name,
            namespace: deployment.metadata.namespace,
            verb: 'patch',
        },
    };
};
const PauseAction = (kind, obj) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return {
        label: obj.spec.paused ? t('COMMON:MSG_MAIN_ACTIONBUTTON_37') : t('COMMON:MSG_MAIN_ACTIONBUTTON_12'),
        callback: () => Object(_utils__WEBPACK_IMPORTED_MODULE_11__["togglePaused"])(kind, obj).catch(err => Object(_modals__WEBPACK_IMPORTED_MODULE_6__["errorModal"])({ error: err.message })),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: obj.metadata.name,
            namespace: obj.metadata.namespace,
            verb: 'patch',
        },
    };
};
const menuActions = [ModifyCount, PauseAction, _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["AddHealthChecks"], AddStorage, UpdateStrategy, ..._utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["EditHealthChecks"], ...common];
const DeploymentDetailsList = ({ deployment }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_25'), obj: deployment, path: "spec.strategy.type" }),
        deployment.spec.strategy.type === 'RollingUpdate' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_26'), obj: deployment, path: "spec.strategy.rollingUpdate.maxUnavailable" },
                deployment.spec.strategy.rollingUpdate.maxUnavailable || 1,
                " of ",
                Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.replicas, 'pod')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_27'), obj: deployment, path: "spec.strategy.rollingUpdate.maxSurge" },
                deployment.spec.strategy.rollingUpdate.maxSurge || 1,
                " greater than ",
                Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.replicas, 'pod')))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_28'), obj: deployment, path: "spec.progressDeadlineSeconds" }, deployment.spec.progressDeadlineSeconds ? Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.progressDeadlineSeconds, 'second') : 'Not Configured'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_29'), obj: deployment, path: "spec.minReadySeconds" }, deployment.spec.minReadySeconds ? Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.minReadySeconds, 'second') : 'Not Configured')));
};
DeploymentDetailsList.displayName = 'DeploymentDetailsList';
const DeploymentDetails = ({ obj: deployment }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__["ResourceLabel"])(deployment, t) }) }),
            deployment.spec.paused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["WorkloadPausedAlert"], { obj: deployment, model: _models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["PodRingController"], { namespace: deployment.metadata.namespace, kind: deployment.kind, render: d => {
                    return d.loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_2__["default"], { key: deployment.metadata.uid, podData: d.data[deployment.metadata.uid], obj: deployment, resourceKind: _models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"], path: "/spec/replicas" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["LoadingInline"], null);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceSummary"], { resource: deployment, showPodSelector: true, showNodeSelector: true, showTolerations: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, deployment.status.availableReplicas === deployment.status.updatedReplicas && deployment.spec.replicas === deployment.status.availableReplicas ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: "Up to date" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: "Updating" })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeploymentDetailsList, { deployment: deployment }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ContainerTable"], { containers: deployment.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: deployment, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONDITIONS_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_7__["Conditions"], { conditions: deployment.status.conditions }))));
};
DeploymentDetails.displayName = 'DeploymentDetails';
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const environmentComponent = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const ReplicaSetsTab = ({ obj }) => {
    const { metadata: { namespace }, spec: { selector }, } = obj;
    // Hide the create button to avoid confusion when showing replica sets for an object.
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_replicaset__WEBPACK_IMPORTED_MODULE_12__["ReplicaSetsPage"], { showTitle: false, namespace: namespace, selector: selector, canCreate: false });
};
const { details, editYaml, pods, envEditor, events } = _utils__WEBPACK_IMPORTED_MODULE_11__["navFactory"];
const DeploymentsDetailsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["DetailsPage"], Object.assign({}, props, { kind: deploymentsReference, menuActions: menuActions, pages: [
            details(DeploymentDetails),
            editYaml(),
            {
                href: 'replicasets',
                name: t('COMMON:MSG_LNB_MENU_31'),
                component: ReplicaSetsTab,
            },
            pods(),
            envEditor(environmentComponent),
            events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"]),
        ] })));
};
DeploymentsDetailsPage.displayName = 'DeploymentsDetailsPage';
const kind = 'Deployment';
const DeploymentTableRow = ({ obj, index, key, style }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_workload_table__WEBPACK_IMPORTED_MODULE_13__["WorkloadTableRow"], { obj: obj, index: index, rowKey: key, style: style, menuActions: menuActions, kind: kind });
};
const DeploymentTableHeader = (t) => {
    return Object(_workload_table__WEBPACK_IMPORTED_MODULE_13__["WorkloadTableHeader"])(t);
};
DeploymentTableHeader.displayName = 'DeploymentTableHeader';
const DeploymentsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["Table"], Object.assign({}, props, { "aria-label": "Deployments", Header: DeploymentTableHeader.bind(null, t), Row: DeploymentTableRow, virtualize: true }));
};
DeploymentsList.displayName = 'DeploymentsList';
const DeploymentsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_24'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_24') }), kind: deploymentsReference, canCreate: true, ListComponent: DeploymentsList }, props));
};
DeploymentsPage.displayName = 'DeploymentsPage';


/***/ }),

/***/ "./public/components/hypercloud/federated-deployment.tsx":
/*!***************************************************************!*\
  !*** ./public/components/hypercloud/federated-deployment.tsx ***!
  \***************************************************************/
/*! exports provided: menuActions, FederatedDeployments, FederatedDeploymentsPage, FederatedDeploymentsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedDeployments", function() { return FederatedDeployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedDeploymentsPage", function() { return FederatedDeploymentsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedDeploymentsDetailsPage", function() { return FederatedDeploymentsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events */ "./public/components/events.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");









const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__["AddHealthChecks"], _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_8__["FederatedDeploymentModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__["EditHealthChecks"], ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_8__["FederatedDeploymentModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const FederatedDeploymentTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
FederatedDeploymentTableHeader.displayName = 'FederatedDeploymentTableHeader';
const FederatedDeploymentTableRow = ({ obj: deployment, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: deployment.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: deployment.metadata.name, namespace: deployment.metadata.namespace, title: deployment.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: deployment.metadata.namespace, title: deployment.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LabelList"], { kind: kind, labels: deployment.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Selector"], { selector: deployment.spec.selector, namespace: deployment.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: deployment }))));
};
const FederatedDeploymentDetails = ({ obj: deployment }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: `${t('COMMON:MSG_MAIN_DIV1_3', { 0: t('COMMON:MSG_LNB_MENU_24') })} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: deployment, showPodSelector: true, showNodeSelector: true, showTolerations: true }))))));
};
const { details, editYaml, events } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const FederatedDeployments = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Federated Deployments", Header: FederatedDeploymentTableHeader.bind(null, t), Row: FederatedDeploymentTableRow, virtualize: true }));
};
const FederatedDeploymentsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ canCreate: true, ListComponent: FederatedDeployments, kind: kind }, props));
const FederatedDeploymentsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(FederatedDeploymentDetails)), editYaml(), events(_events__WEBPACK_IMPORTED_MODULE_7__["ResourceEventStream"])] }));


/***/ }),

/***/ "./public/components/overview/deployment-overview.tsx":
/*!************************************************************!*\
  !*** ./public/components/overview/deployment-overview.tsx ***!
  \************************************************************/
/*! exports provided: DeploymentOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentOverviewPage", function() { return DeploymentOverviewPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _deployment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deployment */ "./public/components/deployment.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _resource_overview_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-overview-page */ "./public/components/overview/resource-overview-page.tsx");
/* harmony import */ var _resource_overview_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-overview-details */ "./public/components/overview/resource-overview-details.tsx");
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");







const DeploymentOverviewDetails = ({ item: { obj: d, pods: pods, current, previous, isRollingOut }, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
        d.spec.paused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["WorkloadPausedAlert"], { obj: d, model: _models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__pod-counts" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_6__["default"], { key: d.metadata.uid, podData: {
                    pods,
                    current,
                    previous,
                    isRollingOut,
                }, obj: d, resourceKind: _models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"], path: "/spec/replicas" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__summary" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceSummary"], { resource: d, showPodSelector: true, showNodeSelector: true, showTolerations: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, d.status.availableReplicas === d.status.updatedReplicas ? ('Active') : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-space-r" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null)),
                    ' ',
                    "Updating"))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_deployment__WEBPACK_IMPORTED_MODULE_2__["DeploymentDetailsList"], { deployment: d }))));
};
const tabs = [
    {
        name: 'Details',
        component: DeploymentOverviewDetails,
    },
    {
        name: 'Resources',
        component: _resource_overview_page__WEBPACK_IMPORTED_MODULE_4__["OverviewDetailsResourcesTab"],
    },
];
const DeploymentOverviewPage = ({ item, customActions, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_details__WEBPACK_IMPORTED_MODULE_5__["ResourceOverviewDetails"], { item: item, kindObj: _models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"], menuActions: customActions ? [...customActions, ..._deployment__WEBPACK_IMPORTED_MODULE_2__["menuActions"]] : _deployment__WEBPACK_IMPORTED_MODULE_2__["menuActions"], tabs: tabs }));


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

/***/ "./public/components/replicaset.jsx":
/*!******************************************!*\
  !*** ./public/components/replicaset.jsx ***!
  \******************************************/
/*! exports provided: replicaSetMenuActions, ReplicaSetsList, ReplicaSetsPage, ReplicaSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicaSetMenuActions", function() { return replicaSetMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicaSetsList", function() { return ReplicaSetsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicaSetsPage", function() { return ReplicaSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicaSetsDetailsPage", function() { return ReplicaSetsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
// TODO file should be renamed replica-set.jsx to match convention












const { ModifyCount, AddStorage, common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const replicaSetMenuActions = [ModifyCount, AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["ReplicaSetModel"]), ...common];
const Details = ({ obj: replicaSet }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    const revision = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](replicaSet, ['metadata', 'annotations', 'deployment.kubernetes.io/revision']);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(replicaSet, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: replicaSet, showPodSelector: true, showNodeSelector: true, showTolerations: true }, revision && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_41')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, revision))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourcePodCount"], { resource: replicaSet })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ContainerTable"], { containers: replicaSet.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: replicaSet, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') }))));
};
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const environmentComponent = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const ReplicaSetPods = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["PodsComponent"], Object.assign({}, props, { customData: { showNodes: true } }));
const { details, editYaml, pods, envEditor, events } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const ReplicaSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { menuActions: replicaSetMenuActions, pages: [details(Details), editYaml(), pods(ReplicaSetPods), envEditor(environmentComponent), events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"])] }));
const kind = 'ReplicaSet';
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-xl'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const ReplicaSetTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `${Object(_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePath"])(kind, obj.metadata.name, obj.metadata.namespace)}/pods`, title: "pods" },
                obj.status.replicas || 0,
                " of ",
                obj.spec.replicas,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: kind, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["OwnerReferences"], { resource: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: replicaSetMenuActions, kind: kind, resource: obj }))));
};
const ReplicaSetTableHeader = t => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'numReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_11'),
            sortField: 'metadata.ownerReferences[0].name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
ReplicaSetTableHeader.displayName = 'ReplicaSetTableHeader';
const ReplicaSetsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Replica Sets", Header: ReplicaSetTableHeader.bind(null, t), Row: ReplicaSetTableRow, virtualize: true }));
};
const ReplicaSetsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    const { canCreate = true } = props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_31'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_31') }), canCreate: canCreate, kind: "ReplicaSet", ListComponent: ReplicaSetsList }, props));
};



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
//# sourceMappingURL=deployment-92b0d6ca7cf1b2100625.js.map