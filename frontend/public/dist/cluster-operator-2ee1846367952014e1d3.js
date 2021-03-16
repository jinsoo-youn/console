(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-operator"],{

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


/***/ })

}]);
//# sourceMappingURL=cluster-operator-2ee1846367952014e1d3.js.map