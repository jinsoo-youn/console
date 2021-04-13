(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PipelineBuilderPage~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details~pipel~ba3549d0"],{

/***/ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunHeader.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunHeader.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipelinerun-table */ "./packages/dev-console/src/components/pipelineruns/list-page/pipelinerun-table.ts");


const PipelineRunHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][1] },
        },
        {
            title: 'Status',
            sortField: 'status.conditions[0].reason',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][2] },
        },
        {
            title: 'Task Status',
            sortField: 'status.conditions[0].reason',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][3] },
        },
        {
            title: 'Started',
            sortField: 'status.startTime',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][4] },
        },
        {
            title: 'Duration',
            sortField: 'status.completionTime',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][5] },
        },
        {
            title: '',
            props: { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][6] },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunList.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunList.tsx ***!
  \****************************************************************************************/
/*! exports provided: PipelineRunList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRunList", function() { return PipelineRunList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineRunHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineRunHeader */ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunHeader.tsx");
/* harmony import */ var _PipelineRunRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineRunRow */ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunRow.tsx");






const PipelineRunList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["Table"], Object.assign({}, props, { "aria-label": _models__WEBPACK_IMPORTED_MODULE_3__["PipelineRunModel"].labelPlural, defaultSortField: "status.startTime", defaultSortOrder: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["SortByDirection"].desc, Header: _PipelineRunHeader__WEBPACK_IMPORTED_MODULE_4__["default"], Row: _PipelineRunRow__WEBPACK_IMPORTED_MODULE_5__["default"], virtualize: true })));
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunList);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunRow.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunRow.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _status_LinkedPipelineRunTaskStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../status/LinkedPipelineRunTaskStatus */ "./packages/dev-console/src/components/pipelineruns/status/LinkedPipelineRunTaskStatus.tsx");
/* harmony import */ var _triggered_by__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../triggered-by */ "./packages/dev-console/src/components/pipelineruns/triggered-by/index.ts");
/* harmony import */ var _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipelinerun-table */ "./packages/dev-console/src/components/pipelineruns/list-page/pipelinerun-table.ts");












const pipelinerunReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["PipelineRunModel"]);
const PipelineRunRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: pipelinerunReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name, "data-test-id": obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: Object(_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_5__["pipelineRunFilterReducer"])(obj) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_status_LinkedPipelineRunTaskStatus__WEBPACK_IMPORTED_MODULE_9__["default"], { pipelineRun: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: obj.status && obj.status.startTime })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][5] }, Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_7__["pipelineRunDuration"])(obj)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipelinerun_table__WEBPACK_IMPORTED_MODULE_11__["tableColumnClasses"][6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_triggered_by__WEBPACK_IMPORTED_MODULE_10__["ResourceKebabWithUserLabel"], { actions: Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_6__["getPipelineRunKebabActions"])(), kind: pipelinerunReference, resource: obj }))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunRow);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/list-page/pipelinerun-table.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/list-page/pipelinerun-table.ts ***!
  \*****************************************************************************************/
/*! exports provided: tableColumnClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");

const tableColumnClasses = [
    '',
    '',
    'pf-m-hidden pf-m-visible-on-sm',
    'pf-m-hidden pf-m-visible-on-lg',
    'pf-m-hidden pf-m-visible-on-lg',
    'pf-m-hidden pf-m-visible-on-xl',
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].columnClass,
];


/***/ }),

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

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineRuns.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineRuns.tsx ***!
  \*****************************************************************************************/
/*! exports provided: runFilters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runFilters", function() { return runFilters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _pipelineruns_list_page_PipelineRunList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipelineruns/list-page/PipelineRunList */ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunList.tsx");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");







const runFilters = [
    {
        type: 'pipelinerun-status',
        selected: [
            _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Succeeded,
            _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Running,
            _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Failed,
            _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Cancelled,
        ],
        reducer: _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_4__["pipelineRunFilterReducer"],
        items: [
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Succeeded, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Succeeded] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Running, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Running] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Failed, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Failed] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Cancelled, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["ListFilterId"].Cancelled] },
        ],
        filter: _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_4__["pipelineRunStatusFilter"],
    },
];
const PipelineRuns = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], { showTitle: false, canCreate: false, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"]), namespace: obj.metadata.namespace, selector: {
        'tekton.dev/pipeline': obj.metadata.name,
    }, ListComponent: _pipelineruns_list_page_PipelineRunList__WEBPACK_IMPORTED_MODULE_3__["default"], rowFilters: runFilters }));
/* harmony default export */ __webpack_exports__["default"] = (PipelineRuns);


/***/ })

}]);
//# sourceMappingURL=PipelineBuilderPage~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeline-details~pipel~ba3549d0-709492bd94e3b0fc01cf.js.map