(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["limit-range"],{

/***/ "./public/components/limit-range.tsx":
/*!*******************************************!*\
  !*** ./public/components/limit-range.tsx ***!
  \*******************************************/
/*! exports provided: LimitRangeTableRow, LimitRangeTableHeader, LimitRangeList, LimitRangeListPage, LimitRangeDetailsRow, LimitRangeDetailsList, LimitRangeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeTableRow", function() { return LimitRangeTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeTableHeader", function() { return LimitRangeTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeList", function() { return LimitRangeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeListPage", function() { return LimitRangeListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeDetailsRow", function() { return LimitRangeDetailsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeDetailsList", function() { return LimitRangeDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitRangeDetailsPage", function() { return LimitRangeDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








const { common } = _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["LimitRangeModel"]), ...common];
const LimitRangeReference = _models__WEBPACK_IMPORTED_MODULE_4__["LimitRangeModel"].kind;
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-4', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const LimitRangeTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: LimitRangeReference, name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: LimitRangeReference, resource: obj }))));
};
const LimitRangeTableHeader = (t) => {
    console.log(t('COMMON:MSG_MAIN_TABLEHEADER_12'));
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
LimitRangeTableHeader.displayName = 'LimitRangeTableHeader';
const LimitRangeList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Limit Ranges", Header: LimitRangeTableHeader.bind(null, t), Row: LimitRangeTableRow, virtualize: true }));
};
const LimitRangeListPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, props, { title: t('COMMON:MSG_LNB_MENU_81'), kind: LimitRangeReference, ListComponent: LimitRangeList, canCreate: true }));
};
const LimitRangeDetailsRow = ({ limitType, resource, limit }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { className: "co-resource-list__item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, limitType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, resource),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, limit.min || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, limit.max || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, limit.defaultRequest || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, limit.default || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, limit.maxLimitRequestRatio || '-')));
};
const LimitRangeDetailsRows = ({ limit }) => {
    const properties = ['max', 'min', 'default', 'defaultRequest', 'maxLimitRequestRatio'];
    const resources = {};
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](properties, property => {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](limit[property], (value, resource) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](resources, [resource, property], value));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resources, (resourceLimit, resource) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LimitRangeDetailsRow, { key: resource, limitType: limit.type, resource: resource, limit: resourceLimit })))));
};
const LimitRangeDetailsList = resource => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_1') }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "table-responsive" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "co-m-table-grid co-m-table-grid--bordered table" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", { className: "co-m-table-grid__head" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_1')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_2')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_3')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_4')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_5')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_6')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, t('COMMON:MSG_DETAILS_TABDETAILS_LIMITS_TABLEHEADER_7')))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", { className: "co-m-table-grid__body" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resource.resource.spec.limits, (limit, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LimitRangeDetailsRows, { limit: limit, key: index }))))))));
};
const Details = ({ obj: rq }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_81') }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: rq })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LimitRangeDetailsList, { resource: rq })));
};
const LimitRangeDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].details(Details), _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=limit-range-698b25f91e539e91181f.js.map