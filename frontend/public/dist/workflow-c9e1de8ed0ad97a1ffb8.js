(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workflow"],{

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/WorkflowVisualization.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/WorkflowVisualization.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: WorkflowVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowVisualization", function() { return WorkflowVisualization; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pipelines_detail_page_tabs_pipeline_details_WorkflowTemplateVisualization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipelines/detail-page-tabs/pipeline-details/WorkflowTemplateVisualization */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowTemplateVisualization.tsx");


const WorkflowVisualization = ({ workflow }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelines_detail_page_tabs_pipeline_details_WorkflowTemplateVisualization__WEBPACK_IMPORTED_MODULE_1__["WorkflowTemplateVisualization"], { workflow: workflow, workflowTemplate: workflow }));


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowTemplateVisualization.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/WorkflowTemplateVisualization.tsx ***!
  \***************************************************************************************************************************/
/*! exports provided: WorkflowTemplateVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowTemplateVisualization", function() { return WorkflowTemplateVisualization; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipeline-topology/PipelineTopologyGraph */ "./packages/dev-console/src/components/pipelines/pipeline-topology/PipelineTopologyGraph.tsx");
/* harmony import */ var _pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipeline-topology/utils */ "./packages/dev-console/src/components/pipelines/pipeline-topology/utils.ts");
/* harmony import */ var _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipeline-topology/const */ "./packages/dev-console/src/components/pipelines/pipeline-topology/const.ts");
/* harmony import */ var _PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PipelineVisualization.scss */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.scss");
/* harmony import */ var _PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PipelineVisualization_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");







const WorkflowTemplateVisualization = ({ workflowTemplate, workflow = undefined }) => {
    var _a;
    const obj = workflow || workflowTemplate;
    const templates = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](obj, ['spec', 'templates']) || [];
    let template = null;
    let tasks = [];
    for (let tmp of templates) {
        if (tmp.hasOwnProperty('dag')) {
            template = Object.assign(Object.assign({}, tmp), { type: 'dag' });
        }
        else if (tmp.hasOwnProperty('steps')) {
            template = Object.assign(Object.assign({}, tmp), { type: 'step' });
        }
    }
    if ((template === null || template === void 0 ? void 0 : template.type) === 'dag') {
        tasks = lodash_es__WEBPACK_IMPORTED_MODULE_6__["get"](template, ['dag', 'tasks']).map(item => {
            return Object.assign({ name: item.name, runAfter: item.dependencies || [], taskRef: {
                    kind: 'Task',
                    name: item.name,
                } }, item);
        });
    }
    else if ((template === null || template === void 0 ? void 0 : template.type) === 'step') {
        tasks = template.steps[0] ? template.steps
            .map(item => item[0])
            .map((item, idx, arr) => {
            return Object.assign({ name: item.name, runAfter: idx ? [arr[idx - 1].name] : [], taskRef: {
                    kind: 'Task',
                    name: item.name,
                } }, item);
        }) : [];
    }
    else {
        // 그래프로 표현할 항목이 없을 경우 템플릿을 노드 하나로 표현
        tasks = templates.map((item) => {
            return Object.assign({ name: item.name, isTemplate: true, runAfter: [], taskRef: {
                    kind: 'Task',
                    name: item.name,
                } }, item);
        });
    }
    obj.spec.tasks = tasks;
    const { nodes, edges } = Object(_pipeline_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodesEdges"])(workflowTemplate, workflow);
    nodes.forEach(node => node.type = _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__["NodeType"].WORKFLOW_NODE);
    if (nodes.length === 0 && edges.length === 0) {
        // Nothing to render
        // TODO: Confirm wording with UX; ODC-1860
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "info", isInline: true, title: `This ${workflow ? 'Workflow' : 'Workflow Template'} has no step to visualize.` }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-visualization" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_topology_PipelineTopologyGraph__WEBPACK_IMPORTED_MODULE_2__["default"], { id: ((_a = workflow === null || workflow === void 0 ? void 0 : workflow.metadata) === null || _a === void 0 ? void 0 : _a.name) || workflowTemplate.metadata.name, nodes: nodes, edges: edges, layout: _pipeline_topology_const__WEBPACK_IMPORTED_MODULE_4__["PipelineLayout"].DAGRE_VIEWER })));
};


