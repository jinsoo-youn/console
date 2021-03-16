(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-policy"],{

/***/ "./public/components/network-policy.jsx":
/*!**********************************************!*\
  !*** ./public/components/network-policy.jsx ***!
  \**********************************************/
/*! exports provided: NetworkPoliciesPage, NetworkPoliciesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPoliciesPage", function() { return NetworkPoliciesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPoliciesDetailsPage", function() { return NetworkPoliciesDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _utils_documentation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/documentation */ "./public/components/utils/documentation.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");












const { common } = _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_9__["NetworkPolicyModel"]), ...common];
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass];
const NetworkPolicyTableHeader = t => {
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
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.podSelector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
NetworkPolicyTableHeader.displayName = 'NetworkPolicyTableHeader';
const kind = 'NetworkPolicy';
const NetworkPolicyTableRow = ({ obj: np, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: np.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: kind, name: np.metadata.name, namespace: np.metadata.namespace, title: np.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: 'Namespace', name: np.metadata.namespace, title: np.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[2], 'co-break-word') }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](np.spec.podSelector) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/search/ns/${np.metadata.namespace}?kind=Pod` }, `All pods within ${np.metadata.namespace}`) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Selector"], { selector: np.spec.podSelector, namespace: np.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: menuActions, kind: kind, resource: np }))));
};
const NetworkPoliciesList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Network Policies", Header: NetworkPolicyTableHeader.bind(null, t), Row: NetworkPolicyTableRow, virtualize: true }));
};
const NetworkPoliciesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["ListPage"], Object.assign({}, props, { title: t('COMMON:MSG_LNB_MENU_49'), ListComponent: NetworkPoliciesList, kind: kind, canCreate: true }));
};
const IngressHeader = () => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-table-grid__head" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4" }, "Target Pods"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-5" }, "From"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" }, "To Ports")));
};
const IngressRow = ({ ingress, namespace, podSelector }) => {
    const podSelectors = [];
    const nsSelectors = [];
    let i = 0;
    const style = { margin: '5px 0' };
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](ingress.from, ({ namespaceSelector, podSelector: ps }) => {
        if (namespaceSelector) {
            nsSelectors.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: i++, style: style },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Selector"], { selector: namespaceSelector, kind: "Namespace" })));
        }
        else {
            podSelectors.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: i++, style: style },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Selector"], { selector: ps, namespace: namespace })));
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-resource-list__item" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-muted" }, "Pod Selector:")),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: style },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Selector"], { selector: podSelector, namespace: namespace }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-5" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                !podSelectors.length ? null : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-muted" }, "Pod Selector:"),
                    podSelectors)),
                !nsSelectors.length ? null : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { paddingTop: podSelectors.length ? 10 : 0 } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-muted" }, "NS Selector:"),
                    nsSelectors)))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](ingress.ports, (port, k) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: k },
            port.protocol,
            "/",
            port.port))))));
};
const Details_ = ({ obj: np, flags }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_49') }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: np, podSelector: 'spec.podSelector', showPodSelector: true })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_INGRESSRULES_1') }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-m-pane__explanation" },
                "Pods accept all traffic by default. They can be isolated via Network Policies which specify a whitelist of ingress rules. When a Pod is selected by a Network Policy, it will reject all traffic not explicitly allowed via a Network Policy. See more details in ",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], { href: Object(_utils_documentation__WEBPACK_IMPORTED_MODULE_10__["getNetworkPolicyDocLink"])(flags[_console_shared__WEBPACK_IMPORTED_MODULE_6__["FLAGS"].OPENSHIFT]), text: "Network Policies Documentation" }),
                "."),
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](np, 'spec.ingress[0]', [])) ? (`All traffic is allowed to Pods in ${np.metadata.namespace}.`) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IngressHeader, null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid__body" }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](np.spec.ingress, (ingress, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](IngressRow, { key: i, ingress: ingress, podSelector: np.spec.podSelector, namespace: np.metadata.namespace })))))))));
};
const Details = Object(_reducers_features__WEBPACK_IMPORTED_MODULE_5__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_6__["FLAGS"].OPENSHIFT)(Details_);
const NetworkPoliciesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(Details), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=network-policy-1262b23a379706922203.js.map