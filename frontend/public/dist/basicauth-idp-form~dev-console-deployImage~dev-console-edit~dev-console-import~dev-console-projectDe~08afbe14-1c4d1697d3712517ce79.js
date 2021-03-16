(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basicauth-idp-form~dev-console-deployImage~dev-console-edit~dev-console-import~dev-console-projectDe~08afbe14"],{

/***/ "./packages/dev-console/src/utils/imagestream-utils.ts":
/*!*************************************************************!*\
  !*** ./packages/dev-console/src/utils/imagestream-utils.ts ***!
  \*************************************************************/
/*! exports provided: imageStreamLabels, getRuntime, getSampleRepo, getSampleRef, getSampleContextDir, getPorts, makePortName, prettifyName, normalizeBuilderImages, getTagDataWithDisplayName, getSuggestedName, RegistryType, BuilderImagesNamespace, imageRegistryType, getSortedTags, getImageStreamTags, getProjectResource, getImageStreamResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageStreamLabels", function() { return imageStreamLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRuntime", function() { return getRuntime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleRepo", function() { return getSampleRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleRef", function() { return getSampleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleContextDir", function() { return getSampleContextDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPorts", function() { return getPorts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePortName", function() { return makePortName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettifyName", function() { return prettifyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeBuilderImages", function() { return normalizeBuilderImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagDataWithDisplayName", function() { return getTagDataWithDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestedName", function() { return getSuggestedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryType", function() { return RegistryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderImagesNamespace", function() { return BuilderImagesNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageRegistryType", function() { return imageRegistryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedTags", function() { return getSortedTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageStreamTags", function() { return getImageStreamTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectResource", function() { return getProjectResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageStreamResource", function() { return getImageStreamResource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semver */ "./node_modules/semver/semver.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/image-stream */ "./public/components/image-stream.tsx");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");





