(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["node"],{

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetails.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetails.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_app_src_components_nodes_NodeDetailsConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeDetailsConditions */ "./packages/console-app/src/components/nodes/NodeDetailsConditions.tsx");
/* harmony import */ var _console_app_src_components_nodes_NodeDetailsImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeDetailsImages */ "./packages/console-app/src/components/nodes/NodeDetailsImages.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _BareMetalNodeDetailsOverview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BareMetalNodeDetailsOverview */ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetailsOverview.tsx");






const BareMetalNodeDetails = ({ obj: node, hosts, nodeMaintenances, }) => {
    const maintenancesByNodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["createBasicLookup"])(nodeMaintenances, _selectors__WEBPACK_IMPORTED_MODULE_4__["getNodeMaintenanceNodeName"]);
    const hostsByMachineName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["createBasicLookup"])(hosts, _selectors__WEBPACK_IMPORTED_MODULE_4__["getHostMachineName"]);
    const host = hostsByMachineName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNodeMachineName"])(node)];
    const nodeMaintenance = maintenancesByNodeName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(node)];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalNodeDetailsOverview__WEBPACK_IMPORTED_MODULE_5__["default"], { node: node, host: host, nodeMaintenance: nodeMaintenance }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_NodeDetailsConditions__WEBPACK_IMPORTED_MODULE_1__["default"], { node: node }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_NodeDetailsImages__WEBPACK_IMPORTED_MODULE_2__["default"], { node: node })));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalNodeDetails);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetailsOverview.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetailsOverview.tsx ***!
  \************************************************************************************************/
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
/* harmony import */ var _console_app_src_components_nodes_NodeIPList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeIPList */ "./packages/console-app/src/components/nodes/NodeIPList.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _BareMetalNodeStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BareMetalNodeStatus */ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeStatus.tsx");
/* harmony import */ var _status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../status/baremetal-node-status */ "./packages/metal3-plugin/src/status/baremetal-node-status.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");













const BareMetalNodeDetailsOverview = ({ node, host, nodeMaintenance }) => {
    const status = Object(_status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_11__["bareMetalNodeStatus"])({ node, nodeMaintenance });
    const machine = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeMachineNameAndNamespace"])(node);
    const canUpdate = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"].apiGroup,
        resource: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"].plural,
        verb: 'patch',
        name: node.metadata.name,
        namespace: node.metadata.namespace,
    });
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_100') }) }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-6 col-xs-12" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_112')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, node.metadata.name || '-'),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BareMetalNodeStatus__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, status, { nodeMaintenance: nodeMaintenance }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_65')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'spec.externalID', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_119')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_app_src_components_nodes_NodeIPList__WEBPACK_IMPORTED_MODULE_8__["default"], { ips: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeAddresses"])(node), expand: true })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_120')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LabelList"], { kind: "Node", labels: node.metadata.labels })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_113')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, canUpdate ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", type: "button", isInline: true, onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.ModifyTaints(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"], node).callback },
                        Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.spec.taints), 'Taint'),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" }))) : (Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.spec.taints), 'Taint'))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_12')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, canUpdate ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", type: "button", isInline: true, onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.ModifyAnnotations(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"], node).callback },
                        Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.metadata.annotations), 'Annotation'),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" }))) : (Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["pluralize"])(lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.metadata.annotations), 'Annotation'))),
                    machine.name && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Machine"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]), name: machine.name, namespace: machine.namespace })))),
                    host && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Bare Metal Host"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["BareMetalHostModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(host), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(host) })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_68')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["cloudProviderNames"])([Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["cloudProviderID"])(node)])),
                    lodash__WEBPACK_IMPORTED_MODULE_0__["has"](node, 'spec.unschedulable') && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, "Unschedulable"),
                    lodash__WEBPACK_IMPORTED_MODULE_0__["has"](node, 'spec.unschedulable') && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "text-capitalize" }, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'spec.unschedulable', '-').toString()),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_106')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { timestamp: node.metadata.creationTimestamp })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-md-6 col-xs-12" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_69')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "text-capitalize" }, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.operatingSystem', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_114')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.osImage', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_70')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "text-uppercase" }, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.architecture', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_71')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.kernelVersion', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_72')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.bootID', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_73')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.containerRuntimeVersion', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_74')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.kubeletVersion', '-')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_75')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, lodash__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.nodeInfo.kubeProxyVersion', '-')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalNodeDetailsOverview);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetailsPage.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetailsPage.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_pod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/pod */ "./public/components/pod.tsx");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_kinds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/kinds */ "./public/kinds.ts");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-actions */ "./packages/metal3-plugin/src/components/baremetal-nodes/menu-actions.ts");
