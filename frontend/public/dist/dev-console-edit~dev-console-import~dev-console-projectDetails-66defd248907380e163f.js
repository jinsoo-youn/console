(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-edit~dev-console-import~dev-console-projectDetails"],{

/***/ "./packages/dev-console/src/components/import/import-submit-utils.ts":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/import-submit-utils.ts ***!
  \***************************************************************************/
/*! exports provided: generateSecret, createProject, createOrUpdateImageStream, createWebhookSecret, createOrUpdateBuildConfig, createOrUpdateDeployment, createOrUpdateDeploymentConfig, createOrUpdateResources, handleRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSecret", function() { return generateSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateImageStream", function() { return createOrUpdateImageStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebhookSecret", function() { return createWebhookSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateBuildConfig", function() { return createOrUpdateBuildConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateDeployment", function() { return createOrUpdateDeployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateDeploymentConfig", function() { return createOrUpdateDeploymentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateResources", function() { return createOrUpdateResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRedirect", function() { return handleRedirect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_knative_plugin_src_utils_create_knative_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin/src/utils/create-knative-utils */ "./packages/knative-plugin/src/utils/create-knative-utils.ts");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_internal_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/plugins */ "./public/plugins.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/resource-label-utils */ "./packages/dev-console/src/utils/resource-label-utils.ts");
/* harmony import */ var _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/shared-submit-utils */ "./packages/dev-console/src/utils/shared-submit-utils.ts");
/* harmony import */ var _health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../health-checks/create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _pipeline_pipeline_template_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipeline/pipeline-template-utils */ "./packages/dev-console/src/components/import/pipeline/pipeline-template-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














