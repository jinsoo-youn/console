(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-inventory-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/inventory-card.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/inventory-card.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/utils */ "./packages/console-shared/src/components/dashboard/inventory-card/utils.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/InventoryItem */ "./packages/console-shared/src/components/dashboard/inventory-card/InventoryItem.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");











const k8sResources = [
    {
        isList: true,
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PersistentVolumeModel"].kind,
        prop: 'pvs',
    },
    {
        isList: true,
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["NodeModel"].kind,
        prop: 'nodes',
    },
    {
        isList: true,
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PersistentVolumeClaimModel"].kind,
        prop: 'pvcs',
    },
    {
        isList: true,
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["StorageClassModel"].kind,
        prop: 'sc',
    },
];
const InventoryCard = ({ watchK8sResource, stopWatchK8sResource, resources, }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        k8sResources.forEach((r) => watchK8sResource(r));
        return () => {
            k8sResources.forEach((r) => stopWatchK8sResource(r));
        };
    }, [watchK8sResource, stopWatchK8sResource]);
    const nodesLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.nodes, 'loaded');
    const nodesLoadError = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.nodes, 'loadError');
    const nodesData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.nodes, 'data', []);
    const pvcsLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.pvcs, 'loaded');
    const pvcsLoadError = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.pvcs, 'loadError');
    const pvcsData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.pvcs, 'data', []);
    const pvsLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.pvs, 'loaded');
    const pvsLoadError = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.pvs, 'loadError');
    const pvsData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.pvs, 'data', []);
    const scData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.sc, 'data', []);
    const filteredCephSC = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getCephSC"])(scData);
    const filteredSCNames = filteredCephSC.map((sc) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](sc, 'metadata.name'));
    const ocsNodesHref = `/search?kind=${_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["NodeModel"].kind}&q=${_selectors__WEBPACK_IMPORTED_MODULE_10__["cephStorageLabel"]}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Inventory")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__["ResourceInventoryItem"], { isLoading: !nodesLoaded, error: !!nodesLoadError, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["NodeModel"], resources: Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getCephNodes"])(nodesData), mapper: _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_7__["getNodeStatusGroups"], basePath: ocsNodesHref }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__["ResourceInventoryItem"], { isLoading: !pvcsLoaded, error: !!pvcsLoadError, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PersistentVolumeClaimModel"], useAbbr: true, resources: Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getCephPVCs"])(filteredSCNames, pvcsData, pvsData), mapper: _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_7__["getPVCStatusGroups"], showLink: false }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__["ResourceInventoryItem"], { isLoading: !pvsLoaded, error: !!pvsLoadError, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PersistentVolumeModel"], useAbbr: true, resources: Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getCephPVs"])(pvsData), mapper: _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_7__["getPVStatusGroups"], showLink: false }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__["withDashboardResources"])(InventoryCard));


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


/***/ })

}]);
//# sourceMappingURL=ceph-storage-inventory-card-72a2ecb5b943bc85967b.js.map