/* harmony import */ var _BareMetalNodeDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalNodeDetails */ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeDetails.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");
/* harmony import */ var _dashboard_BareMetalNodeDashboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/BareMetalNodeDashboard */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboard.tsx");















const { editYaml, events, pods } = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"];
const pages = [
    {
        href: '',
        name: 'Overview',
        component: _dashboard_BareMetalNodeDashboard__WEBPACK_IMPORTED_MODULE_14__["default"],
    },
    {
        href: 'details',
        name: 'Details',
        component: _BareMetalNodeDetails__WEBPACK_IMPORTED_MODULE_12__["default"],
    },
    editYaml(),
    pods(({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_pod__WEBPACK_IMPORTED_MODULE_3__["PodsPage"], { showTitle: false, fieldSelector: `spec.nodeName=${obj.metadata.name}` }))),
    events(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_4__["ResourceEventStream"]),
];
const BareMetalNodeDetailsPage = Object(_console_internal_kinds__WEBPACK_IMPORTED_MODULE_8__["connectToPlural"])((props) => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_9__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_13__["NODE_MAINTENANCE_FLAG"]);
    const resources = [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineModel"]),
            namespaced: true,
            isList: true,
            prop: 'machines',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["BareMetalHostModel"]),
            namespaced: true,
            isList: true,
            prop: 'hosts',
        },
    ];
    if (hasNodeMaintenanceCapability) {
        resources.push({
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["NodeMaintenanceModel"]),
            namespaced: false,
            isList: true,
            prop: 'nodeMaintenances',
            optional: true,
        });
    }
    const { modelRef, plural, kindObj, match } = props;
    const { name } = match.params;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, `${name} · Details`)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { name: name, menuActions: _menu_actions__WEBPACK_IMPORTED_MODULE_11__["menuActionsCreator"], pages: pages, resources: resources, kind: modelRef, customData: { hasNodeMaintenanceCapability }, breadcrumbsFor: () => [
                {
                    name: `${kindObj.labelPlural}`,
                    path: `/k8s/cluster/${plural}`,
                },
                { name: `${kindObj.label} Details`, path: `${match.url}` },
            ] }))));
});
/* harmony default export */ __webpack_exports__["default"] = ((props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BareMetalNodeDetailsPage, Object.assign({ plural: _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["NodeModel"].plural }, props)));


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeStatus.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeStatus.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");
/* harmony import */ var _maintenance_MaintenancePopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maintenance/MaintenancePopover */ "./packages/metal3-plugin/src/components/maintenance/MaintenancePopover.tsx");




const BareMetalNodeStatus = ({ status, title, nodeMaintenance, className, }) => {
    const statusTitle = title || status;
    switch (true) {
        case [_constants__WEBPACK_IMPORTED_MODULE_2__["NODE_STATUS_STARTING_MAINTENANCE"], _constants__WEBPACK_IMPORTED_MODULE_2__["NODE_STATUS_UNDER_MAINTENANCE"]].includes(status):
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_maintenance_MaintenancePopover__WEBPACK_IMPORTED_MODULE_3__["default"], { title: statusTitle, nodeMaintenance: nodeMaintenance, className: className }));
        case status === _constants__WEBPACK_IMPORTED_MODULE_2__["NODE_STATUS_STOPPING_MAINTENANCE"]:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["ProgressStatus"], { title: statusTitle, className: className });
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: status, title: statusTitle, className: className });
    }
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalNodeStatus);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodesPage.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodesPage.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../status/baremetal-node-status */ "./packages/metal3-plugin/src/status/baremetal-node-status.ts");
/* harmony import */ var _BareMetalNodesTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BareMetalNodesTable */ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodesTable.tsx");
/* harmony import */ var _table_filters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-filters */ "./packages/metal3-plugin/src/components/baremetal-nodes/table-filters.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");
/* harmony import */ var _console_internal_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/internal/models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
