const imageStreamLabels = ['app.kubernetes.io/name', 'app.openshift.io/runtime'];
const getRuntime = (labels) => (labels === null || labels === void 0 ? void 0 : labels['app.openshift.io/runtime']) || (labels === null || labels === void 0 ? void 0 : labels['app.kubernetes.io/name']);
const getSampleRepo = (tag) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](tag, 'annotations.sampleRepo', '');
const getSampleRef = (tag) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](tag, 'annotations.sampleRef', '');
const getSampleContextDir = (tag) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](tag, 'annotations.sampleContextDir', '');
// Transform image ports to k8s structure.
// `{ '3306/tcp': {} }` -> `{ containerPort: 3306, protocol: 'TCP' }`
const portsFromSpec = (portSpec) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](portSpec, (result, value, key) => {
        const parts = key.split('/');
        if (parts.length === 1) {
            parts.push('tcp');
        }
        const containerPort = parseInt(parts[0], 10);
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isFinite"](containerPort)) {
            result.push({
                containerPort,
                protocol: parts[1].toUpperCase(),
            });
        }
        else {
            // eslint-disable-next-line no-console
            console.warn('Unrecognized image port format', key);
        }
        return result;
    }, []);
};
const getPorts = (imageStreamImage) => {
    const portSpec = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStreamImage, 'image.dockerImageMetadata.Config.ExposedPorts') ||
        lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStreamImage, 'image.dockerImageMetadata.ContainerConfig.ExposedPorts');
    return portsFromSpec(portSpec);
};
// Use the same naming convention as the CLI.
const makePortName = (port) => `${port.containerPort}-${port.protocol}`.toLowerCase();
const prettifyName = (name) => {
    return name.replace(/(-|^)([^-]?)/g, (first, prep, letter) => {
        return (prep && ' ') + letter.toUpperCase();
    });
};
const normalizeBuilderImages = (imageStreams) => {
    const data = Array.isArray(imageStreams) ? imageStreams : [imageStreams];
    const builderImageStreams = data.filter((imageStream) => Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["isBuilder"])(imageStream));
    return builderImageStreams.reduce((builderImages, imageStream) => {
        const tags = Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["getBuilderTagsSortedByVersion"])(imageStream);
        const recentTag = Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["getMostRecentBuilderTag"])(imageStream);
        const { name } = imageStream.metadata;
        const displayName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStream, [
            'metadata',
            'annotations',
            'openshift.io/display-name',
        ]);
        const imageStreamNamespace = imageStream.metadata.namespace;
        const title = displayName && displayName.length < 14 ? displayName : prettifyName(name);
        const iconClass = Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageStreamIcon"])(recentTag);
        const iconUrl = Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageForIconClass"])(iconClass);
        builderImages[name] = {
            obj: imageStream,
            name,
            displayName,
            title,
            iconUrl,
            tags,
            recentTag,
            imageStreamNamespace,
        };
        return builderImages;
    }, {});
};
const getTagDataWithDisplayName = (imageTags, selectedTag, defaultName) => {
    const imageTag = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](imageTags, { name: selectedTag });
    const displayName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageTag, ['annotations', 'openshift.io/display-name'], defaultName);
    return [imageTag, displayName];
};
const getSuggestedName = (name) => {
    if (!name) {
        return undefined;
    }
    const imageName = lodash__WEBPACK_IMPORTED_MODULE_0__["last"](name.split('/'));
    return lodash__WEBPACK_IMPORTED_MODULE_0__["first"](imageName.split(/[^a-z0-9-]/));
};
var RegistryType;
(function (RegistryType) {
    RegistryType["External"] = "external";
    RegistryType["Internal"] = "internal";
})(RegistryType || (RegistryType = {}));
var BuilderImagesNamespace;
(function (BuilderImagesNamespace) {
    BuilderImagesNamespace["Openshift"] = "openshift";
})(BuilderImagesNamespace || (BuilderImagesNamespace = {}));
const imageRegistryType = {
    External: {
        value: RegistryType.External,
        label: 'Image name from external registry',
    },
    Internal: {
        value: RegistryType.Internal,
        label: 'Image stream tag from internal registry',
    },
};
const getSortedTags = (imageStream) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"](imageStream.status.tags) && imageStream.status.tags.length
        ? imageStream.status.tags.sort(({ tag: a }, { tag: b }) => {
            const v1 = semver__WEBPACK_IMPORTED_MODULE_1__["coerce"](a);
            const v2 = semver__WEBPACK_IMPORTED_MODULE_1__["coerce"](b);
            if (!v1 && !v2) {
                return a.localeCompare(b);
            }
            if (!v1) {
                return 1;
            }
            if (!v2) {
                return -1;
            }
            return semver__WEBPACK_IMPORTED_MODULE_1__["rcompare"](v1, v2);
        })
        : [];
};
const getImageStreamTags = (imageStream) => {
    const sortedTags = imageStream && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](imageStream) ? getSortedTags(imageStream) : [];
    return sortedTags.reduce((tags, { tag }) => {
        tags[tag] = tag;
        return tags;
    }, {});
};
const getProjectResource = () => {
    return [
        {
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ProjectModel"].kind,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ProjectModel"].id,
        },
    ];
};
const getImageStreamResource = (namespace) => {
    const resource = [];
    if (namespace) {
        resource.push({
            isList: true,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ImageStreamModel"].kind,
            prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ImageStreamModel"].id,
            namespace,
        });
    }
    return resource;
};


/***/ }),

/***/ "./packages/dev-console/src/utils/resource-label-utils.ts":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/utils/resource-label-utils.ts ***!
  \****************************************************************/
