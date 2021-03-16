(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-activity-card~ceph-storage-add-capacity-modal~ceph-storage-clone-pvc-modal~ceph-storage~bd4f5407"],{

/***/ "./packages/ceph-storage-plugin/src/constants/queries.ts":
/*!***************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/constants/queries.ts ***!
  \***************************************************************/
/*! exports provided: StorageDashboardQuery, INDEPENDENT_UTILIZATION_QUERIES, STORAGE_HEALTH_QUERIES, DATA_RESILIENCY_QUERY, UTILIZATION_QUERY, TOTAL_QUERY, CAPACITY_USAGE_QUERIES, CAPACITY_BREAKDOWN_QUERIES, breakdownQueryMap, breakdownIndependentQueryMap, utilizationPopoverQueryMap, getPVCUsedCapacityQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageDashboardQuery", function() { return StorageDashboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEPENDENT_UTILIZATION_QUERIES", function() { return INDEPENDENT_UTILIZATION_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_HEALTH_QUERIES", function() { return STORAGE_HEALTH_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_RESILIENCY_QUERY", function() { return DATA_RESILIENCY_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTILIZATION_QUERY", function() { return UTILIZATION_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_QUERY", function() { return TOTAL_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPACITY_USAGE_QUERIES", function() { return CAPACITY_USAGE_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPACITY_BREAKDOWN_QUERIES", function() { return CAPACITY_BREAKDOWN_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakdownQueryMap", function() { return breakdownQueryMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakdownIndependentQueryMap", function() { return breakdownIndependentQueryMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilizationPopoverQueryMap", function() { return utilizationPopoverQueryMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPVCUsedCapacityQuery", function() { return getPVCUsedCapacityQuery; });
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./packages/ceph-storage-plugin/src/constants/index.ts");


var StorageDashboardQuery;
(function (StorageDashboardQuery) {
    StorageDashboardQuery["CEPH_STATUS_QUERY"] = "CEPH_STATUS_QUERY";
    StorageDashboardQuery["CEPH_PG_CLEAN_AND_ACTIVE_QUERY"] = "CEPH_PG_CLEAN_AND_ACTIVE_QUERY";
    StorageDashboardQuery["CEPH_PG_TOTAL_QUERY"] = "CEPH_PG_TOTAL_QUERY";
    StorageDashboardQuery["UTILIZATION_IOPS_QUERY"] = "UTILIZATION_IOPS_QUERY";
    StorageDashboardQuery["UTILIZATION_LATENCY_QUERY"] = "UTILIZATION_LATENCY_QUERY";
    StorageDashboardQuery["UTILIZATION_THROUGHPUT_QUERY"] = "UTILIZATION_THROUGHPUT_QUERY";
    StorageDashboardQuery["UTILIZATION_RECOVERY_RATE_QUERY"] = "UTILIZATION_RECOVERY_RATE_QUERY";
    StorageDashboardQuery["CEPH_CAPACITY_TOTAL"] = "CAPACITY_TOTAL";
    StorageDashboardQuery["CEPH_CAPACITY_USED"] = "CAPACITY_USED";
    StorageDashboardQuery["PODS_TOTAL_USED"] = "PODS_TOTAL_USED";
    StorageDashboardQuery["PODS_BY_USED"] = "PODS_BY_USED";
    StorageDashboardQuery["PROJECTS_TOTAL_USED"] = "PROJECTS_TOTAL_USED";
    StorageDashboardQuery["PROJECTS_BY_USED"] = "PROJECTS_BY_USED";
    StorageDashboardQuery["STORAGE_CLASSES_TOTAL_USED"] = "STORAGE_CLASSES_TOTAL_USED";
    StorageDashboardQuery["STORAGE_CLASSES_BY_USED"] = "STORAGE_CLASSES_BY_USED";
    StorageDashboardQuery["STORAGE_CEPH_CAPACITY_REQUESTED_QUERY"] = "STORAGE_CEPH_CAPACITY_REQUESTED_QUERY";
    StorageDashboardQuery["STORAGE_CEPH_CAPACITY_USED_QUERY"] = "STORAGE_CEPH_CAPACITY_USED_QUERY";
    StorageDashboardQuery["RESILIENCY_PROGRESS"] = "RESILIENCY_PROGRESS";
    StorageDashboardQuery["NODES_BY_USED"] = "NODES_BY_USED";
    StorageDashboardQuery["USED_CAPACITY"] = "USED_CAPACITY";
    StorageDashboardQuery["REQUESTED_CAPACITY"] = "REQUESTED_CAPACITY";
    StorageDashboardQuery["CEPH_CAPACITY_AVAILABLE"] = "CEPH_CAPACITY_AVAILABLE";
})(StorageDashboardQuery || (StorageDashboardQuery = {}));
const INDEPENDENT_UTILIZATION_QUERIES = {
    [StorageDashboardQuery.REQUESTED_CAPACITY]: 'sum((kube_persistentvolumeclaim_resource_requests_storage_bytes * on (namespace,persistentvolumeclaim) group_right() kube_pod_spec_volumes_persistentvolumeclaims_info) * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"}))',
    [StorageDashboardQuery.USED_CAPACITY]: 'sum((kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_right() kube_pod_spec_volumes_persistentvolumeclaims_info) * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"}))',
};
const STORAGE_HEALTH_QUERIES = {
    [StorageDashboardQuery.CEPH_STATUS_QUERY]: 'ceph_health_status',
};
const DATA_RESILIENCY_QUERY = {
    [StorageDashboardQuery.RESILIENCY_PROGRESS]: '(ceph_pg_clean and ceph_pg_active)/ceph_pg_total',
};
const UTILIZATION_QUERY = {
    [StorageDashboardQuery.CEPH_CAPACITY_USED]: 'sum(kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)"}))',
    [StorageDashboardQuery.UTILIZATION_IOPS_QUERY]: '(sum(rate(ceph_pool_wr[1m])) + sum(rate(ceph_pool_rd[1m])))',
    [StorageDashboardQuery.UTILIZATION_LATENCY_QUERY]: '(quantile(.95,(cluster:ceph_disk_latency:join_ceph_node_disk_irate1m)))',
    [StorageDashboardQuery.UTILIZATION_THROUGHPUT_QUERY]: '(sum(rate(ceph_pool_wr_bytes[1m]) + rate(ceph_pool_rd_bytes[1m])))',
    [StorageDashboardQuery.UTILIZATION_RECOVERY_RATE_QUERY]: '(sum(ceph_pool_recovering_bytes_per_sec))',
};
const TOTAL_QUERY = {
    [StorageDashboardQuery.CEPH_CAPACITY_TOTAL]: 'ceph_cluster_total_bytes',
};
const CAPACITY_USAGE_QUERIES = {
    [StorageDashboardQuery.CEPH_CAPACITY_TOTAL]: 'ceph_cluster_total_bytes',
    [StorageDashboardQuery.CEPH_CAPACITY_USED]: 'ceph_cluster_total_used_bytes',
    [StorageDashboardQuery.STORAGE_CEPH_CAPACITY_REQUESTED_QUERY]: 'sum((kube_persistentvolumeclaim_resource_requests_storage_bytes * on (namespace,persistentvolumeclaim) group_right() kube_pod_spec_volumes_persistentvolumeclaims_info) * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"}))',
    [StorageDashboardQuery.STORAGE_CEPH_CAPACITY_USED_QUERY]: 'sum((kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_right() kube_pod_spec_volumes_persistentvolumeclaims_info) * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"}))',
};
const CAPACITY_BREAKDOWN_QUERIES = {
    [StorageDashboardQuery.PROJECTS_TOTAL_USED]: 'sum(sum(kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"})) by (namespace))',
    [StorageDashboardQuery.PROJECTS_BY_USED]: 'sum(kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"})) by (namespace)',
    [StorageDashboardQuery.STORAGE_CLASSES_TOTAL_USED]: 'sum(sum(kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass) group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"})) by (storageclass, provisioner))',
    [StorageDashboardQuery.STORAGE_CLASSES_BY_USED]: 'sum(kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass) group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"})) by (storageclass, provisioner)',
    [StorageDashboardQuery.PODS_TOTAL_USED]: 'sum(sum((kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_right() kube_pod_spec_volumes_persistentvolumeclaims_info) * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"})) by (pod,namespace))',
    [StorageDashboardQuery.PODS_BY_USED]: 'sum((kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_right() kube_pod_spec_volumes_persistentvolumeclaims_info) * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)|(ceph.rook.io/block)"})) by (pod,namespace)',
    [StorageDashboardQuery.CEPH_CAPACITY_TOTAL]: 'ceph_cluster_total_bytes',
    [StorageDashboardQuery.CEPH_CAPACITY_USED]: 'sum(kubelet_volume_stats_used_bytes * on (namespace,persistentvolumeclaim) group_left(storageclass, provisioner) (kube_persistentvolumeclaim_info * on (storageclass)  group_left(provisioner) kube_storageclass_info {provisioner=~"(.*rbd.csi.ceph.com)|(.*cephfs.csi.ceph.com)"}))',
    [StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE]: 'max(ceph_pool_max_avail * on (pool_id) group_left(name)ceph_pool_metadata{name=~"(.*file.*)|(.*block.*)"})',
};
const breakdownQueryMap = {
    [___WEBPACK_IMPORTED_MODULE_1__["PROJECTS"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"],
        metric: 'namespace',
        queries: {
            [StorageDashboardQuery.PROJECTS_BY_USED]: `(topk(6,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PROJECTS_BY_USED]})))`,
            [StorageDashboardQuery.PROJECTS_TOTAL_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PROJECTS_TOTAL_USED],
            [StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE],
            [StorageDashboardQuery.CEPH_CAPACITY_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.CEPH_CAPACITY_USED],
        },
    },
    [___WEBPACK_IMPORTED_MODULE_1__["STORAGE_CLASSES"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["StorageClassModel"],
        metric: 'storageclass',
        queries: {
            [StorageDashboardQuery.STORAGE_CLASSES_BY_USED]: `(topk(6,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.STORAGE_CLASSES_BY_USED]})))`,
            [StorageDashboardQuery.STORAGE_CLASSES_TOTAL_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.STORAGE_CLASSES_TOTAL_USED],
            [StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE],
            [StorageDashboardQuery.CEPH_CAPACITY_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.CEPH_CAPACITY_USED],
        },
    },
    [___WEBPACK_IMPORTED_MODULE_1__["PODS"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["PodModel"],
        metric: 'pod',
        queries: {
            [StorageDashboardQuery.PODS_BY_USED]: `(topk(6,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PODS_BY_USED]})))`,
            [StorageDashboardQuery.PODS_TOTAL_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PODS_TOTAL_USED],
            [StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.CEPH_CAPACITY_AVAILABLE],
            [StorageDashboardQuery.CEPH_CAPACITY_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.CEPH_CAPACITY_USED],
        },
    },
};
const breakdownIndependentQueryMap = {
    [___WEBPACK_IMPORTED_MODULE_1__["PROJECTS"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"],
        metric: 'namespace',
        queries: {
            [StorageDashboardQuery.PROJECTS_BY_USED]: `(topk(6,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PROJECTS_BY_USED]})))`,
            [StorageDashboardQuery.PROJECTS_TOTAL_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PROJECTS_TOTAL_USED],
        },
    },
    [___WEBPACK_IMPORTED_MODULE_1__["STORAGE_CLASSES"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["StorageClassModel"],
        metric: 'storageclass',
        queries: {
            [StorageDashboardQuery.STORAGE_CLASSES_BY_USED]: `(topk(6,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.STORAGE_CLASSES_BY_USED]})))`,
            [StorageDashboardQuery.STORAGE_CLASSES_TOTAL_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.STORAGE_CLASSES_TOTAL_USED],
        },
    },
    [___WEBPACK_IMPORTED_MODULE_1__["PODS"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["PodModel"],
        metric: 'pod',
        queries: {
            [StorageDashboardQuery.PODS_BY_USED]: `(topk(6,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PODS_BY_USED]})))`,
            [StorageDashboardQuery.PODS_TOTAL_USED]: CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PODS_TOTAL_USED],
        },
    },
};
const utilizationPopoverQueryMap = [
    {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"],
        metric: 'namespace',
        query: `(sort_desc(topk(25,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PROJECTS_BY_USED]}))))`,
    },
    {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["StorageClassModel"],
        metric: 'storageclass',
        query: `(sort_desc(topk(25,(${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.STORAGE_CLASSES_BY_USED]}))))`,
    },
    {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["PodModel"],
        metric: 'pod',
        query: `(sort_desc(topk(25, (${CAPACITY_BREAKDOWN_QUERIES[StorageDashboardQuery.PODS_BY_USED]}))))`,
    },
];
const getPVCUsedCapacityQuery = (pvcName) => `kubelet_volume_stats_used_bytes{persistentvolumeclaim='${pvcName}'}`;


/***/ })

}]);
//# sourceMappingURL=ceph-storage-activity-card~ceph-storage-add-capacity-modal~ceph-storage-clone-pvc-modal~ceph-storage~bd4f5407-e37ed3e59f977c7f8a5d.js.map