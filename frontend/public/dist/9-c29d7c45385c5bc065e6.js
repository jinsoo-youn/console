(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./public/components/edit-yaml.jsx":
/*!*****************************************!*\
  !*** ./public/components/edit-yaml.jsx ***!
  \*****************************************/
/*! exports provided: EditYAML_, EditYAML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditYAML_", function() { return EditYAML_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditYAML", function() { return EditYAML; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _sidebars_resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebars/resource-sidebar-samples */ "./public/components/sidebars/resource-sidebar-samples.tsx");
/* harmony import */ var _sidebars_resource_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebars/resource-sidebar */ "./public/components/sidebars/resource-sidebar.jsx");
/* harmony import */ var _models_yaml_templates__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/yaml-templates */ "./public/models/yaml-templates.ts");
/* harmony import */ var _module_k8s_swagger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../module/k8s/swagger */ "./public/module/k8s/swagger.ts");
/* harmony import */ var _console_shared_src_components_editor_YAMLEditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @console/shared/src/components/editor/YAMLEditor */ "./packages/console-shared/src/components/editor/YAMLEditor.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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




















const generateObjToLoad = (kind, id, yaml, namespace = 'default') => {
    const sampleObj = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(yaml ? yaml : _models_yaml_templates__WEBPACK_IMPORTED_MODULE_16__["yamlTemplates"].getIn([kind, id]));
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["has"](sampleObj.metadata, 'namespace')) {
        sampleObj.metadata.namespace = namespace;
    }
    return sampleObj;
};
const stateToProps = ({ k8s, UI }) => ({
    activeNamespace: UI.get('activeNamespace'),
    impersonate: UI.get('impersonate'),
    models: k8s.getIn(['RESOURCES', 'models']),
});
/**
 * This component loads the entire Monaco editor library with it.
 * Consider using `AsyncComponent` to dynamically load this component when needed.
 */
