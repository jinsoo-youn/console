(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PipelineBuilderPage~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeli~6e8dac17"],{

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.scss":
/*!********************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationStepList.scss":
/*!****************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationStepList.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationStepList.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationStepList.tsx ***!
  \***************************************************************************************************************************/
/*! exports provided: PipelineVisualizationStepList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineVisualizationStepList", function() { return PipelineVisualizationStepList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _StatusIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusIcon */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/StatusIcon.tsx");
/* harmony import */ var _PipelineVisualizationStepList_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineVisualizationStepList.scss */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationStepList.scss");
/* harmony import */ var _PipelineVisualizationStepList_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PipelineVisualizationStepList_scss__WEBPACK_IMPORTED_MODULE_4__);





const TooltipColoredStatusIcon = ({ status }) => {
    const size = 18;
    const sharedProps = {
        height: size,
        width: size,
    };
    const icon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StatusIcon__WEBPACK_IMPORTED_MODULE_3__["StatusIcon"], Object.assign({ status: status }, sharedProps));
    if (status === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Succeeded || status === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Failed) {
        // Succeeded and Failed icons have transparent centers shapes - in tooltips, this becomes an undesired black
        // This will simply wrap the icon and place a white backdrop
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { color: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["getRunStatusColor"])(status).pftoken.value } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", Object.assign({}, sharedProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { className: "odc-pipeline-vis-steps-list__icon-backdrop", cx: size / 2, cy: size / 2, r: size / 2 - 1 }),
                icon)));
    }
    return icon;
};
const PipelineVisualizationStepList = ({ isSpecOverview, taskName, steps, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-steps-list" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-steps-list__task-name" }, taskName),
    steps.map(({ duration, name, runStatus: status }) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-pipeline-vis-steps-list__step', {
                'odc-pipeline-vis-steps-list__step--task-run': !isSpecOverview,
            }), key: name },
            !isSpecOverview ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-steps-list__icon" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TooltipColoredStatusIcon, { status: status }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "odc-pipeline-vis-steps-list__bullet" }, "\u2022")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-steps-list__name" }, name),
            !isSpecOverview && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-steps-list__duration" }, duration))));
    })));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationTask.scss":
/*!************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationTask.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationTask.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationTask.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: PipelineVisualizationTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineVisualizationTask", function() { return PipelineVisualizationTask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _frontend_public_models_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../frontend/public/models/index */ "./public/models/index.ts");
/* harmony import */ var _StatusIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StatusIcon */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/StatusIcon.tsx");
/* harmony import */ var _PipelineVisualizationStepList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PipelineVisualizationStepList */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationStepList.tsx");
/* harmony import */ var _TaskComponentTaskStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TaskComponentTaskStatus */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/TaskComponentTaskStatus.tsx");
/* harmony import */ var _pipeline_step_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipeline-step-utils */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/pipeline-step-utils.ts");
/* harmony import */ var _PipelineVisualizationTask_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PipelineVisualizationTask.scss */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationTask.scss");
/* harmony import */ var _PipelineVisualizationTask_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_PipelineVisualizationTask_scss__WEBPACK_IMPORTED_MODULE_13__);














const PipelineVisualizationTask = ({ pipelineRunName, task, namespace, pipelineRunStatus, disableTooltip, selected, }) => {
    const taskStatus = task.status || {
        duration: '',
        reason: _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Idle,
    };
    if (pipelineRunStatus === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Failed || pipelineRunStatus === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Cancelled) {
        if (task.status &&
            task.status.reason !== _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Succeeded &&
            task.status.reason !== _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Failed) {
            taskStatus.reason = _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Cancelled;
        }
    }
    const taskComponent = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TaskComponent, { pipelineRunName: pipelineRunName, name: task.name || '', namespace: namespace, status: taskStatus, isPipelineRun: !!pipelineRunStatus, disableTooltip: disableTooltip, selected: selected }));
    if (disableTooltip) {
        return taskComponent;
    }
    let resources;
    if (task.taskRef.kind === _frontend_public_models_index__WEBPACK_IMPORTED_MODULE_8__["ClusterTaskModel"].kind) {
        resources = [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_frontend_public_models_index__WEBPACK_IMPORTED_MODULE_8__["ClusterTaskModel"]),
                name: task.taskRef.name,
                prop: 'task',
            },
        ];
    }
    else {
        resources = [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_frontend_public_models_index__WEBPACK_IMPORTED_MODULE_8__["TaskModel"]),
                name: task.taskRef.name,
                namespace,
                prop: 'task',
            },
        ];
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["Firehose"], { resources: resources }, taskComponent);
};
const TaskComponent = ({ pipelineRunName, namespace, task, status, name, isPipelineRun, disableTooltip, selected, }) => {
    const stepList = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](task, ['data', 'spec', 'steps'], lodash__WEBPACK_IMPORTED_MODULE_1__["get"](status, ['steps'], []));
    const stepStatusList = stepList.map((step) => Object(_pipeline_step_utils__WEBPACK_IMPORTED_MODULE_12__["createStepStatus"])(step, status));
    const showStatusState = isPipelineRun && !!status && !!status.reason;
    const visualName = name || lodash__WEBPACK_IMPORTED_MODULE_1__["get"](task, ['metadata', 'name'], '');
    const path = pipelineRunName
        ? `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["resourcePathFromModel"])(_frontend_public_models_index__WEBPACK_IMPORTED_MODULE_8__["PipelineRunModel"], pipelineRunName, namespace)}/logs/${name}`
        : undefined;
    let taskPill = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('odc-pipeline-vis-task__content', { 'is-selected': selected }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('odc-pipeline-vis-task__title-wrapper', {
                'is-text-center': !isPipelineRun,
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task__title" }, visualName),
            showStatusState && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskComponentTaskStatus__WEBPACK_IMPORTED_MODULE_11__["default"], { steps: stepStatusList })),
        isPipelineRun && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task__status" }, showStatusState && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StatusIcon__WEBPACK_IMPORTED_MODULE_9__["ColoredStatusIcon"], { status: status.reason, height: 18, width: 18 })))));
    if (!disableTooltip) {
        taskPill = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { position: "bottom", enableFlip: false, content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineVisualizationStepList__WEBPACK_IMPORTED_MODULE_10__["PipelineVisualizationStepList"], { isSpecOverview: !isPipelineRun, taskName: visualName, steps: stepStatusList }) }, taskPill));
    }
    const visTask = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task__connector" }),
        taskPill));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task" }, path ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: path }, visTask) : visTask));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/StatusIcon.tsx":
