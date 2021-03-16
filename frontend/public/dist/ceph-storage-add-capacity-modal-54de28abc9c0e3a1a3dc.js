(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-add-capacity-modal"],{

/***/ "./packages/ceph-storage-plugin/src/components/modals/add-capacity-modal/add-capacity-modal.tsx":
/*!******************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/add-capacity-modal/add-capacity-modal.tsx ***!
  \******************************************************************************************************/
/*! exports provided: AddCapacityModal, addCapacityModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCapacityModal", function() { return AddCapacityModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCapacityModal", function() { return addCapacityModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/index */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_graphs_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/graphs/prometheus-poll-hook */ "./public/components/graphs/prometheus-poll-hook.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/graphs/helpers */ "./public/components/graphs/helpers.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _utils_osd_size_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/osd-size-dropdown */ "./packages/ceph-storage-plugin/src/utils/osd-size-dropdown.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _constants_ocs_install__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/ocs-install */ "./packages/ceph-storage-plugin/src/constants/ocs-install.ts");
/* harmony import */ var _constants_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constants/queries */ "./packages/ceph-storage-plugin/src/constants/queries.ts");
/* harmony import */ var _storage_class_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../storage-class-dropdown */ "./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.tsx");
/* harmony import */ var _ocs_install_pvs_available_capacity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ocs-install/pvs-available-capacity */ "./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.tsx");
/* harmony import */ var _add_capacity_modal_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_add-capacity-modal.scss */ "./packages/ceph-storage-plugin/src/components/modals/add-capacity-modal/_add-capacity-modal.scss");
/* harmony import */ var _add_capacity_modal_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_add_capacity_modal_scss__WEBPACK_IMPORTED_MODULE_16__);

















const getProvisionedCapacity = (value) => (value % 1 ? (value * 3).toFixed(2) : value * 3);
const AddCapacityModal = (props) => {
    var _a;
    const { ocsConfig, close, cancel } = props;
    const [response, loadError, loading] = Object(_console_internal_components_graphs_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_5__["usePrometheusPoll"])({
        endpoint: _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_7__["PrometheusEndpoint"].QUERY,
        namespace: _constants__WEBPACK_IMPORTED_MODULE_11__["CEPH_STORAGE_NAMESPACE"],
        query: _constants_queries__WEBPACK_IMPORTED_MODULE_13__["CAPACITY_USAGE_QUERIES"][_constants_queries__WEBPACK_IMPORTED_MODULE_13__["StorageDashboardQuery"].CEPH_CAPACITY_USED],
    });
    const [storageClass, setStorageClass] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [inProgress, setProgress] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [errorMessage, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const osdSizeWithUnit = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](ocsConfig, 'spec.storageDeviceSets[0].dataPVCTemplate.spec.resources.requests.storage');
    const presentCount = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](ocsConfig, 'spec.storageDeviceSets[0].count');
    const capacity = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](response, 'data.result[0].value[1]');
    const osdSizeWithoutUnit = (_a = _utils_osd_size_dropdown__WEBPACK_IMPORTED_MODULE_10__["OSD_CAPACITY_SIZES"][osdSizeWithUnit]) === null || _a === void 0 ? void 0 : _a.size;
    const provisionedCapacity = getProvisionedCapacity(osdSizeWithoutUnit);
    let currentCapacity;
    if (loading) {
        currentCapacity = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text ceph-add-capacity__current-capacity--loading" }));
    }
    else if (loadError || !capacity || !presentCount || !osdSizeWithoutUnit) {
        currentCapacity = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-muted" }, "Not available");
    }
    else {
        currentCapacity = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-muted" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, `${Object(_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__["humanizeBinaryBytes"])(capacity / 3).string} / ${presentCount *
                osdSizeWithoutUnit} TiB`)));
    }
    const submit = (event) => {
        event.preventDefault();
        setProgress(true);
        const scName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["getName"])(storageClass);
        const patch = [
            {
                op: 'replace',
                path: `/spec/storageDeviceSets/0/count`,
                value: presentCount + 1,
            },
        ];
        if (!scName) {
            setError('No StorageClass selected');
            setProgress(false);
        }
        else {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_9__["OCSServiceModel"], ocsConfig, patch)
                .then(() => {
                setProgress(false);
                close();
            })
                .catch((err) => {
                setError(err);
                setProgress(false);
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, className: "modal-content modal-content--no-inner-scroll" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Add Capacity"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
            "Adding capacity for ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["getName"])(ocsConfig)),
            ", may increase your expenses.",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-add-capacity__modal" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('ceph-add-capacity__sc-dropdown', {
                        'ceph-add-capacity__sc-dropdown--margin': (storageClass === null || storageClass === void 0 ? void 0 : storageClass.provisioner) !== _constants__WEBPACK_IMPORTED_MODULE_11__["NO_PROVISIONER"],
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "storageClass" },
                        "Storage Class",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__["FieldLevelHelp"], null, _constants_ocs_install__WEBPACK_IMPORTED_MODULE_12__["storageClassTooltip"])),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_14__["OCSStorageClassDropdown"], { onChange: setStorageClass })),
                (storageClass === null || storageClass === void 0 ? void 0 : storageClass.provisioner) === _constants__WEBPACK_IMPORTED_MODULE_11__["NO_PROVISIONER"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ocs_install_pvs_available_capacity__WEBPACK_IMPORTED_MODULE_15__["PVsAvailableCapacity"], { replica: ocsConfig.spec.storageDeviceSets[0].replica, "data-test-id": "ceph-add-capacity-pvs-available-capacity", sc: storageClass })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "requestSize" },
                        "Raw Capacity",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_3__["FieldLevelHelp"], null, _constants_ocs_install__WEBPACK_IMPORTED_MODULE_12__["labelTooltip"])),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-add-capacity__form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('pf-c-form-control', 'ceph-add-capacity__input'), type: "number", name: "requestSize", value: osdSizeWithoutUnit, required: true, disabled: true, "data-test-id": "requestSize" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-add-capacity__input--info-text" },
                            "x 3 replicas = ",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null,
                                provisionedCapacity,
                                " TiB"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-add-capacity__current-capacity" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary ceph-add-capacity__current-capacity--text" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "Currently Used:")),
                        currentCapacity))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { inProgress: inProgress, errorMessage: errorMessage, submitText: "Add", cancel: cancel })));
};
const addCapacityModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(AddCapacityModal);


/***/ })

}]);
//# sourceMappingURL=ceph-storage-add-capacity-modal-54de28abc9c0e3a1a3dc.js.map