/** @augments {React.Component<{obj?: any, create: boolean, kind: string, redirectURL?: string, resourceObjPath?: (obj: K8sResourceKind, objRef: string) => string}, onChange?: (yaml: string) => void>} */
const EditYAML_ = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(stateToProps)(class EditYAML extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(props) {
        super(props);
        this.insertYamlContent_ = (id, yaml, kind) => {
            const content = this.getYamlContent_(id, yaml, kind);
            this.addToYAML(id, content);
        };
        this.replaceYamlContent_ = (id, yaml, kind) => {
            const content = this.getYamlContent_(id, yaml, kind);
            this.loadYaml(true, content);
        };
        this.toggleSidebar = () => {
            this.setState((state) => {
                return { showSidebar: !state.showSidebar };
            });
            window.dispatchEvent(new Event('sidebar_toggle'));
        };
        this.state = {
            error: null,
            success: null,
            height: 500,
            initialized: false,
            stale: false,
            sampleObj: props.sampleObj,
            fileUpload: props.fileUpload,
            showSidebar: !!props.create,
        };
        this.monacoRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        // k8s uses strings for resource versions
        this.displayedVersion = '0';
        // Default cancel action is browser back navigation
        this.onCancel = 'onCancel' in props ? props.onCancel : _utils__WEBPACK_IMPORTED_MODULE_11__["history"].goBack;
        this.downloadSampleYaml_ = this.downloadSampleYaml_.bind(this);
        if (this.props.error) {
            this.handleError(this.props.error);
        }
    }
    getModel(obj) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](obj)) {
            return null;
        }
        const { models } = this.props;
        return models.get(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(obj)) || models.get(obj.kind);
    }
    handleError(error) {
        this.setState({ error, success: null });
    }
    componentDidMount() {
        this.loadYaml();
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isOver) {
            return;
        }
        const newVersion = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](nextProps.obj, 'metadata.resourceVersion');
        const stale = this.displayedVersion !== newVersion;
        this.setState({ stale });
        if (nextProps.error) {
            this.handleError(nextProps.error);
        }
        else if (this.state.error) {
            //clear stale error state
            this.setState({ error: '' });
        }
        if (nextProps.sampleObj) {
            this.loadYaml(!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEqual"](this.state.sampleObj, nextProps.sampleObj), nextProps.sampleObj);
        }
        else if (nextProps.fileUpload) {
            this.loadYaml(!lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEqual"](this.state.fileUpload, nextProps.fileUpload), nextProps.fileUpload);
        }
        else {
            this.loadYaml();
        }
    }
    reload() {
        this.loadYaml(true);
        this.setState({
            sampleObj: null,
            error: null,
            success: null,
        });
    }
    checkEditAccess(obj) {
        const { readOnly, impersonate } = this.props;
        if (readOnly) {
            // We're already read-only. No need for the access review.
            return;
        }
        const model = this.getModel(obj);
        if (!model) {
            return;
        }
        const { name, namespace } = obj.metadata;
        const resourceAttributes = {
            group: model.apiGroup,
            resource: model.plural,
            verb: 'update',
            name,
            namespace,
        };
        Object(_utils__WEBPACK_IMPORTED_MODULE_11__["checkAccess"])(resourceAttributes, impersonate).then((resp) => {
            const notAllowed = !resp.status.allowed;
            this.setState({ notAllowed });
            if (this.monacoRef.current) {
                this.monacoRef.current.editor.updateOptions({ readOnly: notAllowed });
            }
        });
    }
    convertObjToYAMLString(obj) {
        let yaml = '';
        if (obj) {
            if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isString"](obj)) {
                yaml = obj;
            }
            else {
                try {
                    yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(obj);
                    this.checkEditAccess(obj);
                }
                catch (e) {
                    yaml = `Error getting YAML: ${e}`;
                }
            }
        }
        return yaml;
    }
    loadYaml(reload = false, obj = this.props.obj) {
        if (this.state.initialized && !reload) {
            return;
        }
        const yaml = this.convertObjToYAMLString(obj);
        this.displayedVersion = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'metadata.resourceVersion');
        this.setState({ yaml, initialized: true, stale: false });
    }
    addToYAML(id, obj) {
        const yaml = this.convertObjToYAMLString(obj);
        const selection = this.monacoRef.current.editor.getSelection();
        const range = new window.monaco.Range(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn);
        // Grab the current position and indent every row to left-align the text at the same indentation
        const indentSize = new Array(selection.startColumn).join(' ');
        const lines = yaml.split('\n');
        const lineCount = lines.length;
        const indentedText = lines
            .map((line, i) => {
            if (i === 0) {
                // Already indented, leave it alone
                return line;
            }
            return `${indentSize}${line}`;
        })
            .join('\n');
        // Grab the selection size of what we are about to add
        const newContentSelection = new window.monaco.Selection(selection.startLineNumber, 0, selection.startLineNumber + lineCount - 1, lines[lines.length - 1].length);
        const op = { range, text: indentedText, forceMoveMarkers: true };
        this.monacoRef.current.editor.executeEdits(id, [op], [newContentSelection]);
        this.monacoRef.current.editor.focus();
        this.displayedVersion = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'metadata.resourceVersion');
        this.setState({ yaml: this.monacoRef.current.editor.getValue() });
    }
    getEditor() {
        return this.monacoRef.current.editor;
    }
    save() {
        const { onSave } = this.props;
        let obj;
        if (onSave) {
            onSave(this.getEditor().getValue());
            return;
        }
        try {
            obj = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(this.getEditor().getValue());
        }
        catch (e) {
            this.handleError(`Error parsing YAML: ${e}`);
            return;
        }
        if (!obj.apiVersion) {
            this.handleError('No "apiVersion" field found in YAML.');
            return;
        }
        if (!obj.kind) {
            this.handleError('No "kind" field found in YAML.');
            return;
        }
        const model = this.getModel(obj);
        if (!model) {
            this.handleError(`The server doesn't have a resource type "kind: ${obj.kind}, apiVersion: ${obj.apiVersion}".`);
            return;
        }
        if (!obj.metadata) {
            this.handleError('No "metadata" field found in YAML.');
            return;
        }
        // If this is a namespaced resource, default to the active namespace when none is specified in the YAML.
        if (!obj.metadata.namespace && model.namespaced) {
            if (this.props.activeNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_8__["ALL_NAMESPACES_KEY"]) {
                this.handleError('No "metadata.namespace" field found in YAML.');
                return;
            }
            obj.metadata.namespace = this.props.activeNamespace;
        }
        const { namespace: newNamespace, name: newName } = obj.metadata;
        if (!this.props.create && this.props.obj) {
            const { namespace, name } = this.props.obj.metadata;
            if (name !== newName) {
                this.handleError(`Cannot change resource name (original: "${name}", updated: "${newName}").`);
                return;
            }
            if (namespace !== newNamespace) {
                this.handleError(`Cannot change resource namespace (original: "${namespace}", updated: "${newNamespace}").`);
                return;
            }
            if (this.props.obj.kind !== obj.kind) {
                this.handleError(`Cannot change resource kind (original: "${this.props.obj.kind}", updated: "${obj.kind}").`);
                return;
            }
            const apiGroup = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["groupVersionFor"])(this.props.obj.apiVersion).group;
            const newAPIGroup = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["groupVersionFor"])(obj.apiVersion).group;
            if (apiGroup !== newAPIGroup) {
                this.handleError(`Cannot change API group (original: "${apiGroup}", updated: "${newAPIGroup}").`);
                return;
            }
        }
        this.setState({ success: null, error: null }, () => {
            let action = _module_k8s__WEBPACK_IMPORTED_MODULE_12__["k8sUpdate"];
            let redirect = false;
            if (this.props.create) {
                action = _module_k8s__WEBPACK_IMPORTED_MODULE_12__["k8sCreate"];
                delete obj.metadata.resourceVersion;
                redirect = true;
            }
            action(model, obj, newNamespace, newName)
                .then((o) => {
                if (redirect) {
                    let url = this.props.redirectURL;
                    if (!url) {
                        const path = lodash_es__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.props.resourceObjPath)
                            ? this.props.resourceObjPath
                            : _utils__WEBPACK_IMPORTED_MODULE_11__["resourceObjPath"];
                        url = path(o, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceFor"])(o));
                    }
                    _utils__WEBPACK_IMPORTED_MODULE_11__["history"].push(url);
                    // TODO: (ggreer). show message on new page. maybe delete old obj?
                    return;
                }
                const success = `${newName} has been updated to version ${o.metadata.resourceVersion}`;
                this.setState({ success, error: null });
                this.loadYaml(true, o);
            })
                .catch((e) => this.handleError(e.message));
        });
    }
    download(data = this.getEditor().getValue()) {
        const blob = new Blob([data], { type: 'text/yaml;charset=utf-8' });
        let filename = 'k8s-object.yaml';
        try {
            const obj = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(data);
            if (obj.kind) {
                filename = `${obj.kind.toLowerCase()}-${obj.metadata.name}.yaml`;
            }
        }
        catch (unused) {
            // unused
        }
        Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, filename);
    }
    getYamlContent_(id = 'default', yaml = '', kind = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(this.props.model)) {
        try {
            const sampleObj = generateObjToLoad(kind, id, yaml, this.props.obj.metadata.namespace);
            this.setState({ sampleObj });
            return sampleObj;
        }
        catch (error) {
            Object(_modals__WEBPACK_IMPORTED_MODULE_10__["errorModal"])({
                title: 'Failed to Parse YAML Sample',
                error: (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-pre-line" }, error.message || error.name || 'An error occurred.')),
            });
        }
    }
    downloadSampleYaml_(id = 'default', yaml = '', kind = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(this.props.model)) {
        try {
            const sampleObj = generateObjToLoad(kind, id, yaml, this.props.obj.metadata.namespace);
            const data = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(sampleObj);
            this.download(data);
        }
        catch (e) {
            this.download(yaml);
        }
    }
    render() {
        if (!this.props.create && !this.props.obj) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["Loading"], null);
        }
        const { connectDropTarget, isOver, canDrop, create, yamlSamplesList, customClass, onChange = () => null, t, } = this.props;
        const klass = classnames__WEBPACK_IMPORTED_MODULE_2__('co-file-dropzone-container', {
            'co-file-dropzone--drop-over': isOver,
        });
        const { error, success, stale, yaml, showSidebar } = this.state;
        const { obj, download = true, header, genericYAML = false, children: customAlerts, } = this.props;
        const readOnly = this.props.readOnly || this.state.notAllowed;
        const options = { readOnly, scrollBeyondLastLine: false };
        const model = this.getModel(obj);
        const { samples, snippets } = model
            ? Object(_sidebars_resource_sidebar_samples__WEBPACK_IMPORTED_MODULE_14__["getResourceSidebarSamples"])(model, yamlSamplesList)
            : { samples: [], snippets: [] };
        const definition = model ? Object(_module_k8s_swagger__WEBPACK_IMPORTED_MODULE_17__["definitionFor"])(model) : { properties: [] };
        const showSchema = definition && !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](definition.properties);
        const hasSidebarContent = showSchema || !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](samples) || !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](snippets);
        const sidebarLink = !showSidebar && hasSidebarContent ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "button", variant: "link", isInline: true, onClick: this.toggleSidebar },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["InfoCircleIcon"], { className: "co-icon-space-r co-p-has-sidebar__sidebar-link-icon" }),
            t('COMMON:MSG_COMMON_BUTTON_ETC_11'))) : null;
        const editYamlComponent = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-file-dropzone co-file-dropzone__flex" },
            canDrop && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: klass },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-file-dropzone__drop-text" }, "Drop file here"))),
            create && !this.props.hideHeader && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "yaml-editor__header" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Split"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["SplitItem"], { isFilled: true },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "yaml-editor__header-text" }, header)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["SplitItem"], null, Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["getBadgeFromType"])(model && model.badge))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block" }, t('COMMON:MSG_CREATEYAML_DIV1_DESCRIPTION_1')))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pf-c-form co-m-page__body" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-p-has-sidebar" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-p-has-sidebar__body" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('yaml-editor', customClass), ref: (r) => (this.editor = r) },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared_src_components_editor_YAMLEditor__WEBPACK_IMPORTED_MODULE_18__["default"], { ref: this.monacoRef, value: yaml, options: options, showShortcuts: !genericYAML, minHeight: "100px", toolbarLinks: sidebarLink ? [sidebarLink] : [], onChange: (newValue) => this.setState({ yaml: newValue }, () => onChange(newValue)), onSave: () => this.save() }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "yaml-editor__buttons", ref: (r) => (this.buttons = r) },
                                customAlerts,
                                error && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: "danger", title: "An error occurred" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-pre-line" }, error))),
                                success && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Alert"], { isInline: true, className: "co-alert", variant: "success", title: success })),
                                stale && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Alert"], { isInline: true, className: "co-alert", variant: "info", title: "This object has been updated." }, "Click reload to see the new version.")),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"], { className: "pf-c-form__group--no-top-margin" },
                                    create && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "submit", variant: "primary", id: "save-changes", onClick: () => this.save() }, t('COMMON:MSG_COMMON_BUTTON_ETC_9'))),
                                    !create && !readOnly && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "submit", variant: "primary", id: "save-changes", onClick: () => this.save() }, t('COMMON:MSG_COMMON_BUTTON_COMMIT_3'))),
                                    !create && !genericYAML && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "submit", variant: "secondary", id: "reload-object", onClick: () => this.reload() }, t('COMMON:MSG_COMMON_BUTTON_ETC_13'))),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { variant: "secondary", id: "cancel", onClick: () => this.onCancel() }, t('COMMON:MSG_COMMON_BUTTON_COMMIT_2')),
                                    download && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "submit", variant: "secondary", className: "pf-c-button--align-right hidden-sm hidden-xs", onClick: () => this.download() },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["DownloadIcon"], null),
                                        " ",
                                        t('COMMON:MSG_COMMON_BUTTON_ETC_12'))))))),
                    hasSidebarContent && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sidebars_resource_sidebar__WEBPACK_IMPORTED_MODULE_15__["ResourceSidebar"], { isCreateMode: create, kindObj: model, loadSampleYaml: this.replaceYamlContent_, insertSnippetYaml: this.insertYamlContent_, downloadSampleYaml: this.downloadSampleYaml_, showSidebar: showSidebar, toggleSidebar: this.toggleSidebar, samples: samples, snippets: snippets, showSchema: showSchema }))))));
        return lodash_es__WEBPACK_IMPORTED_MODULE_0__["isFunction"](connectDropTarget)
            ? connectDropTarget(editYamlComponent)
            : editYamlComponent;
    }
});
const EditYAML = Object(_reducers_features__WEBPACK_IMPORTED_MODULE_9__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_8__["FLAGS"].CONSOLE_YAML_SAMPLE)(Object(react_i18next__WEBPACK_IMPORTED_MODULE_19__["withTranslation"])()((_a) => {
    var { flags } = _a, props = __rest(_a, ["flags"]);
    const resources = flags[_console_shared__WEBPACK_IMPORTED_MODULE_8__["FLAGS"].CONSOLE_YAML_SAMPLE]
        ? [
            {
                kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_12__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ConsoleYAMLSampleModel"]),
                isList: true,
                prop: 'yamlSamplesList',
            },
        ]
        : [];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditYAML_, Object.assign({}, props))));
}));


/***/ })

}]);
//# sourceMappingURL=9-c29d7c45385c5bc065e6.js.map