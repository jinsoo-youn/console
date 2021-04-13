(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./packages/console-shared/src/components/dynamic-form/const.ts":
/*!**********************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/const.ts ***!
  \**********************************************************************/
/*! exports provided: K8S_UI_SCHEMA, JSON_SCHEMA_GROUP_TYPES, JSON_SCHEMA_NUMBER_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K8S_UI_SCHEMA", function() { return K8S_UI_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA_GROUP_TYPES", function() { return JSON_SCHEMA_GROUP_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA_NUMBER_TYPES", function() { return JSON_SCHEMA_NUMBER_TYPES; });
const K8S_UI_SCHEMA = {
    apiVersion: {
        'ui:widget': 'hidden',
        'ui:options': {
            label: false,
        },
    },
    kind: {
        'ui:widget': 'hidden',
        'ui:options': {
            label: false,
        },
    },
    spec: {
        'ui:options': {
            label: false,
        },
    },
    status: {
        'ui:widget': 'hidden',
        'ui:options': {
            label: false,
        },
    },
    'ui:order': ['metadata', 'spec', '*'],
};
const JSON_SCHEMA_GROUP_TYPES = ['object', 'array'];
const JSON_SCHEMA_NUMBER_TYPES = ['number', 'integer'];


/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/fields.tsx":
/*!************************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/fields.tsx ***!
  \************************************************************************/
/*! exports provided: DescriptionField, FormField, FieldSet, UpdateStrategyField, NodeAffinityField, PodAffinityField, MatchExpressionsField, BooleanField, LabelsField, ResourceRequirementsField, AdditionalPropertyField, DropdownField, TextField, CustomSchemaField, NullField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionField", function() { return DescriptionField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormField", function() { return FormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSet", function() { return FieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStrategyField", function() { return UpdateStrategyField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeAffinityField", function() { return NodeAffinityField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodAffinityField", function() { return PodAffinityField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchExpressionsField", function() { return MatchExpressionsField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanField", function() { return BooleanField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsField", function() { return LabelsField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRequirementsField", function() { return ResourceRequirementsField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalPropertyField", function() { return AdditionalPropertyField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownField", function() { return DropdownField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSchemaField", function() { return CustomSchemaField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullField", function() { return NullField; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jsonschema-form/lib/utils */ "./node_modules/react-jsonschema-form/lib/utils.js");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsonschema_form_lib_components_fields_SchemaField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jsonschema-form/lib/components/fields/SchemaField */ "./node_modules/react-jsonschema-form/lib/components/fields/SchemaField.js");
/* harmony import */ var react_jsonschema_form_lib_components_fields_SchemaField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_components_fields_SchemaField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_descriptors_spec_match_expressions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/descriptors/spec/match-expressions */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/match-expressions.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_descriptors_spec_resource_requirements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/descriptors/spec/resource-requirements */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/resource-requirements.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_descriptors_spec_additional_properties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/descriptors/spec/additional-properties */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/additional-properties.tsx");
/* harmony import */ var _console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/modals/configure-update-strategy-modal */ "./public/components/modals/configure-update-strategy-modal.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/descriptors/spec/affinity */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/affinity.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");













// import { useTranslation } from 'react-i18next';
const Description = ({ id, description }) => description ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", { id: id, className: "help-block" },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LinkifyExternal"], null,
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "co-pre-line" }, description)))) : null;
const DescriptionField = ({ id, description }) => {
    // const { t } = useTranslation();
    // return <Description id={id} description={t(`COMMON:${description}`)} />;
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Description, { id: id, description: description });
};
const FormField = ({ children, id, defaultLabel, required, schema, uiSchema }) => {
    const [showLabel, label] = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["useSchemaLabel"])(schema, uiSchema, defaultLabel || 'Value');
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { id: `${id}_field`, className: "form-group" },
        showLabel && label && (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('form-label', { 'co-required': required }), htmlFor: id }, label)),
        children));
};
const FieldSet = ({ children, defaultLabel, idSchema, required = false, schema, uiSchema }) => {
    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
    const [showLabel, label] = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["useSchemaLabel"])(schema, uiSchema, defaultLabel);
    const description = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["useSchemaDescription"])(schema, uiSchema);
    const onToggle = e => {
        e.preventDefault();
        setExpanded(current => !current);
    };
    return showLabel && label ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { id: `${idSchema.$id}_field-group`, className: "form-group co-dynamic-form__field-group" },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["AccordionItem"], null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["AccordionToggle"], { id: `${idSchema.$id}_accordion-toggle`, onClick: onToggle, isExpanded: expanded },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_1__({ 'co-required': required }), htmlFor: `${idSchema.$id}_accordion-content` }, lodash__WEBPACK_IMPORTED_MODULE_0__["startCase"](label))),
            description && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Description, { id: `${idSchema.$id}_description`, description: description }),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["AccordionContent"], { id: `${idSchema.$id}_accordion-content`, isHidden: !expanded }, children)))) : (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, children));
};
const UpdateStrategyField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => {
    var _a, _b;
    const description = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["useSchemaDescription"])(schema, uiSchema, _console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_10__["UPDATE_STRATEGY_DESCRIPTION"]);
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FormField, { defaultLabel: name || 'Update Strategy', id: idSchema.$id, required: required, schema: schema, uiSchema: uiSchema },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Description, { description: description, id: idSchema.$id }),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_10__["ConfigureUpdateStrategy"], { showDescription: false, strategyType: (formData === null || formData === void 0 ? void 0 : formData.type) || 'RollingUpdate', maxUnavailable: ((_a = formData === null || formData === void 0 ? void 0 : formData.rollingUpdate) === null || _a === void 0 ? void 0 : _a.maxUnavailable) || '', maxSurge: ((_b = formData === null || formData === void 0 ? void 0 : formData.rollingUpdate) === null || _b === void 0 ? void 0 : _b.maxSurge) || '', onChangeStrategyType: type => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'type', type)), onChangeMaxUnavailable: maxUnavailable => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'rollingUpdate.maxUnavailable', maxUnavailable)), onChangeMaxSurge: maxSurge => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'rollingUpdate.maxSurge', maxSurge)), replicas: 1, uid: idSchema.$id })));
};
const NodeAffinityField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FieldSet, { defaultLabel: name || 'Node Affinity', idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_11__["NodeAffinity"], { affinity: formData, onChange: affinity => onChange(affinity), uid: idSchema.$id })));
const PodAffinityField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FieldSet, { defaultLabel: name || 'Pod Affinity', idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_11__["PodAffinity"], { affinity: formData, onChange: affinity => onChange(affinity), uid: idSchema.$id })));
const MatchExpressionsField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FieldSet, { defaultLabel: name || 'Match Expressions', idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_match_expressions__WEBPACK_IMPORTED_MODULE_7__["MatchExpressions"], { matchExpressions: formData, onChange: v => onChange(v), uid: idSchema.$id })));
const BooleanField = ({ formData, idSchema, name, onChange, uiSchema }) => {
    const { labelOn = 'true', labelOff = 'false' } = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getUiOptions"])(uiSchema);
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Switch"], { id: (idSchema === null || idSchema === void 0 ? void 0 : idSchema.$id) || name, key: (idSchema === null || idSchema === void 0 ? void 0 : idSchema.$id) || name, isChecked: lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](formData) ? false : formData, onChange: v => onChange(v), label: labelOn, labelOff: labelOff })));
};
const LabelsField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FormField, { defaultLabel: name, id: idSchema.$id, required: required, schema: schema, uiSchema: uiSchema },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"], { inputProps: { id: idSchema.$id }, onChange: newValue => onChange(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"].objectify(newValue)), tags: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["SelectorInput"].arrayify(formData) })));
const ResourceRequirementsField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => {
    var _a, _b, _c, _d, _e, _f;
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FieldSet, { defaultLabel: name || 'Resource Requirements', idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dl", { id: idSchema.$id },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dt", null, "Limits"),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dd", null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_resource_requirements__WEBPACK_IMPORTED_MODULE_8__["ResourceRequirements"], { cpu: ((_a = formData === null || formData === void 0 ? void 0 : formData.limits) === null || _a === void 0 ? void 0 : _a.cpu) || '', memory: ((_b = formData === null || formData === void 0 ? void 0 : formData.limits) === null || _b === void 0 ? void 0 : _b.memory) || '', storage: ((_c = formData === null || formData === void 0 ? void 0 : formData.limits) === null || _c === void 0 ? void 0 : _c['ephemeral-storage']) || '', onChangeCPU: cpu => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'limits.cpu', cpu)), onChangeMemory: mem => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'limits.memory', mem)), onChangeStorage: sto => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'limits.ephemeral-storage', sto)), path: `${idSchema.$id}.limits` })),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dt", null, "Requests"),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("dd", null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_resource_requirements__WEBPACK_IMPORTED_MODULE_8__["ResourceRequirements"], { cpu: ((_d = formData === null || formData === void 0 ? void 0 : formData.requests) === null || _d === void 0 ? void 0 : _d.cpu) || '', memory: ((_e = formData === null || formData === void 0 ? void 0 : formData.requests) === null || _e === void 0 ? void 0 : _e.memory) || '', storage: ((_f = formData === null || formData === void 0 ? void 0 : formData.requests) === null || _f === void 0 ? void 0 : _f['ephemeral-storage']) || '', onChangeCPU: cpu => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'requests.cpu', cpu)), onChangeMemory: mem => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'requests.memory', mem)), onChangeStorage: sto => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["set"](lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](formData), 'requests.ephemeral-storage', sto)), path: `${idSchema.$id}.requests` })))));
};
const AdditionalPropertyField = ({ formData, idSchema, name, onChange, required, schema, uiSchema }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](FieldSet, { defaultLabel: name || 'Resource Requirements', idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_additional_properties__WEBPACK_IMPORTED_MODULE_9__["AdditionalPropertyFields"], { data: formData, onChange: onChange, path: `${idSchema.$id}` })));
const DropdownField = ({ formData, idSchema, name, onChange, schema, uiSchema = {} }) => {
    const { items, title } = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_3__["getUiOptions"])(uiSchema);
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { id: idSchema.$id, key: idSchema.$id, title: `Select ${title || (schema === null || schema === void 0 ? void 0 : schema.title) || name}`, selectedKey: formData, items: items !== null && items !== void 0 ? items : {}, onChange: val => onChange(val) });
};
const TextField = ({ formData, idSchema, name, onChange, onBlur, schema, uiSchema = {}, disabled = false, required = false, readonly = false }) => {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", { className: "pf-c-form-control", disabled: disabled, id: idSchema.$id, key: idSchema.$id, onBlur: onBlur && (event => onBlur(idSchema.$id, event.target.value)), onChange: ({ currentTarget }) => onChange(currentTarget.value), readOnly: readonly, required: required, type: "text", value: formData });
};
const CustomSchemaField = props => {
    var _a;
    const errors = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getSchemaErrors"])((_a = props.schema) !== null && _a !== void 0 ? _a : {});
    if (errors.length) {
        // eslint-disable-next-line no-console
        console.warn('DynamicForm component does not support the provided JSON schema: ', errors);
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_jsonschema_form_lib_components_fields_SchemaField__WEBPACK_IMPORTED_MODULE_4___default.a, Object.assign({}, props));
};
const NullField = () => null;
/* harmony default export */ __webpack_exports__["default"] = ({
    TextField,
    AdditionalPropertyField,
    BooleanField,
    DescriptionField,
    DropdownField,
    LabelsField,
    MatchExpressionsField,
    NodeAffinityField,
    NullField,
    PodAffinityField,
    ResourceRequirementsField,
    SchemaField: CustomSchemaField,
    UpdateStrategyField,
});


