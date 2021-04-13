(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipelinerun-page"],{

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

/***/ "./packages/dev-console/src/components/pipelineruns/PipelineRunsPage.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/PipelineRunsPage.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
/* harmony import */ var _PipelineRunsResourceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineRunsResourceList */ "./packages/dev-console/src/components/pipelineruns/PipelineRunsResourceList.tsx");





const PipelineRunsPage = (props) => {
    const { match: { params: { ns: namespace }, }, } = props;
    return namespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineRunsResourceList__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { namespace: namespace })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_3__["default"], { title: _models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].labelPlural, badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].badge) },
        "Select a project to view the list of ",
        _models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].labelPlural));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunsPage);


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


/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.scss":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectListPage.scss */ "./packages/dev-console/src/components/projects/ProjectListPage.scss");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





const ProjectListPage = (_a) => {
    var { badge, title, children, listComponent } = _a, listPageProps = __rest(_a, ["badge", "title", "children", "listComponent"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-project-list-page" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { title: title, badge: badge }, children),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", { className: "odc-project-list-page__section-border" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, listPageProps, { showTitle: false, kind: "Project", ListComponent: listComponent || _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["ProjectsTable"], canCreate: false, filterLabel: "by name or display name", textFilter: "project-name" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectListPage);


/***/ })

}]);
//# sourceMappingURL=pipelinerun-page-ccd873e630f5a2362514.js.map