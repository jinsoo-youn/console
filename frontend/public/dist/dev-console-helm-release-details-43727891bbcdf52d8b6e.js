(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-helm-release-details"],{

/***/ "./packages/dev-console/src/actions/modify-helm-release.ts":
/*!*****************************************************************!*\
  !*** ./packages/dev-console/src/actions/modify-helm-release.ts ***!
  \*****************************************************************/
/*! exports provided: deleteHelmRelease, upgradeHelmRelease, rollbackHelmRelease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHelmRelease", function() { return deleteHelmRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradeHelmRelease", function() { return upgradeHelmRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollbackHelmRelease", function() { return rollbackHelmRelease; });
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modals */ "./packages/dev-console/src/components/modals/index.ts");



const deleteHelmRelease = (releaseName, namespace, redirect) => {
    return {
        label: 'Uninstall Helm Release',
        callback: () => {
            Object(_components_modals__WEBPACK_IMPORTED_MODULE_2__["deleteResourceModal"])({
                blocking: true,
                resourceName: releaseName,
                resourceType: 'Helm Release',
                actionLabel: 'Uninstall',
                redirect,
                onSubmit: () => {
                    return _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_0__["coFetchJSON"].delete(`/api/helm/release?name=${releaseName}&ns=${namespace}`, null, null, -1);
                },
            });
        },
    };
};
const upgradeHelmRelease = (releaseName, namespace, actionOrigin) => ({
    label: 'Upgrade',
    callback: () => {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(`/helm-releases/ns/${namespace}/${releaseName}/upgrade?actionOrigin=${actionOrigin}`);
    },
});
const rollbackHelmRelease = (releaseName, namespace, actionOrigin) => ({
    label: 'Rollback',
    callback: () => {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(`/helm-releases/ns/${namespace}/${releaseName}/rollback?actionOrigin=${actionOrigin}`);
    },
});


/***/ }),

/***/ "./packages/dev-console/src/components/custom-resource-list/CustomResourceList.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/custom-resource-list/CustomResourceList.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_filter_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/filter-toolbar */ "./public/components/filter-toolbar.tsx");






const CustomResourceList = ({ resources, loaded = true, EmptyMsg, queryArg, rowFilters, rowFilterReducer, textFilter, textFilterReducer, resourceHeader, resourceRow, sortBy, sortOrder, }) => {
    const applyFilters = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        const queryArgument = queryArg ? Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["getQueryArgument"])(queryArg) : undefined;
        const activeFilters = queryArgument === null || queryArgument === void 0 ? void 0 : queryArgument.split(',');
        const params = new URLSearchParams(window.location.search);
        const filteredText = params.get(textFilter);
        let filteredItems = resources;
        if (activeFilters) {
            filteredItems = rowFilterReducer(filteredItems, activeFilters);
        }
        if (filteredText) {
            filteredItems = textFilterReducer(filteredItems, filteredText);
        }
        return filteredItems;
    }, [resources, queryArg, rowFilterReducer, textFilter, textFilterReducer]);
    const filteredListItems = applyFilters();
    if (!loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resources)) {
        return EmptyMsg ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EmptyMsg, null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["EmptyStateVariant"].full },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "No resources found")));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        (rowFilters || textFilter) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_filter_toolbar__WEBPACK_IMPORTED_MODULE_5__["FilterToolbar"], { rowFilters: rowFilters, data: resources, textFilter: textFilter, hideLabelFilter: true, reduxIDs: [] })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], { data: filteredListItems, defaultSortField: sortBy, defaultSortOrder: sortOrder, "aria-label": "CustomResources", Header: resourceHeader, Row: resourceRow, loaded: loaded, virtualize: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](CustomResourceList));


/***/ }),

/***/ "./packages/dev-console/src/components/helm/HelmReleaseDetailsPage.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/HelmReleaseDetailsPage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _details_HelmReleaseDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/HelmReleaseDetails */ "./packages/dev-console/src/components/helm/details/HelmReleaseDetails.tsx");






const handleNamespaceChange = (newNamespace) => {
    if (newNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_NAMESPACES_KEY"]) {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push('/helm-releases/all-namespaces');
    }
    else {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push('/helm-releases/ns/:ns');
    }
};
const HelmReleaseDetailsPage = ({ match }) => {
    const namespace = match.params.ns;
    const helmReleaseName = match.params.name;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_4__["default"], { variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_4__["NamespacedPageVariants"].light, hideApplications: true, onNamespaceChange: handleNamespaceChange },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: [
                {
                    namespace,
                    kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"].kind,
                    prop: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"].id,
                    isList: true,
                    selector: { name: `${helmReleaseName}` },
                },
            ] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_details_HelmReleaseDetails__WEBPACK_IMPORTED_MODULE_5__["default"], { match: match }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseDetailsPage);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/HelmReleaseDetails.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/HelmReleaseDetails.tsx ***!
  \*********************************************************************************/
