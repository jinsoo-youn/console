(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notebook"],{

/***/ "./public/components/hypercloud/notebook.tsx":
/*!***************************************************!*\
  !*** ./public/components/hypercloud/notebook.tsx ***!
  \***************************************************/
/*! exports provided: menuActions, NotebookDetailsList, Notebooks, NotebooksPage, NotebooksDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookDetailsList", function() { return NotebookDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notebooks", function() { return Notebooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebooksPage", function() { return NotebooksPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebooksDetailsPage", function() { return NotebooksDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");








const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["NotebookModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common, _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.Connect];
const kind = _models__WEBPACK_IMPORTED_MODULE_6__["NotebookModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const NotebookTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_38'),
            sortField: 'spec.template.spec.containers[0].image',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
NotebookTableHeader.displayName = 'NotebookTableHeader';
const NotebookTableRow = ({ obj: notebook, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: notebook.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: notebook.metadata.name, namespace: notebook.metadata.namespace, title: notebook.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: notebook.metadata.namespace, title: notebook.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[2], 'co-break-word') }, notebook.spec.template.spec.containers[0].image),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: notebook }))));
};
const NotebookDetailsList = ({ notebook }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_45'), obj: notebook, path: "status.status" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_5'), obj: notebook, path: "spec.template.spec.containers[0].image" })));
};
const NotebookDetails = ({ obj: notebook }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__["ResourceLabel"])(notebook, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: notebook })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NotebookDetailsList, { notebook: notebook }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const Notebooks = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Notebooks", Header: NotebookTableHeader.bind(null, t), Row: NotebookTableRow, virtualize: true }));
};
const NotebooksPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ canCreate: true, ListComponent: Notebooks, kind: kind }, props));
const NotebooksDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(NotebookDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=notebook-a8f5ad9ef29970099156.js.map