const generateSecret = () => {
    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return s4() + s4() + s4() + s4();
};
const createProject = (projectData) => {
    const project = {
        metadata: {
            name: projectData.name,
        },
        displayName: projectData.displayName,
        description: projectData.description,
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ProjectRequestModel"], project);
};
const createOrUpdateImageStream = (formData, imageStreamData, dryRun, appResources, verb = 'create', generatedImageStreamName = '') => {
    var _a;
    const imageStreamList = (_a = appResources === null || appResources === void 0 ? void 0 : appResources.imageStream) === null || _a === void 0 ? void 0 : _a.data;
    const imageStreamFilterData = lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](imageStreamList, ['metadata.resourceVersion'], ['desc']);
    const originalImageStream = (imageStreamFilterData.length && imageStreamFilterData[0]) || {};
    const { name, project: { name: namespace }, application: { name: application }, labels: userLabels, git: { url: repository, ref }, image: { tag }, } = formData;
    const imageStreamName = imageStreamData && imageStreamData.metadata.name;
    const defaultLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getAppLabels"])(name, application, imageStreamName, tag);
    const defaultAnnotations = Object.assign(Object.assign({}, Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getGitAnnotations"])(repository, ref)), Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getCommonAnnotations"])());
    const newImageStream = {
        apiVersion: 'image.openshift.io/v1',
        kind: 'ImageStream',
        metadata: {
            name: `${generatedImageStreamName || name}`,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
            annotations: defaultAnnotations,
        },
    };
    const imageStream = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["mergeData"])(originalImageStream, newImageStream);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ImageStreamModel"], imageStream)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ImageStreamModel"], newImageStream, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {});
};
const createWebhookSecret = (formData, secretType, dryRun) => {
    const { name, project: { name: namespace }, } = formData;
    const webhookSecret = {
        apiVersion: 'v1',
        data: {},
        kind: 'Secret',
        metadata: {
            name: `${name}-${secretType}-webhook-secret`,
            namespace,
        },
        stringData: { WebHookSecretKey: generateSecret() },
        type: _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_5__["SecretType"].opaque,
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["SecretModel"], webhookSecret, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {});
};
const createOrUpdateBuildConfig = (formData, imageStream, dryRun, originalBuildConfig, verb = 'create', generatedImageStreamName = '') => {
    const { name, project: { name: namespace }, application: { name: application }, git: { url: repository, type: gitType, ref = 'master', dir: contextDir, secret: secretName }, docker: { dockerfilePath }, image: { tag: selectedTag }, build: { env, triggers, strategy: buildStrategy }, labels: userLabels, } = formData;
    const imageStreamName = imageStream && imageStream.metadata.name;
    const imageStreamNamespace = imageStream && imageStream.metadata.namespace;
    const defaultLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getAppLabels"])(name, application, imageStreamName, selectedTag);
    const defaultAnnotations = Object.assign(Object.assign({}, Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getGitAnnotations"])(repository, ref)), Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getCommonAnnotations"])());
    let buildStrategyData;
    switch (buildStrategy) {
        case 'Docker':
            buildStrategyData = {
                dockerStrategy: { env, dockerfilePath },
            };
            break;
        default:
            buildStrategyData = {
                sourceStrategy: {
                    env,
                    from: {
                        kind: 'ImageStreamTag',
                        name: `${imageStreamName}:${selectedTag}`,
                        namespace: imageStreamNamespace,
                    },
                },
            };
            break;
    }
    const webhookTriggerData = {
        type: _import_types__WEBPACK_IMPORTED_MODULE_12__["GitReadableTypes"][gitType],
        [gitType]: {
            secretReference: { name: `${name}-${gitType}-webhook-secret` },
        },
    };
    const newBuildConfig = {
        apiVersion: 'build.openshift.io/v1',
        kind: 'BuildConfig',
        metadata: {
            name,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
            annotations: defaultAnnotations,
        },
        spec: {
            output: {
                to: {
                    kind: 'ImageStreamTag',
                    name: `${generatedImageStreamName || name}:latest`,
                },
            },
            source: Object.assign({ contextDir, git: {
                    uri: repository,
                    ref,
                    type: 'Git',
                } }, (secretName ? { sourceSecret: { name: secretName } } : {})),
            strategy: Object.assign({ type: buildStrategy }, buildStrategyData),
            triggers: [
                {
                    type: 'Generic',
                    generic: {
                        secretReference: { name: `${name}-generic-webhook-secret` },
                    },
                },
                ...(triggers.webhook && gitType !== _import_types__WEBPACK_IMPORTED_MODULE_12__["GitTypes"].unsure ? [webhookTriggerData] : []),
                ...(triggers.image ? [{ type: 'ImageChange', imageChange: {} }] : []),
                ...(triggers.config ? [{ type: 'ConfigChange' }] : []),
            ],
        },
    };
    const buildConfig = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["mergeData"])(originalBuildConfig, newBuildConfig);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["BuildConfigModel"], buildConfig)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["BuildConfigModel"], buildConfig, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {});
};
const createOrUpdateDeployment = (formData, imageStream, dryRun, originalDeployment, verb = 'create') => {
    const { name, project: { name: namespace }, application: { name: application }, image: { ports, tag }, deployment: { env, replicas, triggers: { image: imageChange }, }, labels: userLabels, limits: { cpu, memory }, git: { url: repository, ref }, healthChecks, } = formData;
    const imageStreamName = imageStream && imageStream.metadata.name;
    const defaultLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getAppLabels"])(name, application, imageStreamName, tag);
    const annotations = Object.assign(Object.assign(Object.assign(Object.assign({}, Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getGitAnnotations"])(repository, ref)), Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getCommonAnnotations"])()), { 'alpha.image.policy.openshift.io/resolve-names': '*' }), Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getTriggerAnnotation"])(name, namespace, imageChange));
    const podLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getPodLabels"])(name);
    const newDeployment = {
        apiVersion: 'apps/v1',
        kind: 'Deployment',
        metadata: {
            name,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
            annotations,
        },
        spec: {
            selector: {
                matchLabels: {
                    app: name,
                },
            },
            replicas,
            template: {
                metadata: {
                    labels: Object.assign(Object.assign({}, userLabels), podLabels),
                },
                spec: {
                    containers: [
                        Object.assign({ name, image: `${name}:latest`, ports,
                            env, resources: Object.assign(Object.assign({}, ((cpu.limit || memory.limit) && {
                                limits: Object.assign(Object.assign({}, (cpu.limit && { cpu: `${cpu.limit}${cpu.limitUnit}` })), (memory.limit && { memory: `${memory.limit}${memory.limitUnit}` })),
                            })), ((cpu.request || memory.request) && {
                                requests: Object.assign(Object.assign({}, (cpu.request && { cpu: `${cpu.request}${cpu.requestUnit}` })), (memory.request && { memory: `${memory.request}${memory.requestUnit}` })),
                            })) }, Object(_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_11__["getProbesData"])(healthChecks)),
                    ],
                },
            },
        },
    };
    const deployment = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["mergeData"])(originalDeployment, newDeployment);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"], deployment)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"], deployment, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {});
};
const createOrUpdateDeploymentConfig = (formData, imageStream, dryRun, originalDeploymentConfig, verb = 'create') => {
    const { name, project: { name: namespace }, application: { name: application }, image: { ports, tag }, deployment: { env, replicas, triggers }, labels: userLabels, limits: { cpu, memory }, git: { url: repository, ref }, healthChecks, } = formData;
    const imageStreamName = imageStream && imageStream.metadata.name;
    const defaultLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getAppLabels"])(name, application, imageStreamName, tag);
    const defaultAnnotations = Object.assign(Object.assign({}, Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getGitAnnotations"])(repository, ref)), Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getCommonAnnotations"])());
    const podLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getPodLabels"])(name);
    const newDeploymentConfig = {
        apiVersion: 'apps.openshift.io/v1',
        kind: 'DeploymentConfig',
        metadata: {
            name,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
            annotations: defaultAnnotations,
        },
        spec: {
            selector: podLabels,
            replicas,
            template: {
                metadata: {
                    labels: Object.assign(Object.assign({}, userLabels), podLabels),
                },
                spec: {
                    containers: [
                        Object.assign({ name, image: `${name}:latest`, ports,
                            env, resources: Object.assign(Object.assign({}, ((cpu.limit || memory.limit) && {
                                limits: Object.assign(Object.assign({}, (cpu.limit && { cpu: `${cpu.limit}${cpu.limitUnit}` })), (memory.limit && { memory: `${memory.limit}${memory.limitUnit}` })),
                            })), ((cpu.request || memory.request) && {
                                requests: Object.assign(Object.assign({}, (cpu.request && { cpu: `${cpu.request}${cpu.requestUnit}` })), (memory.request && { memory: `${memory.request}${memory.requestUnit}` })),
                            })) }, Object(_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_11__["getProbesData"])(healthChecks)),
                    ],
                },
            },
            triggers: [
                {
                    type: 'ImageChange',
                    imageChangeParams: {
                        automatic: triggers.image,
                        containerNames: [name],
                        from: {
                            kind: 'ImageStreamTag',
                            name: `${name}:latest`,
                        },
                    },
                },
                ...(triggers.config ? [{ type: 'ConfigChange' }] : []),
            ],
        },
    };
    const deploymentConfig = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["mergeData"])(originalDeploymentConfig, newDeploymentConfig);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"], deploymentConfig)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"], deploymentConfig, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {});
};
const createOrUpdateResources = (formData, imageStream, createNewProject, dryRun = false, verb = 'create', appResources) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { name, project: { name: namespace }, route: { create: canCreateRoute, disable }, image: { ports }, build: { strategy: buildStrategy, triggers: { webhook: webhookTrigger }, }, deployment: { triggers: { image: imageChange }, }, git: { url: repository, type: gitType, ref }, pipeline, resources, } = formData;
    const imageStreamName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStream, 'metadata.name');
    createNewProject && (yield createProject(formData.project));
    const requests = [];
    let generatedImageStreamName = '';
    const imageStreamList = (_a = appResources === null || appResources === void 0 ? void 0 : appResources.imageStream) === null || _a === void 0 ? void 0 : _a.data;
    if (resources === _import_types__WEBPACK_IMPORTED_MODULE_12__["Resources"].KnativeService &&
        imageStreamList &&
        imageStreamList.length &&
        verb === 'update') {
        generatedImageStreamName = `${name}-${Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_8__["getRandomChars"])()}`;
    }
    requests.push(createOrUpdateImageStream(formData, imageStream, dryRun, appResources, generatedImageStreamName ? 'create' : verb, generatedImageStreamName), createOrUpdateBuildConfig(formData, imageStream, dryRun, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'buildConfig.data'), verb, generatedImageStreamName));
    verb === 'create' && requests.push(createWebhookSecret(formData, 'generic', dryRun));
    const defaultAnnotations = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getGitAnnotations"])(repository, ref);
    if (pipeline.enabled && pipeline.template && !dryRun) {
        requests.push(Object(_pipeline_pipeline_template_utils__WEBPACK_IMPORTED_MODULE_13__["createPipelineForImportFlow"])(formData));
    }
    if (formData.resources === _import_types__WEBPACK_IMPORTED_MODULE_12__["Resources"].KnativeService) {
        // knative service doesn't have dry run capability so returning the promises.
        if (dryRun) {
            return Promise.all(requests);
        }
        const [imageStreamResponse] = yield Promise.all(requests);
        const imageStreamURL = imageStreamResponse.status.dockerImageRepository;
        const originalAnnotations = ((_d = (_c = (_b = appResources === null || appResources === void 0 ? void 0 : appResources.editAppResource) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.annotations) || {};
        const triggerAnnotations = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_9__["getTriggerAnnotation"])(generatedImageStreamName || name, namespace, imageChange);
        const annotations = Object.assign(Object.assign(Object.assign({}, originalAnnotations), defaultAnnotations), triggerAnnotations);
        const knDeploymentResource = Object(_console_knative_plugin_src_utils_create_knative_utils__WEBPACK_IMPORTED_MODULE_4__["getKnativeServiceDepResource"])(formData, imageStreamURL, imageStreamName, undefined, undefined, annotations, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'));
        return Promise.all([
            verb === 'update'
                ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"], knDeploymentResource)
                : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"], knDeploymentResource),
        ]);
    }
    if (formData.resources === _import_types__WEBPACK_IMPORTED_MODULE_12__["Resources"].Kubernetes) {
        requests.push(createOrUpdateDeployment(formData, imageStream, dryRun, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'), verb));
    }
    else if (formData.resources === _import_types__WEBPACK_IMPORTED_MODULE_12__["Resources"].OpenShift) {
        requests.push(createOrUpdateDeploymentConfig(formData, imageStream, dryRun, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'), verb));
    }
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](ports) || buildStrategy === 'Docker') {
        const originalService = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'service.data');
        const service = Object(_utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["createService"])(formData, imageStream, originalService);
        requests.push(verb === 'update'
            ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ServiceModel"], service)
            : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ServiceModel"], service, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {}));
        const originalRoute = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'route.data');
        const route = Object(_utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["createRoute"])(formData, imageStream, originalRoute);
        if (verb === 'update' && disable) {
            requests.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RouteModel"], route, namespace, name));
        }
        else if (canCreateRoute) {
            requests.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RouteModel"], route, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_10__["dryRunOpt"] : {}));
        }
    }
    if (webhookTrigger && verb === 'create') {
        requests.push(createWebhookSecret(formData, gitType, dryRun));
    }
    return Promise.all(requests);
});
const handleRedirect = (project, perspective) => {
    const perspectiveData = _console_internal_plugins__WEBPACK_IMPORTED_MODULE_6__["registry"]
        .getPerspectives()
        .find((item) => item.properties.id === perspective);
    const redirectURL = perspectiveData.properties.getImportRedirectURL(project);
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["history"].push(redirectURL);
};


/***/ }),

