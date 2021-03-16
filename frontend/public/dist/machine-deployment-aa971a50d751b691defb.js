(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-deployment"],{

/***/ "./public/components/machine-deployment.tsx":
/*!**************************************************!*\
  !*** ./public/components/machine-deployment.tsx ***!
  \**************************************************/
/*! exports provided: MachineDeploymentList, MachineDeploymentPage, MachineDeploymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDeploymentList", function() { return MachineDeploymentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDeploymentPage", function() { return MachineDeploymentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDeploymentDetailsPage", function() { return MachineDeploymentDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _machine_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./machine-set */ "./public/components/machine-set.tsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/datetime */ "./public/components/utils/datetime.ts");












const { common } = _utils__WEBPACK_IMPORTED_MODULE_10__["Kebab"].factory;
const menuActions = [
    _machine_set__WEBPACK_IMPORTED_MODULE_8__["editCountAction"],
    ..._utils__WEBPACK_IMPORTED_MODULE_10__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["MachineDeploymentModel"]),
    ...common,
];
const machineReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["MachineModel"]);
const machineDeploymentReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["MachineDeploymentModel"]);
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_10__["Kebab"].columnClass,
];
const MachineDeploymentTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Machines',
            sortField: 'status.replicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
MachineDeploymentTableHeader.displayName = 'MachineDeploymentTableHeader';
const MachineDeploymentTableRow = ({ obj, index, key, style, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: machineDeploymentReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${Object(_utils__WEBPACK_IMPORTED_MODULE_10__["resourcePath"])(machineDeploymentReference, obj.metadata.name, obj.metadata.namespace)}/machines` },
                Object(_machine_set__WEBPACK_IMPORTED_MODULE_8__["getReadyReplicas"])(obj),
                " of ",
                Object(_machine_set__WEBPACK_IMPORTED_MODULE_8__["getDesiredReplicas"])(obj),
                " machines")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceKebab"], { actions: menuActions, kind: machineDeploymentReference, resource: obj }))));
};
const MachineDeploymentDetails = ({ obj }) => {
    const machineRole = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getMachineRole"])(obj);
    const { availabilityZone, region } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getMachineAWSPlacement"])(obj);
    const { minReadySeconds, progressDeadlineSeconds } = obj.spec;
    const rollingUpdateStrategy = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.strategy.rollingUpdate');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["SectionHeading"], { text: "Machine Deployment Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_machine_set__WEBPACK_IMPORTED_MODULE_8__["MachineCounts"], { resourceKind: _models__WEBPACK_IMPORTED_MODULE_6__["MachineDeploymentModel"], resource: obj }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceSummary"], { resource: obj },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Selector"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Selector"], { kind: machineReference, selector: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.selector'), namespace: obj.metadata.namespace })),
                        machineRole && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Machine Role"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, machineRole))),
                        region && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Region"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, region))),
                        availabilityZone && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Availability Zone"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, availabilityZone))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Strategy"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.strategy.type') || '-'),
                        rollingUpdateStrategy && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Max Unavailable"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                rollingUpdateStrategy.maxUnavailable || 0,
                                " of",
                                ' ',
                                Object(_utils__WEBPACK_IMPORTED_MODULE_10__["pluralize"])(obj.spec.replicas, 'machine')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Max Surge"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                rollingUpdateStrategy.maxSurge || 1,
                                " greater than",
                                ' ',
                                Object(_utils__WEBPACK_IMPORTED_MODULE_10__["pluralize"])(obj.spec.replicas, 'machine')))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Min Ready Seconds"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, minReadySeconds ? Object(_utils__WEBPACK_IMPORTED_MODULE_10__["pluralize"])(minReadySeconds, 'second') : 'Not Configured'),
                        progressDeadlineSeconds && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Progress Deadline"),
                        progressDeadlineSeconds && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, /* Convert to ms for formatDuration */ Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_11__["formatDuration"])(progressDeadlineSeconds * 1000)))))))));
};
const MachineDeploymentList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["Table"], Object.assign({}, props, { "aria-label": "Machine Deployments", Header: MachineDeploymentTableHeader, Row: MachineDeploymentTableRow, virtualize: true })));
const MachineDeploymentPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["ListPage"], Object.assign({}, props, { ListComponent: MachineDeploymentList, kind: machineDeploymentReference, canCreate: true })));
const MachineDeploymentDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_9__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, kind: machineDeploymentReference, pages: [
        _utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].details(MachineDeploymentDetails),
        _utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].editYaml(),
        _utils__WEBPACK_IMPORTED_MODULE_10__["navFactory"].machines(_machine_set__WEBPACK_IMPORTED_MODULE_8__["MachineTabPage"]),
    ] })));


/***/ })

}]);
//# sourceMappingURL=machine-deployment-aa971a50d751b691defb.js.map