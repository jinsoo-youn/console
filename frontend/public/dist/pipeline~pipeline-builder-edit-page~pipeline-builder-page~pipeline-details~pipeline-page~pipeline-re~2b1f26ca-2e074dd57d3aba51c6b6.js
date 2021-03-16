(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details~pipeline-page~pipeline-re~2b1f26ca"],{

/***/ "./packages/dev-console/src/components/pipelineruns/status/LinkedPipelineRunTaskStatus.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/LinkedPipelineRunTaskStatus.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineTaskStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineTaskStatus */ "./packages/dev-console/src/components/pipelineruns/status/PipelineTaskStatus.tsx");





/**
 * Will attempt to render a link to the log file associated with the pipelineRun if it has the data.
 * If it does not, it'll just render the pipeline status.
 */
const LinkedPipelineRunTaskStatus = ({ pipeline, pipelineRun, }) => {
    var _a, _b, _c;
    const pipelineStatus = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineTaskStatus__WEBPACK_IMPORTED_MODULE_4__["PipelineTaskStatus"], { key: (_a = pipelineRun.metadata) === null || _a === void 0 ? void 0 : _a.name, pipeline: pipeline, pipelinerun: pipelineRun }));
    if (((_b = pipelineRun.metadata) === null || _b === void 0 ? void 0 : _b.name) && ((_c = pipelineRun.metadata) === null || _c === void 0 ? void 0 : _c.namespace)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["PipelineRunModel"], pipelineRun.metadata.name, pipelineRun.metadata.namespace)}/logs` }, pipelineStatus));
    }
    return pipelineStatus;
};
/* harmony default export */ __webpack_exports__["default"] = (LinkedPipelineRunTaskStatus);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/status/PipelineBars.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/PipelineBars.tsx ***!
  \**********************************************************************************/
/*! exports provided: PipelineBars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineBars", function() { return PipelineBars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _charts_HorizontalStackedBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../charts/HorizontalStackedBars */ "./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _TaskStatusTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskStatusTooltip */ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.tsx");





const PipelineBars = ({ pipelinerun, pipeline }) => {
    const taskStatus = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["getTaskStatus"])(pipelinerun, pipeline === null || pipeline === void 0 ? void 0 : pipeline.data);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskStatusTooltip__WEBPACK_IMPORTED_MODULE_4__["default"], { taskStatus: taskStatus }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_charts_HorizontalStackedBars__WEBPACK_IMPORTED_MODULE_2__["default"], { height: "1em", inline: true, values: Object.keys(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["runStatus"]).map((status) => ({
                color: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["getRunStatusColor"])(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["runStatus"][status]).pftoken.value,
                name: status,
                size: taskStatus[_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["runStatus"][status]],
            })) })));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/status/PipelineTaskStatus.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/PipelineTaskStatus.tsx ***!
  \****************************************************************************************/
/*! exports provided: PipelineTaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineTaskStatus", function() { return PipelineTaskStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineBars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineBars */ "./packages/dev-console/src/components/pipelineruns/status/PipelineBars.tsx");





const PipelineTaskStatus = ({ pipelinerun, pipeline, }) => {
    var _a, _b, _c;
    return !pipeline && ((_b = (_a = pipelinerun.spec) === null || _a === void 0 ? void 0 : _a.pipelineRef) === null || _b === void 0 ? void 0 : _b.name) && ((_c = pipelinerun.metadata) === null || _c === void 0 ? void 0 : _c.namespace) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: [
            {
                name: pipelinerun.spec.pipelineRef.name,
                namespace: pipelinerun.metadata.namespace,
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"]),
                isList: false,
                prop: 'pipeline',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBars__WEBPACK_IMPORTED_MODULE_4__["PipelineBars"], { pipelinerun: pipelinerun }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBars__WEBPACK_IMPORTED_MODULE_4__["PipelineBars"], { pipelinerun: pipelinerun, pipeline: { data: pipeline } }));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.scss":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _TaskStatusTooltip_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskStatusTooltip.scss */ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.scss");
/* harmony import */ var _TaskStatusTooltip_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskStatusTooltip_scss__WEBPACK_IMPORTED_MODULE_2__);



const TaskStatusToolTip = ({ taskStatus }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-status-tooltip" }, Object.keys(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"]).map((status) => {
        const { message, pftoken } = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["getRunStatusColor"])(status);
        return taskStatus[status] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-status-tooltip__legend", style: { background: pftoken.value } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, status === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"].PipelineNotStarted || status === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"].FailedToStart
                ? message
                : `${taskStatus[status]} ${message}`))) : null;
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskStatusToolTip);


/***/ }),

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
//# sourceMappingURL=pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details~pipeline-page~pipeline-re~2b1f26ca-2e074dd57d3aba51c6b6.js.map