/*!********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/StatusIcon.tsx ***!
  \********************************************************************************************************/
/*! exports provided: StatusIcon, ColoredStatusIcon, ColoredStatusIconWorkFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusIcon", function() { return StatusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredStatusIcon", function() { return ColoredStatusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredStatusIconWorkFlow", function() { return ColoredStatusIconWorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
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



const StatusIcon = (_a) => {
    var { status } = _a, props = __rest(_a, ["status"]);
    switch (status) {
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"]['In Progress']:
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Running:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["SyncAltIcon"], Object.assign({}, props, { className: "fa-spin" }));
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Succeeded:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["CheckCircleIcon"], Object.assign({}, props));
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Failed:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["ExclamationCircleIcon"], Object.assign({}, props));
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Idle:
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Pending:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["PendingIcon"], Object.assign({}, props));
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Cancelled:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["BanIcon"], Object.assign({}, props));
        case _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Skipped:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["AngleDoubleRightIcon"], Object.assign({}, props));
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["CircleIcon"], Object.assign({}, props));
    }
};
const ColoredStatusIcon = (_a) => {
    var { status } = _a, others = __rest(_a, ["status"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
            color: status
                ? Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["getRunStatusColor"])(status).pftoken.value
                : Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["getRunStatusColor"])(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Cancelled).pftoken.value,
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusIcon, Object.assign({ status: status }, others))));
};
const ColoredStatusIconWorkFlow = (_a) => {
    var { status } = _a, others = __rest(_a, ["status"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
            color: status
                ? Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["getRunStatusColor"])(status).pftoken.value
                : Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["getRunStatusColor"])(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_2__["runStatus"].Cancelled).pftoken.value
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusIcon, Object.assign({ status: status }, others))));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/TaskComponentTaskStatus.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/TaskComponentTaskStatus.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _charts_HorizontalStackedBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../charts/HorizontalStackedBars */ "./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx");



const TaskComponentTaskStatus = ({ steps }) => {
    if (steps.length === 0)
        return null;
    const visualValues = steps.map(({ name, runStatus }) => {
        return {
            color: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["getRunStatusColor"])(runStatus).pftoken.value,
            name,
            size: 1,
        };
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_charts_HorizontalStackedBars__WEBPACK_IMPORTED_MODULE_2__["default"], { values: visualValues, barGap: 2, height: 2 });
};
/* harmony default export */ __webpack_exports__["default"] = (TaskComponentTaskStatus);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowVisualizationTask.scss":
/*!************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowVisualizationTask.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowVisualizationTask.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowVisualizationTask.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: WorkflowVisualizationTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowVisualizationTask", function() { return WorkflowVisualizationTask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _public_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/models */ "./public/models/index.ts");
/* harmony import */ var _StatusIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StatusIcon */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/StatusIcon.tsx");
/* harmony import */ var _WorkflowVisualizationTask_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkflowVisualizationTask.scss */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowVisualizationTask.scss");
/* harmony import */ var _WorkflowVisualizationTask_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_WorkflowVisualizationTask_scss__WEBPACK_IMPORTED_MODULE_5__);






const WorkflowVisualizationTask = ({ pipelineRunName, task, namespace, pipelineRunStatus, disableTooltip, selected, }) => {
    const taskStatus = task.status;
    const taskComponent = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TaskComponent, { pipelineRunName: pipelineRunName, name: task.name || '', namespace: namespace, status: taskStatus, isPipelineRun: !!pipelineRunStatus, disableTooltip: disableTooltip, selected: selected }));
    if (disableTooltip) {
        return taskComponent;
    }
    let resources;
    if (task.taskRef.kind === _public_models__WEBPACK_IMPORTED_MODULE_3__["ClusterTaskModel"].kind) {
        resources = [
            {
                // kind: referenceForModel(ClusterTaskModel),
                kind: 'ClusterTask',
                name: task.taskRef.name,
                prop: 'task'
            }
        ];
    }
    else {
        resources = [
            {
                // kind: referenceForModel(TaskModel),
                kind: 'Task',
                name: task.taskRef.name,
                namespace,
                prop: 'task'
            }
        ];
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_public_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources }, taskComponent);
};
const TaskComponent = ({ pipelineRunName, namespace, task, status, name, isPipelineRun, disableTooltip, selected, }) => {
    const showStatusState = isPipelineRun && !!status && !!status.reason;
    const visualName = name;
    let taskPill = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-pipeline-vis-task__content', {
            'is-selected': selected
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-pipeline-vis-task__title-wrapper', {
                'is-text-center': !isPipelineRun
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task__title" }, visualName)),
        isPipelineRun && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task__status" }, showStatusState && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StatusIcon__WEBPACK_IMPORTED_MODULE_4__["ColoredStatusIconWorkFlow"], { status: status.reason, height: 18, width: 18 }))))));
    const visTask = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task__connector" }),
        taskPill));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-vis-task" }, visTask));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/pipeline-step-utils.ts":
/*!****************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/pipeline-step-utils.ts ***!
  \****************************************************************************************************************/
