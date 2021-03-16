(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configure-ns-pull-secret-modal"],{

/***/ "./public/components/modals/configure-ns-pull-secret-modal.jsx":
/*!*********************************************************************!*\
  !*** ./public/components/modals/configure-ns-pull-secret-modal.jsx ***!
  \*********************************************************************/
/*! exports provided: configureNamespacePullSecretModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureNamespacePullSecretModal", function() { return configureNamespacePullSecretModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");










const parseExisitingPullSecret = (pullSecret) => {
    let invalidData = false;
    const invalidJson = false;
    let username, email, password, address;
    try {
        const existingData = pullSecret && js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].decode(pullSecret.data[_console_shared__WEBPACK_IMPORTED_MODULE_5__["CONST"].PULL_SECRET_DATA]);
        if (existingData) {
            const data = JSON.parse(existingData);
            if (!data || !data.auths) {
                throw 'Invalid data';
            }
            const keys = Object.keys(data.auths);
            if (keys.length > 1) {
                // multiple auths are stored in this one secret.
                // we'll display the first secret, but upon saving, the
                // others will get erased
                invalidData = true;
            }
            else if (keys.length < 1) {
                throw 'Invalid data';
            }
            address = keys[0];
            email = data.auths[address].email;
            const auth = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].decode(data.auths[address].auth);
            const authParts = auth.split(':');
            if (authParts.length === 1) {
                username = '';
                password = authParts[0];
            }
            else if (authParts.length === 2) {
                username = authParts[0];
                password = authParts[1];
            }
            else {
                throw 'Invalid data';
            }
        }
    }
    catch (error) {
        invalidData = true;
    }
    return { username, password, email, address, invalidData, invalidJson };
};
const generateSecretData = (formData) => {
    const config = {
        auths: {},
    };
    const authParts = [];
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["trim"](formData.username).length >= 1) {
        authParts.push(formData.username);
    }
    authParts.push(formData.password);
    config.auths[formData.address] = {
        auth: js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(authParts.join(':')),
        email: formData.email,
    };
    return js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(JSON.stringify(config));
};
class ConfigureNamespacePullSecret extends _utils__WEBPACK_IMPORTED_MODULE_9__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this._submit = this._submit.bind(this);
        this._cancel = this.props.cancel.bind(this);
        this._onMethodChange = this._onMethodChange.bind(this);
        this._onFileChange = this._onFileChange.bind(this);
        this.state = Object.assign(this.state, {
            method: 'form',
            fileData: null,
            invalidJson: false,
        });
    }
    _onMethodChange(event) {
        this.setState({ method: event.target.value });
    }
    _onFileChange(event) {
        this.setState({ invalidJson: false, fileData: null });
        const file = event.target.files[0];
        if (!file || file.type !== 'application/json') {
            this.setState({ invalidJson: true });
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const input = e.target.result;
            try {
                JSON.parse(input);
            }
            catch (error) {
                this.setState({ invalidJson: true });
                return;
            }
            this.setState({ fileData: input });
        };
        reader.readAsText(file, 'UTF-8');
    }
    _submit(event) {
        event.preventDefault();
        const { namespace, pullSecret } = this.props;
        let promise;
        let secretData;
        if (this.state.method === 'upload') {
            secretData = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(this.state.fileData);
        }
        else {
            const elements = event.target.elements;
            const formData = {
                username: elements['namespace-pull-secret-username'].value,
                password: elements['namespace-pull-secret-password'].value,
                email: elements['namespace-pull-secret-email'].value || '',
                address: elements['namespace-pull-secret-address'].value,
            };
            secretData = generateSecretData(formData);
        }
        if (pullSecret) {
            const patch = [
                {
                    op: 'replace',
                    path: `/data/${_console_shared__WEBPACK_IMPORTED_MODULE_5__["CONST"].PULL_SECRET_DATA}`,
                    value: secretData,
                },
            ];
            promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_7__["SecretModel"], pullSecret, patch);
        }
        else {
            const data = {};
            const pullSecretName = event.target.elements['namespace-pull-secret-name'].value;
            data[_console_shared__WEBPACK_IMPORTED_MODULE_5__["CONST"].PULL_SECRET_DATA] = secretData;
            const secret = {
                metadata: {
                    name: pullSecretName,
                    namespace: namespace.metadata.name,
                },
                data,
                type: _console_shared__WEBPACK_IMPORTED_MODULE_5__["CONST"].PULL_SECRET_TYPE,
            };
            const defaultServiceAccountPatch = [
                {
                    op: 'add',
                    path: '/imagePullSecrets/-',
                    value: { name: pullSecretName },
                },
            ];
            promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_7__["SecretModel"], secret).then(() => Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sPatchByName"])(_models__WEBPACK_IMPORTED_MODULE_7__["ServiceAccountModel"], 'default', namespace.metadata.name, defaultServiceAccountPatch));
        }
        this.handlePromise(promise).then(this.props.close);
    }
    render() {
        const { namespace, pullSecret } = this.props;
        const existingData = parseExisitingPullSecret(pullSecret);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_8__["ModalTitle"], null, "Default Pull Secret"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Specify default credentials to be used to authenticate and download containers within this namespace. These credentials will be the default unless a pod references a specific pull secret."),
                existingData.invalidData && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: "Overwriting default pull secret" }, "A default pull secret exists, but can't be parsed. Saving this will overwrite it.")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Namespace")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceIcon"], { kind: "Namespace" }),
                        " \u00A0",
                        namespace.metadata.name)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "namespace-pull-secret-name" }, "Secret Name")),
                    pullSecret ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceIcon"], { kind: "Secret" }),
                        "\u00A0",
                        lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](pullSecret, 'metadata.name'))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", id: "namespace-pull-secret-name", "aria-describedby": "namespace-pull-secret-name-help", required: true }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block text-muted", id: "namespace-pull-secret-name-help" }, "Friendly name to help you manage this in the future")))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row form-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Method")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "radio" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", id: "namespace-pull-secret-method--form", checked: this.state.method === 'form', onChange: this._onMethodChange, value: "form" }),
                                "Enter Username/Password")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "radio" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", checked: this.state.method === 'upload', onChange: this._onMethodChange, id: "namespace-pull-secret-method--upload", value: "upload" }),
                                "Upload Docker config.json")))),
                this.state.method === 'form' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "namespace-pull-secret-address" }, "Registry Address")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", className: "pf-c-form-control", id: "namespace-pull-secret-address", defaultValue: existingData.address, placeholder: "quay.io", required: true }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "namespace-pull-secret-email" }, "Email Address")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "email", className: "pf-c-form-control", defaultValue: existingData.email, id: "namespace-pull-secret-email", "aria-describedby": "namespace-pull-secret-email-help" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block text-muted", id: "namespace-pull-secret-email-help" }, "Optional, depending on registry provider"))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "namespace-pull-secret-username" }, "Username")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", defaultValue: existingData.username, className: "pf-c-form-control", id: "namespace-pull-secret-username", required: true }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "namespace-pull-secret-password" }, "Password")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "password", defaultValue: existingData.password, className: "pf-c-form-control", id: "namespace-pull-secret-password", required: true }))))),
                this.state.method === 'upload' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-3" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { htmlFor: "namespace-pull-secret-file" }, "File Upload")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "file", id: "namespace-pull-secret-file", onChange: this._onFileChange, "aria-describedby": "namespace-pull-secret-file-help" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block etext-muted", id: "namespace-pull-secret-file-help" }, "Properly configured Docker config file in JSON format. Will be base64 encoded after upload."))),
                    this.state.invalidJson ||
                        (existingData.invalidJson && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9 col-sm-offset-3" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: "Invalid JSON" }, "The uploaded file is not properly-formatted JSON."))))),
                    this.state.fileData && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-form-row" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-9 col-sm-offset-3" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("pre", { className: "co-pre-wrap" }, this.state.fileData))))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_8__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Save", cancel: this._cancel })));
    }
}
ConfigureNamespacePullSecret.propTypes = {
    namespace: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
    pullSecret: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
};
const configureNamespacePullSecretModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_8__["createModalLauncher"])(ConfigureNamespacePullSecret);


/***/ })

}]);
//# sourceMappingURL=configure-ns-pull-secret-modal-c23e14540e8a83df526a.js.map