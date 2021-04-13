(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-service-capacity-breakdown-card"],{

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

/***/ "./packages/noobaa-storage-plugin/src/components/capacity-breakdown/capacity-breakdown-card.scss":
/*!*******************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/capacity-breakdown/capacity-breakdown-card.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/capacity-breakdown/capacity-breakdown-card.tsx":
/*!******************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/capacity-breakdown/capacity-breakdown-card.tsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/graphs/utils */ "./public/components/graphs/utils.ts");
/* harmony import */ var _console_operator_lifecycle_manager_src__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_breakdown_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-header */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-header.tsx");
/* harmony import */ var _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_breakdown_body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-body */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/breakdown-body.tsx");
/* harmony import */ var _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/utils.tsx");
/* harmony import */ var _console_ceph_storage_plugin_src_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");
/* harmony import */ var _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_consts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/consts */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/breakdown-card/consts.ts");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/index */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../queries */ "./packages/noobaa-storage-plugin/src/queries.ts");
/* harmony import */ var _capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./capacity-breakdown-card.scss */ "./packages/noobaa-storage-plugin/src/components/capacity-breakdown/capacity-breakdown-card.scss");
/* harmony import */ var _capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_capacity_breakdown_card_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");




















const SubscriptionResource = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_console_operator_lifecycle_manager_src__WEBPACK_IMPORTED_MODULE_10__["SubscriptionModel"]),
    namespaced: false,
    prop: 'subscription',
    isList: true,
};
const keys = Object.keys(_queries__WEBPACK_IMPORTED_MODULE_17__["breakdownQueryMap"]);
const dropdownOptions = lodash__WEBPACK_IMPORTED_MODULE_1__["zipObject"](keys, keys);
const BreakdownCard = ({ watchK8sResource, stopWatchK8sResource, watchPrometheus, stopWatchPrometheusQuery, prometheusResults, resources, }) => {
    const [metricType, setMetricType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_constants_index__WEBPACK_IMPORTED_MODULE_16__["PROJECTS"]);
    const { queries, model, metric } = _queries__WEBPACK_IMPORTED_MODULE_17__["breakdownQueryMap"][metricType];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (model.kind === _models__WEBPACK_IMPORTED_MODULE_19__["NooBaaBucketClassModel"].kind) {
            watchK8sResource(SubscriptionResource);
            return () => {
                stopWatchK8sResource(SubscriptionResource);
            };
        }
        return () => { };
    }, [watchK8sResource, stopWatchK8sResource, model]);
    const queryKeys = Object.keys(queries);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        queryKeys.forEach((q) => watchPrometheus(queries[q]));
        return () => {
            queryKeys.forEach((q) => stopWatchPrometheusQuery(queries[q]));
        };
    }, [watchPrometheus, stopWatchPrometheusQuery, metricType, queryKeys, queries]);
    const subscription = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources, 'subscription');
    const ocsVersion = Object(_console_ceph_storage_plugin_src_selectors__WEBPACK_IMPORTED_MODULE_14__["getOCSVersion"])(subscription);
    const results = queryKeys.map((key) => prometheusResults.getIn([queries[key], 'data']));
    const queriesLoadError = queryKeys.some((q) => prometheusResults.getIn([queries[q], 'loadError']));
    const queriesDataLoaded = queryKeys.some((q) => !prometheusResults.getIn([queries[q], 'data']));
    const humanize = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeBinaryBytes"];
    const top5MetricsData = Object(_console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_9__["getInstantVectorStats"])(results[0], metric);
    const top5MetricsStats = Object(_console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_utils__WEBPACK_IMPORTED_MODULE_13__["getStackChartStats"])(top5MetricsData, humanize);
    const objectUsed = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](results[1], 'data.result[0].value[1]');
    const link = `topk(20, (${_queries__WEBPACK_IMPORTED_MODULE_17__["CAPACITY_BREAKDOWN_QUERIES"][queryKeys[0]]}))`;
    const ind = top5MetricsStats.findIndex((v) => v.name === 'Others');
    if (ind !== -1) {
        top5MetricsStats[ind].name = _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_consts__WEBPACK_IMPORTED_MODULE_15__["CLUSTERWIDE"];
        top5MetricsStats[ind].link = _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_consts__WEBPACK_IMPORTED_MODULE_15__["CLUSTERWIDE_TOOLTIP"];
        top5MetricsStats[ind].color = _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_consts__WEBPACK_IMPORTED_MODULE_15__["Colors"].OTHER;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Capacity breakdown"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-capacity-breakdown-card__header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_breakdown_header__WEBPACK_IMPORTED_MODULE_11__["HeaderPrometheusViewLink"], { link: link }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { items: dropdownOptions, onChange: setMetricType, selectedKey: metricType, title: metricType }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_8__["default"], { classname: "nb-capacity-breakdown-card__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_breakdown_card_breakdown_body__WEBPACK_IMPORTED_MODULE_12__["BreakdownCardBody"], { isLoading: queriesDataLoaded, hasLoadError: queriesLoadError, top5MetricsStats: top5MetricsStats, capacityUsed: objectUsed, metricTotal: objectUsed, metricModel: model, humanize: humanize, ocsVersion: ocsVersion }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_4__["withDashboardResources"])(BreakdownCard));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/constants/index.ts":
