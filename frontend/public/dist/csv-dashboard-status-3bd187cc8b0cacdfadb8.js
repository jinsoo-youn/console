(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["csv-dashboard-status"],{

/***/ "./packages/operator-lifecycle-manager/src/components/dashboard/csv-status.scss":
/*!**************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/dashboard/csv-status.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/dashboard/csv-status.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/dashboard/csv-status.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/StatusPopup */ "./packages/console-shared/src/components/dashboard/status-card/StatusPopup.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _csv_status_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./csv-status.scss */ "./packages/operator-lifecycle-manager/src/components/dashboard/csv-status.scss");
/* harmony import */ var _csv_status_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_csv_status_scss__WEBPACK_IMPORTED_MODULE_7__);








const ClusterServiceVersionRow = ({ operatorStatus, }) => {
    const { name, namespace } = operatorStatus.operators[0].metadata;
    const { displayName } = operatorStatus.operators[0].spec;
    const to = operatorStatus.operators.length > 1
        ? `${Object(_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"])}?name=${name}`
        : Object(_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_2__["resourcePath"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"]), name, namespace);
    const value = `${Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["pluralize"])(operatorStatus.operators.length, 'project')} ${operatorStatus.status.title.toLowerCase()}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_5__["default"], { value: value, icon: operatorStatus.status.icon },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "csv-operator-status__title", to: to }, displayName || name)));
};
/* harmony default export */ __webpack_exports__["default"] = (ClusterServiceVersionRow);


/***/ })

}]);
//# sourceMappingURL=csv-dashboard-status-3bd187cc8b0cacdfadb8.js.map