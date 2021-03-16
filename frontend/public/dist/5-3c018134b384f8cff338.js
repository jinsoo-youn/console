(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./public/components/hypercloud/sidebars/resource-sidebar-samples.tsx":
/*!****************************************************************************!*\
  !*** ./public/components/hypercloud/sidebars/resource-sidebar-samples.tsx ***!
  \****************************************************************************/
/*! exports provided: hyperCloudSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyperCloudSamples", function() { return hyperCloudSamples; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

// import {
// apiVersionForModel,
//     K8sKind,
//     referenceForModel
// } from '../../../module/k8s';
// const getTargetResource = (model: K8sKind) => ({
//     apiVersion: apiVersionForModel(model),
//     kind: model.kind,
// });
const hyperCloudSamples = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])();


/***/ }),

/***/ "./public/components/sidebars/explore-type-sidebar.tsx":
/*!*************************************************************!*\
  !*** ./public/components/sidebars/explore-type-sidebar.tsx ***!
  \*************************************************************/
/*! exports provided: ExploreType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreType", function() { return ExploreType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");





const getRef = (definition) => {
    const ref = definition.$ref || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](definition, 'items.$ref');
    const re = /^#\/definitions\//;
    // Only follow JSON pointers, not external URI references.
    return ref && re.test(ref) ? ref.replace(re, '') : null;
};
const ExploreType = (props) => {
    // Track the previously selected items to build breadcrumbs. Each history
    // entry contains the name, description, and path to the definition in the
    // OpenAPI document.
    const [drilldownHistory, setDrilldownHistory] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const { kindObj } = props;
    if (!kindObj) {
        return null;
    }
    const allDefinitions = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["getStoredSwagger"])();
    if (!allDefinitions) {
        return null;
    }
    const currentSelection = lodash_es__WEBPACK_IMPORTED_MODULE_1__["last"](drilldownHistory);
    // Show the current selected property or the top-level definition for the kind.
    const currentPath = currentSelection
        ? currentSelection.path
        : [Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["getDefinitionKey"])(kindObj, allDefinitions)];
    const currentDefinition = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, currentPath) || {};
    const currentProperties = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](currentDefinition, 'properties') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](currentDefinition, 'items.properties');
    // Prefer the description saved in `currentSelection`. It won't always be defined in the definition itself.
    const description = currentSelection
        ? currentSelection.description
        : currentDefinition.description;
    const required = new Set(currentDefinition.required || []);
    const breadcrumbs = drilldownHistory.length
        ? [kindObj.kind, ...lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](drilldownHistory, 'name')]
        : [];
    const drilldown = (e, name, desc, path) => {
        e.preventDefault();
        setDrilldownHistory([...drilldownHistory, { name, description: desc, path }]);
        if (props.scrollTop) {
            props.scrollTop();
        }
    };
    const breadcrumbClicked = (e, i) => {
        e.preventDefault();
        setDrilldownHistory(lodash_es__WEBPACK_IMPORTED_MODULE_1__["take"](drilldownHistory, i));
    };
    // Get the path in the swagger document to additional property details for drilldown.
    // This can be
    // - A reference to another top-level definition
    // - Inline property declartions
    // - Inline property declartions for array items
    const getDrilldownPath = (name) => {
        const path = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["getSwaggerPath"])(allDefinitions, currentPath, name, true);
        // Only allow drilldown if the reference has additional properties to explore.
        const child = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, path);
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](child, 'properties') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](child, 'items.properties') ? path : null;
    };
    // Get the type to display for a property reference.
    const getTypeForRef = (ref) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, [ref, 'format']) || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, [ref, 'type']);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](breadcrumbs) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], { className: "pf-c-breadcrumb--no-padding-top co-break-word" }, breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], { key: i, isActive: isLast }, isLast ? (crumb) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", onClick: (e) => breadcrumbClicked(e, i), isInline: true, variant: "link" }, crumb))));
        }))),
        description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-break-word co-pre-wrap" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LinkifyExternal"], null, description))),
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](currentProperties) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["EmptyBox"], { label: "Properties" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "co-resource-sidebar-list" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](currentProperties, (definition, name) => {
            const path = getDrilldownPath(name);
            const definitionType = definition.type || getTypeForRef(getRef(definition));
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: name, className: "co-resource-sidebar-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "co-resource-sidebar-item__header co-break-word" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["CamelCaseWrap"], { value: name }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-break-word" }, definitionType),
                        required.has(name) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " \u2013 required"))),
                definition.description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-break-word co-pre-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LinkifyExternal"], null, definition.description))),
                path && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", onClick: (e) => drilldown(e, name, definition.description, path), isInline: true, variant: "link" }, "View details"))));
        })))));
};


/***/ }),

