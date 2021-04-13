(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline"],{

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


/***/ }),

/***/ "./public/components/hypercloud/pipeline.tsx":
/*!***************************************************!*\
  !*** ./public/components/hypercloud/pipeline.tsx ***!
  \***************************************************/
/*! exports provided: menuActions, getResourceModelFromTaskKind, PipelineDetailsList, Pipelines, PipelinesPage, PipelinesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromTaskKind", function() { return getResourceModelFromTaskKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineDetailsList", function() { return PipelineDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipelines", function() { return Pipelines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesPage", function() { return PipelinesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesDetailsPage", function() { return PipelinesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _packages_dev_console_src_components_pipelines_detail_page_tabs_pipeline_details_PipelineVisualization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelines_resource_overview_DynamicResourceLinkList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList */ "./packages/dev-console/src/components/pipelines/resource-overview/DynamicResourceLinkList.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelines/detail-page-tabs */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/index.ts");
/* harmony import */ var _packages_dev_console_src_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../packages/dev-console/src/utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
/* harmony import */ var _pipeline_run__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipeline-run */ "./public/components/hypercloud/pipeline-run.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelines_list_page_PipelineRowKebabActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelines/list-page/PipelineRowKebabActions */ "./packages/dev-console/src/components/pipelines/list-page/PipelineRowKebabActions.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");














const menuActions = [_packages_dev_console_src_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_9__["addTrigger"], ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_5__["PipelineModel"].kind;
const tableColumnClasses = [
    'col-xs-6 col-sm-4',
    'col-xs-6 col-sm-4',
    'col-sm-4 hidden-xs',
    _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass,
];
const PipelineTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
PipelineTableHeader.displayName = 'PipelineTableHeader';
const PipelineTableRow = ({ obj: pipeline, index, key, style }) => {
    var _a, _b, _c, _d, _e;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: pipeline.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: (_a = pipeline.metadata) === null || _a === void 0 ? void 0 : _a.name, namespace: (_b = pipeline.metadata) === null || _b === void 0 ? void 0 : _b.namespace, title: (_c = pipeline.metadata) === null || _c === void 0 ? void 0 : _c.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: (_d = pipeline.metadata) === null || _d === void 0 ? void 0 : _d.namespace, title: (_e = pipeline.metadata) === null || _e === void 0 ? void 0 : _e.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: pipeline.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelines_list_page_PipelineRowKebabActions__WEBPACK_IMPORTED_MODULE_11__["default"], { pipeline: pipeline }))));
};
const getResourceModelFromTaskKind = (kind) => (kind === _models__WEBPACK_IMPORTED_MODULE_5__["ClusterTaskModel"].kind ? _models__WEBPACK_IMPORTED_MODULE_5__["ClusterTaskModel"] : _models__WEBPACK_IMPORTED_MODULE_5__["TaskModel"]);
const PipelineDetailsList = ({ ds: pipeline }) => {
    const taskLinks = pipeline.spec.tasks
        .filter((pipelineTask) => !!pipelineTask.taskRef)
        .map(task => ({
        model: getResourceModelFromTaskKind(task.taskRef.kind),
        name: task.taskRef.name,
        displayName: task.name,
    }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelines_resource_overview_DynamicResourceLinkList__WEBPACK_IMPORTED_MODULE_7__["default"], { namespace: pipeline.metadata.namespace, links: taskLinks, title: "Tasks" })));
};
const PipelineDetails = ({ obj: pipeline }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_13__["ResourceLabel"])(pipeline, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelines_detail_page_tabs_pipeline_details_PipelineVisualization__WEBPACK_IMPORTED_MODULE_6__["default"], { pipeline: pipeline }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: pipeline })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PipelineDetailsList, { ds: pipeline }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const Pipelines = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Pipelines", Header: PipelineTableHeader.bind(null, t), Row: PipelineTableRow, virtualize: true }));
};
const PipelinesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_59'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_59') }), canCreate: true, ListComponent: Pipelines, kind: kind }, props));
};
const PipelinesDetailsPage = props => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [
        details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(PipelineDetails)),
        editYaml(),
        {
            href: 'runs',
            name: 'Pipeline Runs',
            component: pageProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_run__WEBPACK_IMPORTED_MODULE_10__["PipelineRunsPage"], { showTitle: false, canCreate: false, namespace: pageProps.obj.metadata.namespace, selector: { 'tekton.dev/pipeline': pageProps.obj.metadata.name, } }),
        },
        {
            href: 'parameters',
            name: 'Parameters',
            component: pageProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__["PipelineForm"], Object.assign({ PipelineFormComponent: _packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__["PipelineParametersForm"], formName: "parameters", validationSchema: _packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__["parametersValidationSchema"], obj: pageProps.obj }, pageProps)),
        },
        {
            href: 'resources',
            name: 'Resources',
            component: pageProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__["PipelineForm"], Object.assign({ PipelineFormComponent: _packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__["PipelineResourcesForm"], formName: "resources", validationSchema: _packages_dev_console_src_components_pipelines_detail_page_tabs__WEBPACK_IMPORTED_MODULE_8__["resourcesValidationSchema"], obj: pageProps.obj }, pageProps)),
        },
    ] })));


/***/ })

}]);
//# sourceMappingURL=pipeline-b76c3c7ac918d8295110.js.map