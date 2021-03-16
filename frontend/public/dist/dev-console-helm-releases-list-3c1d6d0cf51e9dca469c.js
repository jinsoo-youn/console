(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-helm-releases-list"],{

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

/***/ "./packages/dev-console/src/components/helm/HelmReleaseListPage.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/HelmReleaseListPage.tsx ***!
  \**************************************************************************/
/*! exports provided: HelmReleaseListPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmReleaseListPage", function() { return HelmReleaseListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _list_HelmReleaseList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/HelmReleaseList */ "./packages/dev-console/src/components/helm/list/HelmReleaseList.tsx");







const PageContents = (props) => {
    const { match: { params: { ns: namespace }, }, } = props;
    return namespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageHeading"], { title: "Helm Releases" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_list_HelmReleaseList__WEBPACK_IMPORTED_MODULE_6__["default"], { namespace: namespace }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Helm Releases" }, "Select a project to view the list of Helm Releases"));
};
const PageContentsWithStartGuide = Object(_console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_3__["withStartGuide"])(PageContents);
const HelmReleaseListPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["NamespacedPageVariants"].light, hideApplications: true },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Helm Releases")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageContentsWithStartGuide, Object.assign({}, props))));
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseListPage);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/list/HelmReleaseList.scss":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/list/HelmReleaseList.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/helm/list/HelmReleaseList.tsx":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/list/HelmReleaseList.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _custom_resource_list_CustomResourceList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../custom-resource-list/CustomResourceList */ "./packages/dev-console/src/components/custom-resource-list/CustomResourceList.tsx");
/* harmony import */ var _helm_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");
/* harmony import */ var _HelmReleaseListRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HelmReleaseListRow */ "./packages/dev-console/src/components/helm/list/HelmReleaseListRow.tsx");
/* harmony import */ var _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HelmReleaseListHeader */ "./packages/dev-console/src/components/helm/list/HelmReleaseListHeader.tsx");
/* harmony import */ var _HelmReleaseList_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HelmReleaseList.scss */ "./packages/dev-console/src/components/helm/list/HelmReleaseList.scss");
/* harmony import */ var _HelmReleaseList_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_HelmReleaseList_scss__WEBPACK_IMPORTED_MODULE_12__);













const HelmReleaseList = ({ namespace }) => {
    var _a;
    const secretsCountRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](0);
    const [releasesLoaded, setReleasesLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [releases, setReleases] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const secretResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        isList: true,
        namespace,
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"].kind,
        namespaced: true,
        optional: true,
        selector: { matchLabels: { owner: 'helm' } },
    }), [namespace]);
    const [secretsData, secretsLoaded, secretsLoadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_5__["useK8sWatchResource"])(secretResource);
    const newCount = (_a = secretsData === null || secretsData === void 0 ? void 0 : secretsData.length) !== null && _a !== void 0 ? _a : 0;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        setReleasesLoaded(false);
        secretsCountRef.current = 0;
    }, [namespace]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let destroyed = false;
        if (secretsLoaded && !secretsLoadError) {
            if (newCount === 0) {
                setLoadError(null);
                setReleasesLoaded(true);
                setReleases([]);
            }
            else if (newCount !== secretsCountRef.current) {
                setReleasesLoaded(false);
                Object(_helm_utils__WEBPACK_IMPORTED_MODULE_9__["fetchHelmReleases"])(namespace)
                    .then((helmReleases) => {
                    if (!destroyed) {
                        setReleases(helmReleases);
                        setReleasesLoaded(true);
                        setLoadError(null);
                    }
                })
                    .catch((err) => {
                    if (!destroyed) {
                        setReleasesLoaded(true);
                        setLoadError(err.message || 'Unable to load Helm Releases');
                    }
                });
            }
            secretsCountRef.current = newCount;
        }
        return () => {
            destroyed = true;
        };
    }, [namespace, newCount, secretsLoadError, secretsLoaded]);
    if (secretsLoadError || loadError) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["StatusBox"], { loaded: true, loadError: secretsLoadError || loadError, label: "Helm Releases" });
    }
    const emptyState = () => {
        const helmImage = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "odc-helm-release__empty-list__image", src: Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_7__["getImageForIconClass"])('icon-helm'), alt: "" }));
        const installURL = { pathname: `/catalog/ns/${namespace}`, search: '?kind=%5B"HelmChart"%5D' };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["EmptyStateVariant"].full },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "odc-helm-release__empty-list__title" }, "No Helm Releases found"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["EmptyStateIcon"], { variant: "container", component: helmImage }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: installURL }, "Install a Helm Chart from the developer catalog")));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_custom_resource_list_CustomResourceList__WEBPACK_IMPORTED_MODULE_8__["default"], { resources: releases, loaded: secretsLoaded && releasesLoaded && newCount === secretsCountRef.current, EmptyMsg: emptyState, queryArg: "rowFilter-helm-release-status", textFilter: "name", rowFilters: _helm_utils__WEBPACK_IMPORTED_MODULE_9__["helmReleasesRowFilters"], sortBy: "name", sortOrder: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["SortByDirection"].asc, rowFilterReducer: _helm_utils__WEBPACK_IMPORTED_MODULE_9__["filterHelmReleasesByStatus"], textFilterReducer: _helm_utils__WEBPACK_IMPORTED_MODULE_9__["filterHelmReleasesByName"], resourceRow: _HelmReleaseListRow__WEBPACK_IMPORTED_MODULE_10__["default"], resourceHeader: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_11__["default"] }));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseList);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/list/HelmReleaseListHeader.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/list/HelmReleaseListHeader.tsx ***!
  \*********************************************************************************/
