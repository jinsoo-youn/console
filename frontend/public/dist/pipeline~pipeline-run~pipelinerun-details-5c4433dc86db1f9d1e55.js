(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline~pipeline-run~pipelinerun-details"],{

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.scss":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.tsx ***!
  \***********************************************************************************************/
/*! exports provided: PipelineRunLogsWithActiveTask, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRunLogsWithActiveTask", function() { return PipelineRunLogsWithActiveTask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _frontend_public_models_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../frontend/public/models/index */ "./public/models/index.ts");
/* harmony import */ var _logs_LogsWrapperComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logs/LogsWrapperComponent */ "./packages/dev-console/src/components/pipelineruns/logs/LogsWrapperComponent.tsx");
/* harmony import */ var _logs_logs_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logs/logs-utils */ "./packages/dev-console/src/components/pipelineruns/logs/logs-utils.ts");
/* harmony import */ var _PipelineRunLogs_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PipelineRunLogs.scss */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.scss");
/* harmony import */ var _PipelineRunLogs_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_PipelineRunLogs_scss__WEBPACK_IMPORTED_MODULE_10__);











class PipelineRunLogs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.getActiveTaskRun = (taskRuns, activeTask) => activeTask
            ? taskRuns.find((taskRun) => taskRun.includes(activeTask))
            : taskRuns[taskRuns.length - 1];
        this.getSortedTaskRun = (taskRunFromYaml) => {
            const taskRuns = Object.keys(taskRunFromYaml).sort((a, b) => {
                var _a, _b;
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["get"](taskRunFromYaml, [a, 'status', 'completionTime'], false)) {
                    return taskRunFromYaml[b].status.completionTime &&
                        new Date(taskRunFromYaml[a].status.completionTime) >
                            new Date(taskRunFromYaml[b].status.completionTime)
                        ? 1
                        : -1;
                }
                return taskRunFromYaml[b].status.completionTime ||
                    new Date((_a = taskRunFromYaml[a].status) === null || _a === void 0 ? void 0 : _a.startTime) >
                        new Date((_b = taskRunFromYaml[b].status) === null || _b === void 0 ? void 0 : _b.startTime)
                    ? 1
                    : -1;
            });
            return taskRuns;
        };
        this.onNavSelect = (item) => {
            this.setState({
                activeItem: item.itemId,
                navUntouched: false,
            });
        };
        this.state = { activeItem: null, navUntouched: true };
    }
    componentDidMount() {
        const { obj, activeTask } = this.props;
        const taskRunFromYaml = lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'taskRuns'], {}), lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'runs'], {}));
        const taskRuns = this.getSortedTaskRun(taskRunFromYaml);
        const activeItem = this.getActiveTaskRun(taskRuns, activeTask);
        this.setState({ activeItem });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.obj !== nextProps.obj) {
            const { obj, activeTask } = this.props;
            const taskRunFromYaml = lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'taskRuns'], {}), lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'runs'], {}));
            const taskRuns = this.getSortedTaskRun(taskRunFromYaml);
            const activeItem = this.getActiveTaskRun(taskRuns, activeTask);
            this.state.navUntouched && this.setState({ activeItem });
        }
    }
    render() {
        var _a, _b;
        const { obj } = this.props;
        const { activeItem } = this.state;
        const taskRunFromYaml = lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'taskRuns'], {}), lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'runs'], {}));
        const taskRuns = this.getSortedTaskRun(taskRunFromYaml);
        const taskCount = taskRuns.length;
        const downloadAllCallback = taskCount > 1
            ? Object(_logs_logs_utils__WEBPACK_IMPORTED_MODULE_9__["getDownloadAllLogsCallback"])(taskRuns, taskRunFromYaml, (_a = obj.metadata) === null || _a === void 0 ? void 0 : _a.namespace, (_b = obj.metadata) === null || _b === void 0 ? void 0 : _b.name)
            : undefined;
        const resources = taskCount > 0 && [
            {
                name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](taskRunFromYaml[activeItem], ['status', 'podName'], ''),
                kind: 'Pod',
                namespace: obj.metadata.namespace,
                prop: `obj`,
                isList: false,
            },
        ];
        const path = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_frontend_public_models_index__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"], obj.metadata.name, obj.metadata.namespace)}/logs/`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-run-logs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-run-logs__tasklist", "data-test-id": "logs-tasklist" }, taskCount > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Nav"], { onSelect: this.onNavSelect },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["NavList"], { className: "odc-pipeline-run-logs__nav" }, taskRuns.map((task) => {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["NavItem"], { key: task, itemId: task, isActive: activeItem === task, className: "odc-pipeline-run-logs__navitem" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: path + lodash__WEBPACK_IMPORTED_MODULE_1__["get"](taskRunFromYaml, [task, `pipelineTaskName`], '-') },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["StatusIcon"], { status: Object(_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["pipelineRunFilterReducer"])(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'taskRuns'], {}), lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['status', 'runs'], {}))) }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "odc-pipeline-run-logs__namespan" }, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](taskRunFromYaml, [task, `pipelineTaskName`], '-')))));
                })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-run-logs__nav" }, "No Task Runs Found"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-run-logs__container" }, activeItem && resources[0].name ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { key: activeItem, resources: resources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_logs_LogsWrapperComponent__WEBPACK_IMPORTED_MODULE_8__["default"], { taskName: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](taskRunFromYaml, [activeItem, 'pipelineTaskName'], '-'), downloadAllLabel: "Download All Task Logs", onDownloadAll: downloadAllCallback }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-run-logs__taskName" }, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](taskRunFromYaml, [activeItem, 'pipelineTaskName'], '-')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-run-logs__log" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "odc-pipeline-run-logs__message" }, "No Logs Found")))))));
    }
}
const PipelineRunLogsWithActiveTask = ({ obj, params, }) => {
    const activeTask = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](params, 'match.params.name');
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipelineRunLogs, { obj: obj, activeTask: activeTask });
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunLogs);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunVisualization.tsx":
/*!********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunVisualization.tsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_detail_page_tabs_pipeline_details_PipelineVisualization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipelines/detail-page-tabs/pipeline-details/PipelineVisualization */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");