/*!***************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/constants/index.ts ***!
  \***************************************************************/
/*! exports provided: ACCOUNTS, PROVIDERS, BY_IOPS, BY_LOGICAL_USAGE, BY_PHYSICAL_VS_LOGICAL_USAGE, BY_EGRESS, PROJECTS, BUCKET_CLASS, OCS_NS, NB_PROVISIONER, CHART_LABELS, BC_PROVIDERS, PROVIDERS_NOOBAA_MAP, BUCKET_LABEL_NOOBAA_MAP, NOOBAA_TYPE_MAP, AWS_REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNTS", function() { return ACCOUNTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDERS", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_IOPS", function() { return BY_IOPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_LOGICAL_USAGE", function() { return BY_LOGICAL_USAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_PHYSICAL_VS_LOGICAL_USAGE", function() { return BY_PHYSICAL_VS_LOGICAL_USAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_EGRESS", function() { return BY_EGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_CLASS", function() { return BUCKET_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCS_NS", function() { return OCS_NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_PROVISIONER", function() { return NB_PROVISIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_LABELS", function() { return CHART_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BC_PROVIDERS", function() { return BC_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDERS_NOOBAA_MAP", function() { return PROVIDERS_NOOBAA_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_LABEL_NOOBAA_MAP", function() { return BUCKET_LABEL_NOOBAA_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOOBAA_TYPE_MAP", function() { return NOOBAA_TYPE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_REGIONS", function() { return AWS_REGIONS; });
const ACCOUNTS = 'Accounts';
const PROVIDERS = 'Providers';
const BY_IOPS = 'I/O Operations';
const BY_LOGICAL_USAGE = 'Logical Used Capacity';
const BY_PHYSICAL_VS_LOGICAL_USAGE = 'Physical Vs Logical Usage';
const BY_EGRESS = 'Egress';
const PROJECTS = 'Projects';
const BUCKET_CLASS = 'Bucket Class';
const OCS_NS = 'openshift-storage';
const NB_PROVISIONER = 'noobaa.io/obc';
const CHART_LABELS = {
    [BY_LOGICAL_USAGE]: 'Logical used capacity per account',
    [BY_PHYSICAL_VS_LOGICAL_USAGE]: 'Physical vs. Logical used capacity',
    [BY_EGRESS]: 'Egress Per Provider',
    [BY_IOPS]: 'I/O Operations count',
};
var BC_PROVIDERS;
(function (BC_PROVIDERS) {
    BC_PROVIDERS["AWS"] = "AWS S3";
    BC_PROVIDERS["S3"] = "S3 Compatible";
    BC_PROVIDERS["PVC"] = "PVC";
    BC_PROVIDERS["GCP"] = "Google cloud storage";
    BC_PROVIDERS["AZURE"] = "Azure Blob";
    BC_PROVIDERS["IBM"] = "IBM COS";
})(BC_PROVIDERS || (BC_PROVIDERS = {}));
const PROVIDERS_NOOBAA_MAP = {
    [BC_PROVIDERS.AWS]: 'awsS3',
    [BC_PROVIDERS.S3]: 's3Compatible',
    [BC_PROVIDERS.AZURE]: 'azureBlob',
    [BC_PROVIDERS.GCP]: 'googleCloudStorage',
    [BC_PROVIDERS.PVC]: 'pvPool',
    [BC_PROVIDERS.IBM]: 'ibmCos',
};
const BUCKET_LABEL_NOOBAA_MAP = {
    [BC_PROVIDERS.AWS]: 'targetBucket',
    [BC_PROVIDERS.S3]: 'targetBucket',
    [BC_PROVIDERS.AZURE]: 'targetBlobContainer',
    [BC_PROVIDERS.GCP]: 'targetBucket',
    [BC_PROVIDERS.IBM]: 'targetBucket',
};
const NOOBAA_TYPE_MAP = {
    [BC_PROVIDERS.AWS]: 'aws-s3',
    [BC_PROVIDERS.S3]: 's3-compatible',
    [BC_PROVIDERS.AZURE]: 'azure-blob',
    [BC_PROVIDERS.GCP]: 'google-cloud-storage',
    [BC_PROVIDERS.PVC]: 'pv-pool',
    [BC_PROVIDERS.IBM]: 'ibm-cos',
};
const AWS_REGIONS = [
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'ca-central-1',
    'eu-central-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-north-1',
    'ap-east-1',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-south-1',
    'me-south-1',
    'sa-east-1',
];


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/queries.ts":
/*!*******************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/queries.ts ***!
  \*******************************************************/