/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/index.tsx":
/*!***********************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/index.tsx ***!
  \***********************************************************************/
/*! exports provided: DynamicForm, SchemaType, K8S_UI_SCHEMA, JSON_SCHEMA_GROUP_TYPES, JSON_SCHEMA_NUMBER_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicForm", function() { return DynamicForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jsonschema-form */ "./node_modules/react-jsonschema-form/lib/index.js");
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets */ "./packages/console-shared/src/components/dynamic-form/widgets.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields */ "./packages/console-shared/src/components/dynamic-form/fields.tsx");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates */ "./packages/console-shared/src/components/dynamic-form/templates.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./const */ "./packages/console-shared/src/components/dynamic-form/const.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ "./packages/console-shared/src/components/dynamic-form/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types */ "./packages/console-shared/src/components/dynamic-form/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaType", function() { return _types__WEBPACK_IMPORTED_MODULE_11__["SchemaType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "K8S_UI_SCHEMA", function() { return _const__WEBPACK_IMPORTED_MODULE_8__["K8S_UI_SCHEMA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA_GROUP_TYPES", function() { return _const__WEBPACK_IMPORTED_MODULE_8__["JSON_SCHEMA_GROUP_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA_NUMBER_TYPES", function() { return _const__WEBPACK_IMPORTED_MODULE_8__["JSON_SCHEMA_NUMBER_TYPES"]; });












const DynamicForm = ({ ArrayFieldTemplate = _templates__WEBPACK_IMPORTED_MODULE_7__["ArrayFieldTemplate"], errors = [], ErrorTemplate = _templates__WEBPACK_IMPORTED_MODULE_7__["ErrorTemplate"], fields = {}, FieldTemplate = _templates__WEBPACK_IMPORTED_MODULE_7__["FieldTemplate"], formContext, formData = {}, noValidate = false, ObjectFieldTemplate = _templates__WEBPACK_IMPORTED_MODULE_7__["ObjectFieldTemplate"], onChange = lodash__WEBPACK_IMPORTED_MODULE_0__["noop"], onError = lodash__WEBPACK_IMPORTED_MODULE_0__["noop"], onSubmit = lodash__WEBPACK_IMPORTED_MODULE_0__["noop"], schema, uiSchema = {}, widgets = {} }) => {
    const schemaErrors = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getSchemaErrors"])(schema);
    // IF the top level schema is unsupported, don't render a form at all.
    if (schemaErrors.length) {
        // eslint-disable-next-line no-console
        console.warn('A form could not be generated for this resource.', schemaErrors);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert co-break-word", variant: "info", title: 'A form is not available for this resource. Please use the YAML View.' });
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert co-break-word", variant: "info", title: 'Note: Some fields may not be represented in this form. Please select "YAML View" for full control of object creation.' }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Accordion"], { asDefinitionList: false, className: "co-dynamic-form__accordion" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_jsonschema_form__WEBPACK_IMPORTED_MODULE_2___default.a, { className: "co-dynamic-form", 
                // liveValidate={true}
                noValidate: true, ArrayFieldTemplate: ArrayFieldTemplate, fields: Object.assign(Object.assign({}, _fields__WEBPACK_IMPORTED_MODULE_6__["default"]), fields), FieldTemplate: FieldTemplate, formContext: Object.assign(Object.assign({}, formContext), { formData }), formData: formData, noHtml5Validate: true, ObjectFieldTemplate: ObjectFieldTemplate, onChange: next => onChange(next.formData), onError: newErrors => onError(lodash__WEBPACK_IMPORTED_MODULE_0__["map"](newErrors, error => error.stack)), onSubmit: onSubmit, schema: schema, 
                // Don't show the react-jsonschema-form error list at top
                showErrorList: false, uiSchema: lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({}, _const__WEBPACK_IMPORTED_MODULE_8__["K8S_UI_SCHEMA"], uiSchema), widgets: Object.assign(Object.assign({}, _widgets__WEBPACK_IMPORTED_MODULE_5__["default"]), widgets) },
                errors.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ErrorTemplate, { errors: errors }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { paddingBottom: '30px' } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary" }, "Create"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].goBack, variant: "secondary" }, "Cancel")))))));
};




/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/styles.scss":
/*!*************************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/styles.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/templates.tsx":
/*!***************************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/templates.tsx ***!
  \***************************************************************************/
/*! exports provided: AtomicFieldTemplate, FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate, AdditionalFieldTemplate, ErrorTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtomicFieldTemplate", function() { return AtomicFieldTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldTemplate", function() { return FieldTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFieldTemplate", function() { return ObjectFieldTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayFieldTemplate", function() { return ArrayFieldTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalFieldTemplate", function() { return AdditionalFieldTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTemplate", function() { return ErrorTemplate; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./packages/console-shared/src/components/dynamic-form/const.ts");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jsonschema-form/lib/utils */ "./node_modules/react-jsonschema-form/lib/utils.js");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_descriptors_spec_additional_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/descriptors/spec/additional-properties */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/additional-properties.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields */ "./packages/console-shared/src/components/dynamic-form/fields.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");










const AtomicFieldTemplate = ({ children, id, label, rawErrors, description, required, schema, uiSchema }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fields__WEBPACK_IMPORTED_MODULE_8__["FormField"], { id: id, defaultLabel: label, required: required, schema: schema, uiSchema: uiSchema },
        children,
        description,
        !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](rawErrors) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](rawErrors, error => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { key: error, isHidden: false, isError: true }, lodash__WEBPACK_IMPORTED_MODULE_0__["capitalize"](error))))))));
};
const AdvancedProperties = ({ properties }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ExpandCollapse"], { textCollapsed: "Advanced Configuration", textExpanded: "Advanced Configuration" }, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](properties, property => property.content)));
const FieldTemplate = props => {
    const { hidden, schema = {}, children, uiSchema = {}, formContext = {} } = props;
    const type = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_5__["getSchemaType"])(schema);
    const [dependencyMet, setDependencyMet] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        var _a, _b;
        const { dependency } = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_5__["getUiOptions"])(uiSchema !== null && uiSchema !== void 0 ? uiSchema : {}); // Type defs for this function are awful
        if (dependency) {
            setDependencyMet(dependency.value === lodash__WEBPACK_IMPORTED_MODULE_0__["get"]((_a = formContext.formData) !== null && _a !== void 0 ? _a : {}, ['spec', ...((_b = dependency.path) !== null && _b !== void 0 ? _b : [])], '').toString());
        }
    }, [uiSchema, formContext]);
    if (hidden || !dependencyMet) {
        return null;
    }
    const isGroup = _const__WEBPACK_IMPORTED_MODULE_4__["JSON_SCHEMA_GROUP_TYPES"].includes(type);
    return isGroup ? children : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AtomicFieldTemplate, Object.assign({}, props));
};
const ObjectFieldTemplate = ({ idSchema, properties, required, schema, title, uiSchema }) => {
    const { advanced } = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_5__["getUiOptions"])(uiSchema !== null && uiSchema !== void 0 ? uiSchema : {});
    const { normalProperties, advancedProperties } = lodash__WEBPACK_IMPORTED_MODULE_0__["groupBy"](properties !== null && properties !== void 0 ? properties : [], ({ name }) => (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](advanced, name) ? 'advancedProperties' : 'normalProperties'));
    return (properties === null || properties === void 0 ? void 0 : properties.length) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fields__WEBPACK_IMPORTED_MODULE_8__["FieldSet"], { defaultLabel: title, idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-dynamic-form__field-group-content" },
            (normalProperties === null || normalProperties === void 0 ? void 0 : normalProperties.length) > 0 && lodash__WEBPACK_IMPORTED_MODULE_0__["map"](normalProperties, p => p.content),
            (advancedProperties === null || advancedProperties === void 0 ? void 0 : advancedProperties.length) > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AdvancedProperties, { properties: advancedProperties })))) : null;
};
const ArrayFieldTemplate = ({ idSchema, items, onAddClick, required, schema, title, uiSchema }) => {
    const [, label] = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["useSchemaLabel"])(schema, uiSchema, title !== null && title !== void 0 ? title : 'Items');
    let singularLabel = label;
    if (label.match('ss$')) {
    }
    else if (label.match('ies$')) {
        singularLabel = singularLabel.replace(/ies$/, 'y');
    }
    else if (label.match('es$')) {
        if (label.match('oes$') || label.match('ses$') || label.match('xes$') || label.match('ches$') || label.match('shes$')) {
            singularLabel = singularLabel.replace(/es$/, '');
        }
        else {
            singularLabel = singularLabel.replace(/s$/, '');
        }
    }
    else if (label.match('s$')) {
        singularLabel = singularLabel.replace(/s$/, '');
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fields__WEBPACK_IMPORTED_MODULE_8__["FieldSet"], { defaultLabel: label, idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
        lodash__WEBPACK_IMPORTED_MODULE_0__["map"](items !== null && items !== void 0 ? items : [], item => {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-dynamic-form__array-field-group-item", key: item.key },
                item.index > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                item.hasRemove && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-dynamic-form__array-field-group-remove" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `${item.key}_remove-btn`, type: "button", onClick: item.onDropIndexClick(item.index), variant: "link" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], { className: "co-icon-space-r" }),
                        "Remove ",
                        singularLabel))),
                item.children));
        }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `${idSchema.$id}_add-btn`, type: "button", onClick: onAddClick, variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                "Add ",
                singularLabel))));
};
const AdditionalFieldTemplate = ({ idSchema, items, onAddClick, required, schema, title, uiSchema }) => {
    const [, label] = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["useSchemaLabel"])(schema, uiSchema, title !== null && title !== void 0 ? title : 'Items');
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fields__WEBPACK_IMPORTED_MODULE_8__["FieldSet"], { defaultLabel: label, idSchema: idSchema, required: required, schema: schema, uiSchema: uiSchema },
        lodash__WEBPACK_IMPORTED_MODULE_0__["map"](items !== null && items !== void 0 ? items : [], item => {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-dynamic-form__array-field-group-item", key: item.key },
                item.index > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                item.hasRemove && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-dynamic-form__array-field-group-remove" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `${item.key}_remove-btn`, type: "button", onClick: item.onDropIndexClick(item.index), variant: "link" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], { className: "co-icon-space-r" }),
                        "Remove ",
                        label))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_operator_lifecycle_manager_src_components_descriptors_spec_additional_properties__WEBPACK_IMPORTED_MODULE_7__["AdditionalPropertyFields"], { data: item, onChange: item.onDropIndexClick, path: `${idSchema.$id}` }, ' ')));
        }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { id: `${idSchema.$id}_add-btn`, type: "button", onClick: onAddClick, variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                "Add ",
                label))));
};
const ErrorTemplate = ({ errors }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, className: "co-alert co-break-word co-alert--scrollable", variant: "danger", title: "Error" },
    "Fix the above errors:",
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](errors, error => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: error }, error))))));


