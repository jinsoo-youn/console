(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-claim"],{

/***/ "./public/components/hypercloud/cluster-claim.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/cluster-claim.tsx ***!
  \********************************************************/
/*! exports provided: menuActions, ClusterRow, ClusterClaimDetailsList, ClusterClaims, ClusterClaimsPage, ClusterClaimsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterRow", function() { return ClusterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterClaimDetailsList", function() { return ClusterClaimDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterClaims", function() { return ClusterClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterClaimsPage", function() { return ClusterClaimsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterClaimsDetailsPage", function() { return ClusterClaimsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterClaimModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common, _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.ModifyClaim];
const kind = _models__WEBPACK_IMPORTED_MODULE_6__["ClusterClaimModel"].kind;
const tableColumnClasses = ['', '', '', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass];
const ClusterClaimTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_LNB_MENU_84'),
            sortFunc: 'spec.clusterName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_59'),
            sortFunc: 'spec.provider',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_62'),
            sortFunc: 'spec.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_11'),
            sortField: 'metadata.annotations.creator',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[6] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[7] },
        },
    ];
};
ClusterClaimTableHeader.displayName = 'ClusterClaimTableHeader';
const ClusterClaimTableRow = ({ obj: clusterClaim, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: clusterClaim.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: clusterClaim.metadata.name, namespace: clusterClaim.metadata.namespace, title: clusterClaim.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[1] }, clusterClaim.spec.clusterName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] }, clusterClaim.spec.provider),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] }, clusterClaim.spec.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[4], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["Status"], { status: clusterClaim.status.phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[5] }, clusterClaim.metadata.annotations.creator),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: clusterClaim.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[7] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: clusterClaim }))));
};
const ClusterRow = ({ pod }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-4 col-xs-5" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: kind }),
            pod.metadata.name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-5 col-xs-7" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Cluster", name: pod.spec.placement.clusters[0].name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-3 hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["Status"], { status: pod.status.phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-2 hidden-md hidden-sm hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: pod.metadata.creationTimestamp }))));
};
const ClusterClaimDetailsList = ({ clcl }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Provider", obj: clcl, path: "spec.provider" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Cluster Name", obj: clcl, path: "spec.clusterName" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Version", obj: clcl, path: "spec.version" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Region", obj: clcl, path: "spec.region" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Master Node Count", obj: clcl, path: "spec.masterNum" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Master Node Type", obj: clcl, path: "spec.masterType" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Worker Node Count", obj: clcl, path: "spec.workerNum" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Worker Node Type", obj: clcl, path: "spec.workerType" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "SSH Key", obj: clcl, path: "spec.sshKey" })));
};
const ClusterClaimDetails = ({ obj: clusterClaim }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Cluster Claim Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: clusterClaim, showOwner: false }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Owner", obj: clusterClaim, path: "metadata.annotations.creator" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterClaimDetailsList, { clcl: clusterClaim }))))));
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const ClusterClaims = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Cluster Claims", Header: ClusterClaimTableHeader.bind(null, t), Row: ClusterClaimTableRow, virtualize: true }));
};
const clusterClaimStatusReducer = (clusterClaim) => {
    return clusterClaim.status.phase;
};
const filters = [
    {
        filterGroupName: 'Status',
        type: 'registry-status',
        reducer: clusterClaimStatusReducer,
        items: [
            { id: 'Created', title: 'Created' },
            { id: 'Waiting', title: 'Waiting' },
            { id: 'Admitted', title: 'Admitted' },
            { id: 'Success', title: 'Success' },
            { id: 'Rejected', title: 'Rejected' },
            { id: 'Error', title: 'Error' },
            { id: 'Deleted', title: 'Deleted' },
        ],
    },
];
const ClusterClaimsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ canCreate: true, ListComponent: ClusterClaims, kind: kind, rowFilters: filters }, props));
const ClusterClaimsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(ClusterClaimDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=cluster-claim-3fd51d212e3788513b19.js.map