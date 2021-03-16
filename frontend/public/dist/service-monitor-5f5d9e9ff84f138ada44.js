(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-monitor"],{

/***/ "./public/components/service-monitor.jsx":
/*!***********************************************!*\
  !*** ./public/components/service-monitor.jsx ***!
  \***********************************************/
/*! exports provided: ServiceMonitorsList, ServiceMonitorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMonitorsList", function() { return ServiceMonitorsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMonitorsPage", function() { return ServiceMonitorsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");








const { Edit, Delete } = _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory;
const menuActions = [Edit, Delete];
const namespaceSelectorLinks = ({ spec }) => {
    const namespaces = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](spec, 'namespaceSelector.matchNames', []);
    if (namespaces.length) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](namespaces, (n) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: n },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: n, title: n }),
            "\u00A0\u00A0")));
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-muted" }, "--");
};
const serviceSelectorLinks = ({ spec }) => {
    const namespaces = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](spec, 'namespaceSelector.matchNames', []);
    if (namespaces.length) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](namespaces, (n) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: n },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Selector"], { selector: spec.selector, kind: "Service", namespace: n }),
            "\u00A0\u00A0")));
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Selector"], { selector: spec.selector, kind: "Service" });
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-3', 'col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-3', 'col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-3', 'col-sm-6', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-3', 'hidden-sm', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const ServiceMonitorTableRow = ({ obj: sm, index, key, style }) => {
    const { metadata } = sm;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: sm.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ServiceMonitorModel"]), name: metadata.name, namespace: metadata.namespace, title: metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: metadata.namespace, title: metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, serviceSelectorLinks(sm)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, namespaceSelectorLinks(sm))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ServiceMonitorModel"]), resource: sm }))));
};
const ServiceMonitorTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Service Selector',
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Monitoring Namespace',
            sortField: 'spec.namespaceSelector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ServiceMonitorTableHeader.displayName = 'ServiceMonitorTableHeader';
const ServiceMonitorsList = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Service Monitors", Header: ServiceMonitorTableHeader, Row: ServiceMonitorTableRow, virtualize: true })));
const ServiceMonitorsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({}, props, { canCreate: true, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ServiceMonitorModel"]), ListComponent: ServiceMonitorsList })));


/***/ })

}]);
//# sourceMappingURL=service-monitor-5f5d9e9ff84f138ada44.js.map