/***/ "./packages/dev-console/src/components/import/pipeline/pipeline-template-utils.ts":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/pipeline/pipeline-template-utils.ts ***!
  \****************************************************************************************/
/*! exports provided: createGitResource, createImageResource, createPipelineForImportFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGitResource", function() { return createGitResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageResource", function() { return createImageResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipelineForImportFlow", function() { return createPipelineForImportFlow; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _pipelines_pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipelines/pipeline-resource/pipelineResource-utils */ "./packages/dev-console/src/components/pipelines/pipeline-resource/pipelineResource-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const createGitResource = (url, namespace, ref = 'master') => {
    const params = { url, revision: ref };
    return Object(_pipelines_pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_3__["createPipelineResource"])(params, 'git', namespace);
};
const createImageResource = (name, namespace) => {
    const params = {
        url: `image-registry.openshift-image-registry.svc:5000/${namespace}/${name}`,
    };
    return Object(_pipelines_pipeline_resource_pipelineResource_utils__WEBPACK_IMPORTED_MODULE_3__["createPipelineResource"])(params, 'image', namespace);
};
const createPipelineForImportFlow = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, project: { name: namespace }, git, pipeline, } = formData;
    const template = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](pipeline.template);
    template.metadata = {
        name: `${name}`,
        namespace,
        labels: Object.assign(Object.assign({}, template.metadata.labels), { 'app.kubernetes.io/instance': name }),
    };
    template.spec.params =
        template.spec.params &&
            template.spec.params.map((param) => {
                if (param.name === 'APP_NAME') {
                    param.default = name;
                }
                return param;
            });
    try {
        yield createGitResource(git.url, namespace, git.ref);
        yield createImageResource(name, namespace);
    }
    catch (err) {
        throw err;
    }
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_2__["PipelineModel"], template, { ns: namespace });
});


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/const.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/const.ts ***!
  \******************************************************************************/
