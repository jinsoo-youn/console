(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metal3-baremetalhosts"],{

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostsPage.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostsPage.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _status_host_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../status/host-status */ "./packages/metal3-plugin/src/status/host-status.ts");
/* harmony import */ var _selectors_machine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../selectors/machine */ "./packages/metal3-plugin/src/selectors/machine.ts");
/* harmony import */ var _table_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-filters */ "./packages/metal3-plugin/src/components/baremetal-hosts/table-filters.ts");
/* harmony import */ var _BareMetalHostsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalHostsTable */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostsTable.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");














const flattenResources = (resources) => {
    // TODO(jtomasek): Remove loaded check once ListPageWrapper_ is updated to call flatten only
    // when resources are loaded
    const loaded = lodash__WEBPACK_IMPORTED_MODULE_1__["every"](resources, (resource) => resource.optional ? resource.loaded || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resource.loadError) : resource.loaded);
    const { hosts: { data: hostsData }, machines: { data: machinesData }, machineSets, nodes, nodeMaintenances, } = resources;
    if (loaded) {
        const maintenancesByNodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["createLookup"])(nodeMaintenances, _selectors__WEBPACK_IMPORTED_MODULE_8__["getNodeMaintenanceNodeName"]);
        const nodesByMachineName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["createLookup"])(nodes, _console_shared__WEBPACK_IMPORTED_MODULE_2__["getNodeMachineName"]);
        const machineSetByUID = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["createLookup"])(machineSets);
        return hostsData.map((host) => {
            // TODO(jtomasek): replace this with createLookup once there is metal3.io/BareMetalHost annotation
            // on machines
            const machine = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostMachine"])(host, machinesData);
            const node = nodesByMachineName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(machine)];
            const nodeMaintenance = maintenancesByNodeName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(node)];
            const machineOwner = Object(_selectors_machine__WEBPACK_IMPORTED_MODULE_10__["getMachineMachineSetOwner"])(machine);
            const machineSet = machineOwner && machineSetByUID[machineOwner.uid];
            const status = Object(_status_host_status__WEBPACK_IMPORTED_MODULE_9__["getHostStatus"])({ host, machine, node, nodeMaintenance });
            // TODO(jtomasek): metadata.name is needed to make 'name' textFilter work.
            // Remove it when it is possible to pass custom textFilter as a function
            return {
                metadata: { name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(host) },
                host,
                machine,
                node,
                nodeMaintenance,
                machineSet,
                status,
            };
        });
    }
    return [];
};
const getCreateProps = ({ namespace }) => {
    const items = {
        dialog: 'New with Dialog',
        yaml: 'New from YAML',
    };
    return {
        items,
        createLink: (itemName) => {
            const base = `/k8s/ns/${namespace || 'default'}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["BareMetalHostModel"])}`;
            switch (itemName) {
                case 'dialog':
                    return `${base}/~new/form`;
                case 'yaml':
                default:
                    return `${base}/~new`;
            }
        },
    };
};
const BareMetalHostsPage = (props) => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_6__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_13__["NODE_MAINTENANCE_FLAG"]);
    const { namespace } = props;
    const resources = [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["BareMetalHostModel"]),
            namespaced: true,
            prop: 'hosts',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["MachineModel"]),
            namespaced: true,
            prop: 'machines',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["MachineSetModel"]),
            namespaced: true,
            isList: true,
            prop: 'machineSets',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["NodeModel"].kind,
            namespaced: false,
            prop: 'nodes',
        },
    ];
    if (hasNodeMaintenanceCapability) {
        resources.push({
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["NodeMaintenanceModel"]),
            namespaced: false,
            isList: true,
            prop: 'nodeMaintenances',
            optional: true,
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["MultiListPage"], Object.assign({}, props, { canCreate: true, rowFilters: [_table_filters__WEBPACK_IMPORTED_MODULE_11__["hostStatusFilter"]], createProps: getCreateProps({ namespace }), createButtonText: "Add Host", namespace: namespace, resources: resources, flatten: flattenResources, ListComponent: _BareMetalHostsTable__WEBPACK_IMPORTED_MODULE_12__["default"], title: "Bare Metal Hosts" })));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostsPage);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostsTable.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostsTable.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _NodeLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NodeLink */ "./packages/metal3-plugin/src/components/baremetal-hosts/NodeLink.tsx");
/* harmony import */ var _BareMetalHostStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BareMetalHostStatus */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostStatus.tsx");
/* harmony import */ var _BareMetalHostRole__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalHostRole */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostRole.tsx");
/* harmony import */ var _host_menu_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./host-menu-actions */ "./packages/metal3-plugin/src/components/baremetal-hosts/host-menu-actions.tsx");
/* harmony import */ var _BareMetalHostSecondaryStatus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BareMetalHostSecondaryStatus */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostSecondaryStatus.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");
