/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/types.ts":
/*!**********************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/types.ts ***!
  \**********************************************************************/
/*! exports provided: SchemaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaType", function() { return SchemaType; });
var SchemaType;
(function (SchemaType) {
    SchemaType["string"] = "string";
    SchemaType["number"] = "number";
    SchemaType["integer"] = "integer";
    SchemaType["boolean"] = "boolean";
    SchemaType["null"] = "null";
    SchemaType["array"] = "array";
    SchemaType["object"] = "object";
})(SchemaType || (SchemaType = {}));


/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/utils.ts":
/*!**********************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/utils.ts ***!
  \**********************************************************************/
/*! exports provided: useSchemaLabel, useSchemaDescription, getSchemaErrors, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSchemaLabel", function() { return useSchemaLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSchemaDescription", function() { return useSchemaDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaErrors", function() { return getSchemaErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jsonschema-form/lib/utils */ "./node_modules/react-jsonschema-form/lib/utils.js");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_1__);


const UNSUPPORTED_SCHEMA_PROPERTIES = []; // Openshift에서는 oneOf, allOf, anyOf에 대한 schema 무시하도록 해놈. 이거 일단 이유를 모르겠어서 없애놈. 나중에 문제 생기면 다시 봐야할듯.
const useSchemaLabel = (schema, uiSchema, defaultLabel) => {
    var _a;
    const options = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getUiOptions"])(uiSchema !== null && uiSchema !== void 0 ? uiSchema : {});
    const showLabel = (_a = options === null || options === void 0 ? void 0 : options.label) !== null && _a !== void 0 ? _a : true;
    const label = ((options === null || options === void 0 ? void 0 : options.title) || (schema === null || schema === void 0 ? void 0 : schema.title) || defaultLabel);
    return [showLabel, label];
};
const useSchemaDescription = (schema, uiSchema, defaultDescription) => { var _a; return (((_a = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_1__["getUiOptions"])(uiSchema !== null && uiSchema !== void 0 ? uiSchema : {})) === null || _a === void 0 ? void 0 : _a.description) || (schema === null || schema === void 0 ? void 0 : schema.description) || defaultDescription); };
const getSchemaErrors = (schema) => {
    return [
        ...(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](schema)
            ? [
                {
                    title: 'Empty Schema',
                    message: 'Schema is empty.',
                },
            ]
            : []),
        ...lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["intersection"](lodash__WEBPACK_IMPORTED_MODULE_0__["keys"](schema), UNSUPPORTED_SCHEMA_PROPERTIES), unsupportedProperty => ({
            title: 'Unsupported Property',
            message: `Cannot generate form fields for JSON schema with ${unsupportedProperty} property.`,
        })),
    ];
};
// Returns true if a value is not nil and is empty
const definedAndEmpty = value => !lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](value) && lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](value);
// Helper function for prune
// TODO (jon) Make this pure
const pruneRecursive = (current, sample) => {
    const valueIsEmpty = (value, key) => lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](value) || lodash__WEBPACK_IMPORTED_MODULE_0__["isNaN"](value) || (lodash__WEBPACK_IMPORTED_MODULE_0__["isString"](value) && lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](value)) || (lodash__WEBPACK_IMPORTED_MODULE_0__["isObject"](value) && lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](pruneRecursive(value, sample === null || sample === void 0 ? void 0 : sample[key])));
    // Value should be pruned if it is empty and the correspondeing sample is not explicitly
    // defined as an empty value.
    const shouldPrune = (value, key) => valueIsEmpty(value, key) && !definedAndEmpty(sample === null || sample === void 0 ? void 0 : sample[key]);
    // Prune each property of current value that meets the pruning criteria
    lodash__WEBPACK_IMPORTED_MODULE_0__["forOwn"](current, (value, key) => {
        if (shouldPrune(value, key)) {
            delete current[key];
        }
    });
    // remove any leftover undefined values from the delete operation on an array
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"](current)) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["pull"](current, undefined);
    }
    return current;
};
// Deeply remove all empty, NaN, null, or undefined values from an object or array. If a value meets
// the above criteria, but the corresponding sample is explicitly defined as an empty vaolue, it
// will not be pruned.
// Based on https://stackoverflow.com/a/26202058/8895304
const prune = (obj, sample) => {
    return pruneRecursive(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](obj), sample);
};


/***/ }),

/***/ "./packages/console-shared/src/components/dynamic-form/widgets.tsx":
/*!*************************************************************************!*\
  !*** ./packages/console-shared/src/components/dynamic-form/widgets.tsx ***!
  \*************************************************************************/
/*! exports provided: TextWidget, NumberWidget, PasswordWidget, CheckboxWidget, PodCountWidget, K8sResourceWidget, ImagePullPolicyWidget, SelectWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWidget", function() { return TextWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWidget", function() { return NumberWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordWidget", function() { return PasswordWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return CheckboxWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodCountWidget", function() { return PodCountWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K8sResourceWidget", function() { return K8sResourceWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePullPolicyWidget", function() { return ImagePullPolicyWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return SelectWidget; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./const */ "./packages/console-shared/src/components/dynamic-form/const.ts");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-jsonschema-form/lib/utils */ "./node_modules/react-jsonschema-form/lib/utils.js");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__);








const TextWidget = props => {
    const { disabled = false, id, onBlur, onChange, onFocus, readonly = false, required = false, schema = {}, value = '' } = props;
    const schemaType = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__["getSchemaType"])(schema);
    return _const__WEBPACK_IMPORTED_MODULE_6__["JSON_SCHEMA_NUMBER_TYPES"].includes(schemaType) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NumberWidget, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", disabled: disabled, id: id, key: id, onBlur: onBlur && (event => onBlur(id, event.target.value)), onChange: ({ currentTarget }) => onChange(currentTarget.value), onFocus: onFocus && (event => onFocus(id, event.target.value)), readOnly: readonly, required: required, type: "text", value: value });
};
const NumberWidget = ({ value, id, onChange }) => {
    const numberValue = lodash__WEBPACK_IMPORTED_MODULE_0__["toNumber"](value);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", id: id, key: id, onChange: ({ currentTarget }) => onChange(currentTarget.value !== '' ? lodash__WEBPACK_IMPORTED_MODULE_0__["toNumber"](currentTarget.value) : ''), type: "number", value: lodash__WEBPACK_IMPORTED_MODULE_0__["isFinite"](numberValue) ? numberValue : '' });
};
const PasswordWidget = ({ value = '', id, onChange }) => {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", key: id, id: id, type: "password", onChange: ({ currentTarget }) => onChange(currentTarget.value), value: value });
};
const CheckboxWidget = ({ value = false, id, label, onChange, required }) => {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], { id: id, key: id, isChecked: value, label: label, required: required, onChange: checked => onChange(checked) });
};
const PodCountWidget = ({ value, id, onChange }) => {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["NumberSpinner"], { id: id, className: "pf-c-form-control", value: value, onChange: ({ currentTarget }) => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](currentTarget.value)), changeValueBy: operation => onChange(lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value) + operation), autoFocus: true, required: true });
};
const K8sResourceWidget = ({ value, id, label, options, formContext, onChange }) => {
    const { model, groupVersionKind } = options;
    const { namespace } = formContext;
    const selectedKey = value ? `${value}-${model.kind}` : null;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, !lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](model) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ListDropdown"], { key: id, id: id, resources: [{ kind: groupVersionKind, namespace: model.namespaced ? namespace : null }], desc: label, placeholder: `Select ${model.label}`, onChange: next => onChange(next), selectedKey: selectedKey }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
        "Cluster does not have resource ",
        groupVersionKind));
};
const ImagePullPolicyWidget = ({ id, value, onChange }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], { id: id, currentValue: value, items: lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["ImagePullPolicy"]).map(policy => ({
            value: policy,
            title: policy,
        })), onChange: ({ currentTarget }) => onChange(currentTarget.value) }));
};
const SelectWidget = ({ id, label, onChange, options, schema, value }) => {
    const { enumOptions = [], title } = options;
    const items = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](enumOptions, (itemAccumulator, option) => {
        return Object.assign(Object.assign({}, itemAccumulator), { [option.label]: option.value });
    }, {});
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], { id: id, key: id, title: `Select ${title || (schema === null || schema === void 0 ? void 0 : schema.title) || label}`, selectedKey: value, items: items, onChange: val => onChange(val) });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    BaseInput: TextWidget,
    CheckboxWidget,
    ImagePullPolicyWidget,
    K8sResourceWidget,
    NumberWidget,
    PasswordWidget,
    PodCountWidget,
    SelectWidget,
    TextWidget,
    int32: NumberWidget,
    int64: NumberWidget,
});


/***/ }),

/***/ "./packages/console-shared/src/components/synced-editor/editor-toggle.tsx":
/*!********************************************************************************!*\
  !*** ./packages/console-shared/src/components/synced-editor/editor-toggle.tsx ***!
  \********************************************************************************/
/*! exports provided: EditorType, EditorToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorType", function() { return EditorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorToggle", function() { return EditorToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./packages/console-shared/src/components/synced-editor/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);



var EditorType;
(function (EditorType) {
    EditorType["Form"] = "form";
    EditorType["YAML"] = "yaml";
})(EditorType || (EditorType = {}));
const EditorToggle = ({ value, onChange }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-synced-editor__editor-toggle" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], { label: "Configure via:", currentValue: value, inline: true, items: [
                {
                    value: EditorType.Form,
                    title: 'Form View',
                },
                {
                    value: EditorType.YAML,
                    title: 'YAML View',
                },
            ], onChange: ({ currentTarget }) => onChange(currentTarget.value) })));
};


/***/ }),

/***/ "./packages/console-shared/src/components/synced-editor/index.tsx":
/*!************************************************************************!*\
  !*** ./packages/console-shared/src/components/synced-editor/index.tsx ***!
  \************************************************************************/
/*! exports provided: YAML_TO_JS_OPTIONS, SyncedEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAML_TO_JS_OPTIONS", function() { return YAML_TO_JS_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncedEditor", function() { return SyncedEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _editor_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-toggle */ "./packages/console-shared/src/components/synced-editor/editor-toggle.tsx");
/* harmony import */ var _utils_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/yaml */ "./packages/console-shared/src/utils/yaml.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");





