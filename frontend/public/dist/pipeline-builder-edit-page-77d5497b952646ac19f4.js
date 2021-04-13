(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-builder-edit-page"],{

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderEditPage.scss":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderEditPage.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderEditPage.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderEditPage.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _PipelineBuilderPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineBuilderPage */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderPage.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineBuilderEditPage_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PipelineBuilderEditPage.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderEditPage.scss");
/* harmony import */ var _PipelineBuilderEditPage_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PipelineBuilderEditPage_scss__WEBPACK_IMPORTED_MODULE_7__);








const PipelineBuilderEditPage = (props) => {
    const [editPipeline, setEditPipeline] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const { match: { params: { pipelineName, ns }, }, } = props;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"], pipelineName, ns)
            .then((res) => {
            setEditPipeline(res);
        })
            .catch(() => {
            setError('Unable to load Pipeline');
        });
    }, [pipelineName, ns]);
    if (error) {
        // TODO: confirm verbiage with UX
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-builder-edit-page" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "danger", isInline: true, title: error },
                "Navigate back to the",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${ns}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"])}` }, "Pipelines page"),
                ".")));
    }
    if (!editPipeline) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingBox"], null);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBuilderPage__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, { existingPipeline: editPipeline }));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineBuilderEditPage);


/***/ })

}]);
//# sourceMappingURL=pipeline-builder-edit-page-77d5497b952646ac19f4.js.map