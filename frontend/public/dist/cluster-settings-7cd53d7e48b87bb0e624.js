(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-settings"],{

/***/ "./public/components/cluster-settings/cluster-operator.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/cluster-settings/cluster-operator.tsx ***!
  \*****************************************************************/
/*! exports provided: clusterOperatorReference, ClusterOperatorList, ClusterOperatorPage, ClusterOperatorDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterOperatorReference", function() { return clusterOperatorReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterOperatorList", function() { return ClusterOperatorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterOperatorPage", function() { return ClusterOperatorPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterOperatorDetailsPage", function() { return ClusterOperatorDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");












const clusterOperatorReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterOperatorModel"]);
const getIcon = (status) => {
    return {
        [_module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Available]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["GreenCheckCircleIcon"], null),
        [_module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Updating]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SyncAltIcon"], null),
        [_module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Degraded]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["YellowExclamationTriangleIcon"], null),
        [_module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Unknown]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["UnknownIcon"], null),
    }[status];
};
const OperatorStatusIconAndLabel = ({ status }) => {
    const icon = getIcon(status);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        icon,
        " ",
        status));
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-3', 'col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-2', 'col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-3', 'col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-4', 'col-sm-3', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_10__["Kebab"].columnClass,
];
const ClusterOperatorTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Status',
            sortFunc: 'getClusterOperatorStatus',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Version',
            sortFunc: 'getClusterOperatorVersion',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Message',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
ClusterOperatorTableHeader.displayName = 'ClusterOperatorTableHeader';
const ClusterOperatorTableRow = ({ obj, index, key, style }) => {
    const { status, message } = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["getStatusAndMessage"])(obj);
    const operatorVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["getClusterOperatorVersion"])(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: clusterOperatorReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorStatusIconAndLabel, { status: status })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] }, operatorVersion || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[3], 'co-break-word', 'co-pre-line') }, message ? lodash_es__WEBPACK_IMPORTED_MODULE_1__["truncate"](message, { length: 256, separator: ' ' }) : '-')));
};
const ClusterOperatorList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Cluster Operators", Header: ClusterOperatorTableHeader, Row: ClusterOperatorTableRow, virtualize: true })));
const allStatuses = [
    _module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Available,
    _module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Updating,
    _module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Degraded,
    _module_k8s__WEBPACK_IMPORTED_MODULE_9__["OperatorStatus"].Unknown,
];
const filters = [
    {
        filterGroupName: 'Status',
        type: 'cluster-operator-status',
        reducer: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["getClusterOperatorStatus"],
        items: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](allStatuses, (phase) => ({
            id: phase,
            title: phase,
        })),
    },
];
const UpdateInProgressAlert = ({ cv }) => {
    const updateCondition = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["getClusterVersionCondition"])(cv, _module_k8s__WEBPACK_IMPORTED_MODULE_9__["ClusterVersionConditionType"].Progressing, _module_k8s__WEBPACK_IMPORTED_MODULE_9__["K8sResourceConditionStatus"].True);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, updateCondition && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__body--section-heading" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "info", title: "Cluster update in progress." }, updateCondition.message)))));
};
const ClusterOperatorPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UpdateInProgressAlert, { cv: props.cv }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["ListPage"], Object.assign({}, props, { title: "Cluster Operators", kind: clusterOperatorReference, ListComponent: ClusterOperatorList, canCreate: false, rowFilters: filters }))));
const OperandVersions = ({ versions }) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](versions) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["EmptyBox"], { label: "Versions" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Version"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](versions, ({ name, version }, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, version))))))));
};
const ClusterOperatorDetails = ({ obj }) => {
    const { status, message } = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["getStatusAndMessage"])(obj);
    const versions = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.versions', []);
    const conditions = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.conditions', []);
    // Show the operator version in the details if it's the only version.
    const operatorVersion = versions.length === 1 && versions[0].name === 'operator' ? versions[0].version : null;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["SectionHeading"], { text: "Cluster Operator Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceSummary"], { resource: obj })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                        operatorVersion && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Version"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, operatorVersion))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorStatusIconAndLabel, { status: status })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Message"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-pre-line" }, message || '-'))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_8__["Conditions"], { conditions: conditions })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["SectionHeading"], { text: "Operand Versions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperandVersions, { versions: versions }))));
};
const ClusterOperatorDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { kind: clusterOperatorReference, pages: [_utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].details(ClusterOperatorDetails), _utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].editYaml()], breadcrumbsFor: () => [
        { name: 'Cluster Operators', path: '/settings/cluster/clusteroperators' },
        { name: 'Cluster Operator Details', path: props.match.url },
    ] })));


/***/ }),

