(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision~dev-console-edit~dev-console-import~dev-console-projectDetails~dev-console-topology~~1015c5b1"],{

/***/ "./packages/dev-console/src/components/pipelines/const.ts":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/const.ts ***!
  \****************************************************************/
/*! exports provided: StartedByLabel, PipelineResourceType, pipelineResourceTypeSelections, VolumeTypes, SecretAnnotationId, SecretAnnotationType, PIPELINE_SERVICE_ACCOUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartedByLabel", function() { return StartedByLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineResourceType", function() { return PipelineResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineResourceTypeSelections", function() { return pipelineResourceTypeSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeTypes", function() { return VolumeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretAnnotationId", function() { return SecretAnnotationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretAnnotationType", function() { return SecretAnnotationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPELINE_SERVICE_ACCOUNT", function() { return PIPELINE_SERVICE_ACCOUNT; });
var StartedByLabel;
(function (StartedByLabel) {
    StartedByLabel["user"] = "pipeline.openshift.io/started-by";
    StartedByLabel["triggers"] = "triggers.tekton.dev/eventlistener";
})(StartedByLabel || (StartedByLabel = {}));
var PipelineResourceType;
(function (PipelineResourceType) {
    PipelineResourceType["git"] = "git";
    PipelineResourceType["image"] = "image";
    PipelineResourceType["cluster"] = "cluster";
    PipelineResourceType["storage"] = "storage";
})(PipelineResourceType || (PipelineResourceType = {}));
const pipelineResourceTypeSelections = {
    '': 'Select resource type',
    [PipelineResourceType.git]: 'Git',
    [PipelineResourceType.image]: 'Image',
    [PipelineResourceType.cluster]: 'Cluster',
    [PipelineResourceType.storage]: 'Storage',
};
var VolumeTypes;
(function (VolumeTypes) {
    VolumeTypes["EmptyDirectory"] = "Empty Directory";
    VolumeTypes["ConfigMap"] = "Config Map";
    VolumeTypes["Secret"] = "Secret";
    VolumeTypes["PVC"] = "PVC";
})(VolumeTypes || (VolumeTypes = {}));
var SecretAnnotationId;
(function (SecretAnnotationId) {
    SecretAnnotationId["Git"] = "git";
    SecretAnnotationId["Image"] = "docker";
})(SecretAnnotationId || (SecretAnnotationId = {}));
const SecretAnnotationType = {
    [SecretAnnotationId.Git]: 'Git Server',
    [SecretAnnotationId.Image]: 'Docker Registry',
};
const PIPELINE_SERVICE_ACCOUNT = 'pipeline';


/***/ }),

/***/ "./packages/dev-console/src/utils/pipeline-augment.ts":
/*!************************************************************!*\
  !*** ./packages/dev-console/src/utils/pipeline-augment.ts ***!
  \************************************************************/
