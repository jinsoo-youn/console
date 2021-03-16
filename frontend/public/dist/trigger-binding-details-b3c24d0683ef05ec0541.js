(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trigger-binding-details"],{

/***/ "./packages/dev-console/src/components/pipelines/TriggerBindingPage.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/TriggerBindingPage.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _detail_page_tabs_TriggerBindingDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-page-tabs/TriggerBindingDetails */ "./packages/dev-console/src/components/pipelines/detail-page-tabs/TriggerBindingDetails.tsx");




const TriggerBindingPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["DetailsPage"], Object.assign({}, props, { menuActions: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.common, pages: [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(_detail_page_tabs_TriggerBindingDetails__WEBPACK_IMPORTED_MODULE_3__["default"]), _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].editYaml(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["viewYamlComponent"])] })));
/* harmony default export */ __webpack_exports__["default"] = (TriggerBindingPage);


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/detail-page-tabs/TriggerBindingDetails.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/detail-page-tabs/TriggerBindingDetails.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _resource_overview_ResourceLinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource-overview/ResourceLinkList */ "./packages/dev-console/src/components/pipelines/resource-overview/ResourceLinkList.tsx");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/triggers */ "./packages/dev-console/src/components/pipelines/utils/triggers.ts");






const TriggerBindingDetails = ({ obj: triggerBinding }) => {
    const eventListeners = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_5__["useTriggerBindingEventListenerNames"])(triggerBinding);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: `${Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_3__["getResourceModelFromBindingKind"])(triggerBinding.kind).label} Details` }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: triggerBinding })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_overview_ResourceLinkList__WEBPACK_IMPORTED_MODULE_4__["default"], { namespace: triggerBinding.metadata.namespace, model: _models__WEBPACK_IMPORTED_MODULE_2__["EventListenerModel"], links: eventListeners })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TriggerBindingDetails);


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


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/utils/triggers.ts":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/utils/triggers.ts ***!
  \*************************************************************************/
/*! exports provided: usePipelineTriggerTemplateNames, useEventListenerTriggerTemplateNames, getEventListenerTriggerBindingNames, getTriggerTemplatePipelineName, useTriggerTemplateEventListenerNames, useTriggerBindingEventListenerNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePipelineTriggerTemplateNames", function() { return usePipelineTriggerTemplateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListenerTriggerTemplateNames", function() { return useEventListenerTriggerTemplateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventListenerTriggerBindingNames", function() { return getEventListenerTriggerBindingNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerTemplatePipelineName", function() { return getTriggerTemplatePipelineName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTriggerTemplateEventListenerNames", function() { return useTriggerTemplateEventListenerNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTriggerBindingEventListenerNames", function() { return useTriggerBindingEventListenerNames; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/routes */ "./public/components/routes.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/k8s-get-hook */ "./public/components/utils/k8s-get-hook.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");