/*! exports provided: ObjectDashboardQuery, DATA_RESILIENCE_QUERIES, ObjectDataReductionQueries, StatusCardQueries, CAPACITY_BREAKDOWN_QUERIES, breakdownQueryMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDashboardQuery", function() { return ObjectDashboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_RESILIENCE_QUERIES", function() { return DATA_RESILIENCE_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectDataReductionQueries", function() { return ObjectDataReductionQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCardQueries", function() { return StatusCardQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPACITY_BREAKDOWN_QUERIES", function() { return CAPACITY_BREAKDOWN_QUERIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakdownQueryMap", function() { return breakdownQueryMap; });
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./packages/noobaa-storage-plugin/src/models.ts");



var ObjectDashboardQuery;
(function (ObjectDashboardQuery) {
    ObjectDashboardQuery["CAPACITY_USAGE_PROJECT_QUERY"] = "CAPACITY_USAGE_PROJECT_QUERY";
    ObjectDashboardQuery["CAPACITY_USAGE_BUCKET_CLASS_QUERY"] = "CAPACITY_USAGE_BUCKET_CLASS_QUERY";
    ObjectDashboardQuery["PROJECTS_TOTAL_USED"] = "PROJECTS_TOTAL_USED";
    ObjectDashboardQuery["PROJECTS_BY_USED"] = "PROJECTS_BY_USED";
    ObjectDashboardQuery["BUCKETS_TOTAL_USED"] = "BUCKETS_TOTAL_USED";
    ObjectDashboardQuery["BUCKETS_BY_USED"] = "BUCKETS_BY_USED";
    ObjectDashboardQuery["NOOBAA_USED"] = "NOOBAA_USED";
    ObjectDashboardQuery["NOOBAA_TOTAL"] = "NOOBAA_TOTAL";
    ObjectDashboardQuery["PROJECTS_OTHERS"] = "PROJECTS_OTHERS";
    ObjectDashboardQuery["BUCKETS_BY_OTHERS"] = "BUCKETS_BY_OTHERS";
    ObjectDashboardQuery["PROJECT_CAPACITY_USAGE_QUERY"] = "PROJECT_CAPACITY_USAGE_QUERY";
    ObjectDashboardQuery["BUCKET_CLASS_CAPACITY_USAGE_QUERY"] = "BUCKET_CLASS_CAPACITY_USAGE_QUERY";
    ObjectDashboardQuery["PROJECTS_QUERY"] = "PROJECTS_QUERY";
    ObjectDashboardQuery["BUCKETS_QUERY"] = "BUCKETS_QUERY";
})(ObjectDashboardQuery || (ObjectDashboardQuery = {}));
var DATA_RESILIENCE_QUERIES;
(function (DATA_RESILIENCE_QUERIES) {
    DATA_RESILIENCE_QUERIES["REBUILD_PROGRESS_QUERY"] = "NooBaa_rebuild_progress/100";
    DATA_RESILIENCE_QUERIES["REBUILD_TIME_QUERY"] = "NooBaa_rebuild_time";
})(DATA_RESILIENCE_QUERIES || (DATA_RESILIENCE_QUERIES = {}));
var ObjectDataReductionQueries;
(function (ObjectDataReductionQueries) {
    ObjectDataReductionQueries["EFFICIENCY_QUERY"] = "NooBaa_reduction_ratio";
    ObjectDataReductionQueries["SAVINGS_QUERY"] = "(NooBaa_object_savings_logical_size - NooBaa_object_savings_physical_size)";
    ObjectDataReductionQueries["LOGICAL_SAVINGS_QUERY"] = "NooBaa_object_savings_logical_size";
})(ObjectDataReductionQueries || (ObjectDataReductionQueries = {}));
var StatusCardQueries;
(function (StatusCardQueries) {
    StatusCardQueries["BUCKETS_COUNT"] = "NooBaa_num_buckets";
    StatusCardQueries["UNHEALTHY_BUCKETS"] = "NooBaa_num_unhealthy_buckets";
    StatusCardQueries["POOLS_COUNT"] = "NooBaa_num_pools";
    StatusCardQueries["UNHEALTHY_POOLS"] = "NooBaa_num_unhealthy_pools";
})(StatusCardQueries || (StatusCardQueries = {}));
const CAPACITY_BREAKDOWN_QUERIES = {
    [ObjectDashboardQuery.PROJECTS_BY_USED]: 'NooBaa_projects_capacity_usage',
    [ObjectDashboardQuery.BUCKETS_BY_USED]: 'NooBaa_bucket_class_capacity_usage',
};
const breakdownQueryMap = {
    [_constants__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"]]: {
        model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"],
        metric: 'project',
        queries: {
            [ObjectDashboardQuery.PROJECTS_BY_USED]: `sort_desc(topk(5, ${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.PROJECTS_BY_USED]}))`,
            [ObjectDashboardQuery.PROJECTS_TOTAL_USED]: `sum(${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.PROJECTS_BY_USED]})`,
        },
    },
    [_constants__WEBPACK_IMPORTED_MODULE_1__["BUCKET_CLASS"]]: {
        model: _models__WEBPACK_IMPORTED_MODULE_2__["NooBaaBucketClassModel"],
        metric: 'bucket_class',
        queries: {
            [ObjectDashboardQuery.BUCKETS_BY_USED]: `sort_desc(topk(5, ${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.BUCKETS_BY_USED]}))`,
            [ObjectDashboardQuery.BUCKETS_TOTAL_USED]: `sum(${CAPACITY_BREAKDOWN_QUERIES[ObjectDashboardQuery.BUCKETS_BY_USED]})`,
        },
    },
};


/***/ })

}]);
//# sourceMappingURL=object-service-capacity-breakdown-card-788067fbc82bbc03f284.js.map