(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experiment"],{

/***/ "./public/components/hypercloud/experiment.tsx":
/*!*****************************************************!*\
  !*** ./public/components/hypercloud/experiment.tsx ***!
  \*****************************************************/
/*! exports provided: menuActions, ExperimentDetailsList, Experiments, ExperimentsPage, ExperimentsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentDetailsList", function() { return ExperimentDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiments", function() { return Experiments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsPage", function() { return ExperimentsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsDetailsPage", function() { return ExperimentsDetailsPage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["ExperimentModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_7__["ExperimentModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const ExperimentTableHeader = (t) => {
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
            title: '알고리즘 이름',
            sortField: 'pec.algorithm.algorithmName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '트라이얼 개수',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '최적화 상태',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
ExperimentTableHeader.displayName = 'ExperimentTableHeader';
const ExperimentTableRow = ({ obj: experiment, index, key, style }) => {
    var _a, _b;
    let experimentectiveMetricName = (_a = experiment.spec.experimentective) === null || _a === void 0 ? void 0 : _a.experimentectiveMetricName;
    let currentOptimal = experimentectiveMetricName && experiment.status.currentOptimalTrial.observation.metrics ? experiment.status.currentOptimalTrial.observation.metrics.find(metric => metric.name === experimentectiveMetricName) : { value: 0 };
    let optimal = currentOptimal.value + '/' + ((_b = experiment.spec.experimentective) === null || _b === void 0 ? void 0 : _b.goal);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: experiment.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: experiment.metadata.name, namespace: experiment.metadata.namespace, title: experiment.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: "Namespace", name: experiment.metadata.namespace, title: experiment.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, experiment.spec.algorithm.algorithmName),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, experiment.status.trials + '/' + experiment.spec.maxTrialCount),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] }, optimal),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] }, experiment.status.conditions.length ? experiment.status.conditions[experiment.status.conditions.length - 1].type : ''),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: experiment }))));
};
const ExperimentDetailsList = ({ experiment }) => {
    var _a;
    let objectiveMetricName = experiment.spec.objective.objectiveMetricName;
    const metrics = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](experiment, 'status.currentOptimalTrial.observation.metrics');
    let currentOptimal = objectiveMetricName && Array.isArray(metrics) ? metrics.find(metric => metric.name === objectiveMetricName) : { value: 0 };
    let optimal = currentOptimal.value + '/' + ((_a = experiment.spec.objective) === null || _a === void 0 ? void 0 : _a.goal);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_45'), obj: experiment, path: "status.conditions" }, experiment.status.conditions.length ? experiment.status.conditions[experiment.status.conditions.length - 1].type : ''),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('알고리즘 이름'), obj: experiment, path: "spec.algorithm.algorithmName" }, experiment.spec.algorithm.algorithmName),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('트라이얼 개수'), obj: experiment, path: "status.currentNumberScheduled" }, experiment.status.trials + '/' + experiment.spec.maxTrialCount),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('최적화 상태'), obj: experiment, path: "status.desiredNumberScheduled" }, optimal)));
};
const ExperimentDetails = ({ obj: experiment }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(experiment, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: experiment })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ExperimentDetailsList, { experiment: experiment }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const Experiments = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Experiments", Header: ExperimentTableHeader.bind(null, t), Row: ExperimentTableRow, virtualize: true }));
};
const ExperimentsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ canCreate: true, ListComponent: Experiments, kind: kind }, props));
const ExperimentsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(ExperimentDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=experiment-1b2933b86b366d73f9b3.js.map