(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-binding"],{

/***/ "./public/components/service-binding.tsx":
/*!***********************************************!*\
  !*** ./public/components/service-binding.tsx ***!
  \***********************************************/
/*! exports provided: ServiceBindingDetailsPage, ServiceBindingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBindingDetailsPage", function() { return ServiceBindingDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBindingsPage", function() { return ServiceBindingsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils_kebab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/kebab */ "./public/components/utils/kebab.tsx");
/* harmony import */ var _utils_headings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/headings */ "./public/components/utils/headings.tsx");
/* harmony import */ var _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/horizontal-nav */ "./public/components/utils/horizontal-nav.tsx");
/* harmony import */ var _utils_resource_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _utils_details_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/details-page */ "./public/components/utils/details-page.tsx");
/* harmony import */ var _utils_service_catalog_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/service-catalog-status */ "./public/components/utils/service-catalog-status.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _service_catalog_parameters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service-catalog-parameters */ "./public/components/service-catalog-parameters.tsx");
/* harmony import */ var _service_instance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service-instance */ "./public/components/service-instance.tsx");
/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./secret */ "./public/components/secret.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");



















const actionButtons = [_secret__WEBPACK_IMPORTED_MODULE_17__["addSecretToWorkload"]];
const { common } = _utils_kebab__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const menuActions = [..._utils_kebab__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceBindingModel"]), ...common];
const secretLink = (obj) => Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["serviceCatalogStatus"])(obj) === 'Ready' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: "Secret", name: obj.spec.secretName, title: obj.spec.secretName, namespace: obj.metadata.namespace })) : ('-');
const ServiceBindingDetails = ({ obj: sb }) => {
    const sbParameters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](sb, 'status.externalProperties.parameters', {});
    const notReady = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["serviceCatalogStatus"])(sb) === 'Not Ready' ? true : false;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            notReady && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "warning", title: "This binding is not ready yet" }, "Once it is ready, bind its secret to a workload.")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_service_instance__WEBPACK_IMPORTED_MODULE_16__["ServiceBindingDescription"], { instanceName: sb.spec.instanceRef.name, className: "co-m-pane__explanation" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_headings__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Service Binding Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_details_page__WEBPACK_IMPORTED_MODULE_11__["ResourceSummary"], { resource: sb })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Service Instance"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceInstanceModel"]), name: sb.spec.instanceRef.name, namespace: sb.metadata.namespace })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Secret"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, secretLink(sb)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_service_catalog_status__WEBPACK_IMPORTED_MODULE_12__["StatusWithIcon"], { obj: sb })))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_headings__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_14__["Conditions"], { conditions: sb.status.conditions })),
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](sb.spec.parametersFrom) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_service_catalog_parameters__WEBPACK_IMPORTED_MODULE_15__["ServiceCatalogParametersSecrets"], { obj: sb }),
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](sbParameters) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_service_catalog_parameters__WEBPACK_IMPORTED_MODULE_15__["ServiceCatalogParameters"], { parameters: sbParameters })));
};
const pages = [
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_9__["navFactory"].details(ServiceBindingDetails),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_9__["navFactory"].editYaml(),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_9__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_13__["ResourceEventStream"]),
];
const ServiceBindingDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceBindingModel"]), buttonActions: actionButtons, menuActions: menuActions, pages: pages })));
ServiceBindingDetailsPage.displayName = 'ServiceBindingDetailsPage';
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _utils_kebab__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass,
];
const ServiceBindingsTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortFunc: 'serviceCatalogStatus',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Service Instance',
            sortField: 'spec.instanceRef.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Secret',
            sortField: 'spec.secretName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
