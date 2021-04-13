(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-helm-install-upgrade~dev-console-helm-release-details~dev-console-helm-releases-list~dev~5a7857d2"],{

/***/ "./packages/dev-console/src/components/NamespacedPage.scss":
/*!*****************************************************************!*\
  !*** ./packages/dev-console/src/components/NamespacedPage.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/NamespacedPage.tsx":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/components/NamespacedPage.tsx ***!
  \****************************************************************/
/*! exports provided: NamespacedPageVariants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespacedPageVariants", function() { return NamespacedPageVariants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown/ApplicationSelector */ "./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx");
/* harmony import */ var _NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NamespacedPage.scss */ "./packages/dev-console/src/components/NamespacedPage.scss");
/* harmony import */ var _NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NamespacedPage_scss__WEBPACK_IMPORTED_MODULE_4__);





var NamespacedPageVariants;
(function (NamespacedPageVariants) {
    NamespacedPageVariants["light"] = "light";
    NamespacedPageVariants["default"] = "default";
})(NamespacedPageVariants || (NamespacedPageVariants = {}));
const NamespacedPage = ({ children, disabled, onNamespaceChange, hideApplications = true, variant = NamespacedPageVariants.default, toolbar, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["NamespaceBar"], { disabled: disabled, onNamespaceChange: onNamespaceChange },
        !hideApplications && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: disabled }),
        toolbar && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page__toolbar" }, toolbar)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-namespaced-page__content', {
            [`is-${variant}`]: variant !== NamespacedPageVariants.default,
        }) }, children)));
/* harmony default export */ __webpack_exports__["default"] = (NamespacedPage);


/***/ }),

/***/ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_kubevirt_plugin_src_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/kubevirt-plugin/src/models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
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






const ApplicationDropdown = (_a) => {
    var { namespace } = _a, props = __rest(_a, ["namespace"]);
    const resources = [
        {
            isList: true,
            namespace,
            kind: 'DeploymentConfig',
            prop: 'deploymentConfigs',
        },
        {
            isList: true,
            namespace,
            kind: 'Deployment',
            prop: 'deployments',
        },
        {
            isList: true,
            kind: 'StatefulSet',
            namespace,
            prop: 'statefulSets',
        },
        {
            isList: true,
            kind: 'DaemonSet',
            namespace,
            prop: 'daemonSets',
        },
        {
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"]),
            namespace,
            prop: 'knativeService',
            optional: true,
        },
        {
            isList: true,
            kind: 'Secret',
            namespace,
            prop: 'secrets',
        },
        {
            isList: true,
            kind: _console_kubevirt_plugin_src_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"].kind,
            namespace,
            prop: 'virtualMachines',
            optional: true,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["ResourceDropdown"], Object.assign({}, props, { placeholder: "Select an Application", dataSelector: ['metadata', 'labels', 'app.kubernetes.io/part-of'] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ApplicationDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/ApplicationSelector.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _ApplicationDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationDropdown */ "./packages/dev-console/src/components/dropdown/ApplicationDropdown.tsx");






const ApplicationSelector = ({ namespace, application, onChange, disabled }) => {
    if (namespace === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_NAMESPACES_KEY"])
        return null;
    const allApplicationsTitle = 'all applications';
    const title = application === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"] ? allApplicationsTitle : application;
    const onApplicationChange = (newApplication, key) => {
        key === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"] ? onChange(key) : onChange(newApplication);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "co-namespace-selector", menuClassName: "co-namespace-selector__menu", buttonClassName: "pf-m-plain", namespace: namespace, title: title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "btn-link__title" }, title), titlePrefix: "Application", allSelectorItem: {
            allSelectorKey: _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"],
            allSelectorTitle: allApplicationsTitle,
        }, selectedKey: application || _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_APPLICATIONS_KEY"], onChange: onApplicationChange, storageKey: _console_shared__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_LOCAL_STORAGE_KEY"], disabled: disabled }));
};
const mapStateToProps = (state) => ({
    namespace: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveNamespace"])(state),
    application: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveApplication"])(state),
});
const mapDispatchToProps = (dispatch) => ({
    onChange: (app) => {
        dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_3__["setActiveApplication"])(app));
    },
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ApplicationSelector));


