(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline-resource-list"],{

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

/***/ "./packages/dev-console/src/components/pipelines/PipelinesResourceList.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/PipelinesResourceList.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _list_page_PipelineAugmentRunsWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-page/PipelineAugmentRunsWrapper */ "./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRunsWrapper.tsx");
/* harmony import */ var _list_page_PipelineAugmentRuns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-page/PipelineAugmentRuns */ "./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRuns.tsx");








const PipelinesResourceList = (props) => {
    const { namespace, showTitle = true } = props;
    const resources = [
        {
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"]),
            namespace,
            prop: _models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"].id,
            filters: Object.assign({}, _list_page_PipelineAugmentRuns__WEBPACK_IMPORTED_MODULE_7__["filters"]),
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["FireMan_"], Object.assign({}, props, { canCreate: true, createButtonText: `Create ${_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"].label}`, createProps: {
            to: namespace
                ? `/k8s/ns/${namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"])}/~new/builder`
                : `/k8s/cluster/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"])}/~new`,
        }, createAccessReview: { model: _models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"], namespace }, filterLabel: "by name", textFilter: "name", resources: resources, title: showTitle ? _models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"].labelPlural : null, badge: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBadgeFromType"])(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"].badge) }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_list_page_PipelineAugmentRunsWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelinesResourceList);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRuns.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRuns.tsx ***!
  \*****************************************************************************************/
/*! exports provided: filters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
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






const filters = [
    {
        filterGroupName: 'Status',
        type: 'pipeline-status',
        reducer: _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_5__["pipelineFilterReducer"],
        items: [
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Succeeded, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Succeeded] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Running, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Running] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Failed, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Failed] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Cancelled, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Cancelled] },
            { id: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Other, title: _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterLabels"][_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_4__["ListFilterId"].Other] },
        ],
        filter: _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_5__["pipelineStatusFilter"],
    },
];
// Firehose injects a lot of props and some of those are considered the KeyedRuns
const PipelineAugmentRuns = (_a) => {
    var { propsReferenceForRuns } = _a, props = __rest(_a, ["propsReferenceForRuns"]);
    const allFilters = Object.assign(Object.assign({}, props.filters), (lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.pipeline, 'filters.name') && { name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.pipeline, 'filters.name') }));
    const resourceData = props.pipeline && props.pipeline.data && propsReferenceForRuns
        ? Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["augmentRunsToData"])(props.pipeline.data, propsReferenceForRuns, props)
        : null;
    const children = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["inject"])(props.children, Object.assign(Object.assign({}, props), { filters: allFilters, resources: { pipeline: { data: resourceData } } }));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children);
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineAugmentRuns);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRunsWrapper.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRunsWrapper.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineAugmentRuns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineAugmentRuns */ "./packages/dev-console/src/components/pipelines/list-page/PipelineAugmentRuns.tsx");
/* harmony import */ var _PipelineList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PipelineList */ "./packages/dev-console/src/components/pipelines/list-page/PipelineList.tsx");








const PipelineAugmentRunsWrapper = (props) => {
    const pipelineData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](props.pipeline, 'data', []);
    if (pipelineData.length < 1) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cos-status-box" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text-center" },
                "No ",
                _models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"].labelPlural,
                " Found")));
    }
    const firehoseResources = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_4__["getResources"])(props.pipeline.data);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: firehoseResources.resources },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PipelineAugmentRuns__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, { propsReferenceForRuns: firehoseResources.propsReferenceForRuns }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ListPageWrapper_"], { flatten: (_resources) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](_resources, ['pipeline', 'data'], {}), kinds: ['Pipeline'], ListComponent: _PipelineList__WEBPACK_IMPORTED_MODULE_7__["default"], rowFilters: _PipelineAugmentRuns__WEBPACK_IMPORTED_MODULE_6__["filters"] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineAugmentRunsWrapper);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/PipelineHeader.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/PipelineHeader.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _pipeline_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipeline-table */ "./packages/dev-console/src/components/pipelines/list-page/pipeline-table.ts");


const PipelineHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][1] },
        },
        {
            title: 'Last Run',
            sortField: 'latestRun.metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][2] },
        },
        {
            title: 'Task Status',
            sortField: 'latestRun.status.succeededCondition',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][3] },
        },
        {
            title: 'Last Run Status',
            sortField: 'latestRun.status.succeededCondition',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][4] },
        },
        {
            title: 'Last Run Time',
            sortField: 'latestRun.status.completionTime',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][5] },
        },
        {
            title: '',
            props: { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][6] },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/PipelineList.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/PipelineList.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _PipelineHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineHeader */ "./packages/dev-console/src/components/pipelines/list-page/PipelineHeader.tsx");
/* harmony import */ var _PipelineRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineRow */ "./packages/dev-console/src/components/pipelines/list-page/PipelineRow.tsx");






const PipelineList = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["Table"], Object.assign({}, props, { defaultSortField: "latestRun.status.completionTime", defaultSortOrder: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["SortByDirection"].desc, "aria-label": _models__WEBPACK_IMPORTED_MODULE_3__["PipelineModel"].labelPlural, Header: _PipelineHeader__WEBPACK_IMPORTED_MODULE_4__["default"], Row: _PipelineRow__WEBPACK_IMPORTED_MODULE_5__["default"], virtualize: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineList);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/PipelineRow.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/PipelineRow.tsx ***!
  \*********************************************************************************/
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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelineruns_status_LinkedPipelineRunTaskStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipelineruns/status/LinkedPipelineRunTaskStatus */ "./packages/dev-console/src/components/pipelineruns/status/LinkedPipelineRunTaskStatus.tsx");
/* harmony import */ var _pipeline_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipeline-table */ "./packages/dev-console/src/components/pipelines/list-page/pipeline-table.ts");
/* harmony import */ var _PipelineRowKebabActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PipelineRowKebabActions */ "./packages/dev-console/src/components/pipelines/list-page/PipelineRowKebabActions.tsx");










const pipelineReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineModel"]);
const pipelinerunReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["PipelineRunModel"]);
const PipelineRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableRow"], { id: obj.metadata.uid, "data-test-id": `${obj.metadata.namespace}-${obj.metadata.name}`, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: pipelineReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][2] }, obj.latestRun && obj.latestRun.metadata && obj.latestRun.metadata.name ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: pipelinerunReference, name: obj.latestRun.metadata.name, namespace: obj.latestRun.metadata.namespace })) : ('-')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][3] }, obj.latestRun ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelineruns_status_LinkedPipelineRunTaskStatus__WEBPACK_IMPORTED_MODULE_7__["default"], { pipeline: obj, pipelineRun: obj.latestRun })) : ('-')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: Object(_utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_5__["pipelineFilterReducer"])(obj) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][5] }, (obj.latestRun && obj.latestRun.status && obj.latestRun.status.completionTime && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: obj.latestRun.status.completionTime }))) ||
            '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], { className: _pipeline_table__WEBPACK_IMPORTED_MODULE_8__["tableColumnClasses"][6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineRowKebabActions__WEBPACK_IMPORTED_MODULE_9__["default"], { pipeline: obj }))));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRow);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/PipelineRowKebabActions.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/PipelineRowKebabActions.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/triggers */ "./packages/dev-console/src/components/pipelines/utils/triggers.ts");






const pipelineReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineModel"]);
const PipelineRowKebabActions = ({ pipeline, pipelineRun }) => {
    var _a;
    const { metadata: { name, namespace }, } = pipeline;
    const templateNames = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_5__["usePipelineTriggerTemplateNames"])(name, namespace) || [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceKebab"], { actions: Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_3__["getPipelineKebabActions"])((_a = pipeline.latestRun) !== null && _a !== void 0 ? _a : pipelineRun, templateNames.length > 0), kind: pipelineReference, resource: pipeline }));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRowKebabActions);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/list-page/pipeline-table.ts":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/list-page/pipeline-table.ts ***!
  \***********************************************************************************/
/*! exports provided: tableColumnClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");

const tableColumnClasses = [
    'col-lg-2 col-md-3 col-sm-4 col-xs-4',
    'col-lg-2 col-md-3 col-sm-3 col-xs-3',
    'col-lg-2 col-md-4 col-sm-5 col-xs-5',
    'col-lg-2 col-md-2 hidden-sm hidden-xs',
    'col-lg-2 hidden-md hidden-sm hidden-xs',
    'col-lg-2 hidden-md hidden-sm hidden-xs',
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].columnClass,
];


/***/ })

}]);
//# sourceMappingURL=pipeline-resource-list-78f99230c47dc01f4ed5.js.map