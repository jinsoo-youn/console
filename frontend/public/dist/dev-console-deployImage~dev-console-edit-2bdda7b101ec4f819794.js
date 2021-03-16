(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-deployImage~dev-console-edit"],{

/***/ "./packages/dev-console/src/components/import/deployImage-submit-utils.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/deployImage-submit-utils.ts ***!
  \********************************************************************************/
/*! exports provided: createSystemImagePullerRoleBinding, createOrUpdateImageStream, createOrUpdateDeployment, createOrUpdateDeploymentConfig, ensurePortExists, createOrUpdateDeployImageResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSystemImagePullerRoleBinding", function() { return createSystemImagePullerRoleBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateImageStream", function() { return createOrUpdateImageStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateDeployment", function() { return createOrUpdateDeployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateDeploymentConfig", function() { return createOrUpdateDeploymentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensurePortExists", function() { return ensurePortExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrUpdateDeployImageResources", function() { return createOrUpdateDeployImageResources; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_knative_plugin_src_utils_create_knative_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin/src/utils/create-knative-utils */ "./packages/knative-plugin/src/utils/create-knative-utils.ts");
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/resource-label-utils */ "./packages/dev-console/src/utils/resource-label-utils.ts");
/* harmony import */ var _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/shared-submit-utils */ "./packages/dev-console/src/utils/shared-submit-utils.ts");
/* harmony import */ var _health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../health-checks/create-health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/create-health-checks-probe-utils.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const createSystemImagePullerRoleBinding = (formData, dryRun) => {
    const { imageStream } = formData;
    const roleBinding = {
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RoleBindingModel"].kind,
        apiVersion: `${_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RoleBindingModel"].apiGroup}/${_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RoleBindingModel"].apiVersion}`,
        metadata: {
            name: 'system:image-puller',
            namespace: imageStream.namespace,
        },
        subjects: [
            {
                kind: 'ServiceAccount',
                name: 'default',
                namespace: formData.project.name,
            },
        ],
        roleRef: {
            apiGroup: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RoleBindingModel"].apiGroup,
            kind: 'ClusterRole',
            name: 'system:image-puller',
        },
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RoleBindingModel"], roleBinding, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["dryRunOpt"] : {});
};
const createOrUpdateImageStream = (formData, dryRun, originalImageStream, verb = 'create', generatedImageStreamName = '') => {
    const { project: { name: namespace }, application: { name: application }, name, isi: { name: isiName, tag }, labels: userLabels, } = formData;
    const defaultLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getAppLabels"])(name, application);
    const newImageStream = {
        apiVersion: 'image.openshift.io/v1',
        kind: 'ImageStream',
        metadata: {
            name: `${generatedImageStreamName || name}`,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
        },
        spec: {
            tags: [
                {
                    name: tag,
                    annotations: Object.assign(Object.assign({}, Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getCommonAnnotations"])()), { 'openshift.io/imported-from': isiName }),
                    from: {
                        kind: 'DockerImage',
                        name: `${isiName}`,
                    },
                    importPolicy: {},
                },
            ],
        },
    };
    const imageStream = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["mergeData"])(originalImageStream, newImageStream);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ImageStreamModel"], imageStream)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ImageStreamModel"], newImageStream, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["dryRunOpt"] : {});
};
const getMetadata = (formData) => {
    var _a;
    const { application: { name: application }, name, isi: { image }, labels: userLabels, imageStream: { tag: imgTag, namespace: imgNamespace }, } = formData;
    const imgStreamName = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["getRuntime"])((_a = image.metadata) === null || _a === void 0 ? void 0 : _a.labels);
    const defaultLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getAppLabels"])(name, application, imgStreamName, imgTag, imgNamespace);
    const labels = Object.assign(Object.assign({}, defaultLabels), userLabels);
    const podLabels = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getPodLabels"])(name);
    const volumes = [];
    const volumeMounts = [];
    let volumeNumber = 0;
    lodash__WEBPACK_IMPORTED_MODULE_0__["each"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](image, ['dockerImageMetadata', 'Config', 'Volumes']), (value, path) => {
        volumeNumber++;
        const volumeName = `${name}-${volumeNumber}`;
        volumes.push({
            name: volumeName,
            emptyDir: {},
        });
        volumeMounts.push({
            name: volumeName,
            mountPath: path,
        });
    });
    return { labels, podLabels, volumes, volumeMounts };
};
const createOrUpdateDeployment = (formData, dryRun, originalDeployment, verb = 'create') => {
    const { registry, project: { name: namespace }, name, isi: { image, ports, tag: imageStreamTag }, deployment: { env, replicas, triggers: { image: imageChange }, }, labels: userLabels, limits: { cpu, memory }, imageStream: { image: imgName, namespace: imgNamespace }, healthChecks, } = formData;
    const annotations = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getCommonAnnotations"])();
    const defaultAnnotations = Object.assign(Object.assign(Object.assign({}, annotations), { 'alpha.image.policy.openshift.io/resolve-names': '*' }), Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getTriggerAnnotation"])(imgName || name, imgNamespace || namespace, imageChange, imageStreamTag));
    const { labels, podLabels, volumes, volumeMounts } = getMetadata(formData);
    const imageRef = registry === _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["RegistryType"].External
        ? `${name}:${imageStreamTag}`
        : lodash__WEBPACK_IMPORTED_MODULE_0__["get"](image, 'dockerImageReference');
    const newDeployment = {
        kind: 'Deployment',
        apiVersion: 'apps/v1',
        metadata: {
            name,
            namespace,
            labels,
            annotations: defaultAnnotations,
        },
        spec: {
            replicas,
            selector: {
                matchLabels: {
                    app: name,
                },
            },
            template: {
                metadata: {
                    labels: Object.assign(Object.assign({}, userLabels), podLabels),
                    annotations,
                },
                spec: {
                    volumes,
                    containers: [
                        Object.assign({ name, image: imageRef, ports,
                            volumeMounts,
                            env, resources: Object.assign(Object.assign({}, ((cpu.limit || memory.limit) && {
                                limits: Object.assign(Object.assign({}, (cpu.limit && { cpu: `${cpu.limit}${cpu.limitUnit}` })), (memory.limit && { memory: `${memory.limit}${memory.limitUnit}` })),
                            })), ((cpu.request || memory.request) && {
                                requests: Object.assign(Object.assign({}, (cpu.request && { cpu: `${cpu.request}${cpu.requestUnit}` })), (memory.request && { memory: `${memory.request}${memory.requestUnit}` })),
                            })) }, Object(_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__["getProbesData"])(healthChecks)),
                    ],
                },
            },
        },
    };
    const deployment = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["mergeData"])(originalDeployment, newDeployment);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"], deployment)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentModel"], deployment, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["dryRunOpt"] : {});
};
const createOrUpdateDeploymentConfig = (formData, dryRun, originalDeploymentConfig, verb = 'create') => {
    const { project: { name: namespace }, name, isi: { image, tag, ports }, deployment: { env, replicas, triggers }, labels: userLabels, limits: { cpu, memory }, imageStream: { image: imgName, namespace: imgNamespace }, healthChecks, } = formData;
    const { labels, podLabels, volumes, volumeMounts } = getMetadata(formData);
    const annotations = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getCommonAnnotations"])();
    const newDeploymentConfig = {
        kind: 'DeploymentConfig',
        apiVersion: 'apps.openshift.io/v1',
        metadata: {
            name,
            namespace,
            labels,
            annotations,
        },
        spec: {
            replicas,
            selector: podLabels,
            template: {
                metadata: {
                    labels: Object.assign(Object.assign({}, userLabels), podLabels),
                    annotations,
                },
                spec: {
                    volumes,
                    containers: [
                        Object.assign({ name, image: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](image, ['dockerImageMetadata', 'Config', 'Image']), ports,
                            volumeMounts,
                            env, resources: Object.assign(Object.assign({}, ((cpu.limit || memory.limit) && {
                                limits: Object.assign(Object.assign({}, (cpu.limit && { cpu: `${cpu.limit}${cpu.limitUnit}` })), (memory.limit && { memory: `${memory.limit}${memory.limitUnit}` })),
                            })), ((cpu.request || memory.request) && {
                                requests: Object.assign(Object.assign({}, (cpu.request && { cpu: `${cpu.request}${cpu.requestUnit}` })), (memory.request && { memory: `${memory.request}${memory.requestUnit}` })),
                            })) }, Object(_health_checks_create_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_8__["getProbesData"])(healthChecks)),
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
                            name: `${imgName || name}:${tag}`,
                            namespace: imgNamespace || namespace,
                        },
                    },
                },
                ...(triggers.config ? [{ type: 'ConfigChange' }] : []),
            ],
        },
    };
    const deploymentConfig = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["mergeData"])(originalDeploymentConfig, newDeploymentConfig);
    return verb === 'update'
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"], deploymentConfig)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["DeploymentConfigModel"], deploymentConfig, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["dryRunOpt"] : {});
};
const ensurePortExists = (formData) => {
    const { isi: { ports }, route: { defaultUnknownPort, unknownTargetPort }, } = formData;
    let values = formData;
    if (!Array.isArray(ports) || ports.length === 0) {
        // If we lack pre-defined ports but they have specified a custom target port, use that instead
        const containerPort = unknownTargetPort ? parseInt(unknownTargetPort, 10) : defaultUnknownPort;
        const suppliedPorts = [{ containerPort, protocol: 'TCP' }];
        values = Object.assign(Object.assign({}, values), { isi: Object.assign(Object.assign({}, values.isi), { ports: suppliedPorts }) });
    }
    return values;
};
const createOrUpdateDeployImageResources = (rawFormData, dryRun = false, verb = 'create', appResources) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const formData = ensurePortExists(rawFormData);
    const { name, registry, project: { name: namespace }, route: { create: canCreateRoute, disable }, isi: { ports, tag: imageStreamTag, image }, imageStream: { image: internalImageStreamName, namespace: internalImageStreamNamespace }, deployment: { triggers: { image: imageChange }, }, } = formData;
    const internalImageName = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["getRuntime"])((_a = image.metadata) === null || _a === void 0 ? void 0 : _a.labels);
    const requests = [];
    if (registry === _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["RegistryType"].Internal) {
        formData.imageStream.grantAccess &&
            requests.push(createSystemImagePullerRoleBinding(formData, dryRun));
    }
    const imageStreamList = (_b = appResources === null || appResources === void 0 ? void 0 : appResources.imageStream) === null || _b === void 0 ? void 0 : _b.data;
    const imageStreamData = lodash__WEBPACK_IMPORTED_MODULE_0__["orderBy"](imageStreamList, ['metadata.resourceVersion'], ['desc']);
    const originalImageStream = (imageStreamData.length && imageStreamData[0]) || {};
    if (formData.resources !== _import_types__WEBPACK_IMPORTED_MODULE_10__["Resources"].KnativeService) {
        registry === _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["RegistryType"].External &&
            (yield createOrUpdateImageStream(formData, dryRun, originalImageStream, verb));
        if (formData.resources === _import_types__WEBPACK_IMPORTED_MODULE_10__["Resources"].Kubernetes) {
            requests.push(createOrUpdateDeployment(formData, dryRun, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'), verb));
        }
        else {
            requests.push(createOrUpdateDeploymentConfig(formData, dryRun, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'), verb));
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](ports)) {
            const service = Object(_utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["createService"])(formData, undefined, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'service.data'));
            requests.push(verb === 'update'
                ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ServiceModel"], service)
                : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["ServiceModel"], service, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["dryRunOpt"] : {}));
            const route = Object(_utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["createRoute"])(formData, undefined, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'route.data'));
            if (verb === 'update' && disable) {
                requests.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RouteModel"], route));
            }
            else if (canCreateRoute) {
                requests.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_1__["RouteModel"], route, dryRun ? _utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_7__["dryRunOpt"] : {}));
            }
        }
    }
    else if (!dryRun) {
        // Do not run serverless call during the dry run.
        let imageStreamUrl = image === null || image === void 0 ? void 0 : image.dockerImageReference;
        if (registry === _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["RegistryType"].External) {
            let generatedImageStreamName = '';
            if (verb === 'update') {
                if (imageStreamList && imageStreamList.length) {
                    const originalImageStreamTag = lodash__WEBPACK_IMPORTED_MODULE_0__["find"]((_c = originalImageStream === null || originalImageStream === void 0 ? void 0 : originalImageStream.status) === null || _c === void 0 ? void 0 : _c.tags, [
                        'tag',
                        imageStreamTag,
                    ]);
                    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](originalImageStreamTag)) {
                        generatedImageStreamName = `${name}-${Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__["getRandomChars"])()}`;
                    }
                }
                else {
                    generatedImageStreamName = `${name}-${Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__["getRandomChars"])()}`;
                }
            }
            const imageStreamResponse = yield createOrUpdateImageStream(formData, dryRun, originalImageStream, generatedImageStreamName ? 'create' : verb, generatedImageStreamName);
            const imageStreamRepo = imageStreamResponse.status.dockerImageRepository;
            imageStreamUrl = imageStreamTag ? `${imageStreamRepo}:${imageStreamTag}` : imageStreamRepo;
        }
        const originalAnnotations = ((_f = (_e = (_d = appResources === null || appResources === void 0 ? void 0 : appResources.editAppResource) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.metadata) === null || _f === void 0 ? void 0 : _f.annotations) || {};
        const triggerAnnotations = Object(_utils_resource_label_utils__WEBPACK_IMPORTED_MODULE_6__["getTriggerAnnotation"])(internalImageStreamName || name, internalImageStreamNamespace || namespace, imageChange, imageStreamTag);
        const annotations = Object.assign(Object.assign({}, originalAnnotations), triggerAnnotations);
        const knDeploymentResource = Object(_console_knative_plugin_src_utils_create_knative_utils__WEBPACK_IMPORTED_MODULE_4__["getKnativeServiceDepResource"])(formData, imageStreamUrl, internalImageName || name, imageStreamTag, internalImageStreamNamespace, annotations, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](appResources, 'editAppResource.data'));
        requests.push(verb === 'update'
            ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sUpdate"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"], knDeploymentResource)
            : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"], knDeploymentResource));
    }
    return Promise.all(requests);
});


