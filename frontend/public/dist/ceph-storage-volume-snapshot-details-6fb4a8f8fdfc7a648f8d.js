(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-volume-snapshot-details"],{

/***/ "./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/_volume-snapshot-modal.scss":
/*!**************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/_volume-snapshot-modal.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/volume-snapshot-modal.tsx":
/*!************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/volume-snapshot-modal.tsx ***!
  \************************************************************************************************************/
/*! exports provided: snapshotTypes, VolumeSnapshotModal, VolumeSnapshotModalWithFireHose, volumeSnapshotModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotTypes", function() { return snapshotTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotModal", function() { return VolumeSnapshotModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotModalWithFireHose", function() { return VolumeSnapshotModalWithFireHose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volumeSnapshotModal", function() { return volumeSnapshotModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _volume_snapshot_modal_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_volume-snapshot-modal.scss */ "./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/_volume-snapshot-modal.scss");
/* harmony import */ var _volume_snapshot_modal_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_volume_snapshot_modal_scss__WEBPACK_IMPORTED_MODULE_8__);
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









const snapshotTypes = {
    Single: 'Single',
};
const VolumeSnapshotModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["withHandlePromise"])((props) => {
    const { close, cancel, pvcData, errorMessage, inProgress, handlePromise } = props;
    const resource = pvcData.data;
    const [snapshotName, setSnapshotName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](`${Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(resource) || 'pvc'}-snapshot`);
    const [scheduleType, setScheduleType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](snapshotTypes.Single);
    const submit = (event) => {
        event.preventDefault();
        const ns = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNamespace"])(resource);
        const pvcName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(resource);
        const snapshotTemplate = {
            apiVersion: _models__WEBPACK_IMPORTED_MODULE_7__["VolumeSnapshotModel"].apiVersion,
            kind: _models__WEBPACK_IMPORTED_MODULE_7__["VolumeSnapshotModel"].kind,
            metadata: {
                name: snapshotName,
                namespace: ns,
            },
            spec: {
                source: {
                    persistentVolumeClaimName: pvcName,
                },
            },
        };
        handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_7__["VolumeSnapshotModel"], snapshotTemplate)).then(close); // eslint-disable-line promise/catch-or-return
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: submit, name: "form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content modal-content--no-inner-scroll" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null, "Create Snapshot"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "Creating snapshot for ",
                    Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(resource)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { className: "ceph-volume-snapshot-modal__input", label: "Name", isRequired: true, fieldId: "snapshot-name" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { type: "text", name: "snapshot-name", value: snapshotName, onChange: setSnapshotName, "aria-labelledby": "snapshot-name" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { className: "ceph-volume-snapshot-modal__input", label: "Schedule", fieldId: "snapshot-type" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], { dropDownClassName: "dropdown--full-width", items: snapshotTypes, selectedKey: scheduleType, onChange: (value) => setScheduleType(snapshotTypes[value]) }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { inProgress: inProgress, errorMessage: errorMessage, submitText: "Create", cancel: cancel }))));
});
const VolumeSnapshotModalWithFireHose = (_a) => {
    var _b, _c;
    var { resource } = _a, rest = __rest(_a, ["resource"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: [
            {
                kind: (resource === null || resource === void 0 ? void 0 : resource.kind) || _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind,
                prop: 'pvcData',
                namespace: (_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
                isList: false,
                name: (_c = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _c === void 0 ? void 0 : _c.name,
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VolumeSnapshotModal, Object.assign({}, rest))));
};
const volumeSnapshotModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(VolumeSnapshotModalWithFireHose);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/volume-snapshot/_volume-snapshot.scss":
/*!*******************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/volume-snapshot/_volume-snapshot.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/volume-snapshot/volume-snapshot.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/volume-snapshot/volume-snapshot.tsx ***!
  \*****************************************************************************************/
/*! exports provided: snapshotMenuActions, VolumeSnapshotTableHeader, DetailsComponent, VolumeSnapshotDetails, VolumeSnapshotTableRow, VolumeSnapshotList, VolumeSnapshotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotMenuActions", function() { return snapshotMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotTableHeader", function() { return VolumeSnapshotTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotDetails", function() { return VolumeSnapshotDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotTableRow", function() { return VolumeSnapshotTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotList", function() { return VolumeSnapshotList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeSnapshotPage", function() { return VolumeSnapshotPage; });
/* harmony import */ var _volume_snapshot_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_volume-snapshot.scss */ "./packages/ceph-storage-plugin/src/components/volume-snapshot/_volume-snapshot.scss");
/* harmony import */ var _volume_snapshot_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_volume_snapshot_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _utils_kebab_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/kebab-actions */ "./packages/ceph-storage-plugin/src/utils/kebab-actions.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _modals_volume_snapshot_modal_volume_snapshot_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/volume-snapshot-modal/volume-snapshot-modal */ "./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/volume-snapshot-modal.tsx");












const snapshotMenuActions = [...Object(_utils_kebab_actions__WEBPACK_IMPORTED_MODULE_9__["getKebabActionsForKind"])(_models__WEBPACK_IMPORTED_MODULE_8__["VolumeSnapshotModel"])];
const snapshotTableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'col-sm-6', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-2', 'hidden-sm', 'hidden-xs'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const VolumeSnapshotTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["sortable"]],
            props: { className: snapshotTableColumnClasses[0] },
        },
        {
            title: 'Date',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["sortable"]],
            props: { className: snapshotTableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortField: 'status.readyToUse',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["sortable"]],
            props: { className: snapshotTableColumnClasses[2] },
        },
        {
            title: 'Size',
            sortField: 'status.restoreSize',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["sortable"]],
            props: { className: snapshotTableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: snapshotTableColumnClasses[4] },
        },
    ];
};
VolumeSnapshotTableHeader.displayName = 'SnapshotTableHeader';
const volumeSnapshotKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(_models__WEBPACK_IMPORTED_MODULE_8__["VolumeSnapshotModel"]);
const breadcrumbsForSnapshotDetailsPage = (match) => () => [
    {
        name: _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["PersistentVolumeClaimModel"].labelPlural,
        path: `/k8s/ns/${match.params.ns}/persistentvolumeclaims`,
    },
    {
        name: 'Snapshot Details',
        path: `${match.url}`,
    },
];
const DetailsComponent = ({ obj: volumeSnapshot }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Volume Snapshot Details" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: volumeSnapshot },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Status"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, volumeSnapshot.status.readyToUse ? 'Ready' : 'Not Ready'),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Size"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, volumeSnapshot.status.restoreSize || 'No Data'))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Persistent Volume Claim"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["PersistentVolumeClaimModel"].kind, name: volumeSnapshot.spec.source.persistentVolumeClaimName, namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getNamespace"])(volumeSnapshot) })))))));
const VolumeSnapshotDetails = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { menuActions: snapshotMenuActions, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(_models__WEBPACK_IMPORTED_MODULE_8__["VolumeSnapshotModel"]), name: props.match.params.name, kindObj: _models__WEBPACK_IMPORTED_MODULE_8__["VolumeSnapshotModel"], namespace: props.match.params.ns, pages: [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].details(DetailsComponent)], breadcrumbsFor: breadcrumbsForSnapshotDetailsPage(props.match) })));
const VolumeSnapshotTableRow = ({ obj, index, key, style, }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: snapshotTableColumnClasses[0] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(_models__WEBPACK_IMPORTED_MODULE_8__["VolumeSnapshotModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getName"])(obj), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getNamespace"])(obj), title: Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getName"])(obj) })),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: snapshotTableColumnClasses[1] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: snapshotTableColumnClasses[2] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: obj.status.readyToUse ? 'Ready' : 'Not Ready' })),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: snapshotTableColumnClasses[3] }, obj.status.restoreSize || '-'),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: snapshotTableColumnClasses[4] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: snapshotMenuActions, kind: volumeSnapshotKind, resource: obj }))));
const VolumeSnapshotList = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Volume Snapshot List", Header: VolumeSnapshotTableHeader, Row: VolumeSnapshotTableRow, virtualize: true })));
const VolumeSnapshotPage = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], { canCreate: true, kind: volumeSnapshotKind, ListComponent: VolumeSnapshotList, showTitle: false, namespace: obj.metadata.namespace, createHandler: () => Object(_modals_volume_snapshot_modal_volume_snapshot_modal__WEBPACK_IMPORTED_MODULE_11__["volumeSnapshotModal"])({ resource: obj }) }));


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/clone-workflow.ts":
/*!******************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/clone-workflow.ts ***!
  \******************************************************************/
