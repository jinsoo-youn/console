(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daemonset"],{

/***/ "./public/components/hypercloud/federated-daemonset.tsx":
/*!**************************************************************!*\
  !*** ./public/components/hypercloud/federated-daemonset.tsx ***!
  \**************************************************************/
/*! exports provided: menuActions, ClusterRow, DaemonSetDistributionTable, FederatedDaemonSets, FederatedDaemonSetsPage, FederatedDaemonSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterRow", function() { return ClusterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetDistributionTable", function() { return DaemonSetDistributionTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedDaemonSets", function() { return FederatedDaemonSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedDaemonSetsPage", function() { return FederatedDaemonSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedDaemonSetsDetailsPage", function() { return FederatedDaemonSetsDetailsPage; });
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









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_8__["FederatedDaemonSetModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_8__["FederatedDaemonSetModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const FederatedDaemonSetTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'daemonsetPhase',
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
FederatedDaemonSetTableHeader.displayName = 'FederatedDaemonSetTableHeader';
const FederatedDaemonSetTableRow = ({ obj: daemonset, index, key, style }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: daemonset.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: daemonset.metadata.name, namespace: daemonset.metadata.namespace, title: daemonset.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["Status"], { status: daemonset.status.phase })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LabelList"], { kind: kind, labels: daemonset.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, t('MSG_DETAILS_TABDETAILS_DETAILS_100', { 0: lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](daemonset.metadata.annotations) })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: daemonset.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: daemonset }))));
};
const ClusterRow = ({ daemonset }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-4 col-xs-5" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: kind }),
            daemonset.metadata.name),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-3 col-sm-5 col-xs-7" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Cluster", name: daemonset.spec.placement.clusters[0].name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 col-md-2 col-sm-3 hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["Status"], { status: daemonset.status.phase })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-2 hidden-md hidden-sm hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: daemonset.metadata.creationTimestamp }))));
};
const DaemonSetDistributionTable = ({ heading, daemonset }) => {
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ClusterRow, { daemonset: daemonset })))));
};
const FederatedDaemonSetDetails = ({ obj: daemonset }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: `${t('COMMON:MSG_MAIN_DIV1_3', { 0: t('COMMON:MSG_LNB_MENU_30') })} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}` }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: daemonset })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DaemonSetDistributionTable, { key: "distributionTable", heading: "Distribution", daemonset: daemonset }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const FederatedDaemonSets = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Federated Daemon Sets", Header: FederatedDaemonSetTableHeader, Row: FederatedDaemonSetTableRow, virtualize: true }));
const FederatedDaemonSetsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ canCreate: true, ListComponent: FederatedDaemonSets, kind: kind }, props));
const FederatedDaemonSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(FederatedDaemonSetDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=daemonset-1be653fe815b275cf125.js.map