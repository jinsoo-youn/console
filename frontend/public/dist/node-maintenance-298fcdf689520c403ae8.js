(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["node-maintenance"],{

/***/ "./packages/metal3-plugin/src/components/maintenance/MaintenanceDashboardActivity.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/maintenance/MaintenanceDashboardActivity.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityItem */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityItem.tsx");
/* harmony import */ var _console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");





const MaintenanceActivity = ({ resource }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_1__["ActivityProgress"], { title: "Starting maintenance", progress: Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getNodeMaintenanceProgressPercent"])(resource) },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["NodeModel"].kind, name: resource.spec.nodeName })));
/* harmony default export */ __webpack_exports__["default"] = (MaintenanceActivity);


/***/ })

}]);
//# sourceMappingURL=node-maintenance-298fcdf689520c403ae8.js.map