ServiceBindingsTableHeader.displayName = 'ServiceBindingsTableHeader';
const ServiceBindingsTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceBindingModel"]), name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[2], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_service_catalog_status__WEBPACK_IMPORTED_MODULE_12__["StatusWithIcon"], { obj: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[3], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_10__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceInstanceModel"]), name: obj.spec.instanceRef.name, title: obj.spec.instanceRef.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[4], 'co-break-word') }, secretLink(obj)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_kebab__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceBindingModel"]), resource: obj }))));
};
const ServiceBindingsList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Service Bindings", Header: ServiceBindingsTableHeader, Row: ServiceBindingsTableRow, virtualize: true })));
ServiceBindingsList.displayName = 'ServiceBindingsList';
const ServiceBindingsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, props, { namespace: props.namespace || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](props.match, 'params.ns'), showTitle: false, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_18__["ServiceBindingModel"]), ListComponent: ServiceBindingsList })));
ServiceBindingsPage.displayName = 'ServiceBindingsListPage';


/***/ }),

/***/ "./public/components/service-catalog-parameters.tsx":
/*!**********************************************************!*\
  !*** ./public/components/service-catalog-parameters.tsx ***!
  \**********************************************************/
/*! exports provided: ServiceCatalogParametersSecrets, ServiceCatalogParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCatalogParametersSecrets", function() { return ServiceCatalogParametersSecrets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCatalogParameters", function() { return ServiceCatalogParameters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configmap-and-secret-data */ "./public/components/configmap-and-secret-data.tsx");




const ServiceCatalogParametersSecrets = ({ obj: obj, }) => {
    const rows = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](obj.spec.parametersFrom, ({ secretKeyRef }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", key: secretKeyRef.name },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: "Secret", name: secretKeyRef.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" }, secretKeyRef.key))));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: "Parameters Secrets" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" }, "Secret"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" }, "Key")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, rows))));
};
const ServiceCatalogParameters = ({ parameters, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: "Parameters" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-resource__details" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](parameters, (v, k) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: k },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, k),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, v === '<redacted>' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_3__["MaskedData"], null) : v)))))));


/***/ }),

/***/ "./public/components/service-instance.tsx":
/*!************************************************!*\
  !*** ./public/components/service-instance.tsx ***!
  \************************************************/
/*! exports provided: ServiceBindingDescription, ServiceInstanceDetailsPage, ServiceInstancesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBindingDescription", function() { return ServiceBindingDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInstanceDetailsPage", function() { return ServiceInstanceDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInstancesPage", function() { return ServiceInstancesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/link */ "./public/components/utils/link.tsx");
/* harmony import */ var _utils_kebab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/kebab */ "./public/components/utils/kebab.tsx");
/* harmony import */ var _utils_resource_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/resource-icon */ "./public/components/utils/resource-icon.tsx");
/* harmony import */ var _utils_resource_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _utils_details_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/details-page */ "./public/components/utils/details-page.tsx");
/* harmony import */ var _utils_headings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/headings */ "./public/components/utils/headings.tsx");
/* harmony import */ var _utils_service_catalog_status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/service-catalog-status */ "./public/components/utils/service-catalog-status.tsx");
/* harmony import */ var _utils_timestamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/timestamp */ "./public/components/utils/timestamp.tsx");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/horizontal-nav */ "./public/components/utils/horizontal-nav.tsx");
/* harmony import */ var _utils_hint_block__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/hint-block */ "./public/components/utils/hint-block.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _service_catalog_parameters__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service-catalog-parameters */ "./public/components/service-catalog-parameters.tsx");
/* harmony import */ var _service_binding__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service-binding */ "./public/components/service-binding.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
