/*! exports provided: LoadedHelmReleaseDetails, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedHelmReleaseDetails", function() { return LoadedHelmReleaseDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/error */ "./public/components/error.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/modify-helm-release */ "./packages/dev-console/src/actions/modify-helm-release.ts");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");
/* harmony import */ var _helm_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");
/* harmony import */ var _resources_HelmReleaseResources__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources/HelmReleaseResources */ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResources.tsx");
/* harmony import */ var _overview_HelmReleaseOverview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overview/HelmReleaseOverview */ "./packages/dev-console/src/components/helm/details/overview/HelmReleaseOverview.tsx");
/* harmony import */ var _history_HelmReleaseHistory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history/HelmReleaseHistory */ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistory.tsx");
/* harmony import */ var _notes_HelmReleaseNotes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notes/HelmReleaseNotes */ "./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotes.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const SecretReference = 'Secret';
const HelmReleaseReference = 'HelmRelease';
const LoadedHelmReleaseDetails = ({ match, secret, helmReleaseData, }) => {
    const namespace = match.params.ns;
    if (!helmReleaseData || !secret || (!secret.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](secret.loadError))) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
    }
    if (secret.loadError) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["StatusBox"], { loaded: secret.loaded, loadError: secret.loadError });
    }
    const secretResources = secret.data;
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](secretResources))
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_error__WEBPACK_IMPORTED_MODULE_4__["ErrorPage404"], null);
    const sortedSecretResources = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](secretResources, (o) => Number(o.metadata.labels.version), 'desc');
    const latestReleaseSecret = sortedSecretResources[0];
    const secretName = latestReleaseSecret === null || latestReleaseSecret === void 0 ? void 0 : latestReleaseSecret.metadata.name;
    const releaseName = helmReleaseData === null || helmReleaseData === void 0 ? void 0 : helmReleaseData.name;
    const title = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        releaseName,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Badge"], { isRead: true, style: { verticalAlign: 'middle', marginLeft: 'var(--pf-global--spacer--md)' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"](latestReleaseSecret === null || latestReleaseSecret === void 0 ? void 0 : latestReleaseSecret.metadata.labels.status) }))));
    const menuActions = [
        () => Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__["upgradeHelmRelease"])(releaseName, namespace, _helm_types__WEBPACK_IMPORTED_MODULE_9__["HelmActionOrigins"].details),
        () => Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__["rollbackHelmRelease"])(releaseName, namespace, _helm_types__WEBPACK_IMPORTED_MODULE_9__["HelmActionOrigins"].details),
        () => Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__["deleteHelmRelease"])(releaseName, namespace, `/helm-releases/ns/${namespace}`),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], { kindObj: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"], match: match, menuActions: menuActions, name: secretName, namespace: namespace, customData: helmReleaseData, breadcrumbsFor: () => [
            {
                name: `Helm Releases`,
                path: `/helm-releases/ns/${namespace}`,
            },
            { name: `Helm Release Details`, path: `${match.url}` },
        ], title: title, kind: SecretReference, pages: [
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(_overview_HelmReleaseOverview__WEBPACK_IMPORTED_MODULE_12__["default"]),
            {
                href: 'resources',
                name: 'Resources',
                component: _resources_HelmReleaseResources__WEBPACK_IMPORTED_MODULE_11__["default"],
            },
            {
                href: 'history',
                name: 'Revision History',
                component: _history_HelmReleaseHistory__WEBPACK_IMPORTED_MODULE_13__["default"],
            },
            {
                href: 'releasenotes',
                name: 'Release Notes',
                component: _notes_HelmReleaseNotes__WEBPACK_IMPORTED_MODULE_14__["default"],
            },
        ], customKind: HelmReleaseReference }));
};
const HelmReleaseDetails = ({ secret, match }) => {
    const namespace = match.params.ns;
    const helmReleaseName = match.params.name;
    const [helmReleaseData, setHelmReleaseData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let ignore = false;
        const getHelmReleases = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const helmReleases = yield Object(_helm_utils__WEBPACK_IMPORTED_MODULE_10__["fetchHelmReleases"])(namespace);
                if (!ignore) {
                    const releaseData = helmReleases.find((release) => release.name === helmReleaseName);
                    setHelmReleaseData(releaseData);
                }
                // eslint-disable-next-line no-empty
            }
            catch (_a) { }
        });
        getHelmReleases();
        return () => {
            ignore = true;
        };
    }, [helmReleaseName, namespace]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadedHelmReleaseDetails, { match: match, secret: secret, helmReleaseData: helmReleaseData }));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseDetails);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistory.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/history/HelmReleaseHistory.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _custom_resource_list_CustomResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../custom-resource-list/CustomResourceList */ "./packages/dev-console/src/components/custom-resource-list/CustomResourceList.tsx");
