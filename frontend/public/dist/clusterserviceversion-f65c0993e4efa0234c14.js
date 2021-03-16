(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clusterserviceversion"],{

/***/ "./packages/operator-lifecycle-manager/src/components/clusterserviceversion.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/clusterserviceversion.tsx ***!
  \**************************************************************************************/
/*! exports provided: AllProjectsTableHeader, SingleProjectTableHeader, NamespacedClusterServiceVersionTableRow, ClusterServiceVersionTableRow, SubscriptionTableRow, NamespacedClusterServiceVersionList, ClusterServiceVersionList, ClusterServiceVersionsPage, MarkdownView, CRDCard, CRDCardRow, ClusterServiceVersionDetails, CSVSubscription, ClusterServiceVersionsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProjectsTableHeader", function() { return AllProjectsTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProjectTableHeader", function() { return SingleProjectTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespacedClusterServiceVersionTableRow", function() { return NamespacedClusterServiceVersionTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceVersionTableRow", function() { return ClusterServiceVersionTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionTableRow", function() { return SubscriptionTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespacedClusterServiceVersionList", function() { return NamespacedClusterServiceVersionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceVersionList", function() { return ClusterServiceVersionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceVersionsPage", function() { return ClusterServiceVersionsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownView", function() { return MarkdownView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRDCard", function() { return CRDCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRDCardRow", function() { return CRDCardRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceVersionDetails", function() { return ClusterServiceVersionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVSubscription", function() { return CSVSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceVersionsDetailsPage", function() { return ClusterServiceVersionsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared/src/components/error/error-boundary */ "./packages/console-shared/src/components/error/error-boundary.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/internal/components/conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_utils_rbac__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @console/internal/components/utils/rbac */ "./public/components/utils/rbac.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/types.ts");
/* harmony import */ var _status_csv_status__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../status/csv-status */ "./packages/operator-lifecycle-manager/src/status/csv-status.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils */ "./packages/operator-lifecycle-manager/src/utils.ts");
/* harmony import */ var _operand__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./operand */ "./packages/operator-lifecycle-manager/src/components/operand/index.tsx");
/* harmony import */ var _modals_uninstall_operator_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/uninstall-operator-modal */ "./packages/operator-lifecycle-manager/src/components/modals/uninstall-operator-modal.tsx");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subscription */ "./packages/operator-lifecycle-manager/src/components/subscription.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


























const clusterServiceVersionStateToProps = (state) => {
    return {
        activeNamespace: state.UI.get('activeNamespace'),
    };
};
const isSubscription = (obj) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"]);
const isCSV = (obj) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["ClusterServiceVersionModel"]);
const isPackageServer = (obj) => obj.metadata.name === 'packageserver' &&
    obj.metadata.namespace === 'openshift-operator-lifecycle-manager';
const nameColumnClass = '';
const namespaceColumnClass = '';
const managedNamespacesColumnClass = classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-sm');
const statusColumnClass = classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-lg');
const lastUpdatedColumnClass = classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-2xl');
const providedAPIsColumnClass = classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-xl');
const nameHeader = {
    title: 'Name',
    sortField: 'metadata.name',
    transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
    props: { className: nameColumnClass },
};
const namespaceHeader = {
    title: 'Namespace',
    sortFunc: 'getOperatorNamespace',
    transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
    props: { className: namespaceColumnClass },
};
const managedNamespacesHeader = {
    title: 'Managed Namespaces',
    sortFunc: 'formatTargetNamespaces',
    transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"], _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["wrappable"]],
    props: { className: managedNamespacesColumnClass },
};
const statusHeader = {
    title: 'Status',
    props: { className: statusColumnClass },
};
const lastUpdatedHeader = {
    title: 'Last Updated',
    props: { className: lastUpdatedColumnClass },
};
const providedAPIsHeader = {
    title: 'Provided APIs',
    props: { className: providedAPIsColumnClass },
};
const kebabHeader = {
    title: '',
    props: { className: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Kebab"].columnClass },
};
const AllProjectsTableHeader = () => [
    nameHeader,
    namespaceHeader,
    managedNamespacesHeader,
    statusHeader,
    lastUpdatedHeader,
    providedAPIsHeader,
    kebabHeader,
];
const SingleProjectTableHeader = () => [
    nameHeader,
    managedNamespacesHeader,
    statusHeader,
    lastUpdatedHeader,
    providedAPIsHeader,
    kebabHeader,
];
const editSubscription = (sub) => !lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](sub)
    ? {
        label: 'Edit Subscription',
        href: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"], sub.metadata.name, sub.metadata.namespace)}/yaml`,
    }
    : null;