/***/ "./public/components/sidebars/resource-sidebar-samples.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/sidebars/resource-sidebar-samples.tsx ***!
  \*****************************************************************/
/*! exports provided: getResourceSidebarSamples, ResourceSidebarSnippets, ResourceSidebarSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceSidebarSamples", function() { return getResourceSidebarSamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSidebarSnippets", function() { return ResourceSidebarSnippets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSidebarSamples", function() { return ResourceSidebarSamples; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-monaco-editor */ "./node_modules/react-monaco-editor/lib/index.js");
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_monaco_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _imgs_network_policy_samples_1_deny_other_namespaces_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../imgs/network-policy-samples/1-deny-other-namespaces.svg */ "./public/imgs/network-policy-samples/1-deny-other-namespaces.svg");
/* harmony import */ var _imgs_network_policy_samples_1_deny_other_namespaces_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_1_deny_other_namespaces_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _imgs_network_policy_samples_2_limit_certain_apps_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../imgs/network-policy-samples/2-limit-certain-apps.svg */ "./public/imgs/network-policy-samples/2-limit-certain-apps.svg");
/* harmony import */ var _imgs_network_policy_samples_2_limit_certain_apps_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_2_limit_certain_apps_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _imgs_network_policy_samples_3_allow_ingress_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imgs/network-policy-samples/3-allow-ingress.svg */ "./public/imgs/network-policy-samples/3-allow-ingress.svg");
/* harmony import */ var _imgs_network_policy_samples_3_allow_ingress_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_3_allow_ingress_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _imgs_network_policy_samples_4_default_deny_all_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../imgs/network-policy-samples/4-default-deny-all.svg */ "./public/imgs/network-policy-samples/4-default-deny-all.svg");
/* harmony import */ var _imgs_network_policy_samples_4_default_deny_all_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_4_default_deny_all_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _imgs_network_policy_samples_5_web_allow_external_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imgs/network-policy-samples/5-web-allow-external.svg */ "./public/imgs/network-policy-samples/5-web-allow-external.svg");
/* harmony import */ var _imgs_network_policy_samples_5_web_allow_external_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_5_web_allow_external_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _imgs_network_policy_samples_6_web_db_allow_all_ns_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../imgs/network-policy-samples/6-web-db-allow-all-ns.svg */ "./public/imgs/network-policy-samples/6-web-db-allow-all-ns.svg");
/* harmony import */ var _imgs_network_policy_samples_6_web_db_allow_all_ns_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_6_web_db_allow_all_ns_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _imgs_network_policy_samples_7_web_allow_production_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../imgs/network-policy-samples/7-web-allow-production.svg */ "./public/imgs/network-policy-samples/7-web-allow-production.svg");
/* harmony import */ var _imgs_network_policy_samples_7_web_allow_production_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_imgs_network_policy_samples_7_web_allow_production_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hypercloud_sidebars_resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hypercloud/sidebars/resource-sidebar-samples */ "./public/components/hypercloud/sidebars/resource-sidebar-samples.tsx");
