/* harmony import */ var _HelmReleaseHistoryRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HelmReleaseHistoryRow */ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryRow.tsx");
/* harmony import */ var _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HelmReleaseHistoryHeader */ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryHeader.tsx");








const HelmReleaseHistory = ({ match, obj }) => {
    const namespace = match.params.ns;
    const helmReleaseName = match.params.name;
    const [revisionsLoaded, setRevisionsLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [revisions, setRevisions] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const memoizedObj = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["useDeepCompareMemoize"])(obj);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let destroyed = false;
        Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(`/api/helm/release/history?ns=${namespace}&name=${helmReleaseName}`)
            .then((items) => {
            if (!destroyed) {
                setLoadError(null);
                setRevisionsLoaded(true);
                setRevisions(items);
            }
        })
            .catch((err) => {
            if (!destroyed) {
                setRevisionsLoaded(true);
                setLoadError(err.message || 'Unable to load Helm Release history');
            }
        });
        return () => {
            destroyed = true;
        };
    }, [helmReleaseName, namespace, memoizedObj]);
    if (loadError) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["StatusBox"], { loaded: true, loadError: loadError, label: "Helm Release history" });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_custom_resource_list_CustomResourceList__WEBPACK_IMPORTED_MODULE_5__["default"], { resources: revisions, loaded: revisionsLoaded, sortBy: "version", sortOrder: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["SortByDirection"].desc, resourceRow: _HelmReleaseHistoryRow__WEBPACK_IMPORTED_MODULE_6__["default"], resourceHeader: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["default"] }));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseHistory);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryHeader.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryHeader.tsx ***!
  \***********************************************************************************************/
/*! exports provided: tableColumnClasses, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const tableColumnClasses = {
    revision: 'col-lg-1 col-md-3 col-sm-3 col-xs-3',
    updated: 'col-lg-2 col-md-3 col-sm-5 col-xs-5',
    status: 'col-lg-1 col-md-2 hidden-sm hidden-xs',
    chartName: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    chartVersion: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    appVersion: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    description: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    kebab: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].columnClass,
};
const HelmReleaseHistoryHeader = () => {
    return [
        {
            title: 'Revision',
            sortField: 'version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.revision },
        },
        {
            title: 'Updated',
            sortField: 'info.last_deployed',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.updated },
        },
        {
            title: 'Status',
            sortField: 'info.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.status },
        },
        {
            title: 'Chart Name',
            sortField: 'chart.metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.chartName },
        },
        {
            title: 'Chart Version',
            sortField: 'chart.metadata.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.chartVersion },
        },
        {
            title: 'App Version',
            sortField: 'chart.metadata.appVersion',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.appVersion },
        },
        {
            title: 'Description',
            props: { className: tableColumnClasses.description },
        },
        {
            title: '',
            props: { className: tableColumnClasses.kebab },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseHistoryHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryRow.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryRow.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HelmReleaseHistoryHeader */ "./packages/dev-console/src/components/helm/details/history/HelmReleaseHistoryHeader.tsx");








const confirmModalRollbackHelmRelease = (releaseName, namespace, revision) => {
    const message = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        "Are you sure you want to rollback ",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, releaseName),
        " to",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null,
            "Revision ",
            revision),
        "?"));
    const payload = {
        namespace,
        name: releaseName,
        version: revision,
    };
    const executeFn = () => _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_6__["coFetchJSON"].patch('/api/helm/release', payload);
    return {
        label: `Rollback to Revision ${revision}`,
        callback: () => {
            Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_5__["confirmModal"])({
                title: 'Rollback',
                btnText: 'Rollback',
                message,
                executeFn,
            });
        },
    };
};
const HelmReleaseHistoryRow = ({ obj, index, key, style }) => {
    const menuActions = [confirmModalRollbackHelmRelease(obj.name, obj.namespace, obj.version)];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: obj.revision, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].revision }, obj.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].updated },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: obj.info.last_deployed })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"](obj.info.status) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].chartName }, obj.chart.metadata.name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].chartVersion }, obj.chart.metadata.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].appVersion }, obj.chart.metadata.appVersion),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].description }, obj.info.description),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseHistoryHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].kebab },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"], { options: menuActions }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseHistoryRow);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotes.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotes.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_markdown_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/markdown-view */ "./public/components/markdown-view.tsx");