/***/ }),

/***/ "./packages/dev-console/src/components/import/deployImage-validation-utils.ts":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/deployImage-validation-utils.ts ***!
  \************************************************************************************/
/*! exports provided: deployValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployValidationSchema", function() { return deployValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validation_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-schema */ "./packages/dev-console/src/components/import/validation-schema.ts");
/* harmony import */ var _health_checks_health_checks_probe_validation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../health-checks/health-checks-probe-validation-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-validation-utils.ts");



const deployValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    project: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["projectNameValidationSchema"],
    application: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["applicationNameValidationSchema"],
    name: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["nameValidationSchema"],
    isi: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["isiValidationSchema"],
    serverless: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["serverlessValidationSchema"],
    deployment: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["deploymentValidationSchema"],
    route: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["routeValidationSchema"],
    limits: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["limitsValidationSchema"],
    resources: _validation_schema__WEBPACK_IMPORTED_MODULE_1__["resourcesValidationSchema"],
    healthChecks: _health_checks_health_checks_probe_validation_utils__WEBPACK_IMPORTED_MODULE_2__["healthChecksProbesValidationSchema"],
});


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageSearch.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageSearch.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _CreateSecretModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CreateSecretModal */ "./packages/dev-console/src/components/import/CreateSecretModal.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../const */ "./packages/dev-console/src/const.ts");