/*! exports provided: ClonePVC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonePVC", function() { return ClonePVC; });
const ClonePVC = (kind, resource) => {
    return {
        label: 'Clone',
        callback: () => {
            return Promise.all(/*! import() | ceph-storage-clone-pvc-modal */[__webpack_require__.e("ceph-storage-activity-card~ceph-storage-add-capacity-modal~ceph-storage-clone-pvc-modal~ceph-storage~bd4f5407"), __webpack_require__.e("ceph-storage-clone-pvc-modal")]).then(__webpack_require__.bind(null, /*! ../components/modals/clone-pvc-modal/clone-pvc-modal */ "./packages/ceph-storage-plugin/src/components/modals/clone-pvc-modal/clone-pvc-modal.tsx")).then((m) => m.default({ resource }));
        },
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            namespace: resource.metadata.namespace,
            verb: 'create',
        },
    };
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/delete-snapshot-workflow.ts":
/*!****************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/delete-snapshot-workflow.ts ***!
  \****************************************************************************/
/*! exports provided: DeleteSnapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSnapshot", function() { return DeleteSnapshot; });
const DeleteSnapshot = (kind, resource) => {
    return {
        label: 'Delete Snapshot',
        callback: () => {
            const clusterObject = { resource };
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/modals/delete-modal */ "./public/components/modals/delete-modal.jsx"))
                .then((m) => m.deleteModal({
                kind,
                resource: clusterObject.resource,
            }))
                // eslint-disable-next-line no-console
                .catch((e) => console.error(e));
        },
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            namespace: resource.metadata.namespace,
            name: resource.metadata.name,
            verb: 'delete',
        },
    };
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/kebab-actions.ts":
/*!*****************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/kebab-actions.ts ***!
  \*****************************************************************/
