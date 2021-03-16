(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingress"],{

/***/ "./public/components/hypercloud/federated-ingress.tsx":
/*!************************************************************!*\
  !*** ./public/components/hypercloud/federated-ingress.tsx ***!
  \************************************************************/
/*! exports provided: menuActions, FederatedIngressDetailsList, FederatedIngresses, FederatedIngressesPage, FederatedIngressesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedIngressDetailsList", function() { return FederatedIngressDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedIngresses", function() { return FederatedIngresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedIngressesPage", function() { return FederatedIngressesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedIngressesDetailsPage", function() { return FederatedIngressesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events */ "./public/components/events.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");









const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__["AddHealthChecks"], _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_8__["FederatedIngressModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_4__["EditHealthChecks"], ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_8__["FederatedIngressModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const FederatedIngressTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortFunc: 'ingressNumScheduled',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Labels',
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Pod Selector',
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
FederatedIngressTableHeader.displayName = 'FederatedIngressTableHeader';
const FederatedIngressTableRow = ({ obj: ingress, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: ingress.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: ingress.metadata.name, namespace: ingress.metadata.namespace, title: ingress.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: ingress.metadata.namespace, title: ingress.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${ingress.metadata.namespace}/ingresss/${ingress.metadata.name}/pods`, title: "pods" },
                ingress.status.currentNumberScheduled,
                " of ",
                ingress.status.desiredNumberScheduled,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LabelList"], { kind: kind, labels: ingress.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Selector"], { selector: ingress.spec.selector, namespace: ingress.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: ingress }))));
};
const FederatedIngressDetailsList = ({ ds }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Current Count", obj: ds, path: "status.currentNumberScheduled" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Desired Count", obj: ds, path: "status.desiredNumberScheduled" })));
const FederatedIngressDetails = ({ obj: ingress }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: "Federated Ingress Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: ingress, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FederatedIngressDetailsList, { ds: ingress })))),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: "Containers" }))));
const { details, editYaml, events } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const FederatedIngresses = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Federated Ingresses", Header: FederatedIngressTableHeader, Row: FederatedIngressTableRow, virtualize: true }));
const FederatedIngressesPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ canCreate: true, ListComponent: FederatedIngresses, kind: kind }, props));
const FederatedIngressesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(FederatedIngressDetails)), editYaml(), events(_events__WEBPACK_IMPORTED_MODULE_7__["ResourceEventStream"])] }));


/***/ })

}]);
//# sourceMappingURL=ingress-89923b1dcfed6bb7ef7c.js.map