/***/ "./public/components/cluster-settings/cluster-settings.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/cluster-settings/cluster-settings.tsx ***!
  \*****************************************************************/
/*! exports provided: clusterAutoscalerReference, CurrentChannel, UpdateStatus, CurrentVersion, UpdateLink, CurrentVersionHeader, ClusterVersionDetailsTable, ClusterOperatorTabPage, ClusterSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterAutoscalerReference", function() { return clusterAutoscalerReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChannel", function() { return CurrentChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatus", function() { return UpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentVersion", function() { return CurrentVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLink", function() { return UpdateLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentVersionHeader", function() { return CurrentVersionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterVersionDetailsTable", function() { return ClusterVersionDetailsTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterOperatorTabPage", function() { return ClusterOperatorTabPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterSettingsPage", function() { return ClusterSettingsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _cluster_operator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cluster-operator */ "./public/components/cluster-settings/cluster-operator.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals */ "./public/components/modals/index.ts");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global-config */ "./public/components/cluster-settings/global-config.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");













const cancelUpdate = (cv) => {
    Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_9__["ClusterVersionModel"], cv, [{ path: '/spec/desiredUpdate', op: 'remove' }]).catch((err) => {
        const error = err.message;
        Object(_modals__WEBPACK_IMPORTED_MODULE_7__["errorModal"])({ error });
    });
};
const clusterAutoscalerReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["ClusterAutoscalerModel"]);
const CurrentChannel = ({ cv }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", isInline: true, "data-test-id": "current-channel-update-link", onClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["clusterChannelModal"])({ cv }), variant: "link" },
    cv.spec.channel || '-',
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })));
const InvalidMessage = ({ cv }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_12__["RedExclamationCircleIcon"], null),
        " Invalid cluster version"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: () => cancelUpdate(cv), variant: "primary" }, "Cancel update")));
const UpdatesAvailableMessage = ({ cv }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-update-status" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowCircleUpIcon"], { className: "update-pending" }),
        " Update available"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["clusterUpdateModal"])({ cv }), variant: "primary" }, "Update now"))));
const UpdatingMessage = ({ cv }) => {
    const updatingCondition = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterVersionCondition"])(cv, _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterVersionConditionType"].Progressing, _module_k8s__WEBPACK_IMPORTED_MODULE_10__["K8sResourceConditionStatus"].True);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        updatingCondition.message && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["SyncAltIcon"], { className: "fa-spin" }),
            " ",
            updatingCondition.message)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], { to: "/settings/cluster/clusteroperators" }, "View details")));
};
const ErrorRetrievingMessage = ({ cv }) => {
    const retrievedUpdatesCondition = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterVersionCondition"])(cv, _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterVersionConditionType"].RetrievedUpdates, _module_k8s__WEBPACK_IMPORTED_MODULE_10__["K8sResourceConditionStatus"].False);
    return retrievedUpdatesCondition.reason === 'NoChannel' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No update channel selected")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["truncateMiddle"])(retrievedUpdatesCondition.message, { length: 256 }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_12__["RedExclamationCircleIcon"], null),
            ' ',
            retrievedUpdatesCondition.reason === 'VersionNotFound'
                ? 'Version not found'
                : 'Error retrieving')));
};
const FailingMessage = ({ cv }) => {
    const failingCondition = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterVersionCondition"])(cv, _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterVersionConditionType"].Failing, _module_k8s__WEBPACK_IMPORTED_MODULE_10__["K8sResourceConditionStatus"].True);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["truncateMiddle"])(failingCondition.message, { length: 256 }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_12__["RedExclamationCircleIcon"], null),
                    " Failing"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], { to: "/settings/cluster/clusteroperators" }, "View details")));
};
const UpToDateMessage = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_12__["GreenCheckCircleIcon"], null),
    " Up to date"));
