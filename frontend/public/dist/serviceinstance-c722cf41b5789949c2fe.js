(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serviceinstance"],{

/***/ "./public/components/hypercloud/service-instance.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/service-instance.tsx ***!
  \***********************************************************/
/*! exports provided: serviceInstanceMenuActions, ServiceInstancesList, ServiceInstancesPage, ServiceInstancesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceInstanceMenuActions", function() { return serviceInstanceMenuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInstancesList", function() { return ServiceInstancesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInstancesPage", function() { return ServiceInstancesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInstancesDetailsPage", function() { return ServiceInstancesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _sidebars_resource_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sidebars/resource-sidebar */ "./public/components/sidebars/resource-sidebar.jsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const { common } = _utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].factory;
const kind = _models__WEBPACK_IMPORTED_MODULE_5__["ServiceInstanceModel"].kind;
const serviceInstanceMenuActions = [..._utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["ServiceInstanceModel"]), ...common];
const ServiceInstanceDetails = props => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    const { obj: serviceInstance, match } = props;
    const [showSidebar, setShowSidebar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const [sidebarDetails, setSidebarDetails] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
    const [sidebarKind, setSidebarKind] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    const [sidebarTitle, setSidebarTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    // const [planDetails, setPlanDetails] = useState({});
    const getDetails = (kind, e) => __awaiter(void 0, void 0, void 0, function* () {
        const model = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(kind);
        const details = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sGet"])(model, e.target.innerText, kind.indexOf('Cluster') < 0 ? match.params.ns : null);
        setSidebarDetails(details);
        setShowSidebar(true);
        setSidebarKind(kind);
        setSidebarTitle(details.metadata.name);
        console.log(sidebarDetails);
    });
    const SidebarLink = ({ name, kind }) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: "link", isInline: true, onClick: getDetails.bind(null, kind) }, name));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-p-has-sidebar" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(serviceInstance, t) }) }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceSummary"], { resource: serviceInstance, showPodSelector: true, showNodeSelector: true })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: serviceInstance.status.lastConditionState })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_19')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SidebarLink, { name: ((_a = serviceInstance.spec.clusterServiceClassRef) === null || _a === void 0 ? void 0 : _a.name) ? (_b = serviceInstance.spec.clusterServiceClassRef) === null || _b === void 0 ? void 0 : _b.name : (_c = serviceInstance.spec) === null || _c === void 0 ? void 0 : _c.serviceClassExternalName, kind: ((_d = serviceInstance.spec.clusterServiceClassRef) === null || _d === void 0 ? void 0 : _d.name) ? 'ClusterServiceClass' : 'ServiceClass' }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABSERVICEPLANS_1')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SidebarLink, { name: ((_e = serviceInstance.spec.clusterServicePlanRef) === null || _e === void 0 ? void 0 : _e.name) ? (_f = serviceInstance.spec.clusterServicePlanRef) === null || _f === void 0 ? void 0 : _f.name : (_h = (_g = serviceInstance.spec) === null || _g === void 0 ? void 0 : _g.servicePlanRef) === null || _h === void 0 ? void 0 : _h.name, kind: ((_j = serviceInstance.spec.clusterServiceClassRef) === null || _j === void 0 ? void 0 : _j.name) ? 'ClusterServicePlan' : 'ServicePlan' })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_sidebars_resource_sidebar__WEBPACK_IMPORTED_MODULE_10__["ResourceSidebar"], { toggleSidebar: () => {
                    setShowSidebar(!showSidebar);
                    window.dispatchEvent(new Event('sidebar_toggle'));
                }, resource: sidebarDetails, kindObj: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(sidebarKind), title: sidebarTitle, isFloat: true, showName: false, showID: true, showPodSelector: true, showNodeSelector: true, showOwner: false, showSidebar: showSidebar, samples: [], isCreateMode: true, showDetails: true }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"];
const ServiceInstancesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: serviceInstanceMenuActions, pages: [details(ServiceInstanceDetails), editYaml()] }));
ServiceInstancesDetailsPage.displayName = 'ServiceInstancesDetailsPage';
const tableColumnClasses = [
    '',
    '',
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].columnClass,
];
const ServiceInstanceTableRow = ({ obj, index, key, style }) => {
    var _a, _b, _c, _d;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: kind, name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1]) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: obj.status.lastConditionState })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[3] }, obj.spec.clusterServicePlanExternalName ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: "ClusterServicePlan", title: (_a = obj.spec.clusterServicePlanRef) === null || _a === void 0 ? void 0 : _a.name, name: (_b = obj.spec.clusterServicePlanRef) === null || _b === void 0 ? void 0 : _b.name, displayName: obj.spec.clusterServicePlanExternalName }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: "ServicePlan", title: (_c = obj.spec.servicePlanRef) === null || _c === void 0 ? void 0 : _c.name, name: (_d = obj.spec.servicePlanRef) === null || _d === void 0 ? void 0 : _d.name, displayName: obj.spec.servicePlanExternalName })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceKebab"], { actions: serviceInstanceMenuActions, kind: kind, resource: obj }))));
};
const ServiceInstanceTableHeader = (t) => {
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
            sortField: 'status.lastConditionState',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_DETAILS_TABSERVICEPLANS_1'),
            sortField: 'spec.servicePlanName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
ServiceInstanceTableHeader.displayName = 'ServiceInstanceTableHeader';
const ServiceInstancesList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["Table"], Object.assign({}, props, { "aria-label": "Service Instance", Header: ServiceInstanceTableHeader.bind(null, t), Row: ServiceInstanceTableRow }));
};
ServiceInstancesList.displayName = 'ServiceInstancesList';
const serviceInstanceStatusReducer = (serviceInstance) => {
    return serviceInstance.status.lastConditionState;
};
const ServiceInstancesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_8__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_17'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_17') }), canCreate: true, kind: kind, ListComponent: ServiceInstancesList, rowFilters: [
            {
                filterGroupName: 'Status',
                type: 'service-instance-status',
                reducer: serviceInstanceStatusReducer,
                items: [
                    { id: 'Ready', title: t('COMMON:MSG_MAIN_FILTER_2') },
                    { id: 'Error', title: t('COMMON:MSG_MAIN_FILTER_3') },
                ],
            },
        ] }, props)));
};
ServiceInstancesPage.displayName = 'ServiceInstancesPage';



/***/ })

}]);
//# sourceMappingURL=serviceinstance-c722cf41b5789949c2fe.js.map