(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-add-capacity-modal~install-page"],{

/***/ "./packages/ceph-storage-plugin/src/components/modals/add-capacity-modal/_add-capacity-modal.scss":
/*!********************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/add-capacity-modal/_add-capacity-modal.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.scss":
/*!****************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.tsx ***!
  \***************************************************************************************/
/*! exports provided: OCSStorageClassDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCSStorageClassDropdown", function() { return OCSStorageClassDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/storage-class-dropdown */ "./public/components/utils/storage-class-dropdown.tsx");
/* harmony import */ var _storage_class_dropdown_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage-class-dropdown.scss */ "./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.scss");
/* harmony import */ var _storage_class_dropdown_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storage_class_dropdown_scss__WEBPACK_IMPORTED_MODULE_4__);





const ocsProvisioners = [
    'ceph.rook.io/block',
    'cephfs.csi.ceph.com',
    'rbd.csi.ceph.com',
    'noobaa.io/obc',
];
const StorageClassDropdown = (props) => {
    const scConfig = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props);
    /* 'S' of Storage should be Capital as its defined key in resources object */
    const scLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](scConfig.resources.StorageClass, 'loaded');
    const scData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](scConfig.resources.StorageClass, 'data', []);
    const filteredSCData = scData.filter((sc) => ocsProvisioners.every((provisioner) => { var _a; return !((_a = sc === null || sc === void 0 ? void 0 : sc.provisioner) === null || _a === void 0 ? void 0 : _a.includes(provisioner)); }));
    if (scLoaded) {
        scConfig.resources.StorageClass.data = filteredSCData;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_3__["StorageClassDropdownInner"], Object.assign({}, scConfig, { id: "ceph-sc-dropdown" }));
};
const OCSStorageClassDropdown = (props) => {
    const { onChange, defaultClass } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: [{ kind: 'StorageClass', prop: 'StorageClass', isList: true }] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StorageClassDropdown, { onChange: onChange, name: "storageClass", defaultClass: defaultClass, hideClassName: "ceph-sc-dropdown__hide-default", required: true }))));
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.scss":
/*!*********************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.tsx ***!
  \********************************************************************************************/
/*! exports provided: PVsAvailableCapacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PVsAvailableCapacity", function() { return PVsAvailableCapacity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_internal_components_utils___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils/ */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/resources */ "./packages/ceph-storage-plugin/src/constants/resources.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");
/* harmony import */ var _modals_add_capacity_modal_add_capacity_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/add-capacity-modal/_add-capacity-modal.scss */ "./packages/ceph-storage-plugin/src/components/modals/add-capacity-modal/_add-capacity-modal.scss");
/* harmony import */ var _modals_add_capacity_modal_add_capacity_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modals_add_capacity_modal_add_capacity_modal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pvs_available_capacity_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pvs-available-capacity.scss */ "./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.scss");
/* harmony import */ var _pvs_available_capacity_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pvs_available_capacity_scss__WEBPACK_IMPORTED_MODULE_7__);








const PVsAvailableCapacity = ({ replica, sc }) => {
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__["useK8sWatchResource"])(_constants_resources__WEBPACK_IMPORTED_MODULE_4__["pvResource"]);
    let availableCapacity = '';
    let availableStatusEl = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text ceph-pvs-available-capacity__current-capacity--loading" }));
    if ((loadError || data.length === 0) && loaded) {
        availableStatusEl = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-muted" }, "Not Available");
    }
    else if (loaded) {
        const pvs = Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getSCAvailablePVs"])(data, Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(sc));
        availableCapacity = Object(_console_internal_components_utils___WEBPACK_IMPORTED_MODULE_2__["humanizeBinaryBytes"])(Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["calcPVsCapacity"])(pvs)).string;
        availableStatusEl = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, `${availableCapacity} / ${replica} replicas`);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-add-capacity__current-capacity" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-secondary ceph-add-capacity__current-capacity--text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "Available capacity:")),
        availableStatusEl));
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/constants/ocs-install.ts":
/*!*******************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/constants/ocs-install.ts ***!
  \*******************************************************************/
