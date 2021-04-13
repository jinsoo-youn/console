(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-service-buckets-card"],{

/***/ "./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card-item.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card-item.tsx ***!
  \******************************************************************************************/
/*! exports provided: BucketsItem, BucketsTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketsItem", function() { return BucketsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketsTitle", function() { return BucketsTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");






const formatCount = (count) => {
    const hCount = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["humanizeNumber"])(count);
    return `${hCount.string} Object${count === 1 ? '' : 's'}`;
};
// Displays count of erroneous buckets due to issues not externalized as phase
const OtherFailure = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ link, status }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-buckets-card__buckets-failure-status-item" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nb-buckets-card__buckets-failure-status-item--link", href: link, target: "_blank", rel: "noopener noreferrer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["RedExclamationCircleIcon"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "nb-buckets-card__buckets-failure-status-count" }, status)))));
// Displays count of erroneous buckets due to failure in provision
const ProvisioningFailure = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ link, status }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-buckets-card__buckets-failure-status-item" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: link, className: "nb-buckets-card__buckets-failure-status-item--link" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["InProgressIcon"], { className: "co-inventory-card__status-icon--progress" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "nb-buckets-card__buckets-failure-status-count" }, status)))));
// Displays count of erroneous buckets
const BucketFailureStatus = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ failureCounts, failureLinks }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-buckets-card__buckets-failure-status" },
    failureCounts[0] > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OtherFailure, { link: failureLinks[0], status: failureCounts[0] }),
    failureCounts[1] > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProvisioningFailure, { link: failureLinks[1], status: failureCounts[1] })))));
// Displays count of buckets and objects present in buckets
const BucketsStatus = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ isLoading, hasLoadError, title, bucketsCount, objectsCount }) => {
    let body;
    if (isLoading && !hasLoadError) {
        body = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-inventory-card__item-title" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-inventory" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text" })));
    }
    else {
        body = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, hasLoadError ? title : Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["pluralize"])(bucketsCount, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-text--small text-secondary" }, hasLoadError || !objectsCount ? 'Not available' : formatCount(Number(objectsCount)))));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-buckets-card__buckets-status-title" }, body);
});
// Displays Buckets and Bucket Claims information as rows
const BucketsItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ isLoading, hasLoadError, title, bucketsCount, objectsCount, unhealthyCounts, links }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-inventory-card__item" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BucketsStatus, { title: title, bucketsCount: bucketsCount, objectsCount: objectsCount, hasLoadError: hasLoadError, isLoading: isLoading }),
    !(isLoading || hasLoadError) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BucketFailureStatus, { failureCounts: unhealthyCounts, failureLinks: links })))));
const BucketsTitle = ({ objects, link, error, children }) => {
    let objectsBody;
    if (!objects && !error) {
        objectsBody = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-text" });
    }
    else {
        const objectsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getGaugeValue"])(objects);
        objectsBody = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-text--small text-secondary" }, !error && objectsCount ? formatCount(Number(objectsCount)) : 'Not available'));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-buckets-card__buckets-status-title" },
        link ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: link }, children) : children,
        objectsBody));
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card.scss":
/*!**************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card.tsx ***!
  \*************************************************************************************/
/*! exports provided: BucketsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketsCard", function() { return BucketsCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/InventoryItem */ "./packages/console-shared/src/components/dashboard/inventory-card/InventoryItem.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _buckets_card_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buckets-card-item */ "./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card-item.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./packages/noobaa-storage-plugin/src/components/buckets-card/utils.ts");
/* harmony import */ var _buckets_card_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buckets-card.scss */ "./packages/noobaa-storage-plugin/src/components/buckets-card/buckets-card.scss");
/* harmony import */ var _buckets_card_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_buckets_card_scss__WEBPACK_IMPORTED_MODULE_14__);















