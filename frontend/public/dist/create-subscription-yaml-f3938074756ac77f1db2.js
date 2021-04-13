(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-subscription-yaml"],{

/***/ "./packages/console-shared/src/utils/yaml.ts":
/*!***************************************************!*\
  !*** ./packages/console-shared/src/utils/yaml.ts ***!
  \***************************************************/
/*! exports provided: safeJSToYAML, safeYAMLToJS, asyncJSToYAML, asyncYAMLToJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJSToYAML", function() { return safeJSToYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeYAMLToJS", function() { return safeYAMLToJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncJSToYAML", function() { return asyncJSToYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncYAMLToJS", function() { return asyncYAMLToJS; });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);

// Safely parse js obj to yaml. Returns fallback (emtpy string by default) on exception.
const safeJSToYAML = (js, fallback = '', options = {}) => {
    try {
        return Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(js, options);
    }
    catch (_a) {
        return fallback;
    }
};
// Safely parse yaml to js object. Returns fallback (empty object by default) on exception.
const safeYAMLToJS = (yaml, fallback = {}, options = {}) => {
    try {
        return Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(yaml, options);
    }
    catch (_a) {
        return fallback;
    }
};
const asyncJSToYAML = (js, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            const yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(js, options);
            resolve(yaml);
        }
        catch (e) {
            reject(e);
        }
    });
};
const asyncYAMLToJS = (yaml, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            const js = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(yaml, options);
            resolve(js);
        }
        catch (e) {
            reject(e);
        }
    });
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/catalog-source.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/catalog-source.tsx ***!
  \*******************************************************************************/
/*! exports provided: CatalogSourceDetails, CatalogSourceDetailsPage, CreateSubscriptionYAML, CatalogSourceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogSourceDetails", function() { return CatalogSourceDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogSourceDetailsPage", function() { return CatalogSourceDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubscriptionYAML", function() { return CreateSubscriptionYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogSourceListPage", function() { return CatalogSourceListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_create_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/create-yaml */ "./public/components/create-yaml.tsx");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/error/error-boundary */ "./packages/console-shared/src/components/error/error-boundary.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _package_manifest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./package-manifest */ "./packages/operator-lifecycle-manager/src/components/package-manifest.tsx");
/* harmony import */ var _modals_delete_catalog_source_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/delete-catalog-source-modal */ "./packages/operator-lifecycle-manager/src/components/modals/delete-catalog-source-modal.tsx");
/* harmony import */ var _modals_disable_default_source_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/disable-default-source-modal */ "./packages/operator-lifecycle-manager/src/components/modals/disable-default-source-modal.tsx");

















const DEFAULT_SOURCE_NAMESPACE = 'openshift-marketplace';
const catalogSourceModelReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"]);
const deleteModal = (kind, catalogSource) => (Object.assign(Object.assign({}, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory.Delete(kind, catalogSource)), { callback: () => Object(_modals_delete_catalog_source_modal__WEBPACK_IMPORTED_MODULE_15__["deleteCatalogSourceModal"])({ kind, resource: catalogSource }) }));
const disableSourceModal = (kind, operatorHub, sourceName) => ({
    label: 'Disable',
    callback: () => Object(_modals_disable_default_source_modal__WEBPACK_IMPORTED_MODULE_16__["disableDefaultSourceModal"])({ kind, operatorHub, sourceName }),
    accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["asAccessReview"])(kind, operatorHub, 'patch'),
});
const enableSource = (kind, operatorHub, sourceName) => ({
    label: 'Enable',
    callback: () => {
        const currentSources = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](operatorHub, 'spec.sources', []);
        const patch = [
            {
                op: 'add',
                path: '/spec/sources',
                value: lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](currentSources, (source) => source.name !== sourceName),
            },
        ];
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sPatch"])(kind, operatorHub, patch);
    },
    accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["asAccessReview"])(kind, operatorHub, 'patch'),
});
const DefaultSourceKebab = ({ kind, operatorHub, sourceName, sourceDisabled, }) => {
    const options = sourceDisabled
        ? [enableSource(kind, operatorHub, sourceName)]
        : [disableSourceModal(kind, operatorHub, sourceName)];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"], { options: options });
};
const CatalogSourceDetails = ({ obj, packageManifests, subscriptions, operatorGroups, }) => {
    const toData = (data) => ({ loaded: true, data });
    return !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](obj) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-details co-m-pane" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, obj.spec.displayName))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Publisher"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, obj.spec.publisher)))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Packages" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_package_manifest__WEBPACK_IMPORTED_MODULE_14__["PackageManifestList"], { loaded: true, data: packageManifests, operatorGroup: toData(operatorGroups), subscription: toData(subscriptions) })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null));
};
const CatalogSourceDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["DetailsPage"], Object.assign({}, props, { namespace: props.match.params.ns, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"]), name: props.match.params.name, pages: [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(CatalogSourceDetails), _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml()], menuActions: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory.common, resources: [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["PackageManifestModel"]),
            isList: true,
            namespace: props.match.params.ns,
            selector: { matchLabels: { catalog: props.match.params.name } },
            prop: 'packageManifests',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]),
            isList: true,
            namespace: props.match.params.ns,
            prop: 'subscriptions',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["OperatorGroupModel"]),
            isList: true,
            namespace: props.match.params.ns,
            prop: 'operatorGroups',
        },
    ] })));
