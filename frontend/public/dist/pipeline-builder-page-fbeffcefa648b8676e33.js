(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-builder-page"],{

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderForm.scss":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderForm.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderForm.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderForm.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _detail_page_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detail-page-tabs */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./packages/dev-console/src/components/pipelines/pipeline-builder/hooks.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals */ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/index.tsx");
/* harmony import */ var _PipelineBuilderHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PipelineBuilderHeader */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderHeader.tsx");
/* harmony import */ var _PipelineBuilderVisualization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PipelineBuilderVisualization */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderVisualization.tsx");
/* harmony import */ var _task_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-sidebar/Sidebar */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/Sidebar.tsx");
/* harmony import */ var _task_sidebar_TaskSidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-sidebar/TaskSidebar */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebar.tsx");
/* harmony import */ var _update_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/update-utils.ts");
/* harmony import */ var _PipelineBuilderForm_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PipelineBuilderForm.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderForm.scss");
/* harmony import */ var _PipelineBuilderForm_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_PipelineBuilderForm_scss__WEBPACK_IMPORTED_MODULE_13__);














const PipelineBuilderForm = (props) => {
    var _a;
    const [selectedTask, setSelectedTask] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const selectedTaskRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    selectedTaskRef.current = selectedTask;
    const { existingPipeline, status, isSubmitting, dirty, handleReset, handleSubmit, errors, namespace, setFieldValue, setStatus, values, } = props;
    const statusRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](status);
    statusRef.current = status;
    const updateErrors = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((taskErrors) => {
        var _a;
        if (taskErrors) {
            setStatus(Object.assign(Object.assign({}, statusRef.current), { tasks: lodash__WEBPACK_IMPORTED_MODULE_1__["omitBy"](lodash__WEBPACK_IMPORTED_MODULE_1__["merge"]({}, (_a = statusRef.current) === null || _a === void 0 ? void 0 : _a.tasks, taskErrors), (v) => !v) }));
        }
    }, [setStatus]);
    Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useResourceValidation"])(values.tasks, values.resources, updateErrors);
    const updateTasks = (changes) => {
        const { tasks, listTasks, errors: taskErrors } = changes;
        setFieldValue('tasks', tasks);
        setFieldValue('listTasks', listTasks);
        updateErrors(taskErrors);
    };
    const selectedId = (_a = values.tasks[selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.taskIndex]) === null || _a === void 0 ? void 0 : _a.name;
    const selectedIds = selectedId ? [selectedId] : [];
    const taskGroup = {
        tasks: values.tasks,
        listTasks: values.listTasks,
        highlightedIds: selectedIds,
    };
    const closeSidebarAndHandleReset = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        setSelectedTask(null);
        selectedTaskRef.current = null;
        handleReset();
    }, [handleReset]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], { className: "odc-pipeline-builder-form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBuilderHeader__WEBPACK_IMPORTED_MODULE_8__["default"], { existingPipeline: existingPipeline, namespace: namespace })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["StackItem"], { isFilled: true, className: "odc-pipeline-builder-form__content" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { className: "odc-pipeline-builder-form__grid", onSubmit: handleSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-builder-form__short-section" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { label: "Name", name: "name", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, isDisabled: !!existingPipeline, required: true })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Parameters"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detail_page_tabs__WEBPACK_IMPORTED_MODULE_4__["PipelineParameters"], { addLabel: "Add Parameters", fieldName: "params" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Resources"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_detail_page_tabs__WEBPACK_IMPORTED_MODULE_4__["PipelineResources"], { addLabel: "Add Resources", fieldName: "resources" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Tasks"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBuilderVisualization__WEBPACK_IMPORTED_MODULE_9__["default"], { namespace: namespace, tasksInError: (status === null || status === void 0 ? void 0 : status.tasks) || {}, onTaskSelection: (task, resource) => {
                                setSelectedTask({
                                    taskIndex: values.tasks.findIndex(({ name }) => name === task.name),
                                    resource,
                                });
                            }, onUpdateTasks: (updatedTaskGroup, op) => updateTasks(Object(_update_utils__WEBPACK_IMPORTED_MODULE_12__["applyChange"])(updatedTaskGroup, op)), taskGroup: taskGroup }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, "\uB178\uB4DC \uAC04 \uC21C\uCC28 \uD639\uC740 \uBCD1\uB82C \uBC30\uCE58\uB97C \uD1B5\uD574 \uC5F0\uACB0\uD558\uC5EC \uD30C\uC774\uD504\uB77C\uC778\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["FormFooter"], { handleReset: closeSidebarAndHandleReset, errorMessage: status === null || status === void 0 ? void 0 : status.submitError, isSubmitting: isSubmitting, submitLabel: existingPipeline ? 'Save' : 'Create', disableSubmit: !dirty ||
                            !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors) ||
                            !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](status === null || status === void 0 ? void 0 : status.tasks) ||
                            values.tasks.length === 0, resetLabel: "Cancel", sticky: true })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], { open: !!selectedTask, onRequestClose: () => {
                var _a;
                if ((selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.taskIndex) === ((_a = selectedTaskRef.current) === null || _a === void 0 ? void 0 : _a.taskIndex)) {
                    setSelectedTask(null);
                }
            } }, () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_sidebar_TaskSidebar__WEBPACK_IMPORTED_MODULE_11__["default"]
            // Intentional remount when selection changes
            , { 
                // Intentional remount when selection changes
                key: selectedTask.taskIndex, resourceList: values.resources || [], errorMap: (status === null || status === void 0 ? void 0 : status.tasks) || {}, onUpdateTask: (data) => {
                    updateTasks(Object(_update_utils__WEBPACK_IMPORTED_MODULE_12__["applyChange"])(taskGroup, { type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].UPDATE_TASK, data }));
                }, onRemoveTask: (taskName) => {
                    Object(_modals__WEBPACK_IMPORTED_MODULE_7__["removeTaskModal"])(taskName, () => {
                        setSelectedTask(null);
                        updateTasks(Object(_update_utils__WEBPACK_IMPORTED_MODULE_12__["applyChange"])(taskGroup, {
                            type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].REMOVE_TASK,
                            data: { taskName },
                        }));
                    });
                }, selectedPipelineTaskIndex: selectedTask.taskIndex, taskResource: selectedTask.resource }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineBuilderForm);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderHeader.scss":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderHeader.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderHeader.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderHeader.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals */ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _PipelineBuilderHeader_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineBuilderHeader.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderHeader.scss");
/* harmony import */ var _PipelineBuilderHeader_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PipelineBuilderHeader_scss__WEBPACK_IMPORTED_MODULE_5__);






