(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service"],{

/***/ "./public/components/hypercloud/federated-service.tsx":
/*!************************************************************!*\
  !*** ./public/components/hypercloud/federated-service.tsx ***!
  \************************************************************/
/*! exports provided: menuActions, FederatedServices, FederatedServicesPage, FederatedServicesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedServices", function() { return FederatedServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedServicesPage", function() { return FederatedServicesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FederatedServicesDetailsPage", function() { return FederatedServicesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events */ "./public/components/events.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");







// export const menuActions: KebabAction[] = [AddHealthChecks, Kebab.factory.AddStorage, ...Kebab.getExtensionsActionsForKind(FederatedServiceModel), EditHealthChecks, ...Kebab.factory.common];
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["FederatedServiceModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_6__["FederatedServiceModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass];
const FederatedServiceTableHeader = () => {
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
            title: 'Selector',
            sortField: 'service.spec.template.spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
FederatedServiceTableHeader.displayName = 'FederatedServiceTableHeader';
// const ServiceAddress = ({ s }) => {
//   const ServiceIPsRow = (name, desc, ips, note = null) => (
//     <div className="co-ip-row">
//       <div className="row">
//         <div className="col-xs-6">
//           <p className="ip-name">{name}</p>
//           <p className="ip-desc">{desc}</p>
//         </div>
//         <div className="col-xs-6">
//           {note && <span className="text-muted">{note}</span>}
//           {ips}
//         </div>
//       </div>
//     </div>
//   );
//   const ServiceType = type => {
//     switch (type) {
//       case 'NodePort':
//         return ServiceIPsRow('Node Port', 'Accessible outside the cluster', _.map(s.spec?.template?.spec?.ports, 'nodePort'), '(all nodes): ');
//       case 'LoadBalancer':
//         return ServiceIPsRow(
//           'External Load Balancer',
//           'Ingress point(s) of load balancer',
//           '', // federated service의 load balancer의 ip는 어떻게 가져오지?
//         );
//       case 'ExternalName':
//         return ServiceIPsRow('External Service Name', 'Location of the resource that backs the service', [s.spec?.template?.spec?.externalName]);
//       default:
//         return '';
//     }
//   };
//   return (
//     <div>
//       <div className="row co-ip-header">
//         <div className="col-xs-6">Type</div>
//         <div className="col-xs-6">Location</div>
//       </div>
//       <div className="rows">{ServiceType(s.spec?.template?.spec?.type)}</div>
//     </div>
//   );
// };
const ServicePortMapping = ({ ports }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-ip-header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, "Name"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, "Port"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, "Protocol"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" }, "Target Port")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "rows" }, ports.map((portObj, i) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-ip-row", key: i },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3 co-text-service" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, portObj.name || '-'),
                        portObj.nodePort && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-text-node" }, "Node Port")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3 co-text-service" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: "Service" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, portObj.port)),
                        portObj.nodePort && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-text-node" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: "Node" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, portObj.nodePort)))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, portObj.protocol)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-3 co-text-pod" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: "Pod" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, portObj.targetPort))))));
        }))));
};
const FederatedServiceTableRow = ({ obj: service, index, key, style }) => {
    var _a, _b, _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: service.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: service.metadata.name, namespace: service.metadata.namespace, title: service.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: service.metadata.namespace, title: service.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LabelList"], { kind: kind, labels: service.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Selector"], { selector: (_c = (_b = (_a = service.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.selector, namespace: service.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: service }))));
};
const FederatedServiceDetails = ({ obj: service }) => {
    var _a, _b, _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Federated Service Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: service })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Service Routing" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: "Service Port Mapping", obj: service, path: "spec.ports" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "service-ips" }, ((_c = (_b = (_a = service.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.ports) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ServicePortMapping, { ports: service.spec.template.spec.ports }) : '-'))))))));
};
const { details, editYaml, events } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const FederatedServices = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Federated Services", Header: FederatedServiceTableHeader, Row: FederatedServiceTableRow, virtualize: true }));
const FederatedServicesPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ canCreate: true, ListComponent: FederatedServices, kind: kind }, props));
const FederatedServicesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(FederatedServiceDetails)), editYaml(), events(_events__WEBPACK_IMPORTED_MODULE_5__["ResourceEventStream"])] }));