/*! exports provided: createStepStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStepStatus", function() { return createStepStatus; });
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");


var TerminatedReasons;
(function (TerminatedReasons) {
    TerminatedReasons["Completed"] = "Completed";
})(TerminatedReasons || (TerminatedReasons = {}));
const getMatchingStep = (step, status) => {
    const statusSteps = status.steps || [];
    return statusSteps.find((statusStep) => {
        // In rare occasions the status step name is prefixed with `step-`
        // This is likely a bug but this workaround will be temporary as it's investigated separately
        return statusStep.name === step.name || statusStep.name === `step-${step.name}`;
    });
};
const getMatchingStepDuration = (matchingStep) => {
    if (!matchingStep)
        return '';
    if (matchingStep.terminated) {
        return Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_1__["calculateRelativeTime"])(matchingStep.terminated.startedAt);
    }
    if (matchingStep.running) {
        return Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_1__["calculateRelativeTime"])(matchingStep.running.startedAt);
    }
    return '';
};
const createStepStatus = (step, status) => {
    let stepRunStatus = _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"].PipelineNotStarted;
    let duration = null;
    if (!status || !status.reason) {
        stepRunStatus = _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"].Cancelled;
    }
    else if (status.reason === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"]['In Progress']) {
        // In progress, try to get granular statuses
        const matchingStep = getMatchingStep(step, status);
        if (!matchingStep) {
            stepRunStatus = _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"].Pending;
        }
        else if (matchingStep.terminated) {
            stepRunStatus =
                matchingStep.terminated.reason === TerminatedReasons.Completed
                    ? _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"].Succeeded
                    : _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"].Failed;
            duration = getMatchingStepDuration(matchingStep);
        }
        else if (matchingStep.running) {
            stepRunStatus = _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"]['In Progress'];
            duration = getMatchingStepDuration(matchingStep);
        }
        else if (matchingStep.waiting) {
            stepRunStatus = _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_0__["runStatus"].Pending;
        }
    }
    else {
        // Not in progress, just use the run status reason
        stepRunStatus = status.reason;
        duration = getMatchingStepDuration(getMatchingStep(step, status)) || status.duration;
    }
    return {
        duration,
        name: step.name,
        runStatus: stepRunStatus,
    };
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/BuilderNode.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/BuilderNode.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _ErrorNodeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorNodeDecorator */ "./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.tsx");
/* harmony import */ var _PlusNodeDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlusNodeDecorator */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PlusNodeDecorator.tsx");
/* harmony import */ var _TaskNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskNode.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







const BuilderNode = ({ element }) => {
    const [showAdd, setShowAdd] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const { width, height } = element.getBounds();
    const data = element.getData();
    const { error, onAddNode, onNodeSelection } = data;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: "odc-builder-node", onFocus: () => setShowAdd(true), onBlur: () => setShowAdd(false), onMouseOver: () => setShowAdd(true), onMouseOut: () => setShowAdd(false) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { x: -_const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_RADIUS"] * 2, y: 0, width: width + _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_RADIUS"] * 4, height: height + _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_RADIUS"] * 2, fill: "transparent" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { onClick: () => onNodeSelection(data) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskNode__WEBPACK_IMPORTED_MODULE_5__["default"], { element: element, disableTooltip: true }),
            error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ErrorNodeDecorator__WEBPACK_IMPORTED_MODULE_3__["default"], { x: _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ERROR_RADIUS"] / 2, y: _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ERROR_RADIUS"] / 4, errorStr: error }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { style: { display: showAdd ? 'block' : 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PlusNodeDecorator__WEBPACK_IMPORTED_MODULE_4__["default"], { x: width + _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_RADIUS"] + _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_PADDING"], y: height / 2, tooltip: "Add a sequential task after this task", onClick: () => onAddNode(_const__WEBPACK_IMPORTED_MODULE_2__["AddNodeDirection"].AFTER) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PlusNodeDecorator__WEBPACK_IMPORTED_MODULE_4__["default"], { x: -_const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_RADIUS"] - _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_PADDING"], y: height / 2, tooltip: "Add a sequential task before this task", onClick: () => onAddNode(_const__WEBPACK_IMPORTED_MODULE_2__["AddNodeDirection"].BEFORE) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PlusNodeDecorator__WEBPACK_IMPORTED_MODULE_4__["default"], { x: width / 2, y: height + _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_RADIUS"] + _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ADD_PADDING"], tooltip: "Add a parallel task", tooltipPosition: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TooltipPosition"].bottom, onClick: () => onAddNode(_const__WEBPACK_IMPORTED_MODULE_2__["AddNodeDirection"].PARALLEL) }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(BuilderNode));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.scss":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _ErrorNodeDecorator_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorNodeDecorator.scss */ "./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.scss");
/* harmony import */ var _ErrorNodeDecorator_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ErrorNodeDecorator_scss__WEBPACK_IMPORTED_MODULE_5__);






const ErrorNodeDecorator = ({ errorStr, x, y }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: "odc-error-node-decorator", transform: `translate(${x}, ${y})` },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { cx: 0, cy: 0, r: _const__WEBPACK_IMPORTED_MODULE_4__["BUILDER_NODE_ERROR_RADIUS"], fill: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__["global_danger_color_100"].value }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: "translate(-5, -7)" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: _const__WEBPACK_IMPORTED_MODULE_4__["BUILDER_NODE_ERROR_RADIUS"] * 2, height: _const__WEBPACK_IMPORTED_MODULE_4__["BUILDER_NODE_ERROR_RADIUS"] * 2 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { content: errorStr },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["ExclamationIcon"], { color: "white" }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorNodeDecorator);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/InvalidTaskListNode.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/InvalidTaskListNode.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _ErrorNodeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorNodeDecorator */ "./packages/dev-console/src/components/pipelines/pipeline-topology/ErrorNodeDecorator.tsx");
/* harmony import */ var _TaskListNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskListNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.tsx");