const PipelineBuilderHeader = (props) => {
    const { existingPipeline, namespace } = props;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-builder-header" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], { className: "odc-pipeline-builder-header__content pf-m-column" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], { breakpointMods: [{ modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FlexItemModifiers"].grow }] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "odc-pipeline-builder-header__title" }, "Create Pipeline")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: "link", onClick: () => {
                            Object(_modals__WEBPACK_IMPORTED_MODULE_2__["warnYAML"])(() => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["goToYAML"])(existingPipeline, namespace));
                        } }, "Edit YAML"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, t('Description'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null)));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineBuilderHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderPage.scss":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderPage.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderPage.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderPage.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineBuilderForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineBuilderForm */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderForm.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts");
/* harmony import */ var _validation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/validation-utils.ts");
/* harmony import */ var _PipelineBuilderPage_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PipelineBuilderPage.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderPage.scss");
/* harmony import */ var _PipelineBuilderPage_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PipelineBuilderPage_scss__WEBPACK_IMPORTED_MODULE_9__);










const PipelineBuilderPage = (props) => {
    const { existingPipeline, match: { params: { ns }, }, } = props;
    const initialValues = Object.assign({ name: 'new-pipeline', params: [], resources: [], tasks: [], listTasks: [] }, (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["convertPipelineToBuilderForm"])(existingPipeline) || {}));
    const handleSubmit = (values, actions) => {
        let resourceCall;
        if (existingPipeline) {
            resourceCall = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sUpdate"])(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"], Object(_utils__WEBPACK_IMPORTED_MODULE_7__["convertBuilderFormToPipeline"])(values, ns, existingPipeline), ns, existingPipeline.metadata.name);
        }
        else {
            resourceCall = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"], Object(_utils__WEBPACK_IMPORTED_MODULE_7__["convertBuilderFormToPipeline"])(values, ns));
        }
        return resourceCall
            .then(() => {
            actions.setSubmitting(false);
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(`${Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getPipelineURL"])(ns)}/${values.name}`);
        })
            .catch((e) => {
            actions.setStatus({ submitError: e.message });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-builder-page" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Create Pipeline")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].goBack, validationSchema: _validation_utils__WEBPACK_IMPORTED_MODULE_8__["validationSchema"], render: (formikProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBuilderForm__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, formikProps, { namespace: ns, existingPipeline: existingPipeline }))) })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineBuilderPage);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderVisualization.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/PipelineBuilderVisualization.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipeline-topology/const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipeline-topology/PipelineTopologyGraph */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.tsx");
/* harmony import */ var _pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipeline-topology/utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./packages/dev-console/src/components/pipelines/pipeline-builder/hooks.ts");







const PipelineBuilderVisualization = ({ namespace, onTaskSelection, onUpdateTasks, taskGroup, tasksInError, }) => {
    const { tasksLoaded, tasksCount, nodes, loadingTasksError } = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useNodes"])(namespace, onTaskSelection, onUpdateTasks, taskGroup, tasksInError);
    if (loadingTasksError) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "danger", isInline: true, title: "Error loading the tasks." }, loadingTasksError));
    }
    if (!tasksLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
    }
    if (tasksCount === 0 && taskGroup.tasks.length === 0) {
        // No tasks, nothing we can do here...
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "danger", isInline: true, title: "Unable to locate any tasks." });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_4__["default"]
    // TODO: fix this; the graph layout isn't properly laying out nodes
    , { 
        // TODO: fix this; the graph layout isn't properly laying out nodes
        key: nodes.map((n) => n.id).join('-'), id: "pipeline-builder", fluid: true, nodes: nodes, edges: Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_5__["getEdgesFromNodes"])(nodes), layout: _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_3__["PipelineLayout"].DAGRE_BUILDER }));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineBuilderVisualization);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts ***!
  \*********************************************************************************/
/*! exports provided: TASK_INCOMPLETE_ERROR_MESSAGE, UpdateOperationType, TaskErrorType, TASK_ERROR_STRINGS, nodeTaskErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_INCOMPLETE_ERROR_MESSAGE", function() { return TASK_INCOMPLETE_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOperationType", function() { return UpdateOperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskErrorType", function() { return TaskErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_ERROR_STRINGS", function() { return TASK_ERROR_STRINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeTaskErrors", function() { return nodeTaskErrors; });
const TASK_INCOMPLETE_ERROR_MESSAGE = 'Incomplete Task';
var UpdateOperationType;
(function (UpdateOperationType) {
    UpdateOperationType[UpdateOperationType["ADD_LIST_TASK"] = 0] = "ADD_LIST_TASK";
    UpdateOperationType[UpdateOperationType["CONVERT_LIST_TO_TASK"] = 1] = "CONVERT_LIST_TO_TASK";
    UpdateOperationType[UpdateOperationType["UPDATE_TASK"] = 2] = "UPDATE_TASK";
    UpdateOperationType[UpdateOperationType["REMOVE_TASK"] = 3] = "REMOVE_TASK";
    UpdateOperationType[UpdateOperationType["DELETE_LIST_TASK"] = 4] = "DELETE_LIST_TASK";
    UpdateOperationType[UpdateOperationType["FIX_INVALID_LIST_TASK"] = 5] = "FIX_INVALID_LIST_TASK";
})(UpdateOperationType || (UpdateOperationType = {}));
var TaskErrorType;
(function (TaskErrorType) {
    TaskErrorType["MISSING_REQUIRED_PARAMS"] = "missingParams";
    TaskErrorType["MISSING_NAME"] = "nameMissing";
    TaskErrorType["MISSING_RESOURCES"] = "missingResources";
})(TaskErrorType || (TaskErrorType = {}));
const TASK_ERROR_STRINGS = {
    [TaskErrorType.MISSING_RESOURCES]: 'Missing Resources',
    [TaskErrorType.MISSING_REQUIRED_PARAMS]: 'Missing Parameters',
    [TaskErrorType.MISSING_NAME]: 'Task Name is Required',
};
const nodeTaskErrors = [
    TaskErrorType.MISSING_REQUIRED_PARAMS,
    TaskErrorType.MISSING_RESOURCES,
];


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/hooks.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/hooks.ts ***!
  \*********************************************************************************/