const YAML_KEY_ORDER = ['apiVerion', 'kind', 'metadata', 'spec', 'status'];
const YAML_TO_JS_OPTIONS = {
    skipInvalid: true,
    sortKeys: (a, b) => lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](YAML_KEY_ORDER, a) - lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](YAML_KEY_ORDER, b),
};
// Provides toggling and syncing between a form and yaml editor. The formData state is the source
// of truth. Both the form editor and the yaml editor update the formData state. Here's the basic logic of this component:
// In the form view:
//   - formData is both rendered and updated by the form component
//   - on toggle to YAML editor, yaml is parsed from current formData state.
// In the YAML view:
//   - on each yaml change, attempt to parse yaml to js:
//       - If it fails, nothing happens. formData remains unchanged.
//       - If successful, formData is updated to resulting js
//   - on toggle to form view, no action needs to be taken to sync because formData has remained up to date with each yaml change
//
//  This means that when switching from YAML to Form, you can lose changes if the YAML editor contains unparsable YAML
//  TODO Add an extra step when switching from yaml to form to warn user if they are about to lose changes.
const SyncedEditor = ({ context = {}, FormEditor, initialType = _editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].Form, initialData = {}, onChangeEditorType = lodash__WEBPACK_IMPORTED_MODULE_1__["noop"], onChange = lodash__WEBPACK_IMPORTED_MODULE_1__["noop"], prune, YAMLEditor, supplyEditorToggle = true }) => {
    const { formContext, yamlContext } = context;
    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialData);
    const [yaml, setYAML] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_utils_yaml__WEBPACK_IMPORTED_MODULE_3__["safeJSToYAML"])(initialData));
    const [type, setType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialType);
    const [safeToSwitch, setSafeToSwitch] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [yamlWarning, setYAMLWarning] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const handleFormDataChange = (newFormData = {}) => {
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](newFormData, formData)) {
            setFormData(newFormData);
            onChange(newFormData);
        }
    };
    const handleYAMLChange = (newYAML = '') => {
        Object(_utils_yaml__WEBPACK_IMPORTED_MODULE_3__["asyncYAMLToJS"])(newYAML)
            .then(js => {
            setSafeToSwitch(true);
            handleFormDataChange(js);
        })
            .catch(() => setSafeToSwitch(false));
    };
    const changeEditorType = (newType) => {
        setType(newType);
        onChangeEditorType(newType);
    };
    const handleToggleToForm = () => {
        if (safeToSwitch) {
            changeEditorType(_editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].Form);
        }
        else {
            setYAMLWarning(true);
        }
    };
    const handleToggleToYAML = () => {
        var _a;
        setYAML(Object(_utils_yaml__WEBPACK_IMPORTED_MODULE_3__["safeJSToYAML"])((_a = prune === null || prune === void 0 ? void 0 : prune(formData)) !== null && _a !== void 0 ? _a : formData, yaml, YAML_TO_JS_OPTIONS));
        changeEditorType(_editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].YAML);
    };
    const onClickYAMLWarningConfirm = () => {
        setSafeToSwitch(true);
        setYAMLWarning(false);
        changeEditorType(_editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].Form);
    };
    const onClickYAMLWarningCancel = () => {
        setYAMLWarning(false);
    };
    const onChangeType = newType => {
        switch (newType) {
            case _editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].YAML:
                handleToggleToYAML();
                break;
            case _editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].Form:
                handleToggleToForm();
                break;
            default:
                break;
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        supplyEditorToggle ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorToggle"], { value: type, onChange: onChangeType }) : null,
        yamlWarning && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { className: "co-synced-editor__yaml-warning", variant: "danger", isInline: true, title: "Invalid YAML cannot be persisted" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Switching to Form View will delete any invalid YAML."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "danger", onClick: onClickYAMLWarningConfirm }, "Switch and Delete"),
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "secondary", onClick: onClickYAMLWarningCancel }, "Cancel"))),
        type === _editor_toggle__WEBPACK_IMPORTED_MODULE_2__["EditorType"].Form ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormEditor, Object.assign({ formData: formData, onChange: handleFormDataChange, prune: prune }, formContext)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](YAMLEditor, Object.assign({ initialYAML: yaml, onChange: handleYAMLChange }, yamlContext))));
};


/***/ }),

/***/ "./packages/console-shared/src/components/synced-editor/styles.scss":
/*!**************************************************************************!*\
  !*** ./packages/console-shared/src/components/synced-editor/styles.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/console-shared/src/utils/yaml.ts":
/*!***************************************************!*\
  !*** ./packages/console-shared/src/utils/yaml.ts ***!
  \***************************************************/
/*! exports provided: safeJSToYAML, safeYAMLToJS, asyncJSToYAML, asyncYAMLToJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJSToYAML", function() { return safeJSToYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeYAMLToJS", function() { return safeYAMLToJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncJSToYAML", function() { return asyncJSToYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncYAMLToJS", function() { return asyncYAMLToJS; });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_0__);

// Safely parse js obj to yaml. Returns fallback (emtpy string by default) on exception.
const safeJSToYAML = (js, fallback = '', options = {}) => {
    try {
        return Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(js, options);
    }
    catch (_a) {
        return fallback;
    }
};
// Safely parse yaml to js object. Returns fallback (empty object by default) on exception.
const safeYAMLToJS = (yaml, fallback = {}, options = {}) => {
    try {
        return Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(yaml, options);
    }
    catch (_a) {
        return fallback;
    }
};
const asyncJSToYAML = (js, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            const yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeDump"])(js, options);
            resolve(yaml);
        }
        catch (e) {
            reject(e);
        }
    });
};
const asyncYAMLToJS = (yaml, options = {}) => {
    return new Promise((resolve, reject) => {
        try {
            const js = Object(js_yaml__WEBPACK_IMPORTED_MODULE_0__["safeLoad"])(yaml, options);
            resolve(js);
        }
        catch (e) {
            reject(e);
        }
    });
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/additional-properties.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/additional-properties.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: AdditionalPropertyFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalPropertyFields", function() { return AdditionalPropertyFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




const AdditionalPropertyFields = props => {
    let { data, onChange } = props;
    const obj = data;
    const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](obj).map(cur => ({ [cur]: obj[cur] })));
    const onAddProperty = () => {
        setItems(prev => items.concat({ '': '' }));
    };
    const onRemoveProperty = idx => {
        setItems(items.filter((cur, index) => idx !== index));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { id: `add-btn`, type: "button", onClick: onAddProperty, variant: "link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], { className: "co-icon-space-r" }),
            "Add Property"),
        items.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { marginTop: '10px' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" }, "Key"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" }, "Value"))),
        items.length > 0 && items.map((cur, idx) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AdditionalPropertyItem, { key: idx, id: `property-${idx}`, index: idx, items: items, data: cur, onChange: onChange, onRemove: onRemoveProperty }))));
};
const AdditionalPropertyItem = props => {
    const { index, items, data, onChange, onRemove } = props;
    const [additionalKey, setKey] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object.keys(data)[0]);
    const [additionalValue, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object.values(data)[0] || ' ');
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        setKey(Object.keys(data)[0]);
        setValue(Object.values(data)[0]);
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const result = {};
        items.forEach(cur => {
            result[Object.keys(cur)[0]] = Object.values(cur)[0];
        });
        return onChange(result);
    }, [additionalKey, additionalValue]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: additionalKey, onChange: e => {
                    const value = e.target.value;
                    setKey(value);
                    console.log(value);
                    items.splice(index, 1, { [value]: additionalValue });
                }, id: additionalKey, name: additionalKey, type: "text", className: "pf-c-form-control", key: `key-${index}` })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-4" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: additionalValue, onChange: e => {
                    const value = e.target.value;
                    setValue(value);
                    console.log(value);
                    items.splice(index, 1, { [additionalKey]: value });
                }, id: 'value' + additionalValue, type: "text", className: "pf-c-form-control", key: `value-${index}` })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { id: `btn-property-remove-${index}`, type: "button", onClick: () => onRemove(index), variant: "link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], { className: "co-icon-space-r" }),
            "Remove Property")));
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/affinity.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/affinity.tsx ***!
  \******************************************************************************************/
/*! exports provided: DEFAULT_NODE_AFFINITY, DEFAULT_POD_AFFINITY, NodeAffinity, PodAffinity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NODE_AFFINITY", function() { return DEFAULT_NODE_AFFINITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_POD_AFFINITY", function() { return DEFAULT_POD_AFFINITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeAffinity", function() { return NodeAffinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodAffinity", function() { return PodAffinity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _match_expressions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./match-expressions */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/match-expressions.tsx");





