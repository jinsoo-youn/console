(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["git-import-form~source-to-image-form"],{

/***/ "./packages/dev-console/src/components/import/pipeline/PipelineSection.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/pipeline/PipelineSection.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _PipelineTemplate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PipelineTemplate */ "./packages/dev-console/src/components/import/pipeline/PipelineTemplate.tsx");











const usePipelineAccessReview = () => {
    const canListPipelines = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"].plural,
        namespace: _const__WEBPACK_IMPORTED_MODULE_8__["CLUSTER_PIPELINE_NS"],
        verb: 'list',
    });
    const canCreatePipelines = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"].plural,
        namespace: Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__["getActiveNamespace"])(),
        verb: 'create',
    });
    const canCreatePipelineResource = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineResourceModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_7__["PipelineResourceModel"].plural,
        namespace: Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__["getActiveNamespace"])(),
        verb: 'create',
    });
    return canListPipelines && canCreatePipelines && canCreatePipelineResource;
};
const PipelineSection = ({ flags, builderImages }) => {
    const { values } = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormikContext"])();
    const hasCreatePipelineAccess = usePipelineAccessReview();
    if (flags[_const__WEBPACK_IMPORTED_MODULE_8__["FLAG_OPENSHIFT_PIPELINE"]] && hasCreatePipelineAccess) {
        const title = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Split"], { gutter: "md" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["SplitItem"], { className: "odc-form-section__heading" }, "Pipelines"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["SplitItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["TechPreviewBadge"], null))));
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_9__["default"], { title: title }, values.image.selected || values.build.strategy === 'Docker' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineTemplate__WEBPACK_IMPORTED_MODULE_10__["default"], { builderImages: builderImages })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, variant: "info", title: "Select a builder image and resource to see if there is a pipeline template available for this runtime." }))));
    }
    return null;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_1__["connectToFlags"])(_const__WEBPACK_IMPORTED_MODULE_8__["FLAG_OPENSHIFT_PIPELINE"])(PipelineSection));


/***/ }),

/***/ "./packages/dev-console/src/components/import/pipeline/PipelineTemplate.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/pipeline/PipelineTemplate.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_detail_page_tabs_pipeline_details_PipelineVisualization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipelines/detail-page-tabs/pipeline-details/PipelineVisualization */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/pipeline-details/PipelineVisualization.tsx");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const MISSING_DOCKERFILE_LABEL_TEXT = 'The pipeline template for Dockerfiles is not available at this time.';
const labelType = 'pipeline.openshift.io/type';
const labelRuntime = 'pipeline.openshift.io/runtime';
const labelDocker = 'pipeline.openshift.io/strategy';
const getAlertText = (isDockerStrategy, builderImage, resourceType) => {
    if (isDockerStrategy)
        return MISSING_DOCKERFILE_LABEL_TEXT;
    return `There are no pipeline templates available for ${builderImage} and ${resourceType} combination.`;
};
const PipelineTemplate = ({ builderImages }) => {
    var _a;
    const [noTemplateForRuntime, setNoTemplateForRuntime] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [isExpanded, setIsExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const pipelineStorageRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({});
    const { values: { pipeline, image, build, resources }, setFieldValue, } = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
    const isDockerStrategy = build.strategy === 'Docker';
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let ignore = false;
        const builderPipelineLabel = { [labelRuntime]: image.selected };
        const dockerPipelineLabel = { [labelDocker]: 'docker' };
        const labelSelector = isDockerStrategy ? dockerPipelineLabel : builderPipelineLabel;
        const fetchPipelineTemplate = () => __awaiter(void 0, void 0, void 0, function* () {
            let fetchedPipelines = null;
            if (!pipelineStorageRef.current[image.selected]) {
                fetchedPipelines = (yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_7__["PipelineModel"], {
                    ns: _const__WEBPACK_IMPORTED_MODULE_6__["CLUSTER_PIPELINE_NS"],
                    labelSelector,
                }));
            }
            if (ignore)
                return;
            if (fetchedPipelines) {
                pipelineStorageRef.current[image.selected] = fetchedPipelines;
            }
            const imagePipelines = pipelineStorageRef.current[image.selected] || [];
            const resourceSpecificPipeline = imagePipelines.find((pl) => { var _a, _b; return ((_b = (_a = pl.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[labelType]) === resources; });
            const pipelineTemplate = resourceSpecificPipeline || imagePipelines.find((pl) => { var _a, _b; return !((_b = (_a = pl.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[labelType]); });
            if (pipelineTemplate) {
                setFieldValue('pipeline.template', pipelineTemplate);
                setNoTemplateForRuntime(false);
            }
            else {
                setFieldValue('pipeline.template', null);
                setNoTemplateForRuntime(true);
            }
        });
        fetchPipelineTemplate();
        return () => {
            ignore = true;
        };
    }, [resources, image.selected, isDockerStrategy, setFieldValue]);
    if (noTemplateForRuntime) {
        const builderImageTitle = ((_a = builderImages === null || builderImages === void 0 ? void 0 : builderImages[image.selected]) === null || _a === void 0 ? void 0 : _a.title) || 'this builder image';
        const resourceName = _import_types__WEBPACK_IMPORTED_MODULE_9__["ReadableResourcesNames"][resources];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, variant: "info", title: getAlertText(isDockerStrategy, builderImageTitle, resourceName) }));
    }
    return pipeline.template ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["CheckboxField"], { label: "Add pipeline", name: "pipeline.enabled" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Expandable"], { toggleText: `${isExpanded ? 'Hide' : 'Show'} pipeline visualization`, isExpanded: isExpanded, onToggle: () => setIsExpanded(!isExpanded) }, isExpanded && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelines_detail_page_tabs_pipeline_details_PipelineVisualization__WEBPACK_IMPORTED_MODULE_8__["default"], { pipeline: pipeline.template })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["LoadingInline"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineTemplate);


/***/ }),

