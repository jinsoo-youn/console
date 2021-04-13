(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-approval"],{

/***/ "./public/components/hypercloud/pipeline-approval.tsx":
/*!************************************************************!*\
  !*** ./public/components/hypercloud/pipeline-approval.tsx ***!
  \************************************************************/
/*! exports provided: menuActions, PipelineApprovalDetailsList, PipelineApprovals, PipelineApprovalsPage, PipelineApprovalsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineApprovalDetailsList", function() { return PipelineApprovalDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineApprovals", function() { return PipelineApprovals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineApprovalsPage", function() { return PipelineApprovalsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineApprovalsDetailsPage", function() { return PipelineApprovalsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["ApprovalModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common, _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.ModifyStatus];
const kind = _models__WEBPACK_IMPORTED_MODULE_6__["ApprovalModel"].kind;
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'),
    _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const PipelineApprovalTableHeader = (t) => {
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
            sortField: 'status.result',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
PipelineApprovalTableHeader.displayName = 'PipelineApprovalTableHeader';
const PipelineApprovalTableRow = ({ obj: pipelineApproval, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: pipelineApproval.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: pipelineApproval.metadata.name, namespace: pipelineApproval.metadata.namespace, title: pipelineApproval.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: pipelineApproval.metadata.namespace, title: pipelineApproval.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[2], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: pipelineApproval.status.result })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: pipelineApproval.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: pipelineApproval }))));
};
const PipelineApprovalDetailsList = ({ ds }) => {
    var _a;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    const time = (_a = ds.status.decisionTime) === null || _a === void 0 ? void 0 : _a.replace('T', ' ').replaceAll('-', '.').replace('Z', '');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_MAIN_TABLEHEADER_3'), obj: ds, path: "status.result" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: ds.status.result })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_18'), obj: ds, path: "status.decisionTime" }, time),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_19'), obj: ds, path: "spec.users" }, ds.spec.users.map(user => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, user))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_20'), obj: ds, path: "status.reason" }, ds.status.reason)));
};
const PipelineApprovalDetails = ({ obj: pipelineApproval }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(pipelineApproval, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: pipelineApproval, showPodSelector: false, showNodeSelector: false, showTolerations: false })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipelineApprovalDetailsList, { ds: pipelineApproval }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const PipelineApprovals = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Pipeline Approvals", Header: PipelineApprovalTableHeader.bind(null, t), Row: PipelineApprovalTableRow, virtualize: true }));
};
const pipelineApprovalStatusReducer = (pipelineApproval) => {
    return pipelineApproval.status.result;
};
const filters = (t) => [
    {
        filterGroupName: t('COMMON:MSG_COMMON_FILTER_10'),
        type: 'pipeline-approval-status',
        reducer: pipelineApprovalStatusReducer,
        items: [
            { id: 'Approved', title: 'Approved' },
            { id: 'Waiting', title: 'Waiting' },
            { id: 'Rejected', title: 'Rejected' },
        ],
    },
];
const PipelineApprovalsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_61'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_61') }), canCreate: true, ListComponent: PipelineApprovals, kind: kind }, props, { rowFilters: filters.bind(null, t)() }));
};
const PipelineApprovalsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(PipelineApprovalDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=pipeline-approval-a0d23eaf1f9115f4a3cb.js.map