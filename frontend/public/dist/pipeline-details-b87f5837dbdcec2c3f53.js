(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-details"],{

/***/ "./packages/dev-console/src/components/pipelines/PipelineDetailsPage.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/PipelineDetailsPage.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/error */ "./public/components/error.tsx");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelineruns_triggered_by__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipelineruns/triggered-by */ "./packages/dev-console/src/components/pipelineruns/triggered-by/index.ts");
/* harmony import */ var _detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail-page-tabs */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/index.ts");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/triggers */ "./packages/dev-console/src/components/pipelines/utils/triggers.ts");











const PipelineDetailsPage = (props) => {
    const [errorCode, setErrorCode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [latestPipelineRun, setLatestPipelineRun] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    const { name, namespace } = props;
    const templateNames = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_10__["usePipelineTriggerTemplateNames"])(name, namespace) || [];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"], name, namespace)
            .then((res) => {
            // eslint-disable-next-line promise/no-nesting
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], {
                ns: namespace,
                labelSelector: { 'tekton.dev/pipeline': res.metadata.name },
            })
                .then((listres) => {
                const latestRun = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_6__["getLatestRun"])({ data: listres }, 'creationTimestamp');
                setLatestPipelineRun(latestRun);
            })
                .catch((error) => {
                setErrorCode(error.response.status);
            });
        })
            .catch((error) => setErrorCode(error.response.status));
    }, [name, namespace]);
    const augmentedMenuActions = Object(_pipelineruns_triggered_by__WEBPACK_IMPORTED_MODULE_8__["useMenuActionsWithUserLabel"])(Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_5__["getPipelineKebabActions"])(latestPipelineRun, templateNames.length > 0));
    if (errorCode === 404) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_error__WEBPACK_IMPORTED_MODULE_4__["ErrorPage404"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["DetailsPage"], Object.assign({}, props, { menuActions: augmentedMenuActions, customData: templateNames, pages: [
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(_detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["PipelineDetails"]),
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].editYaml(),
            {
                href: 'Runs',
                name: 'Pipeline Runs',
                component: _detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["PipelineRuns"],
            },
            {
                href: 'parameters',
                name: 'Parameters',
                component: (pageProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["PipelineForm"], Object.assign({ PipelineFormComponent: _detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["PipelineParametersForm"], formName: "parameters", validationSchema: _detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["parametersValidationSchema"], obj: pageProps.obj }, pageProps))),
            },
            {
                href: 'resources',
                name: 'Resources',
                component: (pageProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["PipelineForm"], Object.assign({ PipelineFormComponent: _detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["PipelineResourcesForm"], formName: "resources", validationSchema: _detail_page_tabs__WEBPACK_IMPORTED_MODULE_9__["resourcesValidationSchema"], obj: pageProps.obj }, pageProps))),
            },
        ] })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineDetailsPage);


/***/ })

}]);
//# sourceMappingURL=pipeline-details-b87f5837dbdcec2c3f53.js.map