var BucketsCardQueries;
(function (BucketsCardQueries) {
    BucketsCardQueries["BUCKETS_COUNT"] = "NooBaa_num_buckets";
    BucketsCardQueries["BUCKET_OBJECTS_COUNT"] = "NooBaa_num_objects";
    BucketsCardQueries["BUCKET_CLAIMS_OBJECTS_COUNT"] = "NooBaa_num_objects_buckets_claims";
    BucketsCardQueries["UNHEALTHY_BUCKETS"] = "NooBaa_num_unhealthy_buckets";
})(BucketsCardQueries || (BucketsCardQueries = {}));
const objectBucketClaimsResource = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["NooBaaObjectBucketClaimModel"]),
    namespaced: false,
    isList: true,
    prop: 'obc',
};
const objectBucketResource = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["NooBaaObjectBucketModel"]),
    namespaced: false,
    isList: true,
    prop: 'ob',
};
const ObjectDashboardBucketsCard = ({ watchK8sResource, watchPrometheus, stopWatchPrometheusQuery, stopWatchK8sResource, prometheusResults, resources, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchK8sResource(objectBucketClaimsResource);
        watchK8sResource(objectBucketResource);
        Object.keys(BucketsCardQueries).forEach((key) => watchPrometheus(BucketsCardQueries[key]));
        return () => {
            stopWatchK8sResource(objectBucketClaimsResource);
            stopWatchK8sResource(objectBucketResource);
            Object.keys(BucketsCardQueries).forEach((key) => stopWatchPrometheusQuery(BucketsCardQueries[key]));
        };
    }, [watchK8sResource, watchPrometheus, stopWatchK8sResource, stopWatchPrometheusQuery]);
    const noobaaCount = prometheusResults.getIn([
        BucketsCardQueries.BUCKETS_COUNT,
        'data',
    ]);
    const noobaaCountError = prometheusResults.getIn([BucketsCardQueries.BUCKETS_COUNT, 'loadError']);
    const noobaaObjectsCount = prometheusResults.getIn([
        BucketsCardQueries.BUCKET_OBJECTS_COUNT,
        'data',
    ]);
    const noobaaObjectsCountError = prometheusResults.getIn([
        BucketsCardQueries.BUCKET_OBJECTS_COUNT,
        'loadError',
    ]);
    const obcObjectsCount = prometheusResults.getIn([
        BucketsCardQueries.BUCKET_CLAIMS_OBJECTS_COUNT,
        'data',
    ]);
    const obcObjectsCountError = prometheusResults.getIn([
        BucketsCardQueries.BUCKET_CLAIMS_OBJECTS_COUNT,
        'loadError',
    ]);
    const unhealthyNoobaaBuckets = prometheusResults.getIn([
        BucketsCardQueries.UNHEALTHY_BUCKETS,
        'data',
    ]);
    const unhealthyNoobaaBucketsError = prometheusResults.getIn([
        BucketsCardQueries.UNHEALTHY_BUCKETS,
        'loadError',
    ]);
    const obcData = (_b = (_a = resources === null || resources === void 0 ? void 0 : resources.obc) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : [];
    const obcLoaded = (_c = resources === null || resources === void 0 ? void 0 : resources.obc) === null || _c === void 0 ? void 0 : _c.loaded;
    const obcLoadError = (_d = resources === null || resources === void 0 ? void 0 : resources.obc) === null || _d === void 0 ? void 0 : _d.loadError;
    const obData = (_f = (_e = resources === null || resources === void 0 ? void 0 : resources.ob) === null || _e === void 0 ? void 0 : _e.data) !== null && _f !== void 0 ? _f : [];
    const obLoaded = (_g = resources === null || resources === void 0 ? void 0 : resources.ob) === null || _g === void 0 ? void 0 : _g.loaded;
    const obLoadError = (_h = resources === null || resources === void 0 ? void 0 : resources.ob) === null || _h === void 0 ? void 0 : _h.loadError;
    const unhealthyNoobaaBucketsCount = Number(Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getGaugeValue"])(unhealthyNoobaaBuckets));
    const obcLink = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["NooBaaObjectBucketClaimModel"]);
    const obLink = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["NooBaaObjectBucketModel"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Buckets")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__["default"], { isLoading: !(noobaaCount && unhealthyNoobaaBuckets), error: !!(noobaaCountError || unhealthyNoobaaBucketsError), title: "NooBaa Bucket", count: Number(Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getGaugeValue"])(noobaaCount)), TitleComponent: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_buckets_card_item__WEBPACK_IMPORTED_MODULE_12__["BucketsTitle"], Object.assign({ objects: noobaaObjectsCount, error: !!noobaaObjectsCountError }, props))), [noobaaObjectsCount, noobaaObjectsCountError]) }, unhealthyNoobaaBucketsCount > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["RedExclamationCircleIcon"], null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "nb-buckets-card__buckets-failure-status-count" }, unhealthyNoobaaBucketsCount)))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__["ResourceInventoryItem"], { isLoading: !obLoaded, error: !!obLoadError, kind: _models__WEBPACK_IMPORTED_MODULE_10__["NooBaaObjectBucketModel"], resources: obData, TitleComponent: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_buckets_card_item__WEBPACK_IMPORTED_MODULE_12__["BucketsTitle"], Object.assign({ objects: obcObjectsCount, link: obLink, error: !!obcObjectsCountError }, props))), [obLink, obcObjectsCount, obcObjectsCountError]), mapper: _utils__WEBPACK_IMPORTED_MODULE_13__["getObStatusGroups"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_9__["ResourceInventoryItem"], { isLoading: !obcLoaded, error: !!obcLoadError, kind: _models__WEBPACK_IMPORTED_MODULE_10__["NooBaaObjectBucketClaimModel"], resources: obcData, TitleComponent: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_buckets_card_item__WEBPACK_IMPORTED_MODULE_12__["BucketsTitle"], Object.assign({ objects: obcObjectsCount, link: obcLink, error: !!obcObjectsCountError }, props))), [obcLink, obcObjectsCount, obcObjectsCountError]), mapper: _utils__WEBPACK_IMPORTED_MODULE_13__["getObcStatusGroups"] }))));
};
const BucketsCard = Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_6__["withDashboardResources"])(ObjectDashboardBucketsCard);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/buckets-card/utils.ts":
/*!*****************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/buckets-card/utils.ts ***!
  \*****************************************************************************/