const InvalidTaskListNode = ({ element }) => {
    const { task: { name }, } = element.getData();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskListNode__WEBPACK_IMPORTED_MODULE_4__["default"], { element: element, unselectedText: name }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ErrorNodeDecorator__WEBPACK_IMPORTED_MODULE_3__["default"], { x: _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ERROR_RADIUS"] / 2, y: _const__WEBPACK_IMPORTED_MODULE_2__["BUILDER_NODE_ERROR_RADIUS"] / 4, errorStr: "Task does not exist" })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(InvalidTaskListNode));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.scss":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _PipelineVisualizationSurface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PipelineVisualizationSurface */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineVisualizationSurface.tsx");
/* harmony import */ var _PipelineTopologyGraph_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PipelineTopologyGraph.scss */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.scss");
/* harmony import */ var _PipelineTopologyGraph_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PipelineTopologyGraph_scss__WEBPACK_IMPORTED_MODULE_3__);




const PipelineTopologyGraph = ({ id, fluid, nodes, edges, layout, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-topology-graph", style: { display: fluid ? 'block' : undefined } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineVisualizationSurface__WEBPACK_IMPORTED_MODULE_2__["default"], { model: {
                graph: {
                    id,
                    type: _console_topology__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].graph,
                    layout,
                },
                nodes,
                edges,
            } })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineTopologyGraph);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineVisualizationSurface.tsx":
/*!**********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineVisualizationSurface.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories */ "./packages/dev-console/src/components/pipelines/pipeline-topology/factories.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");





const PipelineVisualizationSurface = ({ model }) => {
    const [vis, setVis] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [maxSize, setMaxSize] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const layout = model.graph.layout;
    const onLayoutUpdate = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((nodes) => {
        const nodeBounds = nodes.map((node) => node.getBounds());
        const maxX = Math.floor(nodeBounds.map((bounds) => bounds.x).reduce((x1, x2) => Math.max(x1, x2), 0));
        const maxY = Math.floor(nodeBounds.map((bounds) => bounds.y).reduce((y1, y2) => Math.max(y1, y2), 0));
        let horizontalMargin = 0;
        let verticalMargin = 0;
        if (layout) {
            horizontalMargin = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getLayoutData"])(layout).marginx || 0;
            verticalMargin = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getLayoutData"])(layout).marginy || 0;
        }
        setMaxSize({
            // Nodes are rendered from the top-left
            height: maxY + _const__WEBPACK_IMPORTED_MODULE_3__["NODE_HEIGHT"] + _const__WEBPACK_IMPORTED_MODULE_3__["DROP_SHADOW_SPACING"] + verticalMargin * 2,
            width: maxX + _const__WEBPACK_IMPORTED_MODULE_3__["NODE_WIDTH"] + horizontalMargin * 2,
        });
    }, [setMaxSize, layout]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (vis === null) {
            const visualization = new _console_topology__WEBPACK_IMPORTED_MODULE_1__["Visualization"]();
            visualization.registerLayoutFactory(_factories__WEBPACK_IMPORTED_MODULE_2__["layoutFactory"]);
            visualization.registerComponentFactory(_factories__WEBPACK_IMPORTED_MODULE_2__["componentFactory"]);
            visualization.fromModel(model);
            visualization.addEventListener(_console_topology__WEBPACK_IMPORTED_MODULE_1__["GRAPH_LAYOUT_END_EVENT"], () => {
                onLayoutUpdate(visualization.getGraph().getNodes());
            });
            setVis(visualization);
        }
        else {
            vis.fromModel(model);
            vis.getGraph().layout();
        }
    }, [vis, model, onLayoutUpdate]);
    if (!vis)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: maxSize === null || maxSize === void 0 ? void 0 : maxSize.height, width: maxSize === null || maxSize === void 0 ? void 0 : maxSize.width } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["VisualizationSurface"], { visualization: vis })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineVisualizationSurface);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/PlusNodeDecorator.scss":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/PlusNodeDecorator.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/PlusNodeDecorator.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/PlusNodeDecorator.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _PlusNodeDecorator_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlusNodeDecorator.scss */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PlusNodeDecorator.scss");
/* harmony import */ var _PlusNodeDecorator_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PlusNodeDecorator_scss__WEBPACK_IMPORTED_MODULE_5__);






const PlusNodeDecorator = ({ x, y, onClick, tooltip, tooltipPosition, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { content: tooltip, position: tooltipPosition },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: "odc-plus-node-decorator", onClick: onClick, transform: `translate(${x}, ${y})` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { cx: 0, cy: 0, r: _const__WEBPACK_IMPORTED_MODULE_4__["BUILDER_NODE_ADD_RADIUS"], fill: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__["chart_color_blue_300"].value }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: "translate(-6, -6)" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["PlusIcon"], { color: "white" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PlusNodeDecorator);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/SpacerNode.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/SpacerNode.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");


const SpacerNode = () => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null);
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(SpacerNode));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskEdge.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/TaskEdge.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _draw_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/draw-utils.ts");


const TaskEdge = ({ element }) => {
    const startPoint = element.getStartPoint();
    const endPoint = element.getEndPoint();
    const sourceNode = element.getSource();
    const targetNode = element.getTarget();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: Object(_draw_utils__WEBPACK_IMPORTED_MODULE_1__["integralShapePath"])(startPoint.clone().translate(sourceNode.getBounds().width / 2 - 1, 0), endPoint.clone().translate(-targetNode.getBounds().width / 2, 0)), stroke: "var(--pf-global--BorderColor--light-100)", fill: "none", transform: "translate(0.5,0.5)" }));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskEdge);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.scss":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap-react */ "./node_modules/focus-trap-react/dist/focus-trap-react.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_popper_Popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/popper/Popper */ "./packages/console-shared/src/components/popper/Popper.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _TaskListNode_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskListNode.scss */ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.scss");
/* harmony import */ var _TaskListNode_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TaskListNode_scss__WEBPACK_IMPORTED_MODULE_7__);