const PipelineRunVisualization = ({ pipelineRun }) => {
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [pipeline, setPipeline] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_5__["pipelineRefExists"])(pipelineRun)) {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"], pipelineRun.spec.pipelineRef.name, pipelineRun.metadata.namespace)
                .then((res) => setPipeline(res))
                .catch((error) => setErrorMessage((error === null || error === void 0 ? void 0 : error.message) || 'Could not load visualization at this time.'));
        }
        else {
            const p = {
                spec: {
                    tasks: pipelineRun.spec.pipelineSpec.tasks.map((task) => {
                        return {
                            name: task.name,
                            params: task.params,
                            taskRef: {
                                name: task.name,
                            },
                            runAfter: task.runAfter,
                            resources: task.resources
                        };
                    })
                }
            };
            setPipeline(p);
        }
    }, [pipelineRun, setPipeline]);
    if (errorMessage) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "danger", isInline: true, title: errorMessage });
    }
    if (!pipeline || !pipelineRun) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelines_detail_page_tabs_pipeline_details_PipelineVisualization__WEBPACK_IMPORTED_MODULE_4__["default"], { pipeline: pipeline, pipelineRun: pipelineRun });
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunVisualization);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipelines/const */ "./packages/dev-console/src/components/pipelines/const.ts");





const TriggeredBySection = (props) => {
    const { pipelineRun: { metadata: { namespace, labels }, }, } = props;
    const manualTrigger = labels[_pipelines_const__WEBPACK_IMPORTED_MODULE_4__["StartedByLabel"].user];
    const autoTrigger = labels[_pipelines_const__WEBPACK_IMPORTED_MODULE_4__["StartedByLabel"].triggers];
    if (!manualTrigger && !autoTrigger) {
        return null;
    }
    let value = null;
    if (manualTrigger) {
        value = manualTrigger;
    }
    else if (autoTrigger) {
        value = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["EventListenerModel"]), name: autoTrigger, namespace: namespace }));
    }
    else {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Triggered by:"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, value)));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggeredBySection);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/logs/Logs.scss":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/logs/Logs.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/logs/Logs.tsx":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/logs/Logs.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_module_ws_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/ws-factory */ "./public/module/ws-factory.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _Logs_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logs.scss */ "./packages/dev-console/src/components/pipelineruns/logs/Logs.scss");
/* harmony import */ var _Logs_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Logs_scss__WEBPACK_IMPORTED_MODULE_7__);