const CreateSubscriptionYAML = (props) => {
    const Create = Object(_operator_group__WEBPACK_IMPORTED_MODULE_13__["requireOperatorGroup"])(Object(_console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_6__["withFallback"])((createProps) => {
        if (createProps.packageManifest.loaded && createProps.packageManifest.data) {
            const pkg = createProps.packageManifest.data;
            const channel = pkg.status.defaultChannel
                ? pkg.status.channels.find(({ name }) => name === pkg.status.defaultChannel)
                : pkg.status.channels[0];
            const template = `
          apiVersion: ${_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"].apiGroup}/${_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"].apiVersion}
          kind: ${_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"].kind},
          metadata:
            generateName: ${pkg.metadata.name}-
            namespace: default
          spec:
            source: ${new URLSearchParams(props.location.search).get('catalog')}
            sourceNamespace: ${new URLSearchParams(props.location.search).get('catalogNamespace')}
            name: ${pkg.metadata.name}
            startingCSV: ${channel.currentCSV}
            channel: ${channel.name}
        `;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_create_yaml__WEBPACK_IMPORTED_MODULE_3__["CreateYAML"], Object.assign({}, props, { plural: _models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"].plural, template: template })));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingBox"], null);
    }, () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["MsgBox"], { title: "Package Not Found", detail: "Cannot create a Subscription to a non-existent package." }))));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Firehose"], { resources: [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["PackageManifestModel"]),
                isList: false,
                name: new URLSearchParams(props.location.search).get('pkg'),
                namespace: new URLSearchParams(props.location.search).get('catalogNamespace'),
                prop: 'packageManifest',
            },
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["OperatorGroupModel"]),
                isList: true,
                namespace: props.match.params.ns,
                prop: 'operatorGroup',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Create, Object.assign({}, props))));
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'col-sm-4', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass,
];
const CatalogSourceHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Publisher',
            sortField: 'publisher',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Availability',
            sortField: 'availabilitySort',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Endpoint',
            sortField: 'endpoint',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '# of Operators',
            sortField: 'operatorCount',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