const flattenResources = resources => {
    // TODO(jtomasek): Remove loaded check once ListPageWrapper_ is updated to call flatten only
    // when resources are loaded
    const loaded = lodash__WEBPACK_IMPORTED_MODULE_1__["every"](resources, resource => resource.loaded || (resource.optional && !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resource.loadError)));
    const { hosts, machines, nodes: { data: nodesData }, nodeMaintenances, } = resources;
    if (!loaded)
        return [];
    const maintenancesByNodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["createLookup"])(nodeMaintenances, _selectors__WEBPACK_IMPORTED_MODULE_8__["getNodeMaintenanceNodeName"]);
    const hostsByMachineName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["createLookup"])(hosts, _selectors__WEBPACK_IMPORTED_MODULE_8__["getHostMachineName"]);
    const machinesByNodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["createLookup"])(machines, _console_shared__WEBPACK_IMPORTED_MODULE_5__["getMachineNodeName"]);
    return nodesData.map((node) => {
        const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getName"])(node);
        const machine = machinesByNodeName[nodeName];
        const host = hostsByMachineName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getName"])(machine)];
        const nodeMaintenance = maintenancesByNodeName[nodeName];
        const status = Object(_status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_10__["bareMetalNodeStatus"])({ node, nodeMaintenance });
        // TODO(jtomasek): metadata.name is needed to make 'name' textFilter work.
        // Remove it when it is possible to pass custom textFilter as a function
        return { metadata: { name: nodeName }, host, machine, node, nodeMaintenance, status };
    });
};
const BareMetalNodesPage = props => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_7__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_13__["NODE_MAINTENANCE_FLAG"]);
    const resources = [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["BareMetalHostModel"]),
            namespaced: true,
            prop: 'hosts',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["MachineModel"]),
            namespaced: true,
            prop: 'machines',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"].kind,
            namespaced: false,
            prop: 'nodes',
        },
    ];
    if (hasNodeMaintenanceCapability) {
        resources.push({
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["NodeMaintenanceModel"]),
            namespaced: false,
            prop: 'nodeMaintenances',
            optional: true,
        });
    }
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_15__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, Object(_console_internal_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__["ResourceLabelPlural"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"], t))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["MultiListPage"], Object.assign({}, props, { rowFilters: [_table_filters__WEBPACK_IMPORTED_MODULE_12__["bareMetalNodeStatusFilter"]], createButtonText: "Add Host", resources: resources, flatten: flattenResources, ListComponent: _BareMetalNodesTable__WEBPACK_IMPORTED_MODULE_11__["default"], title: Object(_console_internal_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__["ResourceLabelPlural"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["NodeModel"], t) }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalNodesPage);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodesTable.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodesTable.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_app_src_components_nodes_NodeRoles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeRoles */ "./packages/console-app/src/components/nodes/NodeRoles.tsx");
/* harmony import */ var _console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/hooks/flag */ "./packages/console-shared/src/hooks/flag.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../status/baremetal-node-status */ "./packages/metal3-plugin/src/status/baremetal-node-status.ts");
/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-actions */ "./packages/metal3-plugin/src/components/baremetal-nodes/menu-actions.ts");
/* harmony import */ var _BareMetalNodeStatus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BareMetalNodeStatus */ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeStatus.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../features */ "./packages/metal3-plugin/src/features.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

















const tableColumnClasses = {
    name: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-3', 'col-md-4', 'col-sm-12', 'col-xs-12'),
    status: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-3', 'col-md-4', 'col-sm-6', 'hidden-xs'),
    role: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-4', 'hidden-sm', 'hidden-xs'),
    machine: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    address: classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    kebab: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].columnClass,
};
const BareMetalNodesTableHeader = t => [
    {
        title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
        sortField: 'node.metadata.name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.name },
    },
    {
        title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
        sortField: 'status.status',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.status },
    },
    {
        title: 'Role',
        sortField: 'machine.metadata.labels["machine.openshift.io/cluster-api-machine-role"]',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.role },
    },
    {
        title: t('COMMON:MSG_MAIN_TABLEHEADER_92'),
        sortField: "metadata.annotations['machine.openshift.io/machine']",
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.machine },
    },
    {
        title: t('COMMON:MSG_MAIN_TABLEHEADER_93'),
        sortField: 'host.spec.bmc.address',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        props: { className: tableColumnClasses.address },
    },
    {
        title: '',
        props: { className: tableColumnClasses.kebab },
    },
];
const BareMetalNodesTableRow = ({ obj: { host, node, nodeMaintenance, machine, status }, index, key, style }) => {
    const hasNodeMaintenanceCapability = Object(_console_shared_src_hooks_flag__WEBPACK_IMPORTED_MODULE_8__["useFlag"])(_features__WEBPACK_IMPORTED_MODULE_15__["NODE_MAINTENANCE_FLAG"]);
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(node);
    const hostName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(host);
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(host);
    const address = Object(_selectors__WEBPACK_IMPORTED_MODULE_10__["getHostBMCAddress"])(host);
    const uid = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getUID"])(node);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.name }, node ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: "Node", name: nodeName }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["BareMetalHostModel"]), name: hostName, namespace: namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalNodeStatus__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, status, { nodeMaintenance: nodeMaintenance })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["SecondaryStatus"], { status: Object(_status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_12__["baremetalNodeSecondaryStatus"])({ node, nodeMaintenance, host }) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.role },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_NodeRoles__WEBPACK_IMPORTED_MODULE_7__["default"], { node: node })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.machine }, machine ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["MachineModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(machine), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(machine) }) : _console_shared__WEBPACK_IMPORTED_MODULE_4__["DASH"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.address }, address),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses.kebab },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"], { options: _menu_actions__WEBPACK_IMPORTED_MODULE_13__["menuActions"].map(action => action(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["NodeModel"], node, null, { nodeMaintenance, hasNodeMaintenanceCapability })), key: `kebab-for-${uid}`, id: `kebab-for-${uid}` }))));
};
const BareMetalNodesTable = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_16__["useTranslation"])();
    const row = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](rowProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BareMetalNodesTableRow, Object.assign({}, rowProps)), []);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { defaultSortField: "node.metadata.name", "aria-label": "Nodes", Header: BareMetalNodesTableHeader.bind(null, t), Row: row, virtualize: true }));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalNodesTable);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboard.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboard.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/Dashboard */ "./packages/console-shared/src/components/dashboard/Dashboard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/DashboardGrid */ "./packages/console-shared/src/components/dashboard/DashboardGrid.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_UtilizationCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/UtilizationCard */ "./packages/console-app/src/components/nodes/node-dashboard/UtilizationCard.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_ActivityCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/ActivityCard */ "./packages/console-app/src/components/nodes/node-dashboard/ActivityCard.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeDashboard */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboard.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _InventoryCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InventoryCard */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/InventoryCard.tsx");
