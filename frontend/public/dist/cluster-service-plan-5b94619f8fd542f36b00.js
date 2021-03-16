(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-service-plan"],{

/***/ "./public/components/cluster-service-plan.tsx":
/*!****************************************************!*\
  !*** ./public/components/cluster-service-plan.tsx ***!
  \****************************************************/
/*! exports provided: ClusterServicePlanDetailsPage, ClusterServicePlanList, ClusterServicePlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServicePlanDetailsPage", function() { return ClusterServicePlanDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServicePlanList", function() { return ClusterServicePlanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServicePlanPage", function() { return ClusterServicePlanPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/horizontal-nav */ "./public/components/utils/horizontal-nav.tsx");








const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-sm-4', 'hidden-xs'),
];
const ClusterServicePlanTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'External Name',
            sortField: 'spec.externalName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Broker',
            sortField: 'spec.clusterServiceBrokerName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
    ];
};
ClusterServicePlanTableHeader.displayName = 'ClusterServicePlanTableHeader';
const ClusterServicePlanTableRow = ({ obj: servicePlan, index, key, style, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: servicePlan.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServicePlanModel"]), name: servicePlan.metadata.name, displayName: servicePlan.spec.externalName })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[1] }, servicePlan.spec.externalName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[2], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), name: servicePlan.spec.clusterServiceBrokerName, title: servicePlan.spec.clusterServiceBrokerName }))));
};
const ClusterServicePlanDetails = ({ obj: servicePlan, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Service Plan Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: servicePlan })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Description"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, servicePlan.spec.description),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Broker"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceBrokerModel"]), name: servicePlan.spec.clusterServiceBrokerName })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Service Class"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceClassModel"]), name: servicePlan.spec.clusterServiceClassRef.name })),
                    servicePlan.status.removedFromBrokerCatalog && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Removed From Catalog"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, servicePlan.status.removedFromBrokerCatalog))))))));
};
const ClusterServicePlanDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { titleFunc: _module_k8s__WEBPACK_IMPORTED_MODULE_5__["servicePlanDisplayName"], kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServicePlanModel"]), pages: [
        _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(ClusterServicePlanDetails)),
        _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"].editYaml(_utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_7__["viewYamlComponent"]),
    ] })));
const ClusterServicePlanList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Cluster Service Plans", Header: ClusterServicePlanTableHeader, Row: ClusterServicePlanTableRow, virtualize: true })));
const ClusterServicePlanPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({}, props, { ListComponent: ClusterServicePlanList, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServicePlanModel"]), textFilter: "service-plan", canCreate: false })));


/***/ })

}]);
//# sourceMappingURL=cluster-service-plan-5b94619f8fd542f36b00.js.map