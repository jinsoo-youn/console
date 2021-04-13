(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-topology"],{

/***/ "./packages/console-shared/src/k8s/index.ts":
/*!**************************************************!*\
  !*** ./packages/console-shared/src/k8s/index.ts ***!
  \**************************************************/
/*! exports provided: patchSafeValue, PatchOperation, PatchBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patch */ "./packages/console-shared/src/k8s/patch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchSafeValue", function() { return _patch__WEBPACK_IMPORTED_MODULE_0__["patchSafeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchOperation", function() { return _patch__WEBPACK_IMPORTED_MODULE_0__["PatchOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchBuilder", function() { return _patch__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]; });




/***/ }),

/***/ "./packages/console-shared/src/k8s/patch.ts":
/*!**************************************************!*\
  !*** ./packages/console-shared/src/k8s/patch.ts ***!
  \**************************************************/
/*! exports provided: patchSafeValue, PatchOperation, PatchBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchSafeValue", function() { return patchSafeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchOperation", function() { return PatchOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchBuilder", function() { return PatchBuilder; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./packages/console-shared/src/utils/index.ts");


const patchSafeValue = (value) => value.replace('~', '~0').replace('/', '~1');
var PatchOperation;
(function (PatchOperation) {
    PatchOperation["ADD"] = "add";
    PatchOperation["REMOVE"] = "remove";
    PatchOperation["REPLACE"] = "replace";
})(PatchOperation || (PatchOperation = {}));
class PatchBuilder {
    constructor(path) {
        this.valueIndex = -1;
        this.valueKey = '';
        this.valid = true;
        this.setValue = (value) => {
            this.value = value;
            return this;
        };
        this.setOperation = (operation) => {
            this.operation = operation;
            return this;
        };
        this.setListIndex = (index) => {
            this.valueIndex = index;
            return this;
        };
        this.add = (value) => {
            this.value = value;
            return this.setOperation(PatchOperation.ADD);
        };
        this.replace = (value) => {
            this.value = value;
            return this.setOperation(PatchOperation.REPLACE);
        };
        this.remove = () => this.setOperation(PatchOperation.REMOVE);
        this.setListRemove = (items, removedItemEquals) => {
            this.value = undefined;
            this.operation = PatchOperation.REMOVE;
            if (items) {
                const foundIndex = items.findIndex(removedItemEquals);
                if (foundIndex < 0) {
                    this.valid = false; // do not do anything
                }
                else {
                    this.valueIndex = items.length === 1 ? -1 : foundIndex; // delete the whole list if last value there
                }
            }
            else {
                this.valueIndex = -1; // remove the empty list
            }
            return this;
        };
        this.setListUpdate = (item, items, updatedItemEquals = (other, updatedValue) => other === updatedValue) => {
            if (items) {
                const foundIndex = items.findIndex((other) => updatedItemEquals(other, item));
                if (foundIndex < 0) {
                    this.value = item;
                    this.valueIndex = items.length;
                    this.operation = PatchOperation.ADD;
                }
                else if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](items[foundIndex], item)) {
                    this.valid = false; // no change
                }
                else {
                    this.value = item;
                    this.valueIndex = foundIndex;
                    this.operation = PatchOperation.REPLACE;
                }
            }
            else {
                // list is missing - add the whole list
                this.value = [item];
                this.valueIndex = -1;
                this.operation = PatchOperation.ADD;
            }
            return this;
        };
        this.setObjectRemove = (key, object) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["has"](object, [key])) {
                this.value = undefined;
                this.valueKey = key;
                this.operation = PatchOperation.REMOVE;
            }
            else {
                this.valid = false;
            }
            return this;
        };
        this.setObjectUpdate = (key, value, object) => {
            if (object == null) {
                this.value = { [key]: value };
            }
            else if (object[key] === value) {
                this.valid = false;
            }
            else {
                this.value = value;
                this.valueKey = key;
            }
            this.operation = lodash__WEBPACK_IMPORTED_MODULE_0__["has"](object, [key]) ? PatchOperation.REPLACE : PatchOperation.ADD;
            return this;
        };
        this.isPatchValid = () => this.valid && !!(this.path && this.operation);
        this.build = () => {
            if (!this.isPatchValid()) {
                return null;
            }
            let resultPath;
            if (this.valueIndex < 0) {
                resultPath = this.valueKey
                    ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assureEndsWith"])(this.path, `/${patchSafeValue(this.valueKey)}`)
                    : this.path;
            }
            else {
                resultPath = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["assureEndsWith"])(this.path, '/')}${this.valueIndex}`;
            }
            const result = {
                op: this.operation,
                path: resultPath,
            };
            if (this.operation !== PatchOperation.REMOVE) {
                result.value = this.value;
            }
            return result;
        };
        this.buildAddObjectKeysPatches = (newObject, oldObject) => {
            if (!newObject) {
                return [];
            }
            let builders;
            if (!oldObject) {
                builders = [new PatchBuilder(this.path).add(newObject)];
            }
            else {
                builders = Object.keys(newObject).map((key) => new PatchBuilder(this.path).setObjectUpdate(key, newObject[key], oldObject));
            }
            return lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](builders.map((u) => u.build()));
        };
        this.path = path;
    }
}


/***/ }),

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
        accessReview.map(descriptor => Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])(Object.assign({ namespace }, descriptor))).every(x => x);
    if (namespace === _console_shared__WEBPACK_IMPORTED_MODULE_8__["ALL_NAMESPACES_KEY"] && url.match(/:namespace\b/)) {
        // URL expects namespace scope
        return null;
    }
    const resolvedUrl = url.replace(/:namespace\b/g, namespace);
    return access ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GalleryItem"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_2__["CatalogTile"], { "data-test-id": id, className: "odc-empty-state__tile", onClick: (e) => navigateTo(e, resolvedUrl), href: resolvedUrl, title: label, iconImg: typeof icon === 'string' ? icon : undefined, iconClass: iconClass, icon: react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](icon) ? icon : undefined, description: description }))) : null;
};
const ODCEmptyState = ({ title, activeNamespace, hintBlock = 'Select a way to create an application, component or service from one of the options.' }) => {
    const addActionExtensions = Object(_console_plugin_sdk__WEBPACK_IMPORTED_MODULE_5__["useExtensions"])(_extensions_add_actions__WEBPACK_IMPORTED_MODULE_6__["isAddAction"]).filter(({ properties: { hide } }) => (hide ? hide() : true));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-empty-state__title" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["PageHeading"], { title: title }),
            hintBlock && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__description odc-empty-state__hint-block" }, hintBlock)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-empty-state__content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"], { className: "co-catalog-tile-view", gutter: "sm" }, addActionExtensions.map(action => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { key: action.properties.id, namespace: activeNamespace, action: action })))))));
};
const mapStateToProps = (state) => {
    return {
        activeNamespace: state.UI.get('activeNamespace'),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ODCEmptyState));


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

/***/ "./packages/dev-console/src/components/import/section/FormSection.scss":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/section/FormSection.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormSection.scss */ "./packages/dev-console/src/components/import/section/FormSection.scss");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormSection_scss__WEBPACK_IMPORTED_MODULE_3__);




const flexStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 'var(--pf-global--spacer--md) 0',
};
const FormSection = ({ title, subTitle, fullWidth, children, flexLayout, extraMargin, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pf-c-form', {
        'co-m-pane__form': !fullWidth,
        'odc-form-section--extra-margin': extraMargin,
    }), style: flexLayout ? flexStyle : {} },
    title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "odc-form-section__heading" }, title),
    subTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false }, subTitle),
    children));
/* harmony default export */ __webpack_exports__["default"] = (FormSection);


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

/***/ "./packages/dev-console/src/components/topology/Topology.tsx":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/Topology.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_topology__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-topology */ "./node_modules/@patternfly/react-topology/dist/esm/index.js");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_knative_plugin_src_topology_knative_topology_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/knative-plugin/src/topology/knative-topology-utils */ "./packages/knative-plugin/src/topology/knative-topology-utils.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_knative_plugin_src_topology_components_knativeComponentFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/knative-plugin/src/topology/components/knativeComponentFactory */ "./packages/knative-plugin/src/topology/components/knativeComponentFactory.ts");
/* harmony import */ var _console_kubevirt_plugin_src_topology_components_kubevirtComponentFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/kubevirt-plugin/src/topology/components/kubevirtComponentFactory */ "./packages/kubevirt-plugin/src/topology/components/kubevirtComponentFactory.ts");
/* harmony import */ var _console_kubevirt_plugin_src_topology_components_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/kubevirt-plugin/src/topology/components/const */ "./packages/kubevirt-plugin/src/topology/components/const.ts");
/* harmony import */ var _console_kubevirt_plugin_src_topology_TopologyVmPanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/kubevirt-plugin/src/topology/TopologyVmPanel */ "./packages/kubevirt-plugin/src/topology/TopologyVmPanel.tsx");
/* harmony import */ var _utils_useAddToProjectAccess__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/useAddToProjectAccess */ "./packages/dev-console/src/utils/useAddToProjectAccess.ts");
/* harmony import */ var _TopologySideBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TopologySideBar */ "./packages/dev-console/src/components/topology/TopologySideBar.tsx");
/* harmony import */ var _topology_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./topology-types */ "./packages/dev-console/src/components/topology/topology-types.ts");
/* harmony import */ var _TopologyResourcePanel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TopologyResourcePanel */ "./packages/dev-console/src/components/topology/TopologyResourcePanel.tsx");
/* harmony import */ var _application_panel_TopologyApplicationPanel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./application-panel/TopologyApplicationPanel */ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationPanel.tsx");
/* harmony import */ var _TopologyEdgePanel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./TopologyEdgePanel */ "./packages/dev-console/src/components/topology/TopologyEdgePanel.tsx");
/* harmony import */ var _data_transforms_topology_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data-transforms/topology-model */ "./packages/dev-console/src/components/topology/data-transforms/topology-model.ts");
/* harmony import */ var _layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layouts/layoutFactory */ "./packages/dev-console/src/components/topology/layouts/layoutFactory.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components */ "./packages/dev-console/src/components/topology/components/index.ts");
/* harmony import */ var _filters_TopologyFilterBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./filters/TopologyFilterBar */ "./packages/dev-console/src/components/topology/filters/TopologyFilterBar.tsx");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
/* harmony import */ var _helm_TopologyHelmReleasePanel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helm/TopologyHelmReleasePanel */ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleasePanel.tsx");
/* harmony import */ var _helm_components_const__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helm/components/const */ "./packages/dev-console/src/components/topology/helm/components/const.ts");
/* harmony import */ var _helm_components_helmComponentFactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helm/components/helmComponentFactory */ "./packages/dev-console/src/components/topology/helm/components/helmComponentFactory.ts");
/* harmony import */ var _operators_components_const__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./operators/components/const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _operators_components_operatorsComponentFactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./operators/components/operatorsComponentFactory */ "./packages/dev-console/src/components/topology/operators/components/operatorsComponentFactory.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _helm_TopologyHelmWorkloadPanel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helm/TopologyHelmWorkloadPanel */ "./packages/dev-console/src/components/topology/helm/TopologyHelmWorkloadPanel.tsx");


































const graphModel = {
    graph: {
        id: 'g1',
        type: 'graph',
        layout: _layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__["COLA_LAYOUT"],
        layers: [_console_topology__WEBPACK_IMPORTED_MODULE_7__["BOTTOM_LAYER"], _console_topology__WEBPACK_IMPORTED_MODULE_7__["GROUPS_LAYER"], 'groups2', _console_topology__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_LAYER"], _console_topology__WEBPACK_IMPORTED_MODULE_7__["TOP_LAYER"]],
    },
};
const Topology = ({ data, filters, application, namespace, serviceBinding, eventSourceEnabled, onSelectTab }) => {
    const visRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const applicationRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const componentFactoryRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const knativeComponentFactoryRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const helmComponentFactoryRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const operatorsComponentFactoryRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const vmsComponentFactoryRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const [layout, setLayout] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](graphModel.graph.layout);
    const [model, setModel] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [graphData, setGraphData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [selectedIds, setSelectedIds] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const createResourceAccess = Object(_utils_useAddToProjectAccess__WEBPACK_IMPORTED_MODULE_16__["useAddToProjectAccess"])(namespace);
    const [dragHint, setDragHint] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    if (!componentFactoryRef.current) {
        componentFactoryRef.current = new _components__WEBPACK_IMPORTED_MODULE_24__["ComponentFactory"](serviceBinding);
    }
    if (!knativeComponentFactoryRef.current) {
        knativeComponentFactoryRef.current = new _console_knative_plugin_src_topology_components_knativeComponentFactory__WEBPACK_IMPORTED_MODULE_12__["default"](serviceBinding);
    }
    if (!helmComponentFactoryRef.current) {
        helmComponentFactoryRef.current = new _helm_components_helmComponentFactory__WEBPACK_IMPORTED_MODULE_29__["HelmComponentFactory"](serviceBinding);
    }
    if (!operatorsComponentFactoryRef.current) {
        operatorsComponentFactoryRef.current = new _operators_components_operatorsComponentFactory__WEBPACK_IMPORTED_MODULE_31__["OperatorsComponentFactory"](serviceBinding);
    }
    if (!vmsComponentFactoryRef.current) {
        vmsComponentFactoryRef.current = new _console_kubevirt_plugin_src_topology_components_kubevirtComponentFactory__WEBPACK_IMPORTED_MODULE_13__["KubevirtComponentFactory"](serviceBinding);
    }
    if (!visRef.current) {
        visRef.current = new _console_topology__WEBPACK_IMPORTED_MODULE_7__["Visualization"]();
        visRef.current.registerLayoutFactory(_layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__["layoutFactory"]);
        visRef.current.registerComponentFactory(componentFactoryRef.current.getFactory());
        // TODO: Use Plugins
        visRef.current.registerComponentFactory(knativeComponentFactoryRef.current.getFactory());
        visRef.current.registerComponentFactory(helmComponentFactoryRef.current.getFactory());
        visRef.current.registerComponentFactory(operatorsComponentFactoryRef.current.getFactory());
        visRef.current.registerComponentFactory(vmsComponentFactoryRef.current.getFactory());
        visRef.current.addEventListener(_console_topology__WEBPACK_IMPORTED_MODULE_7__["SELECTION_EVENT"], (ids) => {
            // set empty selection when selecting the graph
            if (ids.length > 0 && ids[0] === graphModel.graph.id) {
                setSelectedIds([]);
                Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["removeQueryArgument"])('selectId');
            }
            else {
                setSelectedIds(ids);
                ids.length > 0 ? Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["setQueryArgument"])('selectId', ids[0]) : Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["removeQueryArgument"])('selectId');
            }
        });
        visRef.current.addEventListener(_topology_types__WEBPACK_IMPORTED_MODULE_18__["SHOW_GROUPING_HINT_EVENT"], (element, hint) => {
            setDragHint(hint);
        });
        visRef.current.fromModel(graphModel);
    }
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const newGraphData = {
            createResourceAccess,
            namespace,
            eventSourceEnabled,
        };
        visRef.current.getGraph().setData(newGraphData);
        setGraphData(newGraphData);
    }, [namespace, createResourceAccess, eventSourceEnabled]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const newModel = Object(_data_transforms_topology_model__WEBPACK_IMPORTED_MODULE_22__["topologyModelFromDataModel"])(data, application, filters);
        visRef.current.fromModel(newModel);
        setModel(newModel);
        if (selectedIds.length && !visRef.current.getElementById(selectedIds[0])) {
            setSelectedIds([]);
        }
        else {
            const selectId = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["getQueryArgument"])('selectId');
            const selectTab = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["getQueryArgument"])('selectTab');
            visRef.current.getElementById(selectId) && setSelectedIds([selectId]);
            if (selectTab) {
                onSelectTab(selectTab);
                Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["removeQueryArgument"])('selectTab');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!applicationRef.current) {
            applicationRef.current = application;
            return;
        }
        if (application !== applicationRef.current) {
            applicationRef.current = application;
            visRef.current.getGraph().reset();
            visRef.current.getGraph().layout();
        }
    }, [application]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let resizeTimeout = null;
        if (selectedIds.length > 0) {
            const selectedEntity = visRef.current.getElementById(selectedIds[0]);
            if (selectedEntity) {
                const visibleEntity = Object(_console_topology__WEBPACK_IMPORTED_MODULE_7__["isNode"])(selectedEntity) ? selectedEntity : selectedEntity.getSource();
                resizeTimeout = setTimeout(Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                    visRef.current.getGraph().panIntoView(visibleEntity, { offset: 20, minimumVisible: 40 });
                    resizeTimeout = null;
                }), 500);
            }
        }
        return () => {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
        };
    }, [selectedIds]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
            visRef.current.getGraph().setLayout(layout);
        })();
    }, [layout]);
    const onSearchChange = searchQuery => {
        if (searchQuery.length > 0) {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["setQueryArgument"])(_filters__WEBPACK_IMPORTED_MODULE_26__["TOPOLOGY_SEARCH_FILTER_KEY"], searchQuery);
            document.body.classList.add(_filters__WEBPACK_IMPORTED_MODULE_26__["FILTER_ACTIVE_CLASS"]);
        }
        else {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["removeQueryArgument"])(_filters__WEBPACK_IMPORTED_MODULE_26__["TOPOLOGY_SEARCH_FILTER_KEY"]);
            document.body.classList.remove(_filters__WEBPACK_IMPORTED_MODULE_26__["FILTER_ACTIVE_CLASS"]);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const searchQuery = Object(_filters__WEBPACK_IMPORTED_MODULE_26__["getTopologySearchQuery"])();
        searchQuery && onSearchChange(searchQuery);
    }, []);
    const onSidebarClose = () => {
        setSelectedIds([]);
        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["removeQueryArgument"])('selectId');
    };
    const renderControlBar = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_topology__WEBPACK_IMPORTED_MODULE_6__["TopologyControlBar"], { controlButtons: [
                ...Object(_patternfly_react_topology__WEBPACK_IMPORTED_MODULE_6__["createTopologyControlButtons"])(Object.assign(Object.assign({}, _patternfly_react_topology__WEBPACK_IMPORTED_MODULE_6__["defaultControlButtonsOptions"]), { zoomInCallback: Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                        visRef.current.getGraph().scaleBy(4 / 3);
                    }), zoomOutCallback: Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                        visRef.current.getGraph().scaleBy(0.75);
                    }), fitToScreenCallback: Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                        visRef.current.getGraph().fit(80);
                    }), resetViewCallback: Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                        visRef.current.getGraph().reset();
                        visRef.current.getGraph().layout();
                    }), legend: false })),
            ] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-topology__layout-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: "Layout 1" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ToolbarItem"], { className: "odc-topology__layout-button", tabIndex: -1 },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__('pf-topology-control-bar__button', {
                                'pf-m-active': layout === _layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__["COLA_LAYOUT"],
                            }), variant: "tertiary", onClick: () => setLayout(_layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__["COLA_LAYOUT"]) },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["TopologyIcon"], { className: "odc-topology__layout-button__icon" }),
                            "1",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sr-only" }, "Layout 1")))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: "Layout 2" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ToolbarItem"], { className: "odc-topology__layout-button", tabIndex: -1 },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__('pf-topology-control-bar__button', {
                                'pf-m-active': layout === _layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__["COLA_FORCE_LAYOUT"],
                            }), variant: "tertiary", onClick: () => setLayout(_layouts_layoutFactory__WEBPACK_IMPORTED_MODULE_23__["COLA_FORCE_LAYOUT"]) },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["TopologyIcon"], { className: "odc-topology__layout-button__icon" }),
                            "2",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sr-only" }, "Layout 2")))))));
    };
    const selectedItemDetails = () => {
        const selectedEntity = selectedIds[0] ? visRef.current.getElementById(selectedIds[0]) : null;
        if (Object(_console_topology__WEBPACK_IMPORTED_MODULE_7__["isNode"])(selectedEntity)) {
            if (selectedEntity.getType() === _components__WEBPACK_IMPORTED_MODULE_24__["TYPE_APPLICATION_GROUP"]) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_application_panel_TopologyApplicationPanel__WEBPACK_IMPORTED_MODULE_20__["default"], { graphData: graphData, application: {
                        id: selectedEntity.getId(),
                        name: selectedEntity.getLabel(),
                        resources: selectedEntity.getData().groupResources,
                    } }));
            }
            // TODO: Use Plugins
            if (selectedEntity.getType() === _helm_components_const__WEBPACK_IMPORTED_MODULE_28__["TYPE_HELM_RELEASE"]) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_helm_TopologyHelmReleasePanel__WEBPACK_IMPORTED_MODULE_27__["default"], { helmRelease: selectedEntity });
            }
            if (selectedEntity.getType() === _helm_components_const__WEBPACK_IMPORTED_MODULE_28__["TYPE_HELM_WORKLOAD"]) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_helm_TopologyHelmWorkloadPanel__WEBPACK_IMPORTED_MODULE_33__["default"], { item: selectedEntity.getData() });
            }
            if (selectedEntity.getType() === _operators_components_const__WEBPACK_IMPORTED_MODULE_30__["TYPE_OPERATOR_BACKED_SERVICE"]) {
                return null;
            }
            if (selectedEntity.getType() === _console_kubevirt_plugin_src_topology_components_const__WEBPACK_IMPORTED_MODULE_14__["TYPE_VIRTUAL_MACHINE"]) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_kubevirt_plugin_src_topology_TopologyVmPanel__WEBPACK_IMPORTED_MODULE_15__["default"], { vmNode: selectedEntity });
            }
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyResourcePanel__WEBPACK_IMPORTED_MODULE_19__["default"], { item: selectedEntity.getData() });
        }
        if (Object(_console_topology__WEBPACK_IMPORTED_MODULE_7__["isEdge"])(selectedEntity)) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyEdgePanel__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: selectedEntity, data: data });
        }
        return null;
    };
    const renderSideBar = () => {
        const selectedEntity = selectedIds.length === 0 ? null : visRef.current.getElementById(selectedIds[0]);
        const details = selectedItemDetails();
        if (!selectedEntity || !details) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologySideBar__WEBPACK_IMPORTED_MODULE_17__["default"], { show: !!selectedEntity && !!details, onClose: onSidebarClose }, selectedEntity && details));
    };
    if (!model) {
        return null;
    }
    const sideBar = renderSideBar();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_topology__WEBPACK_IMPORTED_MODULE_6__["TopologyView"], { viewToolbar: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_filters_TopologyFilterBar__WEBPACK_IMPORTED_MODULE_25__["default"], { visualization: visRef.current, onSearchChange: onSearchChange }), controlBar: renderControlBar(), sideBar: sideBar, sideBarOpen: !!sideBar },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_7__["VisualizationSurface"], { visualization: visRef.current, state: { selectedIds } }),
        dragHint && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-topology__hint-container" }, dragHint)));
};
const TopologyStateToProps = (state) => {
    return {
        filters: Object(_filters__WEBPACK_IMPORTED_MODULE_26__["getTopologyFilters"])(state),
        application: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_8__["getActiveApplication"])(state),
        serviceBinding: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_32__["getServiceBindingStatus"])(state),
        eventSourceEnabled: Object(_console_knative_plugin_src_topology_knative_topology_utils__WEBPACK_IMPORTED_MODULE_10__["getEventSourceStatus"])(state),
    };
};
const TopologyDispatchToProps = (dispatch) => ({
    onSelectTab: name => dispatch(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_9__["selectOverviewDetailsTab"])(name)),
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(TopologyStateToProps, TopologyDispatchToProps)(Topology));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologyDataController.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologyDataController.tsx ***!
  \*********************************************************************************/
/*! exports provided: TopologyDataController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopologyDataController", function() { return TopologyDataController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/plugins */ "./public/plugins.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _data_transforms_data_transformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-transforms/data-transformer */ "./packages/dev-console/src/components/topology/data-transforms/data-transformer.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _helm_helm_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helm/helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");











const Controller = ({ render, resources, loaded, loadError, utils, namespace, serviceBinding, trafficData }) => {
    const secretCount = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](-1);
    const [helmResourcesMap, setHelmResourcesMap] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        var _a, _b, _c, _d, _e;
        const count = (_c = (_b = (_a = resources === null || resources === void 0 ? void 0 : resources.secrets) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
        if ((((_d = resources.secrets) === null || _d === void 0 ? void 0 : _d.loaded) && count !== secretCount.current) || ((_e = resources.secrets) === null || _e === void 0 ? void 0 : _e.loadError)) {
            secretCount.current = count;
            if (count === 0) {
                setHelmResourcesMap({});
                return;
            }
            Object(_helm_helm_utils__WEBPACK_IMPORTED_MODULE_10__["fetchHelmReleases"])(namespace)
                .then(releases => {
                setHelmResourcesMap(releases.reduce((acc, release) => {
                    try {
                        const manifestResources = Object(js_yaml__WEBPACK_IMPORTED_MODULE_6__["safeLoadAll"])(release.manifest);
                        manifestResources.forEach(resource => {
                            const resourceKindName = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_9__["getHelmReleaseKey"])(resource);
                            if (!acc.hasOwnProperty(resourceKindName)) {
                                acc[resourceKindName] = {
                                    releaseName: release.name,
                                    releaseVersion: release.version,
                                    chartIcon: release.chart.metadata.icon,
                                    manifestResources,
                                    releaseNotes: release.info.notes,
                                };
                            }
                        });
                    }
                    catch (e) {
                        // eslint-disable-next-line no-console
                        console.error(e);
                    }
                    return acc;
                }, {}));
            })
                .catch(() => {
                setHelmResourcesMap({});
            });
        }
    }, [namespace, resources, resources.secrets, secretCount, setHelmResourcesMap]);
    return render({
        loaded: loaded && !!helmResourcesMap,
        loadError,
        namespace,
        serviceBinding,
        data: loaded && helmResourcesMap ? Object(_data_transforms_data_transformer__WEBPACK_IMPORTED_MODULE_8__["transformTopologyData"])(resources, _topology_utils__WEBPACK_IMPORTED_MODULE_9__["allowedResources"], utils, trafficData, helmResourcesMap) : null,
    });
};
const TopologyDataController = ({ match, render, resourceList, serviceBinding }) => {
    const namespace = match.params.name;
    const { resources, utils } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getResourceList"])(namespace, resourceList);
    if (serviceBinding) {
        resources.push({
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["ServiceBindingRequestModel"]),
            namespace,
            prop: 'serviceBindingRequests',
            optional: true,
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Controller, { render: render, utils: utils, serviceBinding: serviceBinding, namespace: namespace })));
};
const DataControllerStateToProps = (state) => {
    const resourceList = _console_internal_plugins__WEBPACK_IMPORTED_MODULE_3__["registry"].getOverviewCRDs().filter(resource => state.FLAGS.get(resource.properties.required));
    return {
        resourceList,
        serviceBinding: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_9__["getServiceBindingStatus"])(state),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(DataControllerStateToProps)(TopologyDataController));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologyEdgePanel.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologyEdgePanel.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/knative-plugin/src/topology/const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _actions_edgeActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/edgeActions */ "./packages/dev-console/src/components/topology/actions/edgeActions.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");










const connectorTypeToTitle = (type) => {
    switch (type) {
        case _components_const__WEBPACK_IMPORTED_MODULE_7__["TYPE_CONNECTS_TO"]:
            return 'Visual connector';
        case _components_const__WEBPACK_IMPORTED_MODULE_7__["TYPE_SERVICE_BINDING"]:
            return 'Binding connector';
        case _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_REVISION_TRAFFIC"]:
            return 'Traffic distribution connector';
        case _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_EVENT_SOURCE_LINK"]:
            return 'Event source connector';
        case _components_const__WEBPACK_IMPORTED_MODULE_7__["TYPE_TRAFFIC_CONNECTOR"]:
            return 'Traffic connector';
        default:
            return '';
    }
};
const TopologyEdgePanel = ({ edge, data, consoleLinks }) => {
    var _a, _b;
    const source = edge.getSource().getData();
    const target = edge.getTarget().getData();
    const resources = [(_a = source === null || source === void 0 ? void 0 : source.resources) === null || _a === void 0 ? void 0 : _a.obj, (_b = target === null || target === void 0 ? void 0 : target.resources) === null || _b === void 0 ? void 0 : _b.obj];
    const nodes = data.graph.nodes.map(n => edge.getController().getNodeById(n.id));
    const { metadata: { namespace }, } = resources[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane resource-overview" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-head resource-overview__heading" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name co-resource-item" }, connectorTypeToTitle(edge.getType())),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-actions" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ActionsMenu"], { actions: Object(_actions_edgeActions__WEBPACK_IMPORTED_MODULE_8__["edgeActions"])(edge, nodes) })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-m-horizontal-nav__menu', 'co-m-horizontal-nav__menu--within-sidebar', 'co-m-horizontal-nav__menu--within-overview-sidebar', 'odc-application-resource-tab') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-m-horizontal-nav__menu-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button" }, "Resources"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SidebarSectionHeading"], { text: "Connections" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, lodash__WEBPACK_IMPORTED_MODULE_3__["map"](resources, resource => {
                if (!resource) {
                    return null;
                }
                const { metadata: { name, uid }, } = resource;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item  container-fluid", key: uid },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(resource), name: name, namespace: namespace })));
            })),
            edge.getType() === _components_const__WEBPACK_IMPORTED_MODULE_7__["TYPE_TRAFFIC_CONNECTOR"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SidebarSectionHeading"], { text: "Kiali Link" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ExternalLink"], { href: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_9__["getKialiLink"])(consoleLinks, namespace), text: "Kiali Graph View" }))))));
};
const TopologyEdgeStateToProps = (state) => {
    const consoleLinks = state.UI.get('consoleLinks');
    return { consoleLinks };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(TopologyEdgeStateToProps)(TopologyEdgePanel));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologyPage.scss":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologyPage.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologyPage.tsx":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologyPage.tsx ***!
  \***********************************************************************/
/*! exports provided: renderTopology, TopologyPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTopology", function() { return renderTopology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopologyPage", function() { return TopologyPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EmptyState */ "./packages/dev-console/src/components/EmptyState.tsx");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _ProjectsExistWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProjectsExistWrapper */ "./packages/dev-console/src/components/ProjectsExistWrapper.tsx");
/* harmony import */ var _projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../projects/ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
/* harmony import */ var _TopologyDataController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TopologyDataController */ "./packages/dev-console/src/components/topology/TopologyDataController.tsx");
/* harmony import */ var _Topology__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Topology */ "./packages/dev-console/src/components/topology/Topology.tsx");
/* harmony import */ var _TopologyShortcuts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TopologyShortcuts */ "./packages/dev-console/src/components/topology/TopologyShortcuts.tsx");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _TopologyPage_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TopologyPage.scss */ "./packages/dev-console/src/components/topology/TopologyPage.scss");
/* harmony import */ var _TopologyPage_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_TopologyPage_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
















const setTopologyActiveView = (id) => {
    localStorage.setItem(_components_const__WEBPACK_IMPORTED_MODULE_13__["LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY"], id);
};
const getTopologyActiveView = () => {
    return localStorage.getItem(_components_const__WEBPACK_IMPORTED_MODULE_13__["LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY"]);
};
const EmptyMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyState__WEBPACK_IMPORTED_MODULE_6__["default"], { title: "Topology", hintBlock: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["HintBlock"], { title: "No workloads found" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "To add content to your project, create an application, component or service using one of these options.")) }));
function renderTopology({ loaded, loadError, data, namespace }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["StatusBox"], { data: data ? data.graph.nodes : null, label: "Topology", loaded: loaded, loadError: loadError, EmptyMsg: EmptyMsg },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-topology" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Topology__WEBPACK_IMPORTED_MODULE_11__["default"], { data: data, namespace: namespace }))));
}
const TopologyPage = ({ match }) => {
    const namespace = match.params.name;
    const showListView = !!Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["matchPath"])(match.path, {
        path: '*/list',
        exact: true,
    });
    const showGraphView = !!Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["matchPath"])(match.path, {
        path: '*/graph',
        exact: true,
    });
    const handleNamespaceChange = (ns) => {
        if (ns !== namespace) {
            Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["removeQueryArgument"])(_filters__WEBPACK_IMPORTED_MODULE_15__["TOPOLOGY_SEARCH_FILTER_KEY"]);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => setTopologyActiveView(showListView && !showGraphView ? 'list' : 'graph'), [showListView, showGraphView]);
    if (!showGraphView && !showListView) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: `/topology/${namespace ? `ns/${namespace}` : 'all-namespaces'}/${getTopologyActiveView() === 'list' ? 'list' : 'graph'}` });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Topology")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: showListView ? _NamespacedPage__WEBPACK_IMPORTED_MODULE_7__["NamespacedPageVariants"].light : _NamespacedPage__WEBPACK_IMPORTED_MODULE_7__["NamespacedPageVariants"].default, hideApplications: showListView, onNamespaceChange: handleNamespaceChange, toolbar: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                !showListView && namespace && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], { "aria-label": "Shortcuts", bodyContent: _TopologyShortcuts__WEBPACK_IMPORTED_MODULE_12__["default"], position: "left", maxWidth: "100vw" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "link", className: "odc-topology__shortcuts-button", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["QuestionCircleIcon"], null), "data-test-id": "topology-view-shortcuts" }, "View shortcuts"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { position: "left", content: showListView ? 'Topology View' : 'List View' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "pf-c-button pf-m-plain", to: `/topology/${namespace ? `ns/${namespace}` : 'all-namespaces'}${showListView ? '/graph' : '/list'}` }, showListView ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["TopologyIcon"], { size: "md" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["ListIcon"], { size: "md" })))) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { resources: [{ kind: 'Project', prop: 'projects', isList: true }] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProjectsExistWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], { title: "Topology" }, namespace ? showListView ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { mock: false, match: match, title: "", EmptyMsg: EmptyMsg, emptyBodyClass: "odc-namespaced-page__content", loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/overview */ "./public/components/overview/index.tsx")).then(m => m.Overview) }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyDataController__WEBPACK_IMPORTED_MODULE_10__["default"], { match: match, render: renderTopology }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_projects_ProjectListPage__WEBPACK_IMPORTED_MODULE_9__["default"], { title: "Topology" }, "Select a project to view the topology"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyPage);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologyResourcePanel.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologyResourcePanel.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_overview_resource_overview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/overview/resource-overview-page */ "./public/components/overview/resource-overview-page.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_knative_plugin_src_components_overview_KnativeResourceOverviewPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin/src/components/overview/KnativeResourceOverviewPage */ "./packages/knative-plugin/src/components/overview/KnativeResourceOverviewPage.tsx");
/* harmony import */ var _actions_modify_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modify-application */ "./packages/dev-console/src/actions/modify-application.ts");





const TopologyResourcePanel = ({ item }) => {
    const resourceItemToShowOnSideBar = item && item.resources;
    // adds extra check, custom sidebar for all knative resources excluding deployment
    const itemKind = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](item, 'data.kind', null);
    if (lodash__WEBPACK_IMPORTED_MODULE_2__["get"](item, 'data.isKnativeResource', false) && itemKind && itemKind !== 'Deployment') {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_knative_plugin_src_components_overview_KnativeResourceOverviewPage__WEBPACK_IMPORTED_MODULE_3__["default"], { item: item.resources });
    }
    let customActions = null;
    if (!item.operatorBackedService) {
        customActions = [_actions_modify_application__WEBPACK_IMPORTED_MODULE_4__["ModifyApplication"]];
    }
    return resourceItemToShowOnSideBar && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_resource_overview_page__WEBPACK_IMPORTED_MODULE_1__["ResourceOverviewPage"], { item: resourceItemToShowOnSideBar, kind: resourceItemToShowOnSideBar.obj.kind, customActions: customActions });
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyResourcePanel);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologyShortcuts.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologyShortcuts.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const TopologyShortcuts = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["ShortcutTable"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Shortcut"], { drag: true }, "Move"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Shortcut"], { shift: true, drag: true }, "Edit application grouping"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Shortcut"], { rightClick: true }, "Access context menu"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Shortcut"], { click: true }, "View details in side panel"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Shortcut"], { hover: true }, "Access create connector handle")));
/* harmony default export */ __webpack_exports__["default"] = (TopologyShortcuts);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/TopologySideBar.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/TopologySideBar.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-topology */ "./node_modules/@patternfly/react-topology/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");



const TopologySideBar = ({ children, show, onClose }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_topology__WEBPACK_IMPORTED_MODULE_1__["TopologySideBar"], { show: show },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-sidebar-dismiss clearfix" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["CloseButton"], { onClick: onClose, "data-test-id": "sidebar-close-button" })),
    children));
/* harmony default export */ __webpack_exports__["default"] = (TopologySideBar);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/actions/edgeActions.ts":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/actions/edgeActions.ts ***!
  \*****************************************************************************/
/*! exports provided: edgeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edgeActions", function() { return edgeActions; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/knative-plugin/src/topology/const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _components_removeConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/removeConnection */ "./packages/dev-console/src/components/topology/components/removeConnection.tsx");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _components_MoveConnectionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MoveConnectionModal */ "./packages/dev-console/src/components/topology/components/MoveConnectionModal.tsx");







const moveConnection = (edge, availableTargets) => {
    const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(edge.getSource().getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(resourceObj));
    return {
        label: 'Move Connector',
        callback: () => {
            Object(_components_MoveConnectionModal__WEBPACK_IMPORTED_MODULE_6__["moveConnectionModal"])({ edge, availableTargets });
        },
        isDisabled: availableTargets.length <= 1,
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["asAccessReview"])(resourceModel, resourceObj, 'delete'),
    };
};
const deleteConnection = (edge) => {
    const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(edge.getSource().getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(resourceObj));
    return {
        label: 'Delete Connector',
        callback: () => {
            Object(_components_removeConnection__WEBPACK_IMPORTED_MODULE_4__["removeConnection"])(edge);
        },
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["asAccessReview"])(resourceModel, resourceObj, 'delete'),
    };
};
const edgeActions = (edge, nodes) => {
    const actions = [];
    const currentTargets = edge
        .getSource()
        .getSourceEdges()
        .map(e => e.getTarget().getId());
    const availableTargets = nodes
        .filter(n => {
        if (n.getId() === edge.getSource().getId()) {
            return false;
        }
        if (n.getId() !== edge.getTarget().getId() && currentTargets.includes(n.getId())) {
            return false;
        }
        if (n.getType() === _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_EVENT_SOURCE"]) {
            return false;
        }
        switch (edge.getType()) {
            case _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_CONNECTS_TO"]:
                return n.getType() !== _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_KNATIVE_REVISION"] && n.getType() !== _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_KNATIVE_SERVICE"];
            case _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_SERVICE_BINDING"]:
                return false;
            case _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_EVENT_SOURCE_LINK"]:
                return n.getType() === _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_KNATIVE_SERVICE"];
            case _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_REVISION_TRAFFIC"]:
                return false;
            case _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_TRAFFIC_CONNECTOR"]:
                return false;
            default:
                return true;
        }
    })
        .sort((n1, n2) => n1.getLabel().localeCompare(n2.getLabel()));
    actions.push(moveConnection(edge, availableTargets));
    switch (edge.getType()) {
        case _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_CONNECTS_TO"]:
        case _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_SERVICE_BINDING"]:
            actions.push(deleteConnection(edge));
            break;
        default:
            break;
    }
    return actions;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/application-panel/ApplicationGroupResource.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/application-panel/ApplicationGroupResource.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _TopologyApplicationList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopologyApplicationList */ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationList.tsx");







const MAX_RESOURCES = 5;
const ApplicationGroupResource = ({ title, resourcesData, group }) => !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resourcesData) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["SidebarSectionHeading"], { text: title }, lodash__WEBPACK_IMPORTED_MODULE_1__["size"](resourcesData) > MAX_RESOURCES && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "sidebar__section-view-all", to: `/search/ns/${Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__["getActiveNamespace"])()}?kind=${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resourcesData[0])}&q=${encodeURIComponent(`app.kubernetes.io/part-of=${group}`)}` }, `View all (${lodash__WEBPACK_IMPORTED_MODULE_1__["size"](resourcesData)})`))),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyApplicationList__WEBPACK_IMPORTED_MODULE_6__["default"], { resources: lodash__WEBPACK_IMPORTED_MODULE_1__["take"](resourcesData, MAX_RESOURCES) }))) : null;
/* harmony default export */ __webpack_exports__["default"] = (ApplicationGroupResource);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationList.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/application-panel/TopologyApplicationList.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");




const TopologyApplicationResourceList = ({ resources }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](resources, resource => {
        const { metadata: { name, namespace, uid }, } = resource;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item  container-fluid", key: uid },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resource), name: name, namespace: namespace })));
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyApplicationResourceList);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationPanel.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/application-panel/TopologyApplicationPanel.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _actions_groupActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/groupActions */ "./packages/dev-console/src/components/topology/actions/groupActions.ts");
/* harmony import */ var _TopologyApplicationResources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopologyApplicationResources */ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationResources.tsx");




const TopologyApplicationPanel = ({ graphData, application }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane resource-overview" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-head resource-overview__heading" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name co-resource-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceIcon"], { className: "co-m-resource-icon--lg", kind: "application" }),
                application.name),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-actions" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ActionsMenu"], { actions: Object(_actions_groupActions__WEBPACK_IMPORTED_MODULE_2__["groupActions"])(graphData, application) })))),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyApplicationResources__WEBPACK_IMPORTED_MODULE_3__["default"], { resources: application.resources, group: application.name })));
/* harmony default export */ __webpack_exports__["default"] = (TopologyApplicationPanel);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationResources.scss":
/*!**********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/application-panel/TopologyApplicationResources.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationResources.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/application-panel/TopologyApplicationResources.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _ApplicationGroupResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationGroupResource */ "./packages/dev-console/src/components/topology/application-panel/ApplicationGroupResource.tsx");
/* harmony import */ var _TopologyApplicationResources_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopologyApplicationResources.scss */ "./packages/dev-console/src/components/topology/application-panel/TopologyApplicationResources.scss");
/* harmony import */ var _TopologyApplicationResources_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TopologyApplicationResources_scss__WEBPACK_IMPORTED_MODULE_6__);







const TopologyApplicationResources = ({ resources, group }) => {
    const resourcesData = resources.reduce((acc, currVal) => {
        const resource = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_4__["getTopologyResourceObject"])(currVal);
        acc[resource.kind] = [...(acc[resource.kind] ? acc[resource.kind] : []), resource];
        return acc;
    }, {});
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('co-m-horizontal-nav__menu', 'co-m-horizontal-nav__menu--within-sidebar', 'co-m-horizontal-nav__menu--within-overview-sidebar', 'odc-application-resource-tab') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-m-horizontal-nav__menu-item" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button" }, "Resources"))),
        lodash__WEBPACK_IMPORTED_MODULE_2__["map"](lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](resourcesData), key => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationGroupResource__WEBPACK_IMPORTED_MODULE_5__["default"], { key: `${group}-${key}`, title: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(key) ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(key).label : key, resourcesData: resourcesData[key], group: group })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyApplicationResources);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/MoveConnectionModal.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/MoveConnectionModal.tsx ***!
  \*****************************************************************************************/
/*! exports provided: moveConnectionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveConnectionModal", function() { return moveConnectionModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/knative-plugin/src/topology/const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _console_knative_plugin_src_topology_knative_topology_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/knative-plugin/src/topology/knative-topology-utils */ "./packages/knative-plugin/src/topology/knative-topology-utils.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _createConnection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createConnection */ "./packages/dev-console/src/components/topology/components/createConnection.tsx");













const nodeItem = (node) => {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-space-r" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceIcon"], { kind: (_a = node.getData().data) === null || _a === void 0 ? void 0 : _a.kind })),
        node.getLabel()));
};
const MoveConnectionForm = ({ handleSubmit, isSubmitting, cancel, values, edge, availableTargets, status }) => {
    const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const isDirty = values.target.getId() !== edge.getTarget().getId();
    const onToggle = () => {
        setOpen(!isOpen);
    };
    const dropDownNodeItem = (node) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], { key: node.getId(), component: "button", onClick: () => {
                values.target = node;
                setOpen(false);
            } }, nodeItem(node)));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: handleSubmit, className: "modal-content modal-content--no-inner-scroll" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_6__["ModalTitle"], null, "Move Connector"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], { size: "sm", className: "co-m-form-row" },
                "Connect",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, ` ${edge.getSource().getLabel()} `),
                "to"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_7__["default"], { fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "target-node", label: "Target" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { id: "target-node-dropdown", className: "dropdown--full-width", toggle: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], { id: "toggle-id", onToggle: onToggle, iconComponent: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["CaretDownIcon"] }, nodeItem(values.target)), isOpen: isOpen, dropdownItems: availableTargets.map(dropDownNodeItem) })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_6__["ModalSubmitFooter"], { submitText: "Move", submitDisabled: !isDirty, cancel: cancel, inProgress: isSubmitting, errorMessage: status && status.submitError })));
};
class MoveConnectionModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.onSubmit = (newTarget) => {
            const { edge, serviceBinding } = this.props;
            switch (edge.getType()) {
                case _const__WEBPACK_IMPORTED_MODULE_11__["TYPE_CONNECTS_TO"]:
                    return Object(_createConnection__WEBPACK_IMPORTED_MODULE_12__["createConnection"])(edge.getSource(), newTarget, edge.getTarget(), serviceBinding);
                case _const__WEBPACK_IMPORTED_MODULE_11__["TYPE_SERVICE_BINDING"]:
                    return Object(_createConnection__WEBPACK_IMPORTED_MODULE_12__["createConnection"])(edge.getSource(), newTarget, edge.getTarget(), serviceBinding);
                case _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_8__["TYPE_EVENT_SOURCE_LINK"]:
                    return Object(_console_knative_plugin_src_topology_knative_topology_utils__WEBPACK_IMPORTED_MODULE_9__["createSinkConnection"])(edge.getSource(), newTarget);
                default:
                    return Promise.reject(new Error(`Unable to move connector of type ${edge.getType()}.`));
            }
        };
        this.handleSubmit = (values, actions) => {
            actions.setSubmitting(true);
            const { close } = this.props;
            this.handlePromise(this.onSubmit(values.target))
                .then(() => {
                actions.setSubmitting(false);
                close();
            })
                .catch(err => {
                actions.setSubmitting(false);
                actions.setStatus({ submitError: err });
            });
        };
    }
    render() {
        const { edge } = this.props;
        const initialValues = {
            target: edge.getTarget(),
        };
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], { initialValues: initialValues, onSubmit: this.handleSubmit, render: formProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MoveConnectionForm, Object.assign({}, formProps, this.props)) });
    }
}
const mapStateToProps = (state) => {
    return {
        serviceBinding: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_10__["getServiceBindingStatus"])(state),
    };
};
const ConnectedMoveConnectionModal = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MoveConnectionModal);
const moveConnectionModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_6__["createModalLauncher"])((props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ConnectedMoveConnectionModal, Object.assign({}, props)));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/FilterDropdown.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/FilterDropdown.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _filter_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-types */ "./packages/dev-console/src/components/topology/filters/filter-types.ts");



const FilterDropdown = ({ filters, onChange }) => {
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const selected = Object.keys(filters).filter(key => filters[key]);
    const onToggle = (open) => setIsOpen(open);
    const onSelect = (e, key) => {
        onChange(Object.assign(Object.assign({}, filters), { [key]: e.target.checked }));
    };
    const showOptions = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SelectGroup"], { label: "Show" }, Object.keys(_filter_types__WEBPACK_IMPORTED_MODULE_2__["ShowFiltersKeyValue"]).map(key => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SelectOption"], { key: key, value: key }, _filter_types__WEBPACK_IMPORTED_MODULE_2__["ShowFiltersKeyValue"][key])))));
    const expandOptions = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SelectGroup"], { label: "Expand" }, Object.keys(_filter_types__WEBPACK_IMPORTED_MODULE_2__["ExpandFiltersKeyValue"]).map(key => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SelectOption"], { key: key, value: key }, _filter_types__WEBPACK_IMPORTED_MODULE_2__["ExpandFiltersKeyValue"][key])))));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Select"], { className: "odc-filter-dropdown__select", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SelectVariant"].checkbox, onToggle: onToggle, selections: selected, isExpanded: isOpen, onSelect: onSelect, placeholderText: "Display Options", isGrouped: true },
        showOptions,
        expandOptions));
};
/* harmony default export */ __webpack_exports__["default"] = (FilterDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/TopologyFilterBar.scss":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/TopologyFilterBar.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/TopologyFilterBar.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/TopologyFilterBar.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action */ "./packages/dev-console/src/components/topology/redux/action.ts");
/* harmony import */ var _filter_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-utils */ "./packages/dev-console/src/components/topology/filters/filter-utils.ts");
/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterDropdown */ "./packages/dev-console/src/components/topology/filters/FilterDropdown.tsx");
/* harmony import */ var _TopologyFilterBar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopologyFilterBar.scss */ "./packages/dev-console/src/components/topology/filters/TopologyFilterBar.scss");
/* harmony import */ var _TopologyFilterBar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TopologyFilterBar_scss__WEBPACK_IMPORTED_MODULE_8__);









const TopologyFilterBar = ({ filters: { display }, onDisplayFiltersChange, onSearchChange, visualization }) => {
    const [searchQuery, setSearchQuery] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const query = Object(_filter_utils__WEBPACK_IMPORTED_MODULE_6__["getTopologySearchQuery"])();
        setSearchQuery(query);
    }, []);
    const onTextFilterChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](text => {
        const query = text === null || text === void 0 ? void 0 : text.trim();
        setSearchQuery(query);
        onSearchChange(query);
    }, [onSearchChange]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], { className: "co-namespace-bar odc-topology-filter-bar" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FilterDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], { filters: display, onChange: onDisplayFiltersChange }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], { className: "odc-topology-filter-bar__search" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TextFilter"], { placeholder: "Find by name...", value: searchQuery, autoFocus: true, onChange: onTextFilterChange })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Popover"], { "aria-label": "Find by name", position: "left", bodyContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        "Search results may appear outside of the visible area.",
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "link", onClick: () => visualization.getGraph().fit(80), isInline: true }, "Click here"),
                        ' ',
                        "to fit to the screen.") },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: "link", className: "odc-topology-filter-bar__info-icon", isInline: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["InfoCircleIcon"], null)))))));
};
const mapStateToProps = (state) => ({
    filters: Object(_filter_utils__WEBPACK_IMPORTED_MODULE_6__["getTopologyFilters"])(state),
});
const dispatchToProps = (dispatch) => ({
    onFiltersChange: (filters) => {
        dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_5__["setTopologyFilters"])(filters));
    },
});
const mergeProps = ({ filters }, { onFiltersChange }, { visualization, onSearchChange }) => ({
    filters,
    onDisplayFiltersChange: (display) => {
        onFiltersChange(Object.assign(Object.assign({}, filters), { display }));
    },
    onSearchChange,
    visualization,
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, dispatchToProps, mergeProps)(TopologyFilterBar));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseNotesPanel.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseNotesPanel.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_markdown_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/markdown-view */ "./public/components/markdown-view.tsx");
/* harmony import */ var _helm_details_notes_HelmReleaseNotesEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helm/details/notes/HelmReleaseNotesEmptyState */ "./packages/dev-console/src/components/helm/details/notes/HelmReleaseNotesEmptyState.tsx");



const TopologyHelmReleaseNotesPanel = ({ releaseNotes }) => releaseNotes ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_markdown_view__WEBPACK_IMPORTED_MODULE_1__["SyncMarkdownView"], { content: releaseNotes }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_helm_details_notes_HelmReleaseNotesEmptyState__WEBPACK_IMPORTED_MODULE_2__["default"], null));
/* harmony default export */ __webpack_exports__["default"] = (TopologyHelmReleaseNotesPanel);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleasePanel.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/TopologyHelmReleasePanel.tsx ***!
  \****************************************************************************************/
/*! exports provided: ConnectedTopologyHelmReleasePanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedTopologyHelmReleasePanel", function() { return ConnectedTopologyHelmReleasePanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _helm_details_overview_HelmReleaseOverview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helm/details/overview/HelmReleaseOverview */ "./packages/dev-console/src/components/helm/details/overview/HelmReleaseOverview.tsx");
/* harmony import */ var _actions_helmReleaseActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/helmReleaseActions */ "./packages/dev-console/src/components/topology/helm/actions/helmReleaseActions.ts");
/* harmony import */ var _TopologyHelmReleaseResourcesPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopologyHelmReleaseResourcesPanel */ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourcesPanel.tsx");
/* harmony import */ var _TopologyHelmReleaseNotesPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopologyHelmReleaseNotesPanel */ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseNotesPanel.tsx");









const stateToProps = ({ UI }) => ({
    selectedDetailsTab: UI.getIn(['overview', 'selectedDetailsTab']),
});
const dispatchToProps = (dispatch) => ({
    onClickTab: name => dispatch(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_4__["selectOverviewDetailsTab"](name)),
});
const ConnectedTopologyHelmReleasePanel = ({ helmRelease, selectedDetailsTab, onClickTab }) => {
    const secret = helmRelease.getData().resources.obj;
    const { manifestResources, releaseNotes } = helmRelease.getData().data;
    const name = helmRelease.getLabel();
    const { namespace } = helmRelease.getData().groupResources[0].resources.obj.metadata;
    const detailsComponent = !secret ? () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["StatusBox"], { loaded: true, loadError: { message: `Unable to find resource for ${helmRelease.getLabel()}` } }) : _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["navFactory"].details(_helm_details_overview_HelmReleaseOverview__WEBPACK_IMPORTED_MODULE_5__["default"]).component;
    const resourcesComponent = () => (manifestResources ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyHelmReleaseResourcesPanel__WEBPACK_IMPORTED_MODULE_7__["default"], { manifestResources: manifestResources, releaseNamespace: namespace }) : null);
    const releaseNotesComponent = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyHelmReleaseNotesPanel__WEBPACK_IMPORTED_MODULE_8__["default"], { releaseNotes: releaseNotes });
    const actions = Object(_actions_helmReleaseActions__WEBPACK_IMPORTED_MODULE_6__["helmReleaseActions"])(helmRelease);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane resource-overview" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-head resource-overview__heading" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name co-resource-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceIcon"], { className: "co-m-resource-icon--lg", kind: "HelmRelease" }),
                    name && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/helm-releases/ns/${namespace}/release/${name}`, className: "co-resource-item__resource-name" }, name))),
                (actions === null || actions === void 0 ? void 0 : actions.length) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-actions" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ActionsMenu"], { actions: Object(_actions_helmReleaseActions__WEBPACK_IMPORTED_MODULE_6__["helmReleaseActions"])(helmRelease) }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["SimpleTabNav"], { selectedTab: selectedDetailsTab || 'Resources', onClickTab: onClickTab, tabs: [
                { name: 'Details', component: detailsComponent },
                { name: 'Resources', component: resourcesComponent },
                { name: 'Release Notes', component: releaseNotesComponent },
            ], tabProps: { obj: secret }, additionalClassNames: "co-m-horizontal-nav__menu--within-sidebar co-m-horizontal-nav__menu--within-overview-sidebar" })));
};
const TopologyHelmReleasePanel = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(ConnectedTopologyHelmReleasePanel);
/* harmony default export */ __webpack_exports__["default"] = (TopologyHelmReleasePanel);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourceItem.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourceItem.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");



const TopologyHelmReleaseResourceItem = ({ item, releaseNamespace }) => {
    const { metadata: { name, namespace }, } = item;
    const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(item);
    const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(kind);
    const resourceNamespace = model.namespaced ? namespace || releaseNamespace : null;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "list-group-item container-fluid" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "col-xs-12" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: kind, name: name, namespace: resourceNamespace })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyHelmReleaseResourceItem);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourceList.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourceList.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopologyHelmReleaseResourceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopologyHelmReleaseResourceItem */ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourceItem.tsx");


const TopologyHelmReleaseResourceList = ({ resources, releaseNamespace }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, resources
        .sort((r1, r2) => r1.metadata.name.localeCompare(r2.metadata.name))
        .map(resource => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyHelmReleaseResourceItem__WEBPACK_IMPORTED_MODULE_1__["default"], { key: resource.metadata.name, item: resource, releaseNamespace: releaseNamespace })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyHelmReleaseResourceList);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourcesPanel.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourcesPanel.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _TopologyHelmReleaseResourceList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopologyHelmReleaseResourceList */ "./packages/dev-console/src/components/topology/helm/TopologyHelmReleaseResourceList.tsx");




const TopologyHelmReleaseResourcesPanel = ({ manifestResources, releaseNamespace }) => {
    const kinds = manifestResources
        .reduce((resourceKinds, resource) => {
        const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource);
        if (!resourceKinds.includes(kind)) {
            resourceKinds.push(kind);
        }
        return resourceKinds;
    }, [])
        .sort((a, b) => a.localeCompare(b));
    const resourceLists = kinds.reduce((lists, kind) => {
        const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(kind);
        const resources = manifestResources.filter(resource => resource.kind === model.kind);
        if (resources.length) {
            lists.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: model.kind },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SidebarSectionHeading"], { text: model.labelPlural }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TopologyHelmReleaseResourceList__WEBPACK_IMPORTED_MODULE_3__["default"], { resources: resources, releaseNamespace: releaseNamespace })));
        }
        return lists;
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" }, resourceLists);
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyHelmReleaseResourcesPanel);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/TopologyHelmWorkloadPanel.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/TopologyHelmWorkloadPanel.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_overview_resource_overview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/overview/resource-overview-page */ "./public/components/overview/resource-overview-page.tsx");


const TopologyHelmWorkloadPanel = ({ item }) => {
    const resourceItemToShowOnSideBar = item && item.resources;
    return resourceItemToShowOnSideBar && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_resource_overview_page__WEBPACK_IMPORTED_MODULE_1__["ResourceOverviewPage"], { item: resourceItemToShowOnSideBar, kind: resourceItemToShowOnSideBar.obj.kind });
};
/* harmony default export */ __webpack_exports__["default"] = (TopologyHelmWorkloadPanel);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/actions/helmReleaseActions.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/actions/helmReleaseActions.ts ***!
  \*****************************************************************************************/
/*! exports provided: helmReleaseActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helmReleaseActions", function() { return helmReleaseActions; });
/* harmony import */ var _actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../actions/modify-helm-release */ "./packages/dev-console/src/actions/modify-helm-release.ts");
/* harmony import */ var _helm_helm_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helm/helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");


const helmReleaseActions = (helmRelease) => {
    const name = helmRelease.getLabel();
    const { namespace } = helmRelease.getData().groupResources[0].resources.obj.metadata;
    return name && namespace
        ? [
            Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_0__["upgradeHelmRelease"])(name, namespace, _helm_helm_types__WEBPACK_IMPORTED_MODULE_1__["HelmActionOrigins"].topology),
            Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_0__["rollbackHelmRelease"])(name, namespace, _helm_helm_types__WEBPACK_IMPORTED_MODULE_1__["HelmActionOrigins"].topology),
            Object(_actions_modify_helm_release__WEBPACK_IMPORTED_MODULE_0__["deleteHelmRelease"])(name, namespace),
        ]
        : [];
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/components/HelmRelease.scss":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/components/HelmRelease.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/components/HelmRelease.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/components/HelmRelease.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _HelmReleaseNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HelmReleaseNode */ "./packages/dev-console/src/components/topology/helm/components/HelmReleaseNode.tsx");
/* harmony import */ var _HelmReleaseGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HelmReleaseGroup */ "./packages/dev-console/src/components/topology/helm/components/HelmReleaseGroup.tsx");
/* harmony import */ var _HelmRelease_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HelmRelease.scss */ "./packages/dev-console/src/components/topology/helm/components/HelmRelease.scss");
/* harmony import */ var _HelmRelease_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HelmRelease_scss__WEBPACK_IMPORTED_MODULE_7__);








const HelmRelease = (props) => {
    const secretObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_4__["getTopologyResourceObject"])(props.element.getData());
    const resourceModel = secretObj ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(secretObj)) : null;
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: resourceModel === null || resourceModel === void 0 ? void 0 : resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel === null || resourceModel === void 0 ? void 0 : resourceModel.plural,
        name: secretObj === null || secretObj === void 0 ? void 0 : secretObj.metadata.name,
        namespace: secretObj === null || secretObj === void 0 ? void 0 : secretObj.metadata.namespace,
    });
    if (props.element.isCollapsed()) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HelmReleaseNode__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({ editAccess: editAccess }, props));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HelmReleaseGroup__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ editAccess: editAccess }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(HelmRelease));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/components/HelmReleaseGroup.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/components/HelmReleaseGroup.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");
/* harmony import */ var _svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
/* harmony import */ var _components_componentUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/helm/components/const.ts");








const HelmReleaseGroup = ({ element, editAccess, selected, onSelect, onContextMenu, contextMenuOpen, dndDropRef, }) => {
    var _a;
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const [innerHover, innerHoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const dragSpec = Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_6__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_7__["TYPE_HELM_RELEASE"], false);
    const [{ dragging, regrouping }, dragNodeRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(dragSpec, { element });
    const [{ dragging: labelDragging, regrouping: labelRegrouping }, dragLabelRef,] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(dragSpec, { element });
    const nodeRefs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(innerHoverRef, dragNodeRef);
    const [filtered] = Object(_filters__WEBPACK_IMPORTED_MODULE_5__["useSearchFilter"])(element.getLabel());
    const displayFilters = Object(_filters__WEBPACK_IMPORTED_MODULE_5__["useDisplayFilters"])();
    const showLabels = displayFilters.showLabels || hover || innerHover;
    const hasChildren = ((_a = element.getChildren()) === null || _a === void 0 ? void 0 : _a.length) > 0;
    const { x, y, width, height } = element.getBounds();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: hoverRef, onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-helm-release', {
            'is-dragging': dragging || labelDragging,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["Layer"], { id: (dragging || labelDragging) && (regrouping || labelRegrouping) ? undefined : 'groups2' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: nodeRefs, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-helm-release', {
                    'is-selected': selected,
                    'is-dragging': dragging || labelDragging,
                    'is-filtered': filtered,
                }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { ref: dndDropRef, className: "odc-helm-release__bg", x: x, y: y, width: width, height: height, rx: "5", ry: "5", filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || innerHover || contextMenuOpen || dragging || labelDragging
                        ? _components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID_HOVER"]
                        : _components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID"]) }),
                !hasChildren && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { x: x + width / 2, y: y + height / 2, dy: "0.35em", textAnchor: "middle" }, "No Resources")))),
        showLabels && element.getLabel() && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "odc-base-node__label", x: x + width / 2, y: y + height + 20, paddingX: 8, paddingY: 4, kind: "HelmRelease", dragRef: dragLabelRef, typeIconClass: element.getData().data.chartIcon || 'icon-helm' }, element.getLabel()))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(HelmReleaseGroup));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/components/HelmReleaseNode.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/components/HelmReleaseNode.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");
/* harmony import */ var _filters_useSearchFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../filters/useSearchFilter */ "./packages/dev-console/src/components/topology/filters/useSearchFilter.ts");
/* harmony import */ var _components_groups_GroupNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/groups/GroupNode */ "./packages/dev-console/src/components/topology/components/groups/GroupNode.tsx");
/* harmony import */ var _components_componentUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/helm/components/const.ts");








const HelmReleaseNode = ({ element, editAccess, selected, onSelect, onContextMenu, contextMenuOpen, dndDropRef, }) => {
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _console_topology__WEBPACK_IMPORTED_MODULE_2__["RectAnchor"](node, 1.5), []));
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const [{ dragging }, dragNodeRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_6__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_7__["TYPE_HELM_RELEASE"], false), {
        element,
    });
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(dragNodeRef, dndDropRef, hoverRef);
    const [filtered] = Object(_filters_useSearchFilter__WEBPACK_IMPORTED_MODULE_4__["useSearchFilter"])(element.getLabel());
    const { width, height } = element.getDimensions();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: refs, onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-helm-release', {
            'is-dragging': dragging,
            'is-selected': selected,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || contextMenuOpen || dragging
                ? _components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID_HOVER"]
                : _components_NodeShadows__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID"]), className: "odc-helm-release__bg", x: 0, y: 0, width: width, height: height, rx: "5", ry: "5" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_groups_GroupNode__WEBPACK_IMPORTED_MODULE_5__["GroupNode"], { kind: "HelmRelease", element: element, typeIconClass: "icon-helm", groupResources: element.getData().groupResources })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(HelmReleaseNode));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/components/helmComponentFactory.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/components/helmComponentFactory.ts ***!
  \**********************************************************************************************/
/*! exports provided: helmReleaseContextMenu, HelmComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helmReleaseContextMenu", function() { return helmReleaseContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelmComponentFactory", function() { return HelmComponentFactory; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _components_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/nodes */ "./packages/dev-console/src/components/topology/components/nodes/index.ts");
/* harmony import */ var _components_nodeContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/nodeContextMenu */ "./packages/dev-console/src/components/topology/components/nodeContextMenu.tsx");
/* harmony import */ var _components_componentUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _components_withEditReviewAccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/withEditReviewAccess */ "./packages/dev-console/src/components/topology/components/withEditReviewAccess.tsx");
/* harmony import */ var _components_AbstractSBRComponentFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AbstractSBRComponentFactory */ "./packages/dev-console/src/components/topology/components/AbstractSBRComponentFactory.ts");
/* harmony import */ var _actions_helmReleaseActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/helmReleaseActions */ "./packages/dev-console/src/components/topology/helm/actions/helmReleaseActions.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/helm/components/const.ts");
/* harmony import */ var _HelmRelease__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HelmRelease */ "./packages/dev-console/src/components/topology/helm/components/HelmRelease.tsx");










const helmReleaseContextMenu = (element) => Object(_components_nodeContextMenu__WEBPACK_IMPORTED_MODULE_3__["createMenuItems"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["kebabOptionsToMenu"])(Object(_actions_helmReleaseActions__WEBPACK_IMPORTED_MODULE_7__["helmReleaseActions"])(element)));
class HelmComponentFactory extends _components_AbstractSBRComponentFactory__WEBPACK_IMPORTED_MODULE_6__["AbstractSBRComponentFactory"] {
    constructor() {
        super(...arguments);
        this.getFactory = () => {
            return (kind, type) => {
                switch (type) {
                    case _const__WEBPACK_IMPORTED_MODULE_8__["TYPE_HELM_RELEASE"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["withContextMenu"])(helmReleaseContextMenu)(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["withNoDrop"])()(_HelmRelease__WEBPACK_IMPORTED_MODULE_9__["default"])));
                    case _const__WEBPACK_IMPORTED_MODULE_8__["TYPE_HELM_WORKLOAD"]:
                        return this.withAddResourceConnector()(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["nodeDropTargetSpec"])(Object(_components_withEditReviewAccess__WEBPACK_IMPORTED_MODULE_5__["withEditReviewAccess"])('patch')(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDragNode"])(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["nodeDragSourceSpec"])(type, false))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["withContextMenu"])(_components_nodeContextMenu__WEBPACK_IMPORTED_MODULE_3__["noRegroupWorkloadContextMenu"])(_components_nodes__WEBPACK_IMPORTED_MODULE_2__["WorkloadNode"]))))));
                    default:
                        return undefined;
                }
            };
        };
    }
}



/***/ }),

/***/ "./packages/dev-console/src/components/topology/layouts/TopologyColaLayout.ts":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/layouts/TopologyColaLayout.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopologyColaLayout; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_knative_plugin_src_topology_layouts_layoutConstraints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/knative-plugin/src/topology/layouts/layoutConstraints */ "./packages/knative-plugin/src/topology/layouts/layoutConstraints.ts");


class TopologyColaLayout extends _console_topology__WEBPACK_IMPORTED_MODULE_0__["ColaLayout"] {
    getConstraints(nodes, groups, edges) {
        return Object(_console_knative_plugin_src_topology_layouts_layoutConstraints__WEBPACK_IMPORTED_MODULE_1__["layoutConstraints"])(nodes, groups, edges, this.options);
    }
}


/***/ }),

/***/ "./packages/dev-console/src/components/topology/layouts/layoutFactory.ts":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/layouts/layoutFactory.ts ***!
  \*******************************************************************************/
/*! exports provided: layoutFactory, COLA_LAYOUT, COLA_FORCE_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutFactory", function() { return layoutFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLA_LAYOUT", function() { return COLA_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLA_FORCE_LAYOUT", function() { return COLA_FORCE_LAYOUT; });
/* harmony import */ var _TopologyColaLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopologyColaLayout */ "./packages/dev-console/src/components/topology/layouts/TopologyColaLayout.ts");

const COLA_LAYOUT = 'Cola';
const COLA_FORCE_LAYOUT = 'ColaForce';
const layoutFactory = (type, graph) => {
    switch (type) {
        case COLA_FORCE_LAYOUT:
            return new _TopologyColaLayout__WEBPACK_IMPORTED_MODULE_0__["default"](graph, { layoutOnDrag: true });
        case COLA_LAYOUT:
            return new _TopologyColaLayout__WEBPACK_IMPORTED_MODULE_0__["default"](graph, { layoutOnDrag: false });
        default:
            return undefined;
    }
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedService.scss":
/*!******************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/OperatorBackedService.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedService.tsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/OperatorBackedService.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _OperatorBackedServiceGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperatorBackedServiceGroup */ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedServiceGroup.tsx");
/* harmony import */ var _OperatorBackedServiceNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OperatorBackedServiceNode */ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedServiceNode.tsx");
/* harmony import */ var _OperatorBackedService_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OperatorBackedService.scss */ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedService.scss");
/* harmony import */ var _OperatorBackedService_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_OperatorBackedService_scss__WEBPACK_IMPORTED_MODULE_7__);








const OperatorBackedService = (props) => {
    const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_4__["getTopologyResourceObject"])(props.element.getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(resourceObj));
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel.plural,
        name: resourceObj.metadata.name,
        namespace: resourceObj.metadata.namespace,
    });
    if (props.element.isCollapsed()) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_OperatorBackedServiceNode__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ editAccess: editAccess }, props));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_OperatorBackedServiceGroup__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({ editAccess: editAccess }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(OperatorBackedService));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedServiceGroup.tsx":
/*!**********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/OperatorBackedServiceGroup.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _components_componentUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
/* harmony import */ var _components_NodeShadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");








const OperatorBackedServiceGroup = ({ element, editAccess, selected, onSelect, onContextMenu, contextMenuOpen, dndDropRef }) => {
    var _a;
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const [innerHover, innerHoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const [{ dragging, regrouping }, dragNodeRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_OPERATOR_BACKED_SERVICE"], false), {
        element,
    });
    const [{ dragging: labelDragging, regrouping: labelRegrouping }, dragLabelRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_OPERATOR_BACKED_SERVICE"], false), {
        element,
    });
    const nodeRefs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(innerHoverRef, dragNodeRef);
    const hasChildren = ((_a = element.getChildren()) === null || _a === void 0 ? void 0 : _a.length) > 0;
    const { data } = element.getData();
    const [filtered] = Object(_filters__WEBPACK_IMPORTED_MODULE_6__["useSearchFilter"])(element.getLabel());
    const displayFilters = Object(_filters__WEBPACK_IMPORTED_MODULE_6__["useDisplayFilters"])();
    const showLabels = displayFilters.showLabels || hover || innerHover;
    const { x, y, width, height } = element.getBounds();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: hoverRef, onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-operator-backed-service', {
            'is-dragging': dragging || labelDragging,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_NodeShadows__WEBPACK_IMPORTED_MODULE_7__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["Layer"], { id: (dragging || labelDragging) && (regrouping || labelRegrouping) ? undefined : 'groups2' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: nodeRefs, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-operator-backed-service', {
                    'is-selected': selected,
                    'is-dragging': dragging || labelDragging,
                    'is-filtered': filtered,
                }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { ref: dndDropRef, className: "odc-operator-backed-service__bg", x: x, y: y, width: width, height: height, rx: "5", ry: "5", filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || innerHover || contextMenuOpen || dragging || labelDragging ? _components_NodeShadows__WEBPACK_IMPORTED_MODULE_7__["NODE_SHADOW_FILTER_ID_HOVER"] : _components_NodeShadows__WEBPACK_IMPORTED_MODULE_7__["NODE_SHADOW_FILTER_ID"]) }),
                !hasChildren && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { x: x + width / 2, y: y + height / 2, dy: "0.35em", textAnchor: "middle" }, "No Resources")))),
        showLabels && (data.kind || element.getLabel()) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "odc-base-node__label", x: x + width / 2, y: y + height + 20, paddingX: 8, paddingY: 4, kind: "Operator", dragRef: dragLabelRef, typeIconClass: element.getData().data.builderImage }, element.getLabel()))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(OperatorBackedServiceGroup));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedServiceNode.tsx":
/*!*********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/OperatorBackedServiceNode.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _filters_useSearchFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../filters/useSearchFilter */ "./packages/dev-console/src/components/topology/filters/useSearchFilter.ts");
/* harmony import */ var _components_componentUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _components_NodeShadows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");
/* harmony import */ var _components_groups_GroupNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/groups/GroupNode */ "./packages/dev-console/src/components/topology/components/groups/GroupNode.tsx");








const OperatorBackedServiceNode = ({ element, editAccess, selected, onSelect, onContextMenu, contextMenuOpen, dndDropRef }) => {
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _console_topology__WEBPACK_IMPORTED_MODULE_2__["RectAnchor"](node, 1.5), []));
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const [{ dragging }, dragNodeRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(Object(_components_componentUtils__WEBPACK_IMPORTED_MODULE_4__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_OPERATOR_BACKED_SERVICE"], true, editAccess), {
        element,
    });
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(hoverRef, dragNodeRef, dndDropRef);
    const [filtered] = Object(_filters_useSearchFilter__WEBPACK_IMPORTED_MODULE_3__["useSearchFilter"])(element.getLabel());
    const kind = 'Operator';
    const { width, height } = element.getDimensions();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: refs, onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-operator-backed-service', {
            'is-dragging': dragging,
            'is-selected': selected,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_NodeShadows__WEBPACK_IMPORTED_MODULE_6__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { className: "odc-operator-backed-service__bg", filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || contextMenuOpen || dragging ? _components_NodeShadows__WEBPACK_IMPORTED_MODULE_6__["NODE_SHADOW_FILTER_ID_HOVER"] : _components_NodeShadows__WEBPACK_IMPORTED_MODULE_6__["NODE_SHADOW_FILTER_ID"]), x: 0, y: 0, width: width, height: height, rx: "5", ry: "5" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_groups_GroupNode__WEBPACK_IMPORTED_MODULE_7__["GroupNode"], { kind: kind, element: element, groupResources: element.getData().groupResources, typeIconClass: element.getData().data.builderImage })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(OperatorBackedServiceNode));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/operatorsComponentFactory.ts":
/*!********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/operatorsComponentFactory.ts ***!
  \********************************************************************************************************/
/*! exports provided: OperatorsComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsComponentFactory", function() { return OperatorsComponentFactory; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _components_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/nodes */ "./packages/dev-console/src/components/topology/components/nodes/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./packages/dev-console/src/components/topology/components/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _OperatorBackedService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperatorBackedService */ "./packages/dev-console/src/components/topology/operators/components/OperatorBackedService.tsx");





class OperatorsComponentFactory extends _components__WEBPACK_IMPORTED_MODULE_2__["AbstractSBRComponentFactory"] {
    constructor() {
        super(...arguments);
        this.getFactory = () => {
            return (kind, type) => {
                switch (type) {
                    case _const__WEBPACK_IMPORTED_MODULE_3__["TYPE_OPERATOR_BACKED_SERVICE"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_components__WEBPACK_IMPORTED_MODULE_2__["withNoDrop"])()(_OperatorBackedService__WEBPACK_IMPORTED_MODULE_4__["default"]));
                    case _const__WEBPACK_IMPORTED_MODULE_3__["TYPE_OPERATOR_WORKLOAD"]:
                        return this.withAddResourceConnector()(Object(_components__WEBPACK_IMPORTED_MODULE_2__["withEditReviewAccess"])('patch')(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_components__WEBPACK_IMPORTED_MODULE_2__["nodeDropTargetSpec"])(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDragNode"])(Object(_components__WEBPACK_IMPORTED_MODULE_2__["nodeDragSourceSpec"])(type, false))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_components__WEBPACK_IMPORTED_MODULE_2__["withContextMenu"])(_components__WEBPACK_IMPORTED_MODULE_2__["noRegroupWorkloadContextMenu"])(_components_nodes__WEBPACK_IMPORTED_MODULE_1__["WorkloadNode"]))))));
                    default:
                        return undefined;
                }
            };
        };
    }
}



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


/***/ }),

/***/ "./packages/dev-console/src/utils/useAddToProjectAccess.ts":
/*!*****************************************************************!*\
  !*** ./packages/dev-console/src/utils/useAddToProjectAccess.ts ***!
  \*****************************************************************/
/*! exports provided: useAddToProjectAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToProjectAccess", function() { return useAddToProjectAccess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _actions_add_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/add-resources */ "./packages/dev-console/src/actions/add-resources.tsx");




const resourceAttributes = (model, namespace) => {
    return {
        group: model.apiGroup || '',
        resource: model.plural,
        namespace,
        verb: 'create',
    };
};
const useAddToProjectAccess = (activeNamespace) => {
    const [addAccess, setAddAccess] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    const buildConfigsAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["BuildConfigModel"], activeNamespace));
    const imageStreamAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamModel"], activeNamespace));
    const deploymentConfigAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["DeploymentConfigModel"], activeNamespace));
    const imageStreamImportAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamImportsModel"], activeNamespace));
    const secretAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["SecretModel"], activeNamespace));
    const routeAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RouteModel"], activeNamespace));
    const serviceAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])(resourceAttributes(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ServiceModel"], activeNamespace));
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const createResourceAccess = [];
        if (buildConfigsAccess &&
            imageStreamAccess &&
            deploymentConfigAccess &&
            secretAccess &&
            routeAccess &&
            serviceAccess) {
            createResourceAccess.push(_actions_add_resources__WEBPACK_IMPORTED_MODULE_3__["allImportResourceAccess"]);
            if (imageStreamImportAccess) {
                createResourceAccess.push(_actions_add_resources__WEBPACK_IMPORTED_MODULE_3__["allCatalogImageResourceAccess"]);
            }
        }
        setAddAccess(createResourceAccess);
    }, [
        buildConfigsAccess,
        deploymentConfigAccess,
        imageStreamAccess,
        imageStreamImportAccess,
        routeAccess,
        secretAccess,
        serviceAccess,
    ]);
    return addAccess;
};


/***/ }),

/***/ "./packages/knative-plugin/src/actions/delete-revision.ts":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/actions/delete-revision.ts ***!
  \****************************************************************/
/*! exports provided: deleteRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRevision", function() { return deleteRevision; });
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals */ "./packages/knative-plugin/src/components/modals/index.ts");

const deleteRevision = (model, revision) => {
    return {
        label: `Delete ${model.label}`,
        callback: () => Object(_components_modals__WEBPACK_IMPORTED_MODULE_0__["deleteRevisionModal"])({
            revision,
        }),
        accessReview: {
            group: model.apiGroup,
            resource: model.plural,
            name: revision.metadata.name,
            namespace: revision.metadata.namespace,
            verb: 'delete',
        },
    };
};


/***/ }),

/***/ "./packages/knative-plugin/src/actions/getRevisionActions.ts":
/*!*******************************************************************!*\
  !*** ./packages/knative-plugin/src/actions/getRevisionActions.ts ***!
  \*******************************************************************/
/*! exports provided: getRevisionActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevisionActions", function() { return getRevisionActions; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _delete_revision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-revision */ "./packages/knative-plugin/src/actions/delete-revision.ts");



const getRevisionActions = () => {
    let deleteFound = false;
    const commonActions = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory.common.map((action) => {
        if (action.name === 'Delete') {
            deleteFound = true;
            return _delete_revision__WEBPACK_IMPORTED_MODULE_2__["deleteRevision"];
        }
        return action;
    });
    if (!deleteFound) {
        commonActions.push(_delete_revision__WEBPACK_IMPORTED_MODULE_2__["deleteRevision"]);
    }
    return [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_1__["RevisionModel"]), ...commonActions];
};


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/KnativeOverview.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/KnativeOverview.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");




const KnativeOverview = ({ item }) => {
    const { obj, current } = item;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
        obj.kind === _models__WEBPACK_IMPORTED_MODULE_3__["RevisionModel"].kind && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__pod-counts" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodRing"], { pods: current ? current.pods : [], obj: obj, rc: current && current.obj, resourceKind: _models__WEBPACK_IMPORTED_MODULE_3__["RevisionModel"], path: "/spec/replicas" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "resource-overview__summary" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: obj }))));
};
/* harmony default export */ __webpack_exports__["default"] = (KnativeOverview);


/***/ }),

/***/ "./packages/knative-plugin/src/components/overview/KnativeResourceOverviewPage.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/overview/KnativeResourceOverviewPage.tsx ***!
  \*****************************************************************************************/
/*! exports provided: KnativeResourceOverviewPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnativeResourceOverviewPage", function() { return KnativeResourceOverviewPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_overview_resource_overview_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/overview/resource-overview-details */ "./public/components/overview/resource-overview-details.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_dev_console_src_actions_modify_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/actions/modify-application */ "./packages/dev-console/src/actions/modify-application.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const */ "./packages/knative-plugin/src/const.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/getRevisionActions */ "./packages/knative-plugin/src/actions/getRevisionActions.ts");
/* harmony import */ var _utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/fetch-dynamic-eventsources-utils */ "./packages/knative-plugin/src/utils/fetch-dynamic-eventsources-utils.ts");
/* harmony import */ var _OverviewDetailsKnativeResourcesTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OverviewDetailsKnativeResourcesTab */ "./packages/knative-plugin/src/components/overview/OverviewDetailsKnativeResourcesTab.tsx");
/* harmony import */ var _KnativeOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KnativeOverview */ "./packages/knative-plugin/src/components/overview/KnativeOverview.tsx");












const tabs = [
    {
        name: 'Details',
        component: _KnativeOverview__WEBPACK_IMPORTED_MODULE_11__["default"],
    },
    {
        name: 'Resources',
        component: _OverviewDetailsKnativeResourcesTab__WEBPACK_IMPORTED_MODULE_10__["default"],
    },
];
const KnativeResourceOverviewPage = ({ item, knativeModels, kindsInFlight, }) => {
    if (kindsInFlight) {
        return !knativeModels ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
    }
    const apiInfo = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["groupVersionFor"])(item.obj.apiVersion);
    const resourceModel = knativeModels.find((model) => model.kind === item.obj.kind &&
        model.apiGroup === apiInfo.group &&
        model.apiVersion === apiInfo.version);
    const actions = [];
    if (resourceModel.kind === _models__WEBPACK_IMPORTED_MODULE_7__["RevisionModel"].kind) {
        actions.push(...Object(_actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_8__["getRevisionActions"])());
    }
    else {
        actions.push(_console_dev_console_src_actions_modify_application__WEBPACK_IMPORTED_MODULE_5__["ModifyApplication"], ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].getExtensionsActionsForKind(resourceModel), ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.common);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_resource_overview_details__WEBPACK_IMPORTED_MODULE_3__["ResourceOverviewDetails"], { item: item, kindObj: resourceModel, menuActions: actions, tabs: tabs }));
};
const mapStateToProps = (state) => {
    return {
        kindsInFlight: state.k8s.getIn(['RESOURCES', 'inFlight']),
        knativeModels: state.k8s
            .getIn(['RESOURCES', 'models'])
            .filter((model) => model.apiGroup === _const__WEBPACK_IMPORTED_MODULE_6__["KNATIVE_SERVING_APIGROUP"] ||
            Object(_utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_9__["isDynamicEventResourceKind"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(model))),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(KnativeResourceOverviewPage));


/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/apiserversource.png":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/apiserversource.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/apiserversource.png";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/camelsource.svg":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/camelsource.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/camelsource.svg";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/containersource.png":
/*!********************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/containersource.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/containersource.png";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/cronjobsource.svg":
/*!******************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/cronjobsource.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/cronjobsource.svg";

/***/ }),

/***/ "./packages/knative-plugin/src/imgs/logos/kafkasource.svg":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/imgs/logos/kafkasource.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/kafkasource.svg";

/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/anchors/RevisionTrafficSourceAnchor.ts":
/*!************************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/anchors/RevisionTrafficSourceAnchor.ts ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RevisionTrafficSourceAnchor; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");

class RevisionTrafficSourceAnchor extends _console_topology__WEBPACK_IMPORTED_MODULE_0__["AbstractAnchor"] {
    constructor(node, radius) {
        super(node);
        this.radius = radius;
    }
    getLocation(reference) {
        const bounds = this.owner.getBounds();
        // center point is top right corner
        const center = new _console_topology__WEBPACK_IMPORTED_MODULE_0__["Point"](bounds.right(), bounds.y);
        if (this.radius) {
            // location is edge of decorator
            const size = this.radius * 2;
            return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["getEllipseAnchorPoint"])(center, size, size, reference);
        }
        // location is center of node
        return center;
    }
    getReferencePoint() {
        const bounds = this.owner.getBounds();
        // reference point is top right corner of node
        return new _console_topology__WEBPACK_IMPORTED_MODULE_0__["Point"](bounds.right(), bounds.y);
    }
}


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/anchors/RevisionTrafficTargetAnchor.ts":
/*!************************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/anchors/RevisionTrafficTargetAnchor.ts ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RevisionTrafficTargetAnchor; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");

class RevisionTrafficTargetAnchor extends _console_topology__WEBPACK_IMPORTED_MODULE_0__["AbstractAnchor"] {
    constructor(node, radius) {
        super(node);
        this.radius = radius;
        // TODO align sizing with WorkloadNode
        this.radiusOffset = radius * 0.7;
    }
    getLocation(reference) {
        const bounds = this.owner.getBounds();
        if (this.radius) {
            // location is edge of decorator
            const center = new _console_topology__WEBPACK_IMPORTED_MODULE_0__["Point"](bounds.right() - this.radiusOffset, bounds.y + this.radiusOffset);
            const size = this.radius * 2;
            return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["getEllipseAnchorPoint"])(center, size, size, reference);
        }
        // location is edge of outer node
        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["getEllipseAnchorPoint"])(bounds.getCenter(), bounds.width, bounds.height, reference);
    }
    getReferencePoint() {
        const bounds = this.owner.getBounds();
        if (this.radius) {
            // reference point is center of decorator
            return new _console_topology__WEBPACK_IMPORTED_MODULE_0__["Point"](bounds.right() - this.radiusOffset, bounds.y + this.radiusOffset);
        }
        // reference point is center of node
        return bounds.getCenter();
    }
}


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/edges/EventSourceLink.scss":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/edges/EventSourceLink.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/edges/EventSourceLink.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/edges/EventSourceLink.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _EventSourceLink_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventSourceLink.scss */ "./packages/knative-plugin/src/topology/components/edges/EventSourceLink.scss");
/* harmony import */ var _EventSourceLink_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_EventSourceLink_scss__WEBPACK_IMPORTED_MODULE_6__);
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







const EventSourceLink = (_a) => {
    var { element, targetDragRef, children } = _a, others = __rest(_a, ["element", "targetDragRef", "children"]);
    const resourceObj = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_5__["getTopologyResourceObject"])(element.getSource().getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(resourceObj));
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: resourceModel.apiGroup,
        verb: 'update',
        resource: resourceModel.plural,
        name: resourceObj.metadata.name,
        namespace: resourceObj.metadata.namespace,
    });
    const markerPoint = element.getEndPoint();
    const edgeClasses = classnames__WEBPACK_IMPORTED_MODULE_1__('odc-event-source-link', { 'odc-m-editable': editAccess });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_5__["BaseEdge"], Object.assign({ className: edgeClasses, element: element }, others),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { className: "topology-connector-arrow", ref: editAccess ? targetDragRef : null, cx: markerPoint.x, cy: markerPoint.y, r: 6 })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["observer"])(EventSourceLink));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/edges/TrafficLink.scss":
/*!********************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/edges/TrafficLink.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/edges/TrafficLink.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/edges/TrafficLink.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _TrafficLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrafficLink.scss */ "./packages/knative-plugin/src/topology/components/edges/TrafficLink.scss");
/* harmony import */ var _TrafficLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TrafficLink_scss__WEBPACK_IMPORTED_MODULE_3__);




const TrafficLink = ({ element }) => {
    const { percent } = element.getData().data;
    let text = null;
    if (percent != null) {
        const startPoint = element.getStartPoint();
        const endPoint = element.getEndPoint();
        text = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { className: "odc-traffic-link__text", x: (endPoint.x + startPoint.x) / 2, y: (endPoint.y + startPoint.y) / 2, textAnchor: "middle" },
            percent,
            "%"));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["BaseEdge"], { element: element, className: "odc-traffic-link" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["EdgeConnectorArrow"], { edge: element }),
        text));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(TrafficLink));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/groups/KnativeService.scss":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/groups/KnativeService.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/groups/KnativeService.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/groups/KnativeService.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _KnativeServiceNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KnativeServiceNode */ "./packages/knative-plugin/src/topology/components/groups/KnativeServiceNode.tsx");
/* harmony import */ var _KnativeServiceGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KnativeServiceGroup */ "./packages/knative-plugin/src/topology/components/groups/KnativeServiceGroup.tsx");
/* harmony import */ var _KnativeService_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KnativeService.scss */ "./packages/knative-plugin/src/topology/components/groups/KnativeService.scss");
/* harmony import */ var _KnativeService_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_KnativeService_scss__WEBPACK_IMPORTED_MODULE_7__);








const KnativeService = (props) => {
    const resourceObj = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__["getTopologyResourceObject"])(props.element.getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(resourceObj));
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel.plural,
        name: resourceObj.metadata.name,
        namespace: resourceObj.metadata.namespace,
    });
    if (props.element.isCollapsed()) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_KnativeServiceNode__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, { editAccess: editAccess }));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_KnativeServiceGroup__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, { editAccess: editAccess }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(KnativeService));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/groups/KnativeServiceGroup.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/groups/KnativeServiceGroup.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/dev-console/src/components/svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology_components_nodes_build_decorators_BuildDecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/dev-console/src/components/topology/components/nodes/build-decorators/BuildDecorator */ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/BuildDecorator.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _anchors_RevisionTrafficSourceAnchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../anchors/RevisionTrafficSourceAnchor */ "./packages/knative-plugin/src/topology/components/anchors/RevisionTrafficSourceAnchor.ts");










const DECORATOR_RADIUS = 13;
const KnativeServiceGroup = ({ element, selected, onSelect, onContextMenu, contextMenuOpen, canDrop, dropTarget, edgeDragging, dndDropRef, editAccess, onHideCreateConnector, onShowCreateConnector, }) => {
    var _a;
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useHover"])();
    const [innerHover, innerHoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useHover"])();
    const [{ dragging, regrouping }, dragNodeRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useDragNode"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_8__["TYPE_KNATIVE_SERVICE"], true, editAccess), {
        element,
    });
    const [{ dragging: labelDragging, regrouping: labelRegrouping }, dragLabelRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useDragNode"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_8__["TYPE_KNATIVE_SERVICE"], true, editAccess), {
        element,
    });
    const nodeRefs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useCombineRefs"])(innerHoverRef, dragNodeRef);
    const hasChildren = ((_a = element.getChildren()) === null || _a === void 0 ? void 0 : _a.length) > 0;
    const { data } = element.getData();
    const hasDataUrl = !!data.url;
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _anchors_RevisionTrafficSourceAnchor__WEBPACK_IMPORTED_MODULE_9__["default"](node, hasDataUrl ? DECORATOR_RADIUS : 0), [hasDataUrl]), _console_topology__WEBPACK_IMPORTED_MODULE_4__["AnchorEnd"].source, 'revision-traffic');
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _console_topology__WEBPACK_IMPORTED_MODULE_4__["RectAnchor"](node, 1.5), []));
    const [filtered] = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["useSearchFilter"])(element.getLabel());
    const displayFilters = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["useDisplayFilters"])();
    const showLabels = displayFilters.showLabels || hover || innerHover;
    const { x, y, width, height } = element.getBounds();
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
        if (editAccess) {
            if (innerHover) {
                onShowCreateConnector && onShowCreateConnector();
            }
            else {
                onHideCreateConnector && onHideCreateConnector();
            }
        }
    }, [editAccess, innerHover, onShowCreateConnector, onHideCreateConnector]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { content: "Move sink to service", trigger: "manual", isVisible: dropTarget && canDrop, tippyProps: { duration: 0, delay: 0 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: hoverRef, onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-knative-service', {
                'is-dragging': dragging || labelDragging,
                'is-highlight': canDrop || edgeDragging,
                'is-filtered': filtered,
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["NodeShadows"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_4__["Layer"], { id: (dragging || labelDragging) && (regrouping || labelRegrouping) ? undefined : 'groups2' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: nodeRefs, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-knative-service', {
                        'is-selected': selected,
                        'is-dragging': dragging || labelDragging,
                        'is-highlight': canDrop || edgeDragging,
                        'is-dropTarget': canDrop && dropTarget,
                        'is-filtered': filtered,
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { ref: dndDropRef, className: "odc-knative-service__bg", x: x, y: y, width: width, height: height, rx: "5", ry: "5", filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["createSvgIdUrl"])(hover || innerHover || dragging || labelDragging || contextMenuOpen || dropTarget
                            ? _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["NODE_SHADOW_FILTER_ID_HOVER"]
                            : _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["NODE_SHADOW_FILTER_ID"]) }),
                    !hasChildren && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { x: x + width / 2, y: y + height / 2, dy: "0.35em", textAnchor: "middle" }, "No Revisions")))),
            hasDataUrl && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { key: "route", content: "Open URL", position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TooltipPosition"].right },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_6__["Decorator"], { x: x + width, y: y, radius: DECORATOR_RADIUS, href: data.url, external: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: "translate(-6.5, -6.5)" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExternalLinkAltIcon"], { style: { fontSize: DECORATOR_RADIUS }, alt: "Open URL" }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology_components_nodes_build_decorators_BuildDecorator__WEBPACK_IMPORTED_MODULE_7__["default"], { x: x, y: y + height, radius: DECORATOR_RADIUS, workloadData: data }),
            showLabels && (data.kind || element.getLabel()) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "odc-knative-service__label odc-base-node__label", x: x + width / 2, y: y + height + 20, paddingX: 8, paddingY: 4, kind: data.kind, dragRef: dragLabelRef, typeIconClass: "icon-knative" }, element.getLabel())))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["observer"])(KnativeServiceGroup));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/groups/KnativeServiceNode.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/groups/KnativeServiceNode.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./packages/knative-plugin/src/topology/const.ts");





const KnativeServiceNode = ({ element, selected, onSelect, onContextMenu, contextMenuOpen, canDrop, dropTarget, edgeDragging, dndDropRef, editAccess, onHideCreateConnector, onShowCreateConnector, }) => {
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _console_topology__WEBPACK_IMPORTED_MODULE_2__["RectAnchor"](node, 1.5), []));
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const [{ dragging }, dragNodeRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useDragNode"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["nodeDragSourceSpec"])(_const__WEBPACK_IMPORTED_MODULE_4__["TYPE_KNATIVE_SERVICE"], true, editAccess), {
        element,
    });
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(hoverRef, dragNodeRef);
    const [filtered] = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["useSearchFilter"])(element.getLabel());
    const { kind } = element.getData().data;
    const { width, height } = element.getBounds();
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
        if (editAccess) {
            if (hover) {
                onShowCreateConnector && onShowCreateConnector();
            }
            else {
                onHideCreateConnector && onHideCreateConnector();
            }
        }
    }, [editAccess, hover, onShowCreateConnector, onHideCreateConnector]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: refs, onContextMenu: onContextMenu, onClick: onSelect, className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-knative-service', {
            'is-dragging': dragging,
            'is-highlight': canDrop || edgeDragging,
            'is-selected': selected,
            'is-dropTarget': canDrop && dropTarget,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { ref: dndDropRef, className: "odc-knative-service__bg", filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || dragging || contextMenuOpen || dropTarget
                ? _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID_HOVER"]
                : _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID"]), x: 0, y: 0, width: width, height: height, rx: "5", ry: "5" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["GroupNode"], { kind: kind, element: element, typeIconClass: "icon-knative", groupResources: element.getData().groupResources, emptyValue: "No Revisions" })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(KnativeServiceNode));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/knativeComponentFactory.ts":
/*!************************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/knativeComponentFactory.ts ***!
  \************************************************************************************/
/*! exports provided: knativeContextMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knativeContextMenu", function() { return knativeContextMenu; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _console_dev_console_src_actions_modify_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/actions/modify-application */ "./packages/dev-console/src/actions/modify-application.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/getRevisionActions */ "./packages/knative-plugin/src/actions/getRevisionActions.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _groups_KnativeService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/KnativeService */ "./packages/knative-plugin/src/topology/components/groups/KnativeService.tsx");
/* harmony import */ var _nodes_RevisionNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nodes/RevisionNode */ "./packages/knative-plugin/src/topology/components/nodes/RevisionNode.tsx");
/* harmony import */ var _edges_TrafficLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edges/TrafficLink */ "./packages/knative-plugin/src/topology/components/edges/TrafficLink.tsx");
/* harmony import */ var _edges_EventSourceLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edges/EventSourceLink */ "./packages/knative-plugin/src/topology/components/edges/EventSourceLink.tsx");
/* harmony import */ var _nodes_EventSource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nodes/EventSource */ "./packages/knative-plugin/src/topology/components/nodes/EventSource.tsx");
/* harmony import */ var _knativeComponentUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./knativeComponentUtils */ "./packages/knative-plugin/src/topology/components/knativeComponentUtils.ts");














const knativeContextMenu = (element) => {
    const item = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["getTopologyResourceObject"])(element.getData());
    const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(item));
    const actions = [];
    if (model.kind === _models__WEBPACK_IMPORTED_MODULE_5__["RevisionModel"].kind) {
        actions.push(...Object(_actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_6__["getRevisionActions"])());
    }
    else {
        actions.push(_console_dev_console_src_actions_modify_application__WEBPACK_IMPORTED_MODULE_2__["ModifyApplication"], ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].getExtensionsActionsForKind(model), ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.common);
    }
    const kebabOptions = actions.map((action) => {
        return action(model, item);
    });
    return Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["createMenuItems"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["kebabOptionsToMenu"])(kebabOptions));
};
class KnativeComponentFactory extends _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["AbstractSBRComponentFactory"] {
    constructor() {
        super(...arguments);
        this.getFactory = () => {
            return (kind, type) => {
                switch (type) {
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_KNATIVE_SERVICE"]:
                        return this.withAddResourceConnector()(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_knativeComponentUtils__WEBPACK_IMPORTED_MODULE_13__["knativeServiceDropTargetSpec"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["withEditReviewAccess"])('update')(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["withContextMenu"])(knativeContextMenu)(_groups_KnativeService__WEBPACK_IMPORTED_MODULE_8__["default"])))));
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_EVENT_SOURCE"]:
                        return Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["withEditReviewAccess"])('patch')(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDragNode"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["nodeDragSourceSpec"])(type))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["withContextMenu"])(knativeContextMenu)(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_knativeComponentUtils__WEBPACK_IMPORTED_MODULE_13__["eventSourceTargetSpec"])(_nodes_EventSource__WEBPACK_IMPORTED_MODULE_12__["default"])))));
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_KNATIVE_REVISION"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDragNode"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["nodeDragSourceSpec"])(type, false))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["withContextMenu"])(knativeContextMenu)(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["withNoDrop"])()(_nodes_RevisionNode__WEBPACK_IMPORTED_MODULE_9__["default"]))));
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_REVISION_TRAFFIC"]:
                        return _edges_TrafficLink__WEBPACK_IMPORTED_MODULE_10__["default"];
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_EVENT_SOURCE_LINK"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withTargetDrag"])(Object(_knativeComponentUtils__WEBPACK_IMPORTED_MODULE_13__["eventSourceLinkDragSourceSpec"])())(_edges_EventSourceLink__WEBPACK_IMPORTED_MODULE_11__["default"]);
                    default:
                        return undefined;
                }
            };
        };
    }
}
/* harmony default export */ __webpack_exports__["default"] = (KnativeComponentFactory);


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/knativeComponentUtils.ts":
/*!**********************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/knativeComponentUtils.ts ***!
  \**********************************************************************************/
/*! exports provided: MOVE_EV_SRC_CONNECTOR_OPERATION, nodesEdgeIsDragging, canDropEventSourceSinkOnNode, knativeServiceDropTargetSpec, eventSourceLinkDragSourceSpec, eventSourceTargetSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_EV_SRC_CONNECTOR_OPERATION", function() { return MOVE_EV_SRC_CONNECTOR_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodesEdgeIsDragging", function() { return nodesEdgeIsDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canDropEventSourceSinkOnNode", function() { return canDropEventSourceSinkOnNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knativeServiceDropTargetSpec", function() { return knativeServiceDropTargetSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventSourceLinkDragSourceSpec", function() { return eventSourceLinkDragSourceSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventSourceTargetSpec", function() { return eventSourceTargetSpec; });
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../knative-topology-utils */ "./packages/knative-plugin/src/topology/knative-topology-utils.ts");





const MOVE_EV_SRC_CONNECTOR_OPERATION = 'moveeventsourceconnector';
const nodesEdgeIsDragging = (monitor, props) => monitor.isDragging() &&
    ((monitor.getOperation() === _console_topology__WEBPACK_IMPORTED_MODULE_1__["CREATE_CONNECTOR_OPERATION"] && monitor.getItem() === props.element) ||
        (monitor.getOperation() === MOVE_EV_SRC_CONNECTOR_OPERATION &&
            monitor.getItem().getSource()) === props.element);
const canDropEventSourceSinkOnNode = (operation, edge, node) => edge.getSource() !== node &&
    node.getType() === _const__WEBPACK_IMPORTED_MODULE_3__["TYPE_KNATIVE_SERVICE"] &&
    operation === MOVE_EV_SRC_CONNECTOR_OPERATION &&
    !node.getTargetEdges().find((e) => e.getSource() === edge.getSource());
const knativeServiceDropTargetSpec = {
    accept: [_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["EDGE_DRAG_TYPE"]],
    canDrop: (item, monitor, props) => item.getType() === _const__WEBPACK_IMPORTED_MODULE_3__["TYPE_EVENT_SOURCE_LINK"] && item.getSource() !== props.element,
    collect: (monitor, props) => {
        var _a;
        return ({
            canDrop: monitor.isDragging() && ((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === MOVE_EV_SRC_CONNECTOR_OPERATION,
            dropTarget: monitor.isOver({ shallow: true }),
            edgeDragging: nodesEdgeIsDragging(monitor, props),
        });
    },
};
const eventSourceLinkDragSourceSpec = () => ({
    item: { type: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["EDGE_DRAG_TYPE"] },
    operation: { type: MOVE_EV_SRC_CONNECTOR_OPERATION, edit: true },
    begin: (monitor, props) => {
        props.element.raise();
        return props.element;
    },
    drag: (event, monitor, props) => {
        props.element.setEndPoint(event.x, event.y);
    },
    end: (dropResult, monitor, props) => {
        props.element.setEndPoint();
        if (monitor.didDrop() &&
            dropResult &&
            canDropEventSourceSinkOnNode(monitor.getOperation().type, props.element, dropResult)) {
            Object(_knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__["createSinkConnection"])(props.element.getSource(), dropResult).catch((error) => {
                Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_0__["errorModal"])({
                    title: 'Error moving event source sink',
                    error: error.message,
                    showIcon: true,
                });
            });
        }
    },
    collect: (monitor) => ({
        dragging: monitor.isDragging(),
    }),
});
const eventSourceTargetSpec = {
    accept: [_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["NODE_DRAG_TYPE"], _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["EDGE_DRAG_TYPE"], _console_topology__WEBPACK_IMPORTED_MODULE_1__["CREATE_CONNECTOR_DROP_TYPE"]],
    canDrop: () => {
        return false;
    },
    collect: (monitor, props) => ({
        edgeDragging: nodesEdgeIsDragging(monitor, props),
    }),
};


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/nodes/EventSource.scss":
/*!********************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/nodes/EventSource.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/nodes/EventSource.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/nodes/EventSource.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _utils_get_knative_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/get-knative-icon */ "./packages/knative-plugin/src/utils/get-knative-icon.ts");
/* harmony import */ var _EventSource_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventSource.scss */ "./packages/knative-plugin/src/topology/components/nodes/EventSource.scss");
/* harmony import */ var _EventSource_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_EventSource_scss__WEBPACK_IMPORTED_MODULE_6__);







const EventSource = ({ element, selected, onSelect, onContextMenu, contextMenuOpen, dragNodeRef, dndDropRef, dragging, edgeDragging, }) => {
    const svgAnchorRef = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useSvgAnchor"])();
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const groupRefs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(dragNodeRef, dndDropRef, hoverRef);
    const [filtered] = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__["useSearchFilter"])(element.getLabel());
    const displayFilters = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__["useDisplayFilters"])();
    const showLabels = displayFilters.showLabels || hover;
    const { width, height } = element.getBounds();
    const size = Math.min(width, height);
    const { data } = element.getData();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-event-source', {
            'is-filtered': filtered,
            'is-dragging': dragging || edgeDragging,
            'is-selected': selected,
        }), onClick: onSelect, onContextMenu: onContextMenu, ref: groupRefs },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { className: "odc-event-source__bg", ref: svgAnchorRef, filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || dragging || contextMenuOpen
                ? _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__["NODE_SHADOW_FILTER_ID_HOVER"]
                : _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_4__["NODE_SHADOW_FILTER_ID"]), points: `${width / 2}, ${(height - size) / 2} ${width - (width - size) / 2},${height /
                2} ${width / 2},${height - (height - size) / 2} ${(width - size) / 2},${height / 2}` }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", { x: width * 0.25, y: height * 0.25, width: size * 0.5, height: size * 0.5, xlinkHref: Object(_utils_get_knative_icon__WEBPACK_IMPORTED_MODULE_5__["getKnativeEventSourceIcon"])(data.kind) }),
        showLabels && (data.kind || element.getLabel()) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "odc-base-node__label", x: width / 2, y: (height + size) / 2 + 20, paddingX: 8, paddingY: 4, kind: data.kind }, element.getLabel()))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(EventSource));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/components/nodes/RevisionNode.tsx":
/*!********************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/components/nodes/RevisionNode.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _anchors_RevisionTrafficTargetAnchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../anchors/RevisionTrafficTargetAnchor */ "./packages/knative-plugin/src/topology/components/anchors/RevisionTrafficTargetAnchor.ts");




const DECORATOR_RADIUS = 13;
const RevisionNode = (props) => {
    const hasDataUrl = !!props.element.getData().data.url;
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _anchors_RevisionTrafficTargetAnchor__WEBPACK_IMPORTED_MODULE_3__["default"](node, hasDataUrl ? DECORATOR_RADIUS : 0), [hasDataUrl]), _console_topology__WEBPACK_IMPORTED_MODULE_1__["AnchorEnd"].target, 'revision-traffic');
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["WorkloadNode"], Object.assign({}, props));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(RevisionNode));


/***/ }),

/***/ "./packages/knative-plugin/src/topology/layouts/layoutConstraints.ts":
/*!***************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/layouts/layoutConstraints.ts ***!
  \***************************************************************************/
/*! exports provided: layoutConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutConstraints", function() { return layoutConstraints; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./packages/knative-plugin/src/topology/const.ts");



const getNodeTimeStamp = (node) => {
    const data = node.element.getData();
    return new Date(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'resources.obj.metadata.creationTimestamp', 0));
};
// Sort nodes most recent to least recent
const nodeSorter = (node1, node2) => getNodeTimeStamp(node1) > getNodeTimeStamp(node2) ? -1 : 1;
const layoutConstraints = (nodes, groups, edges, options) => {
    const constraints = [];
    [...groups, ...nodes]
        .filter((g) => g.element.getType() === _const__WEBPACK_IMPORTED_MODULE_2__["TYPE_KNATIVE_SERVICE"])
        .forEach((g) => {
        const serviceConstraint = {
            type: 'alignment',
            axis: 'y',
            offsets: [],
        };
        // Sort revisions such that most recent is to the left
        const revisions = g instanceof _console_topology__WEBPACK_IMPORTED_MODULE_1__["ColaGroup"] && g.leaves.sort(nodeSorter);
        if (revisions) {
            for (let i = 0; i < revisions.length; i++) {
                serviceConstraint.offsets.push({ node: revisions[i].index, offset: 0 });
                if (i < revisions.length - 1) {
                    // Space out each revision horizontally
                    constraints.push({
                        axis: 'x',
                        left: revisions[i].index,
                        right: revisions[i + 1].index,
                        gap: revisions[i].width,
                        equality: true,
                    });
                }
            }
            if (serviceConstraint.offsets.length) {
                constraints.push(serviceConstraint);
            }
        }
        const eventSourceLinks = edges
            .filter((e) => e.element.getType() === _const__WEBPACK_IMPORTED_MODULE_2__["TYPE_EVENT_SOURCE_LINK"] &&
            (e.target.element === g.element || e.target.element.getParent() === g.element))
            .sort((l1, l2) => nodeSorter(l1.source, l2.source));
        if (eventSourceLinks.length) {
            const height = eventSourceLinks.reduce((current, nextLink) => {
                return current + nextLink.source.height;
            }, 0);
            const serviceNode = (revisions && lodash__WEBPACK_IMPORTED_MODULE_0__["last"](revisions)) || g;
            const serviceDistance = revisions
                ? serviceNode.radius + Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["getGroupPadding"])(g.element)
                : serviceNode.width / 2;
            const eventSourceConstraint = {
                type: 'alignment',
                axis: 'y',
                offsets: [{ node: eventSourceLinks[0].target.index, offset: 0 }],
            };
            let nextOffset = -height / 2;
            eventSourceLinks.forEach((link) => {
                // Evenly space out the event sources vertically
                eventSourceConstraint.offsets.push({
                    node: link.source.index,
                    offset: nextOffset + link.source.height / 2,
                });
                // Keep the event sources to the right
                constraints.push({
                    axis: 'x',
                    left: serviceNode.index,
                    right: link.source.index,
                    gap: serviceDistance + link.source.width / 2 + options.linkDistance,
                    equality: true,
                });
                nextOffset += link.source.height;
            });
            constraints.push(eventSourceConstraint);
        }
    });
    return constraints;
};


/***/ }),

/***/ "./packages/knative-plugin/src/utils/get-knative-icon.ts":
/*!***************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/get-knative-icon.ts ***!
  \***************************************************************/
/*! exports provided: getKnativeEventSourceIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeEventSourceIcon", function() { return getKnativeEventSourceIcon; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/logos/apiserversource.png */ "./packages/knative-plugin/src/imgs/logos/apiserversource.png");
/* harmony import */ var _imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/logos/camelsource.svg */ "./packages/knative-plugin/src/imgs/logos/camelsource.svg");
/* harmony import */ var _imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/logos/containersource.png */ "./packages/knative-plugin/src/imgs/logos/containersource.png");
/* harmony import */ var _imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/logos/cronjobsource.svg */ "./packages/knative-plugin/src/imgs/logos/cronjobsource.svg");
/* harmony import */ var _imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/logos/kafkasource.svg */ "./packages/knative-plugin/src/imgs/logos/kafkasource.svg");
/* harmony import */ var _imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/event-source.svg */ "./packages/knative-plugin/src/imgs/event-source.svg");
/* harmony import */ var _imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");








const getKnativeEventSourceIcon = (kind) => {
    switch (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["kindForReference"])(kind)) {
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceApiServerModel"].kind:
            return _imgs_logos_apiserversource_png__WEBPACK_IMPORTED_MODULE_1__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceCamelModel"].kind:
            return _imgs_logos_camelsource_svg__WEBPACK_IMPORTED_MODULE_2__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceContainerModel"].kind:
            return _imgs_logos_containersource_png__WEBPACK_IMPORTED_MODULE_3__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceCronJobModel"].kind:
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourcePingModel"].kind:
            return _imgs_logos_cronjobsource_svg__WEBPACK_IMPORTED_MODULE_4__;
        case _models__WEBPACK_IMPORTED_MODULE_7__["EventSourceKafkaModel"].kind:
            return _imgs_logos_kafkasource_svg__WEBPACK_IMPORTED_MODULE_5__;
        default:
            return _imgs_event_source_svg__WEBPACK_IMPORTED_MODULE_6__;
    }
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/LabelsList/LabelRow/label-row.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/LabelsList/LabelRow/label-row.tsx ***!
  \***********************************************************************************/
/*! exports provided: LabelRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelRow", function() { return LabelRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");



const LabelRow = ({ label, onChange, onDelete, }) => {
    const { id, key, value } = label;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: `label-${id}-key-input`, className: "kv-label__key", placeholder: "key", isRequired: true, type: "text", value: key, onChange: (newKey) => onChange(Object.assign(Object.assign({}, label), { key: newKey })), "aria-label": "selector key" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 5 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: `label-${id}-value-input`, className: "kv-label__value", placeholder: "value", isRequired: true, type: "text", value: value, onChange: (newValue) => onChange(Object.assign(Object.assign({}, label), { value: newValue })), "aria-label": "selector value" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 1 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `label-${id}-delete-btn`, onClick: () => onDelete(id), variant: "plain" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["MinusCircleIcon"], null)))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/LabelsList/consts.ts":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/LabelsList/consts.ts ***!
  \**********************************************************************/
/*! exports provided: ADD_LABEL, EMPTY_ADD_LABEL, LABEL_KEY, LABEL_TAINT_KEY, LABEL_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LABEL", function() { return ADD_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ADD_LABEL", function() { return EMPTY_ADD_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_KEY", function() { return LABEL_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_TAINT_KEY", function() { return LABEL_TAINT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_VALUE", function() { return LABEL_VALUE; });
const ADD_LABEL = 'Add Label';
const EMPTY_ADD_LABEL = 'Add Label to specify qualifying nodes';
const LABEL_KEY = 'Key';
const LABEL_TAINT_KEY = 'Taint Key';
const LABEL_VALUE = 'Value';


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/LabelsList/labels-list.scss":
/*!*****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/LabelsList/labels-list.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/LabelsList/labels-list.tsx":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/LabelsList/labels-list.tsx ***!
  \****************************************************************************/
/*! exports provided: LabelsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsList", function() { return LabelsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consts */ "./packages/kubevirt-plugin/src/components/LabelsList/consts.ts");
/* harmony import */ var _labels_list_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labels-list.scss */ "./packages/kubevirt-plugin/src/components/LabelsList/labels-list.scss");
/* harmony import */ var _labels_list_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_labels_list_scss__WEBPACK_IMPORTED_MODULE_5__);






const LabelsList = ({ kind = '', isEmpty, onLabelAdd, children, addRowText = _consts__WEBPACK_IMPORTED_MODULE_4__["ADD_LABEL"], emptyStateAddRowText = _consts__WEBPACK_IMPORTED_MODULE_4__["EMPTY_ADD_LABEL"], }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], { className: "kv-labels-list__grid" }, children),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Split"], { className: "kv-labels-list__buttons" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { className: "pf-m-link--align-left", id: "vm-labels-list-add-btn", variant: "link", onClick: () => onLabelAdd(), icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], null) }, isEmpty ? emptyStateAddRowText : addRowText)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], { isFilled: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null, kind && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { additionalClassName: "kv-labels-list__link", text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, `Explore ${kind} list`), href: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourcePath"])(kind) }))))));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/add-device-button.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/add-device-button.tsx ***!
  \**********************************************************************************/
/*! exports provided: AddDeviceButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceButton", function() { return AddDeviceButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



const AddDeviceButton = ({ id, message, disabledMessage, isDisabled, onClick, }) => isDisabled ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].p }, disabledMessage)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { className: "pf-m-link--align-left", id: id, variant: "link", onClick: onClick, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], null) }, message));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/add-device-form-select.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/add-device-form-select.tsx ***!
  \***************************************************************************************/
/*! exports provided: AddDeviceFormSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceFormSelect", function() { return AddDeviceFormSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx");





const AddDeviceFormSelect = ({ id, options, label, onAdd, onDelete, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { value: "", id: id, onChange: onAdd, className: "kubevirt-boot-order__add-device-select" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { label: label, value: "" }),
        lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](options, ['type', 'value.name']).map((option) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { label: Object(_constants__WEBPACK_IMPORTED_MODULE_4__["deviceLabel"])(option), value: Object(_constants__WEBPACK_IMPORTED_MODULE_4__["deviceKey"])(option), key: Object(_constants__WEBPACK_IMPORTED_MODULE_4__["deviceKey"])(option) })))),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: onDelete, variant: "link", className: "kubevirt-boot-order__add-device-delete-btn" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], null))));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/add-device.tsx":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/add-device.tsx ***!
  \***************************************************************************/
/*! exports provided: AddDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevice", function() { return AddDevice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _add_device_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-device-button */ "./packages/kubevirt-plugin/src/components/boot-order/add-device-button.tsx");
/* harmony import */ var _add_device_form_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-device-form-select */ "./packages/kubevirt-plugin/src/components/boot-order/add-device-form-select.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx");




const AddDevice = ({ devices, onAdd, isEditMode, setEditMode }) => {
    const options = devices.filter((device) => !device.value.bootOrder);
    const canAddItem = options.length > 0;
    const selectID = 'add-device-select';
    const buttontID = 'add-device-btm';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kubevirt-boot-order__add-device" }, isEditMode && canAddItem ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_add_device_form_select__WEBPACK_IMPORTED_MODULE_2__["AddDeviceFormSelect"], { id: selectID, options: options, label: _constants__WEBPACK_IMPORTED_MODULE_3__["addItemSelectLabel"], onAdd: onAdd, onDelete: () => setEditMode(false) })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_add_device_button__WEBPACK_IMPORTED_MODULE_1__["AddDeviceButton"], { id: buttontID, message: _constants__WEBPACK_IMPORTED_MODULE_3__["addItemMessage"], disabledMessage: _constants__WEBPACK_IMPORTED_MODULE_3__["addItemDisabledMessage"], isDisabled: !canAddItem, onClick: () => setEditMode(true) }))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/boot-order-empty.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/boot-order-empty.tsx ***!
  \*********************************************************************************/
/*! exports provided: BootOrderEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootOrderEmpty", function() { return BootOrderEmpty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");


// Display and empty with a Call to add new source if no sources are defined.
const BootOrderEmpty = ({ title, message, addItemMessage, addItemIsDisabled, addItemDisabledMessage, onClick, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateVariant"].full },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { headingLevel: "h5", size: "lg" }, title),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, message),
    !addItemIsDisabled ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: "secondary", onClick: onClick, className: "kubevirt-boot-order__boot-order-empty-btn" }, addItemMessage)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "info", title: addItemDisabledMessage }))));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/boot-order.scss":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/boot-order.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/boot-order.tsx":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/boot-order.tsx ***!
  \***************************************************************************/
/*! exports provided: BootOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootOrder", function() { return BootOrder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _dnd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dnd-list */ "./packages/kubevirt-plugin/src/components/dnd-list/index.ts");
/* harmony import */ var _boot_order_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boot-order-empty */ "./packages/kubevirt-plugin/src/components/boot-order/boot-order-empty.tsx");
/* harmony import */ var _add_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-device */ "./packages/kubevirt-plugin/src/components/boot-order/add-device.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx");
/* harmony import */ var _boot_order_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boot-order.scss */ "./packages/kubevirt-plugin/src/components/boot-order/boot-order.scss");
/* harmony import */ var _boot_order_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_boot_order_scss__WEBPACK_IMPORTED_MODULE_7__);








const BootOrder = ({ devices, setDevices }) => {
    const sources = lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"](devices.filter((device) => device.value.bootOrder), 'value.bootOrder');
    const options = devices.filter((device) => !device.value.bootOrder);
    const [isEditMode, setEditMode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    // Relax bootOrder and use setDevice to update the parent componenet.
    const updateDevices = (newDevices) => {
        lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](newDevices, (device) => device.value.bootOrder).forEach((source, i) => {
            source.value.bootOrder = i + 1;
        });
        setDevices(newDevices);
        setEditMode(false);
    };
    // Remove a bootOrder from a device by index.
    const onDelete = (index) => {
        const newDevices = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](devices);
        const key = Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceKey"])(sources[index]);
        delete newDevices.find((device) => Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceKey"])(device) === key).value.bootOrder;
        updateDevices(newDevices);
    };
    // Move a source from one index to another.
    const onMove = (index, toIndex) => {
        const unMovedSources = [...sources.slice(0, index), ...sources.slice(index + 1)];
        // Create an ordered copy of the sources.
        const newSources = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"]([
            ...unMovedSources.slice(0, toIndex),
            sources[index],
            ...unMovedSources.slice(toIndex),
        ]);
        updateDevices([...newSources, ...options]);
    };
    // Add a bootOrder to a device by key, item key is "<type>->name>".
    const onAdd = (key) => {
        const newOptions = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](options);
        newOptions.find((option) => Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceKey"])(option) === key).value.bootOrder = sources.length + 1;
        updateDevices([...sources, ...newOptions]);
    };
    const showEmpty = sources.length === 0 && !isEditMode;
    const dataListID = 'VMBootOrderList';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, showEmpty ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_boot_order_empty__WEBPACK_IMPORTED_MODULE_4__["BootOrderEmpty"], { title: _constants__WEBPACK_IMPORTED_MODULE_6__["bootOrderEmptyTitle"], message: _constants__WEBPACK_IMPORTED_MODULE_6__["bootOrderEmptyMessage"], addItemMessage: _constants__WEBPACK_IMPORTED_MODULE_6__["addItemMessage"], addItemDisabledMessage: _constants__WEBPACK_IMPORTED_MODULE_6__["addItemDisabledMessage"], addItemIsDisabled: options.length === 0, onClick: () => {
            setEditMode(true);
        } })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dnd_list__WEBPACK_IMPORTED_MODULE_3__["DNDDataList"], { id: dataListID, "aria-label": _constants__WEBPACK_IMPORTED_MODULE_6__["bootOrderAriaLabel"] }, sources.map((source, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dnd_list__WEBPACK_IMPORTED_MODULE_3__["DNDDataListItem"], { index: index, onDelete: onDelete, onMove: onMove, "aria-labelledby": `device-${Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceKey"])(source)}`, key: `device-${Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceKey"])(source)}`, className: "kubevirt-boot-order__data-list-item" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { id: `device-${Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceKey"])(source)}`, component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p }, Object(_constants__WEBPACK_IMPORTED_MODULE_6__["deviceLabel"])(source)))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_add_device__WEBPACK_IMPORTED_MODULE_5__["AddDevice"], { devices: devices, onAdd: onAdd, isEditMode: isEditMode, setEditMode: setEditMode })))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/constants.tsx ***!
  \**************************************************************************/
/*! exports provided: addItemMessage, addItemDisabledMessage, addItemSelectLabel, bootOrderEmptyTitle, bootOrderEmptyMessage, bootOrderAriaLabel, deviceKey, deviceLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemMessage", function() { return addItemMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemDisabledMessage", function() { return addItemDisabledMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemSelectLabel", function() { return addItemSelectLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootOrderEmptyTitle", function() { return bootOrderEmptyTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootOrderEmptyMessage", function() { return bootOrderEmptyMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootOrderAriaLabel", function() { return bootOrderAriaLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceKey", function() { return deviceKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceLabel", function() { return deviceLabel; });
const addItemMessage = 'Add source';
const addItemDisabledMessage = 'All sources selected';
const addItemSelectLabel = 'Please select a boot source';
const bootOrderEmptyTitle = 'No resource selected';
const bootOrderEmptyMessage = 'VM will attempt to boot from disks by order of apearance in YAML file';
const bootOrderAriaLabel = 'VM Boot Order List';
const deviceKey = (device) => `${device.type}-${device.value.name}`;
const deviceLabel = (device) => `${device.value.name} (${device.typeLabel})`;


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/index.tsx":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/index.tsx ***!
  \**********************************************************************/
/*! exports provided: deviceKey, deviceLabel, BootOrder, BootOrderSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviceKey", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["deviceKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviceLabel", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["deviceLabel"]; });

/* harmony import */ var _boot_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boot-order */ "./packages/kubevirt-plugin/src/components/boot-order/boot-order.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootOrder", function() { return _boot_order__WEBPACK_IMPORTED_MODULE_1__["BootOrder"]; });

/* harmony import */ var _summary_boot_order_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/boot-order-summary */ "./packages/kubevirt-plugin/src/components/boot-order/summary/boot-order-summary.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootOrderSummary", function() { return _summary_boot_order_summary__WEBPACK_IMPORTED_MODULE_2__["BootOrderSummary"]; });






/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/summary/boot-order-empty-summary.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/summary/boot-order-empty-summary.tsx ***!
  \*************************************************************************************************/
/*! exports provided: BootOrderEmptySummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootOrderEmptySummary", function() { return BootOrderEmptySummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx");



const BootOrderEmptySummary = ({ devices }) => {
    const [isExpanded, setIsExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const options = devices.filter((device) => !device.value.bootOrder);
    const onToggle = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => setIsExpanded(!isExpanded), [isExpanded]);
    // Note(Yaacov):
    // className='text-secondary' is a hack to fix TextVariants being overriden.
    // Using <ol> because '@patternfly/react-core' <List> currently miss isOrder parameter.
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].p, className: "kubevirt-boot-order-summary__empty-text" }, _constants__WEBPACK_IMPORTED_MODULE_2__["bootOrderEmptyTitle"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].small, className: "text-secondary" }, _constants__WEBPACK_IMPORTED_MODULE_2__["bootOrderEmptyMessage"]),
        options.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Expandable"], { toggleText: isExpanded ? 'Hide default boot disks' : 'Show default boot disks', onToggle: onToggle, isExpanded: isExpanded, className: "kubevirt-boot-order-summary__expandable" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", null, options.map((option) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: Object(_constants__WEBPACK_IMPORTED_MODULE_2__["deviceKey"])(option) }, Object(_constants__WEBPACK_IMPORTED_MODULE_2__["deviceLabel"])(option)))))))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/boot-order/summary/boot-order-summary.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/boot-order/summary/boot-order-summary.tsx ***!
  \*******************************************************************************************/
/*! exports provided: BootOrderSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootOrderSummary", function() { return BootOrderSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./packages/kubevirt-plugin/src/components/boot-order/constants.tsx");
/* harmony import */ var _boot_order_empty_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boot-order-empty-summary */ "./packages/kubevirt-plugin/src/components/boot-order/summary/boot-order-empty-summary.tsx");




// NOTE(yaacov): using <ol> because '@patternfly/react-core' <List> currently miss isOrder parameter.
const BootOrderSummary = ({ devices }) => {
    const sources = lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"](devices.filter((device) => device.value.bootOrder), 'value.bootOrder');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, sources.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_boot_order_empty_summary__WEBPACK_IMPORTED_MODULE_3__["BootOrderEmptySummary"], { devices: devices })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", null, sources.map((source) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: Object(_constants__WEBPACK_IMPORTED_MODULE_2__["deviceKey"])(source) }, Object(_constants__WEBPACK_IMPORTED_MODULE_2__["deviceLabel"])(source))))))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/dnd-list/dnd-data-list-item.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/dnd-list/dnd-data-list-item.tsx ***!
  \*********************************************************************************/
/*! exports provided: DNDDataListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNDDataListItem", function() { return DNDDataListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
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




const DNDDataListItemTypeName = 'dnd-row';
const DNDDataListCellMoveStyle = { cursor: 'move' };
const DNDDataListCellSDeleteStyle = { cursor: 'pointer' };
const DNDDataListItem = (_a) => {
    var { index, onDelete, onMove, 'aria-labelledby': ariaLabelledby, children } = _a, props = __rest(_a, ["index", "onDelete", "onMove", 'aria-labelledby', "children"]);
    // Create a drag item copy.
    const [, drag, preview] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])({
        item: { type: DNDDataListItemTypeName, id: `${DNDDataListItemTypeName}-${index}`, index },
    });
    // Move item when hover over onoter item.
    const [{ opacity }, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"])({
        accept: DNDDataListItemTypeName,
        collect: (monitor) => ({
            opacity: monitor.isOver() ? 0 : 1,
        }),
        hover(item) {
            if (item.index === index) {
                return;
            }
            onMove(item.index, index);
            item.index = index;
        },
    });
    // Action when item is focused and key is pressed:
    // ArrowUp:   move item one order index down.
    // ArrowDown: move item one order index up.
    // '-':       delete an item.
    const onKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (index > 0)
                    onMove(index, index - 1);
                break;
            case 'ArrowDown':
                onMove(index, index + 1);
                break;
            case '-':
                onDelete(index);
                break;
            default:
            // We only accept up, down and minus.
        }
    };
    const cellKey = (i) => `item-${i}`;
    const dataListCell = [
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DataListCell"], { isFilled: false, key: cellKey('drag') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: drag, style: DNDDataListCellMoveStyle },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["PficonDragdropIcon"], null))),
        ...react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, (cell, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DataListCell"], { width: 1, key: cellKey(i) }, cell))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DataListCell"], { isFilled: false, alignRight: true, key: cellKey('delete'), style: DNDDataListCellSDeleteStyle, onClick: () => onDelete(index) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["MinusCircleIcon"], null)),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: (node) => preview(drop(node)), style: { opacity } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DataListItem"], Object.assign({ tabIndex: 0, "aria-labelledby": ariaLabelledby, onKeyDown: onKeyDown }, props),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DataListItemRow"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DataListItemCells"], { dataListCells: dataListCell })))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/dnd-list/dnd-data-list.tsx":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/dnd-list/dnd-data-list.tsx ***!
  \****************************************************************************/
/*! exports provided: DNDDataList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNDDataList", function() { return DNDDataList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
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




const DNDDataList = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_dnd__WEBPACK_IMPORTED_MODULE_2__["DndProvider"], { backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DataList"], Object.assign({}, props), children)));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/dnd-list/index.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/dnd-list/index.ts ***!
  \*******************************************************************/
/*! exports provided: DNDDataList, DNDDataListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dnd_data_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dnd-data-list */ "./packages/kubevirt-plugin/src/components/dnd-list/dnd-data-list.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DNDDataList", function() { return _dnd_data_list__WEBPACK_IMPORTED_MODULE_0__["DNDDataList"]; });

/* harmony import */ var _dnd_data_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnd-data-list-item */ "./packages/kubevirt-plugin/src/components/dnd-list/dnd-data-list-item.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DNDDataListItem", function() { return _dnd_data_list_item__WEBPACK_IMPORTED_MODULE_1__["DNDDataListItem"]; });





/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/edit-button.tsx":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/edit-button.tsx ***!
  \*****************************************************************/
/*! exports provided: EditButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditButton", function() { return EditButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EditButton = (props) => {
    const { canEdit, onClick, id, children } = props;
    if (canEdit) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: id, type: "button", className: "btn btn-link co-modal-btn-link co-modal-btn-link--left", onClick: onClick }, children));
    }
    return null;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/errors/errors.scss":
/*!********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/errors/errors.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/errors/errors.tsx":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/errors/errors.tsx ***!
  \*******************************************************************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.scss */ "./packages/kubevirt-plugin/src/components/errors/errors.scss");
/* harmony import */ var _errors_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_errors_scss__WEBPACK_IMPORTED_MODULE_3__);




const Errors = ({ errors, endMargin }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, errors &&
        errors.map(({ message, key, title, variant }, idx, arr) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { isInline: true, key: key || idx, variant: variant || _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["AlertVariant"].danger, title: title, className: classnames__WEBPACK_IMPORTED_MODULE_2__({
                'kubevirt-errors__error-group--item': idx !== arr.length - 1,
                'kubevirt-errors__error-group--end ': endMargin && idx === arr.length - 1,
            }) }, message)))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/form-row.scss":
/*!********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/form-row.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/form-row.tsx":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/form-row.tsx ***!
  \*******************************************************************/
/*! exports provided: FormRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRow", function() { return FormRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _form_row_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-row.scss */ "./packages/kubevirt-plugin/src/components/form/form-row.scss");
/* harmony import */ var _form_row_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_form_row_scss__WEBPACK_IMPORTED_MODULE_5__);






const FormRow = ({ fieldId, title, help, isHidden, isRequired, isLoading, validationMessage, validationType, validation, children, className, }) => {
    if (isHidden) {
        return null;
    }
    const type = (validation && validation.type) || validationType;
    const message = (validation && validation.message) || validationMessage;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { label: title, isRequired: isRequired, fieldId: fieldId, isValid: type !== _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Error, helperTextInvalid: type === _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Error ? message : undefined, helperText: type === _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Info || type === _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Warn ? message : undefined, className: className },
        help && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kubevirt-form-row__icon-status-container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["PopoverStatus"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["HelpIcon"], { className: "kubevirt-form-row__help-icon--hidden" }), activeIcon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["HelpIcon"], null), title: `${fieldId} help`, iconOnly: true, hideHeader: true }, help))),
        isLoading && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kubevirt-form-row__loading-container" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null))),
        children));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/form-select-placeholder-option.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/form-select-placeholder-option.tsx ***!
  \*****************************************************************************************/
/*! exports provided: asFormSelectValue, FormSelectPlaceholderOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asFormSelectValue", function() { return asFormSelectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectPlaceholderOption", function() { return FormSelectPlaceholderOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");


const asFormSelectValue = (value) => value || '';
// renders only when props change (shallow compare)
const FormSelectPlaceholderOption = ({ placeholder, isDisabled, }) => {
    return (placeholder && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormSelectOption"], { isDisabled: isDisabled, key: "defaultValue", value: "", label: placeholder })));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/integer/integer.scss":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/integer/integer.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/integer/integer.tsx":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/integer/integer.tsx ***!
  \**************************************************************************/
/*! exports provided: Integer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integer", function() { return Integer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./packages/kubevirt-plugin/src/utils/utils.ts");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/keys */ "./packages/kubevirt-plugin/src/constants/keys.ts");
/* harmony import */ var _integer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integer.scss */ "./packages/kubevirt-plugin/src/components/form/integer/integer.scss");
/* harmony import */ var _integer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_integer_scss__WEBPACK_IMPORTED_MODULE_5__);
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






const NON_NEGATIVE_INTEGER_KEYS = [
    ..._constants_keys__WEBPACK_IMPORTED_MODULE_4__["INPUT_NAVIGATION_KEYS"],
    ...Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getSequence"])(_constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"][0], _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"][9]),
    ...Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getSequence"])(_constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"].NUMPAD[0], _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"].NUMPAD[9]),
];
const INTEGER_KEYS = [
    ...NON_NEGATIVE_INTEGER_KEYS,
    _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"].MINUS,
    _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"].HYPHEN_MINUS,
    _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"].NUMPAD.SUBTRACT,
];
const POSITIVE_INT_REGEX = /^[1-9]\d*$/;
const NON_NEGATIVE_INT_REGEX = /^(0|[1-9]\d*)$/;
const INT_REGEX = /^(-?0|-?[1-9]\d*)$/;
const PRECEEDING_ZEROS_POSITIVE_INT_REGEX = /^0*([1-9]\d*)$/;
const PRECEEDING_ZEROS_INT_REGEX = /^(-?)0*([1-9]\d*)$/;
const fixPrecedingZerosPositiveInt = (value) => {
    const match = PRECEEDING_ZEROS_POSITIVE_INT_REGEX.exec(value);
    return match && match.length === 2 ? match[1] : '';
};
const fixPrecedingZerosNonNegativeInt = (value) => {
    const match = PRECEEDING_ZEROS_POSITIVE_INT_REGEX.exec(value);
    return match && match.length === 2 ? match[1] : '0';
};
const fixInt = (value, oldValue, keyCode) => {
    if (value.length === 0 && Object(_constants_keys__WEBPACK_IMPORTED_MODULE_4__["isMinus"])(keyCode)) {
        if (oldValue) {
            return oldValue < 0 || oldValue === '-0' ? oldValue : `-${oldValue}`;
        }
        return '-0';
    }
    const match = PRECEEDING_ZEROS_INT_REGEX.exec(value);
    if (match && match.length === 3) {
        if (match[1]) {
            return `${match[1]}${match[2]}`;
        }
        return match[2];
    }
    return '0';
};
const isInputValid = (allowedKeys, keyCode, targetValue, additionalValidation) => {
    if (allowedKeys.includes(keyCode)) {
        return additionalValidation ? additionalValidation(keyCode, targetValue) : true;
    }
    return false;
};
const additionalPositiveValidation = (keyCode, targetValue) => !(targetValue === '' && (keyCode === _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"][0] || keyCode === _constants_keys__WEBPACK_IMPORTED_MODULE_4__["KEY_CODES"].NUMPAD[0]));
const Integer = (_a) => {
    var { id, value, isDisabled, defaultValue, onChange, isPositive, isNonNegative, className, isFullWidth, isValid } = _a, restProps = __rest(_a, ["id", "value", "isDisabled", "defaultValue", "onChange", "isPositive", "isNonNegative", "className", "isFullWidth", "isValid"]);
    let allowedKeys;
    let validRegex;
    let fixAfterValue;
    let min;
    let additionalValidation;
    if (isPositive) {
        allowedKeys = NON_NEGATIVE_INTEGER_KEYS;
        validRegex = POSITIVE_INT_REGEX;
        fixAfterValue = fixPrecedingZerosPositiveInt;
        min = 1;
        additionalValidation = additionalPositiveValidation;
    }
    else if (isNonNegative) {
        allowedKeys = NON_NEGATIVE_INTEGER_KEYS;
        validRegex = NON_NEGATIVE_INT_REGEX;
        fixAfterValue = fixPrecedingZerosNonNegativeInt;
        min = 0;
    }
    else {
        allowedKeys = INTEGER_KEYS;
        validRegex = INT_REGEX;
        fixAfterValue = fixInt;
    }
    const onKeydown = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((e) => {
        const { keyCode, target, ctrlKey, metaKey } = e;
        const ctrlDown = ctrlKey || metaKey; // Mac support
        // check for ctrl+c, a, v and x
        if (ctrlDown && _constants_keys__WEBPACK_IMPORTED_MODULE_4__["INPUT_CTRL_COMBINATIONS_KEYS"].includes(keyCode)) {
            return true;
        }
        if (!isInputValid(allowedKeys, keyCode, target.value, additionalValidation)) {
            e.preventDefault();
            return false;
        }
        const oldValue = target.value;
        window.setTimeout(() => {
            if (!validRegex.test(target.value)) {
                const v = fixAfterValue(target.value, oldValue, keyCode);
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["setNativeValue"])(target, v);
                target.dispatchEvent(new Event('input', {
                    bubbles: true,
                    cancelable: true,
                }));
            }
        }, 0);
        return true;
    }, [additionalValidation, allowedKeys, fixAfterValue, validRegex]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], Object.assign({}, restProps, { id: id, type: "number", onKeyDown: onKeydown, min: min, value: value, defaultValue: defaultValue, onChange: onChange, className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, {
            'kubevirt-integer-component': isFullWidth,
        }), isDisabled: isDisabled })));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/k8s-resource-select-row.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/k8s-resource-select-row.tsx ***!
  \**********************************************************************************/
/*! exports provided: K8sResourceSelectRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K8sResourceSelectRow", function() { return K8sResourceSelectRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sort */ "./packages/kubevirt-plugin/src/utils/sort.ts");
/* harmony import */ var _form_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-row */ "./packages/kubevirt-plugin/src/components/form/form-row.tsx");
/* harmony import */ var _form_select_placeholder_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-select-placeholder-option */ "./packages/kubevirt-plugin/src/components/form/form-select-placeholder-option.tsx");







const K8sResourceSelectRow = ({ id, isDisabled, isRequired, isPlaceholderDisabled, hasPlaceholder, data, onChange, name, model, title, validation, filter, }) => {
    const isLoading = !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isLoaded"])(data);
    const loadError = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getLoadError"])(data, model);
    let loadedData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getLoadedData"])(data, []);
    if (filter) {
        loadedData = loadedData.filter(filter);
    }
    let nameValue;
    let missingError;
    if (name && !isLoading && !loadError && !loadedData.some((entity) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(entity) === name)) {
        missingError = `Selected ${name} is not available`;
    }
    else {
        nameValue = name;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["FormRow"], { title: title || model.label, fieldId: id, isLoading: isLoading, validationMessage: loadError || missingError || (validation && validation.message), validationType: loadError || missingError ? _console_shared__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorType"].Error : validation && validation.type, isRequired: isRequired },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormSelect"], { onChange: onChange, value: Object(_form_select_placeholder_option__WEBPACK_IMPORTED_MODULE_6__["asFormSelectValue"])(nameValue), id: id, isDisabled: isDisabled || isLoading || loadError },
            hasPlaceholder && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_select_placeholder_option__WEBPACK_IMPORTED_MODULE_6__["FormSelectPlaceholderOption"], { isDisabled: isPlaceholderDisabled, placeholder: loadedData.length === 0
                    ? `--- ${model.labelPlural} not available ---`
                    : `--- Select ${model.label} ---` })),
            Object(_utils_sort__WEBPACK_IMPORTED_MODULE_4__["ignoreCaseSort"])(loadedData, ['metadata', 'name']).map((entity) => {
                const selectName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(entity);
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormSelectOption"], { key: selectName, value: selectName, label: selectName });
            }))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/size-unit-form-row.scss":
/*!******************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/size-unit-form-row.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/size-unit-form-row.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/size-unit-form-row.tsx ***!
  \*****************************************************************************/
/*! exports provided: SizeUnitFormRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeUnitFormRow", function() { return SizeUnitFormRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/types */ "./packages/kubevirt-plugin/src/utils/types.ts");
/* harmony import */ var _utils_validations_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validations/common */ "./packages/kubevirt-plugin/src/utils/validations/common.ts");
/* harmony import */ var _form_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-row */ "./packages/kubevirt-plugin/src/components/form/form-row.tsx");
/* harmony import */ var _integer_integer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integer/integer */ "./packages/kubevirt-plugin/src/components/form/integer/integer.tsx");
/* harmony import */ var _size_unit_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size-unit-utils */ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx");
/* harmony import */ var _size_unit_form_row_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./size-unit-form-row.scss */ "./packages/kubevirt-plugin/src/components/form/size-unit-form-row.scss");
/* harmony import */ var _size_unit_form_row_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_size_unit_form_row_scss__WEBPACK_IMPORTED_MODULE_8__);









const SizeUnitFormRow = ({ title = 'Size', size, unit, units, validation, id, isRequired, isDisabled, onSizeChanged = () => undefined, onUnitChanged = () => undefined, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["FormRow"], { key: "size", title: title, fieldId: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["prefixedID"])(id, 'size'), isRequired: isRequired, validation: validation },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Split"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], { isFilled: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_integer_integer__WEBPACK_IMPORTED_MODULE_6__["Integer"], { isFullWidth: true, isValid: !Object(_utils_validations_common__WEBPACK_IMPORTED_MODULE_4__["isValidationError"])(validation), isDisabled: isDisabled, id: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["prefixedID"])(id, 'size'), value: size, isPositive: true, onChange: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((v) => onSizeChanged(v), [onSizeChanged]), "aria-label": `${title} size` })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["SplitItem"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormSelect"], { className: "kubevirt-size-unit-form-row__unit", onChange: react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((u) => onUnitChanged(u), [onUnitChanged]), value: unit, id: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["prefixedID"])(id, 'unit'), isDisabled: isDisabled, "aria-label": `${title} unit` }, (units || Object(_utils_types__WEBPACK_IMPORTED_MODULE_3__["getStringEnumValues"])(_size_unit_utils__WEBPACK_IMPORTED_MODULE_7__["BinaryUnit"])).map((u) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormSelectOption"], { key: u, value: u, label: Object(_size_unit_utils__WEBPACK_IMPORTED_MODULE_7__["toIECUnit"])(u) }))))))));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx ***!
  \**************************************************************************/
/*! exports provided: BinaryUnit, getReasonableUnits, stringValueUnitSplit, convertToHighestUnit, convertToBytes, convertToHighestUnitFromUnknown, toIECUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryUnit", function() { return BinaryUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReasonableUnits", function() { return getReasonableUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringValueUnitSplit", function() { return stringValueUnitSplit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToHighestUnit", function() { return convertToHighestUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToBytes", function() { return convertToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToHighestUnitFromUnknown", function() { return convertToHighestUnitFromUnknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIECUnit", function() { return toIECUnit; });
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/types */ "./packages/kubevirt-plugin/src/utils/types.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");



var BinaryUnit;
(function (BinaryUnit) {
    BinaryUnit["B"] = "B";
    BinaryUnit["Ki"] = "Ki";
    BinaryUnit["Mi"] = "Mi";
    BinaryUnit["Gi"] = "Gi";
    BinaryUnit["Ti"] = "Ti";
})(BinaryUnit || (BinaryUnit = {}));
const getReasonableUnits = (originalUnit) => {
    const result = [BinaryUnit.Mi, BinaryUnit.Gi, BinaryUnit.Ti];
    if (originalUnit === BinaryUnit.B) {
        result.unshift(BinaryUnit.B, BinaryUnit.Ki);
    }
    else if (originalUnit === BinaryUnit.Ki) {
        result.unshift(BinaryUnit.Ki);
    }
    return result;
};
const stringValueUnitSplit = (combinedVal) => {
    const index = combinedVal.search(/([a-zA-Z]+)/g);
    let value;
    let unit;
    if (index === -1) {
        value = combinedVal;
    }
    else {
        value = combinedVal.slice(0, index);
        unit = combinedVal.slice(index);
    }
    return [value, unit];
};
const convertToHighestUnit = (value, unit) => {
    const units = Object(_utils_types__WEBPACK_IMPORTED_MODULE_1__["getStringEnumValues"])(BinaryUnit);
    const sliceIndex = units.indexOf(unit);
    const slicedUnits = sliceIndex === -1 ? units : units.slice(sliceIndex);
    let nextValue = value;
    let nextUnit = slicedUnits.shift();
    while (nextValue !== 0 && nextValue % 1024 === 0 && slicedUnits.length > 0) {
        nextValue /= 1024;
        nextUnit = slicedUnits.shift();
    }
    return { value: nextValue, unit: nextUnit, str: `${nextValue}${nextUnit}` };
};
const convertToBytes = (value) => {
    if (!value || BinaryUnit[value]) {
        return null;
    }
    const result = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(value);
    if (!result && value.match(/^[0-9.]+B$/)) {
        const [v] = stringValueUnitSplit(value);
        return v;
    }
    return result;
};
const convertToHighestUnitFromUnknown = (value) => {
    const result = convertToBytes(value);
    return result && convertToHighestUnit(result, BinaryUnit.B);
};
const toIECUnit = (unit) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["assureEndsWith"])(unit, 'B');


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/boot-order-modal/boot-order-modal.scss":
/*!***********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/boot-order-modal/boot-order-modal.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/boot-order-modal/boot-order-modal.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/boot-order-modal/boot-order-modal.tsx ***!
  \**********************************************************************************************/
/*! exports provided: BootOrderModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootOrderModal", function() { return BootOrderModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _k8s_patches_vm_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../k8s/patches/vm-template */ "./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts");
/* harmony import */ var _boot_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../boot-order */ "./packages/kubevirt-plugin/src/components/boot-order/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _boot_order_modal_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./boot-order-modal.scss */ "./packages/kubevirt-plugin/src/components/modals/boot-order-modal/boot-order-modal.scss");
/* harmony import */ var _boot_order_modal_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_boot_order_modal_scss__WEBPACK_IMPORTED_MODULE_12__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const modalTitle = 'Virtual machine boot order';
const BootOrderModalComponent = ({ vmLikeEntity, isOpen, setOpen, title = modalTitle, handlePromise, inProgress, errorMessage, }) => {
    const [devices, setDevices] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getBootableDevices"])(vmLikeEntity));
    const [initialDeviceList, setInitialDeviceList] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getBootableDevices"])(vmLikeEntity));
    const [showUpdatedAlert, setUpdatedAlert] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [showPatchError, setPatchError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onReload = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        const updatedDevices = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getBootableDevices"])(vmLikeEntity);
        setInitialDeviceList(updatedDevices);
        setDevices(updatedDevices);
        setUpdatedAlert(false);
        setPatchError(false);
    }, [vmLikeEntity]); // eslint-disable-line react-hooks/exhaustive-deps
    // Inform user on vmLikeEntity.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!isOpen) {
            return;
        }
        // Compare only bootOrder from initialDeviceList to current device list.
        const devicesMap = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["createBasicLookup"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getBootableDevices"])(vmLikeEntity), _boot_order__WEBPACK_IMPORTED_MODULE_9__["deviceKey"]);
        const updated = initialDeviceList.length &&
            initialDeviceList.some((d) => {
                // Find the initial device in the updated list.
                const device = devicesMap[Object(_boot_order__WEBPACK_IMPORTED_MODULE_9__["deviceKey"])(d)];
                // If a device bootOrder changed, or it was deleted, set alert.
                return !device || device.value.bootOrder !== d.value.bootOrder;
            });
        setUpdatedAlert(updated);
    }, [vmLikeEntity]); // eslint-disable-line react-hooks/exhaustive-deps
    // Re-set device list on isOpen change to true.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (isOpen) {
            onReload();
        }
    }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps
    // Send new bootOrder to k8s.
    const onSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        // Copy only bootOrder from devices to current device list.
        const currentDevices = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getDevices"])(vmLikeEntity));
        const devicesMap = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["createBasicLookup"])(currentDevices, _boot_order__WEBPACK_IMPORTED_MODULE_9__["deviceKey"]);
        devices.forEach((d) => {
            // Find the device to update.
            const device = devicesMap[Object(_boot_order__WEBPACK_IMPORTED_MODULE_9__["deviceKey"])(d)];
            // Update device bootOrder.
            if (device && d.value.bootOrder) {
                device.value.bootOrder = d.value.bootOrder;
            }
            if (device && device.value.bootOrder && !d.value.bootOrder) {
                delete device.value.bootOrder;
            }
        });
        // Filter disks and interfaces from devices list.
        const disks = [
            ...currentDevices
                .filter((source) => source.type === _constants__WEBPACK_IMPORTED_MODULE_10__["DeviceType"].DISK)
                .map((source) => source.value),
        ];
        const interfaces = [
            ...currentDevices
                .filter((source) => source.type === _constants__WEBPACK_IMPORTED_MODULE_10__["DeviceType"].NIC)
                .map((source) => source.value),
        ];
        // Patch k8s.
        const patches = [
            new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_6__["PatchBuilder"]('/spec/template/spec/domain/devices/disks').replace(disks).build(),
            new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_6__["PatchBuilder"]('/spec/template/spec/domain/devices/interfaces').replace(interfaces).build(),
        ];
        const promise = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getVMLikeModel"])(vmLikeEntity), vmLikeEntity, Object(_k8s_patches_vm_template__WEBPACK_IMPORTED_MODULE_8__["getVMLikePatches"])(vmLikeEntity, () => patches));
        handlePromise(promise)
            .then(() => setOpen(false))
            .catch(() => setPatchError(true));
    });
    const footer = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], { errorMessage: showPatchError && errorMessage, inProgress: inProgress, onSubmit: onSubmit, onCancel: () => setOpen(false), submitButtonText: "Save", infoTitle: showUpdatedAlert && 'Boot order has been updated outside this flow.', infoMessage: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "Saving these changes will override any boot order previously saved.",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            "To see the updated order",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ButtonVariant"].link, isInline: true, onClick: onReload }, "reload the content"),
            "."), className: 'kubevirt-boot-order-modal__footer' }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], { title: title, isOpen: isOpen, isSmall: true, onClose: () => setOpen(false), footer: footer, showClose: false, isFooterLeftAligned: false },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_boot_order__WEBPACK_IMPORTED_MODULE_9__["BootOrder"], { devices: devices, setDevices: setDevices })));
};
const BootOrderModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])(BootOrderModalComponent);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-modal.scss":
/*!****************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-modal.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-modal.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-modal.tsx ***!
  \***************************************************************************************/
/*! exports provided: AddCDButton, CDRomModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCDButton", function() { return AddCDButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDRomModal", function() { return CDRomModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _k8s_patches_vm_vm_cdrom_patches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../k8s/patches/vm/vm-cdrom-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-cdrom-patches.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../selectors/vm/selectors */ "./packages/kubevirt-plugin/src/selectors/vm/selectors.ts");
/* harmony import */ var _utils_validations_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/validations/common */ "./packages/kubevirt-plugin/src/utils/validations/common.ts");
/* harmony import */ var _cdrom_row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cdrom-row */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-row.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/helpers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/constants.ts");
/* harmony import */ var _cdrom_modal_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cdrom-modal.scss */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-modal.scss");
/* harmony import */ var _cdrom_modal_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_cdrom_modal_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hooks_storage_class_config_map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../hooks/storage-class-config-map */ "./packages/kubevirt-plugin/src/hooks/storage-class-config-map.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

















const AddCDButton = ({ className, text, onClick, isDisabled }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "pf-m-link--align-left", id: "vm-cd-add-btn", variant: "link", onClick: onClick, isDisabled: isDisabled, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleIcon"], null) }, text),
    isDisabled && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { position: "bottom", trigger: "click mouseenter", entryDelay: 0, exitDelay: 0, content: "You have reached the maximum amount of CD-ROM drives" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["OutlinedQuestionCircleIcon"], null)))));
const CDRomModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    const { vmLikeEntity, handlePromise, inProgress: _inProgress, errorMessage, persistentVolumeClaims, storageClasses, winToolsContainer, cancel, close, } = props;
    const vm = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_9__["asVM"])(vmLikeEntity);
    const [storageClassConfigMap, isStorageClassConfigMapLoaded] = Object(_hooks_storage_class_config_map__WEBPACK_IMPORTED_MODULE_16__["useStorageClassConfigMap"])();
    const inProgress = _inProgress || !isStorageClassConfigMapLoaded;
    const mapCDsToSource = (cds) => Object.assign({}, ...cds.map(({ name, cdrom, bootOrder }) => {
        let cd = Object.assign(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_14__["initialDisk"]), { name,
            cdrom,
            bootOrder });
        const container = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["getContainerImageByDisk"])(vm, name);
        if (container) {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](_constants__WEBPACK_IMPORTED_MODULE_14__["WINTOOLS_CONTAINER_NAMES"], container)) {
                cd = Object.assign(Object.assign({}, cd), { type: _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].WINTOOLS, windowsTools: container });
            }
            else {
                cd = Object.assign(Object.assign({}, cd), { type: _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].CONTAINER, container });
            }
        }
        const url = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["getURLSourceByDisk"])(vm, name);
        if (url) {
            const storageClass = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["getStorageClassNameByDisk"])(vm, name);
            const size = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["getStorageSizeByDisk"])(vm, cd.name).replace(/[^0-9]/g, '');
            cd = Object.assign(Object.assign({}, cd), { type: _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].URL, url, storageClass, size });
        }
        const pvc = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["getPVCSourceByDisk"])(vm, name);
        if (pvc) {
            cd = Object.assign(Object.assign({}, cd), { type: _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].PVC, pvc });
        }
        return { [name]: cd };
    }));
    const [cds, setCDs] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](mapCDsToSource(Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["getCDRoms"])(vm)));
    const [showRestartAlert, setShowRestartAlert] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [shouldPatch, setShouldPatch] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onCDChange = (cdName, key, value) => {
        setShowRestartAlert(true);
        setShouldPatch(true);
        const cd = Object.assign(Object.assign({}, cds[cdName]), { [key]: value });
        if (key === _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].URL) {
            if (Object(_utils_validations_common__WEBPACK_IMPORTED_MODULE_11__["isValidationError"])(Object(_utils_validations_common__WEBPACK_IMPORTED_MODULE_11__["validateURL"])(value))) {
                cd.isURLValid = false;
            }
            else {
                cd.isURLValid = true;
            }
        }
        setCDs(Object.assign(Object.assign({}, cds), { [cdName]: cd }));
    };
    const onCDAdd = () => {
        const name = Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["getAvailableCDName"])(Object.values(cds));
        const newCD = Object.assign(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_14__["initialDisk"]), { type: _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].CONTAINER, name, newCD: true });
        setShowRestartAlert(true);
        setShouldPatch(true);
        setCDs(Object.assign(Object.assign({}, cds), { [name]: newCD }));
    };
    const onCDDelete = (cdName) => {
        setShouldPatch(true);
        setCDs(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](cds, cdName));
    };
    const submit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (shouldPatch) {
            const promise = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_9__["getVMLikeModel"])(vmLikeEntity), vmLikeEntity, Object(_k8s_patches_vm_vm_cdrom_patches__WEBPACK_IMPORTED_MODULE_8__["getCDsPatch"])(vmLikeEntity, Object.values(cds), storageClassConfigMap));
            handlePromise(promise).then(close); // eslint-disable-line promise/catch-or-return
        }
        else {
            close();
        }
    });
    const cdsValue = Object.values(cds);
    const windowsBool = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_9__["isWindows"])(vm);
    const usedPVCs = cdsValue.map((cd) => cd.pvc);
    const isFormInvalid = !!cdsValue.find((vol) => !vol.isURLValid) ||
        !!cdsValue.find((cd) => cd.type === _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].PVC && !cd.pvc) ||
        !!cdsValue.find((cd) => cd.type === _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].URL && !cd.storageClass) ||
        !!cdsValue.find((cd) => cd.type === _constants__WEBPACK_IMPORTED_MODULE_14__["StorageType"].WINTOOLS && !cd.windowsTools);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Edit CD-ROMs"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
            showRestartAlert && Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_10__["isVMRunningOrExpectedRunning"])(vm) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "info", isInline: true, title: "Changes will be applied when the virtual machine has been restarted" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { className: "pf-l-grid pf-m-gutter" },
                lodash__WEBPACK_IMPORTED_MODULE_1__["size"](cds) > 0 ? (cdsValue.map((cd, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cdrom_row__WEBPACK_IMPORTED_MODULE_12__["CDRomRow"], { key: `cd-row-${cd.name}`, cd: cd, pvcs: persistentVolumeClaims, usedPVCs: usedPVCs, storageClasses: storageClasses, winToolsContainer: winToolsContainer, index: i, isWindows: windowsBool, inProgress: inProgress, onChange: onCDChange, onDelete: onCDDelete })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h4 }, "This virtual machine does not have any CD-ROMs attached.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AddCDButton, { className: "kubevirt-add-cd-btn", text: "Add CD-ROM", onClick: onCDAdd, isDisabled: lodash__WEBPACK_IMPORTED_MODULE_1__["size"](cds) > 1 }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_7__["ModalFooter"], { id: "cdrom", errorMessage: errorMessage, inProgress: inProgress, isDisabled: isFormInvalid || inProgress, submitButtonText: "Save", onSubmit: submit, onCancel: (e) => {
                e.stopPropagation();
                cancel();
            } })));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-row.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-row.tsx ***!
  \*************************************************************************************/
/*! exports provided: CDRomRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDRomRow", function() { return CDRomRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _form_k8s_resource_select_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form/k8s-resource-select-row */ "./packages/kubevirt-plugin/src/components/form/k8s-resource-select-row.tsx");
/* harmony import */ var _form_form_select_placeholder_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../form/form-select-placeholder-option */ "./packages/kubevirt-plugin/src/components/form/form-select-placeholder-option.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/constants.ts");









const CDRomRow = ({ cd, pvcs, usedPVCs, storageClasses, index, onChange, onDelete, isWindows, inProgress, winToolsContainer, }) => {
    const { name, type, container, pvc, url, windowsTools, size, storageClass, isURLValid } = cd;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].h4 }, `Drive ${index + 1}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { fieldId: "cd-rom-modal-grid", className: "kubevirt-cdrom-modal__grid pf-l-grid pf-m-11-col-on-md" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { label: "Source", fieldId: "cd-rom-modal-type", className: "pf-m-3-col-on-md" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelect"], { value: type, onChange: (v) => onChange(name, 'type', v), id: `cd-rom-modal-select-type-${name}` },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelectOption"], { key: "container-option", value: "container", label: "Container" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelectOption"], { key: "pvc-option", value: "pvc", label: "Attach Disk" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelectOption"], { key: "url-option", value: "url", label: "URL" }),
                    isWindows && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelectOption"], { key: "wintools-option", value: "windowsTools", label: "Windows guest tools" })))),
            type === _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].URL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { label: "URL", className: "pf-m-3-col-on-md", fieldId: "cd-rom-modal-url", id: `cd-url-text-input-${name}`, isValid: isURLValid, helperTextInvalid: "Invalid URL" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { isRequired: true, type: "text", value: url, onChange: (v) => onChange(name, _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].URL, v), "aria-label": "url path" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { id: `cd-url-size-input-${name}`, label: "Size (GiB)", className: "pf-m-2-col-on-md", fieldId: "cd-rom-modal-cdsize" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { isRequired: true, type: "text", value: size, onChange: (v) => onChange(name, _constants__WEBPACK_IMPORTED_MODULE_8__["CD_SIZE"], v), "aria-label": "cd size" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-m-3-col-on-md" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_k8s_resource_select_row__WEBPACK_IMPORTED_MODULE_6__["K8sResourceSelectRow"], { key: "storage-class", id: `cd-url-storageclass-input-${name}`, isDisabled: inProgress, name: storageClass, data: storageClasses, model: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["StorageClassModel"], hasPlaceholder: true, onChange: (sc) => onChange(name, _constants__WEBPACK_IMPORTED_MODULE_8__["CD_STORAGE_CLASS"], sc) })))),
            type === _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].CONTAINER && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { className: "pf-m-8-col-on-md", label: "Container", fieldId: "cd-rom-modal-container", id: `cdrom-container-input-${name}` },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { isRequired: true, type: "text", value: container, onChange: (v) => onChange(name, _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].CONTAINER, v), "aria-label": "container path" }))),
            type === _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].PVC && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-m-8-col-on-md" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_k8s_resource_select_row__WEBPACK_IMPORTED_MODULE_6__["K8sResourceSelectRow"], { key: "pvc-select", title: "Attach Disk", id: `cdrom-pvc-input-${name}`, isDisabled: inProgress, name: pvc, data: pvcs, model: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["PersistentVolumeClaimModel"], hasPlaceholder: true, isPlaceholderDisabled: true, onChange: (p) => onChange(name, _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].PVC, p), filter: (p) => !lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](lodash__WEBPACK_IMPORTED_MODULE_1__["without"](usedPVCs, pvc), Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(p)) }))),
            type === _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].WINTOOLS && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { label: "Windows guest tools", id: `cdrom-wintools-input-${name}`, className: "pf-m-8-col-on-md", fieldId: "cd-rom-modal-wintools" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelect"], { "aria-label": "cd-rom-wintools-label", value: windowsTools, onChange: (v) => onChange(name, _constants__WEBPACK_IMPORTED_MODULE_8__["StorageType"].WINTOOLS, v) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_select_placeholder_option__WEBPACK_IMPORTED_MODULE_7__["FormSelectPlaceholderOption"], { placeholder: "--- Select Windows Tools Container ---" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormSelectOption"], { key: winToolsContainer, value: winToolsContainer, label: winToolsContainer })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kubevirt-cdrom-modal__delete pf-m-1-col-on-md" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { onClick: () => onDelete(name), variant: "plain" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], null))))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/helpers.ts":
/*!**********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/helpers.ts ***!
  \**********************************************************************************/
/*! exports provided: getAvailableCDName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableCDName", function() { return getAvailableCDName; });
const getAvailableCDName = (cds) => {
    const cdSet = new Set(cds.map((cd) => cd.name));
    let index = 1;
    while (cdSet.has(`cd-drive-${index}`)) {
        index++;
    }
    return `cd-drive-${index}`;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/vm-cdrom-modal.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/vm-cdrom-modal.tsx ***!
  \******************************************************************************************/
/*! exports provided: VMCDRomModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMCDRomModal", function() { return VMCDRomModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _cdrom_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdrom-modal */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/cdrom-modal.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/constants.ts");








const CDRomModalFirehose = (props) => {
    const { vmLikeEntity } = props;
    const winToolsContainer = _constants__WEBPACK_IMPORTED_MODULE_7__["WINTOOLS_CONTAINER_NAMES"].okd;
    const resources = [
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["StorageClassModel"].kind,
            isList: true,
            prop: 'storageClasses',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["PersistentVolumeClaimModel"].kind,
            isList: true,
            namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["asVM"])(vmLikeEntity)),
            prop: 'persistentVolumeClaims',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cdrom_modal__WEBPACK_IMPORTED_MODULE_6__["CDRomModal"], Object.assign({ winToolsContainer: winToolsContainer }, props))));
};
const VMCDRomModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(CDRomModalFirehose);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/_clone-vm-modal.scss":
/*!********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/_clone-vm-modal.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/clone-vm-modal.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/clone-vm-modal.tsx ***!
  \******************************************************************************************/
/*! exports provided: CloneVMModal, cloneVMModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneVMModal", function() { return CloneVMModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneVMModal", function() { return cloneVMModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../selectors/selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _k8s_requests_vm_clone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../k8s/requests/vm/clone */ "./packages/kubevirt-plugin/src/k8s/requests/vm/clone.ts");
/* harmony import */ var _utils_validations_vm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/validations/vm */ "./packages/kubevirt-plugin/src/utils/validations/vm/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _utils_validations_strings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/validations/strings */ "./packages/kubevirt-plugin/src/utils/validations/strings.ts");
/* harmony import */ var _errors_errors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../errors/errors */ "./packages/kubevirt-plugin/src/components/errors/errors.tsx");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/strings */ "./packages/kubevirt-plugin/src/utils/strings.ts");
/* harmony import */ var _configuration_summary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./configuration-summary */ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/configuration-summary.tsx");
/* harmony import */ var _clone_vm_modal_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_clone-vm-modal.scss */ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/_clone-vm-modal.scss");
/* harmony import */ var _clone_vm_modal_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_clone_vm_modal_scss__WEBPACK_IMPORTED_MODULE_18__);



















const CloneVMModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    const { vm, namespace, onNamespaceChanged, namespaces, virtualMachines, persistentVolumeClaims, dataVolumes, requestsDataVolumes, requestsPVCs, inProgress, errorMessage, handlePromise, close, cancel, } = props;
    const asId = _utils__WEBPACK_IMPORTED_MODULE_9__["prefixedID"].bind(null, 'clone-dialog-vm');
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](`${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(vm)}-clone`);
    const [description, setDescription] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_8__["getDescription"])(vm));
    const [startVM, setStartVM] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const namespacesError = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadError"])(namespaces, _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NamespaceModel"]);
    const pvcsError = requestsPVCs
        ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadError"])(persistentVolumeClaims, _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"])
        : null;
    const dataVolumesError = requestsDataVolumes ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadError"])(dataVolumes, _models__WEBPACK_IMPORTED_MODULE_10__["DataVolumeModel"]) : null;
    const persistentVolumeClaimsData = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadedData"])(persistentVolumeClaims, []);
    const dataVolumesData = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadedData"])(dataVolumes, []);
    const nameError = Object(_utils_validations_vm__WEBPACK_IMPORTED_MODULE_12__["validateVmLikeEntityName"])(name, namespace, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadedData"])(virtualMachines, []), {
        existsErrorMessage: _utils_validations_strings__WEBPACK_IMPORTED_MODULE_14__["VIRTUAL_MACHINE_EXISTS"],
        subject: 'Name',
    });
    const dataVolumesValid = !(dataVolumesError || (requestsDataVolumes && !dataVolumes.loaded));
    const pvcsValid = !(pvcsError || (requestsPVCs && !persistentVolumeClaims.loaded));
    const isValid = !nameError && dataVolumesValid && pvcsValid && !namespacesError && name && namespace;
    const submit = (e) => {
        e.preventDefault();
        const promise = Object(_k8s_requests_vm_clone__WEBPACK_IMPORTED_MODULE_11__["cloneVM"])({
            vm,
            dataVolumes: dataVolumesData,
            persistentVolumeClaims: persistentVolumeClaimsData,
        }, { name, namespace, description, startVM });
        handlePromise(promise).then(close); // eslint-disable-line promise/catch-or-return
    };
    const onCancelClick = (e) => {
        e.stopPropagation();
        cancel();
    };
    const vmRunningWarning = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_13__["isVMExpectedRunning"])(vm) &&
        `The VM ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(vm)} is still running. It will be powered off while cloning.`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Clone Virtual Machine"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_errors_errors__WEBPACK_IMPORTED_MODULE_15__["Errors"], { endMargin: true, errors: [
                    {
                        key: 'namespacesError',
                        message: namespacesError,
                        title: _utils_strings__WEBPACK_IMPORTED_MODULE_16__["COULD_NOT_LOAD_DATA"],
                    },
                    {
                        key: 'pvcsError',
                        message: pvcsError,
                        title: _utils_strings__WEBPACK_IMPORTED_MODULE_16__["COULD_NOT_LOAD_DATA"],
                    },
                    {
                        key: 'dataVolumesError',
                        message: dataVolumesError,
                        title: _utils_strings__WEBPACK_IMPORTED_MODULE_16__["COULD_NOT_LOAD_DATA"],
                    },
                ].filter((err) => err.message) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { isHorizontal: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { label: "Name", isRequired: true, fieldId: asId('name'), isValid: !(nameError && nameError.type === _console_shared__WEBPACK_IMPORTED_MODULE_7__["ValidationErrorType"].Error), helperTextInvalid: nameError && nameError.message },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { isValid: !(nameError && nameError.type === _console_shared__WEBPACK_IMPORTED_MODULE_7__["ValidationErrorType"].Error), isRequired: true, type: "text", id: asId('name'), value: name, onChange: (v) => setName(v), "aria-label": "new VM name" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { label: "Description", fieldId: asId('description') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextArea"], { id: asId('description'), value: description, onChange: (v) => setDescription(v), className: "kubevirt-clone-vm-modal__description" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { isRequired: true, label: "Namespace", fieldId: asId('namespace') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { value: namespace, onChange: (v) => onNamespaceChanged(v), id: asId('namespace') }, [...Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadedData"])(namespaces, [])]
                        .sort((n1, n2) => {
                        const n1Name = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(n1);
                        const n2Name = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(n2);
                        return n1Name.localeCompare(n2Name);
                    })
                        .map((n) => {
                        const namespaceName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(n);
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: namespaceName, value: namespaceName, label: namespaceName }));
                    }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: asId('start') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], { label: "Start virtual machine on clone", id: asId('start'), isChecked: startVM, onChange: setStartVM, className: "kubevirt-clone-vm-modal__start_vm_checkbox" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { label: "Configuration", fieldId: asId('configuration-summary') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_configuration_summary__WEBPACK_IMPORTED_MODULE_17__["ConfigurationSummary"], { id: asId('configuration-summary'), vm: vm, persistentVolumeClaims: persistentVolumeClaimsData, dataVolumes: dataVolumesData })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], { id: "clone-vm", errorMessage: errorMessage, isSimpleError: !!vmRunningWarning && !errorMessage, warningMessage: vmRunningWarning, inProgress: inProgress, isDisabled: !isValid || inProgress, submitButtonText: "Clone Virtual Machine", onSubmit: submit, onCancel: onCancelClick })));
});
const CloneVMModalFirehose = (props) => {
    const { vm, useProjects } = props;
    const vmNamespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(vm);
    const [namespace, setNamespace] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](vmNamespace);
    const requestsDataVolumes = !!Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_13__["getVolumes"])(vm).find(_selectors_vm__WEBPACK_IMPORTED_MODULE_13__["getVolumeDataVolumeName"]);
    const requestsPVCs = !!Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_13__["getVolumes"])(vm).find(_selectors_vm__WEBPACK_IMPORTED_MODULE_13__["getVolumePersistentVolumeClaimName"]);
    const resources = [
        {
            kind: (useProjects ? _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"] : _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NamespaceModel"]).kind,
            isList: true,
            prop: 'namespaces',
        },
        {
            kind: _models__WEBPACK_IMPORTED_MODULE_10__["VirtualMachineModel"].kind,
            namespace,
            isList: true,
            prop: 'virtualMachines',
        },
    ];
    if (requestsPVCs) {
        resources.push({
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["PersistentVolumeClaimModel"].kind,
            namespace: vmNamespace,
            isList: true,
            prop: 'persistentVolumeClaims',
        });
    }
    if (requestsDataVolumes) {
        resources.push({
            kind: _models__WEBPACK_IMPORTED_MODULE_10__["DataVolumeModel"].kind,
            namespace: vmNamespace,
            isList: true,
            prop: 'dataVolumes',
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CloneVMModal, Object.assign({}, props, { namespace: namespace, onNamespaceChanged: (n) => setNamespace(n), requestsDataVolumes: requestsDataVolumes, requestsPVCs: requestsPVCs }))));
};
const cloneVMModalStateToProps = ({ k8s }) => {
    const useProjects = k8s.hasIn(['RESOURCES', 'models', _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["ProjectModel"].kind]);
    return {
        useProjects,
    };
};
const CloneVMModalConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(cloneVMModalStateToProps)(CloneVMModalFirehose);
const cloneVMModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(CloneVMModalConnected);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/configuration-summary.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/configuration-summary.tsx ***!
  \*************************************************************************************************/
/*! exports provided: ConfigurationSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationSummary", function() { return ConfigurationSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");
/* harmony import */ var _selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../selectors/dv/selectors */ "./packages/kubevirt-plugin/src/selectors/dv/selectors.ts");
/* harmony import */ var _selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/pvc/selectors */ "./packages/kubevirt-plugin/src/selectors/pvc/selectors.ts");
/* harmony import */ var _selectors_vm_flavor_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../selectors/vm/flavor-text */ "./packages/kubevirt-plugin/src/selectors/vm/flavor-text.ts");
/* harmony import */ var _clone_vm_modal_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_clone-vm-modal.scss */ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/_clone-vm-modal.scss");
/* harmony import */ var _clone_vm_modal_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clone_vm_modal_scss__WEBPACK_IMPORTED_MODULE_7__);








const getNicsDescription = (vm) => Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getInterfaces"])(vm).map(({ name, model }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: name }, model ? `${name} - ${model}` : name)));
const getDisksDescription = (vm, pvcs, dataVolumes) => {
    const disks = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getDisks"])(vm);
    const volumes = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getVolumes"])(vm);
    const dataVolumeTemplates = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getDataVolumeTemplates"])(vm);
    return disks.map((disk) => {
        const description = [disk.name];
        const volume = volumes.find((v) => v.name === disk.name);
        if (volume) {
            if (volume.dataVolume) {
                let dataVolume = dataVolumeTemplates.find((dv) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(dv) === volume.dataVolume.name);
                if (!dataVolume) {
                    dataVolume = dataVolumes.find((dv) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(dv) === volume.dataVolume.name && Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(dv) === Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(vm));
                }
                description.push(Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_3__["getStorageSize"])(Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_4__["getDataVolumeResources"])(dataVolume)), Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_4__["getDataVolumeStorageClassName"])(dataVolume));
            }
            else if (volume.persistentVolumeClaim) {
                const pvc = pvcs.find((p) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(p) === volume.persistentVolumeClaim.claimName);
                description.push(Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_3__["getStorageSize"])(Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_5__["getPvcResources"])(pvc)), Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_5__["getPvcStorageClassName"])(pvc));
            }
            else if (volume.containerDisk) {
                description.push('container disk');
            }
            else if (volume.cloudInitNoCloud) {
                description.push('cloud-init disk');
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: disk.name }, description.join(' - '));
    });
};
const ConfigurationSummary = ({ id, vm, persistentVolumeClaims, dataVolumes, }) => {
    const disks = getDisksDescription(vm, persistentVolumeClaims, dataVolumes);
    const nics = getNicsDescription(vm);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { id: id, className: "kubevirt-clone-vm-modal__configuration-summary" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Operating System"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getOperatingSystemName"])(vm) || _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Flavor"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, Object(_selectors_vm_flavor_text__WEBPACK_IMPORTED_MODULE_6__["getFlavorText"])({
            flavor: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getFlavor"])(vm),
            cpu: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getCPU"])(vm),
            memory: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getMemory"])(vm),
        })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Workload Profile"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getWorkloadProfile"])(vm) || _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "NICs"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, nics.length > 0 ? nics : _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Disks"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, disks.length > 0 ? disks : _console_shared__WEBPACK_IMPORTED_MODULE_1__["DASH"])));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/index.ts":
/*!********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/index.ts ***!
  \********************************************************************************/
/*! exports provided: CloneVMModal, cloneVMModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clone_vm_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-vm-modal */ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/clone-vm-modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneVMModal", function() { return _clone_vm_modal__WEBPACK_IMPORTED_MODULE_0__["CloneVMModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneVMModal", function() { return _clone_vm_modal__WEBPACK_IMPORTED_MODULE_0__["cloneVMModal"]; });




/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/delete-vm-like-entity-modal/delete-vm-like-entity-modal.tsx":
/*!********************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/delete-vm-like-entity-modal/delete-vm-like-entity-modal.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: DeleteVMLikeEntityModal, deleteVMLikeEntityModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteVMLikeEntityModal", function() { return DeleteVMLikeEntityModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVMLikeEntityModal", function() { return deleteVMLikeEntityModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/status/icons */ "./packages/console-shared/src/components/status/icons.tsx");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _hooks_use_owned_volume_referenced_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/use-owned-volume-referenced-resources */ "./packages/kubevirt-plugin/src/hooks/use-owned-volume-referenced-resources.ts");
/* harmony import */ var _selectors_check_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../selectors/check-type */ "./packages/kubevirt-plugin/src/selectors/check-type.ts");
/* harmony import */ var _hooks_use_virtual_machine_import__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/use-virtual-machine-import */ "./packages/kubevirt-plugin/src/hooks/use-virtual-machine-import.ts");
/* harmony import */ var _hooks_use_vm_like_entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/use-vm-like-entity */ "./packages/kubevirt-plugin/src/hooks/use-vm-like-entity.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _k8s_requests_vm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../k8s/requests/vm */ "./packages/kubevirt-plugin/src/k8s/requests/vm/index.ts");
/* harmony import */ var _k8s_requests_vmtemplate_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../k8s/requests/vmtemplate/actions */ "./packages/kubevirt-plugin/src/k8s/requests/vmtemplate/actions.ts");















const redirectFn = (vmLikeEntity) => {
    // If we are currently on the deleted resource's page, redirect to the resource list page
    const re = new RegExp(`/${Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity)}(/|$)`);
    if (re.test(window.location.pathname)) {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["history"].push(`/k8s/ns/${Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity)}/virtualization${Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_9__["isTemplate"])(vmLikeEntity) ? '/templates' : ''}`);
    }
};
const DeleteVMLikeEntityModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    const { inProgress, errorMessage, handlePromise, close, cancel } = props;
    const vmLikeEntity = Object(_hooks_use_vm_like_entity__WEBPACK_IMPORTED_MODULE_11__["useUpToDateVMLikeEntity"])(props.vmLikeEntity);
    const [deleteDisks, setDeleteDisks] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [deleteVMImport, setDeleteVMImport] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const entityModel = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getVMLikeModel"])(vmLikeEntity);
    const namespace = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity);
    const vmLikeReference = {
        name: Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity),
        kind: entityModel.kind,
        apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["apiVersionForModel"])(entityModel),
    };
    const [vmImport, vmImportLoaded] = Object(_hooks_use_virtual_machine_import__WEBPACK_IMPORTED_MODULE_10__["useVirtualMachineImport"])(Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_9__["isVM"])(vmLikeEntity) ? vmLikeEntity : null);
    const [ownedVolumeResources, isOwnedVolumeResourcesLoaded] = Object(_hooks_use_owned_volume_referenced_resources__WEBPACK_IMPORTED_MODULE_8__["useOwnedVolumeReferencedResources"])(vmLikeReference, namespace, Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getVolumes"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["asVM"])(vmLikeEntity), null));
    const isInProgress = inProgress || !vmImportLoaded || !isOwnedVolumeResourcesLoaded;
    const numOfAllResources = lodash__WEBPACK_IMPORTED_MODULE_1__["sum"]([ownedVolumeResources.length, vmImport ? 1 : 0]);
    const submit = (e) => {
        e.preventDefault();
        let promise;
        if (Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_9__["isVM"])(vmLikeEntity)) {
            promise = Object(_k8s_requests_vm__WEBPACK_IMPORTED_MODULE_13__["deleteVM"])(vmLikeEntity, {
                vmImport,
                deleteVMImport,
                ownedVolumeResources,
                deleteOwnedVolumeResources: deleteDisks,
            });
        }
        else if (Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_9__["isTemplate"])(vmLikeEntity)) {
            promise = Object(_k8s_requests_vmtemplate_actions__WEBPACK_IMPORTED_MODULE_14__["deleteVMTemplate"])(vmLikeEntity, {
                ownedVolumeResources,
                deleteOwnedVolumeResources: deleteDisks,
            });
        }
        return handlePromise(promise)
            .then(close)
            .then(() => redirectFn(vmLikeEntity));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_3__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Delete",
            ' ',
            Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_9__["isTemplate"])(vmLikeEntity) ? 'Virtual Machine Template' : entityModel.label,
            "?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
            "Are you sure you want to delete",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity)),
            " in namespace",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity)),
            " ?",
            numOfAllResources > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "The following resources will be deleted along with this virtual machine. Unchecked items will not be deleted.")),
            ownedVolumeResources.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", onChange: () => setDeleteDisks(!deleteDisks), checked: deleteDisks }),
                    "Delete Disks (",
                    ownedVolumeResources.length,
                    "x)"))),
            vmImport && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", onChange: () => setDeleteVMImport(!deleteVMImport), checked: deleteVMImport }),
                    "Delete ",
                    _models__WEBPACK_IMPORTED_MODULE_12__["VirtualMachineImportModel"].label,
                    " Resource")))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { errorMessage: errorMessage, submitDisabled: isInProgress, inProgress: isInProgress, submitText: "Delete", submitDanger: true, cancel: cancel })));
});
const deleteVMLikeEntityModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(DeleteVMLikeEntityModal);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/disk-modal/storage-ui-source.ts":
/*!****************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/disk-modal/storage-ui-source.ts ***!
  \****************************************************************************************/
/*! exports provided: StorageUISource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageUISource", function() { return StorageUISource; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");
/* harmony import */ var _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/vm/storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/types */ "./packages/kubevirt-plugin/src/utils/types.ts");
/* harmony import */ var _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/size-unit-utils */ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx");
/* eslint-disable lines-between-class-members */




class StorageUISource extends _constants__WEBPACK_IMPORTED_MODULE_0__["ObjectEnum"] {
    constructor(value, volumeType, dataVolumeSourceType, hasNewPVC = false) {
        super(value);
        this.getVolumeType = () => this.volumeType;
        this.getDataVolumeSourceType = () => this.dataVolumeSourceType;
        this.getAllowedUnits = () => this === StorageUISource.IMPORT_DISK
            ? Object(_utils_types__WEBPACK_IMPORTED_MODULE_2__["getStringEnumValues"])(_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_3__["BinaryUnit"])
            : [_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_3__["BinaryUnit"].Mi, _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_3__["BinaryUnit"].Gi, _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_3__["BinaryUnit"].Ti];
        this.requiresPVC = () => this === StorageUISource.ATTACH_DISK || this === StorageUISource.ATTACH_CLONED_DISK;
        this.requiresNewPVC = () => this.hasNewPVC;
        this.requiresContainerImage = () => this === StorageUISource.CONTAINER;
        this.requiresURL = () => this === StorageUISource.URL;
        this.requiresSize = () => this.requiresDatavolume() || this.hasNewPVC;
        this.requiresStorageClass = () => this.requiresDatavolume() || this.hasNewPVC;
        this.requiresVolumeType = () => !!this.volumeType;
        this.requiresDatavolume = () => !!this.dataVolumeSourceType;
        this.requiresNamespace = () => this === StorageUISource.ATTACH_CLONED_DISK;
        this.requiresAccessModes = () => this !== StorageUISource.ATTACH_DISK &&
            this !== StorageUISource.CONTAINER &&
            this !== StorageUISource.OTHER;
        this.requiresVolumeMode = () => this !== StorageUISource.ATTACH_DISK &&
            this !== StorageUISource.CONTAINER &&
            this !== StorageUISource.OTHER;
        this.requiresVolumeModeOrAccessModes = () => this.requiresAccessModes() || this.requiresVolumeMode();
        this.isNameEditingSupported = (diskType) => diskType !== _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["DiskType"].CDROM;
        this.isSizeEditingSupported = (size) => size === 0 || this !== StorageUISource.IMPORT_DISK; // if imported disk has 0 size, leave the user to decide
        this.isPlainDataVolume = (isCreateTemplate) => isCreateTemplate && this === StorageUISource.URL;
        this.hasDynamicSize = () => this === StorageUISource.CONTAINER;
        this.canBeChangedToThisSource = (diskType) => {
            if (diskType === _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["DiskType"].CDROM) {
                return (this === StorageUISource.ATTACH_DISK ||
                    this === StorageUISource.URL ||
                    this === StorageUISource.CONTAINER);
            }
            return this !== StorageUISource.IMPORT_DISK && this !== StorageUISource.OTHER;
        };
        this.volumeType = volumeType;
        this.dataVolumeSourceType = dataVolumeSourceType;
        this.hasNewPVC = hasNewPVC;
    }
}
StorageUISource.BLANK = new StorageUISource('Blank', _constants__WEBPACK_IMPORTED_MODULE_0__["VolumeType"].DATA_VOLUME, _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["DataVolumeSourceType"].BLANK);
StorageUISource.URL = new StorageUISource('URL', _constants__WEBPACK_IMPORTED_MODULE_0__["VolumeType"].DATA_VOLUME, _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["DataVolumeSourceType"].HTTP);
StorageUISource.CONTAINER = new StorageUISource('Container', _constants__WEBPACK_IMPORTED_MODULE_0__["VolumeType"].CONTAINER_DISK);
StorageUISource.ATTACH_CLONED_DISK = new StorageUISource('Attach Cloned Disk', _constants__WEBPACK_IMPORTED_MODULE_0__["VolumeType"].DATA_VOLUME, _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["DataVolumeSourceType"].PVC);
StorageUISource.ATTACH_DISK = new StorageUISource('Attach Disk', _constants__WEBPACK_IMPORTED_MODULE_0__["VolumeType"].PERSISTENT_VOLUME_CLAIM, undefined);
StorageUISource.IMPORT_DISK = new StorageUISource('Import Disk', _constants__WEBPACK_IMPORTED_MODULE_0__["VolumeType"].PERSISTENT_VOLUME_CLAIM, undefined, true);
StorageUISource.OTHER = new StorageUISource('Other');
StorageUISource.ALL = Object.freeze(_constants__WEBPACK_IMPORTED_MODULE_0__["ObjectEnum"].getAllClassEnumProperties(StorageUISource));
StorageUISource.stringMapper = StorageUISource.ALL.reduce((accumulator, volumeType) => (Object.assign(Object.assign({}, accumulator), { [volumeType.value]: volumeType })), {});
StorageUISource.getAll = () => StorageUISource.ALL;
StorageUISource.fromString = (model) => StorageUISource.stringMapper[model];
StorageUISource.fromTypes = (volumeType, dataVolumeSourceType, hasNewPVC = false) => StorageUISource.ALL.find((storageUIType) => storageUIType !== StorageUISource.OTHER &&
    storageUIType.volumeType == volumeType && // eslint-disable-line eqeqeq
    storageUIType.dataVolumeSourceType == dataVolumeSourceType && // eslint-disable-line eqeqeq
    storageUIType.hasNewPVC == hasNewPVC) || StorageUISource.OTHER;


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/index.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/index.ts ***!
  \*****************************************************************/
/*! exports provided: createModalResourceLauncher, VMDescriptionModal, vmDescriptionModal, vmFlavorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_resource_launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-resource-launcher */ "./packages/kubevirt-plugin/src/components/modals/modal-resource-launcher.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createModalResourceLauncher", function() { return _modal_resource_launcher__WEBPACK_IMPORTED_MODULE_0__["createModalResourceLauncher"]; });

/* harmony import */ var _vm_description_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-description-modal */ "./packages/kubevirt-plugin/src/components/modals/vm-description-modal/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMDescriptionModal", function() { return _vm_description_modal__WEBPACK_IMPORTED_MODULE_1__["VMDescriptionModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmDescriptionModal", function() { return _vm_description_modal__WEBPACK_IMPORTED_MODULE_1__["vmDescriptionModal"]; });

/* harmony import */ var _vm_flavor_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm-flavor-modal */ "./packages/kubevirt-plugin/src/components/modals/vm-flavor-modal/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmFlavorModal", function() { return _vm_flavor_modal__WEBPACK_IMPORTED_MODULE_2__["vmFlavorModal"]; });






/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/modal-resource-launcher.tsx":
/*!************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/modal-resource-launcher.tsx ***!
  \************************************************************************************/
/*! exports provided: createModalResourceLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModalResourceLauncher", function() { return createModalResourceLauncher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/redux */ "./public/redux.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/modals/error-modal */ "./public/components/modals/error-modal.jsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");









const NotFound = ({ message }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Box"], { className: "text-center" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["MsgBox"], { title: "Not Found", detail: "Requested resource not found." }),
    lodash__WEBPACK_IMPORTED_MODULE_1__["isString"](message) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "alert alert-danger text-left" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["RedExclamationCircleIcon"], null),
        message))));
const ModalComponentWrapper = ({ Component, onClose, resourcesToProps, loadError, loaded, resources = {}, modalProps = {}, }) => {
    if (loadError) {
        const status = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](loadError, 'response.status');
        let errorContent;
        if (status === 404) {
            errorContent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NotFound, { message: loadError.message });
        }
        if (status === 403) {
            errorContent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["AccessDenied"], { message: loadError.message });
        }
        if (!loaded) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_modals_error_modal__WEBPACK_IMPORTED_MODULE_6__["ModalErrorContent"], { cancel: onClose, error: errorContent });
        }
    }
    const resourceProps = resourcesToProps ? resourcesToProps(resources) || {} : resources;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({ onClose: onClose, onCancel: onClose, onHide: onClose }, modalProps, resourceProps)));
};
const createModalResourceLauncher = (Component, resources, resourcesToProps) => (props) => {
    const getModalContainer = (onClose) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: _console_internal_redux__WEBPACK_IMPORTED_MODULE_4__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Router"], Object.assign({}, { history: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"], basename: window.SERVER_FLAGS.basePath }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { resources: resources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ModalComponentWrapper, { Component: Component, onClose: onClose, resourcesToProps: resourcesToProps, modalProps: props })))));
    return Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["createModal"])(getModalContainer);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.scss":
/*!********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx ***!
  \*******************************************************************************/
/*! exports provided: ModalErrorMessage, ModalSimpleMessage, ModalInfoMessage, ModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalErrorMessage", function() { return ModalErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSimpleMessage", function() { return ModalSimpleMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoMessage", function() { return ModalInfoMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _modal_footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-footer.scss */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.scss");
/* harmony import */ var _modal_footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_footer_scss__WEBPACK_IMPORTED_MODULE_4__);





const ModalErrorMessage = ({ message }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: "danger", title: "An error occurred" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-pre-line" }, message)));
const ModalSimpleMessage = ({ message, variant = 'danger', }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, className: "co-alert", variant: variant, title: message });
const ModalInfoMessage = ({ title, children }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: "info", title: title }, children));
const ModalFooter = ({ className = '', errorMessage = null, warningMessage = null, isDisabled = false, inProgress = false, isSimpleError = false, onSubmit, onCancel, submitButtonText = 'Add', cancelButtonText = 'Cancel', infoMessage = null, infoTitle = null, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('co-m-btn-bar modal-footer kubevirt-modal-footer__buttons', className) },
    warningMessage && isSimpleError && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ModalSimpleMessage, { message: warningMessage, variant: "warning" })),
    errorMessage && isSimpleError && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ModalSimpleMessage, { message: errorMessage }),
    errorMessage && !isSimpleError && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ModalErrorMessage, { message: errorMessage }),
    infoTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ModalInfoMessage, { title: infoTitle }, infoMessage),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"], { className: "pf-c-form pf-c-form__actions--right pf-c-form__group--no-top-margin" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ButtonVariant"].secondary, "data-test-id": "modal-cancel-action", onClick: onCancel }, cancelButtonText),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ButtonVariant"].primary, isDisabled: isDisabled, id: "confirm-action", onClick: onSubmit }, submitButtonText)),
    inProgress && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null)));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/affinity-modal.tsx":
/*!************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/affinity-modal.tsx ***!
  \************************************************************************************************************/
/*! exports provided: AffinityModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffinityModal", function() { return AffinityModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../selectors/vm-like/selectors */ "./packages/kubevirt-plugin/src/selectors/vm-like/selectors.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/use-collision-checker */ "./packages/kubevirt-plugin/src/hooks/use-collision-checker.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _components_affinity_table_affinity_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/affinity-table/affinity-table */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-table/affinity-table.tsx");
/* harmony import */ var _components_affinity_table_affinity_row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/affinity-table/affinity-row */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-table/affinity-row.tsx");
/* harmony import */ var _components_affinity_edit_affinity_edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/affinity-edit/affinity-edit */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-edit/affinity-edit.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/helpers.ts");
/* harmony import */ var _k8s_patches_vm_vm_scheduling_patches__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../k8s/patches/vm/vm-scheduling-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-scheduling-patches.ts");
/* harmony import */ var _shared_scheduling_modals_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/scheduling-modals.scss */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/scheduling-modals.scss");
/* harmony import */ var _shared_scheduling_modals_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_shared_scheduling_modals_scss__WEBPACK_IMPORTED_MODULE_18__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















const AffinityModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])(({ vmLikeEntity, vmLikeEntityLoading, nodes, close, handlePromise, inProgress, errorMessage, }) => {
    const vmLikeFinal = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadedData"])(vmLikeEntityLoading, vmLikeEntity);
    const loadError = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getLoadError"])(nodes, _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["NodeModel"]);
    const currentAffinity = Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_8__["getVMLikeAffinity"])(vmLikeFinal);
    const [affinities, setAffinities] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["getRowsDataFromAffinity"])(currentAffinity));
    const [focusedAffinity, setFocusedAffinity] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_helpers__WEBPACK_IMPORTED_MODULE_16__["defaultNewAffinity"]);
    const [isEditing, setIsEditing] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [isCreating, setIsCreating] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [showCollisionAlert, reload] = Object(_hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_10__["useCollisionChecker"])(vmLikeFinal, (oldVM, newVM) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_8__["getVMLikeAffinity"])(oldVM), Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_8__["getVMLikeAffinity"])(newVM)));
    const onReload = () => {
        reload();
        setAffinities(Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["getRowsDataFromAffinity"])(currentAffinity));
        setIsCreating(false);
    };
    const onAffinityAdd = (affinity) => {
        setAffinities([...affinities, affinity]);
        setIsEditing(false);
        setIsCreating(false);
    };
    const onAffinityChange = (updatedAffinity) => {
        setAffinities(affinities.map((affinity) => {
            if (affinity.id === updatedAffinity.id)
                return Object.assign(Object.assign({}, affinity), updatedAffinity);
            return affinity;
        }));
        setIsEditing(false);
    };
    const onAffinityClickAdd = () => {
        setIsEditing(true);
        setIsCreating(true);
        setFocusedAffinity(_helpers__WEBPACK_IMPORTED_MODULE_16__["defaultNewAffinity"]);
    };
    const onAffinityClickEdit = (affinity) => {
        setFocusedAffinity(affinity);
        setIsEditing(true);
    };
    const onAffinityDelete = (affinity) => setAffinities(affinities.filter(({ id }) => id !== affinity.id));
    const submit = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](affinities, Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["getRowsDataFromAffinity"])(currentAffinity))) {
            // eslint-disable-next-line promise/catch-or-return
            handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getVMLikeModel"])(vmLikeFinal), vmLikeFinal, yield Object(_k8s_patches_vm_vm_scheduling_patches__WEBPACK_IMPORTED_MODULE_17__["getAffinityPatch"])(vmLikeFinal, Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["getAffinityFromRowsData"])(affinities)))).then(close);
        }
        else {
            close();
        }
    });
    const onCancel = () => {
        if (isEditing) {
            setIsEditing(false);
            setIsCreating(false);
        }
        else {
            close();
        }
    };
    const modalTitle = !isEditing
        ? _shared_consts__WEBPACK_IMPORTED_MODULE_12__["AFFINITY_MODAL_TITLE"]
        : isCreating
            ? _shared_consts__WEBPACK_IMPORTED_MODULE_12__["AFFINITY_CREATE"]
            : _shared_consts__WEBPACK_IMPORTED_MODULE_12__["AFFINITY_EDITING"];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Split"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SplitItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, modalTitle)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SplitItem"], { isFilled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["SplitItem"], { className: "scheduling-modals__add-btn" }, !isEditing && affinities.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: () => onAffinityClickAdd(), variant: "secondary" }, "Add Affinity rule")))),
        isEditing ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_affinity_edit_affinity_edit__WEBPACK_IMPORTED_MODULE_15__["AffinityEdit"], { nodes: nodes, affinity: focusedAffinity, onAffinitySubmit: isCreating ? onAffinityAdd : onAffinityChange, onCancel: onCancel })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
                affinities.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "scheduling-modals__desc-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, 'Set scheduling requirements and affect the ranking of the nodes candidate for scheduling.'),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, "Rules with 'Preferred' condition will stack with an 'AND' relation between them."),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, "Rules with 'Required' condition will stack with an 'OR' relation between them."))),
                affinities.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_affinity_table_affinity_table__WEBPACK_IMPORTED_MODULE_13__["AffinityTable"], { columnClasses: _helpers__WEBPACK_IMPORTED_MODULE_16__["columnClasses"], data: affinities, customData: {
                        isDisabled: false,
                        vmLikeFinal,
                        onEdit: onAffinityClickEdit,
                        onDelete: onAffinityDelete,
                    }, row: _components_affinity_table_affinity_row__WEBPACK_IMPORTED_MODULE_14__["AffinityRow"] })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["EmptyStateVariant"].full },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Title"], { headingLevel: "h5", size: "lg" }, "No Affinity rules found"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["EmptyStateBody"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "scheduling-modals__desc-container" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, 'Set scheduling requirements and affect the ranking of the nodes candidate for scheduling.'),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, "Rules with 'Preferred' condition will stack with an 'AND' relation between them."),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, "Rules with 'Required' condition will stack with an 'OR' relation between them."))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "secondary", onClick: () => onAffinityClickAdd() }, "Add Affinity rule")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], { id: "affinity", className: "kubevirt-affinity__footer", errorMessage: errorMessage, inProgress: !Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isLoaded"])(nodes) || inProgress, isSimpleError: !!loadError, onSubmit: submit, onCancel: onCancel, submitButtonText: 'Save', infoTitle: showCollisionAlert && 'Affinity has been updated outside this flow.', infoMessage: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    "Saving these changes will override any Affinity previously saved.",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ButtonVariant"].link, isInline: true, onClick: onReload }, "Reload Affinity"),
                    ".") })))));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-edit/affinity-edit.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-edit/affinity-edit.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-edit/affinity-edit.tsx":
/*!************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-edit/affinity-edit.tsx ***!
  \************************************************************************************************************************************/
/*! exports provided: AffinityEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffinityEdit", function() { return AffinityEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _form_form_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../form/form-row */ "./packages/kubevirt-plugin/src/components/form/form-row.tsx");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validations */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/validations.ts");
/* harmony import */ var _hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../hooks/use-id-entities */ "./packages/kubevirt-plugin/src/hooks/use-id-entities.ts");
/* harmony import */ var _shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/NodeChecker/node-checker */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.tsx");
/* harmony import */ var _shared_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/hooks */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/hooks.ts");
/* harmony import */ var _affinity_expression_list_affinity_expression_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../affinity-expression-list/affinity-expression-list */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-list.tsx");
/* harmony import */ var _affinity_edit_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./affinity-edit.scss */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-edit/affinity-edit.scss");
/* harmony import */ var _affinity_edit_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_affinity_edit_scss__WEBPACK_IMPORTED_MODULE_14__);















const AffinityEdit = ({ nodes, affinity, isDisabled, onAffinitySubmit, onCancel, }) => {
    const [focusedAffinity, setFocusedAffinity] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](affinity);
    const [affinityExpressions, , onExpressionAdd, onExpressionChange, onExpressionDelete, initialAffinityExpressionChanged,] = Object(_hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_10__["useIDEntities"])(affinity === null || affinity === void 0 ? void 0 : affinity.expressions);
    const onLabelExpressionAdd = () => onExpressionAdd({ id: null, key: '', values: [], operator: 'In' });
    const [affinityFields, , onFieldAdd, onFieldChange, onFieldDelete, initialAffinityFieldChanged,] = Object(_hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_10__["useIDEntities"])(affinity === null || affinity === void 0 ? void 0 : affinity.fields);
    const initialAffinityChanged = initialAffinityFieldChanged || initialAffinityExpressionChanged;
    const onLabelFieldAdd = () => onFieldAdd({ id: null, key: '', values: [], operator: 'In' });
    const isNodeAffinity = focusedAffinity.type === 'nodeAffinity';
    const { isTopologyDisabled, isTopologyInvalid, topologyValidationMessage, } = Object(_validations__WEBPACK_IMPORTED_MODULE_9__["getTopologyKeyValidation"])(focusedAffinity);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (isTopologyDisabled && focusedAffinity.topologyKey !== 'kubernetes.io/hostname')
            setFocusedAffinity(Object.assign(Object.assign({}, focusedAffinity), { topologyKey: 'kubernetes.io/hostname' }));
    }, [focusedAffinity, isTopologyDisabled]);
    const qualifiedExpressionNodes = Object(_shared_hooks__WEBPACK_IMPORTED_MODULE_12__["useNodeQualifier"])(nodes, 'label', affinityExpressions);
    const qualifiedFieldNodes = Object(_shared_hooks__WEBPACK_IMPORTED_MODULE_12__["useNodeQualifier"])(nodes, 'field', affinityFields);
    const getQualifiedNodes = () => {
        if (affinityExpressions.length > 0 && affinityFields.length > 0) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["intersection"](qualifiedExpressionNodes, qualifiedFieldNodes);
        }
        if (affinityExpressions.length > 0) {
            return qualifiedExpressionNodes;
        }
        if (affinityFields.length > 0) {
            return qualifiedFieldNodes;
        }
        return [];
    };
    const isExpressionsInvalid = Object(_validations__WEBPACK_IMPORTED_MODULE_9__["isTermsInvalid"])(affinityExpressions);
    const isFieldsInvalid = Object(_validations__WEBPACK_IMPORTED_MODULE_9__["isTermsInvalid"])(affinityFields);
    const isWeightInvalid = !Object(_validations__WEBPACK_IMPORTED_MODULE_9__["isWeightValid"])(focusedAffinity);
    const isAffinityInvalid = (affinityExpressions.length === 0 && affinityFields.length === 0) ||
        isWeightInvalid ||
        isExpressionsInvalid ||
        (isNodeAffinity && isFieldsInvalid) ||
        (!isNodeAffinity && isTopologyInvalid);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "scheduling-modals__desc-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Define an affinity rule. This rule will be added to the list of affinity rules applied to this workload.')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_8__["FormRow"], { title: "Type", fieldId: 'affinity-type', isRequired: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { onChange: (value) => setFocusedAffinity(Object.assign(Object.assign({}, focusedAffinity), { type: value })), value: focusedAffinity.type, id: 'affinity-type', isDisabled: isDisabled }, Object.keys(_shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_TYPE_LABLES"]).map((affinityType) => {
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: affinityType, value: affinityType, label: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_TYPE_LABLES"][affinityType] }));
                    }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_8__["FormRow"], { title: "Condition", fieldId: 'affinity-condition', isRequired: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { onChange: (value) => setFocusedAffinity(Object.assign(Object.assign({}, focusedAffinity), { condition: value })), value: focusedAffinity.condition, id: 'affinity-condition', isDisabled: isDisabled },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].preferred, value: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].preferred, label: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITION_LABELS"][_shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].preferred] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].required, value: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].required, label: _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITION_LABELS"][_shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].required] }))),
                (focusedAffinity === null || focusedAffinity === void 0 ? void 0 : focusedAffinity.condition) === _shared_consts__WEBPACK_IMPORTED_MODULE_7__["AFFINITY_CONDITIONS"].preferred && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_8__["FormRow"], { title: "Weight", fieldId: 'weight', validationType: isWeightInvalid ? _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Error : _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Info, validationMessage: "Weight must be a number between 1-100", isRequired: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { key: "weight", isDisabled: isDisabled, id: 'weight', value: focusedAffinity.weight || '', onChange: (value) => setFocusedAffinity(Object.assign(Object.assign({}, focusedAffinity), { weight: parseInt(value, 10) })) }))),
                !isNodeAffinity && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_8__["FormRow"], { title: "Topology Key", fieldId: 'topology-key', validationType: isTopologyInvalid ? _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Error : _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Info, validationMessage: topologyValidationMessage },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { key: "topology-key", isDisabled: isDisabled || isTopologyDisabled, id: 'topology-key', value: focusedAffinity.topologyKey || '', onChange: (value) => setFocusedAffinity(Object.assign(Object.assign({}, focusedAffinity), { topologyKey: value })) }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], { component: "div" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_8__["FormRow"], { title: isNodeAffinity ? 'Node Labels' : 'Workload Labels', fieldId: 'expressions', validationType: isExpressionsInvalid && initialAffinityChanged && _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Error, validationMessage: isExpressionsInvalid && initialAffinityChanged && isNodeAffinity
                        ? 'Missing fields in node labels'
                        : 'Missing fields in workload labels' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "scheduling-modals__desc-container" }, isNodeAffinity ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Select nodes that must have all the following expressions.'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Label selectors let you select Nodes based on the value of one or more labels.'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'A list of matching nodes will be provided on label input below.'))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Select workloads that must have all the following expressions.')))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_affinity_expression_list_affinity_expression_list__WEBPACK_IMPORTED_MODULE_13__["AffinityExpressionList"], { expressions: affinityExpressions, addRowText: "Add Expression", onAdd: onLabelExpressionAdd, onChange: onExpressionChange, onDelete: onExpressionDelete })),
                isNodeAffinity && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], { component: "div" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_8__["FormRow"], { title: "Node Fields", fieldId: 'fields', validationType: isFieldsInvalid && initialAffinityChanged && _console_shared__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorType"].Error, validationMessage: isFieldsInvalid && initialAffinityChanged && 'Missing fields in node fields' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "scheduling-modals__desc-container" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Field selectors let you select Nodes based on the value of one or more resource fields.'),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Note that for Node field expressions, entering a full path is required in the Key field (e.g. `metadata.name: value`).'),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small }, 'Some fields may not be supported.'))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_affinity_expression_list_affinity_expression_list__WEBPACK_IMPORTED_MODULE_13__["AffinityExpressionList"], { expressions: affinityFields, addRowText: "Add Field", onAdd: onLabelFieldAdd, onChange: onFieldChange, onDelete: onFieldDelete })),
                    (affinityExpressions.length > 0 || affinityFields.length > 0) &&
                        !isAffinityInvalid && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_11__["NodeChecker"], { qualifiedNodes: getQualifiedNodes() }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"], { id: "affinity-edit", className: "kubevirt-affinity-edit__footer", inProgress: !Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isLoaded"])(nodes), onSubmit: () => onAffinitySubmit(Object.assign(Object.assign({}, focusedAffinity), { expressions: affinityExpressions, fields: affinityFields })), onCancel: onCancel, submitButtonText: "Save Affinity rule", isDisabled: isAffinityInvalid })));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-list.tsx":
/*!**********************************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-list.tsx ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: AffinityExpressionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffinityExpressionList", function() { return AffinityExpressionList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _LabelsList_labels_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../LabelsList/labels-list */ "./packages/kubevirt-plugin/src/components/LabelsList/labels-list.tsx");
/* harmony import */ var _LabelsList_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../LabelsList/consts */ "./packages/kubevirt-plugin/src/components/LabelsList/consts.ts");
/* harmony import */ var _affinity_expression_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./affinity-expression-row */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-row.tsx");





const AffinityExpressionList = ({ expressions, addRowText, onAdd, onChange, onDelete, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelsList_labels_list__WEBPACK_IMPORTED_MODULE_2__["LabelsList"], { isEmpty: expressions.length === 0, onLabelAdd: onAdd, addRowText: addRowText, emptyStateAddRowText: addRowText }, expressions.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h6 }, _LabelsList_consts__WEBPACK_IMPORTED_MODULE_3__["LABEL_KEY"])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 2 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h6 }, "Operator")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h6 }, "Values")),
        expressions.map((expression) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_affinity_expression_row__WEBPACK_IMPORTED_MODULE_4__["AffinityExpressionRow"], { key: expression.id, expression: expression, onChange: onChange, onDelete: onDelete })))))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-row.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-row.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-row.tsx":
/*!*********************************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-row.tsx ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: AffinityExpressionRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffinityExpressionRow", function() { return AffinityExpressionRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _affinity_expression_row_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./affinity-expression-row.scss */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-expression-list/affinity-expression-row.scss");
/* harmony import */ var _affinity_expression_row_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_affinity_expression_row_scss__WEBPACK_IMPORTED_MODULE_4__);





const AffinityExpressionRow = ({ expression, onChange, onDelete, }) => {
    const { id, key, values, operator } = expression;
    const enableValueField = operator !== 'Exists' && operator !== 'DoesNotExist';
    const [isValuesExpanded, setIsValuesExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onSelect = (event, selection) => {
        const isValueExist = values.some((item) => item === selection);
        if (isValueExist) {
            onChange(Object.assign(Object.assign({}, expression), { values: values.filter((item) => item !== selection) }));
        }
        else {
            onChange(Object.assign(Object.assign({}, expression), { values: [...values, selection] }));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: `affinity-${id}-key-input`, className: "kv-affinity-expression-row__key-input", placeholder: "key", isRequired: true, type: "text", value: key, onChange: (newKey) => onChange(Object.assign(Object.assign({}, expression), { key: newKey })), "aria-label": "selector key" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 2 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { id: `affinity-${id}-effect-select`, className: "kv-affinity-expression-row__operator-input", isRequired: true, value: operator, onChange: (v) => onChange(Object.assign(Object.assign({}, expression), { operator: v })), "aria-label": "selector effect" }, _shared_consts__WEBPACK_IMPORTED_MODULE_3__["EXPRESSION_OPERATORS"].map((operatorOption) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: operatorOption, value: operatorOption, label: operatorOption }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 5 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Select"], { isDisabled: !enableValueField, variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["SelectVariant"].typeaheadMulti, isExpanded: isValuesExpanded, isCreatable: true, ariaLabelTypeAhead: "Enter Value", onToggle: () => setIsValuesExpanded(!isValuesExpanded), onClear: () => onChange(Object.assign(Object.assign({}, expression), { values: [] })), onSelect: onSelect, selections: enableValueField ? values : [], ariaLabelledBy: "values select", placeholderText: enableValueField ? 'Enter Value' : '' }, values === null || values === void 0 ? void 0 : values.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["SelectOption"], { isDisabled: false, key: index, value: option }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 1 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `affinity-${id}-delete-btn`, onClick: () => onDelete(id), variant: "plain" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["MinusCircleIcon"], null)))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-table/affinity-row.tsx":
/*!************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-table/affinity-row.tsx ***!
  \************************************************************************************************************************************/
/*! exports provided: AffinityRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffinityRow", function() { return AffinityRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _selectors_check_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../selectors/check-type */ "./packages/kubevirt-plugin/src/selectors/check-type.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _table_validation_cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../table/validation-cell */ "./packages/kubevirt-plugin/src/components/table/validation-cell.tsx");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");







const menuActionDelete = (affinity, onDelete) => ({
    label: 'Delete',
    callback: () => onDelete(affinity),
});
const menuActionEdit = (affinity, onEdit) => ({
    label: 'Edit',
    callback: () => onEdit(affinity),
});
const getActions = (affinity, vmLikeEntity, onEdit, onDelete) => {
    const actions = [];
    if (Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_2__["isVMI"])(vmLikeEntity)) {
        return actions;
    }
    actions.push(menuActionEdit(affinity, onEdit));
    actions.push(menuActionDelete(affinity, onDelete));
    return actions;
};
const AffinityRow = (props) => {
    const { obj, customData: { isDisabled, columnClasses, vmLikeEntity, onEdit, onDelete }, index, style, } = props;
    const { type, condition, weight, expressions, fields } = obj;
    const dimensify = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["dimensifyRow"])(columnClasses);
    const expressionsLabel = (expressions === null || expressions === void 0 ? void 0 : expressions.length) > 0 && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["pluralize"])(expressions.length, 'Expression');
    const fieldsLabel = (fields === null || fields === void 0 ? void 0 : fields.length) > 0 && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["pluralize"])(fields.length, 'Node Field');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: "affinity-row", index: index, trKey: condition, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_table_validation_cell__WEBPACK_IMPORTED_MODULE_5__["ValidationCell"], null, _shared_consts__WEBPACK_IMPORTED_MODULE_6__["AFFINITY_TYPE_LABLES"][type])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_table_validation_cell__WEBPACK_IMPORTED_MODULE_5__["ValidationCell"], null, _shared_consts__WEBPACK_IMPORTED_MODULE_6__["AFFINITY_CONDITION_LABELS"][condition])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_table_validation_cell__WEBPACK_IMPORTED_MODULE_5__["ValidationCell"], null, weight || _console_shared__WEBPACK_IMPORTED_MODULE_4__["DASH"])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_table_validation_cell__WEBPACK_IMPORTED_MODULE_5__["ValidationCell"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, expressionsLabel),
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, fieldsLabel))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify(true) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"], { options: getActions(obj, vmLikeEntity, onEdit, onDelete), isDisabled: isDisabled || Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_2__["isVMI"])(vmLikeEntity) }))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-table/affinity-table.tsx":
/*!**************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/components/affinity-table/affinity-table.tsx ***!
  \**************************************************************************************************************************************/
/*! exports provided: AffinityTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffinityTable", function() { return AffinityTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");




const AffinityTable = ({ data, customData, row: Row, columnClasses, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["Table"], { "aria-label": "Affinity List", data: data, Header: () => Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["dimensifyHeader"])([
            {
                title: 'Type',
                sortField: 'type',
                transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            },
            {
                title: 'Condition',
                sortField: 'condition',
                transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            },
            {
                title: 'Weight',
                sortField: 'weight',
                transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            },
            {
                title: 'Terms',
            },
            {
                title: '',
            },
        ], columnClasses), Row: Row, customData: Object.assign(Object.assign({}, customData), { columnClasses }), virtualize: true, loaded: true }));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/connected-affinity-modal.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/connected-affinity-modal.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _affinity_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./affinity-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/affinity-modal.tsx");
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







const FirehoseAffinityModal = (props) => {
    const { vmLikeEntity } = props, restProps = __rest(props, ["vmLikeEntity"]);
    const resources = [
        {
            kind: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["getVMLikeModel"])(vmLikeEntity).kind,
            name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity),
            namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity),
            prop: 'vmLikeEntityLoading',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["NodeModel"].kind,
            isList: true,
            namespaced: false,
            prop: 'nodes',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_affinity_modal__WEBPACK_IMPORTED_MODULE_6__["AffinityModal"], Object.assign({ vmLikeEntity: vmLikeEntity }, restProps))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(FirehoseAffinityModal));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/helpers.ts":
/*!****************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/helpers.ts ***!
  \****************************************************************************************************/
/*! exports provided: defaultNewAffinity, columnClasses, getRowsDataFromAffinity, getAffinityFromRowsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNewAffinity", function() { return defaultNewAffinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnClasses", function() { return columnClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowsDataFromAffinity", function() { return getRowsDataFromAffinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAffinityFromRowsData", function() { return getAffinityFromRowsData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _selectors_affinity_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../selectors/affinity/selectors */ "./packages/kubevirt-plugin/src/selectors/affinity/selectors.ts");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");





const defaultNewAffinity = {
    type: 'nodeAffinity',
    condition: _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].required,
    expressions: [{ id: 0, key: '', values: [], operator: 'In' }],
    fields: [],
    topologyKey: 'kubernetes.io/hostname',
};
const columnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].columnClass,
];
const setIDsToEntity = (entity) => entity === null || entity === void 0 ? void 0 : entity.map((elm, i) => (Object.assign(Object.assign({}, elm), { id: i })));
const flattenExpressions = (arr) => arr === null || arr === void 0 ? void 0 : arr.map((aff) => {
    const affinityWithoutID = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](aff, 'id');
    return aff.operator === 'Exists' || aff.operator === 'DoesNotExist'
        ? Object.assign(Object.assign({}, affinityWithoutID), { values: [] }) : affinityWithoutID;
});
const getNodeAffinityRows = (nodeAffinity) => {
    const requiredTerms = Object(_selectors_affinity_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeAffinityRequiredTerms"])(nodeAffinity) || [];
    const preferredTerms = Object(_selectors_affinity_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeAffinityPreferredTerms"])(nodeAffinity) || [];
    const required = requiredTerms.map(({ matchExpressions, matchFields }, i) => ({
        id: `node-required-${i}`,
        type: 'nodeAffinity',
        condition: _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].required,
        expressions: setIDsToEntity(matchExpressions),
        fields: setIDsToEntity(matchFields),
    }));
    const preferred = preferredTerms.map(({ preference, weight }, i) => ({
        id: `node-preferred-${i}`,
        weight,
        type: 'nodeAffinity',
        condition: _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].preferred,
        expressions: setIDsToEntity(preference.matchExpressions),
        fields: setIDsToEntity(preference.matchFields),
    }));
    return [...required, ...preferred];
};
const getPodLikeAffinityRows = (podLikeAffinity, isAnti = false) => {
    const requiredTerms = Object(_selectors_affinity_selectors__WEBPACK_IMPORTED_MODULE_3__["getPodAffinityRequiredTerms"])(podLikeAffinity) || [];
    const preferredTerms = Object(_selectors_affinity_selectors__WEBPACK_IMPORTED_MODULE_3__["getPodAffinityPreferredTerms"])(podLikeAffinity) || [];
    const required = requiredTerms === null || requiredTerms === void 0 ? void 0 : requiredTerms.map((podAffinityTerm, i) => {
        var _a;
        return ({
            id: isAnti ? `pod-anti-required-${i}` : `pod-required-${i}`,
            type: isAnti ? 'podAntiAffinity' : 'podAffinity',
            condition: _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].required,
            expressions: setIDsToEntity((_a = podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.labelSelector) === null || _a === void 0 ? void 0 : _a.matchExpressions),
            namespaces: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.namespaces,
            topologyKey: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.topologyKey,
        });
    });
    const preferred = preferredTerms === null || preferredTerms === void 0 ? void 0 : preferredTerms.map(({ podAffinityTerm, weight }, i) => {
        var _a;
        return ({
            id: isAnti ? `pod-anti-preferred-${i}` : `pod-preferred-${i}`,
            type: isAnti ? 'podAntiAffinity' : 'podAffinity',
            condition: _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].preferred,
            weight,
            expressions: setIDsToEntity((_a = podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.labelSelector) === null || _a === void 0 ? void 0 : _a.matchExpressions),
            namespaces: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.namespaces,
            topologyKey: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.topologyKey,
        });
    });
    return [...required, ...preferred];
};
const getRowsDataFromAffinity = (affinity) => [
    ...getNodeAffinityRows(affinity === null || affinity === void 0 ? void 0 : affinity.nodeAffinity),
    ...getPodLikeAffinityRows(affinity === null || affinity === void 0 ? void 0 : affinity.podAffinity),
    ...getPodLikeAffinityRows(affinity === null || affinity === void 0 ? void 0 : affinity.podAntiAffinity, true),
];
const getRequiredNodeTermFromRowData = ({ expressions, fields, }) => ({
    matchExpressions: flattenExpressions(expressions),
    matchFields: flattenExpressions(fields),
});
const getPreferredNodeTermFromRowData = ({ weight, expressions, fields, }) => ({
    weight,
    preference: {
        matchExpressions: flattenExpressions(expressions),
        matchFields: flattenExpressions(fields),
    },
});
const getRequiredPodTermFromRowData = ({ expressions, topologyKey, }) => ({
    labelSelector: {
        matchExpressions: flattenExpressions(expressions),
    },
    topologyKey,
});
const getPreferredPodTermFromRowData = ({ weight, expressions, topologyKey, }) => ({
    weight,
    podAffinityTerm: {
        labelSelector: {
            matchExpressions: flattenExpressions(expressions),
        },
        topologyKey,
    },
});
const getAffinityFromRowsData = (affinityRows) => {
    if (affinityRows.length === 0) {
        return null;
    }
    const pickRows = (rowType, rowCondition, mapper) => affinityRows
        .filter(({ type, condition }) => type === rowType && condition === rowCondition)
        .map((rowData) => mapper(rowData));
    const affinity = {
        nodeAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: pickRows('nodeAffinity', _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].required, getRequiredNodeTermFromRowData),
            },
            preferredDuringSchedulingIgnoredDuringExecution: pickRows('nodeAffinity', _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].preferred, getPreferredNodeTermFromRowData),
        },
        podAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: pickRows('podAffinity', _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].required, getRequiredPodTermFromRowData),
            preferredDuringSchedulingIgnoredDuringExecution: pickRows('podAffinity', _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].preferred, getPreferredPodTermFromRowData),
        },
        podAntiAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: pickRows('podAntiAffinity', _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].required, getRequiredPodTermFromRowData),
            preferredDuringSchedulingIgnoredDuringExecution: pickRows('podAntiAffinity', _shared_consts__WEBPACK_IMPORTED_MODULE_4__["AFFINITY_CONDITIONS"].preferred, getPreferredPodTermFromRowData),
        },
    };
    return affinity;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/validations.ts":
/*!********************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/validations.ts ***!
  \********************************************************************************************************/
/*! exports provided: isWeightValid, isTermsInvalid, getTopologyKeyValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeightValid", function() { return isWeightValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTermsInvalid", function() { return isTermsInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyKeyValidation", function() { return getTopologyKeyValidation; });
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");

const isWeightValid = (focusedAffinity) => focusedAffinity.condition === _shared_consts__WEBPACK_IMPORTED_MODULE_0__["AFFINITY_CONDITIONS"].required ||
    (focusedAffinity.weight > 0 && focusedAffinity.weight <= 100);
const isTermsInvalid = (terms) => terms.some(({ key, values, operator }) => !key || ((operator === 'In' || operator === 'NotIn') && values.length === 0));
const getTopologyKeyValidation = ({ type, condition, topologyKey }) => {
    const topology = {
        isTopologyDisabled: false,
        isTopologyInvalid: false,
        topologyValidationMessage: '',
    };
    if (condition === _shared_consts__WEBPACK_IMPORTED_MODULE_0__["AFFINITY_CONDITIONS"].required) {
        if (type === 'podAffinity') {
            topology.topologyValidationMessage = 'Topology key must not be empty';
            topology.isTopologyInvalid = !topologyKey;
        }
        else {
            topology.isTopologyDisabled = true;
            topology.topologyValidationMessage = 'topologyKey is limited with current config';
        }
    }
    else if (type === 'podAntiAffinity') {
        topology.topologyValidationMessage = 'Empty topologyKey is interpreted as “all topologies”';
    }
    return topology;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/connected-dedicated-resources-modal.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/connected-dedicated-resources-modal.tsx ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _dedicated_resources_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dedicated-resources-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/dedicated-resources-modal.tsx");
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







const FirehoseDedicatedResourcesModal = (props) => {
    const { vmLikeEntity } = props, restProps = __rest(props, ["vmLikeEntity"]);
    const resources = [
        {
            kind: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["getVMLikeModel"])(vmLikeEntity).kind,
            name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity),
            namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity),
            prop: 'vmLikeEntityLoading',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["NodeModel"].kind,
            isList: true,
            namespaced: false,
            prop: 'nodes',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dedicated_resources_modal__WEBPACK_IMPORTED_MODULE_6__["DedicatedResourcesModal"], Object.assign({ vmLikeEntity: vmLikeEntity }, restProps))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(FirehoseDedicatedResourcesModal));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/dedicated-resources-modal.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/dedicated-resources-modal.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/dedicated-resources-modal.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/dedicated-resources-modal.tsx ***!
  \**********************************************************************************************************************************/
/*! exports provided: DedicatedResourcesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DedicatedResourcesModal", function() { return DedicatedResourcesModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _k8s_patches_vm_vm_cpu_patches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../k8s/patches/vm/vm-cpu-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-cpu-patches.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/use-collision-checker */ "./packages/kubevirt-plugin/src/hooks/use-collision-checker.ts");
/* harmony import */ var _shared_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/hooks */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/hooks.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/NodeChecker/node-checker */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.tsx");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _dedicated_resources_modal_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dedicated-resources-modal.scss */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/dedicated-resources-modal.scss");
/* harmony import */ var _dedicated_resources_modal_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_dedicated_resources_modal_scss__WEBPACK_IMPORTED_MODULE_14__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const DedicatedResourcesModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])(({ vmLikeEntity, vmLikeEntityLoading, nodes, close, handlePromise, inProgress, errorMessage, }) => {
    const vmLikeFinal = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getLoadedData"])(vmLikeEntityLoading, vmLikeEntity);
    const loadError = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getLoadError"])(nodes, _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["NodeModel"]);
    const isCurrentCPUPinned = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["isDedicatedCPUPlacement"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(vmLikeFinal));
    const qualifiedNodes = Object(_shared_hooks__WEBPACK_IMPORTED_MODULE_10__["useNodeQualifier"])(nodes, 'label', _shared_consts__WEBPACK_IMPORTED_MODULE_13__["DEDICATED_RESOURCES_LABELS"]);
    const [showCollisionAlert, reload] = Object(_hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_9__["useCollisionChecker"])(vmLikeFinal, (oldVM, newVM) => Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["isDedicatedCPUPlacement"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(oldVM)) === Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["isDedicatedCPUPlacement"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(newVM)));
    const [isPinned, setIsPinned] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](isCurrentCPUPinned);
    const onReload = () => {
        reload();
        setIsPinned(isCurrentCPUPinned);
    };
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isPinned !== isCurrentCPUPinned) {
            // eslint-disable-next-line promise/catch-or-return
            handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getVMLikeModel"])(vmLikeFinal), vmLikeFinal, yield Object(_k8s_patches_vm_vm_cpu_patches__WEBPACK_IMPORTED_MODULE_7__["getDedicatedCpuPatch"])(vmLikeFinal, isPinned))).then(close);
        }
        else {
            close();
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null, _shared_consts__WEBPACK_IMPORTED_MODULE_13__["DEDICATED_RESOURCES_MODAL_TITLE"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { className: "kubevirt-dedicated-resources__checkbox", label: "Schedule this workload with dedicated resources (guaranteed policy)", isChecked: isPinned, isDisabled: !Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isLoaded"])(nodes) || inProgress, onChange: (flag) => setIsPinned(flag), id: "dedicated-resources-checkbox" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { className: "kubevirt-dedicated-resources__helper-text", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].small },
                "Available only on Nodes with labels",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Label"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["NodeModel"].kind, name: "cpumanager", value: "true", expand: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_12__["NodeChecker"], { qualifiedNodes: qualifiedNodes })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], { id: "dedicated-resources", className: "kubevirt-dedicated-resources__footer", errorMessage: errorMessage, inProgress: !Object(_utils__WEBPACK_IMPORTED_MODULE_8__["isLoaded"])(nodes) || inProgress, isSimpleError: !!loadError, onSubmit: onSubmit, onCancel: close, submitButtonText: "Save", infoTitle: showCollisionAlert && 'Policy has been updated outside this flow.', infoMessage: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                "Saving these changes will override any policy previously saved.",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["ButtonVariant"].link, isInline: true, onClick: onReload }, "Reload Policy"),
                ".") })));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/connected-node-selector-modal.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/connected-node-selector-modal.tsx ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _node_selector_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node-selector-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/node-selector-modal.tsx");
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







const NodeSelectorModal = (props) => {
    const { vmLikeEntity } = props, restProps = __rest(props, ["vmLikeEntity"]);
    const resources = [
        {
            kind: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["getVMLikeModel"])(vmLikeEntity).kind,
            name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity),
            namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity),
            prop: 'vmLikeEntityLoading',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["NodeModel"].kind,
            isList: true,
            namespaced: false,
            prop: 'nodes',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_node_selector_modal__WEBPACK_IMPORTED_MODULE_6__["NSModal"], Object.assign({ vmLikeEntity: vmLikeEntity }, restProps))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(NodeSelectorModal));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/helpers.ts":
/*!*********************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/helpers.ts ***!
  \*********************************************************************************************************/
/*! exports provided: nodeSelectorToIDLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeSelectorToIDLabels", function() { return nodeSelectorToIDLabels; });
const nodeSelectorToIDLabels = (nodeSelector) => Object.entries(nodeSelector || {}).map(([key, value], id) => ({ id, key, value }));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/node-selector-header.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/node-selector-header.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: NodeSelectorHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeSelectorHeader", function() { return NodeSelectorHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _LabelsList_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LabelsList/consts */ "./packages/kubevirt-plugin/src/components/LabelsList/consts.ts");



const NodeSelectorHeader = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h4 }, _LabelsList_consts__WEBPACK_IMPORTED_MODULE_2__["LABEL_KEY"])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h4 }, _LabelsList_consts__WEBPACK_IMPORTED_MODULE_2__["LABEL_VALUE"]))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/node-selector-modal.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/node-selector-modal.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: NSModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NSModal", function() { return NSModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../selectors/vm-like/selectors */ "./packages/kubevirt-plugin/src/selectors/vm-like/selectors.ts");
/* harmony import */ var _k8s_patches_vm_vm_scheduling_patches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../k8s/patches/vm/vm-scheduling-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-scheduling-patches.ts");
/* harmony import */ var _shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/NodeChecker/node-checker */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.tsx");
/* harmony import */ var _shared_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/hooks */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/hooks.ts");
/* harmony import */ var _LabelsList_labels_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../LabelsList/labels-list */ "./packages/kubevirt-plugin/src/components/LabelsList/labels-list.tsx");
/* harmony import */ var _LabelsList_LabelRow_label_row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../LabelsList/LabelRow/label-row */ "./packages/kubevirt-plugin/src/components/LabelsList/LabelRow/label-row.tsx");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/helpers.ts");
/* harmony import */ var _hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../hooks/use-id-entities */ "./packages/kubevirt-plugin/src/hooks/use-id-entities.ts");
/* harmony import */ var _hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../hooks/use-collision-checker */ "./packages/kubevirt-plugin/src/hooks/use-collision-checker.ts");
/* harmony import */ var _node_selector_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node-selector-header */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/node-selector-header.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















const NSModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])(({ nodes, close, handlePromise, inProgress, errorMessage, vmLikeEntity, vmLikeEntityLoading, }) => {
    const vmLikeFinal = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getLoadedData"])(vmLikeEntityLoading, vmLikeEntity);
    const loadError = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getLoadError"])(nodes, _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NodeModel"]);
    const [selectorLabels, setSelectorLabels, onLabelAdd, onLabelChange, onLabelDelete,] = Object(_hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_18__["useIDEntities"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_17__["nodeSelectorToIDLabels"])(Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_10__["getVMLikeNodeSelector"])(vmLikeEntity)));
    const qualifiedNodes = Object(_shared_hooks__WEBPACK_IMPORTED_MODULE_13__["useNodeQualifier"])(nodes, 'label', selectorLabels);
    const [showCollisionAlert, reload] = Object(_hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_19__["useCollisionChecker"])(vmLikeFinal, (oldVM, newVM) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_10__["getVMLikeNodeSelector"])(oldVM), Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_10__["getVMLikeNodeSelector"])(newVM)));
    const onSelectorLabelAdd = () => onLabelAdd({ id: null, key: '', value: '' });
    const onReload = () => {
        reload();
        setSelectorLabels(Object(_helpers__WEBPACK_IMPORTED_MODULE_17__["nodeSelectorToIDLabels"])(Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_10__["getVMLikeNodeSelector"])(vmLikeFinal)));
    };
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        const k8sSelector = selectorLabels.reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
        }, {});
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_10__["getVMLikeNodeSelector"])(vmLikeFinal), k8sSelector)) {
            // eslint-disable-next-line promise/catch-or-return
            handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_9__["getVMLikeModel"])(vmLikeFinal), vmLikeFinal, yield Object(_k8s_patches_vm_vm_scheduling_patches__WEBPACK_IMPORTED_MODULE_11__["getNodeSelectorPatches"])(vmLikeFinal, k8sSelector))).then(close);
        }
        else {
            close();
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null, _shared_consts__WEBPACK_IMPORTED_MODULE_16__["NODE_SELECTOR_MODAL_TITLE"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelsList_labels_list__WEBPACK_IMPORTED_MODULE_14__["LabelsList"], { isEmpty: selectorLabels.length === 0, kind: "Node", onLabelAdd: onSelectorLabelAdd }, selectorLabels.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_node_selector_header__WEBPACK_IMPORTED_MODULE_20__["NodeSelectorHeader"], { key: "label-title-row" }),
                selectorLabels.map((label) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelsList_LabelRow_label_row__WEBPACK_IMPORTED_MODULE_15__["LabelRow"], { key: label.id, label: label, onChange: onLabelChange, onDelete: onLabelDelete })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_12__["NodeChecker"], { qualifiedNodes: qualifiedNodes })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], { id: "node-selector", errorMessage: errorMessage, inProgress: !Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])(nodes) || inProgress, isSimpleError: !!loadError, onSubmit: onSubmit, onCancel: close, submitButtonText: "Save", infoTitle: showCollisionAlert && 'Node Selector has been updated outside this flow.', infoMessage: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                "Saving these changes will override any Node Selector previously saved.",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ButtonVariant"].link, isInline: true, onClick: onReload }, "Reload Node Selector"),
                ".") })));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.scss":
/*!***************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.tsx":
/*!**************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.tsx ***!
  \**************************************************************************************************************/
/*! exports provided: NodeChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeChecker", function() { return NodeChecker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _node_checker_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node-checker.scss */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.scss");
/* harmony import */ var _node_checker_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_checker_scss__WEBPACK_IMPORTED_MODULE_5__);






const NodeChecker = ({ qualifiedNodes, wariningTitle, warningMessage, }) => {
    const size = qualifiedNodes.length;
    const buttonText = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["pluralize"])(size, 'Node');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { className: "kv-node-checker", variant: size > 0 ? 'success' : 'warning', isInline: true, title: size > 0
            ? Object(_consts__WEBPACK_IMPORTED_MODULE_4__["SCHEDULING_NODES_MATCH_TEXT"])(size)
            : wariningTitle || _consts__WEBPACK_IMPORTED_MODULE_4__["SCHEDULING_NO_NODES_MATCH_TEXT"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], { headerContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                buttonText,
                " found"), position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].right, className: "kv-node-checker__popover", bodyContent: qualifiedNodes.map((node) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"], { key: Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(node), href: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePath"])('Node', Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(node)), text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceLink"], { linkTo: false, kind: "Node", name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(node) }) }))) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { isInline: true, isDisabled: size === 0, variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h4 }, size > 0
                    ? Object(_consts__WEBPACK_IMPORTED_MODULE_4__["SCHEDULING_NODES_MATCH_BUTTON_TEXT"])(size)
                    : warningMessage || _consts__WEBPACK_IMPORTED_MODULE_4__["SCHEDULING_NO_NODES_MATCH_BUTTON_TEXT"])))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts ***!
  \*******************************************************************************************/
/*! exports provided: SCHEDULING_NODES_MATCH_TEXT, SCHEDULING_NODES_MATCH_BUTTON_TEXT, SCHEDULING_NO_NODES_MATCH_BUTTON_TEXT, SCHEDULING_NO_NODES_TAINTED_MATCH_BUTTON_TEXT, SCHEDULING_NO_NODES_MATCH_TEXT, SCHEDULING_NO_NODES_TAINTED_MATCH_TEXT, NODE_SELECTOR_MODAL_TITLE, DEDICATED_RESOURCES_LABELS, DEDICATED_RESOURCES_MODAL_TITLE, DEDICATED_RESOURCES_NOT_PINNED, DEDICATED_RESOURCES_PINNED, TOLERATIONS_MODAL_TITLE, TOLERATIONS_EFFECTS, AFFINITY_MODAL_TITLE, AFFINITY_CREATE, AFFINITY_EDITING, AFFINITY_CONDITION_LABELS, AFFINITY_CONDITIONS, AFFINITY_TYPE_LABLES, EXPRESSION_OPERATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULING_NODES_MATCH_TEXT", function() { return SCHEDULING_NODES_MATCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULING_NODES_MATCH_BUTTON_TEXT", function() { return SCHEDULING_NODES_MATCH_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULING_NO_NODES_MATCH_BUTTON_TEXT", function() { return SCHEDULING_NO_NODES_MATCH_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULING_NO_NODES_TAINTED_MATCH_BUTTON_TEXT", function() { return SCHEDULING_NO_NODES_TAINTED_MATCH_BUTTON_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULING_NO_NODES_MATCH_TEXT", function() { return SCHEDULING_NO_NODES_MATCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULING_NO_NODES_TAINTED_MATCH_TEXT", function() { return SCHEDULING_NO_NODES_TAINTED_MATCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_SELECTOR_MODAL_TITLE", function() { return NODE_SELECTOR_MODAL_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEDICATED_RESOURCES_LABELS", function() { return DEDICATED_RESOURCES_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEDICATED_RESOURCES_MODAL_TITLE", function() { return DEDICATED_RESOURCES_MODAL_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEDICATED_RESOURCES_NOT_PINNED", function() { return DEDICATED_RESOURCES_NOT_PINNED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEDICATED_RESOURCES_PINNED", function() { return DEDICATED_RESOURCES_PINNED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOLERATIONS_MODAL_TITLE", function() { return TOLERATIONS_MODAL_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOLERATIONS_EFFECTS", function() { return TOLERATIONS_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFFINITY_MODAL_TITLE", function() { return AFFINITY_MODAL_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFFINITY_CREATE", function() { return AFFINITY_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFFINITY_EDITING", function() { return AFFINITY_EDITING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFFINITY_CONDITION_LABELS", function() { return AFFINITY_CONDITION_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFFINITY_CONDITIONS", function() { return AFFINITY_CONDITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFFINITY_TYPE_LABLES", function() { return AFFINITY_TYPE_LABLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPRESSION_OPERATORS", function() { return EXPRESSION_OPERATORS; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");

// Node Checker
const pluralNode = (size) => Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["pluralize"])(size, 'node', 'nodes', false);
const SCHEDULING_NODES_MATCH_TEXT = (nodeAmount) => `${nodeAmount} matching ${pluralNode(nodeAmount)} found`;
const SCHEDULING_NODES_MATCH_BUTTON_TEXT = (nodeAmount) => `View ${nodeAmount} matching ${pluralNode(nodeAmount)}`;
const SCHEDULING_NO_NODES_MATCH_BUTTON_TEXT = 'Scheduling will not be possible at this state';
const SCHEDULING_NO_NODES_TAINTED_MATCH_BUTTON_TEXT = 'No new nodes will be added to scheduler';
const SCHEDULING_NO_NODES_MATCH_TEXT = 'No matching nodes found for the labels';
const SCHEDULING_NO_NODES_TAINTED_MATCH_TEXT = 'No matching tainted nodes found';
// Node Selector
const NODE_SELECTOR_MODAL_TITLE = 'Node Selector';
// Dedicated Resources
const DEDICATED_RESOURCES_LABELS = [{ id: null, key: 'cpumanager', value: 'true' }];
const DEDICATED_RESOURCES_MODAL_TITLE = 'Dedicated Resources';
const DEDICATED_RESOURCES_NOT_PINNED = 'No Dedicated resources applied';
const DEDICATED_RESOURCES_PINNED = 'Workload scheduled with dedicated resources (guaranteed policy)';
// Tolerations Modal
const TOLERATIONS_MODAL_TITLE = 'Tolerations';
const TOLERATIONS_EFFECTS = ['NoSchedule', 'PreferNoSchedule', 'NoExecute'];
// Affinity Modal
const AFFINITY_MODAL_TITLE = 'Affinity Rules';
const AFFINITY_CREATE = 'New Affinity';
const AFFINITY_EDITING = 'Edit Affinity';
const AFFINITY_CONDITION_LABELS = {
    preferredDuringSchedulingIgnoredDuringExecution: 'Preferred during scheduling',
    requiredDuringSchedulingIgnoredDuringExecution: 'Required during scheduling',
};
const AFFINITY_CONDITIONS = {
    preferred: 'preferredDuringSchedulingIgnoredDuringExecution',
    required: 'requiredDuringSchedulingIgnoredDuringExecution',
};
const AFFINITY_TYPE_LABLES = {
    nodeAffinity: 'Node Affinity',
    podAffinity: 'Workload (pod) Affinity',
    podAntiAffinity: 'Workload (pod) Anti-Affinity',
};
const EXPRESSION_OPERATORS = ['In', 'NotIn', 'Exists', 'DoesNotExist'];


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/hooks.ts":
/*!******************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/hooks.ts ***!
  \******************************************************************************************/
/*! exports provided: useNodeQualifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNodeQualifier", function() { return useNodeQualifier; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");




const withOperatorPredicate = (store, label) => {
    const { key, value, values, operator } = label;
    const hasMultiple = !!values;
    switch (operator) {
        case 'Exists':
            return lodash__WEBPACK_IMPORTED_MODULE_1__["has"](store, key);
        case 'DoesNotExist':
            return !lodash__WEBPACK_IMPORTED_MODULE_1__["has"](store, key);
        case 'In':
            return !hasMultiple
                ? lodash__WEBPACK_IMPORTED_MODULE_1__["get"](store, key) === value
                : values.some((singleValue) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](store, key) === singleValue);
        case 'NotIn':
            return !hasMultiple
                ? lodash__WEBPACK_IMPORTED_MODULE_1__["get"](store, key) === value
                : values.every((singleValue) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](store, key) !== singleValue);
        default:
            return value ? lodash__WEBPACK_IMPORTED_MODULE_1__["get"](store, key) === value : lodash__WEBPACK_IMPORTED_MODULE_1__["has"](store, key);
    }
};
const useNodeQualifier = (nodes, constraintType, constraints) => {
    const loadedNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getLoadedData"])(nodes, []);
    const isNodesLoaded = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isLoaded"])(nodes);
    const [qualifiedNodes, setQualifiedNodes] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const filteredConstraints = constraints.filter(({ key }) => !!key);
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](filteredConstraints) && isNodesLoaded) {
            const filteredNodes = [];
            loadedNodes.forEach((node) => {
                if (constraintType === 'label') {
                    const nodeLabels = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getLabels"])(node);
                    if (nodeLabels &&
                        filteredConstraints.every((label) => withOperatorPredicate(nodeLabels, label))) {
                        filteredNodes.push(node);
                    }
                }
                if (constraintType === 'field' &&
                    filteredConstraints.every((field) => withOperatorPredicate(node, field))) {
                    filteredNodes.push(node);
                }
                if (constraintType === 'taint') {
                    const nodeTaints = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getNodeTaints"])(node);
                    if (nodeTaints &&
                        filteredConstraints.every(({ key, value, effect }) => nodeTaints.some((taint) => taint.key === key && (!value || taint.value === value) && taint.effect === effect))) {
                        filteredNodes.push(node);
                    }
                }
            });
            setQualifiedNodes(filteredNodes);
        }
    }, [constraintType, constraints, loadedNodes, isNodesLoaded]);
    return qualifiedNodes;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/scheduling-modals.scss":
/*!********************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/scheduling-modals.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/connected-tolerations-modal.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/connected-tolerations-modal.tsx ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _tolerations_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tolerations-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/tolerations-modal.tsx");
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







const TolerationsModal = (props) => {
    const { vmLikeEntity } = props, restProps = __rest(props, ["vmLikeEntity"]);
    const resources = [
        {
            kind: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["getVMLikeModel"])(vmLikeEntity).kind,
            name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getName"])(vmLikeEntity),
            namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNamespace"])(vmLikeEntity),
            prop: 'vmLikeEntityLoading',
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["NodeModel"].kind,
            isList: true,
            namespaced: false,
            prop: 'nodes',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tolerations_modal__WEBPACK_IMPORTED_MODULE_6__["TModal"], Object.assign({ vmLikeEntity: vmLikeEntity }, restProps))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(TolerationsModal));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/toleration-header.tsx":
/*!******************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/toleration-header.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: TolerationHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TolerationHeader", function() { return TolerationHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _LabelsList_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LabelsList/consts */ "./packages/kubevirt-plugin/src/components/LabelsList/consts.ts");



const TolerationHeader = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h4 }, _LabelsList_consts__WEBPACK_IMPORTED_MODULE_2__["LABEL_TAINT_KEY"])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h4 }, _LabelsList_consts__WEBPACK_IMPORTED_MODULE_2__["LABEL_VALUE"])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], { component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h4 }, "Effect"))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/toleration-row.tsx":
/*!***************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/toleration-row.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: TolerationRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TolerationRow", function() { return TolerationRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");




const TolerationRow = ({ label, onChange, onDelete }) => {
    const { id, key, value, effect } = label;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: `toleration-${id}-key-input`, className: "kv-label__key", placeholder: "taint key", isRequired: true, type: "text", value: key, onChange: (newKey) => onChange(Object.assign(Object.assign({}, label), { key: newKey })), "aria-label": "selector key" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: `toleration-${id}-value-input`, className: "kv-label__value", placeholder: "taint value", isRequired: true, type: "text", value: value, onChange: (newValue) => onChange(Object.assign(Object.assign({}, label), { value: newValue })), "aria-label": "selector value" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 3 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { id: `toleration-${id}-effect-select`, className: "kv-label__effect", isRequired: true, value: effect, onChange: (v) => onChange(Object.assign(Object.assign({}, label), { effect: v })), "aria-label": "selector effect" }, _shared_consts__WEBPACK_IMPORTED_MODULE_3__["TOLERATIONS_EFFECTS"].map((effectOption) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: effectOption, value: effectOption, label: effectOption }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: 1 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `toleration-${id}-delete-btn`, onClick: () => onDelete(id), variant: "plain" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["MinusCircleIcon"], null)))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/tolerations-modal.tsx":
/*!******************************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/tolerations-modal.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: TModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TModal", function() { return TModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../selectors/vm-like/selectors */ "./packages/kubevirt-plugin/src/selectors/vm-like/selectors.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/NodeChecker/node-checker */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/NodeChecker/node-checker.tsx");
/* harmony import */ var _shared_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/hooks */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/hooks.ts");
/* harmony import */ var _k8s_patches_vm_vm_scheduling_patches__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../k8s/patches/vm/vm-scheduling-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-scheduling-patches.ts");
/* harmony import */ var _LabelsList_labels_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../LabelsList/labels-list */ "./packages/kubevirt-plugin/src/components/LabelsList/labels-list.tsx");
/* harmony import */ var _shared_consts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../hooks/use-id-entities */ "./packages/kubevirt-plugin/src/hooks/use-id-entities.ts");
/* harmony import */ var _hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../hooks/use-collision-checker */ "./packages/kubevirt-plugin/src/hooks/use-collision-checker.ts");
/* harmony import */ var _toleration_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./toleration-row */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/toleration-row.tsx");
/* harmony import */ var _toleration_header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./toleration-header */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/toleration-header.tsx");
/* harmony import */ var _shared_scheduling_modals_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/scheduling-modals.scss */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/scheduling-modals.scss");
/* harmony import */ var _shared_scheduling_modals_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_shared_scheduling_modals_scss__WEBPACK_IMPORTED_MODULE_20__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















const TModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])(({ nodes, close, handlePromise, inProgress, errorMessage, vmLikeEntity, vmLikeEntityLoading, }) => {
    var _a;
    const vmLikeFinal = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getLoadedData"])(vmLikeEntityLoading, vmLikeEntity);
    const loadError = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getLoadError"])(nodes, _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NodeModel"]);
    const [tolerationsLabels, setTolerationsLabels, onLabelAdd, onLabelChange, onLabelDelete,] = Object(_hooks_use_id_entities__WEBPACK_IMPORTED_MODULE_16__["useIDEntities"])((_a = Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_9__["getVMLikeTolerations"])(vmLikeEntity)) === null || _a === void 0 ? void 0 : _a.map((toleration, id) => (Object.assign(Object.assign({}, toleration), { id }))));
    const qualifiedNodes = Object(_shared_hooks__WEBPACK_IMPORTED_MODULE_12__["useNodeQualifier"])(nodes, 'taint', tolerationsLabels);
    const [showCollisionAlert, reload] = Object(_hooks_use_collision_checker__WEBPACK_IMPORTED_MODULE_17__["useCollisionChecker"])(vmLikeFinal, (oldVM, newVM) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_9__["getVMLikeTolerations"])(oldVM), Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_9__["getVMLikeTolerations"])(newVM)));
    const onTolerationAdd = () => onLabelAdd({
        id: null,
        key: '',
        value: '',
        effect: _shared_consts__WEBPACK_IMPORTED_MODULE_15__["TOLERATIONS_EFFECTS"][0],
    });
    const onReload = () => {
        var _a;
        reload();
        setTolerationsLabels(((_a = Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_9__["getVMLikeTolerations"])(vmLikeFinal)) === null || _a === void 0 ? void 0 : _a.map((toleration, id) => (Object.assign(Object.assign({}, toleration), { id })))) || []);
    };
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        const k8sTolerations = tolerationsLabels.filter(({ key }) => !!key);
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](Object(_selectors_vm_like_selectors__WEBPACK_IMPORTED_MODULE_9__["getVMLikeTolerations"])(vmLikeFinal), k8sTolerations)) {
            // eslint-disable-next-line promise/catch-or-return
            handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_10__["getVMLikeModel"])(vmLikeFinal), vmLikeFinal, yield Object(_k8s_patches_vm_vm_scheduling_patches__WEBPACK_IMPORTED_MODULE_13__["getTolerationsPatch"])(vmLikeFinal, k8sTolerations))).then(close);
        }
        else {
            close();
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null, _shared_consts__WEBPACK_IMPORTED_MODULE_15__["TOLERATIONS_MODAL_TITLE"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "scheduling-modals__desc-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, 'Tolerations are applied to VMs, and allow (but do not require) the VMs to schedule onto nodes with matching taints.'),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], { className: "scheduling-modals__desc", component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].small }, 'Add tolerations to allow a VM to schedule onto nodes with matching taints.'),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { text: "Taints and Tolerations documentation", href: 'https://kubevirt.io/user-guide/#/usage/node-placement?id=taints-and-tolerations' })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelsList_labels_list__WEBPACK_IMPORTED_MODULE_14__["LabelsList"], { isEmpty: tolerationsLabels.length === 0, kind: "Node", onLabelAdd: onTolerationAdd, addRowText: "Add Toleration", emptyStateAddRowText: "Add Toleration to specify qualifying nodes" }, tolerationsLabels.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_toleration_header__WEBPACK_IMPORTED_MODULE_19__["TolerationHeader"], { key: "label-title-row" }),
                tolerationsLabels.map((label) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_toleration_row__WEBPACK_IMPORTED_MODULE_18__["TolerationRow"], { key: label.id, label: label, onChange: onLabelChange, onDelete: onLabelDelete })))))),
            tolerationsLabels.length > 0 && Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])(nodes) && !inProgress && !loadError && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shared_NodeChecker_node_checker__WEBPACK_IMPORTED_MODULE_11__["NodeChecker"], { qualifiedNodes: qualifiedNodes, wariningTitle: _shared_consts__WEBPACK_IMPORTED_MODULE_15__["SCHEDULING_NO_NODES_TAINTED_MATCH_TEXT"], warningMessage: _shared_consts__WEBPACK_IMPORTED_MODULE_15__["SCHEDULING_NO_NODES_TAINTED_MATCH_BUTTON_TEXT"] }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], { id: "tolerations", errorMessage: errorMessage, inProgress: !Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])(nodes) || inProgress, isSimpleError: !!loadError, onSubmit: onSubmit, onCancel: close, submitButtonText: "Save", infoTitle: showCollisionAlert && 'Tolerations has been updated outside this flow.', infoMessage: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                "Saving these changes will override any Tolerations previously saved.",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ButtonVariant"].link, isInline: true, onClick: onReload }, "Reload Tolerations"),
                ".") })));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/vm-description-modal/_vm-description-modal.scss":
/*!********************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/vm-description-modal/_vm-description-modal.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/vm-description-modal/index.ts":
/*!**************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/vm-description-modal/index.ts ***!
  \**************************************************************************************/
/*! exports provided: VMDescriptionModal, vmDescriptionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_description_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-description-modal */ "./packages/kubevirt-plugin/src/components/modals/vm-description-modal/vm-description-modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMDescriptionModal", function() { return _vm_description_modal__WEBPACK_IMPORTED_MODULE_0__["VMDescriptionModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmDescriptionModal", function() { return _vm_description_modal__WEBPACK_IMPORTED_MODULE_0__["vmDescriptionModal"]; });




/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/vm-description-modal/vm-description-modal.tsx":
/*!******************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/vm-description-modal/vm-description-modal.tsx ***!
  \******************************************************************************************************/
/*! exports provided: VMDescriptionModal, vmDescriptionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMDescriptionModal", function() { return VMDescriptionModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmDescriptionModal", function() { return vmDescriptionModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _k8s_patches_vm_vm_patches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../k8s/patches/vm/vm-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-patches.ts");
/* harmony import */ var _vm_description_modal_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_vm-description-modal.scss */ "./packages/kubevirt-plugin/src/components/modals/vm-description-modal/_vm-description-modal.scss");
/* harmony import */ var _vm_description_modal_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vm_description_modal_scss__WEBPACK_IMPORTED_MODULE_8__);








// TODO: should be moved under kubevirt-plugin/src/style.scss

const VMDescriptionModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    const { vmLikeEntity, inProgress, errorMessage, handlePromise, close, cancel } = props;
    const [description, setDescription] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_5__["getDescription"])(vmLikeEntity));
    const submit = (e) => {
        e.preventDefault();
        const patches = Object(_k8s_patches_vm_vm_patches__WEBPACK_IMPORTED_MODULE_7__["getUpdateDescriptionPatches"])(vmLikeEntity, description);
        if (patches.length === 0) {
            close();
        }
        else {
            const promise = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getVMLikeModel"])(vmLikeEntity), vmLikeEntity, patches);
            handlePromise(promise).then(close); // eslint-disable-line promise/catch-or-return
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, "Edit Description"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextArea"], { className: "kubevirt-vm-description-modal__description", value: description, onChange: (d) => setDescription(d), "aria-label": "description text area" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: inProgress, submitText: "Save", cancel: cancel })));
});
const vmDescriptionModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(VMDescriptionModal);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/vm-flavor-modal/index.ts":
/*!*********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/vm-flavor-modal/index.ts ***!
  \*********************************************************************************/
/*! exports provided: vmFlavorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_flavor_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-flavor-modal */ "./packages/kubevirt-plugin/src/components/modals/vm-flavor-modal/vm-flavor-modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmFlavorModal", function() { return _vm_flavor_modal__WEBPACK_IMPORTED_MODULE_0__["vmFlavorModal"]; });




/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/vm-flavor-modal/vm-flavor-modal.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/vm-flavor-modal/vm-flavor-modal.tsx ***!
  \********************************************************************************************/
/*! exports provided: vmFlavorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmFlavorModal", function() { return vmFlavorModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _k8s_patches_vm_vm_patches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../k8s/patches/vm/vm-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-patches.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _form_size_unit_form_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../form/size-unit-form-row */ "./packages/kubevirt-plugin/src/components/form/size-unit-form-row.tsx");
/* harmony import */ var _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../form/size-unit-utils */ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _form_form_row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../form/form-row */ "./packages/kubevirt-plugin/src/components/form/form-row.tsx");
/* harmony import */ var _form_integer_integer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../form/integer/integer */ "./packages/kubevirt-plugin/src/components/form/integer/integer.tsx");
/* harmony import */ var _utils_validations_vm_flavor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/validations/vm/flavor */ "./packages/kubevirt-plugin/src/utils/validations/vm/flavor.ts");
/* harmony import */ var _utils_validations_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils/validations/common */ "./packages/kubevirt-plugin/src/utils/validations/common.ts");
/* harmony import */ var _hooks_use_show_error_toggler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../hooks/use-show-error-toggler */ "./packages/kubevirt-plugin/src/hooks/use-show-error-toggler.ts");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../utils/strings */ "./packages/kubevirt-plugin/src/utils/strings.ts");
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utils/sort */ "./packages/kubevirt-plugin/src/utils/sort.ts");
/* harmony import */ var _selectors_vm_template_advanced__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../selectors/vm-template/advanced */ "./packages/kubevirt-plugin/src/selectors/vm-template/advanced.ts");
/* harmony import */ var _selectors_vm_template_selectors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../selectors/vm-template/selectors */ "./packages/kubevirt-plugin/src/selectors/vm-template/selectors.ts");
/* harmony import */ var _selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../selectors/vm-like/flavor */ "./packages/kubevirt-plugin/src/selectors/vm-like/flavor.ts");
























const getId = (field) => `vm-flavor-modal-${field}`;
const getAvailableFlavors = (template) => {
    const flavors = Object(_selectors_vm_template_advanced__WEBPACK_IMPORTED_MODULE_21__["getTemplateFlavors"])([template]).filter((f) => f && !Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_23__["isCustomFlavor"])(f));
    flavors.push(_constants__WEBPACK_IMPORTED_MODULE_9__["CUSTOM_FLAVOR"]);
    return lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"](Object(_utils_sort__WEBPACK_IMPORTED_MODULE_20__["flavorSort"])(flavors));
};
const VMFlavorModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    const { vmLike, template, errorMessage, handlePromise, close, cancel, loadError, loaded } = props;
    const inProgress = props.inProgress || !loaded;
    const vm = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["asVM"])(vmLike);
    const underlyingTemplate = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getLoadedData"])(template);
    const flavors = getAvailableFlavors(underlyingTemplate);
    const vmFlavor = Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_23__["toUIFlavor"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getFlavor"])(vmLike) || flavors[flavors.length - 1]);
    const [sourceMemSize, sourceMemUnit] = Object(_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["stringValueUnitSplit"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getMemory"])(vm) || '');
    const sourceCPURaw = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getCPU"])(vm);
    const sourceCPU = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["vCPUCount"])(sourceCPURaw);
    const [flavor, setFlavor] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](vmFlavor);
    const isCustom = Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_23__["isCustomFlavor"])(flavor);
    const [memSize, setMemSize] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](isCustom ? sourceMemSize || '' : '');
    const [memUnit, setMemUnit] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](isCustom ? sourceMemUnit || _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Gi : _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Gi);
    const [cpus, setCpus] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](isCustom ? `${sourceCPU}` : '');
    const { validations: { cpus: cpusValidation, memory: memoryValidation }, hasAllRequiredFilled, isValid, } = Object(_utils_validations_vm_flavor__WEBPACK_IMPORTED_MODULE_16__["validateFlavor"])({ cpus, memory: { size: memSize, unit: memUnit } }, { isCustomFlavor: isCustom });
    const [showUIError, setShowUIError] = Object(_hooks_use_show_error_toggler__WEBPACK_IMPORTED_MODULE_18__["useShowErrorToggler"])(false, isValid, isValid);
    const submit = (e) => {
        e.preventDefault();
        if (isValid) {
            const patches = Object(_k8s_patches_vm_vm_patches__WEBPACK_IMPORTED_MODULE_8__["getUpdateFlavorPatches"])(vmLike, underlyingTemplate, flavor, parseInt(cpus, 10), `${memSize}${memUnit}`);
            if (patches.length > 0) {
                const promise = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sPatch"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_7__["getVMLikeModel"])(vmLike), vmLike, patches);
                handlePromise(promise).then(close); // eslint-disable-line promise/catch-or-return
            }
            else {
                close();
            }
        }
        else {
            setShowUIError(true);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null, "Edit Flavor"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_14__["FormRow"], { title: "Flavor", fieldId: getId('flavor'), isRequired: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], { onChange: (f) => {
                            if (Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_23__["isCustomFlavor"])(f)) {
                                const isSourceCustom = Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_23__["isCustomFlavor"])(vmFlavor);
                                setMemSize(isSourceCustom ? sourceMemSize || '' : '');
                                setMemUnit(isSourceCustom ? sourceMemUnit || _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Gi : _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Gi);
                                setCpus(isSourceCustom ? `${sourceCPU}` : '');
                            }
                            setFlavor(f);
                        }, value: flavor, id: getId('flavor'), isDisabled: inProgress }, flavors.map((f) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormSelectOption"], { key: f, value: f, label: lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"](f) }))))),
                isCustom && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_form_row__WEBPACK_IMPORTED_MODULE_14__["FormRow"], { key: "cpu", title: "CPUs", fieldId: getId('cpu'), isRequired: true, validation: cpusValidation },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_integer_integer__WEBPACK_IMPORTED_MODULE_15__["Integer"], { isValid: !Object(_utils_validations_common__WEBPACK_IMPORTED_MODULE_17__["isValidationError"])(cpusValidation), isDisabled: inProgress, id: getId('cpu'), value: cpus, isPositive: true, onChange: (v) => setCpus(v), isFullWidth: true, "aria-label": "CPU count" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_size_unit_form_row__WEBPACK_IMPORTED_MODULE_11__["SizeUnitFormRow"], { title: "Memory", key: "memory", id: getId('memory'), size: memSize, unit: memUnit, units: [_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Mi, _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Gi, _form_size_unit_utils__WEBPACK_IMPORTED_MODULE_12__["BinaryUnit"].Ti], validation: memoryValidation, isDisabled: inProgress, isRequired: true, onSizeChanged: setMemSize, onUnitChanged: setMemUnit }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_13__["ModalFooter"], { id: "vm-flavor-modal", errorMessage: errorMessage || (loadError === null || loadError === void 0 ? void 0 : loadError.message) ||
                (showUIError ? Object(_utils_strings__WEBPACK_IMPORTED_MODULE_19__["getDialogUIError"])(hasAllRequiredFilled) : null), isSimpleError: showUIError, isDisabled: inProgress, inProgress: inProgress, onSubmit: submit, submitButtonText: "Save", onCancel: (e) => {
                e.stopPropagation();
                cancel();
            } })));
});
const VMFlavorModalFirehose = (props) => {
    const { vmLike } = props;
    const resources = [];
    const underlyingTemplate = Object(_selectors_vm_template_selectors__WEBPACK_IMPORTED_MODULE_22__["getVMTemplateNamespacedName"])(vmLike);
    if (underlyingTemplate) {
        resources.push({
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"].kind,
            model: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"],
            name: underlyingTemplate.name,
            namespace: underlyingTemplate.namespace,
            isList: false,
            prop: 'template',
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMFlavorModal, Object.assign({}, props))));
};
const vmFlavorModal = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(VMFlavorModalFirehose);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/modals/vm-status-modal/vm-status-modal.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/modals/vm-status-modal/vm-status-modal.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _modal_modal_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal-footer */ "./packages/kubevirt-plugin/src/components/modals/modal/modal-footer.tsx");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../k8s/requests/vmi/actions */ "./packages/kubevirt-plugin/src/k8s/requests/vmi/actions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const modalTitle = 'Edit pause state';
const VMStatusModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])(({ vmi, isOpen, setOpen, title = modalTitle, handlePromise, inProgress, errorMessage }) => {
    const [showPatchError, setPatchError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const promise = Object(_k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_5__["unpauseVMI"])(vmi);
        handlePromise(promise)
            .then(() => setOpen(false))
            .catch(() => setPatchError(true));
    });
    const footer = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal_modal_footer__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], { errorMessage: showPatchError && errorMessage, inProgress: inProgress, onSubmit: onSubmit, onCancel: () => setOpen(false), submitButtonText: "Unpause" }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], { title: title, isOpen: isOpen, isSmall: true, onClose: () => setOpen(false), footer: footer, isFooterLeftAligned: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, _constants_vm__WEBPACK_IMPORTED_MODULE_4__["PAUSED_VM_MODAL_MESSAGE"])));
});
/* harmony default export */ __webpack_exports__["default"] = (VMStatusModal);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/table/validation-cell.scss":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/table/validation-cell.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/table/validation-cell.tsx":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/table/validation-cell.tsx ***!
  \***************************************************************************/
/*! exports provided: ValidationCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationCell", function() { return ValidationCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _validation_cell_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-cell.scss */ "./packages/kubevirt-plugin/src/components/table/validation-cell.scss");
/* harmony import */ var _validation_cell_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_validation_cell_scss__WEBPACK_IMPORTED_MODULE_3__);




const ValidationCell = ({ children, validation }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        children,
        validation && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__({
                'kubevirt-validation-cell__cell--error': [
                    _console_shared__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorType"].Error,
                    _console_shared__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorType"].TrivialError,
                ].includes(validation.type),
                'kubevirt-validation-cell__cell--warning': validation.type === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorType"].Warn,
            }) }, validation.message))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vm-disks/disk-summary.scss":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vm-disks/disk-summary.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vm-disks/disk-summary.tsx":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vm-disks/disk-summary.tsx ***!
  \***************************************************************************/
/*! exports provided: DiskSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskSummary", function() { return DiskSummary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/vm/selectors */ "./packages/kubevirt-plugin/src/selectors/vm/selectors.ts");
/* harmony import */ var _modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/cdrom-vm-modal/constants */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/constants.ts");
/* harmony import */ var _disk_summary_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disk-summary.scss */ "./packages/kubevirt-plugin/src/components/vm-disks/disk-summary.scss");
/* harmony import */ var _disk_summary_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_disk_summary_scss__WEBPACK_IMPORTED_MODULE_4__);





const DiskSummary = ({ disks, vm }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "kubevirt-disk-summary" }, disks.map(({ name }) => {
    const container = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_2__["getContainerImageByDisk"])(vm, name);
    const pvc = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_2__["getPVCSourceByDisk"])(vm, name);
    const url = Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_2__["getURLSourceByDisk"])(vm, name);
    const nameKey = `kubevirt-disk-summary-disk-title-${name}`;
    let value = '';
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["WINTOOLS_CONTAINER_NAMES"], container)) {
        value = `Windows Tools: ${container}`;
    }
    else if (container) {
        value = `Container: ${container}`;
    }
    else if (url) {
        value = `URL: ${url}`;
    }
    else if (pvc) {
        value = `PVC: ${pvc}`;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: nameKey },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { id: nameKey, key: nameKey, className: "kubevirt-disk-summary__datalist-dt" }, name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { id: `${nameKey}-info`, key: `${nameKey}-info`, className: "kubevirt-disk-summary__datalist-dd" }, value)));
})));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vm-status/vm-status.scss":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vm-status/vm-status.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vm-status/vm-status.tsx":
/*!*************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vm-status/vm-status.tsx ***!
  \*************************************************************************/
/*! exports provided: VMStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMStatus", function() { return VMStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/status/icons */ "./packages/console-shared/src/components/status/icons.tsx");
/* harmony import */ var _console_shared_src_components_status_GenericStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/status/GenericStatus */ "./packages/console-shared/src/components/status/GenericStatus.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../k8s/requests/vmi/actions */ "./packages/kubevirt-plugin/src/k8s/requests/vmi/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/vm/vm-status */ "./packages/kubevirt-plugin/src/constants/vm/vm-status.ts");
/* harmony import */ var _vm_status_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vm-status.scss */ "./packages/kubevirt-plugin/src/components/vm-status/vm-status.scss");
/* harmony import */ var _vm_status_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_vm_status_scss__WEBPACK_IMPORTED_MODULE_13__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














const VMStatusPopoverContent = ({ message, children, progress, links, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    message,
    children && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kubevirt-vm-status__detail-section" }, children),
    progress != null && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kubevirt-vm-status__detail-section" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Progress"], { value: progress, variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ProgressVariant"].info, size: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ProgressSize"].sm }))),
    links &&
        links.map(({ to, message: linkMessage }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kubevirt-vm-status__detail-section", key: to },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], { to: to, title: linkMessage }, linkMessage || to))))));
const ImporterPods = ({ statuses }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, statuses && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, statuses.map(({ message, status, progress, pod, dataVolume }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(pod), className: "kubevirt-vm-status__detail-section" },
        `${status.getLabel()} (${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(dataVolume)})`,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { className: "kubevirt-vm-status__detail-small-section", kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PodModel"].kind, displayName: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(pod), name: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(pod), namespace: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(pod) }),
        dataVolume && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { className: "kubevirt-vm-status__detail-small-section", kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PersistentVolumeClaimModel"].kind, name: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(dataVolume), namespace: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(dataVolume) })),
        progress != null && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Progress"], { className: "kubevirt-vm-status__detail-small-section", value: progress, variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ProgressVariant"].info, size: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ProgressSize"].sm })),
        message && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kubevirt-vm-status__detail-small-section" }, message)));
})))));
const VIEW_POD_LOGS = 'View Pod logs';
const VIEW_VM_EVENTS = 'View VM events';
const getPodLink = (pod) => `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePath"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["PodModel"].kind, Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(pod), Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(pod))}`; // to default tab
const getVMILikeLink = (vmLike) => `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePath"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_11__["getVMLikeModel"])(vmLike).kind, Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(vmLike), Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(vmLike))}/${_constants__WEBPACK_IMPORTED_MODULE_10__["VM_DETAIL_EVENTS_HREF"]}`;
const VMStatus = ({ vm, vmi, vmStatusBundle }) => {
    const vmiLike = vm || vmi;
    const { status, pod, progress, importerPodsStatuses } = vmStatusBundle;
    const title = status.toString(); // TODO status.toVerboseString() should be called to pass to popup header
    const message = vmStatusBundle.message || vmStatusBundle.detailedMessage;
    const detailedMessage = vmStatusBundle.message ? vmStatusBundle.detailedMessage : null;
    const isPaused = status === _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_12__["VMStatus"].PAUSED;
    const links = [];
    if (vmiLike) {
        links.push({ to: getVMILikeLink(vmiLike), message: VIEW_VM_EVENTS });
    }
    if (pod) {
        links.push({ to: `${getPodLink(pod)}/logs`, message: VIEW_POD_LOGS });
    }
    let icon = _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["UnknownIcon"];
    if (isPaused) {
        icon = _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["PausedIcon"];
    }
    else if (status === _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_12__["VMStatus"].RUNNING) {
        icon = _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["SyncAltIcon"];
    }
    else if (status === _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_12__["VMStatus"].OFF) {
        icon = _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OffIcon"];
    }
    else if (status.isError()) {
        icon = _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_3__["RedExclamationCircleIcon"];
    }
    else if (status.isPending()) {
        // should be called before inProgress
        icon = _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["HourglassHalfIcon"];
    }
    else if (status.isInProgress()) {
        icon = _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["InProgressIcon"];
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_status_GenericStatus__WEBPACK_IMPORTED_MODULE_4__["default"], { title: title || _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_12__["VMStatus"].UNKNOWN.toString(), Icon: icon }, (message || isPaused) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMStatusPopoverContent, { key: "popover", message: message, links: links, progress: progress },
        isPaused && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { key: "unpause", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ButtonVariant"].primary, onClick: (event) => __awaiter(void 0, void 0, void 0, function* () {
                event.preventDefault();
                yield Object(_k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_9__["unpauseVMI"])(vmi);
            }), id: "paused-popover-submit" }, "Unpause")),
        detailedMessage,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImporterPods, { key: "importerPods", statuses: importerPodsStatuses })))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vm-templates/vm-template-link.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vm-templates/vm-template-link.tsx ***!
  \***********************************************************************************/
/*! exports provided: VMTemplateLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMTemplateLink", function() { return VMTemplateLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");




const VMTemplateLink = ({ name, namespace, uid }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceIcon"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["TemplateModel"].kind }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${namespace}/vmtemplates/${name}`, title: uid, "data-test-id": name, className: "co-resource-item__resource-name" }, name)));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vms/menu-actions.tsx":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vms/menu-actions.tsx ***!
  \**********************************************************************/
/*! exports provided: menuActionStart, menuActionDeleteVM, menuActionDeleteVMI, vmMenuActions, vmiMenuActions, vmImportMenuActions, vmMenuActionsCreator, vmiMenuActionsCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActionStart", function() { return menuActionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActionDeleteVM", function() { return menuActionDeleteVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActionDeleteVMI", function() { return menuActionDeleteVMI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmMenuActions", function() { return vmMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmiMenuActions", function() { return vmiMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmImportMenuActions", function() { return vmImportMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmMenuActionsCreator", function() { return vmMenuActionsCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmiMenuActionsCreator", function() { return vmiMenuActionsCreator; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors/vm/selectors */ "./packages/kubevirt-plugin/src/selectors/vm/selectors.ts");
/* harmony import */ var _selectors_vmi_migration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/vmi-migration */ "./packages/kubevirt-plugin/src/selectors/vmi-migration/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../k8s/requests/vm */ "./packages/kubevirt-plugin/src/k8s/requests/vm/index.ts");
/* harmony import */ var _k8s_requests_vmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../k8s/requests/vmi */ "./packages/kubevirt-plugin/src/k8s/requests/vmi/index.ts");
/* harmony import */ var _k8s_requests_vmim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../k8s/requests/vmim */ "./packages/kubevirt-plugin/src/k8s/requests/vmim/index.ts");
/* harmony import */ var _modals_clone_vm_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/clone-vm-modal */ "./packages/kubevirt-plugin/src/components/modals/clone-vm-modal/index.ts");
/* harmony import */ var _modals_cdrom_vm_modal_vm_cdrom_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/cdrom-vm-modal/vm-cdrom-modal */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/vm-cdrom-modal.tsx");
/* harmony import */ var _statuses_vm_vm_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../statuses/vm/vm-status */ "./packages/kubevirt-plugin/src/statuses/vm/vm-status.ts");
/* harmony import */ var _selectors_vmi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../selectors/vmi */ "./packages/kubevirt-plugin/src/selectors/vmi/index.ts");
/* harmony import */ var _k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../k8s/requests/vmi/actions */ "./packages/kubevirt-plugin/src/k8s/requests/vmi/actions.ts");
/* harmony import */ var _modals_delete_vm_like_entity_modal_delete_vm_like_entity_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modals/delete-vm-like-entity-modal/delete-vm-like-entity-modal */ "./packages/kubevirt-plugin/src/components/modals/delete-vm-like-entity-modal/delete-vm-like-entity-modal.tsx");

















const getActionMessage = (obj, action) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
    "Are you sure you want to ",
    action,
    " ",
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(obj)),
    " in namespace",
    ' ',
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNamespace"])(obj)),
    "?"));
const menuActionStart = (kindObj, vm, { vmStatusBundle }) => {
    var _a, _b;
    const title = 'Start Virtual Machine';
    return {
        hidden: ((_a = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _a === void 0 ? void 0 : _a.isImporting()) || ((_b = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _b === void 0 ? void 0 : _b.isMigrating()) ||
            Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMRunningOrExpectedRunning"])(vm),
        label: title,
        callback: () => Object(_k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["startVM"])(vm),
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vm, 'patch'),
    };
};
const menuActionStop = (kindObj, vm) => {
    const title = 'Stop Virtual Machine';
    return {
        hidden: !Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMExpectedRunning"])(vm),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__["confirmModal"])({
            title,
            message: getActionMessage(vm, _k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["VMActionType"].Stop),
            btnText: lodash__WEBPACK_IMPORTED_MODULE_0__["capitalize"](_k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["VMActionType"].Stop),
            executeFn: () => Object(_k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["stopVM"])(vm),
        }),
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vm, 'patch'),
    };
};
const menuActionRestart = (kindObj, vm, { vmStatusBundle }) => {
    var _a, _b;
    const title = 'Restart Virtual Machine';
    return {
        hidden: ((_a = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _a === void 0 ? void 0 : _a.isImporting()) || ((_b = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _b === void 0 ? void 0 : _b.isMigrating()) ||
            !Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMExpectedRunning"])(vm) ||
            !Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMCreated"])(vm),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__["confirmModal"])({
            title,
            message: getActionMessage(vm, _k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["VMActionType"].Restart),
            btnText: lodash__WEBPACK_IMPORTED_MODULE_0__["capitalize"](_k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["VMActionType"].Restart),
            executeFn: () => Object(_k8s_requests_vm__WEBPACK_IMPORTED_MODULE_8__["restartVM"])(vm),
        }),
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vm, 'patch'),
    };
};
const menuActionUnpause = (kindObj, vm, { vmi }) => {
    const title = 'Unpause Virtual Machine';
    return {
        hidden: !Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_14__["isVMIPaused"])(vmi),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__["confirmModal"])({
            title,
            message: getActionMessage(vmi, _k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_15__["VMIActionType"].Unpause),
            btnText: lodash__WEBPACK_IMPORTED_MODULE_0__["capitalize"](_k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_15__["VMIActionType"].Unpause),
            executeFn: () => Object(_k8s_requests_vmi_actions__WEBPACK_IMPORTED_MODULE_15__["unpauseVMI"])(vmi),
        }),
    };
};
const menuActionMigrate = (kindObj, vm, { vmStatusBundle, vmi }) => {
    var _a, _b;
    const title = 'Migrate Virtual Machine';
    return {
        hidden: ((_a = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _a === void 0 ? void 0 : _a.isImporting()) || ((_b = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _b === void 0 ? void 0 : _b.isMigrating()) ||
            !Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMExpectedRunning"])(vm) ||
            !Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMCreated"])(vm),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__["confirmModal"])({
            title,
            message: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                "Do you wish to migrate ",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(vmi)),
                " vmi to another node?")),
            btnText: 'Migrate',
            executeFn: () => Object(_k8s_requests_vmi__WEBPACK_IMPORTED_MODULE_9__["startVMIMigration"])(vmi),
        }),
    };
};
const menuActionCancelMigration = (kindObj, vm, { vmStatusBundle }) => {
    var _a;
    const title = 'Cancel Virtual Machine Migration';
    const migration = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.migration;
    return {
        hidden: !((_a = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _a === void 0 ? void 0 : _a.isMigrating()),
        label: title,
        callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__["confirmModal"])({
            title,
            message: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                "Are you sure you want to cancel ",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, Object(_selectors_vmi_migration__WEBPACK_IMPORTED_MODULE_6__["getMigrationVMIName"])(migration)),
                ' ',
                "migration in ",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNamespace"])(migration)),
                " namespace?")),
            btnText: 'Cancel Migration',
            executeFn: () => Object(_k8s_requests_vmim__WEBPACK_IMPORTED_MODULE_10__["cancelMigration"])(migration),
        }),
        accessReview: migration && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_7__["VirtualMachineInstanceMigrationModel"], migration, 'delete'),
    };
};
const menuActionClone = (kindObj, vm, { vmStatusBundle }) => {
    var _a;
    return {
        hidden: (_a = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _a === void 0 ? void 0 : _a.isImporting(),
        label: 'Clone Virtual Machine',
        callback: () => Object(_modals_clone_vm_modal__WEBPACK_IMPORTED_MODULE_11__["cloneVMModal"])({ vm }),
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vm, 'patch'),
    };
};
const menuActionCdEdit = (kindObj, vm, { vmStatusBundle }) => {
    var _a, _b;
    return {
        hidden: ((_a = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _a === void 0 ? void 0 : _a.isImporting()) || ((_b = vmStatusBundle === null || vmStatusBundle === void 0 ? void 0 : vmStatusBundle.status) === null || _b === void 0 ? void 0 : _b.isMigrating()) ||
            Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_5__["isVMRunningOrExpectedRunning"])(vm),
        label: 'Edit CD-ROMs',
        callback: () => Object(_modals_cdrom_vm_modal_vm_cdrom_modal__WEBPACK_IMPORTED_MODULE_12__["VMCDRomModal"])({ vmLikeEntity: vm, modalClassName: 'modal-lg' }),
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vm, 'patch'),
    };
};
const menuActionDeleteVM = (kindObj, vm) => ({
    label: `Delete ${kindObj.label}`,
    callback: () => Object(_modals_delete_vm_like_entity_modal_delete_vm_like_entity_modal__WEBPACK_IMPORTED_MODULE_16__["deleteVMLikeEntityModal"])({
        vmLikeEntity: vm,
    }),
    accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vm, 'delete'),
});
const menuActionDeleteVMI = (kindObj, vmi) => ({
    label: `Delete ${kindObj.label}`,
    callback: () => Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_4__["deleteModal"])({
        kind: kindObj,
        resource: vmi,
        redirectTo: `/k8s/ns/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNamespace"])(vmi)}/virtualization`,
    }),
    accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(kindObj, vmi, 'delete'),
});
const vmMenuActions = [
    menuActionStart,
    menuActionStop,
    menuActionRestart,
    menuActionUnpause,
    menuActionMigrate,
    menuActionCancelMigration,
    menuActionClone,
    menuActionCdEdit,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.ModifyLabels,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.ModifyAnnotations,
    menuActionDeleteVM,
];
const vmiMenuActions = [
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.ModifyLabels,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.ModifyAnnotations,
    menuActionDeleteVMI,
];
const vmImportMenuActions = [
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.ModifyLabels,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.ModifyAnnotations,
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Kebab"].factory.Delete,
];
const vmMenuActionsCreator = (kindObj, vm, { vmis, pods, migrations, vmImports, dataVolumes }) => {
    const vmi = vmis && vmis[0];
    const vmStatusBundle = Object(_statuses_vm_vm_status__WEBPACK_IMPORTED_MODULE_13__["getVMStatus"])({ vm, vmi, pods, migrations, dataVolumes, vmImports });
    return vmMenuActions.map((action) => {
        return action(kindObj, vm, { vmi, vmStatusBundle });
    });
};
const vmiMenuActionsCreator = (kindObj, vmi) => {
    return vmiMenuActions.map((action) => {
        return action(kindObj, vmi);
    });
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vms/vm-resource.scss":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vms/vm-resource.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vms/vm-resource.tsx":
/*!*********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vms/vm-resource.tsx ***!
  \*********************************************************************/
/*! exports provided: VMDetailsItem, VMResourceSummary, VMDetailsList, VMSchedulingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMDetailsItem", function() { return VMDetailsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMResourceSummary", function() { return VMResourceSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMDetailsList", function() { return VMDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMSchedulingList", function() { return VMSchedulingList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/selector */ "./public/components/utils/selector.tsx");
/* harmony import */ var _vm_templates_vm_template_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vm-templates/vm-template-link */ "./packages/kubevirt-plugin/src/components/vm-templates/vm-template-link.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals */ "./packages/kubevirt-plugin/src/components/modals/index.ts");
/* harmony import */ var _modals_cdrom_vm_modal_vm_cdrom_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/cdrom-vm-modal/vm-cdrom-modal */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/vm-cdrom-modal.tsx");
/* harmony import */ var _modals_boot_order_modal_boot_order_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/boot-order-modal/boot-order-modal */ "./packages/kubevirt-plugin/src/components/modals/boot-order-modal/boot-order-modal.tsx");
/* harmony import */ var _modals_scheduling_modals_dedicated_resources_modal_connected_dedicated_resources_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/scheduling-modals/dedicated-resources-modal/connected-dedicated-resources-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/dedicated-resources-modal/connected-dedicated-resources-modal.tsx");
/* harmony import */ var _modals_scheduling_modals_node_selector_modal_connected_node_selector_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/scheduling-modals/node-selector-modal/connected-node-selector-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/node-selector-modal/connected-node-selector-modal.tsx");
/* harmony import */ var _modals_scheduling_modals_tolerations_modal_connected_tolerations_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modals/scheduling-modals/tolerations-modal/connected-tolerations-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/tolerations-modal/connected-tolerations-modal.tsx");
/* harmony import */ var _modals_scheduling_modals_affinity_modal_connected_affinity_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/scheduling-modals/affinity-modal/connected-affinity-modal */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/connected-affinity-modal.tsx");
/* harmony import */ var _modals_scheduling_modals_affinity_modal_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modals/scheduling-modals/affinity-modal/helpers */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/affinity-modal/helpers.ts");
/* harmony import */ var _modals_vm_status_modal_vm_status_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals/vm-status-modal/vm-status-modal */ "./packages/kubevirt-plugin/src/components/modals/vm-status-modal/vm-status-modal.tsx");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../selectors/selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");
/* harmony import */ var _edit_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../edit-button */ "./packages/kubevirt-plugin/src/components/edit-button.tsx");
/* harmony import */ var _vm_status_vm_status__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vm-status/vm-status */ "./packages/kubevirt-plugin/src/components/vm-status/vm-status.tsx");
/* harmony import */ var _vm_disks_disk_summary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../vm-disks/disk-summary */ "./packages/kubevirt-plugin/src/components/vm-disks/disk-summary.tsx");
/* harmony import */ var _boot_order__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../boot-order */ "./packages/kubevirt-plugin/src/components/boot-order/index.tsx");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_vmi_ip_address__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../selectors/vmi/ip-address */ "./packages/kubevirt-plugin/src/selectors/vmi/ip-address.ts");
/* harmony import */ var _selectors_pod_selectors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../selectors/pod/selectors */ "./packages/kubevirt-plugin/src/selectors/pod/selectors.ts");
/* harmony import */ var _selectors_vmi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../selectors/vmi */ "./packages/kubevirt-plugin/src/selectors/vmi/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _k8s_wrapper_utils_convert__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../k8s/wrapper/utils/convert */ "./packages/kubevirt-plugin/src/k8s/wrapper/utils/convert.ts");
/* harmony import */ var _selectors_vm_template_selectors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../selectors/vm-template/selectors */ "./packages/kubevirt-plugin/src/selectors/vm-template/selectors.ts");
/* harmony import */ var _selectors_vm_flavor_text__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../selectors/vm/flavor-text */ "./packages/kubevirt-plugin/src/selectors/vm/flavor-text.ts");
/* harmony import */ var _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../modals/scheduling-modals/shared/consts */ "./packages/kubevirt-plugin/src/components/modals/scheduling-modals/shared/consts.ts");
/* harmony import */ var _vm_resource_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./vm-resource.scss */ "./packages/kubevirt-plugin/src/components/vms/vm-resource.scss");
/* harmony import */ var _vm_resource_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_vm_resource_scss__WEBPACK_IMPORTED_MODULE_30__);































const VMDetailsItem = ({ title, canEdit = false, editButtonId, onEditClick, idValue, isNotAvail = false, valueClassName, children, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null,
            title,
            " ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_edit_button__WEBPACK_IMPORTED_MODULE_17__["EditButton"], { id: editButtonId, canEdit: canEdit, onClick: onEditClick })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { id: idValue, className: valueClassName }, isNotAvail ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary" }, "Not available") : children)));
};
const VMResourceSummary = ({ vm, vmi, canUpdateVM, templates, kindObj, }) => {
    const isVM = kindObj === _models__WEBPACK_IMPORTED_MODULE_25__["VirtualMachineModel"];
    const vmiLike = isVM ? vm : vmi;
    const template = Object(_selectors_vm_template_selectors__WEBPACK_IMPORTED_MODULE_27__["getVMTemplate"])(vm, templates);
    const id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getBasicID"])(vmiLike);
    const description = Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_16__["getDescription"])(vmiLike);
    const os = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_21__["getOperatingSystemName"])(vmiLike) || Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_21__["getOperatingSystem"])(vmiLike);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceSummary"], { resource: vmiLike },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Description", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'description'), valueClassName: "kubevirt-vm-resource-summary__description" },
            !description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary" }, "Not available"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_edit_button__WEBPACK_IMPORTED_MODULE_17__["EditButton"], { canEdit: canUpdateVM, onClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["vmDescriptionModal"])({ vmLikeEntity: vmiLike }) }, description)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Operating System", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'os'), isNotAvail: !os }, os),
        isVM && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Template", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'template'), isNotAvail: !template }, template && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_vm_templates_vm_template_link__WEBPACK_IMPORTED_MODULE_5__["VMTemplateLink"], { name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(template), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(template) }))))));
};
const VMDetailsList = ({ vm, vmi, pods, vmStatusBundle, canUpdateVM, kindObj, }) => {
    const [isBootOrderModalOpen, setBootOrderModalOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const isVM = kindObj === _models__WEBPACK_IMPORTED_MODULE_25__["VirtualMachineModel"];
    const vmiLike = isVM ? vm : vmi;
    const vmiLikeWrapper = Object(_k8s_wrapper_utils_convert__WEBPACK_IMPORTED_MODULE_26__["asVMILikeWrapper"])(vmiLike);
    const canEdit = vmiLike &&
        canUpdateVM &&
        kindObj !== _models__WEBPACK_IMPORTED_MODULE_25__["VirtualMachineInstanceModel"] &&
        !Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_21__["isVMRunningOrExpectedRunning"])(vm);
    const [isStatusModalOpen, setStatusModalOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const launcherPod = Object(_selectors_pod_selectors__WEBPACK_IMPORTED_MODULE_23__["findVMIPod"])(vmi, pods);
    const id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getBasicID"])(vmiLike);
    const cds = (vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getCDROMs()) || [];
    const devices = (vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getLabeledDevices()) || [];
    const nodeName = Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_24__["getVMINodeName"])(vmi) || Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getNodeName"])(launcherPod);
    const ipAddrs = Object(_selectors_vmi_ip_address__WEBPACK_IMPORTED_MODULE_22__["getVmiIpAddresses"])(vmi).join(', ');
    const workloadProfile = vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getWorkloadProfile();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Status", canEdit: Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_24__["isVMIPaused"])(vmi), editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'status-edit'), onEditClick: () => setStatusModalOpen(true), idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'vm-statuses') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modals_vm_status_modal_vm_status_modal__WEBPACK_IMPORTED_MODULE_15__["default"], { isOpen: isStatusModalOpen, setOpen: setStatusModalOpen, vmi: vmi }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_vm_status_vm_status__WEBPACK_IMPORTED_MODULE_18__["VMStatus"], { vm: vm, vmi: vmi, vmStatusBundle: vmStatusBundle })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Pod", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'pod'), isNotAvail: !launcherPod }, launcherPod && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["PodModel"].kind, name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(launcherPod), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(launcherPod) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Boot Order", canEdit: canEdit, editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'boot-order-edit'), onEditClick: () => setBootOrderModalOpen(true), idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'boot-order') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modals_boot_order_modal_boot_order_modal__WEBPACK_IMPORTED_MODULE_9__["BootOrderModal"], { isOpen: isBootOrderModalOpen, setOpen: setBootOrderModalOpen, vmLikeEntity: vm }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_boot_order__WEBPACK_IMPORTED_MODULE_20__["BootOrderSummary"], { devices: devices })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "CD-ROMs", canEdit: canEdit, editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'cdrom-edit'), onEditClick: () => Object(_modals_cdrom_vm_modal_vm_cdrom_modal__WEBPACK_IMPORTED_MODULE_8__["VMCDRomModal"])({ vmLikeEntity: vm, modalClassName: 'modal-lg' }), idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'cdrom'), isNotAvail: cds.length === 0 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_vm_disks_disk_summary__WEBPACK_IMPORTED_MODULE_19__["DiskSummary"], { disks: cds, vm: vm })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "IP Address", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'ip-addresses'), isNotAvail: !launcherPod || !ipAddrs }, launcherPod && ipAddrs),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Node", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'node'), isNotAvail: !launcherPod || !nodeName }, launcherPod && nodeName && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["NodeLink"], { name: nodeName })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Workload Profile", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'workload-profile'), isNotAvail: !workloadProfile }, workloadProfile)));
};
const VMSchedulingList = ({ vm, vmi, canUpdateVM, kindObj, }) => {
    var _a;
    const isVM = kindObj === _models__WEBPACK_IMPORTED_MODULE_25__["VirtualMachineModel"];
    const vmiLike = isVM ? vm : vmi;
    const vmiLikeWrapper = Object(_k8s_wrapper_utils_convert__WEBPACK_IMPORTED_MODULE_26__["asVMILikeWrapper"])(vmiLike);
    const canEdit = vmiLike &&
        canUpdateVM &&
        kindObj !== _models__WEBPACK_IMPORTED_MODULE_25__["VirtualMachineInstanceModel"] &&
        !Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_21__["isVMRunningOrExpectedRunning"])(vm);
    const id = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getBasicID"])(vmiLike);
    const flavorText = Object(_selectors_vm_flavor_text__WEBPACK_IMPORTED_MODULE_28__["getFlavorText"])({
        memory: vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getMemory(),
        cpu: vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getCPU(),
        flavor: vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getFlavor(),
    });
    const isCPUPinned = vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.isDedicatedCPUPlacement();
    const nodeSelector = vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getNodeSelector();
    const tolerationsWrapperCount = ((vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getTolerations()) || []).length;
    const affinityWrapperCount = (_a = Object(_modals_scheduling_modals_affinity_modal_helpers__WEBPACK_IMPORTED_MODULE_14__["getRowsDataFromAffinity"])(vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getAffinity())) === null || _a === void 0 ? void 0 : _a.length;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { canEdit: canEdit, title: _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__["NODE_SELECTOR_MODAL_TITLE"], idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'node-selector'), editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'node-selector-edit'), onEditClick: () => Object(_modals_scheduling_modals_node_selector_modal_connected_node_selector_modal__WEBPACK_IMPORTED_MODULE_11__["default"])({ vmLikeEntity: vm, blocking: true }) },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_selector__WEBPACK_IMPORTED_MODULE_4__["Selector"], { kind: "Node", selector: nodeSelector })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { canEdit: canEdit, title: _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__["TOLERATIONS_MODAL_TITLE"], idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'tolerations'), editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'tolerations-edit'), onEditClick: () => Object(_modals_scheduling_modals_tolerations_modal_connected_tolerations_modal__WEBPACK_IMPORTED_MODULE_12__["default"])({
                        vmLikeEntity: vm,
                        blocking: true,
                        modalClassName: 'modal-lg',
                    }) }, tolerationsWrapperCount > 0 ? (`${tolerationsWrapperCount} Toleration rules`) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-muted" }, "No Toleration rules"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { canEdit: canEdit, title: _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__["AFFINITY_MODAL_TITLE"], idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'affinity'), editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'affinity-edit'), onEditClick: () => Object(_modals_scheduling_modals_affinity_modal_connected_affinity_modal__WEBPACK_IMPORTED_MODULE_13__["default"])({ vmLikeEntity: vm, blocking: true, modalClassName: 'modal-lg' }) }, affinityWrapperCount > 0 ? (`${affinityWrapperCount} Affinity rules`) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-muted" }, "No Affinity rules"))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: "Flavor", idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'flavor'), canEdit: canEdit, onEditClick: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["vmFlavorModal"])({ vmLike: vm, blocking: true }), editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'flavor-edit'), isNotAvail: !flavorText }, flavorText),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](VMDetailsItem, { title: _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__["DEDICATED_RESOURCES_MODAL_TITLE"], idValue: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'dedicated-resources'), canEdit: canEdit, onEditClick: () => Object(_modals_scheduling_modals_dedicated_resources_modal_connected_dedicated_resources_modal__WEBPACK_IMPORTED_MODULE_10__["default"])({ vmLikeEntity: vm, blocking: true }), editButtonId: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["prefixedID"])(id, 'dedicated-resources-edit') }, isCPUPinned ? _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__["DEDICATED_RESOURCES_PINNED"] : _modals_scheduling_modals_shared_consts__WEBPACK_IMPORTED_MODULE_29__["DEDICATED_RESOURCES_NOT_PINNED"])))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/constants/keys.ts":
/*!********************************************************!*\
  !*** ./packages/kubevirt-plugin/src/constants/keys.ts ***!
  \********************************************************/
/*! exports provided: KEY_CODES, INPUT_CTRL_COMBINATIONS_KEYS, INPUT_NAVIGATION_KEYS, isMinus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return KEY_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_CTRL_COMBINATIONS_KEYS", function() { return INPUT_CTRL_COMBINATIONS_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_NAVIGATION_KEYS", function() { return INPUT_NAVIGATION_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMinus", function() { return isMinus; });
const KEY_CODES = {
    BACKSPACE: 8,
    TAB: 9,
    SHIFT: 16,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    DELETE_KEY: 46,
    0: 48,
    1: 49,
    9: 57,
    NUMPAD: {
        0: 96,
        1: 97,
        9: 105,
        SUBTRACT: 109,
    },
    HYPHEN_MINUS: 173,
    MINUS: 189,
    A: 65,
    C: 67,
    V: 86,
    X: 88,
};
const INPUT_CTRL_COMBINATIONS_KEYS = [KEY_CODES.A, KEY_CODES.C, KEY_CODES.V, KEY_CODES.X];
const INPUT_NAVIGATION_KEYS = [
    KEY_CODES.BACKSPACE,
    KEY_CODES.TAB,
    KEY_CODES.SHIFT,
    KEY_CODES.LEFT_KEY,
    KEY_CODES.RIGHT_KEY,
    KEY_CODES.DELETE_KEY,
];
const isMinus = (keyCode) => {
    switch (keyCode) {
        case KEY_CODES.HYPHEN_MINUS:
        case KEY_CODES.MINUS:
        case KEY_CODES.NUMPAD.SUBTRACT:
            return true;
        default:
            return false;
    }
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/constants/sc.ts":
/*!******************************************************!*\
  !*** ./packages/kubevirt-plugin/src/constants/sc.ts ***!
  \******************************************************/
/*! exports provided: STORAGE_CLASS_CONFIG_MAP_NAME, STORAGE_CLASS_CONFIG_MAP_NAMESPACES, DEFAULT_SC_ANNOTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_CLASS_CONFIG_MAP_NAME", function() { return STORAGE_CLASS_CONFIG_MAP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_CLASS_CONFIG_MAP_NAMESPACES", function() { return STORAGE_CLASS_CONFIG_MAP_NAMESPACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SC_ANNOTATION", function() { return DEFAULT_SC_ANNOTATION; });
const STORAGE_CLASS_CONFIG_MAP_NAME = 'kubevirt-storage-class-defaults';
// Different releases, different locations. Respect the order when resolving. Otherwise the configMap name/namespace is considered as well-known.
const STORAGE_CLASS_CONFIG_MAP_NAMESPACES = [
    'openshift-cnv',
    'openshift',
    'kubevirt-native',
];
const DEFAULT_SC_ANNOTATION = 'storageclass.kubernetes.io/is-default-class';


/***/ }),

/***/ "./packages/kubevirt-plugin/src/constants/vm/provision-source.ts":
/*!***********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/constants/vm/provision-source.ts ***!
  \***********************************************************************/
/*! exports provided: ProvisionSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionSource", function() { return ProvisionSource; });
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _object_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object-enum */ "./packages/kubevirt-plugin/src/constants/object-enum.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modals/disk-modal/storage-ui-source */ "./packages/kubevirt-plugin/src/components/modals/disk-modal/storage-ui-source.ts");
/* harmony import */ var _k8s_wrapper_vm_volume_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../k8s/wrapper/vm/volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts");
/* harmony import */ var _k8s_wrapper_vm_data_volume_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../k8s/wrapper/vm/data-volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/data-volume-wrapper.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");
/* eslint-disable lines-between-class-members */







class ProvisionSource extends _object_enum__WEBPACK_IMPORTED_MODULE_1__["ObjectEnum"] {
}
ProvisionSource.PXE = new ProvisionSource('PXE');
ProvisionSource.CONTAINER = new ProvisionSource('Container');
ProvisionSource.URL = new ProvisionSource('URL');
ProvisionSource.DISK = new ProvisionSource('Disk');
ProvisionSource.ALL = Object.freeze(_object_enum__WEBPACK_IMPORTED_MODULE_1__["ObjectEnum"].getAllClassEnumProperties(ProvisionSource));
ProvisionSource.stringMapper = ProvisionSource.ALL.reduce((accumulator, provisionSource) => (Object.assign(Object.assign({}, accumulator), { [provisionSource.value]: provisionSource })), {});
ProvisionSource.getAll = () => ProvisionSource.ALL;
ProvisionSource.fromString = (source) => ProvisionSource.stringMapper[source];
ProvisionSource.getProvisionSourceDetails = (vmLikeEntity, { convertTemplateDataVolumesToAttachClonedDisk, dataVolumes, dataVolumeLookup, } = {}) => {
    const vm = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["asVM"])(vmLikeEntity);
    if (Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getInterfaces"])(vm).some((i) => i.bootOrder === 1)) {
        return {
            type: ProvisionSource.PXE,
        };
    }
    const bootDisk = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getDisks"])(vm).find((disk) => disk.bootOrder === 1);
    if (bootDisk) {
        const volume = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getVolumes"])(vm).find((vol) => vol.name === bootDisk.name);
        if (!volume) {
            return {
                error: 'No Volume has been found.',
            };
        }
        const volumeWrapper = new _k8s_wrapper_vm_volume_wrapper__WEBPACK_IMPORTED_MODULE_4__["VolumeWrapper"](volume);
        let dataVolumeWrapper;
        if (volumeWrapper.getType() === _storage__WEBPACK_IMPORTED_MODULE_6__["VolumeType"].DATA_VOLUME) {
            if (convertTemplateDataVolumesToAttachClonedDisk) {
                return {
                    type: ProvisionSource.DISK,
                    source: `${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getNamespace"])(vmLikeEntity)}/${volumeWrapper.getDataVolumeName()}`,
                };
            }
            let dataVolume;
            if (dataVolumeLookup) {
                dataVolume = dataVolumeLookup[Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getVolumeDataVolumeName"])(volume)];
            }
            if (!dataVolume) {
                const allDataVolumes = [...Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getDataVolumeTemplates"])(vm)];
                if (dataVolumes) {
                    allDataVolumes.push(...dataVolumes);
                }
                dataVolume = allDataVolumes.find((dv) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getName"])(dv) === Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getVolumeDataVolumeName"])(volume));
            }
            if (!dataVolume) {
                return {
                    error: `Datavolume ${volumeWrapper.getDataVolumeName()} does not exist.`,
                };
            }
            dataVolumeWrapper = new _k8s_wrapper_vm_data_volume_wrapper__WEBPACK_IMPORTED_MODULE_5__["DataVolumeWrapper"](dataVolume);
        }
        const type = _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].fromTypes(volumeWrapper.getType(), dataVolumeWrapper && dataVolumeWrapper.getType());
        switch (type) {
            case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].CONTAINER:
                return {
                    type: ProvisionSource.CONTAINER,
                    source: volumeWrapper.getContainerImage(),
                };
            case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].URL:
                return {
                    type: ProvisionSource.URL,
                    source: dataVolumeWrapper.getURL(),
                };
            case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].ATTACH_CLONED_DISK:
                return {
                    type: ProvisionSource.DISK,
                    source: `${dataVolumeWrapper.getPesistentVolumeClaimNamespace()}/${dataVolumeWrapper.getPesistentVolumeClaimName()}`,
                };
            case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].ATTACH_DISK:
                return {
                    type: ProvisionSource.DISK,
                    source: `${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getNamespace"])(vmLikeEntity)}/${volumeWrapper.getPersistentVolumeClaimName()}`,
                };
            case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].BLANK:
                return {
                    error: `Datavolume ${volumeWrapper.getDataVolumeName()} does not have a supported source (${type}).`,
                };
            default:
                return {
                    error: `Volume ${volumeWrapper.getName()} does not have a supported source.`,
                };
        }
    }
    return {
        error: 'No bootable device found.',
    };
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/storage-class-config-map.ts":
/*!************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/storage-class-config-map.ts ***!
  \************************************************************************/
/*! exports provided: useStorageClassConfigMap, useStorageClassConfigMapWrapped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorageClassConfigMap", function() { return useStorageClassConfigMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorageClassConfigMapWrapped", function() { return useStorageClassConfigMapWrapped; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_sc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/sc */ "./packages/kubevirt-plugin/src/constants/sc.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const useStorageClassConfigMap = () => {
    const [storageClassConfigMap, setStorageClassConfigMap] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](undefined);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](undefined);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        const controller = new AbortController();
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            for (const namespace of _constants_sc__WEBPACK_IMPORTED_MODULE_2__["STORAGE_CLASS_CONFIG_MAP_NAMESPACES"]) {
                try {
                    // eslint-disable-next-line no-await-in-loop
                    const configMap = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ConfigMapModel"], _constants_sc__WEBPACK_IMPORTED_MODULE_2__["STORAGE_CLASS_CONFIG_MAP_NAME"], namespace, {
                        signal: controller.signal,
                    });
                    if (configMap && !controller.signal.aborted) {
                        setStorageClassConfigMap(configMap);
                        return;
                    }
                }
                catch (e) {
                    if (controller.signal.aborted) {
                        return;
                    }
                }
            }
            if (!controller.signal.aborted) {
                setStorageClassConfigMap(null);
                const err = `Could not load storage class config map in following namespaces: ${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["joinGrammaticallyListOfItems"])(_constants_sc__WEBPACK_IMPORTED_MODULE_2__["STORAGE_CLASS_CONFIG_MAP_NAMESPACES"], 'or')}`;
                setError(err);
                // eslint-disable-next-line no-console
                console.warn(err);
            }
        });
        fetchData();
        return () => controller.abort();
    }, []);
    const isLoaded = storageClassConfigMap !== undefined;
    return react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => [storageClassConfigMap, isLoaded, error], [
        storageClassConfigMap,
        isLoaded,
        error,
    ]);
};
const useStorageClassConfigMapWrapped = () => {
    const [data, loaded, loadError] = useStorageClassConfigMap();
    return react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => ({
        loaded,
        loadError,
        data,
    }), [data, loaded, loadError]);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/use-collision-checker.ts":
/*!*********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/use-collision-checker.ts ***!
  \*********************************************************************/
/*! exports provided: useCollisionChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCollisionChecker", function() { return useCollisionChecker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react-hooks/exhaustive-deps */

const useCollisionChecker = (entity, isEqual) => {
    const [initialEntity, setInitialEntity] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](entity);
    const [showCollisionAlert, setCollisionAlert] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onReload = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        setInitialEntity(entity);
        setCollisionAlert(false);
    }, [entity]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!isEqual(initialEntity, entity)) {
            setCollisionAlert(true);
        }
    }, [initialEntity, entity]);
    return [showCollisionAlert, onReload];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/use-id-entities.ts":
/*!***************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/use-id-entities.ts ***!
  \***************************************************************/
/*! exports provided: useIDEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIDEntities", function() { return useIDEntities; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIDEntities = (initialEntities = []) => {
    const [entities, setEntities] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialEntities);
    const [initialEntitiesChanged, setInitialEntitiesChanged] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const onEntityAdd = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((newEntity) => {
        var _a;
        setInitialEntitiesChanged(true);
        const id = ((_a = entities[entities.length - 1]) === null || _a === void 0 ? void 0 : _a.id) + 1 || 0;
        setEntities([...entities, Object.assign(Object.assign({}, newEntity), { id })]);
    }, [entities]);
    const onEntityChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((updatedEntity) => {
        setInitialEntitiesChanged(true);
        setEntities(entities.map((entity) => {
            if (entity.id === updatedEntity.id) {
                return updatedEntity;
            }
            return entity;
        }));
    }, [entities]);
    const onEntityDelete = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((idToDelete) => {
        setInitialEntitiesChanged(true);
        setEntities(entities.filter(({ id }) => id !== idToDelete));
    }, [entities]);
    return [
        entities,
        setEntities,
        onEntityAdd,
        onEntityChange,
        onEntityDelete,
        initialEntitiesChanged,
    ];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/use-owned-volume-referenced-resources.ts":
/*!*************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/use-owned-volume-referenced-resources.ts ***!
  \*************************************************************************************/
/*! exports provided: useOwnedVolumeReferencedResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOwnedVolumeReferencedResources", function() { return useOwnedVolumeReferencedResources; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _k8s_wrapper_vm_volume_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../k8s/wrapper/vm/volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/utils/owner-references */ "./packages/console-shared/src/utils/owner-references.ts");
/* eslint-disable react-hooks/exhaustive-deps */






const useOwnedVolumeReferencedResources = (initialOwner, initialNamespace, volumes) => {
    const volumeOwner = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => initialOwner, []);
    const namespace = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => initialNamespace, []);
    const referencedObjectLookup = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => (volumes || []).reduce((acc, volume) => {
        const ref = new _k8s_wrapper_vm_volume_wrapper__WEBPACK_IMPORTED_MODULE_2__["VolumeWrapper"](volume).getReferencedObject();
        if (ref) {
            acc[volume.name] = ref;
        }
        return acc;
    }, {}), [volumes]);
    const resourceWatches = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => Object.keys(referencedObjectLookup).reduce((acc, volumeName) => {
        const ref = referencedObjectLookup[volumeName];
        acc[volumeName] = {
            name: ref.name,
            kind: ref.model.kind,
            namespace,
            isList: false,
        };
        return acc;
    }, {}), [namespace, referencedObjectLookup]);
    const results = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_3__["useK8sWatchResources"])(resourceWatches);
    let isLoaded = true;
    const ownedResources = Object.keys(results)
        .map((volumeName) => {
        var _a;
        const { data, loaded, loadError } = results[volumeName];
        if (!loaded || loadError) {
            if (((_a = loadError === null || loadError === void 0 ? void 0 : loadError.json) === null || _a === void 0 ? void 0 : _a.code) !== 404) {
                isLoaded = false;
            }
            return null;
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](data) &&
            (Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_4__["getOwnerReferences"])(data) || []).some((ownerReference) => Object(_console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_5__["compareOwnerReference"])(ownerReference, volumeOwner))) {
            const referencedObject = referencedObjectLookup[volumeName];
            return {
                model: referencedObject.model,
                resource: data,
            };
        }
        return null;
    })
        .filter((r) => r);
    return [ownedResources, isLoaded];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/use-show-error-toggler.ts":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/use-show-error-toggler.ts ***!
  \**********************************************************************/
/*! exports provided: useShowErrorToggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShowErrorToggler", function() { return useShowErrorToggler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useShowErrorToggler = (initialShowError = false, initialIsValid = false, checkIsValid) => {
    const [showError, setShowError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialShowError);
    const [prevIsValid, setPrevIsValid] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialIsValid);
    const checkValidity = (isValid) => {
        if (isValid !== prevIsValid) {
            setPrevIsValid(isValid);
            if (isValid) {
                setShowError(false);
            }
        }
    };
    if (checkIsValid != null) {
        checkValidity(checkIsValid);
    }
    return [showError, setShowError, checkValidity];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/use-virtual-machine-import.ts":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/use-virtual-machine-import.ts ***!
  \**************************************************************************/
/*! exports provided: useVirtualMachineImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVirtualMachineImport", function() { return useVirtualMachineImport; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _k8s_wrapper_vm_import_vm_import_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../k8s/wrapper/vm-import/vm-import-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm-import/vm-import-wrapper.ts");
/* harmony import */ var _k8s_wrapper_vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../k8s/wrapper/vm/vm-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vm-wrapper.ts");






const useVirtualMachineImport = (vm) => {
    const resourceWatch = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        if (!vm) {
            return null;
        }
        const vmImportOwnerReference = new _k8s_wrapper_vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_5__["VMWrapper"](vm).getVMImportOwnerReference();
        if (vmImportOwnerReference) {
            return {
                name: vmImportOwnerReference.name,
                kind: _models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineImportModel"].kind,
                namespace: Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(vm),
                isList: false,
            };
        }
        return {
            kind: _models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineImportModel"].kind,
            namespace: Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(vm),
            isList: true,
        };
    }, [vm]);
    const resourceWatchID = ((resourceWatch === null || resourceWatch === void 0 ? void 0 : resourceWatch.name) || '') + +':' + (resourceWatch === null || resourceWatch === void 0 ? void 0 : resourceWatch.namespace); // should be the unique identifier of a query
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const resourceWatchWithVMChangesMemoized = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => resourceWatch, [resourceWatchID]);
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__["useK8sWatchResource"])(resourceWatchWithVMChangesMemoized);
    if (!resourceWatch) {
        return [null, true];
    }
    let vmImport;
    if (resourceWatch.isList) {
        // eslint-disable-next-line prefer-destructuring
        vmImport = (data || [])
            .filter((vi) => new _k8s_wrapper_vm_import_vm_import_wrapper__WEBPACK_IMPORTED_MODULE_4__["VMImportWrappper"](vi).getResolvedVMTargetName() === Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getName"])(vm))
            .sort((a, b) => (Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getCreationTimestamp"])(a) > Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getCreationTimestamp"])(b) ? -1 : 1))[0];
    }
    else {
        vmImport = loadError ? null : data;
    }
    return [vmImport, loaded || !!loadError];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/hooks/use-vm-like-entity.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/hooks/use-vm-like-entity.ts ***!
  \******************************************************************/
/*! exports provided: useUpToDateVMLikeEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpToDateVMLikeEntity", function() { return useUpToDateVMLikeEntity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");




const useUpToDateVMLikeEntity = (vmLikeEntity) => {
    const vmName = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getName"])(vmLikeEntity);
    const namespace = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(vmLikeEntity);
    const model = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_3__["getVMLikeModel"])(vmLikeEntity);
    const resourceWatch = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        return {
            name: vmName,
            kind: model.kind,
            namespace,
            isList: false,
        };
    }, [model.kind, namespace, vmName]);
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__["useK8sWatchResource"])(resourceWatch);
    if (loadError) {
        return null;
    }
    if (!loaded) {
        return vmLikeEntity;
    }
    return data;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/helpers/vm-clone.ts":
/*!**************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/helpers/vm-clone.ts ***!
  \**************************************************************/
/*! exports provided: VMClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMClone", function() { return VMClone; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/pvc/selectors */ "./packages/kubevirt-plugin/src/selectors/pvc/selectors.ts");
/* harmony import */ var _objects_vm_datavolume_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/vm/datavolume-template */ "./packages/kubevirt-plugin/src/k8s/objects/vm/datavolume-template/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors/dv/selectors */ "./packages/kubevirt-plugin/src/selectors/dv/selectors.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _wrapper_vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrapper/vm/vm-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vm-wrapper.ts");








class VMClone {
    constructor(vm, values) {
        this.cleanVM = () => {
            const data = this.vm.asResource();
            const { metadata, spec } = data;
            if (metadata) {
                delete metadata.selfLink;
                delete metadata.resourceVersion;
                delete metadata.uid;
                delete metadata.creationTimestamp;
                delete metadata.generation;
            }
            if (spec.template.spec.domain) {
                delete spec.template.spec.domain.firmware;
            }
            delete data.status;
            spec.dataVolumeTemplates = [];
            this.vm.getNetworkInterfaces().forEach((intface) => delete intface.macAddress);
        };
        this.withClonedPVCs = (persistentVolumeClaimsToClone) => {
            const pvcLookup = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["createBasicLookup"])(persistentVolumeClaimsToClone, _utils__WEBPACK_IMPORTED_MODULE_1__["getBasicID"]);
            const name = this.vm.getName();
            this.vm
                .getVolumes()
                .filter(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getVolumePersistentVolumeClaimName"])
                .forEach((volume) => {
                const pvcName = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getVolumePersistentVolumeClaimName"])(volume);
                delete volume.persistentVolumeClaim;
                const pvc = pvcLookup[`${this.oldVMNamespace}-${pvcName}`];
                if (pvc) {
                    const clonedDVTemplate = new _objects_vm_datavolume_template__WEBPACK_IMPORTED_MODULE_3__["DataVolumeTemplate"]({
                        name: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["joinIDs"])(name, pvcName, 'clone'),
                        pvcSourceName: pvcName,
                        pvcSourceNamespace: this.oldVMNamespace,
                        accessModes: Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_2__["getPvcAccessModes"])(pvc),
                        volumeMode: Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_2__["getPvcVolumeMode"])(pvc),
                        size: Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_2__["getPvcStorageSize"])(pvc),
                        storageClassName: Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_2__["getPvcStorageClassName"])(pvc),
                    }).build();
                    this.vm.ensureDataVolumeTemplates().push(clonedDVTemplate);
                    volume.dataVolume = {
                        name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getName"])(clonedDVTemplate),
                    };
                }
            });
            return this;
        };
        this.withClonedDataVolumes = (dataVolumes) => {
            const dvLookup = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["createBasicLookup"])(dataVolumes, _utils__WEBPACK_IMPORTED_MODULE_1__["getBasicID"]);
            const name = this.vm.getName();
            this.vm
                .getVolumes()
                .filter(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getVolumeDataVolumeName"])
                .forEach((volume) => {
                const dvName = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getVolumeDataVolumeName"])(volume);
                const dataVolume = dvLookup[`${this.oldVMNamespace}-${dvName}`];
                if (dataVolume) {
                    const clonedDVTemplate = new _objects_vm_datavolume_template__WEBPACK_IMPORTED_MODULE_3__["DataVolumeTemplate"]({
                        name: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["joinIDs"])(name, dvName, 'clone'),
                        pvcSourceName: dvName,
                        pvcSourceNamespace: this.oldVMNamespace,
                        accessModes: Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeAccessModes"])(dataVolume),
                        volumeMode: Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeVolumeMode"])(dataVolume),
                        size: Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeStorageSize"])(dataVolume),
                        storageClassName: Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeStorageClassName"])(dataVolume),
                    }).build();
                    this.vm.ensureDataVolumeTemplates().push(clonedDVTemplate);
                    volume.dataVolume = {
                        name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getName"])(clonedDVTemplate),
                    };
                }
            });
            return this;
        };
        this.vm = new _wrapper_vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_7__["VMWrapper"](vm, true);
        this.oldVMNamespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getNamespace"])(vm);
        this.cleanVM();
        this.setValues(values);
    }
    setValues({ name, namespace, description, startVM = false }) {
        const data = this.vm.asResource();
        const osId = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getOperatingSystem"])(data);
        const osName = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getOperatingSystemName"])(data);
        this.vm.setName(name);
        this.vm.setNamespace(namespace);
        this.vm.setRunning(startVM);
        if (description) {
            this.vm.addAnotation(_constants_vm__WEBPACK_IMPORTED_MODULE_6__["ANNOTATION_DESCRIPTION"], description);
        }
        if (osId && osName) {
            this.vm.addAnotation(`${_constants_vm__WEBPACK_IMPORTED_MODULE_6__["TEMPLATE_OS_NAME_ANNOTATION"]}/${osId}`, osName);
        }
        this.vm.addTemplateLabel(_constants_vm__WEBPACK_IMPORTED_MODULE_6__["TEMPLATE_VM_NAME_LABEL"], name);
        return this;
    }
    build() {
        const result = this.vm.asResource(true);
        // in case withClonedPVCs was not called
        if (this.vm.getVolumes(null)) {
            result.spec.template.spec.volumes = result.spec.template.spec.volumes.filter((v) => !Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_4__["getVolumePersistentVolumeClaimName"])(v));
        }
        return result;
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/objects/vm/datavolume-template/index.ts":
/*!**********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/objects/vm/datavolume-template/index.ts ***!
  \**********************************************************************************/
/*! exports provided: DataVolumeTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVolumeTemplate", function() { return DataVolumeTemplate; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

/**
 * @deprecated FIXME deprecate in favor of DataVolumeWrapper
 */
class DataVolumeTemplate {
    constructor({ name, pvcSourceName, pvcSourceNamespace, accessModes, volumeMode, size, unit, storageClassName, }) {
        this.build = () => lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](this.data);
        this.data = {
            metadata: {
                name,
            },
            spec: {
                source: {
                    pvc: {
                        name: pvcSourceName,
                        namespace: pvcSourceNamespace,
                    },
                },
                pvc: {
                    accessModes: lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](accessModes),
                    volumeMode,
                    resources: {
                        requests: {
                            storage: size && unit ? `${size}${unit}` : size,
                        },
                    },
                    storageClassName,
                },
            },
        };
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/objects/vmi-migration/vmi-migration.ts":
/*!*********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/objects/vmi-migration/vmi-migration.ts ***!
  \*********************************************************************************/
/*! exports provided: VMIMigration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMIMigration", function() { return VMIMigration; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");




/**
 * @deprecated FIXME deprecate in favor of VMIMigrationWrapper
 */
class VMIMigration {
    constructor() {
        this.data = {
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineInstanceMigrationModel"]),
            kind: _models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineInstanceMigrationModel"].kind,
            metadata: {
                generateName: null,
                namespace: null,
            },
            spec: {
                vmiName: null,
            },
        };
    }
    setName(name) {
        this.data.metadata.generateName = `${name}-`;
        return this;
    }
    setVMI(vmi) {
        this.data.metadata.namespace = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(vmi);
        this.data.spec.vmiName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(vmi);
        return this;
    }
    build() {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](this.data);
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts":
/*!***********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts ***!
  \***********************************************************************/
/*! exports provided: addPrefixToPatch, getTemplatePatchPrefix, getVMLikePatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPrefixToPatch", function() { return addPrefixToPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplatePatchPrefix", function() { return getTemplatePatchPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikePatches", function() { return getVMLikePatches; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _selectors_check_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selectors/check-type */ "./packages/kubevirt-plugin/src/selectors/check-type.ts");
/* harmony import */ var _selectors_vm_template_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/vm-template/basic */ "./packages/kubevirt-plugin/src/selectors/vm-template/basic.ts");



const addPrefixToPatch = (prefix, patch) => (Object.assign(Object.assign({}, patch), { path: `${prefix}${patch.path}` }));
const getTemplatePatchPrefix = (vmTemplate, vm) => {
    const vmIndex = vmTemplate.objects.indexOf(vm);
    return vmIndex < 0 ? null : `/objects/${vmIndex}`;
};
const getVMLikePatches = (vmLikeEntity, patchesSupplier) => {
    let vm;
    let templatePrefix = null;
    if (Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_1__["isVM"])(vmLikeEntity)) {
        vm = vmLikeEntity;
    }
    else {
        vm = Object(_selectors_vm_template_basic__WEBPACK_IMPORTED_MODULE_2__["selectVM"])(vmLikeEntity);
        templatePrefix = getTemplatePatchPrefix(vmLikeEntity, vm);
    }
    const patches = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](vm ? patchesSupplier(vm) : []);
    return templatePrefix ? patches.map((p) => addPrefixToPatch(templatePrefix, p)) : patches;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-boot-patches.ts":
/*!************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/patches/vm/vm-boot-patches.ts ***!
  \************************************************************************/
/*! exports provided: getPxeBootPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPxeBootPatch", function() { return getPxeBootPatch; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");




const getPxeBootPatch = (vm) => {
    const patches = [];
    const annotations = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getAnnotations"])(vm);
    if (annotations && annotations[_constants_vm__WEBPACK_IMPORTED_MODULE_2__["ANNOTATION_FIRST_BOOT"]]) {
        if (annotations[_constants_vm__WEBPACK_IMPORTED_MODULE_2__["ANNOTATION_FIRST_BOOT"]] === 'true') {
            patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_1__["PatchBuilder"]('/metadata/annotations')
                .setObjectUpdate(_constants_vm__WEBPACK_IMPORTED_MODULE_2__["ANNOTATION_FIRST_BOOT"], 'false', annotations)
                .build());
        }
        else {
            // find bootable disk and change boot order
            const bootableDiskIndex = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_3__["getBootDeviceIndex"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_3__["getDisks"])(vm), _constants_vm__WEBPACK_IMPORTED_MODULE_2__["BOOT_ORDER_SECOND"]);
            const bootableInterfaceIndex = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_3__["getBootDeviceIndex"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_3__["getInterfaces"])(vm), _constants_vm__WEBPACK_IMPORTED_MODULE_2__["BOOT_ORDER_FIRST"]);
            if (bootableDiskIndex !== -1 && bootableInterfaceIndex !== -1) {
                patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_1__["PatchBuilder"](`/spec/template/spec/domain/devices/disks/${bootableDiskIndex}/bootOrder`)
                    .replace(_constants_vm__WEBPACK_IMPORTED_MODULE_2__["BOOT_ORDER_FIRST"])
                    .build(), new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_1__["PatchBuilder"](`/spec/template/spec/domain/devices/interfaces/${bootableInterfaceIndex}/bootOrder`)
                    .remove()
                    .build());
            }
        }
    }
    return patches;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-cdrom-patches.ts":
/*!*************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/patches/vm/vm-cdrom-patches.ts ***!
  \*************************************************************************/
/*! exports provided: getCDsPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCDsPatch", function() { return getCDsPatch; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modals/cdrom-vm-modal/constants */ "./packages/kubevirt-plugin/src/components/modals/cdrom-vm-modal/constants.ts");
/* harmony import */ var _wrapper_vm_data_volume_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../wrapper/vm/data-volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/data-volume-wrapper.ts");
/* harmony import */ var _selectors_config_map_sc_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/config-map/sc-defaults */ "./packages/kubevirt-plugin/src/selectors/config-map/sc-defaults.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _vm_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vm-template */ "./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");









const getNextAvailableBootOrderIndex = (vm) => {
    const sortedBootableDevices = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getBootableDevicesInOrder"])(vm);
    const numBootableDevices = sortedBootableDevices.length;
    const lastBootableDevice = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(sortedBootableDevices);
    // assigned indexes start at two as the first index is assigned directly by the user
    return numBootableDevices > 0 ? lastBootableDevice.value.bootOrder + 1 : _constants__WEBPACK_IMPORTED_MODULE_8__["BOOT_ORDER_SECOND"];
};
const assignBootOrderIndex = (vm, currDevBootOrder = -1) => {
    let bootOrder = currDevBootOrder;
    if (currDevBootOrder !== _constants__WEBPACK_IMPORTED_MODULE_8__["BOOT_ORDER_FIRST"]) {
        bootOrder = getNextAvailableBootOrderIndex(vm);
    }
    return bootOrder;
};
const getCDsPatch = (vm, cds, storageClassConfigMap) => {
    let newBootOrder = assignBootOrderIndex(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(vm));
    let DISKS = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getDisks"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(vm)).filter((disk) => !disk.cdrom || cds.find((modalCD) => disk.name === modalCD.name || modalCD.newCD));
    let VOLS = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getVolumes"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(vm)).filter((v) => DISKS.find((disk) => v.name === disk.name));
    let DATATEMPLATES = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getDataVolumeTemplates"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["asVM"])(vm)).filter((dataVol) => VOLS.find((vol) => Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getVolumeDataVolumeName"])(vol) === Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(dataVol)));
    cds.forEach(({ name, pvc, type, bootOrder, bus, container, windowsTools, url, storageClass, size }) => {
        const existingCD = !!bootOrder;
        const disk = {
            name,
            bootOrder: existingCD ? bootOrder : newBootOrder,
            cdrom: { bus: bus || _constants__WEBPACK_IMPORTED_MODULE_8__["DiskBus"].SATA.getValue() },
        };
        let volume = { name };
        let finalDataVolume;
        // Patches
        if (type === _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["StorageType"].PVC) {
            volume = {
                persistentVolumeClaim: {
                    claimName: pvc,
                },
                name,
            };
        }
        if (type === _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["StorageType"].URL) {
            const newDataVolume = {
                metadata: {
                    name: `${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(vm)}-${name}`,
                },
                spec: {
                    pvc: {
                        accessModes: undefined,
                        volumeMode: undefined,
                        resources: {
                            requests: {
                                storage: `${size}Gi`,
                            },
                        },
                        storageClassName: storageClass,
                    },
                    source: { http: { url } },
                },
            };
            const dataVolumeWrapper = new _wrapper_vm_data_volume_wrapper__WEBPACK_IMPORTED_MODULE_4__["DataVolumeWrapper"](newDataVolume);
            const storageClassName = dataVolumeWrapper.getStorageClassName();
            finalDataVolume = dataVolumeWrapper
                .setVolumeMode(Object(_selectors_config_map_sc_defaults__WEBPACK_IMPORTED_MODULE_5__["getDefaultSCVolumeMode"])(storageClassConfigMap, storageClassName))
                .setAccessModes(Object(_selectors_config_map_sc_defaults__WEBPACK_IMPORTED_MODULE_5__["getDefaultSCAccessModes"])(storageClassConfigMap, storageClassName))
                .asResource();
            volume = {
                name,
                dataVolume: {
                    name: `${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(vm)}-${name}`,
                },
            };
        }
        if (type === _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["StorageType"].CONTAINER) {
            volume = { name, containerDisk: { image: container } };
        }
        if (type === _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["StorageType"].WINTOOLS) {
            volume = { name, containerDisk: { image: windowsTools } };
        }
        const restOfDisks = DISKS.filter((vol) => vol.name !== name);
        const restOfVolumes = VOLS.filter((vol) => vol.name !== name);
        let restOfDataTemplates = DATATEMPLATES;
        if (type !== _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["StorageType"].CONTAINER && VOLS.filter((vol) => !!vol.dataVolume).length > 0) {
            const isDataVolume = VOLS.find((vol) => vol.name === name);
            if (isDataVolume) {
                restOfDataTemplates = DATATEMPLATES.filter((vol) => vol.metadata.name !== Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getVolumeDataVolumeName"])(isDataVolume));
            }
        }
        DISKS = [...restOfDisks, disk];
        VOLS = [...restOfVolumes, volume];
        DATATEMPLATES = restOfDataTemplates;
        if (finalDataVolume) {
            DATATEMPLATES = [...restOfDataTemplates, finalDataVolume];
        }
        if (type !== _components_modals_cdrom_vm_modal_constants__WEBPACK_IMPORTED_MODULE_3__["StorageType"].URL) {
            // remove unnecessary dataVolumeTemplates
            DATATEMPLATES = DATATEMPLATES.filter((dataVol) => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(VOLS.map((vol) => Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_6__["getVolumeDataVolumeName"])(vol)), dataVol.metadata.name));
        }
        if (!existingCD) {
            newBootOrder++;
        }
    });
    const patches = [
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/spec/template/spec/domain/devices/disks').replace(DISKS).build(),
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/spec/template/spec/volumes').replace(VOLS).build(),
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_2__["PatchBuilder"]('/spec/dataVolumeTemplates').replace(DATATEMPLATES).build(),
    ].filter((patch) => patch);
    return Object(_vm_template__WEBPACK_IMPORTED_MODULE_7__["getVMLikePatches"])(vm, () => patches);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-cpu-patches.ts":
/*!***********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/patches/vm/vm-cpu-patches.ts ***!
  \***********************************************************************/
/*! exports provided: getDedicatedCpuPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDedicatedCpuPatch", function() { return getDedicatedCpuPatch; });
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _vm_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm-template */ "./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");



const getDedicatedCpuPatch = (vmLikeEntity, dedicatedCpuPlacement) => {
    const vm = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["asVM"])(vmLikeEntity);
    const isCPUAvailable = !!Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getCPU"])(vm);
    const patches = [];
    if (isCPUAvailable) {
        patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]('/spec/template/spec/domain/cpu/dedicatedCpuPlacement')
            .replace(dedicatedCpuPlacement)
            .build());
    }
    else {
        const resourcesCPU = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getResourcesRequestsCPUCount"])(vm) || Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getResourcesLimitsCPUCount"])(vm);
        patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]('/spec/template/spec/domain/cpu')
            .replace(resourcesCPU ? { dedicatedCpuPlacement } : { cores: 1, dedicatedCpuPlacement })
            .build());
    }
    return Object(_vm_template__WEBPACK_IMPORTED_MODULE_1__["getVMLikePatches"])(vmLikeEntity, () => patches);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-patches.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/patches/vm/vm-patches.ts ***!
  \*******************************************************************/
/*! exports provided: getUpdateDescriptionPatches, getUpdateFlavorPatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateDescriptionPatches", function() { return getUpdateDescriptionPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateFlavorPatches", function() { return getUpdateFlavorPatches; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selectors/selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_check_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/check-type */ "./packages/kubevirt-plugin/src/selectors/check-type.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");
/* harmony import */ var _vm_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vm-template */ "./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts");
/* harmony import */ var _selectors_vm_template_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../selectors/vm-template/basic */ "./packages/kubevirt-plugin/src/selectors/vm-template/basic.ts");
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../selectors/vm-like/flavor */ "./packages/kubevirt-plugin/src/selectors/vm-like/flavor.ts");










const getDomainPatches = (vm) => {
    let patch = null;
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm, 'spec')) {
        patch = {
            op: 'add',
            path: '/spec',
            value: {
                template: {
                    spec: {
                        domain: {},
                    },
                },
            },
        };
    }
    else if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm.spec, 'template')) {
        patch = {
            op: 'add',
            path: '/spec/template',
            value: {
                spec: {
                    domain: {},
                },
            },
        };
    }
    else if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm.spec.template, 'spec')) {
        patch = {
            op: 'add',
            path: '/spec/template/spec',
            value: {
                domain: {},
            },
        };
    }
    else if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm.spec.template.spec, 'domain')) {
        patch = {
            op: 'add',
            path: '/spec/template/spec/domain',
            value: {},
        };
    }
    return patch ? [patch] : [];
};
const getUpdateFlavorPatchesImpl = (vmLike, oldFlavor, newFlavor) => {
    const path = Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_3__["isVM"])(vmLike) || Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_3__["isTemplate"])(vmLike) ? '/metadata/labels' : '/spec/template/metadata/labels'; // or VMITemplate
    const patches = [];
    // also remove old unused Custom labels
    if (Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_9__["isCustomFlavor"])(newFlavor) || oldFlavor !== newFlavor) {
        const labels = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_8__["getLabels"])(vmLike);
        const flavorLabel = Object.keys(labels || {}).find((key) => key.startsWith(_constants__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_FLAVOR_LABEL"]));
        if (flavorLabel) {
            patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"](path).setObjectRemove(flavorLabel, labels).build());
        }
        if (!Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_9__["isCustomFlavor"])(newFlavor)) {
            patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"](path)
                .setObjectUpdate(`${_constants__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_FLAVOR_LABEL"]}/${newFlavor}`, 'true', labels)
                .build());
        }
    }
    return patches;
};
const getMemoryPatch = (vm, memory) => {
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm.spec, 'template.spec.domain.resources')) {
        return {
            op: 'add',
            path: '/spec/template/spec/domain/resources',
            value: {
                requests: {
                    memory,
                },
            },
        };
    }
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm.spec, 'template.spec.domain.resources.requests')) {
        return {
            op: 'add',
            path: '/spec/template/spec/domain/resources/requests',
            value: {
                memory,
            },
        };
    }
    return {
        op: lodash__WEBPACK_IMPORTED_MODULE_0__["has"](vm.spec, 'template.spec.domain.resources.requests.memory') ? 'replace' : 'add',
        path: '/spec/template/spec/domain/resources/requests/memory',
        value: memory,
    };
};
const getUpdateCpuMemoryPatch = (vm, cpu, memory) => {
    const patches = [];
    const oldCPU = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getCPU"])(vm);
    const vmMemory = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getMemory"])(vm);
    patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"]('/spec/template/spec/domain/cpu')
        .setObjectUpdate('sockets', cpu === null || cpu === void 0 ? void 0 : cpu.sockets, oldCPU)
        .build());
    patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"]('/spec/template/spec/domain/cpu')
        .setObjectUpdate('threads', cpu === null || cpu === void 0 ? void 0 : cpu.threads, oldCPU || {}) // created by the patch before
        .build());
    patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"]('/spec/template/spec/domain/cpu')
        .setObjectUpdate('cores', cpu === null || cpu === void 0 ? void 0 : cpu.cores, oldCPU || {})
        .build());
    if (memory !== vmMemory) {
        patches.push(getMemoryPatch(vm, memory));
    }
    return patches.length > 0 ? [...getDomainPatches(vm), ...patches] : patches;
};
const getUpdateDescriptionPatches = (vmLikeEntity, description) => {
    const patches = [];
    const oldDescription = Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__["getDescription"])(vmLikeEntity);
    const annotations = Object(_selectors_selectors__WEBPACK_IMPORTED_MODULE_1__["getAnnotations"])(vmLikeEntity, null);
    if (description !== oldDescription) {
        if (!description && oldDescription) {
            patches.push({
                op: 'remove',
                path: '/metadata/annotations/description',
            });
        }
        else if (!annotations) {
            patches.push({
                op: 'add',
                path: '/metadata/annotations',
                value: {
                    description,
                },
            });
        }
        else {
            patches.push({
                op: oldDescription ? 'replace' : 'add',
                path: '/metadata/annotations/description',
                value: description,
            });
        }
    }
    return patches;
};
const getSizeLabelPatch = (flavor, vmi) => {
    const patches = [];
    if (Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_9__["isCustomFlavor"])(flavor)) {
        patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"]('/spec/template/metadata/labels')
            .setObjectRemove(_constants__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_VM_SIZE_LABEL"], Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_8__["getLabels"])(vmi))
            .build());
    }
    else {
        patches.push(new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_7__["PatchBuilder"]('/spec/template/metadata/labels')
            .setObjectUpdate(_constants__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_VM_SIZE_LABEL"], flavor, Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_8__["getLabels"])(vmi))
            .build());
    }
    return patches;
};
const getUpdateFlavorPatches = (vmLike, template, flavor, cpu, mem) => {
    const oldFlavor = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getFlavor"])(vmLike);
    let customCpu = {
        sockets: 1,
        cores: cpu,
        threads: 1,
    };
    let customMem = mem;
    if (!Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_9__["isCustomFlavor"])(flavor)) {
        const templateVm = Object(_selectors_vm_template_basic__WEBPACK_IMPORTED_MODULE_6__["selectVM"])(template);
        customCpu = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["parseCPU"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getCPU"])(templateVm), _selectors_vm__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CPU"]);
        customMem = Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["getMemory"])(templateVm);
    }
    return [
        ...getUpdateFlavorPatchesImpl(vmLike, oldFlavor, flavor),
        ...Object(_vm_template__WEBPACK_IMPORTED_MODULE_5__["getVMLikePatches"])(vmLike, (vm) => {
            var _a;
            const vmi = (_a = vm.spec) === null || _a === void 0 ? void 0 : _a.template;
            const additionalPatches = [
                ...getSizeLabelPatch(flavor, vmi),
                ...getUpdateCpuMemoryPatch(vm, customCpu, customMem),
            ];
            if (Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_3__["isVM"])(vmLike)) {
                additionalPatches.push(...getUpdateFlavorPatchesImpl(vmi, oldFlavor, flavor));
            }
            return additionalPatches;
        }),
    ];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-scheduling-patches.ts":
/*!******************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/patches/vm/vm-scheduling-patches.ts ***!
  \******************************************************************************/
/*! exports provided: getNodeSelectorPatches, getTolerationsPatch, getAffinityPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeSelectorPatches", function() { return getNodeSelectorPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTolerationsPatch", function() { return getTolerationsPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAffinityPatch", function() { return getAffinityPatch; });
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _vm_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm-template */ "./packages/kubevirt-plugin/src/k8s/patches/vm-template/index.ts");


const getNodeSelectorPatches = (vmLikeEntity, selectors) => Object(_vm_template__WEBPACK_IMPORTED_MODULE_1__["getVMLikePatches"])(vmLikeEntity, () => [
    new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]('/spec/template/spec/nodeSelector').replace(selectors).build(),
]);
const getTolerationsPatch = (vmLikeEntity, tolerations) => {
    const tolerationsWithOperator = tolerations.map(({ effect, key, tolerationSeconds, value }) => ({
        key,
        value,
        effect,
        operator: value ? 'Equal' : 'Exists',
        tolerationSeconds,
    }));
    return Object(_vm_template__WEBPACK_IMPORTED_MODULE_1__["getVMLikePatches"])(vmLikeEntity, () => [
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]('/spec/template/spec/tolerations').replace(tolerationsWithOperator).build(),
    ]);
};
const getAffinityPatch = (vmLikeEntity, affinity) => affinity
    ? Object(_vm_template__WEBPACK_IMPORTED_MODULE_1__["getVMLikePatches"])(vmLikeEntity, () => [
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]('/spec/template/spec/affinity').replace(affinity).build(),
    ])
    : Object(_vm_template__WEBPACK_IMPORTED_MODULE_1__["getVMLikePatches"])(vmLikeEntity, () => [
        new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_0__["PatchBuilder"]('/spec/template/spec/affinity').remove().build(),
    ]);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/free-owned-resources.ts":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/free-owned-resources.ts ***!
  \***************************************************************************/
/*! exports provided: freeOwnedResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeOwnedResources", function() { return freeOwnedResources; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/k8s */ "./packages/console-shared/src/k8s/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/utils/owner-references */ "./packages/console-shared/src/utils/owner-references.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const freeOwnedResources = (ownedResources, owner, doDelete) => __awaiter(void 0, void 0, void 0, function* () {
    const freePromises = (ownedResources || [])
        .filter((res) => res)
        .map(({ model, resource: ownedResource }) => {
        if (doDelete) {
            return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(model, ownedResource);
        }
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(model, ownedResource, [
            new _console_shared_src_k8s__WEBPACK_IMPORTED_MODULE_1__["PatchBuilder"]('/metadata/ownerReferences')
                .setListRemove(Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getOwnerReferences"])(ownedResource), (ownerReference) => Object(_console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_3__["compareOwnerReference"])(ownerReference, owner))
                .build(),
        ]);
    });
    return Promise.all(freePromises);
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/k8s-kill-propagated.ts":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/k8s-kill-propagated.ts ***!
  \**************************************************************************/
/*! exports provided: k8sKillPropagated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k8sKillPropagated", function() { return k8sKillPropagated; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");

const k8sKillPropagated = (model, resource, opts = {}) => {
    const { propagationPolicy } = model;
    const json = propagationPolicy
        ? { kind: 'DeleteOptions', apiVersion: 'v1', propagationPolicy }
        : null;
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(model, resource, opts, json);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vm/actions.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vm/actions.ts ***!
  \*****************************************************************/
/*! exports provided: VMActionType, VMActionWithPXERequest, startVM, stopVM, restartVM, deleteVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMActionType", function() { return VMActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMActionWithPXERequest", function() { return VMActionWithPXERequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startVM", function() { return startVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopVM", function() { return stopVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartVM", function() { return restartVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVM", function() { return deleteVM; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _patches_vm_vm_boot_patches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../patches/vm/vm-boot-patches */ "./packages/kubevirt-plugin/src/k8s/patches/vm/vm-boot-patches.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _wrapper_vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../wrapper/vm/vm-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vm-wrapper.ts");
/* harmony import */ var _free_owned_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../free-owned-resources */ "./packages/kubevirt-plugin/src/k8s/requests/free-owned-resources.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







var VMActionType;
(function (VMActionType) {
    VMActionType["Start"] = "start";
    VMActionType["Stop"] = "stop";
    VMActionType["Restart"] = "restart";
})(VMActionType || (VMActionType = {}));
const VMActionRequest = (vm, action) => __awaiter(void 0, void 0, void 0, function* () {
    const method = 'PUT';
    let url = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["resourceURL"])(Object.assign(Object.assign({}, _models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"]), { apiGroup: `subresources.${_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"].apiGroup}` }), {
        ns: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(vm),
        name: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getName"])(vm),
    });
    url = `${url}/${action}`;
    const response = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_2__["coFetch"])(url, { method });
    const text = yield response.text();
    return text;
});
const VMActionWithPXERequest = (vm, action) => __awaiter(void 0, void 0, void 0, function* () {
    // handle PXE boot (kubevirt.ui/firstBoot annotation)
    const pxePatch = Object(_patches_vm_vm_boot_patches__WEBPACK_IMPORTED_MODULE_3__["getPxeBootPatch"])(vm);
    if (pxePatch.length > 0) {
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"], vm, pxePatch);
    }
    return VMActionRequest(vm, action);
});
const startVM = (vm) => __awaiter(void 0, void 0, void 0, function* () { return VMActionWithPXERequest(vm, VMActionType.Start); });
const stopVM = (vm) => __awaiter(void 0, void 0, void 0, function* () { return VMActionRequest(vm, VMActionType.Stop); });
const restartVM = (vm) => __awaiter(void 0, void 0, void 0, function* () { return VMActionWithPXERequest(vm, VMActionType.Restart); });
const deleteVM = (vm, { vmImport, deleteVMImport, ownedVolumeResources, deleteOwnedVolumeResources, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (ownedVolumeResources && !deleteOwnedVolumeResources) {
        yield Object(_free_owned_resources__WEBPACK_IMPORTED_MODULE_6__["freeOwnedResources"])(ownedVolumeResources, {
            name: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getName"])(vm),
            kind: _models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"].kind,
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"]),
        }, false);
    }
    if (vmImport && deleteVMImport) {
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineImportModel"], vmImport);
        if (new _wrapper_vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_5__["VMWrapper"](vm).getVMImportOwnerReference()) {
            try {
                const deletingVM = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"], Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getName"])(vm), Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(vm));
                if (deletingVM && !Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getDeletetionTimestamp"])(deletingVM)) {
                    // just lost reference - kill again
                    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"], vm);
                }
            }
            catch (ignored) {
                // 404 expected
            }
        }
        else {
            yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"], vm);
        }
    }
    else {
        yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"], vm);
    }
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vm/clone.ts":
/*!***************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vm/clone.ts ***!
  \***************************************************************/
/*! exports provided: cloneVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneVM", function() { return cloneVM; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _helpers_vm_clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/vm-clone */ "./packages/kubevirt-plugin/src/k8s/helpers/vm-clone.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./packages/kubevirt-plugin/src/k8s/requests/vm/actions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const cloneVM = ({ vm, persistentVolumeClaims, dataVolumes }, cloneTo) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_3__["isVMExpectedRunning"])(vm)) {
        yield Object(_actions__WEBPACK_IMPORTED_MODULE_4__["stopVM"])(vm);
    }
    const vmClone = new _helpers_vm_clone__WEBPACK_IMPORTED_MODULE_2__["VMClone"](vm, cloneTo)
        .withClonedPVCs(persistentVolumeClaims)
        .withClonedDataVolumes(dataVolumes)
        .build();
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_1__["VirtualMachineModel"], vmClone);
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vm/index.ts":
/*!***************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vm/index.ts ***!
  \***************************************************************/
/*! exports provided: VMActionType, VMActionWithPXERequest, startVM, stopVM, restartVM, deleteVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./packages/kubevirt-plugin/src/k8s/requests/vm/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMActionType", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VMActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VMActionWithPXERequest", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VMActionWithPXERequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startVM", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["startVM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVM", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["stopVM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restartVM", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["restartVM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVM", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["deleteVM"]; });




/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vmi/actions.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vmi/actions.ts ***!
  \******************************************************************/
/*! exports provided: VMIActionType, unpauseVMI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMIActionType", function() { return VMIActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpauseVMI", function() { return unpauseVMI; });
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




var VMIActionType;
(function (VMIActionType) {
    VMIActionType["Unpause"] = "unpause";
})(VMIActionType || (VMIActionType = {}));
const VMIActionRequest = (vmi, action) => __awaiter(void 0, void 0, void 0, function* () {
    const method = 'PUT';
    let url = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["resourceURL"])(Object.assign(Object.assign({}, _models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineInstanceModel"]), { apiGroup: `subresources.${_models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineInstanceModel"].apiGroup}` }), {
        ns: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(vmi),
        name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getName"])(vmi),
    });
    url = `${url}/${action}`;
    const response = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_0__["coFetch"])(url, { method });
    const text = yield response.text();
    return text;
});
const unpauseVMI = (vmi) => __awaiter(void 0, void 0, void 0, function* () { return VMIActionRequest(vmi, VMIActionType.Unpause); });


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vmi/index.ts":
/*!****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vmi/index.ts ***!
  \****************************************************************/
/*! exports provided: getMigrationName, startVMIMigration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _migration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migration */ "./packages/kubevirt-plugin/src/k8s/requests/vmi/migration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMigrationName", function() { return _migration__WEBPACK_IMPORTED_MODULE_0__["getMigrationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startVMIMigration", function() { return _migration__WEBPACK_IMPORTED_MODULE_0__["startVMIMigration"]; });




/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vmi/migration.ts":
/*!********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vmi/migration.ts ***!
  \********************************************************************/
/*! exports provided: getMigrationName, startVMIMigration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMigrationName", function() { return getMigrationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startVMIMigration", function() { return startVMIMigration; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _objects_vmi_migration_vmi_migration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/vmi-migration/vmi-migration */ "./packages/kubevirt-plugin/src/k8s/objects/vmi-migration/vmi-migration.ts");





const getMigrationName = (vmi) => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["prefixedID"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getName"])(vmi), 'migration');
const startVMIMigration = (vmi) => {
    const migration = new _objects_vmi_migration_vmi_migration__WEBPACK_IMPORTED_MODULE_4__["VMIMigration"]()
        .setName(getMigrationName(vmi))
        .setVMI(vmi)
        .build();
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_2__["VirtualMachineInstanceMigrationModel"], migration);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vmim/index.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vmim/index.ts ***!
  \*****************************************************************/
/*! exports provided: cancelMigration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelMigration", function() { return cancelMigration; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const cancelMigration = (vmim) => __awaiter(void 0, void 0, void 0, function* () { return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_1__["VirtualMachineInstanceMigrationModel"], vmim); });


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/requests/vmtemplate/actions.ts":
/*!*************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/requests/vmtemplate/actions.ts ***!
  \*************************************************************************/
/*! exports provided: deleteVMTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVMTemplate", function() { return deleteVMTemplate; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _free_owned_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../free-owned-resources */ "./packages/kubevirt-plugin/src/k8s/requests/free-owned-resources.ts");
/* harmony import */ var _k8s_kill_propagated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../k8s-kill-propagated */ "./packages/kubevirt-plugin/src/k8s/requests/k8s-kill-propagated.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const deleteVMTemplate = (vmTemplate, { ownedVolumeResources, deleteOwnedVolumeResources, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (ownedVolumeResources && !deleteOwnedVolumeResources) {
        yield Object(_free_owned_resources__WEBPACK_IMPORTED_MODULE_2__["freeOwnedResources"])(ownedVolumeResources, {
            name: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getName"])(vmTemplate),
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"].kind,
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["apiVersionForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"]),
        }, false);
    }
    yield Object(_k8s_kill_propagated__WEBPACK_IMPORTED_MODULE_3__["k8sKillPropagated"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"], vmTemplate);
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/common/k8s-resource-wrapper.ts":
/*!*********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/common/k8s-resource-wrapper.ts ***!
  \*********************************************************************************/
/*! exports provided: K8sResourceWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K8sResourceWrapper", function() { return K8sResourceWrapper; });
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/wrapper.ts");
/* harmony import */ var _util_k8s_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/k8s-mixin */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/util/k8s-mixin.ts");
/* eslint-disable lines-between-class-members */



class K8sResourceWrapper extends _wrapper__WEBPACK_IMPORTED_MODULE_1__["Wrapper"] {
    constructor(model, data, copy = false) {
        super(data, copy);
        this.getModel = () => this.model;
        this.getName = () => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getName"])(this.data);
        this.getNamespace = () => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getNamespace"])(this.data);
        this.getCreationTimestamp = () => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getCreationTimestamp"])(this.data);
        this.getLabels = (defaultValue = {}) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getLabels"])(this.data, defaultValue);
        this.hasLabel = (label) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["hasLabel"])(this.data, label);
        this.getOwnerReferences = () => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getOwnerReferences"])(this.data);
        this.setName = (name) => {
            this.ensurePath('metadata');
            this.data.metadata.name = name;
            delete this.data.metadata.generateName;
            return this;
        };
        this.setGenerateName = (generateName) => {
            this.ensurePath('metadata');
            this.data.metadata.generateName = generateName;
            delete this.data.metadata.name;
            return this;
        };
        this.setNamespace = (namespace) => {
            this.ensurePath('metadata');
            this.data.metadata.namespace = namespace;
            return this;
        };
        this.addAnotation = (key, value) => {
            if (key) {
                this.ensurePath('metadata.annotations');
                this.data.metadata.annotations[key] = value;
            }
            return this;
        };
        this.addLabel = (key, value) => {
            if (key) {
                this.ensurePath('metadata.labels');
                this.data.metadata.labels[key] = value;
            }
            return this;
        };
        this.model = model;
        if (!this.model) {
            throw new Error('model must be defined');
        }
    }
    init(data = {}) {
        Object(_util_k8s_mixin__WEBPACK_IMPORTED_MODULE_2__["initK8sObject"])(this.data, this.model, data);
        return this;
    }
    clearRuntimeMetadata() {
        Object(_util_k8s_mixin__WEBPACK_IMPORTED_MODULE_2__["clearRuntimeMetadata"])(this.data);
        return this;
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/utils/convert.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/utils/convert.ts ***!
  \*******************************************************************/
/*! exports provided: asVMILikeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asVMILikeWrapper", function() { return asVMILikeWrapper; });
/* harmony import */ var _vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/vm-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vm-wrapper.ts");
/* harmony import */ var _vm_vmi_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/vmi-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vmi-wrapper.ts");
/* harmony import */ var _selectors_vm_vmlike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/vm/vmlike */ "./packages/kubevirt-plugin/src/selectors/vm/vmlike.ts");
/* harmony import */ var _selectors_check_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/check-type */ "./packages/kubevirt-plugin/src/selectors/check-type.ts");




const asVMILikeWrapper = (vmLikeEntity, copy = false) => {
    if (!vmLikeEntity) {
        return null;
    }
    if (Object(_selectors_check_type__WEBPACK_IMPORTED_MODULE_3__["isVMI"])(vmLikeEntity)) {
        return new _vm_vmi_wrapper__WEBPACK_IMPORTED_MODULE_1__["VMIWrapper"](vmLikeEntity, copy);
    }
    return new _vm_vm_wrapper__WEBPACK_IMPORTED_MODULE_0__["VMWrapper"](Object(_selectors_vm_vmlike__WEBPACK_IMPORTED_MODULE_2__["asVM"])(vmLikeEntity), copy);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/cloud-init-data-helper.tsx":
/*!********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/cloud-init-data-helper.tsx ***!
  \********************************************************************************/
/*! exports provided: CloudInitDataFormKeys, CLOUD_CONFIG_HEADER, formAllowedKeys, CloudInitDataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudInitDataFormKeys", function() { return CloudInitDataFormKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOUD_CONFIG_HEADER", function() { return CLOUD_CONFIG_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formAllowedKeys", function() { return formAllowedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudInitDataHelper", function() { return CloudInitDataHelper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);


const safeAtob = (value) => {
    try {
        return atob(value);
    }
    catch (ignored) {
        return '';
    }
};
var CloudInitDataFormKeys;
(function (CloudInitDataFormKeys) {
    CloudInitDataFormKeys["NAME"] = "name";
    CloudInitDataFormKeys["HOSTNAME"] = "hostname";
    CloudInitDataFormKeys["SSH_AUTHORIZED_KEYS"] = "ssh_authorized_keys";
})(CloudInitDataFormKeys || (CloudInitDataFormKeys = {}));
const CLOUD_CONFIG_HEADER = '#cloud-config';
const formAllowedKeys = new Set([
    CloudInitDataFormKeys.NAME,
    CloudInitDataFormKeys.HOSTNAME,
    CloudInitDataFormKeys.SSH_AUTHORIZED_KEYS,
]);
class CloudInitDataHelper {
    constructor(cloudInitNoCloud) {
        this.cloudConfigData = null;
        this.otherFormatData = null;
        this.isEmpty = () => !this.otherFormatData && lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](this.cloudConfigData);
        this.includesOnlyFormValues = () => this.cloudConfigData
            ? Object.keys(this.cloudConfigData).every((key) => formAllowedKeys.has(key))
            : !this.otherFormatData;
        this.areAllFormValuesEmpty = () => this.isEmpty() ||
            (this.includesOnlyFormValues() &&
                !Object.keys(this.cloudConfigData).find((key) => this.has(key) && key !== CloudInitDataFormKeys.NAME));
        this.getUserData = () => {
            if (this.cloudConfigData) {
                const resultData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(this.cloudConfigData);
                return this.header ? `${this.header}\n${resultData}` : resultData;
            }
            return this.otherFormatData;
        };
        this.get = (key) => this.cloudConfigData && this.cloudConfigData[key];
        this.has = (key) => !!this.get(key);
        this.set = (key, value) => {
            if (key && !this.otherFormatData) {
                if (!this.cloudConfigData) {
                    this.cloudConfigData = {};
                }
                if (value === undefined) {
                    delete this.cloudConfigData[key];
                }
                else {
                    this.cloudConfigData[key] = value;
                }
            }
        };
        this.makeFormCompliant = () => {
            this.header = CLOUD_CONFIG_HEADER;
            this.otherFormatData = undefined;
            if (!this.cloudConfigData) {
                this.cloudConfigData = {};
            }
            Object.keys(this.cloudConfigData).forEach((key) => {
                if (!formAllowedKeys.has(key)) {
                    delete this.cloudConfigData[key];
                }
            });
            if (!this.cloudConfigData[CloudInitDataFormKeys.NAME]) {
                this.cloudConfigData[CloudInitDataFormKeys.NAME] = 'default'; // root account might not be enabled
            }
        };
        this.asCloudInitNoCloudSource = () => CloudInitDataHelper.toCloudInitNoCloudSource(this.getUserData(), this.base64);
        const [userData, isBase64] = CloudInitDataHelper.getUserData(cloudInitNoCloud);
        this.base64 = isBase64;
        const firstLineSepIndex = userData ? userData.indexOf('\n') : -1;
        const header = firstLineSepIndex === -1 ? undefined : userData.substring(0, firstLineSepIndex);
        const rest = firstLineSepIndex === -1 ? undefined : userData.substring(firstLineSepIndex + 1);
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["trimEnd"](header) === CLOUD_CONFIG_HEADER) {
            try {
                this.cloudConfigData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoad"])(rest);
                this.header = header;
            }
            catch (e) {
                this.otherFormatData = userData;
            }
        }
        else {
            this.otherFormatData = userData;
        }
    }
}
CloudInitDataHelper.getUserData = (cloudInitNoCloud) => {
    const isBase64 = lodash__WEBPACK_IMPORTED_MODULE_0__["has"](cloudInitNoCloud, 'userDataBase64');
    const userData = isBase64
        ? safeAtob(cloudInitNoCloud && cloudInitNoCloud.userDataBase64)
        : cloudInitNoCloud && cloudInitNoCloud.userData;
    return [userData, isBase64];
};
CloudInitDataHelper.toCloudInitNoCloudSource = (userData, isBase64) => {
    if (isBase64) {
        return { userDataBase64: btoa(userData) };
    }
    return { userData };
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/combined-disk.ts":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/combined-disk.ts ***!
  \**********************************************************************/
/*! exports provided: CombinedDisk, CombinedDiskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinedDisk", function() { return CombinedDisk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinedDiskFactory", function() { return CombinedDiskFactory; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s/k8s */ "./public/module/k8s/k8s.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/utils */ "./packages/kubevirt-plugin/src/selectors/utils.ts");
/* harmony import */ var _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/vm/storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* harmony import */ var _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/disk-modal/storage-ui-source */ "./packages/kubevirt-plugin/src/components/modals/disk-modal/storage-ui-source.ts");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/strings */ "./packages/kubevirt-plugin/src/utils/strings.ts");
/* harmony import */ var _disk_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disk-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/disk-wrapper.ts");
/* harmony import */ var _data_volume_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/data-volume-wrapper.ts");
/* harmony import */ var _volume_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts");
/* harmony import */ var _persistent_volume_claim_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./persistent-volume-claim-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/persistent-volume-claim-wrapper.ts");
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/convert */ "./packages/kubevirt-plugin/src/k8s/wrapper/utils/convert.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/shared/src/utils/owner-references */ "./packages/console-shared/src/utils/owner-references.ts");
















class CombinedDisk {
    constructor({ id, disk, volume, dataVolume, persistentVolumeClaim, diskWrapper, volumeWrapper, dataVolumeWrapper, persistentVolumeClaimWrapper, isNewPVC, dataVolumesLoading, pvcsLoading, }) {
        var _a, _b;
        this.getSource = () => this.source;
        this.getInitialSource = (isEditing) => {
            var _a;
            if (isEditing) {
                return this.source;
            }
            return ((_a = this.diskWrapper) === null || _a === void 0 ? void 0 : _a.getType()) === _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["DiskType"].CDROM
                ? _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].URL
                : _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].BLANK;
        };
        this.getSourceValue = () => this.source.getValue();
        this.isEditingSupported = () => {
            var _a, _b;
            switch (this.volumeWrapper.getType()) {
                case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeType"].DATA_VOLUME:
                    // do not edit already created entities
                    return !(((_a = this.dataVolumeWrapper) === null || _a === void 0 ? void 0 : _a.getCreationTimestamp()) || ((_b = this.persistentVolumeClaimWrapper) === null || _b === void 0 ? void 0 : _b.getCreationTimestamp()));
                default:
                    return true;
            }
        };
        this.getName = () => { var _a; return (_a = this.diskWrapper) === null || _a === void 0 ? void 0 : _a.getName(); };
        this.getType = () => { var _a; return (_a = this.diskWrapper) === null || _a === void 0 ? void 0 : _a.getType(); };
        this.getTypeValue = () => { var _a; return (_a = this.diskWrapper) === null || _a === void 0 ? void 0 : _a.getTypeValue(); };
        this.getDiskInterface = () => { var _a; return (_a = this.diskWrapper) === null || _a === void 0 ? void 0 : _a.getReadableDiskBus(); };
        this.getReadableSize = () => {
            let result = this.volumeTypeOperation((persistentVolumeClaimWrapper) => persistentVolumeClaimWrapper.getReadabableSize(), (dataVolumeWrapper) => dataVolumeWrapper.getReadabableSize());
            if (result === null && this.source.hasDynamicSize()) {
                result = _utils_strings__WEBPACK_IMPORTED_MODULE_8__["DYNAMIC"];
            }
            return result;
        };
        this.getSize = () => this.volumeTypeOperation((persistentVolumeClaimWrapper) => persistentVolumeClaimWrapper.getSize(), (dataVolumeWrapper) => dataVolumeWrapper.getSize());
        this.getStorageClassName = () => this.volumeTypeOperation((persistentVolumeClaimWrapper) => persistentVolumeClaimWrapper.getStorageClassName(), (dataVolumeWrapper) => dataVolumeWrapper.getStorageClassName());
        this.getAccessModes = () => this.volumeTypeOperation((persistentVolumeClaimWrapper) => persistentVolumeClaimWrapper.getAccessModesEnum(), (dataVolumeWrapper) => dataVolumeWrapper.getAccessModesEnum());
        this.getVolumeMode = () => this.volumeTypeOperation((persistentVolumeClaimWrapper) => persistentVolumeClaimWrapper.getVolumeModeEnum(), (dataVolumeWrapper) => dataVolumeWrapper.getVolumeModeEnum());
        this.getPVCNameBySource = (source) => {
            var _a, _b, _c;
            if (source === _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].IMPORT_DISK) {
                return (_a = this.persistentVolumeClaimWrapper) === null || _a === void 0 ? void 0 : _a.getName();
            }
            if (source === _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].ATTACH_DISK) {
                return (_b = this.volumeWrapper) === null || _b === void 0 ? void 0 : _b.getPersistentVolumeClaimName();
            }
            if (source === _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].ATTACH_CLONED_DISK) {
                return (_c = this.dataVolumeWrapper) === null || _c === void 0 ? void 0 : _c.getPesistentVolumeClaimName();
            }
            return null;
        };
        this.getContent = () => {
            var _a;
            switch (this.source) {
                case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].CONTAINER: {
                    return (_a = this.volumeWrapper) === null || _a === void 0 ? void 0 : _a.getContainerImage();
                }
                case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].URL: {
                    return this.dataVolumeWrapper.getURL();
                }
                case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].IMPORT_DISK: {
                    return this.getPVCNameBySource(this.source);
                }
                case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].ATTACH_DISK: {
                    return this.getPVCNameBySource(this.source);
                }
                case _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].ATTACH_CLONED_DISK: {
                    return this.getPVCNameBySource(this.source);
                }
                default:
                    return null;
            }
        };
        this.getCDROMSourceValue = () => {
            var _a;
            return Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["isWinToolsImage"])((_a = this.volumeWrapper) === null || _a === void 0 ? void 0 : _a.getContainerImage())
                ? 'Windows Tools'
                : this.getSourceValue();
        };
        this.toString = () => {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["compact"]([
                this.getName(),
                this.getReadableSize(),
                this.getDiskInterface(),
                this.getStorageClassName(),
                this.getVolumeMode(),
                (this.getAccessModes() || []).length > 0 ? this.getAccessModes().join(', ') : null,
            ]).join(' - ');
        };
        this.volumeTypeOperation = (onPersistentVolumeClaimWrapper, onDataVolumeWrapper) => {
            var _a;
            const volumeType = (_a = this.volumeWrapper) === null || _a === void 0 ? void 0 : _a.getType();
            if (volumeType === _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeType"].PERSISTENT_VOLUME_CLAIM) {
                if (this.persistentVolumeClaimWrapper) {
                    return onPersistentVolumeClaimWrapper(this.persistentVolumeClaimWrapper) || null;
                }
                if (this.pvcsLoading) {
                    return undefined;
                }
            }
            else if (volumeType === _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeType"].DATA_VOLUME) {
                if (this.dataVolumeWrapper) {
                    return onDataVolumeWrapper(this.dataVolumeWrapper) || null;
                }
                if (this.dataVolumesLoading) {
                    return undefined;
                }
            }
            return null;
        };
        this.id = id;
        this.diskWrapper = disk ? new _disk_wrapper__WEBPACK_IMPORTED_MODULE_9__["DiskWrapper"](disk) : diskWrapper;
        this.volumeWrapper = volume ? new _volume_wrapper__WEBPACK_IMPORTED_MODULE_11__["VolumeWrapper"](volume) : volumeWrapper;
        this.dataVolumeWrapper = dataVolume ? new _data_volume_wrapper__WEBPACK_IMPORTED_MODULE_10__["DataVolumeWrapper"](dataVolume) : dataVolumeWrapper;
        this.persistentVolumeClaimWrapper = persistentVolumeClaim
            ? new _persistent_volume_claim_wrapper__WEBPACK_IMPORTED_MODULE_12__["PersistentVolumeClaimWrapper"](persistentVolumeClaim)
            : persistentVolumeClaimWrapper;
        this.dataVolumesLoading = dataVolumesLoading;
        this.pvcsLoading = pvcsLoading;
        this.source = _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_7__["StorageUISource"].fromTypes((_a = this.volumeWrapper) === null || _a === void 0 ? void 0 : _a.getType(), (_b = this.dataVolumeWrapper) === null || _b === void 0 ? void 0 : _b.getType(), !!this.persistentVolumeClaimWrapper && isNewPVC);
    }
}
class CombinedDiskFactory {
    constructor({ disks, volumes, dataVolumes, dataVolumeTemplates, dataVolumesLoading, pvcs, pvcsLoading, namespace, }) {
        this.getCombinedDisks = () => {
            const volumeLookup = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["createBasicLookup"])(this.volumes, _selectors_utils__WEBPACK_IMPORTED_MODULE_3__["getSimpleName"]);
            const datavolumeTemplateLookup = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["createBasicLookup"])(this.dataVolumeTemplates, _console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"]);
            const datavolumeLookup = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["createBasicLookup"])(this.dataVolumes, _console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"]);
            const pvcLookup = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["createBasicLookup"])(this.pvcs, _console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"]);
            return this.disks.map((disk) => {
                const diskWrapper = new _disk_wrapper__WEBPACK_IMPORTED_MODULE_9__["DiskWrapper"](disk);
                const volume = volumeLookup[diskWrapper.getName()];
                const volumeWrapper = new _volume_wrapper__WEBPACK_IMPORTED_MODULE_11__["VolumeWrapper"](volume);
                let dataVolumeName;
                let dataVolume;
                let dataVolumeTemplate;
                let pvc;
                switch (volumeWrapper.getType()) {
                    case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeType"].DATA_VOLUME:
                        dataVolumeName = volumeWrapper.getDataVolumeName();
                        dataVolumeTemplate = datavolumeTemplateLookup[dataVolumeName];
                        dataVolume = datavolumeLookup[dataVolumeName];
                        if (!dataVolume) {
                            dataVolume = dataVolumeTemplate;
                        }
                        if (dataVolume && this.pvcs) {
                            pvc = this.pvcs.find((p) => (Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getOwnerReferences"])(p) || []).some((ownerReference) => Object(_console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_15__["compareOwnerReference"])(ownerReference, {
                                name: dataVolumeName,
                                kind: _models__WEBPACK_IMPORTED_MODULE_14__["DataVolumeModel"].kind,
                                apiVersion: Object(_console_internal_module_k8s_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_14__["DataVolumeModel"]),
                            })));
                        }
                        break;
                    case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeType"].PERSISTENT_VOLUME_CLAIM:
                        pvc = pvcLookup[volumeWrapper.getPersistentVolumeClaimName()];
                        break;
                    default:
                        break;
                }
                return new CombinedDisk({
                    diskWrapper,
                    volumeWrapper,
                    dataVolumeWrapper: dataVolume && new _data_volume_wrapper__WEBPACK_IMPORTED_MODULE_10__["DataVolumeWrapper"](dataVolume),
                    persistentVolumeClaimWrapper: pvc && new _persistent_volume_claim_wrapper__WEBPACK_IMPORTED_MODULE_12__["PersistentVolumeClaimWrapper"](pvc),
                    dataVolumesLoading: this.dataVolumesLoading,
                    pvcsLoading: this.pvcsLoading,
                });
            });
        };
        this.getUsedDiskNames = (excludeName) => new Set(this.disks.map(_selectors_utils__WEBPACK_IMPORTED_MODULE_3__["getSimpleName"]).filter((n) => n && n !== excludeName));
        this.getUsedDataVolumeNames = (excludeName) => new Set([...this.dataVolumeTemplates, ...this.dataVolumes]
            .map((dv) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getName"])(dv))
            .filter((n) => n && n !== excludeName));
        this.disks = disks;
        this.volumes = volumes;
        this.dataVolumeTemplates = dataVolumeTemplates;
        this.dataVolumes =
            dataVolumes &&
                dataVolumes.filter((dataVolume) => {
                    const ns = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(dataVolume);
                    return !ns || ns === namespace;
                });
        this.pvcs =
            pvcs &&
                pvcs.filter((pvc) => {
                    const ns = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(pvc);
                    return !ns || ns === namespace;
                });
        this.dataVolumesLoading = dataVolumesLoading;
        this.pvcsLoading = pvcsLoading;
    }
}
CombinedDiskFactory.initializeFromVMLikeEntity = (vmLikeEntity, datavolumes, pvcs) => {
    const vmiLikeWrapper = Object(_utils_convert__WEBPACK_IMPORTED_MODULE_13__["asVMILikeWrapper"])(vmLikeEntity);
    return new CombinedDiskFactory({
        disks: (vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getDisks()) || [],
        volumes: (vmiLikeWrapper === null || vmiLikeWrapper === void 0 ? void 0 : vmiLikeWrapper.getVolumes()) || [],
        dataVolumeTemplates: Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeTemplates"])(Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["asVM"])(vmLikeEntity)),
        dataVolumes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getLoadedData"])(datavolumes, []),
        pvcs: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getLoadedData"])(pvcs),
        dataVolumesLoading: !Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isLoaded"])(datavolumes),
        pvcsLoading: !Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isLoaded"])(pvcs),
        namespace: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_2__["getNamespace"])(vmLikeEntity),
    });
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/data-volume-wrapper.ts":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/data-volume-wrapper.ts ***!
  \****************************************************************************/
/*! exports provided: DataVolumeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVolumeWrapper", function() { return DataVolumeWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/utils/owner-references */ "./packages/console-shared/src/utils/owner-references.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/vm/storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");
/* harmony import */ var _selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/dv/selectors */ "./packages/kubevirt-plugin/src/selectors/dv/selectors.ts");
/* harmony import */ var _components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/form/size-unit-utils */ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _common_k8s_resource_object_with_type_property_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/k8s-resource-object-with-type-property-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/k8s-resource-object-with-type-property-wrapper.ts");









class DataVolumeWrapper extends _common_k8s_resource_object_with_type_property_wrapper__WEBPACK_IMPORTED_MODULE_8__["K8sResourceObjectWithTypePropertyWrapper"] {
    constructor(dataVolumeTemplate, copy = false) {
        super(_models__WEBPACK_IMPORTED_MODULE_7__["DataVolumeModel"], dataVolumeTemplate, copy, _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["DataVolumeSourceType"], ['spec', 'source']);
        this.getStorageClassName = () => Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeStorageClassName"])(this.data);
        this.getPesistentVolumeClaimName = () => this.getIn(['spec', 'source', 'pvc', 'name']);
        this.getPesistentVolumeClaimNamespace = () => this.getIn(['spec', 'source', 'pvc', 'namespace']);
        this.getURL = () => this.getIn(['spec', 'source', 'http', 'url']);
        this.getSize = () => {
            const parts = Object(_components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_6__["stringValueUnitSplit"])(Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeStorageSize"])(this.data) || '');
            return {
                value: parts[0],
                unit: parts[1],
            };
        };
        this.getReadabableSize = () => {
            const { value, unit } = this.getSize();
            return `${value} ${Object(_components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_6__["toIECUnit"])(unit) || _components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_6__["BinaryUnit"].B}`;
        };
        this.hasSize = () => this.getSize().value > 0;
        this.getAccessModes = () => Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeAccessModes"])(this.data);
        this.getVolumeMode = () => Object(_selectors_dv_selectors__WEBPACK_IMPORTED_MODULE_5__["getDataVolumeVolumeMode"])(this.data);
        this.getVolumeModeEnum = () => _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeMode"].fromString(this.getVolumeMode());
        this.getAccessModesEnum = () => {
            const accessModes = this.getAccessModes();
            return accessModes ? accessModes.map((mode) => _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["AccessMode"].fromString(mode)) : accessModes;
        };
        this.setSize = (value, unit = 'Gi') => {
            this.ensurePath('spec.pvc.resources.requests');
            this.data.spec.pvc.resources.requests.storage = `${value}${unit}`;
            return this;
        };
        this.setStorageClassName = (storageClassName) => {
            this.ensurePath('spec.pvc');
            this.data.spec.pvc.storageClassName = storageClassName;
            return this;
        };
        this.setAccessModes = (accessModes) => {
            this.ensurePath('spec.pvc');
            this.data.spec.pvc.accessModes =
                accessModes && accessModes.map((a) => a === null || a === void 0 ? void 0 : a.getValue()).filter((a) => a); // allow null and undefined
            return this;
        };
        this.setVolumeMode = (volumeMode) => {
            this.ensurePath('spec.pvc');
            this.data.spec.pvc.volumeMode = volumeMode && volumeMode.getValue(); // allow null and undefined
            return this;
        };
        this.addOwnerReferences = (...additionalOwnerReferences) => {
            if (!Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getOwnerReferences"])(this.data)) {
                this.data.metadata.ownerReferences = [];
            }
            if (additionalOwnerReferences) {
                const ownerReferences = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getOwnerReferences"])(this.data);
                additionalOwnerReferences.forEach((newReference) => {
                    if (!ownerReferences.some((oldReference) => Object(_console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_2__["compareOwnerReference"])(oldReference, newReference))) {
                        ownerReferences.push(newReference);
                    }
                });
            }
            return this;
        };
    }
    init(data = {}) {
        super.init(data);
        const { size, unit, storageClassName } = data;
        if (size != null && unit) {
            this.setSize(size, unit);
        }
        if (storageClassName !== undefined) {
            this.setStorageClassName(storageClassName);
        }
        return this;
    }
    mergeWith(...dataVolumeWrappers) {
        super.mergeWith(...dataVolumeWrappers);
        this.clearIfEmpty('spec.pvc.storageClassName');
        this.clearIfEmpty('spec.pvc.accessModes');
        this.clearIfEmpty('spec.pvc.volumeMode');
        const accessModes = this.getAccessModesEnum();
        if ((accessModes === null || accessModes === void 0 ? void 0 : accessModes.length) > 1) {
            // API currently allows only one mode
            this.setAccessModes([accessModes[0]]);
        }
        return this;
    }
    sanitize(type, { name, namespace, url }) {
        switch (type) {
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["DataVolumeSourceType"].HTTP:
                return { url };
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["DataVolumeSourceType"].PVC:
                return { name, namespace };
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["DataVolumeSourceType"].BLANK:
            default:
                return {};
        }
    }
}
/**
 * @deprecated FIXME deprecate initializeFromSimpleData in favor of init
 */
DataVolumeWrapper.initializeFromSimpleData = ({ name, namespace, type, typeData, accessModes, volumeMode, size, unit, storageClassName, }) => {
    const resources = size == null
        ? undefined
        : {
            requests: {
                storage: size && unit ? `${size}${unit}` : size,
            },
        };
    return new DataVolumeWrapper({
        apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["DataVolumeModel"]),
        kind: _models__WEBPACK_IMPORTED_MODULE_7__["DataVolumeModel"].kind,
        metadata: {
            name,
            namespace,
        },
        spec: {
            pvc: {
                accessModes: lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](accessModes),
                volumeMode: lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](volumeMode),
                resources,
                storageClassName,
            },
            source: {},
        },
    }).setType(type, typeData);
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/persistent-volume-claim-wrapper.ts":
/*!****************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/persistent-volume-claim-wrapper.ts ***!
  \****************************************************************************************/
/*! exports provided: PersistentVolumeClaimWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentVolumeClaimWrapper", function() { return PersistentVolumeClaimWrapper; });
/* harmony import */ var _selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../selectors/pvc/selectors */ "./packages/kubevirt-plugin/src/selectors/pvc/selectors.ts");
/* harmony import */ var _components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/form/size-unit-utils */ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx");
/* harmony import */ var _common_k8s_resource_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/k8s-resource-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/k8s-resource-wrapper.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/vm/storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");





class PersistentVolumeClaimWrapper extends _common_k8s_resource_wrapper__WEBPACK_IMPORTED_MODULE_2__["K8sResourceWrapper"] {
    constructor(persistentVolumeClaim, copy = false) {
        super(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["PersistentVolumeClaimModel"], persistentVolumeClaim, copy);
        this.getStorageClassName = () => Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_0__["getPvcStorageClassName"])(this.data);
        this.getSize = () => {
            const parts = Object(_components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_1__["stringValueUnitSplit"])(Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_0__["getPvcStorageSize"])(this.data) || '');
            return {
                value: parts[0],
                unit: parts[1],
            };
        };
        this.getReadabableSize = () => {
            const { value, unit } = this.getSize();
            return `${value} ${Object(_components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_1__["toIECUnit"])(unit) || _components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_1__["BinaryUnit"].B}`;
        };
        this.hasSize = () => this.getSize().value > 0;
        this.getAccessModes = () => Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_0__["getPvcAccessModes"])(this.data);
        this.getVolumeMode = () => Object(_selectors_pvc_selectors__WEBPACK_IMPORTED_MODULE_0__["getPvcVolumeMode"])(this.data);
        this.getVolumeModeEnum = () => _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["VolumeMode"].fromString(this.getVolumeMode());
        this.getAccessModesEnum = () => {
            const accessModes = this.getAccessModes();
            return accessModes ? accessModes.map((mode) => _constants_vm_storage__WEBPACK_IMPORTED_MODULE_4__["AccessMode"].fromString(mode)) : accessModes;
        };
        this.setSize = (value, unit = 'Gi') => {
            this.ensurePath('spec.resources.requests');
            this.data.spec.resources.requests.storage = `${value}${unit}`;
            return this;
        };
        this.setStorageClassName = (storageClassName) => {
            this.ensurePath('spec');
            this.data.spec.storageClassName = storageClassName;
            return this;
        };
        this.setAccessModes = (accessModes) => {
            this.ensurePath('spec');
            this.data.spec.accessModes =
                accessModes && accessModes.map((a) => a === null || a === void 0 ? void 0 : a.getValue()).filter((a) => a); // allow null and undefined
            return this;
        };
        this.setVolumeMode = (volumeMode) => {
            this.ensurePath('spec');
            this.data.spec.volumeMode = volumeMode && volumeMode.getValue(); // allow null and undefined
            return this;
        };
    }
    init(data) {
        super.init(data);
        const { size, unit, storageClassName } = data || {};
        if (size != null && unit) {
            this.setSize(size, unit);
        }
        if (storageClassName !== undefined) {
            this.setStorageClassName(storageClassName);
        }
        return this;
    }
    mergeWith(...pvcWrappers) {
        super.mergeWith(...pvcWrappers);
        this.clearIfEmpty('spec.storageClassName');
        this.clearIfEmpty('spec.accessModes');
        this.clearIfEmpty('spec.volumeMode');
        const accessModes = this.getAccessModesEnum();
        if ((accessModes === null || accessModes === void 0 ? void 0 : accessModes.length) > 1) {
            // API currently allows only one mode
            this.setAccessModes([accessModes[0]]);
        }
        return this;
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vm-wrapper.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/vm-wrapper.ts ***!
  \*******************************************************************/
/*! exports provided: VMWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMWrapper", function() { return VMWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/utils/owner-references */ "./packages/console-shared/src/utils/owner-references.ts");
/* harmony import */ var _common_k8s_resource_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/k8s-resource-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/k8s-resource-wrapper.ts");
/* harmony import */ var _selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../selectors/vm/selectors */ "./packages/kubevirt-plugin/src/selectors/vm/selectors.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../selectors/utils */ "./packages/kubevirt-plugin/src/selectors/utils.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _volume_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "./packages/kubevirt-plugin/src/utils/index.ts");
/* eslint-disable lines-between-class-members */











class VMWrapper extends _common_k8s_resource_wrapper__WEBPACK_IMPORTED_MODULE_3__["K8sResourceWrapper"] {
    constructor(vm, copy = false) {
        super(_models__WEBPACK_IMPORTED_MODULE_9__["VirtualMachineModel"], vm, copy);
        this.hasTemplateLabel = (label) => lodash__WEBPACK_IMPORTED_MODULE_0__["has"](this.getTemplateLabels(null), label);
        this.getOperatingSystem = () => Object(_selectors_utils__WEBPACK_IMPORTED_MODULE_6__["findKeySuffixValue"])(this.getLabels(), _constants_vm__WEBPACK_IMPORTED_MODULE_7__["TEMPLATE_OS_LABEL"]);
        this.getWorkloadProfile = () => Object(_selectors_utils__WEBPACK_IMPORTED_MODULE_6__["findKeySuffixValue"])(this.getLabels(), _constants_vm__WEBPACK_IMPORTED_MODULE_7__["TEMPLATE_WORKLOAD_LABEL"]);
        this.getFlavor = () => Object(_selectors_utils__WEBPACK_IMPORTED_MODULE_6__["findKeySuffixValue"])(this.getLabels(), _constants_vm__WEBPACK_IMPORTED_MODULE_7__["TEMPLATE_FLAVOR_LABEL"]);
        this.getMemory = () => { var _a, _b, _c, _d, _e, _f, _g; return (_g = (_f = (_e = (_d = (_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.resources) === null || _f === void 0 ? void 0 : _f.requests) === null || _g === void 0 ? void 0 : _g.memory; };
        this.getCPU = () => { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.cpu; };
        this.getTemplateLabels = (defaultValue = {}) => Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_1__["getLabels"])(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](this.data, 'spec.template'), defaultValue);
        this.getDataVolumeTemplates = (defaultValue = []) => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getDataVolumeTemplates"])(this.data, defaultValue);
        this.getNetworkInterfaces = (defaultValue = []) => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getInterfaces"])(this.data, defaultValue);
        this.getDisks = (defaultValue = []) => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getDisks"])(this.data, defaultValue);
        this.getCDROMs = () => this.getDisks().filter((device) => !!device.cdrom);
        this.getNetworks = (defaultValue = []) => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getNetworks"])(this.data, defaultValue);
        this.getVolumes = (defaultValue = []) => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getVolumes"])(this.data, defaultValue);
        this.getLabeledDevices = () => Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_5__["transformDevices"])(this.getDisks(), this.getNetworkInterfaces());
        this.getNodeSelector = () => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getNodeSelector"])(this.data);
        this.getTolerations = () => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getTolerations"])(this.data);
        this.getConfigMaps = () => this.getVolumes().filter((vol) => Object.keys(vol).includes('configMap'));
        this.getSecrets = () => this.getVolumes().filter((vol) => Object.keys(vol).includes('secret'));
        this.getServiceAccounts = () => this.getVolumes().filter((vol) => Object.keys(vol).includes('serviceAccount'));
        this.getDiskSerial = (diskName) => {
            const disk = this.getDisks().find((d) => d.name === diskName);
            return disk && Object.keys(disk).includes('serial') && disk.serial;
        };
        this.getAffinity = () => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getAffinity"])(this.data);
        this.isDedicatedCPUPlacement = () => Object(_selectors_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["isDedicatedCPUPlacement"])(this.data);
        this.getVMImportOwnerReference = () => {
            return (this.getOwnerReferences() || []).find((reference) => Object(_console_shared_src_utils_owner_references__WEBPACK_IMPORTED_MODULE_2__["compareOwnerReference"])(reference, Object(_utils__WEBPACK_IMPORTED_MODULE_10__["buildOwnerReferenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["VirtualMachineImportModel"]), true));
        };
        this.addTemplateLabel = (key, value) => {
            if (key) {
                this.ensurePath('spec.template.metadata.labels');
                this.data.spec.template.metadata.labels[key] = value;
            }
            return this;
        };
        this.addTemplateAnnotation = (key, value) => {
            if (key) {
                this.ensurePath('spec.template.metadata.annotations');
                this.data.spec.template.metadata.annotations[key] = value;
            }
            return this;
        };
        this.setMemory = (value, suffix) => {
            this.ensurePath('spec.template.spec.domain.resources.requests');
            this.data.spec.template.spec.domain.resources.requests.memory = suffix
                ? `${value}${suffix}`
                : value;
            return this;
        };
        this.setCPU = (cpu) => {
            var _a, _b, _c, _d;
            if (cpu) {
                this.ensurePath('spec.template.spec.domain.cpu', {});
                const { sockets, cores, threads } = cpu;
                const vmCPU = this.data.spec.template.spec.domain.cpu;
                vmCPU.sockets = sockets === undefined ? vmCPU.sockets : sockets;
                vmCPU.cores = cores === undefined ? vmCPU.cores : cores;
                vmCPU.threads = threads === undefined ? vmCPU.threads : threads;
            }
            else if ((_d = (_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) {
                delete this.data.spec.template.spec.domain.cpu;
            }
            return this;
        };
        this.setRunning = (isRunning) => {
            this.ensurePath('spec');
            this.data.spec.running = !!isRunning;
            return this;
        };
        this.setNetworkInterfaces = (networks) => {
            this.ensurePath('spec.template.spec.domain.devices');
            this.data.spec.template.spec.domain.devices.interfaces = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](networks);
            this.ensureNetworksConsistency();
            return this;
        };
        this.setWizardNetworks = (networks) => {
            this.ensurePath('spec.template.spec.domain.devices');
            this.data.spec.template.spec.domain.devices.interfaces = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](networks.map((network) => network.networkInterface));
            this.data.spec.template.spec.networks = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](networks.map((network) => network.network));
            this.ensureNetworksConsistency();
            return this;
        };
        this.prependStorage = ({ disk, volume, dataVolume, }) => {
            this.ensureStorages();
            this.getDisks().unshift(disk);
            this.getVolumes().unshift(volume);
            if (dataVolume) {
                this.getDataVolumeTemplates().unshift(dataVolume);
            }
            this.ensureStorageConsistency();
            return this;
        };
        this.removeStorage = (diskName) => {
            this.ensurePath('spec.template.spec.domain.devices', {});
            this.data.spec.template.spec.domain.devices.disks = this.getDisks().filter((disk) => disk.name !== diskName);
            const volumeWrapper = new _volume_wrapper__WEBPACK_IMPORTED_MODULE_8__["VolumeWrapper"](this.getVolumes().find((volume) => volume.name === diskName));
            this.data.spec.template.spec.volumes = this.getVolumes().filter((volume) => volume.name !== diskName);
            if (volumeWrapper.getType() === _constants_vm__WEBPACK_IMPORTED_MODULE_7__["VolumeType"].DATA_VOLUME) {
                this.data.spec.dataVolumeTemplates = this.getDataVolumeTemplates().filter((dataVolume) => dataVolume.name !== volumeWrapper.getDataVolumeName());
            }
            this.ensureStorageConsistency();
            return this;
        };
        this.setWizardStorages = (storages) => {
            this.ensurePath('spec.template.spec.domain.devices');
            this.data.spec.template.spec.domain.devices.disks = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](storages.map((storage) => storage.disk));
            this.data.spec.template.spec.volumes = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](storages.map((storage) => storage.volume));
            this.data.spec.dataVolumeTemplates = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](storages.map((storage) => storage.dataVolume));
            this.ensureStorageConsistency();
            return this;
        };
        this.setAutoAttachPodInterface = (autoAttach) => {
            this.ensurePath('spec.template.spec.domain.devices');
            this.data.spec.template.spec.domain.devices.autoattachPodInterface = autoAttach;
            return this;
        };
        this.setHostname = (hostname) => {
            this.ensurePath('spec.template.spec');
            this.data.spec.template.spec.hostname = hostname;
            return this;
        };
        this.ensureDataVolumeTemplates = () => this.ensurePath('spec.dataVolumeTemplates', []);
        this.ensureStorages = () => {
            this.ensurePath('spec.template.spec.domain.devices.disks', []);
            this.ensurePath('spec.template.spec.volumes', []);
            this.ensurePath('spec.dataVolumeTemplates', []);
        };
        this.ensureNetworksConsistency = () => {
            this.clearIfEmpty('spec.template.spec.domain.devices.interfaces');
            this.clearIfEmpty('spec.template.spec.networks');
        };
        this.ensureStorageConsistency = () => {
            this.clearIfEmpty('spec.template.spec.domain.devices.disks');
            this.clearIfEmpty('spec.template.spec.volumes');
            this.clearIfEmpty('spec.dataVolumeTemplates');
        };
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/vmi-wrapper.ts":
/*!********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/vmi-wrapper.ts ***!
  \********************************************************************/
/*! exports provided: VMIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMIWrapper", function() { return VMIWrapper; });
/* harmony import */ var _common_k8s_resource_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/k8s-resource-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/k8s-resource-wrapper.ts");
/* harmony import */ var _selectors_vmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selectors/vmi */ "./packages/kubevirt-plugin/src/selectors/vmi/index.ts");
/* harmony import */ var _selectors_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/vm */ "./packages/kubevirt-plugin/src/selectors/vm/index.ts");
/* harmony import */ var _selectors_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/utils */ "./packages/kubevirt-plugin/src/selectors/utils.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");






class VMIWrapper extends _common_k8s_resource_wrapper__WEBPACK_IMPORTED_MODULE_0__["K8sResourceWrapper"] {
    constructor(vmi, copy = false) {
        super(_models__WEBPACK_IMPORTED_MODULE_5__["VirtualMachineInstanceModel"], vmi, copy);
        this.getOperatingSystem = () => Object(_selectors_utils__WEBPACK_IMPORTED_MODULE_3__["findKeySuffixValue"])(this.getLabels(), _constants_vm__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_OS_LABEL"]);
        this.getWorkloadProfile = () => Object(_selectors_utils__WEBPACK_IMPORTED_MODULE_3__["findKeySuffixValue"])(this.getLabels(), _constants_vm__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_WORKLOAD_LABEL"]);
        this.getFlavor = () => Object(_selectors_utils__WEBPACK_IMPORTED_MODULE_3__["findKeySuffixValue"])(this.getLabels(), _constants_vm__WEBPACK_IMPORTED_MODULE_4__["TEMPLATE_FLAVOR_LABEL"]);
        this.getMemory = () => { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.resources) === null || _d === void 0 ? void 0 : _d.requests) === null || _e === void 0 ? void 0 : _e.memory; };
        this.getCPU = () => { var _a, _b, _c; return (_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.domain) === null || _c === void 0 ? void 0 : _c.cpu; };
        this.getNetworkInterfaces = (defaultValue = []) => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMIInterfaces"])(this.data, defaultValue);
        this.getDisks = (defaultValue = []) => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMIDisks"])(this.data, defaultValue);
        this.getCDROMs = () => this.getDisks().filter((device) => !!device.cdrom);
        this.getNetworks = (defaultValue = []) => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMINetworks"])(this.data, defaultValue);
        this.getVolumes = (defaultValue = []) => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMIVolumes"])(this.data, defaultValue);
        this.getLabeledDevices = () => Object(_selectors_vm__WEBPACK_IMPORTED_MODULE_2__["transformDevices"])(this.getDisks(), this.getNetworkInterfaces());
        this.isDedicatedCPUPlacement = () => { var _a, _b, _c; return ((_c = (_b = (_a = this.data.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.cpu) === null || _c === void 0 ? void 0 : _c.dedicatedCpuPlacement) || false; };
        this.getNodeSelector = () => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMINodeSelector"])(this.data);
        this.getTolerations = () => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMITolerations"])(this.data);
        this.getAffinity = () => Object(_selectors_vmi__WEBPACK_IMPORTED_MODULE_1__["getVMIAffinity"])(this.data);
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts":
/*!***********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts ***!
  \***********************************************************************/
/*! exports provided: VolumeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeWrapper", function() { return VolumeWrapper; });
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _common_object_with_type_property_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/object-with-type-property-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/common/object-with-type-property-wrapper.ts");
/* harmony import */ var _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/vm/storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");
/* harmony import */ var _selectors_vm_volume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/vm/volume */ "./packages/kubevirt-plugin/src/selectors/vm/volume.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");





const getVolumeReferencedObject = (volume) => {
    var _a, _b, _c;
    const typeData = volume.getTypeData();
    let name;
    switch (volume.getType()) {
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].CLOUD_INIT_CONFIG_DRIVE:
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].CLOUD_INIT_NO_CLOUD:
            name = ((_a = typeData.networkDataSecretRef) === null || _a === void 0 ? void 0 : _a.name) || ((_b = typeData.secretRef) === null || _b === void 0 ? void 0 : _b.name);
            return (name && {
                name,
                model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["SecretModel"],
            });
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].CONFIG_MAP:
            return {
                name: typeData.name,
                model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ConfigMapModel"],
            };
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].DATA_VOLUME:
            return {
                name: typeData.name,
                model: _models__WEBPACK_IMPORTED_MODULE_4__["DataVolumeModel"],
            };
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].EPHEMERAL:
            return {
                name: (_c = typeData.persistentVolumeClaim) === null || _c === void 0 ? void 0 : _c.claimName,
                model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["PersistentVolumeClaimModel"],
            };
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].PERSISTENT_VOLUME_CLAIM:
            return {
                name: typeData.claimName,
                model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["PersistentVolumeClaimModel"],
            };
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].SECRET:
            return {
                name: typeData.secretName,
                model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["SecretModel"],
            };
        case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].SERVICE_ACCOUNT:
            return {
                name: typeData.serviceAccountName,
                model: _console_internal_models__WEBPACK_IMPORTED_MODULE_0__["ServiceAccountModel"],
            };
        default:
            return null;
    }
};
class VolumeWrapper extends _common_object_with_type_property_wrapper__WEBPACK_IMPORTED_MODULE_1__["ObjectWithTypePropertyWrapper"] {
    constructor(volume, copy = false) {
        super(volume, copy, _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"]);
        this.getName = () => this.get('name');
        this.getCloudInitNoCloud = () => this.get('cloudInitNoCloud');
        this.getPersistentVolumeClaimName = () => Object(_selectors_vm_volume__WEBPACK_IMPORTED_MODULE_3__["getVolumePersistentVolumeClaimName"])(this.data);
        this.getDataVolumeName = () => Object(_selectors_vm_volume__WEBPACK_IMPORTED_MODULE_3__["getVolumeDataVolumeName"])(this.data);
        this.getContainerImage = () => Object(_selectors_vm_volume__WEBPACK_IMPORTED_MODULE_3__["getVolumeContainerImage"])(this.data);
        this.getReferencedObject = () => getVolumeReferencedObject(this);
    }
    init({ name }) {
        if (name !== undefined) {
            this.data.name = name;
        }
        return this;
    }
    sanitize(type, { name, claimName, image, userData, userDataBase64 }) {
        switch (type) {
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].DATA_VOLUME:
                return { name };
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].PERSISTENT_VOLUME_CLAIM:
                return { claimName };
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].CONTAINER_DISK:
                return { image };
            case _constants_vm_storage__WEBPACK_IMPORTED_MODULE_2__["VolumeType"].CLOUD_INIT_NO_CLOUD:
                return userDataBase64 ? { userDataBase64 } : { userData };
            default:
                return null;
        }
    }
}
/**
 * @deprecated FIXME deprecate initializeFromSimpleData in favor of init
 */
VolumeWrapper.initializeFromSimpleData = ({ name, type, typeData, }) => new VolumeWrapper({ name }).setType(type, typeData);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/affinity/selectors.ts":
/*!**********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/affinity/selectors.ts ***!
  \**********************************************************************/
/*! exports provided: getRequiredScheduling, getPreferredScheduling, getNodeAffinityRequiredTerms, getNodeAffinityPreferredTerms, getPodAffinityRequiredTerms, getPodAffinityPreferredTerms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredScheduling", function() { return getRequiredScheduling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreferredScheduling", function() { return getPreferredScheduling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeAffinityRequiredTerms", function() { return getNodeAffinityRequiredTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeAffinityPreferredTerms", function() { return getNodeAffinityPreferredTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodAffinityRequiredTerms", function() { return getPodAffinityRequiredTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodAffinityPreferredTerms", function() { return getPodAffinityPreferredTerms; });
const getRequiredScheduling = (affinity) => affinity === null || affinity === void 0 ? void 0 : affinity.requiredDuringSchedulingIgnoredDuringExecution;
const getPreferredScheduling = (affinity) => affinity === null || affinity === void 0 ? void 0 : affinity.preferredDuringSchedulingIgnoredDuringExecution;
// Node Affinity
const getNodeAffinityRequiredTerms = (affinity) => { var _a; return (_a = affinity === null || affinity === void 0 ? void 0 : affinity.requiredDuringSchedulingIgnoredDuringExecution) === null || _a === void 0 ? void 0 : _a.nodeSelectorTerms; };
const getNodeAffinityPreferredTerms = (affinity) => affinity === null || affinity === void 0 ? void 0 : affinity.preferredDuringSchedulingIgnoredDuringExecution;
// Pod Affinity
const getPodAffinityRequiredTerms = (affinity) => affinity === null || affinity === void 0 ? void 0 : affinity.requiredDuringSchedulingIgnoredDuringExecution;
const getPodAffinityPreferredTerms = (affinity) => affinity === null || affinity === void 0 ? void 0 : affinity.preferredDuringSchedulingIgnoredDuringExecution;


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/config-map/sc-defaults.ts":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/config-map/sc-defaults.ts ***!
  \**************************************************************************/
/*! exports provided: getDefaultSCVolumeMode, getDefaultSCAccessModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSCVolumeMode", function() { return getDefaultSCVolumeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSCAccessModes", function() { return getDefaultSCAccessModes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/vm/storage */ "./packages/kubevirt-plugin/src/constants/vm/storage/index.ts");


const getSCConfigMapAttribute = (storageClassConfigMap, storageClassName, attributeName) => {
    const hasSubAttribute = storageClassName &&
        attributeName &&
        lodash__WEBPACK_IMPORTED_MODULE_0__["has"](storageClassConfigMap, ['data', `${storageClassName}.${attributeName}`]);
    return (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](storageClassConfigMap, [
        'data',
        hasSubAttribute ? `${storageClassName}.${attributeName}` : attributeName,
    ]) || null);
};
const getDefaultSCVolumeMode = (storageClassConfigMap, storageClassName) => {
    const configMapDefault = getSCConfigMapAttribute(storageClassConfigMap, storageClassName, 'volumeMode');
    const volumeMode = configMapDefault ? _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["VolumeMode"].fromString(configMapDefault) : null;
    return volumeMode || _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["VolumeMode"].FILESYSTEM;
};
const getDefaultSCAccessModes = (storageClassConfigMap, storageClassName) => {
    const configMapDefault = getSCConfigMapAttribute(storageClassConfigMap, storageClassName, 'accessMode');
    const accessMode = configMapDefault ? _constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["AccessMode"].fromString(configMapDefault) : null;
    return accessMode ? [accessMode] : [_constants_vm_storage__WEBPACK_IMPORTED_MODULE_1__["AccessMode"].READ_WRITE_ONCE];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/pvc/selectors.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/pvc/selectors.ts ***!
  \*****************************************************************/
/*! exports provided: getPvcResources, getPvcStorageSize, getPvcAccessModes, getPvcVolumeMode, getPvcStorageClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPvcResources", function() { return getPvcResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPvcStorageSize", function() { return getPvcStorageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPvcAccessModes", function() { return getPvcAccessModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPvcVolumeMode", function() { return getPvcVolumeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPvcStorageClassName", function() { return getPvcStorageClassName; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");


const getPvcResources = (pvc) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, 'spec.resources');
const getPvcStorageSize = (pvc) => Object(_selectors__WEBPACK_IMPORTED_MODULE_1__["getStorageSize"])(getPvcResources(pvc));
const getPvcAccessModes = (pvc) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, 'spec.accessModes');
const getPvcVolumeMode = (pvc) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, 'spec.volumeMode');
const getPvcStorageClassName = (pvc) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](pvc, 'spec.storageClassName');


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/service/index.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/service/index.ts ***!
  \*****************************************************************/
/*! exports provided: getServicePort, getServicesForVmi, getRdpAddressPort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./packages/kubevirt-plugin/src/selectors/service/selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServicePort", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__["getServicePort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServicesForVmi", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__["getServicesForVmi"]; });

/* harmony import */ var _rdp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rdp */ "./packages/kubevirt-plugin/src/selectors/service/rdp/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRdpAddressPort", function() { return _rdp__WEBPACK_IMPORTED_MODULE_1__["getRdpAddressPort"]; });





/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/service/rdp/index.ts":
/*!*********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/service/rdp/index.ts ***!
  \*********************************************************************/
/*! exports provided: getRdpAddressPort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRdpAddressPort", function() { return getRdpAddressPort; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors */ "./packages/kubevirt-plugin/src/selectors/service/selectors.ts");
/* eslint-disable no-console */



const getRdpAddressPort = (rdpService, launcherPod) => {
    const rdpPortObj = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getServicePort"])(rdpService, _constants_vm__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_RDP_PORT"]);
    if (!rdpPortObj) {
        return null;
    }
    let port = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](rdpPortObj, 'port');
    let address;
    switch (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](rdpService, 'spec.type')) {
        case 'LoadBalancer':
            address = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](rdpService, 'spec.externalIPs[0]');
            if (!address) {
                console.warn('External IP is not defined for the LoadBalancer RDP Service: ', rdpService);
            }
            break;
        case 'ClusterIP':
            address = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](rdpService, 'spec.clusterIP');
            if (!address) {
                console.warn('Cluster IP is not defined for the ClusterIP RDP Service: ', rdpService);
            }
            break;
        case 'NodePort':
            port = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](rdpPortObj, 'nodePort');
            if (launcherPod) {
                address = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](launcherPod, 'status.hostIP');
            }
            if (!address) {
                console.warn('Node IP (launcherpod.status.hostIP) is not yet known for NodePort RDP Service: ', rdpService);
            }
            break;
        default:
            console.error('Unrecognized Service type: ', rdpService);
    }
    if (!address || !port) {
        return null;
    }
    console.log('RDP requested for: ', address, port);
    return {
        address,
        port,
    };
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/service/selectors.ts":
/*!*********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/service/selectors.ts ***!
  \*********************************************************************/
/*! exports provided: getServicePort, getServicesForVmi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServicePort", function() { return getServicePort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServicesForVmi", function() { return getServicesForVmi; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


const getServicePort = (service, targetPort) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](service, ['spec', 'ports'], []).find((servicePort) => targetPort === servicePort.targetPort);
const getServiceSelectors = (service) => service && service.spec && service.spec.selector ? service.spec.selector : {};
const getServicesForVmi = (services, vmi) => {
    const vmLabels = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getLabels"])(vmi, {});
    return services.filter((service) => {
        const selectors = getServiceSelectors(service);
        const selectorKeys = Object.keys(selectors);
        return selectorKeys.length > 0
            ? selectorKeys.every((key) => vmLabels[key] === selectors[key])
            : false;
    });
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vm-like/flavor.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vm-like/flavor.ts ***!
  \******************************************************************/
/*! exports provided: isCustomFlavor, toUIFlavor, toUIFlavorLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCustomFlavor", function() { return isCustomFlavor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUIFlavor", function() { return toUIFlavor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUIFlavorLabel", function() { return toUIFlavorLabel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");


const isCustomFlavor = (flavor) => !flavor || (flavor === null || flavor === void 0 ? void 0 : flavor.toLowerCase()) === _constants_vm__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_FLAVOR"].toLowerCase();
// UI representation of flavor tiny|small|medium|large|Custom
const toUIFlavor = (flavor) => (isCustomFlavor(flavor) ? _constants_vm__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_FLAVOR"] : flavor);
const toUIFlavorLabel = (flavor) => lodash__WEBPACK_IMPORTED_MODULE_0__["capitalize"](toUIFlavor(flavor));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vm-like/selectors.ts":
/*!*********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vm-like/selectors.ts ***!
  \*********************************************************************/
/*! exports provided: getVMLikeTolerations, getVMLikeNodeSelector, getVMLikeAffinity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikeTolerations", function() { return getVMLikeTolerations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikeNodeSelector", function() { return getVMLikeNodeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikeAffinity", function() { return getVMLikeAffinity; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _vm_vmlike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/vmlike */ "./packages/kubevirt-plugin/src/selectors/vm/vmlike.ts");
/* harmony import */ var _vmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vmi */ "./packages/kubevirt-plugin/src/selectors/vmi/index.ts");
/* harmony import */ var _vm_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vm/selectors */ "./packages/kubevirt-plugin/src/selectors/vm/selectors.ts");




const getVMLikeTolerations = (vm) => vm.kind === _models__WEBPACK_IMPORTED_MODULE_0__["VirtualMachineInstanceModel"].kind
    ? Object(_vmi__WEBPACK_IMPORTED_MODULE_2__["getVMITolerations"])(vm)
    : Object(_vm_selectors__WEBPACK_IMPORTED_MODULE_3__["getTolerations"])(Object(_vm_vmlike__WEBPACK_IMPORTED_MODULE_1__["asVM"])(vm));
const getVMLikeNodeSelector = (vm) => vm.kind === _models__WEBPACK_IMPORTED_MODULE_0__["VirtualMachineInstanceModel"].kind
    ? Object(_vmi__WEBPACK_IMPORTED_MODULE_2__["getVMINodeSelector"])(vm)
    : Object(_vm_selectors__WEBPACK_IMPORTED_MODULE_3__["getNodeSelector"])(Object(_vm_vmlike__WEBPACK_IMPORTED_MODULE_1__["asVM"])(vm));
const getVMLikeAffinity = (vm) => vm.kind === _models__WEBPACK_IMPORTED_MODULE_0__["VirtualMachineInstanceModel"].kind
    ? Object(_vmi__WEBPACK_IMPORTED_MODULE_2__["getVMIAffinity"])(vm)
    : Object(_vm_selectors__WEBPACK_IMPORTED_MODULE_3__["getAffinity"])(Object(_vm_vmlike__WEBPACK_IMPORTED_MODULE_1__["asVM"])(vm));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vm-template/advanced.ts":
/*!************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vm-template/advanced.ts ***!
  \************************************************************************/
/*! exports provided: getTemplatesWithLabels, getTemplatesOfLabelType, getUserTemplate, getTemplatesLabelValues, getTemplateFlavors, getTemplateHostname, getTemplateOperatingSystems, getTemplateWorkloadProfiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplatesWithLabels", function() { return getTemplatesWithLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplatesOfLabelType", function() { return getTemplatesOfLabelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserTemplate", function() { return getUserTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplatesLabelValues", function() { return getTemplatesLabelValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateFlavors", function() { return getTemplateFlavors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateHostname", function() { return getTemplateHostname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateOperatingSystems", function() { return getTemplateOperatingSystems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateWorkloadProfiles", function() { return getTemplateWorkloadProfiles; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _k8s_wrapper_vm_cloud_init_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../k8s/wrapper/vm/cloud-init-data-helper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/cloud-init-data-helper.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors */ "./packages/kubevirt-plugin/src/selectors/selectors.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _vm_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vm/selectors */ "./packages/kubevirt-plugin/src/selectors/vm/selectors.ts");
/* harmony import */ var _k8s_wrapper_vm_volume_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../k8s/wrapper/vm/volume-wrapper */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/volume-wrapper.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic */ "./packages/kubevirt-plugin/src/selectors/vm-template/basic.ts");
/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/sort */ "./packages/kubevirt-plugin/src/utils/sort.ts");








const getTemplatesWithLabels = (templates, labels) => {
    const requiredLabels = labels.filter((label) => label);
    return templates.filter((template) => {
        const templateLabels = new Set(Object.keys(Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getLabels"])(template, {})));
        const missingLabel = requiredLabels.find((requiredLabel) => !templateLabels.has(requiredLabel));
        return !missingLabel;
    });
};
const getTemplatesOfLabelType = (templates, type) => (templates || []).filter((template) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](template, ['metadata', 'labels', _constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_TYPE_LABEL"]]) === type);
const getUserTemplate = (templates, userTemplateName) => {
    const userTemplates = getTemplatesOfLabelType(templates, _constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_TYPE_VM"]);
    return userTemplates.find((template) => template.metadata.name === userTemplateName);
};
const getTemplatesLabelValues = (templates, label) => {
    const labelValues = [];
    (templates || []).forEach((template) => {
        const labels = Object.keys(Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getLabels"])(template, {})).filter((l) => l.startsWith(label));
        labels.forEach((l) => {
            const labelParts = l.split('/');
            if (labelParts.length > 1) {
                const labelName = labelParts[labelParts.length - 1];
                if (labelValues.indexOf(labelName) === -1) {
                    labelValues.push(labelName);
                }
            }
        });
    });
    return labelValues;
};
const getTemplateFlavors = (templates) => getTemplatesLabelValues(templates, _constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_FLAVOR_LABEL"]);
const getTemplateHostname = (template) => {
    const vm = Object(_basic__WEBPACK_IMPORTED_MODULE_6__["selectVM"])(template);
    const YAMLHostname = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](vm, 'spec.template.spec') && vm.spec.template.spec.hostname;
    if (YAMLHostname) {
        return YAMLHostname;
    }
    const cloudInitVolume = Object(_vm_selectors__WEBPACK_IMPORTED_MODULE_4__["getCloudInitVolume"])(vm);
    const data = new _k8s_wrapper_vm_volume_wrapper__WEBPACK_IMPORTED_MODULE_5__["VolumeWrapper"](cloudInitVolume).getCloudInitNoCloud();
    const cloudInitHelper = new _k8s_wrapper_vm_cloud_init_data_helper__WEBPACK_IMPORTED_MODULE_1__["CloudInitDataHelper"](data);
    return cloudInitHelper.get(_k8s_wrapper_vm_cloud_init_data_helper__WEBPACK_IMPORTED_MODULE_1__["CloudInitDataFormKeys"].HOSTNAME);
};
const getTemplateOperatingSystems = (templates) => {
    const osIds = getTemplatesLabelValues(templates, _constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_OS_LABEL"]);
    return Object(_utils_sort__WEBPACK_IMPORTED_MODULE_7__["removeOSDups"])(osIds.map((osId) => {
        const nameAnnotation = `${_constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_OS_NAME_ANNOTATION"]}/${osId}`;
        const template = templates.find((t) => !!Object.keys(Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getAnnotations"])(t, {})).find((annotation) => annotation === nameAnnotation));
        return {
            id: osId,
            name: Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getAnnotation"])(template, nameAnnotation),
        };
    }));
};
const getTemplateWorkloadProfiles = (templates) => getTemplatesLabelValues(templates, _constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_WORKLOAD_LABEL"]);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vm-template/selectors.ts":
/*!*************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vm-template/selectors.ts ***!
  \*************************************************************************/
/*! exports provided: getVMTemplateNamespacedName, getVMTemplate, getTemplateValidationsFromTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMTemplateNamespacedName", function() { return getVMTemplateNamespacedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMTemplate", function() { return getVMTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateValidationsFromTemplate", function() { return getTemplateValidationsFromTemplate; });
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _utils_validations_template_template_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validations/template/template-validations */ "./packages/kubevirt-plugin/src/utils/validations/template/template-validations.ts");



const getVMTemplateNamespacedName = (vm) => {
    const name = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(vm, _constants_vm__WEBPACK_IMPORTED_MODULE_1__["LABEL_USED_TEMPLATE_NAME"]);
    const namespace = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(vm, _constants_vm__WEBPACK_IMPORTED_MODULE_1__["LABEL_USED_TEMPLATE_NAMESPACE"]);
    return name && namespace ? { name, namespace } : null;
};
const getVMTemplate = (vm, templates) => {
    const namespacedName = getVMTemplateNamespacedName(vm);
    return namespacedName
        ? templates.find((template) => Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getName"])(template) === namespacedName.name &&
            Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["getNamespace"])(template) === namespacedName.namespace)
        : undefined;
};
const getTemplateValidationsFromTemplate = (vmTemplate) => {
    var _a, _b;
    const result = (_b = (_a = vmTemplate === null || vmTemplate === void 0 ? void 0 : vmTemplate.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.validations;
    if (!result) {
        return new _utils_validations_template_template_validations__WEBPACK_IMPORTED_MODULE_2__["TemplateValidations"]();
    }
    try {
        return new _utils_validations_template_template_validations__WEBPACK_IMPORTED_MODULE_2__["TemplateValidations"](JSON.parse(result));
    }
    catch (e) {
        return new _utils_validations_template_template_validations__WEBPACK_IMPORTED_MODULE_2__["TemplateValidations"]();
    }
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vm/flavor-text.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vm/flavor-text.ts ***!
  \******************************************************************/
/*! exports provided: getFlavorText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlavorText", function() { return getFlavorText; });
/* harmony import */ var _cpu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpu */ "./packages/kubevirt-plugin/src/selectors/vm/cpu.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form/size-unit-utils */ "./packages/kubevirt-plugin/src/components/form/size-unit-utils.tsx");
/* harmony import */ var _vm_like_flavor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vm-like/flavor */ "./packages/kubevirt-plugin/src/selectors/vm-like/flavor.ts");




const getFlavorText = ({ cpu, memory, flavor, }) => {
    const vcpusCount = Object(_cpu__WEBPACK_IMPORTED_MODULE_0__["vCPUCount"])(cpu);
    const vcpusText = `${vcpusCount} vCPU${vcpusCount > 1 ? 's' : ''}`;
    const memoryBase = Object(_components_form_size_unit_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBytes"])(memory);
    const memoryText = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])(memoryBase).string;
    return `${Object(_vm_like_flavor__WEBPACK_IMPORTED_MODULE_3__["toUIFlavorLabel"])(flavor)}: ${vcpusText}, ${memoryText} Memory`;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vmi/combined.ts":
/*!****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vmi/combined.ts ***!
  \****************************************************************/
/*! exports provided: findRDPService, getRdpConnectionDetails, getSerialConsoleConnectionDetails, getVncConnectionDetails, isGuestAgentConnected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRDPService", function() { return findRDPService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRdpConnectionDetails", function() { return getRdpConnectionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSerialConsoleConnectionDetails", function() { return getSerialConsoleConnectionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVncConnectionDetails", function() { return getVncConnectionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGuestAgentConnected", function() { return isGuestAgentConnected; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./packages/kubevirt-plugin/src/selectors/service/index.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _service_rdp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/rdp */ "./packages/kubevirt-plugin/src/selectors/service/rdp/index.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/url */ "./packages/kubevirt-plugin/src/utils/url.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors */ "./packages/kubevirt-plugin/src/selectors/vmi/selectors.ts");







const findVMServiceWithPort = (vmi, allServices, targetPort) => (allServices || []).find((service) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(vmi) === lodash__WEBPACK_IMPORTED_MODULE_0__["get"](service, ['spec', 'selector', _constants_vm__WEBPACK_IMPORTED_MODULE_3__["TEMPLATE_VM_NAME_LABEL"]]) &&
    !!Object(_service__WEBPACK_IMPORTED_MODULE_2__["getServicePort"])(service, targetPort));
/**
 * Finds Service for the VM/VMI which is exposing the RDP port.
 * Returns undefined or single first match.
 *
 * To pair service with VM, selector must be set on the Service object:
 *   spec:
 *     selector:
 *       vm.kubevirt.io/name: VM_NAME
 *
 * https://kubevirt.io/user-guide/docs/latest/using-virtual-machines/expose-service.html
 * virtctl expose virtualmachine [VM_NAME] --name [MY_SERVICE_NAME] --port 27017 --target-port 3389
 */
const findRDPService = (vmi, allServices) => findVMServiceWithPort(vmi, allServices, _constants_vm__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_RDP_PORT"]);
const getRdpConnectionDetails = (vmi, rdpService, launcherPod) => {
    if (!vmi || !rdpService) {
        return undefined;
    }
    return {
        vmi,
        manual: Object(_service_rdp__WEBPACK_IMPORTED_MODULE_4__["getRdpAddressPort"])(rdpService, launcherPod),
    };
};
const getSerialConsoleConnectionDetails = (vmi) => {
    if (!vmi) {
        return undefined;
    }
    const protocol = Object(_utils_url__WEBPACK_IMPORTED_MODULE_5__["isConnectionEncrypted"])() ? 'wss' : 'ws';
    return {
        vmi,
        host: `${protocol}://${window.location.hostname}:${window.location.port ||
            (Object(_utils_url__WEBPACK_IMPORTED_MODULE_5__["isConnectionEncrypted"])() ? '443' : '80')}`,
        path: `/${Object(_selectors__WEBPACK_IMPORTED_MODULE_6__["getVMISubresourcePath"])()}/${Object(_selectors__WEBPACK_IMPORTED_MODULE_6__["getVMIApiPath"])(vmi)}/console`,
    };
};
const getVncConnectionDetails = (vmi) => {
    if (!vmi) {
        return undefined;
    }
    // the novnc library requires protocol to be specified so the URL must be absolute - including host:port
    return {
        encrypt: Object(_utils_url__WEBPACK_IMPORTED_MODULE_5__["isConnectionEncrypted"])(),
        host: window.location.hostname,
        port: window.location.port || (Object(_utils_url__WEBPACK_IMPORTED_MODULE_5__["isConnectionEncrypted"])() ? '443' : '80'),
        // Example: ws://localhost:9000/api/kubernetes/apis/subresources.kubevirt.io/v1alpha3/namespaces/kube-system/virtualmachineinstances/vm-cirros1/vnc
        path: `${Object(_selectors__WEBPACK_IMPORTED_MODULE_6__["getVMISubresourcePath"])()}/${Object(_selectors__WEBPACK_IMPORTED_MODULE_6__["getVMIApiPath"])(vmi)}/vnc`,
        manual: undefined,
    };
};
const getVMIStatusConditions = (vmi) => (vmi && vmi.status && vmi.status.conditions) || [];
const isGuestAgentConnected = (vmi) => getVMIStatusConditions(vmi).some((condition) => condition.type === 'AgentConnected' && condition.status === 'True');


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vmi/index.ts":
/*!*************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vmi/index.ts ***!
  \*************************************************************/
/*! exports provided: getVMIDisks, getVMINetworks, getVMIVolumes, getVMIInterfaces, getVMIConditionsByType, isVMIRunning, getVMIAvailableStatusInterfaces, getVMINodeName, isVMIPaused, getVMINodeSelector, getVMITolerations, getVMIAffinity, getVmiIpAddresses, findRDPService, getRdpConnectionDetails, getSerialConsoleConnectionDetails, getVncConnectionDetails, isGuestAgentConnected, getVMISubresourcePath, getVMIApiPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ "./packages/kubevirt-plugin/src/selectors/vmi/basic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIDisks", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMIDisks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMINetworks", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMINetworks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIVolumes", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMIVolumes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIInterfaces", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMIInterfaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIConditionsByType", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMIConditionsByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVMIRunning", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["isVMIRunning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIAvailableStatusInterfaces", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMIAvailableStatusInterfaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMINodeName", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMINodeName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVMIPaused", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["isVMIPaused"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMINodeSelector", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMINodeSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMITolerations", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMITolerations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIAffinity", function() { return _basic__WEBPACK_IMPORTED_MODULE_0__["getVMIAffinity"]; });

/* harmony import */ var _combined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combined */ "./packages/kubevirt-plugin/src/selectors/vmi/combined.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findRDPService", function() { return _combined__WEBPACK_IMPORTED_MODULE_1__["findRDPService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRdpConnectionDetails", function() { return _combined__WEBPACK_IMPORTED_MODULE_1__["getRdpConnectionDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSerialConsoleConnectionDetails", function() { return _combined__WEBPACK_IMPORTED_MODULE_1__["getSerialConsoleConnectionDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVncConnectionDetails", function() { return _combined__WEBPACK_IMPORTED_MODULE_1__["getVncConnectionDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isGuestAgentConnected", function() { return _combined__WEBPACK_IMPORTED_MODULE_1__["isGuestAgentConnected"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./packages/kubevirt-plugin/src/selectors/vmi/selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMISubresourcePath", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getVMISubresourcePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVMIApiPath", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getVMIApiPath"]; });

/* harmony import */ var _ip_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ip-address */ "./packages/kubevirt-plugin/src/selectors/vmi/ip-address.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVmiIpAddresses", function() { return _ip_address__WEBPACK_IMPORTED_MODULE_3__["getVmiIpAddresses"]; });







/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vmi/ip-address.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vmi/ip-address.ts ***!
  \******************************************************************/
/*! exports provided: getVmiIpAddresses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVmiIpAddresses", function() { return getVmiIpAddresses; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const getVmiIpAddresses = (vmi) => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatMap"])(
// get IPs only for named interfaces because Windows reports IPs for other devices like Loopback Pseudo-Interface 1 etc.
Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(vmi, 'status.interfaces', []).filter((i) => !!i.name), (i) => {
    const arr = [];
    if (i.ipAddress) {
        // the "ipAddress" is deprecated but still can contain useful value
        arr.push(i.ipAddress.trim());
    }
    if (i.ipAddresses && Array.isArray(i.ipAddresses) && i.ipAddresses.length > 0) {
        arr.push(...i.ipAddresses.map((ip) => ip.trim()));
    }
    return arr;
}).filter((ip) => ip && ip.length > 0));


/***/ }),

/***/ "./packages/kubevirt-plugin/src/selectors/vmi/selectors.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/selectors/vmi/selectors.ts ***!
  \*****************************************************************/
/*! exports provided: getVMISubresourcePath, getVMIApiPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMISubresourcePath", function() { return getVMISubresourcePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMIApiPath", function() { return getVMIApiPath; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/url */ "./packages/kubevirt-plugin/src/utils/url.ts");



const getVMISubresourcePath = () => `${Object(_utils_url__WEBPACK_IMPORTED_MODULE_2__["getConsoleAPIBase"])()}/apis/subresources.${_models__WEBPACK_IMPORTED_MODULE_1__["VirtualMachineInstanceModel"].apiGroup}`;
const getVMIApiPath = (vmi) => `${_models__WEBPACK_IMPORTED_MODULE_1__["VirtualMachineInstanceModel"].apiVersion}/namespaces/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getNamespace"])(vmi)}/${_models__WEBPACK_IMPORTED_MODULE_1__["VirtualMachineInstanceModel"].plural}/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["getName"])(vmi)}`;


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/TopologyVmDetailsPanel.tsx":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/TopologyVmDetailsPanel.tsx ***!
  \**************************************************************************/
/*! exports provided: TopologyVmDetailsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopologyVmDetailsPanel", function() { return TopologyVmDetailsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");
/* harmony import */ var _components_vms_vm_resource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/vms/vm-resource */ "./packages/kubevirt-plugin/src/components/vms/vm-resource.tsx");








const LoadedTopologyVmDetailsPanel = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["observer"])(({ loaded, vmNode, templates }) => {
    const vmData = vmNode.getData();
    const { pods, obj } = vmData.resources;
    const vmObj = obj;
    const { vmi, vmStatusBundle } = vmData.data;
    const canUpdate = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["useAccessReview"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_5__["VirtualMachineModel"], vmObj || {}, 'patch')) && !!vmObj;
    if (!loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingBox"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], { gutter: "md" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_vms_vm_resource__WEBPACK_IMPORTED_MODULE_7__["VMResourceSummary"], { canUpdateVM: canUpdate, vm: vmObj, vmi: vmi, templates: templates.data, kindObj: _models__WEBPACK_IMPORTED_MODULE_5__["VirtualMachineModel"] })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["GridItem"], { span: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_vms_vm_resource__WEBPACK_IMPORTED_MODULE_7__["VMDetailsList"], { canUpdateVM: canUpdate, vm: vmObj, vmi: vmi, pods: pods, kindObj: _models__WEBPACK_IMPORTED_MODULE_5__["VirtualMachineModel"], vmStatusBundle: vmStatusBundle }))));
});
const TopologyVmDetailsPanel = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["observer"])(({ vmNode }) => {
    const vmData = vmNode.getData();
    const vmObj = vmData.resources.obj;
    const { namespace } = vmObj.metadata;
    const resources = [
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["TemplateModel"].kind,
            namespace,
            isList: true,
            prop: 'templates',
            matchLabels: { [_constants_vm__WEBPACK_IMPORTED_MODULE_6__["TEMPLATE_TYPE_LABEL"]]: _constants_vm__WEBPACK_IMPORTED_MODULE_6__["TEMPLATE_TYPE_VM"] },
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body resource-overview__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadedTopologyVmDetailsPanel, { vmNode: vmNode }))));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/TopologyVmPanel.tsx":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/TopologyVmPanel.tsx ***!
  \*******************************************************************/
/*! exports provided: ConnectedTopologyVmPanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedTopologyVmPanel", function() { return ConnectedTopologyVmPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _components_kubevirtComponentFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/kubevirtComponentFactory */ "./packages/kubevirt-plugin/src/topology/components/kubevirtComponentFactory.ts");
/* harmony import */ var _TopologyVmDetailsPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopologyVmDetailsPanel */ "./packages/kubevirt-plugin/src/topology/TopologyVmDetailsPanel.tsx");
/* harmony import */ var _TopologyVmResourcesPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TopologyVmResourcesPanel */ "./packages/kubevirt-plugin/src/topology/TopologyVmResourcesPanel.tsx");










const stateToProps = ({ UI }) => ({
    selectedDetailsTab: UI.getIn(['overview', 'selectedDetailsTab']),
});
const dispatchToProps = (dispatch) => ({
    onClickTab: (name) => dispatch(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_4__["selectOverviewDetailsTab"](name)),
});
const ConnectedTopologyVmPanel = ({ vmNode, selectedDetailsTab, onClickTab, }) => {
    const name = vmNode.getLabel();
    const vmData = vmNode.getData();
    const vmObj = vmData.resources.obj;
    const { namespace } = vmObj.metadata;
    const actions = Object(_components_kubevirtComponentFactory__WEBPACK_IMPORTED_MODULE_7__["vmActions"])(vmData);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-head resource-overview__heading" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name co-resource-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceIcon"], { className: "co-m-resource-icon--lg", kind: vmObj.kind }),
                    name && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourcePathFromModel"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(vmObj.kind), name, namespace), className: "co-resource-item__resource-name" }, name))),
                (actions === null || actions === void 0 ? void 0 : actions.length) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-actions" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ActionsMenu"], { actions: actions }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["SimpleTabNav"], { selectedTab: selectedDetailsTab || 'Resources', onClickTab: onClickTab, tabs: [
                { name: 'Details', component: _TopologyVmDetailsPanel__WEBPACK_IMPORTED_MODULE_8__["TopologyVmDetailsPanel"] },
                { name: 'Resources', component: _TopologyVmResourcesPanel__WEBPACK_IMPORTED_MODULE_9__["TopologyVmResourcesPanel"] },
            ], tabProps: { vmNode }, additionalClassNames: "co-m-horizontal-nav__menu--within-sidebar co-m-horizontal-nav__menu--within-overview-sidebar" })));
};
const TopologyVmPanel = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(Object(_console_topology__WEBPACK_IMPORTED_MODULE_5__["observer"])(ConnectedTopologyVmPanel));
/* harmony default export */ __webpack_exports__["default"] = (TopologyVmPanel);


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/TopologyVmResourcesPanel.tsx":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/TopologyVmResourcesPanel.tsx ***!
  \****************************************************************************/
/*! exports provided: TopologyVmResourcesPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopologyVmResourcesPanel", function() { return TopologyVmResourcesPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/overview/pods-overview */ "./public/components/overview/pods-overview.tsx");
/* harmony import */ var _console_internal_components_overview_networking_overview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/overview/networking-overview */ "./public/components/overview/networking-overview.tsx");




const TopologyVmResourcesPanel = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ vmNode }) => {
    const vmData = vmNode.getData();
    const { obj: vm, pods, services, routes } = vmData === null || vmData === void 0 ? void 0 : vmData.resources;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane-body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_pods_overview__WEBPACK_IMPORTED_MODULE_2__["PodsOverview"], { pods: pods, obj: vm }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_overview_networking_overview__WEBPACK_IMPORTED_MODULE_3__["NetworkingOverview"], { services: services, routes: routes })));
});


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/components/kubevirtComponentFactory.ts":
/*!**************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/components/kubevirtComponentFactory.ts ***!
  \**************************************************************************************/
/*! exports provided: vmActions, vmContextMenu, KubevirtComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmActions", function() { return vmActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmContextMenu", function() { return vmContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KubevirtComponentFactory", function() { return KubevirtComponentFactory; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _console_dev_console_src_actions_modify_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/actions/modify-application */ "./packages/dev-console/src/actions/modify-application.ts");
/* harmony import */ var _components_vms_menu_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/vms/menu-actions */ "./packages/kubevirt-plugin/src/components/vms/menu-actions.tsx");
/* harmony import */ var _nodes_VmNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodes/VmNode */ "./packages/kubevirt-plugin/src/topology/components/nodes/VmNode.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./packages/kubevirt-plugin/src/topology/components/const.ts");








const vmActions = (vm) => {
    const contextMenuResource = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(vm);
    if (!contextMenuResource) {
        return null;
    }
    const { data: { vmi, vmStatusBundle }, } = vm;
    const model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(contextMenuResource));
    return [
        Object(_console_dev_console_src_actions_modify_application__WEBPACK_IMPORTED_MODULE_4__["ModifyApplication"])(model, contextMenuResource),
        ..._components_vms_menu_actions__WEBPACK_IMPORTED_MODULE_5__["vmMenuActions"].map((action) => {
            return action(model, contextMenuResource, {
                vmi,
                vmStatusBundle,
            });
        }),
    ];
};
const vmContextMenu = (element) => {
    return Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["createMenuItems"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["kebabOptionsToMenu"])(vmActions(element.getData())));
};
class KubevirtComponentFactory extends _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["AbstractSBRComponentFactory"] {
    constructor() {
        super(...arguments);
        this.getFactory = () => {
            return (kind, type) => {
                switch (type) {
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_VIRTUAL_MACHINE"]:
                        return this.withAddResourceConnector()(Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["withDndDrop"])(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["nodeDropTargetSpec"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["withEditReviewAccess"])('patch')(Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["withDragNode"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["nodeDragSourceSpec"])(type))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["withSelection"])(false, true)(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["withContextMenu"])(vmContextMenu)(_nodes_VmNode__WEBPACK_IMPORTED_MODULE_6__["VmNode"]))))));
                    default:
                        return undefined;
                }
            };
        };
    }
}



/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/components/nodes/VmNode.scss":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/components/nodes/VmNode.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/components/nodes/VmNode.tsx":
/*!***************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/components/nodes/VmNode.tsx ***!
  \***************************************************************************/
/*! exports provided: VmNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmNode", function() { return VmNode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_dev_console_src_components_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/dev-console/src/components/svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _VmNode_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VmNode.scss */ "./packages/kubevirt-plugin/src/topology/components/nodes/VmNode.scss");
/* harmony import */ var _VmNode_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_VmNode_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/vm/vm-status */ "./packages/kubevirt-plugin/src/constants/vm/vm-status.ts");











const VM_NODE_RADIUS = 10;
const VM_STATUS_GAP = 7;
const VM_STATUS_WIDTH = 7;
const VM_STATUS_RADIUS = 7;
const ObservedVmNode = ({ element, dragNodeRef, dndDropRef, canDrop, dragging, edgeDragging, dropTarget, selected, onSelect, onContextMenu, contextMenuOpen, onHideCreateConnector, onShowCreateConnector, }) => {
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useHover"])();
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useAnchor"])(_console_topology__WEBPACK_IMPORTED_MODULE_4__["RectAnchor"]);
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useCombineRefs"])(hoverRef, dragNodeRef);
    const { width, height } = element.getBounds();
    const vmData = element.getData().data;
    const { kind, osImage, vmStatusBundle } = vmData;
    const displayFilters = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__["useDisplayFilters"])();
    const [filtered] = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__["useSearchFilter"])(element.getLabel());
    const iconRadius = Math.min(width, height) * 0.25;
    const showLabels = displayFilters.showLabels || hover;
    const tipContent = `Create a visual connector`;
    const resourceObj = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__["getTopologyResourceObject"])(element.getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceFor"])(resourceObj));
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["useAccessReview"])({
        group: resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel.plural,
        name: resourceObj.metadata.name,
        namespace: resourceObj.metadata.namespace,
    });
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
        if (editAccess) {
            if (hover) {
                onShowCreateConnector && onShowCreateConnector();
            }
            else {
                onHideCreateConnector && onHideCreateConnector();
            }
        }
    }, [hover, onShowCreateConnector, onHideCreateConnector, editAccess]);
    let statusClass;
    const statusMessage = vmStatusBundle.message;
    switch (vmStatusBundle.status) {
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].V2V_CONVERSION_PENDING:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].V2V_VM_IMPORT_PENDING:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].CDI_IMPORT_PENDING:
            statusClass = 'kubevirt-m-pending';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].V2V_CONVERSION_ERROR:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].POD_ERROR:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].VM_ERROR:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].VMI_ERROR:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].CDI_IMPORT_ERROR:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].V2V_VM_IMPORT_ERROR:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].PAUSED:
            statusClass = 'kubevirt-m-error';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].VMI_WAITING:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].STARTING:
            statusClass = 'kubevirt-m-not-ready';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].STOPPING:
            statusClass = 'kubevirt-m-terminating';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].MIGRATING:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].RUNNING:
            statusClass = 'kubevirt-m-running';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].OFF:
            statusClass = 'kubevirt-m-off';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].V2V_CONVERSION_IN_PROGRESS:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].V2V_VM_IMPORT_IN_PROGRESS:
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].CDI_IMPORTING:
            statusClass = 'kubevirt-m-importing';
            break;
        case _constants_vm_vm_status__WEBPACK_IMPORTED_MODULE_10__["VMStatus"].UNKNOWN:
        default:
            statusClass = 'kubevirt-m-unknown';
    }
    const statusRect = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { className: "kubevirt-vm-node__status", x: VM_STATUS_GAP, y: VM_STATUS_GAP, rx: VM_STATUS_RADIUS, ry: VM_STATUS_RADIUS, width: width - VM_STATUS_GAP * 2, height: height - VM_STATUS_GAP * 2 }));
    const imageProps = {
        x: width / 2 - iconRadius,
        y: height / 2 - iconRadius,
        width: iconRadius * 2,
        height: iconRadius * 2,
    };
    const imageComponent = osImage ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", Object.assign({}, imageProps, { xlinkHref: osImage }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineIcon"], Object.assign({}, imageProps)));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { content: tipContent, trigger: "manual", isVisible: dropTarget && canDrop, tippyProps: { duration: 0, delay: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-base-node kubevirt-vm-node', statusClass, {
                    'is-hover': hover || contextMenuOpen,
                    'is-highlight': canDrop,
                    'is-dragging': dragging || edgeDragging,
                    'is-dropTarget': canDrop && dropTarget,
                    'is-filtered': filtered,
                    'is-selected': selected,
                }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__["NodeShadows"], null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { "data-test-id": "base-node-handler", onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, ref: refs },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { className: "odc-base-node__bg", ref: dndDropRef, x: 0, y: 0, rx: VM_NODE_RADIUS, ry: VM_NODE_RADIUS, width: width, height: height, filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["createSvgIdUrl"])(hover || dragging || edgeDragging || dropTarget || contextMenuOpen
                            ? _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__["NODE_SHADOW_FILTER_ID_HOVER"]
                            : _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_8__["NODE_SHADOW_FILTER_ID"]) }),
                    statusMessage ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { content: statusMessage }, statusRect) : statusRect,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { className: "kubevirt-vm-node__bg", x: VM_STATUS_GAP + VM_STATUS_WIDTH, y: VM_STATUS_GAP + VM_STATUS_WIDTH, width: width - (VM_STATUS_GAP + VM_STATUS_WIDTH) * 2, height: height - (VM_STATUS_GAP + VM_STATUS_WIDTH) * 2 }),
                    imageComponent,
                    showLabels && (vmData.kind || element.getLabel()) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_dev_console_src_components_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "odc-base-node__label", x: width / 2, y: height + 24, paddingX: 8, paddingY: 4, kind: kind }, element.getLabel())))))));
};
const VmNode = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["observer"])(ObservedVmNode);



/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/sort.ts":
/*!****************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/sort.ts ***!
  \****************************************************/
/*! exports provided: flavorSort, ignoreCaseSort, splitVersion, compareVersions, removeOSDups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flavorSort", function() { return flavorSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreCaseSort", function() { return ignoreCaseSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitVersion", function() { return splitVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareVersions", function() { return compareVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOSDups", function() { return removeOSDups; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/vm-like/flavor */ "./packages/kubevirt-plugin/src/selectors/vm-like/flavor.ts");


const FLAVOR_ORDER = {
    tiny: 0,
    small: 1,
    medium: 2,
    large: 3,
};
const flavorSort = (array = []) => array.sort((a, b) => {
    if (Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_1__["isCustomFlavor"])(a)) {
        return 1;
    }
    if (Object(_selectors_vm_like_flavor__WEBPACK_IMPORTED_MODULE_1__["isCustomFlavor"])(b)) {
        return -1;
    }
    const resolvedFlavorA = FLAVOR_ORDER[a];
    const resolvedFlavorB = FLAVOR_ORDER[b];
    if (resolvedFlavorA == null && resolvedFlavorB == null) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    if (resolvedFlavorA == null) {
        return 1;
    }
    if (resolvedFlavorB == null) {
        return -1;
    }
    return resolvedFlavorA - resolvedFlavorB;
});
const ignoreCaseSort = (array = [], byPath = undefined, byValueResolver = undefined) => {
    const resolve = (v) => {
        const result = lodash__WEBPACK_IMPORTED_MODULE_0__["isFunction"](byValueResolver)
            ? byValueResolver(v)
            : byPath
                ? lodash__WEBPACK_IMPORTED_MODULE_0__["get"](v, byPath, '')
                : v;
        return result == null ? '' : result.toLowerCase();
    };
    return array.sort((a, b) => resolve(a).localeCompare(resolve(b)));
};
const splitVersion = (osID) => (osID || '')
    .split(/\D/)
    .filter((x) => x)
    .map((num) => parseInt(num, 10));
/**
 *
 *
 * Compare the numbers between the two versions by the order of their appearance
 * eg in the OS name.
 *
 * For example:
 * version1: [10,2] for OS: 'Windows 10 R2',
 * version2: [10] for OS: 'Windows 10',
 * (return 1)
 *
 * version1: [9,10] for OS: 'ubuntu9.10',
 * version2: [10,4] for OS: 'ubuntu10.04',
 * (return -1)
 *
 * return 0 when equal.
 *
 */
const compareVersions = (version1, version2) => {
    if (!version1 && !version2) {
        return 0;
    }
    const finalVersion1 = version1 || [];
    const finalVersion2 = version2 || [];
    const zipped = lodash__WEBPACK_IMPORTED_MODULE_0__["zip"](finalVersion1, finalVersion2);
    let idx = 0;
    while (idx < zipped.length) {
        /*
          undefined values are equal to 0, eg:
          14.0 == 14 -> zipped = [[14,14],[0,undefined]]
          1.0.0 == 1 -> zipped = [[1,1],[0,undefined],[0,undefined]]
        */
        const ver1 = !zipped[idx][0] ? 0 : zipped[idx][0];
        const ver2 = !zipped[idx][1] ? 0 : zipped[idx][1];
        if (ver1 > ver2) {
            return 1;
        }
        if (ver2 > ver1) {
            return -1;
        }
        idx++;
    }
    return 0;
};
const descSortOSes = (os1, os2) => {
    const nameCMP = (os1.name || '').localeCompare(os2.name || '');
    if (nameCMP !== 0) {
        return nameCMP * -1;
    }
    return compareVersions(splitVersion(os1.id), splitVersion(os2.id)) * -1;
};
const removeOSDups = (osArr) => lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](osArr.filter((x) => x).sort(descSortOSes), 'name');


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/url.ts":
/*!***************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/url.ts ***!
  \***************************************************/
/*! exports provided: getConsoleAPIBase, isConnectionEncrypted, parseURL, resolveOrigin, resolvePathname, resolveURL, getVMWizardCreateLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsoleAPIBase", function() { return getConsoleAPIBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConnectionEncrypted", function() { return isConnectionEncrypted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseURL", function() { return parseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveOrigin", function() { return resolveOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePathname", function() { return resolvePathname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveURL", function() { return resolveURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMWizardCreateLink", function() { return getVMWizardCreateLink; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _constants_vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/vm */ "./packages/kubevirt-plugin/src/constants/vm/index.ts");


const ELLIPSIS = '…';
const ellipsizeLeft = (word) => `${ELLIPSIS}${word}`;
const getConsoleAPIBase = () => {
    // avoid the extra slash when compose the URL by VncConsole
    return _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sBasePath"].startsWith('/') ? _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sBasePath"].substring(1) : _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sBasePath"];
};
const isConnectionEncrypted = () => window.location.protocol === 'https:';
const parseURL = (url) => {
    try {
        return new URL(url);
    }
    catch (e) {
        return null;
    }
};
const resolveOrigin = ({ hostname, origin, port }, maxHostnameParts) => {
    const hostnameParts = hostname.split('.');
    if (hostnameParts.length <= maxHostnameParts) {
        return origin;
    }
    const resolvedHostname = hostnameParts.slice(hostnameParts.length - maxHostnameParts).join('.');
    const resolvedPort = port ? `:${port}` : '';
    return `${ellipsizeLeft(resolvedHostname)}${resolvedPort}`;
};
const resolvePathname = ({ pathname }, maxPathnameParts) => {
    const pathnameParts = pathname.split('/').filter((part) => part);
    if (pathnameParts.length <= maxPathnameParts) {
        return pathname;
    }
    const resolvedPathname = pathnameParts.slice(pathnameParts.length - maxPathnameParts).join('/');
    return `/${ellipsizeLeft(`/${resolvedPathname}`)}`;
};
const resolveURL = ({ urlObj, maxHostnameParts, maxPathnameParts }) => urlObj.origin === 'null'
    ? urlObj.href
    : `${resolveOrigin(urlObj, maxHostnameParts)}${resolvePathname(urlObj, maxPathnameParts)}`;
const getVMWizardCreateLink = ({ namespace, wizardName, mode, view, template, }) => {
    const type = wizardName === _constants_vm__WEBPACK_IMPORTED_MODULE_1__["VMWizardName"].YAML ? '~new' : '~new-wizard';
    const params = new URLSearchParams();
    if (mode && mode !== _constants_vm__WEBPACK_IMPORTED_MODULE_1__["VMWizardMode"].VM) {
        params.append('mode', mode);
    }
    if (template) {
        params.append('template', template);
    }
    if (mode === _constants_vm__WEBPACK_IMPORTED_MODULE_1__["VMWizardMode"].IMPORT && view === _constants_vm__WEBPACK_IMPORTED_MODULE_1__["VMWizardView"].ADVANCED) {
        // only valid combination in the wizard for now
        params.append('view', view);
    }
    const paramsString = params.toString() ? `?${params}` : '';
    return `/k8s/ns/${namespace || 'default'}/virtualization/${type}${paramsString}`;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/utils.ts ***!
  \*****************************************************/
/*! exports provided: getSequence, delay, setNativeValue, getFullResourceId, getNextIDResolver, wrapWithProgress, getVMLikeModelName, getVMLikeModelListPath, getVMLikeModelDetailPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSequence", function() { return getSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNativeValue", function() { return setNativeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullResourceId", function() { return getFullResourceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextIDResolver", function() { return getNextIDResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithProgress", function() { return wrapWithProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikeModelName", function() { return getVMLikeModelName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikeModelListPath", function() { return getVMLikeModelListPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVMLikeModelDetailPath", function() { return getVMLikeModelDetailPath; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./packages/kubevirt-plugin/src/models/index.ts");




const getSequence = (from, to) => Array.from({ length: to - from + 1 }, (v, i) => i + from);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const setNativeValue = (element, value) => {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    }
    else {
        valueSetter.call(element, value);
    }
};
const getFullResourceId = (obj) => `${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceForModel"])(obj)}~${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(obj)}~${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getName"])(obj)}`;
const getNextIDResolver = (entities = []) => {
    let lastID = lodash__WEBPACK_IMPORTED_MODULE_2__["max"](entities.map((entity) => (entity.id == null ? 0 : lodash__WEBPACK_IMPORTED_MODULE_2__["toSafeInteger"](entity.id)))) || 0;
    return () => lodash__WEBPACK_IMPORTED_MODULE_2__["toString"](++lastID);
};
const wrapWithProgress = (setProgress) => (promise) => {
    setProgress(true);
    promise
        .then(() => setProgress(false))
        .catch((reason) => {
        setProgress(false);
        throw reason;
    });
};
const getVMLikeModelName = (isCreateTemplate) => isCreateTemplate ? 'virtual machine template' : _models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineModel"].label.toLowerCase();
const getVMLikeModelListPath = (isCreateTemplate, namespace) => isCreateTemplate
    ? `/k8s/ns/${namespace}/virtualization/templates`
    : `/k8s/ns/${namespace}/virtualization`;
const getVMLikeModelDetailPath = (isTemplate, namespace, name) => isTemplate
    ? `/k8s/ns/${namespace}/vmtemplates/${name}`
    : `/k8s/ns/${namespace}/${_models__WEBPACK_IMPORTED_MODULE_3__["VirtualMachineModel"].plural}/${name}`;


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/common.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/common.ts ***!
  \******************************************************************/
/*! exports provided: isValidationError, getValidationErrorMessage, isPositiveNumber, validateEntityAlreadyExists, validatePositiveInteger, validateTrim, validateURL, validateBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidationError", function() { return isValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationErrorMessage", function() { return getValidationErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositiveNumber", function() { return isPositiveNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEntityAlreadyExists", function() { return validateEntityAlreadyExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePositiveInteger", function() { return validatePositiveInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTrim", function() { return validateTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateURL", function() { return validateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBus", function() { return validateBus; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url */ "./packages/kubevirt-plugin/src/utils/url.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strings */ "./packages/kubevirt-plugin/src/utils/validations/strings.ts");




const isValidationError = (validationObject) => !!validationObject && validationObject.type === _console_shared__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error;
const getValidationErrorMessage = (validationObject) => {
    return (validationObject &&
        validationObject.type === _console_shared__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error &&
        validationObject.message);
};
const isPositiveNumber = (value) => value && value.toString().match(/^[1-9]\d*$/);
const validateEntityAlreadyExists = (name, namespace, entities, { errorMessage, subject } = { errorMessage: undefined, subject: undefined }) => {
    const exists = entities &&
        entities.some((entity) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getName"])(entity) === name && Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getNamespace"])(entity) === namespace);
    return exists ? Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["asValidationObject"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["addMissingSubject"])(errorMessage, subject)) : null;
};
const validatePositiveInteger = (value, { subject } = { subject: undefined }) => {
    const emptyError = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["validateEmptyValue"])(value, { subject });
    if (emptyError) {
        return emptyError;
    }
    return isPositiveNumber(value) ? null : Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["asValidationObject"])('must be positive integer');
};
const validateTrim = (value, { subject } = { subject: undefined }) => {
    const emptyError = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["validateEmptyValue"])(value, { subject });
    if (emptyError) {
        return emptyError;
    }
    let resultErrror;
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["trimStart"](value).length !== value.length) {
        resultErrror = _strings__WEBPACK_IMPORTED_MODULE_3__["START_WHITESPACE_ERROR"];
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["trimEnd"](value).length !== value.length) {
        resultErrror = _strings__WEBPACK_IMPORTED_MODULE_3__["END_WHITESPACE_ERROR"];
    }
    return resultErrror
        ? Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["asValidationObject"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["addMissingSubject"])(resultErrror, subject), _console_shared__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error)
        : null;
};
const validateURL = (value, { subject } = { subject: undefined }) => {
    const trimError = validateTrim(value, { subject });
    if (trimError) {
        return trimError;
    }
    return Object(_url__WEBPACK_IMPORTED_MODULE_2__["parseURL"])(value) ? null : Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["asValidationObject"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["addMissingSubject"])(_strings__WEBPACK_IMPORTED_MODULE_3__["URL_INVALID_ERROR"], subject));
};
const validateBus = (value, allowedBuses) => {
    if (allowedBuses && !allowedBuses.has(value)) {
        return Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["asValidationObject"])(`Invalid interface type. Valid types are: ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["joinGrammaticallyListOfItems"])([...allowedBuses].map((b) => b.toString()))}`, _console_shared__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error);
    }
    return null;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/strings.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/strings.ts ***!
  \*******************************************************************/
/*! exports provided: GENERAL_ERROR_MSG, START_WHITESPACE_ERROR, END_WHITESPACE_ERROR, URL_INVALID_ERROR, VIRTUAL_MACHINE_EXISTS, VIRTUAL_MACHINE_TEMPLATE_EXISTS, MAC_ADDRESS_INVALID_ERROR, NIC_NAME_EXISTS, NETWORK_MULTUS_NAME_EXISTS, NETWORK_REQUIRED, POSITIVE_SIZE_ERROR, getValidationNameByKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERAL_ERROR_MSG", function() { return GENERAL_ERROR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_WHITESPACE_ERROR", function() { return START_WHITESPACE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_WHITESPACE_ERROR", function() { return END_WHITESPACE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_INVALID_ERROR", function() { return URL_INVALID_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_MACHINE_EXISTS", function() { return VIRTUAL_MACHINE_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_MACHINE_TEMPLATE_EXISTS", function() { return VIRTUAL_MACHINE_TEMPLATE_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ADDRESS_INVALID_ERROR", function() { return MAC_ADDRESS_INVALID_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NIC_NAME_EXISTS", function() { return NIC_NAME_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_MULTUS_NAME_EXISTS", function() { return NETWORK_MULTUS_NAME_EXISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_REQUIRED", function() { return NETWORK_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITIVE_SIZE_ERROR", function() { return POSITIVE_SIZE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationNameByKey", function() { return getValidationNameByKey; });
const GENERAL_ERROR_MSG = 'An error occurred. Please try again';
const START_WHITESPACE_ERROR = 'cannot start with whitespace characters';
const END_WHITESPACE_ERROR = 'cannot end with whitespace characters';
const URL_INVALID_ERROR = 'has to be a valid URL';
const VIRTUAL_MACHINE_EXISTS = 'is already used by another virtual machine in this namespace';
const VIRTUAL_MACHINE_TEMPLATE_EXISTS = 'is already used in another template';
const MAC_ADDRESS_INVALID_ERROR = 'Invalid MAC address format';
const NIC_NAME_EXISTS = 'Interface with this name already exists';
const NETWORK_MULTUS_NAME_EXISTS = 'Multus network with this name already exists';
const NETWORK_REQUIRED = 'Network required';
const POSITIVE_SIZE_ERROR = 'must be positive';
const validationKeyToNameResolver = {
    name: 'Name',
    macAddress: 'MAC Address',
    network: 'Network',
    size: 'Size',
    url: 'Url',
    container: 'Container',
    diskInterface: 'Model',
    pvc: 'PVC',
};
const getValidationNameByKey = (key) => {
    return validationKeyToNameResolver[key];
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/template/disk-bus-validation-result.ts":
/*!***********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/template/disk-bus-validation-result.ts ***!
  \***********************************************************************************************/
/*! exports provided: DiskBusValidationResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskBusValidationResult", function() { return DiskBusValidationResult; });
/* harmony import */ var _console_shared_src_utils_validation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src/utils/validation/types */ "./packages/console-shared/src/utils/validation/types.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");


class DiskBusValidationResult {
    constructor({ allowedBuses, type, isValid }) {
        this.getErrorMsg = () => {
            if (this.isValid) {
                return null;
            }
            const isWarn = this.type === _console_shared_src_utils_validation_types__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].Warn;
            const adj = isWarn ? 'Recommended' : 'Valid';
            const adj2 = isWarn ? 'Not recommended' : 'Invalid';
            if (this.allowedBuses.size === 0) {
                return `There are no ${adj.toLowerCase()} bus types`;
            }
            if (this.allowedBuses.size === 1) {
                return `${adj2} bus type. ${adj} type is ${[...this.allowedBuses][0]}`;
            }
            return `${adj2} bus type. ${adj} types are: ${Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["joinGrammaticallyListOfItems"])([...this.allowedBuses].map((b) => b.toString()))}`;
        };
        this.asValidationObject = () => {
            return !this.isValid ? Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["asValidationObject"])(this.getErrorMsg(), this.type) : null;
        };
        this.allowedBuses = allowedBuses;
        this.type = type;
        this.isValid = isValid;
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/template/interval-validation-result.ts":
/*!***********************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/template/interval-validation-result.ts ***!
  \***********************************************************************************************/
/*! exports provided: IntervalValidationResult, MemoryIntervalValidationResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalValidationResult", function() { return IntervalValidationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryIntervalValidationResult", function() { return MemoryIntervalValidationResult; });
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* eslint-disable lines-between-class-members */


class IntervalValidationResult {
    constructor({ type, isValid, min, max, isMinInclusive, isMaxInclusive, }) {
        this.getErrorMessage = () => (this.isValid ? null : 'Interval is not valid');
        this.type = type;
        this.isValid = isValid;
        this.min = min;
        this.max = max;
        this.isMinInclusive = isMinInclusive;
        this.isMaxInclusive = isMaxInclusive;
    }
}
class MemoryIntervalValidationResult extends IntervalValidationResult {
    constructor() {
        super(...arguments);
        this.getErrorMessage = () => {
            const verb = this.type === _console_shared_src__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].Warn ? 'should' : 'must';
            if (!this.isValid) {
                if (this.min !== 0 && Number.isFinite(this.min) && Number.isFinite(this.max)) {
                    return `Memory ${verb} be between ${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])(this.min).string} and ${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])(this.max).string}`;
                }
                if (Number.isFinite(this.max)) {
                    return `Memory ${verb} be ${this.isMaxInclusive ? 'at most' : 'below'} ${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])(this.max).string}`;
                }
                return `Memory ${verb} be ${this.isMinInclusive ? 'at least' : 'above'} ${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["humanizeBinaryBytes"])(this.min).string}`;
            }
            return null;
        };
    }
}


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/template/template-validations.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/template/template-validations.ts ***!
  \*****************************************************************************************/
/*! exports provided: ValidationJSONPath, TemplateValidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationJSONPath", function() { return ValidationJSONPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateValidations", function() { return TemplateValidations; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./packages/kubevirt-plugin/src/constants/index.ts");
/* harmony import */ var _interval_validation_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interval-validation-result */ "./packages/kubevirt-plugin/src/utils/validations/template/interval-validation-result.ts");
/* harmony import */ var _disk_bus_validation_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disk-bus-validation-result */ "./packages/kubevirt-plugin/src/utils/validations/template/disk-bus-validation-result.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./packages/kubevirt-plugin/src/utils/common.ts");
/* eslint-disable lines-between-class-members */






class ValidationJSONPath extends _constants__WEBPACK_IMPORTED_MODULE_2__["ObjectEnum"] {
}
ValidationJSONPath.CPU = new ValidationJSONPath('jsonpath::.spec.domain.cpu.cores');
ValidationJSONPath.MEMORY = new ValidationJSONPath('jsonpath::.spec.domain.resources.requests.memory');
ValidationJSONPath.DISK_BUS = new ValidationJSONPath('jsonpath::.spec.domain.devices.disks[*].disk.bus');
ValidationJSONPath.CD_BUS = new ValidationJSONPath('jsonpath::.spec.domain.devices.disks[*].cdrom.bus');
ValidationJSONPath.getDiskBusPath = (diskType) => diskType === _constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].CDROM ? ValidationJSONPath.CD_BUS : ValidationJSONPath.DISK_BUS;
class TemplateValidations {
    constructor(validations = []) {
        this.validateMemory = (value) => {
            const result = this.validateMemoryByType(value, _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error);
            if (!result.isValid) {
                return result;
            }
            return this.validateMemoryByType(value, _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Warn);
        };
        this.getAllowedBuses = (diskType, validationErrorType = _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error) => {
            const finalDiskType = diskType || _constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].DISK;
            let allowedBuses = this.getAllowedEnumValues(ValidationJSONPath.getDiskBusPath(finalDiskType), validationErrorType).map(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskBus"].fromString);
            if (allowedBuses.length === 0) {
                allowedBuses = _constants__WEBPACK_IMPORTED_MODULE_2__["DiskBus"].getAll();
            }
            return new Set(allowedBuses.filter((bus) => finalDiskType.isBusSupported(bus)));
        };
        this.getRecommendedBuses = (diskType) => {
            const allowedBuses = this.getAllowedBuses(diskType);
            const recommendedBuses = [
                ...this.getAllowedBuses(diskType, _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Warn),
            ].filter((b) => allowedBuses.has(b));
            return recommendedBuses.length === 0 ? allowedBuses : new Set(recommendedBuses);
        };
        this.areBusesEqual = (otherTempValidations) => {
            if (!otherTempValidations) {
                return false;
            }
            if (this === otherTempValidations) {
                return true;
            }
            // Check if two sets of bus validations are the same - if the allowed and recommended buses are the same
            const allowedBuses = this.getAllowedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].DISK);
            const otherAllowedBuses = otherTempValidations.getAllowedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].DISK);
            if (!Object(_common__WEBPACK_IMPORTED_MODULE_5__["isSetEqual"])(allowedBuses, otherAllowedBuses)) {
                return false;
            }
            const recommendedBuses = this.getRecommendedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].DISK);
            const otherRecommendedBuses = otherTempValidations.getRecommendedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].DISK);
            if (!Object(_common__WEBPACK_IMPORTED_MODULE_5__["isSetEqual"])(recommendedBuses, otherRecommendedBuses)) {
                return false;
            }
            const allowedCDBuses = this.getAllowedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].CDROM);
            const otherAllowedCDBuses = otherTempValidations.getAllowedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].CDROM);
            if (!Object(_common__WEBPACK_IMPORTED_MODULE_5__["isSetEqual"])(allowedCDBuses, otherAllowedCDBuses)) {
                return false;
            }
            const recommendedCDBuses = this.getRecommendedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].CDROM);
            const otherRecommendedCDBuses = otherTempValidations.getRecommendedBuses(_constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].CDROM);
            if (!Object(_common__WEBPACK_IMPORTED_MODULE_5__["isSetEqual"])(recommendedCDBuses, otherRecommendedCDBuses)) {
                return false;
            }
            return true;
        };
        this.validateBus = (diskType, diskBus, validationErrorType = _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error) => {
            const allowedBuses = this.getAllowedBuses(diskType);
            if (allowedBuses.has(diskBus)) {
                const recommededBuses = this.getRecommendedBuses(diskType);
                return new _disk_bus_validation_result__WEBPACK_IMPORTED_MODULE_4__["DiskBusValidationResult"]({
                    allowedBuses: recommededBuses,
                    type: _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Warn,
                    isValid: recommededBuses.has(diskBus),
                });
            }
            return new _disk_bus_validation_result__WEBPACK_IMPORTED_MODULE_4__["DiskBusValidationResult"]({
                allowedBuses,
                type: validationErrorType,
                isValid: allowedBuses.has(diskBus),
            });
        };
        this.getDefaultBus = (diskType = _constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].DISK, defaultBus) => {
            let resolvedDefaultBus = defaultBus;
            if (!resolvedDefaultBus) {
                resolvedDefaultBus = diskType === _constants__WEBPACK_IMPORTED_MODULE_2__["DiskType"].CDROM ? _constants__WEBPACK_IMPORTED_MODULE_2__["DiskBus"].SATA : _constants__WEBPACK_IMPORTED_MODULE_2__["DiskBus"].VIRTIO;
            }
            if (!diskType.isBusSupported(resolvedDefaultBus)) {
                resolvedDefaultBus = undefined;
                // eslint-disable-next-line no-console
                console.error(`${resolvedDefaultBus} is not a supported disk bus for ${diskType} disks`);
            }
            const allowedBuses = this.getAllowedBuses(diskType);
            if (allowedBuses.size === 0) {
                return resolvedDefaultBus;
            }
            const recommendedBuses = this.getRecommendedBuses(diskType);
            if (resolvedDefaultBus && recommendedBuses.has(resolvedDefaultBus)) {
                return resolvedDefaultBus;
            }
            if (recommendedBuses.size > 0) {
                return [...recommendedBuses][0];
            }
            return resolvedDefaultBus && allowedBuses.has(resolvedDefaultBus)
                ? resolvedDefaultBus
                : [...allowedBuses][0];
        };
        this.validateMemoryByType = (value, type) => new _interval_validation_result__WEBPACK_IMPORTED_MODULE_3__["MemoryIntervalValidationResult"](this.validateInterval(value, ValidationJSONPath.MEMORY, {
            defaultMin: 0,
            isDefaultMinInclusive: false,
            type,
        }));
        this.validateInterval = (value, jsonPath, { isDefaultMinInclusive = true, isDefaultMaxInclusive = true, defaultMin = Number.NEGATIVE_INFINITY, defaultMax = Number.POSITIVE_INFINITY, type = _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Error, }) => {
            const relevantValidations = this.getRelevantValidations(jsonPath, type);
            // combine validations for single template and make them strict (all integer validations must pass)
            const { min, max, isMinInclusive, isMaxInclusive } = relevantValidations.reduce(({ min: oldMin, max: oldMax, isMinInclusive: oldIsMinInclusive, isMaxInclusive: oldIsMaxInclusive, }, validation) => {
                let newMin = oldMin;
                let newMax = oldMax;
                let newIsMinInclusive = oldIsMinInclusive;
                let newIsMaxInclusive = oldIsMaxInclusive;
                if ('min' in validation && validation.min >= oldMin) {
                    newMin = validation.min;
                    newIsMinInclusive = true;
                }
                if ('max' in validation && validation.max <= oldMax) {
                    newMax = validation.max;
                    newIsMaxInclusive = true;
                }
                return {
                    min: newMin,
                    max: newMax,
                    isMinInclusive: newIsMinInclusive,
                    isMaxInclusive: newIsMaxInclusive,
                };
            }, {
                min: defaultMin,
                max: defaultMax,
                isMinInclusive: isDefaultMinInclusive,
                isMaxInclusive: isDefaultMaxInclusive,
            });
            const isValid = (isMinInclusive ? min <= value : min < value) &&
                (isMaxInclusive ? value <= max : value < max);
            return new _interval_validation_result__WEBPACK_IMPORTED_MODULE_3__["IntervalValidationResult"]({
                type,
                isValid,
                min,
                max,
                isMinInclusive,
                isMaxInclusive,
            });
        };
        // Empty array means all values are allowed
        this.getAllowedEnumValues = (jsonPath, type) => {
            const relevantValidations = this.getRelevantValidations(jsonPath, type);
            return relevantValidations.reduce((result, validation) => result.concat(validation.values), []);
        };
        this.getRelevantValidations = (jsonPath, type) => {
            return this.validations.filter((validation) => validation.path.includes(jsonPath.getValue()) &&
                (type === _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorType"].Warn) === !!validation.justWarning);
        };
        this.validations = lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](validations);
    }
}
TemplateValidations.areBusesEqual = (a, b) => 
// eslint-disable-next-line eqeqeq
a == b || !!(a === null || a === void 0 ? void 0 : a.areBusesEqual(b)); // check if both null first


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/vm/disk.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/vm/disk.ts ***!
  \*******************************************************************/
/*! exports provided: validateDisk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDisk", function() { return validateDisk; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./packages/kubevirt-plugin/src/utils/validations/common.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strings */ "./packages/kubevirt-plugin/src/utils/validations/strings.ts");
/* harmony import */ var _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modals/disk-modal/storage-ui-source */ "./packages/kubevirt-plugin/src/components/modals/disk-modal/storage-ui-source.ts");
/* harmony import */ var _k8s_wrapper_vm_combined_disk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../k8s/wrapper/vm/combined-disk */ "./packages/kubevirt-plugin/src/k8s/wrapper/vm/combined-disk.ts");
/* harmony import */ var _constants_vm_storage_disk_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/vm/storage/disk-type */ "./packages/kubevirt-plugin/src/constants/vm/storage/disk-type.ts");
/* harmony import */ var _template_template_validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template/template-validations */ "./packages/kubevirt-plugin/src/utils/validations/template/template-validations.ts");







const validateDiskName = (name, usedDiskNames) => {
    let validation = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["validateDNS1123SubdomainValue"])(name);
    if (validation) {
        validation.message = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["addMissingSubject"])(validation.message, 'Name');
    }
    if (!validation && usedDiskNames && usedDiskNames.has(name)) {
        validation = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])('Disk with this name already exists!');
    }
    return validation;
};
const validatePVCName = (pvcName, usedPVCNames) => {
    if (usedPVCNames && usedPVCNames.has(pvcName)) {
        Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])('PVC with this name is already used by this VM!');
    }
    return null;
};
const getEmptyDiskSizeValidation = () => Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["makeSentence"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["addMissingSubject"])(_strings__WEBPACK_IMPORTED_MODULE_2__["POSITIVE_SIZE_ERROR"], 'Size')), _console_shared__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].TrivialError);
const validateDisk = (disk, volume, dataVolume, persistentVolumeClaimWrapper, { usedDiskNames, usedPVCNames, templateValidations, }) => {
    const validations = {
        name: validateDiskName(disk && disk.getName(), usedDiskNames),
        size: null,
        url: null,
        container: null,
        diskInterface: null,
        pvc: null,
    };
    let hasAllRequiredFilled = disk && disk.getName() && volume && volume.getName();
    const addRequired = (addon) => {
        if (hasAllRequiredFilled) {
            hasAllRequiredFilled = hasAllRequiredFilled && addon;
        }
    };
    const source = _components_modals_disk_modal_storage_ui_source__WEBPACK_IMPORTED_MODULE_3__["StorageUISource"].fromTypes(volume && volume.getType(), dataVolume && dataVolume.getType(), !!persistentVolumeClaimWrapper);
    const tValidations = templateValidations || new _template_template_validations__WEBPACK_IMPORTED_MODULE_6__["TemplateValidations"]();
    const diskType = disk.getType();
    if (source.requiresVolumeType()) {
        addRequired(volume && volume.hasType());
    }
    if (source.requiresURL()) {
        const url = dataVolume && dataVolume.getURL();
        addRequired(url);
        validations.url = Object(_common__WEBPACK_IMPORTED_MODULE_1__["validateURL"])(url, { subject: 'URL' });
    }
    if (source.requiresContainerImage()) {
        const container = volume.getContainerImage();
        addRequired(container);
        validations.container = Object(_common__WEBPACK_IMPORTED_MODULE_1__["validateTrim"])(container, { subject: 'Container' });
    }
    if (source.requiresDatavolume()) {
        addRequired(dataVolume);
    }
    if (source.requiresNewPVC()) {
        addRequired(persistentVolumeClaimWrapper);
    }
    if (source.requiresSize()) {
        let missingSize;
        if (source.requiresDatavolume()) {
            missingSize = !dataVolume || !dataVolume.hasSize();
        }
        if (source.requiresNewPVC()) {
            missingSize =
                missingSize || !persistentVolumeClaimWrapper || !persistentVolumeClaimWrapper.hasSize();
        }
        if (missingSize) {
            addRequired(null);
            validations.size = getEmptyDiskSizeValidation();
        }
    }
    if (source.requiresPVC()) {
        const pvcName = new _k8s_wrapper_vm_combined_disk__WEBPACK_IMPORTED_MODULE_4__["CombinedDisk"]({
            diskWrapper: disk,
            volumeWrapper: volume,
            dataVolumeWrapper: dataVolume,
            persistentVolumeClaimWrapper,
            isNewPVC: !!persistentVolumeClaimWrapper,
        }).getPVCNameBySource(source);
        addRequired(pvcName);
        validations.pvc = validatePVCName(pvcName, usedPVCNames);
    }
    if (diskType !== _constants_vm_storage_disk_type__WEBPACK_IMPORTED_MODULE_5__["DiskType"].FLOPPY) {
        addRequired(disk.getDiskBus());
        validations.diskInterface = tValidations
            .validateBus(disk.getType(), disk.getDiskBus())
            .asValidationObject();
    }
    return {
        validations,
        hasAllRequiredFilled: !!hasAllRequiredFilled,
        isValid: !!hasAllRequiredFilled &&
            !Object.keys(validations).find((key) => validations[key] &&
                (validations[key].type === _console_shared__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].Error ||
                    validations[key].type === _console_shared__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].TrivialError)),
    };
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/vm/flavor.ts":
/*!*********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/vm/flavor.ts ***!
  \*********************************************************************/
/*! exports provided: validateFlavor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFlavor", function() { return validateFlavor; });
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");

const validateFlavor = ({ memory: { unit, size }, cpus, }, { isCustomFlavor }) => {
    const validations = {
        memory: null,
        cpus: null,
    };
    let hasAllRequiredFilled = true;
    const addRequired = (addon) => {
        if (hasAllRequiredFilled) {
            hasAllRequiredFilled = hasAllRequiredFilled && addon;
        }
    };
    if (isCustomFlavor) {
        addRequired(unit);
        addRequired(size);
        addRequired(cpus);
        validations.memory = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["validateEmptyValue"])(size, { subject: 'Memory' });
        validations.cpus = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_0__["validateEmptyValue"])(cpus, { subject: 'CPUs' });
    }
    return {
        validations,
        hasAllRequiredFilled: !!hasAllRequiredFilled,
        isValid: !!hasAllRequiredFilled && !Object.keys(validations).find((key) => validations[key]),
    };
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/vm/index.ts":
/*!********************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/vm/index.ts ***!
  \********************************************************************/
/*! exports provided: validateDisk, validateNicName, validateNetwork, validateMACAddress, validateNIC, isValidMAC, validateVmLikeEntityName, validateUserTemplateProvisionSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _disk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disk */ "./packages/kubevirt-plugin/src/utils/validations/vm/disk.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateDisk", function() { return _disk__WEBPACK_IMPORTED_MODULE_0__["validateDisk"]; });

/* harmony import */ var _nic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nic */ "./packages/kubevirt-plugin/src/utils/validations/vm/nic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateNicName", function() { return _nic__WEBPACK_IMPORTED_MODULE_1__["validateNicName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateNetwork", function() { return _nic__WEBPACK_IMPORTED_MODULE_1__["validateNetwork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateMACAddress", function() { return _nic__WEBPACK_IMPORTED_MODULE_1__["validateMACAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateNIC", function() { return _nic__WEBPACK_IMPORTED_MODULE_1__["validateNIC"]; });

/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validations */ "./packages/kubevirt-plugin/src/utils/validations/vm/validations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidMAC", function() { return _validations__WEBPACK_IMPORTED_MODULE_2__["isValidMAC"]; });

/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "./packages/kubevirt-plugin/src/utils/validations/vm/vm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateVmLikeEntityName", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["validateVmLikeEntityName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateUserTemplateProvisionSource", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["validateUserTemplateProvisionSource"]; });







/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/vm/nic.ts":
/*!******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/vm/nic.ts ***!
  \******************************************************************/
/*! exports provided: validateNicName, validateNetwork, validateMACAddress, validateNIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNicName", function() { return validateNicName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNetwork", function() { return validateNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMACAddress", function() { return validateMACAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNIC", function() { return validateNIC; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strings */ "./packages/kubevirt-plugin/src/utils/validations/strings.ts");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validations */ "./packages/kubevirt-plugin/src/utils/validations/vm/validations.ts");



const validateNicName = (name, usedInterfacesNames, { subject } = { subject: 'Name' }) => {
    let validation = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["validateDNS1123SubdomainValue"])(name, { subject });
    if (!validation && usedInterfacesNames && usedInterfacesNames.has(name)) {
        validation = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])(_strings__WEBPACK_IMPORTED_MODULE_1__["NIC_NAME_EXISTS"]);
    }
    return validation;
};
const validateNetwork = (network) => {
    if (!network.hasType()) {
        return Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])(_strings__WEBPACK_IMPORTED_MODULE_1__["NETWORK_REQUIRED"], _console_shared__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].TrivialError);
    }
    return null;
};
const validateMACAddress = (mac) => {
    const isValid = !mac || Object(_validations__WEBPACK_IMPORTED_MODULE_2__["isValidMAC"])(mac);
    return isValid ? null : Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])(Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["makeSentence"])(_strings__WEBPACK_IMPORTED_MODULE_1__["MAC_ADDRESS_INVALID_ERROR"]));
};
const validateNIC = (interfaceWrapper, network, { usedInterfacesNames, acceptEmptyNetwork, }) => {
    const validations = {
        name: validateNicName(interfaceWrapper && interfaceWrapper.getName(), usedInterfacesNames),
        macAddress: validateMACAddress(interfaceWrapper && interfaceWrapper.getMACAddress()),
        network: validateNetwork(network),
    };
    let hasAllRequiredFilled = interfaceWrapper &&
        interfaceWrapper.getName() &&
        interfaceWrapper.getModel() &&
        interfaceWrapper.hasType();
    if (!acceptEmptyNetwork) {
        hasAllRequiredFilled =
            hasAllRequiredFilled && network && network.getReadableName() && network.hasType();
    }
    return {
        validations,
        hasAllRequiredFilled: !!hasAllRequiredFilled,
        isValid: !!hasAllRequiredFilled &&
            !Object.keys(validations)
                .filter((key) => !(acceptEmptyNetwork && key === 'network'))
                .find((key) => validations[key]),
    };
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/vm/validations.ts":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/vm/validations.ts ***!
  \**************************************************************************/
/*! exports provided: isValidMAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMAC", function() { return isValidMAC; });
const HEXCH_REGEX = '[0-9A-Fa-f]';
const MAC_REGEX_COLON_DELIMITER = new RegExp(`^((${HEXCH_REGEX}{2}[:]){19}${HEXCH_REGEX}{2})$|` + // 01:23:45:67:89:ab:cd:ef:00:00:01:23:45:67:89:ab:cd:ef:00:00
    `^((${HEXCH_REGEX}{2}[:]){7}${HEXCH_REGEX}{2})$|` + // 01:23:45:67:89:ab:cd:ef
    `^((${HEXCH_REGEX}{2}[:]){5}${HEXCH_REGEX}{2})$`);
const MAC_REGEX_DASH_DELIMITER = new RegExp(`^((${HEXCH_REGEX}{2}[-]){19}${HEXCH_REGEX}{2})$|` + // 01-23-45-67-89-ab-cd-ef-00-00-01-23-45-67-89-ab-cd-ef-00-00
    `^((${HEXCH_REGEX}{2}[-]){7}${HEXCH_REGEX}{2})$|` + // 01-23-45-67-89-ab-cd-ef
    `^((${HEXCH_REGEX}{2}[-]){5}${HEXCH_REGEX}{2})$`);
const MAC_REGEX_PERIOD_DELIMITER = new RegExp(`^((${HEXCH_REGEX}{4}.){9}${HEXCH_REGEX}{4})$|` + // 0123.4567.89ab.cdef.0000.0123.4567.89ab.cdef.0000
    `^((${HEXCH_REGEX}{4}.){3}${HEXCH_REGEX}{4})$|` + // 0123.4567.89ab.cdef
    `^((${HEXCH_REGEX}{4}.){2}${HEXCH_REGEX}{4})$`);
const COLON_DELIMITER = ':';
const DASH_DELIMITER = '-';
const PERIOD_DELIMITER = '.';
// Validates that the provided MAC address meets one of following formats supported by the golang ParseMAC function:
// IEEE 802 MAC-48, EUI-48, EUI-64, or a 20-octet IP over InfiniBand link-layer address
// https://golang.org/pkg/net/#ParseMAC
const isValidMAC = (mac) => {
    if (mac.length < 14) {
        return false;
    }
    let regex;
    if (mac[2] === COLON_DELIMITER) {
        regex = MAC_REGEX_COLON_DELIMITER;
    }
    else if (mac[2] === DASH_DELIMITER) {
        regex = MAC_REGEX_DASH_DELIMITER;
    }
    else if (mac[4] === PERIOD_DELIMITER) {
        regex = MAC_REGEX_PERIOD_DELIMITER;
    }
    return regex ? regex.test(mac) : false;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/utils/validations/vm/vm.ts":
/*!*****************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/utils/validations/vm/vm.ts ***!
  \*****************************************************************/
/*! exports provided: validateVmLikeEntityName, validateUserTemplateProvisionSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVmLikeEntityName", function() { return validateVmLikeEntityName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUserTemplateProvisionSource", function() { return validateUserTemplateProvisionSource; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants_vm_provision_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/vm/provision-source */ "./packages/kubevirt-plugin/src/constants/vm/provision-source.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./packages/kubevirt-plugin/src/utils/validations/common.ts");



const validateVmLikeEntityName = (value, namespace, vmLikeEntities, { existsErrorMessage, subject } = {
    existsErrorMessage: undefined,
    subject: undefined,
}) => {
    const dnsValidation = Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["validateDNS1123SubdomainValue"])(value, { subject });
    return dnsValidation && dnsValidation.type === _console_shared__WEBPACK_IMPORTED_MODULE_0__["ValidationErrorType"].Error
        ? dnsValidation
        : Object(_common__WEBPACK_IMPORTED_MODULE_2__["validateEntityAlreadyExists"])(value, namespace, vmLikeEntities, {
            errorMessage: existsErrorMessage,
            subject,
        });
};
const validateUserTemplateProvisionSource = (userTemplate) => {
    const provisionSourceDetails = _constants_vm_provision_source__WEBPACK_IMPORTED_MODULE_1__["ProvisionSource"].getProvisionSourceDetails(userTemplate, {
        convertTemplateDataVolumesToAttachClonedDisk: true,
    });
    return provisionSourceDetails.error
        ? Object(_console_shared__WEBPACK_IMPORTED_MODULE_0__["asValidationObject"])(`Could not select Provision Source. ${provisionSourceDetails.error}`)
        : null;
};


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

/***/ "./public/components/overview/resource-overview-details.tsx":
/*!******************************************************************!*\
  !*** ./public/components/overview/resource-overview-details.tsx ***!
  \******************************************************************/
/*! exports provided: ResourceOverviewDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceOverviewDetails", function() { return ResourceOverviewDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plugins */ "./public/plugins.ts");






const stateToProps = ({ UI }) => ({
    selectedDetailsTab: UI.getIn(['overview', 'selectedDetailsTab']),
});
const dispatchToProps = (dispatch) => ({
    onClickTab: (name) => dispatch(_actions_ui__WEBPACK_IMPORTED_MODULE_3__["selectOverviewDetailsTab"](name)),
});
const getResourceTabComp = (t) => (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["AsyncComponent"], Object.assign({}, props, { loader: t.properties.loader })));
const getPluginTabResources = (item, tabs) => {
    let tabEntry = _plugins__WEBPACK_IMPORTED_MODULE_5__["registry"]
        .getOverviewResourceTabs()
        .filter((tab) => item[tab.properties.key]);
    const overridenTabs = tabs.map((tab) => {
        const tabEntryConfig = tabEntry.find((t) => tab.name === t.properties.name);
        if (tabEntryConfig) {
            tabEntry = tabEntry.filter((entry) => tab.name !== entry.properties.name);
            return {
                name: tab.name,
                component: getResourceTabComp(tabEntryConfig),
            };
        }
        return tab;
    });
    /** Add new tabs from plugin */
    const newTabs = tabEntry.map((entry) => {
        return {
            name: entry.properties.name,
            component: getResourceTabComp(entry),
        };
    });
    return overridenTabs.concat(newTabs);
};
const ResourceOverviewDetails = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(({ kindObj, item, menuActions, onClickTab, selectedDetailsTab, tabs, }) => {
    const keys = Object.keys(item);
    const keysRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](keys);
    const tabsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](tabs);
    const pluginTabsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!pluginTabsRef.current ||
        !lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](keys, keysRef.current) ||
        !lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](tabs, tabsRef.current)) {
        keysRef.current = keys;
        tabsRef.current = tabs;
        pluginTabsRef.current = getPluginTabResources(item, tabs);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overview__sidebar-pane resource-overview" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceOverviewHeading"], { actions: menuActions, kindObj: kindObj, resource: item.obj }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SimpleTabNav"], { onClickTab: onClickTab, selectedTab: selectedDetailsTab, tabProps: { item }, tabs: pluginTabsRef.current, additionalClassNames: "co-m-horizontal-nav__menu--within-sidebar co-m-horizontal-nav__menu--within-overview-sidebar" })));
});


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
//# sourceMappingURL=dev-console-topology-6813fc4b51e84a9ae127.js.map