const UpdateStatus = ({ cv }) => {
    const status = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterUpdateStatus"])(cv);
    switch (status) {
        case _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].Invalid:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InvalidMessage, { cv: cv });
        case _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].UpdatesAvailable:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UpdatesAvailableMessage, { cv: cv });
        case _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].Updating:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UpdatingMessage, { cv: cv });
        case _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].ErrorRetrieving:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ErrorRetrievingMessage, { cv: cv });
        case _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].Failing:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FailingMessage, { cv: cv });
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UpToDateMessage, null);
    }
};
const CurrentVersion = ({ cv }) => {
    const desiredVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getDesiredClusterVersion"])(cv);
    const lastVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getLastCompletedUpdate"])(cv);
    const status = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterUpdateStatus"])(cv);
    if (status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].UpToDate || status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].UpdatesAvailable) {
        return desiredVersion ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-select-to-copy" }, desiredVersion)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_12__["YellowExclamationTriangleIcon"], null),
            "\u00A0Unknown"));
    }
    return lastVersion ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-select-to-copy" }, lastVersion) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "None");
};
const UpdateLink = ({ cv }) => {
    const status = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterUpdateStatus"])(cv);
    const updatesAvailable = !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getAvailableClusterUpdates"])(cv));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, updatesAvailable &&
        (status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].ErrorRetrieving ||
            status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].Failing ||
            status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].Updating) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", type: "button", onClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["clusterUpdateModal"])({ cv }) }, "Update to another version")) : null));
};
const CurrentVersionHeader = ({ cv }) => {
    const status = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterUpdateStatus"])(cv);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].UpToDate || status === _module_k8s__WEBPACK_IMPORTED_MODULE_10__["ClusterUpdateStatus"].UpdatesAvailable
        ? 'Current Version'
        : 'Last Completed Version'));
};
const ClusterVersionDetailsTable = ({ obj: cv, autoscalers, }) => {
    const { history = [] } = cv.status;
    const clusterID = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getClusterID"])(cv);
    const errataLink = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getErrataLink"])(cv);
    const desiredImage = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](cv, 'status.desired.image') || '';
    // Split image on `@` to emphasize the digest.
    const imageParts = desiredImage.split('@');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table co-detail-table--lg" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__row row" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section col-sm-4 col-md-3" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Channel"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CurrentChannel, { cv: cv })))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section col-sm-4 col-md-4" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CurrentVersionHeader, { cv: cv })),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CurrentVersion, { cv: cv })),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UpdateLink, { cv: cv })))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section col-sm-4 col-md-4" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Update Status"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UpdateStatus, { cv: cv }))))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                window.SERVER_FLAGS.branding !== 'okd' && window.SERVER_FLAGS.branding !== 'azure' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" },
                    "View this cluster and manage subscription settings in",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ExternalLink"], { text: "OpenShift Cluster Manager", href: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["getOCMLink"])(clusterID) }),
                    ".")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Cluster ID"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-all co-select-to-copy", "data-test-id": "cv-details-table-cid" }, clusterID),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Desired Release Image"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-all co-select-to-copy", "data-test-id": "cv-details-table-image" }, imageParts.length === 2 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
                            imageParts[0],
                            "@"),
                        imageParts[1])) : (desiredImage || '-')),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Cluster Version Configuration"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["ClusterVersionModel"]), name: cv.metadata.name })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Cluster Autoscaler"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](autoscalers) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], { to: `${Object(_utils__WEBPACK_IMPORTED_MODULE_11__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["ClusterAutoscalerModel"])}/~new` },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["AddCircleOIcon"], { className: "co-icon-space-r" }),
                        "Create Autoscaler")) : (autoscalers.map((autoscaler) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: autoscaler.metadata.uid },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: clusterAutoscalerReference, name: autoscaler.metadata.name }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: "Update History" }, errataLink && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ExternalLink"], { text: "View errata", href: errataLink })))),
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](history) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["EmptyBox"], { label: "History" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Version"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "State"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Started"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Completed"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](history, (update, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "co-break-all co-select-to-copy", "data-test-id": "cv-details-table-version" }, update.version || '-'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-id": "cv-details-table-state" }, update.state || '-'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["Timestamp"], { timestamp: update.startedTime })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, update.completionTime ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["Timestamp"], { timestamp: update.completionTime })) : ('-'))))))))))));
};
const ClusterOperatorTabPage = ({ obj: cv }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cluster_operator__WEBPACK_IMPORTED_MODULE_6__["ClusterOperatorPage"], { cv: cv, autoFocus: false, showTitle: false }));
const pages = [
    {
        href: '',
        name: 'Details',
        component: ClusterVersionDetailsTable,
    },
    {
        href: 'clusteroperators',
        name: 'Cluster Operators',
        component: ClusterOperatorTabPage,
    },
    {
        href: 'globalconfig',
        name: 'Global Configuration',
        component: _global_config__WEBPACK_IMPORTED_MODULE_8__["GlobalConfigPage"],
    },
];
const ClusterSettingsPage = ({ match }) => {
    const title = 'Cluster Settings';
    const resources = [
        { kind: _module_k8s__WEBPACK_IMPORTED_MODULE_10__["clusterVersionReference"], name: 'version', isList: false, prop: 'obj' },
        { kind: clusterAutoscalerReference, isList: true, prop: 'autoscalers', optional: true },
    ];
    const resourceKeys = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resources, 'prop');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-nav-title" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading", "data-test-id": "cluster-settings-page-heading" }, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["Firehose"], { resources: resources },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["HorizontalNav"], { pages: pages, match: match, resourceKeys: resourceKeys }))));
};


