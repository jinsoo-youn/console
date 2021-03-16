(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instantiate-template"],{

/***/ "./public/components/instantiate-template.tsx":
/*!****************************************************!*\
  !*** ./public/components/instantiate-template.tsx ***!
  \****************************************************/
/*! exports provided: InstantiateTemplatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstantiateTemplatePage", function() { return InstantiateTemplatePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _reducers_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/ui */ "./public/reducers/ui.ts");












const TemplateResourceDetails = ({ template }) => {
    const resources = lodash_es__WEBPACK_IMPORTED_MODULE_2__["uniq"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["compact"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["map"](template.objects, 'kind'))).sort();
    if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](resources)) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "The following resources will be created:"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, resources.map((kind) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: kind }, kind))))));
};
TemplateResourceDetails.displayName = 'TemplateResourceDetails';
const TemplateInfo = ({ template }) => {
    const annotations = template.metadata.annotations || {};
    const { description } = annotations;
    const displayName = annotations[_console_shared__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].displayName] || template.metadata.name;
    const iconClass = Object(_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_7__["getTemplateIcon"])(template);
    const imgURL = Object(_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_7__["getImageForIconClass"])(iconClass);
    const tags = (annotations.tags || '').split(/\s*,\s*/);
    const documentationURL = annotations[_console_shared__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].documentationURL];
    const supportURL = annotations[_console_shared__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].supportURL];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-info" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-icon" }, imgURL ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "co-catalog-item-icon__img co-catalog-item-icon__img--large", src: imgURL })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classnames__WEBPACK_IMPORTED_MODULE_4__('co-catalog-item-icon__icon co-catalog-item-icon__icon--large', Object(_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_7__["normalizeIconClass"])(iconClass)) }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-section-heading co-catalog-item-details__name" }, displayName),
                !lodash_es__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](tags) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__tags" }, lodash_es__WEBPACK_IMPORTED_MODULE_2__["map"](tags, (tag, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__tag", key: i }, tag))))),
                (documentationURL || supportURL) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-inline" },
                    documentationURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-break-word" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], { href: documentationURL, text: "View documentation" }))),
                    supportURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-break-word" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], { href: supportURL, text: "Get support" }))))))),
        description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__description" }, description),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TemplateResourceDetails, { template: template })));
};
TemplateInfo.displayName = 'TemplateInfo';
const stateToProps = (state) => ({
    models: state.k8s.getIn(['RESOURCES', 'models']),
    activePerspective: Object(_reducers_ui__WEBPACK_IMPORTED_MODULE_11__["getActivePerspective"])(state),
});
class TemplateForm_ extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.getParameterValues = (props) => {
            const templateParameters = props.obj.data.parameters || [];
            return templateParameters.reduce((acc, { name, value }) => {
                acc[name] = value;
                return acc;
            }, {});
        };
        this.onNamespaceChange = (namespace) => {
            this.setState({ namespace });
        };
        this.onParameterChanged = (event) => {
            const { name, value } = event.currentTarget;
            this.setState(({ parameters }) => ({
                parameters: Object.assign(Object.assign({}, parameters), { [name]: value }),
            }));
        };
        this.save = (event) => {
            event.preventDefault();
            const { namespace } = this.state;
            if (!namespace) {
                this.setState({ error: 'Please complete all fields.' });
                return;
            }
            this.setState({ error: '', inProgress: true });
            this.createTemplateSecret()
                .then((secret) => {
                return this.createTemplateInstance(secret).then((instance) => {
                    this.setState({ inProgress: false });
                    _utils__WEBPACK_IMPORTED_MODULE_8__["history"].push(this.props.activePerspective === 'dev'
                        ? `/topology`
                        : Object(_utils__WEBPACK_IMPORTED_MODULE_8__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["TemplateInstanceModel"], instance.metadata.name, instance.metadata.namespace));
                });
            })
                .catch((err) => this.setState({ inProgress: false, error: err.message }));
        };
        const { preselectedNamespace: namespace = '' } = this.props;
        const parameters = this.getParameterValues(props);
        this.state = {
            namespace,
            parameters,
            inProgress: false,
            error: '',
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.obj !== prevProps.obj) {
            const parameters = this.getParameterValues(this.props);
            this.setState({ parameters });
        }
    }
    createTemplateSecret() {
        const { obj } = this.props;
        const { namespace, parameters } = this.state;
        const secret = {
            apiVersion: 'v1',
            kind: 'Secret',
            metadata: {
                generateName: `${obj.data.metadata.name}-parameters-`,
                namespace,
            },
            // Remove empty values.
            stringData: parameters,
        };
        return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_9__["SecretModel"], secret);
    }
    createTemplateInstance(secret) {
        const { obj } = this.props;
        const { namespace } = this.state;
        const instance = {
            apiVersion: 'template.openshift.io/v1',
            kind: 'TemplateInstance',
            metadata: {
                generateName: `${obj.data.metadata.name}-`,
                namespace,
            },
            spec: {
                template: obj.data,
                secret: {
                    name: secret.metadata.name,
                },
            },
        };
        return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_9__["TemplateInstanceModel"], instance);
    }
    render() {
        const { obj } = this.props;
        if (obj.loadError) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadError"], { message: obj.loadError.message, label: "Template", className: "loading-box loading-box__errored" }));
        }
        if (!obj.loaded) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingBox"], null);
        }
        const template = obj.data;
        const parameters = template.parameters || [];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-7 col-md-push-5 co-catalog-item-info" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TemplateInfo, { template: template })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-5 col-md-pull-7" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "co-instantiate-template-form", onSubmit: this.save },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "namespace" }, "Namespace"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["NsDropdown"], { selectedKey: this.state.namespace, onChange: this.onNamespaceChange, id: "namespace" })),
                    parameters.map(({ name, displayName, description, required: requiredParam, generate, }) => {
                        const value = this.state.parameters[name] || '';
                        const helpID = description ? `${name}-help` : '';
                        const placeholder = generate ? '(generated if empty)' : '';
                        // Only set required for parameters not generated.
                        const requiredInput = requiredParam && !generate;
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group", key: name },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_4__('control-label', { 'co-required': requiredInput }), htmlFor: name }, displayName || name),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", id: name, name: name, value: value, onChange: this.onParameterChanged, required: requiredInput, placeholder: placeholder, "aria-describedby": helpID }),
                            description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block", id: helpID }, description))));
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ButtonBar"], { className: "co-instantiate-template-form__button-bar", errorMessage: this.state.error, inProgress: this.state.inProgress },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ActionGroup"], { className: "pf-c-form" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "submit", variant: "primary" }, "Create"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_8__["history"].goBack }, "Cancel")))))));
    }
}
const TemplateForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(stateToProps)(TemplateForm_);
const InstantiateTemplatePage = (props) => {
    const title = 'Instantiate Template';
    const searchParams = new URLSearchParams(location.search);
    const templateName = searchParams.get('template');
    const templateNamespace = searchParams.get('template-ns');
    const preselectedNamespace = searchParams.get('preselected-ns');
    const resources = [
        {
            kind: 'Template',
            name: templateName,
            namespace: templateNamespace,
            isList: false,
            prop: 'obj',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Firehose"], { resources: resources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TemplateForm, Object.assign({ preselectedNamespace: preselectedNamespace }, props))))));
};


/***/ })

}]);
//# sourceMappingURL=instantiate-template-b95e2e897bd2365bcd4e.js.map