const taskToOption = (task, callback) => {
    const { metadata: { name }, } = task;
    return {
        label: name,
        callback: () => {
            callback(task);
        },
    };
};
const TaskListNode = ({ element, unselectedText }) => {
    const triggerRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const [isMenuOpen, setMenuOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const { height, width } = element.getBounds();
    const { clusterTaskList, namespaceTaskList, onNewTask, onRemoveTask } = element.getData();
    const options = [
        ...namespaceTaskList.map((task) => taskToOption(task, onNewTask)),
        ...clusterTaskList.map((task) => taskToOption(task, onNewTask)),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: width, height: height, className: "odc-task-list-node" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-list-node__trigger-background", ref: triggerRef },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "odc-task-list-node__trigger", isDisabled: options.length === 0, onClick: () => {
                    setMenuOpen(!isMenuOpen);
                }, variant: "control" }, options.length === 0 ? ('No Tasks') : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], { breakpointMods: [
                    { modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexModifiers"].nowrap },
                    { modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexModifiers"]['space-items-none'] },
                ] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexItem"], { className: "odc-task-list-node__label", breakpointMods: [{ modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexModifiers"].grow }] }, unselectedText || 'Select task'),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FlexItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["CaretDownIcon"], null)))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_popper_Popper__WEBPACK_IMPORTED_MODULE_4__["default"], { open: isMenuOpen, placement: "bottom-start", closeOnEsc: true, closeOnOutsideClick: true, onRequestClose: (e) => {
                var _a;
                if (!e || !((_a = triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                    setMenuOpen(false);
                }
            }, reference: () => triggerRef.current },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](focus_trap_react__WEBPACK_IMPORTED_MODULE_1__, { focusTrapOptions: { clickOutsideDeactivates: true, returnFocusOnDeactivate: false } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-dropdown pf-m-expanded" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "pf-c-dropdown__menu pf-m-align-right oc-kebab__popper-items odc-task-list-node__list-items" },
                        options.map((option) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: option.label },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["KebabItem"], { option: option, onClick: () => {
                                    option.callback && option.callback();
                                } })))),
                        onRemoveTask && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", { className: "odc-task-list-node__divider" })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["KebabItem"], { option: { label: 'Delete Task', callback: onRemoveTask }, onClick: onRemoveTask }))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_6__["observer"])(TaskListNode));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskNode.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/TaskNode.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _detail_page_tabs_pipeline_details_PipelineVisualizationTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-page-tabs/pipeline-details/PipelineVisualizationTask */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualizationTask.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");





const TaskNode = ({ element, disableTooltip }) => {
    var _a, _b, _c, _d;
    const { height, width } = element.getBounds();
    const { pipeline, pipelineRun, task, selected } = element.getData();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: width, height: height + _const__WEBPACK_IMPORTED_MODULE_4__["DROP_SHADOW_SPACING"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detail_page_tabs_pipeline_details_PipelineVisualizationTask__WEBPACK_IMPORTED_MODULE_3__["PipelineVisualizationTask"], { pipelineRunName: (_a = pipelineRun === null || pipelineRun === void 0 ? void 0 : pipelineRun.metadata) === null || _a === void 0 ? void 0 : _a.name, task: task, pipelineRunStatus: pipelineRun && Object(_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_2__["pipelineRunFilterReducer"])(pipelineRun), namespace: (_c = (_b = pipeline === null || pipeline === void 0 ? void 0 : pipeline.metadata) === null || _b === void 0 ? void 0 : _b.namespace) !== null && _c !== void 0 ? _c : (_d = pipelineRun === null || pipelineRun === void 0 ? void 0 : pipelineRun.metadata) === null || _d === void 0 ? void 0 : _d.namespace, disableTooltip: disableTooltip, selected: selected })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(TaskNode));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/WorkflowNode.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/WorkflowNode.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _topology_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../topology/src */ "./packages/topology/src/index.ts");
/* harmony import */ var _detail_page_tabs_pipeline_details_WorkflowVisualizationTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-page-tabs/pipeline-details/WorkflowVisualizationTask */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowVisualizationTask.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");




