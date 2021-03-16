(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalogserviceclaim"],{

/***/ "./public/components/hypercloud/catalog-service-claim.tsx":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/catalog-service-claim.tsx ***!
  \****************************************************************/
/*! exports provided: catalogServiceClaimMenuActions, CatalogServiceClaimsList, CatalogServiceClaimsPage, CatalogServiceClaimsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogServiceClaimMenuActions", function() { return catalogServiceClaimMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogServiceClaimsList", function() { return CatalogServiceClaimsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogServiceClaimsPage", function() { return CatalogServiceClaimsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogServiceClaimsDetailsPage", function() { return CatalogServiceClaimsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");







const { common } = _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory;
const kind = _models__WEBPACK_IMPORTED_MODULE_2__["CatalogServiceClaimModel"].kind;
const catalogServiceClaimMenuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_2__["CatalogServiceClaimModel"]), ...common, _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.ModifyStatus];
const CatalogServiceClaimDetails = ({ obj: catalogServiceClaim }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_6__["ResourceLabel"])(catalogServiceClaim, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: catalogServiceClaim, showPodSelector: true, showNodeSelector: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_118')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, catalogServiceClaim.resourceName),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, catalogServiceClaim.status && catalogServiceClaim.status.status),
                        catalogServiceClaim.status && catalogServiceClaim.status.reason && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_CONDITIONS_TABLEHEADER_5')),
                        catalogServiceClaim.status && catalogServiceClaim.status.reason && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, catalogServiceClaim.status.reason)))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const CatalogServiceClaimsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: catalogServiceClaimMenuActions, pages: [details(CatalogServiceClaimDetails), editYaml()] }));
CatalogServiceClaimsDetailsPage.displayName = 'CatalogServiceClaimsDetailsPage';
const tableColumnClasses = [
    '',
    '',
    '',
    _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const CatalogServiceClaimTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[1] }, obj.status && obj.status.status),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: catalogServiceClaimMenuActions, kind: kind, resource: obj }))));
};
const CatalogServiceClaimTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
CatalogServiceClaimTableHeader.displayName = 'CatalogServiceClaimTableHeader';
const CatalogServiceClaimsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Catalog Service Claim", Header: CatalogServiceClaimTableHeader.bind(null, t), Row: CatalogServiceClaimTableRow }));
};
CatalogServiceClaimsList.displayName = 'CatalogServiceClaimsList';
const CatalogServiceClaimsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_19'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_19') }), canCreate: true, kind: kind, ListComponent: CatalogServiceClaimsList }, props));
};
CatalogServiceClaimsPage.displayName = 'CatalogServiceClaimsPage';



/***/ })

}]);
//# sourceMappingURL=catalogserviceclaim-ec6d57c32e38023eab88.js.map