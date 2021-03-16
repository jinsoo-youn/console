(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision~dev-console-deployImage~dev-console-edit~dev-console-import~dev-console-modals~dev-c~b1c2fcd2"],{

/***/ "./packages/dev-console/src/utils/application-utils.ts":
/*!*************************************************************!*\
  !*** ./packages/dev-console/src/utils/application-utils.ts ***!
  \*************************************************************/
/*! exports provided: sanitizeApplicationValue, edgesFromAnnotations, edgesFromServiceBinding, updateResourceApplication, createServiceBinding, removeServiceBinding, createResourceConnection, removeResourceConnection, cleanUpWorkload, doContextualBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeApplicationValue", function() { return sanitizeApplicationValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edgesFromAnnotations", function() { return edgesFromAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edgesFromServiceBinding", function() { return edgesFromServiceBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResourceApplication", function() { return updateResourceApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServiceBinding", function() { return createServiceBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeServiceBinding", function() { return removeServiceBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceConnection", function() { return createResourceConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeResourceConnection", function() { return removeResourceConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUpWorkload", function() { return cleanUpWorkload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doContextualBinding", function() { return doContextualBinding; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_knative_plugin_src_utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/knative-plugin/src/utils/fetch-dynamic-eventsources-utils */ "./packages/knative-plugin/src/utils/fetch-dynamic-eventsources-utils.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _components_import_import_validation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/import/import-validation-utils */ "./packages/dev-console/src/components/import/import-validation-utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./packages/dev-console/src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const sanitizeApplicationValue = (application, applicationType = application) => {
    switch (applicationType) {
        case _const__WEBPACK_IMPORTED_MODULE_8__["UNASSIGNED_KEY"]:
        case _const__WEBPACK_IMPORTED_MODULE_8__["CREATE_APPLICATION_KEY"]:
            return '';
        default:
            return application;
    }
};
const edgesFromAnnotations = (annotations) => {
    let edges = [];
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](annotations, ['app.openshift.io/connects-to'])) {
        try {
            edges = JSON.parse(annotations['app.openshift.io/connects-to']);
        }
        catch (e) {
            // connects-to annotation should hold a JSON string value but failed to parse
            // treat value as a comma separated list of strings
            edges = annotations['app.openshift.io/connects-to'].split(',').map((v) => v.trim());
        }
    }
    return edges;
};
const edgesFromServiceBinding = (source, sbrs) => {
    const sourceBindings = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](sbrs, (sbr) => {
        let edgeExists = false;
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](sbr, 'spec.applicationSelector.resource') === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(source)).plural) {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](sbr, 'spec.applicationSelector.resourceRef') === source.metadata.name) {
                edgeExists = true;
            }
            else {
                const matchLabels = lodash__WEBPACK_IMPORTED_MODULE_0__["has"](sbr, 'spec.applicationSelector.matchLabels');
                if (matchLabels) {
                    const sbrSelector = new _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["LabelSelector"](sbr.spec.applicationSelector);
                    if (sbrSelector.matches(source)) {
                        edgeExists = true;
                    }
                }
            }
        }
        edgeExists && sourceBindings.push(sbr);
    });
    return sourceBindings;
};
const listInstanceResources = (namespace, instanceName, labelSelector = {}) => {
    const lists = [];
    const instanceLabelSelector = Object.assign({ 'app.kubernetes.io/instance': instanceName }, labelSelector);
    const kinds = ['ReplicationController', 'Route', 'Service', 'ReplicaSet', 'BuildConfig', 'Build'];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](kinds, (kind) => {
        lists.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sList"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(kind), {
            ns: namespace,
            labelSelector: instanceLabelSelector,
        }).then((values) => {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](values, (value) => {
                value.kind = kind;
                return value;
            });
        }));
    });
    return Promise.all(lists);
};
// Updates the resource's labels to set its application grouping
const updateItemAppLabel = (resourceKind, item, application) => {
    const labels = Object.assign(Object.assign({}, item.metadata.labels), { 'app.kubernetes.io/part-of': application || undefined });
    if (!resourceKind) {
        return Promise.reject();
    }
    const patch = [
        {
            op: lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](labels) ? 'add' : 'replace',
            path: '/metadata/labels',
            value: labels,
        },
    ];
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sPatch"])(resourceKind, item, patch);
};
// Updates the given resource and its associated resources to the given application grouping
const updateResourceApplication = (resourceKind, resource, application) => {
    if (!resource) {
        return Promise.reject(new Error('Error: no resource provided to update application for.'));
    }
    if (!resourceKind) {
        return Promise.reject(new Error('Error: invalid resource kind provided for updating application.'));
    }
    const instanceName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['metadata', 'labels', 'app.kubernetes.io/instance']);
    const prevApplication = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['metadata', 'labels', 'app.kubernetes.io/part-of']);
    const patches = [updateItemAppLabel(resourceKind, resource, application)];
    // If there is no instance label, only update this item
    if (!instanceName) {
        return Promise.all(patches);
    }
    // selector is for the instance name and current application if there is one
    const labelSelector = {
        'app.kubernetes.io/instance': instanceName,
    };
    if (prevApplication) {
        labelSelector['app.kubernetes.io/part-of'] = prevApplication;
    }
    // Update all the instance's resources that were part of the previous application
    return listInstanceResources(resource.metadata.namespace, instanceName, {
        'app.kubernetes.io/part-of': prevApplication,
    }).then((listsValue) => {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](listsValue, (list) => {
            lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](list, (item) => {
                // verify the case of no previous application
                if (prevApplication || !lodash__WEBPACK_IMPORTED_MODULE_0__["get"](item, ['metadata', 'labels', 'app.kubernetes.io/part-of'])) {
                    patches.push(updateItemAppLabel(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(item.kind), item, application));
                }
            });
        });
        return Promise.all(patches);
    });
};
// Updates the item to add an new connect's to value replacing an old value if provided
const updateItemAppConnectTo = (item, connections, connectValue, oldValueIndex) => {
    const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(item) || item.kind);
    if (!model) {
        return Promise.reject(new Error(`Unable to retrieve model for: ${item.kind}`));
    }
    const tags = lodash__WEBPACK_IMPORTED_MODULE_0__["toPairs"](item.metadata.annotations);
    let op = lodash__WEBPACK_IMPORTED_MODULE_0__["size"](tags) ? 'replace' : 'add';
    const existingTag = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](tags, (tag) => tag[0] === 'app.openshift.io/connects-to');
    if (existingTag) {
        if (connections.includes(connectValue)) {
            return Promise.resolve();
        }
        if (!connectValue) {
            lodash__WEBPACK_IMPORTED_MODULE_0__["pullAt"](connections, [oldValueIndex]);
        }
        else if (oldValueIndex >= 0) {
            connections[oldValueIndex] = connectValue;
        }
        else {
            connections.push(connectValue);
        }
        existingTag[1] = lodash__WEBPACK_IMPORTED_MODULE_0__["size"](connections) && JSON.stringify(connections);
        if (!existingTag[1]) {
            lodash__WEBPACK_IMPORTED_MODULE_0__["remove"](tags, (tag) => tag === existingTag);
            if (!lodash__WEBPACK_IMPORTED_MODULE_0__["size"](tags)) {
                op = 'remove';
            }
        }
    }
    else {
        if (!connectValue) {
            // Removed connection not found, no need to remove
            return Promise.resolve();
        }
        const connectionTag = [
            'app.openshift.io/connects-to',
            JSON.stringify([connectValue]),
        ];
        tags.push(connectionTag);
    }
    const patch = [{ path: '/metadata/annotations', op, value: lodash__WEBPACK_IMPORTED_MODULE_0__["fromPairs"](tags) }];
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sPatch"])(model, item, patch);
};
const createServiceBinding = (source, target) => {
    if (!source || !target || source === target) {
        return Promise.reject();
    }
    const targetName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](target, 'metadata.name');
    const sourceName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](source, 'metadata.name');
    const namespace = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](source, 'metadata.namespace');
    const sourceGroup = lodash__WEBPACK_IMPORTED_MODULE_0__["split"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](source, 'apiVersion'), '/');
    const targetResourceGroup = lodash__WEBPACK_IMPORTED_MODULE_0__["split"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](target, 'metadata.ownerReferences[0].apiVersion'), '/');
    const targetResourceKind = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](target, 'metadata.ownerReferences[0].kind');
    const targetResourceRefName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](target, 'metadata.ownerReferences[0].name');
    const sbrName = `${sourceName}-${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(source)).abbr}-${targetName}-${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(target.kind).abbr}`;
    const serviceBindingRequest = {
        apiVersion: 'apps.openshift.io/v1alpha1',
        kind: 'ServiceBindingRequest',
        metadata: {
            name: sbrName,
            namespace,
        },
        spec: {
            applicationSelector: {
                resourceRef: sourceName,
                group: sourceGroup[0],
                version: sourceGroup[1],
                resource: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(source)).plural,
            },
            backingServiceSelector: {
                group: targetResourceGroup[0],
                version: targetResourceGroup[1],
                kind: targetResourceKind,
                resourceRef: targetResourceRefName,
            },
            detectBindingResources: true,
        },
    };
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_10__["ServiceBindingRequestModel"], serviceBindingRequest);
};
const removeServiceBinding = (sbr) => {
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_10__["ServiceBindingRequestModel"], sbr);
};
// Get the index of the replaced target of the visual connector
const getReplacedTargetIndex = (replacedTarget, connections) => {
    var _a, _b, _c;
    if (replacedTarget) {
        const replaceTargetName = (_a = replacedTarget.metadata) === null || _a === void 0 ? void 0 : _a.name;
        const replaceTargetKind = replacedTarget.kind;
        const replaceTargetApiVersion = replacedTarget.apiVersion;
        const replaceValue = {
            apiVersion: replaceTargetApiVersion,
            kind: replaceTargetKind,
            name: replaceTargetName,
        };
        const replaceTargetInstanceName = (_c = (_b = replacedTarget.metadata) === null || _b === void 0 ? void 0 : _b.labels) === null || _c === void 0 ? void 0 : _c['app.kubernetes.io/instance'];
        let index = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](connections, replaceValue);
        if (index === -1) {
            index = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](connections, (connection) => connection === (replaceTargetInstanceName || replaceTargetName));
        }
        return index;
    }
    return -1;
};
// Create a connection from the source to the target replacing the connection to replacedTarget if provided
const createResourceConnection = (source, target, replacedTarget = null) => {
    var _a, _b;
    if (!source || !target || source === target) {
        return Promise.reject();
    }
    const connectTargetName = (_a = target.metadata) === null || _a === void 0 ? void 0 : _a.name;
    const connectTargetKind = target.kind;
    const connectTargetApiVersion = target.apiVersion;
    const connectValue = {
        apiVersion: connectTargetApiVersion,
        kind: connectTargetKind,
        name: connectTargetName,
    };
    const connections = edgesFromAnnotations((_b = source.metadata) === null || _b === void 0 ? void 0 : _b.annotations);
    const replacedTargetIndex = getReplacedTargetIndex(replacedTarget, connections);
    const instanceName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](source, ['metadata', 'labels', 'app.kubernetes.io/instance']);
    const patches = [
        updateItemAppConnectTo(source, connections, connectValue, replacedTargetIndex),
    ];
    // If there is no instance label, only update this item
    if (!instanceName) {
        return Promise.all(patches);
    }
    // Update all the instance's resources that were part of the previous application
    return listInstanceResources(source.metadata.namespace, instanceName).then((listsValue) => {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](listsValue, (list) => {
            lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](list, (item) => {
                patches.push(updateItemAppConnectTo(item, connections, connectValue, replacedTargetIndex));
            });
        });
        return Promise.all(patches);
    });
};
// Remove the connection from the source to the target
const removeResourceConnection = (source, target) => {
    var _a;
    if (!source || !target || source === target) {
        return Promise.reject();
    }
    const connections = edgesFromAnnotations((_a = source.metadata) === null || _a === void 0 ? void 0 : _a.annotations);
    const replacedTargetIndex = getReplacedTargetIndex(target, connections);
    const instanceName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](source, ['metadata', 'labels', 'app.kubernetes.io/instance']);
    const patches = [
        updateItemAppConnectTo(source, connections, null, replacedTargetIndex),
    ];
    // If there is no instance label, only update this item
    if (!instanceName) {
        return Promise.all(patches);
    }
    // Update all the instance's resources that were part of the previous application
    return listInstanceResources(source.metadata.namespace, instanceName).then((listsValue) => {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](listsValue, (list) => {
            lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](list, (item) => {
                patches.push(updateItemAppConnectTo(item, connections, null, replacedTargetIndex));
            });
        });
        return Promise.all(patches);
    });
};
const safeKill = (model, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["checkAccess"])({
        group: model.apiGroup,
        resource: model.plural,
        verb: 'delete',
        name: obj.metadata.name,
        namespace: obj.metadata.namespace,
    });
    if (resp.status.allowed) {
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sKill"])(model, obj);
    }
    return null;
});
const deleteWebhooks = (resource, workload) => {
    var _a, _b, _c, _d, _e;
    const isKnativeResource = (_b = (_a = workload === null || workload === void 0 ? void 0 : workload.data) === null || _a === void 0 ? void 0 : _a.isKnativeResource) !== null && _b !== void 0 ? _b : false;
    const deploymentsAnnotations = (_d = (_c = resource.metadata) === null || _c === void 0 ? void 0 : _c.annotations) !== null && _d !== void 0 ? _d : {};
    const gitType = Object(_components_import_import_validation_utils__WEBPACK_IMPORTED_MODULE_9__["detectGitType"])(deploymentsAnnotations['app.openshift.io/vcs-uri']);
    const buildConfigs = (_e = workload === null || workload === void 0 ? void 0 : workload.resources) === null || _e === void 0 ? void 0 : _e.buildConfigs;
    return buildConfigs === null || buildConfigs === void 0 ? void 0 : buildConfigs.reduce((requests, bc) => {
        var _a, _b;
        const triggers = (_b = (_a = bc.spec) === null || _a === void 0 ? void 0 : _a.triggers) !== null && _b !== void 0 ? _b : [];
        const reqs = triggers.reduce((a, t) => {
            var _a, _b;
            let obj;
            const webhookType = t.generic ? 'generic' : gitType;
            const webhookTypeObj = t.generic || (!isKnativeResource && t[gitType]);
            if (webhookTypeObj) {
                obj = Object.assign(Object.assign({}, resource), { metadata: {
                        name: (_b = (_a = webhookTypeObj.secretReference) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : `${resource.metadata.name}-${webhookType}-webhook-secret`,
                        namespace: resource.metadata.namespace,
                    } });
            }
            return obj ? [...a, safeKill(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["SecretModel"], obj)] : a;
        }, []);
        return [...requests, ...reqs];
    }, []);
};
const cleanUpWorkload = (resource, workload) => {
    var _a;
    const reqs = [];
    const isBuildConfigPresent = !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]((_a = workload === null || workload === void 0 ? void 0 : workload.resources) === null || _a === void 0 ? void 0 : _a.buildConfigs);
    const deleteModels = [_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ServiceModel"], _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"]];
    const knativeDeleteModels = [_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"], _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["RouteModel"], _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamModel"]];
    if (isBuildConfigPresent) {
        deleteModels.push(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["BuildConfigModel"]);
        knativeDeleteModels.push(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["BuildConfigModel"]);
    }
    const resourceData = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](resource);
    const deleteRequest = (model, resourceObj) => {
        const req = safeKill(model, resourceObj);
        req && reqs.push(req);
    };
    const batchDeleteRequests = (models, resourceObj) => {
        models.forEach((model) => deleteRequest(model, resourceObj));
    };
    if (Object(_console_knative_plugin_src_utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_5__["isDynamicEventResourceKind"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource)))
        deleteRequest(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource)), resource);
    switch (resource.kind) {
        case _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["DaemonSetModel"].kind:
        case _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["StatefulSetModel"].kind:
            deleteRequest(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(resource.kind), resource);
            break;
        case _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentModel"].kind:
        case _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentConfigModel"].kind:
            deleteRequest(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(resource.kind), resource);
            batchDeleteRequests(deleteModels, resource);
            deleteRequest(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamModel"], resource); // delete imageStream
            break;
        case _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].kind:
            batchDeleteRequests(knativeDeleteModels, resourceData);
            break;
        default:
            break;
    }
    isBuildConfigPresent && reqs.push(...deleteWebhooks(resource, workload));
    return Promise.all(reqs);
};
const doContextualBinding = (resources, contextualSource, serviceBindingAvailable = false) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    if (!contextualSource) {
        return Promise.reject(new Error('Cannot do a contextual binding without a source'));
    }
    const linkingModelRefs = [
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentConfigModel"]),
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentModel"]),
    ];
    const newResource = resources.find((resource) => linkingModelRefs.includes(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource)));
    if (!newResource) {
        // Not a resource we want to connect to
        return resources;
    }
    const { metadata: { namespace }, } = newResource;
    const [groupVersionKind, resourceName] = contextualSource.split('/');
    const contextualResource = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(groupVersionKind), resourceName, namespace);
    if (!contextualResource) {
        return Promise.reject(new Error(`Cannot find resource (${contextualSource}) to do a contextual binding to`));
    }
    if (serviceBindingAvailable) {
        const operatorBackedServiceKindMap = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getOperatorBackedServiceKindMap"])(yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sList"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_3__["ClusterServiceVersionModel"], { ns: namespace }));
        const ownerResourceKind = (_c = (_b = (_a = newResource === null || newResource === void 0 ? void 0 : newResource.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.kind;
        const isOperatorBacked = ownerResourceKind in operatorBackedServiceKindMap;
        if (isOperatorBacked) {
            yield createServiceBinding(contextualResource, newResource);
        }
    }
    yield createResourceConnection(contextualResource, newResource);
    return resources;
});


/***/ })

}]);
//# sourceMappingURL=delete-revision~dev-console-deployImage~dev-console-edit~dev-console-import~dev-console-modals~dev-c~b1c2fcd2-8e54593b21c15e4b22bc.js.map