/*! exports provided: useTasks, useNodes, useResourceValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTasks", function() { return useTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNodes", function() { return useNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResourceValidation", function() { return useResourceValidation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipeline-topology/utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts");







const useTasks = (namespace) => {
    const [namespacedTasks, setNamespacedTasks] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [clusterTasks, setClusterTasks] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [loadErrorMsg, setLoadErrorMsg] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let ignore = false;
        if (loadErrorMsg) {
            return null;
        }
        if (!namespacedTasks) {
            if (!namespace) {
                setNamespacedTasks([]);
            }
            else {
                Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_3__["TaskModel"], { ns: namespace })
                    .then((res) => {
                    if (ignore) {
                        return;
                    }
                    setNamespacedTasks(res);
                })
                    .catch(() => {
                    setLoadErrorMsg(`Failed to load namespace Tasks. ${loadErrorMsg || ''}`);
                });
            }
        }
        if (!clusterTasks) {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_3__["ClusterTaskModel"])
                .then((res) => {
                if (ignore) {
                    return;
                }
                setClusterTasks(res);
            })
                .catch(() => {
                setLoadErrorMsg(`Failed to load ClusterTasks. ${loadErrorMsg || ''}`);
            });
        }
        return () => {
            ignore = true;
        };
    }, [
        namespace,
        namespacedTasks,
        setNamespacedTasks,
        clusterTasks,
        setClusterTasks,
        setLoadErrorMsg,
        loadErrorMsg,
    ]);
    return {
        namespacedTasks,
        clusterTasks,
        errorMsg: loadErrorMsg,
    };
};
const useNodes = (namespace, onTaskSelection, onUpdateTasks, taskGroup, tasksInError) => {
    var _a;
    const { clusterTasks, namespacedTasks, errorMsg } = useTasks(namespace);
    const getTask = (taskRef) => {
        if (taskRef.kind === _models__WEBPACK_IMPORTED_MODULE_3__["ClusterTaskModel"].kind) {
            return clusterTasks === null || clusterTasks === void 0 ? void 0 : clusterTasks.find((task) => task.metadata.name === taskRef.name);
        }
        return namespacedTasks === null || namespacedTasks === void 0 ? void 0 : namespacedTasks.find((task) => task.metadata.name === taskRef.name);
    };
    const taskGroupRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](taskGroup);
    taskGroupRef.current = taskGroup;
    const onNewListNode = (task, direction) => {
        const data = { direction, relatedTask: task };
        onUpdateTasks(taskGroupRef.current, { type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].ADD_LIST_TASK, data });
    };
    const onNewTask = (resource, name, runAfter) => {
        const data = { resource, name, runAfter };
        onUpdateTasks(taskGroupRef.current, { type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].CONVERT_LIST_TO_TASK, data });
    };
    // TODO: Fix id collisions then remove this utility; we shouldn't need to trim the tasks
    const noDuplicates = (resource) => !taskGroupRef.current.tasks.find((pt) => pt.name === resource.metadata.name);
    const newListNode = (name, runAfter, firstTask) => Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_4__["createTaskListNode"])(name, {
        namespaceTaskList: namespacedTasks === null || namespacedTasks === void 0 ? void 0 : namespacedTasks.filter(noDuplicates),
        clusterTaskList: clusterTasks === null || clusterTasks === void 0 ? void 0 : clusterTasks.filter(noDuplicates),
        onNewTask: (resource) => {
            onNewTask(resource, name, runAfter);
        },
        onRemoveTask: firstTask
            ? null
            : () => {
                onUpdateTasks(taskGroupRef.current, {
                    type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].DELETE_LIST_TASK,
                    data: { listTaskName: name },
                });
            },
        task: {
            name,
            runAfter: runAfter || [],
        },
    });
    const soloTask = (name = 'initial-node') => newListNode(name, undefined, true);
    const newInvalidListNode = (name, runAfter) => Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_4__["createInvalidTaskListNode"])(name, {
        namespaceTaskList: namespacedTasks === null || namespacedTasks === void 0 ? void 0 : namespacedTasks.filter(noDuplicates),
        clusterTaskList: clusterTasks === null || clusterTasks === void 0 ? void 0 : clusterTasks.filter(noDuplicates),
        onNewTask: (resource) => {
            const data = {
                existingName: name,
                resource,
                runAfter,
            };
            onUpdateTasks(taskGroupRef.current, {
                type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].FIX_INVALID_LIST_TASK,
                data,
            });
        },
        onRemoveTask: () => {
            onUpdateTasks(taskGroupRef.current, {
                type: _const__WEBPACK_IMPORTED_MODULE_5__["UpdateOperationType"].REMOVE_TASK,
                data: { taskName: name },
            });
        },
        task: {
            name,
            runAfter: runAfter || [],
        },
    });
    const invalidTaskList = taskGroup.tasks.filter((task) => !getTask(task.taskRef));
    const validTaskList = taskGroup.tasks.filter((task) => !!getTask(task.taskRef));
    const invalidTaskListNodes = invalidTaskList.map((task) => newInvalidListNode(task.name, task.runAfter));
    const taskNodes = validTaskList.length > 0
        ? Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_4__["tasksToBuilderNodes"])(validTaskList, onNewListNode, (task) => onTaskSelection(task, getTask(task.taskRef)), Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"])(_const__WEBPACK_IMPORTED_MODULE_5__["nodeTaskErrors"], tasksInError), taskGroup.highlightedIds)
        : [];
    const taskListNodes = taskGroup.tasks.length === 0 && taskGroup.listTasks.length <= 1
        ? [soloTask((_a = taskGroup.listTasks[0]) === null || _a === void 0 ? void 0 : _a.name)]
        : taskGroup.listTasks.map((listTask) => newListNode(listTask.name, listTask.runAfter));
    const nodes = Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_4__["handleParallelToParallelNodes"])([
        ...taskNodes,
        ...taskListNodes,
        ...invalidTaskListNodes,
    ]);
    const localTaskCount = (namespacedTasks === null || namespacedTasks === void 0 ? void 0 : namespacedTasks.length) || 0;
    const clusterTaskCount = (clusterTasks === null || clusterTasks === void 0 ? void 0 : clusterTasks.length) || 0;
    return {
        tasksCount: localTaskCount + clusterTaskCount,
        tasksLoaded: !!namespacedTasks && !!clusterTasks,
        loadingTasksError: errorMsg,
        nodes,
    };
};
const useResourceValidation = (tasks, resourceValues, onError) => {
    const [previousErrorIds, setPreviousErrorIds] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const resourceNames = resourceValues.map((r) => r.name);
        const errors = tasks.reduce((acc, task) => {
            var _a, _b;
            const output = ((_a = task.resources) === null || _a === void 0 ? void 0 : _a.outputs) || [];
            const input = ((_b = task.resources) === null || _b === void 0 ? void 0 : _b.inputs) || [];
            const missingResources = [...output, ...input].filter((r) => !resourceNames.includes(r.resource));
            if (missingResources.length === 0) {
                return acc;
            }
            return Object.assign(Object.assign({}, acc), { [task.name]: [_const__WEBPACK_IMPORTED_MODULE_5__["TaskErrorType"].MISSING_RESOURCES] });
        }, {});
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors) || previousErrorIds.length > 0) {
            const outputErrors = previousErrorIds.reduce((acc, id) => {
                if (acc[id]) {
                    // Error exists, leave it alone
                    return acc;
                }
                // Error doesn't exist but we had it once, make sure it is cleared
                return Object.assign(Object.assign({}, acc), { [id]: null });
            }, errors);
            const currentErrorIds = Object.keys(outputErrors).filter((id) => !!outputErrors[id]);
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](currentErrorIds, previousErrorIds)) {
                setPreviousErrorIds(currentErrorIds);
            }
            onError(outputErrors);
        }
    }, [tasks, resourceValues, onError, previousErrorIds, setPreviousErrorIds]);
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/ModalContent.scss":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/modals/ModalContent.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/ModalContent.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/modals/ModalContent.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _ModalContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalContent.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/ModalContent.scss");
/* harmony import */ var _ModalContent_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ModalContent_scss__WEBPACK_IMPORTED_MODULE_2__);



