(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./packages/console-shared/src/components/editor/ShortcutsLink.tsx":
/*!*************************************************************************!*\
  !*** ./packages/console-shared/src/components/editor/ShortcutsLink.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shortcuts */ "./packages/console-shared/src/components/shortcuts/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





const ShortcutsLink = ({ onHideShortcuts }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], { "aria-label": "Shortcuts", bodyContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shortcuts__WEBPACK_IMPORTED_MODULE_3__["ShortcutTable"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shortcuts__WEBPACK_IMPORTED_MODULE_3__["Shortcut"], { ctrl: true, keyName: "space" }, "Activate auto complete"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shortcuts__WEBPACK_IMPORTED_MODULE_3__["Shortcut"], { ctrlCmd: true, shift: true, keyName: "o" }, "View document outline"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shortcuts__WEBPACK_IMPORTED_MODULE_3__["Shortcut"], { hover: true }, "View property descriptions"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_shortcuts__WEBPACK_IMPORTED_MODULE_3__["Shortcut"], { ctrlCmd: true, keyName: "s" }, "Save")), maxWidth: "25rem", distance: 18, onHide: onHideShortcuts },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "button", variant: "link", isInline: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["QuestionCircleIcon"], { className: "co-icon-space-r co-p-has-sidebar__sidebar-link-icon" }),
            t('COMMON:MSG_COMMON_BUTTON_ETC_10'))));
};
/* harmony default export */ __webpack_exports__["default"] = (ShortcutsLink);


/***/ }),

/***/ "./packages/console-shared/src/components/editor/YAMLEditor.scss":
/*!***********************************************************************!*\
  !*** ./packages/console-shared/src/components/editor/YAMLEditor.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/console-shared/src/components/editor/YAMLEditor.tsx":
/*!**********************************************************************!*\
  !*** ./packages/console-shared/src/components/editor/YAMLEditor.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-measure */ "./node_modules/react-measure/dist/index.esm.js");
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-monaco-editor */ "./node_modules/react-monaco-editor/lib/index.js");
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_monaco_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yaml_editor_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yaml-editor-utils */ "./packages/console-shared/src/components/editor/yaml-editor-utils.ts");
/* harmony import */ var _YAMLEditorToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./YAMLEditorToolbar */ "./packages/console-shared/src/components/editor/YAMLEditorToolbar.tsx");
/* harmony import */ var _YAMLEditor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./YAMLEditor.scss */ "./packages/console-shared/src/components/editor/YAMLEditor.scss");
/* harmony import */ var _YAMLEditor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_YAMLEditor_scss__WEBPACK_IMPORTED_MODULE_5__);






const YAMLEditor = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => {
    const { value, options = _yaml_editor_utils__WEBPACK_IMPORTED_MODULE_3__["defaultEditorOptions"], showShortcuts, toolbarLinks, minHeight, onChange, onSave, } = props;
    const editorDidMount = (editor, monaco) => {
        editor.layout();
        editor.focus();
        Object(_yaml_editor_utils__WEBPACK_IMPORTED_MODULE_3__["registerYAMLinMonaco"])(monaco);
        monaco.editor.getModels()[0].updateOptions({ tabSize: 2 });
        onSave && editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, onSave); // eslint-disable-line no-bitwise
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_YAMLEditorToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], { showShortcuts: showShortcuts, toolbarLinks: toolbarLinks }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_measure__WEBPACK_IMPORTED_MODULE_1__["default"], { bounds: true }, ({ measureRef, contentRect }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: measureRef, className: "ocs-yaml-editor__root", style: { minHeight } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ocs-yaml-editor__wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_monaco_editor__WEBPACK_IMPORTED_MODULE_2___default.a, { ref: ref, language: "yaml", theme: "console", height: contentRect.bounds.height, width: contentRect.bounds.width, value: value, options: options, editorDidMount: editorDidMount, onChange: onChange })))))));
});
/* harmony default export */ __webpack_exports__["default"] = (YAMLEditor);


/***/ }),

/***/ "./packages/console-shared/src/components/editor/YAMLEditorToolbar.scss":
/*!******************************************************************************!*\
  !*** ./packages/console-shared/src/components/editor/YAMLEditorToolbar.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/console-shared/src/components/editor/YAMLEditorToolbar.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/console-shared/src/components/editor/YAMLEditorToolbar.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShortcutsLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShortcutsLink */ "./packages/console-shared/src/components/editor/ShortcutsLink.tsx");
/* harmony import */ var _YAMLEditorToolbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YAMLEditorToolbar.scss */ "./packages/console-shared/src/components/editor/YAMLEditorToolbar.scss");
/* harmony import */ var _YAMLEditorToolbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_YAMLEditorToolbar_scss__WEBPACK_IMPORTED_MODULE_2__);