/***/ }),

/***/ "./public/components/hypercloud/workflow.tsx":
/*!***************************************************!*\
  !*** ./public/components/hypercloud/workflow.tsx ***!
  \***************************************************/
/*! exports provided: menuActions, WorkflowTemplateRef, Workflows, WorkflowsPage, WorkflowsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowTemplateRef", function() { return WorkflowTemplateRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workflows", function() { return Workflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowsPage", function() { return WorkflowsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowsDetailsPage", function() { return WorkflowsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _packages_dev_console_src_components_pipelineruns_detail_page_tabs_WorkflowVisualization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../packages/dev-console/src/components/pipelineruns/detail-page-tabs/WorkflowVisualization */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/WorkflowVisualization.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/datetime */ "./public/components/utils/datetime.ts");










const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["WorkflowModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_7__["WorkflowModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const WorkflowTableHeader = (t) => {
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
            title: t('COMMON:STATUS'),
            sortField: 'status.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:STARTTIME'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:ENDTIME'),
            sortField: 'status.finishedAt',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
WorkflowTableHeader.displayName = 'WorkflowTableHeader';
const WorkflowTableRow = ({ obj: wf, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: wf.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: wf.metadata.name, namespace: wf.metadata.namespace, title: wf.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: wf.metadata.namespace, title: wf.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, wf.status.phase),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] }, wf.metadata.creationTimestamp ? Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_9__["fromNow"])(wf.metadata.creationTimestamp) : ''),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] }, wf.status.finishedAt ? Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_9__["fromNow"])(wf.status.finishedAt) : ''),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: wf }))));
};
const WorkflowTemplateRef = (props) => {
    const { workflow, workflowTemplateRef } = props;
    workflowTemplateRef.data.status = workflow.status; // 상태값은 workflow에서 가져옴
    if (!workflowTemplateRef.loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["LoadingBox"], { className: "loading-box loading-box__loading" });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelineruns_detail_page_tabs_WorkflowVisualization__WEBPACK_IMPORTED_MODULE_6__["WorkflowVisualization"], { workflow: workflowTemplateRef.data })));
};
const WorkflowGraph = ({ obj }) => {
    if (obj.spec.workflowTemplateRef) {
        // workflowTempalteRef 가 있는 경우 workflowTemplate을 조회하여 graph 표현
        // 상태값은 workflow 객체에서 가져옴
        const resources = [
            {
                kind: 'WorkflowTemplate',
                name: obj.spec.workflowTemplateRef.name,
                namespace: obj.metadata.namespace,
                prop: 'workflowTemplateRef',
            },
        ];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { resources: resources },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WorkflowTemplateRef, { workflow: obj })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_packages_dev_console_src_components_pipelineruns_detail_page_tabs_WorkflowVisualization__WEBPACK_IMPORTED_MODULE_6__["WorkflowVisualization"], { workflow: obj })));
};
const WorkflowDetails = ({ obj: wf }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(wf, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: wf }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const Workflows = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Workflows", Header: WorkflowTableHeader.bind(null, t), Row: WorkflowTableRow, virtualize: true }));
};
const WorkflowsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ canCreate: true, ListComponent: Workflows, kind: kind }, props));
const WorkflowsDetailsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [
            details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(WorkflowDetails)),
            {
                href: 'workflow',
                name: t('RESOURCE:WORKFLOW'),
                component: WorkflowGraph,
            },
            editYaml()
        ] })));
};


/***/ })

}]);
//# sourceMappingURL=workflow-c9e1de8ed0ad97a1ffb8.js.map