/*! exports provided: getObStatusGroups, getObcStatusGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObStatusGroups", function() { return getObStatusGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObcStatusGroups", function() { return getObcStatusGroups; });
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/status-group */ "./packages/console-shared/src/components/dashboard/inventory-card/status-group.ts");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/utils */ "./packages/console-shared/src/components/dashboard/inventory-card/utils.ts");


const OB_STATUS_GROUP_MAPPING = {
    [_console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__["InventoryStatusGroup"].NOT_MAPPED]: ['Bound'],
    [_console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__["InventoryStatusGroup"].PROGRESS]: ['Released'],
    [_console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__["InventoryStatusGroup"].ERROR]: ['Failed'],
};
const OBC_STATUS_GROUP_MAPPING = {
    [_console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__["InventoryStatusGroup"].NOT_MAPPED]: ['Bound'],
    [_console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__["InventoryStatusGroup"].PROGRESS]: ['Pending', 'Released'],
    [_console_shared_src_components_dashboard_inventory_card_status_group__WEBPACK_IMPORTED_MODULE_0__["InventoryStatusGroup"].ERROR]: ['Failed'],
};
const getObStatusGroups = (resources) => Object(_console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_1__["getStatusGroups"])(resources, OB_STATUS_GROUP_MAPPING, (ob) => { var _a; return (_a = ob === null || ob === void 0 ? void 0 : ob.status) === null || _a === void 0 ? void 0 : _a.phase; }, 'ob-status');
const getObcStatusGroups = (resources) => Object(_console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_1__["getStatusGroups"])(resources, OBC_STATUS_GROUP_MAPPING, (obc) => { var _a; return (_a = obc === null || obc === void 0 ? void 0 : obc.status) === null || _a === void 0 ? void 0 : _a.phase; }, 'obc-status');


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
//# sourceMappingURL=object-service-buckets-card-4116d80ee73143c37857.js.map