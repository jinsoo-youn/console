(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-details-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/details-card.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/details-card.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailItem */ "./packages/console-shared/src/components/dashboard/details-card/DetailItem.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailsBody */ "./packages/console-shared/src/components/dashboard/details-card/DetailsBody.tsx");
/* harmony import */ var _console_internal_models_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/models/index */ "./public/models/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager_src_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/module/k8s/k8s */ "./public/module/k8s/k8s.ts");
/* harmony import */ var _console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/internal/components/utils/k8s-get-hook */ "./public/components/utils/k8s-get-hook.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");

















const cephClusterResource = {
    kind: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_15__["CephClusterModel"]),
    namespaced: false,
    isList: true,
    prop: 'ceph',
};
const SubscriptionResource = {
    kind: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(_console_operator_lifecycle_manager_src_models__WEBPACK_IMPORTED_MODULE_11__["SubscriptionModel"]),
    namespaced: false,
    prop: 'subscription',
    isList: true,
};
const DetailsCard = ({ watchK8sResource, stopWatchK8sResource, resources, }) => {
    const [infrastructure, infrastructureLoaded, infrastructureError] = Object(_console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_14__["useK8sGet"])(_console_internal_models_index__WEBPACK_IMPORTED_MODULE_10__["InfrastructureModel"], 'cluster');
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(cephClusterResource);
        watchK8sResource(SubscriptionResource);
        return () => {
            stopWatchK8sResource(cephClusterResource);
            stopWatchK8sResource(SubscriptionResource);
        };
    }, [watchK8sResource, stopWatchK8sResource]);
    const infrastructurePlatform = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getInfrastructurePlatform"])(infrastructure);
    const cephCluster = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources, 'ceph');
    const cephClusterLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](cephCluster, 'loaded', false);
    const cephClusterData = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](cephCluster, 'data');
    const cephClusterName = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_12__["getName"])(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](cephClusterData, 0));
    const subscription = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources, 'subscription');
    const subscriptionLoaded = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'loaded');
    const ocsVersion = Object(_selectors__WEBPACK_IMPORTED_MODULE_16__["getOCSVersion"])(subscription);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Details")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_7__["default"], { key: "service_name", title: "Service Name", isLoading: false, error: false }, "OpenShift Container Storage (OCS)"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_7__["default"], { key: "cluster_name", title: "Cluster Name", error: cephClusterLoaded && !cephClusterName, isLoading: !cephClusterLoaded }, cephClusterName),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_7__["default"], { key: "provider", title: "Provider", error: !!infrastructureError || (infrastructure && !infrastructurePlatform), isLoading: !infrastructureLoaded }, infrastructurePlatform),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_7__["default"], { title: "Mode" }, "Internal"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_7__["default"], { key: "version", title: "Version", isLoading: !subscriptionLoaded, error: subscriptionLoaded && !ocsVersion }, ocsVersion)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_8__["withDashboardResources"])(DetailsCard));


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

/***/ "./public/components/utils/k8s-get-hook.ts":
/*!*************************************************!*\
  !*** ./public/components/utils/k8s-get-hook.ts ***!
  \*************************************************/
/*! exports provided: useK8sGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useK8sGet", function() { return useK8sGet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const useK8sGet = (kind, name, namespace, opts) => {
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoadError(null);
                setLoaded(false);
                setData(null);
                const resource = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(kind, name, namespace, opts);
                setData(resource);
            }
            catch (error) {
                setLoadError(error);
            }
            finally {
                setLoaded(true);
            }
        });
        fetch();
    }, [kind, name, namespace, opts]);
    return [data, loaded, loadError];
};


/***/ })

}]);
//# sourceMappingURL=ceph-storage-details-card-ea7b7449ad759d491908.js.map