const WorkflowNode = ({ element }) => {
    var _a, _b;
    const { height, width } = element.getBounds();
    const { pipeline, pipelineRun, task, selected } = element.getData();
    if (!!pipelineRun) {
        for (let node in pipelineRun.status.nodes) {
            // step, dag 인 경우 displayName으로 node 참조. 템플릿 항목 자체를 노드로 사용하는 경우 templateName으로 node 참조
            const nodeNameField = task.isTemplate ? 'templateName' : 'displayName';
            if (pipelineRun.status.nodes[node][nodeNameField] === task.name) {
                task.status = { reason: pipelineRun.status.nodes[node].phase };
                break;
            }
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: width, height: height + _const__WEBPACK_IMPORTED_MODULE_3__["DROP_SHADOW_SPACING"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detail_page_tabs_pipeline_details_WorkflowVisualizationTask__WEBPACK_IMPORTED_MODULE_2__["WorkflowVisualizationTask"], { pipelineRunName: (_a = pipelineRun === null || pipelineRun === void 0 ? void 0 : pipelineRun.metadata) === null || _a === void 0 ? void 0 : _a.name, task: task, pipelineRunStatus: pipelineRun && pipelineRun.status.phase, namespace: (_b = pipeline === null || pipeline === void 0 ? void 0 : pipeline.metadata) === null || _b === void 0 ? void 0 : _b.namespace, disableTooltip: true, selected: selected })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_topology_src__WEBPACK_IMPORTED_MODULE_1__["observer"])(WorkflowNode));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts ***!
  \**********************************************************************************/
/*! exports provided: NODE_SEPARATION_HORIZONTAL, NODE_SEPARATION_VERTICAL, DROP_SHADOW_SPACING, BUILDER_NODE_ADD_RADIUS, BUILDER_NODE_ERROR_RADIUS, BUILDER_NODE_ADD_PADDING, NODE_WIDTH, NODE_HEIGHT, NodeType, DrawDesign, PipelineLayout, AddNodeDirection, DAGRE_VIEWER_PROPS, DAGRE_BUILDER_PROPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_SEPARATION_HORIZONTAL", function() { return NODE_SEPARATION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_SEPARATION_VERTICAL", function() { return NODE_SEPARATION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_SHADOW_SPACING", function() { return DROP_SHADOW_SPACING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDER_NODE_ADD_RADIUS", function() { return BUILDER_NODE_ADD_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDER_NODE_ERROR_RADIUS", function() { return BUILDER_NODE_ERROR_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDER_NODE_ADD_PADDING", function() { return BUILDER_NODE_ADD_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_WIDTH", function() { return NODE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_HEIGHT", function() { return NODE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawDesign", function() { return DrawDesign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineLayout", function() { return PipelineLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNodeDirection", function() { return AddNodeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAGRE_VIEWER_PROPS", function() { return DAGRE_VIEWER_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAGRE_BUILDER_PROPS", function() { return DAGRE_BUILDER_PROPS; });
const NODE_SEPARATION_HORIZONTAL = 25;
const NODE_SEPARATION_VERTICAL = 20;
const DROP_SHADOW_SPACING = 5;
const BUILDER_NODE_ADD_RADIUS = 9;
const BUILDER_NODE_ERROR_RADIUS = 9;
const BUILDER_NODE_ADD_PADDING = 4;
const NODE_WIDTH = 143;
const NODE_HEIGHT = 38;
var NodeType;
(function (NodeType) {
    NodeType["TASK_NODE"] = "task";
    NodeType["SPACER_NODE"] = "spacer";
    NodeType["TASK_LIST_NODE"] = "task-list";
    NodeType["BUILDER_NODE"] = "builder";
    NodeType["INVALID_TASK_LIST_NODE"] = "invalid-task-list";
    NodeType["WORKFLOW_NODE"] = "workflow";
})(NodeType || (NodeType = {}));
var DrawDesign;
(function (DrawDesign) {
    DrawDesign["INTEGRAL_SHAPE"] = "integral-shape";
    DrawDesign["STRAIGHT"] = "line";
})(DrawDesign || (DrawDesign = {}));
var PipelineLayout;
(function (PipelineLayout) {
    PipelineLayout["DAGRE_BUILDER"] = "dagre-builder";
    PipelineLayout["DAGRE_VIEWER"] = "dagre-viewer";
})(PipelineLayout || (PipelineLayout = {}));
var AddNodeDirection;
(function (AddNodeDirection) {
    /**
     * Rules today:
     *  - the `relatedTask` is pointing at ONLY us
     *  - we inherit all that `relatedTask` is pointing at
     */
    AddNodeDirection["BEFORE"] = "in-run-after";
    /**
     * Rules today:
     *  - the `relatedTask` must be our ONLY runAfter
     *  - we are added to all that is pointing at `relatedTask`
     */
    AddNodeDirection["AFTER"] = "has-run-after";
    /**
     * Rules today:
     *  - we inherit all that `relatedTask` is pointing at
     *  - we are added to all that is pointing at `relatedTask`
     */
    AddNodeDirection["PARALLEL"] = "shared-parallel";
})(AddNodeDirection || (AddNodeDirection = {}));
const DAGRE_SHARED_PROPS = {
    nodesep: NODE_SEPARATION_VERTICAL,
    ranksep: NODE_SEPARATION_HORIZONTAL,
    edgesep: 25,
    ranker: 'longest-path',
    rankdir: 'LR',
    align: 'UL',
    marginx: 20,
    marginy: 20,
};
const DAGRE_VIEWER_PROPS = Object.assign({}, DAGRE_SHARED_PROPS);
const DAGRE_BUILDER_PROPS = Object.assign(Object.assign({}, DAGRE_SHARED_PROPS), { ranksep: NODE_SEPARATION_HORIZONTAL + BUILDER_NODE_ADD_RADIUS * 2, nodesep: NODE_SEPARATION_VERTICAL + BUILDER_NODE_ADD_RADIUS, marginx: DAGRE_SHARED_PROPS.marginx + BUILDER_NODE_ADD_RADIUS * 2, marginy: DAGRE_SHARED_PROPS.marginy + BUILDER_NODE_ADD_RADIUS * 2 });


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/draw-utils.ts":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/draw-utils.ts ***!
  \***************************************************************************************/