const getResourceName = (resource) => resource.metadata.name;
const getEventListenerTemplateNames = (el) => el.spec.triggers.map((elTrigger) => elTrigger.template.name);
const getEventListenerGeneratedName = (eventListener) => { var _a; return (_a = eventListener.status) === null || _a === void 0 ? void 0 : _a.configuration.generatedName; };
const useEventListenerRoutes = (namespace, eventListenerResources) => {
    const memoResources = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        return (eventListenerResources || []).map(getEventListenerGeneratedName).reduce((acc, generatedName) => (Object.assign(Object.assign({}, acc), { [generatedName]: {
                kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"].kind,
                name: generatedName,
                namespace,
                optional: true,
            } })), {});
    }, [namespace, eventListenerResources]);
    const results = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResources"])(memoResources);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(results, (result) => result.data);
};
const useAllEventListeners = (namespace) => {
    const eventListenerResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["EventListenerModel"]),
        isList: true,
        namespace,
    }), [namespace]);
    const [resources, eventListenerLoaded] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResource"])(eventListenerResource);
    return eventListenerLoaded ? resources : null;
};
const usePipelineTriggerTemplateNames = (pipelineName, namespace) => {
    const eventListenerResources = useAllEventListeners(namespace);
    const triggerTemplateResources = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        if (!eventListenerResources) {
            return {};
        }
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(eventListenerResources.map(getEventListenerTemplateNames)).reduce((resourceMap, triggerTemplateName) => (Object.assign(Object.assign({}, resourceMap), { [triggerTemplateName]: {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["TriggerTemplateModel"]),
                name: triggerTemplateName,
                namespace,
                optional: true,
            } })), {});
    }, [namespace, eventListenerResources]);
    const triggerTemplates = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__["useK8sWatchResources"])(triggerTemplateResources);
    const routes = useEventListenerRoutes(namespace, eventListenerResources);
    const triggerTemplateResults = Object.values(triggerTemplates);
    const countExpected = Object.keys(triggerTemplateResources).length;
    const countLoaded = triggerTemplateResults.filter(({ loaded }) => loaded).length;
    const countErrored = triggerTemplateResults.filter(({ loadError }) => !!loadError).length;
    if (countLoaded === 0 || countLoaded !== countExpected - countErrored) {
        return null;
    }
    const matchingTriggerTemplateNames = triggerTemplateResults
        .filter((resourceWatch) => resourceWatch.loaded)
        .map((resourceWatch) => resourceWatch.data)
        .filter((triggerTemplate) => {
        var _a, _b, _c, _d;
        const plr = (_b = (_a = triggerTemplate === null || triggerTemplate === void 0 ? void 0 : triggerTemplate.spec) === null || _a === void 0 ? void 0 : _a.resourcetemplates) === null || _b === void 0 ? void 0 : _b.find(({ kind }) => kind === _models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"].kind);
        return ((_d = (_c = plr === null || plr === void 0 ? void 0 : plr.spec) === null || _c === void 0 ? void 0 : _c.pipelineRef) === null || _d === void 0 ? void 0 : _d.name) === pipelineName;
    })
        .map(getResourceName);
    return (eventListenerResources || []).reduce((acc, ev) => {
        const eventListenerTemplateNames = getEventListenerTemplateNames(ev);
        const generatedRouteName = getEventListenerGeneratedName(ev);
        const triggerTemplateName = matchingTriggerTemplateNames.find((name) => eventListenerTemplateNames.includes(name));
        const route = routes[generatedRouteName];
        if (!triggerTemplateName) {
            return acc;
        }
        let routeURL = null;
        try {
            if (route) {
                routeURL = Object(_console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__["getRouteWebURL"])(route);
            }
        }
        catch (e) {
            // swallow errors, we don't care if we can't create a good route right now
        }
        return [...acc, { routeURL, triggerTemplateName }];
    }, []);
};
const useEventListenerTriggerTemplateNames = (eventListener) => {
    const { metadata: { namespace }, } = eventListener;
    const [route, routeLoaded] = Object(_console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_5__["useK8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"], getEventListenerGeneratedName(eventListener), namespace);
    return eventListener.spec.triggers.reduce((acc, trigger) => {
        var _a;
        return [
            ...acc,
            {
                routeURL: route && ((_a = route === null || route === void 0 ? void 0 : route.status) === null || _a === void 0 ? void 0 : _a.ingress) && routeLoaded ? Object(_console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__["getRouteWebURL"])(route) : null,
                triggerTemplateName: trigger.template.name,
            },
        ];
    }, []);
};
const getEventListenerTriggerBindingNames = (eventListener) => {
    return eventListener.spec.triggers.reduce((acc, trigger) => [
        ...acc,
        ...trigger.bindings.map((binding) => ({
            model: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__["getResourceModelFromBindingKind"])(binding.kind),
            name: binding.name,
        })),
    ], []);
};
const getTriggerTemplatePipelineName = (triggerTemplate) => {
    var _a;
    return (((_a = triggerTemplate.spec.resourcetemplates.find(({ kind }) => kind === _models__WEBPACK_IMPORTED_MODULE_7__["PipelineRunModel"].kind)) === null || _a === void 0 ? void 0 : _a.spec.pipelineRef.name) || '');
};
const useTriggerTemplateEventListenerNames = (triggerTemplate) => {
    const eventListenerResources = useAllEventListeners(triggerTemplate.metadata.namespace) || [];
    return eventListenerResources
        .filter((eventListener) => eventListener.spec.triggers.find(({ template: { name } }) => name === getResourceName(triggerTemplate)))
        .map(getResourceName);
};
const useTriggerBindingEventListenerNames = (triggerBinding) => {
    const eventListenerResources = useAllEventListeners(triggerBinding.metadata.namespace) || [];
    return eventListenerResources
        .filter((eventListener) => eventListener.spec.triggers.find(({ bindings }) => bindings.find(({ kind, name }) => getResourceName(triggerBinding) === name &&
        Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_8__["getResourceModelFromBindingKind"])(kind).kind === triggerBinding.kind)))
        .map(getResourceName);
};


