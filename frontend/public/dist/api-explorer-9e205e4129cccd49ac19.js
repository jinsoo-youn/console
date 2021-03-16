(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["api-explorer"],{

/***/ "./public/components/api-explorer.tsx":
/*!********************************************!*\
  !*** ./public/components/api-explorer.tsx ***!
  \********************************************/
/*! exports provided: APIExplorerPage, APIResourcePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIExplorerPage", function() { return APIExplorerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIResourcePage", function() { return APIResourcePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../kinds */ "./public/kinds.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _row_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./row-filter */ "./public/components/row-filter.jsx");
/* harmony import */ var _default_resource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default-resource */ "./public/components/default-resource.jsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _factory_table_filters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./factory/table-filters */ "./public/components/factory/table-filters.ts");
/* harmony import */ var _resource_pages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resource-pages */ "./public/components/resource-pages.ts");
/* harmony import */ var _sidebars_explore_type_sidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sidebars/explore-type-sidebar */ "./public/components/sidebars/explore-type-sidebar.tsx");






















const mapStateToProps = (state) => {
    return {
        activeNamespace: state.UI.get('activeNamespace'),
    };
};
const getAPIResourceLink = (activeNamespace, model) => {
    const ref = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(model);
    if (!model.namespaced) {
        return `/api-resource/cluster/${ref}`;
    }
    if (activeNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"]) {
        return `/api-resource/all-namespaces/${ref}`;
    }
    return `/api-resource/ns/${activeNamespace}/${ref}`;
};
const APIResourceLink_ = ({ activeNamespace, model, }) => {
    const to = getAPIResourceLink(activeNamespace, model);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-icon--fixed-width hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["ResourceIcon"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(model) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: to, className: "co-resource-item__resource-name" }, model.kind)));
};
const APIResourceLink = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(APIResourceLink_);
const EmptyAPIResourcesMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["EmptyBox"], { label: "API Resources" });
const Group = ({ value }) => {
    if (!value) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "-");
    }
    const [first, ...rest] = value.split('.');
    return lodash_es__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](rest) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, value)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        first,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
            ".",
            rest.join('.'))));
};
const tableClasses = [
    'col-lg-3 col-md-3 col-sm-5 col-xs-4',
    'col-lg-2 col-md-2 col-sm-4 col-xs-4',
    'col-lg-2 col-md-2 col-sm-3 col-xs-4',
    'col-lg-2 hidden-md hidden-sm hidden-xs',
    'col-lg-3 col-md-5 hidden-sm hidden-xs',
];
const APIResourceHeader = () => [
    {
        title: 'Kind',
        sortField: 'kind',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__["sortable"]],
        props: { className: tableClasses[0] },
    },
    {
        title: 'Group',
        sortField: 'apiGroup',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__["sortable"]],
        props: { className: tableClasses[1] },
    },
    {
        title: 'Version',
        sortField: 'apiVersion',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__["sortable"]],
        props: { className: tableClasses[2] },
    },
    {
        title: 'Namespaced',
        sortField: 'namespaced',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__["sortable"]],
        props: { className: tableClasses[3] },
    },
    {
        title: 'Description',
        props: { className: tableClasses[4] },
    },
];
const APIResourceRows = ({ componentProps: { data } }) => lodash_es__WEBPACK_IMPORTED_MODULE_4__["map"](data, (model) => [
    {
        title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](APIResourceLink, { model: model }),
        props: { className: tableClasses[0] },
    },
    {
        title: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-select-to-copy" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { value: model.apiGroup }))),
        props: { className: tableClasses[1] },
    },
    {
        title: model.apiVersion,
        props: { className: tableClasses[2] },
    },
    {
        title: model.namespaced ? 'true' : 'false',
        props: { className: tableClasses[3] },
    },
    {
        title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-line-clamp" }, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getResourceDescription"])(model)),
        props: { className: tableClasses[4] },
    },
]);
const stateToProps = ({ k8s }) => ({
    models: k8s.getIn(['RESOURCES', 'models']),
});
const APIResourcesList = Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps))(({ models, location }) => {
    const ALL = '#all#';
    const GROUP_PARAM = 'g';
    const VERSION_PARAM = 'v';
    const TEXT_FILTER_PARAM = 'q';
    const SCOPE_PARAM = 's';
    const search = new URLSearchParams(location.search);
    // Differentiate between an empty group and an unspecified param.
    const groupFilter = search.has(GROUP_PARAM) ? search.get(GROUP_PARAM) : ALL;
    const versionFilter = search.get(VERSION_PARAM) || ALL;
    const textFilter = search.get(TEXT_FILTER_PARAM) || '';
    const scopeFilter = search.get(SCOPE_PARAM) || ALL;
    // group options
    const groups = models.reduce((result, { apiGroup }) => {
        return apiGroup ? result.add(apiGroup) : result;
    }, new Set());
    const sortedGroups = [...groups].sort();
    const groupOptions = sortedGroups.reduce((result, group) => {
        result[group] = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { value: group });
        return result;
    }, { [ALL]: 'All Groups', '': 'No Group' });
    const groupSpacer = new Set();
    if (sortedGroups.length) {
        groupSpacer.add(sortedGroups[0]);
    }
    const autocompleteGroups = (text, item, key) => {
        return key !== ALL && fuzzysearch__WEBPACK_IMPORTED_MODULE_6__(text, key);
    };
    // version options
    const versions = models.reduce((result, { apiVersion }) => {
        return result.add(apiVersion);
    }, new Set());
    const sortedVersions = [...versions].sort();
    const versionOptions = sortedVersions.reduce((result, version) => {
        result[version] = version;
        return result;
    }, { [ALL]: 'All Versions' });
    const versionSpacer = new Set();
    if (sortedVersions.length) {
        versionSpacer.add(sortedVersions[0]);
    }
    const scopeOptions = {
        [ALL]: 'All Scopes',
        cluster: 'Cluster',
        namespace: 'Namespace',
    };
    const scopeSpacer = new Set(['cluster']);
    // filter by group, version, or text
    const filteredResources = models.filter(({ kind, apiGroup, apiVersion, namespaced }) => {
        if (groupFilter !== ALL && (apiGroup || '') !== groupFilter) {
            return false;
        }
        if (versionFilter !== ALL && apiVersion !== versionFilter) {
            return false;
        }
        if (scopeFilter === 'cluster' && namespaced) {
            return false;
        }
        if (scopeFilter === 'namespace' && !namespaced) {
            return false;
        }
        if (textFilter) {
            return Object(_factory_table_filters__WEBPACK_IMPORTED_MODULE_18__["fuzzyCaseInsensitive"])(textFilter, kind);
        }
        return true;
    });
    // Put models with no API group (core k8s resources) at the top.
    const sortedResources = lodash_es__WEBPACK_IMPORTED_MODULE_4__["sortBy"](filteredResources.toArray(), [
        ({ apiGroup }) => apiGroup || '1',
        'apiVersion',
        'kind',
    ]);
    const updateURL = (k, v) => {
        if (v === ALL) {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["removeQueryArgument"])(k);
        }
        else {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["setQueryArgument"])(k, v);
        }
    };
    const onGroupSelected = (group) => updateURL(GROUP_PARAM, group);
    const onVersionSelected = (version) => updateURL(VERSION_PARAM, version);
    const onScopeSelected = (scope) => updateURL(SCOPE_PARAM, scope);
    const setTextFilter = (text) => {
        if (!text) {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["removeQueryArgument"])(TEXT_FILTER_PARAM);
        }
        else {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["setQueryArgument"])(TEXT_FILTER_PARAM, text);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { autocompleteFilter: autocompleteGroups, items: groupOptions, onChange: onGroupSelected, selectedKey: groupFilter, spacerBefore: groupSpacer, title: groupOptions[groupFilter], className: "btn-group" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { items: versionOptions, onChange: onVersionSelected, selectedKey: versionFilter, spacerBefore: versionSpacer, title: versionOptions[versionFilter], className: "btn-group" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { items: scopeOptions, onChange: onScopeSelected, selectedKey: scopeFilter, spacerBefore: scopeSpacer, title: scopeOptions[scopeFilter], className: "btn-group" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group co-m-pane__filter-bar-group--filter" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_17__["TextFilter"], { value: textFilter, label: "by kind", onChange: setTextFilter }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_17__["Table"], { EmptyMsg: EmptyAPIResourcesMsg, Header: APIResourceHeader, Rows: APIResourceRows, "aria-label": "API Resources", data: sortedResources, loaded: !!models.size, virtualize: false }))));
});
APIResourcesList.displayName = 'APIResourcesList';
const APIExplorerPage = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Explore API Resources")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-nav-title" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, "Explore API Resources")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](APIResourcesList, null)));
APIExplorerPage.displayName = 'APIExplorerPage';
const APIResourceDetails = ({ customData: { kindObj } }) => {
    const { kind, apiGroup, apiVersion, namespaced, verbs, shortNames } = kindObj;
    const description = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["getResourceDescription"])(kindObj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Kind"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, kind),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "API Group"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-select-to-copy" }, apiGroup || '-'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "API Version"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, apiVersion),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Namespaced"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, namespaced ? 'true' : 'false'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Verbs"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, verbs.join(', ')),
            shortNames && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], { content: "Short names can be used to match this resource on the CLI." },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Short Names"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, shortNames.join(', ')))),
            description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Description"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { className: "co-break-word co-pre-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["LinkifyExternal"], null, description)))))));
};
const scrollTop = () => (document.getElementById('content-scrollable').scrollTop = 0);
const APIResourceSchema = ({ customData: { kindObj } }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_sidebars_explore_type_sidebar__WEBPACK_IMPORTED_MODULE_20__["ExploreType"], { kindObj: kindObj, scrollTop: scrollTop })));
};
const APIResourceInstances = ({ customData: { kindObj, namespace }, }) => {
    const componentLoader = _resource_pages__WEBPACK_IMPORTED_MODULE_19__["resourceListPages"].get(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(kindObj), () => Promise.resolve(_default_resource__WEBPACK_IMPORTED_MODULE_16__["DefaultPage"]));
    const ns = kindObj.namespaced ? namespace : undefined;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["AsyncComponent"], { loader: componentLoader, namespace: ns, kind: kindObj.crd ? Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(kindObj) : kindObj.kind, showTitle: false, autoFocus: false }));
};
const Subject = ({ value }) => {
    const [first, ...rest] = value.split(':');
    return first === 'system' && !lodash_es__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](rest) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
            first,
            ":"),
        rest.join(':'))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, value));
};
const AccessTableHeader = () => [
    {
        title: 'Subject',
        sortField: 'name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__["sortable"]],
    },
    {
        title: 'Type',
        sortField: 'type',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_8__["sortable"]],
    },
];
const AccessTableRows = ({ componentProps: { data } }) => lodash_es__WEBPACK_IMPORTED_MODULE_4__["map"](data, (subject) => [
    {
        title: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-break-word co-select-to-copy" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Subject, { value: subject.name }))),
    },
    {
        title: subject.type,
    },
]);
const EmptyAccessReviewMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["EmptyBox"], { label: "Subjects" });
const APIResourceAccessReview = ({ customData: { kindObj, namespace }, }) => {
    const { apiGroup, apiVersion, namespaced, plural, verbs } = kindObj;
    // state
    const [verb, setVerb] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_4__["first"](verbs));
    const [filter, setFilter] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [showUsers, setShowUsers] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [showGroups, setShowGroups] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [showServiceAccounts, setShowServiceAccounts] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [accessResponse, setAccessResponse] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    // perform the access review
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        setError(null);
        const accessReviewModel = namespace
            ? _models__WEBPACK_IMPORTED_MODULE_12__["LocalResourceAccessReviewsModel"]
            : _models__WEBPACK_IMPORTED_MODULE_12__["ResourceAccessReviewsModel"];
        const req = {
            apiVersion: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["apiVersionForModel"])(accessReviewModel),
            kind: accessReviewModel.kind,
            namespace,
            resourceAPIVersion: apiVersion,
            resourceAPIGroup: apiGroup,
            resource: plural,
            verb,
        };
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_13__["k8sCreate"])(accessReviewModel, req, { ns: namespace })
            .then(setAccessResponse)
            .catch(setError);
    }, [apiGroup, apiVersion, plural, namespace, verb]);
    if (error) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["LoadError"], { message: error.message, label: "Access Review", className: "loading-box loading-box__errored" }));
    }
    if (!accessResponse) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["LoadingBox"], null);
    }
    // break into users, groups, and service accounts
    const users = [];
    const serviceAccounts = [];
    lodash_es__WEBPACK_IMPORTED_MODULE_4__["each"](accessResponse.users, (name) => {
        if (name.startsWith('system:serviceaccount:')) {
            serviceAccounts.push({ name, type: 'ServiceAccount' });
        }
        else {
            users.push({ name, type: 'User' });
        }
    });
    const groups = lodash_es__WEBPACK_IMPORTED_MODULE_4__["map"](accessResponse.groups, (name) => ({ name, type: 'Group' }));
    // filter and sort
    const verbOptions = lodash_es__WEBPACK_IMPORTED_MODULE_4__["zipObject"](verbs, verbs);
    const data = [
        ...(showUsers ? users : []),
        ...(showGroups ? groups : []),
        ...(showServiceAccounts ? serviceAccounts : []),
    ];
    const allSelected = showUsers && showGroups && showServiceAccounts;
    const itemCount = accessResponse.users.length + accessResponse.groups.length;
    const selectedCount = data.length;
    const filteredData = data.filter(({ name }) => fuzzysearch__WEBPACK_IMPORTED_MODULE_6__(filter, name));
    const sortedData = lodash_es__WEBPACK_IMPORTED_MODULE_4__["orderBy"](filteredData, ['type', 'name'], ['asc', 'asc']);
    // event handlers
    const toggleShowUsers = (e) => {
        e.preventDefault();
        setShowUsers(!showUsers);
    };
    const toggleShowGroups = (e) => {
        e.preventDefault();
        setShowGroups(!showGroups);
    };
    const toggleShowServiceAccounts = (e) => {
        e.preventDefault();
        setShowServiceAccounts(!showServiceAccounts);
    };
    const onSelectAll = (e) => {
        e.preventDefault();
        setShowUsers(true);
        setShowGroups(true);
        setShowServiceAccounts(true);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { items: verbOptions, onChange: (v) => setVerb(v), selectedKey: verb, titlePrefix: "Verb" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__filter-bar-group co-m-pane__filter-bar-group--filter" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_17__["TextFilter"], { defaultValue: filter, label: "by subject", onChange: (val) => setFilter(val) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_row_filter__WEBPACK_IMPORTED_MODULE_15__["CheckBoxControls"], { allSelected: allSelected, itemCount: itemCount, selectedCount: selectedCount, onSelectAll: onSelectAll },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_row_filter__WEBPACK_IMPORTED_MODULE_15__["CheckBox"], { title: "User", active: showUsers, number: users.length, toggle: toggleShowUsers }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_row_filter__WEBPACK_IMPORTED_MODULE_15__["CheckBox"], { title: "Group", active: showGroups, number: groups.length, toggle: toggleShowGroups }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_row_filter__WEBPACK_IMPORTED_MODULE_15__["CheckBox"], { title: "ServiceAccount", active: showServiceAccounts, number: serviceAccounts.length, toggle: toggleShowServiceAccounts })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" },
                "The following subjects can ",
                verb,
                " ",
                plural,
                namespaced && namespace && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    " in namespace ",
                    namespace),
                namespaced && !namespace && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " in all namespaces"),
                !namespaced && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " at the cluster scope"),
                "."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_17__["Table"], { EmptyMsg: EmptyAccessReviewMsg, Header: AccessTableHeader, Rows: AccessTableRows, "aria-label": "API Resources", data: sortedData, loaded: true, virtualize: false }))));
};
const APIResourcePage_ = ({ match, kindObj, kindsInFlight, flags, }) => {
    const namespace = (kindObj === null || kindObj === void 0 ? void 0 : kindObj.namespaced) ? match.params.ns : undefined;
    const canCreateResourceAccessReview = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["useAccessReview"])({
        group: namespace
            ? _models__WEBPACK_IMPORTED_MODULE_12__["LocalResourceAccessReviewsModel"].apiGroup
            : _models__WEBPACK_IMPORTED_MODULE_12__["ResourceAccessReviewsModel"].apiGroup,
        resource: namespace
            ? _models__WEBPACK_IMPORTED_MODULE_12__["LocalResourceAccessReviewsModel"].plural
            : _models__WEBPACK_IMPORTED_MODULE_12__["ResourceAccessReviewsModel"].plural,
        namespace,
        verb: 'create',
    });
    if (!kindObj) {
        return kindsInFlight ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["LoadingBox"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--center" }, "404: Not Found")));
    }
    const breadcrumbs = [
        {
            name: 'Explore',
            path: '/api-explorer',
        },
        {
            name: 'Resource Details',
            path: match.url,
        },
    ];
    const pages = [
        {
            href: '',
            name: 'Details',
            component: APIResourceDetails,
        },
        {
            href: 'schema',
            name: 'Schema',
            component: APIResourceSchema,
        },
    ];
    if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](kindObj.verbs) || kindObj.verbs.includes('list')) {
        pages.push({
            href: 'instances',
            name: 'Instances',
            component: APIResourceInstances,
        });
    }
    if (flags[_console_shared__WEBPACK_IMPORTED_MODULE_9__["FLAGS"].OPENSHIFT] && canCreateResourceAccessReview) {
        pages.push({
            href: 'access',
            name: 'Access Review',
            component: APIResourceAccessReview,
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["ScrollToTopOnMount"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, kindObj.label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-nav-title co-m-nav-title--detail co-m-nav-title--breadcrumbs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["BreadCrumbs"], { breadcrumbs: breadcrumbs }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading", "data-test-id": "api-explorer-resource-title" }, kindObj.label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["HorizontalNav"], { pages: pages, match: match, customData: { kindObj, namespace }, noStatusBox: true })));
};
const APIResourcePage = Object(_kinds__WEBPACK_IMPORTED_MODULE_11__["connectToModel"])(Object(_reducers_features__WEBPACK_IMPORTED_MODULE_14__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_9__["FLAGS"].OPENSHIFT)(APIResourcePage_));


/***/ }),

/***/ "./public/components/sidebars/explore-type-sidebar.tsx":
/*!*************************************************************!*\
  !*** ./public/components/sidebars/explore-type-sidebar.tsx ***!
  \*************************************************************/
/*! exports provided: ExploreType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreType", function() { return ExploreType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");





const getRef = (definition) => {
    const ref = definition.$ref || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](definition, 'items.$ref');
    const re = /^#\/definitions\//;
    // Only follow JSON pointers, not external URI references.
    return ref && re.test(ref) ? ref.replace(re, '') : null;
};
const ExploreType = (props) => {
    // Track the previously selected items to build breadcrumbs. Each history
    // entry contains the name, description, and path to the definition in the
    // OpenAPI document.
    const [drilldownHistory, setDrilldownHistory] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const { kindObj } = props;
    if (!kindObj) {
        return null;
    }
    const allDefinitions = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["getStoredSwagger"])();
    if (!allDefinitions) {
        return null;
    }
    const currentSelection = lodash_es__WEBPACK_IMPORTED_MODULE_1__["last"](drilldownHistory);
    // Show the current selected property or the top-level definition for the kind.
    const currentPath = currentSelection
        ? currentSelection.path
        : [Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["getDefinitionKey"])(kindObj, allDefinitions)];
    const currentDefinition = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, currentPath) || {};
    const currentProperties = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](currentDefinition, 'properties') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](currentDefinition, 'items.properties');
    // Prefer the description saved in `currentSelection`. It won't always be defined in the definition itself.
    const description = currentSelection
        ? currentSelection.description
        : currentDefinition.description;
    const required = new Set(currentDefinition.required || []);
    const breadcrumbs = drilldownHistory.length
        ? [kindObj.kind, ...lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](drilldownHistory, 'name')]
        : [];
    const drilldown = (e, name, desc, path) => {
        e.preventDefault();
        setDrilldownHistory([...drilldownHistory, { name, description: desc, path }]);
        if (props.scrollTop) {
            props.scrollTop();
        }
    };
    const breadcrumbClicked = (e, i) => {
        e.preventDefault();
        setDrilldownHistory(lodash_es__WEBPACK_IMPORTED_MODULE_1__["take"](drilldownHistory, i));
    };
    // Get the path in the swagger document to additional property details for drilldown.
    // This can be
    // - A reference to another top-level definition
    // - Inline property declartions
    // - Inline property declartions for array items
    const getDrilldownPath = (name) => {
        const path = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["getSwaggerPath"])(allDefinitions, currentPath, name, true);
        // Only allow drilldown if the reference has additional properties to explore.
        const child = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, path);
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](child, 'properties') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](child, 'items.properties') ? path : null;
    };
    // Get the type to display for a property reference.
    const getTypeForRef = (ref) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, [ref, 'format']) || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](allDefinitions, [ref, 'type']);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](breadcrumbs) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], { className: "pf-c-breadcrumb--no-padding-top co-break-word" }, breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], { key: i, isActive: isLast }, isLast ? (crumb) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", onClick: (e) => breadcrumbClicked(e, i), isInline: true, variant: "link" }, crumb))));
        }))),
        description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-break-word co-pre-wrap" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LinkifyExternal"], null, description))),
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](currentProperties) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["EmptyBox"], { label: "Properties" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "co-resource-sidebar-list" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](currentProperties, (definition, name) => {
            const path = getDrilldownPath(name);
            const definitionType = definition.type || getTypeForRef(getRef(definition));
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: name, className: "co-resource-sidebar-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "co-resource-sidebar-item__header co-break-word" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["CamelCaseWrap"], { value: name }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-break-word" }, definitionType),
                        required.has(name) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " \u2013 required"))),
                definition.description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-break-word co-pre-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LinkifyExternal"], null, definition.description))),
                path && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", onClick: (e) => drilldown(e, name, definition.description, path), isInline: true, variant: "link" }, "View details"))));
        })))));
};


/***/ })

}]);
//# sourceMappingURL=api-explorer-9e205e4129cccd49ac19.js.map