(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["external-registry"],{

/***/ "./public/components/hypercloud/external-registry.tsx":
/*!************************************************************!*\
  !*** ./public/components/hypercloud/external-registry.tsx ***!
  \************************************************************/
/*! exports provided: menuActions, ExternalRegistryDetailsList, ExternalRegistries, ExternalRegistriesPage, ExternalRegistriesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalRegistryDetailsList", function() { return ExternalRegistryDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalRegistries", function() { return ExternalRegistries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalRegistriesPage", function() { return ExternalRegistriesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalRegistriesDetailsPage", function() { return ExternalRegistriesDetailsPage; });
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
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals */ "./public/components/hypercloud/modals/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");












const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models_hypercloud__WEBPACK_IMPORTED_MODULE_6__["ExternalRegistryModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common, _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.ModifyScanning];
const kind = _models_hypercloud__WEBPACK_IMPORTED_MODULE_6__["ExternalRegistryModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-xl'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const ExternalRegistryTableHeader = (t) => {
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
            sortField: 'spec.registryUrl',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Registry Type',
            sortField: 'spec.registryType',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.state',
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
ExternalRegistryTableHeader.displayName = 'ExternalRegistryTableHeader';
const ExternalRegistryTableRow = ({ obj: externalRegistry, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: externalRegistry.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: externalRegistry.metadata.name, namespace: externalRegistry.metadata.namespace, title: externalRegistry.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: externalRegistry.metadata.namespace, title: externalRegistry.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, externalRegistry.spec.registryUrl),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] }, externalRegistry.spec.registryType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[4], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: externalRegistry.status.state })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: externalRegistry.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: externalRegistry }))));
};
const ExternalRegistryDetailsList = ({ ds }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: `${t('SINGLE:MSG_VIRTUALMACHINES_CREATEFORM_STEP1_DIV2_6')} ${t('SINGLE:MSG_VIRTUALMACHINES_CREATEFORM_STEP1_DIV2_5')}`, obj: ds, path: "spec.registryUrl" }, ds.spec.registryUrl),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: `${t('SINGLE:MSG_VIRTUALMACHINES_CREATEFORM_STEP1_DIV2_6')} ${t('SINGLE:MSG_VIRTUALMACHINES_CREATEFORM_STEP2_POPUP_5')}`, obj: ds, path: "spec.registryType" }, ds.spec.registryType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: `${t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_4')}`, obj: ds, path: "status.state" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: ds.status.state }))));
};
const ExternalRegistryDetails = ({ obj: externalRegistry }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(externalRegistry, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: externalRegistry })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ExternalRegistryDetailsList, { ds: externalRegistry }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const ExternalRegistries = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "ExternalRegistries", Header: ExternalRegistryTableHeader.bind(null, t), Row: ExternalRegistryTableRow, virtualize: true }));
};
const registryStatusReducer = (externalRegistry) => {
    return externalRegistry.status.state;
};
const filters = [
    {
        filterGroupName: 'Status',
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
            Object(_modals__WEBPACK_IMPORTED_MODULE_9__["scanningModal"])({ kind: 'ExternalRegistry', ns, showNs: true });
            break;
        case 'generic':
            history.push('/');
            if (allNS === 'all-namespaces') {
                history.push('/k8s/ns/default/externalregistries/~new');
            }
            else {
                history.push(`/k8s/ns/${ns}/externalregistries/~new`);
            }
            break;
    }
};
const ExternalRegistriesPage = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(props => {
    const createItems = {
        generic: 'Create External Registry',
        scan: 'Image Scan Request',
    };
    const createProps = {
        items: createItems,
        action: registryCreateAction.bind(null, props.history)
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ canCreate: true, createProps: createProps, ListComponent: ExternalRegistries, rowFilters: filters, kind: kind }, props));
});
const RepositoriesTab = ({ obj }) => {
    const { metadata: { namespace }, } = obj;
    const selector = {
        matchLabels: {
            'ext-registry': obj.metadata.name,
        },
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_repository__WEBPACK_IMPORTED_MODULE_8__["RepositoriesPage"], { showTitle: false, namespace: namespace, isExtRegistry: true, selector: selector, canCreate: false });
};
const ExternalRegistriesDetailsPage = props => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [
        details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(ExternalRegistryDetails)),
        editYaml(),
        {
            href: 'repository',
            name: 'Repository',
            component: RepositoriesTab,
        },
    ] })));


/***/ })

}]);
//# sourceMappingURL=external-registry-ba83d7a91902ea89f247.js.map