/*! exports provided: getAppLabels, getGitAnnotations, getCommonAnnotations, getTriggerAnnotation, getPodLabels, mergeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppLabels", function() { return getAppLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGitAnnotations", function() { return getGitAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonAnnotations", function() { return getCommonAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerAnnotation", function() { return getTriggerAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodLabels", function() { return getPodLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const getAppLabels = (name, application, imageStreamName, selectedTag, namespace) => {
    const labels = Object.assign({ app: name, 'app.kubernetes.io/instance': name, 'app.kubernetes.io/component': name }, (imageStreamName && {
        'app.kubernetes.io/name': imageStreamName,
        'app.openshift.io/runtime': imageStreamName,
    }));
    if (application && application.trim().length > 0) {
        labels['app.kubernetes.io/part-of'] = application;
    }
    if (selectedTag) {
        labels['app.openshift.io/runtime-version'] = selectedTag;
    }
    if (namespace) {
        labels['app.openshift.io/runtime-namespace'] = namespace;
    }
    return labels;
};
const getGitAnnotations = (gitURL, gitRef) => {
    const ref = gitRef || 'master';
    return {
        'app.openshift.io/vcs-uri': gitURL,
        'app.openshift.io/vcs-ref': ref,
    };
};
const getCommonAnnotations = () => {
    return {
        'openshift.io/generated-by': 'OpenShiftWebConsole',
    };
};
const getTriggerAnnotation = (name, namespace, imageTrigger, tag = 'latest') => ({
    [_console_shared__WEBPACK_IMPORTED_MODULE_1__["TRIGGERS_ANNOTATION"]]: JSON.stringify([
        {
            from: { kind: 'ImageStreamTag', name: `${name}:${tag}`, namespace },
            fieldPath: `spec.template.spec.containers[?(@.name=="${name}")].image`,
            pause: `${!imageTrigger}`,
        },
    ]),
});
const getPodLabels = (name) => {
    return {
        app: name,
        deploymentconfig: name,
    };
};
const mergeData = (originalResource, newResource) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const mergedData = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, originalResource || {}, newResource);
    mergedData.metadata.labels = newResource.metadata.labels;
    if (mergedData.metadata.annotations) {
        mergedData.metadata.annotations = newResource.metadata.annotations;
    }
    if ((_c = (_b = (_a = mergedData.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.labels) {
        mergedData.spec.template.metadata.labels = (_f = (_e = (_d = newResource.spec) === null || _d === void 0 ? void 0 : _d.template) === null || _e === void 0 ? void 0 : _e.metadata) === null || _f === void 0 ? void 0 : _f.labels;
    }
    if ((_j = (_h = (_g = mergedData.spec) === null || _g === void 0 ? void 0 : _g.template) === null || _h === void 0 ? void 0 : _h.spec) === null || _j === void 0 ? void 0 : _j.containers) {
        mergedData.spec.template.spec.containers = newResource.spec.template.spec.containers;
    }
    if ((_k = mergedData === null || mergedData === void 0 ? void 0 : mergedData.spec) === null || _k === void 0 ? void 0 : _k.strategy) {
        mergedData.spec.strategy = newResource.spec.strategy;
    }
    if ((_l = mergedData.spec) === null || _l === void 0 ? void 0 : _l.triggers) {
        mergedData.spec.triggers = newResource.spec.triggers;
    }
    return mergedData;
};


/***/ }),

/***/ "./packages/dev-console/src/utils/shared-submit-utils.ts":
/*!***************************************************************!*\
  !*** ./packages/dev-console/src/utils/shared-submit-utils.ts ***!
  \***************************************************************/
/*! exports provided: dryRunOpt, createService, createRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dryRunOpt", function() { return dryRunOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createService", function() { return createService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoute", function() { return createRoute; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _resource_label_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-label-utils */ "./packages/dev-console/src/utils/resource-label-utils.ts");
/* harmony import */ var _imagestream_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");