/*! exports provided: getResources, getLatestRun, augmentRunsToData, runStatus, getRunStatusColor, truncateName, getTaskStatus, getResourceModelFromTaskKind, getResourceModelFromBindingKind, getResourceModelFromTask, pipelineRefExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResources", function() { return getResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestRun", function() { return getLatestRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augmentRunsToData", function() { return augmentRunsToData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runStatus", function() { return runStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunStatusColor", function() { return getRunStatusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateName", function() { return truncateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskStatus", function() { return getTaskStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromTaskKind", function() { return getResourceModelFromTaskKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromBindingKind", function() { return getResourceModelFromBindingKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromTask", function() { return getResourceModelFromTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRefExists", function() { return pipelineRefExists; });
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");




const getResources = (data) => {
    const resources = [];
    const propsReferenceForRuns = [];
    if (data && data.length > 0) {
        data.forEach((pipeline, i) => {
            if (pipeline.metadata && pipeline.metadata.namespace && pipeline.metadata.name) {
                propsReferenceForRuns.push(`PipelineRun_${i}`);
                resources.push({
                    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"]),
                    namespace: pipeline.metadata.namespace,
                    isList: true,
                    prop: `PipelineRun_${i}`,
                    selector: {
                        'tekton.dev/pipeline': pipeline.metadata.name,
                    },
                });
            }
        });
        return { propsReferenceForRuns, resources };
    }
    return { propsReferenceForRuns: null, resources: null };
};
const getLatestRun = (runs, field) => {
    if (!runs || !runs.data || !(runs.data.length > 0) || !field) {
        return null;
    }
    let latestRun = runs.data[0];
    if (field === 'creationTimestamp') {
        for (let i = 1; i < runs.data.length; i++) {
            latestRun =
                runs.data[i] &&
                    runs.data[i].metadata &&
                    runs.data[i].metadata[field] &&
                    new Date(runs.data[i].metadata[field]) > new Date(latestRun.metadata[field])
                    ? runs.data[i]
                    : latestRun;
        }
    }
    else if (field === 'startTime' || field === 'completionTime') {
        for (let i = 1; i < runs.data.length; i++) {
            latestRun =
                runs.data[i] &&
                    runs.data[i].status &&
                    runs.data[i].status[field] &&
                    new Date(runs.data[i].status[field]) > new Date(latestRun.status[field])
                    ? runs.data[i]
                    : latestRun;
        }
    }
    else {
        latestRun = runs.data[runs.data.length - 1];
    }
    if (!latestRun.status) {
        latestRun = Object.assign(Object.assign({}, latestRun), { status: {} });
    }
    if (!latestRun.status.succeededCondition) {
        latestRun.status = Object.assign(Object.assign({}, latestRun.status), { succeededCondition: '' });
    }
    latestRun.status.succeededCondition = Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__["pipelineRunFilterReducer"])(latestRun);
    return latestRun;
};
const augmentRunsToData = (data, propsReferenceForRuns, runs) => {
    if (propsReferenceForRuns) {
        const newData = [];
        propsReferenceForRuns.forEach((reference, i) => {
            const latestRun = getLatestRun(runs[reference], 'creationTimestamp');
            if (latestRun !== data[i].latestRun) {
                // ensure we create a new data object if the latestRun has changed so that shallow compare fails
                newData.push(Object.assign(Object.assign({}, data[i]), { latestRun }));
            }
            else {
                newData.push(data[i]);
            }
        });
        return newData;
    }
    return data;
};
var runStatus;
(function (runStatus) {
    runStatus["Succeeded"] = "Succeeded";
    runStatus["Failed"] = "Failed";
    runStatus["Running"] = "Running";
    runStatus["In Progress"] = "In Progress";
    runStatus["FailedToStart"] = "FailedToStart";
    runStatus["PipelineNotStarted"] = "PipelineNotStarted";
    runStatus["Skipped"] = "Skipped";
    runStatus["Cancelled"] = "Cancelled";
    runStatus["Pending"] = "Pending";
    runStatus["Idle"] = "Idle";
})(runStatus || (runStatus = {}));
const getRunStatusColor = (status) => {
    switch (status) {
        case runStatus.Succeeded:
            return { message: 'Succeeded', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_green_400"] };
        case runStatus.Failed:
            return { message: 'Failed', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["global_danger_color_100"] };
        case runStatus.FailedToStart:
            return {
                message: 'PipelineRun failed to start',
                pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["global_danger_color_100"],
            };
        case runStatus.Running:
            return { message: 'Running', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_blue_300"] };
        case runStatus['In Progress']:
            return { message: 'Running', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_blue_300"] };
        case runStatus.Skipped:
            return { message: 'Skipped', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_black_400"] };
        case runStatus.Cancelled:
            return { message: 'Cancelled', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_black_500"] };
        case runStatus.Idle:
        case runStatus.Pending:
            return { message: 'Pending', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_blue_100"] };
        default:
            return { message: 'PipelineRun not started yet', pftoken: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__["chart_color_blue_100"] };
    }
};
const truncateName = (name, length) => name.length < length ? name : `${name.slice(0, length - 1)}...`;
const getTaskStatus = (pipelinerun, pipeline) => {
    const totalTasks = pipeline && pipeline.spec && pipeline.spec.tasks ? pipeline.spec.tasks.length : 0;
    const plrTasks = pipelinerun && pipelinerun.status && pipelinerun.status.taskRuns
        ? pipelinerun.status.runs ? Object.keys(pipelinerun.status.runs).concat(Object.keys(pipelinerun.status.taskRuns))
            : Object.keys(pipelinerun.status.taskRuns)
        : [];
    const plrTaskLength = plrTasks.length;
    const taskStatus = {
        PipelineNotStarted: 0,
        Pending: 0,
        Running: 0,
        Succeeded: 0,
        Failed: 0,
        Cancelled: 0,
    };
    if (plrTasks) {
        plrTasks.forEach((taskRun) => {
            var _a;
            const status = Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__["pipelineRunFilterReducer"])((_a = pipelinerun.status.taskRuns[taskRun]) !== null && _a !== void 0 ? _a : pipelinerun.status.runs[taskRun]);
            if (status === 'Succeeded' || status === 'Completed' || status === 'Complete') {
                taskStatus[runStatus.Succeeded]++;
            }
            else if (status === 'Running') {
                taskStatus[runStatus.Running]++;
            }
            else if (status === 'Failed') {
                taskStatus[runStatus.Failed]++;
            }
            else if (status === 'Cancelled') {
                taskStatus[runStatus.Cancelled]++;
            }
            else {
                taskStatus[runStatus.Pending]++;
            }
        });
        taskStatus[runStatus.Failed] > 0 || taskStatus[runStatus.Cancelled] > 0
            ? (taskStatus[runStatus.Cancelled] +=
                totalTasks >= plrTaskLength ? totalTasks - plrTaskLength : totalTasks)
            : (taskStatus[runStatus.Pending] +=
                totalTasks >= plrTaskLength ? totalTasks - plrTaskLength : totalTasks);
    }
    else if (pipelinerun &&
        pipelinerun.status &&
        pipelinerun.status.conditions &&
        pipelinerun.status.conditions[0].status === 'False') {
        taskStatus[runStatus.Cancelled] = totalTasks;
    }
    else {
        taskStatus[runStatus.PipelineNotStarted]++;
    }
    return taskStatus;
};
const getResourceModelFromTaskKind = (kind) => kind === _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTaskModel"].kind ? _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTaskModel"] : _models__WEBPACK_IMPORTED_MODULE_2__["TaskModel"];
const getResourceModelFromBindingKind = (kind) => kind === _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTriggerBindingModel"].kind ? _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTriggerBindingModel"] : _models__WEBPACK_IMPORTED_MODULE_2__["TriggerBindingModel"];
const getResourceModelFromTask = (task) => {
    const { taskRef: { kind }, } = task;
    return getResourceModelFromTaskKind(kind);
};
const pipelineRefExists = (pipelineRun) => { var _a; return !!((_a = pipelineRun.spec.pipelineRef) === null || _a === void 0 ? void 0 : _a.name); };


/***/ }),

