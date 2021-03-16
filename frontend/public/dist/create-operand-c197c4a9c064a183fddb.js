(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-operand"],{

/***/ "./packages/operator-lifecycle-manager/src/components/operand/DEPRECATED_operand-form.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/DEPRECATED_operand-form.tsx ***!
  \************************************************************************************************/
/*! exports provided: DEPRECATED_CreateOperandForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPRECATED_CreateOperandForm", function() { return DEPRECATED_CreateOperandForm; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/modals/configure-update-strategy-modal */ "./public/components/modals/configure-update-strategy-modal.tsx");
/* harmony import */ var _console_internal_components_utils_expand_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils/expand-collapse */ "./public/components/utils/expand-collapse.tsx");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _descriptors_spec_resource_requirements__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../descriptors/spec/resource-requirements */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/resource-requirements.tsx");
/* harmony import */ var _descriptors_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../descriptors/types */ "./packages/operator-lifecycle-manager/src/components/descriptors/types.ts");
/* harmony import */ var _descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../descriptors/spec/affinity */ "./packages/operator-lifecycle-manager/src/components/descriptors/spec/affinity.tsx");
// THIS COMPONENT IS DEPRECATED AND WILL BE REMOVED IN v4.6.















/*
 * Matches a path that contains an array index. Use Sting.match against an OperandField 'path'
 * property to determine if it contains an array index. It will parse the path into three parts,
 * [match, pathBeforeIndex, index, pathAfterIndex]. For example:
 *
 *   const [match, pathBeforeIndex, index, pathAfterIndex] =
 *     'path.before[0].path.after'.match(ARRAY_INDEX_PATTERN);
 *
 *   console.log(match);
 *   > 'path.before[0].path.after'
 *
 *   console.log(pathBeforeIndex);
 *   > 'path.before'
 *
 *   console.log(index)
 *   > '0'
 *
 *   console.log(pathAfterIndex)
 *   > 'path.after'
 *
 */
const ARRAY_INDEX_PATTERN = /^(.*)\[(\d+)\]\.?(.*)$/;
// Regex for SpecCapability.arrayFieldGroup and SpecCapability.fieldGroup
const ARRAY_FIELD_GROUP_PATTERN = lodash__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"](_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].arrayFieldGroup);
const FIELD_GROUP_PATTERN = lodash__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"](_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldGroup);
/*
 * Matches either field group or array field group SpecCapabilty. Use String.match against an
 * OperandField.capability element to determine if it is a group descriptor and parse group type
 * and name. For example:
 *
 *   const [match, groupType, name] = 'urn:alm:descriptor:com.tectonic.ui:fieldGroup:groupName';
 *
 *   console.log(match);
 *   > 'urn:alm:descriptor:com.tectonic.ui:fieldGroup:groupName'
 *
 *   console.log(groupType);
 *   > 'urn:alm:descriptor:com.tectonic.ui:fieldGroup:'
 *
 *   console.log(name);
 *   > 'groupName'
 */
const GROUP_PATTERN = new RegExp(`^(${FIELD_GROUP_PATTERN}|${ARRAY_FIELD_GROUP_PATTERN})(.*)$`);
// Default max nesting depth the form should display
const MAX_DEPTH = 1;
var Validations;
(function (Validations) {
    Validations["maximum"] = "maximum";
    Validations["minimum"] = "minimum";
    Validations["maxLength"] = "maxLength";
    Validations["minLength"] = "minLength";
    Validations["pattern"] = "pattern";
})(Validations || (Validations = {}));
const idFromPath = (path) => `root_${path.split('.').join('_')}`;
/*
 * Determines if a field contains a descriptor in it's capabilities. If only prefix is
 * provided, this will return true if the field has ANY capability that starts with the prefix. If
 * both prefix and suffix are provided, this will return true only if the field has a capability
 * that matches the concatenation of prefix + suffix.
 */
const hasDescriptor = (field, prefix, suffix = null) => {
    return suffix
        ? lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](field.capabilities, `${prefix}${suffix}`)
        : lodash__WEBPACK_IMPORTED_MODULE_0__["some"](field.capabilities, (capability) => capability.startsWith(prefix));
};
/*
 * Accepts an OperandField and returns a name and group type if that field is either a
 * a field group or array field group. Returned as object to allow destructuring of needed values
 * only.
 */
const parseGroupDescriptor = (field) => {
    const groupDescriptor = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](field.capabilities, (descriptor) => descriptor.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldGroup) ||
        descriptor.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].arrayFieldGroup));
    const [regexMatch, groupType, groupName] = groupDescriptor.match(GROUP_PATTERN) || [];
    return { regexMatch, groupName, groupType };
};
/*
 * Splits a path string into path before the array index, the array index itself, and the path after
 * the index. Returns as object to allow destructuring of needed values only.
 */
const parseArrayPath = (path) => {
    const [regexMatch, pathBeforeIndex, index, pathAfterIndex] = path.match(ARRAY_INDEX_PATTERN) || [];
    return regexMatch
        ? { index: lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](index), regexMatch, pathBeforeIndex, pathAfterIndex }
        : { regexMatch };
};
/*
 * If the path contains an array index, this function will return the path with the 'operation'
 * callback return value in place of the existing array index. If no array index is in the path,
 * the original path is returned.
 */