const goToCreateBindingPage = (serviceInstance) => {
    _utils_router__WEBPACK_IMPORTED_MODULE_16__["history"].push(`/k8s/ns/${serviceInstance.metadata.namespace}/serviceinstances/${serviceInstance.metadata.name}/create-binding`);
};
const createBinding = (kindObj, serviceInstance) => {
    return {
        callback: () => goToCreateBindingPage(serviceInstance),
        label: 'Create Service Binding',
        accessReview: {
            group: _models__WEBPACK_IMPORTED_MODULE_23__["ServiceBindingModel"].apiGroup,
            resource: _models__WEBPACK_IMPORTED_MODULE_23__["ServiceBindingModel"].plural,
            namespace: serviceInstance.metadata.namespace,
            verb: 'create',
        },
    };
};
const { common } = _utils_kebab__WEBPACK_IMPORTED_MODULE_9__["Kebab"].factory;
const menuActions = [
    createBinding,
    ..._utils_kebab__WEBPACK_IMPORTED_MODULE_9__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceInstanceModel"]),
    ...common,
];
const ServiceBindingDescription = ({ instanceName, className, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: className },
    "Service bindings create a secret containing the necessary information for a workload to use",
    ' ',
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_icon__WEBPACK_IMPORTED_MODULE_10__["ResourceIcon"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceInstanceModel"]) }),
    instanceName,
    ". Once the binding is ready, add the secret to your workload's environment variables or volumes."));