const uninstall = (sub, csv) => !lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](sub)
    ? {
        label: 'Uninstall Operator',
        callback: () => Object(_modals_uninstall_operator_modal__WEBPACK_IMPORTED_MODULE_22__["createUninstallOperatorModal"])({
            k8sKill: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["k8sKill"],
            k8sGet: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["k8sGet"],
            k8sPatch: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["k8sPatch"],
            subscription: sub,
            csv,
        }),
        accessReview: {
            group: _models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"].apiGroup,
            resource: _models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"].plural,
            name: sub.metadata.name,
            namespace: sub.metadata.namespace,
            verb: 'delete',
        },
    }
    : null;
const menuActionsForCSV = (csv, subscription) => {
    return lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](subscription)
        ? [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Kebab"].factory.Delete]
        : [() => editSubscription(subscription), () => uninstall(subscription, csv)];
};
const ClusterServiceVersionStatus = ({ catalogSourceMissing, obj, subscription, }) => {
    const status = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'status.phase');
    const subscriptionStatus = Object(_status_csv_status__WEBPACK_IMPORTED_MODULE_19__["getSubscriptionStatus"])(subscription);
    if (obj.metadata.deletionTimestamp) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-and-text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_9__["Status"], { status: _types__WEBPACK_IMPORTED_MODULE_18__["ClusterServiceVersionPhase"].CSVPhaseDeleting })));
    }
    if (catalogSourceMissing) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_9__["WarningStatus"], { title: "Cannot update" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Catalog source was removed")));
    }
    return status ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-and-text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_9__["Status"], { status: status })),
        subscription && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, subscriptionStatus.title))) : null;
};
const ManagedNamespaces = ({ obj }) => {
    var _a;
    const { 'olm.targetNamespaces': olmTargetNamespaces = '' } = ((_a = obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations) || {};
    const managedNamespaces = (olmTargetNamespaces === null || olmTargetNamespaces === void 0 ? void 0 : olmTargetNamespaces.split(',')) || [];
    if (managedNamespaces.length === 1 && managedNamespaces[0] === '') {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "All Namespaces");
    }
    switch (managedNamespaces.length) {
        case 0:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "All Namespaces");
        case 1:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { kind: "Namespace", title: managedNamespaces[0], name: managedNamespaces[0] }));
        default:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Popover"], { headerContent: "Managed Namespaces", bodyContent: managedNamespaces.map((namespace) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { kind: "Namespace", title: namespace, name: namespace }))) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Button"], { variant: "link", isInline: true },
                    managedNamespaces.length,
                    " Namespaces")));
    }
};
const NamespacedClusterServiceVersionTableRow = Object(_console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_11__["withFallback"])(({ activeNamespace, obj, rowKey, subscription, catalogSourceMissing, index, style }) => {
    var _a;
    const { displayName, provider, version } = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'spec');
    const { 'olm.operatorNamespace': olmOperatorNamespace = '' } = ((_a = obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations) || {};
    const [icon] = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'spec.icon', []);
    const route = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["resourceObjPath"])(obj, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj));
    const uid = Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getUID"])(obj);
    const internalObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getInternalObjects"])(obj);
    const providedAPIs = Object(_index__WEBPACK_IMPORTED_MODULE_25__["providedAPIsFor"])(obj).filter((desc) => !Object(_utils__WEBPACK_IMPORTED_MODULE_20__["isInternalObject"])(internalObjects, desc.name));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableRow"], { id: uid, trKey: rowKey, index: index, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: nameColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: route, className: "co-clusterserviceversion-link", "data-test-operator-row": displayName },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_25__["ClusterServiceVersionLogo"], { icon: icon, displayName: displayName, version: version, provider: provider }))),
        activeNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: namespaceColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { kind: "Namespace", title: olmOperatorNamespace, name: olmOperatorNamespace }))) : null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: managedNamespacesColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ManagedNamespaces, { obj: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: statusColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-clusterserviceversion-row__status" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterServiceVersionStatus, { catalogSourceMissing: catalogSourceMissing, obj: obj, subscription: subscription }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: lastUpdatedColumnClass }, obj.status == null ? '-' : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Timestamp"], { timestamp: obj.status.lastUpdateTime })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: providedAPIsColumnClass },
            !lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](providedAPIs)
                ? lodash__WEBPACK_IMPORTED_MODULE_2__["take"](providedAPIs, 4).map((desc) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(desc) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `${route}/${Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(desc)}`, title: desc.name }, desc.displayName || desc.kind))))
                : '-',
            providedAPIs.length > 4 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: route, title: `View ${Object(_index__WEBPACK_IMPORTED_MODULE_25__["providedAPIsFor"])(obj).length - 4} more...` }, `View ${Object(_index__WEBPACK_IMPORTED_MODULE_25__["providedAPIsFor"])(obj).length - 4} more...`))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Kebab"].columnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceKebab"], { resource: obj, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj), actions: menuActionsForCSV(obj, subscription) }))));
});
const ClusterServiceVersionTableRow = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(clusterServiceVersionStateToProps)(NamespacedClusterServiceVersionTableRow);
const NamespacedSubscriptionTableRow = ({ activeNamespace, catalogSourceMissing, rowKey, obj, index, style, }) => {
    const csvName = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'spec.name');
    const menuActions = [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Kebab"].factory.Edit, () => uninstall(obj)];
    const namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getNamespace"])(obj);
    const route = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["resourceObjPath"])(obj, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"]));
    const subscriptionState = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'status.state', 'Unknown');
    const uid = Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getUID"])(obj);
    const getStatus = () => {
        if (catalogSourceMissing) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_9__["WarningStatus"], { title: "Cannot update" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Catalog source was removed")));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-and-text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_9__["Status"], { status: subscriptionState })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableRow"], { id: uid, trKey: rowKey, index: index, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: nameColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: route },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_25__["ClusterServiceVersionLogo"], { icon: null, displayName: csvName, version: null, provider: null }))),
        activeNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: namespaceColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { kind: "Namespace", title: namespace, name: namespace }))) : null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: managedNamespacesColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: statusColumnClass }, getStatus()),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: lastUpdatedColumnClass }, obj.status == null ? '-' : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Timestamp"], { timestamp: obj.status.lastUpdated })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: providedAPIsColumnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Kebab"].columnClass },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceKebab"], { resource: obj, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj), actions: menuActions }))));
};
const SubscriptionTableRow = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(clusterServiceVersionStateToProps)(NamespacedSubscriptionTableRow);
const InstalledOperatorTableRow = (_a) => {
    var { obj, catalogSources = [], subscriptions = [] } = _a, rest = __rest(_a, ["obj", "catalogSources", "subscriptions"]);
    const subscription = isCSV(obj)
        ? Object(_status_csv_status__WEBPACK_IMPORTED_MODULE_19__["subscriptionForCSV"])(subscriptions, obj)
        : obj;
    // Only warn about missing catalog sources if the user was able to list them
    // but exclude PackageServer as it does not have a subscription.
    const catalogSourceMissing = !lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](catalogSources) &&
        !Object(_subscription__WEBPACK_IMPORTED_MODULE_24__["catalogSourceForSubscription"])(catalogSources, subscription) &&
        !isPackageServer(obj);
    return isCSV(obj) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterServiceVersionTableRow, Object.assign({}, rest, { catalogSourceMissing: catalogSourceMissing, obj: obj, subscription: subscription }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubscriptionTableRow, Object.assign({}, rest, { catalogSourceMissing: catalogSourceMissing, obj: subscription })));
};
const NoOperatorsMatchFilterMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["MsgBox"], { title: "No Operators Found" });
const NamespacedClusterServiceVersionList = (_a) => {
    var { activeNamespace, subscriptions, catalogSources, data } = _a, rest = __rest(_a, ["activeNamespace", "subscriptions", "catalogSources", "data"]);
    const noDataDetail = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            "No Operators are available",
            activeNamespace !== _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                ' ',
                "for project",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-clusterserviceversion-empty__state__namespace" }, activeNamespace))),
            "."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            "Discover and install Operators from the ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "/operatorhub" }, "OperatorHub"),
            ".")));
    const NoDataEmptyMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["MsgBox"], { title: "No Operators Found", detail: noDataDetail });
    const isCopiedCSV = (source, kind) => {
        var _a;
        return (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["ClusterServiceVersionModel"]) === kind && ((_a = source.status) === null || _a === void 0 ? void 0 : _a.reason) === 'Copied');
    };
    const removeCopiedCSVs = (operators) => {
        return operators.filter((source) => {
            const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(source);
            if (isSubscription(kind)) {
                return true;
            }
            return !isCopiedCSV(source, kind);
        });
    };
    const formatTargetNamespaces = (obj) => {
        var _a, _b;
        if (obj.kind === 'Subscription') {
            return 'None';
        }
        const namespaces = ((_b = (_a = obj.metadata.annotations) === null || _a === void 0 ? void 0 : _a['olm.targetNamespaces']) === null || _b === void 0 ? void 0 : _b.split(',')) || [];
        if (namespaces.length === 1 && namespaces[0] === '') {
            return 'All Namespaces';
        }
        switch (namespaces.length) {
            case 0:
                return 'All Namespaces';
            case 1:
                return namespaces[0];
            default:
                return `${namespaces.length} Namespaces`;
        }
    };
    const getOperatorNamespace = (obj) => {
        var _a, _b;
        const olmOperatorNamespace = (_b = (_a = obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b['olm.operatorNamespace'];
        return olmOperatorNamespace !== null && olmOperatorNamespace !== void 0 ? olmOperatorNamespace : Object(_console_shared__WEBPACK_IMPORTED_MODULE_9__["getNamespace"])(obj);
    };
    return activeNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["Table"], Object.assign({ data: removeCopiedCSVs(data) }, rest, { "aria-label": "Installed Operators", Header: AllProjectsTableHeader, Row: (rowArgs) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InstalledOperatorTableRow, { obj: rowArgs.obj, index: rowArgs.index, rowKey: rowArgs.key, style: rowArgs.style, catalogSources: catalogSources.data, subscriptions: subscriptions.data })), EmptyMsg: NoOperatorsMatchFilterMsg, NoDataEmptyMsg: NoDataEmptyMsg, virtualize: true, customSorts: {
            formatTargetNamespaces,
            getOperatorNamespace,
        } }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["Table"], Object.assign({ data: data }, rest, { "aria-label": "Installed Operators", Header: SingleProjectTableHeader, Row: (rowArgs) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InstalledOperatorTableRow, { obj: rowArgs.obj, index: rowArgs.index, rowKey: rowArgs.key, style: rowArgs.style, catalogSources: catalogSources.data, subscriptions: subscriptions.data })), EmptyMsg: NoOperatorsMatchFilterMsg, NoDataEmptyMsg: NoDataEmptyMsg, virtualize: true, customSorts: {
            formatTargetNamespaces,
            getOperatorNamespace,
        } })));
};
const ClusterServiceVersionList = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(clusterServiceVersionStateToProps)(NamespacedClusterServiceVersionList);
const ClusterServiceVersionsPage = (props) => {
    const title = 'Installed Operators';
    const helpText = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" },
        "Installed Operators are represented by Cluster Service Versions within this namespace. For more information, see the",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], { href: "https://github.com/operator-framework/operator-lifecycle-manager/blob/master/doc/design/architecture.md", text: "Operator Lifecycle Manager documentation" }),
        ". Or create an Operator and Cluster Service Version using the",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], { href: "https://github.com/operator-framework/operator-sdk", text: "Operator SDK" }),
        "."));
    const flatten = ({ clusterServiceVersions, subscriptions }) => [
        ...lodash__WEBPACK_IMPORTED_MODULE_2__["get"](clusterServiceVersions, 'data', []),
        ...lodash__WEBPACK_IMPORTED_MODULE_2__["get"](subscriptions, 'data', []).filter((sub) => ['', sub.metadata.namespace].includes(props.namespace) &&
            lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](lodash__WEBPACK_IMPORTED_MODULE_2__["get"](sub, 'status.installedCSV'))),
    ].filter((obj, i, all) => isSubscription(obj) ||
        lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"](all.find(({ metadata }) => [lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'status.currentCSV'), lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'spec.startingCSV')].includes(metadata.name))));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_6__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["MultiListPage"], Object.assign({}, props, { resources: [
                {
                    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["ClusterServiceVersionModel"]),
                    namespace: props.namespace,
                    prop: 'clusterServiceVersions',
                },
                {
                    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"]),
                    prop: 'subscriptions',
                    optional: true,
                },
                {
                    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["CatalogSourceModel"]),
                    prop: 'catalogSources',
                    optional: true,
                },
            ], title: title, flatten: flatten, namespace: props.namespace, ListComponent: ClusterServiceVersionList, helpText: helpText }))));
};
const MarkdownView = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["AsyncComponent"], Object.assign({ loader: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(12), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! @console/internal/components/markdown-view */ "./public/components/markdown-view.tsx")).then((c) => c.SyncMarkdownView) }, props)));
};
const CRDCard = (props) => {
    const { csv, crd, canCreate } = props;
    const reference = Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(crd);
    const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["modelFor"])(reference);
    const createRoute = () => `/k8s/ns/${csv.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_17__["ClusterServiceVersionModel"].plural}/${csv.metadata.name}/${reference}/~new`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Card"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { kind: Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(crd), title: crd.name, linkTo: false, displayName: crd.displayName || crd.kind })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, crd.description)),
        canCreate && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["RequireCreatePermission"], { model: model, namespace: csv.metadata.namespace },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: createRoute() },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["AddCircleOIcon"], { className: "co-icon-space-r" }),
                    "Create Instance"))))));
};
const crdCardRowStateToProps = ({ k8s }, { crdDescs }) => {
    const models = lodash__WEBPACK_IMPORTED_MODULE_2__["compact"](crdDescs.map((desc) => k8s.getIn(['RESOURCES', 'models', Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(desc)])));
    return {
        crdDescs: crdDescs.filter((desc) => models.find((m) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(m) === Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(desc))),
        createable: models
            .filter((m) => (m.verbs || []).includes('create'))
            .map((m) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(m)),
    };
};
const CRDCardRow = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(crdCardRowStateToProps)((props) => {
    var _a;
    const internalObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getInternalObjects"])(props.csv);
    const crds = (_a = props.crdDescs) === null || _a === void 0 ? void 0 : _a.filter(({ name }) => !Object(_utils__WEBPACK_IMPORTED_MODULE_20__["isInternalObject"])(internalObjects, name));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-crd-card-row" }, lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](crds) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No Kubernetes APIs are being provided by this Operator.")) : (crds.map((crd) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CRDCard, { key: Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(crd), crd: crd, csv: props.csv, canCreate: props.createable.includes(Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(crd)) }))))));
});
const ClusterServiceVersionDetails = (props) => {
    const { spec, metadata, status } = props.obj;
    const { 'marketplace.openshift.io/support-workflow': marketplaceSupportWorkflow, 'olm.targetNamespaces': olmTargetNamespaces = '', } = metadata.annotations || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ScrollToTopOnMount"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-9" },
                        status && status.phase === _types__WEBPACK_IMPORTED_MODULE_18__["ClusterServiceVersionPhase"].CSVPhaseFailed && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: `${status.phase}: ${status.message}` })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["SectionHeading"], { text: "Provided APIs" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CRDCardRow, { csv: props.obj, crdDescs: Object(_index__WEBPACK_IMPORTED_MODULE_25__["providedAPIsFor"])(props.obj) }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["SectionHeading"], { text: "Description" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MarkdownView, { content: spec.description || 'Not available' })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-3" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-clusterserviceversion-details__field" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Provider"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, spec.provider && spec.provider.name ? spec.provider.name : 'Not available'),
                            marketplaceSupportWorkflow && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Support"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], { href: marketplaceSupportWorkflow, text: "Get support" })))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Created At"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Timestamp"], { timestamp: metadata.creationTimestamp }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-clusterserviceversion-details__field" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Links"),
                            spec.links && spec.links.length > 0 ? (spec.links.map((link) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: link.url, style: { display: 'flex', flexDirection: 'column' } },
                                link.name,
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ExternalLink"], { href: link.url, text: link.url || '-', additionalClassName: "co-break-all" }))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, "Not available"))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-clusterserviceversion-details__field" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Maintainers"),
                            spec.maintainers && spec.maintainers.length > 0 ? (spec.maintainers.map((maintainer) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: maintainer.email, style: { display: 'flex', flexDirection: 'column' } },
                                maintainer.name,
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: `mailto:${maintainer.email}`, className: "co-break-all" }, maintainer.email || '-'))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, "Not available"))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["SectionHeading"], { text: "ClusterServiceVersion Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceSummary"], { resource: props.obj },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Popover"], { headerContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Managed Namespaces"), bodyContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Operands in this Namespace are managed by the Operator."), maxWidth: "30rem" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Button"], { variant: "plain", className: "co-m-pane__details-popover-button" }, "Managed Namespaces"))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, olmTargetNamespaces === '' ? ('All Namespaces') : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { kind: "Namespace", name: props.obj.metadata.namespace, title: props.obj.metadata.uid }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_9__["Status"], { status: status ? status.phase : 'Unknown' })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status Reason"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, status ? status.message : 'Unknown'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Operator Deployments"),
                        spec.install.spec.deployments.map(({ name }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: name },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { name: name, kind: "Deployment", namespace: Object(_operator_group__WEBPACK_IMPORTED_MODULE_23__["operatorNamespaceFor"])(props.obj) })))),
                        lodash__WEBPACK_IMPORTED_MODULE_2__["get"](spec.install.spec, 'permissions') && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Operator Service Accounts"),
                            spec.install.spec.permissions.map(({ serviceAccountName }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: serviceAccountName },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { name: serviceAccountName, kind: "ServiceAccount", namespace: Object(_operator_group__WEBPACK_IMPORTED_MODULE_23__["operatorNamespaceFor"])(props.obj) })))))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Operator Group"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, Object(_operator_group__WEBPACK_IMPORTED_MODULE_23__["operatorGroupFor"])(props.obj) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["ResourceLink"], { name: Object(_operator_group__WEBPACK_IMPORTED_MODULE_23__["operatorGroupFor"])(props.obj), namespace: Object(_operator_group__WEBPACK_IMPORTED_MODULE_23__["operatorNamespaceFor"])(props.obj), kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["OperatorGroupModel"]) })) : ('-')))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_14__["Conditions"], { conditions: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](status, 'conditions', []).map((c) => (Object.assign(Object.assign({}, c), { type: c.phase, status: 'True' }))) }))));
};
const CSVSubscription = (_a) => {
    var { obj, subscriptions = [] } = _a, rest = __rest(_a, ["obj", "subscriptions"]);
    const EmptyMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["MsgBox"], { title: "No Operator Subscription", detail: "This Operator will not receive updates." }));
    const subscription = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_status_csv_status__WEBPACK_IMPORTED_MODULE_19__["subscriptionForCSV"])(subscriptions, obj), [
        obj,
        subscriptions,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["StatusBox"], { EmptyMsg: EmptyMsg, loaded: true, data: subscription },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_subscription__WEBPACK_IMPORTED_MODULE_24__["SubscriptionDetails"], Object.assign({}, rest, { obj: subscription, clusterServiceVersions: [obj] }))));
};
const ClusterServiceVersionsDetailsPage = (props) => {
    const instancePagesFor = (obj) => {
        const internalObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_20__["getInternalObjects"])(obj);
        const allInstancesPage = {
            href: 'instances',
            name: 'All Instances',
            component: _operand__WEBPACK_IMPORTED_MODULE_21__["ProvidedAPIsPage"],
        };
        return (Object(_index__WEBPACK_IMPORTED_MODULE_25__["providedAPIsFor"])(obj).length > 1 ? [allInstancesPage] : []).concat(Object(_index__WEBPACK_IMPORTED_MODULE_25__["providedAPIsFor"])(obj).reduce((acc, desc) => !Object(_utils__WEBPACK_IMPORTED_MODULE_20__["isInternalObject"])(internalObjects, desc.name)
            ? [
                ...acc,
                {
                    href: Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(desc),
                    name: ['Details', 'YAML', 'Subscription', 'Events'].includes(desc.displayName)
                        ? `${desc.displayName} Operand`
                        : desc.displayName || desc.kind,
                    component: _operand__WEBPACK_IMPORTED_MODULE_21__["ProvidedAPIPage"],
                    pageData: {
                        csv: obj,
                        kind: Object(_index__WEBPACK_IMPORTED_MODULE_25__["referenceForProvidedAPI"])(desc),
                        namespace: obj.metadata.namespace,
                    },
                },
            ]
            : acc, []));
    };
    const menuActions = (model, obj, { subscriptions }) => {
        const subscription = Object(_status_csv_status__WEBPACK_IMPORTED_MODULE_19__["subscriptionForCSV"])(subscriptions, obj);
        return [
            ...(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](subscription)
                ? [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["Kebab"].factory.Delete(model, obj)]
                : [editSubscription(subscription), uninstall(subscription, obj)]),
        ];
    };
    const canListSubscriptions = Object(_console_internal_components_utils_rbac__WEBPACK_IMPORTED_MODULE_16__["useAccessReview"])({
        group: _models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"].apiGroup,
        resource: _models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"].plural,
        verb: 'list',
    });
    const pagesFor = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((obj) => lodash__WEBPACK_IMPORTED_MODULE_2__["compact"]([
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["navFactory"].details(ClusterServiceVersionDetails),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["navFactory"].editYaml(),
        canListSubscriptions
            ? { href: 'subscription', name: 'Subscription', component: CSVSubscription }
            : null,
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_15__["navFactory"].events(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_13__["ResourceEventStream"]),
        ...instancePagesFor(obj),
    ]), [canListSubscriptions]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_10__["DetailsPage"], Object.assign({}, props, { breadcrumbsFor: () => [
            {
                name: 'Installed Operators',
                path: `/k8s/ns/${props.match.params.ns}/${props.match.params.plural}`,
            },
            { name: 'Operator Details', path: props.match.url },
        ], resources: [
            { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["SubscriptionModel"]), isList: true, prop: 'subscriptions' },
            { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["PackageManifestModel"]), isList: true, prop: 'packageManifests' },
            { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["CatalogSourceModel"]), isList: true, prop: 'catalogSources' },
            { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["InstallPlanModel"]), isList: true, prop: 'installPlans' },
        ], icon: ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_25__["ClusterServiceVersionLogo"], { displayName: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj.spec, 'displayName'), icon: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj.spec, 'icon[0]'), provider: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj.spec, 'provider'), version: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj.spec, 'version') })), namespace: props.match.params.ns, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_17__["ClusterServiceVersionModel"]), name: props.match.params.name, pagesFor: pagesFor, menuActions: menuActions })));
};
// TODO(alecmerdler): Find Webpack loader/plugin to add `displayName` to React components automagically
ClusterServiceVersionList.displayName = 'ClusterServiceVersionList';
NamespacedClusterServiceVersionList.displayName = 'ClusterServiceVersionList';
ClusterServiceVersionsPage.displayName = 'ClusterServiceVersionsPage';
ClusterServiceVersionTableRow.displayName = 'ClusterServiceVersionTableRow';
SingleProjectTableHeader.displayName = 'SingleProjectClusterServiceVersionTableHeader';
AllProjectsTableHeader.displayName = 'AllProjectsClusterServiceVersionTableHeader';
CRDCard.displayName = 'CRDCard';
ClusterServiceVersionsDetailsPage.displayName = 'ClusterServiceVersionsDetailsPage';
ClusterServiceVersionDetails.displayName = 'ClusterServiceVersionDetails';
CSVSubscription.displayName = 'CSVSubscription';


/***/ })

}]);
//# sourceMappingURL=clusterserviceversion-f65c0993e4efa0234c14.js.map