/*! exports provided: getKebabActionsForKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKebabActionsForKind", function() { return getKebabActionsForKind; });
/* harmony import */ var _clone_workflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-workflow */ "./packages/ceph-storage-plugin/src/utils/clone-workflow.ts");
/* harmony import */ var _delete_snapshot_workflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-snapshot-workflow */ "./packages/ceph-storage-plugin/src/utils/delete-snapshot-workflow.ts");
/* harmony import */ var _console_internal_models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models/index */ "./public/models/index.ts");
/* harmony import */ var _restore_pvc_workflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restore-pvc-workflow */ "./packages/ceph-storage-plugin/src/utils/restore-pvc-workflow.ts");
/* harmony import */ var _snapshot_workflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snapshot-workflow */ "./packages/ceph-storage-plugin/src/utils/snapshot-workflow.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./packages/ceph-storage-plugin/src/models.ts");






const getKebabActionsForKind = (resourceKind) => {
    if ((resourceKind === null || resourceKind === void 0 ? void 0 : resourceKind.kind) === _console_internal_models_index__WEBPACK_IMPORTED_MODULE_2__["PersistentVolumeClaimModel"].kind) {
        return [_snapshot_workflow__WEBPACK_IMPORTED_MODULE_4__["SnapshotPVC"], _clone_workflow__WEBPACK_IMPORTED_MODULE_0__["ClonePVC"]];
    }
    if ((resourceKind === null || resourceKind === void 0 ? void 0 : resourceKind.kind) === _models__WEBPACK_IMPORTED_MODULE_5__["VolumeSnapshotModel"].kind) {
        return [_restore_pvc_workflow__WEBPACK_IMPORTED_MODULE_3__["RestorePVC"], _delete_snapshot_workflow__WEBPACK_IMPORTED_MODULE_1__["DeleteSnapshot"]];
    }
    return [];
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/restore-pvc-workflow.ts":
/*!************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/restore-pvc-workflow.ts ***!
  \************************************************************************/
/*! exports provided: RestorePVC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePVC", function() { return RestorePVC; });
const RestorePVC = (kind, resource) => {
    return {
        label: 'Restore',
        callback: () => {
            const clusterObject = { resource };
            __webpack_require__.e(/*! import() | ceph-storage-restore-pvc-modal */ "ceph-storage-restore-pvc-modal").then(__webpack_require__.bind(null, /*! ../components/modals/restore-pvc-modal/restore-pvc-modal */ "./packages/ceph-storage-plugin/src/components/modals/restore-pvc-modal/restore-pvc-modal.tsx"))
                .then((m) => m.default(clusterObject))
                // eslint-disable-next-line no-console
                .catch((e) => console.error(e));
        },
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            namespace: resource.metadata.namespace,
            name: resource.metadata.name,
            verb: 'create',
        },
    };
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/snapshot-workflow.ts":
/*!*********************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/snapshot-workflow.ts ***!
  \*********************************************************************/
/*! exports provided: SnapshotPVC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotPVC", function() { return SnapshotPVC; });
const SnapshotPVC = (kind, resource) => {
    return {
        label: 'Create Snapshot',
        callback: () => {
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/modals/volume-snapshot-modal/volume-snapshot-modal */ "./packages/ceph-storage-plugin/src/components/modals/volume-snapshot-modal/volume-snapshot-modal.tsx"))
                .then((m) => m.volumeSnapshotModal({ resource }))
                // eslint-disable-next-line no-console
                .catch((e) => console.error(e));
        },
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            namespace: resource.metadata.namespace,
            name: resource.metadata.name,
            verb: 'create',
        },
    };
};


/***/ })

}]);
//# sourceMappingURL=ceph-storage-volume-snapshot-details-6fb4a8f8fdfc7a648f8d.js.map