const getTargetResource = (model) => ({
    apiVersion: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["apiVersionForModel"])(model),
    kind: model.kind,
});
const clusterRoleBindingSamples = [
    {
        title: 'Allow reading Nodes in the core API groups (for ClusterRoleBinding)',
        description: 'This "ClusterRole" is allowed to read the resource "nodes" in the core group (because a Node is cluster-scoped, this must be bound with a "ClusterRoleBinding" to be effective).',
        id: 'read-nodes',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterRoleModel"]),
    },
    {
        title: '"GET/POST" requests to non-resource endpoint and all subpaths (for ClusterRoleBinding)',
        description: 'This "ClusterRole" is allowed to "GET" and "POST" requests to the non-resource endpoint "/healthz" and all subpaths (must be in the "ClusterRole" bound with a "ClusterRoleBinding" to be effective).',
        id: 'get-and-post-to-non-resource-endpoints',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterRoleModel"]),
    },
];
const defaultSamples = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])()
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["BuildConfigModel"])], [
    {
        title: 'Build from Dockerfile',
        description: 'A Dockerfile build performs an image build using a Dockerfile in the source repository or specified in build configuration.',
        id: 'docker-build',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["BuildConfigModel"]),
    },
    {
        title: 'Source-to-Image (S2I) build',
        description: 'S2I is a tool for building reproducible container images. It produces ready-to-run images by injecting the application source into a container image and assembling a new image.',
        id: 's2i-build',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["BuildConfigModel"]),
    },
])
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"])], [
    {
        highlightText: 'Limit',
        title: 'access to the current namespace',
        img: _imgs_network_policy_samples_1_deny_other_namespaces_svg__WEBPACK_IMPORTED_MODULE_8__,
        description: 'Deny traffic from other namespaces while allowing all traffic from the namespaces the Pod is living in.',
        id: 'deny-other-namespaces',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
    {
        highlightText: 'Limit',
        title: 'traffic to an application within the same namespace',
        img: _imgs_network_policy_samples_2_limit_certain_apps_svg__WEBPACK_IMPORTED_MODULE_9__,
        description: 'Allow inbound traffic from only certain Pods. One typical use case is to restrict the connections to a database only to the specific applications.',
        id: 'db-or-api-allow-app',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
    {
        highlightText: 'Allow',
        title: 'http and https ingress within the same namespace',
        img: _imgs_network_policy_samples_3_allow_ingress_svg__WEBPACK_IMPORTED_MODULE_10__,
        description: 'Define ingress rules for specific port numbers of an application. The rule applies to all port numbers if not specified.',
        id: 'api-allow-http-and-https',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
    {
        highlightText: 'Deny',
        title: 'all non-whitelisted traffic in the current namespace',
        img: _imgs_network_policy_samples_4_default_deny_all_svg__WEBPACK_IMPORTED_MODULE_11__,
        description: 'A fundamental policy by blocking all cross-pod traffics expect whitelisted ones through the other Network Policies being deployed.',
        id: 'default-deny-all',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
    {
        highlightText: 'Allow',
        title: 'traffic from external clients',
        img: _imgs_network_policy_samples_5_web_allow_external_svg__WEBPACK_IMPORTED_MODULE_12__,
        description: 'Allow external service from public Internet directly or through a Load Balancer to access the pod.',
        id: 'web-allow-external',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
    {
        highlightText: 'Allow',
        title: 'traffic to an application from all namespaces',
        img: _imgs_network_policy_samples_6_web_db_allow_all_ns_svg__WEBPACK_IMPORTED_MODULE_13__,
        description: 'One typical use case is for a common database which is used by deployments in different namespaces.',
        id: 'web-db-allow-all-ns',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
    {
        highlightText: 'Allow',
        title: 'traffic from all pods in a particular namespace',
        img: _imgs_network_policy_samples_7_web_allow_production_svg__WEBPACK_IMPORTED_MODULE_14__,
        description: 'Typical use case should be "only allow deployments in production namespaces to access the database" or "allow monitoring tools (in another namespace) to scrape metrics from current namespace."',
        id: 'web-allow-production',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["NetworkPolicyModel"]),
    },
])
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ResourceQuotaModel"])], [
    {
        title: 'Set compute resource quota',
        description: 'Limit the total amount of memory and CPU that can be used in a namespace.',
        id: 'rq-compute',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ResourceQuotaModel"]),
    },
    {
        title: 'Set maximum count for any resource',
        description: 'Restrict maximum count of each resource so users cannot create more than the allotted amount.',
        id: 'rq-counts',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ResourceQuotaModel"]),
    },
    {
        title: 'Specify resource quotas for a given storage class',
        description: 'Limit the size and number of persistent volume claims that can be created with a storage class.',
        id: 'rq-storageclass',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ResourceQuotaModel"]),
    },
])
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["RoleModel"])], [
    {
        title: 'Allow reading the resource in API group',
        description: 'This "Role" is allowed to read the resource "Pods" in the core API group.',
        id: 'read-pods-within-ns',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["RoleModel"]),
    },
    {
        title: 'Allow reading/writing the resource in API group',
        description: 'This "Role" is allowed to read and write the "Deployments" in both the "extensions" and "apps" API groups.',
        id: 'read-write-deployment-in-ext-and-apps-apis',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["RoleModel"]),
    },
    {
        title: 'Allow different access rights to different types of resource and API groups',
        description: 'This "Role" is allowed to read "Pods" and read/write "Jobs" resources in API groups.',
        id: 'read-pods-and-read-write-jobs',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["RoleModel"]),
    },
    {
        title: 'Allow reading a ConfigMap in a specific namespace (for RoleBinding)',
        description: 'This "Role" is allowed to read a "ConfigMap" named "my-config" (must be bound with a "RoleBinding" to limit to a single "ConfigMap" in a single namespace).',
        id: 'read-configmap-within-ns',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["RoleModel"]),
    },
    ...clusterRoleBindingSamples,
])
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterRoleModel"])], clusterRoleBindingSamples)
    .setIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ConsoleLinkModel"])], [
    {
        title: 'Add a link to the user menu',
        description: 'The user menu appears in the right side of the masthead below the username.',
        id: 'cl-user-menu',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ConsoleLinkModel"]),
    },
    {
        title: 'Add a link to the application menu',
        description: 'The application menu appears in the masthead below the 9x9 grid icon.  Application menu links can include an optional image and section heading.',
        id: 'cl-application-menu',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ConsoleLinkModel"]),
    },
    {
        title: 'Add a link to the namespace dashboard',
        description: 'Namespace dashboard links appear on the project dashboard and namespace details pages in a section called "Launcher".  Namespace dashboard links can optionally be restricted to a specific namespace or namespaces.',
        id: 'cl-namespace-dashboard',
        targetResource: getTargetResource(_models__WEBPACK_IMPORTED_MODULE_6__["ConsoleLinkModel"]),
    },
]);
const getResourceSidebarSamples = (kindObj, yamlSamplesList) => {
    const yamlSamplesData = !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](yamlSamplesList)
        ? lodash_es__WEBPACK_IMPORTED_MODULE_0__["filter"](yamlSamplesList.data, (sample) => sample.spec.targetResource.apiVersion === Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["apiVersionForModel"])(kindObj) &&
            sample.spec.targetResource.kind === kindObj.kind)
        : [];
    const existingSamples = _hypercloud_sidebars_resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_15__["hyperCloudSamples"].get(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(kindObj)) || defaultSamples.get(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(kindObj)) || [];
    const extensionSamples = !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](yamlSamplesData)
        ? yamlSamplesData.map((sample) => {
            return Object.assign({ id: sample.metadata.uid }, sample.spec);
        })
        : [];
    const allSamples = [...existingSamples, ...extensionSamples];
    // For the time being, `snippets` are a superset of `samples`
    const snippets = allSamples.filter((sample) => sample.snippet);
    const samples = allSamples.filter((sample) => !sample.snippet);
    return { snippets, samples };
};
const ResourceSidebarSample = ({ sample, loadSampleYaml, downloadSampleYaml, }) => {
    const { highlightText, title, img, description, id, yaml, targetResource } = sample;
    const reference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(targetResource);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "co-resource-sidebar-item" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", { className: "h4" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-uppercase" }, highlightText),
            " ",
            title),
        img && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: img, className: "co-resource-sidebar-item__img img-responsive" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, description),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "link", isInline: true, onClick: () => loadSampleYaml(id, yaml, reference) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["PasteIcon"], { className: "co-icon-space-r" }),
            "Try it"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "link", isInline: true, className: "pull-right", onClick: () => downloadSampleYaml(id, yaml, reference) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["DownloadIcon"], { className: "co-icon-space-r" }),
            "Download YAML")));
};
const lineHeight = 18;
const PreviewYAML = ({ maxPreviewLines = 20, yaml }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { paddingTop: 10 } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_monaco_editor__WEBPACK_IMPORTED_MODULE_4___default.a, { height: Math.min(yaml.split('\n').length, maxPreviewLines) * lineHeight, language: "yaml", value: yaml, options: {
                lineHeight,
                readOnly: true,
                folding: false,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
            } })));
};
const ResourceSidebarSnippet = ({ snippet, insertSnippetYaml }) => {
    const [yamlPreviewOpen, setYamlPreviewOpen] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const toggleYamlPreview = () => setYamlPreviewOpen(!yamlPreviewOpen);
    const { highlightText, title, id, yaml, targetResource, description } = snippet;
    const reference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(targetResource);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "co-resource-sidebar-item" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", { className: "h4" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-uppercase" }, highlightText),
            " ",
            title),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, description),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "link", isInline: true, onClick: () => insertSnippetYaml(id, yaml, reference) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["PasteIcon"], { className: "co-icon-space-r" }),
            "Insert Snippet"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", className: "pull-right", variant: "link", isInline: true, onClick: () => toggleYamlPreview() }, yamlPreviewOpen ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            "Hide YAML",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["ChevronDownIcon"], { className: "co-icon-space-l" }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            "Show YAML",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["ChevronRightIcon"], { className: "co-icon-space-l" })))),
        yamlPreviewOpen && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PreviewYAML, { yaml: yaml })));
};
const ResourceSidebarSnippets = ({ snippets, insertSnippetYaml }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "co-resource-sidebar-list", style: { listStyle: 'none', paddingLeft: 0 } }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](snippets, (snippet) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResourceSidebarSnippet, { key: snippet.id, snippet: snippet, insertSnippetYaml: insertSnippetYaml })))));
};
const ResourceSidebarSamples = ({ samples, loadSampleYaml, downloadSampleYaml, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ol", { className: "co-resource-sidebar-list" }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](samples, (sample) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResourceSidebarSample, { key: sample.id, sample: sample, loadSampleYaml: loadSampleYaml, downloadSampleYaml: downloadSampleYaml })))));
};


/***/ }),

