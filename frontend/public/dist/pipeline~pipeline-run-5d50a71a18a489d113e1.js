(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline~pipeline-run"],{

/***/ "./public/components/hypercloud/pipeline-run.tsx":
/*!*******************************************************!*\
  !*** ./public/components/hypercloud/pipeline-run.tsx ***!
  \*******************************************************/
/*! exports provided: PipelineRunDetailsList, PipelineRuns, PipelineRunsPage, PipelineRunsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRunDetailsList", function() { return PipelineRunDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRuns", function() { return PipelineRuns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRunsPage", function() { return PipelineRunsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRunsDetailsPage", function() { return PipelineRunsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/pipeline-utils */ "./public/components/hypercloud/utils/pipeline-utils.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/pipeline-augment */ "./public/components/hypercloud/utils/pipeline-augment.ts");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/pipeline-filter-reducer */ "./public/components/hypercloud/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _pipelineruns_linked_pipeline_run_task_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipelineruns/linked-pipeline-run-task-status */ "./public/components/hypercloud/pipelineruns/linked-pipeline-run-task-status.tsx");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/pipeline-actions */ "./public/components/hypercloud/utils/pipeline-actions.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelineruns_detail_page_tabs_PipelineRunLogs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelineruns_detail_page_tabs_PipelineRunVisualization__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunVisualization */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunVisualization.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelines_resource_overview_ResourceLinkList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelines/resource-overview/ResourceLinkList */ "./packages/dev-console/src/components/pipelines/resource-overview/ResourceLinkList.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelineruns_detail_page_tabs_TriggeredBySection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");



















const kind = _models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"].kind;
const tableColumnClasses = [
    '',
    '',
    'pf-m-hidden pf-m-visible-on-sm',
    'pf-m-hidden pf-m-visible-on-lg',
    'pf-m-hidden pf-m-visible-on-lg',
    'pf-m-hidden pf-m-visible-on-xl',
    _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const PipelineRunTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.conditions[0].reason',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_78'),
            sortField: 'status.conditions[0].reason',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_6'),
            sortField: 'status.startTime',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_81'),
            sortField: 'status.completionTime',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
PipelineRunTableHeader.displayName = 'PipelineRunTableHeader';
const PipelineRunTableRow = ({ obj: pipelineRun, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: pipelineRun.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: pipelineRun.metadata.name, namespace: pipelineRun.metadata.namespace, title: pipelineRun.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: pipelineRun.metadata.namespace, title: pipelineRun.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_16__["Status"], { status: Object(_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_9__["pipelineRunFilterReducer"])(pipelineRun) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelineruns_linked_pipeline_run_task_status__WEBPACK_IMPORTED_MODULE_10__["default"], { pipelineRun: pipelineRun })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: pipelineRun.status && pipelineRun.status.startTime })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] }, Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_7__["pipelineRunDuration"])(pipelineRun)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_11__["getPipelineRunKebabActions"])(), kind: kind, resource: pipelineRun }))));
};
const PipelineRunDetailsList = ({ pipelineRun }) => {
    const unfilteredResources = pipelineRun.spec.resources;
    const renderResources = (unfilteredResources === null || unfilteredResources === void 0 ? void 0 : unfilteredResources.filter(({ resourceRef }) => !!resourceRef).map((resource) => resource.resourceRef.name)) || [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6 odc-pipeline-run-details__customDetails" },
        Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__["pipelineRefExists"])(pipelineRun) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Pipeline"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"]), name: pipelineRun.spec.pipelineRef.name, namespace: pipelineRun.metadata.namespace })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelineruns_detail_page_tabs_TriggeredBySection__WEBPACK_IMPORTED_MODULE_15__["default"], { pipelineRun: pipelineRun }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelines_resource_overview_ResourceLinkList__WEBPACK_IMPORTED_MODULE_14__["default"], { model: _models__WEBPACK_IMPORTED_MODULE_6__["PipelineResourceModel"], links: renderResources, namespace: pipelineRun.metadata.namespace })));
};
const PipelineRunDetails = ({ obj: pipelineRun }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_17__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_18__["ResourceLabel"])(pipelineRun, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelineruns_detail_page_tabs_PipelineRunVisualization__WEBPACK_IMPORTED_MODULE_13__["default"], { pipelineRun: pipelineRun }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: pipelineRun })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipelineRunDetailsList, { pipelineRun: pipelineRun }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const filters = [
    {
        filterGroupName: 'Status',
        type: 'pipeline-run-status',
        reducer: _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_9__["pipelineRunFilterReducer"],
        items: [
            { id: 'Succeeded', title: 'Succeeded' },
            { id: 'Running', title: 'Running' },
            { id: 'Failed', title: 'Failed' },
            { id: 'Cancelled', title: 'Cancelled' },
        ],
    },
];
const PipelineRuns = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_17__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Pipeline Runs", Header: PipelineRunTableHeader.bind(null, t), Row: PipelineRunTableRow, virtualize: true }));
};
const PipelineRunsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_17__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_60'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_60') }), canCreate: true, ListComponent: PipelineRuns, kind: kind, rowFilters: filters }, props));
};
const PipelineRunsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_11__["getPipelineRunKebabActions"])(), pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(PipelineRunDetails)), editYaml(), {
            href: 'logs',
            path: 'logs/:name?',
            name: 'Logs',
            component: _packages_dev_console_src_components_pipelineruns_detail_page_tabs_PipelineRunLogs__WEBPACK_IMPORTED_MODULE_12__["PipelineRunLogsWithActiveTask"],
        },] }));


