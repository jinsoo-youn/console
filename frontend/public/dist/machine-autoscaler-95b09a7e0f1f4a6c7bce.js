(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["machine-autoscaler"],{

/***/ "./public/components/machine-autoscaler.tsx":
/*!**************************************************!*\
  !*** ./public/components/machine-autoscaler.tsx ***!
  \**************************************************/
/*! exports provided: MachineAutoscalerPage, MachineAutoscalerDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineAutoscalerPage", function() { return MachineAutoscalerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineAutoscalerDetailsPage", function() { return MachineAutoscalerDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");








const { common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["MachineAutoscalerModel"]), ...common];
const machineAutoscalerReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["MachineAutoscalerModel"]);
const MachineAutoscalerTargetLink = ({ obj }) => {
    const targetAPIVersion = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.scaleTargetRef.apiVersion');
    const targetKind = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.scaleTargetRef.kind');
    const targetName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.scaleTargetRef.name');
    if (!targetAPIVersion || !targetKind || !targetName) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "-");
    }
    const groupVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["groupVersionFor"])(targetAPIVersion);
    const reference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForGroupVersionKind"])(groupVersion.group)(groupVersion.version)(targetKind);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: reference, name: targetName, namespace: obj.metadata.namespace });
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-4', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-3', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-3', 'col-sm-4', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-1', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-md-1', 'hidden-sm', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass,
];
const MachineAutoscalerTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Scale Target',
            sortField: 'spec.scaleTargetRef.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Min',
            sortField: 'spec.minReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Max',
            sortField: 'spec.maxReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
MachineAutoscalerTableHeader.displayName = 'MachineAutoscalerTableHeader';
const MachineAutoscalerTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: machineAutoscalerReference, name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[2], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MachineAutoscalerTargetLink, { obj: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.minReplicas') || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.maxReplicas') || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: machineAutoscalerReference, resource: obj }))));
};
const MachineAutoscalerList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Machine Autoscalers", Header: MachineAutoscalerTableHeader, Row: MachineAutoscalerTableRow, virtualize: true })));
const MachineAutoscalerDetails = ({ obj }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: "Machine Autoscaler Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: obj },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Scale Target"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MachineAutoscalerTargetLink, { obj: obj })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Min Replicas"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.minReplicas') || '-'),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Max Replicas"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.maxReplicas') || '-')))));
};
const MachineAutoscalerPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, props, { ListComponent: MachineAutoscalerList, kind: machineAutoscalerReference, canCreate: true })));
const MachineAutoscalerDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, kind: machineAutoscalerReference, pages: [_utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].details(MachineAutoscalerDetails), _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].editYaml()] })));


/***/ })

}]);
//# sourceMappingURL=machine-autoscaler-95b09a7e0f1f4a6c7bce.js.map