/*! exports provided: CREATE_PIPELINE_RESOURCE, initialResourceFormValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PIPELINE_RESOURCE", function() { return CREATE_PIPELINE_RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialResourceFormValues", function() { return initialResourceFormValues; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/components/pipelines/const.ts");

const CREATE_PIPELINE_RESOURCE = '#CREATE_PIPELINE_RESOURCE#';
const initialResourceFormValues = {
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].git]: {
        params: {
            url: '',
            revision: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].image]: {
        params: {
            url: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].storage]: {
        params: {
            type: '',
            location: '',
            dir: '',
        },
    },
    [_const__WEBPACK_IMPORTED_MODULE_0__["PipelineResourceType"].cluster]: {
        params: {
            name: '',
            url: '',
            username: '',
            password: '',
            insecure: '',
        },
        secrets: {
            cadata: '',
            token: '',
        },
    },
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/modals/common/utils.ts ***!
  \******************************************************************************/
/*! exports provided: migratePipelineRun, getPipelineRunData, convertPipelineToModalData, convertMapToNameValueArray, getPipelineRunFromForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migratePipelineRun", function() { return migratePipelineRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunData", function() { return getPipelineRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPipelineToModalData", function() { return convertPipelineToModalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertMapToNameValueArray", function() { return convertMapToNameValueArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPipelineRunFromForm", function() { return getPipelineRunFromForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/pipelines/modals/common/const.ts");





/**
 * Migrates a PipelineRun from one version to another to support auto-upgrades with old (and invalid) PipelineRuns.
 *
 * Note: Each check within this method should be driven by the apiVersion number if the API is properly up-versioned
 * for these breaking changes. (should be done moving from 0.10.x forward)
 */