/*! exports provided: minSelectedNode, ocsTaint, storageClassTooltip, labelTooltip, ocsRequestData, infraProvisionerMap, defaultRequestSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minSelectedNode", function() { return minSelectedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ocsTaint", function() { return ocsTaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageClassTooltip", function() { return storageClassTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelTooltip", function() { return labelTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ocsRequestData", function() { return ocsRequestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infraProvisionerMap", function() { return infraProvisionerMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRequestSize", function() { return defaultRequestSize; });
const minSelectedNode = 3;
const ocsTaint = {
    key: 'node.ocs.openshift.io/storage',
    value: 'true',
    effect: 'NoSchedule',
};
Object.freeze(ocsTaint);
const storageClassTooltip = 'The Storage Class will be used to request storage from the underlying infrastructure to create the backing persistent volumes that will be used to provide the OpenShift Container Storage (OCS) service.';
const labelTooltip = 'The backing storage requested will be higher as it will factor in the requested capacity, replica factor, and fault tolerant costs associated with the requested capacity.';
const ocsRequestData = {
    apiVersion: 'ocs.openshift.io/v1',
    kind: 'StorageCluster',
    metadata: {
        name: 'ocs-storagecluster',
        namespace: 'openshift-storage',
    },
    spec: {
        manageNodes: false,
        storageDeviceSets: [
            {
                name: 'ocs-deviceset',
                count: 1,
                replica: 3,
                resources: {},
                placement: {},
                portable: true,
                dataPVCTemplate: {
                    spec: {
                        storageClassName: '',
                        accessModes: ['ReadWriteOnce'],
                        volumeMode: 'Block',
                        resources: {
                            requests: {
                                storage: '',
                            },
                        },
                    },
                },
            },
        ],
    },
};
const infraProvisionerMap = {
    aws: 'kubernetes.io/aws-ebs',
    vsphere: 'kubernetes.io/vsphere-volume',
};
var defaultRequestSize;
(function (defaultRequestSize) {
    defaultRequestSize["BAREMETAL"] = "1";
    defaultRequestSize["NON_BAREMETAL"] = "2Ti";
})(defaultRequestSize || (defaultRequestSize = {}));


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/constants/resources.ts":
/*!*****************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/constants/resources.ts ***!
  \*****************************************************************/
/*! exports provided: cephClusterResource, pvResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cephClusterResource", function() { return cephClusterResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pvResource", function() { return pvResource; });
/* harmony import */ var _console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s/k8s */ "./public/module/k8s/k8s.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./packages/ceph-storage-plugin/src/models.ts");



const cephClusterResource = {
    kind: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["CephClusterModel"]),
    namespaced: false,
    isList: true,
    prop: 'ceph',
};
const pvResource = {
    kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["PersistentVolumeModel"].kind,
    namespaced: false,
    isList: true,
};


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/selectors/index.ts":
/*!*************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/selectors/index.ts ***!
  \*************************************************************/
