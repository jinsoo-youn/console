(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["keystone-idp-form"],{

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

/***/ "./public/components/cluster-settings/keystone-idp-form.tsx":
/*!******************************************************************!*\
  !*** ./public/components/cluster-settings/keystone-idp-form.tsx ***!
  \******************************************************************/
/*! exports provided: DroppableFileInput, AddKeystonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableFileInput", function() { return DroppableFileInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKeystonePage", function() { return AddKeystonePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./public/components/cluster-settings/index.ts");
/* harmony import */ var _idp_name_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./idp-name-input */ "./public/components/cluster-settings/idp-name-input.tsx");
/* harmony import */ var _idp_cafile_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./idp-cafile-input */ "./public/components/cluster-settings/idp-cafile-input.tsx");










const DroppableFileInput = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../utils/file-input */ "./public/components/utils/file-input.tsx")).then((c) => c.DroppableFileInput) }, props)));
class AddKeystonePage extends _utils__WEBPACK_IMPORTED_MODULE_6__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            name: 'keystone',
            domainName: '',
            url: '',
            caFileContent: '',
            certFileContent: '',
            keyFileContent: '',
            inProgress: false,
            errorMessage: '',
        };
        this.submit = (e) => {
            e.preventDefault();
            if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.state.keyFileContent) !== lodash_es__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.state.certFileContent)) {
                this.setState({
                    errorMessage: 'Values for Certificate and Key should both be either excluded or provided.',
                });
                return;
            }
            // Clear any previous errors.
            this.setState({ errorMessage: '' });
            this.getOAuthResource().then((oauth) => {
                const mockSecret = this.state.certFileContent ? ___WEBPACK_IMPORTED_MODULE_7__["mockNames"].secret : '';
                const mockCA = this.state.caFileContent ? ___WEBPACK_IMPORTED_MODULE_7__["mockNames"].ca : '';
                this.addKeystoneIDP(oauth, mockSecret, mockCA, true)
                    .then(() => {
                    const promises = [this.createTLSSecret(), this.createCAConfigMap()];
                    Promise.all(promises)
                        .then(([tlsSecret, configMap]) => {
                        const caName = configMap ? configMap.metadata.name : '';
                        const secretName = tlsSecret ? tlsSecret.metadata.name : '';
                        return this.addKeystoneIDP(oauth, secretName, caName);
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
        this.domainNameChanged = (event) => {
            this.setState({ domainName: event.currentTarget.value });
        };
        this.urlChanged = (event) => {
            this.setState({ url: event.currentTarget.value });
        };
        this.caFileChanged = (caFileContent) => {
            this.setState({ caFileContent });
        };
        this.certFileChanged = (certFileContent) => {
            this.setState({ certFileContent });
        };
        this.keyFileChanged = (keyFileContent) => {
            this.setState({ keyFileContent });
        };
    }
    getOAuthResource() {
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_7__["getOAuthResource"])());
    }
    createTLSSecret() {
        const { certFileContent, keyFileContent } = this.state;
        if (!certFileContent) {
            return Promise.resolve(null);
        }
        const secret = {
            apiVersion: 'v1',
            kind: 'Secret',
            metadata: {
                generateName: 'keystone-tls-',
                namespace: 'openshift-config',
            },
            stringData: {
                'tls.crt': certFileContent,
                'tls.key': keyFileContent,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"], secret));
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
                generateName: 'keystone-ca-',
                namespace: 'openshift-config',
            },
            data: {
                'ca.crt': caFileContent,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["ConfigMapModel"], ca));
    }
    addKeystoneIDP(oauth, secretName, caName, dryRun) {
        const { name, domainName, url } = this.state;
        const idp = {
            name,
            type: 'Keystone',
            mappingMethod: 'claim',
            keystone: {
                domainName,
                url,
            },
        };
        if (caName) {
            idp.keystone.ca = {
                name: caName,
            };
        }
        if (secretName) {
            idp.keystone.tlsClientCert = {
                name: secretName,
            };
            idp.keystone.tlsClientKey = {
                name: secretName,
            };
        }
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_7__["addIDP"])(oauth, idp, dryRun));
    }
    render() {
        const { name, domainName, url, caFileContent, certFileContent, keyFileContent } = this.state;
        const title = 'Add Identity Provider: Keystone Authentication';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, name: "form", className: "co-m-pane__body-group co-m-pane__form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "Adding Keystone enables shared authentication with an OpenStack server configured to store users in an internal Keystone database."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_name_input__WEBPACK_IMPORTED_MODULE_8__["IDPNameInput"], { value: name, onChange: this.nameChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "domain-name" }, "Domain Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.domainNameChanged, value: domainName, id: "domain-name", required: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "url" }, "URL"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "url", onChange: this.urlChanged, value: url, id: "url", "aria-describedby": "idp-url-help", required: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block", id: "idp-url-help" }, "The remote URL to connect to.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_cafile_input__WEBPACK_IMPORTED_MODULE_9__["IDPCAFileInput"], { value: caFileContent, onChange: this.caFileChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DroppableFileInput, { onChange: this.certFileChanged, inputFileData: certFileContent, id: "cert-file-input", label: "Certificate", hideContents: true, inputFieldHelpText: "PEM-encoded TLS client certificate to present when connecting to the server." })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DroppableFileInput, { onChange: this.keyFileChanged, inputFileData: keyFileContent, id: "key-file-input", label: "Key", hideContents: true, inputFieldHelpText: "PEM-encoded TLS private key for the client certificate. Required if Certificate is specified." })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ButtonBar"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary", "data-test-id": "add-idp" }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_6__["history"].goBack }, "Cancel"))))));
    }
}


/***/ })

}]);
//# sourceMappingURL=keystone-idp-form-f4d629e86a430efa6877.js.map