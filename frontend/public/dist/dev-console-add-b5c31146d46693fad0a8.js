(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-add"],{

/***/ "./packages/dev-console/src/components/AddPage.tsx":
/*!*********************************************************!*\
  !*** ./packages/dev-console/src/components/AddPage.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmptyState */ "./packages/dev-console/src/components/EmptyState.tsx");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _ProjectsExistWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectsExistWrapper */ "./packages/dev-console/src/components/ProjectsExistWrapper.tsx");
/* harmony import */ var _projects_CreateProjectListPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/CreateProjectListPage */ "./packages/dev-console/src/components/projects/CreateProjectListPage.tsx");










const handleProjectCreate = (project) => _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(`/add/ns/${project.metadata.name}`);
const EmptyStateLoader = ({ resources, loaded, loadError }) => {
    var _a, _b, _c, _d, _e;
    const [noWorkloads, setNoWorkloads] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const daemonSets = (_a = resources === null || resources === void 0 ? void 0 : resources.daemonSets) === null || _a === void 0 ? void 0 : _a.data;
    const deploymentConfigs = (_b = resources === null || resources === void 0 ? void 0 : resources.deploymentConfigs) === null || _b === void 0 ? void 0 : _b.data;
    const deployments = (_c = resources === null || resources === void 0 ? void 0 : resources.deployments) === null || _c === void 0 ? void 0 : _c.data;
    const statefulSets = (_d = resources === null || resources === void 0 ? void 0 : resources.statefulSets) === null || _d === void 0 ? void 0 : _d.data;
    const knativeService = (_e = resources === null || resources === void 0 ? void 0 : resources.knativeService) === null || _e === void 0 ? void 0 : _e.data;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (loaded) {
            setNoWorkloads(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](daemonSets) &&
                lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](deploymentConfigs) &&
                lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](deployments) &&
                lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](statefulSets) &&
                lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](knativeService));
        }
        else if (loadError) {
            setNoWorkloads(false);
        }
    }, [loaded, loadError, daemonSets, deploymentConfigs, deployments, statefulSets, knativeService]);
    return noWorkloads ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyState__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "Add", hintBlock: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["HintBlock"], { title: "No workloads found" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "To add content to your project, create an application, component or service using one of these options.")) })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyState__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "Add" }));
};
const RenderEmptyState = ({ namespace }) => {
    const resources = [
        {
            isList: true,
            kind: 'DeploymentConfig',
            namespace,
            prop: 'deploymentConfigs',
            limit: 1,
        },
        {
            isList: true,
            kind: 'Deployment',
            namespace,
            prop: 'deployments',
            limit: 1,
        },
        {
            isList: true,
            kind: 'DaemonSet',
            namespace,
            prop: 'daemonSets',
            limit: 1,
        },
        {
            isList: true,
            kind: 'StatefulSet',
            namespace,
            prop: 'statefulSets',
            limit: 1,
        },
        {
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_5__["ServiceModel"]),
            namespace,
            prop: 'knativeService',
            optional: true,
            limit: 1,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EmptyStateLoader, null)));
};
const AddPage = ({ match }) => {
    const namespace = match.params.ns;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "+Add")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: [{ kind: 'Project', prop: 'projects', isList: true }] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProjectsExistWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], { title: "Add" }, namespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RenderEmptyState, { namespace: namespace })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_CreateProjectListPage__WEBPACK_IMPORTED_MODULE_9__["default"], { onCreate: handleProjectCreate, title: "Add" })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddPage);


/***/ }),

/***/ "./packages/dev-console/src/components/EmptyState.scss":
/*!*************************************************************!*\
  !*** ./packages/dev-console/src/components/EmptyState.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/EmptyState.tsx":
/*!************************************************************!*\
  !*** ./packages/dev-console/src/components/EmptyState.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/plugin-sdk */ "./packages/console-plugin-sdk/src/index.ts");
/* harmony import */ var _extensions_add_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/add-actions */ "./packages/dev-console/src/extensions/add-actions.ts");
/* harmony import */ var _EmptyState_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmptyState.scss */ "./packages/dev-console/src/components/EmptyState.scss");
/* harmony import */ var _EmptyState_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_EmptyState_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");









