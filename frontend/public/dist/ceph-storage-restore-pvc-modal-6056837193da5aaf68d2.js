(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-restore-pvc-modal"],{

/***/ "./packages/ceph-storage-plugin/src/components/modals/restore-pvc-modal/_restore-pvc-modal.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/restore-pvc-modal/_restore-pvc-modal.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/modals/restore-pvc-modal/restore-pvc-modal.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/restore-pvc-modal/restore-pvc-modal.tsx ***!
  \****************************************************************************************************/
/*! exports provided: RestorePVCModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePVCModal", function() { return RestorePVCModal; });
/* harmony import */ var _restore_pvc_modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_restore-pvc-modal.scss */ "./packages/ceph-storage-plugin/src/components/modals/restore-pvc-modal/_restore-pvc-modal.scss");
/* harmony import */ var _restore_pvc_modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_restore_pvc_modal_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/index */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models */ "./packages/ceph-storage-plugin/src/models.ts");









const RestorePVCModal = Object(_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    var _a, _b, _c, _d, _e;
    const { close, cancel, resource, errorMessage, inProgress, handlePromise } = props;
    const [pvcResource, setResource] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const [restorePVCName, setPVCName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](`${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(resource) || 'pvc'}-restore`);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        var _a, _b;
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"], (_b = (_a = resource === null || resource === void 0 ? void 0 : resource.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.persistentVolumeClaimName, Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(resource))
            .then(setResource)
            .catch((error) => {
            setResource(null);
            throw error;
        });
    }, [resource]);
    const submit = (event) => {
        var _a, _b, _c;
        event.preventDefault();
        const snapshotName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(resource);
        const pvcSize = (_a = resource === null || resource === void 0 ? void 0 : resource.status) === null || _a === void 0 ? void 0 : _a.restoreSize;
        const accessModes = (_b = pvcResource === null || pvcResource === void 0 ? void 0 : pvcResource.spec) === null || _b === void 0 ? void 0 : _b.accessModes;
        const pvcStorageClass = (_c = pvcResource === null || pvcResource === void 0 ? void 0 : pvcResource.spec) === null || _c === void 0 ? void 0 : _c.storageClassName;
        const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(resource);
        const restorePVCTemplate = {
            apiVersion: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].apiVersion,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind,
            metadata: {
                name: restorePVCName,
            },
            spec: {
                storageClassName: pvcStorageClass,
                dataSource: {
                    name: snapshotName,
                    kind: _models__WEBPACK_IMPORTED_MODULE_8__["VolumeSnapshotModel"].kind,
                    apiGroup: 'snapshot.storage.k8s.io',
                },
                accessModes,
                resources: {
                    requests: {
                        storage: pvcSize,
                    },
                },
            },
        };
        handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"], restorePVCTemplate, { ns: namespace }))
            .then(close)
            .catch((error) => {
            throw error;
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-content modal-content--no-inner-scroll" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null, "Restore"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: submit, name: "form" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "After restore action is finished, a new PVC will be created."),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { label: "Name", isRequired: true, fieldId: "restore-pvc-modal__name" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { isRequired: true, type: "text", id: "restore-pvc-modal__name", name: "restore-pvc-modal__name", value: restorePVCName, onChange: setPVCName })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ceph-restore-pvc-modal__details-section" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { gutter: "md" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 6 },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-restore-pvc-modal__pvc-details" }, "Date"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { "data-test-id": "snapshot-name" }, (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.creationTimestamp)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-restore-pvc-modal__pvc-details" }, "Status"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { "data-test-id": "snapshot-status" }, ((_b = resource === null || resource === void 0 ? void 0 : resource.status) === null || _b === void 0 ? void 0 : _b.readyToUse) ? 'Ready' : 'Not Ready')),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-restore-pvc-modal__pvc-details" }, "Size"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { "data-test-id": "snapshot-size" }, ((_c = resource === null || resource === void 0 ? void 0 : resource.status) === null || _c === void 0 ? void 0 : _c.restoreSize) || 'No Data'))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 6 },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-restore-pvc-modal__pvc-details" }, "Namespace"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__["ResourceIcon"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NamespaceModel"].kind }),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "data-test-id": "snapshot-ns" }, Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(resource)))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-restore-pvc-modal__pvc-details" }, "API Version"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { "data-test-id": "snapshot-apiversion" }, resource === null || resource === void 0 ? void 0 : resource.apiVersion)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ceph-restore-pvc-modal__pvc-details" }, "Persistent Volume Claim"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__["ResourceIcon"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "data-test-id": "snapshot-source" }, (_e = (_d = resource === null || resource === void 0 ? void 0 : resource.spec) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e.persistentVolumeClaimName)))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { inProgress: inProgress, errorMessage: errorMessage, submitText: "Restore", cancel: cancel }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(RestorePVCModal));


/***/ })

}]);
//# sourceMappingURL=ceph-storage-restore-pvc-modal-6056837193da5aaf68d2.js.map