/***/ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/utils/pipeline-filter-reducer.ts ***!
  \*******************************************************************/
/*! exports provided: pipelineRunStatus, pipelineFilterReducer, pipelineRunFilterReducer, pipelineStatusFilter, pipelineRunStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunStatus", function() { return pipelineRunStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineFilterReducer", function() { return pipelineFilterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunFilterReducer", function() { return pipelineRunFilterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineStatusFilter", function() { return pipelineStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunStatusFilter", function() { return pipelineRunStatusFilter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const pipelineRunStatus = (pipelineRun) => {
    const conditions = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipelineRun, ['status', 'conditions'], []);
    const isCancelled = conditions.find((c) => ['PipelineRunCancelled', 'TaskRunCancelled'].some((cancel) => cancel === c.reason));
    if (isCancelled) {
        return 'Cancelled';
    }
    if (conditions.length === 0)
        return null;
    const condition = conditions.find((c) => c.type === 'Succeeded');
    return !condition || !condition.status
        ? null
        : condition.status === 'True'
            ? 'Succeeded'
            : condition.status === 'False'
                ? 'Failed'
                : 'Running';
};
const pipelineFilterReducer = (pipeline) => {
    if (!pipeline.latestRun)
        return '-';
    return pipelineRunStatus(pipeline.latestRun) || '-';
};
const pipelineRunFilterReducer = (pipelineRun) => {
    const status = pipelineRunStatus(pipelineRun);
    return status || '-';
};
const pipelineStatusFilter = (filters, pipeline) => {
    if (!filters || !filters.selected || !filters.selected.size) {
        return true;
    }
    const status = pipelineFilterReducer(pipeline);
    return filters.selected.has(status) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](filters.all, status);
};
const pipelineRunStatusFilter = (phases, pipeline) => {
    if (!phases || !phases.selected || !phases.selected.size) {
        return true;
    }
    const status = pipelineRunFilterReducer(pipeline);
    return phases.selected.has(status) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](phases.all, status);
};


/***/ }),

