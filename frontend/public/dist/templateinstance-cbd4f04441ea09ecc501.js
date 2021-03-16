(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["templateinstance"],{

/***/ "./public/components/hypercloud/template-instance.tsx":
/*!************************************************************!*\
  !*** ./public/components/hypercloud/template-instance.tsx ***!
  \************************************************************/
/*! exports provided: templateInstanceMenuActions, TemplateInstancesList, TemplateInstancesPage, TemplateInstancesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateInstanceMenuActions", function() { return templateInstanceMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstancesList", function() { return TemplateInstancesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstancesPage", function() { return TemplateInstancesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstancesDetailsPage", function() { return TemplateInstancesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");









const { common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const kind = _models__WEBPACK_IMPORTED_MODULE_4__["TemplateInstanceModel"].kind;
const templateInstanceMenuActions = [..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["TemplateInstanceModel"]), ...common];
const templateInstancePhase = instance => {
    let phase = '';
    if (instance.status) {
        instance.status.conditions.forEach(cur => {
            if (cur.type === '') {
                phase = cur.status;
            }
        });
        return phase;
    }
};
const templateObjectsSummary = templateinstance => {
    var _a, _b, _c, _d;
    // NOTE: template instance가 cluster/namespace 스코프에 따라 objects 정보의 위치가 달라서 분기처리함
    const objects = !!((_b = (_a = templateinstance.spec) === null || _a === void 0 ? void 0 : _a.clustertemplate) === null || _b === void 0 ? void 0 : _b.objects) ? templateinstance.spec.clustertemplate.objects : !!((_d = (_c = templateinstance.spec) === null || _c === void 0 ? void 0 : _c.template) === null || _d === void 0 ? void 0 : _d.objects) ? templateinstance.spec.template.objects : [];
    let objMap = new Map();
    for (const i in objects) {
        const kind = !!objects[i].kind ? objects[i].kind : 'unknown kind';
        if (!!objMap.get(kind)) {
            const num = objMap.get(kind);
            objMap.set(kind, num + 1);
        }
        else {
            objMap.set(kind, 1);
        }
    }
    const objectList = [];
    objMap.forEach((value, key) => {
        objectList.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            key,
            " ",
            value));
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, objectList);
};
const TemplateInstanceDetails = ({ obj: templateInstance }) => {
    var _a, _b, _c;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    let phase = templateInstancePhase(templateInstance);
    const objectSummary = templateObjectsSummary(templateInstance);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(templateInstance, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: templateInstance, showPodSelector: true, showNodeSelector: true, showOwner: false })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13'), obj: templateInstance, path: "status.phase" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: phase })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_104')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, objectSummary),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_LNB_MENU_17'), obj: templateInstance, path: "metadata.labels.serviceInstanceRef" }, !!((_a = templateInstance.metadata.labels) === null || _a === void 0 ? void 0 : _a.serviceInstanceRef) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "ServiceInstance", name: (_b = templateInstance.metadata.labels) === null || _b === void 0 ? void 0 : _b.serviceInstanceRef, title: (_c = templateInstance.metadata.labels) === null || _c === void 0 ? void 0 : _c.serviceInstanceRef }) : 'None')))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const TemplateInstancesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: templateInstanceMenuActions, pages: [details(TemplateInstanceDetails), editYaml()] }));
TemplateInstancesDetailsPage.displayName = 'TemplateInstancesDetailsPage';
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass,
];
const TemplateInstanceTableRow = ({ obj, index, key, style }) => {
    var _a, _b, _c;
    let phase = templateInstancePhase(obj);
    const objectSummary = templateObjectsSummary(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1]) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: phase })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] }, objectSummary),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] }, !!((_a = obj.metadata.labels) === null || _a === void 0 ? void 0 : _a.serviceInstanceRef) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "ServiceInstance", name: (_b = obj.metadata.labels) === null || _b === void 0 ? void 0 : _b.serviceInstanceRef, namespace: obj.metadata.namespace, title: (_c = obj.metadata.labels) === null || _c === void 0 ? void 0 : _c.serviceInstanceRef }) : 'None'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: templateInstanceMenuActions, kind: kind, resource: obj }))));
};
const TemplateInstanceTableHeader = (t) => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'templateInstancePhase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_104'),
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_LNB_MENU_17'),
            sortField: 'metadata.labels.serviceInstanceRef',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
TemplateInstanceTableHeader.displayName = 'TemplateInstanceTableHeader';
const TemplateInstancesList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Template Instance", Header: TemplateInstanceTableHeader.bind(null, t), Row: TemplateInstanceTableRow }));
};
TemplateInstancesList.displayName = 'TemplateInstancesList';
const TemplateInstancesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_21'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_21') }), canCreate: true, kind: kind, ListComponent: TemplateInstancesList, rowFilters: [
            {
                filterGroupName: 'Status',
                type: 'template-instance-status',
                reducer: templateInstancePhase,
                items: [
                    { id: 'Success', title: t('COMMON:MSG_COMMON_FILTER_5') },
                    { id: 'Failed', title: t('COMMON:MSG_COMMON_FILTER_6') },
                ],
            },
        ] }, props)));
};
TemplateInstancesPage.displayName = 'TemplateInstancesPage';



/***/ })

}]);
//# sourceMappingURL=templateinstance-cbd4f04441ea09ecc501.js.map