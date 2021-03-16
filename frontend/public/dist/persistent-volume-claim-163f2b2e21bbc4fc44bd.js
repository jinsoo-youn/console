(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["persistent-volume-claim"],{

/***/ "./public/components/persistent-volume-claim.jsx":
/*!*******************************************************!*\
  !*** ./public/components/persistent-volume-claim.jsx ***!
  \*******************************************************/
/*! exports provided: PersistentVolumeClaimsList, PersistentVolumeClaimsPage, PersistentVolumeClaimsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentVolumeClaimsList", function() { return PersistentVolumeClaimsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentVolumeClaimsPage", function() { return PersistentVolumeClaimsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentVolumeClaimsDetailsPage", function() { return PersistentVolumeClaimsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");












const { common, ExpandPVC } = _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory;
const menuActions = [
    ..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["PersistentVolumeClaimModel"]),
    ExpandPVC,
    ...common,
];
const PVCStatus = ({ pvc }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["Status"], { status: pvc.metadata.deletionTimestamp ? 'Terminating' : pvc.status.phase }));
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-xl'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-xl'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('pf-m-hidden', 'pf-m-visible-on-2xl'),
    _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass,
];
const PVCTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_29'),
            sortField: 'spec.volumeName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_14'),
            sortFunc: 'pvcStorage',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_63'),
            sortField: 'spec.storageClassName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
PVCTableHeader.displayName = 'PVCTableHeader';
const kind = 'PersistentVolumeClaim';
const PVCTableRow = ({ obj, index, key, style }) => {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PVCStatus, { pvc: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[3] }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.volumeName') ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "PersistentVolume", name: obj.spec.volumeName, title: obj.spec.volumeName })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-muted" }, "No Persistent Volume"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[4] }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.capacity.storage', '-')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[5]) }, ((_a = obj === null || obj === void 0 ? void 0 : obj.spec) === null || _a === void 0 ? void 0 : _a.storageClassName) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "StorageClass", name: obj.spec.storageClassName, title: obj.spec.storageClassName })) : ('-')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: menuActions, kind: kind, resource: obj }))));
};
const Details_ = ({ flags, obj: pvc }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    const canListPV = flags[_console_shared__WEBPACK_IMPORTED_MODULE_5__["FLAGS"].CAN_LIST_PV];
    const labelSelector = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'spec.selector');
    const storageClassName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'spec.storageClassName');
    const volumeName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'spec.volumeName');
    const storage = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'status.capacity.storage');
    const accessModes = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'status.accessModes');
    const volumeMode = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'spec.volumeMode');
    const conditions = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](pvc, 'status.conditions');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(pvc, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: pvc },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_38')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "pvc-name" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Selector"], { selector: labelSelector, kind: "PersistentVolume" })))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_45')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "pvc-status" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PVCStatus, { pvc: pvc })),
                        storage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_60')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "pvc-capacity" }, storage))),
                        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](accessModes) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_61')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "pvc-access-mode" }, accessModes.join(', ')))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_62')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "pvc-volume-mode" }, volumeMode || 'Filesystem'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_63')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "pvc-storageclass" }, storageClassName ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "StorageClass", name: storageClassName })) : ('-')),
                        volumeName && canListPV && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_64')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { "data-test-id": "persistent-volume" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "PersistentVolume", name: volumeName }))))))))));
};
const Details = Object(_reducers_features__WEBPACK_IMPORTED_MODULE_6__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_5__["FLAGS"].CAN_LIST_PV)(Details_);
const allPhases = ['Pending', 'Bound', 'Lost'];
const filters = (t) => [
    {
        filterGroupName: t('COMMON:MSG_COMMON_FILTER_10'),
        type: 'pvc-status',
        reducer: (pvc) => pvc.status.phase,
        items: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](allPhases, (phase) => ({
            id: phase,
            title: phase,
        })),
    },
];
const PersistentVolumeClaimsList = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Persistent Volume Claims", Header: PVCTableHeader.bind(null, t), Row: PVCTableRow, virtualize: true }));
};
const PersistentVolumeClaimsPage = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["ListPage"], Object.assign({}, props, { ListComponent: PersistentVolumeClaimsList, kind: kind, title: t('COMMON:MSG_LNB_MENU_52'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_52') }), canCreate: true, rowFilters: filters.bind(null, t)() })));
};
const PersistentVolumeClaimsDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [
        _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(Details),
        _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml(),
        _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_9__["ResourceEventStream"]),
    ] })));


/***/ })

}]);
//# sourceMappingURL=persistent-volume-claim-163f2b2e21bbc4fc44bd.js.map