/***/ }),

/***/ "./public/components/hypercloud/pipelineruns/linked-pipeline-run-task-status.tsx":
/*!***************************************************************************************!*\
  !*** ./public/components/hypercloud/pipelineruns/linked-pipeline-run-task-status.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./public/models/index.ts");
/* harmony import */ var _pipeline_task_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline-task-status */ "./public/components/hypercloud/pipelineruns/pipeline-task-status.tsx");





/**
 * Will attempt to render a link to the log file associated with the pipelineRun if it has the data.
 * If it does not, it'll just render the pipeline status.
 */
const LinkedPipelineRunTaskStatus = ({ pipeline, pipelineRun, }) => {
    var _a, _b, _c;
    const pipelineStatus = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_task_status__WEBPACK_IMPORTED_MODULE_4__["PipelineTaskStatus"], { key: (_a = pipelineRun.metadata) === null || _a === void 0 ? void 0 : _a.name, pipeline: pipeline, pipelinerun: pipelineRun }));
    if (((_b = pipelineRun.metadata) === null || _b === void 0 ? void 0 : _b.name) && ((_c = pipelineRun.metadata) === null || _c === void 0 ? void 0 : _c.namespace)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["PipelineRunModel"], pipelineRun.metadata.name, pipelineRun.metadata.namespace)}/logs` }, pipelineStatus));
    }
    return pipelineStatus;
};
/* harmony default export */ __webpack_exports__["default"] = (LinkedPipelineRunTaskStatus);


/***/ }),

/***/ "./public/components/hypercloud/pipelineruns/pipeline-bars.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/hypercloud/pipelineruns/pipeline-bars.tsx ***!
  \*********************************************************************/
/*! exports provided: PipelineBars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineBars", function() { return PipelineBars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils_horizontal_stacked_bars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/horizontal-stacked-bars */ "./public/components/hypercloud/utils/horizontal-stacked-bars.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/pipeline-augment */ "./public/components/hypercloud/utils/pipeline-augment.ts");
/* harmony import */ var _task_status_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-status-tooltip */ "./public/components/hypercloud/pipelineruns/task-status-tooltip.tsx");





const PipelineBars = ({ pipelinerun, pipeline }) => {
    const taskStatus = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["getTaskStatus"])(pipelinerun, pipeline === null || pipeline === void 0 ? void 0 : pipeline.data);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_status_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], { taskStatus: taskStatus }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_horizontal_stacked_bars__WEBPACK_IMPORTED_MODULE_2__["default"], { height: "1em", inline: true, values: Object.keys(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["runStatus"]).map((status) => ({
                color: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["getRunStatusColor"])(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["runStatus"][status]).pftoken.value,
                name: status,
                size: taskStatus[_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["runStatus"][status]],
            })) })));
};


/***/ }),

/***/ "./public/components/hypercloud/pipelineruns/pipeline-task-status.tsx":
/*!****************************************************************************!*\
  !*** ./public/components/hypercloud/pipelineruns/pipeline-task-status.tsx ***!
  \****************************************************************************/
/*! exports provided: PipelineTaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineTaskStatus", function() { return PipelineTaskStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./public/models/index.ts");
/* harmony import */ var _pipeline_bars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipeline-bars */ "./public/components/hypercloud/pipelineruns/pipeline-bars.tsx");




const PipelineTaskStatus = ({ pipelinerun, pipeline, }) => {
    var _a, _b, _c;
    return !pipeline && ((_b = (_a = pipelinerun.spec) === null || _a === void 0 ? void 0 : _a.pipelineRef) === null || _b === void 0 ? void 0 : _b.name) && ((_c = pipelinerun.metadata) === null || _c === void 0 ? void 0 : _c.namespace) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: [
            {
                name: pipelinerun.spec.pipelineRef.name,
                namespace: pipelinerun.metadata.namespace,
                kind: _models__WEBPACK_IMPORTED_MODULE_2__["PipelineModel"].kind,
                isList: false,
                prop: 'pipeline',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_bars__WEBPACK_IMPORTED_MODULE_3__["PipelineBars"], { pipelinerun: pipelinerun }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_bars__WEBPACK_IMPORTED_MODULE_3__["PipelineBars"], { pipelinerun: pipelinerun, pipeline: { data: pipeline } }));
};


/***/ }),

/***/ "./public/components/hypercloud/pipelineruns/task-status-tooltip.scss":
/*!****************************************************************************!*\
  !*** ./public/components/hypercloud/pipelineruns/task-status-tooltip.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/components/hypercloud/pipelineruns/task-status-tooltip.tsx":
/*!***************************************************************************!*\
  !*** ./public/components/hypercloud/pipelineruns/task-status-tooltip.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/pipeline-augment */ "./public/components/hypercloud/utils/pipeline-augment.ts");
/* harmony import */ var _task_status_tooltip_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-status-tooltip.scss */ "./public/components/hypercloud/pipelineruns/task-status-tooltip.scss");
/* harmony import */ var _task_status_tooltip_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_task_status_tooltip_scss__WEBPACK_IMPORTED_MODULE_2__);



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

/***/ "./public/components/hypercloud/pipelines/const.ts":
/*!*********************************************************!*\
  !*** ./public/components/hypercloud/pipelines/const.ts ***!
  \*********************************************************/
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

/***/ "./public/components/hypercloud/pipelines/modals/const.ts":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/pipelines/modals/const.ts ***!
  \****************************************************************/
/*! exports provided: CREATE_PIPELINE_RESOURCE, initialResourceFormValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PIPELINE_RESOURCE", function() { return CREATE_PIPELINE_RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialResourceFormValues", function() { return initialResourceFormValues; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./public/components/hypercloud/pipelines/const.ts");

const CREATE_PIPELINE_RESOURCE = '#CREATE_PIPELINE_RESOURCE#';
const initialResourceFormValues = {
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].git]: {
        params: {
            url: '',
            revision: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].image]: {
        params: {
            url: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].storage]: {
        params: {
            type: '',
            location: '',
            dir: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].cluster]: {
        params: {
            name: '',
            url: '',
            username: '',
            password: '',
            insecure: '',
        },
        secrets: {
            cadata: '',
            token: '',
        },
    },
};


/***/ }),

/***/ "./public/components/hypercloud/pipelines/modals/utils.ts":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/pipelines/modals/utils.ts ***!
  \****************************************************************/
/*! exports provided: migratePipelineRun, getPipelineRunData, convertPipelineToModalData, convertMapToNameValueArray, getPipelineRunFromForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migratePipelineRun", function() { return migratePipelineRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunData", function() { return getPipelineRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPipelineToModalData", function() { return convertPipelineToModalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertMapToNameValueArray", function() { return convertMapToNameValueArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunFromForm", function() { return getPipelineRunFromForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models */ "./public/models/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/pipeline-utils */ "./public/components/hypercloud/utils/pipeline-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./public/components/hypercloud/pipelines/modals/const.ts");





/**
 * Migrates a PipelineRun from one version to another to support auto-upgrades with old (and invalid) PipelineRuns.
 *
 * Note: Each check within this method should be driven by the apiVersion number if the API is properly up-versioned
 * for these breaking changes. (should be done moving from 0.10.x forward)
 */
const migratePipelineRun = (pipelineRun) => {
    let newPipelineRun = pipelineRun;
    const serviceAccountPath = 'spec.serviceAccount';
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](newPipelineRun, serviceAccountPath)) {
        // .spec.serviceAccount was removed for .spec.serviceAccountName in 0.9.x
        // Note: apiVersion was not updated for this change and thus we cannot gate this change behind a version number
        const serviceAccountName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](newPipelineRun, serviceAccountPath);
        newPipelineRun = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](newPipelineRun, [serviceAccountPath]);
        newPipelineRun = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](newPipelineRun, {
            spec: {
                serviceAccountName,
            },
        });
    }
    return newPipelineRun;
};
const getPipelineRunData = (pipeline = null, latestRun) => {
    var _a, _b;
    if (!pipeline && !latestRun) {
        // eslint-disable-next-line no-console
        console.error('Missing parameters, unable to create new PipelineRun');
        return null;
    }
    const pipelineName = pipeline ? pipeline.metadata.name : latestRun.spec.pipelineRef.name;
    const resources = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.resources;
    const workspaces = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.workspaces;
    const latestRunParams = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.params;
    const pipelineParams = pipeline === null || pipeline === void 0 ? void 0 : pipeline.spec.params;
    const params = latestRunParams || Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunParams"])(pipelineParams);
    const newPipelineRun = {
        apiVersion: pipeline ? pipeline.apiVersion : latestRun.apiVersion,
        kind: _models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].kind,
        metadata: {
            name: `${pipelineName}-${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getRandomChars"])(6)}`,
            namespace: pipeline ? pipeline.metadata.namespace : latestRun.metadata.namespace,
            labels: lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, (_a = pipeline === null || pipeline === void 0 ? void 0 : pipeline.metadata) === null || _a === void 0 ? void 0 : _a.labels, (_b = latestRun === null || latestRun === void 0 ? void 0 : latestRun.metadata) === null || _b === void 0 ? void 0 : _b.labels, {
                'tekton.dev/pipeline': pipelineName,
            }),
        },
        spec: Object.assign(Object.assign(Object.assign(Object.assign({}, ((latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec) || {})), { pipelineRef: {
                name: pipelineName,
            }, resources }), (params && { params })), { workspaces, status: null }),
    };
    return migratePipelineRun(newPipelineRun);
};
const convertPipelineToModalData = (pipeline, alwaysCreateResources = false) => {
    const { metadata: { namespace }, spec: { params, resources }, } = pipeline;
    return {
        namespace,
        parameters: params || [],
        resources: (resources || []).map((resource) => ({
            name: resource.name,
            selection: alwaysCreateResources ? _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_PIPELINE_RESOURCE"] : null,
            data: Object.assign(Object.assign({}, _const__WEBPACK_IMPORTED_MODULE_4__["initialResourceFormValues"][resource.type]), { type: resource.type }),
        })),
    };
};
const convertMapToNameValueArray = (map) => {
    return Object.keys(map).map((name) => {
        const value = map[name];
        return { name, value };
    });
};
const convertResources = (resource) => {
    if (resource.selection === _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_PIPELINE_RESOURCE"]) {
        return {
            name: resource.name,
            resourceSpec: {
                params: convertMapToNameValueArray(resource.data.params),
                type: resource.data.type,
            },
        };
    }
    return {
        name: resource.name,
        resourceRef: {
            name: resource.selection,
        },
    };
};
const getPipelineRunFromForm = (pipeline, formValues, labels) => {
    const { parameters, resources, workspaces } = formValues;
    const pipelineRunData = {
        metadata: {
            labels,
        },
        spec: {
            pipelineRef: {
                name: pipeline.metadata.name,
            },
            params: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunParams"])(parameters),
            resources: resources.map(convertResources),
            workspaces: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunWorkspaces"])(workspaces),
        },
    };
    return getPipelineRunData(pipeline, pipelineRunData);
};


