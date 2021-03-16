(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-local-volume-set"],{

/***/ "./packages/local-storage-operator-plugin/src/components/local-volume-set/create-local-volume-set.scss":
/*!*************************************************************************************************************!*\
  !*** ./packages/local-storage-operator-plugin/src/components/local-volume-set/create-local-volume-set.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/local-storage-operator-plugin/src/components/local-volume-set/create-local-volume-set.tsx":
/*!************************************************************************************************************!*\
  !*** ./packages/local-storage-operator-plugin/src/components/local-volume-set/create-local-volume-set.tsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/local-storage-operator-plugin/src/models.ts");
/* harmony import */ var _nodes_selection_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nodes-selection-list */ "./packages/local-storage-operator-plugin/src/components/local-volume-set/nodes-selection-list.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./packages/local-storage-operator-plugin/src/components/local-volume-set/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./packages/local-storage-operator-plugin/src/components/local-volume-set/utils.ts");
/* harmony import */ var _create_local_volume_set_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-local-volume-set.scss */ "./packages/local-storage-operator-plugin/src/components/local-volume-set/create-local-volume-set.scss");
/* harmony import */ var _create_local_volume_set_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_create_local_volume_set_scss__WEBPACK_IMPORTED_MODULE_12__);













const volumeModeDropdownItems = {
    Block: 'Block',
    Filesystem: 'Filesystem',
};
const volumeTypeDropdownItems = {
    [_types__WEBPACK_IMPORTED_MODULE_10__["DiskType"].SSD]: 'SSD / NVMe',
    [_types__WEBPACK_IMPORTED_MODULE_10__["DiskType"].HDD]: 'HDD',
};
const CreateLocalVolumeSet = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    const { match, handlePromise, inProgress, errorMessage } = props;
    const [volumeSetName, setVolumeSetName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [storageClassName, setStorageClassName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [showNodesList, setShowNodesList] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [volumeType, setVolumeType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_types__WEBPACK_IMPORTED_MODULE_10__["DiskType"].SSD);
    const [volumeMode, setVolumeMode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](volumeModeDropdownItems.Block);
    const [maxVolumeLimit, setMaxVolumeLimit] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    const [allSelected, setAllSelected] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const { ns, appName } = match.params;
    const modelName = _models__WEBPACK_IMPORTED_MODULE_8__["LocalVolumeSetModel"].label;
    const toggleShowNodesList = () => {
        setShowNodesList(!showNodesList);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const requestData = {
            apiVersion: _models__WEBPACK_IMPORTED_MODULE_8__["LocalVolumeSetModel"].apiVersion,
            kind: _models__WEBPACK_IMPORTED_MODULE_8__["LocalVolumeSetModel"].kind,
            metadata: { name: volumeSetName },
            spec: {
                storageClassName,
                volumeMode,
                deviceInclusionSpec: {
                    // Only Raw disk supported for 4.5
                    deviceTypes: [_types__WEBPACK_IMPORTED_MODULE_10__["DeviceType"].RawDisk],
                    deviceMechanicalProperty: [_types__WEBPACK_IMPORTED_MODULE_10__["DeviceMechanicalProperty"][volumeType]],
                },
            },
        };
        if (showNodesList) {
            const selectedNodesUID = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getSelectedNodeUIDs"])(rows);
            const selectedNodes = selectedNodesUID.map((uid) => rows[uid].props.data.metadata.name);
            requestData.spec.nodeSelector = {
                nodeSelectorTerms: [
                    {
                        matchExpressions: [
                            { key: 'kubernetes.io/hostname', operator: 'In', values: [...selectedNodes] },
                        ],
                    },
                ],
            };
        }
        if (maxVolumeLimit)
            requestData.spec.maxDeviceCount = +maxVolumeLimit;
        handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_8__["LocalVolumeSetModel"], requestData))
            .then((resource) => _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_3__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourceObjPath"])(resource, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceFor"])(resource))))
            .catch(() => null);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["BreadCrumbs"], { breadcrumbs: [
                        {
                            name: 'Local Storage',
                            path: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_7__["ClusterServiceVersionModel"], appName, ns),
                        },
                        { name: `Create ${modelName}`, path: '' },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-create-operand__header-text" }, `Create ${modelName}`),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" },
                "A ",
                modelName,
                " allows you to filter a set of storage volumes, group them and create a dedicated storage class to consume storage for them.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Form"], { noValidate: false, className: "co-m-pane__body co-m-pane__form", onSubmit: onSubmit },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: "Volume Set Name", isRequired: true, fieldId: "create-lvs--volume-set-name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, id: "create-lvs--volume-set-name", value: volumeSetName, onChange: (name) => setVolumeSetName(name), isRequired: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: "Storage Class Name", fieldId: "create-lvs--storage-class-name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, id: "create-lvs--storage-class-name", value: storageClassName, onChange: (name) => setStorageClassName(name), isRequired: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h3, className: "lso-create-lvs__filter-volumes-text--margin" }, "Filter Volumes"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: "Node Selector", fieldId: "create-lvs--radio-group-node-selector" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "create-lvs--radio-group-node-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], { label: "All nodes", name: "nodes-selection", id: "create-lvs--radio-all-nodes", className: "lso-create-lvs__all-nodes-radio--padding", value: "allNodes", onChange: toggleShowNodesList, description: "Selecting all nodes will search for available volume storage on all nodes.", defaultChecked: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], { label: "Select nodes", name: "nodes-selection", id: "create-lvs--radio-select-nodes", value: "selectedNodes", onChange: toggleShowNodesList, description: "Selecting nodes allow you to limit the search for available volumes to specific nodes." }))),
            showNodesList && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], { customData: { rows, setRows, allSelected, setAllSelected }, showTitle: false, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NodeModel"].kind, ListComponent: _nodes_selection_list__WEBPACK_IMPORTED_MODULE_9__["NodesSelectionList"] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: "Volume Type", fieldId: "create-lvs--volume-type-dropdown" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { id: "create-lvs--volume-type-dropdown", dropDownClassName: "dropdown--full-width", items: volumeTypeDropdownItems, title: volumeTypeDropdownItems[volumeType], selectedKey: volumeType, onChange: (type) => setVolumeType(type) })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Expandable"], { toggleText: "Advanced", "data-test-id": "create-lvs-form-advanced" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: "Volume Mode", fieldId: "create-lso--volume-mode-dropdown", className: "lso-create-lvs__volume-mode-dropdown--margin" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { id: "create-lso--volume-mode-dropdown", dropDownClassName: "dropdown--full-width", items: volumeModeDropdownItems, title: volumeModeDropdownItems[volumeMode], selectedKey: volumeMode, onChange: (mode) => setVolumeMode(mode) })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: "Max Volume Limit", fieldId: "create-lvs--max-volume-limit" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block lso-create-lvs__max-volume-limit-help-text--margin" }, "Volume limit will set the maximum number of PVs to create on a node. If the field is empty, will create PVs for all available volumes on the matching nodes."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].number, id: "create-lvs--max-volume-limit", value: maxVolumeLimit, onChange: (maxLimit) => setMaxVolumeLimit(maxLimit) }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ButtonBar"], { errorMessage: errorMessage, inProgress: inProgress },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["ActionGroup"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "submit", variant: "primary" }, "Create"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "button", variant: "secondary", onClick: _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_3__["history"].goBack }, "Cancel"))))));
});
/* harmony default export */ __webpack_exports__["default"] = (CreateLocalVolumeSet);