const Logs = ({ resource, resourceStatus, container, onComplete, render, autoScroll = true, }) => {
    const { name } = container;
    const { kind, metadata = {} } = resource;
    const { name: resName, namespace: resNamespace } = metadata;
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const resourceStatusRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](resourceStatus);
    const onCompleteRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    onCompleteRef.current = onComplete;
    const appendMessage = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    appendMessage.current = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((blockContent) => {
        const contentLines = blockContent.split('\n').filter((line) => !!line);
        if (contentRef.current && contentLines.length >= 0) {
            const elements = contentLines.map((content) => {
                const customElement = document.createElement('div');
                customElement.textContent = content;
                return customElement;
            });
            elements.forEach((element) => {
                contentRef.current.append(element);
            });
            const lastElement = elements[elements.length - 1];
            if (render && lastElement && autoScroll) {
                lastElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    }, [autoScroll, render]);
    if (resourceStatusRef.current !== resourceStatus) {
        resourceStatusRef.current = resourceStatus;
    }
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let loaded = false;
        let ws;
        const urlOpts = {
            ns: resNamespace,
            name: resName,
            path: 'log',
            queryParams: {
                container: name,
                follow: 'true',
            },
        };
        const watchURL = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["resourceURL"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(kind), urlOpts);
        if (resourceStatusRef.current === _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LOG_SOURCE_TERMINATED"]) {
            Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_6__["coFetchText"])(watchURL)
                .then((res) => {
                if (loaded)
                    return;
                appendMessage.current(res);
                onCompleteRef.current(name);
            })
                .catch(() => {
                if (loaded)
                    return;
                setError(true);
                onCompleteRef.current(name);
            });
        }
        else {
            const wsOpts = {
                host: 'auto',
                path: watchURL,
                subprotocols: ['base64.binary.k8s.io'],
            };
            ws = new _console_internal_module_ws_factory__WEBPACK_IMPORTED_MODULE_4__["WSFactory"](watchURL, wsOpts);
            ws.onmessage((msg) => {
                if (loaded)
                    return;
                const message = js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].decode(msg);
                appendMessage.current(message);
            })
                .onclose(() => {
                onCompleteRef.current(name);
            })
                .onerror(() => {
                if (loaded)
                    return;
                setError(true);
                onCompleteRef.current(name);
            });
        }
        return () => {
            loaded = true;
            ws && ws.destroy();
        };
    }, [kind, name, resName, resNamespace]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (contentRef.current && render && autoScroll) {
            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [autoScroll, render]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-logs", style: { display: render ? '' : 'none' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "odc-logs__name" }, name),
        error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "danger", isInline: true, title: "An error occurred while retrieving the requested logs." })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-logs__content", ref: contentRef })));
};
/* harmony default export */ __webpack_exports__["default"] = (Logs);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/logs/LogsWrapperComponent.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/logs/LogsWrapperComponent.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _MultiStreamLogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiStreamLogs */ "./packages/dev-console/src/components/pipelineruns/logs/MultiStreamLogs.tsx");
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



const LogsWrapperComponent = (_a) => {
    var { obj } = _a, props = __rest(_a, ["obj"]);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](obj === null || obj === void 0 ? void 0 : obj.data);
    if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](obj === null || obj === void 0 ? void 0 : obj.data)) {
        ref.current = obj.data;
    }
    return ref.current ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultiStreamLogs__WEBPACK_IMPORTED_MODULE_2__["MultiStreamLogs"], Object.assign({}, props, { resource: ref.current })) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (LogsWrapperComponent);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/logs/MultiStreamLogs.scss":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/logs/MultiStreamLogs.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/logs/MultiStreamLogs.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/logs/MultiStreamLogs.tsx ***!
  \***********************************************************************************/
/*! exports provided: MultiStreamLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiStreamLogs", function() { return MultiStreamLogs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/modals/error-modal */ "./public/components/modals/error-modal.jsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _logs_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logs-utils */ "./packages/dev-console/src/components/pipelineruns/logs/logs-utils.ts");
/* harmony import */ var _Logs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Logs */ "./packages/dev-console/src/components/pipelineruns/logs/Logs.tsx");
/* harmony import */ var _MultiStreamLogs_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MultiStreamLogs.scss */ "./packages/dev-console/src/components/pipelineruns/logs/MultiStreamLogs.scss");
/* harmony import */ var _MultiStreamLogs_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MultiStreamLogs_scss__WEBPACK_IMPORTED_MODULE_11__);












