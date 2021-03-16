(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-header-idp-form"],{

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

/***/ "./public/components/cluster-settings/request-header-idp-form.tsx":
/*!************************************************************************!*\
  !*** ./public/components/cluster-settings/request-header-idp-form.tsx ***!
  \************************************************************************/
/*! exports provided: AddRequestHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestHeaderPage", function() { return AddRequestHeaderPage; });
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
/* harmony import */ var _idp_cafile_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./idp-cafile-input */ "./public/components/cluster-settings/idp-cafile-input.tsx");









class AddRequestHeaderPage extends _utils__WEBPACK_IMPORTED_MODULE_5__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            name: 'request-header',
            challengeURL: '',
            loginURL: '',
            clientCommonNames: [],
            headers: [],
            preferredUsernameHeaders: [],
            nameHeaders: [],
            emailHeaders: [],
            caFileContent: '',
            inProgress: false,
            errorMessage: '',
        };
        this.submit = (e) => {
            e.preventDefault();
            if (!this.state.caFileContent) {
                this.setState({ errorMessage: 'You must specify a CA File.' });
                return;
            }
            // Clear any previous errors.
            this.setState({ errorMessage: '' });
            this.getOAuthResource().then((oauth) => {
                this.addRequestHeaderIDP(oauth, ___WEBPACK_IMPORTED_MODULE_6__["mockNames"].ca, true)
                    .then(() => {
                    return this.createCAConfigMap()
                        .then((configMap) => this.addRequestHeaderIDP(oauth, configMap.metadata.name))
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
        this.challengeURLChanged = (event) => {
            this.setState({ challengeURL: event.currentTarget.value });
        };
        this.loginURLChanged = (event) => {
            this.setState({ loginURL: event.currentTarget.value });
        };
        this.clientCommonNamesChanged = (clientCommonNames) => {
            this.setState({ clientCommonNames });
        };
        this.headersChanged = (headers) => {
            this.setState({ headers });
        };
        this.preferredUsernameHeadersChanged = (preferredUsernameHeaders) => {
            this.setState({ preferredUsernameHeaders });
        };
        this.nameHeadersChanged = (nameHeaders) => {
            this.setState({ nameHeaders });
        };
        this.emailHeadersChanged = (emailHeaders) => {
            this.setState({ emailHeaders });
        };
        this.caFileChanged = (caFileContent) => {
            this.setState({ caFileContent });
        };
    }
    getOAuthResource() {
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_6__["getOAuthResource"])());
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
                generateName: 'request-header-ca-',
                namespace: 'openshift-config',
            },
            data: {
                'ca.crt': caFileContent,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_3__["ConfigMapModel"], ca));
    }
    addRequestHeaderIDP(oauth, caName, dryRun) {
        const { name, loginURL, challengeURL, clientCommonNames, headers, preferredUsernameHeaders, nameHeaders, emailHeaders, } = this.state;
        const idp = {
            name,
            type: 'RequestHeader',
            mappingMethod: 'claim',
            requestHeader: {
                loginURL,
                challengeURL,
                clientCommonNames,
                headers,
                preferredUsernameHeaders,
                nameHeaders,
                emailHeaders,
                ca: {
                    name: caName,
                },
            },
        };
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_6__["addIDP"])(oauth, idp, dryRun));
    }
    render() {
        const { name, challengeURL, loginURL, caFileContent } = this.state;
        const title = 'Add Identity Provider: Request Header';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, name: "form", className: "co-m-pane__body-group co-m-pane__form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "Use request header to identify users from request header values. It is typically used in combination with an authenticating proxy, which sets the request header value."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_name_input__WEBPACK_IMPORTED_MODULE_7__["IDPNameInput"], { value: name, onChange: this.nameChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "co-required" }, "URLs"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "At least one URL must be provided."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "challenge-url" }, "Challenge URL"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "url", onChange: this.challengeURLChanged, value: challengeURL, id: "challenge-url", "aria-describedby": "challenge-url-help" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: "challenge-url-help" }, "The URL to redirect unauthenticated requests from OAuth clients which expect interactive logins.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "login-url" }, "Login URL"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "url", onChange: this.loginURLChanged, value: loginURL, id: "login-url", "aria-describedby": "login-url-help" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: "login-url-help" }, "The URL to redirect unauthenticated requests from OAuth clients which expect WWW-Authenticate challenges.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "More Options"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_cafile_input__WEBPACK_IMPORTED_MODULE_8__["IDPCAFileInput"], { value: caFileContent, onChange: this.caFileChanged, isRequired: true }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Client Common Names", onChange: this.clientCommonNamesChanged, helpText: "The set of common names to require a match from." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Headers", onChange: this.headersChanged, helpText: "The set of headers to check for identity information.", required: true }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Preferred Username Headers", onChange: this.preferredUsernameHeadersChanged, helpText: "The set of headers to check for the preferred username." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Name Headers", onChange: this.nameHeadersChanged, helpText: "The set of headers to check for the display name." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Email Headers", onChange: this.emailHeadersChanged, helpText: "The set of headers to check for the email address." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "submit", variant: "primary" }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack }, "Cancel"))))));
    }
}


/***/ })

}]);
//# sourceMappingURL=request-header-idp-form-69f6e6ca9662cb773ad8.js.map