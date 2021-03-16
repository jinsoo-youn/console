(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-resource-definition"],{

/***/ "./public/components/custom-resource-definition.tsx":
/*!**********************************************************!*\
  !*** ./public/components/custom-resource-definition.tsx ***!
  \**********************************************************/
/*! exports provided: CustomResourceDefinitionsList, CustomResourceDefinitionsPage, CustomResourceDefinitionsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomResourceDefinitionsList", function() { return CustomResourceDefinitionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomResourceDefinitionsPage", function() { return CustomResourceDefinitionsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomResourceDefinitionsDetailsPage", function() { return CustomResourceDefinitionsDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _resource_pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource-pages */ "./public/components/resource-pages.ts");
/* harmony import */ var _default_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default-resource */ "./public/components/default-resource.jsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");














const { common } = _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory;
const crdInstancesPath = (crd) => (lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](crd, 'spec.scope') === 'Namespaced' ? `/k8s/all-namespaces/${Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForCRD"])(crd)}` : `/k8s/cluster/${Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForCRD"])(crd)}`);
const instances = (kind, obj) => ({
    label: 'View Instances',
    href: crdInstancesPath(obj),
});
const menuActions = [instances, ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_8__["CustomResourceDefinitionModel"]), ...common];
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-4', 'col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-4', 'col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-2', 'col-sm-4', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-2', 'hidden-sm', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const CRDTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'spec.names.kind',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_52'),
            sortField: 'spec.group',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_53'),
            sortField: 'spec.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_54'),
            sortField: 'spec.scope',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_55'),
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
CRDTableHeader.displayName = 'CRDTableHeader';
const isEstablished = (conditions) => {
    const condition = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](conditions, c => c.type === 'Established');
    return condition && condition.status === 'True';
};
const namespaced = (crd) => crd.spec.scope === 'Namespaced';
const Established = ({ crd }) => {
    return crd.status && isEstablished(crd.status.conditions) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_12__["GreenCheckCircleIcon"], { alt: "true" }))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["BanIcon"], { alt: "false" })));
};
const EmptyVersionsMsg = () => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["EmptyBox"], { label: "CRD Versions" });
const CRDVersionTable = ({ versions }) => {
    const [sortBy, setSortBy] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({});
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    const compare = (a, b) => {
        var _a, _b;
        const aVal = (_a = a === null || a === void 0 ? void 0 : a[sortBy.index]) !== null && _a !== void 0 ? _a : '';
        const bVal = (_b = b === null || b === void 0 ? void 0 : b[sortBy.index]) !== null && _b !== void 0 ? _b : '';
        return sortBy.index === 0 ? Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["apiVersionCompare"])(aVal, bVal) : aVal.localeCompare(bVal);
    };
    const crdVersionTableHeaders = [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        },
        {
            title: t('COMMON:MSG_DETAILS_TABDETAILS_VERSIONS_TABLEHEADER_1'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        },
        {
            title: t('COMMON:MSG_DETAILS_TABDETAILS_VERSIONS_TABLEHEADER_2'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
        },
    ];
    const versionRows = lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](versions, (version) => [version.name, version.served.toString(), version.storage.toString()]);
    sortBy.direction === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["SortByDirection"].asc ? versionRows.sort(compare) : versionRows.sort(compare).reverse();
    const onSort = (_event, index, direction) => {
        setSortBy({ index, direction });
    };
    return versionRows.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["Table"], { variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["TableVariant"].compact, "aria-label": "CRD Versions", cells: crdVersionTableHeaders, rows: versionRows, onSort: onSort, sortBy: sortBy },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["TableHeader"], null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["TableBody"], null))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EmptyVersionsMsg, null));
};
const CRDTableRow = ({ obj: crd, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: crd.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "co-resource-item" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "CustomResourceDefinition", name: crd.metadata.name, namespace: crd.metadata.namespace, displayName: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](crd, 'spec.names.kind') }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') }, crd.spec.group),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["getLatestVersionForCRD"])(crd)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, namespaced(crd) ? 'Yes' : 'No'),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Established, { crd: crd })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: "CustomResourceDefinition", resource: crd }))));
};
const Details = ({ obj: crd }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: "Custom Resource Definition Details" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { showPodSelector: false, showNodeSelector: false, resource: crd })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_91')),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Established, { crd: crd })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_92'), obj: crd, path: "spec.group" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_93'), obj: crd, path: "spec.version" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_94'), obj: crd, path: "spec.scope" })))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONDITIONS_1') }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_9__["Conditions"], { conditions: crd.status.conditions })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_93') }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CRDVersionTable, { versions: crd.spec.versions }))));
};
const Instances = ({ obj, namespace }) => {
    const crdKind = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForCRD"])(obj);
    const componentLoader = _resource_pages__WEBPACK_IMPORTED_MODULE_10__["resourceListPages"].get(crdKind, () => Promise.resolve(_default_resource__WEBPACK_IMPORTED_MODULE_11__["DefaultPage"]));
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["AsyncComponent"], { loader: componentLoader, namespace: namespace ? namespace : undefined, kind: crdKind, showTitle: false, autoFocus: false });
};
const CustomResourceDefinitionsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Custom Resource Definitions", Header: CRDTableHeader.bind(null, t), Row: CRDTableRow, defaultSortField: "spec.names.kind", virtualize: true }));
};
const CustomResourceDefinitionsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, props, { ListComponent: CustomResourceDefinitionsList, kind: "CustomResourceDefinition", canCreate: true }));
const CustomResourceDefinitionsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: "CustomResourceDefinition", menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].details(Details), _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].editYaml(), { name: 'Instances', href: 'instances', component: Instances }] }));
CustomResourceDefinitionsList.displayName = 'CustomResourceDefinitionsList';
CustomResourceDefinitionsPage.displayName = 'CustomResourceDefinitionsPage';


/***/ })

}]);
//# sourceMappingURL=custom-resource-definition-2d94ba51ff7e00a51bd0.js.map