/***/ "./public/components/sidebars/resource-sidebar.jsx":
/*!*********************************************************!*\
  !*** ./public/components/sidebars/resource-sidebar.jsx ***!
  \*********************************************************/
/*! exports provided: ResourceSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSidebar", function() { return ResourceSidebar; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-sidebar-samples */ "./public/components/sidebars/resource-sidebar-samples.tsx");
/* harmony import */ var _explore_type_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-type-sidebar */ "./public/components/sidebars/explore-type-sidebar.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");








const sidebarScrollTop = () => {
    document.getElementsByClassName('co-p-has-sidebar__sidebar')[0].scrollTop = 0;
};
class ResourceSidebarWrapper extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    render() {
        const { label, children, showSidebar, toggleSidebar, isFloat = false } = this.props;
        if (!showSidebar) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3__('co-p-has-sidebar__sidebar', 'co-p-has-sidebar__sidebar--bordered', 'hidden-sm hidden-xs', { sidebar__details: isFloat }) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body co-p-has-sidebar__sidebar-body", tabIndex: -1 },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", className: "co-p-has-sidebar__sidebar-close", variant: "plain", "aria-label": "Close", onClick: toggleSidebar },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["CloseIcon"], null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", { className: "co-p-has-sidebar__sidebar-heading text-capitalize" }, label),
                children)));
    }
}
const ResourceDetails = props => {
    const { showName, showID, showPodSelector, showNodeSelector, showTolerations, showAnnotations, showOwner, resource } = props;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: resource, showName: showName, showID: showID, showPodSelector: showPodSelector, showNodeSelector: showNodeSelector, showTolerations: showTolerations, showAnnotations: showAnnotations, showOwner: showOwner });
};
const ResourceSchema = ({ kindObj }) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_explore_type_sidebar__WEBPACK_IMPORTED_MODULE_6__["ExploreType"], { kindObj: kindObj, scrollTop: sidebarScrollTop });
const ResourceSamples = ({ samples, kindObj, downloadSampleYaml, loadSampleYaml }) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_5__["ResourceSidebarSamples"], { samples: samples, kindObj: kindObj, downloadSampleYaml: downloadSampleYaml, loadSampleYaml: loadSampleYaml });
const ResourceSnippets = ({ snippets, kindObj, insertSnippetYaml }) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_5__["ResourceSidebarSnippets"], { snippets: snippets, kindObj: kindObj, insertSnippetYaml: insertSnippetYaml });
const ResourceSidebar = props => {
    const { showName, showID, showPodSelector, title, isFloat, showNodeSelector, showTolerations, showAnnotations, showOwner, downloadSampleYaml, kindObj, loadSampleYaml, insertSnippetYaml, isCreateMode, showDetails, toggleSidebar, showSidebar, samples, snippets, resource, showSchema } = props;
    if (!kindObj || !showSidebar) {
        return null;
    }
    const { label } = kindObj;
    const showSamples = !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](samples) && isCreateMode;
    const showSnippets = !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](snippets);
    let tabs = [];
    if (showSamples) {
        tabs.push({
            name: 'Samples',
            component: ResourceSamples,
        });
    }
    if (showSnippets) {
        tabs.push({
            name: 'Snippets',
            component: ResourceSnippets,
        });
    }
    if (showSchema) {
        tabs = [
            {
                name: 'Schema',
                component: ResourceSchema,
            },
            ...tabs,
        ];
    }
    if (showDetails) {
        tabs = [{ name: 'Details', component: ResourceDetails }];
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResourceSidebarWrapper, { label: title || label, showSidebar: showSidebar, isFloat: isFloat, toggleSidebar: toggleSidebar }, tabs.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SimpleTabNav"], { tabs: tabs, tabProps: { showName, showID, showPodSelector, showNodeSelector, showTolerations, showAnnotations, showOwner, downloadSampleYaml, kindObj, loadSampleYaml, insertSnippetYaml, samples, snippets, resource }, additionalClassNames: "co-m-horizontal-nav__menu--within-sidebar" }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResourceSchema, { kindObj: kindObj })));
};