/*! exports provided: tableColumnClasses, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const tableColumnClasses = {
    name: 'col-lg-2 col-md-4 col-sm-4 col-xs-4',
    revision: 'col-lg-2 col-md-3 col-sm-3 col-xs-3',
    updated: 'col-lg-2 col-md-3 col-sm-5 col-xs-5',
    status: 'col-lg-1 col-md-2 hidden-sm hidden-xs',
    chartName: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    chartVersion: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    appVersion: 'col-lg-1 hidden-md hidden-sm hidden-xs',
    kebab: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].columnClass,
};
const HelmReleaseListHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.name },
        },
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
            title: '',
            props: { className: tableColumnClasses.kebab },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseListHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/list/HelmReleaseListRow.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/list/HelmReleaseListRow.tsx ***!
  \******************************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");
/* harmony import */ var _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HelmReleaseListHeader */ "./packages/dev-console/src/components/helm/list/HelmReleaseListHeader.tsx");
/* harmony import */ var _actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/modify-helm-release */ "./packages/dev-console/src/actions/modify-helm-release.ts");









const HelmReleaseListRow = ({ obj, index, key, style }) => {
    const menuActions = [
        Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__["upgradeHelmRelease"])(obj.name, obj.namespace, _helm_types__WEBPACK_IMPORTED_MODULE_6__["HelmActionOrigins"].list),
        Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__["rollbackHelmRelease"])(obj.name, obj.namespace, _helm_types__WEBPACK_IMPORTED_MODULE_6__["HelmActionOrigins"].list),
        Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_8__["deleteHelmRelease"])(obj.name, obj.namespace),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: obj.name, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].name },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: 'Helm Release' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: `/helm-releases/ns/${obj.namespace}/release/${obj.name}`, title: obj.name, className: "co-resource-item__resource-name" }, obj.name)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].revision }, obj.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].updated },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: obj.info.last_deployed })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"](obj.info.status) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].chartName }, obj.chart.metadata.name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].chartVersion }, obj.chart.metadata.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].appVersion }, obj.chart.metadata.appVersion),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _HelmReleaseListHeader__WEBPACK_IMPORTED_MODULE_7__["tableColumnClasses"].kebab },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"], { options: menuActions }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseListRow);


/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.scss":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectListPage.scss */ "./packages/dev-console/src/components/projects/ProjectListPage.scss");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__);
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





const ProjectListPage = (_a) => {
    var { badge, title, children, listComponent } = _a, listPageProps = __rest(_a, ["badge", "title", "children", "listComponent"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-project-list-page" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { title: title, badge: badge }, children),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", { className: "odc-project-list-page__section-border" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, listPageProps, { showTitle: false, kind: "Project", ListComponent: listComponent || _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["ProjectsTable"], canCreate: false, filterLabel: "by name or display name", textFilter: "project-name" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectListPage);


/***/ })

}]);
//# sourceMappingURL=dev-console-helm-releases-list-3c1d6d0cf51e9dca469c.js.map