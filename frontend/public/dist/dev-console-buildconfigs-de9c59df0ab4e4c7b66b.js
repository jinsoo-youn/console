(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-buildconfigs"],{

/***/ "./packages/dev-console/src/components/BuildConfigPage.tsx":
/*!*****************************************************************!*\
  !*** ./packages/dev-console/src/components/BuildConfigPage.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_build_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/build-config */ "./public/components/build-config.tsx");
/* harmony import */ var _public_components_start_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/components/start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
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





const BuildConfigPage = (_a) => {
    var { noProjectsAvailable } = _a, props = __rest(_a, ["noProjectsAvailable"]);
    const namespace = props.match.params.ns;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Builds")),
        namespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_build_config__WEBPACK_IMPORTED_MODULE_2__["BuildConfigsPage"], Object.assign({}, props, { mock: noProjectsAvailable })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_4__["default"], { title: "Build Configs" }, "Select a project to view the list of build configs"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_public_components_start_guide__WEBPACK_IMPORTED_MODULE_3__["withStartGuide"])(BuildConfigPage));


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


/***/ }),

/***/ "./public/components/build-config.tsx":
/*!********************************************!*\
  !*** ./public/components/build-config.tsx ***!
  \********************************************/
/*! exports provided: BuildConfigsDetails, BuildConfigsDetailsPage, BuildConfigsList, BuildConfigsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildConfigsDetails", function() { return BuildConfigsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildConfigsDetailsPage", function() { return BuildConfigsDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildConfigsList", function() { return BuildConfigsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildConfigsPage", function() { return BuildConfigsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _module_k8s_builds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s/builds */ "./public/module/k8s/builds.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./build */ "./public/components/build.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");












const BuildConfigsReference = 'BuildConfig';
const startBuildAction = (kind, buildConfig) => ({
    label: 'Start Build',
    callback: () => Object(_module_k8s_builds__WEBPACK_IMPORTED_MODULE_5__["startBuild"])(buildConfig)
        .then((build) => {
        _utils__WEBPACK_IMPORTED_MODULE_8__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["resourceObjPath"])(build, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(build)));
    })
        .catch((err) => {
        const error = err.message;
        Object(_modals__WEBPACK_IMPORTED_MODULE_7__["errorModal"])({ error });
    }),
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        subresource: 'instantiate',
        name: buildConfig.metadata.name,
        namespace: buildConfig.metadata.namespace,
        verb: 'create',
    },
});
const menuActions = [
    startBuildAction,
    ..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_11__["BuildConfigModel"]),
    ..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory.common,
];
const BuildConfigsDetails = ({ obj: buildConfig }) => {
    const hasPipeline = buildConfig.spec.strategy.type === _build__WEBPACK_IMPORTED_MODULE_9__["BuildStrategyType"].JenkinsPipeline;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            hasPipeline && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_build__WEBPACK_IMPORTED_MODULE_9__["PipelineBuildStrategyAlert"], { obj: buildConfig }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Build Config Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: buildConfig })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["BuildStrategy"], { resource: buildConfig })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["WebhookTriggers"], { resource: buildConfig }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["BuildHooks"], { resource: buildConfig })));
};
const BuildsTabPage = ({ obj: buildConfig }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_build__WEBPACK_IMPORTED_MODULE_9__["BuildsPage"], { namespace: buildConfig.metadata.namespace, showTitle: false, selector: { 'openshift.io/build-config.name': buildConfig.metadata.name } }));
const pages = [
    _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(BuildConfigsDetails),
    _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml(),
    _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].builds(BuildsTabPage),
    _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].envEditor(_build__WEBPACK_IMPORTED_MODULE_9__["BuildEnvironmentComponent"]),
    _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_10__["ResourceEventStream"]),
];
const BuildConfigsDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: BuildConfigsReference, menuActions: menuActions, pages: pages })));
BuildConfigsDetailsPage.displayName = 'BuildConfigsDetailsPage';
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-3', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass,
];
const BuildConfigsTableHeader = () => {
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
            title: 'Labels',
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
BuildConfigsTableHeader.displayName = 'BuildConfigsTableHeader';
const BuildConfigsTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: BuildConfigsReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LabelList"], { kind: BuildConfigsReference, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: menuActions, kind: BuildConfigsReference, resource: obj }))));
};
const buildStrategy = (buildConfig) => buildConfig.spec.strategy.type;
const allStrategies = [
    _build__WEBPACK_IMPORTED_MODULE_9__["BuildStrategyType"].Docker,
    _build__WEBPACK_IMPORTED_MODULE_9__["BuildStrategyType"].JenkinsPipeline,
    _build__WEBPACK_IMPORTED_MODULE_9__["BuildStrategyType"].Source,
    _build__WEBPACK_IMPORTED_MODULE_9__["BuildStrategyType"].Custom,
];
const filters = [
    {
        filterGroupName: 'Build Strategy',
        type: 'build-strategy',
        reducer: buildStrategy,
        items: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](allStrategies, (strategy) => ({
            id: strategy,
            title: strategy,
        })),
    },
];
const BuildConfigsList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Build Configs", Header: BuildConfigsTableHeader, Row: BuildConfigsTableRow, virtualize: true })));
BuildConfigsList.displayName = 'BuildConfigsList';
const BuildConfigsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, props, { title: "Build Configs", kind: BuildConfigsReference, ListComponent: BuildConfigsList, canCreate: true, filterLabel: props.filterLabel, rowFilters: filters })));
BuildConfigsPage.displayName = 'BuildConfigsListPage';


/***/ })

}]);
//# sourceMappingURL=dev-console-buildconfigs-de9c59df0ab4e4c7b66b.js.map