var AffinityRuleType;
(function (AffinityRuleType) {
    AffinityRuleType["Preferred"] = "Preferred";
    AffinityRuleType["Required"] = "Required";
})(AffinityRuleType || (AffinityRuleType = {}));
const REQUIRED_TOOLTIP = 'Required rules must be met before a pod can be scheduled on a node.';
const PREFERRED_TOOLTIP = 'Preferred rules specify that, if the rule is met, the scheduler tries to enforce the rules, but does not guarantee enforcement.';
const ALLOWED_MATCH_EXPRESSION_OPERATORS = [
    'In',
    'NotIn',
    'Exists',
    'DoesNotExist',
];
const DEFAULT_MATCH_EXPRESSION = {
    key: '',
    operator: 'Exists',
};
const DEFAULT_NODE_AFFINITY = {
    requiredDuringSchedulingIgnoredDuringExecution: {
        nodeSelectorTerms: [{ matchExpressions: [lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](DEFAULT_MATCH_EXPRESSION)] }],
    },
    preferredDuringSchedulingIgnoredDuringExecution: [
        {
            weight: 1,
            preference: { matchExpressions: [lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](DEFAULT_MATCH_EXPRESSION)] },
        },
    ],
};
const DEFAULT_POD_AFFINITY = {
    requiredDuringSchedulingIgnoredDuringExecution: [
        {
            topologyKey: 'failure-domain.beta.kubernetes.io/zone',
            labelSelector: { matchExpressions: [lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](DEFAULT_MATCH_EXPRESSION)] },
        },
    ],
    preferredDuringSchedulingIgnoredDuringExecution: [
        {
            weight: 1,
            podAffinityTerm: {
                topologyKey: 'failure-domain.beta.kubernetes.io/zone',
                labelSelector: { matchExpressions: [lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](DEFAULT_MATCH_EXPRESSION)] },
            },
        },
    ],
};
const NodeAffinityRule = ({ key, type, showRemoveButton = false, onClickRemove, onChange = () => { }, rule, }) => {
    const { weight, selector } = rule;
    const onChangeMatchExpressions = (matchExpressions) => onChange(Object.assign(Object.assign({}, rule), { selector: Object.assign(Object.assign({}, selector), { matchExpressions }) }));
    const onChangeWeight = (e) => {
        var _a;
        const parsedValue = lodash__WEBPACK_IMPORTED_MODULE_1__["parseInt"]((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
        onChange(Object.assign(Object.assign({}, rule), { weight: lodash__WEBPACK_IMPORTED_MODULE_1__["isFinite"](parsedValue) ? parsedValue : undefined }));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-affinity-term" },
        showRemoveButton && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", className: "co-affinity-term__remove", onClick: onClickRemove, variant: "link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], { className: "co-icon-space-r" }),
            "Remove ",
            type)),
        type === AffinityRuleType.Preferred && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-affinity-term__weight-input" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: `preference-${key}` }, "Weight"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "number", value: weight, onChange: onChangeWeight, required: true }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_match_expressions__WEBPACK_IMPORTED_MODULE_4__["MatchExpressions"], { matchExpressions: selector === null || selector === void 0 ? void 0 : selector.matchExpressions, onChange: onChangeMatchExpressions, allowedOperators: ALLOWED_MATCH_EXPRESSION_OPERATORS, uid: key })));
};
const NodeAffinity = ({ affinity, onChange, uid = '' }) => {
    var _a;
    const requiredRules = ((_a = affinity === null || affinity === void 0 ? void 0 : affinity.requiredDuringSchedulingIgnoredDuringExecution) === null || _a === void 0 ? void 0 : _a.nodeSelectorTerms) || [];
    const preferredRules = (affinity === null || affinity === void 0 ? void 0 : affinity.preferredDuringSchedulingIgnoredDuringExecution) || [];
    const addRequiredRule = () => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { requiredDuringSchedulingIgnoredDuringExecution: {
            nodeSelectorTerms: [...requiredRules, { matchExpressions: [] }],
        } }));
    const removeRequiredRule = (atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { requiredDuringSchedulingIgnoredDuringExecution: {
            nodeSelectorTerms: requiredRules.filter((_v, index) => index !== atIndex),
        } }));
    const updateRequiredRules = ({ selector }, atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { requiredDuringSchedulingIgnoredDuringExecution: {
            nodeSelectorTerms: requiredRules.map((current, index) => index === atIndex ? selector : current),
        } }));
    const addPreferredRule = () => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { preferredDuringSchedulingIgnoredDuringExecution: [
            ...preferredRules,
            { weight: 1, preference: { matchExpressions: [] } },
        ] }));
    const removePreferredRule = (atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { preferredDuringSchedulingIgnoredDuringExecution: preferredRules.filter((_v, index) => index !== atIndex) }));
    const updatePreferredRules = ({ selector: preference, weight }, atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { preferredDuringSchedulingIgnoredDuringExecution: preferredRules.map((current, index) => index === atIndex ? { preference, weight } : current) }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: REQUIRED_TOOLTIP },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Required During Scheduling Ignored During Execution")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            requiredRules.map((selector, requiredIndex) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NodeAffinityRule
            // Have to use array index in the key bc any other unique id whould have to use editable fields.
            // eslint-disable-next-line react/no-array-index-key
            , { 
                // Have to use array index in the key bc any other unique id whould have to use editable fields.
                // eslint-disable-next-line react/no-array-index-key
                key: `${uid}-node-affinity-required-${requiredIndex}`, onChange: (rule) => updateRequiredRules(rule, requiredIndex), onClickRemove: () => removeRequiredRule(requiredIndex), rule: { selector }, showRemoveButton: true, type: AffinityRuleType.Required }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: addRequiredRule, variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                    "Add Required"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: PREFERRED_TOOLTIP },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Preferred During Scheduling Ignored During Execution")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            preferredRules.map(({ preference: selector, weight }, preferredIndex) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NodeAffinityRule
            // Have to use array index in the key bc any other unique id whould have to use editable fields.
            // eslint-disable-next-line react/no-array-index-key
            , { 
                // Have to use array index in the key bc any other unique id whould have to use editable fields.
                // eslint-disable-next-line react/no-array-index-key
                key: `${uid}-node-affinity-preferred-${preferredIndex}`, onChange: (rule) => updatePreferredRules(rule, preferredIndex), onClickRemove: () => removePreferredRule(preferredIndex), rule: { selector, weight }, showRemoveButton: true, type: AffinityRuleType.Preferred }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: addPreferredRule, variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                    "Add Preferred")))));
};
const PodAffinityRule = ({ key, onChange = () => { }, onClickRemove = () => { }, showRemoveButton = false, rule, type, }) => {
    const { podAffinityTerm, weight } = rule;
    const selector = (podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.labelSelector) || {};
    const topologyKey = podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.topologyKey;
    const onChangeWeight = (e) => {
        var _a;
        const parsed = lodash__WEBPACK_IMPORTED_MODULE_1__["parseInt"]((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value);
        onChange(Object.assign(Object.assign({}, rule), { weight: lodash__WEBPACK_IMPORTED_MODULE_1__["isFinite"](parsed) ? parsed : undefined }));
    };
    const onChangeTopologyKey = (e) => {
        var _a;
        return onChange(Object.assign(Object.assign({}, rule), { podAffinityTerm: Object.assign(Object.assign({}, podAffinityTerm), { topologyKey: (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value }) }));
    };
    const onChangeMatchExpressions = (matchExpressions) => onChange(Object.assign(Object.assign({}, rule), { podAffinityTerm: Object.assign(Object.assign({}, podAffinityTerm), { labelSelector: Object.assign(Object.assign({}, selector), { matchExpressions }) }) }));
    return podAffinityTerm ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-affinity-term" },
        showRemoveButton && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", className: "co-affinity-term__remove", onClick: onClickRemove, variant: "link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], { className: "co-icon-space-r" }),
            "Remove ",
            type)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-affinity-term__topology" },
            type === AffinityRuleType.Preferred && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-affinity-term__weight-input" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: `preference-${key}` }, "Weight"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "number", value: weight, onChange: onChangeWeight, required: true }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-affinity-term__topology-input" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: `topology-${key}` }, "Topology Key"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { id: `topology-${key}`, className: "pf-c-form-control", type: "text", value: topologyKey, onChange: onChangeTopologyKey, required: true }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_match_expressions__WEBPACK_IMPORTED_MODULE_4__["MatchExpressions"], { matchExpressions: selector === null || selector === void 0 ? void 0 : selector.matchExpressions, onChange: onChangeMatchExpressions, allowedOperators: ALLOWED_MATCH_EXPRESSION_OPERATORS, uid: key }))) : null;
};
const PodAffinity = ({ affinity, onChange, uid = '' }) => {
    const { requiredDuringSchedulingIgnoredDuringExecution: requiredRules = [], preferredDuringSchedulingIgnoredDuringExecution: preferredRules = [], } = affinity || {};
    const addRequiredRule = () => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { requiredDuringSchedulingIgnoredDuringExecution: [
            ...requiredRules,
            { topologyKey: '', labelSelector: { matchExpressions: [] } },
        ] }));
    const removeRequiredRule = (atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { requiredDuringSchedulingIgnoredDuringExecution: requiredRules.filter((_v, index) => atIndex !== index) }));
    const updateRequiredRules = ({ podAffinityTerm: next }, atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { requiredDuringSchedulingIgnoredDuringExecution: requiredRules.map((current, index) => index === atIndex ? next : current) }));
    const addPreferredRule = () => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { preferredDuringSchedulingIgnoredDuringExecution: [
            ...preferredRules,
            {
                weight: 1,
                podAffinityTerm: { topologyKey: '', labelSelector: { matchExpressions: [] } },
            },
        ] }));
    const removePreferredRule = (atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { preferredDuringSchedulingIgnoredDuringExecution: preferredRules.filter((_v, index) => atIndex !== index) }));
    const updatePreferredRules = (next, atIndex) => onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, affinity), { preferredDuringSchedulingIgnoredDuringExecution: preferredRules.map((current, index) => index === atIndex ? next : current) }));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: REQUIRED_TOOLTIP },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Required During Scheduling Ignored During Execution")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            lodash__WEBPACK_IMPORTED_MODULE_1__["map"](requiredRules, (podAffinityTerm, ruleIndex) => (
            // Have to use array index in the key bc any other unique id whould have to use editable fields.
            // eslint-disable-next-line react/no-array-index-key
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PodAffinityRule, { key: `${uid}-pod-affinity-required-${ruleIndex}`, rule: { podAffinityTerm }, onChange: (rule) => updateRequiredRules(rule, ruleIndex), onClickRemove: () => removeRequiredRule(ruleIndex), showRemoveButton: true, type: AffinityRuleType.Required }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: addRequiredRule, variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                    "Add Required"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: PREFERRED_TOOLTIP },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Preferred During Scheduling Ignored During Execution")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            preferredRules.map((preferredRule, ruleIndex) => {
                // Have to use array index in the key bc any other unique id whould have to use editable fields.
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PodAffinityRule
                // eslint-disable-next-line react/no-array-index-key
                , { 
                    // eslint-disable-next-line react/no-array-index-key
                    key: `${uid}-pod-affinity-preferred-${ruleIndex}`, onChange: (rule) => updatePreferredRules(rule, ruleIndex), onClickRemove: () => removePreferredRule(ruleIndex), showRemoveButton: true, rule: preferredRule, type: AffinityRuleType.Preferred }));
            }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: addPreferredRule, variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                    "Add Preferred")))));
};
NodeAffinity.displayName = 'NodeAffinity';
PodAffinity.displayName = 'PodAffinity';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/match-expressions.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/match-expressions.tsx ***!
  \***************************************************************************************************/