const ImageSearch = () => {
    var _a;
    const { values, setFieldValue, dirty, initialValues, touched } = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormikContext"])();
    const [newImageSecret, setNewImageSecret] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [alertVisible, shouldHideAlert] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [validated, setValidated] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].default);
    const namespace = values.project.name;
    const { application = {}, name: nameTouched } = touched;
    const { name: applicationNameTouched } = application;
    const handleSearch = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((searchTermImage) => {
        setFieldValue('isSearchingForImage', true);
        setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].default);
        const importImage = {
            kind: 'ImageStreamImport',
            apiVersion: 'image.openshift.io/v1',
            metadata: {
                name: 'newapp',
                namespace: values.project.name,
            },
            spec: {
                import: false,
                images: [
                    {
                        from: {
                            kind: 'DockerImage',
                            name: lodash__WEBPACK_IMPORTED_MODULE_1__["trim"](searchTermImage),
                        },
                    },
                ],
            },
            status: {},
        };
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ImageStreamImportsModel"], importImage)
            .then((imageStreamImport) => {
            const status = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamImport, 'status.images[0].status');
            if (status.status === 'Success') {
                const name = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamImport, 'spec.images[0].from.name');
                const image = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamImport, 'status.images[0].image');
                const tag = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](imageStreamImport, 'status.images[0].tag');
                const isi = { name, image, tag, status };
                const ports = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_8__["getPorts"])(isi);
                setFieldValue('isSearchingForImage', false);
                setFieldValue('isi.name', name);
                setFieldValue('isi.image', image);
                setFieldValue('isi.tag', tag);
                setFieldValue('isi.status', status);
                setFieldValue('isi.ports', ports);
                setFieldValue('image.ports', ports);
                setFieldValue('image.tag', tag);
                !values.name && setFieldValue('name', Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_8__["getSuggestedName"])(name));
                !values.application.name &&
                    values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_10__["UNASSIGNED_KEY"] &&
                    setFieldValue('application.name', `${Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_8__["getSuggestedName"])(name)}-app`);
                // set default port value
                const targetPort = (!initialValues.route.targetPort || touched.searchTerm) && lodash__WEBPACK_IMPORTED_MODULE_1__["head"](ports);
                targetPort && setFieldValue('route.targetPort', Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_8__["makePortName"])(targetPort));
                setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].success);
            }
            else {
                setFieldValue('isSearchingForImage', false);
                setFieldValue('isi', {});
                setFieldValue('isi.status', status);
                setFieldValue('route.targetPort', null);
                setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].error);
            }
        })
            .catch((error) => {
            setFieldValue('isi', {});
            setFieldValue('isi.status', { metadata: {}, status: '', message: error.message });
            setFieldValue('isSearchingForImage', false);
            setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].error);
        });
    }, [
        setFieldValue,
        touched,
        values.application.name,
        values.application.selectedKey,
        values.name,
        values.project.name,
        initialValues.route.targetPort,
    ]);
    const debouncedHandleSearch = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["useDebounceCallback"])(handleSearch, [handleSearch]);
    const handleSave = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((name) => {
        setNewImageSecret(name);
        values.searchTerm && handleSearch(values.searchTerm);
    }, [handleSearch, values.searchTerm]);
    const getHelpText = () => {
        if (values.isSearchingForImage) {
            return 'Validating...';
        }
        if (!values.isSearchingForImage && validated === _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].success) {
            return 'Validated';
        }
        return '';
    };
    const resetFields = () => {
        if (values.formType === 'edit') {
            values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_10__["UNASSIGNED_KEY"] &&
                values.application.selectedKey === _const__WEBPACK_IMPORTED_MODULE_10__["CREATE_APPLICATION_KEY"] &&
                !applicationNameTouched &&
                setFieldValue('application.name', '');
            return;
        }
        !nameTouched && setFieldValue('name', '');
        values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_10__["UNASSIGNED_KEY"] &&
            !applicationNameTouched &&
            setFieldValue('application.name', '');
    };
    const helpTextInvalid = validated === _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, values.searchTerm === '' ? 'Required' : (_a = values.isi.status) === null || _a === void 0 ? void 0 : _a.message));
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        !dirty && values.searchTerm && handleSearch(values.searchTerm);
    }, [dirty, handleSearch, values.searchTerm]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (touched.searchTerm && initialValues.searchTerm !== values.searchTerm) {
            const targetPort = lodash__WEBPACK_IMPORTED_MODULE_1__["head"](values.isi.ports);
            targetPort && setFieldValue('route.targetPort', Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_8__["makePortName"])(targetPort));
        }
    }, [
        touched.searchTerm,
        setFieldValue,
        values.isi.ports,
        initialValues.searchTerm,
        values.searchTerm,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextInputTypes"].text, name: "searchTerm", placeholder: "Enter an image name", helpText: getHelpText(), helpTextInvalid: helpTextInvalid, validated: validated, onChange: (e) => {
                resetFields();
                setFieldValue('isi', {});
                setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ValidatedOptions"].default);
                debouncedHandleSearch(e.target.value);
            }, "data-test-id": "deploy-image-search-term", required: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: "image-name-help" },
            "To deploy an image from a private repository, you must",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", isInline: true, onClick: () => Object(_CreateSecretModal__WEBPACK_IMPORTED_MODULE_9__["secretModalLauncher"])({
                    namespace,
                    save: handleSave,
                    secretType: _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_6__["SecretTypeAbstraction"].image,
                }) }, "create an image pull secret"),
            ' ',
            "with your image registry credentials."),
        newImageSecret && alertVisible && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Alert"], { isInline: true, className: "co-alert", variant: "success", title: `Secret ${newImageSecret} was created.`, action: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["AlertActionCloseButton"], { onClose: () => shouldHideAlert(false) }) }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageSearch);


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageSearchSection.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageSearchSection.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _ImageStream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageStream */ "./packages/dev-console/src/components/import/image-search/ImageStream.tsx");
/* harmony import */ var _ImageSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageSearch */ "./packages/dev-console/src/components/import/image-search/ImageSearch.tsx");