const getEndpoint = (catalogSource) => {
    if (catalogSource.spec.configmap) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_10__["ConfigMapModel"]), name: catalogSource.spec.configmap, namespace: catalogSource.metadata.namespace }));
    }
    return catalogSource.spec.image || catalogSource.spec.address;
};
const getOperatorCount = (catalogSource, packageManifests) => lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](packageManifests, {
    status: {
        catalogSource: catalogSource.metadata.name,
        catalogSourceNamespace: catalogSource.metadata.namespace,
    },
}).length; // Type inferred to prevent Lodash TypeScript error.
const CatalogSourceTableRow = ({ obj: { availability = '-', disabled = false, endpoint = '-', isDefault = false, name, operatorCount = 0, operatorHub, publisher = '-', source, }, index, key, style, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableRow"], { className: disabled && 'catalog-source__table-row--disabled', id: source ? source.metadata.uid : index, index: index, style: style, trKey: key },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[0] }, source ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: catalogSourceModelReference, name: source.metadata.name, namespace: source.metadata.namespace, title: source.metadata.name })) : (name)),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[1] }, publisher),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[2] }, availability),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[3] }, endpoint),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[4] }, operatorCount || '-'),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["TableData"], { className: tableColumnClasses[5] }, isDefault ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DefaultSourceKebab, { kind: _models__WEBPACK_IMPORTED_MODULE_12__["OperatorHubModel"], operatorHub: operatorHub, sourceName: name, sourceDisabled: disabled })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory.Edit, deleteModal], kind: catalogSourceModelReference, resource: source })))));
const CatalogSourceList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["Table"], Object.assign({}, props, { "aria-label": "Catalog Sources", Header: CatalogSourceHeader, Row: CatalogSourceTableRow })));
const DisabledPopover = ({ operatorHub, sourceName }) => {
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const close = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        setVisible(false);
    }, []);
    const onClickEnable = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => enableSource(_models__WEBPACK_IMPORTED_MODULE_12__["OperatorHubModel"], operatorHub, sourceName)
        .callback()
        .then(close), [close, operatorHub, sourceName]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["PopoverStatus"], { title: "Disabled", isVisible: visible, shouldClose: close },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Operators provided by this source will not appear in OperatorHub and any operators installed from this source will not receive updates unitl this source is re-enabled."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { isInline: true, variant: "link", onClick: onClickEnable }, "Enable source")));
};
const flatten = ({ catalogSources, operatorHub, packageManifests, }) => {
    const defaultSources = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](operatorHub.status.sources, (defaultSource) => {
        const catalogSource = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](catalogSources.data, {
            metadata: { name: defaultSource.name, namespace: DEFAULT_SOURCE_NAMESPACE },
        });
        const catalogSourceExists = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](catalogSource);
        return Object.assign({ availability: catalogSourceExists ? ('Cluster wide') : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DisabledPopover, { operatorHub: operatorHub, sourceName: defaultSource.name })), 
            // Add a string value for sorting by availability since React elements can't be sorted.
            availabilitySort: catalogSourceExists ? 'Cluster wide' : 'Disabled', disabled: !catalogSourceExists, isDefault: true, name: defaultSource.name, namespace: DEFAULT_SOURCE_NAMESPACE, operatorHub }, (catalogSourceExists && {
            source: catalogSource,
            endpoint: getEndpoint(catalogSource),
            operatorCount: getOperatorCount(catalogSource, packageManifests.data),
            publisher: catalogSource.spec.publisher,
        }));
    });
    const customSources = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](catalogSources.data, (source) => ({
        availability: source.metadata.namespace === DEFAULT_SOURCE_NAMESPACE
            ? 'Cluster wide'
            : source.metadata.namespace,
        endpoint: getEndpoint(source),
        name: source.metadata.name,
        namespace: source.metadata.namespace,
        operatorCount: getOperatorCount(source, packageManifests.data),
        operatorHub,
        publisher: source.spec.publisher,
        source,
    }));
    return lodash__WEBPACK_IMPORTED_MODULE_1__["unionWith"](defaultSources, customSources, (a, b) => a.name === b.name && a.namespace === b.namespace);
};
const CatalogSourceListPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_9__["MultiListPage"], Object.assign({}, props, { canCreate: true, createAccessReview: { model: _models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"] }, createButtonText: "Create Catalog Source", createProps: { to: `/k8s/cluster/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"])}/~new` }, flatten: (data) => flatten(Object.assign({ operatorHub: props.obj }, data)), ListComponent: CatalogSourceList, textFilter: "catalog-source-name", hideLabelFilter: true, resources: [
        {
            isList: true,
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["PackageManifestModel"]),
            prop: 'packageManifests',
        },
        {
            isList: true,
            kind: catalogSourceModelReference,
            prop: 'catalogSources',
        },
    ] })));
CatalogSourceDetails.displayName = 'CatalogSourceDetails';
CatalogSourceDetailsPage.displayName = 'CatalogSourceDetailPage';
CreateSubscriptionYAML.displayName = 'CreateSubscriptionYAML';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/modals/delete-catalog-source-modal.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/delete-catalog-source-modal.tsx ***!
  \***************************************************************************************************/
/*! exports provided: deleteCatalogSourceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCatalogSourceModal", function() { return deleteCatalogSourceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");





const DeleteCatalogSourceModal = ({ kind, resource, close, cancel, inProgress, errorMessage, handlePromise, }) => {
    const [confirmed, setConfirmed] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const isConfirmed = (e) => {
        setConfirmed(e.currentTarget.value === resource.metadata.name);
    };
    const submit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((event) => {
        event.preventDefault();
        return handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sKill"])(kind, resource)).then(close);
    }, [close, handlePromise, kind, resource]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Delete ",
            kind.label,
            "?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "By deleting a catlog source, any operator that has been installed from this source will no longer receive updates."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Confirm deletion by typing \u00A0",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, resource.metadata.name),
                "\u00A0 below:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", onKeyUp: isConfirmed, placeholder: "Enter name" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { submitText: "Delete", submitDisabled: !confirmed, cancel: cancel, errorMessage: errorMessage, inProgress: inProgress, submitDanger: true })));
};
const deleteCatalogSourceModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])(DeleteCatalogSourceModal));


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/modals/disable-default-source-modal.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/disable-default-source-modal.tsx ***!
  \****************************************************************************************************/
/*! exports provided: disableDefaultSourceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableDefaultSourceModal", function() { return disableDefaultSourceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");






const DisableDefaultSourceModal = ({ kind, operatorHub, sourceName, close, cancel, inProgress, errorMessage, handlePromise, }) => {
    const submit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((event) => {
        event.preventDefault();
        const currentSources = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](operatorHub, 'spec.sources', []);
        const patch = [
            {
                op: 'add',
                path: '/spec/sources',
                value: [
                    ...lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](currentSources, (source) => source.name !== sourceName),
                    {
                        name: sourceName,
                        disabled: true,
                    },
                ],
            },
        ];
        return handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(kind, operatorHub, patch)).then(close);
    }, [close, handlePromise, kind, operatorHub, sourceName]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Disable Catalog Source?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, "By disabling a default source, the operators it provides will no longer appear in OperatorHub and any operator that has been installed from this source will no longer receive updates until the source is re-enabled. Disabling the source will also remove the corresponding OperatorSource and CatalogSource resources from the cluster."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { submitText: "Disable", cancel: cancel, errorMessage: errorMessage, inProgress: inProgress, submitDanger: true })));
};
const disableDefaultSourceModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["withHandlePromise"])(DisableDefaultSourceModal));


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-group.tsx ***!
  \*******************************************************************************/
/*! exports provided: targetNamespacesFor, operatorNamespaceFor, operatorGroupFor, NoOperatorGroupMsg, OperatorGroupSelector, requireOperatorGroup, supports, isGlobal, isSingle, subscriptionFor, installedFor, providedAPIsFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetNamespacesFor", function() { return targetNamespacesFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorNamespaceFor", function() { return operatorNamespaceFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorGroupFor", function() { return operatorGroupFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOperatorGroupMsg", function() { return NoOperatorGroupMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorGroupSelector", function() { return OperatorGroupSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireOperatorGroup", function() { return requireOperatorGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGlobal", function() { return isGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingle", function() { return isSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionFor", function() { return subscriptionFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedFor", function() { return installedFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providedAPIsFor", function() { return providedAPIsFor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils_status_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/status-box */ "./public/components/utils/status-box.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/types.ts");









const targetNamespacesFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.targetNamespaces']);
const operatorNamespaceFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.operatorNamespace']);
const operatorGroupFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.operatorGroup']);
const NoOperatorGroupMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_status_box__WEBPACK_IMPORTED_MODULE_3__["MsgBox"], { title: "Namespace Not Enabled", detail: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
        "The Operator Lifecycle Manager will not watch this namespace because it is not configured with an OperatorGroup.",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/ns/${Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__["getActiveNamespace"])()}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"])}/~new` }, "Create one here.")) }));
