(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["install-plan"],{

/***/ "./packages/operator-lifecycle-manager/src/components/install-plan.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/install-plan.tsx ***!
  \*****************************************************************************/
/*! exports provided: InstallPlanTableHeader, InstallPlanTableRow, InstallPlansList, InstallPlansPage, InstallPlanDetails, InstallPlanPreview, InstallPlanDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlanTableHeader", function() { return InstallPlanTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlanTableRow", function() { return InstallPlanTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlansList", function() { return InstallPlansList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlansPage", function() { return InstallPlansPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlanDetails", function() { return InstallPlanDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlanPreview", function() { return InstallPlanPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlanDetailsPage", function() { return InstallPlanDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/types.ts");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _modals_installplan_preview_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/installplan-preview-modal */ "./packages/operator-lifecycle-manager/src/components/modals/installplan-preview-modal.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");

















const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_5__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_5__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_5__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].columnClass,
];
const componentsTableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_5__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_5__('pf-m-hidden', 'pf-m-visible-on-lg'),
];
const InstallPlanTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Components',
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Subscriptions',
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
InstallPlanTableHeader.displayName = 'InstallPlanTableHeader';
const InstallPlanTableRow = ({ obj, index, key, style }) => {
    const phaseFor = (phase) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["Status"], { status: phase });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]), namespace: obj.metadata.namespace, name: obj.metadata.name, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace, displayName: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] }, phaseFor(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.phase') || 'Unknown')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-unstyled" }, obj.spec.clusterServiceVersionNames.map((csvName) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: csvName }, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.phase') === 'Complete' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"]), name: csvName, namespace: obj.metadata.namespace, title: csvName })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceIcon"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"]) }),
                csvName))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[4] }, (obj.metadata.ownerReferences || [])
            .filter((ref) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForOwnerRef"])(ref) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]))
            .map((ref) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { key: ref.uid, className: "list-unstyled" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]), name: ref.name, namespace: obj.metadata.namespace, title: ref.uid }))))) || react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceKebab"], { actions: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].factory.common, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]), resource: obj }))));
};
const InstallPlansList = Object(_operator_group__WEBPACK_IMPORTED_MODULE_14__["requireOperatorGroup"])((props) => {
    const EmptyMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["MsgBox"], { title: "No Install Plans Found", detail: "Install Plans are created automatically by subscriptions or manually using the CLI." }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Install Plans", Header: InstallPlanTableHeader, Row: InstallPlanTableRow, EmptyMsg: EmptyMsg })));
});
const getCatalogSources = (installPlan) => lodash__WEBPACK_IMPORTED_MODULE_1__["reduce"](lodash__WEBPACK_IMPORTED_MODULE_1__["get"](installPlan, 'status.plan') || [], (accumulator, { resource: { sourceName, sourceNamespace } }) => accumulator.add(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])({ sourceName, sourceNamespace })), Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Set"])()).toJS();
const InstallPlansPage = (props) => {
    const namespace = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.match, 'params.ns');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["MultiListPage"], Object.assign({}, props, { namespace: namespace, resources: [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]),
                namespace,
                namespaced: true,
                prop: 'installPlan',
            },
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["OperatorGroupModel"]),
                namespace,
                namespaced: true,
                prop: 'operatorGroup',
            },
        ], flatten: (resources) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.installPlan, 'data', []), title: "Install Plans", showTitle: false, ListComponent: InstallPlansList })));
};
const InstallPlanDetails = ({ obj }) => {
    var _a;
    const needsApproval = obj.spec.approval === _types__WEBPACK_IMPORTED_MODULE_13__["InstallPlanApproval"].Manual && obj.spec.approved === false;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        needsApproval && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["HintBlock"], { title: "Review Manual Install Plan" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Inspect the requirements for the components specified in this install plan before approving."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/k8s/ns/${obj.metadata.namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"])}/${obj.metadata.name}/components` },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { variant: "primary" }, "Preview Install Plan"))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Install Plan Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceSummary"], { resource: obj, showAnnotations: false })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'phase', 'Unknown') })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Components"),
                            (obj.spec.clusterServiceVersionNames || []).map((csvName) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: csvName }, obj.status.phase === 'Complete' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"]), name: csvName, namespace: obj.metadata.namespace, title: csvName })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceIcon"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"]) }),
                                csvName))))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Catalog Sources"),
                            getCatalogSources(obj).map(({ sourceName, sourceNamespace }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: `${sourceNamespace}-${sourceName}` },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"]), name: sourceName, namespace: sourceNamespace, title: sourceName }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_8__["Conditions"], { conditions: (_a = obj.status) === null || _a === void 0 ? void 0 : _a.conditions }))));
};
class InstallPlanPreview extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            needsApproval: this.props.obj.spec.approval === _types__WEBPACK_IMPORTED_MODULE_13__["InstallPlanApproval"].Manual &&
                this.props.obj.spec.approved === false,
        };
    }
    render() {
        const { obj } = this.props;
        const subscription = obj.metadata.ownerReferences.find((ref) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForOwnerRef"])(ref) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]));
        const plan = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'plan') || [];
        const stepsByCSV = plan
            .reduce((acc, step) => acc.update(step.resolving, [], (steps) => steps.concat([step])), Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])())
            .toArray();
        const approve = () => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sUpdate"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"], Object.assign(Object.assign({}, obj), { spec: Object.assign(Object.assign({}, obj.spec), { approved: true }) }))
            .then(() => this.setState({ needsApproval: false }))
            .catch((error) => this.setState({ error }));
        const stepStatus = (status) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            status === 'Present' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["GreenCheckCircleIcon"], { className: "co-icon-space-r" }),
            status === 'Created' && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["GreenCheckCircleIcon"], { className: "co-icon-space-r" }),
            status));
        return plan.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            this.state.error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-clusterserviceversion-detail__error-box" }, this.state.error)),
            this.state.needsApproval && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["HintBlock"], { title: "Review Manual Install Plan" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Once approved, the following resources will be created in order to satisfy the requirements for the components specified in the plan. Click the resource name to view the resource in detail."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form__actions" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { variant: "primary", isDisabled: !this.state.needsApproval, onClick: () => approve() }, this.state.needsApproval ? 'Approve' : 'Approved'),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { variant: "secondary", isDisabled: false, onClick: () => _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["history"].push(`/k8s/ns/${obj.metadata.namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"])}/${subscription.name}?showDelete=true`) }, "Deny")))))),
            stepsByCSV.map((steps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: steps[0].resolving, className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: steps[0].resolving }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "pf-c-table pf-m-compact pf-m-border-rows" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { className: componentsTableColumnClasses[0] }, "Name"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { className: componentsTableColumnClasses[1] }, "Kind"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { className: componentsTableColumnClasses[2] }, "Status"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { className: componentsTableColumnClasses[3] }, "API Version"))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, steps.map((step) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: `${Object(_index__WEBPACK_IMPORTED_MODULE_16__["referenceForStepResource"])(step.resource)}-${step.resource.name}` },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: componentsTableColumnClasses[0] }, ['Present', 'Created'].includes(step.status) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_index__WEBPACK_IMPORTED_MODULE_16__["referenceForStepResource"])(step.resource), namespace: obj.metadata.namespace, name: step.resource.name, title: step.resource.name })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceIcon"], { kind: Object(_index__WEBPACK_IMPORTED_MODULE_16__["referenceForStepResource"])(step.resource) }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "button", onClick: () => Object(_modals_installplan_preview_modal__WEBPACK_IMPORTED_MODULE_15__["installPlanPreviewModal"])({ stepResource: step.resource }), variant: "link" }, step.resource.name)))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: componentsTableColumnClasses[1] }, step.resource.kind),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: componentsTableColumnClasses[2] }, stepStatus(step.status)),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: componentsTableColumnClasses[3] }, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["apiVersionForReference"])(Object(_index__WEBPACK_IMPORTED_MODULE_16__["referenceForStepResource"])(step.resource)))))))))))))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["MsgBox"], { title: "No Components Resolved", detail: "This install plan has not been fully resolved yet." })));
    }
}
const InstallPlanDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { namespace: props.match.params.ns, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]), name: props.match.params.name, pages: [
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].details(InstallPlanDetails),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].editYaml(),
        { href: 'components', name: 'Components', component: InstallPlanPreview },
    ], menuActions: [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]), ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].factory.common] })));