const YAMLEditorToolbar = ({ showShortcuts, toolbarLinks }) => {
    if (!showShortcuts && !(toolbarLinks === null || toolbarLinks === void 0 ? void 0 : toolbarLinks.length))
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ocs-yaml-editor-toolbar__links" },
        showShortcuts && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ocs-yaml-editor-toolbar__link" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ShortcutsLink__WEBPACK_IMPORTED_MODULE_1__["default"], null))),
        toolbarLinks &&
            toolbarLinks.map((link, index) => (
            // eslint-disable-next-line react/no-array-index-key
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: `${index}` },
                (showShortcuts || index > 0) && link ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-action-divider" }, "|")) : null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ocs-yaml-editor-toolbar__link" }, link))))));
};
/* harmony default export */ __webpack_exports__["default"] = (YAMLEditorToolbar);


/***/ }),

/***/ "./packages/console-shared/src/components/editor/yaml-editor-utils.ts":
/*!****************************************************************************!*\
  !*** ./packages/console-shared/src/components/editor/yaml-editor-utils.ts ***!
  \****************************************************************************/
/*! exports provided: defaultEditorOptions, hackyFocusEditor, registerYAMLLanguage, createYAMLService, registerYAMLCompletion, registerYAMLDocumentSymbols, registerYAMLHover, enableYAMLValidation, registerYAMLinMonaco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEditorOptions", function() { return defaultEditorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hackyFocusEditor", function() { return hackyFocusEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerYAMLLanguage", function() { return registerYAMLLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createYAMLService", function() { return createYAMLService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerYAMLCompletion", function() { return registerYAMLCompletion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerYAMLDocumentSymbols", function() { return registerYAMLDocumentSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerYAMLHover", function() { return registerYAMLHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableYAMLValidation", function() { return enableYAMLValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerYAMLinMonaco", function() { return registerYAMLinMonaco; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var monaco_languageclient_lib_monaco_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! monaco-languageclient/lib/monaco-converter */ "./node_modules/monaco-languageclient/lib/monaco-converter.js");
/* harmony import */ var monaco_languageclient_lib_monaco_converter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(monaco_languageclient_lib_monaco_converter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yaml_language_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yaml-language-server */ "./node_modules/yaml-language-server/out/server/src/index.js");
/* harmony import */ var yaml_language_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yaml_language_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_module_k8s_openapi_to_json_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s/openapi-to-json-schema */ "./public/module/k8s/openapi-to-json-schema.ts");
/* harmony import */ var _console_internal_module_k8s_swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s/swagger */ "./public/module/k8s/swagger.ts");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");






