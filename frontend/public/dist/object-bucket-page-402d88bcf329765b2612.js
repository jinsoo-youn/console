(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["object-bucket-page"],{

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-page/object-bucket.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-page/object-bucket.tsx ***!
  \********************************************************************************************/
/*! exports provided: ObjectBucketsPage, ObjectBucketDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBucketsPage", function() { return ObjectBucketsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBucketDetailsPage", function() { return ObjectBucketDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/events */ "./public/components/events.jsx");
/* harmony import */ var _console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/noobaa-storage-plugin/src/models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");
/* harmony import */ var _table_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../table-filters */ "./packages/noobaa-storage-plugin/src/table-filters.ts");












const kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaObjectBucketModel"]);
const menuActions = [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common];
const OBStatus = ({ ob }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["Status"], { status: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getPhase"])(ob) });
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'col-sm-6', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-4', 'col-md-4', 'hidden-sm', 'hidden-xs'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const OBTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Status',
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Storage Class',
            sortField: 'spec.storageClassName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_9__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
OBTableHeader.displayName = 'OBTableHeader';
const OBTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1]) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OBStatus, { ob: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] }, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.storageClassName', '-')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: obj }))));
};
const Details = ({ obj }) => {
    const storageClassName = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.storageClassName');
    const [OBCName, OBCNamespace] = [
        lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.claimRef.name'),
        lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.claimRef.namespace'),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Object Bucket Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: obj })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OBStatus, { ob: obj })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Storage Class"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, storageClassName ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "StorageClass", name: storageClassName })) : ('-')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Object Bucket Claim"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaObjectBucketClaimModel"]), name: OBCName, namespace: OBCNamespace }))))))));
};
const ObjectBucketsList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Object Buckets", Header: OBTableHeader, Row: OBTableRow, virtualize: true })));
const ObjectBucketsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({}, props, { ListComponent: ObjectBucketsList, kind: kind, rowFilters: [_table_filters__WEBPACK_IMPORTED_MODULE_11__["obStatusFilter"]] })));
const ObjectBucketDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].details(Details),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].editYaml(),
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].events(_console_internal_components_events__WEBPACK_IMPORTED_MODULE_6__["ResourceEventStream"]),
    ] })));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/table-filters.ts":
/*!*************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/table-filters.ts ***!
  \*************************************************************/
/*! exports provided: obcStatusFilter, obStatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obcStatusFilter", function() { return obcStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obStatusFilter", function() { return obStatusFilter; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./packages/noobaa-storage-plugin/src/utils.ts");


const allPhases = ['Pending', 'Bound', 'Lost'];
const obcStatusFilter = {
    type: 'obc-status',
    filterGroupName: 'Status',
    reducer: _utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"],
    items: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](allPhases, (phase) => ({
        id: phase,
        title: phase,
    })),
    filter: (phases, obc) => {
        if (!phases || !phases.selected) {
            return true;
        }
        const phase = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"])(obc);
        return (phases.selected.has(phase) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](phases.all, phase) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](phases.selected));
    },
};
const obStatusFilter = {
    type: 'ob-status',
    filterGroupName: 'Status',
    reducer: _utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"],
    items: lodash__WEBPACK_IMPORTED_MODULE_0__["map"](allPhases, (phase) => ({
        id: phase,
        title: phase,
    })),
    filter: (phases, ob) => {
        if (!phases || !phases.selected) {
            return true;
        }
        const phase = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPhase"])(ob);
        return (phases.selected.has(phase) || !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](phases.all, phase) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](phases.selected));
    },
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/utils.ts ***!
  \*****************************************************/
/*! exports provided: filterNooBaaAlerts, getGaugeValue, getMetric, getPhase, isBound, getSCProvisioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNooBaaAlerts", function() { return filterNooBaaAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeValue", function() { return getGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetric", function() { return getMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhase", function() { return getPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBound", function() { return isBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCProvisioner", function() { return getSCProvisioner; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterNooBaaAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'NooBaa');
const getGaugeValue = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'data.result[0].value[1]');
const getMetric = (result, metric) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, ['data', 'result', '0', 'metric', metric], null);
const getPhase = (obj) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.phase', 'Lost');
};
const isBound = (obj) => getPhase(obj) === 'Bound';
const getSCProvisioner = (obj) => obj.provisioner;


/***/ })

}]);
//# sourceMappingURL=object-bucket-page-402d88bcf329765b2612.js.map