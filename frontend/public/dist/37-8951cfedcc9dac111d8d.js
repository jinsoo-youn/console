(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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


/***/ })

}]);
//# sourceMappingURL=37-8951cfedcc9dac111d8d.js.map