window.monaco.editor.defineTheme('console', {
    base: 'vs-dark',
    inherit: true,
    rules: [
        // avoid pf tokens for `rules` since tokens are opaque strings that might not be hex values
        { token: 'number', foreground: 'ace12e' },
        { token: 'type', foreground: '73bcf7' },
        { token: 'string', foreground: 'f0ab00' },
        { token: 'keyword', foreground: 'cbc0ff' },
    ],
    colors: {
        'editor.background': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_5__["global_BackgroundColor_dark_100"].value,
        'editorGutter.background': '#292e34',
        'editorLineNumber.activeForeground': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_5__["global_BackgroundColor_100"].value,
        'editorLineNumber.foreground': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_5__["global_BackgroundColor_300"].value,
    },
});
const defaultEditorOptions = { readOnly: false, scrollBeyondLastLine: false };
// Unfortunately, `editor.focus()` doesn't work when hiding the shortcuts
// popover. We need to find the actual DOM element.
const hackyFocusEditor = () => setTimeout(() => { var _a; return (_a = document.querySelector('.monaco-editor textarea')) === null || _a === void 0 ? void 0 : _a.focus(); });
const registerYAMLLanguage = (monaco) => {
    // register the YAML language with Monaco
    monaco.languages.register({
        id: 'yaml',
        extensions: ['.yml', '.yaml'],
        aliases: ['YAML', 'yaml'],
        mimetypes: ['application/yaml'],
    });
};
const createYAMLService = () => {
    const resolveSchema = (url) => {
        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.open('GET', url, true);
            xhr.send();
        });
        return promise;
    };
    const workspaceContext = {
        resolveRelativePath: (relativePath, resource) => url__WEBPACK_IMPORTED_MODULE_0__["resolve"](resource, relativePath),
    };
    const yamlService = Object(yaml_language_server__WEBPACK_IMPORTED_MODULE_2__["getLanguageService"])(resolveSchema, workspaceContext, []);
    // Prepare the schema
    const yamlOpenAPI = Object(_console_internal_module_k8s_swagger__WEBPACK_IMPORTED_MODULE_4__["getStoredSwagger"])();
    // Convert the openAPI schema to something the language server understands
    const kubernetesJSONSchema = Object(_console_internal_module_k8s_openapi_to_json_schema__WEBPACK_IMPORTED_MODULE_3__["openAPItoJSONSchema"])(yamlOpenAPI);
    const schemas = [
        {
            uri: 'inmemory:yaml',
            fileMatch: ['*'],
            schema: kubernetesJSONSchema,
        },
    ];
    yamlService.configure({
        validate: true,
        schemas,
        hover: true,
        completion: true,
    });
    return yamlService;
};
const registerYAMLCompletion = (languageID, monaco, m2p, p2m, createDocument, yamlService) => {
    monaco.languages.registerCompletionItemProvider(languageID, {
        provideCompletionItems(model, position) {
            const document = createDocument(model);
            return yamlService
                .doComplete(document, m2p.asPosition(position.lineNumber, position.column), true)
                .then((list) => {
                return p2m.asCompletionResult(list);
            });
        },
        resolveCompletionItem(item) {
            return yamlService
                .doResolve(m2p.asCompletionItem(item))
                .then((result) => p2m.asCompletionItem(result));
        },
    });
};
const registerYAMLDocumentSymbols = (languageID, monaco, p2m, createDocument, yamlService) => {
    monaco.languages.registerDocumentSymbolProvider(languageID, {
        provideDocumentSymbols(model) {
            const document = createDocument(model);
            return p2m.asSymbolInformations(yamlService.findDocumentSymbols(document));
        },
    });
};
const registerYAMLHover = (languageID, monaco, m2p, p2m, createDocument, yamlService) => {
    monaco.languages.registerHoverProvider(languageID, {
        provideHover(model, position) {
            const doc = createDocument(model);
            return yamlService
                .doHover(doc, m2p.asPosition(position.lineNumber, position.column))
                .then((hover) => {
                return p2m.asHover(hover);
            })
                .then((e) => {
                for (const el of document.getElementsByClassName('monaco-editor-hover')) {
                    el.onclick = (event) => event.preventDefault();
                    el.onauxclick = (event) => {
                        window.open(event.target.getAttribute('data-href'), '_blank').opener = null;
                        event.preventDefault();
                    };
                }
                return e;
            });
        },
    });
};
const enableYAMLValidation = (monaco, p2m, monacoURI, createDocument, yamlService) => {
    const pendingValidationRequests = new Map();
    const getModel = () => monaco.editor.getModels()[0];
    const cleanPendingValidation = (document) => {
        const request = pendingValidationRequests.get(document.uri);
        if (request !== undefined) {
            clearTimeout(request);
            pendingValidationRequests.delete(document.uri);
        }
    };
    const cleanDiagnostics = () => monaco.editor.setModelMarkers(monaco.editor.getModel(monacoURI), 'default', []);
    const doValidate = (document) => {
        if (document.getText().length === 0) {
            cleanDiagnostics();
            return;
        }
        yamlService
            .doValidation(document, true)
            .then((diagnostics) => {
            const markers = p2m.asDiagnostics(diagnostics);
            monaco.editor.setModelMarkers(getModel(), 'default', markers);
        })
            .catch(() => { });
    };
    getModel().onDidChangeContent(() => {
        const document = createDocument(getModel());
        cleanPendingValidation(document);
        pendingValidationRequests.set(document.uri, setTimeout(() => {
            pendingValidationRequests.delete(document.uri);
            doValidate(document);
        }));
    });
};
const registerYAMLinMonaco = (monaco) => {
    const LANGUAGE_ID = 'yaml';
    const MODEL_URI = 'inmemory://model.yaml';
    const MONACO_URI = monaco.Uri.parse(MODEL_URI);
    const m2p = new monaco_languageclient_lib_monaco_converter__WEBPACK_IMPORTED_MODULE_1__["MonacoToProtocolConverter"]();
    const p2m = new monaco_languageclient_lib_monaco_converter__WEBPACK_IMPORTED_MODULE_1__["ProtocolToMonacoConverter"]();
    function createDocument(model) {
        return yaml_language_server__WEBPACK_IMPORTED_MODULE_2__["TextDocument"].create(MODEL_URI, model.getModeId(), model.getVersionId(), model.getValue());
    }
    const yamlService = createYAMLService();
    // validation is not a 'registered' feature like the others, it relies on calling the yamlService
    // directly for validation results when content in the editor has changed
    enableYAMLValidation(monaco, p2m, MONACO_URI, createDocument, yamlService);
    /**
     * This exists because react-monaco-editor passes the same monaco
     * object each time. Without it you would be registering all the features again and
     * getting duplicate results.
     *
     * Monaco does not provide any apis for unregistering or checking if the features have already
     * been registered for a language.
     *
     * We check that > 1 YAML language exists because one is the default and one is the initial register
     * that setups our features.
     */
    if (monaco.languages.getLanguages().filter((x) => x.id === LANGUAGE_ID).length > 1) {
        return;
    }
    registerYAMLLanguage(monaco); // register the YAML language with monaco
    registerYAMLCompletion(LANGUAGE_ID, monaco, m2p, p2m, createDocument, yamlService);
    registerYAMLDocumentSymbols(LANGUAGE_ID, monaco, p2m, createDocument, yamlService);
    registerYAMLHover(LANGUAGE_ID, monaco, m2p, p2m, createDocument, yamlService);
};


