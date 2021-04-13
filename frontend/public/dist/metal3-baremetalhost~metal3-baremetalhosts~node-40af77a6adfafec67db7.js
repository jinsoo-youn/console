(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metal3-baremetalhost~metal3-baremetalhosts~node"],{

/***/ "./packages/console-shared/src/hooks/flag.ts":
/*!***************************************************!*\
  !*** ./packages/console-shared/src/hooks/flag.ts ***!
  \***************************************************/
/*! exports provided: useFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFlag", function() { return useFlag; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: FIXME missing exports due to out-of-sync @types/react-redux version

const useFlag = (flag) => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(({ FLAGS }) => FLAGS.get(flag));


/***/ }),

/***/ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopover.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/maintenance/MaintenancePopover.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _UnderMaintenancePopoverContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UnderMaintenancePopoverContent */ "./packages/metal3-plugin/src/components/maintenance/UnderMaintenancePopoverContent.tsx");
/* harmony import */ var _StartingMaintenancePopoverContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StartingMaintenancePopoverContent */ "./packages/metal3-plugin/src/components/maintenance/StartingMaintenancePopoverContent.tsx");






const MaintenancePopover = ({ title, nodeMaintenance, className, }) => {
    const phase = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenancePhase"])(nodeMaintenance);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["PopoverStatus"], { icon: phase === 'Succeeded' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MaintenanceIcon"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["InProgressIcon"], null), title: title, className: className }, phase === 'Succeeded' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_UnderMaintenancePopoverContent__WEBPACK_IMPORTED_MODULE_4__["default"], { nodeMaintenance: nodeMaintenance })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StartingMaintenancePopoverContent__WEBPACK_IMPORTED_MODULE_5__["default"], { nodeMaintenance: nodeMaintenance }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MaintenancePopover);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopoverPodList.scss":
/*!******************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/maintenance/MaintenancePopoverPodList.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopoverPodList.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/maintenance/MaintenancePopoverPodList.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _MaintenancePopoverPodList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MaintenancePopoverPodList.scss */ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopoverPodList.scss");
/* harmony import */ var _MaintenancePopoverPodList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MaintenancePopoverPodList_scss__WEBPACK_IMPORTED_MODULE_5__);






const podRowRenderer = (pods) => ({ key, index, style }) => {
    const pod = pods[index];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: key, style: style, className: "maintenance-popover-pod-list__list-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["PodModel"]), name: pod, title: pod })));
};
const MaintenancePopoverPodList = ({ pods }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], { disableHeight: true }, ({ width }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], { width: width, height: pods.length < 6 ? pods.length * 30 : 150, rowCount: pods.length, rowHeight: 30, rowRenderer: podRowRenderer(pods) }))));
/* harmony default export */ __webpack_exports__["default"] = (MaintenancePopoverPodList);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/maintenance/StartingMaintenancePopoverContent.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/maintenance/StartingMaintenancePopoverContent.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/StopNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StopNodeMaintenanceModal.tsx");
/* harmony import */ var _MaintenancePopoverPodList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MaintenancePopoverPodList */ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopoverPodList.tsx");






const StartingMaintenancePopoverContent = ({ nodeMaintenance, }) => {
    const reason = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenanceReason"])(nodeMaintenance);
    const creationTimestamp = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenanceCreationTimestamp"])(nodeMaintenance);
    const lastError = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenanceLastError"])(nodeMaintenance);
    const pendingPods = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenancePendingPods"])(nodeMaintenance);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Node is entering maintenance. The cluster will automatically rebuild node's data 30 minutes after entering maintenance."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Maintenance reason:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, reason),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Requested:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Timestamp"], { timestamp: creationTimestamp }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        lastError && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", title: "Workloads failing to move", isInline: true }, lastError),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Progress"], { value: Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenanceProgressPercent"])(nodeMaintenance), title: "Moving workloads", size: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ProgressSize"].sm }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Expandable"], { toggleText: `Show remaining workloads (${pendingPods.length})` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MaintenancePopoverPodList__WEBPACK_IMPORTED_MODULE_5__["default"], { pods: pendingPods })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "link", onClick: () => Object(_modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_4__["default"])(nodeMaintenance), isInline: true }, "Stop")));
};
/* harmony default export */ __webpack_exports__["default"] = (StartingMaintenancePopoverContent);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/maintenance/UnderMaintenancePopoverContent.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/maintenance/UnderMaintenancePopoverContent.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/StopNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StopNodeMaintenanceModal.tsx");





const UnderMaintenancePopoverContent = ({ nodeMaintenance, }) => {
    const reason = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenanceReason"])(nodeMaintenance);
    const creationTimestamp = Object(_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeMaintenanceCreationTimestamp"])(nodeMaintenance);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Node is under maintenance. The cluster will automatically rebuild node's data 30 minutes after entering maintenance."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Maintenance reason:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, reason),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Requested:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Timestamp"], { timestamp: creationTimestamp }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "link", onClick: () => Object(_modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_4__["default"])(nodeMaintenance), isInline: true }, "Stop maintenance")));
};
/* harmony default export */ __webpack_exports__["default"] = (UnderMaintenancePopoverContent);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/modals/StartNodeMaintenanceModal.tsx":
/*!************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/modals/StartNodeMaintenanceModal.tsx ***!
  \************************************************************************************/
