(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-binding"],{

/***/ "./public/components/service-catalog/create-binding.tsx":
/*!**************************************************************!*\
  !*** ./public/components/service-catalog/create-binding.tsx ***!
  \**************************************************************/
/*! exports provided: CreateBindingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBindingPage", function() { return CreateBindingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils_status_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/status-box */ "./public/components/utils/status-box.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils_button_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/button-bar */ "./public/components/utils/button-bar.jsx");
/* harmony import */ var _schema_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schema-form */ "./public/components/service-catalog/schema-form.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










const PARAMETERS_SECRET_KEY = 'parameters';
const BindingParametersForm = (_a) => {
    var { plan } = _a, rest = __rest(_a, ["plan"]);
    if (!plan.loaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_status_box__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
    }
    const schema = Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["getBindingCreateSchema"])(plan.data);
    const parametersForm = Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["getBindingParametersForm"])(plan.data);
    const uiSchema = Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["getUISchema"])(parametersForm);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_schema_form__WEBPACK_IMPORTED_MODULE_8__["ServiceCatalogParametersForm"], Object.assign({ schema: schema, uiSchema: uiSchema }, rest));
};
const BindingParameters = (props) => {
    const planName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](props.instance, 'spec.clusterServicePlanRef.name');
    if (!planName) {
        return null;
    }
    const resources = [
        { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["ClusterServicePlanModel"]), name: planName, prop: 'plan' },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BindingParametersForm, Object.assign({}, props))));
};
class CreateBindingForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onNameChange = (event) => {
            this.setState({ name: event.currentTarget.value });
        };
        this.createBinding = (secretName) => {
            const parametersFrom = secretName
                ? [{ secretKeyRef: { name: secretName, key: PARAMETERS_SECRET_KEY } }]
                : [];
            const serviceBinding = {
                apiVersion: 'servicecatalog.k8s.io/v1beta1',
                kind: 'ServiceBinding',
                metadata: {
                    name: this.state.name,
                    namespace: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.props.obj, 'data.metadata.namespace'),
                },
                spec: {
                    instanceRef: {
                        name: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.props.obj, 'data.metadata.name'),
                    },
                    parametersFrom,
                },
            };
            return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_5__["ServiceBindingModel"], serviceBinding);
        };
        this.onFormChange = ({ formData }) => this.setState({ formData });
        this.save = ({ formData }) => {
            const { name: bindingName } = this.state;
            if (!bindingName) {
                this.setState({ error: 'Please complete all fields.' });
                return;
            }
            this.setState({ inProgress: true });
            const secretName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](formData) ? null : `${bindingName}-bind-parameters`;
            this.createBinding(secretName)
                .then((binding) => secretName
                ? Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["createParametersSecret"])(secretName, PARAMETERS_SECRET_KEY, formData, binding)
                : null)
                .then(() => {
                this.setState({ inProgress: false });
                const instance = this.props.obj.data;
                _utils__WEBPACK_IMPORTED_MODULE_9__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["ServiceBindingModel"], bindingName, instance.metadata.namespace));
            }, (err) => this.setState({ error: err.message, inProgress: false }));
        };
        this.state = {
            name: props.match.params.name,
            formData: {},
            inProgress: false,
        };
    }
    render() {
        const { obj, match } = this.props;
        const { name, formData, inProgress, error } = this.state;
        const serviceInstance = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'data');
        const title = 'Create Service Binding';
        if (!obj.loaded) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_status_box__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["PageHeading"], { title: title, obj: obj, breadcrumbsFor: () => [
                    {
                        name: serviceInstance.metadata.name,
                        path: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["ServiceInstanceModel"], serviceInstance.metadata.name, serviceInstance.metadata.namespace),
                    },
                    { name: `${title}`, path: `${match.url}` },
                ] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "Service bindings create a secret containing the necessary information for an application to use a service."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-5" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                            "Create a binding for ",
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, serviceInstance.metadata.name),
                            " in",
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, serviceInstance.metadata.namespace),
                            "."),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "co-create-service-binding co-m-pane__form" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group co-create-service-binding__name" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "name" }, "Service Binding Name"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.onNameChange, value: name, id: "name", required: true }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BindingParameters, { instance: serviceInstance, onSubmit: this.save, formData: formData, onChange: this.onFormChange },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_button_bar__WEBPACK_IMPORTED_MODULE_7__["ButtonBar"], { errorMessage: error, inProgress: inProgress },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary" }, "Create"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", id: "cancel", onClick: _utils__WEBPACK_IMPORTED_MODULE_9__["history"].goBack, variant: "secondary" }, "Cancel")))))))));
    }
}
const CreateBindingPage = (props) => {
    const resources = [
        {
            kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_5__["ServiceInstanceModel"]),
            name: props.match.params.name,
            namespace: props.match.params.ns,
            isList: false,
            prop: 'obj',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CreateBindingForm, Object.assign({}, props))));
};


/***/ }),

/***/ "./public/components/service-catalog/schema-form.tsx":
/*!***********************************************************!*\
  !*** ./public/components/service-catalog/schema-form.tsx ***!
  \***********************************************************/
/*! exports provided: getInstanceCreateSchema, getInstanceCreateParametersForm, getBindingCreateSchema, getBindingParametersForm, getUISchema, createParametersSecret, ServiceCatalogParametersForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceCreateSchema", function() { return getInstanceCreateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceCreateParametersForm", function() { return getInstanceCreateParametersForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingCreateSchema", function() { return getBindingCreateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingParametersForm", function() { return getBindingParametersForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISchema", function() { return getUISchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParametersSecret", function() { return createParametersSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCatalogParametersForm", function() { return ServiceCatalogParametersForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jsonschema-form */ "./node_modules/react-jsonschema-form/lib/index.js");
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






