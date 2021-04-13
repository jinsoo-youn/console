(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-details.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-details.tsx ***!
  \**************************************************************************************************/
/*! exports provided: OperatorHubDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubDetailsPage", function() { return OperatorHubDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _catalog_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../catalog-source */ "./packages/operator-lifecycle-manager/src/components/catalog-source.tsx");




const OperatorHubDetails = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: "OperatorHub Details" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceSummary"], { resource: obj, podSelector: "spec.podSelector", showNodeSelector: false })));
const Sources = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_catalog_source__WEBPACK_IMPORTED_MODULE_3__["CatalogSourceListPage"], Object.assign({ showTitle: false }, props)));
const pages = [
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(OperatorHubDetails),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].editYaml(),
    {
        href: 'sources',
        name: 'Sources',
        component: Sources,
    },
];
const OperatorHubDetailsPage = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["DetailsPage"], Object.assign({}, props, { menuActions: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.common, pages: pages }));
};


/***/ })

}]);
//# sourceMappingURL=39-140ddbe6584702d4b4b1.js.map