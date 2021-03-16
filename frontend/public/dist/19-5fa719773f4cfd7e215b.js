(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./public/components/hypercloud/crd/create-custom-resource-definition.tsx":
/*!********************************************************************************!*\
  !*** ./public/components/hypercloud/crd/create-custom-resource-definition.tsx ***!
  \********************************************************************************/
/*! exports provided: CreateCRD, CreateCRDPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCRD", function() { return CreateCRD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCRDPage", function() { return CreateCRDPage; });
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ */ "./public/components/hypercloud/crd/index.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _console_operator_lifecycle_manager_src_components_operand_operand_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/operand/operand-form */ "./packages/operator-lifecycle-manager/src/components/operand/operand-form.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_operand_operand_yaml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/operand/operand-yaml */ "./packages/operator-lifecycle-manager/src/components/operand/operand-yaml.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/operand/const */ "./packages/operator-lifecycle-manager/src/components/operand/const.ts");
/* harmony import */ var _console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form/utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");
















// eslint-disable-next-line @typescript-eslint/camelcase
const CreateCRD = ({ customResourceDefinition, initialEditorType, loaded, loadError, match, model, activePerspective }) => {
    const { data: crd } = customResourceDefinition;
    const [helpText, setHelpText] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_14__["FORM_HELP_TEXT"]);
    const next = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["CustomResourceDefinitionModel"], match.params.appName, match.params.ns)}/${model.plural}.${model.apiGroup}`;
    const [schema, FormComponent] = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
        var _a, _b, _c;
        const baseSchema = (_c = (_b = (_a = crd === null || crd === void 0 ? void 0 : crd.spec) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.openAPIV3Schema) !== null && _c !== void 0 ? _c : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["definitionFor"])(model);
        return [lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({}, _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_K8S_SCHEMA"], lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](baseSchema, 'properties.status')), _console_operator_lifecycle_manager_src_components_operand_operand_form__WEBPACK_IMPORTED_MODULE_12__["OperandForm"]];
    }, [crd, model]);
    const sample = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => Object(___WEBPACK_IMPORTED_MODULE_10__["exampleForModel"])(crd, model), [crd, model]);
    const pruneFunc = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](data => Object(_console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_15__["prune"])(data, sample), [sample]);
    const onChangeEditorType = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](newMethod => {
        setHelpText(newMethod === _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_8__["EditorType"].Form ? _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_14__["FORM_HELP_TEXT"] : _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_14__["YAML_HELP_TEXT"]);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["StatusBox"], { loaded: loaded, loadError: loadError, data: customResourceDefinition }, loaded ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbs"], { breadcrumbs: [{ name: `Create ${model.label}`, path: window.location.pathname }] })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-create-operand__header-text" }, `Create ${model.label}`),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block" }, helpText)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared_src_components_synced_editor__WEBPACK_IMPORTED_MODULE_6__["SyncedEditor"], { context: {
                formContext: { match, model, next, schema },
                yamlContext: { next, match },
            }, FormEditor: FormComponent, initialData: sample, initialType: initialEditorType, onChangeEditorType: onChangeEditorType, prune: pruneFunc, YAMLEditor: _console_operator_lifecycle_manager_src_components_operand_operand_yaml__WEBPACK_IMPORTED_MODULE_13__["OperandYAML"] }))) : null));
};
const stateToProps = (state, props) => ({
    model: state.k8s.getIn(['RESOURCES', 'models', props.match.params.plural]),
    activePerspective: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_7__["getActivePerspective"])(state),
});
const CreateCRDPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(stateToProps)((props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_11__["Helmet"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, `Create ${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["kindForReference"])(props.match.params.plural)}`)),
    props.model && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_firehose__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
            {
                kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["CustomResourceDefinitionModel"].kind,
                isList: false,
                name: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["nameForModel"])(props.model),
                prop: 'customResourceDefinition',
                optional: true,
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CreateCRD, Object.assign({}, props, { model: props.model, match: props.match, initialEditorType: _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_8__["EditorType"].Form })))))));


/***/ }),

/***/ "./public/components/hypercloud/crd/index.tsx":
/*!****************************************************!*\
  !*** ./public/components/hypercloud/crd/index.tsx ***!
  \****************************************************/
/*! exports provided: parseALMExamples, exampleForModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseALMExamples", function() { return parseALMExamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleForModel", function() { return exampleForModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
// import * as React from 'react';


const parseALMExamples = (crd) => {
    var _a, _b, _c;
    try {
        return JSON.parse((_c = (_b = (_a = crd === null || crd === void 0 ? void 0 : crd.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b['alm-examples']) !== null && _c !== void 0 ? _c : '[]');
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Unable to parse ALM expamples\n', e);
        return [];
    }
};
const exampleForModel = (crd, model) => {
    const almObj = parseALMExamples(crd);
    return lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({}, {
        kind: model.kind,
        apiVersion: (model === null || model === void 0 ? void 0 : model.apiGroup) ? `${model.apiGroup}/${model.apiVersion}` : `${model.apiVersion}`,
    }, lodash__WEBPACK_IMPORTED_MODULE_0__["find"](almObj, (s) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(s) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(model)));
};


/***/ })

}]);
//# sourceMappingURL=19-5fa719773f4cfd7e215b.js.map