const OperatorGroupSelector = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/utils/list-dropdown */ "./public/components/utils/list-dropdown.jsx")).then((m) => m.ListDropdown), onChange: props.onChange ||
        function () {
            return null;
        }, desc: "Operator Groups", placeholder: "Select Operator Group", selectedKeyKind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"]), dataFilter: props.dataFilter, resources: [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"]),
            fieldSelector: `metadata.name!=${props.excludeName}`,
        },
    ] }));
const requireOperatorGroup = (Component) => {
    var _a;
    return _a = class RequireOperatorGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
            render() {
                const namespaceEnabled = !lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.props.operatorGroup, 'loaded') || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.props.operatorGroup.data);
                return namespaceEnabled ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, this.props)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NoOperatorGroupMsg, null);
            }
        },
        _a.WrappedComponent = Component,
        _a;
};
/**
 * Logic consistent with https://github.com/operator-framework/operator-lifecycle-manager/blob/4ef074e4207f5518d95ddf8c378036dfc4270dda/pkg/api/apis/operators/v1alpha1/clusterserviceversion.go#L165.
 */
const supports = (set) => (obj) => {
    const namespaces = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'namespaces') || [];
    const supportedModes = set.filter(({ supported }) => supported).map(({ type }) => type);
    if (namespaces.length === 0) {
        return false;
    }
    if (namespaces.length === 1) {
        if (namespaces[0] === obj.metadata.namespace) {
            return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeOwnNamespace);
        }
        if (namespaces[0] === '') {
            return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeAllNamespaces);
        }
        return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeSingleNamespace);
    }
    if (namespaces.length > 1 &&
        !supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeMultiNamespace)) {
        return false;
    }
    if (namespaces.length > 1) {
        if (namespaces.includes(obj.metadata.namespace) &&
            !supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeOwnNamespace)) {
            return false;
        }
        if (namespaces.includes('')) {
            return false;
        }
    }
    return true;
};
const isGlobal = (obj) => supports([{ type: _types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeAllNamespaces, supported: true }])(obj);
const isSingle = (obj) => supports([{ type: _types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeSingleNamespace, supported: true }])(obj);
/**
 * Determines if a given Operator package has a `Subscription` that makes it available in the given namespace.
 * Finds any `Subscriptions` for the given package, matches them to their `OperatorGroup`, and checks if the `OperatorGroup` is targeting the given namespace or if it is global.
 */