const migratePipelineRun = (pipelineRun) => {
    let newPipelineRun = pipelineRun;
    const serviceAccountPath = 'spec.serviceAccount';
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](newPipelineRun, serviceAccountPath)) {
        // .spec.serviceAccount was removed for .spec.serviceAccountName in 0.9.x
        // Note: apiVersion was not updated for this change and thus we cannot gate this change behind a version number
        const serviceAccountName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](newPipelineRun, serviceAccountPath);
        newPipelineRun = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](newPipelineRun, [serviceAccountPath]);
        newPipelineRun = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](newPipelineRun, {
            spec: {
                serviceAccountName,
            },
        });
    }
    return newPipelineRun;
};
const getPipelineRunData = (pipeline = null, latestRun) => {
    var _a, _b;
    if (!pipeline && !latestRun) {
        // eslint-disable-next-line no-console
        console.error('Missing parameters, unable to create new PipelineRun');
        return null;
    }
    const pipelineName = pipeline ? pipeline.metadata.name : latestRun.spec.pipelineRef.name;
    const resources = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.resources;
    const workspaces = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.workspaces;
    const latestRunParams = latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec.params;
    const pipelineParams = pipeline === null || pipeline === void 0 ? void 0 : pipeline.spec.params;
    const params = latestRunParams || Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunParams"])(pipelineParams);
    const newPipelineRun = {
        apiVersion: pipeline ? pipeline.apiVersion : latestRun.apiVersion,
        kind: _models__WEBPACK_IMPORTED_MODULE_2__["PipelineRunModel"].kind,
        metadata: {
            name: `${pipelineName}-${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getRandomChars"])(6)}`,
            namespace: pipeline ? pipeline.metadata.namespace : latestRun.metadata.namespace,
            labels: lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, (_a = pipeline === null || pipeline === void 0 ? void 0 : pipeline.metadata) === null || _a === void 0 ? void 0 : _a.labels, (_b = latestRun === null || latestRun === void 0 ? void 0 : latestRun.metadata) === null || _b === void 0 ? void 0 : _b.labels, {
                'tekton.dev/pipeline': pipelineName,
            }),
        },
        spec: Object.assign(Object.assign(Object.assign(Object.assign({}, ((latestRun === null || latestRun === void 0 ? void 0 : latestRun.spec) || {})), { pipelineRef: {
                name: pipelineName,
            }, resources }), (params && { params })), { workspaces, status: null }),
    };
    return migratePipelineRun(newPipelineRun);
};
const convertPipelineToModalData = (pipeline, alwaysCreateResources = false) => {
    const { metadata: { namespace }, spec: { params, resources }, } = pipeline;
    return {
        namespace,
        parameters: params || [],
        resources: (resources || []).map((resource) => ({
            name: resource.name,
            selection: alwaysCreateResources ? _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_PIPELINE_RESOURCE"] : null,
            data: Object.assign(Object.assign({}, _const__WEBPACK_IMPORTED_MODULE_4__["initialResourceFormValues"][resource.type]), { type: resource.type }),
        })),
    };
};
const convertMapToNameValueArray = (map) => {
    return Object.keys(map).map((name) => {
        const value = map[name];
        return { name, value };
    });
};
const convertResources = (resource) => {
    if (resource.selection === _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_PIPELINE_RESOURCE"]) {
        return {
            name: resource.name,
            resourceSpec: {
                params: convertMapToNameValueArray(resource.data.params),
                type: resource.data.type,
            },
        };
    }
    return {
        name: resource.name,
        resourceRef: {
            name: resource.selection,
        },
    };
};
const getPipelineRunFromForm = (pipeline, formValues, labels) => {
    const { parameters, resources, workspaces } = formValues;
    const pipelineRunData = {
        metadata: {
            labels,
        },
        spec: {
            pipelineRef: {
                name: pipeline.metadata.name,
            },
            params: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunParams"])(parameters),
            resources: resources.map(convertResources),
            workspaces: Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_3__["getPipelineRunWorkspaces"])(workspaces),
        },
    };
    return getPipelineRunData(pipeline, pipelineRunData);
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelines/pipeline-resource/pipelineResource-utils.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelines/pipeline-resource/pipelineResource-utils.ts ***!
  \***************************************************************************************************/
