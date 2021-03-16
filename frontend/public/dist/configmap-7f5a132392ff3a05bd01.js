(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configmap"],{

/***/ "./public/components/configmap.jsx":
/*!*****************************************!*\
  !*** ./public/components/configmap.jsx ***!
  \*****************************************/
/*! exports provided: ConfigMaps, ConfigMapsPage, ConfigMapsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMaps", function() { return ConfigMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMapsPage", function() { return ConfigMapsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMapsDetailsPage", function() { return ConfigMapsDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configmap-and-secret-data */ "./public/components/configmap-and-secret-data.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");










const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["ConfigMapModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = 'ConfigMap';
const tableColumnClasses = ['', '', 'hidden-xs', 'hidden-xs', _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const ConfigMapTableHeader = t => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_18'),
            sortFunc: 'dataSize',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
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
ConfigMapTableHeader.displayName = 'ConfigMapTableHeader';
const ConfigMapTableRow = ({ obj: configMap, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: configMap.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "ConfigMap", name: configMap.metadata.name, namespace: configMap.metadata.namespace, title: configMap.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: configMap.metadata.namespace, title: configMap.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](configMap.data) + lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](configMap.binaryData)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: configMap.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: configMap }))));
};
const ConfigMapDetails = ({ obj: configMap }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__["ResourceLabel"])(configMap, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: configMap })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DATA_1') }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_5__["ConfigMapData"], { data: configMap.data, label: t('COMMON:MSG_DETAILS_TABDETAILS_DATA_1') })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('SINGLE:MSG_CONFIGMAPS_CONFIGMAPDETAILS_TABDETAILS_BINARYDATA_1') }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_configmap_and_secret_data__WEBPACK_IMPORTED_MODULE_5__["ConfigMapBinaryData"], { data: configMap.binaryData }))));
};
const ConfigMaps = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Config Maps", Header: ConfigMapTableHeader.bind(null, t), Row: ConfigMapTableRow, virtualize: true }));
};
const ConfigMapsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_27'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_27') }), ListComponent: ConfigMaps, canCreate: true }, props));
};
const ConfigMapsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].details(ConfigMapDetails), _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].editYaml()] }));



/***/ }),

/***/ "./public/components/hypercloud/federated-config-map.tsx":
/*!***************************************************************!*\
  !*** ./public/components/hypercloud/federated-config-map.tsx ***!
  \***************************************************************/
/*! exports provided: menuActions, FederatedConfigMapDetailsList, FederatedConfigMaps, FederatedConfigMapsPage, FederatedConfigMapsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedConfigMapDetailsList", function() { return FederatedConfigMapDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedConfigMaps", function() { return FederatedConfigMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedConfigMapsPage", function() { return FederatedConfigMapsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedConfigMapsDetailsPage", function() { return FederatedConfigMapsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../events */ "./public/components/events.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");










const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__["AddHealthChecks"], _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_9__["FederatedConfigMapModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__["EditHealthChecks"], ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_9__["FederatedConfigMapModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const FederatedConfigMapTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'configmapNumScheduled',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
FederatedConfigMapTableHeader.displayName = 'FederatedConfigMapTableHeader';
const FederatedConfigMapTableRow = ({ obj: configmap, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: configmap.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: configmap.metadata.name, namespace: configmap.metadata.namespace, title: configmap.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: configmap.metadata.namespace, title: configmap.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${configmap.metadata.namespace}/configmaps/${configmap.metadata.name}/pods`, title: "pods" },
                configmap.status.currentNumberScheduled,
                " of ",
                configmap.status.desiredNumberScheduled,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: kind, labels: configmap.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Selector"], { selector: configmap.spec.selector, namespace: configmap.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: kind, resource: configmap }))));
};
const FederatedConfigMapDetailsList = ({ ds }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_38'), obj: ds, path: "status.currentNumberScheduled" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_39'), obj: ds, path: "status.desiredNumberScheduled" })));
};
const FederatedConfigMapDetails = ({ obj: configmap }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: `${t('COMMON:MSG_MAIN_DIV1_3', { 0: t('COMMON:MSG_LNB_MENU_27') })} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: configmap, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FederatedConfigMapDetailsList, { ds: configmap })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }))));
};
const { details, editYaml, events } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const FederatedConfigMaps = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Federated Config Maps", Header: FederatedConfigMapTableHeader.bind(null, t), Row: FederatedConfigMapTableRow, virtualize: true }));
};
const FederatedConfigMapsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ canCreate: true, ListComponent: FederatedConfigMaps, kind: kind }, props));
const FederatedConfigMapsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["detailsPage"])(FederatedConfigMapDetails)), editYaml(), events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"])] }));


/***/ })

}]);
//# sourceMappingURL=configmap-7f5a132392ff3a05bd01.js.map