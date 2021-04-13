(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./public/components/hypercloud/crd/create-pinned-resource.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/hypercloud/crd/create-pinned-resource.tsx ***!
  \*********************************************************************/
/*! exports provided: CreateDefault, CreateDefaultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDefault", function() { return CreateDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDefaultPage", function() { return CreateDefaultPage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_synced_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/synced-editor */ "./packages/console-shared/src/components/synced-editor/index.tsx");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/synced-editor/editor-toggle */ "./packages/console-shared/src/components/synced-editor/editor-toggle.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./public/components/hypercloud/crd/index.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _console_operator_lifecycle_manager_src_components_operand_operand_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/operand/operand-form */ "./packages/operator-lifecycle-manager/src/components/operand/operand-form.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_operand_operand_yaml__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/operand/operand-yaml */ "./packages/operator-lifecycle-manager/src/components/operand/operand-yaml.tsx");
/* harmony import */ var _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/components/operand/const */ "./packages/operator-lifecycle-manager/src/components/operand/const.ts");
/* harmony import */ var _console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/shared/src/components/dynamic-form/utils */ "./packages/console-shared/src/components/dynamic-form/utils.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../form */ "./public/components/hypercloud/form/index.ts");
/* harmony import */ var _console_internal_module_hypercloud_k8s_kind_to_schema_path__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @console/internal/module/hypercloud/k8s/kind-to-schema-path */ "./public/module/hypercloud/k8s/kind-to-schema-path.ts");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var _console_internal_module_k8s_resource_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @console/internal/module/k8s/resource.js */ "./public/module/k8s/resource.js");




// import { Firehose } from '@console/internal/components/utils/firehose';