/***/ }),

/***/ "./public/components/cluster-settings/global-config.tsx":
/*!**************************************************************!*\
  !*** ./public/components/cluster-settings/global-config.tsx ***!
  \**************************************************************/
/*! exports provided: GlobalConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigPage", function() { return GlobalConfigPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plugins */ "./public/plugins.ts");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _oauth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oauth */ "./public/components/cluster-settings/oauth.tsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _factory_table_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../factory/table-filters */ "./public/components/factory/table-filters.ts");












const stateToProps = (state) => ({
    configResources: state.k8s.getIn(['RESOURCES', 'configResources']),
    flags: state[_reducers_features__WEBPACK_IMPORTED_MODULE_6__["featureReducerName"]],
});
const editYAMLMenuItem = (name, resourceLink) => ({
    label: `Edit ${name} Resource`,
    href: `${resourceLink}/yaml`,
});
const viewAPIExplorerMenuItem = (name, apiExplorerLink) => ({
    label: `Explore ${name} API`,
    href: apiExplorerLink,
});
const oauthMenuItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](_oauth__WEBPACK_IMPORTED_MODULE_9__["addIDPItems"], (label, id) => ({
    label,
    href: `/settings/idp/${id}`,
}));
const ItemRow = ({ item }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-resource-list__item", "data-test-action": item.label },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-10 col-sm-4" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: item.path, "data-test-id": item.id }, item.label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "hidden-xs col-sm-7" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-line-clamp" }, item.description || '-')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-kebab-pf" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"], { options: item.menuItems }))));
};
class GlobalConfigPage_ extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            errors: [],
            items: [],
            loading: true,
            textFilter: '',
        };
    }
    getGlobalConfigs() {
        return _plugins__WEBPACK_IMPORTED_MODULE_5__["registry"].getGlobalConfigs();
    }
    componentDidMount() {
        Promise.all(this.props.configResources.map((model) => {
            return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sList"])(model)
                .catch(({ response: { status }, message = `Could not get resource ${model.kind}` }) => {
                if (status !== 403) {
                    this.setState(({ errors }) => ({ errors: [...errors, message] }));
                }
                return [];
            })
                .then((items) => items.map((i) => (Object.assign(Object.assign({}, i), { model }))));
        })).then((responses) => {
            const flattenedResponses = lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatten"](responses);
            const winnowedResponses = flattenedResponses.map((item) => ({
                model: item.model,
                uid: item.metadata.uid,
                name: item.metadata.name,
                namespace: item.metadata.namespace,
                kind: item.kind,
            }));
            const globalConfigs = this.getGlobalConfigs();
            const usableConfigs = globalConfigs
                .filter((item) => this.checkFlags(item))
                .map((item) => item.properties);
            const allItems = [...winnowedResponses, ...usableConfigs]
                .map((item) => {
                const apiExplorerLink = `/api-resource/cluster/${Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(item.model)}`;
                const resourceLink = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["resourcePathFromModel"])(item.model, item.name, item.namespace);
                return {
                    label: item.kind,
                    id: item.uid,
                    description: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["getResourceDescription"])(item.model),
                    path: resourceLink,
                    menuItems: [
                        editYAMLMenuItem(item.kind, resourceLink),
                        viewAPIExplorerMenuItem(item.kind, apiExplorerLink),
                        ...(item.kind === 'OAuth' ? oauthMenuItems : []),
                    ],
                };
            })
                .concat([
                {
                    label: 'Alertmanager',
                    id: 'alertmanager',
                    description: 'Configure grouping and routing of alerts',
                    path: '/monitoring/alertmanagerconfig',
                    menuItems: [
                        {
                            label: 'Create Receiver',
                            href: '/monitoring/alertmanagerconfig/receivers/~new',
                        },
                        {
                            label: `Edit Configuration YAML`,
                            href: `/monitoring/alertmanageryaml`,
                        },
                    ],
                },
            ]);
            const sortedItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["sortBy"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatten"](allItems), 'label', 'asc');
            this.setState({
                items: sortedItems,
                loading: false,
            });
        });
    }
    checkFlags(c) {
        const { flags } = this.props;
        const { required } = c.properties;
        const requiredArray = required ? lodash_es__WEBPACK_IMPORTED_MODULE_1__["castArray"](required) : [];
        const requirementMissing = lodash_es__WEBPACK_IMPORTED_MODULE_1__["some"](requiredArray, (flag) => flag && (Object(_reducers_features__WEBPACK_IMPORTED_MODULE_6__["flagPending"])(flags.get(flag)) || !flags.get(flag)));
        return requirementMissing ? null : c.properties;
    }
    render() {
        const { errors, items = [], loading, textFilter } = this.state;
        const visibleItems = items.filter(({ label, description = '' }) => {
            return (Object(_factory_table_filters__WEBPACK_IMPORTED_MODULE_11__["fuzzyCaseInsensitive"])(textFilter, label) ||
                description.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1);
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            !loading && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar co-m-pane__filter-bar--with-help-text" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group co-m-pane__filter-bar-group--help-text" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" }, "Edit the following resources to manage the configuration of your cluster.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__fiter-bar-group co-m-pane__filter-bar-group--filter" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TextFilter"], { value: textFilter, label: "by name or description", onChange: (val) => this.setState({ textFilter: val }) })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
                !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ExpandableAlert"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["AlertVariant"].danger, alerts: errors.map((error, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: i }, error))) })),
                loading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingBox"], null),
                !loading &&
                    (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](visibleItems) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["EmptyBox"], { label: "Configuration Resources" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-10 col-sm-4" }, "Configuration Resource"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "hidden-xs col-sm-7" }, "Description"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](visibleItems, (item) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ItemRow, { item: item, key: item.id }))))))))));
    }
}
const GlobalConfigPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps)(GlobalConfigPage_);


