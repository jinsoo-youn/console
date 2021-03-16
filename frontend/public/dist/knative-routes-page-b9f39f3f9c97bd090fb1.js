(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knative-routes-page"],{

/***/ "./packages/knative-plugin/src/components/routes/RouteHeader.tsx":
/*!***********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/routes/RouteHeader.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _route_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-table */ "./packages/knative-plugin/src/components/routes/route-table.ts");


const RouteHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][1] },
        },
        {
            title: 'URL',
            sortField: 'status.url',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][2] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][3] },
        },
        {
            title: 'Conditions',
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][4] },
        },
        {
            title: 'Traffic',
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][5] },
        },
        {
            title: '',
            props: { className: _route_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][6] },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (RouteHeader);


/***/ }),

/***/ "./packages/knative-plugin/src/components/routes/RouteList.tsx":
/*!*********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/routes/RouteList.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _RouteHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteHeader */ "./packages/knative-plugin/src/components/routes/RouteHeader.tsx");
/* harmony import */ var _RouteRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteRow */ "./packages/knative-plugin/src/components/routes/RouteRow.tsx");





const RouteList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["Table"], Object.assign({}, props, { "aria-label": _models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"].labelPlural, Header: _RouteHeader__WEBPACK_IMPORTED_MODULE_3__["default"], Row: _RouteRow__WEBPACK_IMPORTED_MODULE_4__["default"], virtualize: true })));
/* harmony default export */ __webpack_exports__["default"] = (RouteList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/routes/RouteRow.tsx":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/routes/RouteRow.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _utils_condition_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/condition-utils */ "./packages/knative-plugin/src/utils/condition-utils.ts");
/* harmony import */ var _route_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-table */ "./packages/knative-plugin/src/components/routes/route-table.ts");








const routeReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["RouteModel"]);
const revisionReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["RevisionModel"]);
const RouteRow = ({ obj, index, key, style }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][0] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: routeReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(_route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][1], 'co-break-word') },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][2] }, (obj.status && obj.status.url && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: obj.status.url, text: obj.status.url }))) ||
        '-'),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][3] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][4] }, obj.status ? Object(_utils_condition_utils__WEBPACK_IMPORTED_MODULE_6__["getConditionString"])(obj.status.conditions) : '-'),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][5] }, obj.status && obj.status.traffic
        ? obj.status.traffic.map((t, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: t.revisionName },
            i > 0 ? ', ' : '',
            `${t.percent}% → `,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { namespace: obj.metadata.namespace, kind: revisionReference, name: t.revisionName, inline: true, hideIcon: true }))))
        : '-'),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _route_table__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"][6] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceKebab"], { actions: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.common, kind: routeReference, resource: obj }))));
/* harmony default export */ __webpack_exports__["default"] = (RouteRow);


/***/ }),

/***/ "./packages/knative-plugin/src/components/routes/RoutesPage.tsx":
/*!**********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/routes/RoutesPage.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _RouteList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteList */ "./packages/knative-plugin/src/components/routes/RouteList.tsx");





const RoutesPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, props, { canCreate: false, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["RouteModel"]), ListComponent: _RouteList__WEBPACK_IMPORTED_MODULE_4__["default"] })));
/* harmony default export */ __webpack_exports__["default"] = (RoutesPage);


/***/ }),

/***/ "./packages/knative-plugin/src/components/routes/route-table.ts":
/*!**********************************************************************!*\
  !*** ./packages/knative-plugin/src/components/routes/route-table.ts ***!
  \**********************************************************************/
/*! exports provided: tableColumnClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");

const tableColumnClasses = [
    'col-lg-2 col-md-2 col-sm-4 col-xs-6',
    'col-lg-2 col-md-2 col-sm-4 col-xs-6',
    'col-lg-3 col-md-2 col-sm-4 hidden-xs',
    'col-lg-2 col-md-2 hidden-sm hidden-xs',
    'col-lg-1 col-md-2 hidden-sm hidden-xs',
    'col-lg-2 col-md-2 hidden-sm hidden-xs',
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].columnClass,
];


/***/ }),

/***/ "./packages/knative-plugin/src/utils/condition-utils.ts":
/*!**************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/condition-utils.ts ***!
  \**************************************************************/
/*! exports provided: getConditionOKCount, getConditionString, getCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConditionOKCount", function() { return getConditionOKCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConditionString", function() { return getConditionString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCondition", function() { return getCondition; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");


const getConditionOKCount = (conditions) => lodash__WEBPACK_IMPORTED_MODULE_0__["sumBy"](conditions, (c) => Number(c.status === _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["K8sResourceConditionStatus"].True));
const getConditionString = (conditions) => `${getConditionOKCount(conditions)} OK / ${lodash__WEBPACK_IMPORTED_MODULE_0__["size"](conditions)}`;
const getCondition = (conditions, type) => lodash__WEBPACK_IMPORTED_MODULE_0__["find"](conditions, (c) => c.type === type);


/***/ })

}]);
//# sourceMappingURL=knative-routes-page-b9f39f3f9c97bd090fb1.js.map