// import { safeDump } from 'js-yaml';
// eslint-disable-next-line @typescript-eslint/camelcase
// MEMO : YAML Editor만 제공돼야 되는 리소스 kind
const OnlyYamlEditorKinds = [_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"].kind, _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["TemplateModel"].kind, _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ClusterTemplateModel"].kind];
const CreateDefault = ({ customResourceDefinition, initialEditorType, loadError, match, model, activePerspective }) => {
    if (!model) {
        return null;
    }
    if (OnlyYamlEditorKinds.includes(model.kind)) {
        const next = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourcePathFromModel"])(model, match.params.appName, match.params.ns)}`;
        let definition;
        if (customResourceDefinition) {
            definition = customResourceDefinition.data;
        }
        const sample = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => Object(___WEBPACK_IMPORTED_MODULE_9__["exampleForModel"])(definition, model), [definition, model]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbs"], { breadcrumbs: [{ name: `Create ${model.label}`, path: window.location.pathname }] })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-create-operand__header-text" }, `Create ${model.label}`)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared_src_components_synced_editor__WEBPACK_IMPORTED_MODULE_5__["SyncedEditor"], { context: {
                    formContext: {},
                    yamlContext: { next, match },
                }, initialData: sample, initialType: _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_7__["EditorType"].YAML, FormEditor: null, YAMLEditor: _console_operator_lifecycle_manager_src_components_operand_operand_yaml__WEBPACK_IMPORTED_MODULE_12__["OperandYAML"], supplyEditorToggle: false })));
    }
    else {
        const [loaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
        const [template, setTemplate] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({});
        // const [yaml, setYaml] = React.useState('');
        // React.useEffect(() => {
        //   (async function getSchema() {
        //     await k8sCreateSchema(model.kind).then(data => setTemplate(data));
        //   })();
        // }, []);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
            var _a, _b;
            console.log('model: ', model);
            let type = _form__WEBPACK_IMPORTED_MODULE_15__["pluralToKind"].get(model.plural)['type'];
            let url;
            if (type === 'CustomResourceDefinition') {
                url = Object(_console_internal_module_k8s_resource_js__WEBPACK_IMPORTED_MODULE_18__["getK8sAPIPath"])({ apiGroup: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["CustomResourceDefinitionModel"].apiGroup, apiVersion: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["CustomResourceDefinitionModel"].apiVersion });
                url = `${document.location.origin}${url}/customresourcedefinitions/${model.plural}.${model.apiGroup}`;
            }
            else {
                const directory = (_a = _console_internal_module_hypercloud_k8s_kind_to_schema_path__WEBPACK_IMPORTED_MODULE_16__["kindToSchemaPath"].get(model.kind)) === null || _a === void 0 ? void 0 : _a['directory'];
                const file = (_b = _console_internal_module_hypercloud_k8s_kind_to_schema_path__WEBPACK_IMPORTED_MODULE_16__["kindToSchemaPath"].get(model.kind)) === null || _b === void 0 ? void 0 : _b['file'];
                url = `${document.location.origin}/api/resource/${directory}/${file}`;
            }
            const xhrTest = new XMLHttpRequest();
            xhrTest.open('GET', url);
            xhrTest.setRequestHeader('Authorization', `Bearer ${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_17__["getAccessToken"])()}`);
            xhrTest.onreadystatechange = function () {
                if (xhrTest.readyState == XMLHttpRequest.DONE && xhrTest.status == 200) {
                    let template = xhrTest.response;
                    template = JSON.parse(template);
                    setTemplate(template);
                    setLoaded(true);
                }
            };
            xhrTest.send();
        }, []);
        const [helpText, setHelpText] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_13__["FORM_HELP_TEXT"]);
        const next = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourcePathFromModel"])(model, match.params.appName, match.params.ns)}`;
        let definition;
        if (customResourceDefinition) {
            definition = customResourceDefinition.data;
        }
        const [schema, FormComponent] = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => {
            var _a, _b, _c, _d, _e, _f;
            const baseSchema = customResourceDefinition ? (_c = (_b = (_a = definition === null || definition === void 0 ? void 0 : definition.spec) === null || _a === void 0 ? void 0 : _a.validation) === null || _b === void 0 ? void 0 : _b.openAPIV3Schema) !== null && _c !== void 0 ? _c : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["definitionFor"])(model) : (_f = (_e = (_d = template === null || template === void 0 ? void 0 : template.spec) === null || _d === void 0 ? void 0 : _d.validation) === null || _e === void 0 ? void 0 : _e.openAPIV3Schema) !== null && _f !== void 0 ? _f : template;
            return [lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"]({}, _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_K8S_SCHEMA"], lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](baseSchema, 'properties.status')), _console_operator_lifecycle_manager_src_components_operand_operand_form__WEBPACK_IMPORTED_MODULE_11__["OperandForm"]];
        }, [template, definition, model]);
        const sample = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](() => Object(___WEBPACK_IMPORTED_MODULE_9__["exampleForModel"])(definition, model), [definition, model]);
        const pruneFunc = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](data => Object(_console_shared_src_components_dynamic_form_utils__WEBPACK_IMPORTED_MODULE_14__["prune"])(data, sample), [sample]);
        const onChangeEditorType = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](newMethod => {
            setHelpText(newMethod === _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_7__["EditorType"].Form ? _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_13__["FORM_HELP_TEXT"] : _console_operator_lifecycle_manager_src_components_operand_const__WEBPACK_IMPORTED_MODULE_13__["YAML_HELP_TEXT"]);
        }, []);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["StatusBox"], { loaded: loaded, loadError: loadError, data: customResourceDefinition || template }, loaded || !customResourceDefinition ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbs"], { breadcrumbs: [{ name: `Create ${model.label}`, path: window.location.pathname }] })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-create-operand__header-text" }, `Create ${model.label}`),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block" }, helpText)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared_src_components_synced_editor__WEBPACK_IMPORTED_MODULE_5__["SyncedEditor"], { context: {
                    formContext: { match, model, next, schema },
                    yamlContext: { next, match },
                }, FormEditor: FormComponent, initialData: sample, initialType: initialEditorType, onChangeEditorType: onChangeEditorType, prune: pruneFunc, YAMLEditor: _console_operator_lifecycle_manager_src_components_operand_operand_yaml__WEBPACK_IMPORTED_MODULE_12__["OperandYAML"] }))) : null));
    }
};
const stateToProps = (state, props) => {
    let plural;
    let model;
    if (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(_form__WEBPACK_IMPORTED_MODULE_15__["pluralToKind"].get(props.match.params.plural)['kind'])) {
        model = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(_form__WEBPACK_IMPORTED_MODULE_15__["pluralToKind"].get(props.match.params.plural)['kind']);
        plural = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(model);
    }
    return { model: state.k8s.getIn(['RESOURCES', 'models', plural]) || state.k8s.getIn(['RESOURCES', 'models', model.kind]), activePerspective: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_6__["getActivePerspective"])(state) };
};
const CreateDefaultPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(stateToProps)((props) => {
    // const type = pluralToKind.get(props.match.params.plural)['type'];
    // const resources =
    //   type === 'CustomResourceDefinition' && props.model
    //     ? [
    //         {
    //           kind: CustomResourceDefinitionModel.kind,
    //           isList: false,
    //           name: nameForModel(props.model),
    //           prop: 'customResourceDefinition',
    //           optional: true,
    //         },
    //       ]
    //     : [];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_10__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, `Create ${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["kindForReference"])(props.match.params.plural)}`)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CreateDefault, Object.assign({}, props, { model: props.model, match: props.match, initialEditorType: _console_shared_src_components_synced_editor_editor_toggle__WEBPACK_IMPORTED_MODULE_7__["EditorType"].Form }))));
});


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
//# sourceMappingURL=36-d967f40d17bf1884f60b.js.map