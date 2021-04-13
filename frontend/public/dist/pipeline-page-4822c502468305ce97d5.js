(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-page"],{

/***/ "./packages/dev-console/src/components/pipelines/PipelinesPage.tsx":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/PipelinesPage.tsx ***!
  \*************************************************************************/
/*! exports provided: PipelinesPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesPage", function() { return PipelinesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
/* harmony import */ var _PipelinesResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelinesResourceList */ "./packages/dev-console/src/components/pipelines/PipelinesResourceList.tsx");






const PipelinesPage = (props) => {
    const { match: { params: { ns: namespace }, }, } = props;
    return namespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelinesResourceList__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, { badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"].badge), namespace: namespace, title: _models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"].labelPlural })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_4__["default"], { title: _models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"].labelPlural, badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"].badge) },
        "Select a project to view the list of ",
        _models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"].labelPlural));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_2__["withStartGuide"])(PipelinesPage));


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
//# sourceMappingURL=pipeline-page-4822c502468305ce97d5.js.map