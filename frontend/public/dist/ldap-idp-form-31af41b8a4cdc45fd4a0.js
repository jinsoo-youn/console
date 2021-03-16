(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ldap-idp-form"],{

/***/ "./public/components/cluster-settings/idp-cafile-input.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/cluster-settings/idp-cafile-input.tsx ***!
  \*****************************************************************/
/*! exports provided: IDPCAFileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDPCAFileInput", function() { return IDPCAFileInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");


const DroppableFileInput = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../utils/file-input */ "./public/components/utils/file-input.tsx")).then((c) => c.DroppableFileInput) }, props)));
const IDPCAFileInput = ({ value, onChange, isRequired = false, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DroppableFileInput, { onChange: onChange, inputFileData: value, id: "idp-file-input", label: "CA File", isRequired: isRequired, hideContents: true })));


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


/***/ }),

/***/ "./public/components/cluster-settings/ldap-idp-form.tsx":
/*!**************************************************************!*\
  !*** ./public/components/cluster-settings/ldap-idp-form.tsx ***!
  \**************************************************************/
/*! exports provided: AddLDAPPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLDAPPage", function() { return AddLDAPPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./public/components/cluster-settings/index.ts");
/* harmony import */ var _idp_name_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./idp-name-input */ "./public/components/cluster-settings/idp-name-input.tsx");
/* harmony import */ var _idp_cafile_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./idp-cafile-input */ "./public/components/cluster-settings/idp-cafile-input.tsx");










