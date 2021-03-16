(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-service-instance"],{

/***/ "./public/components/cluster-service-class-info.tsx":
/*!**********************************************************!*\
  !*** ./public/components/cluster-service-class-info.tsx ***!
  \**********************************************************/
/*! exports provided: ClusterServiceClassInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterServiceClassInfo", function() { return ClusterServiceClassInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");





const ClusterServiceClassInfo = ({ obj: serviceClass, }) => {
    const displayName = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["serviceClassDisplayName"])(serviceClass);
    const description = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.description');
    const longDescription = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.longDescription');
    const documentationURL = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.documentationUrl');
    const supportURL = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.supportUrl');
    const provider = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.providerDisplayName');
    const tags = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.tags');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-info" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["ClusterServiceClassIcon"], { serviceClass: serviceClass, iconSize: "large" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-section-heading co-catalog-item-details__name" }, displayName),
                provider && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__provider" },
                    "Provided by ",
                    provider),
                tags && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__tags" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](tags, (tag, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__tag", key: i }, tag))))),
                (documentationURL || supportURL) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-inline" },
                    documentationURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-break-word" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: documentationURL, text: "View documentation" }))),
                    supportURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "co-break-word" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: supportURL, text: "Get support" }))))))),
        description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__description" }, description),
        longDescription && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__description" }, longDescription)));
};


/***/ }),

/***/ "./public/components/service-catalog/create-instance.tsx":
/*!***************************************************************!*\
  !*** ./public/components/service-catalog/create-instance.tsx ***!
  \***************************************************************/
/*! exports provided: CreateInstancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInstancePage", function() { return CreateInstancePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _cluster_service_class_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cluster-service-class-info */ "./public/components/cluster-service-class-info.tsx");
/* harmony import */ var _utils_button_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/button-bar */ "./public/components/utils/button-bar.jsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _schema_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schema-form */ "./public/components/service-catalog/schema-form.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");










const PARAMETERS_SECRET_KEY = 'parameters';
const getAvailablePlans = (plans) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["reject"](plans.data, 'status.removedFromBrokerCatalog');
class CreateInstance extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onNamespaceChange = (namespace) => {
            this.setState({ namespace });
        };
        this.onNameChange = (event) => {
            this.setState({ name: event.currentTarget.value });
        };
        this.onPlanChange = (event) => {
            this.setState({ plan: event.currentTarget.value });
        };
        this.createInstance = (secretName) => {
            const parametersFrom = secretName
                ? [{ secretKeyRef: { name: secretName, key: PARAMETERS_SECRET_KEY } }]
                : [];
            const serviceInstance = {
                apiVersion: 'servicecatalog.k8s.io/v1beta1',
                kind: 'ServiceInstance',
                metadata: {
                    name: this.state.name,
                    namespace: this.state.namespace,
                },
                spec: {
                    clusterServiceClassExternalName: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.props.obj, 'data.spec.externalName'),
                    clusterServicePlanExternalName: this.state.plan,
                    parametersFrom,
                },
            };
            return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_4__["ServiceInstanceModel"], serviceInstance);
        };
        this.onFormChange = ({ formData }) => this.setState({ formData });
        this.save = ({ formData }) => {
            const { name, namespace, plan } = this.state;
            if (!name || !namespace || !plan) {
                this.setState({ error: 'Please complete all fields.' });
                return;
            }
            this.setState({ inProgress: true });
            const secretName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](formData) ? null : `${this.state.name}-parameters`;
            // Create the instance first so we can set an ownerRef from the parameters secret to the instance.
            this.createInstance(secretName)
                .then((instance) => secretName
                ? Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["createParametersSecret"])(secretName, PARAMETERS_SECRET_KEY, formData, instance)
                : null)
                .then(() => {
                this.setState({ inProgress: false });
                _utils__WEBPACK_IMPORTED_MODULE_9__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["ServiceInstanceModel"], name, namespace));
            }, (err) => this.setState({ error: err.message, inProgress: false }));
        };
        const { preselectedNamespace: namespace = '' } = this.props;
        this.state = {
            name: '',
            namespace,
            plan: '',
            formData: {},
            inProgress: false,
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { name, plan } = state;
        const { obj, plans } = props;
        const newState = {};
        const defaultName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'data.spec.externalName');
        if (!name && defaultName) {
            newState.name = defaultName;
        }
        const defaultPlan = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](getAvailablePlans(plans), '[0].spec.externalName');
        if (!plan && defaultPlan) {
            newState.plan = defaultPlan;
        }
        return newState;
    }
    render() {
        const { obj, plans, loaded, loadError } = this.props;
        const serviceClass = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'data');
        const title = 'Create Service Instance';
        const { plan: selectedPlanName } = this.state;
        const availablePlans = getAvailablePlans(plans);
        const selectedPlan = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](availablePlans, { spec: { externalName: selectedPlanName } });
        const schema = Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["getInstanceCreateSchema"])(selectedPlan);
        const parametersForm = Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["getInstanceCreateParametersForm"])(selectedPlan);
        const uiSchema = Object(_schema_form__WEBPACK_IMPORTED_MODULE_8__["getUISchema"])(parametersForm);
        const planOptions = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](availablePlans, (plan) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "radio co-create-service-instance__plan", key: plan.spec.externalName },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "radio", name: "plan", id: "plan", value: plan.spec.externalName, checked: selectedPlanName === plan.spec.externalName, onChange: this.onPlanChange }),
                    lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](plan.spec, ['externalMetadata', 'displayName']) || plan.spec.externalName,
                    plan.spec.description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-muted" }, plan.spec.description))));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["StatusBox"], { data: serviceClass, loaded: loaded, loadError: loadError, label: "Service Class" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["PageHeading"], { title: title }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-create-service-instance" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-7 col-md-push-5 co-catalog-item-info" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_cluster_service_class_info__WEBPACK_IMPORTED_MODULE_5__["ClusterServiceClassInfo"], { obj: serviceClass })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-5 col-md-pull-7" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "co-create-service-instance" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group co-create-service-instance__namespace" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "dropdown-selectbox" }, "Namespace"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["NsDropdown"], { selectedKey: this.state.namespace, onChange: this.onNamespaceChange, id: "dropdown-selectbox" })),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group co-create-service-instance__name" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "name" }, "Service Instance Name"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: this.onNameChange, value: this.state.name, id: "name", required: true })),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group co-create-service-instance__plans" },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label" }, "Plans"),
                                    lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](availablePlans) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "There are no plans currently available for this service.")) : (planOptions))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_schema_form__WEBPACK_IMPORTED_MODULE_8__["ServiceCatalogParametersForm"], { schema: schema, uiSchema: uiSchema, onSubmit: this.save, formData: this.state.formData, onChange: this.onFormChange },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_button_bar__WEBPACK_IMPORTED_MODULE_6__["ButtonBar"], { errorMessage: this.state.error, inProgress: this.state.inProgress },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary" }, "Create"),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_9__["history"].goBack }, "Cancel"))))))))));
    }
}
const CreateInstancePage = (props) => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('cluster-service-class');
    const preselectedNamespace = searchParams.get('preselected-ns');
    const resources = [
        { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["ClusterServiceClassModel"]), name, isList: false, prop: 'obj' },
        {
            kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["ClusterServicePlanModel"]),
            isList: true,
            prop: 'plans',
            fieldSelector: `spec.clusterServiceClassRef.name=${name}`,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CreateInstance, Object.assign({ preselectedNamespace: preselectedNamespace }, props))));
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
//# sourceMappingURL=create-service-instance-c8fe56cce7b0c137d708.js.map