/* harmony import */ var _HelmReleaseNotesEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelmReleaseNotesEmptyState */ "./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotesEmptyState.tsx");



const HelmReleaseNotes = ({ customData }) => {
    var _a, _b;
    const helmReleaseNotes = (_b = (_a = customData === null || customData === void 0 ? void 0 : customData.info) === null || _a === void 0 ? void 0 : _a.notes) !== null && _b !== void 0 ? _b : '';
    return helmReleaseNotes ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_markdown_view__WEBPACK_IMPORTED_MODULE_1__["SyncMarkdownView"], { content: helmReleaseNotes }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HelmReleaseNotesEmptyState__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseNotes);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotesEmptyState.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotesEmptyState.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



const HelmReleaseNotesEmptyState = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateVariant"].full },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], { icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["InfoCircleIcon"] }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "md" }, "No Release Notes Available"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "Release Notes are not available for this Helm Chart.")));
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseNotesEmptyState);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/overview/HelmChartSummary.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/overview/HelmChartSummary.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const HelmChartSummary = ({ obj, helmRelease }) => {
    if (!helmRelease)
        return null;
    const { chart: { metadata: { name: chartName, version: chartVersion, appVersion }, }, info: { last_deployed: updated }, } = helmRelease;
    const { metadata: { labels: { version: revision }, }, } = obj;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Chart Name"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, chartName),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Chart Version"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, chartVersion),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "App Version"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, appVersion),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Revision"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, revision),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Updated"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Timestamp"], { timestamp: updated }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmChartSummary);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/overview/HelmReleaseOverview.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/overview/HelmReleaseOverview.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _HelmChartSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelmChartSummary */ "./packages/dev-console/src/components/helm/details/overview/HelmChartSummary.tsx");



const HelmReleaseOverview = ({ obj, customData }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: "Helm Release Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: obj, customPathName: 'metadata.labels.name' })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HelmChartSummary__WEBPACK_IMPORTED_MODULE_2__["default"], { helmRelease: customData, obj: obj })))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseOverview);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResources.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/resources/HelmReleaseResources.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _helm_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");
/* harmony import */ var _HelmReleaseResourcesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HelmReleaseResourcesList */ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesList.tsx");






const HelmReleaseResources = ({ match, customData }) => {
    const namespace = match.params.ns;
    const helmManifest = customData ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoadAll"])(customData.manifest) : [];
    const helmManifestResources = helmManifest.map((resource) => {
        const resourceKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resource);
        const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(resourceKind);
        return Object.assign(Object.assign({}, (model.namespaced ? { namespace } : {})), { kind: model.crd ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(model) : model.kind, name: resource.metadata.name, prop: `${resource.metadata.name}-${resource.kind.toLowerCase()}`, isList: false, optional: true });
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["MultiListPage"], { filterLabel: "Resources by name", resources: helmManifestResources, flatten: _helm_utils__WEBPACK_IMPORTED_MODULE_4__["flattenReleaseResources"], label: "Resources", ListComponent: _HelmReleaseResourcesList__WEBPACK_IMPORTED_MODULE_5__["default"] }));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseResources);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesHeader.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesHeader.tsx ***!
  \***************************************************************************************************/
/*! exports provided: tableColumnClasses, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");

const tableColumnClasses = {
    name: 'col-lg-4 col-md-4 col-sm-4 col-xs-6',
    type: 'col-lg-2 col-md-2 col-sm-4 col-xs-6',
    status: 'col-lg-2 col-md-3 col-sm-4 hidden-xs',
    created: 'col-lg-4 col-md-3 hidden-sm hidden-xs',
};
const HelmReleaseResourcesHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.name },
        },
        {
            title: 'Type',
            sortField: 'kind',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.type },
        },
        {
            title: 'Status',
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.status },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.created },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseResourcesHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesList.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesList.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HelmReleaseResourcesHeader */ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesHeader.tsx");
/* harmony import */ var _HelmReleaseResourcesRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelmReleaseResourcesRow */ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesRow.tsx");





const HelmReleaseResourcesList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["Table"], Object.assign({}, props, { "aria-label": "Resources", defaultSortField: "kind", Header: _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_3__["default"], Row: _HelmReleaseResourcesRow__WEBPACK_IMPORTED_MODULE_4__["default"], EmptyMsg: () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["MsgBox"], { title: "No Resources Found" }), virtualize: true })));
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseResourcesList);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesRow.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesRow.tsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HelmReleaseResourcesHeader */ "./packages/dev-console/src/components/helm/details/resources/HelmReleaseResourcesHeader.tsx");








