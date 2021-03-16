(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster-service-class"],{

/***/ "./public/components/cluster-service-class-info.tsx":
/*!**********************************************************!*\
  !*** ./public/components/cluster-service-class-info.tsx ***!
  \**********************************************************/
/*! exports provided: ClusterServiceClassInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceClassInfo", function() { return ClusterServiceClassInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");





const ClusterServiceClassInfo = ({ obj: serviceClass, }) => {
    const displayName = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["serviceClassDisplayName"])(serviceClass);
    const description = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.description');
    const longDescription = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.longDescription');
    const documentationURL = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.documentationUrl');
    const supportURL = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.supportUrl');
    const provider = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.providerDisplayName');
    const tags = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.tags');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-info" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["ClusterServiceClassIcon"], { serviceClass: serviceClass, iconSize: "large" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-section-heading co-catalog-item-details__name" }, displayName),
                provider && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__provider" },
                    "Provided by ",
                    provider),
                tags && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__tags" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](tags, (tag, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__tag", key: i }, tag))))),
                (documentationURL || supportURL) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-inline" },
                    documentationURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-break-word" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: documentationURL, text: "View documentation" }))),
                    supportURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-break-word" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: supportURL, text: "Get support" }))))))),
        description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__description" }, description),
        longDescription && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__description" }, longDescription)));
};


/***/ }),

/***/ "./public/components/cluster-service-class.tsx":
/*!*****************************************************!*\
  !*** ./public/components/cluster-service-class.tsx ***!
  \*****************************************************/
/*! exports provided: ClusterServiceClassDetailsPage, ClusterServiceClassList, ClusterServiceClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceClassDetailsPage", function() { return ClusterServiceClassDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceClassList", function() { return ClusterServiceClassList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceClassPage", function() { return ClusterServiceClassPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/horizontal-nav */ "./public/components/utils/horizontal-nav.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _cluster_service_plan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cluster-service-plan */ "./public/components/cluster-service-plan.tsx");
/* harmony import */ var _cluster_service_class_info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cluster-service-class-info */ "./public/components/cluster-service-class-info.tsx");













const createInstance = (kindObj, serviceClass) => {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](serviceClass, 'status.removedFromBrokerCatalog')) {
        return {
            btnClass: 'pf-c-button pf-m-primary',
            callback: () => {
                _utils__WEBPACK_IMPORTED_MODULE_6__["history"].push(`/catalog/create-service-instance?cluster-service-class=${serviceClass.metadata.name}`);
            },
            label: 'Create Instance',
        };
    }
};
const actionButtons = [createInstance];
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-6', 'col-xs-12'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-3', 'hidden-xs'),
];
const ClusterServiceClassTableHeader = () => {
    return [
        {
            title: 'Display Name',
            sortFunc: 'serviceClassDisplayName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'External Name',
            sortField: 'spec.externalName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Broker',
            sortField: 'spec.clusterServiceBrokerName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
    ];
};
ClusterServiceClassTableHeader.displayName = 'ClusterServiceClassTableHeader';
const ClusterServiceClassTableRow = ({ obj: serviceClass, index, key, style, }) => {
    const path = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["ClusterServiceClassModel"], serviceClass.metadata.name);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: serviceClass.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_10__["ClusterServiceClassIcon"], { serviceClass: serviceClass }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "co-cluster-service-class-link", to: path }, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["serviceClassDisplayName"])(serviceClass))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[1] }, serviceClass.spec.externalName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[2], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["ClusterServiceBrokerModel"]), name: serviceClass.spec.clusterServiceBrokerName }))));
};
const ClusterServiceClassDetails = ({ obj: serviceClass, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-7 col-md-push-5", style: { marginBottom: '20px' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cluster_service_class_info__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceClassInfo"], { obj: serviceClass })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-5 col-md-pull-7" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: "Service Class Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: serviceClass },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "External Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serviceClass.spec.externalName || '-')),
            serviceClass.status.removedFromBrokerCatalog && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Removed From Catalog"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serviceClass.status.removedFromBrokerCatalog)))))));
const ClusterServicePlanTab = ({ obj }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cluster_service_plan__WEBPACK_IMPORTED_MODULE_11__["ClusterServicePlanPage"], { showTitle: false, fieldSelector: `spec.clusterServiceClassRef.name=${obj.metadata.name}` }));
};
const ClusterServiceClassDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { buttonActions: actionButtons, titleFunc: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["serviceClassDisplayName"], kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["ClusterServiceClassModel"]), pages: [
        _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(ClusterServiceClassDetails)),
        _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].editYaml(_utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_7__["viewYamlComponent"]),
        _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].clusterServicePlans(ClusterServicePlanTab),
    ] })));
const ClusterServiceClassList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Cluster Service Classes", Header: ClusterServiceClassTableHeader, Row: ClusterServiceClassTableRow, defaultSortFunc: "serviceClassDisplayName", virtualize: true })));
const ClusterServiceClassPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, props, { showTitle: false, ListComponent: ClusterServiceClassList, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["ClusterServiceClassModel"]), textFilter: "service-class", canCreate: false })));


/***/ }),

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
//# sourceMappingURL=cluster-service-class-95833692f2dc4701bbb1.js.map