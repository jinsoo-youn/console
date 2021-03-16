(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knative-services-page"],{

/***/ "./packages/knative-plugin/src/components/services/ServiceHeader.tsx":
/*!***************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/services/ServiceHeader.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _service_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-table */ "./packages/knative-plugin/src/components/services/service-table.ts");


const ServiceHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][1] },
        },
        {
            title: 'URL',
            sortField: 'status.url',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][2] },
        },
        {
            title: 'Generation',
            sortField: 'metadata.generation',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][3] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][4] },
        },
        {
            title: 'Conditions',
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][5] },
        },
        {
            title: 'Ready',
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][6] },
        },
        {
            title: 'Reason',
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][7] },
        },
        {
            title: '',
            props: { className: _service_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][8] },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceHeader);


/***/ }),

/***/ "./packages/knative-plugin/src/components/services/ServiceList.tsx":
/*!*************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/services/ServiceList.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _ServiceHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceHeader */ "./packages/knative-plugin/src/components/services/ServiceHeader.tsx");
/* harmony import */ var _ServiceRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceRow */ "./packages/knative-plugin/src/components/services/ServiceRow.tsx");





const ServiceList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["Table"], Object.assign({}, props, { "aria-label": _models__WEBPACK_IMPORTED_MODULE_2__["ServiceModel"].labelPlural, Header: _ServiceHeader__WEBPACK_IMPORTED_MODULE_3__["default"], Row: _ServiceRow__WEBPACK_IMPORTED_MODULE_4__["default"], virtualize: true })));
/* harmony default export */ __webpack_exports__["default"] = (ServiceList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/services/ServiceRow.tsx":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/services/ServiceRow.tsx ***!
  \************************************************************************/
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../types */ "./packages/knative-plugin/src/types.ts");
/* harmony import */ var _service_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-table */ "./packages/knative-plugin/src/components/services/service-table.ts");









const serviceReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["ServiceModel"]);
const ServiceRow = ({ obj, index, key, style }) => {
    const readyCondition = obj.status
        ? Object(_utils_condition_utils__WEBPACK_IMPORTED_MODULE_6__["getCondition"])(obj.status.conditions, _types__WEBPACK_IMPORTED_MODULE_7__["ConditionTypes"].Ready)
        : null;
    const kind = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["kindObj"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(obj));
    const menuActions = [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].getExtensionsActionsForKind(kind), ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.common];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: serviceReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(_service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(_service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][2], 'co-break-word') }, (obj.status && obj.status.url && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: obj.status.url, text: obj.status.url }))) ||
            '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][3] }, obj.metadata.generation || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][5] }, obj.status ? Object(_utils_condition_utils__WEBPACK_IMPORTED_MODULE_6__["getConditionString"])(obj.status.conditions) : '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][6] }, (readyCondition && readyCondition.status) || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][7] }, (readyCondition && readyCondition.message) || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _service_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][8] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceKebab"], { actions: menuActions, kind: serviceReference, resource: obj }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceRow);


/***/ }),

/***/ "./packages/knative-plugin/src/components/services/ServicesPage.tsx":
/*!**************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/services/ServicesPage.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _ServiceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceList */ "./packages/knative-plugin/src/components/services/ServiceList.tsx");





const ServicesPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, props, { canCreate: true, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"]), ListComponent: _ServiceList__WEBPACK_IMPORTED_MODULE_4__["default"] })));
/* harmony default export */ __webpack_exports__["default"] = (ServicesPage);


/***/ }),

/***/ "./packages/knative-plugin/src/components/services/service-table.ts":
/*!**************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/services/service-table.ts ***!
  \**************************************************************************/
/*! exports provided: tableColumnClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_0__('pf-m-hidden', 'pf-m-visible-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('pf-m-hidden', 'pf-m-visible-on-xl'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('pf-m-hidden', 'pf-m-visible-on-xl'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('pf-m-hidden', 'pf-m-visible-on-2xl'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].columnClass,
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
//# sourceMappingURL=knative-services-page-d57c3344cf245233d6ff.js.map