const ModalContent = ({ icon, message, title }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Split"], { className: "odc-modal-content", gutter: "md" },
        icon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null, icon),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], { isFilled: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-break-word odc-modal-content__confirm-title" }, title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-break-word" }, message))));
};
/* harmony default export */ __webpack_exports__["default"] = (ModalContent);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/index.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/modals/index.tsx ***!
  \*****************************************************************************************/
/*! exports provided: removeTaskModal, warnYAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTaskModal", function() { return removeTaskModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnYAML", function() { return warnYAML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_modals_confirm_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/modals/confirm-modal */ "./public/components/modals/confirm-modal.jsx");
/* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalContent */ "./packages/dev-console/src/components/pipelines/pipeline-builder/modals/ModalContent.tsx");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");





const removeTaskModal = (taskName, onRemove) => {
    Object(_console_internal_components_modals_confirm_modal__WEBPACK_IMPORTED_MODULE_1__["confirmModal"])({
        title: 'Remove Task',
        message: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ModalContent__WEBPACK_IMPORTED_MODULE_2__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationTriangleIcon"], { size: "lg", color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_4__["global_warning_color_100"].value }), title: `Remove ${taskName}?`, message: `Are you sure you want to remove ${taskName}?` })),
        buttonText: 'Remove',
        executeFn: () => {
            onRemove();
            return Promise.resolve();
        },
        submitDanger: true,
    });
};
const warnYAML = (onAccept) => {
    Object(_console_internal_components_modals_confirm_modal__WEBPACK_IMPORTED_MODULE_1__["confirmModal"])({
        message: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ModalContent__WEBPACK_IMPORTED_MODULE_2__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationTriangleIcon"], { size: "lg", color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_4__["global_warning_color_100"].value }), title: "Switch to YAML Editor?", message: "Switching to YAML will lose any unsaved changes in this pipeline builder and allow you to build your pipeline in YAML.\n        Are you sure you want to switch?" })),
        submitDanger: true,
        btnText: 'Continue',
        executeFn: () => {
            onAccept();
            return Promise.resolve();
        },
    });
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/Sidebar.scss":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/Sidebar.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/Sidebar.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/Sidebar.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sidebar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/Sidebar.scss");
/* harmony import */ var _Sidebar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_scss__WEBPACK_IMPORTED_MODULE_2__);



const DURATION = 225;
const Sidebar = (props) => {
    const { children, onRequestClose, open } = props;
    const [canClose, setCanClose] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const closeRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((e) => {
        var _a;
        if (canClose && !((_a = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current) === null || _a === void 0 ? void 0 : _a.contains(e === null || e === void 0 ? void 0 : e.target))) {
            onRequestClose();
        }
    }, [canClose, onRequestClose]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let timeout = null;
        if (open) {
            timeout = setTimeout(() => setCanClose(true), DURATION);
        }
        else {
            setCanClose(false);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [open, setCanClose]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        window.addEventListener('click', closeRef);
        return () => {
            window.removeEventListener('click', closeRef);
        };
    }, [closeRef]);
    const render = () => {
        if (typeof children === 'function') {
            if (open) {
                return children();
            }
        }
        else {
            return children;
        }
        return null;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], { in: open, timeout: DURATION, classNames: "odc-sidebar" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: contentRef, className: "odc-sidebar odc-sidebar__content" }, render())));
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebar.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebar.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebar.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebar.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _resource_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resource-utils */ "./packages/dev-console/src/components/pipelines/resource-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts");
/* harmony import */ var _TaskSidebarParam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskSidebarParam */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarParam.tsx");
/* harmony import */ var _TaskSidebarResource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TaskSidebarResource */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarResource.tsx");
/* harmony import */ var _TaskSidebarName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaskSidebarName */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarName.tsx");
/* harmony import */ var _TaskSidebar_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TaskSidebar.scss */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebar.scss");
/* harmony import */ var _TaskSidebar_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_TaskSidebar_scss__WEBPACK_IMPORTED_MODULE_10__);











const TaskSidebar = (props) => {
    const { errorMap, onRemoveTask, onUpdateTask, resourceList, selectedPipelineTaskIndex, taskResource, } = props;
    const formikTaskReference = `tasks.${selectedPipelineTaskIndex}`;
    const [taskField] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(formikTaskReference);
    const updateTask = (newData) => {
        onUpdateTask(Object.assign({ thisPipelineTask: taskField.value, taskResource }, newData));
    };
    const thisTaskError = errorMap[taskField.value.name];
    const params = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_5__["getTaskParameters"])(taskResource);
    const resources = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_5__["getTaskResources"])(taskResource);
    const inputResources = resources.inputs;
    const outputResources = resources.outputs;
    const renderResource = (type) => (resource) => {
        var _a, _b;
        const taskResources = ((_b = (_a = taskField.value) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b[type]) || [];
        const thisResource = taskResources.find((taskFieldResource) => taskFieldResource.name === resource.name);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: resource.name, className: "odc-task-sidebar__resource" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskSidebarResource__WEBPACK_IMPORTED_MODULE_8__["default"], { availableResources: resourceList, onChange: (resourceName, selectedResource) => {
                    updateTask({
                        resources: {
                            resourceTarget: type,
                            selectedPipelineResource: selectedResource,
                            taskResourceName: resourceName,
                        },
                    });
                }, taskResource: thisResource, resource: resource })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-sidebar" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-sidebar__header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name co-resource-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceIcon"], { className: "co-m-resource-icon--lg", kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_4__["getResourceModelFromTaskKind"])(taskResource.kind)) }),
                    taskResource.metadata.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-actions" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ActionsMenu"], { actions: [
                            {
                                label: 'Remove Task',
                                callback: () => onRemoveTask(taskField.value.name),
                            },
                        ] })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-sidebar__content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskSidebarName__WEBPACK_IMPORTED_MODULE_9__["default"], { initialName: taskField.value.name, taskName: taskResource.metadata.name, onChange: (newName) => updateTask({ newName }) }),
            params && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Parameters"),
                params.map((param) => {
                    var _a;
                    const taskParams = ((_a = taskField.value) === null || _a === void 0 ? void 0 : _a.params) || [];
                    const thisParam = taskParams.find((taskFieldParam) => taskFieldParam.name === param.name);
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: param.name, className: "odc-task-sidebar__param" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskSidebarParam__WEBPACK_IMPORTED_MODULE_7__["default"], { hasParamError: !!(thisTaskError === null || thisTaskError === void 0 ? void 0 : thisTaskError.includes(_const__WEBPACK_IMPORTED_MODULE_6__["TaskErrorType"].MISSING_REQUIRED_PARAMS)), resourceParam: param, taskParam: thisParam, onChange: (value) => {
                                updateTask({
                                    params: {
                                        newValue: value,
                                        taskParamName: param.name,
                                    },
                                });
                            } })));
                }))),
            inputResources && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Input Resources"),
                inputResources.map(renderResource('inputs')))),
            outputResources && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Output Resources"),
                outputResources.map(renderResource('outputs')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskSidebar);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarName.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarName.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _temp_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temp-utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/temp-utils.tsx");



