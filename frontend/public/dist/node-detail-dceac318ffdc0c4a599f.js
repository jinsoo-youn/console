(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["node-detail"],{

/***/ "./packages/console-app/src/components/nodes/NodeDetails.tsx":
/*!*******************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeDetails.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NodeDetailsOverview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeDetailsOverview */ "./packages/console-app/src/components/nodes/NodeDetailsOverview.tsx");
/* harmony import */ var _NodeDetailsConditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeDetailsConditions */ "./packages/console-app/src/components/nodes/NodeDetailsConditions.tsx");
/* harmony import */ var _NodeDetailsImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeDetailsImages */ "./packages/console-app/src/components/nodes/NodeDetailsImages.tsx");




const NodeDetails = ({ obj: node }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeDetailsOverview__WEBPACK_IMPORTED_MODULE_1__["default"], { node: node }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeDetailsConditions__WEBPACK_IMPORTED_MODULE_2__["default"], { node: node }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeDetailsImages__WEBPACK_IMPORTED_MODULE_3__["default"], { node: node })));
/* harmony default export */ __webpack_exports__["default"] = (NodeDetails);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/NodeDetailsOverview.tsx":
/*!***************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeDetailsOverview.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _NodeIPList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NodeIPList */ "./packages/console-app/src/components/nodes/NodeIPList.tsx");
/* harmony import */ var _NodeStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NodeStatus */ "./packages/console-app/src/components/nodes/NodeStatus.tsx");










const NodeDetailsOverview = ({ node }) => {
    const machine = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeMachineNameAndNamespace"])(node);
    const canUpdate = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"].apiGroup,
        resource: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"].plural,
        verb: 'patch',
        name: node.metadata.name,
        namespace: node.metadata.namespace,
    });
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["SectionHeading"], { text: "Node Details" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-6 col-xs-12" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Node Name"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, node.metadata.name || '-'),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Status"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_NodeStatus__WEBPACK_IMPORTED_MODULE_9__["default"], { node: node })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "External ID"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'spec.externalID', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Node Addresses"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_NodeIPList__WEBPACK_IMPORTED_MODULE_8__["default"], { ips: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeAddresses"])(node), expand: true })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Node Labels"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LabelList"], { kind: "Node", labels: node.metadata.labels })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Taints"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, canUpdate ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", type: "button", isInline: true, onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.ModifyTaints(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"], node).callback },
                        Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.spec.taints), 'Taint'),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" }))) : (Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.spec.taints), 'Taint'))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Annotations"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, canUpdate ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", type: "button", isInline: true, onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.ModifyAnnotations(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"], node).callback },
                        Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.metadata.annotations), 'Annotation'),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" }))) : (Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.metadata.annotations), 'Annotation'))),
                    machine.name && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Machine"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]), name: machine.name, namespace: machine.namespace })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Provider ID"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["cloudProviderNames"])([Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["cloudProviderID"])(node)])),
                    lodash__WEBPACK_IMPORTED_MODULE_0__["has"](node, 'spec.unschedulable') && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Unschedulable"),
                    lodash__WEBPACK_IMPORTED_MODULE_0__["has"](node, 'spec.unschedulable') && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "text-capitalize" }, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'spec.unschedulable', '-').toString())),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Created"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: node.metadata.creationTimestamp })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-6 col-xs-12" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Operating System"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "text-capitalize" }, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.operatingSystem', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "OS Image"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.osImage', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Architecture"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "text-uppercase" }, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.architecture', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Kernel Version"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.kernelVersion', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Boot ID"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.bootID', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Container Runtime"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.containerRuntimeVersion', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Kubelet Version"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.kubeletVersion', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Kube-Proxy Version"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.kubeProxyVersion', '-')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeDetailsOverview);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/NodeDetailsPage.tsx":
/*!***********************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeDetailsPage.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_pod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/pod */ "./public/components/pod.tsx");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _status_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../status/node */ "./packages/console-app/src/status/node.ts");
/* harmony import */ var _NodeDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NodeDetails */ "./packages/console-app/src/components/nodes/NodeDetails.tsx");
/* harmony import */ var _NodeTerminal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NodeTerminal */ "./packages/console-app/src/components/nodes/NodeTerminal.tsx");
/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-actions */ "./packages/console-app/src/components/nodes/menu-actions.tsx");
/* harmony import */ var _node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node-dashboard/NodeDashboard */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboard.tsx");










