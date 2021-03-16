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


/***/ }),

/***/ "./packages/dev-console/src/utils/pipeline-actions.tsx":
/*!*************************************************************!*\
  !*** ./packages/dev-console/src/utils/pipeline-actions.tsx ***!
  \*************************************************************/
/*! exports provided: handlePipelineRunSubmit, triggerPipeline, reRunPipelineRun, editPipeline, startPipeline, rerunPipelineAndStay, rerunPipelineAndRedirect, rerunPipelineRunAndRedirect, stopPipelineRun, addTrigger, getPipelineKebabActions, getPipelineRunKebabActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePipelineRunSubmit", function() { return handlePipelineRunSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerPipeline", function() { return triggerPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reRunPipelineRun", function() { return reRunPipelineRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPipeline", function() { return editPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPipeline", function() { return startPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerunPipelineAndStay", function() { return rerunPipelineAndStay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerunPipelineAndRedirect", function() { return rerunPipelineAndRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerunPipelineRunAndRedirect", function() { return rerunPipelineRunAndRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPipelineRun", function() { return stopPipelineRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrigger", function() { return addTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineKebabActions", function() { return getPipelineKebabActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunKebabActions", function() { return getPipelineRunKebabActions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _components_pipelines_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pipelines/modals */ "./packages/dev-console/src/components/pipelines/modals/index.ts");
/* harmony import */ var _components_pipelines_modals_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pipelines/modals/common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");
/* harmony import */ var _components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/pipelines/const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");