const HelmReleaseResourcesRow = ({ obj: resource, index, key, style, }) => {
    var _a;
    const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resource);
    const status = ((_a = resource.status) === null || _a === void 0 ? void 0 : _a.replicas) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePath"])(kind, resource.metadata.name, resource.metadata.namespace)}/pods`, title: "pods" },
        resource.status.replicas || 0,
        " of ",
        resource.spec.replicas,
        " pods")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resource.status, 'phase', 'Created') }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: resource.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].name },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: resource.metadata.name, namespace: resource.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].type }, resource.kind),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].status }, status),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: _HelmReleaseResourcesHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].created },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: resource.metadata.creationTimestamp }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseResourcesRow);


/***/ }),

/***/ "./public/components/markdown-view.tsx":
/*!*********************************************!*\
  !*** ./public/components/markdown-view.tsx ***!
  \*********************************************/
/*! exports provided: SyncMarkdownView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncMarkdownView", function() { return SyncMarkdownView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/dist/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_3__);




const tableTags = ['table', 'thead', 'tbody', 'tr', 'th', 'td'];
const markdownConvert = (markdown) => {
    const unsafeHtml = new showdown__WEBPACK_IMPORTED_MODULE_2__["Converter"]({
        tables: true,
        openLinksInNewWindow: true,
        strikethrough: true,
        emoji: true,
    }).makeHtml(markdown);
    return sanitize_html__WEBPACK_IMPORTED_MODULE_3__(unsafeHtml, {
        allowedTags: [
            'b',
            'i',
            'strike',
            's',
            'del',
            'em',
            'strong',
            'a',
            'p',
            'h1',
            'h2',
            'h3',
            'h4',
            'ul',
            'ol',
            'li',
            'code',
            'pre',
            ...tableTags,
        ],
        allowedAttributes: {
            a: ['href', 'target', 'rel'],
        },
        allowedSchemes: ['http', 'https', 'mailto'],
        transformTags: {
            a: sanitize_html__WEBPACK_IMPORTED_MODULE_3__["simpleTransform"]('a', { rel: 'noopener noreferrer' }, true),
        },
    });
};
class SyncMarkdownView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.updateDimensions();
    }
    updateDimensions() {
        var _a, _b;
        if (!((_b = (_a = this.frame) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.document.body.firstChild)) {
            return;
        }
        this.frame.style.height = `${this.frame.contentWindow.document.body.firstChild.scrollHeight}px`;
        // Let the new height take effect, then reset again once we recompute
        setTimeout(() => {
            if (this.props.exactHeight) {
                this.frame.style.height = `${this.frame.contentWindow.document.body.firstChild.scrollHeight}px`;
            }
            else {
                // Increase by 15px for the case where a horizontal scrollbar might appear
                this.frame.style.height = `${this.frame.contentWindow.document.body.firstChild
                    .scrollHeight + 15}px`;
            }
        });
    }
    render() {
        // Find the app's stylesheets and inject them into the frame to ensure consistent styling.
        const filteredLinks = Array.from(document.getElementsByTagName('link')).filter((l) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](l.href, 'app-bundle'));
        const linkRefs = lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](filteredLinks, (refs, link) => `${refs}
        <link rel="stylesheet" href="${link.href}">`, '');
        const contents = `
      ${linkRefs}
      <style type="text/css">
      body {
        background-color: transparent !important;
        color: ${this.props.content ? '#333' : '#999'};
        font-family: var(--pf-global--FontFamily--sans-serif);
        min-width: auto !important;
      }
      table {
        display: block;
        margin-bottom: 11.5px;
        overflow-x: auto;
      }
      td,
      th {
        border-bottom: 1px solid #ededed;
        padding: 10px;
        vertical-align: top;
      }
      th {
        padding-top: 0;
      }
      ${this.props.styles ? this.props.styles : ''}
      </style>
      <body class="pf-m-redhat-font"><div style="overflow-y: auto;">${markdownConvert(this.props.content || 'Not available')}</div></body>`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", { sandbox: "allow-popups allow-same-origin", srcDoc: contents, style: { border: '0px', display: 'block', width: '100%', height: '0' }, ref: (r) => (this.frame = r), onLoad: () => this.updateDimensions() }));
    }
}


/***/ }),

/***/ 204:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 205:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 206:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 207:
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 208:
/*!***********************!*\
  !*** chalk (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 209:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=dev-console-helm-release-details-43727891bbcdf52d8b6e.js.map