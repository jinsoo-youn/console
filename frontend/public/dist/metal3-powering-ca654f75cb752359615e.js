(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metal3-powering"],{

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalStatusActivity.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/BareMetalStatusActivity.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityItem */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityItem.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _status_activity_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status-activity.scss */ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/status-activity.scss");
/* harmony import */ var _status_activity_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_status_activity_scss__WEBPACK_IMPORTED_MODULE_7__);








const BareMetalStatusActivity = ({ resource }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_2__["default"], null,
    Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["getHostPowerStatus"])(resource),
    ' ',
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { inline: true, hideIcon: true, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["BareMetalHostModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(resource), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(resource), className: "bmh-status-activity" })));
/* harmony default export */ __webpack_exports__["default"] = (BareMetalStatusActivity);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/status-activity.scss":
/*!**********************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/dashboard/status-activity.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=metal3-powering-ca654f75cb752359615e.js.map