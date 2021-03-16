(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-edit~dev-console-healthCheck"],{

/***/ "./packages/dev-console/src/components/edit-application/edit-application-utils.ts":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/edit-application/edit-application-utils.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateApplicationFlow, getResourcesType, getPageHeading, getGitData, getRouteData, getBuildData, getServerlessData, getDeploymentData, getLimitsData, getUserLabels, getCommonInitialValues, getGitAndDockerfileInitialValues, getExternalImageInitialValues, getInternalImageInitialValues, getExternalImagelValues, getInitialValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApplicationFlow", function() { return CreateApplicationFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourcesType", function() { return getResourcesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageHeading", function() { return getPageHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGitData", function() { return getGitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouteData", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuildData", function() { return getBuildData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerlessData", function() { return getServerlessData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeploymentData", function() { return getDeploymentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLimitsData", function() { return getLimitsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLabels", function() { return getUserLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonInitialValues", function() { return getCommonInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGitAndDockerfileInitialValues", function() { return getGitAndDockerfileInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalImageInitialValues", function() { return getExternalImageInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalImageInitialValues", function() { return getInternalImageInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalImagelValues", function() { return getExternalImagelValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialValues", function() { return getInitialValues; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/build */ "./public/components/build.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _import_import_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../import/import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../health-checks/create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _import_import_validation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../import/import-validation-utils */ "./packages/dev-console/src/components/import/import-validation-utils.ts");










var CreateApplicationFlow;
(function (CreateApplicationFlow) {
    CreateApplicationFlow["Git"] = "Import from Git";
    CreateApplicationFlow["Dockerfile"] = "Import from Dockerfile";
    CreateApplicationFlow["Container"] = "Deploy Image";
})(CreateApplicationFlow || (CreateApplicationFlow = {}));
const getResourcesType = (resource) => {
    switch (resource.kind) {
        case _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentConfigModel"].kind:
            return _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].OpenShift;
        case _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentModel"].kind:
            return _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].Kubernetes;
        case Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"]) ? _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].kind : '':
            return _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].KnativeService;
        default:
            return null;
    }
};
const getPageHeading = (buildStrategy) => {
    switch (buildStrategy) {
        case _console_internal_components_build__WEBPACK_IMPORTED_MODULE_2__["BuildStrategyType"].Source:
            return CreateApplicationFlow.Git;
        case _console_internal_components_build__WEBPACK_IMPORTED_MODULE_2__["BuildStrategyType"].Docker:
            return CreateApplicationFlow.Dockerfile;
        default:
            return CreateApplicationFlow.Container;
    }
};
const checkIfTriggerExists = (triggers, type, resourceKind) => {
    return !!lodash__WEBPACK_IMPORTED_MODULE_0__["find"](triggers, (trigger) => {
        var _a;
        if (resourceKind === _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentConfigModel"].kind && type === 'ImageChange') {
            return trigger.type === type && ((_a = trigger.imageChangeParams) === null || _a === void 0 ? void 0 : _a.automatic);
        }
        return trigger.type === type;
    });
};
const getGitData = (buildConfig) => {
    var _a, _b, _c, _d;
    const url = (_d = (_c = (_b = (_a = buildConfig === null || buildConfig === void 0 ? void 0 : buildConfig.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.git) === null || _c === void 0 ? void 0 : _c.uri) !== null && _d !== void 0 ? _d : '';
    const gitData = {
        url,
        type: Object(_import_import_validation_utils__WEBPACK_IMPORTED_MODULE_9__["detectGitType"])(url),
        ref: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.source.git.ref', ''),
        dir: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.source.contextDir', ''),
        showGitType: false,
        secret: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.source.sourceSecret.name', ''),
        isUrlValidating: false,
    };
    return gitData;
};
const getRouteData = (route, resource) => {
    let routeData = {
        disable: !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](route),
        create: true,
        targetPort: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.port.targetPort', ''),
        unknownTargetPort: '',
        defaultUnknownPort: 8080,
        path: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.path', ''),
        hostname: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.host', ''),
        secure: lodash__WEBPACK_IMPORTED_MODULE_0__["has"](route, 'spec.termination'),
        tls: {
            termination: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.termination', ''),
            insecureEdgeTerminationPolicy: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.insecureEdgeTerminationPolicy', ''),
            caCertificate: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.caCertificate', ''),
            certificate: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.certificate', ''),
            destinationCACertificate: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.destinationCACertificate', ''),
            privateKey: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.privateKey', ''),
        },
    };
    if (getResourcesType(resource) === _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].KnativeService) {
        const containers = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.template.spec.containers', []);
        const port = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](containers[0], 'ports[0].containerPort', '');
        routeData = Object.assign(Object.assign({}, routeData), { disable: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'metadata.labels["serving.knative.dev/visibility"]', '') !==
                'cluster-local', unknownTargetPort: lodash__WEBPACK_IMPORTED_MODULE_0__["toString"](port), targetPort: lodash__WEBPACK_IMPORTED_MODULE_0__["toString"](port) });
    }
    return routeData;
};
const getBuildData = (buildConfig, gitType) => {
    const buildStrategyType = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.strategy.type', '');
    let buildStrategyData;
    switch (buildStrategyType) {
        case _console_internal_components_build__WEBPACK_IMPORTED_MODULE_2__["BuildStrategyType"].Source:
            buildStrategyData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.strategy.sourceStrategy');
            break;
        case _console_internal_components_build__WEBPACK_IMPORTED_MODULE_2__["BuildStrategyType"].Docker:
            buildStrategyData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.strategy.dockerStrategy');
            break;
        default:
            buildStrategyData = { env: [] };
    }
    const triggers = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.triggers');
    const buildData = {
        env: buildStrategyData.env || [],
        triggers: {
            webhook: checkIfTriggerExists(triggers, _import_import_types__WEBPACK_IMPORTED_MODULE_6__["GitReadableTypes"][gitType]),
            image: checkIfTriggerExists(triggers, 'ImageChange'),
            config: checkIfTriggerExists(triggers, 'ConfigChange'),
        },
        strategy: buildStrategyType,
    };
    return buildData;
};
const getServerlessData = (resource) => {
    let serverlessData = {
        scaling: {
            minpods: 0,
            maxpods: '',
            concurrencytarget: '',
            concurrencylimit: '',
        },
    };
    if (getResourcesType(resource) === _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].KnativeService) {
        const annotations = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.template.metadata.annotations');
        serverlessData = {
            scaling: {
                minpods: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](annotations, 'autoscaling.knative.dev/minScale', 0),
                maxpods: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](annotations, 'autoscaling.knative.dev/maxScale', ''),
                concurrencytarget: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](annotations, 'autoscaling.knative.dev/target', ''),
                concurrencylimit: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.template.spec.containerConcurrency', ''),
            },
        };
    }
    return serverlessData;
};
const getDeploymentData = (resource) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const deploymentData = {
        env: [],
        replicas: 1,
        triggers: { image: true, config: true },
    };
    const container = (_d = (_c = (_b = (_a = resource.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.containers) === null || _d === void 0 ? void 0 : _d[0];
    const env = (_e = container === null || container === void 0 ? void 0 : container.env) !== null && _e !== void 0 ? _e : [];
    switch (getResourcesType(resource)) {
        case _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].KnativeService:
            return Object.assign(Object.assign({}, deploymentData), { env, triggers: {
                    image: (container === null || container === void 0 ? void 0 : container.imagePullPolicy) === _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["ImagePullPolicy"].Always,
                } });
        case _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].OpenShift: {
            const triggers = (_f = resource.spec) === null || _f === void 0 ? void 0 : _f.triggers;
            return {
                env,
                triggers: {
                    image: checkIfTriggerExists(triggers, 'ImageChange', resource.kind),
                    config: checkIfTriggerExists(triggers, 'ConfigChange'),
                },
                replicas: (_h = (_g = resource.spec) === null || _g === void 0 ? void 0 : _g.replicas) !== null && _h !== void 0 ? _h : 1,
            };
        }
        case _import_import_types__WEBPACK_IMPORTED_MODULE_6__["Resources"].Kubernetes: {
            const imageTrigger = (_m = JSON.parse((_l = (_k = (_j = resource.metadata) === null || _j === void 0 ? void 0 : _j.annotations) === null || _k === void 0 ? void 0 : _k['image.openshift.io/triggers']) !== null && _l !== void 0 ? _l : '[]')) === null || _m === void 0 ? void 0 : _m[0];
            return {
                env,
                triggers: {
                    image: (imageTrigger === null || imageTrigger === void 0 ? void 0 : imageTrigger.pause) === 'false',
                },
                replicas: (_p = (_o = resource.spec) === null || _o === void 0 ? void 0 : _o.replicas) !== null && _p !== void 0 ? _p : 1,
            };
        }
        default:
            return deploymentData;
    }
};
const getLimitsData = (resource) => {
    const containers = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.template.spec.containers', []);
    const resourcesRegEx = /^[0-9]*|[a-zA-Z]*/g;
    const cpuLimit = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](containers[0], 'resources.limits.cpu', '').match(resourcesRegEx);
    const memoryLimit = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](containers[0], 'resources.limits.memory', '').match(resourcesRegEx);
    const cpuRequest = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](containers[0], 'resources.requests.cpu', '').match(resourcesRegEx);
    const memoryRequest = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](containers[0], 'resources.requests.memory', '').match(resourcesRegEx);
    const limitsData = {
        cpu: {
            request: cpuRequest[0],
            requestUnit: cpuRequest[1] || '',
            defaultRequestUnit: cpuRequest[1] || '',
            limit: cpuLimit[0],
            limitUnit: cpuLimit[1] || '',
            defaultLimitUnit: cpuLimit[1] || '',
        },
        memory: {
            request: memoryRequest[0],
            requestUnit: memoryRequest[1] || 'Mi',
            defaultRequestUnit: memoryRequest[1] || 'Mi',
            limit: memoryLimit[0],
            limitUnit: memoryLimit[1] || 'Mi',
            defaultLimitUnit: memoryLimit[1] || 'Mi',
        },
    };
    return limitsData;
};
const getUserLabels = (resource) => {
    const defaultLabels = [
        'app',
        'app.kubernetes.io/instance',
        'app.kubernetes.io/component',
        'app.kubernetes.io/name',
        'app.openshift.io/runtime',
        'app.kubernetes.io/part-of',
        'app.openshift.io/runtime-version',
        'app.openshift.io/runtime-namespace',
    ];
    const allLabels = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'metadata.labels', {});
    const userLabels = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](allLabels, defaultLabels);
    return userLabels;
};
const getCommonInitialValues = (editAppResource, route, name, namespace) => {
    const appGroupName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](editAppResource, 'metadata.labels["app.kubernetes.io/part-of"]');
    const commonInitialValues = {
        formType: 'edit',
        name,
        application: {
            name: appGroupName || '',
            selectedKey: appGroupName || _const__WEBPACK_IMPORTED_MODULE_5__["UNASSIGNED_KEY"],
        },
        project: {
            name: namespace,
        },
        route: getRouteData(route, editAppResource),
        resources: getResourcesType(editAppResource),
        serverless: getServerlessData(editAppResource),
        pipeline: {
            enabled: false,
        },
        deployment: getDeploymentData(editAppResource),
        labels: getUserLabels(editAppResource),
        limits: getLimitsData(editAppResource),
        healthChecks: Object(_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__["getHealthChecksData"])(editAppResource),
    };
    return commonInitialValues;
};
const getGitAndDockerfileInitialValues = (buildConfig, route) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](buildConfig)) {
        return {};
    }
    const currentImage = lodash__WEBPACK_IMPORTED_MODULE_0__["split"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.strategy.sourceStrategy.from.name', ''), ':');
    const git = getGitData(buildConfig);
    const initialValues = {
        git,
        docker: {
            dockerfilePath: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](buildConfig, 'spec.strategy.dockerStrategy.dockerfilePath', 'Dockerfile'),
            containerPort: parseInt(lodash__WEBPACK_IMPORTED_MODULE_0__["split"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](route, 'spec.port.targetPort'), '-')[0], 10),
        },
        image: {
            selected: currentImage[0] || '',
            recommended: '',
            tag: currentImage[1] || '',
            tagObj: {},
            ports: [],
            isRecommending: false,
            couldNotRecommend: false,
        },
        build: getBuildData(buildConfig, git.type),
    };
    return initialValues;
};
const deployImageInitialValues = {
    searchTerm: '',
    registry: 'external',
    imageStream: {
        image: '',
        tag: '',
        namespace: '',
    },
    isi: {
        name: '',
        image: {},
        tag: '',
        status: { metadata: {}, status: '' },
        ports: [],
    },
    image: {
        name: '',
        image: {},
        tag: '',
        status: { metadata: {}, status: '' },
        ports: [],
    },
    build: {
        env: [],
        triggers: {},
        strategy: '',
    },
    isSearchingForImage: false,
};
const getExternalImageInitialValues = (appResources) => {
    var _a, _b, _c, _d, _e, _f;
    const imageStreamList = (_a = appResources === null || appResources === void 0 ? void 0 : appResources.imageStream) === null || _a === void 0 ? void 0 : _a.data;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](imageStreamList)) {
        return {};
    }
    const imageStream = lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](imageStreamList, ['metadata.resourceVersion'], ['desc']);
    const name = imageStream.length && ((_f = (_e = (_d = (_c = (_b = imageStream[0]) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.tags) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.from) === null || _f === void 0 ? void 0 : _f.name);
    return Object.assign(Object.assign({}, deployImageInitialValues), { searchTerm: name, registry: 'external', imageStream: Object.assign(Object.assign({}, deployImageInitialValues.imageStream), { grantAccess: true }) });
};
const getInternalImageInitialValues = (editAppResource) => {
    const imageStreamNamespace = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](editAppResource, 'metadata.labels["app.openshift.io/runtime-namespace"]', '');
    const imageStreamName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](editAppResource, 'metadata.labels["app.openshift.io/runtime"]', '');
    const imageStreamTag = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](editAppResource, 'metadata.labels["app.openshift.io/runtime-version"]', '');
    return Object.assign(Object.assign({}, deployImageInitialValues), { registry: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["RegistryType"].Internal, imageStream: {
            image: imageStreamName,
            tag: imageStreamTag,
            namespace: imageStreamNamespace,
        } });
};
const getExternalImagelValues = (appResource) => {
    const name = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResource, 'spec.template.spec.containers[0].image', null);
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](appResource) || !name) {
        return {};
    }
    return Object.assign(Object.assign({}, deployImageInitialValues), { searchTerm: name, registry: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["RegistryType"].External, imageStream: Object.assign(Object.assign({}, deployImageInitialValues.imageStream), { grantAccess: true }) });
};
const getInitialValues = (appResources, appName, namespace) => {
    const commonValues = getCommonInitialValues(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'), lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'route.data'), appName, namespace);
    const gitDockerValues = getGitAndDockerfileInitialValues(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'buildConfig.data'), lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'route.data'));
    let externalImageValues = {};
    let internalImageValues = {};
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](gitDockerValues)) {
        externalImageValues = getExternalImageInitialValues(appResources);
        internalImageValues = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](externalImageValues)
            ? getInternalImageInitialValues(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'))
            : {};
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](externalImageValues) &&
            !lodash__WEBPACK_IMPORTED_MODULE_0__["get"](internalImageValues, 'imageStream.tag') &&
            !lodash__WEBPACK_IMPORTED_MODULE_0__["get"](internalImageValues, 'imageStream.image')) {
            const editAppResourceData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data');
            if ((editAppResourceData === null || editAppResourceData === void 0 ? void 0 : editAppResourceData.kind) === _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].kind) {
                internalImageValues = {};
                externalImageValues = getExternalImagelValues(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'));
            }
        }
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, commonValues), gitDockerValues), externalImageValues), internalImageValues);
};


/***/ })

}]);
//# sourceMappingURL=dev-console-edit~dev-console-healthCheck-9f75fb4570fce160f6f8.js.map