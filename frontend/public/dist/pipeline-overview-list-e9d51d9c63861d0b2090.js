(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-overview-list"],{

/***/ "./packages/dev-console/src/components/pipelineruns/triggered-by/ResourceKebabWithUserLabel.tsx":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/triggered-by/ResourceKebabWithUserLabel.tsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./packages/dev-console/src/components/pipelineruns/triggered-by/hooks.ts");
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



const ResourceKebabWithUserLabel = (_a) => {
    var { actions } = _a, otherProps = __rest(_a, ["actions"]);
    const augmentedMenuActions = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useMenuActionsWithUserLabel"])(actions);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceKebab"], Object.assign({}, otherProps, { actions: augmentedMenuActions }));
};
/* harmony default export */ __webpack_exports__["default"] = (ResourceKebabWithUserLabel);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/triggered-by/hooks.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/triggered-by/hooks.ts ***!
  \********************************************************************************/
/*! exports provided: useUserLabelForManualStart, usePipelineRunWithUserLabel, useMenuActionsWithUserLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserLabelForManualStart", function() { return useUserLabelForManualStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePipelineRunWithUserLabel", function() { return usePipelineRunWithUserLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenuActionsWithUserLabel", function() { return useMenuActionsWithUserLabel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pipelines_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipelines/const */ "./packages/dev-console/src/components/pipelines/const.ts");

// FIXME react-redux types are 6.x while react-redux is 7.x
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore


const mergeLabelsWithResource = (labels, resource) => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, resource, { metadata: { labels } });
};
const useUserLabelForManualStart = () => {
    const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])((state) => state.UI.get('user'));
    return {
        // kube:admin is an invalid k8s label value
        [_pipelines_const__WEBPACK_IMPORTED_MODULE_2__["StartedByLabel"].user]: user.metadata.name.replace(/:/, ''),
    };
};
const usePipelineRunWithUserLabel = (plr) => {
    const labels = useUserLabelForManualStart();
    return plr && mergeLabelsWithResource(labels, plr);
};
const useMenuActionsWithUserLabel = (menuActions) => {
    const labels = useUserLabelForManualStart();
    return menuActions.map((kebabAction) => {
        return (kind, resource, ...rest) => kebabAction(kind, mergeLabelsWithResource(labels, resource), ...rest);
    });
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/triggered-by/index.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/triggered-by/index.ts ***!
  \********************************************************************************/
/*! exports provided: ResourceKebabWithUserLabel, useUserLabelForManualStart, usePipelineRunWithUserLabel, useMenuActionsWithUserLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./packages/dev-console/src/components/pipelineruns/triggered-by/hooks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUserLabelForManualStart", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useUserLabelForManualStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePipelineRunWithUserLabel", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["usePipelineRunWithUserLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMenuActionsWithUserLabel", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useMenuActionsWithUserLabel"]; });

/* harmony import */ var _ResourceKebabWithUserLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceKebabWithUserLabel */ "./packages/dev-console/src/components/pipelineruns/triggered-by/ResourceKebabWithUserLabel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceKebabWithUserLabel", function() { return _ResourceKebabWithUserLabel__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-overview/PipelineOverview.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-overview/PipelineOverview.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_dev_console_src_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/dev-console/src/models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _TriggerLastRunButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TriggerLastRunButton */ "./packages/dev-console/src/components/pipelines/pipeline-overview/TriggerLastRunButton.tsx");
/* harmony import */ var _PipelineRunItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PipelineRunItem */ "./packages/dev-console/src/components/pipelines/pipeline-overview/PipelineRunItem.tsx");









const MAX_VISIBLE = 3;
const PipelinesOverview = ({ item: { pipelines: [pipeline], pipelineRuns, }, }) => {
    const { metadata: { name, namespace }, } = pipeline;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["SidebarSectionHeading"], { text: _console_dev_console_src_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"].labelPlural }, pipelineRuns.length > MAX_VISIBLE && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "sidebar__section-view-all", to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourcePath"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_dev_console_src_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"]), name, namespace)}/Runs` }, `View all (${pipelineRuns.length})`))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item pipeline-overview" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], { breakpointMods: [{ modifier: 'justify-content-space-between' }] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { inline: true, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_dev_console_src_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"]), name: name, namespace: namespace })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TriggerLastRunButton__WEBPACK_IMPORTED_MODULE_7__["default"], { pipelineRuns: pipelineRuns, namespace: namespace })))),
            lodash__WEBPACK_IMPORTED_MODULE_1__["take"](pipelineRuns, MAX_VISIBLE).map((pr) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineRunItem__WEBPACK_IMPORTED_MODULE_8__["default"], { key: pr.metadata.uid, pipelineRun: pr }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelinesOverview);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-overview/PipelineRunItem.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-overview/PipelineRunItem.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");









const PipelineRunItem = ({ pipelineRun }) => {
    const { metadata: { name, namespace, creationTimestamp }, status, } = pipelineRun;
    const path = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourcePath"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["PipelineRunModel"]), name, namespace);
    const lastUpdated = status
        ? status.completionTime || status.startTime || creationTimestamp
        : creationTimestamp;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], { gutter: "md" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 6 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${path}` }, name),
                lastUpdated && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
                    "\u00A0(",
                    Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_6__["fromNow"])(lastUpdated),
                    ")")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 3 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["Status"], { status: Object(_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_7__["pipelineRunStatus"])(pipelineRun) || 'Pending' })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 3, className: "text-right" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${path}/logs` }, "View logs")))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunItem);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-overview/TriggerLastRunButton.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-overview/TriggerLastRunButton.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelineruns_triggered_by__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipelineruns/triggered-by */ "./packages/dev-console/src/components/pipelineruns/triggered-by/index.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");










const TriggerLastRunButton = ({ pipelineRuns, namespace, impersonate, }) => {
    const latestRun = Object(_pipelineruns_triggered_by__WEBPACK_IMPORTED_MODULE_8__["usePipelineRunWithUserLabel"])(Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_9__["getLatestRun"])({ data: pipelineRuns }, 'startTimestamp'));
    const { label, callback, accessReview: utilityAccessReview } = Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_6__["rerunPipelineAndStay"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], latestRun);
    const defaultAccessReview = {
        group: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"].plural,
        namespace,
        verb: 'create',
    };
    const accessReview = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](utilityAccessReview) ? defaultAccessReview : utilityAccessReview;
    const isAllowed = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["useAccessReview"])(accessReview, impersonate);
    return (isAllowed && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "secondary", onClick: callback, isDisabled: pipelineRuns.length === 0 && !callback }, label)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["impersonateStateToProps"])(TriggerLastRunButton));


/***/ })

}]);
//# sourceMappingURL=pipeline-overview-list-e9d51d9c63861d0b2090.js.map