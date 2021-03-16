(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-service-broker"],{

/***/ "./public/components/cluster-service-broker.tsx":
/*!******************************************************!*\
  !*** ./public/components/cluster-service-broker.tsx ***!
  \******************************************************/
/*! exports provided: ClusterServiceBrokerDetailsPage, ClusterServiceBrokerList, ClusterServiceBrokerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBrokerDetailsPage", function() { return ClusterServiceBrokerDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBrokerList", function() { return ClusterServiceBrokerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBrokerPage", function() { return ClusterServiceBrokerPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _cluster_service_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cluster-service-class */ "./public/components/cluster-service-class.tsx");









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-3', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-3', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-3', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-3', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass];
const ClusterServiceBrokerTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Status',
            sortFunc: 'serviceCatalogStatus',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Provider',
            sortFunc: 'spec',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        // {
        //   title: 'Relist Behavior',
        //   sortField: 'spec.relistBehavior',
        //   transforms: [sortable],
        //   props: { className: tableColumnClasses[2] },
        // },
        // {
        //   title: 'Last Retrieved',
        //   sortField: 'status.lastCatalogRetrievalTime',
        //   transforms: [sortable],
        //   props: { className: tableColumnClasses[3] },
        // },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ClusterServiceBrokerTableHeader.displayName = 'ClusterServiceBrokerTableHeader';
const ClusterServiceBrokerTableRow = ({ obj: serviceBroker, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: serviceBroker.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), name: serviceBroker.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["StatusWithIcon"], { obj: serviceBroker })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] }, serviceBroker.spec.relistBehavior),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: serviceBroker.status.lastCatalogRetrievalTime })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), resource: serviceBroker }))));
};
const ClusterServiceBrokerDetails = ({ obj: serviceBroker }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Service Broker Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: serviceBroker }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Last Catalog Retrieval Time"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: serviceBroker.status.lastCatalogRetrievalTime })),
                    serviceBroker.spec.insecureSkipTLSVerify && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Insecure Skip TLS Verify"),
                    serviceBroker.spec.insecureSkipTLSVerify && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serviceBroker.spec.insecureSkipTLSVerify)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["StatusWithIcon"], { obj: serviceBroker })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Broker URL"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: serviceBroker.spec.url, text: serviceBroker.spec.url })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Relist Behavior"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serviceBroker.spec.relistBehavior),
                        serviceBroker.spec.relistBehavior === 'Duration' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Relist Duration"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serviceBroker.spec.relistDuration || '-'))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_7__["Conditions"], { conditions: serviceBroker.status.conditions }))));
};
const ServiceClassTabPage = ({ obj }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cluster_service_class__WEBPACK_IMPORTED_MODULE_8__["ClusterServiceClassPage"], { showTitle: false, fieldSelector: `spec.clusterServiceBrokerName=${obj.metadata.name}` });
const ClusterServiceBrokerDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(ClusterServiceBrokerDetails)), _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].editYaml(), _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].clusterServiceClasses(ServiceClassTabPage)] }));
const ClusterServiceBrokerList = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Cluster Service Brokers", Header: ClusterServiceBrokerTableHeader, Row: ClusterServiceBrokerTableRow, virtualize: true }));
const ClusterServiceBrokerPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({}, props, { ListComponent: ClusterServiceBrokerList, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), canCreate: true, showTitle: false }));


/***/ })

}]);
//# sourceMappingURL=cluster-service-broker-d1f0975ca804710453d0.js.map