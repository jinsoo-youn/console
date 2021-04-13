(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-run"],{

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineBars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PipelineBars */ "./packages/dev-console/src/components/pipelineruns/status/PipelineBars.tsx");




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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBars__WEBPACK_IMPORTED_MODULE_3__["PipelineBars"], { pipelinerun: pipelinerun }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBars__WEBPACK_IMPORTED_MODULE_3__["PipelineBars"], { pipelinerun: pipelinerun, pipeline: { data: pipeline } }));
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

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline-topology/PipelineTopologyGraph */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.tsx");
/* harmony import */ var _pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipeline-topology/utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");
/* harmony import */ var _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipeline-topology/const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineVisualization.scss */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.scss");
/* harmony import */ var _PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5__);






const PipelineVisualization = ({ pipeline, pipelineRun, }) => {
    var _a;
    const { nodes, edges } = Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodesEdges"])(pipeline, pipelineRun);
    if (nodes.length === 0 && edges.length === 0) {
        // Nothing to render
        // TODO: Confirm wording with UX; ODC-1860
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "info", isInline: true, title: "This Pipeline has no tasks to visualize." });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-visualization" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_2__["default"], { id: ((_a = pipelineRun === null || pipelineRun === void 0 ? void 0 : pipelineRun.metadata) === null || _a === void 0 ? void 0 : _a.name) || pipeline.metadata.name, nodes: nodes, edges: edges, layout: _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__["PipelineLayout"].DAGRE_VIEWER })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineVisualization);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DynamicResourceLinkList.scss */ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.scss");
/* harmony import */ var _DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DynamicResourceLinkList_scss__WEBPACK_IMPORTED_MODULE_3__);




const DynamicResourceLinkList = ({ links = [], namespace, title, }) => {
    if (links.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-dynamic-resource-link-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, links.map(({ name, model, displayName = '' }) => {
                const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(model);
                let linkName = name;
                if (displayName.length > 0 && name !== displayName) {
                    linkName += ` (${displayName})`;
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: `${kind}/${name}` },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: kind, name: name, displayName: linkName, namespace: namespace, title: name, inline: true })));
            })))));
};
/* harmony default export */ __webpack_exports__["default"] = (DynamicResourceLinkList);


/***/ }),

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
/* harmony import */ var _packages_dev_console_src_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../packages/dev-console/src/utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _packages_dev_console_src_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../packages/dev-console/src/utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _packages_dev_console_src_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../packages/dev-console/src/utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _packages_dev_console_src_components_pipelineruns_status_LinkedPipelineRunTaskStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelineruns/status/LinkedPipelineRunTaskStatus */ "./packages/dev-console/src/components/pipelineruns/status/LinkedPipelineRunTaskStatus.tsx");
/* harmony import */ var _packages_dev_console_src_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../packages/dev-console/src/utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_16__["Status"], { status: Object(_packages_dev_console_src_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_9__["pipelineRunFilterReducer"])(pipelineRun) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelineruns_status_LinkedPipelineRunTaskStatus__WEBPACK_IMPORTED_MODULE_10__["default"], { pipelineRun: pipelineRun })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: pipelineRun.status && pipelineRun.status.startTime })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] }, Object(_packages_dev_console_src_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_7__["pipelineRunDuration"])(pipelineRun)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: Object(_packages_dev_console_src_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_11__["getPipelineRunKebabActions"])(), kind: kind, resource: pipelineRun }))));
};
const PipelineRunDetailsList = ({ pipelineRun }) => {
    const unfilteredResources = pipelineRun.spec.resources;
    const renderResources = (unfilteredResources === null || unfilteredResources === void 0 ? void 0 : unfilteredResources.filter(({ resourceRef }) => !!resourceRef).map((resource) => resource.resourceRef.name)) || [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6 odc-pipeline-run-details__customDetails" },
        Object(_packages_dev_console_src_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__["pipelineRefExists"])(pipelineRun) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
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
        reducer: _packages_dev_console_src_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_9__["pipelineRunFilterReducer"],
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
const PipelineRunsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: Object(_packages_dev_console_src_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_11__["getPipelineRunKebabActions"])(), pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(PipelineRunDetails)), editYaml(), {
            href: 'logs',
            path: 'logs/:name?',
            name: 'Logs',
            component: _packages_dev_console_src_components_pipelineruns_detail_page_tabs_PipelineRunLogs__WEBPACK_IMPORTED_MODULE_12__["PipelineRunLogsWithActiveTask"],
        },] }));


/***/ })

}]);
//# sourceMappingURL=pipeline-run-c53bbf6ced61ddfc2d33.js.map