(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knative-revisions-page"],{

/***/ "./packages/knative-plugin/src/actions/delete-revision.ts":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/actions/delete-revision.ts ***!
  \****************************************************************/
/*! exports provided: deleteRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRevision", function() { return deleteRevision; });
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals */ "./packages/knative-plugin/src/components/modals/index.ts");

const deleteRevision = (model, revision) => {
    return {
        label: `Delete ${model.label}`,
        callback: () => Object(_components_modals__WEBPACK_IMPORTED_MODULE_0__["deleteRevisionModal"])({
            revision,
        }),
        accessReview: {
            group: model.apiGroup,
            resource: model.plural,
            name: revision.metadata.name,
            namespace: revision.metadata.namespace,
            verb: 'delete',
        },
    };
};


/***/ }),

/***/ "./packages/knative-plugin/src/actions/getRevisionActions.ts":
/*!*******************************************************************!*\
  !*** ./packages/knative-plugin/src/actions/getRevisionActions.ts ***!
  \*******************************************************************/
/*! exports provided: getRevisionActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevisionActions", function() { return getRevisionActions; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _delete_revision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-revision */ "./packages/knative-plugin/src/actions/delete-revision.ts");



const getRevisionActions = () => {
    let deleteFound = false;
    const commonActions = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory.common.map((action) => {
        if (action.name === 'Delete') {
            deleteFound = true;
            return _delete_revision__WEBPACK_IMPORTED_MODULE_2__["deleteRevision"];
        }
        return action;
    });
    if (!deleteFound) {
        commonActions.push(_delete_revision__WEBPACK_IMPORTED_MODULE_2__["deleteRevision"]);
    }
    return [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_1__["RevisionModel"]), ...commonActions];
};


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/RevisionHeader.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/RevisionHeader.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _revision_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revision-table */ "./packages/knative-plugin/src/components/revisions/revision-table.ts");


const RevisionHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][1] },
        },
        {
            title: 'Service',
            sortField: 'metadata.labels["serving.knative.dev/service"]',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][2] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][3] },
        },
        {
            title: 'Conditions',
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][4] },
        },
        {
            title: 'Ready',
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][5] },
        },
        {
            title: 'Reason',
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][6] },
        },
        {
            title: '',
            props: { className: _revision_table__WEBPACK_IMPORTED_MODULE_1__["tableColumnClasses"][7] },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionHeader);


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/RevisionList.tsx":
/*!***************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/RevisionList.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _RevisionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RevisionHeader */ "./packages/knative-plugin/src/components/revisions/RevisionHeader.tsx");
/* harmony import */ var _RevisionRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RevisionRow */ "./packages/knative-plugin/src/components/revisions/RevisionRow.tsx");





const RevisionList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["Table"], Object.assign({}, props, { "aria-label": _models__WEBPACK_IMPORTED_MODULE_2__["RevisionModel"].labelPlural, Header: _RevisionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], Row: _RevisionRow__WEBPACK_IMPORTED_MODULE_4__["default"], virtualize: true })));
/* harmony default export */ __webpack_exports__["default"] = (RevisionList);


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/RevisionRow.tsx":
/*!**************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/RevisionRow.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _utils_condition_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/condition-utils */ "./packages/knative-plugin/src/utils/condition-utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../types */ "./packages/knative-plugin/src/types.ts");
/* harmony import */ var _revision_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./revision-table */ "./packages/knative-plugin/src/components/revisions/revision-table.ts");
/* harmony import */ var _actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/getRevisionActions */ "./packages/knative-plugin/src/actions/getRevisionActions.ts");











const revisionReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["RevisionModel"]);
const serviceReference = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ServiceModel"]);
const RevisionRow = ({ obj, index, key, style }) => {
    const readyCondition = obj.status
        ? Object(_utils_condition_utils__WEBPACK_IMPORTED_MODULE_7__["getCondition"])(obj.status.conditions, _types__WEBPACK_IMPORTED_MODULE_8__["ConditionTypes"].Ready)
        : null;
    const service = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](obj.metadata, `labels["serving.knative.dev/service"]`);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: revisionReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(_revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(_revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][2], 'co-break-word') }, service && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: serviceReference, name: service, namespace: obj.metadata.namespace, title: service }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][4] }, obj.status ? Object(_utils_condition_utils__WEBPACK_IMPORTED_MODULE_7__["getConditionString"])(obj.status.conditions) : '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][5] }, (readyCondition && readyCondition.status) || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][6] }, (readyCondition && readyCondition.message) || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _revision_table__WEBPACK_IMPORTED_MODULE_9__["tableColumnClasses"][7] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: Object(_actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_10__["getRevisionActions"])(), kind: revisionReference, resource: obj }))));
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionRow);


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/RevisionsPage.tsx":
/*!****************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/RevisionsPage.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _RevisionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RevisionList */ "./packages/knative-plugin/src/components/revisions/RevisionList.tsx");





const RevisionsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, props, { canCreate: false, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_3__["RevisionModel"]), ListComponent: _RevisionList__WEBPACK_IMPORTED_MODULE_4__["default"] })));
/* harmony default export */ __webpack_exports__["default"] = (RevisionsPage);


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/revision-table.ts":
/*!****************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/revision-table.ts ***!
  \****************************************************************************/
/*! exports provided: tableColumnClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");

const tableColumnClasses = [
    'col-lg-2 col-md-2 col-sm-4 col-xs-6',
    'col-lg-2 col-md-2 col-sm-4 col-xs-6',
    'col-lg-2 col-md-2 col-sm-4 hidden-xs',
    'col-lg-2 col-md-2 hidden-sm hidden-xs',
    'col-lg-1 col-md-2 hidden-sm hidden-xs',
    'col-lg-1 col-md-2 hidden-sm hidden-xs',
    'col-lg-2 col-md-2 hidden-sm hidden-xs',
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].columnClass,
];


/***/ }),

/***/ "./packages/knative-plugin/src/utils/condition-utils.ts":
/*!**************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/condition-utils.ts ***!
  \**************************************************************/
/*! exports provided: getConditionOKCount, getConditionString, getCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConditionOKCount", function() { return getConditionOKCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConditionString", function() { return getConditionString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCondition", function() { return getCondition; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");


const getConditionOKCount = (conditions) => lodash__WEBPACK_IMPORTED_MODULE_0__["sumBy"](conditions, (c) => Number(c.status === _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["K8sResourceConditionStatus"].True));
const getConditionString = (conditions) => `${getConditionOKCount(conditions)} OK / ${lodash__WEBPACK_IMPORTED_MODULE_0__["size"](conditions)}`;
const getCondition = (conditions, type) => lodash__WEBPACK_IMPORTED_MODULE_0__["find"](conditions, (c) => c.type === type);


/***/ })

}]);
//# sourceMappingURL=knative-revisions-page-3b956583d6971e44463e.js.map