const ImageSearchSection = () => {
    const { values, setFieldValue, initialValues } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const [registry, setRegistry] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](values.registry);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (values.registry !== registry) {
            setRegistry(values.registry);
            setFieldValue('searchTerm', initialValues.searchTerm);
            setFieldValue('isi', initialValues.isi);
            setFieldValue('imageStream', initialValues.imageStream);
        }
    }, [
        initialValues.imageStream,
        initialValues.isi,
        initialValues.searchTerm,
        registry,
        setFieldValue,
        values,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Image", subTitle: "Deploy an existing image from an image stream or image registry." },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["RadioGroupField"], { name: "registry", options: [
                {
                    label: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__["imageRegistryType"].External.label,
                    value: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__["imageRegistryType"].External.value,
                    isDisabled: values.formType === 'edit' && values.registry === 'internal',
                    activeChildren: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageSearch__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                },
                {
                    label: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__["imageRegistryType"].Internal.label,
                    value: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__["imageRegistryType"].Internal.value,
                    isDisabled: values.formType === 'edit' && values.registry === 'external',
                    activeChildren: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageStream__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                },
            ] })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageSearchSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageStream.scss":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageStream.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageStream.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageStream.tsx ***!
  \*********************************************************************************/
/*! exports provided: initialState, ImageStreamReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamReducer", function() { return ImageStreamReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _ImageStreamContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageStreamContext */ "./packages/dev-console/src/components/import/image-search/ImageStreamContext.ts");
/* harmony import */ var _ImageStreamNsDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageStreamNsDropdown */ "./packages/dev-console/src/components/import/image-search/ImageStreamNsDropdown.tsx");
/* harmony import */ var _ImageStreamDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageStreamDropdown */ "./packages/dev-console/src/components/import/image-search/ImageStreamDropdown.tsx");
/* harmony import */ var _ImageStreamTagDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ImageStreamTagDropdown */ "./packages/dev-console/src/components/import/image-search/ImageStreamTagDropdown.tsx");
/* harmony import */ var _ImageStream_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImageStream.scss */ "./packages/dev-console/src/components/import/image-search/ImageStream.scss");
/* harmony import */ var _ImageStream_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ImageStream_scss__WEBPACK_IMPORTED_MODULE_12__);













