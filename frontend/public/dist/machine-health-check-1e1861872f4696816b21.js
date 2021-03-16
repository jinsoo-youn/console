(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-health-check"],{

/***/ "./public/components/machine-health-check.tsx":
/*!****************************************************!*\
  !*** ./public/components/machine-health-check.tsx ***!
  \****************************************************/
/*! exports provided: MachineHealthCheckPage, MachineHealthCheckDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineHealthCheckPage", function() { return MachineHealthCheckPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineHealthCheckDetailsPage", function() { return MachineHealthCheckDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s/k8s */ "./public/module/k8s/k8s.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");








const { common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["MachineHealthCheckModel"]), ...common];
const machineHealthCheckReference = Object(_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["MachineHealthCheckModel"]);
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-xs-6', 'col-sm-4'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-xs-6', 'col-sm-4'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-4', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass,
];
const MachineHealthCheckTableHeader = () => {
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
            title: 'Created',
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
MachineHealthCheckTableHeader.displayName = 'MachineHealthCheckTableHeader';
const MachineHealthCheckTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: machineHealthCheckReference, name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: machineHealthCheckReference, resource: obj }))));
};
const MachineHealthCheckList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Machine HealthChecks", Header: MachineHealthCheckTableHeader, Row: MachineHealthCheckTableRow, virtualize: true })));
const UnhealthyConditionsTable = ({ obj }) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](obj.spec.unhealthyConditions) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["EmptyBox"], { label: "Unhealthy Conditions" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Status"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Timeout"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Type"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, obj.spec.unhealthyConditions.map(({ status, timeout, type }, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, status),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, timeout),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, type)))))));
};
const MachineHealthCheckDetails = ({ obj }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: "Machine HealthCheck Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: obj },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: "Selector", obj: obj, path: "spec.selector" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Selector"], { kind: Object(_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]), selector: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.selector'), namespace: obj.metadata.namespace })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: "Max Unhealthy", obj: obj, path: "spec.maxUnhealthy" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: "Expected Machines", obj: obj, path: "status.expectedMachines" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: "Current Healthy", obj: obj, path: "status.currentHealthy" })))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: "Unhealthy Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UnhealthyConditionsTable, { obj: obj }))));
};
const MachineHealthCheckPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, props, { ListComponent: MachineHealthCheckList, kind: machineHealthCheckReference, canCreate: true })));
const MachineHealthCheckDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, kind: machineHealthCheckReference, pages: [_utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].details(MachineHealthCheckDetails), _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].editYaml()] })));


/***/ })

}]);
//# sourceMappingURL=machine-health-check-1e1861872f4696816b21.js.map