/***/ "./packages/dev-console/src/utils/pipeline-utils.ts":
/*!**********************************************************!*\
  !*** ./packages/dev-console/src/utils/pipeline-utils.ts ***!
  \**********************************************************/
/*! exports provided: TaskStatusClassNameMap, conditions, ListFilterId, ListFilterLabels, getPipelineTasks, containerToLogSourceStatus, constructCurrentPipeline, getPipelineRunParams, getPipelineRunWorkspaces, calculateRelativeTime, pipelineRunDuration, updateServiceAccount, associateServiceAccountToSecret, getSecretAnnotations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusClassNameMap", function() { return TaskStatusClassNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditions", function() { return conditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterId", function() { return ListFilterId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterLabels", function() { return ListFilterLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineTasks", function() { return getPipelineTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerToLogSourceStatus", function() { return containerToLogSourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructCurrentPipeline", function() { return constructCurrentPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunParams", function() { return getPipelineRunParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunWorkspaces", function() { return getPipelineRunWorkspaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRelativeTime", function() { return calculateRelativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunDuration", function() { return pipelineRunDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServiceAccount", function() { return updateServiceAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateServiceAccountToSecret", function() { return associateServiceAccountToSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecretAnnotations", function() { return getSecretAnnotations; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/modals/error-modal */ "./public/components/modals/error-modal.jsx");
/* harmony import */ var _components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/pipelines/const */ "./packages/dev-console/src/components/pipelines/const.ts");
/* harmony import */ var _pipeline_augment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");









const TaskStatusClassNameMap = {
    'In Progress': 'is-running',
    Succeeded: 'is-done',
    Failed: 'is-error',
    Idle: 'is-idle',
};
const conditions = {
    hasFromDependency: (task) => task.resources &&
        task.resources.inputs &&
        task.resources.inputs.length > 0 &&
        !!task.resources.inputs[0].from,
    hasRunAfterDependency: (task) => task.runAfter && task.runAfter.length > 0,
};
var ListFilterId;
(function (ListFilterId) {
    ListFilterId["Running"] = "Running";
    ListFilterId["Failed"] = "Failed";
    ListFilterId["Succeeded"] = "Succeeded";
    ListFilterId["Cancelled"] = "Cancelled";
    ListFilterId["Other"] = "-";
})(ListFilterId || (ListFilterId = {}));
const ListFilterLabels = {
    [ListFilterId.Running]: 'Running',
    [ListFilterId.Failed]: 'Failed',
    [ListFilterId.Succeeded]: 'Complete',
    [ListFilterId.Cancelled]: 'Cancelled',
    [ListFilterId.Other]: 'Other',
};
// to be used by both Pipeline and Pipelinerun visualisation
const sortTasksByRunAfterAndFrom = (tasks) => {
    // check and sort tasks by 'runAfter' and 'from' dependency
    const output = tasks;
    for (let i = 0; i < output.length; i++) {
        let flag = -1;
        if (conditions.hasRunAfterDependency(output[i])) {
            for (let j = 0; j < output.length; j++) {
                if (i < j && output[j].taskRef.name === output[i].runAfter[output[i].runAfter.length - 1]) {
                    flag = j;
                }
            }
        }
        else if (conditions.hasFromDependency(output[i])) {
            for (let j = i + 1; j < output.length; j++) {
                if (output[j].taskRef.name === output[i].resources.inputs[0].from[0]) {
                    flag = j;
                }
            }
        }
        if (flag > -1) {
            // swap with last matching task
            const temp = output[flag];
            output[flag] = output[i];
            output[i] = temp;
        }
    }
    return output;
};
/**
 * Appends the pipeline run status to each tasks in the pipeline.
 * @param pipeline
 * @param pipelineRun
 */
