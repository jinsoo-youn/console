(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-config-pool"],{

/***/ "./public/components/machine-config-pool.tsx":
/*!***************************************************!*\
  !*** ./public/components/machine-config-pool.tsx ***!
  \***************************************************/
/*! exports provided: MachineConfigPoolDetailsPage, MachineConfigPoolPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineConfigPoolDetailsPage", function() { return MachineConfigPoolDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineConfigPoolPage", function() { return MachineConfigPoolPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _machine_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./machine-config */ "./public/components/machine-config.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");













const pauseAction = (kind, obj) => ({
    label: obj.spec.paused ? 'Resume Updates' : 'Pause Updates',
    callback: () => Object(_utils__WEBPACK_IMPORTED_MODULE_11__["togglePaused"])(kind, obj).catch((err) => Object(_modals__WEBPACK_IMPORTED_MODULE_6__["errorModal"])({ error: err.message })),
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: obj.metadata.name,
        verb: 'patch',
    },
});
const machineConfigPoolReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["MachineConfigPoolModel"]);
const machineConfigPoolMenuActions = [
    pauseAction,
    ..._utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["MachineConfigPoolModel"]),
    ..._utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].factory.common,
];
const getConditionStatus = (mcp, type) => {
    const { conditions } = mcp.status || {};
    const condition = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](conditions, { type });
    return condition ? condition.status : _module_k8s__WEBPACK_IMPORTED_MODULE_9__["K8sResourceConditionStatus"].Unknown;
};
const MachineConfigPoolCharacteristics = ({ obj, }) => {
    const configuration = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.configuration');
    const maxUnavailable = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.maxUnavailable', 1);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Max Unavailable Machines"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, maxUnavailable),
        configuration && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Current Configuration"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, configuration.name ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: _machine_config__WEBPACK_IMPORTED_MODULE_8__["machineConfigReference"], name: configuration.name, title: configuration.name })) : ('-')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Current Configuration Source"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, configuration.source
                ? lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](configuration.source, ({ apiVersion, kind, name }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { key: `${apiVersion}-${kind}-${name}`, kind: _machine_config__WEBPACK_IMPORTED_MODULE_8__["machineConfigReference"], name: name, title: name })))
                : '-')))));
};
const MachineConfigPoolCounts = ({ obj }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body-group" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-detail-table" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-detail-table__row row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-detail-table__section" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Total Machine Count"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: "Total number of machines in the machine pool." },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.machineCount', 0), 'machine')))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-detail-table__section" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Ready Machines"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: "Total number of ready machines targeted by the pool." },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.readyMachineCount', 0), 'machine')))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-detail-table__section" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Updated Count"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: "Total number of machines targeted by the pool that have the CurrentMachineConfig as their config." },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.updatedMachineCount', 0), 'machine')))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-detail-table__section co-detail-table__section--last" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Unavailable Count"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: "Total number of unavailable (non-ready) machines targeted by the pool. A node is marked unavailable if it is in updating state or NodeReady condition is false." },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.unavailableMachineCount', 0), 'machine'))))))))));
};
const MachineConfigPoolSummary = ({ obj }) => {
    const machineConfigSelector = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.machineConfigSelector');
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceSummary"], { resource: obj, showNodeSelector: true, nodeSelector: "spec.nodeSelector" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Machine Config Selector"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["Selector"], { kind: _machine_config__WEBPACK_IMPORTED_MODULE_8__["machineConfigReference"], selector: machineConfigSelector }))));
};
const MachineConfigList = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_machine_config__WEBPACK_IMPORTED_MODULE_8__["MachineConfigPage"], { canCreate: false, showTitle: false, selector: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.machineConfigSelector') }));
const MachineConfigPoolDetails = ({ obj }) => {
    const paused = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.paused');
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: "Machine Config Pool Details " }),
            paused && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["WorkloadPausedAlert"], { model: _models__WEBPACK_IMPORTED_MODULE_7__["MachineConfigPoolModel"], obj: obj }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MachineConfigPoolCounts, { obj: obj }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MachineConfigPoolSummary, { obj: obj })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MachineConfigPoolCharacteristics, { obj: obj })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_5__["Conditions"], { conditions: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.conditions') }))));
};
const pages = [
    _utils__WEBPACK_IMPORTED_MODULE_11__["navFactory"].details(MachineConfigPoolDetails),
    _utils__WEBPACK_IMPORTED_MODULE_11__["navFactory"].editYaml(),
    _utils__WEBPACK_IMPORTED_MODULE_11__["navFactory"].machineConfigs(MachineConfigList),
    _utils__WEBPACK_IMPORTED_MODULE_11__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_12__["ResourceEventStream"]),
];
const MachineConfigPoolDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["DetailsPage"], Object.assign({}, props, { kind: machineConfigPoolReference, menuActions: machineConfigPoolMenuActions, pages: pages })));
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-5', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-1', 'col-sm-2', 'col-xs-3'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-1', 'col-sm-2', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-1', 'col-sm-2', 'col-xs-3'),
    _utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].columnClass,
];
const MachineConfigPoolTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Configuration',
            sortField: 'status.configuration.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Updated',
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Updating',
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Degraded',
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
MachineConfigPoolTableHeader.displayName = 'MachineConfigPoolTableHeader';
const MachineConfigPoolTableRow = ({ obj, index, key, style, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[0], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: machineConfigPoolReference, name: obj.metadata.name, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.configuration.name') ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: _machine_config__WEBPACK_IMPORTED_MODULE_8__["machineConfigReference"], name: obj.status.configuration.name, title: obj.status.configuration.name })) : ('-')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[2] }, getConditionStatus(obj, _module_k8s__WEBPACK_IMPORTED_MODULE_9__["MachineConfigPoolConditionType"].Updated)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[3] }, getConditionStatus(obj, _module_k8s__WEBPACK_IMPORTED_MODULE_9__["MachineConfigPoolConditionType"].Updating)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[4], 'co-truncate') }, getConditionStatus(obj, _module_k8s__WEBPACK_IMPORTED_MODULE_9__["MachineConfigPoolConditionType"].Degraded)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceKebab"], { actions: machineConfigPoolMenuActions, kind: machineConfigPoolReference, resource: obj }))));
};
const MachineConfigPoolList = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["Table"], Object.assign({}, props, { "aria-label": "Machine Config Pools", Header: MachineConfigPoolTableHeader, Row: MachineConfigPoolTableRow, virtualize: true })));
const MachineConfigPoolPage = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["ListPage"], Object.assign({}, props, { ListComponent: MachineConfigPoolList, kind: machineConfigPoolReference, canCreate: true })));


/***/ }),

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
//# sourceMappingURL=machine-config-pool-572072203a208bad2295.js.map