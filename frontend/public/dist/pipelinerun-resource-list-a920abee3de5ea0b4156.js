(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipelinerun-resource-list"],{

/***/ "./packages/dev-console/src/components/charts/HorizontalStackedBars.scss":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/charts/HorizontalStackedBars.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalStackedBars.scss */ "./packages/dev-console/src/components/charts/HorizontalStackedBars.scss");
/* harmony import */ var _HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2__);



const HorizontalStackedBars = ({ barGap, height, inline, values, width, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-horizontal-stacked-bars', { 'is-inline': inline }), style: { height, width, ['--bar-gap']: barGap && `${barGap}px` } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-horizontal-stacked-bars__bars" }, values.map(({ color, name, size }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: name, className: "odc-horizontal-stacked-bars__data-bar", style: {
                background: color,
                flexGrow: size,
            } }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalStackedBars);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/PipelineRunsResourceList.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/PipelineRunsResourceList.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_detail_page_tabs_PipelineRuns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipelines/detail-page-tabs/PipelineRuns */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/PipelineRuns.tsx");
/* harmony import */ var _list_page_PipelineRunList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-page/PipelineRunList */ "./packages/dev-console/src/components/pipelineruns/list-page/PipelineRunList.tsx");







const PipelineRunsResourceList = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ListPage"], Object.assign({}, props, { canCreate: false, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineRunModel"]), ListComponent: _list_page_PipelineRunList__WEBPACK_IMPORTED_MODULE_6__["default"], rowFilters: _pipelines_detail_page_tabs_PipelineRuns__WEBPACK_IMPORTED_MODULE_5__["runFilters"], badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineRunModel"].badge) })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunsResourceList);


/***/ }),

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
//# sourceMappingURL=pipelinerun-resource-list-a920abee3de5ea0b4156.js.map