/***/ }),

/***/ "./public/module/k8s/openapi-to-json-schema.ts":
/*!*****************************************************!*\
  !*** ./public/module/k8s/openapi-to-json-schema.ts ***!
  \*****************************************************/
/*! exports provided: openAPItoJSONSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAPItoJSONSchema", function() { return openAPItoJSONSchema; });
// contains all the relevant information for transforming openapi specifications (such as kuberneres openapi)
// to json schemas
/**
 * Given an array of GroupVersionKind objects, return their JSON Schema representation as enums
 */
function groupVersionKindToEnums(gvkObjArray) {
    const versionEnum = [];
    const kindEnum = [];
    for (const gvkObj of gvkObjArray) {
        if (gvkObj.group && gvkObj.version) {
            versionEnum.push(`${gvkObj.group}/${gvkObj.version}`);
        }
        else if (gvkObj.version) {
            versionEnum.push(gvkObj.version);
        }
        if (gvkObj.kind) {
            kindEnum.push(gvkObj.kind);
        }
    }
    return {
        versionEnum,
        kindEnum,
    };
}
/**
 * Append enums to APIVersion or create the object if it doesn't exist
 */
function createOrAppendAPIVersion(openAPI, apiVersionEnum) {
    if (openAPI.apiVersion) {
        if (openAPI.apiVersion.enum) {
            openAPI.apiVersion.enum.push(...apiVersionEnum);
        }
        else {
            openAPI.apiVersion.enum = apiVersionEnum;
        }
    }
    else {
        openAPI.apiVersion = {
            enum: apiVersionEnum,
        };
    }
}
/**
 * Append enums to kind or create the object if it doesn't exist
 */
function createOrAppendKind(openAPI, kindEnum) {
    if (openAPI.kind) {
        if (openAPI.kind.enum) {
            openAPI.kind.enum.push(...kindEnum);
        }
        else {
            openAPI.kind.enum = kindEnum;
        }
    }
    else {
        openAPI.kind = {
            enum: kindEnum,
        };
    }
}
/**
 * Converts the openAPI kubernetes specification for group, version, kind to JSON Schema
 *
 * Context: The openAPI specification gives the group, version, and kind objects as 'x-kubernetes-group-version-kind'
 * instead of adding the values to the enum's
 */
function convertGroupVersionKindToJSONSchema(openAPI) {
    for (const definition in openAPI) {
        if (openAPI.hasOwnProperty(definition)) {
            const openAPIDefinition = openAPI[definition];
            const groupVersionKind = openAPIDefinition['x-kubernetes-group-version-kind'];
            // If this object has x-kubernetes-group-version-kind then add their values into correct places in JSON Schema
            if (groupVersionKind && openAPIDefinition.properties) {
                const gvkEnums = groupVersionKindToEnums(groupVersionKind);
                createOrAppendAPIVersion(openAPIDefinition.properties, gvkEnums.versionEnum);
                createOrAppendKind(openAPIDefinition.properties, gvkEnums.kindEnum);
            }
        }
    }
    return openAPI;
}
/**
 * Takes in the stored kubernetes openAPI object and outputs a JSON Schema of the object
 */
function openAPItoJSONSchema(openAPI) {
    if (!openAPI) {
        return null;
    }
    const convertedOpenAPI = convertGroupVersionKindToJSONSchema(openAPI);
    const oneOfSchemas = [];
    const openAPIDefinitions = {};
    for (const schemaProperty in convertedOpenAPI) {
        if (convertedOpenAPI.hasOwnProperty(schemaProperty)) {
            openAPIDefinitions[schemaProperty] = convertedOpenAPI[schemaProperty];
            oneOfSchemas.push({
                $ref: `#/definitions/${schemaProperty}`,
            });
        }
    }
    return {
        definitions: Object.assign({}, openAPIDefinitions),
        oneOf: oneOfSchemas,
    };
}


/***/ })

}]);
//# sourceMappingURL=7-d044227aab647df56e5b.js.map