/***/ }),

/***/ "./public/components/service.jsx":
/*!***************************************!*\
  !*** ./public/components/service.jsx ***!
  \***************************************/
/*! exports provided: ServicesList, ServicesPage, ServicesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesList", function() { return ServicesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesDetailsPage", function() { return ServicesDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








const menuActions = [_utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.ModifyPodSelector, ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["ServiceModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common];
const ServiceIP = ({ s }) => {
    const children = lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](s.spec.ports, (portObj, i) => {
        const clusterIP = s.spec.clusterIP === 'None' ? 'None' : `${s.spec.clusterIP}:${portObj.port}`;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: i, className: "co-truncate co-select-to-copy" }, clusterIP));
    });
    return children;
};
const kind = 'Service';
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-3', 'col-md-3', 'col-sm-4', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'col-md-3', 'hidden-sm', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_2__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const ServiceTableHeader = t => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_27'),
            sortField: 'spec.clusterIP',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
ServiceTableHeader.displayName = 'ServiceTableHeader';
const ServiceTableRow = ({ obj: s, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: s.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: s.metadata.name, namespace: s.metadata.namespace, title: s.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: s.metadata.namespace, title: s.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["LabelList"], { kind: kind, labels: s.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Selector"], { selector: s.spec.selector, namespace: s.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ServiceIP, { s: s })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: s }))));
};
const ServiceAddress = ({ s }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    const ServiceIPsRow = (name, desc, ips, note = null) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-ip-row" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ip-name" }, name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "ip-desc" }, desc)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6" },
                note && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-muted" }, note),
                ips.join(', ')))));
    const ServiceType = type => {
        switch (type) {
            case 'NodePort':
                return ServiceIPsRow(t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_10'), t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_11'), lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](s.spec.ports, 'nodePort'), '(all nodes): ');
            case 'LoadBalancer':
                return ServiceIPsRow(t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_12'), t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_13'), lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](s.status.loadBalancer.ingress, i => i.hostname || i.ip || '-'));
            case 'ExternalName':
                return ServiceIPsRow(t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_14'), t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_15'), [s.spec.externalName]);
            default:
                return ServiceIPsRow(t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_16'), t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_17'), [s.spec.clusterIP]);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-ip-header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6" }, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_3')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-6" }, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_4'))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "rows" },
            ServiceType(s.spec.type),
            s.spec.externalIPs && ServiceIPsRow('External IP', 'IP Address(es) accepting traffic for service', s.spec.externalIPs))));
};
const ServicePortMapping = ({ ports }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-ip-header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" }, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_6')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" }, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_7')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" }, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_8')),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" }, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_9'))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "rows" }, ports.map((portObj, i) => {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-ip-row", key: i },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3 co-text-service" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, portObj.name || '-'),
                        portObj.nodePort && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-text-node" }, "Node Port")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3 co-text-service" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceIcon"], { kind: "Service" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, portObj.port)),
                        portObj.nodePort && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-text-node" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceIcon"], { kind: "Node" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, portObj.nodePort)))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, portObj.protocol)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3 co-text-pod" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceIcon"], { kind: "Pod" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, portObj.targetPort))))));
        }))));
};
const Details = ({ obj: s }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_47') }) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: s, showPodSelector: true },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_40'), obj: s, path: "spec.sessionAffinity" }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-sm-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_1') }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_2')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { className: "service-ips" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ServiceAddress, { s: s })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('SINGLE:MSG_SERVICES_SERVICESDETAILS_TABDETAILS_SERVICEROUTING_5'), obj: s, path: "spec.ports" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "service-ips" }, s.spec.ports ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ServicePortMapping, { ports: s.spec.ports }) : '-')))))));
};
const { details, pods, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const ServicesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [details(Details), editYaml(), pods()] }));
const ServicesList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "Services", Header: ServiceTableHeader.bind(null, t), Row: ServiceTableRow, virtualize: true }));
};
const ServicesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_47'), canCreate: true, ListComponent: ServicesList }, props));
};



/***/ })

}]);
//# sourceMappingURL=service-17f3456a9065d8e7908e.js.map