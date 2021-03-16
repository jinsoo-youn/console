(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["google-idp-form"],{

/***/ "./public/components/cluster-settings/google-idp-form.tsx":
/*!****************************************************************!*\
  !*** ./public/components/cluster-settings/google-idp-form.tsx ***!
  \****************************************************************/
/*! exports provided: AddGooglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGooglePage", function() { return AddGooglePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./public/components/cluster-settings/index.ts");
/* harmony import */ var _idp_name_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./idp-name-input */ "./public/components/cluster-settings/idp-name-input.tsx");








class AddGooglePage extends _utils__WEBPACK_IMPORTED_MODULE_5__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            name: 'google',
            clientID: '',
            clientSecret: '',
            hostedDomain: '',
            inProgress: false,
            errorMessage: '',
        };
        this.submit = (e) => {
            e.preventDefault();
            // Clear any previous errors.
            this.setState({ errorMessage: '' });
            this.getOAuthResource().then((oauth) => {
                this.addGoogleIDP(oauth, ___WEBPACK_IMPORTED_MODULE_6__["mockNames"].secret, true)
                    .then(() => {
                    return this.createClientSecret()
                        .then((secret) => this.addGoogleIDP(oauth, secret.metadata.name))
                        .then(___WEBPACK_IMPORTED_MODULE_6__["redirectToOAuthPage"]);
                })
                    .catch((err) => {
                    this.setState({ errorMessage: err });
                });
            });
        };
        this.nameChanged = (event) => {
            this.setState({ name: event.currentTarget.value });
        };
        this.clientIDChanged = (event) => {
            this.setState({ clientID: event.currentTarget.value });
        };
        this.clientSecretChanged = (event) => {
            this.setState({ clientSecret: event.currentTarget.value });
        };
        this.hostedDomainChanged = (event) => {
            this.setState({ hostedDomain: event.currentTarget.value });
        };
    }
    getOAuthResource() {
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_6__["getOAuthResource"])());
    }
    createClientSecret() {
        const { clientSecret } = this.state;
        const secret = {
            apiVersion: 'v1',
            kind: 'Secret',
            metadata: {
                generateName: 'google-client-secret-',
                namespace: 'openshift-config',
            },
            stringData: {
                clientSecret,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"], secret));
    }
    addGoogleIDP(oauth, clientSecretName, dryRun) {
        const { name, clientID, hostedDomain } = this.state;
        const idp = {
            name,
            type: 'Google',
            mappingMethod: 'claim',
            google: {
                hostedDomain,
                clientID,
                clientSecret: {
                    name: clientSecretName,
                },
            },
        };
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_6__["addIDP"])(oauth, idp, dryRun));
    }
    render() {
        const { name, clientID, clientSecret, hostedDomain } = this.state;
        const title = 'Add Identity Provider: Google';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, name: "form", className: "co-m-pane__body-group co-m-pane__form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "You can use Google integration for users authenticating with Google credentials."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_name_input__WEBPACK_IMPORTED_MODULE_7__["IDPNameInput"], { value: name, onChange: this.nameChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "client-id" }, "Client ID"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.clientIDChanged, value: clientID, id: "client-id", required: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "client-secret" }, "Client Secret"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "password", onChange: this.clientSecretChanged, value: clientSecret, id: "client-secret", required: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "hosted-domain" }, "Hosted Domain"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.hostedDomainChanged, value: hostedDomain, id: "hosted-domain", "aria-describedby": "idp-hosted-domain-help", required: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block", id: "idp-hosted-domain-help" }, "Restrict users to a Google App domain.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "submit", variant: "primary", "data-test-id": "add-idp" }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack }, "Cancel"))))));
    }
}


/***/ }),

/***/ "./public/components/cluster-settings/idp-name-input.tsx":
/*!***************************************************************!*\
  !*** ./public/components/cluster-settings/idp-name-input.tsx ***!
  \***************************************************************/
/*! exports provided: IDPNameInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDPNameInput", function() { return IDPNameInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IDPNameInput = ({ value, onChange }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "idp-name" }, "Name"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: onChange, value: value, "aria-describedby": "idp-name-help", id: "idp-name", required: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block", id: "idp-name-help" }, "Unique name of the new identity provider. This cannot be changed later.")));


/***/ }),

/***/ "./public/components/cluster-settings/index.ts":
/*!*****************************************************!*\
  !*** ./public/components/cluster-settings/index.ts ***!
  \*****************************************************/
/*! exports provided: getOAuthResource, addIDP, redirectToOAuthPage, mockNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOAuthResource", function() { return getOAuthResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIDP", function() { return addIDP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectToOAuthPage", function() { return redirectToOAuthPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockNames", function() { return mockNames; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_dev_console_src_utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/dev-console/src/utils/shared-submit-utils */ "./packages/dev-console/src/utils/shared-submit-utils.ts");





// The name of the cluster-scoped OAuth configuration resource.
const OAUTH_RESOURCE_NAME = 'cluster';
const getOAuthResource = () => Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_1__["OAuthModel"], OAUTH_RESOURCE_NAME);
const addIDP = (oauth, idp, dryRun) => {
    const patch = lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](oauth.spec.identityProviders)
        ? { op: 'add', path: '/spec/identityProviders', value: [idp] }
        : { op: 'add', path: '/spec/identityProviders/-', value: idp };
    return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_1__["OAuthModel"], oauth, [patch], dryRun ? _console_dev_console_src_utils_shared_submit_utils__WEBPACK_IMPORTED_MODULE_4__["dryRunOpt"] : {});
};
const redirectToOAuthPage = () => {
    const path = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_1__["OAuthModel"], OAUTH_RESOURCE_NAME);
    _utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(path);
};
const mockNames = {
    secret: 'secret-name',
    ca: 'ca-name',
};


/***/ })

}]);
//# sourceMappingURL=google-idp-form-d8dd3e3f185aa206c12c.js.map