(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["replicaset"],{

/***/ "./public/components/replicaset.jsx":
/*!******************************************!*\
  !*** ./public/components/replicaset.jsx ***!
  \******************************************/
/*! exports provided: replicaSetMenuActions, ReplicaSetsList, ReplicaSetsPage, ReplicaSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicaSetMenuActions", function() { return replicaSetMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicaSetsList", function() { return ReplicaSetsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicaSetsPage", function() { return ReplicaSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplicaSetsDetailsPage", function() { return ReplicaSetsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
// TODO file should be renamed replica-set.jsx to match convention












const { ModifyCount, AddStorage, common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const replicaSetMenuActions = [ModifyCount, AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["ReplicaSetModel"]), ...common];
const Details = ({ obj: replicaSet }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    const revision = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](replicaSet, ['metadata', 'annotations', 'deployment.kubernetes.io/revision']);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(replicaSet, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: replicaSet, showPodSelector: true, showNodeSelector: true, showTolerations: true }, revision && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_41')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, revision))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourcePodCount"], { resource: replicaSet })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ContainerTable"], { containers: replicaSet.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: replicaSet, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') }))));
};
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const environmentComponent = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const ReplicaSetPods = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["PodsComponent"], Object.assign({}, props, { customData: { showNodes: true } }));
const { details, editYaml, pods, envEditor, events } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const ReplicaSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { menuActions: replicaSetMenuActions, pages: [details(Details), editYaml(), pods(ReplicaSetPods), envEditor(environmentComponent), events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"])] }));
const kind = 'ReplicaSet';
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-xl'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const ReplicaSetTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `${Object(_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePath"])(kind, obj.metadata.name, obj.metadata.namespace)}/pods`, title: "pods" },
                obj.status.replicas || 0,
                " of ",
                obj.spec.replicas,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: kind, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["OwnerReferences"], { resource: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: replicaSetMenuActions, kind: kind, resource: obj }))));
};
const ReplicaSetTableHeader = t => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'numReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_11'),
            sortField: 'metadata.ownerReferences[0].name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
ReplicaSetTableHeader.displayName = 'ReplicaSetTableHeader';
const ReplicaSetsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Replica Sets", Header: ReplicaSetTableHeader.bind(null, t), Row: ReplicaSetTableRow, virtualize: true }));
};
const ReplicaSetsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    const { canCreate = true } = props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_31'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_31') }), canCreate: canCreate, kind: "ReplicaSet", ListComponent: ReplicaSetsList }, props));
};



/***/ })

}]);
//# sourceMappingURL=replicaset-c9a1ceee51db35e7f5a7.js.map