InstallPlansList.displayName = 'InstallPlansList';
InstallPlansPage.displayName = 'InstallPlansPage';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/modals/installplan-preview-modal.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/installplan-preview-modal.tsx ***!
  \*************************************************************************************************/
/*! exports provided: installPlanPreviewModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installPlanPreviewModal", function() { return installPlanPreviewModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");






const InstallPlanPreview = ({ cancel, stepResource }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null,
        "Install Plan Preview",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { linkTo: false, name: stepResource.name, kind: Object(_index__WEBPACK_IMPORTED_MODULE_5__["referenceForStepResource"])(stepResource) })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], { value: Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(JSON.parse(stepResource.manifest)) })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], { inProgress: false },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form pf-c-form__actions--right pf-c-form__group--no-top-margin" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", onClick: () => cancel() }, "OK")))));
const installPlanPreviewModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(InstallPlanPreview);
InstallPlanPreview.displayName = 'InstallPlanPreview';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-group.tsx ***!
  \*******************************************************************************/
/*! exports provided: targetNamespacesFor, operatorNamespaceFor, operatorGroupFor, NoOperatorGroupMsg, OperatorGroupSelector, requireOperatorGroup, supports, isGlobal, isSingle, subscriptionFor, installedFor, providedAPIsFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetNamespacesFor", function() { return targetNamespacesFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorNamespaceFor", function() { return operatorNamespaceFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorGroupFor", function() { return operatorGroupFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOperatorGroupMsg", function() { return NoOperatorGroupMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorGroupSelector", function() { return OperatorGroupSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireOperatorGroup", function() { return requireOperatorGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGlobal", function() { return isGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingle", function() { return isSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionFor", function() { return subscriptionFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedFor", function() { return installedFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providedAPIsFor", function() { return providedAPIsFor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils_status_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/status-box */ "./public/components/utils/status-box.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/types.ts");









const targetNamespacesFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.targetNamespaces']);
const operatorNamespaceFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.operatorNamespace']);
const operatorGroupFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.operatorGroup']);
const NoOperatorGroupMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_status_box__WEBPACK_IMPORTED_MODULE_3__["MsgBox"], { title: "Namespace Not Enabled", detail: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
        "The Operator Lifecycle Manager will not watch this namespace because it is not configured with an OperatorGroup.",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/ns/${Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__["getActiveNamespace"])()}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"])}/~new` }, "Create one here.")) }));
const OperatorGroupSelector = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/utils/list-dropdown */ "./public/components/utils/list-dropdown.jsx")).then((m) => m.ListDropdown), onChange: props.onChange ||
        function () {
            return null;
        }, desc: "Operator Groups", placeholder: "Select Operator Group", selectedKeyKind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"]), dataFilter: props.dataFilter, resources: [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"]),
            fieldSelector: `metadata.name!=${props.excludeName}`,
        },
    ] }));
const requireOperatorGroup = (Component) => {
    var _a;
    return _a = class RequireOperatorGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
            render() {
                const namespaceEnabled = !lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.props.operatorGroup, 'loaded') || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.props.operatorGroup.data);
                return namespaceEnabled ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, this.props)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NoOperatorGroupMsg, null);
            }
        },
        _a.WrappedComponent = Component,
        _a;
};
/**
 * Logic consistent with https://github.com/operator-framework/operator-lifecycle-manager/blob/4ef074e4207f5518d95ddf8c378036dfc4270dda/pkg/api/apis/operators/v1alpha1/clusterserviceversion.go#L165.
 */
const supports = (set) => (obj) => {
    const namespaces = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'namespaces') || [];
    const supportedModes = set.filter(({ supported }) => supported).map(({ type }) => type);
    if (namespaces.length === 0) {
        return false;
    }
    if (namespaces.length === 1) {
        if (namespaces[0] === obj.metadata.namespace) {
            return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeOwnNamespace);
        }
        if (namespaces[0] === '') {
            return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeAllNamespaces);
        }
        return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeSingleNamespace);
    }
    if (namespaces.length > 1 &&
        !supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeMultiNamespace)) {
        return false;
    }
    if (namespaces.length > 1) {
        if (namespaces.includes(obj.metadata.namespace) &&
            !supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeOwnNamespace)) {
            return false;
        }
        if (namespaces.includes('')) {
            return false;
        }
    }
    return true;
};
const isGlobal = (obj) => supports([{ type: _types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeAllNamespaces, supported: true }])(obj);
const isSingle = (obj) => supports([{ type: _types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeSingleNamespace, supported: true }])(obj);
/**
 * Determines if a given Operator package has a `Subscription` that makes it available in the given namespace.
 * Finds any `Subscriptions` for the given package, matches them to their `OperatorGroup`, and checks if the `OperatorGroup` is targeting the given namespace or if it is global.
 */
const subscriptionFor = (allSubscriptions = []) => (allGroups = []) => (pkgName) => (ns = '') => {
    return allSubscriptions
        .filter((sub) => sub.spec.name === pkgName)
        .find((sub) => allGroups.some((og) => og.metadata.namespace === sub.metadata.namespace &&
        (isGlobal(og) || lodash__WEBPACK_IMPORTED_MODULE_1__["get"](og.status, 'namespaces', []).includes(ns))));
};
const installedFor = (allSubscriptions = []) => (allGroups = []) => (pkgName) => (ns = '') => {
    return !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](subscriptionFor(allSubscriptions)(allGroups)(pkgName)(ns));
};
const providedAPIsFor = (og) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](og.metadata.annotations, 'olm.providedAPIs', '')
    .split(',')
    .map((api) => ({
    group: api
        .split('.')
        .slice(2)
        .join('.'),
    version: api.split('.')[1],
    kind: api.split('.')[0],
}))
    .map(({ group, version, kind }) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForGroupVersionKind"])(group)(version)(kind));
NoOperatorGroupMsg.displayName = 'NoOperatorGroupMsg';


/***/ })

}]);
//# sourceMappingURL=install-plan-6b067fc71b0b60aeffac.js.map