/***/ }),

/***/ "./packages/dev-console/src/components/helm/helm-types.ts":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/helm-types.ts ***!
  \****************************************************************/
/*! exports provided: HelmReleaseStatus, HelmActionType, HelmActionOrigins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmReleaseStatus", function() { return HelmReleaseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmActionType", function() { return HelmActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmActionOrigins", function() { return HelmActionOrigins; });
var HelmReleaseStatus;
(function (HelmReleaseStatus) {
    HelmReleaseStatus["Deployed"] = "deployed";
    HelmReleaseStatus["Failed"] = "failed";
    HelmReleaseStatus["Other"] = "other";
})(HelmReleaseStatus || (HelmReleaseStatus = {}));
var HelmActionType;
(function (HelmActionType) {
    HelmActionType["Install"] = "Install";
    HelmActionType["Upgrade"] = "Upgrade";
    HelmActionType["Rollback"] = "Rollback";
})(HelmActionType || (HelmActionType = {}));
var HelmActionOrigins;
(function (HelmActionOrigins) {
    HelmActionOrigins["details"] = "details";
    HelmActionOrigins["list"] = "list";
    HelmActionOrigins["topology"] = "topology";
})(HelmActionOrigins || (HelmActionOrigins = {}));


/***/ }),

/***/ "./packages/dev-console/src/components/helm/helm-utils.ts":
/*!****************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/helm-utils.ts ***!
  \****************************************************************/