/*! exports provided: MatchExpressions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchExpressions", function() { return MatchExpressions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");




const ALL_OPERATORS = [
    'DoesNotExist',
    'Equals',
    'Exists',
    'In',
    'NotEqual',
    'NotIn',
];
const MatchExpression = ({ expression, onChange = () => { }, allowedOperators = ALL_OPERATORS, onClickRemove = () => { }, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row key-operator-value__row" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-4 col-xs-5 key-operator-value__name-field" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "key-operator-value__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Key"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", value: expression.key, onChange: (e) => onChange(Object.assign(Object.assign({}, expression), { key: e.target.value })) })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 col-xs-5 key-operator-value__operator-field" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "key-operator-value__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Operator"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], { dropDownClassName: "dropdown--full-width", items: allowedOperators.reduce((acc, o) => (Object.assign(Object.assign({}, acc), { [o]: o })), {}), onChange: (operator) => onChange(Object.assign(Object.assign({}, expression), { operator })), selectedKey: expression.operator, title: expression.operator })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 col-xs-5 key-operator-value__value-field key-operator-value__value-field--stacked" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "key-operator-value__heading hidden-md hidden-lg text-secondary text-uppercase" }, "Value"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", value: expression === null || expression === void 0 ? void 0 : expression.value, onChange: (e) => { var _a; return onChange(Object.assign(Object.assign({}, expression), { value: (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value })); }, readOnly: ['Exists', 'DoesNotExist'].includes(expression.operator) })),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-1 key-operator-value__action key-operator-value__action--stacked" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "key-operator-value__heading key-operator-value__heading-button hidden-md hidden-lg" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "button", onClick: onClickRemove, "aria-label": "Delete", className: "key-operator-value__delete-button", variant: "plain" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], null)))));
const MatchExpressions = ({ matchExpressions = [], onChange = () => { }, // Default to noop
allowedOperators = ALL_OPERATORS, uid = '', }) => {
    const updateExpression = (index, newExpression) => onChange(matchExpressions.map((exp, i) => (i === index ? newExpression : exp)));
    const removeExpression = (index) => onChange(matchExpressions.filter((_exp, i) => i !== index));
    const addExpression = () => onChange([...matchExpressions, { key: '', operator: 'Exists' }]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row key-operator-value__heading hidden-sm hidden-xs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-4 text-secondary text-uppercase" }, "Key"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 text-secondary text-uppercase" }, "Operator"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-md-3 text-secondary text-uppercase" }, "Value")),
        matchExpressions.map((expression, index) => (
        // Have to use array index in the key bc any other unique id whould have to use editable fields.
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MatchExpression
        // eslint-disable-next-line react/no-array-index-key
        , { 
            // eslint-disable-next-line react/no-array-index-key
            key: `${uid}-match-expression-${index}`, expression: expression, allowedOperators: allowedOperators, onClickRemove: () => removeExpression(index), onChange: (newExpression) => updateExpression(index, newExpression) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "button", onClick: addExpression, variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                "Add More"))));
};
MatchExpressions.displayName = 'MatchExpressions';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/spec-descriptor-input.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/descriptors/spec/spec-descriptor-input.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: capabilityFieldMap, capabilityWidgetMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capabilityFieldMap", function() { return capabilityFieldMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capabilityWidgetMap", function() { return capabilityWidgetMap; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form/fields */ "./packages/console-shared/src/components/dynamic-form/fields.tsx");
/* harmony import */ var _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form/widgets */ "./packages/console-shared/src/components/dynamic-form/widgets.tsx");




const capabilityFieldMap = immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].nodeAffinity]: _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__["NodeAffinityField"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].podAffinity]: _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__["PodAffinityField"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].podAntiAffinity]: _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__["PodAffinityField"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].resourceRequirements]: _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__["ResourceRequirementsField"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].updateStrategy]: _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__["UpdateStrategyField"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].booleanSwitch]: _console_shared_src_components_dynamic_form_fields__WEBPACK_IMPORTED_MODULE_2__["BooleanField"],
});
const capabilityWidgetMap = immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].hidden]: 'hidden',
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].imagePullPolicy]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["ImagePullPolicyWidget"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].checkbox]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["CheckboxWidget"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].number]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["NumberWidget"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].password]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["PasswordWidget"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].podCount]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["PodCountWidget"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].text]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["TextWidget"],
    [_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].select]: _console_shared_src_components_dynamic_form_widgets__WEBPACK_IMPORTED_MODULE_3__["SelectWidget"],
});


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/const.ts":
/*!*****************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/const.ts ***!
  \*****************************************************************************/
/*! exports provided: YAML_HELP_TEXT, FORM_HELP_TEXT, DEFAULT_K8S_SCHEMA, REGEXP_K8S_RESOURCE_CAPABILITY, REGEXP_FIELD_DEPENDENCY_CAPABILITY, REGEXP_SELECT_CAPABILITY, REGEXP_K8S_RESOURCE_SUFFIX, REGEXP_SELECT_OPTION, REGEXP_FIELD_DEPENDENCY_PATH_VALUE, HIDDEN_UI_SCHEMA, SORT_WEIGHT_SCALE_1, SORT_WEIGHT_SCALE_2, SORT_WEIGHT_SCALE_3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YAML_HELP_TEXT", function() { return YAML_HELP_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_HELP_TEXT", function() { return FORM_HELP_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_K8S_SCHEMA", function() { return DEFAULT_K8S_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_K8S_RESOURCE_CAPABILITY", function() { return REGEXP_K8S_RESOURCE_CAPABILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FIELD_DEPENDENCY_CAPABILITY", function() { return REGEXP_FIELD_DEPENDENCY_CAPABILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_SELECT_CAPABILITY", function() { return REGEXP_SELECT_CAPABILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_K8S_RESOURCE_SUFFIX", function() { return REGEXP_K8S_RESOURCE_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_SELECT_OPTION", function() { return REGEXP_SELECT_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FIELD_DEPENDENCY_PATH_VALUE", function() { return REGEXP_FIELD_DEPENDENCY_PATH_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDDEN_UI_SCHEMA", function() { return HIDDEN_UI_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_WEIGHT_SCALE_1", function() { return SORT_WEIGHT_SCALE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_WEIGHT_SCALE_2", function() { return SORT_WEIGHT_SCALE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_WEIGHT_SCALE_3", function() { return SORT_WEIGHT_SCALE_3; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _descriptors_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../descriptors/types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form */ "./packages/console-shared/src/components/dynamic-form/index.tsx");



const YAML_HELP_TEXT = 'Create by manually entering YAML or JSON definitions, or by dragging and dropping a file into the editor.';
const FORM_HELP_TEXT = 'Create by completing the form. Default values may be provided by the Operator authors.';
const DEFAULT_K8S_SCHEMA = {
    type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].object,
    properties: {
        metadata: {
            type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].object,
            properties: {
                namespace: { type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].string },
                name: {
                    type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].string,
                    default: 'example',
                },
                labels: {
                    type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].object,
                    properties: {},
                    additionalProperties: { type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].string },
                },
            },
            required: ['name'],
        },
        spec: { type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].object },
        apiVersion: { type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].string },
        kind: { type: _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_2__["SchemaType"].string },
    },
};
const REGEXP_K8S_RESOURCE_CAPABILITY = lodash__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"](_descriptors_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].k8sResourcePrefix);
const REGEXP_FIELD_DEPENDENCY_CAPABILITY = lodash__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"](_descriptors_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].fieldDependency);
const REGEXP_SELECT_CAPABILITY = lodash__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"](_descriptors_types__WEBPACK_IMPORTED_MODULE_1__["SpecCapability"].select);
const REGEXP_K8S_RESOURCE_SUFFIX = new RegExp(`^${REGEXP_K8S_RESOURCE_CAPABILITY}(?:core~v1~)?(.*)$`);
const REGEXP_SELECT_OPTION = new RegExp(`${REGEXP_SELECT_CAPABILITY}(.*)$`);
const REGEXP_FIELD_DEPENDENCY_PATH_VALUE = new RegExp(`^${REGEXP_FIELD_DEPENDENCY_CAPABILITY}([^:]*):(.*)$`);
const HIDDEN_UI_SCHEMA = {
    'ui:widget': 'hidden',
    'ui:options': { label: false },
};
const SORT_WEIGHT_BASE = 10;
const SORT_WEIGHT_SCALE_1 = SORT_WEIGHT_BASE ** 1;
const SORT_WEIGHT_SCALE_2 = SORT_WEIGHT_BASE ** 2;
const SORT_WEIGHT_SCALE_3 = SORT_WEIGHT_BASE ** 3;


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/operand-form.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/operand-form.tsx ***!
  \*************************************************************************************/
/*! exports provided: OperandForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandForm", function() { return OperandForm; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form */ "./packages/console-shared/src/components/dynamic-form/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/operator-lifecycle-manager/src/components/operand/utils.ts");
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







const OperandForm = ({ csv, formData, match, model, next, onChange, providedAPI, prune, schema }) => {
    const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]([]);
    // const [formData, setFormData] = React.useState(initialData);
    const processFormData = (_a) => {
        var _b, _c;
        var { metadata } = _a, rest = __rest(_a, ["metadata"]);
        const data = Object.assign({ metadata: Object.assign(Object.assign({}, metadata), (((_b = match === null || match === void 0 ? void 0 : match.params) === null || _b === void 0 ? void 0 : _b.ns) && model.namespaced && { namespace: match.params.ns })) }, rest);
        return (_c = prune === null || prune === void 0 ? void 0 : prune(data)) !== null && _c !== void 0 ? _c : data;
    };
    const handleSubmit = ({ formData: submitFormData }) => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["k8sCreate"])(model, processFormData(submitFormData))
            .then(() => {
            if (next) {
                next += `/${submitFormData.metadata.name}`;
                _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(next);
            }
        })
            .catch(e => setErrors([e.message]));
    };
    const uiSchema = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](() => Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getUISchema"])(schema, providedAPI), [schema, providedAPI]);
    Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useScrollToTopOnMount"])();
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "col-md-0 col-md-push-12 col-lg-1 col-lg-push-11" }, csv && providedAPI && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { marginBottom: '30px' } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_index__WEBPACK_IMPORTED_MODULE_4__["ClusterServiceVersionLogo"], { displayName: providedAPI.displayName, icon: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](csv, 'spec.icon[0]'), provider: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](csv, 'spec.provider') }),
                providedAPI.description))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "col-md-12 col-md-pull-0 col-lg-11 col-lg-pull-1" },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_5__["DynamicForm"], { noValidate: true, errors: errors, formContext: { namespace: match.params.ns }, uiSchema: uiSchema, formData: formData, onChange: onChange, onError: setErrors, onSubmit: handleSubmit, schema: schema })))));
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/operand-yaml.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/operand-yaml.tsx ***!
  \*************************************************************************************/
/*! exports provided: OperandYAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperandYAML", function() { return OperandYAML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_create_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/create-yaml */ "./public/components/create-yaml.tsx");


/**
 * Component which wraps the YAML editor to ensure the templates are added from the `ClusterServiceVersion` annotations.
 */
const OperandYAML = ({ match, onChange, next, initialYAML = '', }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_create_yaml__WEBPACK_IMPORTED_MODULE_1__["CreateYAML"], Object.assign({ hideHeader: true, match: match, onChange: onChange, template: initialYAML }, (next && { resourceObjPath: () => next }))));
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/utils.ts":
/*!*****************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/utils.ts ***!
  \*****************************************************************************/
/*! exports provided: descriptorPathToUISchemaPath, jsonSchemaHas, hideAllExistingProperties, hasNoFields, getDefaultUISchema, capabilitiesToUISchema, getJSONSchemaOrder, descriptorsToUISchema, getUISchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "descriptorPathToUISchemaPath", function() { return descriptorPathToUISchemaPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonSchemaHas", function() { return jsonSchemaHas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllExistingProperties", function() { return hideAllExistingProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasNoFields", function() { return hasNoFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultUISchema", function() { return getDefaultUISchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capabilitiesToUISchema", function() { return capabilitiesToUISchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJSONSchemaOrder", function() { return getJSONSchemaOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "descriptorsToUISchema", function() { return descriptorsToUISchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISchema", function() { return getUISchema; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _descriptors_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../descriptors/types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _descriptors_spec_spec_descriptor_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../descriptors/spec/spec-descriptor-input */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/spec-descriptor-input.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const */ "./packages/operator-lifecycle-manager/src/components/operand/const.ts");
/* harmony import */ var _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form */ "./packages/console-shared/src/components/dynamic-form/index.tsx");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-jsonschema-form/lib/utils */ "./node_modules/react-jsonschema-form/lib/utils.js");
/* harmony import */ var react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form/utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");