class ServiceInstanceMessage_ extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            hasBindings: false,
            loaded: false,
        };
        this.createBinding = () => {
            const { obj } = this.props;
            goToCreateBindingPage(obj);
        };
    }
    componentDidMount() {
        const { obj } = this.props;
        // Get the bindings for this service instance to know what messages to display.
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceBindingModel"], { ns: obj.metadata.namespace }).then((serviceBindings) => {
            const hasBindings = lodash_es__WEBPACK_IMPORTED_MODULE_1__["some"](serviceBindings, {
                spec: { instanceRef: { name: obj.metadata.name } },
            });
            this.setState({ loaded: true, hasBindings });
        });
    }
    render() {
        const { obj, match: { url }, } = this.props;
        const { deletionTimestamp } = obj.metadata;
        const { loaded, hasBindings } = this.state;
        if (!loaded) {
            return null;
        }
        // Warn when the instance is deleted, but is still has bindings.
        if (deletionTimestamp && hasBindings) {
            const basePath = url.replace(/\/$/, '');
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Alert"], { isInline: true, className: "co-alert co-service-instance-delete-bindings-warning", variant: "warning", title: "Service instance still has bindings" },
                "This service instance is marked for deletion, but still has bindings. You must delete the bindings before the instance will be deleted.",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${basePath}/servicebindings` }, "View service bindings")));
        }
        // Show help for creating a binding when there are none for this instance.
        // TODO: Check if the plan is actually bindable.
        if (!deletionTimestamp && !hasBindings) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_hint_block__WEBPACK_IMPORTED_MODULE_18__["HintBlock"], { title: "Create Service Binding" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ServiceBindingDescription, { instanceName: obj.metadata.name }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "primary", onClick: this.createBinding }, "Create Service Binding"))));
        }
        return null;
    }
}
const ServiceInstanceMessage = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ServiceInstanceMessage_);
const ServiceInstanceDetails = ({ obj: si }) => {
    const plan = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["planExternalName"])(si);
    const parameters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](si, 'status.externalProperties.parameters', {});
    const classDisplayName = si.spec.clusterServiceClassExternalName || si.spec.serviceClassExternalName;
    const clusterServiceClassName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](si, 'spec.clusterServiceClassRef.name');
    const dashboardURL = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](si, 'status.dashboardURL');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ServiceInstanceMessage, { obj: si }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_headings__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Service Instance Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_details_page__WEBPACK_IMPORTED_MODULE_12__["ResourceSummary"], { resource: si })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Service Class"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, clusterServiceClassName ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ClusterServiceClassModel"]), displayName: classDisplayName, title: classDisplayName, name: clusterServiceClassName })) : (classDisplayName)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_service_catalog_status__WEBPACK_IMPORTED_MODULE_14__["StatusWithIcon"], { obj: si })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Plan"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, plan || '-'),
                        dashboardURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Dashboard"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_link__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], { href: dashboardURL, text: "View dashboard" })))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_headings__WEBPACK_IMPORTED_MODULE_13__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_20__["Conditions"], { conditions: si.status.conditions })),
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](si.spec.parametersFrom) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_service_catalog_parameters__WEBPACK_IMPORTED_MODULE_21__["ServiceCatalogParametersSecrets"], { obj: si }),
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](parameters) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_service_catalog_parameters__WEBPACK_IMPORTED_MODULE_21__["ServiceCatalogParameters"], { parameters: parameters })));
};
const ServiceBindingsDetails = ({ obj: si }) => {
    const bindingFilters = {
        selector: { field: 'spec.instanceRef.name', values: new Set(lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](si, 'name')) },
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_service_binding__WEBPACK_IMPORTED_MODULE_22__["ServiceBindingsPage"], { canCreate: true, createHandler: () => goToCreateBindingPage(si), namespace: si.metadata.namespace, filters: bindingFilters, autoFocus: false, showTitle: false }));
};
const pages = [
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_17__["navFactory"].details(ServiceInstanceDetails),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_17__["navFactory"].editYaml(),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_17__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_19__["ResourceEventStream"]),
    _utils_horizontal_nav__WEBPACK_IMPORTED_MODULE_17__["navFactory"].serviceBindings(ServiceBindingsDetails),
];
const ServiceInstanceDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceInstanceModel"]), menuActions: menuActions, pages: pages })));
ServiceInstanceDetailsPage.displayName = 'ServiceInstanceDetailsPage';
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-sm'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _utils_kebab__WEBPACK_IMPORTED_MODULE_9__["Kebab"].columnClass,
];
const ServiceInstancesTableHeader = () => {
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
            sortFunc: 'serviceCatalogStatus',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Service Class',
            sortField: 'spec.clusterServiceClassExternalName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Plan',
            sortFunc: 'planExternalName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
ServiceInstancesTableHeader.displayName = 'ServiceInstancesTableHeader';
const ServiceInstancesTableRow = ({ obj, index, key, style }) => {
    const clusterServiceClassRefName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.clusterServiceClassRef.name');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceInstanceModel"]), name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_service_catalog_status__WEBPACK_IMPORTED_MODULE_14__["StatusWithIcon"], { obj: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[3], 'co-break-word') }, clusterServiceClassRefName ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_link__WEBPACK_IMPORTED_MODULE_11__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ClusterServiceClassModel"]), displayName: obj.spec.clusterServiceClassExternalName, title: obj.spec.clusterServiceClassExternalName, name: obj.spec.clusterServiceClassRef.name })) : (obj.spec.clusterServiceClassExternalName)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[4], 'co-break-word') }, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["planExternalName"])(obj) || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[5], 'co-truncate') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_timestamp__WEBPACK_IMPORTED_MODULE_15__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_kebab__WEBPACK_IMPORTED_MODULE_9__["ResourceKebab"], { actions: menuActions, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceInstanceModel"]), resource: obj }))));
};
const ServiceInstancesList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Service Instances", Header: ServiceInstancesTableHeader, Row: ServiceInstancesTableRow, virtualize: true })));
ServiceInstancesList.displayName = 'ServiceInstancesList';
const filters = [
    {
        filterGroupName: 'Status',
        type: 'catalog-status',
        reducer: _module_k8s__WEBPACK_IMPORTED_MODULE_6__["serviceCatalogStatus"],
        items: [
            { id: 'Ready', title: 'Ready' },
            { id: 'Not Ready', title: 'Not Ready' },
            { id: 'Failed', title: 'Failed' },
        ],
    },
];
const ServiceInstancesPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["ListPage"], Object.assign({}, props, { namespace: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](props.match, 'params.ns'), kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_23__["ServiceInstanceModel"]), ListComponent: ServiceInstancesList, rowFilters: filters, showTitle: false })));
ServiceInstancesPage.displayName = 'ServiceInstancesListPage';


/***/ })

}]);
//# sourceMappingURL=service-binding-263e7d7047fcccfe61ef.js.map