(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hpa"],{

/***/ "./public/components/hpa.tsx":
/*!***********************************!*\
  !*** ./public/components/hpa.tsx ***!
  \***********************************/
/*! exports provided: HorizontalPodAutoscalersDetails, HorizontalPodAutoscalersDetailsPage, HorizontalPodAutoscalersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalPodAutoscalersDetails", function() { return HorizontalPodAutoscalersDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalPodAutoscalersDetailsPage", function() { return HorizontalPodAutoscalersDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalPodAutoscalersPage", function() { return HorizontalPodAutoscalersPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");











const HorizontalPodAutoscalersReference = 'HorizontalPodAutoscaler';
const { common } = _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["HorizontalPodAutoscalerModel"]), ...common];
const MetricsRow = ({ type, current, target }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" }, type),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, current || '-'),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, target || '-')));
const externalRow = (metric, current, key) => {
    const { external } = metric;
    const type = external.metricName;
    // TODO: show metric selector for external metrics?
    const currentValue = external.targetAverageValue ? lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](current, 'object.currentAverageValue') : lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](current, 'object.currentValue');
    const targetValue = external.targetAverageValue ? external.targetAverageValue : external.targetValue;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetricsRow, { key: key, type: type, current: currentValue, target: targetValue });
};
const objectRow = (metric, current, ns, key) => {
    const { object } = metric;
    const type = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        object.metricName,
        " on",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: object.target.kind, name: object.target.name, namespace: ns, title: object.target.name })));
    const currentValue = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](current, 'object.currentValue');
    const targetValue = object.targetValue;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetricsRow, { key: key, type: type, current: currentValue, target: targetValue });
};
const podRow = (metric, current, key) => {
    const { pods } = metric;
    const type = `${pods.metricName} on pods`;
    const currentValue = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](current, 'pods.currentAverageValue');
    const targetValue = pods.targetAverageValue;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetricsRow, { key: key, type: type, current: currentValue, target: targetValue });
};
const getResourceUtilization = currentMetric => {
    const currentUtilization = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](currentMetric, 'resource.currentAverageUtilization');
    // Use _.isFinite so that 0 evaluates to true, but null / undefined / NaN don't
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isFinite"](currentUtilization)) {
        return null;
    }
    const currentAverageValue = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](currentMetric, 'resource.currentAverageValue');
    // Only show currentAverageValue in parens if set and non-zero to avoid things like "0% (0)"
    return currentAverageValue && currentAverageValue !== '0' ? `${currentUtilization}% (${currentAverageValue})` : `${currentUtilization}%`;
};
const resourceRow = (metric, current, key) => {
    const targetUtilization = metric.resource.targetAverageUtilization;
    const resourceLabel = `resource ${metric.resource.name}`;
    const type = targetUtilization ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        resourceLabel,
        "\u00A0",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "small text-muted" }, "(as a percentage of request)"))) : (resourceLabel);
    const currentValue = targetUtilization ? getResourceUtilization(current) : lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](current, 'resource.currentAverageValue');
    const targetValue = targetUtilization ? `${targetUtilization}%` : metric.resource.targetAverageValue;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetricsRow, { key: key, type: type, current: currentValue, target: targetValue });
};
const MetricsTable = ({ obj: hpa }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_METRICS_TABLEHEADER_1') }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" }, t('COMMON:MSG_DETAILS_TABDETAILS_METRICS_TABLEHEADER_2')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, t('COMMON:MSG_DETAILS_TABDETAILS_METRICS_TABLEHEADER_4')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, t('COMMON:MSG_DETAILS_TABDETAILS_METRICS_TABLEHEADER_5'))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, hpa.spec.metrics.map((metric, i) => {
                // https://github.com/kubernetes/api/blob/master/autoscaling/v2beta1/types.go
                const current = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](hpa, ['status', 'currentMetrics', i]);
                switch (metric.type) {
                    case 'External':
                        return externalRow(metric, current, i);
                    case 'Object':
                        return objectRow(metric, current, hpa.metadata.namespace, i);
                    case 'Pods':
                        return podRow(metric, current, i);
                    case 'Resource':
                        return resourceRow(metric, current, i);
                    default:
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: i, className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-12" },
                                metric.type,
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "small text-muted" }, "(unrecognized type)"))));
                }
            })))));
};
const HorizontalPodAutoscalersDetails = ({ obj: hpa }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_10__["ResourceLabel"])(hpa, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: hpa })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_54'), obj: hpa, path: "spec.scaleTargetRef" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: hpa.spec.scaleTargetRef.kind, name: hpa.spec.scaleTargetRef.name, namespace: hpa.metadata.namespace, title: hpa.spec.scaleTargetRef.name })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_55'), obj: hpa, path: "spec.minReplicas" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_56'), obj: hpa, path: "spec.maxReplicas" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_57'), obj: hpa, path: "status.lastScaleTime" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Timestamp"], { timestamp: hpa.status.lastScaleTime })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_58'), obj: hpa, path: "status.currentReplicas" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_59'), obj: hpa, path: "status.desiredReplicas" }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetricsTable, { obj: hpa })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONDITIONS_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_6__["Conditions"], { conditions: hpa.status.conditions }))));
};
const pages = [_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(HorizontalPodAutoscalersDetails), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml(), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_9__["ResourceEventStream"])];
const HorizontalPodAutoscalersDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { kind: HorizontalPodAutoscalersReference, menuActions: menuActions, pages: pages }));
HorizontalPodAutoscalersDetailsPage.displayName = 'HorizontalPodAutoscalersDetailsPage';
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'col-sm-4', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'hidden-sm', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass];
const kind = 'HorizontalPodAutoscaler';
const HorizontalPodAutoscalersTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_23'),
            sortField: 'spec.scaleTargetRef.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_24'),
            sortField: 'spec.minReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_25'),
            sortField: 'spec.maxReplicas',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
HorizontalPodAutoscalersTableHeader.displayName = 'HorizontalPodAutoscalersTableHeader';
const HorizontalPodAutoscalersTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: HorizontalPodAutoscalersReference, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LabelList"], { kind: kind, labels: obj.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[3], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: obj.spec.scaleTargetRef.kind, name: obj.spec.scaleTargetRef.name, namespace: obj.metadata.namespace, title: obj.spec.scaleTargetRef.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[4] }, obj.spec.minReplicas),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[5] }, obj.spec.maxReplicas),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: menuActions, kind: HorizontalPodAutoscalersReference, resource: obj }))));
};
const HorizontalPodAutoscalersList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Horizontal Pod Auto Scalers", Header: HorizontalPodAutoscalersTableHeader.bind(null, t), Row: HorizontalPodAutoscalersTableRow, virtualize: true }));
};
HorizontalPodAutoscalersList.displayName = 'HorizontalPodAutoscalersList';
const HorizontalPodAutoscalersPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["ListPage"], Object.assign({}, props, { title: t('COMMON:MSG_LNB_MENU_32'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_32') }), kind: HorizontalPodAutoscalersReference, ListComponent: HorizontalPodAutoscalersList, canCreate: true }));
};
HorizontalPodAutoscalersPage.displayName = 'HorizontalPodAutoscalersListPage';


/***/ })

}]);
//# sourceMappingURL=hpa-d8ecf341cebef34a9d04.js.map