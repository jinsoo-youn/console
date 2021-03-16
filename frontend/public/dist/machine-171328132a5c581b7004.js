(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine"],{

/***/ "./packages/console-app/src/components/nodes/NodeIPList.tsx":
/*!******************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeIPList.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const NodeIPList = ({ ips, expand = false }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DetailPropertyList"], null, lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](ips, ['type']).map(({ type, address }) => address &&
    (expand || type === 'InternalIP') && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DetailPropertyListItem"], { key: `{${type}/${address}`, title: type.replace(/([a-z])([A-Z])/g, '$1 $2') }, address)))));
/* harmony default export */ __webpack_exports__["default"] = (NodeIPList);


/***/ }),

/***/ "./public/components/machine.tsx":
/*!***************************************!*\
  !*** ./public/components/machine.tsx ***!
  \***************************************/
/*! exports provided: machineReference, MachineList, MachinePage, MachineDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "machineReference", function() { return machineReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineList", function() { return MachineList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinePage", function() { return MachinePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDetailsPage", function() { return MachineDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _console_app_src_components_nodes_NodeIPList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeIPList */ "./packages/console-app/src/components/nodes/NodeIPList.tsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");











const { common } = _utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]), ...common];
const machineReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]);
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-md'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-xl'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].columnClass,
];
const MachineTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Node',
            sortField: 'status.nodeRef.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Phase',
            sortFunc: 'machinePhase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Provider State',
            sortField: 'status.providerStatus.instanceState',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: 'Region',
            sortField: "metadata.labels['machine.openshift.io/region']",
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: 'Availability Zone',
            sortField: "metadata.labels['machine.openshift.io/zone']",
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]],
            props: { className: tableColumnClasses[6] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[7] },
        },
    ];
};
MachineTableHeader.displayName = 'MachineTableHeader';
const getMachineProviderState = (obj) => { var _a, _b; return (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.status) === null || _a === void 0 ? void 0 : _a.providerStatus) === null || _b === void 0 ? void 0 : _b.instanceState; };
const MachineTableRow = ({ obj, index, key, style }) => {
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineNodeName"])(obj);
    const region = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineRegion"])(obj);
    const zone = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineZone"])(obj);
    const providerState = getMachineProviderState(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[0], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: machineReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[2] }, nodeName ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["NodeLink"], { name: nodeName }) : '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachinePhase"])(obj) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[4] }, providerState !== null && providerState !== void 0 ? providerState : '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[5] }, region || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[6] }, zone || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[7] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceKebab"], { actions: menuActions, kind: machineReference, resource: obj }))));
};
const MachineDetails = ({ obj }) => {
    var _a, _b;
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineNodeName"])(obj);
    const machineRole = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineRole"])(obj);
    const instanceType = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineInstanceType"])(obj);
    const region = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineRegion"])(obj);
    const zone = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineZone"])(obj);
    const providerState = getMachineProviderState(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Machine Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceSummary"], { resource: obj })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["DetailsItem"], { label: "Phase", obj: obj, path: "status.phase" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachinePhase"])(obj) })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["DetailsItem"], { label: "Provider State", obj: obj, path: "status.providerStatus.instanceState" }, providerState),
                            nodeName && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Node"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["NodeLink"], { name: nodeName })))),
                            machineRole && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Machine Role"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, machineRole))),
                            instanceType && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Instance Type"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, instanceType))),
                            region && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Region"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, region))),
                            zone && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Availability Zone"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, zone))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Machine Addresses"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_NodeIPList__WEBPACK_IMPORTED_MODULE_7__["default"], { ips: Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachineAddresses"])(obj), expand: true }))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_6__["Conditions"], { conditions: (_b = (_a = obj.status) === null || _a === void 0 ? void 0 : _a.providerStatus) === null || _b === void 0 ? void 0 : _b.conditions }))));
};
const MachineList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["Table"], Object.assign({}, props, { "aria-label": "Machines", Header: MachineTableHeader, Row: MachineTableRow, virtualize: true })));
const MachinePage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["ListPage"], Object.assign({}, props, { ListComponent: MachineList, kind: machineReference, textFilter: "machine", filterLabel: "by machine or node name", canCreate: true })));
const MachineDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["DetailsPage"], Object.assign({}, props, { kind: machineReference, menuActions: menuActions, pages: [
        _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].details(MachineDetails),
        _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].editYaml(),
        _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_10__["ResourceEventStream"]),
    ], getResourceStatus: _console_shared__WEBPACK_IMPORTED_MODULE_3__["getMachinePhase"] })));


/***/ })

}]);
//# sourceMappingURL=machine-171328132a5c581b7004.js.map