const tableColumnClasses = {
    name: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-4', 'col-sm-12', 'col-xs-12'),
    status: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-4', 'col-sm-6', 'hidden-xs'),
    node: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-4', 'hidden-sm', 'hidden-xs'),
    role: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    address: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    serialNumber: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    kebab: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].columnClass,
};
const HostsTableHeader = () => [
    {
        title: 'Name',
        sortField: 'host.metadata.name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.name },
    },
    {
        title: 'Status',
        sortField: 'status.status',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.status },
    },
    {
        title: 'Node',
        sortField: 'node.metadata.name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.node },
    },
    {
        title: 'Role',
        sortField: 'machine.metadata.labels["machine.openshift.io/cluster-api-machine-role"]',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.role },
    },
    {
        title: 'Management Address',
        sortField: 'host.spec.bmc.address',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.address },
    },
    {
        title: 'Serial Number',
        sortField: 'host.status.hardware.systemVendor.serialNumber',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.serialNumber },
    },
    {
        title: '',
        props: { className: tableColumnClasses.kebab },
    },
];
const HostsTableRow = ({ obj: { host, node, nodeMaintenance, machine, machineSet, status }, index, key, style, }) => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_7__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_15__["NODE_MAINTENANCE_FLAG"]);
    const name = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(host);
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(host);
    const address = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostBMCAddress"])(host);
    const uid = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getUID"])(host);
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(node);
    const { serialNumber } = Object(_selectors__WEBPACK_IMPORTED_MODULE_8__["getHostVendorInfo"])(host);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.name },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["BareMetalHostModel"]), name: name, namespace: namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostStatus__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, status, { nodeMaintenance: nodeMaintenance, host: host })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostSecondaryStatus__WEBPACK_IMPORTED_MODULE_14__["default"], { host: host })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.node },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeLink__WEBPACK_IMPORTED_MODULE_10__["default"], { nodeName: nodeName })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.role },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalHostRole__WEBPACK_IMPORTED_MODULE_12__["default"], { machine: machine, node: node })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.address }, address || _console_shared__WEBPACK_IMPORTED_MODULE_4__["DASH"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.serialNumber }, serialNumber || _console_shared__WEBPACK_IMPORTED_MODULE_4__["DASH"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.kebab },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"], { options: _host_menu_actions__WEBPACK_IMPORTED_MODULE_13__["menuActions"].map((action) => action(_models__WEBPACK_IMPORTED_MODULE_9__["BareMetalHostModel"], host, {
                    nodeMaintenance,
                    nodeName,
                    hasNodeMaintenanceCapability,
                    machine,
                    machineSet,
                    status,
                })), key: `kebab-for-${uid}`, id: `kebab-for-${uid}` }))));
};
const BareMetalHostsTable = (props) => {
    const row = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((rowProps) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HostsTableRow, Object.assign({}, rowProps)), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { defaultSortField: "host.metadata.name", "aria-label": "Bare Metal Hosts", Header: HostsTableHeader, Row: row, virtualize: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostsTable);


/***/ })

}]);
//# sourceMappingURL=metal3-baremetalhosts-5d2b847674b1d17c2e7b.js.map