const handlePipelineRunSubmit = (pipelineRun) => {
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], pipelineRun.metadata.name, pipelineRun.metadata.namespace));
};
const triggerPipeline = (pipeline, onSubmit) => {
    Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], Object(_components_pipelines_modals_common_utils__WEBPACK_IMPORTED_MODULE_5__["getPipelineRunData"])(pipeline))
        .then(onSubmit)
        .catch((err) => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["errorModal"])({ error: err.message }));
};
const reRunPipelineRun = (kind, pipelineRun) => ({
    label: 'Rerun',
    callback: () => {
        const namespace = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipelineRun, 'metadata.namespace');
        const pipelineRef = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipelineRun, 'spec.pipelineRef.name');
        if (namespace && pipelineRef) {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], Object(_components_pipelines_modals_common_utils__WEBPACK_IMPORTED_MODULE_5__["getPipelineRunData"])(null, pipelineRun));
        }
        else {
            Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["errorModal"])({ error: 'Invalid Pipeline Run configuration, unable to start Pipeline.' });
        }
    },
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: pipelineRun.metadata.name,
        namespace: pipelineRun.metadata.namespace,
        verb: 'create',
    },
});
const editPipeline = (kind, pipeline) => ({
    label: 'Edit Pipeline',
    callback: () => {
        const { metadata: { name, namespace }, } = pipeline;
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(`/k8s/ns/${namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"])}/${name}/builder`);
    },
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: pipeline.metadata.name,
        namespace: pipeline.metadata.namespace,
        verb: 'update',
    },
});
const startPipeline = (kind, pipeline, onSubmit) => ({
    label: 'Start',
    callback: () => {
        const params = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipeline, ['spec', 'params'], []);
        const resources = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipeline, ['spec', 'resources'], []);
        const workspaces = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipeline, ['spec', 'workspaces'], []);
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](params) || !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](resources) || !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](workspaces)) {
            Object(_components_pipelines_modals__WEBPACK_IMPORTED_MODULE_4__["startPipelineModal"])({
                pipeline,
                modalClassName: 'modal-lg',
                onSubmit,
            });
        }
        else {
            triggerPipeline(pipeline, onSubmit);
        }
    },
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: pipeline.metadata.name,
        namespace: pipeline.metadata.namespace,
        verb: 'create',
    },
});
const rerunPipeline = (kind, pipelineRun, resources, customData = { label: 'Start Last Run' }) => {
    const { onComplete } = customData;
    const sharedProps = { label: customData.label, accessReview: {} };
    if (!pipelineRun ||
        !lodash__WEBPACK_IMPORTED_MODULE_0__["has"](pipelineRun, 'metadata.name') ||
        !lodash__WEBPACK_IMPORTED_MODULE_0__["has"](pipelineRun, 'metadata.namespace')) {
        return sharedProps;
    }
    return Object.assign(Object.assign({}, sharedProps), { callback: () => {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], Object(_components_pipelines_modals_common_utils__WEBPACK_IMPORTED_MODULE_5__["getPipelineRunData"])(null, pipelineRun))
                .then(typeof onComplete === 'function' ? onComplete : () => { })
                .catch((err) => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["errorModal"])({ error: err.message }));
        }, accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: pipelineRun.metadata.name,
            namespace: pipelineRun.metadata.namespace,
            verb: 'create',
        } });
};
const rerunPipelineAndStay = (kind, pipelineRun) => {
    return rerunPipeline(kind, pipelineRun);
};
const rerunPipelineAndRedirect = (kind, pipelineRun) => {
    return rerunPipeline(kind, pipelineRun, null, {
        onComplete: handlePipelineRunSubmit,
        label: 'Start Last Run',
    });
};
const rerunPipelineRunAndRedirect = (kind, pipelineRun) => {
    return rerunPipeline(kind, pipelineRun, null, {
        onComplete: handlePipelineRunSubmit,
        label: 'Rerun',
    });
};
const stopPipelineRun = (kind, pipelineRun) => {
    // The returned function will be called using the 'kind' and 'obj' in Kebab Actions
    return {
        label: 'Stop',
        callback: () => {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], {
                metadata: { name: pipelineRun.metadata.name, namespace: pipelineRun.metadata.namespace },
            }, [
                {
                    op: 'replace',
                    path: `/spec/status`,
                    value: 'PipelineRunCancelled',
                },
            ]);
        },
        hidden: !(pipelineRun && Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["pipelineRunFilterReducer"])(pipelineRun) === 'Running'),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: pipelineRun.metadata.name,
            namespace: pipelineRun.metadata.namespace,
            verb: 'update',
        },
    };
};
const addTrigger = (kind, pipeline) => ({
    label: 'Add Trigger',
    callback: () => {
        const cleanPipeline = Object.assign(Object.assign({}, pipeline), { metadata: Object.assign(Object.assign({}, pipeline.metadata), { labels: lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](pipeline.metadata.labels, [_components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__["StartedByLabel"].user]) }) });
        Object(_components_pipelines_modals__WEBPACK_IMPORTED_MODULE_4__["addTriggerModal"])({ pipeline: cleanPipeline, modalClassName: 'modal-lg' });
    },
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: pipeline.metadata.name,
        namespace: pipeline.metadata.namespace,
        verb: 'create',
    },
});
const removeTrigger = (kind, pipeline) => ({
    label: 'Remove Trigger',
    callback: () => {
        Object(_components_pipelines_modals__WEBPACK_IMPORTED_MODULE_4__["removeTriggerModal"])({ pipeline });
    },
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: pipeline.metadata.name,
        namespace: pipeline.metadata.namespace,
        verb: 'delete',
    },
});
const getPipelineKebabActions = (pipelineRun, isTriggerPresent) => [
    (model, resource) => startPipeline(model, resource, handlePipelineRunSubmit),
    ...(pipelineRun ? [() => rerunPipelineAndRedirect(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], pipelineRun)] : []),
    (model, pipeline) => addTrigger(_models__WEBPACK_IMPORTED_MODULE_7__["EventListenerModel"], pipeline),
    ...(isTriggerPresent ? [(model, pipeline) => removeTrigger(_models__WEBPACK_IMPORTED_MODULE_7__["EventListenerModel"], pipeline)] : []),
    editPipeline,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].factory.Delete,
];
const getPipelineRunKebabActions = (redirectReRun) => [
    redirectReRun ? rerunPipelineRunAndRedirect : reRunPipelineRun,
    stopPipelineRun,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].factory.Delete,
];


/***/ })

}]);
//# sourceMappingURL=pipeline-overview-list-9a0d4fb9620259261020.js.map