const { editYaml, events, pods } = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["navFactory"];
const pages = [
    {
        href: '',
        name: 'Overview',
        component: _node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_9__["default"],
    },
    {
        href: 'details',
        name: 'Details',
        component: _NodeDetails__WEBPACK_IMPORTED_MODULE_6__["default"],
    },
    editYaml(),
    pods(({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_pod__WEBPACK_IMPORTED_MODULE_2__["PodsPage"], { showTitle: false, fieldSelector: `spec.nodeName=${obj.metadata.name}` }))),
    events(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_3__["ResourceEventStream"]),
    {
        href: 'terminal',
        name: 'Terminal',
        component: _NodeTerminal__WEBPACK_IMPORTED_MODULE_7__["default"],
    },
];
const NodeDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { getResourceStatus: _status_node__WEBPACK_IMPORTED_MODULE_5__["nodeStatus"], menuActions: _menu_actions__WEBPACK_IMPORTED_MODULE_8__["menuActions"], pages: pages })));
/* harmony default export */ __webpack_exports__["default"] = (NodeDetailsPage);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/NodeTerminal.tsx":
/*!********************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeTerminal.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _public_components_pod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../public/components/pod */ "./public/components/pod.tsx");
/* harmony import */ var _public_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../public/models */ "./public/models/index.ts");
/* harmony import */ var _public_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../public/module/k8s */ "./public/module/k8s/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const getDebugImage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const istag = yield Object(_public_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sGet"])(_public_models__WEBPACK_IMPORTED_MODULE_5__["ImageStreamTagModel"], 'tools:latest', 'openshift');
        return istag.image.dockerImageReference;
    }
    catch (e) {
        return 'registry.redhat.io/rhel7/support-tools';
    }
});
const getDebugPod = (name, namespace, nodeName) => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield getDebugImage();
    return {
        kind: 'Pod',
        apiVersion: 'v1',
        metadata: {
            name,
            namespace,
            annotations: {
                'debug.openshift.io/source-container': 'container-00',
                'debug.openshift.io/source-resource': `/v1, Resource=nodes/${nodeName}`,
            },
        },
        spec: {
            activeDeadlineSeconds: 21600,
            volumes: [
                {
                    name: 'host',
                    hostPath: {
                        path: '/',
                        type: 'Directory',
                    },
                },
            ],
            containers: [
                {
                    name: 'container-00',
                    image,
                    command: ['/bin/sh'],
                    resources: {},
                    volumeMounts: [
                        {
                            name: 'host',
                            mountPath: '/host',
                        },
                    ],
                    securityContext: {
                        privileged: true,
                        runAsUser: 0,
                    },
                    stdin: true,
                    stdinOnce: true,
                    tty: true,
                },
            ],
            restartPolicy: 'Never',
            nodeName,
            hostNetwork: true,
            hostPID: true,
        },
    };
});
const NodeTerminalError = ({ error }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "danger", isInline: true, title: error })));
};
const NodeTerminalInner = ({ obj }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const message = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
        "To use host binaries, run ",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, "chroot /host")));
    switch ((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.data) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.phase) {
        case 'Failed':
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NodeTerminalError, { error: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    "The debug pod failed.",
                    ' ',
                    ((_h = (_g = (_f = (_e = (_d = (_c = obj === null || obj === void 0 ? void 0 : obj.data) === null || _c === void 0 ? void 0 : _c.status) === null || _d === void 0 ? void 0 : _d.containerStatuses) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.state) === null || _g === void 0 ? void 0 : _g.terminated) === null || _h === void 0 ? void 0 : _h.message) || ((_k = (_j = obj === null || obj === void 0 ? void 0 : obj.data) === null || _j === void 0 ? void 0 : _j.status) === null || _k === void 0 ? void 0 : _k.message)) }));
        case 'Running':
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_public_components_pod__WEBPACK_IMPORTED_MODULE_4__["PodExecLoader"], { obj: obj.data, message: message });
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
    }
};
const NodeTerminal = ({ obj: node }) => {
    const [resources, setResources] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const nodeName = node.metadata.name;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const name = `${nodeName}-debug-${Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomChars"])()}`;
        const namespace = 'default';
        getDebugPod(name, namespace, nodeName)
            .then((debugPod) => Object(_public_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_public_models__WEBPACK_IMPORTED_MODULE_5__["PodModel"], debugPod))
            .then(() => {
            setResources([
                {
                    isList: false,
                    kind: 'Pod',
                    name,
                    namespace,
                    prop: 'obj',
                },
            ]);
        })
            .catch((e) => setErrorMessage(e.message));
        const deletePod = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield Object(_public_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sKillByName"])(_public_models__WEBPACK_IMPORTED_MODULE_5__["PodModel"], name, namespace);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.warn('Could not delete node terminal debug pod.', e);
            }
        });
        window.addEventListener('beforeunload', deletePod);
        return () => {
            deletePod();
            window.removeEventListener('beforeunload', deletePod);
        };
        //  eslint-disable-next-line
    }, [nodeName]);
    return errorMessage ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NodeTerminalError, { error: errorMessage })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NodeTerminalInner, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeTerminal);


/***/ })

}]);
//# sourceMappingURL=node-detail-dceac318ffdc0c4a599f.js.map