const appendPipelineRunStatus = (pipeline, pipelineRun) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](pipeline.spec.tasks, (task) => {
        if (!pipelineRun.status) {
            return task;
        }
        if (pipelineRun.status && !pipelineRun.status.taskRuns && !pipelineRun.status.runs) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](task, { status: { reason: _pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Failed } });
        }
        const mTask = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](task, {
            status: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](lodash__WEBPACK_IMPORTED_MODULE_0__["find"](pipelineRun.status.taskRuns, { pipelineTaskName: task.name }) || lodash__WEBPACK_IMPORTED_MODULE_0__["find"](pipelineRun.status.runs, { pipelineTaskName: task.name }), 'status'),
        });
        // append task duration
        if (mTask.status && mTask.status.completionTime && mTask.status.startTime) {
            const date = new Date(mTask.status.completionTime).getTime() -
                new Date(mTask.status.startTime).getTime();
            mTask.status.duration = Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_1__["formatDuration"])(date);
        }
        // append task status
        if (!mTask.status) {
            mTask.status = { reason: _pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Idle };
        }
        else if (mTask.status && mTask.status.conditions) {
            mTask.status.reason = Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["pipelineRunStatus"])(mTask) || _pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Idle;
        }
        return mTask;
    });
};
const getPipelineTasks = (pipeline, pipelineRun = {
    apiVersion: '',
    metadata: {},
    kind: 'PipelineRun',
}) => {
    // Each unit in 'out' array is termed as stage | out = [stage1 = [task1], stage2 = [task2,task3], stage3 = [task4]]
    const out = [];
    if (!pipeline.spec || !pipeline.spec.tasks) {
        return out;
    }
    const taskList = appendPipelineRunStatus(pipeline, pipelineRun);
    // Step 1: Sort Tasks to get in correct order
    const tasks = sortTasksByRunAfterAndFrom(taskList);
    // Step 2: Push all nodes without any dependencies in different stages
    tasks.forEach((task) => {
        if (!conditions.hasFromDependency(task) && !conditions.hasRunAfterDependency(task)) {
            if (out.length === 0) {
                out.push([]);
            }
            out[0].push(task);
        }
    });
    // Step 3: Push nodes with 'from' dependency and stack similar tasks in a stage
    tasks.forEach((task) => {
        if (!conditions.hasRunAfterDependency(task) && conditions.hasFromDependency(task)) {
            let flag = out.length - 1;
            for (let i = 0; i < out.length; i++) {
                for (const t of out[i]) {
                    if (t.taskRef.name === task.resources.inputs[0].from[0] ||
                        t.name === task.resources.inputs[0].from[0]) {
                        flag = i;
                    }
                }
            }
            const nextToFlag = out[flag + 1] ? out[flag + 1] : null;
            if (nextToFlag &&
                nextToFlag[0] &&
                nextToFlag[0].resources &&
                nextToFlag[0].resources.inputs &&
                nextToFlag[0].resources.inputs[0] &&
                nextToFlag[0].resources.inputs[0].from &&
                nextToFlag[0].resources.inputs[0].from[0] &&
                nextToFlag[0].resources.inputs[0].from[0] === task.resources.inputs[0].from[0]) {
                nextToFlag.push(task);
            }
            else {
                out.splice(flag + 1, 0, [task]);
            }
        }
    });
    // Step 4: Push nodes with 'runAfter' dependencies and stack similar tasks in a stage
    tasks.forEach((task) => {
        if (conditions.hasRunAfterDependency(task)) {
            let flag = out.length - 1;
            for (let i = 0; i < out.length; i++) {
                for (const t of out[i]) {
                    if (t.taskRef.name === task.runAfter[0] || t.name === task.runAfter[0]) {
                        flag = i;
                    }
                }
            }
            const nextToFlag = out[flag + 1] ? out[flag + 1] : null;
            if (nextToFlag &&
                nextToFlag[0].runAfter &&
                nextToFlag[0].runAfter[0] &&
                nextToFlag[0].runAfter[0] === task.runAfter[0]) {
                nextToFlag.push(task);
            }
            else {
                out.splice(flag + 1, 0, [task]);
            }
        }
    });
    return out;
};
const containerToLogSourceStatus = (container) => {
    if (!container) {
        return _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LOG_SOURCE_WAITING"];
    }
    const { state, lastState } = container;
    if (state.waiting && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lastState)) {
        return _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LOG_SOURCE_RESTARTING"];
    }
    if (state.waiting) {
        return _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LOG_SOURCE_WAITING"];
    }
    if (state.terminated) {
        return _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LOG_SOURCE_TERMINATED"];
    }
    return _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LOG_SOURCE_RUNNING"];
};
/**
 * Takes a pipeline and a series of matching pipeline runs and produces a current pipeline state.
 */