/*! exports provided: straightPath, integralShapePath, path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "straightPath", function() { return straightPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integralShapePath", function() { return integralShapePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");


const join = (...segments) => segments.filter((seg) => !!seg).join(' ');
const leftRight = (p1, p2) => p1.x < p2.x;
const topDown = (p1, p2) => p1.y < p2.y;
const bottomUp = (p1, p2) => p1.y > p2.y;
const point = (p) => `${p.x},${p.y}`;
const moveTo = (p) => `M ${point(p)}`;
const lineTo = (p) => `L ${point(p)}`;
const quadTo = (corner, end) => `Q ${point(corner)} ${point(end)}`;
// TODO: Try to simplify
// x should not be greater than (NODE_SEPARATION_HORIZONTAL / 2)
const CURVE_SIZE = { x: 8, y: 10 };
const curve = (fromPoint, cornerPoint, toPoint) => {
    const topToBottom = topDown(fromPoint, toPoint);
    if (topToBottom) {
        const rightAndDown = leftRight(fromPoint, cornerPoint) && topDown(cornerPoint, toPoint);
        const downAndRight = topDown(fromPoint, cornerPoint) && leftRight(cornerPoint, toPoint);
        if (rightAndDown) {
            return join(lineTo(cornerPoint.clone().translate(-CURVE_SIZE.x, 0)), quadTo(cornerPoint, cornerPoint.clone().translate(0, CURVE_SIZE.y)));
        }
        if (downAndRight) {
            return join(lineTo(cornerPoint.clone().translate(0, -CURVE_SIZE.y)), quadTo(cornerPoint, cornerPoint.clone().translate(CURVE_SIZE.x, 0)));
        }
    }
    else {
        const rightAndUp = leftRight(fromPoint, cornerPoint) && bottomUp(cornerPoint, toPoint);
        const upAndRight = bottomUp(fromPoint, cornerPoint) && leftRight(cornerPoint, toPoint);
        if (rightAndUp) {
            return join(lineTo(cornerPoint.clone().translate(-CURVE_SIZE.x, 0)), quadTo(cornerPoint, cornerPoint.clone().translate(0, -CURVE_SIZE.y)));
        }
        if (upAndRight) {
            return join(lineTo(cornerPoint.clone().translate(0, CURVE_SIZE.y)), quadTo(cornerPoint, cornerPoint.clone().translate(CURVE_SIZE.x, 0)));
        }
    }
    return '';
};
const straightPath = (start, finish) => join(moveTo(start), lineTo(finish));
const integralShapePath = (start, finish) => {
    // Integral shape: ∫
    let firstCurve = null;
    let secondCurve = null;
    if (start.y !== finish.y) {
        const cornerX = Math.floor(start.x + _const__WEBPACK_IMPORTED_MODULE_1__["NODE_SEPARATION_HORIZONTAL"] / 2);
        const firstCorner = new _console_topology__WEBPACK_IMPORTED_MODULE_0__["Point"](cornerX, start.y);
        const secondCorner = new _console_topology__WEBPACK_IMPORTED_MODULE_0__["Point"](cornerX, finish.y);
        firstCurve = curve(start, firstCorner, secondCorner);
        secondCurve = curve(firstCorner, secondCorner, finish);
    }
    return join(moveTo(start), firstCurve, secondCurve, lineTo(finish));
};
const path = (start, finish, drawDesign) => {
    switch (drawDesign) {
        case _const__WEBPACK_IMPORTED_MODULE_1__["DrawDesign"].INTEGRAL_SHAPE:
            return integralShapePath(start, finish);
        case _const__WEBPACK_IMPORTED_MODULE_1__["DrawDesign"].STRAIGHT:
        default:
            return straightPath(start, finish);
    }
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/factories.ts":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/factories.ts ***!
  \**************************************************************************************/
/*! exports provided: componentFactory, layoutFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFactory", function() { return componentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutFactory", function() { return layoutFactory; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _BuilderNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/BuilderNode.tsx");
/* harmony import */ var _InvalidTaskListNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InvalidTaskListNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/InvalidTaskListNode.tsx");
/* harmony import */ var _SpacerNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpacerNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/SpacerNode.tsx");
/* harmony import */ var _TaskNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskNode.tsx");
/* harmony import */ var _TaskEdge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TaskEdge */ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskEdge.tsx");
/* harmony import */ var _TaskListNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskListNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/TaskListNode.tsx");
/* harmony import */ var _WorkflowNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WorkflowNode */ "./packages/dev-console/src/components/pipelines/pipeline-topology/WorkflowNode.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");