// Transform a path string from a descriptor to a JSON schema path array
const descriptorPathToUISchemaPath = (path) => {
    var _a;
    return ((_a = lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](path)) !== null && _a !== void 0 ? _a : []).map(subPath => {
        return /^\d+$/.test(subPath) ? 'items' : subPath;
    });
};
// Determine if a given path is defined on a JSONSchema
const jsonSchemaHas = (jsonSchema, schemaPath) => {
    var _a, _b;
    const [next, ...rest] = schemaPath;
    const nextSchema = (_a = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema[next]) !== null && _a !== void 0 ? _a : (_b = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.properties) === null || _b === void 0 ? void 0 : _b[next];
    if (rest.length && !!nextSchema) {
        return jsonSchemaHas(nextSchema, rest);
    }
    return !!nextSchema;
};
// Applies a hidden widget and label configuration to every property of the given schema.
// This is useful for whitelisting only a few schema properties when all properties are not known.
const hideAllExistingProperties = (schema) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](schema === null || schema === void 0 ? void 0 : schema.properties, (acc, _unused, propertyName) => (Object.assign(Object.assign({}, acc), { [propertyName]: _const__WEBPACK_IMPORTED_MODULE_5__["HIDDEN_UI_SCHEMA"] })), {});
};
// Determine if a schema will produce an empty form field.
const hasNoFields = (jsonSchema = {}) => {
    var _a;
    // If schema is empty or has unsupported properties, it will not render any fields on the form
    if (Object(_console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_8__["getSchemaErrors"])(jsonSchema).length > 0) {
        return true;
    }
    const type = (_a = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__["getSchemaType"])(jsonSchema)) !== null && _a !== void 0 ? _a : '';
    const handleArray = () => {
        return hasNoFields(jsonSchema.items);
    };
    const handleObject = () => {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["every"](jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.properties, hasNoFields) && !(jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.additionalProperties);
        //  && hasNoFields(jsonSchema?.additionalProperties as JSONSchema6);
    };
    switch (type) {
        case _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__["SchemaType"].array:
            return handleArray();
        case _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__["SchemaType"].object:
            return handleObject();
        // case '':
        //   return true; // type이 없는 parameter에 경우 form editor 안그리는 로직 있던 거 제거
        default:
            return false;
    }
};
// Map json schema to default ui schema
const getDefaultUISchema = (jsonSchema, jsonSchemaName) => {
    const type = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__["getSchemaType"])(jsonSchema !== null && jsonSchema !== void 0 ? jsonSchema : {});
    if (hasNoFields(jsonSchema)) {
        return _const__WEBPACK_IMPORTED_MODULE_5__["HIDDEN_UI_SCHEMA"];
    }
    if (!!(jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.additionalProperties)) {
        if (jsonSchemaName.toLowerCase().indexOf('label') >= 0 || jsonSchemaName.toLowerCase().indexOf('annotation') >= 0 || jsonSchemaName.toLowerCase().indexOf('selector') >= 0) {
            return {
                'ui:field': 'LabelsField',
            };
        }
        return {
            'ui:field': 'AdditionalPropertyField',
        };
    }
    else if ((jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema['x-kubernetes-int-or-string']) || (jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema['anyOf'])) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(jsonSchema.anyOf) &&
            jsonSchema.anyOf.every(cur => {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(cur === null || cur === void 0 ? void 0 : cur['type'])) {
                    return cur['type'][0] === 'string' || cur['type'][0] === 'number' || cur['type'][0] === 'null' || cur['type'][0] === 'integer';
                }
                else if (cur === null || cur === void 0 ? void 0 : cur['type']) {
                    return cur['type'] === 'string' || cur['type'] === 'number' || cur['type'] === 'null' || cur['type'] === 'integer';
                }
            })) {
            jsonSchema === null || jsonSchema === void 0 ? true : delete jsonSchema.anyOf;
            jsonSchema.type = 'string';
        }
        jsonSchema === null || jsonSchema === void 0 ? true : delete jsonSchema.anyOf;
    }
    else if (jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema['oneOf']) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(jsonSchema.oneOf) &&
            jsonSchema.oneOf.every(cur => {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(cur === null || cur === void 0 ? void 0 : cur['type'])) {
                    return cur['type'][0] === 'string' || cur['type'][0] === 'number' || cur['type'][0] === 'null' || cur['type'][0] === 'integer';
                }
                else if (cur === null || cur === void 0 ? void 0 : cur['type']) {
                    return cur['type'] === 'string' || cur['type'] === 'number' || cur['type'] === 'null' || cur['type'] === 'integer';
                }
            })) {
            jsonSchema === null || jsonSchema === void 0 ? true : delete jsonSchema.oneOf;
            jsonSchema.type = 'string';
        }
        jsonSchema === null || jsonSchema === void 0 ? true : delete jsonSchema.oneOf;
    }
    else if (jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema['allOf']) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(jsonSchema.allOf) &&
            jsonSchema.allOf.every(cur => {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(cur === null || cur === void 0 ? void 0 : cur['type'])) {
                    return cur['type'][0] === 'string' || cur['type'][0] === 'number' || cur['type'][0] === 'null' || cur['type'][0] === 'integer';
                }
                else if (cur === null || cur === void 0 ? void 0 : cur['type']) {
                    return cur['type'] === 'string' || cur['type'] === 'number' || cur['type'] === 'null' || cur['type'] === 'integer';
                }
            })) {
            jsonSchema === null || jsonSchema === void 0 ? true : delete jsonSchema.allOf;
            jsonSchema.type = 'string';
        }
        jsonSchema === null || jsonSchema === void 0 ? true : delete jsonSchema.allOf;
    }
    const handleArray = () => {
        const itemsUISchema = getDefaultUISchema(jsonSchema.items, '');
        return !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](itemsUISchema) ? { items: itemsUISchema } : {};
    };
    const handleObject = () => {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](jsonSchema.properties, (uiSchemaAccumulator, property, name) => {
            const propertyUISchema = getDefaultUISchema(property, name);
            return lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](propertyUISchema)
                ? uiSchemaAccumulator
                : Object.assign(Object.assign({}, (uiSchemaAccumulator !== null && uiSchemaAccumulator !== void 0 ? uiSchemaAccumulator : {})), { [name]: propertyUISchema });
        }, {});
    };
    switch (type) {
        case _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__["SchemaType"].array:
            return handleArray();
        case _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__["SchemaType"].object:
            return handleObject();
        default:
            return {};
    }
};
const k8sResourceCapabilityToUISchema = (capability) => {
    var _a;
    const [, groupVersionKind] = (_a = capability.match(_const__WEBPACK_IMPORTED_MODULE_5__["REGEXP_K8S_RESOURCE_SUFFIX"])) !== null && _a !== void 0 ? _a : [];
    const model = groupVersionKind && Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(groupVersionKind);
    if (model) {
        return {
            'ui:widget': 'K8sResourceWidget',
            'ui:options': { model, groupVersionKind },
        };
    }
    return {};
};
const fieldDependencyCapabilityToUISchema = (capability) => {
    var _a;
    const [, path, value] = (_a = capability.match(_const__WEBPACK_IMPORTED_MODULE_5__["REGEXP_FIELD_DEPENDENCY_PATH_VALUE"])) !== null && _a !== void 0 ? _a : [];
    if (!!path && !!value) {
        return { 'ui:dependency': { path: descriptorPathToUISchemaPath(path), value } };
    }
    return {};
};
const selectCapabilitiesToUISchema = (capabilities) => {
    const items = capabilities.reduce((optionAccumulator, capability) => {
        var _a;
        const [, option] = (_a = capability.match(_const__WEBPACK_IMPORTED_MODULE_5__["REGEXP_SELECT_OPTION"])) !== null && _a !== void 0 ? _a : [];
        return Object.assign(Object.assign({}, optionAccumulator), (option && { [option]: option }));
    }, {});
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](items)) {
        return {
            'ui:field': 'DropdownField',
            'ui:items': items,
        };
    }
    return {};
};
// Given an array of SpecCapabilities, return the appropriate corresponding UISchema
const capabilitiesToUISchema = (capabilities = []) => {
    if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities.length)) {
        return {};
    }
    const k8sResourceCapability = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](capabilities, capability => capability.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_2__["SpecCapability"].k8sResourcePrefix));
    if (k8sResourceCapability) {
        return k8sResourceCapabilityToUISchema(k8sResourceCapability);
    }
    const fieldDependencyCapability = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](capabilities, capability => capability.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_2__["SpecCapability"].fieldDependency));
    if (fieldDependencyCapability) {
        return fieldDependencyCapabilityToUISchema(fieldDependencyCapability);
    }
    const hasSelectOptions = lodash__WEBPACK_IMPORTED_MODULE_0__["some"](capabilities, capability => capability.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_2__["SpecCapability"].select));
    if (hasSelectOptions) {
        return selectCapabilitiesToUISchema(capabilities);
    }
    const field = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](capabilities, (fieldAccumulator, capability) => {
        return fieldAccumulator !== null && fieldAccumulator !== void 0 ? fieldAccumulator : _descriptors_spec_spec_descriptor_input__WEBPACK_IMPORTED_MODULE_4__["capabilityFieldMap"].get(capability);
    }, undefined);
    const widget = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](capabilities, (widgetAccumulator, capability) => {
        return widgetAccumulator !== null && widgetAccumulator !== void 0 ? widgetAccumulator : _descriptors_spec_spec_descriptor_input__WEBPACK_IMPORTED_MODULE_4__["capabilityWidgetMap"].get(capability);
    }, undefined);
    return Object.assign(Object.assign({}, (field && { 'ui:field': field })), (widget && { 'ui:widget': widget }));
};
// Given a JSONSchema and associated uiSchema, create the appropriat ui schema order property for the jsonSchema.
// Orders properties according to the following rules:
//  - required properties with an associated ui schema come first,
//  - required properties without an associated ui schema next,
//  - optional fields with an associated ui schema next,
//  - all other properties
const getJSONSchemaOrder = (jsonSchema, uiSchema) => {
    const type = Object(react_jsonschema_form_lib_utils__WEBPACK_IMPORTED_MODULE_7__["getSchemaType"])(jsonSchema !== null && jsonSchema !== void 0 ? jsonSchema : {});
    const handleArray = () => {
        const descendantOrder = getJSONSchemaOrder(jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.items, uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema.items);
        return !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](descendantOrder) ? { items: descendantOrder } : {};
    };
    const handleObject = () => {
        var _a, _b;
        const propertyNames = lodash__WEBPACK_IMPORTED_MODULE_0__["keys"]((_a = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.properties) !== null && _a !== void 0 ? _a : {});
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](propertyNames)) {
            return {};
        }
        // Map control fields to an array so that  an index can be used to apply a modifier to sort weigths of dependent fields
        const controlProperties = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](uiSchema, (controlPropertyAccumulator, { 'ui:dependency': dependency }) => {
            var _a;
            const control = lodash__WEBPACK_IMPORTED_MODULE_0__["last"]((_a = dependency === null || dependency === void 0 ? void 0 : dependency.path) !== null && _a !== void 0 ? _a : []);
            return !control ? controlPropertyAccumulator : [...controlPropertyAccumulator, control];
        }, []);
        /**
         * Give a property name a sort wieght based on whether it has a descriptor (uiSchema has property), is required, or is a control
         * field for a property with a field dependency. A lower weight means higher sort order. Fields are weighted according to the following criteria:
         *  - Required fields with descriptor - 0 to 999
         *  - Required fields without descriptor 1000 to 1999
         *  - Optional fields with descriptor 2000 to 2999
         *  - Control fields that don't fit any above - 3000 to 3999
         *  - All other fields - Infinity
         *
         * Within each of the above criteria, fields are further weighted based on field dependency:
         *   - Fields without dependency - base weight
         *   - Control field - base weight  + (nth control field) * 100
         *   - Dependent field - corresponding control field weight + 10
         *
         * These weight numbers are arbitrary, but spaced far enough apart to leave room for multiple levels of sorting.
         */
        const getSortWeight = (property) => {
            var _a, _b, _c, _d;
            // This property's control field, if it exists
            const control = lodash__WEBPACK_IMPORTED_MODULE_0__["last"]((_c = (_b = (_a = uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema[property]) === null || _a === void 0 ? void 0 : _a['ui:dependency']) === null || _b === void 0 ? void 0 : _b.path) !== null && _c !== void 0 ? _c : []);
            // A small offset that is added to the base weight so that control fields get sorted last within
            // their appropriate group
            const controlOffset = (controlProperties.indexOf(property) + 1) * _const__WEBPACK_IMPORTED_MODULE_5__["SORT_WEIGHT_SCALE_2"];
            // If this property is a dependent, it's weight is based on it's control property
            if (control) {
                return getSortWeight(control) + controlOffset + _const__WEBPACK_IMPORTED_MODULE_5__["SORT_WEIGHT_SCALE_1"];
            }
            const isRequired = ((_d = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.required) !== null && _d !== void 0 ? _d : []).includes(property);
            const hasDescriptor = uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema[property];
            // Required fields with a desriptor are sorted first (lowest weight).
            if (isRequired && hasDescriptor) {
                return _const__WEBPACK_IMPORTED_MODULE_5__["SORT_WEIGHT_SCALE_3"] + controlOffset;
            }
            // Fields that are required, but have no descriptors get sorted next
            if (isRequired) {
                return _const__WEBPACK_IMPORTED_MODULE_5__["SORT_WEIGHT_SCALE_3"] * 2 + controlOffset;
            }
            // Optional fields with descriptors get sorted next
            if (hasDescriptor) {
                return _const__WEBPACK_IMPORTED_MODULE_5__["SORT_WEIGHT_SCALE_3"] * 3 + controlOffset;
            }
            // Control fields that don't fit into any of the above criteria come next
            if (controlOffset > 0) {
                return _const__WEBPACK_IMPORTED_MODULE_5__["SORT_WEIGHT_SCALE_3"] * 4 + controlOffset;
            }
            // All other fields are sorted in the order in which they are encountered
            // in the schema
            return Infinity;
        };
        const uiOrder = immutable__WEBPACK_IMPORTED_MODULE_1__["Set"](propertyNames)
            .sortBy(getSortWeight)
            .toJS();
        return Object.assign(Object.assign({}, (uiOrder.length > 1 && { 'ui:order': uiOrder })), lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"]((_b = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.properties) !== null && _b !== void 0 ? _b : {}, (orderAccumulator, property, propertyName) => {
            const descendantOrder = getJSONSchemaOrder(property, uiSchema === null || uiSchema === void 0 ? void 0 : uiSchema[propertyName]);
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](descendantOrder)) {
                return orderAccumulator;
            }
            return Object.assign(Object.assign({}, orderAccumulator), { [propertyName]: descendantOrder });
        }, {}));
    };
    switch (type) {
        case _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__["SchemaType"].array:
            return handleArray();
        case _console_shared_src_components_dynamic_form__WEBPACK_IMPORTED_MODULE_6__["SchemaType"].object:
            return handleObject();
        default:
            return {};
    }
};
// Map a set of spec descriptors to a ui schema
const descriptorsToUISchema = (descriptors, jsonSchema) => {
    const uiSchemaFromDescriptors = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](descriptors, (uiSchemaAccumulator, { path, description, displayName, 'x-descriptors': capabilities = [] }) => {
        const uiSchemaPath = descriptorPathToUISchemaPath(path);
        if (!jsonSchemaHas(jsonSchema, uiSchemaPath)) {
            // eslint-disable-next-line no-console
            console.warn('SpecDescriptor path references a non-existent schema property:', path);
            return uiSchemaAccumulator;
        }
        const isAdvanced = lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](capabilities, _descriptors_types__WEBPACK_IMPORTED_MODULE_2__["SpecCapability"].advanced);
        const capabilitiesUISchema = capabilitiesToUISchema(lodash__WEBPACK_IMPORTED_MODULE_0__["without"](capabilities, _descriptors_types__WEBPACK_IMPORTED_MODULE_2__["SpecCapability"].advanced));
        return uiSchemaAccumulator.withMutations(mutable => {
            var _a;
            if (isAdvanced) {
                const advancedPropertyName = lodash__WEBPACK_IMPORTED_MODULE_0__["last"](uiSchemaPath);
                const pathToAdvanced = [...uiSchemaPath.slice(0, uiSchemaPath.length - 1), 'ui:advanced'];
                const currentAdvanced = (_a = mutable.getIn(pathToAdvanced)) !== null && _a !== void 0 ? _a : immutable__WEBPACK_IMPORTED_MODULE_1__["List"]();
                mutable.setIn(pathToAdvanced, currentAdvanced.push(advancedPropertyName));
            }
            mutable.setIn(uiSchemaPath, immutable__WEBPACK_IMPORTED_MODULE_1__["Map"](Object.assign(Object.assign(Object.assign({}, (description && { 'ui:description': description })), (displayName && { 'ui:title': displayName })), capabilitiesUISchema)));
        });
    }, immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]()).toJS();
    // return _.merge(uiSchemaFromDescriptors, getJSONSchemaOrder(jsonSchema, uiSchemaFromDescriptors)); // schema 우선순위 정렬 로직
    return lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](jsonSchema, uiSchemaFromDescriptors);
};
// Use jsonSchema, descriptors, and some defaults to generate a uiSchema
const getUISchema = (jsonSchema, providedAPI) => {
    var _a, _b;
    return lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({
        metadata: Object.assign(Object.assign({}, hideAllExistingProperties((_a = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.properties) === null || _a === void 0 ? void 0 : _a.metadata)), { name: {
                'ui:title': 'Name',
                'ui:widget': 'TextWidget',
            }, labels: {
                'ui:title': 'Labels',
                'ui:field': 'LabelsField',
            }, 'ui:options': {
                label: false,
            }, 'ui:order': ['name', 'labels', '*'] }),
        spec: Object.assign(Object.assign({}, descriptorsToUISchema(providedAPI === null || providedAPI === void 0 ? void 0 : providedAPI.specDescriptors, (_b = jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.properties) === null || _b === void 0 ? void 0 : _b.spec)), { 'ui:options': {
                label: false,
            } }),
        'ui:order': ['metadata', 'spec', '*'],
    }, getDefaultUISchema(jsonSchema, ''));
};