const subscriptionFor = (allSubscriptions = []) => (allGroups = []) => (pkgName) => (ns = '') => {
    return allSubscriptions
        .filter((sub) => sub.spec.name === pkgName)
        .find((sub) => allGroups.some((og) => og.metadata.namespace === sub.metadata.namespace &&
        (isGlobal(og) || lodash__WEBPACK_IMPORTED_MODULE_1__["get"](og.status, 'namespaces', []).includes(ns))));
};
const installedFor = (allSubscriptions = []) => (allGroups = []) => (pkgName) => (ns = '') => {
    return !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](subscriptionFor(allSubscriptions)(allGroups)(pkgName)(ns));
};
const providedAPIsFor = (og) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](og.metadata.annotations, 'olm.providedAPIs', '')
    .split(',')
    .map((api) => ({
    group: api
        .split('.')
        .slice(2)
        .join('.'),
    version: api.split('.')[1],
    kind: api.split('.')[0],
}))
    .map(({ group, version, kind }) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForGroupVersionKind"])(group)(version)(kind));
NoOperatorGroupMsg.displayName = 'NoOperatorGroupMsg';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/package-manifest.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/package-manifest.tsx ***!
  \*********************************************************************************/
/*! exports provided: PackageManifestTableHeader, PackageManifestTableRow, PackageManifestList, PackageManifestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageManifestTableHeader", function() { return PackageManifestTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageManifestTableRow", function() { return PackageManifestTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageManifestList", function() { return PackageManifestList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageManifestsPage", function() { return PackageManifestsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");













const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-3', 'col-md-3', 'col-sm-4', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-lg-5', 'col-md-5', 'col-sm-4', 'col-xs-6'),
];
const PackageManifestTableHeader = () => [
    {
        title: 'Name',
        props: { className: tableColumnClasses[0] },
    },
    {
        title: 'Latest Version',
        props: { className: tableColumnClasses[1] },
    },
    {
        title: 'Subscriptions',
        props: { className: tableColumnClasses[2] },
    },
];
const PackageManifestTableRow = ({ obj, index, rowKey, style, catalogSourceName, catalogSourceNamespace, subscription, defaultNS, canSubscribe, }) => {
    const ns = Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_8__["getActiveNamespace"])();
    const channel = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](obj.status.defaultChannel)
        ? obj.status.channels.find((ch) => ch.name === obj.status.defaultChannel)
        : obj.status.channels[0];
    const { displayName, icon = [], version, provider } = channel.currentCSVDesc;
    const subscriptionLink = () => ns !== _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/operatormanagement/ns/${ns}?name=${subscription.metadata.name}` },
        "View",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "visible-lg-inline" }, " subscription"))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/operatormanagement/all-namespaces?name=${obj.metadata.name}` },
        "View",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "visible-lg-inline" }, " subscriptions")));
    const createSubscriptionLink = () => `/k8s/ns/${ns === _console_shared__WEBPACK_IMPORTED_MODULE_9__["ALL_NAMESPACES_KEY"] ? defaultNS : ns}/${_models__WEBPACK_IMPORTED_MODULE_10__["SubscriptionModel"].plural}/~new?pkg=${obj.metadata.name}&catalog=${catalogSourceName}&catalogNamespace=${catalogSourceNamespace}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: rowKey, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionLogo"], { displayName: displayName, icon: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](icon, '[0]'), provider: provider.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[1] },
            version,
            " (",
            channel.name,
            ")"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] },
            subscription ? subscriptionLink() : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "None"),
            canSubscribe && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: createSubscriptionLink() },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "primary", type: "button" },
                    "Create",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "visible-lg-inline" }, " Subscription")))))));
};
const PackageManifestList = Object(_operator_group__WEBPACK_IMPORTED_MODULE_11__["requireOperatorGroup"])((props) => {
    const catalogs = (props.data || []).reduce((allCatalogs, { status }) => allCatalogs.set(status.catalogSource, {
        displayName: status.catalogSourceDisplayName,
        name: status.catalogSource,
        publisher: status.catalogSourcePublisher,
        namespace: status.catalogSourceNamespace,
    }), new Map());
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["StatusBox"], { loaded: props.loaded, loadError: props.loadError, label: _models__WEBPACK_IMPORTED_MODULE_10__["PackageManifestModel"].labelPlural, data: props.data, EmptyMsg: () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["MsgBox"], { title: "No Package Manifests Found", detail: "Package Manifests are packaged Operators which can be subscribed to for automatic upgrades." })) }, lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"]([...catalogs.values()], 'displayName').map((catalog) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: catalog.name, className: "co-catalogsource-list__section" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalogsource-list__section__packages" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, catalog.displayName),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
                    "Packaged by ",
                    catalog.publisher)),
            props.showDetailsLink && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/k8s/ns/${catalog.namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["CatalogSourceModel"])}/${catalog.name}` }, "View catalog details"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], { "aria-label": "Package Manifests", loaded: true, data: (props.data || []).filter((pkg) => pkg.status.catalogSource === catalog.name), filters: props.filters, Header: PackageManifestTableHeader, Row: (rowArgs) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PackageManifestTableRow, { obj: rowArgs.obj, index: rowArgs.index, rowKey: rowArgs.key, style: rowArgs.style, catalogSourceName: catalog.name, catalogSourceNamespace: catalog.namespace, subscription: (props.subscription.data || [])
                    .filter((sub) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](props.namespace) || sub.metadata.namespace === props.namespace)
                    .find((sub) => sub.spec.name === rowArgs.obj.metadata.name), canSubscribe: props.canSubscribe &&
                    !Object(_operator_group__WEBPACK_IMPORTED_MODULE_11__["installedFor"])(props.subscription.data)(props.operatorGroup.data)(rowArgs.obj.status.packageName)(Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_8__["getActiveNamespace"])()) &&
                    props.operatorGroup.data
                        .filter((og) => lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](props.namespace) || og.metadata.namespace === props.namespace)
                        .some((og) => Object(_operator_group__WEBPACK_IMPORTED_MODULE_11__["supports"])(Object(_index__WEBPACK_IMPORTED_MODULE_12__["installModesFor"])(rowArgs.obj)(Object(_index__WEBPACK_IMPORTED_MODULE_12__["defaultChannelFor"])(rowArgs.obj)))(og)), defaultNS: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.operatorGroup, 'data[0].metadata.namespace') })), EmptyMsg: () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["MsgBox"], { title: "No PackageManifests Found", detail: "The catalog author has not added any packages." })), virtualize: true }))))));
});
const PackageManifestsPage = (props) => {
    const namespace = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.match, 'params.ns');
    const flatten = (resources) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.packageManifest, 'data', []);
    const helpText = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" },
        "Catalogs are groups of Operators you can make available on the cluster. Use",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "/operatorhub" }, "OperatorHub"),
        " to subscribe and grant namespaces access to use installed Operators."));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["MultiListPage"], Object.assign({}, props, { namespace: namespace, showTitle: false, helpText: helpText, ListComponent: (listProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PackageManifestList, Object.assign({}, listProps, { showDetailsLink: true, namespace: namespace }))), textFilter: "packagemanifest-name", flatten: flatten, resources: [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["PackageManifestModel"]),
                isList: true,
                namespaced: true,
                prop: 'packageManifest',
                selector: {
                    matchExpressions: [
                        { key: _index__WEBPACK_IMPORTED_MODULE_12__["visibilityLabel"], operator: 'DoesNotExist' },
                        { key: _console_shared__WEBPACK_IMPORTED_MODULE_9__["OPERATOR_HUB_LABEL"], operator: 'DoesNotExist' },
                    ],
                },
            },
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["CatalogSourceModel"]),
                isList: true,
                namespaced: true,
                prop: 'catalogSource',
            },
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["SubscriptionModel"]),
                isList: true,
                namespaced: true,
                prop: 'subscription',
            },
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_10__["OperatorGroupModel"]),
                isList: true,
                namespaced: true,
                prop: 'operatorGroup',
            },
        ] })));
};
PackageManifestTableHeader.displayName = 'PackageManifestTableHeader';
PackageManifestTableRow.displayName = 'PackageManifestTableRow';
PackageManifestList.displayName = 'PackageManifestList';


/***/ }),

