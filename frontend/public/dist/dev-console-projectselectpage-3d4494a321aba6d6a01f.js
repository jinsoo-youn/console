(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-projectselectpage"],{

/***/ "./packages/dev-console/src/components/ProjectSelectPage.tsx":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/components/ProjectSelectPage.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_kinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/kinds */ "./public/kinds.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/error */ "./public/components/error.tsx");
/* harmony import */ var _console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");









const allParams = (props) => { var _a; return Object.assign({}, (_a = props === null || props === void 0 ? void 0 : props.match) === null || _a === void 0 ? void 0 : _a.params, props); };
const ProjectSelectPage = (props) => {
    const { kindObj, kindsInFlight, plural } = allParams(props);
    if (!kindObj) {
        if (kindsInFlight) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
        }
        const missingType = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["isGroupVersionKind"])(plural)
            ? `"${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["kindForReference"])(plural)}" in "${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["apiVersionForReference"])(plural)}"`
            : `"${plural}"`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_error__WEBPACK_IMPORTED_MODULE_5__["ErrorPage404"], { message: `The server doesn't have a resource type ${missingType}. Try refreshing the page if it was recently added.` }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, kindObj.labelPlural)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_7__["default"], { title: kindObj.labelPlural, badge: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_8__["getBadgeFromType"])(kindObj.badge) },
            "Select a project to view the list of ",
            kindObj.labelPlural)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_kinds__WEBPACK_IMPORTED_MODULE_3__["connectToPlural"])(Object(_console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_6__["withStartGuide"])(ProjectSelectPage)));


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
//# sourceMappingURL=dev-console-projectselectpage-3d4494a321aba6d6a01f.js.map