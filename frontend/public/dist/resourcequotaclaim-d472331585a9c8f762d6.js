(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resourcequotaclaim"],{

/***/ "./public/components/hypercloud/resource-quota-claim.tsx":
/*!***************************************************************!*\
  !*** ./public/components/hypercloud/resource-quota-claim.tsx ***!
  \***************************************************************/
/*! exports provided: menuActions, ResourceQuotaClaimsList, ResourceQuotaClaimsPage, ResourceQuotaClaimsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceQuotaClaimsList", function() { return ResourceQuotaClaimsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceQuotaClaimsPage", function() { return ResourceQuotaClaimsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceQuotaClaimsDetailsPage", function() { return ResourceQuotaClaimsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








const { common } = _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])('ResourceQuotaClaim')), ...common, _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.ModifyStatus];
const kind = 'ResourceQuotaClaim';
const ResourceQuotaClaimTableHeader = (t) => {
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
            sortFunc: 'status.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'ResourceName',
            sortField: 'resourceName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
ResourceQuotaClaimTableHeader.displayName = 'ResourceQuotaClaimTableHeader';
const ResourceQuotaClaimTableRow = ({ obj: resourcequotaclaims, index, key, style }) => {
    var _a, _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: resourcequotaclaims.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: resourcequotaclaims.metadata.name, namespace: resourcequotaclaims.metadata.namespace, title: resourcequotaclaims.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: resourcequotaclaims.metadata.namespace, title: resourcequotaclaims.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, (_a = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.status) === null || _a === void 0 ? void 0 : _a.status),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, resourcequotaclaims.resourceName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] }, Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["fromNow"])((_b = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.metadata) === null || _b === void 0 ? void 0 : _b.creationTimestamp)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: resourcequotaclaims }))));
};
const ResourceQuotaClaimsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "ResourceQuotaClaims", Header: ResourceQuotaClaimTableHeader.bind(null, t), Row: ResourceQuotaClaimTableRow, virtualize: true }));
};
ResourceQuotaClaimsList.displayName = 'ResourceQuotaClaimsList';
const ResourceQuotaClaimsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ kind: 'ResourceQuotaClaim', canCreate: true, ListComponent: ResourceQuotaClaimsList }, props));
ResourceQuotaClaimsPage.displayName = 'ResourceQuotaClaimsPage';
const ResourceQuotaClaimsDetails = ({ obj: resourcequotaclaims }) => {
    var _a, _b, _c, _d, _e, _f;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_102') }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: resourcequotaclaims, showOwner: false }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_44')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_b = (_a = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.creator)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_45')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_c = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.status) === null || _c === void 0 ? void 0 : _c.status),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_RESOURCEQUOTACLAIMS_RESOURCEQUOTACLAIMDETAILS_TABDETAILS_2')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_d = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.status) === null || _d === void 0 ? void 0 : _d.reason),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_RESOURCEQUOTACLAIMS_RESOURCEQUOTACLAIMDETAILS_TABDETAILS_3')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_e = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.specLimit) === null || _e === void 0 ? void 0 : _e.limitCpu),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('SINGLE:MSG_RESOURCEQUOTACLAIMS_RESOURCEQUOTACLAIMDETAILS_TABDETAILS_4')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, (_f = resourcequotaclaims === null || resourcequotaclaims === void 0 ? void 0 : resourcequotaclaims.specLimit) === null || _f === void 0 ? void 0 : _f.limitMemory))))))));
};
ResourceQuotaClaimsDetails.displayName = 'ResourceQuotaClaimsDetails';
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const ResourceQuotaClaimsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: 'ResourceQuotaClaim', menuActions: menuActions, pages: [details(ResourceQuotaClaimsDetails), editYaml()] }));
ResourceQuotaClaimsDetailsPage.displayName = 'ResourceQuotaClaimsDetailsPage';


/***/ })

}]);
//# sourceMappingURL=resourcequotaclaim-d472331585a9c8f762d6.js.map