/***/ }),

/***/ "./public/components/hypercloud/utils/horizontal-stacked-bars.scss":
/*!*************************************************************************!*\
  !*** ./public/components/hypercloud/utils/horizontal-stacked-bars.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/components/hypercloud/utils/horizontal-stacked-bars.tsx":
/*!************************************************************************!*\
  !*** ./public/components/hypercloud/utils/horizontal-stacked-bars.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _horizontal_stacked_bars_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-stacked-bars.scss */ "./public/components/hypercloud/utils/horizontal-stacked-bars.scss");
/* harmony import */ var _horizontal_stacked_bars_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_horizontal_stacked_bars_scss__WEBPACK_IMPORTED_MODULE_2__);



const HorizontalStackedBars = ({ barGap, height, inline, values, width, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-horizontal-stacked-bars', { 'is-inline': inline }), style: { height, width, ['--bar-gap']: barGap && `${barGap}px` } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-horizontal-stacked-bars__bars" }, values.map(({ color, name, size }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: name, className: "odc-horizontal-stacked-bars__data-bar", style: {
                background: color,
                flexGrow: size,
            } }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalStackedBars);


/***/ }),

/***/ "./public/components/hypercloud/utils/pipeline-actions.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/hypercloud/utils/pipeline-actions.tsx ***!
  \*****************************************************************/
