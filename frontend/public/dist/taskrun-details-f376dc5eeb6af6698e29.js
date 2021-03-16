(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskrun-details"],{

/***/ "./packages/dev-console/src/components/taskruns/TaskRunDetails.tsx":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/taskruns/TaskRunDetails.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");



const TaskRunDetails = ({ obj: taskRun }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: `${_models__WEBPACK_IMPORTED_MODULE_2__["TaskRunModel"].label} Details` }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: taskRun })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskRunDetails);


/***/ }),

/***/ "./packages/dev-console/src/components/taskruns/TaskRunDetailsPage.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/taskruns/TaskRunDetailsPage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _TaskRunDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskRunDetails */ "./packages/dev-console/src/components/taskruns/TaskRunDetails.tsx");




const TaskRunDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["DetailsPage"], Object.assign({}, props, { pages: [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(_TaskRunDetails__WEBPACK_IMPORTED_MODULE_3__["default"]), _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].editYaml(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["viewYamlComponent"])] })));
/* harmony default export */ __webpack_exports__["default"] = (TaskRunDetailsPage);


/***/ })

}]);
//# sourceMappingURL=taskrun-details-f376dc5eeb6af6698e29.js.map