/***/ }),

/***/ "./public/components/create-yaml.tsx":
/*!*******************************************!*\
  !*** ./public/components/create-yaml.tsx ***!
  \*******************************************/
/*! exports provided: CreateYAML, EditYAMLPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateYAML", function() { return CreateYAML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditYAMLPage", function() { return EditYAMLPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/yaml-templates */ "./public/models/yaml-templates.ts");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kinds */ "./public/kinds.ts");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./public/components/error.tsx");
/* harmony import */ var _console_shared_src_utils_yaml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/utils/yaml */ "./packages/console-shared/src/utils/yaml.ts");








const CreateYAML = Object(_kinds__WEBPACK_IMPORTED_MODULE_2__["connectToPlural"])((props) => {
    const { match, kindsInFlight, kindObj, hideHeader = false, onChange = () => null, resourceObjPath, } = props;
    const { params } = match;
    if (!kindObj) {
        if (kindsInFlight) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_error__WEBPACK_IMPORTED_MODULE_6__["ErrorPage404"], null);
    }
    const namespace = params.ns || 'default';
    const template = props.template ||
        _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn([Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(kindObj), 'default']) ||
        _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn(['DEFAULT', 'default']);
    const obj = Object(_console_shared_src_utils_yaml__WEBPACK_IMPORTED_MODULE_7__["safeYAMLToJS"])(template);
    obj.kind = kindObj.kind;
    obj.metadata = obj.metadata || {};
    if (kindObj.namespaced) {
        obj.metadata.namespace = namespace;
    }
    if (kindObj.crd && template === _models_yaml_templates__WEBPACK_IMPORTED_MODULE_1__["yamlTemplates"].getIn(['DEFAULT', 'default'])) {
        obj.apiVersion = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForModel"])(kindObj);
        obj.spec = obj.spec || {};
    }
    const header = `Create ${kindObj.label}`;
    // TODO: if someone edits namespace, we'll redirect to old namespace
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], { loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, /*! ./droppable-edit-yaml */ "./public/components/droppable-edit-yaml.tsx")).then((c) => c.DroppableEditYAML), obj: obj, create: true, kind: kindObj.kind, header: header, hideHeader: hideHeader, resourceObjPath: resourceObjPath, onChange: onChange }));
});
const EditYAMLPage = (props) => {
    const Wrapper = (wrapperProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], Object.assign({}, wrapperProps, { obj: wrapperProps.obj.data, loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./edit-yaml */ "./public/components/edit-yaml.jsx")).then((c) => c.EditYAML), create: false })));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
            {
                kind: props.kind,
                name: props.match.params.name,
                namespace: props.match.params.ns,
                isList: false,
                prop: 'obj',
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null)));
};
EditYAMLPage.displayName = 'EditYAMLPage';


/***/ })

}]);
//# sourceMappingURL=19-8fdcfe7be0ff8cde1446.js.map