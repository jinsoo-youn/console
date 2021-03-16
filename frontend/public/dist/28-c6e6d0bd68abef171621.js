(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/data-resiliency-activity.tsx":
/*!*********************************************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/data-resiliency-activity.tsx ***!
  \*********************************************************************************************************************************/
/*! exports provided: DataResiliency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataResiliency", function() { return DataResiliency; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./packages/ceph-storage-plugin/src/utils/index.ts");



const DataResiliency = ({ results }) => {
    const progress = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getResiliencyProgress"])(results);
    const formattedProgress = Math.round(progress * 100);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Progress"], { className: "co-activity-item__progress", value: formattedProgress, size: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["ProgressSize"].sm, title: "Rebuilding data resiliency", label: `${formattedProgress}%` })));
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/activity-card/data-resiliency-activity/data-resiliency-activity.scss":
/*!****************************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/activity-card/data-resiliency-activity/data-resiliency-activity.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/activity-card/data-resiliency-activity/data-resiliency-activity.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/activity-card/data-resiliency-activity/data-resiliency-activity.tsx ***!
  \***************************************************************************************************************************/
/*! exports provided: NoobaaDataResiliency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoobaaDataResiliency", function() { return NoobaaDataResiliency; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_activity_card_data_resiliency_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/data-resiliency-activity */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/activity-card/data-resiliency-activity.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _data_resiliency_activity_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-resiliency-activity.scss */ "./packages/noobaa-storage-plugin/src/components/activity-card/data-resiliency-activity/data-resiliency-activity.scss");
/* harmony import */ var _data_resiliency_activity_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_resiliency_activity_scss__WEBPACK_IMPORTED_MODULE_4__);





const NoobaaDataResiliency = ({ results }) => {
    const eta = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getGaugeValue"])(results[1]);
    const formattedEta = Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_1__["formatDuration"])(eta * 1000);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_ceph_storage_plugin_src_components_dashboard_page_storage_dashboard_activity_card_data_resiliency_activity__WEBPACK_IMPORTED_MODULE_2__["DataResiliency"], { results: results[0] }),
        eta && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary nb-data-resiliency__eta" },
            "Estimating ",
            formattedEta,
            " to completion"))));
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
//# sourceMappingURL=28-c6e6d0bd68abef171621.js.map