const modifyArrayFieldPathIndex = (path, operation) => {
    const { regexMatch, index, pathBeforeIndex, pathAfterIndex } = parseArrayPath(path);
    return !regexMatch
        ? path
        : `${pathBeforeIndex}[${operation(index)}]${pathAfterIndex && `.${pathAfterIndex}`}`;
};
// Accepts a SpecCapbability[] array and returns an appropriate default value for that field
const defaultValueFor = (capabilities) => {
    // String fields
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["intersection"](capabilities, [
        _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].podCount,
        _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].password,
        _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].text,
        _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].number,
        _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].select,
    ]).length > 0) {
        return '';
    }
    if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].imagePullPolicy)) {
        return _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__["ImagePullPolicy"].IfNotPresent;
    }
    // Resource requirement fields
    if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].resourceRequirements)) {
        return immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"]({
            limits: {
                cpu: '',
                memory: '',
                'ephemeral-storage': '',
            },
            requirements: {
                cpu: '',
                memory: '',
                'ephemeral-storage': '',
            },
        });
    }
    // Update strategy
    if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].updateStrategy)) {
        return immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"]({
            type: 'RollingUpdate',
            rollingUpdate: {
                maxUnavailable: '',
                maxSurge: '',
            },
        });
    }
    // Node and pod affinities
    if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].nodeAffinity)) {
        return immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"](_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_NODE_AFFINITY"]).setIn(['preferredDuringSchedulingIgnoredDuringExecution', 'weight'], '');
    }
    if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].podAffinity) ||
        capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].podAntiAffinity)) {
        return immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"](_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_POD_AFFINITY"]).setIn(['preferredDuringSchedulingIgnoredDuringExecution', 'weight'], '');
    }
    // If none of these capabilities are present in the array, return null.
    return null;
};
// Accepts an OpenAPI spec property and returns a corresponding SpecCapability[] array.
const capabilitiesFor = (property) => {
    if (property.enum) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](property.enum || [], (option) => `${_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].select}${option}`);
    }
    switch (property.type) {
        case 'integer':
            return [_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].number];
        case 'boolean':
            return [_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].booleanSwitch];
        default:
            return [_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].text];
    }
};
/*
 * Recursively traverses OpenAPI spec properties and flattens all nested properties into an
 * OperandField[] array.
 * If a resource instance is provided in the 'obj' argument, then array-type spec properties
 * will be expanded into the appropriate number of fields.
 * If a matching providedAPI descriptor exists, it will take precedence over the openAPI spec,
 * except that the providedAPI x-descriptors will be unioned with OpenAPI capabilities.
 */
const flattenNestedProperties = (property, name, providedAPI, obj, { currentCapabilities = [], currentPath = [], fields = [], required = false, }) => {
    // Null check
    if (!property) {
        return fields;
    }
    const handleObjectProperty = () => lodash__WEBPACK_IMPORTED_MODULE_0__["flatMap"](property.properties, (nestedProperty, nestedPropertyName) => flattenNestedProperties(nestedProperty, nestedPropertyName, providedAPI, obj, {
        currentCapabilities: [
            ...currentCapabilities,
            `${_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldGroup}${name}`,
        ],
        currentPath: [...currentPath, name],
        fields,
        required: ((property === null || property === void 0 ? void 0 : property.required) || []).includes(nestedPropertyName),
    }));
    const handleArrayProperty = () => {
        var _a, _b;
        // Find the number of array elements that are already defined in the provided object
        const n = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, `spec.${currentPath.join('.')}${name}`, []).length || 1;
        // Since _.times will return a multidimensional array of OperandFields (OperandField[][]), we
        // need to flatten one level deeper than _.flatMap provides.
        return lodash__WEBPACK_IMPORTED_MODULE_0__["flatMapDepth"]((_b = (_a = property.items) === null || _a === void 0 ? void 0 : _a.properties) !== null && _b !== void 0 ? _b : {}, (nestedProperty, nestedPropertyName) => 
        // Repeat recursion (n) times so that the correct number of fields are created for
        // existing values in obj. This ensures that further nested fields also get created.
        lodash__WEBPACK_IMPORTED_MODULE_0__["times"](n, (index) => flattenNestedProperties(nestedProperty, nestedPropertyName, providedAPI, obj, {
            currentCapabilities: [
                ...currentCapabilities,
                `${_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].arrayFieldGroup}${name}`,
            ],
            currentPath: [...currentPath, `${name}[${index}]`],
            fields,
            required: ((property === null || property === void 0 ? void 0 : property.required) || []).includes(nestedPropertyName),
        })), 2);
    };
    const handleAtomicProperty = () => {
        const path = [...currentPath, name].join('.');
        // ProvidedAPI should only have a single descriptor for each array field. Regardless of the
        // index of this field, use the providedAPI.specDescriptor at index 0.
        const providedAPIField = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](providedAPI === null || providedAPI === void 0 ? void 0 : providedAPI.specDescriptors, {
            path: modifyArrayFieldPathIndex(path, () => 0),
        });
        return [
            ...fields,
            {
                capabilities: lodash__WEBPACK_IMPORTED_MODULE_0__["union"]((providedAPIField === null || providedAPIField === void 0 ? void 0 : providedAPIField['x-descriptors']) || [], currentCapabilities, capabilitiesFor(property)),
                description: (providedAPIField === null || providedAPIField === void 0 ? void 0 : providedAPIField.description) || property.description,
                displayName: (providedAPIField === null || providedAPIField === void 0 ? void 0 : providedAPIField.displayName) || lodash__WEBPACK_IMPORTED_MODULE_0__["startCase"](name),
                path: `spec.${path}`,
                required,
                type: property.type,
                validation: lodash__WEBPACK_IMPORTED_MODULE_0__["pick"](property, Object.keys(Validations)),
            },
        ];
    };
    switch (property.type) {
        // If this property is of 'object' type, return a flat map of its properties
        case 'object':
            return handleObjectProperty();
        // If this property of is of 'array' type, return a flat map of its item's properties.
        case 'array':
            return handleArrayProperty();
        // This property is not an array or object, so it can be mapped to a specific descriptor
        default:
            return handleAtomicProperty();
    }
};
// Returns traversal depth of an OpenAPI spec property.
const getPropertyDepth = (property, depth = 0) => {
    var _a;
    // If this property is not an array or object, we have reached the maximum depth
    if (!property || !['object', 'array'].includes(property.type)) {
        return depth;
    }
    // Return the maximum depth of the nested properties
    return Math.max(0, ...lodash__WEBPACK_IMPORTED_MODULE_0__["map"]((property === null || property === void 0 ? void 0 : property.properties) || ((_a = property === null || property === void 0 ? void 0 : property.items) === null || _a === void 0 ? void 0 : _a.properties), (nestedProperty) => getPropertyDepth(nestedProperty, depth + 1)));
};
/*
 * Maps openAPI spec properties to OperandField[] array. This will return all fields with a traversal
 * depth less than the 'depth' argument, and will combine matching providedAPI descriptors with the
 * corresponding OpenAPI spec property in a way that providedAPI data will take precedence over
 * openAPI spec properties.
 */
