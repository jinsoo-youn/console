(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-instance"],{

/***/ "./public/components/template-instance.tsx":
/*!*************************************************!*\
  !*** ./public/components/template-instance.tsx ***!
  \*************************************************/
/*! exports provided: TemplateInstanceList, TemplateInstancePage, TemplateInstanceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstanceList", function() { return TemplateInstanceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstancePage", function() { return TemplateInstancePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstanceDetailsPage", function() { return TemplateInstanceDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");









const menuActions = _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory.common;
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-5', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-5', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-2', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass,
];
const TemplateInstanceTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortFunc: 'getTemplateInstanceStatus',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
TemplateInstanceTableHeader.displayName = 'TemplateInstanceTableHeader';
const TemplateInstanceTableRow = ({ obj, index, key, style, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[0], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "TemplateInstance", name: obj.metadata.name, namespace: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["getTemplateInstanceStatus"])(obj) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: menuActions, kind: "TemplateInstance", resource: obj }))));
};
const TemplateInstanceList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Template Instances", Header: TemplateInstanceTableHeader, Row: TemplateInstanceTableRow, virtualize: true })));
const allStatuses = ['Ready', 'Not Ready', 'Failed'];
const filters = [
    {
        filterGroupName: 'Status',
        type: 'template-instance-status',
        reducer: _module_k8s__WEBPACK_IMPORTED_MODULE_7__["getTemplateInstanceStatus"],
        items: lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](allStatuses, (status) => ({
            id: status,
            title: status,
        })),
    },
];
const TemplateInstancePage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, props, { title: "Template Instances", kind: "TemplateInstance", ListComponent: TemplateInstanceList, canCreate: false, rowFilters: filters })));
const TemplateInstanceDetails = ({ obj }) => {
    const status = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["getTemplateInstanceStatus"])(obj);
    const secretName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.secret.name');
    const requester = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'spec.requester.username');
    const objects = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.objects', []);
    const conditions = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.conditions', []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Template Instance Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: obj })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Status"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: status })),
                            secretName && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Parameters"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Secret", name: secretName, namespace: obj.metadata.namespace })))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Requester"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, requester || '-')))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Objects" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" }, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" }, "Namespace")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](objects) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["EmptyBox"], { label: "Objects" })) : (lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](objects, ({ ref }, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-resource-list__item", key: i },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(ref), name: ref.name, namespace: ref.namespace })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" }, ref.namespace ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Namespace", name: ref.namespace }) : '-')))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Conditions" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_6__["Conditions"], { conditions: conditions }))));
};
const TemplateInstanceDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: "TemplateInstance", menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(TemplateInstanceDetails), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml()] })));


/***/ })

}]);
//# sourceMappingURL=template-instance-622681f7c836a02e958e.js.map