/*! exports provided: handlePipelineRunSubmit, triggerPipeline, reRunPipelineRun, editPipeline, startPipeline, rerunPipelineAndStay, rerunPipelineAndRedirect, rerunPipelineRunAndRedirect, stopPipelineRun, getPipelineKebabActions, getPipelineRunKebabActions */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineKebabActions", function() { return getPipelineKebabActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunKebabActions", function() { return getPipelineRunKebabActions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _packages_dev_console_src_components_pipelines_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../packages/dev-console/src/components/pipelines/modals */ "./packages/dev-console/src/components/pipelines/modals/index.ts");
/* harmony import */ var _pipelines_modals_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipelines/modals/utils */ "./public/components/hypercloud/pipelines/modals/utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "./public/models/index.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./public/components/hypercloud/utils/pipeline-filter-reducer.ts");




// import {
//   addTriggerModal,
//   startPipelineModal,
//   removeTriggerModal,
// } from '../pipelines/modals';


//import { StartedByLabel } from '../pipelines/const';


const handlePipelineRunSubmit = (pipelineRun) => {
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"], pipelineRun.metadata.name, pipelineRun.metadata.namespace));
};
const triggerPipeline = (pipeline, onSubmit) => {
    Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"], Object(_pipelines_modals_utils__WEBPACK_IMPORTED_MODULE_5__["getPipelineRunData"])(pipeline))
        .then(onSubmit)
        .catch((err) => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_3__["errorModal"])({ error: err.message }));
};
const reRunPipelineRun = (kind, pipelineRun) => ({
    label: 'Rerun',
    callback: () => {
        const namespace = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipelineRun, 'metadata.namespace');
        const pipelineRef = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipelineRun, 'spec.pipelineRef.name');
        if (namespace && pipelineRef) {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"], Object(_pipelines_modals_utils__WEBPACK_IMPORTED_MODULE_5__["getPipelineRunData"])(null, pipelineRun));
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
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(`/k8s/ns/${namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"])}/${name}/builder`);
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
            Object(_packages_dev_console_src_components_pipelines_modals__WEBPACK_IMPORTED_MODULE_4__["startPipelineModal"])({
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
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"], Object(_pipelines_modals_utils__WEBPACK_IMPORTED_MODULE_5__["getPipelineRunData"])(null, pipelineRun))
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
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"], {
                metadata: { name: pipelineRun.metadata.name, namespace: pipelineRun.metadata.namespace },
            }, [
                {
                    op: 'replace',
                    path: `/spec/status`,
                    value: 'PipelineRunCancelled',
                },
            ]);
        },
        hidden: !(pipelineRun && Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_7__["pipelineRunFilterReducer"])(pipelineRun) === 'Running'),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: pipelineRun.metadata.name,
            namespace: pipelineRun.metadata.namespace,
            verb: 'update',
        },
    };
};
// const addTrigger: KebabAction = (kind: K8sKind, pipeline: Pipeline) => ({
//   label: 'Add Trigger',
//   callback: () => {
//     const cleanPipeline: Pipeline = {
//       ...pipeline,
//       metadata: {
//         ...pipeline.metadata,
//         labels: _.omit(pipeline.metadata.labels, [StartedByLabel.user]),
//       },
//     };
//     addTriggerModal({ pipeline: cleanPipeline, modalClassName: 'modal-lg' });
//   },
//   accessReview: {
//     group: kind.apiGroup,
//     resource: kind.plural,
//     name: pipeline.metadata.name,
//     namespace: pipeline.metadata.namespace,
//     verb: 'create',
//   },
// });
const removeTrigger = (kind, pipeline) => ({
    label: 'Remove Trigger',
    callback: () => {
        //removeTriggerModal({ pipeline });
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
    ...(pipelineRun ? [() => rerunPipelineAndRedirect(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"], pipelineRun)] : []),
    //(model, pipeline) => addTrigger(EventListenerModel, pipeline),
    ...(isTriggerPresent ? [(model, pipeline) => removeTrigger(_models__WEBPACK_IMPORTED_MODULE_6__["EventListenerModel"], pipeline)] : []),
    editPipeline,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].factory.Delete,
];
const getPipelineRunKebabActions = (redirectReRun) => [
    redirectReRun ? rerunPipelineRunAndRedirect : reRunPipelineRun,
    stopPipelineRun,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].factory.Delete,
];


/***/ }),

/***/ "./public/components/hypercloud/utils/pipeline-augment.ts":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/utils/pipeline-augment.ts ***!
  \****************************************************************/
/*! exports provided: getResources, getLatestRun, augmentRunsToData, runStatus, getRunStatusColor, truncateName, getTaskStatus, getResourceModelFromTaskKind, getResourceModelFromTask, pipelineRefExists */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromTask", function() { return getResourceModelFromTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRefExists", function() { return pipelineRefExists; });
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./public/models/index.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./public/components/hypercloud/utils/pipeline-filter-reducer.ts");




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
    var _a, _b, _c, _d;
    const totalTasks = pipeline && pipeline.spec && pipeline.spec.tasks ? pipeline.spec.tasks.length
        : (_d = (_c = (_b = (_a = pipelinerun === null || pipelinerun === void 0 ? void 0 : pipelinerun.spec) === null || _a === void 0 ? void 0 : _a.pipelineSpec) === null || _b === void 0 ? void 0 : _b.tasks) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
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
//   export const getResourceModelFromBindingKind = (kind: string): K8sKind =>
//     kind === ClusterTriggerBindingModel.kind ? ClusterTriggerBindingModel : TriggerBindingModel;
const getResourceModelFromTask = (task) => {
    const { taskRef: { kind }, } = task;
    return getResourceModelFromTaskKind(kind);
};
const pipelineRefExists = (pipelineRun) => { var _a; return !!((_a = pipelineRun.spec.pipelineRef) === null || _a === void 0 ? void 0 : _a.name); };


/***/ }),

