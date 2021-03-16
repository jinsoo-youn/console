(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-run"],{

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DynamicResourceLinkList.scss */ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss");
/* harmony import */ var _DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3__);




const DynamicResourceLinkList = ({ links = [], namespace, title, }) => {
    if (links.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-dynamic-resource-link-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, links.map(({ name, model, displayName = '' }) => {
                const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(model);
                let linkName = name;
                if (displayName.length > 0 && name !== displayName) {
                    linkName += ` (${displayName})`;
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: `${kind}/${name}` },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: kind, name: name, displayName: linkName, namespace: namespace, title: name, inline: true })));
            })))));
};
/* harmony default export */ __webpack_exports__["default"] = (DynamicResourceLinkList);


/***/ })

}]);
//# sourceMappingURL=pipeline-run-0e45c5e3bb0ef5657eac.js.map