const getSchema = (plan, path) => {
    const schema = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](plan, path);
    // Make sure there is `properties` in the schema, even if empty, or `Form` displays an error.
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["assign"]({ type: 'object', properties: {} }, schema);
};
const getInstanceCreateSchema = (plan) => getSchema(plan, 'spec.instanceCreateParameterSchema');
const getInstanceCreateParametersForm = (plan) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](plan, 'spec.externalMetadata.schemas.service_instance.create.openshift_form_definition');
const getBindingCreateSchema = (plan) => getSchema(plan, 'spec.serviceBindingCreateParameterSchema');
const getBindingParametersForm = (plan) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](plan, 'spec.externalMetadata.schemas.service_binding.create.openshift_form_definition');
// Flatten items from fieldsets into a single list of parameters. Fieldsets aren't supported.
const flattenParameters = (parametersForm) => {
    return parametersForm.reduce((result, param) => {
        // If param has an `items` array, it's a fieldset. Add the fieldset parameters to the top-level array (preserving order).
        const fieldsetItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](param, 'items');
        const values = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](fieldsetItems) ? param : fieldsetItems;
        return result.concat(values);
    }, []);
};
const UI_ORDER = 'ui:order';
const UI_WIDGET = 'ui:widget';
// The whitelist of types for openshift_form_defintion items are textarea, password, checkbox, select.
// Map these to the `ui:widget` value expected by react-jsonschema-form.
const widgetForType = Object.freeze({
    checkbox: 'checkboxes',
    password: 'password',
    select: 'select',
    textarea: 'textarea',
});
// Convert from the broker parameters form definition to the UI schema expected by react-jsonschema-form:
// https://github.com/mozilla-services/react-jsonschema-form#form-customization
//
// The parameters form definition is a small subset of what was supported by angular-schema-form in the previous AngularJS catalog implementation:
// https://github.com/json-schema-form/angular-schema-form
const getUISchema = (parametersForm) => {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](parametersForm)) {
        return {};
    }
    const flatParams = flattenParameters(parametersForm);
    return flatParams.reduce((result, param) => {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isString"](param)) {
            result[UI_ORDER].push(param);
        }
        else if (param.key) {
            result[UI_ORDER].push(param.key);
            const widget = widgetForType[param.type];
            if (widget) {
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](result, [param.key, UI_WIDGET], widget);
            }
        }
        return result;
    }, { [UI_ORDER]: [] });
};
const createParametersSecret = (secretName, key, parameters, owner) => {
    const secret = {
        apiVersion: 'v1',
        kind: 'Secret',
        metadata: {
            name: secretName,
            namespace: owner.metadata.namespace,
            ownerReferences: [
                {
                    apiVersion: owner.apiVersion,
                    kind: owner.kind,
                    name: owner.metadata.name,
                    uid: owner.metadata.uid,
                    controller: false,
                    blockOwnerDeletion: false,
                },
            ],
        },
        stringData: {
            [key]: JSON.stringify(parameters),
        },
    };
    return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["SecretModel"], secret);
};
// Override react-jsonschema-form rendering of fields so we can use different required and description styles.
// https://github.com/mozilla-services/react-jsonschema-form#field-template
const CustomFieldTemplate = ({ id, classNames: klass, displayLabel, label, help, required, description, errors, children, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: klass },
    displayLabel && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: id, className: classnames__WEBPACK_IMPORTED_MODULE_2__('control-label', { 'co-required': required }) }, label)),
    children,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "help-block" }, description),
    help,
    errors));
// Override the base input `onChange` handler to return an empty string instead of undefined when a user clears a string input.
// https://github.com/mozilla-services/react-jsonschema-form#customizing-widgets-text-input
// https://github.com/mozilla-services/react-jsonschema-form/blob/master/src/components/widgets/BaseInput.js
const CustomBaseInput = (props) => {
    // Note: since React 15.2.0 we can't forward unknown element attributes, so we
    // exclude the "options" and "schema" ones here.
    if (!props.id) {
        // eslint-disable-next-line no-console
        console.log('No id for', props);
        throw new Error(`no id for props ${JSON.stringify(props)}`);
    }
    const { value, readonly, disabled, autofocus, onChange, onBlur, onFocus, options } = props, inputProps = __rest(props, ["value", "readonly", "disabled", "autofocus", "onChange", "onBlur", "onFocus", "options"]);
    inputProps.type = options.inputType || inputProps.type || 'text';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", Object.assign({ className: "pf-c-form-control", readOnly: readonly, disabled: disabled, autoFocus: autofocus, value: value == null ? '' : value }, inputProps, { onChange: (event) => onChange(event.target.value), onBlur: onBlur && ((event) => onBlur(inputProps.id, event.target.value)), onFocus: onFocus && ((event) => onFocus(inputProps.id, event.target.value)) })));
};
// Create a custom checkbox widget to prevent any checkbox from receiving a `required` attribute.
// With HTML5 form validation, a required checkbox has to be checked to submit the form.
const CustomCheckbox = ({ onChange, label, value }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", onClick: () => onChange(!value), checked: value }),
        label)));
const widgets = {
    BaseInput: CustomBaseInput,
    CheckboxWidget: CustomCheckbox,
};
const ServiceCatalogParametersForm = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_jsonschema_form__WEBPACK_IMPORTED_MODULE_3___default.a, Object.assign({ className: "co-service-catalog-parameters", FieldTemplate: CustomFieldTemplate, widgets: widgets }, props)));


/***/ })

}]);
//# sourceMappingURL=create-binding-e969a663cb57d0dbaea3.js.map