/***/ "./public/components/create-yaml.tsx":
/*!*******************************************!*\
  !*** ./public/components/create-yaml.tsx ***!
  \*******************************************/
/*! exports provided: CreateYAML, EditYAMLPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateYAML", function() { return CreateYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditYAMLPage", function() { return EditYAMLPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/yaml-templates */ "./public/models/yaml-templates.ts");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kinds */ "./public/kinds.ts");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./public/components/error.tsx");
/* harmony import */ var _console_shared_src_utils_yaml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/utils/yaml */ "./packages/console-shared/src/utils/yaml.ts");








const CreateYAML = Object(_kinds__WEBPACK_IMPORTED_MODULE_2__["connectToPlural"])((props) => {
    const { match, kindsInFlight, kindObj, hideHeader = false, onChange = () => null, resourceObjPath, } = props;
    const { params } = match;
    if (!kindObj) {
        if (kindsInFlight) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_error__WEBPACK_IMPORTED_MODULE_6__["ErrorPage404"], null);
    }
    const namespace = params.ns || 'default';
    const template = props.template ||
        _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(kindObj), 'default']) ||
        _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn(['DEFAULT', 'default']);
    const obj = Object(_console_shared_src_utils_yaml__WEBPACK_IMPORTED_MODULE_7__["safeYAMLToJS"])(template);
    obj.kind = kindObj.kind;
    obj.metadata = obj.metadata || {};
    if (kindObj.namespaced) {
        obj.metadata.namespace = namespace;
    }
    if (kindObj.crd && template === _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn(['DEFAULT', 'default'])) {
        obj.apiVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForModel"])(kindObj);
        obj.spec = obj.spec || {};
    }
    const header = `Create ${kindObj.label}`;
    // TODO: if someone edits namespace, we'll redirect to old namespace
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], { loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! ./droppable-edit-yaml */ "./public/components/droppable-edit-yaml.tsx")).then((c) => c.DroppableEditYAML), obj: obj, create: true, kind: kindObj.kind, header: header, hideHeader: hideHeader, resourceObjPath: resourceObjPath, onChange: onChange }));
});
const EditYAMLPage = (props) => {
    const Wrapper = (wrapperProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], Object.assign({}, wrapperProps, { obj: wrapperProps.obj.data, loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./edit-yaml */ "./public/components/edit-yaml.jsx")).then((c) => c.EditYAML), create: false })));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
            {
                kind: props.kind,
                name: props.match.params.name,
                namespace: props.match.params.ns,
                isList: false,
                prop: 'obj',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null)));
};
EditYAMLPage.displayName = 'EditYAMLPage';


/***/ })

}]);
//# sourceMappingURL=create-subscription-yaml-f3938074756ac77f1db2.js.map