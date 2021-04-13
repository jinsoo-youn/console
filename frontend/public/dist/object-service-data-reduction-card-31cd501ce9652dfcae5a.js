(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-service-data-reduction-card"],{

/***/ "./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card-item.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card-item.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: EfficiencyItem, SavingsItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfficiencyItem", function() { return EfficiencyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsItem", function() { return SavingsItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const ItemBody = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ title, stats, infoText, isLoading, error }) => {
    let status;
    if (isLoading) {
        status = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text nb-object-data-reduction__item-body--loading" });
    }
    else if (error || !stats) {
        status = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-dashboard-text--small text-muted" }, "Not available");
    }
    else {
        status = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "nb-object-data-reduction-card__row-status-item-text" }, stats);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-inventory-card__item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-object-data-reduction-card__row-title" }, title),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-object-data-reduction-card__row-status-item" },
            status,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["FieldLevelHelp"], null, infoText))));
});
const EfficiencyItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ efficiency, isLoading, error }) => {
    const infoText = 'Efficiency ratio refers to the deduplication and compression process effectiveness.';
    let stats = efficiency;
    if (efficiency) {
        const formattedEfficiency = +Number(efficiency).toFixed(1);
        stats = formattedEfficiency === 0 ? '1:1' : `${formattedEfficiency}:1`;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ItemBody, { title: "Efficiency Ratio", stats: stats, infoText: infoText, isLoading: isLoading, error: error }));
});
const SavingsItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ savings, logicalSize, isLoading, error }) => {
    const infoText = 'Savings shows the uncompressed and non-deduped data that would have been stored without those techniques';
    let stats = null;
    const savingsValue = Number(savings);
    if (savings && logicalSize) {
        const savedBytes = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])(savingsValue).string;
        const savingsPercentage = `${savedBytes} (${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizePercentage"])((100 * savingsValue) / Number(logicalSize)).string})`;
        stats = savingsValue <= 0 ? 'No Savings' : savingsPercentage;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ItemBody, { title: "Savings", stats: stats, infoText: infoText, isLoading: isLoading, error: error }));
});


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card.scss":
/*!******************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../queries */ "./packages/noobaa-storage-plugin/src/queries.ts");
/* harmony import */ var _object_data_reduction_card_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object-data-reduction-card-item */ "./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card-item.tsx");
/* harmony import */ var _object_data_reduction_card_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object-data-reduction-card.scss */ "./packages/noobaa-storage-plugin/src/components/object-data-reduction-card/object-data-reduction-card.scss");
/* harmony import */ var _object_data_reduction_card_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_object_data_reduction_card_scss__WEBPACK_IMPORTED_MODULE_9__);










const DataReductionCard = ({ watchPrometheus, stopWatchPrometheusQuery, prometheusResults, }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object.keys(_queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"]).forEach((key) => watchPrometheus(_queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"][key]));
        return () => Object.keys(_queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"]).forEach((key) => stopWatchPrometheusQuery(_queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"][key]));
    }, [watchPrometheus, stopWatchPrometheusQuery]);
    const efficiencyQueryResult = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"].EFFICIENCY_QUERY,
        'data',
    ]);
    const efficiencyQueryResultError = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"].EFFICIENCY_QUERY,
        'loadError',
    ]);
    const savingsQueryResult = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"].SAVINGS_QUERY,
        'data',
    ]);
    const savingsQueryResultError = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"].SAVINGS_QUERY,
        'loadError',
    ]);
    const logicalSavingsQueryResult = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"].LOGICAL_SAVINGS_QUERY,
        'data',
    ]);
    const logicalSavingsQueryResultError = prometheusResults.getIn([
        _queries__WEBPACK_IMPORTED_MODULE_7__["ObjectDataReductionQueries"].LOGICAL_SAVINGS_QUERY,
        'loadError',
    ]);
    const efficiency = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getGaugeValue"])(efficiencyQueryResult);
    const savings = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getGaugeValue"])(savingsQueryResult);
    const logicalSize = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getGaugeValue"])(logicalSavingsQueryResult);
    const efficiencyProps = {
        efficiency,
        isLoading: !efficiencyQueryResult,
        error: !!efficiencyQueryResultError,
    };
    const savingsProps = {
        savings,
        logicalSize,
        isLoading: !savingsQueryResult && !logicalSavingsQueryResult,
        error: !!savingsQueryResultError || !!logicalSavingsQueryResultError,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Object Data Reduction")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "co-dashboard-card__body--no-padding" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_object_data_reduction_card_item__WEBPACK_IMPORTED_MODULE_8__["EfficiencyItem"], Object.assign({}, efficiencyProps)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_object_data_reduction_card_item__WEBPACK_IMPORTED_MODULE_8__["SavingsItem"], Object.assign({}, savingsProps)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_5__["withDashboardResources"])(DataReductionCard));


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


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/utils.ts ***!
  \*****************************************************/
/*! exports provided: filterNooBaaAlerts, getGaugeValue, getMetric, getPhase, isBound, getSCProvisioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNooBaaAlerts", function() { return filterNooBaaAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeValue", function() { return getGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetric", function() { return getMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhase", function() { return getPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBound", function() { return isBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCProvisioner", function() { return getSCProvisioner; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterNooBaaAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'NooBaa');
const getGaugeValue = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'data.result[0].value[1]');
const getMetric = (result, metric) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, ['data', 'result', '0', 'metric', metric], null);
const getPhase = (obj) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.phase', 'Lost');
};
const isBound = (obj) => getPhase(obj) === 'Bound';
const getSCProvisioner = (obj) => obj.provisioner;


/***/ })

}]);
//# sourceMappingURL=object-service-data-reduction-card-31cd501ce9652dfcae5a.js.map