/***/ }),

/***/ "./public/imgs/network-policy-samples/1-deny-other-namespaces.svg":
/*!************************************************************************!*\
  !*** ./public/imgs/network-policy-samples/1-deny-other-namespaces.svg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1-deny-other-namespaces.svg";

/***/ }),

/***/ "./public/imgs/network-policy-samples/2-limit-certain-apps.svg":
/*!*********************************************************************!*\
  !*** ./public/imgs/network-policy-samples/2-limit-certain-apps.svg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2-limit-certain-apps.svg";

/***/ }),

/***/ "./public/imgs/network-policy-samples/3-allow-ingress.svg":
/*!****************************************************************!*\
  !*** ./public/imgs/network-policy-samples/3-allow-ingress.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3-allow-ingress.svg";

/***/ }),

/***/ "./public/imgs/network-policy-samples/4-default-deny-all.svg":
/*!*******************************************************************!*\
  !*** ./public/imgs/network-policy-samples/4-default-deny-all.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/4-default-deny-all.svg";

/***/ }),

/***/ "./public/imgs/network-policy-samples/5-web-allow-external.svg":
/*!*********************************************************************!*\
  !*** ./public/imgs/network-policy-samples/5-web-allow-external.svg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5-web-allow-external.svg";

/***/ }),

/***/ "./public/imgs/network-policy-samples/6-web-db-allow-all-ns.svg":
/*!**********************************************************************!*\
  !*** ./public/imgs/network-policy-samples/6-web-db-allow-all-ns.svg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6-web-db-allow-all-ns.svg";

/***/ }),

/***/ "./public/imgs/network-policy-samples/7-web-allow-production.svg":
/*!***********************************************************************!*\
  !*** ./public/imgs/network-policy-samples/7-web-allow-production.svg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7-web-allow-production.svg";

/***/ })

}]);
//# sourceMappingURL=5-3c018134b384f8cff338.js.map