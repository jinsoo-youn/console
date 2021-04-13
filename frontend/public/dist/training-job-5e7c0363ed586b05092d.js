(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-job"],{

/***/ "./public/components/hypercloud/training-job.tsx":
/*!*******************************************************!*\
  !*** ./public/components/hypercloud/training-job.tsx ***!
  \*******************************************************/
/*! exports provided: menuActions, tjKind, TrainingJobs, TrainingJobsPage, TrainingJobsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tjKind", function() { return tjKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingJobs", function() { return TrainingJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingJobsPage", function() { return TrainingJobsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingJobsDetailsPage", function() { return TrainingJobsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["TrainingJobModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common];
const tjKind = tj => {
    return tj.kind === 'PyTorchJob' ? 'pytorchjob' : 'tfjob';
};
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const tjPhase = tj => {
    let len = tj.status.conditions.length;
    for (let i = len - 1; i >= 0; i--) {
        if (tj.status.conditions[i].status) {
            return tj.status.conditions[i].type;
        }
    }
};
const TJStatus = ({ tj }) => {
    const phase = tjPhase(tj);
    if (!phase) {
        return '-';
    }
    switch (phase) {
        case 'Running':
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-hourglass-half", "aria-hidden": "true" }),
                " Running"));
        case 'Restarting':
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-hourglass-half", "aria-hidden": "true" }),
                " Restarting"));
        case 'Created':
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "pvc-bound" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-check", "aria-hidden": "true" }),
                " Created"));
        case 'Succeeded':
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "pvc-bound" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-check", "aria-hidden": "true" }),
                " Succeeded"));
        case 'Failed':
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "pvc-lost" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-minus-circle", "aria-hidden": "true" }),
                " Failed"));
        default:
            return phase;
    }
};
const TJComposition = ({ tj }) => {
    const specs = Object.entries(tj.spec);
    const keys = Object.keys(specs[0][1]);
    let str = '';
    for (let i = 0; i < keys.length; i++) {
        str += `${keys[i]} ${specs[0][1][keys[i]].replicas}`;
        if (i !== keys.length - 1) {
            str += ', ';
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "pvc-lost" }, str);
};
const TrainingJobTableHeader = (t) => {
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
            sortFunc: 'tjPhase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortFunc: 'tjComposition',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
TrainingJobTableHeader.displayName = 'TrainingJobTableHeader';
const TrainingJobTableRow = ({ obj: tj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: tj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: tjKind(tj), name: tj.metadata.name, namespace: tj.metadata.namespace, title: tj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: tj.metadata.namespace, title: tj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TJStatus, { tj: tj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TJComposition, { tj: tj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: tjKind(tj), resource: tj }))));
};
const TrainingJobDetails = ({ obj: tj }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__["ResourceLabel"])(tj, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: tj }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const TrainingJobs = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "TrainingJobs", Header: TrainingJobTableHeader.bind(null, t), Row: TrainingJobTableRow, virtualize: true }));
};
const TrainingJobsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    const createItems = {
        tfjob: t('TF Job'),
        pytorchjob: t('PyTorch Job'),
    };
    const createProps = {
        items: createItems,
        createLink: type => `/k8s/ns/${props.namespace || 'default'}/${type}s/~new`,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["MultiListPage"], Object.assign({ showTitle: true, title: 'Training Jobs', canCreate: true, ListComponent: TrainingJobs, namespace: props.namespace, createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_7__["ResourceLabel"])(_models__WEBPACK_IMPORTED_MODULE_6__["TrainingJobModel"], t) }), createProps: createProps, flatten: resources => lodash__WEBPACK_IMPORTED_MODULE_8__["flatMap"](resources, 'data').filter(r => !!r), resources: [
            { kind: 'TFJob', namespaced: true, optional: true },
            { kind: 'PyTorchJob', namespaced: true, optional: true },
        ], rowFilters: [
            {
                filterGroupName: 'Training Job',
                type: 'trainingjob-kind',
                reducer: tjKind,
                items: [
                    { id: 'tfjob', title: 'TF Job' },
                    { id: 'pytorchjob', title: 'Pytorch Job' },
                ],
            },
        ] }, props)));
};
const TrainingJobsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(TrainingJobDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=training-job-5e7c0363ed586b05092d.js.map