/***/ "./public/components/hypercloud/utils/pipeline-utils.ts":
/*!**************************************************************!*\
  !*** ./public/components/hypercloud/utils/pipeline-utils.ts ***!
  \**************************************************************/
/*! exports provided: TaskStatusClassNameMap, conditions, ListFilterId, ListFilterLabels, getPipelineTasks, containerToLogSourceStatus, constructCurrentPipeline, getPipelineRunParams, getPipelineRunWorkspaces, calculateRelativeTime, pipelineRunDuration, updateServiceAccount */
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/datetime */ "./public/components/utils/datetime.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _pipeline_augment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipeline-augment */ "./public/components/hypercloud/utils/pipeline-augment.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./public/components/hypercloud/utils/pipeline-filter-reducer.ts");





// import { errorModal } from '@console/internal/components/modals/error-modal';
// import { PIPELINE_SERVICE_ACCOUNT, SecretAnnotationId } from '../components/pipelines/const';


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
        if (pipelineRun.status && !pipelineRun.status.taskRuns) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](task, { status: { reason: _pipeline_augment__WEBPACK_IMPORTED_MODULE_5__["runStatus"].Failed } });
        }
        const mTask = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](task, {
            status: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](lodash__WEBPACK_IMPORTED_MODULE_0__["find"](pipelineRun.status.taskRuns, { pipelineTaskName: task.name }), 'status'),
        });
        // append task duration
        if (mTask.status && mTask.status.completionTime && mTask.status.startTime) {
            const date = new Date(mTask.status.completionTime).getTime() -
                new Date(mTask.status.startTime).getTime();
            mTask.status.duration = Object(_console_internal_components_utils_datetime__WEBPACK_IMPORTED_MODULE_1__["formatDuration"])(date);
        }
        // append task status
        if (!mTask.status) {
            mTask.status = { reason: _pipeline_augment__WEBPACK_IMPORTED_MODULE_5__["runStatus"].Idle };
        }
        else if (mTask.status && mTask.status.conditions) {
            mTask.status.reason = Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["pipelineRunStatus"])(mTask) || _pipeline_augment__WEBPACK_IMPORTED_MODULE_5__["runStatus"].Idle;
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
    const latestRun = Object(_pipeline_augment__WEBPACK_IMPORTED_MODULE_5__["getLatestRun"])({ data: pipelineRuns }, 'creationTimestamp');
    if (!latestRun) {
        // Without the latestRun we will not have progress to show
        return null;
    }
    const currentPipeline = Object.assign(Object.assign({}, pipeline), { latestRun });
    let status = Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["pipelineFilterReducer"])(currentPipeline);
    if (status === '-') {
        status = _pipeline_augment__WEBPACK_IMPORTED_MODULE_5__["runStatus"].Pending;
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
    if (!startTime || (!completionTime && Object(_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_6__["pipelineRunStatus"])(run) !== 'Running')) {
        return '-';
    }
    return calculateRelativeTime(startTime, completionTime);
};
const updateServiceAccount = (secretName, originalServiceAccount) => {
    const updatedServiceAccount = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](originalServiceAccount);
    updatedServiceAccount.secrets = [...updatedServiceAccount.secrets, { name: secretName }];
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ServiceAccountModel"], updatedServiceAccount);
};
// export const associateServiceAccountToSecret = (secret: SecretKind, namespace: string) => {
//   k8sGet(ServiceAccountModel, PIPELINE_SERVICE_ACCOUNT, namespace)
//     .then((serviceAccount) => {
//       if (_.find(serviceAccount.secrets, (s) => s.name === secret.metadata.name) === undefined) {
//         updateServiceAccount(secret.metadata.name, serviceAccount);
//       }
//     })
//     .catch((err) => {
//       errorModal({ error: err.message });
//     });
// };
// type KeyValuePair = {
//   key: string;
//   value: string;
// };
// export const getSecretAnnotations = (annotation: KeyValuePair) => {
//   const annotations = {};
//   const annotationPrefix = 'tekton.dev';
//   if (annotation?.key === SecretAnnotationId.Git) {
//     annotations[`${annotationPrefix}/${SecretAnnotationId.Git}-0`] = annotation?.value;
//   } else if (annotation?.key === SecretAnnotationId.Image) {
//     annotations[`${annotationPrefix}/${SecretAnnotationId.Image}-0`] = annotation?.value;
//   }
//   return annotations;
// };


/***/ })

}]);
//# sourceMappingURL=pipeline~pipeline-run-5d50a71a18a489d113e1.js.map