class AddLDAPPage extends _utils__WEBPACK_IMPORTED_MODULE_6__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            name: 'ldap',
            url: '',
            bindDN: '',
            bindPassword: '',
            attributesID: ['dn'],
            attributesPreferredUsername: ['uid'],
            attributesName: ['cn'],
            attributesEmail: [],
            caFileContent: '',
            inProgress: false,
            errorMessage: '',
        };
        this.submit = (e) => {
            e.preventDefault();
            // Clear any previous errors.
            this.setState({ errorMessage: '' });
            this.getOAuthResource().then((oauth) => {
                const mockSecret = this.state.bindPassword ? ___WEBPACK_IMPORTED_MODULE_7__["mockNames"].secret : '';
                const mockCA = this.state.caFileContent ? ___WEBPACK_IMPORTED_MODULE_7__["mockNames"].ca : '';
                this.addLDAPIDP(oauth, mockSecret, mockCA, true)
                    .then(() => {
                    const promises = [this.createBindPasswordSecret(), this.createCAConfigMap()];
                    Promise.all(promises)
                        .then(([bindPasswordSecret, caConfigMap]) => {
                        const bindPasswordSecretName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](bindPasswordSecret, 'metadata.name');
                        const caConfigMapName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](caConfigMap, 'metadata.name');
                        return this.addLDAPIDP(oauth, bindPasswordSecretName, caConfigMapName);
                    })
                        .then(___WEBPACK_IMPORTED_MODULE_7__["redirectToOAuthPage"]);
                })
                    .catch((err) => {
                    this.setState({ errorMessage: err });
                });
            });
        };
        this.nameChanged = (event) => {
            this.setState({ name: event.currentTarget.value });
        };
        this.urlChanged = (event) => {
            this.setState({ url: event.currentTarget.value });
        };
        this.bindDNChanged = (event) => {
            this.setState({ bindDN: event.currentTarget.value });
        };
        this.bindPasswordChanged = (event) => {
            this.setState({ bindPassword: event.currentTarget.value });
        };
        this.attributesIDChanged = (attributesID) => {
            this.setState({ attributesID });
        };
        this.attributesPreferredUsernameChanged = (attributesPreferredUsername) => {
            this.setState({ attributesPreferredUsername });
        };
        this.attributesNameChanged = (attributesName) => {
            this.setState({ attributesName });
        };
        this.attributesEmailChanged = (attributesEmail) => {
            this.setState({ attributesEmail });
        };
        this.caFileChanged = (caFileContent) => {
            this.setState({ caFileContent });
        };
    }
    getOAuthResource() {
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_7__["getOAuthResource"])());
    }
    createCAConfigMap() {
        const { caFileContent } = this.state;
        if (!caFileContent) {
            return Promise.resolve(null);
        }
        const ca = {
            apiVersion: 'v1',
            kind: 'ConfigMap',
            metadata: {
                generateName: 'ldap-ca-',
                namespace: 'openshift-config',
            },
            data: {
                'ca.crt': caFileContent,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["ConfigMapModel"], ca));
    }
    createBindPasswordSecret() {
        const { bindPassword } = this.state;
        if (!bindPassword) {
            return Promise.resolve(null);
        }
        const secret = {
            apiVersion: 'v1',
            kind: 'Secret',
            metadata: {
                generateName: 'ldap-bind-password-',
                namespace: 'openshift-config',
            },
            stringData: {
                bindPassword,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"], secret));
    }
    addLDAPIDP(oauth, bindPasswordSecretName, caConfigMapName, dryRun) {
        const { name, url, bindDN, attributesID, attributesPreferredUsername, attributesName, attributesEmail, } = this.state;
        const idp = {
            name,
            mappingMethod: 'claim',
            type: 'LDAP',
            ldap: {
                url,
                insecure: false,
                attributes: {
                    id: attributesID,
                    preferredUsername: attributesPreferredUsername,
                    name: attributesName,
                    email: attributesEmail,
                },
            },
        };
        if (bindDN) {
            idp.ldap.bindDN = bindDN;
        }
        if (bindPasswordSecretName) {
            idp.ldap.bindPassword = {
                name: bindPasswordSecretName,
            };
        }
        if (caConfigMapName) {
            idp.ldap.ca = {
                name: caConfigMapName,
            };
        }
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_7__["addIDP"])(oauth, idp, dryRun));
    }
    render() {
        const { name, url, bindDN, bindPassword, attributesID, attributesPreferredUsername, attributesName, caFileContent, } = this.state;
        const title = 'Add Identity Provider: LDAP';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, name: "form", className: "co-m-pane__body-group co-m-pane__form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "Integrate with an LDAP identity provider."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_name_input__WEBPACK_IMPORTED_MODULE_8__["IDPNameInput"], { value: name, onChange: this.nameChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "url" }, "URL"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "url", onChange: this.urlChanged, value: url, id: "url", required: true, "aria-describedby": "url-help" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: "url-help" }, "An RFC 2255 URL which specifies the LDAP search parameters to use.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "bind-dn" }, "Bind DN"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.bindDNChanged, value: bindDN, id: "bind-dn", "aria-describedby": "bind-dn-help" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: "bind-dn-help" }, "DN to bind with during the search phase.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "bind-password" }, "Bind Password"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "password", onChange: this.bindPasswordChanged, value: bindPassword, id: "bind-password", "aria-describedby": "bind-password-help" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: "bind-password-help" }, "Password to bind with during the search phase.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" }, "Attributes map LDAP attributes to identities."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ListInput"], { label: "ID", required: true, initialValues: attributesID, onChange: this.attributesIDChanged, helpText: "The list of attributes whose values should be used as the user ID." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ListInput"], { label: "Preferred Username", initialValues: attributesPreferredUsername, onChange: this.attributesPreferredUsernameChanged, helpText: "The list of attributes whose values should be used as the preferred username." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ListInput"], { label: "Name", initialValues: attributesName, onChange: this.attributesNameChanged, helpText: "The list of attributes whose values should be used as the display name." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ListInput"], { label: "Email", onChange: this.attributesEmailChanged, helpText: "The list of attributes whose values should be used as the email address." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "More Options"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_cafile_input__WEBPACK_IMPORTED_MODULE_9__["IDPCAFileInput"], { value: caFileContent, onChange: this.caFileChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ButtonBar"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary", "data-test-id": "add-idp" }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_6__["history"].goBack }, "Cancel"))))));
    }
}


/***/ })

}]);
//# sourceMappingURL=ldap-idp-form-31af41b8a4cdc45fd4a0.js.map