const constructCurrentPipeline = (pipeline, pipelineRuns) => {
    if (!pipeline || !pipelineRuns || pipelineRuns.length === 0) {
        // Not enough data to build the current state
        return null;
    }
    const latestRun = Object(_pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["getLatestRun"])({ data: pipelineRuns }, 'creationTimestamp');
    if (!latestRun) {
        // Without the latestRun we will not have progress to show
        return null;
    }
    const currentPipeline = Object.assign(Object.assign({}, pipeline), { latestRun });
    let status = Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["pipelineFilterReducer"])(currentPipeline);
    if (status === '-') {
        status = _pipeline_augment__WEBPACK_IMPORTED_MODULE_7__["runStatus"].Pending;
    }
    return {
        currentPipeline,
        status,
    };
};
const getPipelineRunParams = (pipelineParams) => {
    return (pipelineParams &&
        pipelineParams.map((param) => ({
            name: param.name,
            value: param.default,
        })));
};
const getPipelineRunWorkspaces = (pipelineWorkspaces) => {
    return (pipelineWorkspaces &&
        pipelineWorkspaces.map((workspace) => (Object.assign({ name: workspace.name }, workspace.data))));
};
const calculateRelativeTime = (startTime, completionTime) => {
    const start = new Date(startTime).getTime();
    const end = completionTime ? new Date(completionTime).getTime() : new Date().getTime();
    const secondsAgo = (end - start) / 1000;
    const minutesAgo = secondsAgo / 60;
    const hoursAgo = minutesAgo / 60;
    if (minutesAgo > 90) {
        const count = Math.round(hoursAgo);
        return `about ${count} hours`;
    }
    if (minutesAgo > 45) {
        return 'about an hour';
    }
    if (secondsAgo > 90) {
        const count = Math.round(minutesAgo);
        return `about ${count} minutes`;
    }
    if (secondsAgo > 45) {
        return 'about a minute';
    }
    return 'a few seconds';
};
const pipelineRunDuration = (run) => {
    const startTime = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](run, ['status', 'startTime'], null);
    const completionTime = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](run, ['status', 'completionTime'], null);
    // Duration cannot be computed if start time is missing or a completed/failed pipeline has no end time
    if (!startTime || (!completionTime && Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_8__["pipelineRunStatus"])(run) !== 'Running')) {
        return '-';
    }
    return calculateRelativeTime(startTime, completionTime);
};
const updateServiceAccount = (secretName, originalServiceAccount) => {
    const updatedServiceAccount = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](originalServiceAccount);
    updatedServiceAccount.secrets = [...updatedServiceAccount.secrets, { name: secretName }];
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ServiceAccountModel"], updatedServiceAccount);
};
const associateServiceAccountToSecret = (secret, namespace) => {
    Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ServiceAccountModel"], _components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__["PIPELINE_SERVICE_ACCOUNT"], namespace)
        .then((serviceAccount) => {
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["find"](serviceAccount.secrets, (s) => s.name === secret.metadata.name) === undefined) {
            updateServiceAccount(secret.metadata.name, serviceAccount);
        }
    })
        .catch((err) => {
        Object(_console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_5__["errorModal"])({ error: err.message });
    });
};
const getSecretAnnotations = (annotation) => {
    const annotations = {};
    const annotationPrefix = 'tekton.dev';
    if ((annotation === null || annotation === void 0 ? void 0 : annotation.key) === _components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__["SecretAnnotationId"].Git) {
        annotations[`${annotationPrefix}/${_components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__["SecretAnnotationId"].Git}-0`] = annotation === null || annotation === void 0 ? void 0 : annotation.value;
    }
    else if ((annotation === null || annotation === void 0 ? void 0 : annotation.key) === _components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__["SecretAnnotationId"].Image) {
        annotations[`${annotationPrefix}/${_components_pipelines_const__WEBPACK_IMPORTED_MODULE_6__["SecretAnnotationId"].Image}-0`] = annotation === null || annotation === void 0 ? void 0 : annotation.value;
    }
    return annotations;
};


/***/ })

}]);
//# sourceMappingURL=delete-revision~dev-console-edit~dev-console-import~dev-console-projectDetails~dev-console-topology~~1015c5b1-a69c7af007fba308229b.js.map