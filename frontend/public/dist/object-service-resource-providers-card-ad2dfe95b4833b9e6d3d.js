(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-service-resource-providers-card"],{

/***/ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card-body.tsx":
/*!****************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card-body.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: ResourceProvidersBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceProvidersBody", function() { return ResourceProvidersBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const ResourceProvidersBody = ({ isLoading, hasProviders, children, error, }) => {
    let body;
    if (isLoading) {
        body = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["LoadingInline"], null);
    }
    if (error || !hasProviders) {
        body = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-resource-providers-card__not-available text-secondary" }, "Not available"));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, body || children);
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card-item.tsx":
/*!****************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card-item.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: ResourceProvidersItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceProvidersItem", function() { return ResourceProvidersItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const ResourceProvidersItemStatus = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ status, link }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-resource-providers-card__row-status" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-resource-providers-card__row-status-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: link, style: { textDecoration: 'none' }, target: "_blank", rel: "noopener noreferrer" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["RedExclamationCircleIcon"], { className: "co-dashboard-icon nb-resource-providers-card__status-icon" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "nb-resource-providers-card__row-status-item-text" }, status))))));
const ResourceProvidersItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ title, count, unhealthyProviders, link }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-inventory-card__item" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-resource-providers-card__row-title" }, `${count} ${title}`),
    !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](unhealthyProviders[title]) && unhealthyProviders[title] > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ResourceProvidersItemStatus, { status: unhealthyProviders[title], link: link })) : null)));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card.scss":
/*!************************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: ResourceProvidersCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceProvidersCard", function() { return ResourceProvidersCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils/index */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/dashboard/with-dashboard-resources */ "./public/components/dashboard/with-dashboard-resources.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _resource_providers_card_body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resource-providers-card-body */ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card-body.tsx");
/* harmony import */ var _resource_providers_card_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource-providers-card-item */ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card-item.tsx");
/* harmony import */ var _resource_providers_card_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resource-providers-card.scss */ "./packages/noobaa-storage-plugin/src/components/resource-providers-card/resource-providers-card.scss");
/* harmony import */ var _resource_providers_card_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_resource_providers_card_scss__WEBPACK_IMPORTED_MODULE_11__);












const RESOURCE_PROVIDERS_QUERY = {
    PROVIDERS_TYPES: ' NooBaa_cloud_types',
    UNHEALTHY_PROVIDERS_TYPES: 'NooBaa_unhealthy_cloud_types',
    RESOURCES_LINK_QUERY: 'NooBaa_system_links',
};
const getProviderType = (provider) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](provider, 'metric.type', null);
const getProviderCount = (provider) => Number(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](provider, 'value[1]', null));
const filterProviders = (allProviders) => {
    return lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](allProviders).filter((provider) => allProviders[provider] > 0);
};
const createProvidersList = (data) => {
    const providers = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](data, 'data.result', null);
    const providersList = {};
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](providers))
        return {};
    providers.forEach((provider) => {
        providersList[getProviderType(provider)] = getProviderCount(provider);
    });
    return providersList;
};
const ResourceProviders = ({ watchPrometheus, stopWatchPrometheusQuery, prometheusResults, }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        watchPrometheus(RESOURCE_PROVIDERS_QUERY.PROVIDERS_TYPES);
        watchPrometheus(RESOURCE_PROVIDERS_QUERY.UNHEALTHY_PROVIDERS_TYPES);
        return () => {
            stopWatchPrometheusQuery(RESOURCE_PROVIDERS_QUERY.PROVIDERS_TYPES);
            stopWatchPrometheusQuery(RESOURCE_PROVIDERS_QUERY.UNHEALTHY_PROVIDERS_TYPES);
        };
    }, [watchPrometheus, stopWatchPrometheusQuery]);
    const providersTypesQueryResult = prometheusResults.getIn([
        RESOURCE_PROVIDERS_QUERY.PROVIDERS_TYPES,
        'data',
    ]);
    const providersTypesQueryResultError = prometheusResults.getIn([
        RESOURCE_PROVIDERS_QUERY.PROVIDERS_TYPES,
        'loadError',
    ]);
    const unhealthyProvidersTypesQueryResult = prometheusResults.getIn([
        RESOURCE_PROVIDERS_QUERY.UNHEALTHY_PROVIDERS_TYPES,
        'data',
    ]);
    const unhealthyProvidersTypesQueryResultError = prometheusResults.getIn([
        RESOURCE_PROVIDERS_QUERY.UNHEALTHY_PROVIDERS_TYPES,
        'loadError',
    ]);
    const resourcesLinksResponse = prometheusResults.getIn([
        RESOURCE_PROVIDERS_QUERY.RESOURCES_LINK_QUERY,
        'data',
    ]);
    const resourcesLinksResponseError = prometheusResults.getIn([
        RESOURCE_PROVIDERS_QUERY.RESOURCES_LINK_QUERY,
        'loadError',
    ]);
    const error = !!providersTypesQueryResultError ||
        !!unhealthyProvidersTypesQueryResultError ||
        !!resourcesLinksResponseError;
    const noobaaResourcesLink = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getMetric"])(resourcesLinksResponse, 'resources');
    const allProviders = createProvidersList(providersTypesQueryResult);
    const unhealthyProviders = createProvidersList(unhealthyProvidersTypesQueryResult);
    const providerTypes = filterProviders(allProviders);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Resource Providers"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_index__WEBPACK_IMPORTED_MODULE_6__["FieldLevelHelp"], null, "A list of all MCG (Multi-cloud gateway) resources that are currently in use. Those resources are used to store data according to the buckets policies and can be a cloud-based resource or a bare metal resource.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_providers_card_body__WEBPACK_IMPORTED_MODULE_9__["ResourceProvidersBody"], { isLoading: !error && !(providersTypesQueryResult && unhealthyProvidersTypesQueryResult), hasProviders: !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](allProviders), error: error }, providerTypes.map((provider) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resource_providers_card_item__WEBPACK_IMPORTED_MODULE_10__["ResourceProvidersItem"], { count: allProviders[provider], key: provider, link: noobaaResourcesLink, title: provider, unhealthyProviders: unhealthyProviders })))))));
};
const ResourceProvidersCard = Object(_console_internal_components_dashboard_with_dashboard_resources__WEBPACK_IMPORTED_MODULE_7__["withDashboardResources"])(ResourceProviders);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/utils.ts ***!
  \*****************************************************/
/*! exports provided: filterNooBaaAlerts, getGaugeValue, getMetric, getPhase, isBound, getSCProvisioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNooBaaAlerts", function() { return filterNooBaaAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeValue", function() { return getGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetric", function() { return getMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhase", function() { return getPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBound", function() { return isBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCProvisioner", function() { return getSCProvisioner; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterNooBaaAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'NooBaa');
const getGaugeValue = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'data.result[0].value[1]');
const getMetric = (result, metric) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, ['data', 'result', '0', 'metric', metric], null);
const getPhase = (obj) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.phase', 'Lost');
};
const isBound = (obj) => getPhase(obj) === 'Bound';
const getSCProvisioner = (obj) => obj.provisioner;


/***/ })

}]);
//# sourceMappingURL=object-service-resource-providers-card-ad2dfe95b4833b9e6d3d.js.map