/***/ }),

/***/ "./public/components/cluster-settings/oauth.tsx":
/*!******************************************************!*\
  !*** ./public/components/cluster-settings/oauth.tsx ***!
  \******************************************************/
/*! exports provided: addIDPItems, OAuthDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIDPItems", function() { return addIDPItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthDetailsPage", function() { return OAuthDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/datetime */ "./public/components/utils/datetime.ts");







const { common } = _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_2__["OAuthModel"]), ...common];
const oAuthReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["OAuthModel"]);
// Convert to ms for formatDuration
const tokenDuration = (seconds) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["isNil"](seconds) ? '-' : Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__["formatDuration"])(seconds * 1000);
const IdentityProviders = ({ identityProviders }) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](identityProviders) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["EmptyBox"], { label: "Identity Providers" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Type"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Mapping Method"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](identityProviders, (idp) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: idp.name },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-idp-name": idp.name }, idp.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-idp-type-for": idp.name }, idp.type),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-idp-mapping-for": idp.name }, idp.mappingMethod || 'claim'))))))));
};
const addIDPItems = Object.freeze({
    basicauth: 'Basic Authentication',
    github: 'GitHub',
    gitlab: 'GitLab',
    google: 'Google',
    htpasswd: 'HTPasswd',
    keystone: 'Keystone',
    ldap: 'LDAP',
    oidconnect: 'OpenID Connect',
    requestheader: 'Request Header',
});
const OAuthDetails = ({ obj }) => {
    const { identityProviders, tokenConfig } = obj.spec;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "OAuth Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: obj }, tokenConfig && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Access Token Max Age"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, tokenDuration(tokenConfig.accessTokenMaxAgeSeconds)))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Identity Providers" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation co-m-pane__explanation--alt" }, "Identity providers determine how users log into the cluster."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { className: "co-m-pane__dropdown", buttonClassName: "pf-c-dropdown__toggle", title: "Add", noSelection: true, items: addIDPItems, onChange: (name) => _utils__WEBPACK_IMPORTED_MODULE_5__["history"].push(`/settings/idp/${name}`) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IdentityProviders, { identityProviders: identityProviders }))));
};
const OAuthDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: oAuthReference, menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].details(OAuthDetails), _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].editYaml()] })));


/***/ })

}]);
//# sourceMappingURL=cluster-settings-7cd53d7e48b87bb0e624.js.map