const VALID_NAME = /^([a-z]([-a-z0-9]*[a-z0-9])?)*$/;
const INVALID_ERROR_MESSAGE = 'Name must consist of lower-case letters, numbers and hyphens. It must start with a letter and end with a letter or number.';
const getError = (value) => {
    let error = null;
    if (value === '') {
        error = 'Required';
    }
    else if (!VALID_NAME.test(value)) {
        error = INVALID_ERROR_MESSAGE;
    }
    return error;
};
const TaskSidebarName = (props) => {
    const { initialName, onChange, taskName } = props;
    const [interimName, setInterimName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialName);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const isValid = !error;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { fieldId: "task-name", label: "Display Name", helperTextInvalid: error, isValid: isValid, isRequired: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_temp_utils__WEBPACK_IMPORTED_MODULE_2__["SidebarInputWrapper"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { id: "task-name", isValid: isValid, isRequired: true, onChange: (value) => {
                    setInterimName(value);
                    setError(getError(value));
                }, onBlur: () => {
                    if (isValid) {
                        onChange(interimName);
                    }
                }, placeholder: taskName, type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, value: interimName }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskSidebarName);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarParam.tsx":
/*!**********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarParam.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts");
/* harmony import */ var _temp_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temp-utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/temp-utils.tsx");




const TaskSidebarParam = (props) => {
    const { hasParamError, onChange, resourceParam, taskParam } = props;
    const [dirty, setDirty] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const currentValue = taskParam === null || taskParam === void 0 ? void 0 : taskParam.value;
    const emptyIsInvalid = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["taskParamIsRequired"])(resourceParam);
    const isValid = !(dirty && hasParamError && emptyIsInvalid && currentValue != null);
    const paramRenderProps = {
        currentValue,
        defaultValue: resourceParam.default,
        isValid,
        name: resourceParam.name,
        onChange,
        setDirty,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { fieldId: resourceParam.name, label: resourceParam.name, helperText: resourceParam.type === 'string' ? resourceParam.description : null, helperTextInvalid: "Required", isValid: isValid, isRequired: emptyIsInvalid }, resourceParam.type === 'array' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_temp_utils__WEBPACK_IMPORTED_MODULE_3__["ArrayParam"], Object.assign({}, paramRenderProps, { description: resourceParam.description }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_temp_utils__WEBPACK_IMPORTED_MODULE_3__["SidebarInputWrapper"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_temp_utils__WEBPACK_IMPORTED_MODULE_3__["StringParam"], Object.assign({}, paramRenderProps))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskSidebarParam);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarResource.tsx":
/*!*************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/TaskSidebarResource.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _temp_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temp-utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/temp-utils.tsx");




const TaskSidebarResource = (props) => {
    const { availableResources, onChange, resource, taskResource } = props;
    const dropdownResources = availableResources.filter(({ name, type }) => resource.type === type && !!name);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { fieldId: resource.name, label: resource.name, helperText: `Only showing resources for this type (${resource.type}).`, helperTextInvalid: dropdownResources.length === 0 ? `No resources available. Add pipeline resources.` : '', validated: dropdownResources.length > 0 ? 'default' : 'error', isRequired: !(resource === null || resource === void 0 ? void 0 : resource.optional) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_temp_utils__WEBPACK_IMPORTED_MODULE_3__["SidebarInputWrapper"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { title: `Select ${resource.type} resource...`, items: dropdownResources.reduce((acc, { name }) => (Object.assign(Object.assign({}, acc), { [name]: name })), {}), disabled: dropdownResources.length === 0, selectedKey: (taskResource === null || taskResource === void 0 ? void 0 : taskResource.resource) || '', dropDownClassName: "dropdown--full-width", onChange: (value) => {
                    onChange(resource.name, dropdownResources.find(({ name }) => name === value));
                } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskSidebarResource);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/temp-utils.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/task-sidebar/temp-utils.tsx ***!
  \****************************************************************************************************/
/*! exports provided: StringParam, ArrayParam, SidebarInputWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringParam", function() { return StringParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayParam", function() { return ArrayParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarInputWrapper", function() { return SidebarInputWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_formik_fields_multi_column_field_MultiColumnFieldFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/formik-fields/multi-column-field/MultiColumnFieldFooter */ "./packages/console-shared/src/components/formik-fields/multi-column-field/MultiColumnFieldFooter.tsx");





const StringParam = (props) => {
    const { currentValue, defaultValue, isValid, name, onChange, setDirty } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { id: name, isValid: isValid, isRequired: !defaultValue, onBlur: () => setDirty(true), onChange: (value) => {
            onChange(value);
        }, placeholder: defaultValue, value: (currentValue || '') }));
};
const ArrayParam = (props) => {
    const { currentValue, defaultValue, description, name, onChange, setDirty } = props;
    const values = (currentValue || defaultValue || ['']);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        values.map((value, index) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], { key: `${index.toString()}`, style: { marginBottom: 'var(--pf-global--spacer--xs)' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], { breakpointMods: [{ modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexModifiers"].grow }] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StringParam, Object.assign({}, props, { name: `${name}-${index}`, currentValue: value, onChange: (changedValue) => {
                            const newValues = [...values];
                            newValues[index] = changedValue;
                            onChange(newValues);
                        } }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["MinusCircleIcon"], { "aria-hidden": "true", style: { color: values.length === 1 ? _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_2__["global_disabled_color_200"].value : null }, onClick: () => {
                            if (values.length === 1) {
                                return;
                            }
                            setDirty(true);
                            setTimeout(() => onChange([...values.slice(0, index), ...values.slice(index + 1)]), 0);
                        } }))));
        }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "pf-c-form__helper-text", style: { marginBottom: 'var(--pf-global--spacer--sm)' } }, description),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_formik_fields_multi_column_field_MultiColumnFieldFooter__WEBPACK_IMPORTED_MODULE_4__["default"], { addLabel: "Add another value", onAdd: () => {
                setDirty(true);
                onChange([...values, '']);
            } })));
};
const SidebarInputWrapper = ({ children }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: 'calc(100% - 28px)' } }, children);
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/update-utils.ts":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/update-utils.ts ***!
  \****************************************************************************************/
