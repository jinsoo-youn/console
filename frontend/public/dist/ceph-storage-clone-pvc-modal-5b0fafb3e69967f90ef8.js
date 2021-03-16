(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-clone-pvc-modal"],{

/***/ "./packages/ceph-storage-plugin/src/components/modals/clone-pvc-modal/_clone-pvc-modal.scss":
/*!**************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/clone-pvc-modal/_clone-pvc-modal.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/modals/clone-pvc-modal/clone-pvc-modal.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/clone-pvc-modal/clone-pvc-modal.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clone_pvc_modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_clone-pvc-modal.scss */ "./packages/ceph-storage-plugin/src/components/modals/clone-pvc-modal/_clone-pvc-modal.scss");
/* harmony import */ var _clone_pvc_modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clone_pvc_modal_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/index */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models/index */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/graphs/helpers */ "./public/components/graphs/helpers.ts");
/* harmony import */ var _console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/graphs/utils */ "./public/components/graphs/utils.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _console_internal_components_graphs_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/graphs/prometheus-poll-hook */ "./public/components/graphs/prometheus-poll-hook.ts");











const accessModeLabels = Object.freeze({
    ReadWriteOnce: 'Single User (RWO)',
    ReadWriteMany: 'Shared Access (RWX)',
    ReadOnlyMany: 'Read Only (ROX)',
});
const ClonePVCModal = Object(_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])((props) => {
    var _a;
    const { close, cancel, resource, handlePromise, errorMessage, inProgress } = props;
    const pvcName = resource.metadata.name;
    const [clonePVCName, setClonePVCName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](`${pvcName}-clone`);
    const pvcUsedCapacityQuery = Object(_constants_queries__WEBPACK_IMPORTED_MODULE_9__["getPVCUsedCapacityQuery"])(pvcName);
    const [response, error, loading] = Object(_console_internal_components_graphs_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_10__["usePrometheusPoll"])({
        endpoint: _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_7__["PrometheusEndpoint"].QUERY,
        query: pvcUsedCapacityQuery,
        namespace: resource.metadata.namespace,
    });
    const pvcUsedCapacityQueryResult = Object(_console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_8__["getInstantVectorStats"])(response, null, _console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_4__["humanizeBinaryBytes"]);
    const pvcUsedCapacity = ((_a = pvcUsedCapacityQueryResult === null || pvcUsedCapacityQueryResult === void 0 ? void 0 : pvcUsedCapacityQueryResult[0]) === null || _a === void 0 ? void 0 : _a.label) || 'No Data';
    const submit = (event) => {
        event.preventDefault();
        const pvcCloneObj = {
            apiVersion: _console_internal_models_index__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].apiVersion,
            kind: _console_internal_models_index__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind,
            metadata: {
                name: clonePVCName,
                namespace: resource.metadata.namespace,
            },
            spec: {
                storageClassName: resource.spec.storageClassName,
                dataSource: {
                    name: pvcName,
                    kind: _console_internal_models_index__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind,
                    apiGroup: '',
                },
                accessModes: resource.spec.accessModes,
                resources: resource.spec.resources,
            },
        };
        return handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sCreate"])(_console_internal_models_index__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"], pvcCloneObj)).then(close);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: submit },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-content modal-content--no-inner-scroll" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null, "Clone"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { label: "Name", isRequired: true, fieldId: "ceph-clone-pvc-modal__name" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { isRequired: true, type: "text", name: "ceph-clone-pvc-modal__name", value: clonePVCName, onChange: setClonePVCName })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ceph-clone-pvc-modal__details" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "text-muted" }, "PVC Details"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ceph-clone-pvc-modal__details-section" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-clone-pvc-modal__pvc-details" }, "Namespace"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: "Namespace" }),
                                    resource.metadata.namespace)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-clone-pvc-modal__pvc-details" }, "Storage Class"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, resource.spec.storageClassName ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: "StorageClass" }),
                                    resource.spec.storageClassName)) : ('None')))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-clone-pvc-modal__pvc-details" }, "Requested Capacity"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, resource.spec.resources.requests.storage)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-clone-pvc-modal__pvc-details" }, "Used Capacity"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                    !loading && !error && pvcUsedCapacity,
                                    loading && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_4__["LoadingInline"], null),
                                    !loading && error && 'No Data'))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-clone-pvc-modal__pvc-details" }, "Access Mode"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, accessModeLabels[resource.spec.accessModes])),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-clone-pvc-modal__pvc-details" }, "Volume Mode"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, resource.spec.volumeMode)))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { inProgress: inProgress, errorMessage: errorMessage, submitText: "Clone", cancel: cancel }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(ClonePVCModal));


/***/ })

}]);
//# sourceMappingURL=ceph-storage-clone-pvc-modal-5b0fafb3e69967f90ef8.js.map