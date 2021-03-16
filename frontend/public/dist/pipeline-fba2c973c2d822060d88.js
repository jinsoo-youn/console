(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipeline"],{

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
/* harmony import */ var _pipelines_pipeline_row_kebab_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipelines/pipeline-row-kebab-actions */ "./public/components/hypercloud/pipelines/pipeline-row-kebab-actions.tsx");
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelines_pipeline_row_kebab_actions__WEBPACK_IMPORTED_MODULE_11__["default"], { pipeline: pipeline }))));
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


/***/ }),

/***/ "./public/components/hypercloud/pipelines/pipeline-row-kebab-actions.tsx":
/*!*******************************************************************************!*\
  !*** ./public/components/hypercloud/pipelines/pipeline-row-kebab-actions.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/pipeline-actions */ "./public/components/hypercloud/utils/pipeline-actions.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./public/models/index.ts");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/triggers */ "./public/components/hypercloud/pipelines/utils/triggers.ts");



//import { ResourceKebabWithUserLabel } from '../pipelineruns/triggered-by';



const pipelineReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineModel"]);
const PipelineRowKebabActions = ({ pipeline, pipelineRun }) => {
    var _a;
    const { metadata: { name, namespace }, } = pipeline;
    const templateNames = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_5__["usePipelineTriggerTemplateNames"])(name, namespace) || [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceKebab"], { actions: Object(_utils_pipeline_actions__WEBPACK_IMPORTED_MODULE_3__["getPipelineKebabActions"])((_a = pipeline.latestRun) !== null && _a !== void 0 ? _a : pipelineRun, templateNames.length > 0), kind: pipelineReference, resource: pipeline }));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineRowKebabActions);


/***/ }),

/***/ "./public/components/hypercloud/pipelines/utils/triggers.ts":
/*!******************************************************************!*\
  !*** ./public/components/hypercloud/pipelines/utils/triggers.ts ***!
  \******************************************************************/
/*! exports provided: usePipelineTriggerTemplateNames, useEventListenerTriggerTemplateNames, getTriggerTemplatePipelineName, useTriggerTemplateEventListenerNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePipelineTriggerTemplateNames", function() { return usePipelineTriggerTemplateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListenerTriggerTemplateNames", function() { return useEventListenerTriggerTemplateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerTemplatePipelineName", function() { return getTriggerTemplatePipelineName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTriggerTemplateEventListenerNames", function() { return useTriggerTemplateEventListenerNames; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/routes */ "./public/components/routes.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_get_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/k8s-get-hook */ "./public/components/utils/k8s-get-hook.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");








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
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["EventListenerModel"]),
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
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["TriggerTemplateModel"]),
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
        const plr = (_b = (_a = triggerTemplate === null || triggerTemplate === void 0 ? void 0 : triggerTemplate.spec) === null || _a === void 0 ? void 0 : _a.resourcetemplates) === null || _b === void 0 ? void 0 : _b.find(({ kind }) => kind === _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].kind);
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
// export const getEventListenerTriggerBindingNames = (
//   eventListener: EventListenerKind,
// ): ResourceModelLink[] => {
//   return eventListener.spec.triggers.reduce(
//     (acc, trigger) => [
//       ...acc,
//       ...trigger.bindings.map((binding) => ({
//         model: getResourceModelFromBindingKind(binding.kind),
//         name: binding.name,
//       })),
//     ],
//     [] as ResourceModelLink[],
//   );
// };
const getTriggerTemplatePipelineName = (triggerTemplate) => {
    var _a;
    return (((_a = triggerTemplate.spec.resourcetemplates.find(({ kind }) => kind === _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].kind)) === null || _a === void 0 ? void 0 : _a.spec.pipelineRef.name) || '');
};
const useTriggerTemplateEventListenerNames = (triggerTemplate) => {
    const eventListenerResources = useAllEventListeners(triggerTemplate.metadata.namespace) || [];
    return eventListenerResources
        .filter((eventListener) => eventListener.spec.triggers.find(({ template: { name } }) => name === getResourceName(triggerTemplate)))
        .map(getResourceName);
};
// export const useTriggerBindingEventListenerNames = (triggerBinding: TriggerBindingKind) => {
//   const eventListenerResources = useAllEventListeners(triggerBinding.metadata.namespace) || [];
//   return eventListenerResources
//     .filter((eventListener: EventListenerKind) =>
//       eventListener.spec.triggers.find(({ bindings }) =>
//         bindings.find(
//           ({ kind, name }) =>
//             getResourceName(triggerBinding) === name &&
//             getResourceModelFromBindingKind(kind).kind === triggerBinding.kind,
//         ),
//       ),
//     )
//     .map(getResourceName);
// };


/***/ })

}]);
//# sourceMappingURL=pipeline-fba2c973c2d822060d88.js.map