/* harmony import */ var _DetailsCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsCard */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/DetailsCard.tsx");
/* harmony import */ var _StatusCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StatusCard */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/StatusCard.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalNodeDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboardContext.ts");













const leftCards = [{ Card: _DetailsCard__WEBPACK_IMPORTED_MODULE_9__["default"] }, { Card: _InventoryCard__WEBPACK_IMPORTED_MODULE_8__["default"] }];
const mainCards = [{ Card: _StatusCard__WEBPACK_IMPORTED_MODULE_10__["default"] }, { Card: _console_app_src_components_nodes_node_dashboard_UtilizationCard__WEBPACK_IMPORTED_MODULE_3__["default"] }];
const rightCards = [{ Card: _console_app_src_components_nodes_node_dashboard_ActivityCard__WEBPACK_IMPORTED_MODULE_4__["default"] }];
const BareMetalNodeDashboard = ({ obj, hosts, nodeMaintenances, }) => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](_console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__["reducer"], Object(_console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__["initialState"])(obj));
    if (obj !== state.obj) {
        dispatch({ type: _console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__["ActionType"].OBJ, payload: obj });
    }
    const hostsByMachineName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["createBasicLookup"])(hosts, _selectors__WEBPACK_IMPORTED_MODULE_11__["getHostMachineName"]);
    const host = hostsByMachineName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNodeMachineName"])(obj)];
    const maintenancesByNodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["createBasicLookup"])(nodeMaintenances, _selectors__WEBPACK_IMPORTED_MODULE_11__["getNodeMaintenanceNodeName"]);
    const nodeMaintenance = maintenancesByNodeName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(obj)];
    const setCPULimit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((payload) => dispatch({ type: _console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__["ActionType"].CPU_LIMIT, payload }), []);
    const setMemoryLimit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((payload) => dispatch({ type: _console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__["ActionType"].MEMORY_LIMIT, payload }), []);
    const setHealthCheck = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((payload) => dispatch({ type: _console_app_src_components_nodes_node_dashboard_NodeDashboard__WEBPACK_IMPORTED_MODULE_6__["ActionType"].HEALTH_CHECK, payload }), []);
    const context = {
        obj,
        cpuLimit: state.cpuLimit,
        memoryLimit: state.memoryLimit,
        setCPULimit,
        setMemoryLimit,
        setHealthCheck,
    };
    const bmnContext = {
        host,
        nodeMaintenance,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_5__["NodeDashboardContext"].Provider, { value: context },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_12__["BareMetalNodeDashboardContext"].Provider, { value: bmnContext },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_2__["default"], { mainCards: mainCards, leftCards: leftCards, rightCards: rightCards })))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalNodeDashboard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboardContext.ts":