const MultiStreamLogs = ({ resource, taskName, downloadAllLabel, onDownloadAll, }) => {
    var _a, _b;
    const scrollPane = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const completedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([]);
    const [renderToCount, setRenderToCount] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0);
    const [isFullscreen, fullscreenRef, fullscreenToggle] = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["useFullscreen"])();
    const [scrollDirection, handleScrollCallback] = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["useScrollDirection"])();
    const [autoScroll, setAutoScroll] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const { containers, stillFetching } = Object(_logs_utils__WEBPACK_IMPORTED_MODULE_9__["getRenderContainers"])(resource);
    const [downloadAllStatus, setDownloadAllStatus] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const dataRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    dataRef.current = containers;
    const handleComplete = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((containerName) => {
        const index = dataRef.current.findIndex(({ name }) => name === containerName);
        completedRef.current[index] = true;
        const newRenderTo = dataRef.current.findIndex((c, i) => completedRef.current[i] !== true);
        if (newRenderTo === -1) {
            setRenderToCount(dataRef.current.length);
        }
        else {
            setRenderToCount(newRenderTo);
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!scrollDirection)
            return;
        if (scrollDirection === _console_shared__WEBPACK_IMPORTED_MODULE_7__["ScrollDirection"].scrollingUp && autoScroll === true) {
            setAutoScroll(false);
        }
        if (scrollDirection === _console_shared__WEBPACK_IMPORTED_MODULE_7__["ScrollDirection"].scrolledToBottom && autoScroll === false) {
            setAutoScroll(true);
        }
    }, [autoScroll, scrollDirection]);
    const startDownloadAll = () => {
        setDownloadAllStatus(true);
        onDownloadAll()
            .then(() => {
            setDownloadAllStatus(false);
        })
            .catch((err) => {
            setDownloadAllStatus(false);
            const error = err.message || 'Error downloading logs.';
            Object(_console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_6__["errorModal"])({ error });
        });
    };
    const downloadLogs = () => {
        if (!scrollPane.current)
            return;
        const logString = scrollPane.current.innerText;
        const blob = new Blob([logString], {
            type: 'text/plain;charset=utf-8',
        });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, `${taskName}.log`);
    };
    const containerStatus = (_b = (_a = resource.status) === null || _a === void 0 ? void 0 : _a.containerStatuses) !== null && _b !== void 0 ? _b : [];
    const divider = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], { className: "odc-multi-stream-logs__divider" }, "|");
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: fullscreenRef, className: "odc-multi-stream-logs" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__({
                'odc-multi-stream-logs--fullscreen': isFullscreen,
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], { className: "odc-multi-stream-logs__button", breakpointMods: [{ modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexModifiers"]['align-right'] }] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", onClick: downloadLogs, isInline: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["DownloadIcon"], { className: "odc-multi-stream-logs__icon" }),
                    "Download")),
            divider,
            onDownloadAll && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], { className: "odc-multi-stream-logs__button" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", onClick: startDownloadAll, isDisabled: downloadAllStatus, isInline: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["DownloadIcon"], { className: "odc-multi-stream-logs__icon" }),
                        downloadAllLabel || 'Download All',
                        downloadAllStatus && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LoadingInline"], null))),
                divider)),
            fullscreenToggle && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], { className: "odc-multi-stream-logs__button" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", onClick: fullscreenToggle, isInline: true }, isFullscreen ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["CompressIcon"], { className: "odc-multi-stream-logs__icon" }),
                    "Collapse")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["ExpandIcon"], { className: "odc-multi-stream-logs__icon" }),
                    "Expand")))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-multi-stream-logs__taskName" },
            taskName,
            stillFetching && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "odc-multi-stream-logs__taskName__loading-indicator" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LoadingInline"], null)))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-multi-stream-logs__container", "data-test-id": "logs-task-container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-multi-stream-logs__container__logs", ref: scrollPane, onScroll: handleScrollCallback }, containers.map((container, idx) => {
                const resourceStatus = Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_8__["containerToLogSourceStatus"])(containerStatus[idx]);
                return (resourceStatus !== _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LOG_SOURCE_WAITING"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Logs__WEBPACK_IMPORTED_MODULE_10__["default"], { key: container.name, resource: resource, container: container, resourceStatus: resourceStatus, onComplete: handleComplete, render: renderToCount >= idx, autoScroll: autoScroll })));
            })))));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/logs/logs-utils.ts":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/logs/logs-utils.ts ***!
  \*****************************************************************************/
