(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indepedent-status-card"],{

/***/ "./packages/ceph-storage-plugin/src/components/independent-dashboard-page/status-card/card.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-dashboard-page/status-card/card.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthBody */ "./packages/console-shared/src/components/dashboard/status-card/HealthBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthItem */ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _dashboard_page_storage_dashboard_status_card_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard-page/storage-dashboard/status-card/utils */ "./packages/ceph-storage-plugin/src/components/dashboard-page/storage-dashboard/status-card/utils.ts");
/* harmony import */ var _constants_resources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/resources */ "./packages/ceph-storage-plugin/src/constants/resources.ts");











const StatusCard = () => {
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_8__["useK8sWatchResource"])(_constants_resources__WEBPACK_IMPORTED_MODULE_10__["cephClusterResource"]);
    const cephHealth = Object(_dashboard_page_storage_dashboard_status_card_utils__WEBPACK_IMPORTED_MODULE_9__["getCephHealthState"])({ ceph: { data, loaded, loadError } });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], { gradient: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Status")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_6__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"], { className: "co-overview-status__health", gutter: "md" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_7__["default"], { title: "OCS Cluster", state: cephHealth.state, details: cephHealth.message })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (StatusCard);


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

/***/ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");




const HealthItemIcon = ({ state }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-icon" }, (_states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][state] || _states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][_states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].UNKNOWN]).icon));
const HealthItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ className, state, title, details, popupTitle, noIcon = false, children }) => {
    const detailMessage = details || (_states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][state] || _states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][_states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].UNKNOWN]).message;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('co-status-card__health-item', className) },
        state === _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-health" })) : (!noIcon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HealthItemIcon, { state: state })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-dashboard-text--small co-status-card__health-item-text" }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).length && state !== _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_2__["DashboardCardPopupLink"], { linkTitle: title, popupTitle: popupTitle, className: "co-status-card__popup" }, children)) : (title)),
            state !== _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING && detailMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-text--small co-status-card__health-item-text co-status-card__health-item-subtitle" }, detailMessage)))));
});
/* harmony default export */ __webpack_exports__["default"] = (HealthItem);


/***/ })

}]);
//# sourceMappingURL=indepedent-status-card-4b6a8172c352d3554bb3.js.map