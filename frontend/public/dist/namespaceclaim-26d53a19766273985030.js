(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["namespaceclaim"],{

/***/ "./public/components/hypercloud/namespace-claim.tsx":
/*!**********************************************************!*\
  !*** ./public/components/hypercloud/namespace-claim.tsx ***!
  \**********************************************************/
/*! exports provided: menuActions, NamespaceClaimsList, NamespaceClaimsPage, NamespaceClaimsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespaceClaimsList", function() { return NamespaceClaimsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespaceClaimsPage", function() { return NamespaceClaimsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespaceClaimsDetailsPage", function() { return NamespaceClaimsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








// import { WorkloadTableRow, WorkloadTableHeader } from '../workload-table';
const { common } = _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["modelFor"])('NamespaceClaim')), ...common, _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.ModifyStatus];
const kind = 'NamespaceClaim';
const NamespaceClaimTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'resourceName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'status.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_97'),
            sortField: 'metadata.annotations.owner',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
NamespaceClaimTableHeader.displayName = 'NamespaceClaimTableHeader';
const NamespaceClaimTableRow = ({ obj: namespaceclaims, index, key, style }) => {
    var _a, _b, _c, _d;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: namespaceclaims.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: namespaceclaims.metadata.name, namespace: namespaceclaims.metadata.namespace, title: namespaceclaims.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.resourceName, title: namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.resourceName })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, (_a = namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.status) === null || _a === void 0 ? void 0 : _a.status),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, (_c = (_b = namespaceclaims.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c.owner),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] }, Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["fromNow"])((_d = namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.metadata) === null || _d === void 0 ? void 0 : _d.creationTimestamp)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: namespaceclaims }))));
};
const NamespaceClaimsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "NamespaceClaims", Header: NamespaceClaimTableHeader.bind(null, t), Row: NamespaceClaimTableRow, virtualize: true }));
};
NamespaceClaimsList.displayName = 'NamespaceClaimsList';
const NamespaceClaimsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ kind: 'NamespaceClaim', canCreate: true, ListComponent: NamespaceClaimsList }, props));
NamespaceClaimsPage.displayName = 'NamespaceClaimsPage';
const NamespaceClaimsDetails = ({ obj: namespaceclaims }) => {
    var _a, _b, _c, _d;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_103') }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: namespaceclaims, showOwner: false }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_44')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, namespaceclaims.metadata.annotations.owner)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_45')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_a = namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.status) === null || _a === void 0 ? void 0 : _a.status),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_NAMESPACECLAIMS_NAMESPACEDETAILS_TABDETAILS_1')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_b = namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.status) === null || _b === void 0 ? void 0 : _b.reason),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_NAMESPACECLAIMS_NAMESPACEDETAILS_TABDETAILS_2')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_c = namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.specLimit) === null || _c === void 0 ? void 0 : _c.limitCpu),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_NAMESPACECLAIMS_NAMESPACEDETAILS_TABDETAILS_3')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_d = namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.specLimit) === null || _d === void 0 ? void 0 : _d.limitMemory),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_NAMESPACECLAIMS_NAMESPACEDETAILS_TABDETAILS_4')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, namespaceclaims === null || namespaceclaims === void 0 ? void 0 : namespaceclaims.resourceName))))))));
};
NamespaceClaimsDetails.displayName = 'NamespaceClaimsDetails';
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const NamespaceClaimsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: 'NamespaceClaim', menuActions: menuActions, pages: [details(NamespaceClaimsDetails), editYaml()] }));
NamespaceClaimsDetailsPage.displayName = 'NamespaceClaimsDetailsPage';


/***/ })

}]);
//# sourceMappingURL=namespaceclaim-26d53a19766273985030.js.map