const fieldsForOpenAPI = (schema, providedAPI, obj, depth = MAX_DEPTH) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"]((schema === null || schema === void 0 ? void 0 : schema.properties) || {}, (openAPIFieldsAccumulator, property, propertyName) => {
        if (!(property === null || property === void 0 ? void 0 : property.type) || getPropertyDepth(property) > depth) {
            return openAPIFieldsAccumulator;
        }
        return [
            ...openAPIFieldsAccumulator,
            ...flattenNestedProperties(property, propertyName, providedAPI, obj, {
                required: ((schema === null || schema === void 0 ? void 0 : schema.required) || []).includes(propertyName),
            }),
        ];
    }, []);
};
/*
 * Convert a CRD specDescriptor to appropriate OperandField type. Expands obj array properties
 * to the appropriate number of fields.
 */
const specDescriptorToFields = ({ description, displayName, path, 'x-descriptors': capabilities = [] }, obj) => {
    // Use regex to check path for an array index, and parse out the parts of the path before
    // and after the array index.
    const { regexMatch, pathBeforeIndex, pathAfterIndex } = parseArrayPath(path);
    // If match exists, the field represents an element in an array field group, which means we
    // need to create 'n' duplicates of this field, where 'n' is the number of
    // elements in the corresponding array property of 'obj'. If n = 0, we only create one field.
    if (regexMatch) {
        const n = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](`spec.${pathBeforeIndex}`), []).length || 1;
        return lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_0__["times"](n, (index) => ({
            path: `spec.${pathBeforeIndex}[${index}]${pathAfterIndex && `.${pathAfterIndex}`}`,
            displayName,
            description,
            capabilities,
            type: null,
            required: null,
            validation: null,
        })));
    }
    return [
        {
            path: `spec.${path}`,
            displayName,
            description,
            type: null,
            required: null,
            validation: null,
            capabilities,
        },
    ];
};
const pathToArray = (path) => lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](path), (subPath) => {
    return /^\d+$/.test(subPath) ? lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](subPath) : subPath;
});
const FieldGroup = ({ children, isExpanded = false, id, label }) => {
    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](isExpanded);
    const onToggle = (event) => {
        event.preventDefault();
        setExpanded((current) => !current);
    };
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { id: `${id}_field-group`, className: "co-dynamic-form__field-group" },
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["AccordionItem"], null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["AccordionToggle"], { id: `${id}_accordion-toggle`, onClick: onToggle, isExpanded: expanded },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", { htmlFor: `${id}_accordion-content` }, label)),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["AccordionContent"], { id: `${id}_accordion-content`, isHidden: !expanded }, children))));
};
// Wrapper for individual operand form inputs
const OperandFormInputGroup = ({ error, field, input }) => {
    const { description, displayName, path, required } = field;
    const id = idFromPath(path);
    return input ? (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "form-group co-dynamic-form__form-group", "data-test-selector": path },
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('form-label', { 'co-required': required }), htmlFor: id }, displayName),
        input,
        description && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { id: `${id}__description`, className: "help-block" }, description)),
        error && react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { className: "co-error" }, error))) : null;
};
// eslint-disable-next-line @typescript-eslint/camelcase
const DEPRECATED_CreateOperandForm = ({ formData, csv, schema, model, onChange, providedAPI, match, next, }) => {
    const immutableFormData = immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"](formData);
    const handleFormDataUpdate = (path, value) => {
        const { regexMatch, index, pathBeforeIndex, pathAfterIndex } = parseArrayPath(path);
        // Immutable will not initialize a deep path as a List if it includes an integer, so we need to manually
        // initialize non-existent array properties to a List instance before updating state at that path.
        if (regexMatch && index === 0) {
            const existing = immutableFormData.getIn([...pathToArray(pathBeforeIndex), 0]);
            const item = immutable__WEBPACK_IMPORTED_MODULE_2__["Map"](existing || {}).setIn(pathToArray(pathAfterIndex), value);
            const list = immutable__WEBPACK_IMPORTED_MODULE_2__["List"]([item]);
            onChange(immutableFormData.setIn(pathToArray(pathBeforeIndex), list).toJS());
        }
        onChange(immutableFormData.setIn(pathToArray(path), value).toJS());
    };
    const handleFormDataDelete = (path) => {
        onChange(immutableFormData.deleteIn(pathToArray(path)).toJS());
    };
    // Map providedAPI spec descriptors and openAPI spec properties to OperandField[] array
    const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](() => {
        var _a, _b;
        // Get fields from openAPI
        const schemaFields = fieldsForOpenAPI((_a = schema === null || schema === void 0 ? void 0 : schema.properties) === null || _a === void 0 ? void 0 : _a.spec, providedAPI, formData);
        // Get fields from providedAPI that do not exist in the OpenAPI spec.
        const descriptorFields = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"]((_b = providedAPI === null || providedAPI === void 0 ? void 0 : providedAPI.specDescriptors) !== null && _b !== void 0 ? _b : [], (providedAPIFieldsAccumulator, specDescriptor) => {
            // If this field was already created, ignore it.
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["find"](schemaFields, { path: `spec.${specDescriptor.path}` })) {
                return providedAPIFieldsAccumulator;
            }
            // Add the field if it doesn't exist
            return [
                ...providedAPIFieldsAccumulator,
                ...specDescriptorToFields(specDescriptor, formData),
            ];
        }, []);
        // Concatenate all fields and return
        return [...schemaFields, ...descriptorFields];
    });
    const labelTags = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](() => {
        const formValue = immutableFormData.getIn(['metadata', 'labels']);
        return _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["SelectorInput"].arrayify(lodash__WEBPACK_IMPORTED_MODULE_0__["isFunction"](formValue === null || formValue === void 0 ? void 0 : formValue.toJS) ? formValue.toJS() : {});
    }, [immutableFormData]);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]();
    const [formErrors, setFormErrors] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({});
    // Group fields into advanced, arrayFieldGroup, fieldGroup, and normal fields for rendering.
    // Note that arrayFieldGroup and fieldGroup fields are still flat after this. The memoized
    // 'arrayFieldGroups' and 'fieldGroups' (below) further organizes these by their respective
    // group descriptors to simplify rendering and state management.
    const [advancedFields = [], arrayFields = [], groupFields = [], normalFields = [],] = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](() => lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](fields, ([advancedFieldsAccumulator = [], arrayFieldsAccumulator = [], groupFieldsAccumulator = [], normalFieldsAccumulator = [],], field) => {
        if (hasDescriptor(field, _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].arrayFieldGroup)) {
            return [
                advancedFieldsAccumulator,
                [...arrayFieldsAccumulator, field],
                groupFieldsAccumulator,
                normalFieldsAccumulator,
            ];
        }
        if (hasDescriptor(field, _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldGroup)) {
            return [
                advancedFieldsAccumulator,
                arrayFieldsAccumulator,
                [...groupFieldsAccumulator, field],
                normalFieldsAccumulator,
            ];
        }
        if (hasDescriptor(field, _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].advanced)) {
            return [
                [...advancedFieldsAccumulator, field],
                arrayFieldsAccumulator,
                groupFieldsAccumulator,
                normalFieldsAccumulator,
            ];
        }
        return [
            advancedFieldsAccumulator,
            arrayFieldsAccumulator,
            groupFieldsAccumulator,
            [...normalFieldsAccumulator, field],
        ];
    }, []), [fields]);
    // Create memoized arrayFieldGroups. Organizes arrayFields into a structure that is easy to map
    // and render.
    const arrayFieldGroups = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](() => {
        // Group all fields by group name
        const groupedByName = lodash__WEBPACK_IMPORTED_MODULE_0__["groupBy"](arrayFields, (field) => {
            const { groupName } = parseGroupDescriptor(field);
            return groupName;
        });
        // Map {groupName: string, fieldLists: OperandField[][]}, where OperandField is a nested array
        // of the appropriate fields, grouped by index.
        return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](groupedByName, (fieldsInGroup, groupName) => ({
            groupName,
            fieldLists: lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](fieldsInGroup, (fieldListsAccumulator, field) => {
                const { index, regexMatch } = parseArrayPath(field.path);
                if (regexMatch) {
                    fieldListsAccumulator[index] = [...(fieldListsAccumulator[index] || []), field];
                }
                return fieldListsAccumulator;
            }, []),
        }));
    }, [arrayFields]);
    // Create memoized fieldGroups. Map to array of fields grouped by fieldGroup name so that sorting
    // is easy.
    const fieldGroups = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](() => {
        const groupedByName = lodash__WEBPACK_IMPORTED_MODULE_0__["groupBy"](groupFields, (field) => {
            const { groupName } = parseGroupDescriptor(field);
            return groupName;
        });
        return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](groupedByName, (fieldList, groupName) => ({
            groupName,
            fieldList,
        }));
    }, [groupFields]);
    const getFormData = (path) => immutableFormData.getIn(pathToArray(path));
    // Validate form and submit API request if no validation failures
    const submit = (event) => {
        event.preventDefault();
        const errors = fields
            .filter((f) => !lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](f.validation) || !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](f.validation))
            .filter((f) => f.required || !lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](getFormData(f.path), defaultValueFor(f.capabilities)))
            .reduce((allErrors, field) => {
            // NOTE: Use server-side validation in Kubernetes 1.16 (https://github.com/kubernetes/kubernetes/issues/80718#issuecomment-521081640)
            const fieldErrors = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](field.validation, (val, rule) => {
                const formVal = getFormData(field.path);
                switch (rule) {
                    case Validations.minimum:
                        return formVal >= val ? null : `Must be greater than ${val}.`;
                    case Validations.maximum:
                        return formVal <= val ? null : `Must be less than ${val}.`;
                    case Validations.minLength:
                        return formVal.length >= val ? null : `Must be at least ${val} characters.`;
                    case Validations.maxLength:
                        return formVal.length <= val ? null : `Must be greater than ${val} characters.`;
                    case Validations.pattern:
                        return new RegExp(val).test(formVal)
                            ? null
                            : `Does not match required pattern ${val}`;
                    default:
                        return null;
                }
            });
            // Just use first error
            return Object.assign(Object.assign({}, allErrors), { [field.path]: fieldErrors.find((e) => !lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](e)) });
        }, {});
        setFormErrors(errors);
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](lodash__WEBPACK_IMPORTED_MODULE_0__["values"](errors)))) {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__["k8sCreate"])(model, model.namespaced
                ? immutableFormData.setIn(['metadata', 'namespace'], match.params.ns).toJS()
                : immutableFormData.toJS())
                .then(() => _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["history"].push(next))
                .catch((err) => setError(err.message || 'Unknown error.'));
        }
    };
    // TODO(alecmerdler): Move this into a single `<SpecDescriptorInput>` entry component in the `descriptors/` directory
    const inputFor = ({ capabilities, displayName, path, required, validation }) => {
        var _a;
        const id = idFromPath(path);
        const formDataValue = getFormData(path);
        const currentValue = lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](formDataValue) ? defaultValueFor(capabilities) : formDataValue;
        if (capabilities.find((c) => c.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldDependency))) {
            const controlFieldInfoList = capabilities.filter((c) => c.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldDependency));
            const controlFieldPathList = lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"](controlFieldInfoList
                .map((c) => c.split(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldDependency)[1])
                .reduce((infoList, info) => [info.split(':')[0], ...infoList], []));
            const controlFieldPath = lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"](controlFieldPathList) && controlFieldPathList.length === 1
                ? controlFieldPathList[0]
                : null;
            const currentControlFieldValue = !lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](getFormData(`spec.${controlFieldPath}`))
                ? getFormData(`spec.${controlFieldPath}`).toString()
                : null;
            const expectedControlFieldValueList = controlFieldInfoList
                .map((c) => c.split(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].fieldDependency)[1])
                .reduce((infoList, info) => [info.split(':')[1], ...infoList], []);
            if (!expectedControlFieldValueList.includes(currentControlFieldValue)) {
                return null;
            }
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].podCount)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["NumberSpinner"], { id: id, className: "pf-c-form-control", value: currentValue, onChange: ({ currentTarget: { value } }) => handleFormDataUpdate(path, lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value)), changeValueBy: (operation) => handleFormDataUpdate(path, lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"](currentValue) + operation), autoFocus: true, required: true }));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].resourceRequirements)) {
            const cpuLimitsPath = `limits.cpu`;
            const memoryLimitsPath = `limits.memory`;
            const storageLimitsPath = 'limits.ephemeral-storage';
            const cpuRequestsPath = `requests.cpu`;
            const memoryRequestsPath = `requests.memory`;
            const storageRequestsPath = 'requests.ephemeral-storage';
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("dl", { style: { marginLeft: '15px' } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("dt", null, "Limits"),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_descriptors_spec_resource_requirements__WEBPACK_IMPORTED_MODULE_12__["ResourceRequirements"], { cpu: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](cpuLimitsPath)), memory: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](memoryLimitsPath)), storage: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](storageLimitsPath)), onChangeCPU: (value) => handleFormDataUpdate(`${path}.${cpuLimitsPath}`, value), onChangeMemory: (value) => handleFormDataUpdate(`${path}.${memoryLimitsPath}`, value), onChangeStorage: (value) => handleFormDataUpdate(`${path}.${storageLimitsPath}`, value), path: `${id}.limits` })),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("dt", null, "Requests"),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_descriptors_spec_resource_requirements__WEBPACK_IMPORTED_MODULE_12__["ResourceRequirements"], { cpu: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](cpuRequestsPath)), memory: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](memoryRequestsPath)), storage: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](storageRequestsPath)), onChangeCPU: (value) => handleFormDataUpdate(`${path}.${cpuRequestsPath}`, value), onChangeMemory: (value) => handleFormDataUpdate(`${path}.${memoryRequestsPath}`, value), onChangeStorage: (value) => handleFormDataUpdate(`${path}.${storageRequestsPath}`, value), path: `${id}.requests` }))));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].password)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", Object.assign({ className: "pf-c-form-control", id: id, type: "password" }, validation, { onChange: ({ currentTarget: { value } }) => handleFormDataUpdate(path, value), value: currentValue }))));
        }
        if (capabilities.some((c) => c.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].k8sResourcePrefix))) {
            const groupVersionKind = capabilities
                .find((c) => c.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].k8sResourcePrefix))
                .split(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].k8sResourcePrefix)[1]
                .replace('core~v1~', '');
            const k8sModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__["modelFor"])(groupVersionKind);
            if (!k8sModel) {
                // eslint-disable-next-line no-console
                console.warn('[Legacy CreateOperandForm] Cluster does not have resource', groupVersionKind);
            }
            return k8sModel ? (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["ListDropdown"], { id: id, resources: [
                    {
                        kind: groupVersionKind,
                        namespace: k8sModel.namespaced ? (_a = match === null || match === void 0 ? void 0 : match.params) === null || _a === void 0 ? void 0 : _a.ns : null,
                    },
                ], desc: displayName, placeholder: `Select ${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__["kindForReference"])(groupVersionKind)}`, onChange: (value) => handleFormDataUpdate(path, value), selectedKey: currentValue ? `${currentValue}-${k8sModel === null || k8sModel === void 0 ? void 0 : k8sModel.kind}` : null })) : null;
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].checkbox)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], { id: id, style: { marginLeft: '10px' }, isChecked: (lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](currentValue) ? false : currentValue), label: displayName, required: required, onChange: (value) => handleFormDataUpdate(path, value) }));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].booleanSwitch)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], { key: id, id: id, isChecked: (lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](currentValue) ? false : currentValue), onChange: (value) => handleFormDataUpdate(path, value), label: "True", labelOff: "False" }));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].imagePullPolicy)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_8__["RadioGroup"], { id: id, currentValue: currentValue, items: lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__["ImagePullPolicy"]).map((policy) => ({
                    value: policy,
                    title: policy,
                })), onChange: ({ currentTarget: { value } }) => handleFormDataUpdate(path, value) }));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].updateStrategy)) {
            const maxUnavailablePath = `rollingUpdate.maxUnavailable`;
            const maxSurgePath = `rollingUpdate.maxSurge`;
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_modals_configure_update_strategy_modal__WEBPACK_IMPORTED_MODULE_6__["ConfigureUpdateStrategy"], { strategyType: currentValue.get('type'), maxUnavailable: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](maxUnavailablePath)), maxSurge: currentValue.getIn(lodash__WEBPACK_IMPORTED_MODULE_0__["toPath"](maxSurgePath)), onChangeStrategyType: (value) => handleFormDataUpdate(`${path}.type`, value), onChangeMaxUnavailable: (value) => handleFormDataUpdate(`${path}.${maxUnavailablePath}`, value), onChangeMaxSurge: (value) => handleFormDataUpdate(`${path}.${maxSurgePath}`, value), replicas: 1, uid: id }));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].text)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", { key: id, className: "pf-c-form-control", id: id, type: "text", onChange: ({ currentTarget: { value } }) => handleFormDataUpdate(path, value), value: currentValue })));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].number)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", { key: path, className: "pf-c-form-control", id: id, type: "number", onChange: ({ currentTarget: { value } }) => handleFormDataUpdate(path, value !== '' ? lodash__WEBPACK_IMPORTED_MODULE_0__["toNumber"](value) : ''), value: currentValue !== '' ? lodash__WEBPACK_IMPORTED_MODULE_0__["toNumber"](currentValue) : '' })));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].nodeAffinity)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { marginLeft: '15px' } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_14__["NodeAffinity"], { affinity: currentValue.toJS(), onChange: (value) => handleFormDataUpdate(path, immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"](value)), uid: id })));
        }
        if (capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].podAffinity) ||
            capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].podAntiAffinity)) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { marginLeft: '15px' } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_descriptors_spec_affinity__WEBPACK_IMPORTED_MODULE_14__["PodAffinity"], { affinity: currentValue.toJS(), onChange: (value) => handleFormDataUpdate(path, immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"](value)), uid: id })));
        }
        if (capabilities.some((c) => c.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].select))) {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], { id: id, title: `Select ${displayName}`, selectedKey: currentValue, items: capabilities
                        .filter((c) => c.startsWith(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].select))
                        .map((c) => c.split(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].select)[1])
                        .reduce((all, option) => (Object.assign({ [option]: option }, all)), {}), onChange: (value) => handleFormDataUpdate(path, value) })));
        }
        return null;
    };
    /* Inserts an arrayFieldGroup at nextIndex. The fieldList argument is an array of fields
     * representing a single element in an arrayFieldGroup. To add an arrayFieldGroup, we duplicate
     * each field in this fieldList, replacing the array index in field.path with the nextIndex
     * argument
     */
    const addArrayFieldGroup = (fieldLists) => {
        // Duplicate each field in fieldList, creating the corresponding field and formValue at
        // arrayFieldGroup[nextIndex]
        const addedFields = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](lodash__WEBPACK_IMPORTED_MODULE_0__["last"](fieldLists), (fieldAccumulator, field) => {
            // Replace index of field with nextIndex
            const path = modifyArrayFieldPathIndex(field.path, () => fieldLists.length);
            return [...fieldAccumulator, Object.assign(Object.assign({}, field), { path })];
        }, []);
        setFields((currentFields) => [...currentFields, ...addedFields]);
    };
    // Removes fields corresponding to an  arrayFieldGroup index from the form
    const removeArrayFieldGroup = (fieldLists, indexToRemove) => {
        // Flat array of fields in this arrayFieldGroup at index > removed.
        const fieldsToLeftShift = lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](fieldLists, (_unused, index) => index > indexToRemove));
        // List of paths to be removed from fields list. Fields and values in fieldsToLeftShift
        // will be replaced with left-shifted equivalents
        const fieldPathsToRemove = lodash__WEBPACK_IMPORTED_MODULE_0__["map"]([...fieldLists[indexToRemove], ...fieldsToLeftShift], 'path');
        const [regexMatch, formDataPathToRemove] = ((fieldPathsToRemove === null || fieldPathsToRemove === void 0 ? void 0 : fieldPathsToRemove[0]) || '').match(/^(.*\[\d+\]).*$/) || [];
        const leftShiftedFields = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](fieldsToLeftShift, (fieldAccumulator, field) => {
            const path = modifyArrayFieldPathIndex(field.path, (index) => index - 1);
            return [...fieldAccumulator, Object.assign(Object.assign({}, field), { path })];
        }, []);
        // Remove arrayFieldGroup from fields and replace subsequent arrayFieldGroup fields with
        // left-shifted ones.
        setFields((currentFields) => {
            return [
                // Filter out all removed fields and fields that need to be left-shifted
                ...lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](currentFields, (field) => !lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](fieldPathsToRemove, field.path)),
                // Add new left-shifted fields
                ...leftShiftedFields,
            ];
        });
        regexMatch && handleFormDataDelete(formDataPathToRemove);
    };
    const renderArrayFieldGroups = () => lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](arrayFieldGroups, 'groupName'), ({ fieldLists, groupName }) => {
        // If there is no name for this fieldGroup, or no fields associated with the group name, don't
        // render anything
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](groupName) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](fieldLists)) {
            return null;
        }
        const groupDisplayName = lodash__WEBPACK_IMPORTED_MODULE_0__["startCase"](groupName);
        const singularGroupDisplayName = groupDisplayName.replace(/s$/, '');
        const id = `root_spec_${groupName}`;
        const isExpanded = !lodash__WEBPACK_IMPORTED_MODULE_0__["some"](fieldLists, (fieldList) => lodash__WEBPACK_IMPORTED_MODULE_0__["some"](fieldList, (f) => hasDescriptor(f, _descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].advanced) && !f.required));
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](FieldGroup, { id: id, isExpanded: isExpanded, key: id, label: groupDisplayName },
            lodash__WEBPACK_IMPORTED_MODULE_0__["map"](fieldLists, (fieldList, index) => (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], { key: `${groupName}-${index}` },
                index > 0 && react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("hr", null),
                fieldLists.length > 1 && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "row co-array-field-group__remove" },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "button", className: "co-array-field-group__remove-btn", onClick: () => removeArrayFieldGroup(fieldLists, index), variant: "link" },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["MinusCircleIcon"], { className: "co-icon-space-r" }),
                        "Remove ",
                        singularGroupDisplayName))),
                lodash__WEBPACK_IMPORTED_MODULE_0__["map"](fieldList, (field) => (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](OperandFormInputGroup, { key: field.path, error: formErrors === null || formErrors === void 0 ? void 0 : formErrors[field.path], field: field, input: inputFor(field) })))))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "button", onClick: () => addArrayFieldGroup(fieldLists), variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PlusCircleIcon"], { className: "co-icon-space-r" }),
                    "Add ",
                    singularGroupDisplayName))));
    });
    const renderFieldGroups = () => lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](fieldGroups, 'groupName'), ({ fieldList, groupName }) => {
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](groupName) || lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](fieldList)) {
            return null;
        }
        const id = `root_spec_${groupName}`;
        const isExpanded = !lodash__WEBPACK_IMPORTED_MODULE_0__["some"](fieldList, (f) => f.capabilities.includes(_descriptors_types__WEBPACK_IMPORTED_MODULE_13__["SpecCapability"].advanced) && !f.required);
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](FieldGroup, { key: id, id: id, isExpanded: isExpanded, label: lodash__WEBPACK_IMPORTED_MODULE_0__["startCase"](groupName) }, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](fieldList, (field) => (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](OperandFormInputGroup, { key: field.path, error: formErrors === null || formErrors === void 0 ? void 0 : formErrors[field.path], field: field, input: inputFor(field) })))));
    });
    const renderNormalFields = () => lodash__WEBPACK_IMPORTED_MODULE_0__["map"](normalFields, (field) => (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](OperandFormInputGroup, { key: field.path, field: field, input: inputFor(field), error: formErrors === null || formErrors === void 0 ? void 0 : formErrors[field.path] })));
    const renderAdvancedFields = () => advancedFields.length > 0 && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils_expand_collapse__WEBPACK_IMPORTED_MODULE_7__["ExpandCollapse"], { textExpanded: "Advanced Configuration", textCollapsed: "Advanced Configuration" }, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](advancedFields, (field) => (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](OperandFormInputGroup, { key: field.path, field: field, input: inputFor(field), error: formErrors === null || formErrors === void 0 ? void 0 : formErrors[field.path] }))))));
    Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["useScrollToTopOnMount"])();
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "col-md-8 col-lg-7" },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Alert"], { isInline: true, className: "co-alert co-break-word", variant: "info", title: 'Note: Some fields may not be represented in this form. Please select "YAML View" for full control of object creation.' }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("form", { className: "co-dynamic-form", onSubmit: submit },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Accordion"], { asDefinitionList: false, className: "co-dynamic-form__accordion" },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { key: 'metadata.name', className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", { className: "control-label co-required", htmlFor: "name" }, "Name"),
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: ({ target: { value } }) => handleFormDataUpdate('metadata.name', value), value: immutableFormData.getIn(['metadata', 'name']) || 'example', id: "root_metadata_name", required: true })),
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { key: 'root_metadata_labels', className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", { className: "control-label", htmlFor: "tags-input" }, "Labels"),
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["SelectorInput"], { onChange: (value) => handleFormDataUpdate('metadata.labels', immutable__WEBPACK_IMPORTED_MODULE_2__["fromJS"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["SelectorInput"].objectify(value))), tags: labelTags })),
                        renderArrayFieldGroups(),
                        renderFieldGroups(),
                        renderNormalFields(),
                        renderAdvancedFields()),
                    (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](error) || !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](lodash__WEBPACK_IMPORTED_MODULE_0__["compact"](lodash__WEBPACK_IMPORTED_MODULE_0__["values"](formErrors)))) && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Alert"], { isInline: true, className: "co-alert co-break-word co-alert--scrollable", variant: "danger", title: "Error" }, error || 'Fix above errors')),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { paddingBottom: '30px' } },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ActionGroup"], { className: "pf-c-form" },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { onClick: submit, type: "submit", variant: "primary" }, "Create"),
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["history"].goBack, variant: "secondary" }, "Cancel"))))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "col-md-4 col-lg-5" }, csv && providedAPI && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { marginBottom: '30px' } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_index__WEBPACK_IMPORTED_MODULE_11__["ClusterServiceVersionLogo"], { displayName: providedAPI.displayName, icon: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](csv, 'spec.icon[0]'), provider: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](csv, 'spec.provider') }),
                providedAPI.description))))));
};


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operand/create-operand.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operand/create-operand.tsx ***!
  \***************************************************************************************/
