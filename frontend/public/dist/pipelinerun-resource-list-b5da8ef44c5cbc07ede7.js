(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipelinerun-resource-list"],{

/***/ "./packages/dev-console/src/components/charts/HorizontalStackedBars.scss":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/charts/HorizontalStackedBars.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalStackedBars.scss */ "./packages/dev-console/src/components/charts/HorizontalStackedBars.scss");
/* harmony import */ var _HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2__);



const HorizontalStackedBars = ({ barGap, height, inline, values, width, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-horizontal-stacked-bars', { 'is-inline': inline }), style: { height, width, ['--bar-gap']: barGap && `${barGap}px` } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-horizontal-stacked-bars__bars" }, values.map(({ color, name, size }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: name, className: "odc-horizontal-stacked-bars__data-bar", style: {
                background: color,
                flexGrow: size,
            } }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalStackedBars);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/PipelineRunsResourceList.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/PipelineRunsResourceList.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_detail_page_tabs_PipelineRuns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipelines/detail-page-tabs/PipelineRuns */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineRuns.tsx");
/* harmony import */ var _list_page_PipelineRunList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-page/PipelineRunList */ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunList.tsx");







const PipelineRunsResourceList = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ListPage"], Object.assign({}, props, { canCreate: false, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineRunModel"]), ListComponent: _list_page_PipelineRunList__WEBPACK_IMPORTED_MODULE_6__["default"], rowFilters: _pipelines_detail_page_tabs_PipelineRuns__WEBPACK_IMPORTED_MODULE_5__["runFilters"], badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineRunModel"].badge) })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunsResourceList);


/***/ })

}]);
//# sourceMappingURL=pipelinerun-resource-list-b5da8ef44c5cbc07ede7.js.map