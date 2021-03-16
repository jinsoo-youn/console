(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-set"],{

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

/***/ "./public/components/machine-set.tsx":
/*!*******************************************!*\
  !*** ./public/components/machine-set.tsx ***!
  \*******************************************/
/*! exports provided: editCountAction, getDesiredReplicas, getReadyReplicas, getAvailableReplicas, MachineCounts, MachineTabPage, MachineSetList, MachineSetPage, MachineSetDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editCountAction", function() { return editCountAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesiredReplicas", function() { return getDesiredReplicas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadyReplicas", function() { return getReadyReplicas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableReplicas", function() { return getAvailableReplicas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineCounts", function() { return MachineCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineTabPage", function() { return MachineTabPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineSetList", function() { return MachineSetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineSetPage", function() { return MachineSetPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineSetDetailsPage", function() { return MachineSetDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./machine */ "./public/components/machine.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");















const machineReplicasModal = (resourceKind, resource) => Object(_modals__WEBPACK_IMPORTED_MODULE_11__["configureReplicaCountModal"])({
    resourceKind,
    resource,
    title: 'Edit Machine Count',
    message: `${resourceKind.labelPlural} maintain the proper number of healthy machines.`,
});
const editCountAction = (kind, resource) => ({
    label: 'Edit Machine Count',
    callback: () => machineReplicasModal(kind, resource),
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: resource.metadata.name,
        namespace: resource.metadata.namespace,
        verb: 'patch',
    },
});
const configureMachineAutoscaler = (kind, machineSet) => ({
    label: 'Create Autoscaler',
    callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_11__["configureMachineAutoscalerModal"])({ machineSet, cancel: lodash_es__WEBPACK_IMPORTED_MODULE_1__["noop"], close: lodash_es__WEBPACK_IMPORTED_MODULE_1__["noop"] }),
    accessReview: {
        group: _models__WEBPACK_IMPORTED_MODULE_8__["MachineAutoscalerModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_8__["MachineAutoscalerModel"].plural,
        namespace: machineSet.metadata.namespace,
        verb: 'create',
    },
});
const { common } = _utils__WEBPACK_IMPORTED_MODULE_13__["Kebab"].factory;
const menuActions = [
    editCountAction,
    configureMachineAutoscaler,
    ..._utils__WEBPACK_IMPORTED_MODULE_13__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_8__["MachineSetModel"]),
    ...common,
];
const machineReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["MachineModel"]);
const machineSetReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["MachineSetModel"]);
// `spec.replicas` defaults to 1 if not specified. Make sure to differentiate between undefined and 0.
const getDesiredReplicas = (machineSet) => {
    var _a, _b;
    return (_b = (_a = machineSet === null || machineSet === void 0 ? void 0 : machineSet.spec) === null || _a === void 0 ? void 0 : _a.replicas) !== null && _b !== void 0 ? _b : 1;
};
const getReplicas = (machineSet) => { var _a; return ((_a = machineSet === null || machineSet === void 0 ? void 0 : machineSet.status) === null || _a === void 0 ? void 0 : _a.replicas) || 0; };
const getReadyReplicas = (machineSet) => { var _a; return ((_a = machineSet === null || machineSet === void 0 ? void 0 : machineSet.status) === null || _a === void 0 ? void 0 : _a.readyReplicas) || 0; };
const getAvailableReplicas = (machineSet) => { var _a; return ((_a = machineSet === null || machineSet === void 0 ? void 0 : machineSet.status) === null || _a === void 0 ? void 0 : _a.availableReplicas) || 0; };
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_13__["Kebab"].columnClass,
];
const MachineSetTableHeader = () => {
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
MachineSetTableHeader.displayName = 'MachineSetTableHeader';
const MachineSetTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["ResourceLink"], { kind: machineSetReference, name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${Object(_utils__WEBPACK_IMPORTED_MODULE_13__["resourcePath"])(machineSetReference, obj.metadata.name, obj.metadata.namespace)}/machines` },
                getReadyReplicas(obj),
                " of ",
                getDesiredReplicas(obj),
                " machines")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["ResourceKebab"], { actions: menuActions, kind: machineSetReference, resource: obj }))));
};
const MachineCounts = ({ resourceKind, resource, }) => {
    const editReplicas = (event) => {
        event.preventDefault();
        machineReplicasModal(resourceKind, resource);
    };
    const desiredReplicas = getDesiredReplicas(resource);
    const replicas = getReplicas(resource);
    const readyReplicas = getReadyReplicas(resource);
    const availableReplicas = getAvailableReplicas(resource);
    const canUpdate = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["useAccessReview"])({
        group: resourceKind.apiGroup,
        resource: resourceKind.plural,
        verb: 'patch',
        name: resource.metadata.name,
        namespace: resource.metadata.namespace,
    });
    const desiredReplicasText = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(desiredReplicas, 'machine');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__row row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Desired Count"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, canUpdate ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { variant: "link", type: "button", isInline: true, onClick: editReplicas },
                            desiredReplicasText,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" }))) : (desiredReplicasText)))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Current Count"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], { content: "The most recently observed number of replicas." },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(replicas, 'machine')))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Ready Count"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], { content: "The number of ready replicas for this MachineSet. A machine is considered ready when the node has been created and is ready." },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(readyReplicas, 'machine')))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section co-detail-table__section--last" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Available Count"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], { content: "The number of available replicas (ready for at least minReadySeconds) for this MachineSet." },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["pluralize"])(availableReplicas, 'machine'))))))))));
};
const MachineTabPage = ({ obj, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_machine__WEBPACK_IMPORTED_MODULE_10__["MachinePage"], { namespace: obj.metadata.namespace, showTitle: false, selector: obj.spec.selector }));
const MachineSetDetails = ({ obj }) => {
    var _a;
    const machineRole = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getMachineRole"])(obj);
    const { availabilityZone, region } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getMachineAWSPlacement"])(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Machine Set Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MachineCounts, { resourceKind: _models__WEBPACK_IMPORTED_MODULE_8__["MachineSetModel"], resource: obj }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["ResourceSummary"], { resource: obj },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Selector"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_13__["Selector"], { kind: machineReference, selector: (_a = obj.spec) === null || _a === void 0 ? void 0 : _a.selector, namespace: obj.metadata.namespace })),
                machineRole && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Machine Role"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, machineRole))),
                region && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Region"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, region))),
                availabilityZone && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Availability Zone"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, availabilityZone)))))));
};
const MachineSetList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["Table"], Object.assign({}, props, { "aria-label": "Machine Sets", Header: MachineSetTableHeader, Row: MachineSetTableRow, virtualize: true })));
const MachineSetPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["ListPage"], Object.assign({}, props, { ListComponent: MachineSetList, kind: machineSetReference, canCreate: true })));
const MachineSetDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_12__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, kind: machineSetReference, pages: [
        _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].details(MachineSetDetails),
        _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].editYaml(),
        _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].machines(MachineTabPage),
        _utils__WEBPACK_IMPORTED_MODULE_13__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_14__["ResourceEventStream"]),
    ] })));


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
//# sourceMappingURL=machine-set-68c8a4cd1335dce4408c.js.map