/*! exports provided: startNodeMaintenanceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startNodeMaintenanceModal", function() { return startNodeMaintenanceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var patternfly_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! patternfly-react */ "./node_modules/patternfly-react/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_ceph_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _k8s_requests_node_maintenance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../k8s/requests/node-maintenance */ "./packages/metal3-plugin/src/k8s/requests/node-maintenance/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");









const cephClusterResource = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_ceph_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__["CephClusterModel"]),
    namespaced: false,
    isList: true,
};
const StartNodeMaintenanceModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    var _a;
    const { nodeName, inProgress, errorMessage, handlePromise, close, cancel } = props;
    const [reason, setReason] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const submit = (event) => {
        event.preventDefault();
        const promise = Object(_k8s_requests_node_maintenance__WEBPACK_IMPORTED_MODULE_7__["startNodeMaintenance"])(nodeName, reason);
        return handlePromise(promise).then(close);
    };
    const [cephClusters, loaded] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_8__["useK8sWatchResource"])(cephClusterResource);
    const cephCluster = cephClusters === null || cephClusters === void 0 ? void 0 : cephClusters[0];
    const cephClusterHealthy = !cephCluster || ((_a = cephCluster === null || cephCluster === void 0 ? void 0 : cephCluster.status) === null || _a === void 0 ? void 0 : _a.health) === 'OK';
    const action = 'Start Maintenance';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, action),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "All managed workloads will be moved off of this node. New workloads and data will not be added to this node until maintenance is stopped."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "If the node does not exit maintenance within ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "30 minutes"),
                ", the cluster will automatically rebuild the node's data using replicated copies"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "node-maintenance-reason" }, "Reason"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], { type: "text", id: "node-maintenance-reason", value: reason, onChange: (event) => setReason(event.target.value) })),
            !cephClusterHealthy && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", title: "The Ceph storage cluster is not in a healthy state.", isInline: true }, "Maintenance should not be started until the health of the storage cluster is restored."))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { submitDisabled: !loaded, errorMessage: errorMessage, inProgress: inProgress, submitText: action, cancel: cancel })));
});
const startNodeMaintenanceModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(StartNodeMaintenanceModal);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/modals/StopNodeMaintenanceModal.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/modals/StopNodeMaintenanceModal.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_modals_confirm_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/modals/confirm-modal */ "./public/components/modals/confirm-modal.jsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");





const stopNodeMaintenanceModal = (nodeMaintenance) => {
    const title = 'Stop maintenance';
    const reason = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getNodeMaintenanceReason"])(nodeMaintenance);
    const nodeName = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getNodeMaintenanceNodeName"])(nodeMaintenance);
    return Object(_console_internal_components_modals_confirm_modal__WEBPACK_IMPORTED_MODULE_1__["confirmModal"])({
        title,
        message: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "Are you sure you want to stop maintenance ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, reason ? ` (${reason}) ` : ''),
            "on node ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, nodeName),
            "?")),
        btnText: title,
        executeFn: () => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_3__["NodeMaintenanceModel"], nodeMaintenance),
    });
};
/* harmony default export */ __webpack_exports__["default"] = (stopNodeMaintenanceModal);


/***/ }),

/***/ "./packages/metal3-plugin/src/k8s/objects/node-maintenance/index.ts":
/*!**************************************************************************!*\
  !*** ./packages/metal3-plugin/src/k8s/objects/node-maintenance/index.ts ***!
  \**************************************************************************/
/*! exports provided: buildNodeMaintenance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNodeMaintenance", function() { return buildNodeMaintenance; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");


const buildNodeMaintenance = ({ generateName, nodeName, reason, }) => ({
    apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_1__["NodeMaintenanceModel"]),
    kind: _models__WEBPACK_IMPORTED_MODULE_1__["NodeMaintenanceModel"].kind,
    metadata: {
        generateName: `${generateName || 'nm'}-`,
    },
    spec: {
        nodeName,
        reason,
    },
});


/***/ }),

/***/ "./packages/metal3-plugin/src/k8s/requests/node-maintenance/index.ts":
/*!***************************************************************************!*\
  !*** ./packages/metal3-plugin/src/k8s/requests/node-maintenance/index.ts ***!
  \***************************************************************************/
/*! exports provided: startNodeMaintenance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startNodeMaintenance", function() { return startNodeMaintenance; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _objects_node_maintenance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/node-maintenance */ "./packages/metal3-plugin/src/k8s/objects/node-maintenance/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");



const startNodeMaintenance = (nodeName, reason) => {
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_2__["NodeMaintenanceModel"], Object(_objects_node_maintenance__WEBPACK_IMPORTED_MODULE_1__["buildNodeMaintenance"])({ nodeName, reason }));
};


/***/ })

}]);
//# sourceMappingURL=metal3-baremetalhost~metal3-baremetalhosts~node-40af77a6adfafec67db7.js.map