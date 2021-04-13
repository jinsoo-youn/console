(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipelinerun-details"],{

/***/ "./packages/dev-console/src/components/pipelineruns/PipelineRunDetailsPage.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/PipelineRunDetailsPage.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/pipeline-actions */ "./packages/dev-console/src/utils/pipeline-actions.tsx");
/* harmony import */ var _detail_page_tabs_PipelineRunDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-page-tabs/PipelineRunDetails */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunDetails.tsx");
/* harmony import */ var _detail_page_tabs_PipelineRunLogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-page-tabs/PipelineRunLogs */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunLogs.tsx");
/* harmony import */ var _triggered_by__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./triggered-by */ "./packages/dev-console/src/components/pipelineruns/triggered-by/index.ts");








const PipelineRunDetailsPage = (props) => {
    const menuActions = Object(_triggered_by__WEBPACK_IMPORTED_MODULE_7__["useMenuActionsWithUserLabel"])(Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_4__["getPipelineRunKebabActions"])(true));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, getResourceStatus: _utils_pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__["pipelineRunStatus"], pages: [
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(_detail_page_tabs_PipelineRunDetails__WEBPACK_IMPORTED_MODULE_5__["PipelineRunDetails"]),
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].editYaml(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["viewYamlComponent"]),
            {
                href: 'logs',
                path: 'logs/:name?',
                name: 'Logs',
                component: _detail_page_tabs_PipelineRunLogs__WEBPACK_IMPORTED_MODULE_6__["PipelineRunLogsWithActiveTask"],
            },
        ] })));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRunDetailsPage);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunDetails.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunDetails.tsx ***!
  \**************************************************************************************************/
/*! exports provided: PipelineRunDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRunDetails", function() { return PipelineRunDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_resource_overview_ResourceLinkList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipelines/resource-overview/ResourceLinkList */ "./packages/dev-console/src/components/pipelines/resource-overview/ResourceLinkList.tsx");
/* harmony import */ var _PipelineRunVisualization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineRunVisualization */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/PipelineRunVisualization.tsx");
/* harmony import */ var _TriggeredBySection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TriggeredBySection */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.tsx");
/* harmony import */ var _TriggeredBySection_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TriggeredBySection.scss */ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.scss");
/* harmony import */ var _TriggeredBySection_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TriggeredBySection_scss__WEBPACK_IMPORTED_MODULE_8__);









const PipelineRunDetails = ({ obj: pipelineRun }) => {
    // FIXME: If they are inline resources, we are not going to render them
    const unfilteredResources = pipelineRun.spec.resources;
    const renderResources = (unfilteredResources === null || unfilteredResources === void 0 ? void 0 : unfilteredResources.filter(({ resourceRef }) => !!resourceRef).map((resource) => resource.resourceRef.name)) || [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body odc-pipeline-run-details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: "Pipeline Run Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineRunVisualization__WEBPACK_IMPORTED_MODULE_6__["default"], { pipelineRun: pipelineRun }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: pipelineRun })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6 odc-pipeline-run-details__customDetails" },
                Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["pipelineRefExists"])(pipelineRun) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Pipeline"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineModel"]), name: pipelineRun.spec.pipelineRef.name, namespace: pipelineRun.metadata.namespace })))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TriggeredBySection__WEBPACK_IMPORTED_MODULE_7__["default"], { pipelineRun: pipelineRun }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelines_resource_overview_ResourceLinkList__WEBPACK_IMPORTED_MODULE_5__["default"], { model: _models__WEBPACK_IMPORTED_MODULE_4__["PipelineResourceModel"], links: renderResources, namespace: pipelineRun.metadata.namespace })))));
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.scss":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/detail-page-tabs/TriggeredBySection.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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


/***/ })

}]);
//# sourceMappingURL=pipelinerun-details-2ef82143a7c39eb7ca6f.js.map