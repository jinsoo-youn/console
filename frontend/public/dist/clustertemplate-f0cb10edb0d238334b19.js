(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clustertemplate"],{

/***/ "./public/components/hypercloud/cluster-template.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/cluster-template.tsx ***!
  \***********************************************************/
/*! exports provided: clusterTemplateMenuActions, ClusterTemplatesList, ClusterTemplatesPage, ClusterTemplatesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterTemplateMenuActions", function() { return clusterTemplateMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterTemplatesList", function() { return ClusterTemplatesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterTemplatesPage", function() { return ClusterTemplatesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterTemplatesDetailsPage", function() { return ClusterTemplatesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");







const { common } = _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory;
const kind = _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTemplateModel"].kind;
const clusterTemplateMenuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_2__["ClusterTemplateModel"]), ...common];
const objectKinds = clustertemplate => {
    const objects = !!clustertemplate.objectKinds ? clustertemplate.objectKinds : [];
    let objMap = new Map();
    for (const i in objects) {
        const kind = !!objects[i] ? objects[i] : 'unknown kind';
        if (!!objMap.get(kind)) {
            const num = objMap.get(kind);
            objMap.set(kind, num + 1);
        }
        else {
            objMap.set(kind, 1);
        }
    }
    const objectList = [];
    objMap.forEach((value, key) => {
        objectList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            key,
            " ",
            value));
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, objectList);
};
const ClusterTemplateDetails = ({ obj: clusterTemplate }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    const objectSummary = objectKinds(clusterTemplate);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_6__["ResourceLabel"])(clusterTemplate, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: clusterTemplate, showPodSelector: true, showOwner: false })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_104')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, objectSummary)))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const ClusterTemplatesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: clusterTemplateMenuActions, pages: [details(ClusterTemplateDetails), editYaml()] }));
ClusterTemplatesDetailsPage.displayName = 'ClusterTemplatesDetailsPage';
const tableColumnClasses = [
    '',
    '',
    '',
    '',
    _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const ClusterTemplateTableRow = ({ obj, index, key, style }) => {
    const objects = objectKinds(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: obj.metadata.name, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[1] }, "all-namespace"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, objects),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: clusterTemplateMenuActions, kind: kind, resource: obj }))));
};
const ClusterTemplateTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_104'),
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ClusterTemplateTableHeader.displayName = 'ClusterTemplateTableHeader';
const ClusterTemplatesList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Cluster Template", Header: ClusterTemplateTableHeader.bind(null, t), Row: ClusterTemplateTableRow }));
};
ClusterTemplatesList.displayName = 'ClusterTemplatesList';
const ClusterTemplatesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_104'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_104') }), canCreate: true, kind: kind, ListComponent: ClusterTemplatesList }, props));
};
ClusterTemplatesPage.displayName = 'ClusterTemplatesPage';



/***/ })

}]);
//# sourceMappingURL=clustertemplate-f0cb10edb0d238334b19.js.map