/*!**********************************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboardContext.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BareMetalNodeDashboardContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BareMetalNodeDashboardContext", function() { return BareMetalNodeDashboardContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BareMetalNodeDashboardContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/DetailsCard.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/DetailsCard.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailsBody */ "./packages/console-shared/src/components/dashboard/details-card/DetailsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailItem */ "./packages/console-shared/src/components/dashboard/details-card/DetailItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/selectors/node */ "./packages/console-shared/src/selectors/node.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_app_src_components_nodes_NodeIPList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeIPList */ "./packages/console-app/src/components/nodes/NodeIPList.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _console_app_src_components_nodes_NodeRoles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/app/src/components/nodes/NodeRoles */ "./packages/console-app/src/components/nodes/NodeRoles.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BareMetalNodeDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboardContext.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../models */ "./packages/metal3-plugin/src/models.ts");


















const DetailsCard = () => {
    var _a, _b;
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_13__["NodeDashboardContext"]);
    const { host } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_16__["BareMetalNodeDashboardContext"]);
    const detailsLink = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_10__["NodeModel"], obj.metadata.name)}/details`;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_15__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], { "data-test-id": "details-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, t('COMMON:MSG_DETAILS_TAB_1')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: detailsLink }, t('SINGLE:MSG_OVERVIEW_MAIN_POPOVEROPERATOR_ALL_1'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDDETAILS_3') }, obj.metadata.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDDETAILS_4') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_NodeRoles__WEBPACK_IMPORTED_MODULE_14__["default"], { node: obj })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !host, title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDDETAILS_5') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_11__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["BareMetalHostModel"]), name: (_a = host === null || host === void 0 ? void 0 : host.metadata) === null || _a === void 0 ? void 0 : _a.name, namespace: (_b = host === null || host === void 0 ? void 0 : host.metadata) === null || _b === void 0 ? void 0 : _b.namespace })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDDETAILS_2') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_NodeIPList__WEBPACK_IMPORTED_MODULE_12__["default"], { ips: Object(_console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_8__["getNodeAddresses"])(obj), expand: true }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DetailsCard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/InventoryCard.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/InventoryCard.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/InventoryItem */ "./packages/console-shared/src/components/dashboard/inventory-card/InventoryItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/utils */ "./packages/console-shared/src/components/dashboard/inventory-card/utils.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_InventoryCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/InventoryCard */ "./packages/console-app/src/components/nodes/node-dashboard/InventoryCard.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BareMetalNodeDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboardContext.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");















const InventoryCard = () => {
    var _a, _b, _c;
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_9__["NodeDashboardContext"]);
    const { host } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_12__["BareMetalNodeDashboardContext"]);
    const NICTitleComponent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ children }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["NodeModel"], obj.metadata.name)}/nics` }, children), [obj.metadata.name]);
    const DiskTitleComponent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ children }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["NodeModel"], obj.metadata.name)}/disks` }, children), [obj.metadata.name]);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], { "data-test-id": "inventory-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, t('SINGLE:MSG_OVERVIEW_MAIN_CARDINVENTORY_1'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_node_dashboard_InventoryCard__WEBPACK_IMPORTED_MODULE_10__["NodeInventoryItem"], { nodeName: obj.metadata.name, model: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PodModel"], mapper: _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_7__["getPodStatusGroups"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDINVENTORY_3'), titlePlural: "Images", count: (_b = (_a = obj.status) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.length, error: !((_c = obj.status) === null || _c === void 0 ? void 0 : _c.images) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_6__["default"], { title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDINVENTORY_4'), isLoading: !obj, count: Object(_selectors__WEBPACK_IMPORTED_MODULE_13__["getHostStorage"])(host).length, TitleComponent: DiskTitleComponent }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_6__["default"], { title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDINVENTORY_5'), isLoading: !obj, count: Object(_selectors__WEBPACK_IMPORTED_MODULE_13__["getHostNICs"])(host).length, TitleComponent: NICTitleComponent }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_6__["default"], { title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDINVENTORY_6'), isLoading: !obj, count: Object(_selectors__WEBPACK_IMPORTED_MODULE_13__["getHostCPU"])(host).count }))));
};
/* harmony default export */ __webpack_exports__["default"] = (InventoryCard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/StatusCard.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/StatusCard.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthBody */ "./packages/console-shared/src/components/dashboard/status-card/HealthBody.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeHealth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeHealth */ "./packages/console-app/src/components/nodes/node-dashboard/NodeHealth.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BareMetalNodeDashboardContext */ "./packages/metal3-plugin/src/components/baremetal-nodes/dashboard/BareMetalNodeDashboardContext.ts");
/* harmony import */ var _status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../status/baremetal-node-status */ "./packages/metal3-plugin/src/status/baremetal-node-status.ts");
/* harmony import */ var _BareMetalNodeStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../BareMetalNodeStatus */ "./packages/metal3-plugin/src/components/baremetal-nodes/BareMetalNodeStatus.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeAlerts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeAlerts */ "./packages/console-app/src/components/nodes/node-dashboard/NodeAlerts.tsx");














const StatusCard = () => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_7__["NodeDashboardContext"]);
    const { nodeMaintenance } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_BareMetalNodeDashboardContext__WEBPACK_IMPORTED_MODULE_10__["BareMetalNodeDashboardContext"]);
    const status = Object(_status_baremetal_node_status__WEBPACK_IMPORTED_MODULE_11__["bareMetalNodeStatus"])({ node: obj, nodeMaintenance });
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], { gradient: true, "data-test-id": "status-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null, t('COMMON:MSG_MAIN_TABLEHEADER_3'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__["default"], { isLoading: !obj },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"], { className: "co-overview-status__health", gutter: "md" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BareMetalNodeStatus__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, status, { nodeMaintenance: nodeMaintenance, className: "co-node-health__status" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GalleryItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_node_dashboard_NodeHealth__WEBPACK_IMPORTED_MODULE_8__["HealthChecksItem"], null)))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_app_src_components_nodes_node_dashboard_NodeAlerts__WEBPACK_IMPORTED_MODULE_13__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (StatusCard);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/menu-actions.ts":
/*!*******************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/menu-actions.ts ***!
  \*******************************************************************************/
/*! exports provided: SetNodeMaintenance, RemoveNodeMaintenance, menuActions, menuActionsCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNodeMaintenance", function() { return SetNodeMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNodeMaintenance", function() { return RemoveNodeMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActionsCreator", function() { return menuActionsCreator; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_app_src_components_nodes_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/app/src/components/nodes/menu-actions */ "./packages/console-app/src/components/nodes/menu-actions.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _modals_StartNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/StartNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StartNodeMaintenanceModal.tsx");
/* harmony import */ var _modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/StopNodeMaintenanceModal */ "./packages/metal3-plugin/src/components/modals/StopNodeMaintenanceModal.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");







const SetNodeMaintenance = (kindObj, node, resources, { hasNodeMaintenanceCapability, nodeMaintenance }) => {
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(node);
    return {
        hidden: !nodeName || !hasNodeMaintenanceCapability || !!nodeMaintenance,
        label: 'Start Maintenance',
        callback: () => Object(_modals_StartNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_3__["startNodeMaintenanceModal"])({ nodeName }),
    };
};
const RemoveNodeMaintenance = (kindObj, node, resources, { hasNodeMaintenanceCapability, nodeMaintenance }) => {
    const nodeName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(node);
    return {
        hidden: !nodeName || !hasNodeMaintenanceCapability || !nodeMaintenance,
        label: 'Stop Maintenance',
        callback: () => Object(_modals_StopNodeMaintenanceModal__WEBPACK_IMPORTED_MODULE_4__["default"])(nodeMaintenance),
        accessReview: nodeMaintenance && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_5__["NodeMaintenanceModel"], nodeMaintenance, 'delete'),
    };
};
const { ModifyLabels, ModifyAnnotations, Edit } = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory;
const menuActions = [
    SetNodeMaintenance,
    RemoveNodeMaintenance,
    _console_app_src_components_nodes_menu_actions__WEBPACK_IMPORTED_MODULE_1__["MarkAsSchedulable"],
    _console_app_src_components_nodes_menu_actions__WEBPACK_IMPORTED_MODULE_1__["MarkAsUnschedulable"],
    ModifyLabels,
    ModifyAnnotations,
    Edit,
    _console_app_src_components_nodes_menu_actions__WEBPACK_IMPORTED_MODULE_1__["Delete"],
];
const menuActionsCreator = (kindObj, node, { nodeMaintenances }, { hasNodeMaintenanceCapability }) => {
    const nodeMaintenance = Object(_selectors__WEBPACK_IMPORTED_MODULE_6__["findNodeMaintenance"])(nodeMaintenances, Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(node));
    return menuActions.map((action) => {
        return action(kindObj, node, null, {
            hasNodeMaintenanceCapability,
            nodeMaintenance,
        });
    });
};


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/table-filters.ts":
/*!********************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/table-filters.ts ***!
  \********************************************************************************/
/*! exports provided: getBareMetalNodeFilterStatus, bareMetalNodeStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBareMetalNodeFilterStatus", function() { return getBareMetalNodeFilterStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bareMetalNodeStatusFilter", function() { return bareMetalNodeStatusFilter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./packages/metal3-plugin/src/constants/index.ts");


const statesToFilterMap = Object.freeze({
    ready: {
        title: 'Ready',
        states: ['Ready'],
    },
    notReady: {
        title: 'Not Ready',
        states: ['Not Ready'],
    },
    maintenance: {
        title: 'Maintenance',
        states: Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__["NODE_STATUS_TITLES"]),
    },
});
const getBareMetalNodeFilterStatus = (bundle) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["findKey"](statesToFilterMap, ({ states }) => states.includes(bundle.status.status));
};
const bareMetalNodeStatusFilter = {
    filterGroupName: 'Status',
    type: 'bare-metal-node-status',
    reducer: getBareMetalNodeFilterStatus,
    items: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](statesToFilterMap, ({ title }, id) => ({ id, title })),
    filter: (groups, bundle) => {
        const status = getBareMetalNodeFilterStatus(bundle);
        return (groups.selected.has(status) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](groups.all, status) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](groups.selected));
    },
};


/***/ })

}]);
//# sourceMappingURL=node-7e913c3dd47dc2969473.js.map