/*! exports provided: getRenderContainers, getDownloadAllLogsCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderContainers", function() { return getRenderContainers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadAllLogsCallback", function() { return getDownloadAllLogsCallback; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const getSortedContainerStatus = (containers, containerStatuses) => {
    const containerNames = containers.map((c) => c.name);
    const sortedContainerStatus = [];
    containerStatuses.forEach((cs) => {
        const containerIndex = containerNames.indexOf(cs.name);
        sortedContainerStatus[containerIndex] = cs;
    });
    return sortedContainerStatus;
};
const getRenderContainers = (pod) => {
    var _a, _b, _c, _d;
    const containers = (_b = (_a = pod.spec) === null || _a === void 0 ? void 0 : _a.containers) !== null && _b !== void 0 ? _b : [];
    const containerStatuses = (_d = (_c = pod.status) === null || _c === void 0 ? void 0 : _c.containerStatuses) !== null && _d !== void 0 ? _d : [];
    const sortedContainerStatuses = getSortedContainerStatus(containers, containerStatuses);
    const firstRunningCont = sortedContainerStatuses.findIndex((container) => Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_6__["containerToLogSourceStatus"])(container) !== _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LOG_SOURCE_TERMINATED"]);
    return {
        containers: containers.slice(0, firstRunningCont === -1 ? containers.length : firstRunningCont + 1),
        stillFetching: firstRunningCont !== -1,
    };
};
const getOrderedStepsFromPod = (name, ns) => {
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["PodModel"], name, ns)
        .then((pod) => {
        var _a, _b, _c;
        return getSortedContainerStatus((_a = pod.spec.containers) !== null && _a !== void 0 ? _a : [], (_c = (_b = pod.status) === null || _b === void 0 ? void 0 : _b.containerStatuses) !== null && _c !== void 0 ? _c : []);
    })
        .catch((err) => {
        Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_5__["errorModal"])({ error: err.message || 'Error downloading logs.' });
        return [];
    });
};
const getDownloadAllLogsCallback = (sortedTaskRuns, taskRunFromYaml, namespace, pipelineRunName) => {
    const getWatchUrls = () => __awaiter(void 0, void 0, void 0, function* () {
        const stepsList = yield Promise.all(sortedTaskRuns.map((currTask) => {
            const { status = {} } = taskRunFromYaml[currTask];
            const { podName } = status;
            return getOrderedStepsFromPod(podName, namespace);
        }));
        return sortedTaskRuns.reduce((acc, currTask, i) => {
            const { pipelineTaskName, status = {} } = taskRunFromYaml[currTask];
            const { podName } = status;
            const steps = stepsList[i];
            const allStepUrls = steps.reduce((stepUrls, currentStep) => {
                const { name } = currentStep;
                const currentStatus = Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_6__["containerToLogSourceStatus"])(currentStep);
                if (currentStatus === _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LOG_SOURCE_WAITING"])
                    return stepUrls;
                const urlOpts = {
                    ns: namespace,
                    name: podName,
                    path: 'log',
                    queryParams: {
                        container: name,
                        follow: 'true',
                    },
                };
                return Object.assign(Object.assign({}, stepUrls), { [name]: {
                        status: currentStatus,
                        url: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["resourceURL"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["PodModel"], urlOpts),
                    } });
            }, {});
            acc[currTask] = {
                name: pipelineTaskName,
                steps: Object.assign({}, allStepUrls),
            };
            return acc;
        }, {});
    });
    const fetchLogs = (tasksPromise) => __awaiter(void 0, void 0, void 0, function* () {
        const tasks = yield tasksPromise;
        const allRequests = sortedTaskRuns.reduce((acc, currTask) => {
            const task = tasks[currTask];
            const promises = Object.keys(task.steps).map((step, i) => {
                let heading = '';
                if (i === 0) {
                    heading += `${task.name}\n\n`;
                }
                heading += `${step}\n\n`;
                const { url, status } = task.steps[step];
                const getContentPromise = Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_4__["coFetchText"])(url).then((logs) => {
                    return `${heading}${logs}\n\n`;
                });
                if (status === _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LOG_SOURCE_TERMINATED"]) {
                    // If we are done, we want this log content
                    return getContentPromise;
                }
                // If we are not done, let's not wait indefinitely
                return Promise.race([
                    getContentPromise,
                    new Promise((resolve) => {
                        setTimeout(() => resolve(''), 1000);
                    }),
                ]);
            });
            return [...acc, ...promises];
        }, []);
        const buffer = new _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LineBuffer"](null);
        return Promise.all(allRequests).then((allLogs) => {
            buffer.ingest(allLogs.join(''));
            const blob = buffer.getBlob({
                type: 'text/plain;charset=utf-8',
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${pipelineRunName}.log`);
            return null;
        });
    });
    return () => {
        return fetchLogs(getWatchUrls());
    };
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/ResourceLinkList.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/ResourceLinkList.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynamicResourceLinkList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicResourceLinkList */ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx");


const ResourceLinkList = ({ links, model, namespace }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DynamicResourceLinkList__WEBPACK_IMPORTED_MODULE_1__["default"], { links: links.map((name) => ({ model, name })), namespace: namespace, title: model.labelPlural }));
};
/* harmony default export */ __webpack_exports__["default"] = (ResourceLinkList);


/***/ })

}]);
//# sourceMappingURL=pipeline~pipeline-run~pipelinerun-details-5c4433dc86db1f9d1e55.js.map