(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-account"],{

/***/ "./public/components/service-account.jsx":
/*!***********************************************!*\
  !*** ./public/components/service-account.jsx ***!
  \***********************************************/
/*! exports provided: ServiceAccountsList, ServiceAccountsPage, ServiceAccountsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAccountsList", function() { return ServiceAccountsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAccountsPage", function() { return ServiceAccountsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAccountsDetailsPage", function() { return ServiceAccountsDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./secret */ "./public/components/secret.jsx");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");














const KubeConfigify = (t, kind, sa) => {
    return {
        label: t('COMMON:MSG_MAIN_ACTIONBUTTON_36'),
        weight: 200,
        callback: () => {
            const name = sa.metadata.name;
            const namespace = sa.metadata.namespace;
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_8__["k8sList"])(_models__WEBPACK_IMPORTED_MODULE_9__["SecretModel"], { ns: namespace })
                .then(secrets => {
                const server = window.SERVER_FLAGS.kubeAPIServerURL;
                const url = new URL(server);
                const clusterName = url.host.replace(/\./g, '-');
                // Find the secret that is the service account token.
                const saSecretsByName = lodash_es__WEBPACK_IMPORTED_MODULE_0__["keyBy"](sa.secrets, 'name');
                const secret = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](secrets, s => saSecretsByName[s.metadata.name] && s.type === 'kubernetes.io/service-account-token');
                if (!secret) {
                    Object(_modals__WEBPACK_IMPORTED_MODULE_12__["errorModal"])({ error: 'Unable to get service account token.' });
                    return;
                }
                const token = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].decode(secret.data.token);
                const cert = secret.data['ca.crt'];
                const config = {
                    apiVersion: 'v1',
                    clusters: [
                        {
                            cluster: {
                                'certificate-authority-data': cert,
                                server,
                            },
                            name: clusterName,
                        },
                    ],
                    contexts: [
                        {
                            context: {
                                cluster: clusterName,
                                namespace,
                                user: name,
                            },
                            name,
                        },
                    ],
                    'current-context': name,
                    kind: 'Config',
                    preferences: {},
                    users: [
                        {
                            name,
                            user: {
                                token,
                            },
                        },
                    ],
                };
                const dump = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeDump"])(config);
                const blob = new Blob([dump], { type: 'text/yaml;charset=utf-8' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(blob, `kube-config-sa-${name}-${clusterName}`);
            })
                .catch(err => {
                const error = err.message;
                Object(_modals__WEBPACK_IMPORTED_MODULE_12__["errorModal"])({ error });
            });
        },
        accessReview: {
            group: _models__WEBPACK_IMPORTED_MODULE_9__["SecretModel"].apiGroup,
            resource: _models__WEBPACK_IMPORTED_MODULE_9__["SecretModel"].plural,
            namespace: sa.metadata.namespace,
            verb: 'list',
        },
    };
};
const { common } = _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory;
const kind = 'ServiceAccount';
const tableColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'), classnames__WEBPACK_IMPORTED_MODULE_4__('col-md-2', 'hidden-sm', 'hidden-xs'), classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-2', 'hidden-xs'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const ServiceAccountTableHeader = t => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_34'),
            sortField: 'secrets',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ServiceAccountTableHeader.displayName = 'ServiceAccountTableHeader';
const ServiceAccountTableRow = (t, { obj: serviceaccount, index, key, style }) => {
    const { metadata: { name, namespace, uid, creationTimestamp }, secrets, } = serviceaccount;
    const menuActions = [KubeConfigify.bind(null, t), ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_9__["ServiceAccountModel"]), ...common];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: serviceaccount.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: name, namespace: namespace, title: uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: namespace, title: namespace }),
            " "),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] }, secrets ? secrets.length : 0),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Timestamp"], { timestamp: creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: kind, resource: serviceaccount }))));
};
const Details = ({ obj: serviceaccount }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    const { metadata: { namespace }, secrets, } = serviceaccount;
    const filters = { selector: { field: 'metadata.name', values: new Set(lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](secrets, 'name')) } };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: t('COMMON:MSG_LNB_MENU_74') }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: serviceaccount })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body co-m-pane__body--section-heading" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_LNB_MENU_26') })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_secret__WEBPACK_IMPORTED_MODULE_10__["SecretsPage"], { kind: "Secret", canCreate: false, namespace: namespace, filters: filters, autoFocus: false, showTitle: false })));
};
const ServiceAccountsDetailsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    const menuActions = [KubeConfigify.bind(null, t), ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_9__["ServiceAccountModel"]), ...common];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].details(Details), _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"].editYaml()] }));
};
const ServiceAccountsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Service Accounts", Header: ServiceAccountTableHeader.bind(null, t), Row: ServiceAccountTableRow.bind(null, t), virtualize: true }));
};
const ServiceAccountsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_74'), ListComponent: ServiceAccountsList }, props, { canCreate: true }));
};



/***/ })

}]);
//# sourceMappingURL=service-account-306bd7e8bbaf494166dc.js.map