/***/ "./packages/dev-console/src/components/import/section/ResourceSection.scss":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/ResourceSection.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/section/ResourceSection.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/ResourceSection.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _FormSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _ResourceSection_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ResourceSection.scss */ "./packages/dev-console/src/components/import/section/ResourceSection.scss");
/* harmony import */ var _ResourceSection_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ResourceSection_scss__WEBPACK_IMPORTED_MODULE_10__);











const createHelpText = (k8sModel, helpText) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-resource-section__help-text" },
            k8sModel.apiGroup,
            "/",
            k8sModel.kind),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, helpText)));
};
const ResourceSection = ({ flags }) => {
    const [field] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('resourceTypesNotValid');
    const invalidTypes = field.value || [];
    const radioOptions = [];
    if (!invalidTypes.includes(_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes)) {
        radioOptions.push({
            label: _import_types__WEBPACK_IMPORTED_MODULE_8__["ReadableResourcesNames"][_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes],
            value: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes,
            children: createHelpText(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentModel"], `A ${_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentModel"].label} enables declarative updates for Pods and ReplicaSets.`),
        });
    }
    if (!invalidTypes.includes(_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].OpenShift)) {
        radioOptions.push({
            label: _import_types__WEBPACK_IMPORTED_MODULE_8__["ReadableResourcesNames"][_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].OpenShift],
            value: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].OpenShift,
            children: createHelpText(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentConfigModel"], `A ${_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentConfigModel"].label} defines the template for a pod \
        and manages deploying new images or configuration changes`),
        });
    }
    const knativeServiceAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["useAccessReview"])({
        group: _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].apiGroup,
        resource: _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].plural,
        namespace: Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_7__["getActiveNamespace"])(),
        verb: 'create',
    });
    const canIncludeKnative = !invalidTypes.includes(_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService) &&
        flags[_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["FLAG_KNATIVE_SERVING_SERVICE"]] &&
        knativeServiceAccess;
    if (canIncludeKnative) {
        radioOptions.push({
            label: _import_types__WEBPACK_IMPORTED_MODULE_8__["ReadableResourcesNames"][_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService],
            value: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService,
            children: createHelpText(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"], `A Knative Service enables scaling to zero when idle`),
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FormSection__WEBPACK_IMPORTED_MODULE_9__["default"], { title: "Resources", fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Select the resource type to generate"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["RadioGroupField"], { name: "resources", options: radioOptions })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_2__["connectToFlags"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["FLAG_KNATIVE_SERVING_SERVICE"])(ResourceSection));


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


/***/ })

}]);
//# sourceMappingURL=git-import-form~source-to-image-form-d401e029f8c57ee87a27.js.map