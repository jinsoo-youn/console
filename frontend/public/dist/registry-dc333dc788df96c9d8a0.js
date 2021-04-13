(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registry"],{

/***/ "./public/components/hypercloud/registry.tsx":
/*!***************************************************!*\
  !*** ./public/components/hypercloud/registry.tsx ***!
  \***************************************************/
/*! exports provided: menuActions, RegistryDetailsList, Registries, RegistriesPage, NotaryLoader, RegistriesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryDetailsList", function() { return RegistryDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registries", function() { return Registries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistriesPage", function() { return RegistriesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaryLoader", function() { return NotaryLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistriesDetailsPage", function() { return RegistriesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/hypercloud */ "./public/models/hypercloud/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repository */ "./public/components/hypercloud/repository.tsx");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources */ "./public/components/hypercloud/resources.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals */ "./public/components/hypercloud/modals/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");













const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models_hypercloud__WEBPACK_IMPORTED_MODULE_6__["RegistryModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common, _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.ModifyScanning];
const kind = _models_hypercloud__WEBPACK_IMPORTED_MODULE_6__["RegistryModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-xl'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const RegistryTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('SINGLE:MSG_VIRTUALMACHINES_CREATEFORM_STEP1_DIV2_5'),
            sortField: 'status.serverURL',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('SINGLE:MSG_IMAGEREGISTRIES_CREATEFORM_DIV2_29'),
            sortField: 'status.capacity',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
RegistryTableHeader.displayName = 'RegistryTableHeader';
const RegistryTableRow = ({ obj: registry, index, key, style }) => {
    var _a, _b, _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: registry.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: registry.metadata.name, namespace: registry.metadata.namespace, title: registry.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: registry.metadata.namespace, title: registry.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, (_a = registry === null || registry === void 0 ? void 0 : registry.status) === null || _a === void 0 ? void 0 : _a.serverURL),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[3], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: (_b = registry === null || registry === void 0 ? void 0 : registry.status) === null || _b === void 0 ? void 0 : _b.phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] }, (_c = registry === null || registry === void 0 ? void 0 : registry.status) === null || _c === void 0 ? void 0 : _c.capacity),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: registry.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: registry }))));
};
const RegistryDetailsList = ({ ds }) => {
    var _a;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_MAIN_TABLEHEADER_3'), obj: ds, path: "status.phase" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: (_a = ds === null || ds === void 0 ? void 0 : ds.status) === null || _a === void 0 ? void 0 : _a.phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_3'), obj: ds, path: "spec.image" }, ds.spec.image),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('SINGLE:MSG_IMAGEREGISTRIES_CREATEFORM_DIV2_29'), obj: ds, path: "status.capacity" }, ds.status.capacity),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('SINGLE:MSG_IMAGEREGISTRIES_IMAGEREGISTRYDETAILS_TABDETAILS_1'), obj: ds, path: "status.serverURL" }, ds.status.serverURL)));
};
const RegistryDetails = ({ obj: registry }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_12__["ResourceLabel"])(registry, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: registry })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RegistryDetailsList, { ds: registry })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: `${t('COMMON:MSG_DETAILS_TABDETAILS_RESOURCES_1')}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_resources__WEBPACK_IMPORTED_MODULE_9__["Resources"], { conditions: registry.status.conditions, registry: registry.metadata.name, namespace: registry.metadata.namespace }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const Registries = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Registries", Header: RegistryTableHeader.bind(null, t), Row: RegistryTableRow, virtualize: true }));
};
const registryStatusReducer = (registry) => {
    var _a;
    return (_a = registry === null || registry === void 0 ? void 0 : registry.status) === null || _a === void 0 ? void 0 : _a.phase;
};
const filters = t => [
    {
        filterGroupName: t('COMMON:MSG_COMMON_FILTER_10'),
        type: 'registry-status',
        reducer: registryStatusReducer,
        items: [
            { id: 'Running', title: 'Running' },
            { id: 'Not Ready', title: 'Not Ready' },
            { id: 'Creating', title: 'Creating' },
        ],
    },
];
const registryCreateAction = (history, item) => {
    const pathname = window.location.pathname;
    const pathNameSplit = pathname.split('/');
    const allNS = pathNameSplit[2];
    let ns;
    if (allNS !== 'all-namespaces') {
        ns = pathNameSplit[3];
    }
    switch (item) {
        case 'scan':
            Object(_modals__WEBPACK_IMPORTED_MODULE_10__["scanningModal"])({ kind: 'Registry', ns, showNs: true });
            break;
        case 'generic':
            history.push('/');
            if (allNS === 'all-namespaces') {
                history.push('/k8s/ns/default/registries/~new');
            }
            else {
                history.push(`/k8s/ns/${ns}/registries/~new`);
            }
            break;
    }
};
const RegistriesPage = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    const createItems = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        generic: t('COMMON:MSG_LNB_MENU_188'),
        scan: t('COMMON:MSG_LNB_MENU_174')
    }), [t]);
    const createProps = {
        items: createItems,
        action: registryCreateAction.bind(null, props.history),
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_187'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_187') }), canCreate: true, createProps: createProps, ListComponent: Registries, rowFilters: filters.bind(null, t)(), kind: kind }, props));
});
const RepositoriesTab = ({ obj }) => {
    const { metadata: { namespace }, } = obj;
    const selector = {
        matchLabels: {
            registry: obj.metadata.name,
        },
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_repository__WEBPACK_IMPORTED_MODULE_8__["RepositoriesPage"], { showTitle: false, namespace: namespace, selector: selector, canCreate: false });
};
const NotaryLoader = props => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: () => __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./notary */ "./public/components/hypercloud/notary.tsx")).then(c => c.NotariesDetailsPage), kind: 'Notary', kindObj: _models_hypercloud__WEBPACK_IMPORTED_MODULE_6__["NotaryModel"], name: decodeURIComponent(props.obj.metadata.name), namespace: props.obj.metadata.namespace, match: props.match });
};
const RegistriesDetailsPage = props => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [
        details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(RegistryDetails)),
        editYaml(),
        {
            href: 'repository',
            name: 'Repository',
            component: RepositoriesTab,
        },
        {
            href: 'notary',
            name: 'Notary',
            component: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(NotaryLoader),
        },
    ] })));


/***/ }),

/***/ "./public/components/hypercloud/resources.tsx":
/*!****************************************************!*\
  !*** ./public/components/hypercloud/resources.tsx ***!
  \****************************************************/
/*! exports provided: Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resources", function() { return Resources; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




const Resources = ({ conditions, registry, namespace }) => {
    var _a;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    const rows = (_a = conditions === null || conditions === void 0 ? void 0 : conditions.map) === null || _a === void 0 ? void 0 : _a.call(conditions, (condition, i) => {
        if (condition.type.includes('Exist')) {
            let kind = condition.type.replace('Exist', '');
            kind = kind.replace('Realm', 'Resources');
            let name;
            if (kind === 'SecretTls') {
                name = `hpcd-tls-${registry}`;
                kind = 'Secret';
            }
            else if (kind === 'SecretOpaque') {
                name = `hpcd-tls-${registry}`;
                kind = 'Secret';
            }
            else if (kind === 'SecretDockerConfigJson') {
                name = `hpcd-registry-${registry}`;
                kind = 'Secret';
            }
            else if (kind === 'Pvc') {
                name = `hpcd-${registry}`;
                kind = 'PersistentVolumeClaim';
            }
            else if (kind === 'Notary') {
                name = registry;
            }
            else {
                name = `hpcd-${registry}`;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", "data-test-id": condition.type, key: i },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, kind),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, !condition.type.includes('Keycloak') ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])({ kind, apiVersion: 'tmax.io/v1' }), namespace: namespace, name: name }) : ''),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4", "data-test-id": "status" }, condition.status)));
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (conditions === null || conditions === void 0 ? void 0 : conditions.length) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, t('COMMON:MSG_DETAILS_TABDETAILS_RESOURCES_TABLEHEADER_1')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, t('COMMON:MSG_DETAILS_TABDETAILS_RESOURCES_TABLEHEADER_2')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, t('COMMON:MSG_DETAILS_TABDETAILS_RESOURCES_TABLEHEADER_3'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, rows))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "cos-status-box" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-center" }, "No Conditions Found")))));
};


/***/ })

}]);
//# sourceMappingURL=registry-dc333dc788df96c9d8a0.js.map