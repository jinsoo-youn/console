(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["github-idp-form"],{

/***/ "./public/components/cluster-settings/github-idp-form.tsx":
/*!****************************************************************!*\
  !*** ./public/components/cluster-settings/github-idp-form.tsx ***!
  \****************************************************************/
/*! exports provided: AddGitHubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGitHubPage", function() { return AddGitHubPage; });
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









class AddGitHubPage extends _utils__WEBPACK_IMPORTED_MODULE_5__["PromiseComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            name: 'github',
            clientID: '',
            clientSecret: '',
            hostname: '',
            organizations: [],
            teams: [],
            caFileContent: '',
            inProgress: false,
            errorMessage: '',
        };
        this.submit = (e) => {
            e.preventDefault();
            if (this.state.organizations.length > 0 && this.state.teams.length > 0) {
                this.setState({ errorMessage: 'Specify either organizations or teams, but not both.' });
                return;
            }
            // Clear any previous errors.
            this.setState({ errorMessage: '' });
            this.getOAuthResource().then((oauth) => {
                const mockCA = this.state.caFileContent ? ___WEBPACK_IMPORTED_MODULE_6__["mockNames"].ca : '';
                this.addGitHubIDP(oauth, ___WEBPACK_IMPORTED_MODULE_6__["mockNames"].secret, mockCA, true)
                    .then(() => {
                    const promises = [this.createClientSecret(), this.createCAConfigMap()];
                    Promise.all(promises)
                        .then(([secret, configMap]) => {
                        const caName = configMap ? configMap.metadata.name : '';
                        return this.addGitHubIDP(oauth, secret.metadata.name, caName);
                    })
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
        this.hostnameChanged = (event) => {
            this.setState({ hostname: event.currentTarget.value });
        };
        this.organizationsChanged = (organizations) => {
            this.setState({ organizations });
        };
        this.teamsChanged = (teams) => {
            this.setState({ teams });
        };
        this.caFileChanged = (caFileContent) => {
            this.setState({ caFileContent });
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
                generateName: 'github-client-secret-',
                namespace: 'openshift-config',
            },
            stringData: {
                clientSecret,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"], secret));
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
                generateName: 'github-ca-',
                namespace: 'openshift-config',
            },
            data: {
                'ca.crt': caFileContent,
            },
        };
        return this.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_3__["ConfigMapModel"], ca));
    }
    addGitHubIDP(oauth, clientSecretName, caName, dryRun) {
        const { name, clientID, hostname, organizations, teams } = this.state;
        const idp = {
            name,
            type: 'GitHub',
            mappingMethod: 'claim',
            github: {
                clientID,
                clientSecret: {
                    name: clientSecretName,
                },
                hostname,
                organizations,
                teams,
            },
        };
        if (caName) {
            idp.github.ca = {
                name: caName,
            };
        }
        return this.handlePromise(Object(___WEBPACK_IMPORTED_MODULE_6__["addIDP"])(oauth, idp, dryRun));
    }
    render() {
        const { name, clientID, clientSecret, hostname, caFileContent } = this.state;
        const title = 'Add Identity Provider: GitHub';
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, name: "form", className: "co-m-pane__body-group co-m-pane__form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "You can use the GitHub integration to connect to either GitHub or GitHub Enterprise. For GitHub Enterprise, you must provide the hostname of your instance and can optionally provide a CA certificate bundle to use in requests to the server."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_name_input__WEBPACK_IMPORTED_MODULE_7__["IDPNameInput"], { value: name, onChange: this.nameChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "client-id" }, "Client ID"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.clientIDChanged, value: clientID, id: "client-id", required: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "client-secret" }, "Client Secret"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "password", onChange: this.clientSecretChanged, value: clientSecret, id: "client-secret", required: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "hostname" }, "Hostname"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.hostnameChanged, value: hostname, id: "hostname", "aria-describedby": "idp-hostname-help" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block", id: "idp-hostname-help" }, "Optional domain for use with a hosted instance of GitHub Enterprise.")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_idp_cafile_input__WEBPACK_IMPORTED_MODULE_8__["IDPCAFileInput"], { value: caFileContent, onChange: this.caFileChanged }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Organizations"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" },
                    "Optionally list organizations. If specified, only GitHub users that are members of at least one of the listed organizations will be allowed to log in. Cannot be used in combination with ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "teams"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Organization", onChange: this.organizationsChanged, helpText: "Restricts which organizations are allowed to log in." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Teams"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" },
                    "Optionally list teams. If specified, only GitHub users that are members of at least one of the listed teams will be allowed to log in. Cannot be used in combination with",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "organizations"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Team", onChange: this.teamsChanged, helpText: "Restricts which teams are allowed to log in. The format is <org>/<team>." }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "submit", variant: "primary", "data-test-id": "add-idp" }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack }, "Cancel"))))));
    }
}


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=github-idp-form-ad5d1498db6d87690305.js.map