/*! exports provided: HelmReleaseStatusLabels, SelectedReleaseStatuses, OtherReleaseStatuses, releaseStatusReducer, helmReleasesRowFilters, filterHelmReleasesByStatus, filterHelmReleasesByName, fetchHelmReleases, getChartURL, getChartVersions, getOriginRedirectURL, getHelmActionConfig, flattenReleaseResources, getChartValuesYAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmReleaseStatusLabels", function() { return HelmReleaseStatusLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedReleaseStatuses", function() { return SelectedReleaseStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherReleaseStatuses", function() { return OtherReleaseStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseStatusReducer", function() { return releaseStatusReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helmReleasesRowFilters", function() { return helmReleasesRowFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHelmReleasesByStatus", function() { return filterHelmReleasesByStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHelmReleasesByName", function() { return filterHelmReleasesByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHelmReleases", function() { return fetchHelmReleases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartURL", function() { return getChartURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartVersions", function() { return getChartVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginRedirectURL", function() { return getOriginRedirectURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmActionConfig", function() { return getHelmActionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenReleaseResources", function() { return flattenReleaseResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartValuesYAML", function() { return getChartValuesYAML; });
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");





const HelmReleaseStatusLabels = {
    [_helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Deployed]: 'Deployed',
    [_helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Failed]: 'Failed',
    [_helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Other]: 'Other',
};
const SelectedReleaseStatuses = [
    _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Deployed,
    _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Failed,
    _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Other,
];
const OtherReleaseStatuses = [
    'unknown',
    'uninstalled',
    'superseded',
    'uninstalling',
    'pending-install',
    'pending-upgrade',
    'pending-rollback',
];
const releaseStatusReducer = (release) => {
    if (OtherReleaseStatuses.includes(release.info.status)) {
        return _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Other;
    }
    return release.info.status;
};
const helmReleasesRowFilters = [
    {
        filterGroupName: 'Status',
        type: 'helm-release-status',
        reducer: releaseStatusReducer,
        items: SelectedReleaseStatuses.map((status) => ({
            id: status,
            title: HelmReleaseStatusLabels[status],
        })),
    },
];
const filterHelmReleasesByStatus = (releases, filter) => {
    return releases.filter((release) => {
        return OtherReleaseStatuses.includes(release.info.status)
            ? filter.includes(_helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmReleaseStatus"].Other)
            : filter.includes(release.info.status);
    });
};
const filterHelmReleasesByName = (releases, filter) => {
    return releases.filter((release) => fuzzysearch__WEBPACK_IMPORTED_MODULE_0__(filter, release.name));
};
const fetchHelmReleases = (namespace, helmReleaseName) => {
    const fetchString = `/api/helm/releases?ns=${namespace}${helmReleaseName ? `&name=${helmReleaseName}` : ''}`;
    return Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(fetchString);
};
const getChartURL = (helmChartData, chartVersion) => {
    const chartData = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](helmChartData, (obj) => obj.version === chartVersion);
    return chartData === null || chartData === void 0 ? void 0 : chartData.urls[0];
};
const getChartVersions = (chartEntries) => {
    const chartVersions = lodash__WEBPACK_IMPORTED_MODULE_1__["reduce"](chartEntries, (obj, chart) => {
        obj[chart.version] = chart.version;
        return obj;
    }, {});
    return chartVersions;
};
const getOriginRedirectURL = (actionOrigin, namespace, releaseName) => {
    switch (actionOrigin) {
        case _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionOrigins"].topology:
            return `/topology/ns/${namespace}/graph`;
        case _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionOrigins"].list:
            return `/helm-releases/ns/${namespace}`;
        case _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionOrigins"].details:
            return `/helm-releases/ns/${namespace}/release/${releaseName}`;
        default:
            return `/helm-releases/ns/${namespace}`;
    }
};
const getHelmActionConfig = (helmAction, releaseName, namespace, actionOrigin, chartURL) => {
    switch (helmAction) {
        case _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionType"].Install:
            return {
                title: 'Install Helm Chart',
                subTitle: 'The helm chart will be installed using the YAML shown in the editor below.',
                helmReleaseApi: `/api/helm/chart?url=${chartURL}`,
                fetch: _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"].post,
                redirectURL: getOriginRedirectURL(_helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionOrigins"].topology, namespace, releaseName),
            };
        case _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionType"].Upgrade:
            return {
                title: 'Upgrade Helm Release',
                subTitle: 'Upgrade by selecting a new chart version or manually changing the YAML shown in the editor below.',
                helmReleaseApi: `/api/helm/release?ns=${namespace}&name=${releaseName}`,
                fetch: _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"].put,
                redirectURL: getOriginRedirectURL(actionOrigin, namespace, releaseName),
            };
        case _helm_types__WEBPACK_IMPORTED_MODULE_4__["HelmActionType"].Rollback:
            return {
                title: 'Rollback Helm Release',
                subTitle: ``,
                helmReleaseApi: `/api/helm/release/history?ns=${namespace}&name=${releaseName}`,
                fetch: _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"].patch,
                redirectURL: getOriginRedirectURL(actionOrigin, namespace, releaseName),
            };
        default:
            return undefined;
    }
};
const flattenReleaseResources = (resources) => Object.keys(resources).reduce((acc, kind) => {
    if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resources[kind].data)) {
        acc.push(resources[kind].data);
    }
    return acc;
}, []);
const getChartValuesYAML = (chart) => {
    var _a;
    const orderedValuesFile = (_a = chart === null || chart === void 0 ? void 0 : chart.files) === null || _a === void 0 ? void 0 : _a.find((file) => file.name === 'ordered-values.yaml');
    const orderedValues = orderedValuesFile ? atob(orderedValuesFile.data) : '';
    if (orderedValues)
        return orderedValues;
    return !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](chart === null || chart === void 0 ? void 0 : chart.values) ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeDump"])(chart === null || chart === void 0 ? void 0 : chart.values) : '';
};


/***/ })

}]);
//# sourceMappingURL=dev-console-helm-install-upgrade~dev-console-helm-release-details~dev-console-helm-releases-list~dev~5a7857d2-0dca6b06a69c51565cd7.js.map