(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clusterservicebroker"],{

/***/ "./public/components/hypercloud/cluster-service-broker.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/hypercloud/cluster-service-broker.tsx ***!
  \*****************************************************************/
/*! exports provided: clusterServiceBrokerMenuActions, ClusterServiceBrokersList, ClusterServiceBrokersPage, ClusterServiceBrokersDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterServiceBrokerMenuActions", function() { return clusterServiceBrokerMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBrokersList", function() { return ClusterServiceBrokersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBrokersPage", function() { return ClusterServiceBrokersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceBrokersDetailsPage", function() { return ClusterServiceBrokersDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");








const { common } = _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory;
const kind = _models__WEBPACK_IMPORTED_MODULE_3__["ClusterServiceBrokerModel"].kind;
const clusterServiceBrokerMenuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_3__["ClusterServiceBrokerModel"]), ...common];
const ClusterServiceBrokerDetails = ({ obj: clusterServiceBroker }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__["ResourceLabel"])(clusterServiceBroker, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: clusterServiceBroker, showPodSelector: true, showNodeSelector: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13'), obj: clusterServiceBroker, path: "status.phase" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: ClusterServiceBrokerPhase(clusterServiceBroker) })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "URL"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, clusterServiceBroker.spec.url)))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const ClusterServiceBrokersDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: clusterServiceBrokerMenuActions, pages: [details(ClusterServiceBrokerDetails), editYaml()] }));
ClusterServiceBrokersDetailsPage.displayName = 'ClusterServiceBrokersDetailsPage';
const tableColumnClasses = ['', '', '', '', ''];
const ClusterServiceBrokerPhase = instance => {
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
const ClusterServiceBrokerTableRow = ({ obj, index, key, style }) => {
    let phase = ClusterServiceBrokerPhase(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: obj.metadata.name, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[1] }, obj.spec.url),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: clusterServiceBrokerMenuActions, kind: kind, resource: obj }))));
};
const ClusterServiceBrokerTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_4'),
            sortField: 'spec.url',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'ServiceBrokerPhase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ClusterServiceBrokerTableHeader.displayName = 'ClusterServiceBrokerTableHeader';
const ClusterServiceBrokersList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Cluster Service Broker", Header: ClusterServiceBrokerTableHeader.bind(null, t), Row: ClusterServiceBrokerTableRow, virtualize: true }));
};
ClusterServiceBrokersList.displayName = 'ClusterServiceBrokersList';
const ClusterServiceBrokersPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_14'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_14') }), canCreate: true, kind: kind, ListComponent: ClusterServiceBrokersList }, props));
};
ClusterServiceBrokersPage.displayName = 'ClusterServiceBrokersPage';



/***/ })

}]);
//# sourceMappingURL=clusterservicebroker-8ee7852b04fa54710839.js.map