/*! exports provided: removeTask, applyChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTask", function() { return removeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyChange", function() { return applyChange; });
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipeline-topology/const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _resource_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource-utils */ "./packages/dev-console/src/components/pipelines/resource-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts");





const mapReplaceRelatedInOthers = (taskName, relatedTaskName, iterationTask) => {
    var _a;
    if (!((_a = iterationTask === null || iterationTask === void 0 ? void 0 : iterationTask.runAfter) === null || _a === void 0 ? void 0 : _a.includes(relatedTaskName))) {
        return iterationTask;
    }
    const remainingRunAfters = iterationTask.runAfter.filter((runAfterName) => runAfterName !== relatedTaskName);
    return Object.assign(Object.assign({}, iterationTask), { runAfter: [...remainingRunAfters, taskName] });
};
const mapRemoveRelatedInOthers = (taskName, iterationTask) => {
    var _a;
    if (!((_a = iterationTask === null || iterationTask === void 0 ? void 0 : iterationTask.runAfter) === null || _a === void 0 ? void 0 : _a.includes(taskName))) {
        return iterationTask;
    }
    return Object.assign(Object.assign({}, iterationTask), { runAfter: iterationTask.runAfter.filter((runAfterName) => runAfterName !== taskName) });
};
const mapStitchReplaceInOthers = (removalTask, iterationTask) => {
    var _a;
    if (!(removalTask === null || removalTask === void 0 ? void 0 : removalTask.runAfter)) {
        return mapRemoveRelatedInOthers(removalTask.name, iterationTask);
    }
    if (!((_a = iterationTask === null || iterationTask === void 0 ? void 0 : iterationTask.runAfter) === null || _a === void 0 ? void 0 : _a.includes(removalTask.name))) {
        return iterationTask;
    }
    const updatedIterationTask = mapRemoveRelatedInOthers(removalTask.name, iterationTask);
    if (updatedIterationTask.runAfter.length > 0) {
        return updatedIterationTask;
    }
    return Object.assign(Object.assign({}, updatedIterationTask), { runAfter: removalTask.runAfter });
};
const mapBeRelated = (newTaskName, relatedTaskName, iterationTask) => {
    if (iterationTask.name !== relatedTaskName) {
        return iterationTask;
    }
    return Object.assign(Object.assign({}, iterationTask), { runAfter: [newTaskName] });
};
const mapAddRelatedToOthers = (taskName, relatedTaskName, iterationTask) => {
    var _a;
    if (!((_a = iterationTask === null || iterationTask === void 0 ? void 0 : iterationTask.runAfter) === null || _a === void 0 ? void 0 : _a.includes(relatedTaskName))) {
        return iterationTask;
    }
    return Object.assign(Object.assign({}, iterationTask), { runAfter: [...iterationTask.runAfter, taskName] });
};
// TODO: Can we use yup? Do we need this level of checking for errors?
const getErrors = (task, resource) => {
    var _a, _b, _c, _d, _e, _f;
    const params = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_2__["getTaskParameters"])(resource);
    const resourceParams = params || [];
    const requiredParamNames = resourceParams.filter(_utils__WEBPACK_IMPORTED_MODULE_4__["taskParamIsRequired"]).map((param) => param.name);
    const hasNonDefaultParams = (_b = (_a = task.params) === null || _a === void 0 ? void 0 : _a.filter(({ name }) => requiredParamNames.includes(name))) === null || _b === void 0 ? void 0 : _b.map(({ value }) => !value).reduce((acc, missingDefault) => missingDefault || acc, false);
    const needsName = !task.name;
    const resources = Object(_resource_utils__WEBPACK_IMPORTED_MODULE_2__["getTaskResources"])(resource);
    const taskInputResources = ((_d = (_c = task.resources) === null || _c === void 0 ? void 0 : _c.inputs) === null || _d === void 0 ? void 0 : _d.length) || 0;
    const requiredInputResources = (resources.inputs || []).filter((r) => !(r === null || r === void 0 ? void 0 : r.optional)).length;
    const missingInputResources = requiredInputResources - taskInputResources > 0;
    const taskOutputResources = ((_f = (_e = task.resources) === null || _e === void 0 ? void 0 : _e.outputs) === null || _f === void 0 ? void 0 : _f.length) || 0;
    const requiredOutputResources = (resources.outputs || []).filter((r) => !(r === null || r === void 0 ? void 0 : r.optional)).length;
    const missingOutputResources = requiredOutputResources - taskOutputResources > 0;
    const errorListing = [];
    if (hasNonDefaultParams) {
        errorListing.push(_const__WEBPACK_IMPORTED_MODULE_3__["TaskErrorType"].MISSING_REQUIRED_PARAMS);
    }
    if (missingInputResources || missingOutputResources) {
        errorListing.push(_const__WEBPACK_IMPORTED_MODULE_3__["TaskErrorType"].MISSING_RESOURCES);
    }
    if (needsName) {
        errorListing.push(_const__WEBPACK_IMPORTED_MODULE_3__["TaskErrorType"].MISSING_NAME);
    }
    return { [task.name]: errorListing.length > 0 ? errorListing : null };
};
const addListNode = (tasks, listTasks, data) => {
    const { direction, relatedTask } = data;
    const newTaskName = `${direction}-${Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomChars"])(6)}`;
    const relatedTaskName = relatedTask.name;
    switch (direction) {
        case _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_1__["AddNodeDirection"].BEFORE:
            return {
                tasks: tasks.map((pipelineTask) => mapBeRelated(newTaskName, relatedTaskName, pipelineTask)),
                listTasks: [
                    ...listTasks.map((listTask) => mapBeRelated(newTaskName, relatedTaskName, listTask)),
                    { name: newTaskName, runAfter: relatedTask.runAfter },
                ],
            };
        case _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_1__["AddNodeDirection"].AFTER:
            return {
                tasks: tasks.map((pipelineTask) => mapReplaceRelatedInOthers(newTaskName, relatedTaskName, pipelineTask)),
                listTasks: [
                    ...listTasks.map((listTask) => mapReplaceRelatedInOthers(newTaskName, relatedTaskName, listTask)),
                    { name: newTaskName, runAfter: [relatedTaskName] },
                ],
            };
        case _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_1__["AddNodeDirection"].PARALLEL:
            return {
                tasks: tasks.map((pipelineTask) => mapAddRelatedToOthers(newTaskName, relatedTaskName, pipelineTask)),
                listTasks: [
                    ...listTasks.map((listTask) => mapAddRelatedToOthers(newTaskName, relatedTaskName, listTask)),
                    { name: newTaskName, runAfter: relatedTask.runAfter },
                ],
            };
        default:
            throw new Error(`Invalid direction ${direction}`);
    }
};
const convertListToTask = (tasks, listTasks, data) => {
    const { name, resource, runAfter } = data;
    const newPipelineTask = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["convertResourceToTask"])(resource, runAfter);
    return {
        tasks: [
            ...tasks.map((pipelineTask) => mapReplaceRelatedInOthers(newPipelineTask.name, name, pipelineTask)),
            newPipelineTask,
        ],
        listTasks: listTasks
            .filter((n) => n.name !== name)
            .map((listTask) => mapReplaceRelatedInOthers(newPipelineTask.name, name, listTask)),
        errors: getErrors(newPipelineTask, resource),
    };
};
const removeAndUpdateTasks = (removalTaskName, updateAndRemoveTasks, updateOnlyTasks) => {
    const removalTask = updateAndRemoveTasks.find((task) => task.name === removalTaskName);
    return {
        updateOnlyTasks: updateOnlyTasks.map((task) => mapStitchReplaceInOthers(removalTask, task)),
        updateAndRemoveTasks: updateAndRemoveTasks
            .filter((task) => task.name !== removalTaskName)
            .map((task) => mapStitchReplaceInOthers(removalTask, task)),
    };
};
const deleteListTask = (tasks, listTasks, data) => {
    const { listTaskName } = data;
    const { updateOnlyTasks, updateAndRemoveTasks } = removeAndUpdateTasks(listTaskName, listTasks, tasks);
    return {
        tasks: updateOnlyTasks,
        listTasks: updateAndRemoveTasks,
        errors: null,
    };
};
const removeTask = (tasks, listTasks, data) => {
    const { taskName } = data;
    const { updateOnlyTasks, updateAndRemoveTasks } = removeAndUpdateTasks(taskName, tasks, listTasks);
    return {
        tasks: updateAndRemoveTasks,
        listTasks: updateOnlyTasks,
        errors: { [taskName]: null },
    };
};
const applyResourceUpdate = (pipelineTask, resources) => {
    var _a;
    const { resourceTarget, selectedPipelineResource, taskResourceName } = resources;
    const existingResources = ((_a = pipelineTask.resources) === null || _a === void 0 ? void 0 : _a[resourceTarget]) || [];
    const filteredResources = existingResources.filter((resource) => {
        return resource.name !== taskResourceName;
    });
    return Object.assign(Object.assign({}, pipelineTask), { resources: Object.assign(Object.assign({}, pipelineTask.resources), { [resourceTarget]: [
                ...filteredResources,
                {
                    name: taskResourceName,
                    resource: selectedPipelineResource.name,
                },
            ] }) });
};
const applyParamsUpdate = (pipelineTask, params) => {
    const { newValue, taskParamName } = params;
    return Object.assign(Object.assign({}, pipelineTask), { params: pipelineTask.params.map((param) => {
            if (param.name !== taskParamName) {
                return param;
            }
            return Object.assign(Object.assign({}, param), { value: newValue });
        }) });
};
const updateTask = (tasks, listTasks, data) => {
    const { thisPipelineTask, taskResource, newName, params, resources } = data;
    const canRename = !!newName;
    const updatedResourceIndex = tasks.findIndex((pipelineTask) => pipelineTask.name === thisPipelineTask.name);
    const updatedTasks = tasks.map((pipelineTask) => {
        if (pipelineTask.name !== thisPipelineTask.name) {
            if (canRename) {
                return mapReplaceRelatedInOthers(newName, thisPipelineTask.name, pipelineTask);
            }
            return pipelineTask;
        }
        let updatedResource = pipelineTask;
        if (resources) {
            updatedResource = applyResourceUpdate(updatedResource, resources);
        }
        if (params) {
            updatedResource = applyParamsUpdate(updatedResource, params);
        }
        if (canRename) {
            updatedResource = Object.assign(Object.assign({}, updatedResource), { name: newName });
        }
        return updatedResource;
    });
    const updatedResource = updatedTasks[updatedResourceIndex];
    return {
        tasks: updatedTasks,
        listTasks: canRename
            ? listTasks.map((listTask) => mapReplaceRelatedInOthers(newName, thisPipelineTask.name, listTask))
            : listTasks,
        errors: Object.assign({ [thisPipelineTask.name]: null }, getErrors(updatedResource, taskResource)),
    };
};
const fixInvalidListTask = (tasks, listTasks, data) => {
    const { existingName, resource, runAfter } = data;
    const newPipelineTask = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["convertResourceToTask"])(resource, runAfter);
    return {
        tasks: [
            ...tasks
                .filter((pipelineTask) => pipelineTask.name !== existingName)
                .map((pipelineTask) => mapReplaceRelatedInOthers(newPipelineTask.name, existingName, pipelineTask)),
            newPipelineTask,
        ],
        listTasks,
        errors: getErrors(newPipelineTask, resource),
    };
};
const applyChange = (taskGroup, op) => {
    const { type, data } = op;
    const { tasks, listTasks } = taskGroup;
    switch (type) {
        case _const__WEBPACK_IMPORTED_MODULE_3__["UpdateOperationType"].ADD_LIST_TASK:
            return addListNode(tasks, listTasks, data);
        case _const__WEBPACK_IMPORTED_MODULE_3__["UpdateOperationType"].CONVERT_LIST_TO_TASK:
            return convertListToTask(tasks, listTasks, data);
        case _const__WEBPACK_IMPORTED_MODULE_3__["UpdateOperationType"].DELETE_LIST_TASK:
            return deleteListTask(tasks, listTasks, data);
        case _const__WEBPACK_IMPORTED_MODULE_3__["UpdateOperationType"].REMOVE_TASK:
            return removeTask(tasks, listTasks, data);
        case _const__WEBPACK_IMPORTED_MODULE_3__["UpdateOperationType"].UPDATE_TASK:
            return updateTask(tasks, listTasks, data);
        case _const__WEBPACK_IMPORTED_MODULE_3__["UpdateOperationType"].FIX_INVALID_LIST_TASK:
            return fixInvalidListTask(tasks, listTasks, data);
        default:
            throw new Error(`Invalid update operation ${type}`);
    }
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/utils.ts ***!
  \*********************************************************************************/
/*! exports provided: getErrorMessage, taskParamIsRequired, convertResourceToTask, getPipelineURL, convertBuilderFormToPipeline, convertPipelineToBuilderForm, goToYAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskParamIsRequired", function() { return taskParamIsRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertResourceToTask", function() { return convertResourceToTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineURL", function() { return getPipelineURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBuilderFormToPipeline", function() { return convertBuilderFormToPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPipelineToBuilderForm", function() { return convertPipelineToBuilderForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToYAML", function() { return goToYAML; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _resource_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource-utils */ "./packages/dev-console/src/components/pipelines/resource-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/pipeline-builder/const.ts");