const dryRunOpt = { queryParams: { dryRun: 'All' } };
const isDeployImageFormData = (formData) => {
    return 'isi' in formData;
};
const createService = (formData, imageStreamData, originalService) => {
    const { project: { name: namespace }, application: { name: application }, name, labels: userLabels, image: { ports: imagePorts, tag: imageTag }, } = formData;
    const imageStreamName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStreamData, 'metadata.name') || lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'image.name');
    const git = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'git');
    const defaultLabels = Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getAppLabels"])(name, application, imageStreamName, imageTag);
    const podLabels = Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getPodLabels"])(name);
    const defaultAnnotations = git
        ? Object.assign(Object.assign({}, Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getGitAnnotations"])(git.url, git.ref)), Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getCommonAnnotations"])()) : Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getCommonAnnotations"])();
    let ports = imagePorts;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'build.strategy') === 'Docker') {
        const port = { containerPort: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'docker.containerPort'), protocol: 'TCP' };
        ports = [port];
    }
    else if (isDeployImageFormData(formData)) {
        const { isi: { ports: isiPorts }, } = formData;
        ports = isiPorts;
    }
    const newService = {
        kind: 'Service',
        apiVersion: 'v1',
        metadata: {
            name,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
            annotations: Object.assign({}, defaultAnnotations),
        },
        spec: {
            selector: podLabels,
            ports: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](ports, (port) => ({
                port: port.containerPort,
                targetPort: port.containerPort,
                protocol: port.protocol,
                // Use the same naming convention as CLI new-app.
                name: Object(_imagestream_utils__WEBPACK_IMPORTED_MODULE_2__["makePortName"])(port),
            })),
        },
    };
    const service = Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["mergeData"])(originalService, newService);
    return service;
};
const createRoute = (formData, imageStreamData, originalRoute) => {
    const { project: { name: namespace }, application: { name: application }, name, labels: userLabels, route: { hostname, secure, path, tls, targetPort: routeTargetPort }, image: { ports: imagePorts, tag: imageTag }, } = formData;
    const imageStreamName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](imageStreamData, 'metadata.name') || lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'image.name');
    const git = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'git');
    const defaultLabels = Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getAppLabels"])(name, application, imageStreamName, imageTag);
    const defaultAnnotations = git
        ? Object.assign(Object.assign({}, Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getGitAnnotations"])(git.url, git.ref)), Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getCommonAnnotations"])()) : Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["getCommonAnnotations"])();
    let ports = imagePorts;
    if (isDeployImageFormData(formData)) {
        const { isi: { ports: isiPorts }, } = formData;
        ports = isiPorts;
    }
    let targetPort;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'build.strategy') === 'Docker') {
        const port = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](formData, 'docker.containerPort');
        targetPort = Object(_imagestream_utils__WEBPACK_IMPORTED_MODULE_2__["makePortName"])({
            containerPort: lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](port),
            protocol: 'TCP',
        });
    }
    else {
        targetPort = routeTargetPort || Object(_imagestream_utils__WEBPACK_IMPORTED_MODULE_2__["makePortName"])(lodash__WEBPACK_IMPORTED_MODULE_0__["head"](ports));
    }
    const newRoute = {
        kind: 'Route',
        apiVersion: 'route.openshift.io/v1',
        metadata: {
            name,
            namespace,
            labels: Object.assign(Object.assign({}, defaultLabels), userLabels),
            defaultAnnotations,
        },
        spec: Object.assign(Object.assign({ to: {
                kind: 'Service',
                name,
            } }, (secure ? { tls } : {})), { host: hostname, path, 
            // The service created by `createService` uses the same port as the container port.
            port: {
                // Use the port name, not the number for targetPort. The router looks
                // at endpoints, not services, when resolving ports, so port numbers
                // will not resolve correctly if the service port and container port
                // numbers don't match.
                targetPort,
            }, wildcardPolicy: 'None' }),
    };
    const route = Object(_resource_label_utils__WEBPACK_IMPORTED_MODULE_1__["mergeData"])(originalRoute, newRoute);
    return route;
};


/***/ })

}]);
//# sourceMappingURL=basicauth-idp-form~dev-console-deployImage~dev-console-edit~dev-console-import~dev-console-projectDe~08afbe14-1c4d1697d3712517ce79.js.map