/*! exports provided: CreateOperand, CreateOperandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOperand", function() { return CreateOperand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOperandPage", function() { return CreateOperandPage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils_firehose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/firehose */ "./public/components/utils/firehose.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_synced_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/synced-editor */ "./packages/console-shared/src/components/synced-editor/index.tsx");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/synced-editor/editor-toggle */ "./packages/console-shared/src/components/synced-editor/editor-toggle.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _operand_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operand-form */ "./packages/operator-lifecycle-manager/src/components/operand/operand-form.tsx");
/* harmony import */ var _operand_yaml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operand-yaml */ "./packages/operator-lifecycle-manager/src/components/operand/operand-yaml.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .. */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./const */ "./packages/operator-lifecycle-manager/src/components/operand/const.ts");
/* harmony import */ var _console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form/utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils */ "./packages/operator-lifecycle-manager/src/components/operand/utils.ts");
/* harmony import */ var _DEPRECATED_operand_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DEPRECATED_operand-form */ "./packages/operator-lifecycle-manager/src/components/operand/DEPRECATED_operand-form.tsx");


















// eslint-disable-next-line @typescript-eslint/camelcase

const CreateOperand = ({ clusterServiceVersion, customResourceDefinition, initialEditorType, loaded, loadError, match, model, activePerspective, }) => {
    const { data: csv } = clusterServiceVersion;
    const { data: crd } = customResourceDefinition;
    const [helpText, setHelpText] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_const__WEBPACK_IMPORTED_MODULE_15__["FORM_HELP_TEXT"]);
    const next = activePerspective === 'dev'
        ? '/topology'
        : `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["ClusterServiceVersionModel"], match.params.appName, match.params.ns)}/${match.params.plural}`;
    const providedAPI = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => Object(___WEBPACK_IMPORTED_MODULE_14__["providedAPIForModel"])(csv, model), [
        csv,
        model,
    ]);
    // TODO This logic should be removed in 4.6 and we should only be using
    // the OperandForm component. We are providing a temporary fallback
    // to the old form component to ease the transition to structural schemas
    // over descriptors. In 4.6, structural schemas will be required, and
    // the fallback will no longer be necessary/provided. If no structural schema
    // is provided in 4.6, a form will not be generated.
    const [schema, FormComponent] = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        var _a, _b, _c, _d, _e;
        const baseSchema = (_c = (_b = (_a = crd === null || crd === void 0 ? void 0 : crd.spec) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.openAPIV3Schema) !== null && _c !== void 0 ? _c : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["definitionFor"])(model);
        const useFallback = Object(_console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_16__["getSchemaErrors"])(baseSchema).length ||
            Object(_utils__WEBPACK_IMPORTED_MODULE_17__["hasNoFields"])(((_e = (_d = baseSchema === null || baseSchema === void 0 ? void 0 : baseSchema.properties) === null || _d === void 0 ? void 0 : _d.spec) !== null && _e !== void 0 ? _e : {}));
        return useFallback
            ? // eslint-disable-next-line @typescript-eslint/camelcase
                [baseSchema, _DEPRECATED_operand_form__WEBPACK_IMPORTED_MODULE_18__["DEPRECATED_CreateOperandForm"]]
            : [
                lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({}, _const__WEBPACK_IMPORTED_MODULE_15__["DEFAULT_K8S_SCHEMA"], lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](baseSchema, 'properties.status')),
                _operand_form__WEBPACK_IMPORTED_MODULE_12__["OperandForm"],
            ];
    }, [crd, model]);
    const sample = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => Object(___WEBPACK_IMPORTED_MODULE_14__["exampleForModel"])(csv, model), [csv, model]);
    const pruneFunc = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"]((data) => Object(_console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_16__["prune"])(data, sample), [sample]);
    const onChangeEditorType = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"]((newMethod) => {
        setHelpText(newMethod === _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_8__["EditorType"].Form ? _const__WEBPACK_IMPORTED_MODULE_15__["FORM_HELP_TEXT"] : _const__WEBPACK_IMPORTED_MODULE_15__["YAML_HELP_TEXT"]);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["StatusBox"], { loaded: loaded, loadError: loadError, data: clusterServiceVersion }, loaded ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbs"], { breadcrumbs: [
                        {
                            name: csv.spec.displayName,
                            path: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["ClusterServiceVersionModel"], csv.metadata.name, csv.metadata.namespace),
                        },
                        { name: `Create ${model.label}`, path: window.location.pathname },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-create-operand__header-text" }, `Create ${model.label}`),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block" }, helpText)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared_src_components_synced_editor__WEBPACK_IMPORTED_MODULE_6__["SyncedEditor"], { context: {
                formContext: { csv, match, model, next, schema, providedAPI },
                yamlContext: { next, match },
            }, FormEditor: FormComponent, initialData: sample, initialType: initialEditorType, onChangeEditorType: onChangeEditorType, prune: pruneFunc, YAMLEditor: _operand_yaml__WEBPACK_IMPORTED_MODULE_13__["OperandYAML"] }))) : null));
};
const stateToProps = (state, props) => ({
    model: state.k8s.getIn(['RESOURCES', 'models', props.match.params.plural]),
    activePerspective: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_7__["getActivePerspective"])(state),
});
const CreateOperandPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(stateToProps)((props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_10__["Helmet"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, `Create ${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["kindForReference"])(props.match.params.plural)}`)),
    props.model && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_firehose__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["ClusterServiceVersionModel"]),
                name: props.match.params.appName,
                namespace: props.match.params.ns,
                isList: false,
                prop: 'clusterServiceVersion',
            },
            {
                kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["CustomResourceDefinitionModel"].kind,
                isList: false,
                name: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["nameForModel"])(props.model),
                prop: 'customResourceDefinition',
                optional: true,
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CreateOperand, Object.assign({}, props, { model: props.model, match: props.match, initialEditorType: _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_8__["EditorType"].Form })))))));


/***/ })

}]);
//# sourceMappingURL=create-operand-c197c4a9c064a183fddb.js.map