const getErrorMessage = (errorTypes, errorMap) => (taskName) => {
    if (!taskName) {
        return _const__WEBPACK_IMPORTED_MODULE_4__["TASK_ERROR_STRINGS"][_const__WEBPACK_IMPORTED_MODULE_4__["TaskErrorType"].MISSING_NAME];
    }
    const errorList = errorMap === null || errorMap === void 0 ? void 0 : errorMap[taskName];
    if (!errorList)
        return null;
    const hasRequestedError = errorList.filter((error) => errorTypes.includes(error));
    return hasRequestedError.length > 0 ? _const__WEBPACK_IMPORTED_MODULE_4__["TASK_ERROR_STRINGS"][hasRequestedError[0]] : null;
};
const taskParamIsRequired = (param) => {
    return !('default' in param);
};
const convertResourceToTask = (resource, runAfter) => {
    return {
        name: resource.metadata.name,
        runAfter,
        taskRef: {
            kind: resource.kind === _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTaskModel"].kind ? _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTaskModel"].kind : undefined,
            name: resource.metadata.name,
        },
        params: Object(_resource_utils__WEBPACK_IMPORTED_MODULE_3__["getTaskParameters"])(resource).map((param) => ({
            name: param.name,
            value: param.default,
        })),
    };
};
const getPipelineURL = (namespace) => {
    return `/k8s/ns/${namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PipelineModel"])}`;
};
const removeListRunAfters = (task, listIds) => {
    if ((task === null || task === void 0 ? void 0 : task.runAfter) && listIds.length > 0) {
        // Trim out any runAfters pointing at list nodes
        const runAfter = (task.runAfter || []).filter((runAfterName) => !listIds.includes(runAfterName));
        return Object.assign(Object.assign({}, task), { runAfter });
    }
    return task;
};
const removeEmptyDefaultParams = (task) => {
    var _a;
    if (((_a = task.params) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        // Since we can submit, this param has a default; check for empty values and remove
        return Object.assign(Object.assign({}, task), { params: task.params.filter((param) => !!param.value) });
    }
    return task;
};
const convertBuilderFormToPipeline = (formValues, namespace, existingPipeline) => {
    const { name, resources, params, tasks, listTasks } = formValues;
    const listIds = listTasks.map((listTask) => listTask.name);
    return Object.assign(Object.assign({}, existingPipeline), { apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PipelineModel"]), kind: _models__WEBPACK_IMPORTED_MODULE_2__["PipelineModel"].kind, metadata: Object.assign(Object.assign({}, existingPipeline === null || existingPipeline === void 0 ? void 0 : existingPipeline.metadata), { name,
            namespace }), spec: Object.assign(Object.assign({}, existingPipeline === null || existingPipeline === void 0 ? void 0 : existingPipeline.spec), { params,
            resources, tasks: tasks.map((task) => removeEmptyDefaultParams(removeListRunAfters(task, listIds))) }) });
};
const convertPipelineToBuilderForm = (pipeline) => {
    if (!pipeline)
        return null;
    const { metadata: { name }, spec: { params = [], resources = [], tasks = [] }, } = pipeline;
    return {
        name,
        params,
        resources,
        tasks,
        listTasks: [],
    };
};
const goToYAML = (existingPipeline, namespace) => {
    var _a, _b;
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["history"].push(existingPipeline
        ? `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["PipelineModel"], (_a = existingPipeline === null || existingPipeline === void 0 ? void 0 : existingPipeline.metadata) === null || _a === void 0 ? void 0 : _a.name, (_b = existingPipeline === null || existingPipeline === void 0 ? void 0 : existingPipeline.metadata) === null || _b === void 0 ? void 0 : _b.namespace)}/yaml`
        : `${getPipelineURL(namespace)}/~new`);
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-builder/validation-utils.ts":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-builder/validation-utils.ts ***!
  \********************************************************************************************/
/*! exports provided: validationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationSchema", function() { return validationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const validationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    params: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        description: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        default: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    })),
    resources: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    })),
    tasks: yup__WEBPACK_IMPORTED_MODULE_0__["array"]()
        .of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        runAfter: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["string"]()),
        taskRef: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            kind: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
        })
            .required('Required'),
    }))
        .min(1, 'Must define at least one task')
        .required('Required'),
    taskList: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
        name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        runAfter: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    })),
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-utils.ts":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-utils.ts ***!
  \*************************************************************************/
/*! exports provided: getTaskResources, getTaskParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskResources", function() { return getTaskResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskParameters", function() { return getTaskParameters; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

var PATHS;
(function (PATHS) {
    PATHS["alphaInputResources"] = "spec.inputs.resources";
    PATHS["alphaOutputResources"] = "spec.outputs.resources";
    PATHS["alphaParameters"] = "spec.inputs.params";
    PATHS["betaInputResources"] = "spec.resources.inputs";
    PATHS["betaOutputResources"] = "spec.resources.outputs";
    PATHS["betaParameters"] = "spec.params";
})(PATHS || (PATHS = {}));
const getTaskResources = (taskResource) => {
    const inputs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(taskResource, PATHS.alphaInputResources) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(taskResource, PATHS.betaInputResources);
    const outputs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(taskResource, PATHS.alphaOutputResources) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(taskResource, PATHS.betaOutputResources);
    if (inputs || outputs) {
        return {
            inputs,
            outputs,
        };
    }
    return {};
};
const getTaskParameters = (taskResource) => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(taskResource, PATHS.alphaParameters) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(taskResource, PATHS.betaParameters) || [];
};


/***/ })

}]);
//# sourceMappingURL=pipeline-builder-page-fbeffcefa648b8676e33.js.map