const initialState = {
    hasAccessToPullImage: true,
    loading: false,
    accessLoading: false,
    hasCreateAccess: false,
    selectedImageStream: {},
};
const ImageStreamReducer = (state, action) => {
    const { value } = action;
    switch (action.type) {
        case _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasAccessToPullImage:
            return Object.assign(Object.assign({}, state), { hasAccessToPullImage: value });
        case _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setLoading:
            return Object.assign(Object.assign({}, state), { loading: value });
        case _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setAccessLoading:
            return Object.assign(Object.assign({}, state), { accessLoading: value });
        case _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasCreateAccess:
            return Object.assign(Object.assign({}, state), { hasCreateAccess: value });
        case _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setSelectedImageStream:
            return Object.assign(Object.assign({}, state), { selectedImageStream: value });
        default:
            throw new Error('Invalid action was provided in imagestream reducer');
    }
};
const ImageStream = () => {
    var _a, _b;
    const { values: { imageStream, project, registry, isi }, setFieldValue, } = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormikContext"])();
    const [validated, setValidated] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].default);
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](ImageStreamReducer, initialState);
    const [hasImageStreams, setHasImageStreams] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const { hasAccessToPullImage, loading, accessLoading, hasCreateAccess, selectedImageStream, } = state;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (imageStream.namespace !== _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["BuilderImagesNamespace"].Openshift) {
            setFieldValue('imageStream.grantAccess', true);
        }
    }, [imageStream.namespace, setFieldValue]);
    const imageStreamTagList = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["getImageStreamTags"])(selectedImageStream);
    const isNamespaceSelected = imageStream.namespace !== '' && !accessLoading;
    const isStreamsAvailable = isNamespaceSelected && hasImageStreams && !loading;
    const isTagsAvailable = isStreamsAvailable && !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](imageStreamTagList);
    const isImageStreamSelected = imageStream.image !== '';
    const canGrantAccess = hasCreateAccess &&
        isStreamsAvailable &&
        isTagsAvailable &&
        !hasAccessToPullImage &&
        isNamespaceSelected &&
        registry === _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["RegistryType"].Internal &&
        imageStream.namespace !== _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["BuilderImagesNamespace"].Openshift &&
        project.name !== imageStream.namespace;
    const helperTextInvalid = validated === _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].error && ((_a = isi.status) === null || _a === void 0 ? void 0 : _a.message) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationCircleIcon"], null),
        "\u00A0", (_b = isi.status) === null || _b === void 0 ? void 0 :
        _b.message));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageStreamContext__WEBPACK_IMPORTED_MODULE_8__["ImageStreamContext"].Provider, { value: { state, dispatch, hasImageStreams, setHasImageStreams, setValidated } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "image-stream-dropdowns", validated: validated, helperTextInvalid: helperTextInvalid },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4 col-md-4 col-sm-4 col-xs-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageStreamNsDropdown__WEBPACK_IMPORTED_MODULE_9__["default"], null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4 col-md-4 col-sm-4 col-xs-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageStreamDropdown__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-imagestream-separator" }, "/")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-4 col-md-4 col-sm-4 col-xs-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageStreamTagDropdown__WEBPACK_IMPORTED_MODULE_11__["default"], null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-imagestream-separator" }, ":")))),
            isNamespaceSelected && isImageStreamSelected && !isTagsAvailable && hasCreateAccess && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-imagestream-alert" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", title: "No Image streams tags found", isInline: true },
                    "No tags are available in image stream ",
                    imageStream.image))),
            isNamespaceSelected && !loading && !isStreamsAvailable && hasCreateAccess && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-imagestream-alert" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", title: "No Image streams found", isInline: true },
                    "No image streams are available in project ",
                    imageStream.namespace))),
            isNamespaceSelected && !accessLoading && !hasCreateAccess && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-imagestream-alert" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", title: "Permission denied", isInline: true },
                    "Service account default does not have authority to pull images from",
                    ' ',
                    imageStream.namespace,
                    ". Select another project to continue."))),
            canGrantAccess && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-imagestream-alert" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["CheckboxField"], { name: "imageStream.grantAccess", label: `Grant service account default authority to pull images from
                ${imageStream.namespace}` }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](ImageStream));


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageStreamContext.ts":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageStreamContext.ts ***!
  \***************************************************************************************/
/*! exports provided: ImageStreamContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStreamContext", function() { return ImageStreamContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ImageStreamContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageStreamDropdown.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageStreamDropdown.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _ImageStreamContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageStreamContext */ "./packages/dev-console/src/components/import/image-search/ImageStreamContext.ts");







const ImageStreamDropdown = () => {
    const imgCollection = {};
    const { values: { imageStream }, setFieldValue, initialValues, } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const { state, dispatch, hasImageStreams, setHasImageStreams } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_ImageStreamContext__WEBPACK_IMPORTED_MODULE_6__["ImageStreamContext"]);
    const { accessLoading, loading, hasCreateAccess } = state;
    const isNamespaceSelected = imageStream.namespace !== '' && !accessLoading;
    const isStreamsAvailable = isNamespaceSelected && hasImageStreams && !loading;
    const collectImageStreams = (namespace, resource) => {
        if (!imgCollection[namespace]) {
            imgCollection[namespace] = {};
        }
        imgCollection[namespace][resource.metadata.name] = resource;
    };
    const getTitle = () => {
        return loading && !isStreamsAvailable
            ? ''
            : !isStreamsAvailable || !hasCreateAccess
                ? 'No Image Stream'
                : 'Select Image Stream';
    };
    const onDropdownChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((img) => {
        setFieldValue('imageStream.tag', initialValues.imageStream.tag);
        setFieldValue('isi', initialValues.isi);
        const image = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](imgCollection, [imageStream.namespace, img], {});
        dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_5__["ImageStreamActions"].setSelectedImageStream, value: image });
    }, [
        setFieldValue,
        initialValues.imageStream.tag,
        initialValues.isi,
        imgCollection,
        imageStream.namespace,
        dispatch,
    ]);
    const onLoad = (imgstreams) => {
        const imageStreamAvailable = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](imgstreams);
        setHasImageStreams(imageStreamAvailable);
        loading &&
            isNamespaceSelected &&
            dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_5__["ImageStreamActions"].setLoading, value: false });
    };
    const resourceFilter = (resource) => {
        const { metadata: { namespace }, } = resource;
        collectImageStreams(namespace, resource);
        return namespace === imageStream.namespace;
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        imageStream.image && onDropdownChange(imageStream.image);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageStream.image, isStreamsAvailable]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (initialValues.imageStream.image !== imageStream.image) {
            initialValues.imageStream.tag = '';
        }
    }, [imageStream.image, initialValues.imageStream.image, initialValues.imageStream.tag]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ResourceDropdownField"], { name: "imageStream.image", label: "ImageStreams", resources: Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_4__["getImageStreamResource"])(imageStream.namespace), dataSelector: ['metadata', 'name'], key: imageStream.namespace, fullWidth: true, required: true, title: imageStream.image || getTitle(), disabled: !hasCreateAccess || !isStreamsAvailable, onChange: onDropdownChange, onLoad: onLoad, resourceFilter: resourceFilter }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageStreamDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageStreamNsDropdown.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageStreamNsDropdown.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _ImageStreamContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageStreamContext */ "./packages/dev-console/src/components/import/image-search/ImageStreamContext.ts");









const ImageStreamNsDropdown = () => {
    const { values, setFieldValue, initialValues } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const { dispatch } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_ImageStreamContext__WEBPACK_IMPORTED_MODULE_8__["ImageStreamContext"]);
    const onDropdownChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((selectedProject) => {
        const promiseArr = [];
        setFieldValue('imageStream.image', initialValues.imageStream.image);
        setFieldValue('imageStream.tag', initialValues.imageStream.tag);
        setFieldValue('isi', initialValues.isi);
        dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setLoading, value: true });
        dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setAccessLoading, value: true });
        if (selectedProject === _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["BuilderImagesNamespace"].Openshift) {
            dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasCreateAccess, value: true });
            dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasAccessToPullImage, value: true });
            setFieldValue('imageStream.grantAccess', false);
        }
        else {
            promiseArr.push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["checkAccess"])({
                group: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["RoleBindingModel"].apiGroup,
                resource: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["RoleBindingModel"].plural,
                verb: 'create',
                name: 'system:image-puller',
                namespace: selectedProject,
            })
                .then((resp) => dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasCreateAccess, value: resp.status.allowed }))
                .catch(() => dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasAccessToPullImage, value: false })));
            promiseArr.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["RoleBindingModel"], 'system:image-puller', selectedProject)
                .then(() => {
                dispatch({
                    type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasAccessToPullImage,
                    value: true,
                });
                setFieldValue('imageStream.grantAccess', false);
            })
                .catch(() => dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setHasAccessToPullImage, value: false })));
        }
        return Promise.all(promiseArr).then(() => dispatch({ type: _import_types__WEBPACK_IMPORTED_MODULE_7__["ImageStreamActions"].setAccessLoading, value: false }));
    }, [
        dispatch,
        initialValues.imageStream.image,
        initialValues.imageStream.tag,
        initialValues.isi,
        setFieldValue,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        values.imageStream.namespace && onDropdownChange(values.imageStream.namespace);
    }, [onDropdownChange, values.imageStream.namespace]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (initialValues.imageStream.namespace !== values.imageStream.namespace) {
            initialValues.imageStream.image = '';
            initialValues.imageStream.tag = '';
        }
    }, [
        initialValues.imageStream.image,
        initialValues.imageStream.namespace,
        initialValues.imageStream.tag,
        values.imageStream.namespace,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["ResourceDropdownField"], { name: "imageStream.namespace", label: "Projects", title: "Select Project", fullWidth: true, required: true, resources: Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["getProjectResource"])(), dataSelector: ['metadata', 'name'], onChange: onDropdownChange, appendItems: { openshift: _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["BuilderImagesNamespace"].Openshift } }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageStreamNsDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/import/image-search/ImageStreamTagDropdown.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/image-search/ImageStreamTagDropdown.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _ImageStreamContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageStreamContext */ "./packages/dev-console/src/components/import/image-search/ImageStreamContext.ts");











const ImageStreamTagDropdown = () => {
    let imageStreamTagList = {};
    const { values: { name: resourceName, imageStream, application, formType, isi: { ports: isiPorts }, }, setFieldValue, initialValues, touched, } = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
    const { state, hasImageStreams, setValidated } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_ImageStreamContext__WEBPACK_IMPORTED_MODULE_10__["ImageStreamContext"]);
    const { selectedImageStream, accessLoading, loading } = state;
    imageStreamTagList = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["getImageStreamTags"])(selectedImageStream);
    const isNamespaceSelected = imageStream.namespace !== '' && !accessLoading;
    const isStreamsAvailable = isNamespaceSelected && hasImageStreams && !loading;
    const isTagsAvailable = isStreamsAvailable && !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](imageStreamTagList);
    const isImageStreamSelected = imageStream.image !== '';
    const searchImageTag = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((selectedTag) => {
        setFieldValue('isSearchingForImage', true);
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["ImageStreamTagModel"], `${imageStream.image}:${selectedTag}`, imageStream.namespace)
            .then((imageStreamImport) => {
            const { image, tag, status, metadata: { labels }, } = imageStreamImport;
            const imgStreamLabels = lodash__WEBPACK_IMPORTED_MODULE_1__["pick"](labels, _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["imageStreamLabels"]);
            const name = imageStream.image;
            const isi = { name, image, tag, status };
            const ports = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["getPorts"])(isi);
            setFieldValue('isSearchingForImage', false);
            setFieldValue('isi.name', name);
            setFieldValue('isi.image', lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](image, { metadata: { labels: imgStreamLabels } }));
            setFieldValue('isi.tag', selectedTag);
            setFieldValue('isi.ports', ports);
            setFieldValue('image.ports', ports);
            !resourceName && formType !== 'edit' && setFieldValue('name', Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["getSuggestedName"])(name));
            application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_8__["UNASSIGNED_KEY"] &&
                !application.name &&
                setFieldValue('application.name', `${Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["getSuggestedName"])(name)}-app`);
            // set default port value
            const targetPort = (!initialValues.route.targetPort || Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched.imageStream, 'image')) &&
                !Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched.route, 'targetPort') &&
                lodash__WEBPACK_IMPORTED_MODULE_1__["head"](ports);
            targetPort && setFieldValue('route.targetPort', Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["makePortName"])(targetPort));
            setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ValidatedOptions"].success);
        })
            .catch((error) => {
            setFieldValue('isi', {});
            setFieldValue('isi.status', { metadata: {}, status: '', message: error.message });
            setFieldValue('isSearchingForImage', false);
            setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ValidatedOptions"].error);
        });
    }, [
        setFieldValue,
        imageStream.image,
        formType,
        application.selectedKey,
        application.name,
        resourceName,
        setValidated,
        imageStream.namespace,
        initialValues.route.targetPort,
        touched.imageStream,
        touched.route,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        imageStream.tag && searchImageTag(imageStream.tag);
    }, [imageStream.tag, searchImageTag]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched.imageStream, 'image') &&
            !Object(formik__WEBPACK_IMPORTED_MODULE_3__["getIn"])(touched.route, 'targetPort') &&
            !lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](initialValues.imageStream.image, imageStream.image)) {
            const targetPort = lodash__WEBPACK_IMPORTED_MODULE_1__["head"](isiPorts);
            targetPort && setFieldValue('route.targetPort', Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_9__["makePortName"])(targetPort));
        }
    }, [
        touched.route,
        touched.imageStream,
        initialValues.imageStream.image,
        imageStream.image,
        setFieldValue,
        isiPorts,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["DropdownField"], { name: "imageStream.tag", label: "Tag", items: imageStreamTagList, key: imageStream.image, autocompleteFilter: fuzzysearch__WEBPACK_IMPORTED_MODULE_2__, title: imageStream.tag ||
            (isNamespaceSelected && isImageStreamSelected && !isTagsAvailable ? 'No Tag' : 'Select Tag'), disabled: !isImageStreamSelected || !isTagsAvailable, fullWidth: true, required: true, onChange: (tag) => {
            tag !== '' && searchImageTag(tag);
        } }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageStreamTagDropdown);


/***/ })

}]);
//# sourceMappingURL=dev-console-deployImage~dev-console-edit-2bdda7b101ec4f819794.js.map