const componentFactory = (kind, type) => {
    switch (kind) {
        case _console_topology__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].graph:
            return _console_topology__WEBPACK_IMPORTED_MODULE_0__["GraphComponent"];
        case _console_topology__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].edge:
            return _TaskEdge__WEBPACK_IMPORTED_MODULE_6__["default"];
        case _console_topology__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].node:
            switch (type) {
                case _const__WEBPACK_IMPORTED_MODULE_1__["NodeType"].TASK_NODE:
                    return _TaskNode__WEBPACK_IMPORTED_MODULE_5__["default"];
                case _const__WEBPACK_IMPORTED_MODULE_1__["NodeType"].WORKFLOW_NODE:
                    return _WorkflowNode__WEBPACK_IMPORTED_MODULE_8__["default"];
                case _const__WEBPACK_IMPORTED_MODULE_1__["NodeType"].SPACER_NODE:
                    return _SpacerNode__WEBPACK_IMPORTED_MODULE_4__["default"];
                case _const__WEBPACK_IMPORTED_MODULE_1__["NodeType"].TASK_LIST_NODE:
                    return _TaskListNode__WEBPACK_IMPORTED_MODULE_7__["default"];
                case _const__WEBPACK_IMPORTED_MODULE_1__["NodeType"].INVALID_TASK_LIST_NODE:
                    return _InvalidTaskListNode__WEBPACK_IMPORTED_MODULE_3__["default"];
                case _const__WEBPACK_IMPORTED_MODULE_1__["NodeType"].BUILDER_NODE:
                    return _BuilderNode__WEBPACK_IMPORTED_MODULE_2__["default"];
                default:
                    return undefined;
            }
        default:
            return undefined;
    }
};
const layoutFactory = (type, graph) => {
    switch (type) {
        case _const__WEBPACK_IMPORTED_MODULE_1__["PipelineLayout"].DAGRE_BUILDER:
        case _const__WEBPACK_IMPORTED_MODULE_1__["PipelineLayout"].DAGRE_VIEWER:
            return new _console_topology__WEBPACK_IMPORTED_MODULE_0__["DagreLayout"](graph, Object.assign({ 
                // Hack to get around undesirable defaults
                // TODO: fix this, it's not ideal but it works for now
                linkDistance: 0, nodeDistance: 0, groupDistance: 0, collideDistance: 0, simulationSpeed: 0, chargeStrength: 0, allowDrag: false, layoutOnDrag: false }, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLayoutData"])(type)));
        default:
            return undefined;
    }
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts ***!
  \**********************************************************************************/
/*! exports provided: createTaskNode, createSpacerNode, createTaskListNode, createInvalidTaskListNode, createBuilderNode, getNodeCreator, handleParallelToParallelNodes, tasksToNodes, tasksToBuilderNodes, getEdgesFromNodes, getTopologyNodesEdges, getLayoutData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTaskNode", function() { return createTaskNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpacerNode", function() { return createSpacerNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTaskListNode", function() { return createTaskListNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalidTaskListNode", function() { return createInvalidTaskListNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBuilderNode", function() { return createBuilderNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeCreator", function() { return getNodeCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleParallelToParallelNodes", function() { return handleParallelToParallelNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksToNodes", function() { return tasksToNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksToBuilderNodes", function() { return tasksToBuilderNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEdgesFromNodes", function() { return getEdgesFromNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyNodesEdges", function() { return getTopologyNodesEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayoutData", function() { return getLayoutData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");



const createGenericNode = (type, width) => (name, data) => ({
    id: name,
    data,
    height: _const__WEBPACK_IMPORTED_MODULE_2__["NODE_HEIGHT"],
    width: width != null ? width : _const__WEBPACK_IMPORTED_MODULE_2__["NODE_WIDTH"],
    type,
});
// Node variations
const createTaskNode = createGenericNode(_const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].TASK_NODE);
const createSpacerNode = createGenericNode(_const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].SPACER_NODE, 0);
const createTaskListNode = createGenericNode(_const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].TASK_LIST_NODE);
const createInvalidTaskListNode = createGenericNode(_const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].INVALID_TASK_LIST_NODE);
const createBuilderNode = createGenericNode(_const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].BUILDER_NODE);
const getNodeCreator = (type) => {
    switch (type) {
        case _const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].TASK_LIST_NODE:
            return createTaskListNode;
        case _const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].BUILDER_NODE:
            return createBuilderNode;
        case _const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].SPACER_NODE:
            return createSpacerNode;
        case _const__WEBPACK_IMPORTED_MODULE_2__["NodeType"].TASK_NODE:
        default:
            return createTaskNode;
    }
};
const handleParallelToParallelNodes = (nodes) => {
    // Collect only multiple run-afters
    const multipleRunBeforeMap = nodes.reduce((acc, node, idx) => {
        const { data: { task: { runAfter }, }, } = node;
        if (runAfter && runAfter.length > 1) {
            const id = [...runAfter]
                .sort((a, b) => a.localeCompare(b))
                .reduce((str, ref) => `${str}|${ref}`);
            if (!Array.isArray(acc[id])) {
                acc[id] = [];
            }
            acc[id].push({
                node,
                runAfter,
                atIndex: idx,
            });
        }
        return acc;
    }, {});
    // Trim out single occurrences
    const multiParallelToParallelList = Object.values(multipleRunBeforeMap).filter((data) => data.length > 1);
    if (multiParallelToParallelList.length === 0) {
        // No parallel to parallel
        return nodes;
    }
    // Insert a spacer node between the multiple nodes on the sides of a parallel-to-parallel
    const newNodes = [];
    const newRunAfterNodeMap = {};
    multiParallelToParallelList.forEach((p2p) => {
        // All nodes in each array share their runAfters
        const { runAfter } = p2p[0];
        const names = p2p.map((p2pData) => p2pData.node.id);
        const parallelSpacerName = `parallel-${names.join('-')}`;
        names.forEach((p2pNodeId) => {
            if (!Array.isArray(newRunAfterNodeMap[p2pNodeId])) {
                newRunAfterNodeMap[p2pNodeId] = [];
            }
            newRunAfterNodeMap[p2pNodeId].push(parallelSpacerName);
        });
        newNodes.push(createSpacerNode(parallelSpacerName, {
            task: {
                name: parallelSpacerName,
                runAfter,
            },
        }));
    });
    // Update all impacted nodes to point at the spacer node as the spacer points at their original runAfters
    nodes.forEach((node) => {
        const newRunAfters = newRunAfterNodeMap[node.id];
        if (newRunAfters && newRunAfters.length > 0) {
            const { data: { task }, type, } = node;
            const createNode = getNodeCreator(type);
            // Recreate the node with the new runAfter pointing to the spacer node
            newNodes.push(createNode(node.id, Object.assign(Object.assign({}, node.data), { task: Object.assign(Object.assign({}, task), { runAfter: newRunAfters }) })));
        }
        else {
            // Unaffected node, just carry it over
            newNodes.push(node);
        }
    });
    return newNodes;
};
const tasksToNodes = (taskList, pipeline, pipelineRun) => {
    const nodeList = taskList.map((task) => createTaskNode(task.name, {
        task,
        pipeline,
        pipelineRun,
    }));
    return handleParallelToParallelNodes(nodeList);
};
const tasksToBuilderNodes = (taskList, onAddNode, onNodeSelection, getError, selectedIds) => {
    return taskList.map((task) => {
        return createBuilderNode(task.name, {
            error: getError(task.name),
            task,
            selected: selectedIds.includes(task.name),
            onNodeSelection: () => {
                onNodeSelection(task);
            },
            onAddNode: (direction) => {
                onAddNode(task, direction);
            },
        });
    });
};
const getEdgesFromNodes = (nodes) => lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"](nodes.map((node) => {
    const { data: { task: { name: target, runAfter = [] }, }, } = node;
    if (runAfter.length === 0)
        return null;
    return runAfter.map((source) => ({
        id: `${source}~to~${target}`,
        type: 'edge',
        source,
        target,
    }));
})).filter((edgeList) => !!edgeList);
const getTopologyNodesEdges = (pipeline, pipelineRun) => {
    const taskList = lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"](Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_1__["getPipelineTasks"])(pipeline, pipelineRun));
    const nodes = tasksToNodes(taskList, pipeline, pipelineRun);
    const edges = getEdgesFromNodes(nodes);
    return { nodes, edges };
};
const getLayoutData = (layout) => {
    switch (layout) {
        case _const__WEBPACK_IMPORTED_MODULE_2__["PipelineLayout"].DAGRE_BUILDER:
            return _const__WEBPACK_IMPORTED_MODULE_2__["DAGRE_BUILDER_PROPS"];
        case _const__WEBPACK_IMPORTED_MODULE_2__["PipelineLayout"].DAGRE_VIEWER:
            return _const__WEBPACK_IMPORTED_MODULE_2__["DAGRE_VIEWER_PROPS"];
        default:
            return null;
    }
};


/***/ })

}]);
//# sourceMappingURL=PipelineBuilderPage~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeli~6e8dac17-a67cb4fc9835af9dde15.js.map