/***/ }),

/***/ "./packages/local-storage-operator-plugin/src/components/local-volume-set/node-selection-list.scss":
/*!*********************************************************************************************************!*\
  !*** ./packages/local-storage-operator-plugin/src/components/local-volume-set/node-selection-list.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/local-storage-operator-plugin/src/components/local-volume-set/nodes-selection-list.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/local-storage-operator-plugin/src/components/local-volume-set/nodes-selection-list.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: NodesSelectionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesSelectionList", function() { return NodesSelectionList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./packages/local-storage-operator-plugin/src/components/local-volume-set/utils.ts");
/* harmony import */ var _node_selection_list_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node-selection-list.scss */ "./packages/local-storage-operator-plugin/src/components/local-volume-set/node-selection-list.scss");
/* harmony import */ var _node_selection_list_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_selection_list_scss__WEBPACK_IMPORTED_MODULE_9__);










const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-u-w-30-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-10-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-20-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-20-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-20-on-sm'),
];
const setTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'CPU',
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Memory',
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Location',
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Taints',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
const stateShouldUpdate = (rowUIDMap, rows) => {
    /* On initial render rows will be empty */
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](rows))
        return true;
    return Object.keys(rowUIDMap).some((uid) => { var _a, _b; return ((_a = rows === null || rows === void 0 ? void 0 : rows[uid]) === null || _a === void 0 ? void 0 : _a.selected) !== ((_b = rowUIDMap === null || rowUIDMap === void 0 ? void 0 : rowUIDMap[uid]) === null || _b === void 0 ? void 0 : _b.selected); });
};
const createNodeUIDMap = (nodes) => nodes.reduce((nodeUIDMap, node) => {
    const uid = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getUID"])(node);
    nodeUIDMap[uid] = node;
    return nodeUIDMap;
}, {});
const createRowUIDMap = (nodeUIDMap, rows) => Object.keys(nodeUIDMap).reduce((rowUIDMap, uid) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const node = nodeUIDMap[uid];
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(node);
    const nodeLocation = (_b = (_a = node.metadata.labels) === null || _a === void 0 ? void 0 : _a['failure-domain.beta.kubernetes.io/zone']) !== null && _b !== void 0 ? _b : '-';
    const nodeCpuCapacity = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeCPUCapacity"])(node);
    const nodeAllocatableMemory = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeAllocatableMemory"])(node);
    const nodeTaints = (_e = (_d = (_c = node.spec) === null || _c === void 0 ? void 0 : _c.taints) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
    const cells = [
        {
            title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Node", name: nodeName, title: uid }),
        },
        {
            title: nodeCpuCapacity || '-',
        },
        {
            title: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["humanizeBinaryBytes"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["convertToBaseValue"])(nodeAllocatableMemory)).string || '-',
        },
        {
            title: nodeLocation || '-',
        },
        {
            title: Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["pluralize"])(nodeTaints, 'taint'),
        },
    ];
    rowUIDMap[uid] = {
        cells,
        selected: (_g = (_f = rows === null || rows === void 0 ? void 0 : rows[uid]) === null || _f === void 0 ? void 0 : _f.selected) !== null && _g !== void 0 ? _g : false,
        props: {
            data: nodeUIDMap[uid],
            uid,
        },
    };
    return rowUIDMap;
}, {});
const setTableRows = ({ componentProps, customData }) => {
    const { data: filteredData } = componentProps;
    const { rows, setRows, allSelected, setAllSelected } = customData;
    const nodeUIDMap = createNodeUIDMap(filteredData);
    const rowUIDMap = createRowUIDMap(nodeUIDMap, rows);
    const tableRows = Object.values(rowUIDMap);
    if (allSelected !== null) {
        /* Selecting and deselecting visible table rows */
        Object.keys(rowUIDMap).forEach((uid) => (rowUIDMap[uid].selected = allSelected));
        setRows(Object.assign(Object.assign({}, rows), rowUIDMap));
        setAllSelected(null);
    }
    else if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](rowUIDMap) && stateShouldUpdate(rowUIDMap, rows)) {
        setRows(Object.assign(Object.assign({}, rows), rowUIDMap));
    }
    return tableRows;
};
const NodesSelectionList = (props) => {
    const { rows, setRows, setAllSelected } = props.customData;
    const onSelectTableRows = (_event, isSelected, rowId, rowData) => {
        const updatedRows = Object.assign({}, rows);
        if (rowId === -1) {
            setAllSelected(isSelected);
        }
        else {
            const { uid } = rowData.props;
            updatedRows[uid].selected = isSelected;
            setRows(Object.assign({}, updatedRows));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "lso-node-selection-table__table--scroll" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Select nodes for creating volume filter", "data-test-id": "create-lvs-form-node-selection-table", Header: setTableHeader, Rows: setTableRows, onSelect: onSelectTableRows, customData: props.customData, virtualize: false }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { "data-test-id": "create-lvs-form-selected-nodes", component: "h6" },
            Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["pluralize"])(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getSelectedNodeUIDs"])(rows).length, 'node'),
            " selected")));
};


