(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-config"],{

/***/ "./public/components/machine-config.tsx":
/*!**********************************************!*\
  !*** ./public/components/machine-config.tsx ***!
  \**********************************************/
/*! exports provided: machineConfigReference, MachineConfigDetailsPage, MachineConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "machineConfigReference", function() { return machineConfigReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineConfigDetailsPage", function() { return MachineConfigDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineConfigPage", function() { return MachineConfigPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









const machineConfigReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["MachineConfigModel"]);
const machineConfigMenuActions = [
    ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["MachineConfigModel"]),
    ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.common,
];
const MachineConfigSummary = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: obj },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "OS Image URL"),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, obj.spec.osImageURL || '-')));
const MachineConfigDetails = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: "Machine Config Details" }),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MachineConfigSummary, { obj: obj })))));
const pages = [
    _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].details(MachineConfigDetails),
    _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].editYaml(),
    _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"]),
];
const MachineConfigDetailsPage = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: machineConfigReference, menuActions: machineConfigMenuActions, pages: pages })));
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-3', 'col-md-4', 'col-sm-6', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-3', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-2', 'col-md-2', 'col-sm-2', 'col-xs-6'),
    _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass,
];
const MachineConfigTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Generated By Controller',
            sortField: "metadata.annotations['machineconfiguration.openshift.io/generated-by-controller-version']",
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Ignition Version',
            sortField: 'spec.config.ignition.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'OS Image URL',
            sortField: 'spec.osImageURL',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
MachineConfigTableHeader.displayName = 'MachineConfigTableHeader';
const MachineConfigTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: machineConfigReference, name: obj.metadata.name, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, [
            'metadata',
            'annotations',
            'machineconfiguration.openshift.io/generated-by-controller-version',
        ], '-')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.config.ignition.version') || '-'),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[3], 'co-break-word') }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.osImageURL') || '-'),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: machineConfigMenuActions, kind: machineConfigReference, resource: obj }))));
};
const MachineConfigList = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Machine Configs", Header: MachineConfigTableHeader, Row: MachineConfigTableRow, virtualize: true })));
const MachineConfigPage = (_a) => {
    var { canCreate = true } = _a, rest = __rest(_a, ["canCreate"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, rest, { canCreate: canCreate, ListComponent: MachineConfigList, kind: machineConfigReference })));
};


/***/ })

}]);
//# sourceMappingURL=machine-config-a23bd42f2165820b20af.js.map