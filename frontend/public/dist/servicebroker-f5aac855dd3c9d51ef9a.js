(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicebroker"],{

/***/ "./public/components/hypercloud/service-broker.tsx":
/*!*********************************************************!*\
  !*** ./public/components/hypercloud/service-broker.tsx ***!
  \*********************************************************/
/*! exports provided: serviceBrokerMenuActions, ServiceBrokersList, ServiceBrokersPage, ServiceBrokersDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceBrokerMenuActions", function() { return serviceBrokerMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBrokersList", function() { return ServiceBrokersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBrokersPage", function() { return ServiceBrokersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBrokersDetailsPage", function() { return ServiceBrokersDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");









const { common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const kind = _models__WEBPACK_IMPORTED_MODULE_4__["ServiceBrokerModel"].kind;
const serviceBrokerMenuActions = [..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["ServiceBrokerModel"]), ...common];
const ServiceBrokerDetails = ({ obj: serviceBroker }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(serviceBroker, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: serviceBroker, showAnnotations: false, showOwner: false })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13'), obj: serviceBroker, path: "status.phase" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: ServiceBrokerPhase(serviceBroker) })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "URL"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, serviceBroker.spec.url)))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const ServiceBrokersDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: serviceBrokerMenuActions, pages: [details(ServiceBrokerDetails), editYaml()] }));
ServiceBrokersDetailsPage.displayName = 'ServiceBrokersDetailsPage';
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-xl'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const ServiceBrokerPhase = instance => {
    let phase = '';
    if (instance.status) {
        instance.status.conditions.forEach(cur => {
            if (cur.type === 'Ready') {
                if (cur.status === 'True') {
                    phase = 'Running';
                }
                else {
                    phase = 'Error';
                }
            }
        });
        return phase;
    }
};
const ServiceBrokerTableRow = ({ obj, index, key, style }) => {
    let phase = ServiceBrokerPhase(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1]) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: serviceBrokerMenuActions, kind: kind, resource: obj }))));
};
const ServiceBrokerTableHeader = (t) => {
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
            sortFunc: 'ServiceBrokerPhase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
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
ServiceBrokerTableHeader.displayName = 'ServiceBrokerTableHeader';
const serviceBrokerStatusReducer = (serviceBroker) => {
    return ServiceBrokerPhase(serviceBroker);
};
const ServiceBrokersList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Service Broker", Header: ServiceBrokerTableHeader.bind(null, t), Row: ServiceBrokerTableRow, virtualize: true }));
};
ServiceBrokersList.displayName = 'ServiceBrokersList';
const ServiceBrokersPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_11'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_11') }), canCreate: true, kind: kind, ListComponent: ServiceBrokersList, rowFilters: [
            {
                filterGroupName: 'Status',
                type: 'service-broker-status',
                reducer: serviceBrokerStatusReducer,
                items: [
                    { id: 'Running', title: t('COMMON:MSG_COMMON_STATUS_1') },
                    { id: 'Error', title: 'Error' },
                ],
            },
        ] }, props)));
};
ServiceBrokersPage.displayName = 'ServiceBrokersPage';



/***/ })

}]);
//# sourceMappingURL=servicebroker-f5aac855dd3c9d51ef9a.js.map