/***/ }),

/***/ "./packages/dev-console/src/utils/pipeline-augment.ts":
/*!************************************************************!*\
  !*** ./packages/dev-console/src/utils/pipeline-augment.ts ***!
  \************************************************************/
/*! exports provided: getResources, getLatestRun, augmentRunsToData, runStatus, getRunStatusColor, truncateName, getTaskStatus, getResourceModelFromTaskKind, getResourceModelFromBindingKind, getResourceModelFromTask, pipelineRefExists */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromBindingKind", function() { return getResourceModelFromBindingKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceModelFromTask", function() { return getResourceModelFromTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRefExists", function() { return pipelineRefExists; });
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipeline_filter_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipeline-filter-reducer */ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts");




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
    const totalTasks = pipeline && pipeline.spec && pipeline.spec.tasks ? pipeline.spec.tasks.length : 0;
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
const getResourceModelFromBindingKind = (kind) => kind === _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTriggerBindingModel"].kind ? _models__WEBPACK_IMPORTED_MODULE_2__["ClusterTriggerBindingModel"] : _models__WEBPACK_IMPORTED_MODULE_2__["TriggerBindingModel"];
const getResourceModelFromTask = (task) => {
    const { taskRef: { kind }, } = task;
    return getResourceModelFromTaskKind(kind);
};
const pipelineRefExists = (pipelineRun) => { var _a; return !!((_a = pipelineRun.spec.pipelineRef) === null || _a === void 0 ? void 0 : _a.name); };


/***/ }),

/***/ "./packages/dev-console/src/utils/pipeline-filter-reducer.ts":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/utils/pipeline-filter-reducer.ts ***!
  \*******************************************************************/
/*! exports provided: pipelineRunStatus, pipelineFilterReducer, pipelineRunFilterReducer, pipelineStatusFilter, pipelineRunStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunStatus", function() { return pipelineRunStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineFilterReducer", function() { return pipelineFilterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunFilterReducer", function() { return pipelineRunFilterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineStatusFilter", function() { return pipelineStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipelineRunStatusFilter", function() { return pipelineRunStatusFilter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const pipelineRunStatus = (pipelineRun) => {
    const conditions = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pipelineRun, ['status', 'conditions'], []);
    const isCancelled = conditions.find((c) => ['PipelineRunCancelled', 'TaskRunCancelled'].some((cancel) => cancel === c.reason));
    if (isCancelled) {
        return 'Cancelled';
    }
    if (conditions.length === 0)
        return null;
    const condition = conditions.find((c) => c.type === 'Succeeded');
    return !condition || !condition.status
        ? null
        : condition.status === 'True'
            ? 'Succeeded'
            : condition.status === 'False'
                ? 'Failed'
                : 'Running';
};
const pipelineFilterReducer = (pipeline) => {
    if (!pipeline.latestRun)
        return '-';
    return pipelineRunStatus(pipeline.latestRun) || '-';
};
const pipelineRunFilterReducer = (pipelineRun) => {
    const status = pipelineRunStatus(pipelineRun);
    return status || '-';
};
const pipelineStatusFilter = (filters, pipeline) => {
    if (!filters || !filters.selected || !filters.selected.size) {
        return true;
    }
    const status = pipelineFilterReducer(pipeline);
    return filters.selected.has(status) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](filters.all, status);
};
const pipelineRunStatusFilter = (phases, pipeline) => {
    if (!phases || !phases.selected || !phases.selected.size) {
        return true;
    }
    const status = pipelineRunFilterReducer(pipeline);
    return phases.selected.has(status) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](phases.all, status);
};


/***/ }),

/***/ "./public/components/utils/k8s-get-hook.ts":
/*!*************************************************!*\
  !*** ./public/components/utils/k8s-get-hook.ts ***!
  \*************************************************/
/*! exports provided: useK8sGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useK8sGet", function() { return useK8sGet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const useK8sGet = (kind, name, namespace, opts) => {
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const fetch = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setLoadError(null);
                setLoaded(false);
                setData(null);
                const resource = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(kind, name, namespace, opts);
                setData(resource);
            }
            catch (error) {
                setLoadError(error);
            }
            finally {
                setLoaded(true);
            }
        });
        fetch();
    }, [kind, name, namespace, opts]);
    return [data, loaded, loadError];
};


/***/ })

}]);
//# sourceMappingURL=trigger-binding-details-b3c24d0683ef05ec0541.js.map