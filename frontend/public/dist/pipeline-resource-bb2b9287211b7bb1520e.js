(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-resource"],{

/***/ "./public/components/hypercloud/pipeline-resource.tsx":
/*!************************************************************!*\
  !*** ./public/components/hypercloud/pipeline-resource.tsx ***!
  \************************************************************/
/*! exports provided: menuActions, PipelineResources, PipelineResourcesPage, PipelineResourcesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineResources", function() { return PipelineResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineResourcesPage", function() { return PipelineResourcesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineResourcesDetailsPage", function() { return PipelineResourcesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");








const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineResourceModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_5__["PipelineResourceModel"].kind;
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-xs-6', 'col-sm-4'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-xs-6', 'col-sm-4'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-4', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass,
];
const PipelineResourceTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
PipelineResourceTableHeader.displayName = 'PipelineResourceTableHeader';
const PipelineResourceTableRow = ({ obj: pipelineResource, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: pipelineResource.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: pipelineResource.metadata.name, namespace: pipelineResource.metadata.namespace, title: pipelineResource.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: pipelineResource.metadata.namespace, title: pipelineResource.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: pipelineResource.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: pipelineResource }))));
};
const PipelineResourceDetails = ({ obj: pipelineResource }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__["ResourceLabel"])(pipelineResource, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: pipelineResource })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Containers" }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const PipelineResources = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Pipeline Resources", Header: PipelineResourceTableHeader.bind(null, t), Row: PipelineResourceTableRow, virtualize: true }));
};
const PipelineResourcesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_62'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_62') }), canCreate: true, ListComponent: PipelineResources, kind: kind }, props));
};
const PipelineResourcesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(PipelineResourceDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=pipeline-resource-bb2b9287211b7bb1520e.js.map