const navigateTo = (e, url) => {
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(url);
    e.preventDefault();
};
const Item = ({ action: { properties: { id, label, description, icon, iconClass, url, accessReview }, }, namespace, }) => {
    const access = !accessReview ||
        // Defined extensions are immutable. This check will be consistent.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        accessReview.map((descriptor) => Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])(Object.assign({ namespace }, descriptor))).every((x) => x);
    if (namespace === _console_shared__WEBPACK_IMPORTED_MODULE_8__["ALL_NAMESPACES_KEY"] && url.match(/:namespace\b/)) {
        // URL expects namespace scope
        return null;
    }
    const resolvedUrl = url.replace(/:namespace\b/g, namespace);
    return access ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GalleryItem"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_2__["CatalogTile"], { "data-test-id": id, className: "odc-empty-state__tile", onClick: (e) => navigateTo(e, resolvedUrl), href: resolvedUrl, title: label, iconImg: typeof icon === 'string' ? icon : undefined, iconClass: iconClass, icon: react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](icon) ? icon : undefined, description: description }))) : null;
};
const ODCEmptyState = ({ title, activeNamespace, hintBlock = 'Select a way to create an application, component or service from one of the options.', }) => {
    const addActionExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__["useExtensions"])(_extensions_add_actions__WEBPACK_IMPORTED_MODULE_6__["isAddAction"]).filter(({ properties: { hide } }) => (hide ? hide() : true));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-empty-state__title" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["PageHeading"], { title: title }),
            hintBlock && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__description odc-empty-state__hint-block" }, hintBlock))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-empty-state__content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"], { className: "co-catalog-tile-view", gutter: "sm" }, addActionExtensions.map((action) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { key: action.properties.id, namespace: activeNamespace, action: action })))))));
};
const mapStateToProps = (state) => {
    return {
        activeNamespace: state.UI.get('activeNamespace'),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ODCEmptyState));


/***/ }),

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
const NamespacedPage = ({ children, disabled, onNamespaceChange, hideApplications = false, variant = NamespacedPageVariants.default, toolbar, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["NamespaceBar"], { disabled: disabled, onNamespaceChange: onNamespaceChange },
        !hideApplications && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_ApplicationSelector__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: disabled }),
        toolbar && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-namespaced-page__toolbar" }, toolbar)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-namespaced-page__content', {
            [`is-${variant}`]: variant !== NamespacedPageVariants.default,
        }) }, children)));
/* harmony default export */ __webpack_exports__["default"] = (NamespacedPage);


/***/ }),

/***/ "./packages/dev-console/src/components/ProjectsExistWrapper.tsx":
/*!**********************************************************************!*\
  !*** ./packages/dev-console/src/components/ProjectsExistWrapper.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmptyState */ "./packages/dev-console/src/components/EmptyState.tsx");




const ProjectsExistWrapper = ({ title, projects, children, }) => {
    if (!projects.loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](projects.data)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], { title: title, hintBlock: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["HintBlock"], { title: "No projects exist" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Select one of the following options to create an application, component or service. As part of the creation process a project and application will be created.")) }));
    }
    return children;
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectsExistWrapper);


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

/***/ "./packages/dev-console/src/components/projects/CreateProjectListPage.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/CreateProjectListPage.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _ProjectListPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
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




const CreateProjectListPage = (_a) => {
    var { onCreate, title } = _a, props = __rest(_a, ["onCreate", "title"]);
    const openProjectModal = () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_2__["createProjectModal"])({ blocking: true, onSubmit: onCreate });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProjectListPage__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, { title: title }),
        "Select a project to start adding to it or",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { isInline: true, variant: "link", onClick: openProjectModal }, "create a project")));
};
/* harmony default export */ __webpack_exports__["default"] = (CreateProjectListPage);


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

/***/ "./packages/dev-console/src/extensions/add-actions.ts":
/*!************************************************************!*\
  !*** ./packages/dev-console/src/extensions/add-actions.ts ***!
  \************************************************************/
/*! exports provided: isAddAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAddAction", function() { return isAddAction; });
const isAddAction = (e) => {
    return e.type === 'AddAction';
};


/***/ })

}]);
//# sourceMappingURL=dev-console-add-b5c31146d46693fad0a8.js.map