/*! exports provided: cephStorageLabel, filterCephAlerts, getCephPVs, getCephPVCs, getCephNodes, getCephSC, getOCSVersion, calcPVsCapacity, getSCAvailablePVs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cephStorageLabel", function() { return cephStorageLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCephAlerts", function() { return filterCephAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephPVs", function() { return getCephPVs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephPVCs", function() { return getCephPVCs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephNodes", function() { return getCephNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCephSC", function() { return getCephSC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOCSVersion", function() { return getOCSVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPVsCapacity", function() { return calcPVsCapacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCAvailablePVs", function() { return getSCAvailablePVs; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");




const cephStorageLabel = 'cluster.ocs.openshift.io/openshift-storage';
var status;
(function (status) {
    status["BOUND"] = "Bound";
    status["AVAILABLE"] = "Available";
})(status || (status = {}));
const filterCephAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'ceph');
const getCephPVs = (pvsData = []) => pvsData.filter((pv) => {
    return _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["cephStorageProvisioners"].some((provisioner) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pv, 'metadata.annotations["pv.kubernetes.io/provisioned-by"]', '').includes(provisioner));
});
const getPVStorageClass = (pv) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pv, 'spec.storageClassName');
const getStorageClassName = (pvc) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, ['metadata', 'annotations', 'volume.beta.kubernetes.io/storage-class']) ||
    lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, 'spec.storageClassName');
const isBound = (pvc) => pvc.status.phase === status.BOUND;
const getCephPVCs = (cephSCNames = [], pvcsData = [], pvsData = []) => {
    const cephPVs = getCephPVs(pvsData);
    const cephSCNameSet = new Set([...cephSCNames, ...cephPVs.map(getPVStorageClass)]);
    const cephBoundPVCUIDSet = new Set(lodash__WEBPACK_IMPORTED_MODULE_0__["map"](cephPVs, 'spec.claimRef.uid'));
    // If the PVC is bound use claim uid(links PVC to PV) else storage class to verify it's provisioned by ceph.
    return pvcsData.filter((pvc) => isBound(pvc)
        ? cephBoundPVCUIDSet.has(pvc.metadata.uid)
        : cephSCNameSet.has(getStorageClassName(pvc)));
};
const getCephNodes = (nodesData = []) => nodesData.filter((node) => lodash__WEBPACK_IMPORTED_MODULE_0__["keys"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'metadata.labels')).includes(cephStorageLabel));
const getCephSC = (scData) => scData.filter((sc) => {
    return _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_2__["cephStorageProvisioners"].some((provisioner) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](sc, 'provisioner', '').includes(provisioner));
});
const getOCSVersion = (items) => {
    const itemsData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](items, 'data');
    const operator = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](itemsData, (item) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](item, 'spec.name') === _constants__WEBPACK_IMPORTED_MODULE_3__["OCS_OPERATOR"]);
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](operator, 'status.installedCSV');
};
const calcPVsCapacity = (pvs) => pvs.reduce((sum, pv) => {
    const storage = Number(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["convertToBaseValue"])(pv.spec.capacity.storage));
    return sum + storage;
}, 0);
const getSCAvailablePVs = (pvsData, sc) => pvsData.filter((pv) => getPVStorageClass(pv) === sc && pv.status.phase === status.AVAILABLE);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/osd-size-dropdown.tsx":
/*!**********************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/osd-size-dropdown.tsx ***!
  \**********************************************************************/
/*! exports provided: OSD_CAPACITY_SIZES, OSDSizeDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSD_CAPACITY_SIZES", function() { return OSD_CAPACITY_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSDSizeDropdown", function() { return OSDSizeDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const OSD_CAPACITY_SIZES = {
    '512Gi': {
        scale: 'SmallScale',
        size: 0.5,
        title: '0.5 TiB',
    },
    '2Ti': {
        scale: 'Standard',
        size: 2,
        title: '2 TiB',
    },
    '4Ti': {
        scale: 'LargeScale',
        size: 4,
        title: '4 TiB',
    },
};
const DropdownOptionsItem = ({ title, scale }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item__resource-name" },
        title,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-resource-item__resource-api text-muted co-truncate show co-nowrap small" }, scale)))));
const OSDSizeDropdown = ({ selectedKey, onChange, className, }) => {
    const dropdownOptionsKeys = Object.keys(OSD_CAPACITY_SIZES);
    const dropdownOptions = dropdownOptionsKeys.reduce((dropdownObject, key) => {
        dropdownObject[key] = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DropdownOptionsItem, { title: OSD_CAPACITY_SIZES[key].title, scale: OSD_CAPACITY_SIZES[key].scale }));
        return dropdownObject;
    }, {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], { id: "ocs-service-capacity-dropdown", items: dropdownOptions, title: OSD_CAPACITY_SIZES[selectedKey].title, onChange: onChange, selectedKey: selectedKey, noSelection: true, buttonClassName: className }));
};


/***/ })

}]);
//# sourceMappingURL=ceph-storage-add-capacity-modal~install-page-b7287fe005c0c01c6496.js.map