/*! exports provided: getDefinedObj, createPipelineResource, createSecretResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefinedObj", function() { return getDefinedObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipelineResource", function() { return createPipelineResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSecretResource", function() { return createSecretResource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/utils/utils */ "./packages/console-shared/src/utils/utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _modals_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/common/utils */ "./packages/dev-console/src/components/pipelines/modals/common/utils.ts");






const getDefinedObj = (objData) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"](objData, (v) => lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](v) || lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"](v) || v === '');
};
const createPipelineResource = (params, type, namespace, secretResp) => {
    const resourceName = `${type}-${Object(_console_shared_src_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomChars"])(6)}`;
    const pipelineResource = {
        apiVersion: 'tekton.dev/v1alpha1',
        kind: _models__WEBPACK_IMPORTED_MODULE_4__["PipelineResourceModel"].kind,
        metadata: {
            name: resourceName,
            namespace,
        },
        spec: Object.assign({ type, params: Object(_modals_common_utils__WEBPACK_IMPORTED_MODULE_5__["convertMapToNameValueArray"])(getDefinedObj(params)) }, (secretResp && {
            secrets: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](secretResp.data, (value, name) => {
                return {
                    fieldName: name,
                    secretKey: name,
                    secretName: secretResp.metadata.name,
                };
            }),
        })),
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineResourceModel"], pipelineResource);
};
const createSecretResource = (secret, type, namespace) => {
    const resourceName = `${type}-secret-${Object(_console_shared_src_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomChars"])(6)}`;
    const secretResource = {
        apiVersion: 'v1',
        kind: 'Secret',
        metadata: {
            name: resourceName,
            namespace,
        },
        stringData: getDefinedObj(secret),
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["SecretModel"], secretResource);
};


/***/ })

}]);
//# sourceMappingURL=dev-console-edit~dev-console-import~dev-console-projectDetails-66defd248907380e163f.js.map