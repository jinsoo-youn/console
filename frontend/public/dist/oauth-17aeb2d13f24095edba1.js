(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oauth"],{

/***/ "./public/components/cluster-settings/oauth.tsx":
/*!******************************************************!*\
  !*** ./public/components/cluster-settings/oauth.tsx ***!
  \******************************************************/
/*! exports provided: addIDPItems, OAuthDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIDPItems", function() { return addIDPItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthDetailsPage", function() { return OAuthDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/datetime */ "./public/components/utils/datetime.ts");







const { common } = _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_2__["OAuthModel"]), ...common];
const oAuthReference = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["OAuthModel"]);
// Convert to ms for formatDuration
const tokenDuration = (seconds) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["isNil"](seconds) ? '-' : Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_6__["formatDuration"])(seconds * 1000);
const IdentityProviders = ({ identityProviders }) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](identityProviders) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["EmptyBox"], { label: "Identity Providers" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-table-container" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Type"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Mapping Method"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](identityProviders, (idp) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: idp.name },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-idp-name": idp.name }, idp.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-idp-type-for": idp.name }, idp.type),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { "data-test-idp-mapping-for": idp.name }, idp.mappingMethod || 'claim'))))))));
};
const addIDPItems = Object.freeze({
    basicauth: 'Basic Authentication',
    github: 'GitHub',
    gitlab: 'GitLab',
    google: 'Google',
    htpasswd: 'HTPasswd',
    keystone: 'Keystone',
    ldap: 'LDAP',
    oidconnect: 'OpenID Connect',
    requestheader: 'Request Header',
});
const OAuthDetails = ({ obj }) => {
    const { identityProviders, tokenConfig } = obj.spec;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "OAuth Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: obj }, tokenConfig && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Access Token Max Age"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, tokenDuration(tokenConfig.accessTokenMaxAgeSeconds)))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: "Identity Providers" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation co-m-pane__explanation--alt" }, "Identity providers determine how users log into the cluster."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { className: "co-m-pane__dropdown", buttonClassName: "pf-c-dropdown__toggle", title: "Add", noSelection: true, items: addIDPItems, onChange: (name) => _utils__WEBPACK_IMPORTED_MODULE_5__["history"].push(`/settings/idp/${name}`) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IdentityProviders, { identityProviders: identityProviders }))));
};
const OAuthDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: oAuthReference, menuActions: menuActions, pages: [_utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].details(OAuthDetails), _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"].editYaml()] })));


/***/ })

}]);
//# sourceMappingURL=oauth-17aeb2d13f24095edba1.js.map