/***/ }),

/***/ "./packages/local-storage-operator-plugin/src/components/local-volume-set/types.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/local-storage-operator-plugin/src/components/local-volume-set/types.ts ***!
  \*****************************************************************************************/
/*! exports provided: DiskType, DeviceType, DeviceMechanicalProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskType", function() { return DiskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceType", function() { return DeviceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMechanicalProperty", function() { return DeviceMechanicalProperty; });
var DiskType;
(function (DiskType) {
    DiskType["SSD"] = "SSD";
    DiskType["HDD"] = "HDD";
})(DiskType || (DiskType = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["RawDisk"] = "RawDisk";
    DeviceType["Partition"] = "Partition";
})(DeviceType || (DeviceType = {}));
var DeviceMechanicalProperty;
(function (DeviceMechanicalProperty) {
    DeviceMechanicalProperty["SSD"] = "Rotational";
    DeviceMechanicalProperty["HDD"] = "NonRotational";
})(DeviceMechanicalProperty || (DeviceMechanicalProperty = {}));


/***/ }),

/***/ "./packages/local-storage-operator-plugin/src/components/local-volume-set/utils.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/local-storage-operator-plugin/src/components/local-volume-set/utils.ts ***!
  \*****************************************************************************************/
/*! exports provided: getSelectedNodeUIDs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedNodeUIDs", function() { return getSelectedNodeUIDs; });
const getSelectedNodeUIDs = (rows) => Object.keys(rows).filter((uid) => rows[uid].selected);


/***/ })

}]);
//# sourceMappingURL=create-local-volume-set-63fe8aa88ac6a28534d4.js.map