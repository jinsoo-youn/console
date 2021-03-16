(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-manager"],{

/***/ "./public/components/alert-manager.tsx":
/*!*********************************************!*\
  !*** ./public/components/alert-manager.tsx ***!
  \*********************************************/
/*! exports provided: AlertManagersDetailsPage, AlertManagersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertManagersDetailsPage", function() { return AlertManagersDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertManagersPage", function() { return AlertManagersPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");










const Details = (props) => {
    const alertManager = props.obj;
    const { metadata, spec } = alertManager;
    const openReplicaCountModal = (event) => {
        event.preventDefault();
        event.target.blur();
        Object(_modals__WEBPACK_IMPORTED_MODULE_8__["configureReplicaCountModal"])({ resourceKind: _models__WEBPACK_IMPORTED_MODULE_9__["AlertmanagerModel"], resource: alertManager });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: "Alert Manager Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6 col-xs-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, metadata.name),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Labels"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: "Alertmanager", labels: metadata.labels })),
                        spec.nodeSelector && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Alert Manager Node Selector"),
                        spec.nodeSelector && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Selector"], { selector: spec.nodeSelector, kind: "Node" }))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6 col-xs-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Version"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, spec.version),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Replicas"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "link", type: "button", isInline: true, onClick: openReplicaCountModal },
                                Object(_utils__WEBPACK_IMPORTED_MODULE_7__["pluralize"])(spec.replicas, 'pod'),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })))))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const AlertManagersDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { pages: [details(Details), editYaml()] })));
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-md-2', 'col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-md-2', 'col-sm-3', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-md-3', 'col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-md-2', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-md-3', 'col-sm-3', 'hidden-xs'),
];
const AlertManagerTableRow = ({ obj: alertManager, index, key, style, }) => {
    const { metadata, spec } = alertManager;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: alertManager.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["AlertmanagerModel"]), name: metadata.name, namespace: metadata.namespace, title: metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: metadata.namespace, title: metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: _models__WEBPACK_IMPORTED_MODULE_9__["AlertmanagerModel"].kind, labels: metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] }, spec.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Selector"], { selector: spec.nodeSelector, kind: "Node" }))));
};
const AlertManagerTableHeader = () => {
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
            title: 'Labels',
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Version',
            sortField: 'spec.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Node Selector',
            sortField: 'spec.nodeSelector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
    ];
};
AlertManagerTableHeader.displayName = 'AlertManagerTableHeader';
const AlertManagersList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Alert Managers", Header: AlertManagerTableHeader, Row: AlertManagerTableRow, virtualize: true })));
const AlertManagersPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, props, { ListComponent: AlertManagersList, canCreate: false, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["AlertmanagerModel"]) })));


/***/ })

}]);
//# sourceMappingURL=alert-manager-c6a16575c308f2d18a18.js.map