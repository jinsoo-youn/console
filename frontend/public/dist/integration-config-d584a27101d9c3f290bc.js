(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integration-config"],{

/***/ "./public/components/hypercloud/integration-config.tsx":
/*!*************************************************************!*\
  !*** ./public/components/hypercloud/integration-config.tsx ***!
  \*************************************************************/
/*! exports provided: menuActions, IntegrationConfigDetailsList, IntegrationConfigs, IntegrationConfigsPage, IntegrationConfigsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationConfigDetailsList", function() { return IntegrationConfigDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationConfigs", function() { return IntegrationConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationConfigsPage", function() { return IntegrationConfigsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationConfigsDetailsPage", function() { return IntegrationConfigsDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/hypercloud */ "./public/models/hypercloud/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");










const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models_hypercloud__WEBPACK_IMPORTED_MODULE_7__["IntegrationConfigModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models_hypercloud__WEBPACK_IMPORTED_MODULE_7__["IntegrationConfigModel"].kind;
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-xs-2', 'col-sm-2'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-xs-2', 'col-sm-2'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-2', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-xs-2', 'col-sm-2'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-2', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass,
];
const IntegrationConfigPhase = instance => {
    let phase = '';
    if (instance.status) {
        instance.status.conditions.forEach(cur => {
            if (cur.type === 'ready') {
                if (cur.status === 'True') {
                    phase = 'Ready';
                }
                else {
                    phase = 'UnReady';
                }
            }
        });
        return phase;
    }
};
const IntegrationConfigTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_38'),
            sortField: 'spec.image',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
IntegrationConfigTableHeader.displayName = 'IntegrationConfigTableHeader';
const IntegrationConfigTableRow = ({ obj: integrationConfig, index, key, style }) => {
    const phase = IntegrationConfigPhase(integrationConfig);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: integrationConfig.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: integrationConfig.metadata.name, namespace: integrationConfig.metadata.namespace, title: integrationConfig.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: integrationConfig.metadata.namespace, title: integrationConfig.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, integrationConfig.spec.image),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: phase })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: integrationConfig.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: integrationConfig }))));
};
const IntegrationConfigDetailsList = ({ ds }) => {
    var _a;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    const readyCondition = ds.status.conditions.find(obj => lodash_es__WEBPACK_IMPORTED_MODULE_0__["lowerCase"](obj.type) === 'ready');
    const time = (_a = readyCondition === null || readyCondition === void 0 ? void 0 : readyCondition.lastTransitionTime) === null || _a === void 0 ? void 0 : _a.replace('T', ' ').replaceAll('-', '.').replace('Z', '');
    const phase = IntegrationConfigPhase(ds);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: `${t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_109')}`, obj: ds, path: "status.transitionTime" }, time),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: `${t('COMMON:MSG_COMMON_TABLEHEADER_2')}`, obj: ds, path: "status.result" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: phase }))));
};
const IntegrationConfigDetails = ({ obj: integrationConfig }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__["ResourceLabel"])(integrationConfig, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: integrationConfig })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IntegrationConfigDetailsList, { ds: integrationConfig }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const IntegrationConfigs = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "IntegrationConfigs", Header: IntegrationConfigTableHeader.bind(null, t), Row: IntegrationConfigTableRow, virtualize: true }));
};
const IntegrationConfigsPage = props => {
    // const { t } = useTranslation();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"]
    // title={t('COMMON:CD_MAILFORM_REQUEST_7')}
    // createButtonText={t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:CD_MAILFORM_REQUEST_7') })}
    , Object.assign({ 
        // title={t('COMMON:CD_MAILFORM_REQUEST_7')}
        // createButtonText={t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:CD_MAILFORM_REQUEST_7') })}
        canCreate: true, ListComponent: IntegrationConfigs, kind: kind }, props));
};
const IntegrationConfigsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(IntegrationConfigDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=integration-config-d584a27101d9c3f290bc.js.map