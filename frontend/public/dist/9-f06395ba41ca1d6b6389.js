(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./public/components/environment.jsx":
/*!*******************************************!*\
  !*** ./public/components/environment.jsx ***!
  \*******************************************/
/*! exports provided: EnvironmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentPage", function() { return EnvironmentPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");










/**
 * Set up an AsyncComponent to wrap the name-value-editor to allow on demand loading to reduce the
 * vendor footprint size.
 */
const NameValueEditorComponent = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then(c => c.NameValueEditor) }, props));
const EnvFromEditorComponent = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then(c => c.EnvFromEditor) }, props));
/**
 * Set up initial value for the environment vars state. Use this in constructor or cancelChanges.
 *
 * Our return value here is an object in the form of:
 * {
 *   env: [[envname, value, id],[...]]
 *   envFrom: [[envFromprefix, resourceObject, id], [...]]
 * }
 *
 *
 * @param initialPairObjects
 * @returns {*}
 * @private
 */
const getPairsFromObject = (element = {}) => {
    const returnedPairs = {};
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](element.env)) {
        returnedPairs.env = [['', '', 0]];
    }
    else {
        returnedPairs.env = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](element.env, (leafNode, i) => {
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](leafNode, 'value') && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](leafNode, 'valueFrom')) {
                leafNode.value = '';
            }
            leafNode.ID = i;
            return Object.values(leafNode);
        });
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](element.envFrom)) {
        const configMapSecretRef = { name: '', key: '' };
        returnedPairs.envFrom = [['', { configMapSecretRef }, 0]];
    }
    else {
        returnedPairs.envFrom = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](element.envFrom, (leafNode, i) => {
            if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](leafNode, 'prefix')) {
                leafNode.prefix = '';
            }
            leafNode.ID = i;
            return [leafNode.prefix, lodash_es__WEBPACK_IMPORTED_MODULE_1__["pick"](leafNode, ['configMapRef', 'secretRef']), leafNode.ID];
        });
    }
    return returnedPairs;
};
/**
 * Get name/value pairs from an array or object source
 *
 * @param initialPairObjects
 * @returns {Array}
 */
const envVarsToArray = initialPairObjects => {
    const cpOfInitialPairs = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](initialPairObjects);
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isArray"](cpOfInitialPairs)) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](cpOfInitialPairs, element => {
            const { env, envFrom } = getPairsFromObject(element);
            return [env, envFrom];
        });
    }
    const { env, envFrom } = getPairsFromObject(cpOfInitialPairs);
    return [[env, envFrom]];
};
const getContainersObjectForDropdown = containerArray => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](containerArray, (result, elem, order) => {
        result[elem.name] = Object.assign(Object.assign({}, elem), { order });
        return result;
    }, {});
};
class CurrentEnvVars {
    constructor(data, isContainerArray, path) {
        this.currentEnvVars = {};
        this.state = { allowed: true };
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](data) && arguments.length > 1) {
            this.setResultObject(data, isContainerArray, path);
        }
        else {
            this.setRawData(data);
        }
    }
    setRawData(rawEnvData) {
        this.rawEnvData = rawEnvData;
        this.isContainerArray = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isArray"](rawEnvData.containers);
        this.isCreate = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](rawEnvData);
        this.hasInitContainers = !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isUndefined"](rawEnvData.initContainers);
        if (this.isContainerArray || this.isCreate) {
            this.currentEnvVars.containers = envVarsToArray(rawEnvData.containers);
            this.currentEnvVars.initContainers = envVarsToArray(rawEnvData.initContainers);
        }
        else {
            this.currentEnvVars.buildObject = envVarsToArray(rawEnvData);
        }
        return this;
    }
    /**
     * Initialize CurrentEnvVars with result object after patch operation.
     *
     * If this is a containerArray its possible to have initContainers at a level above
     * the current envPath, so when we setRawData, we want to drop right such that
     * not only the containers can be initialized, but also initContainers. A build object
     * only has env data in the base path.
     *
     * @param resultObject
     * @param isContainerArray
     * @param path
     * @returns CurrentEnvVars
     */
    setResultObject(resultObject, isContainerArray, path) {
        if (isContainerArray) {
            return this.setRawData(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](resultObject, lodash_es__WEBPACK_IMPORTED_MODULE_1__["dropRight"](path)));
        }
        return this.setRawData(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](resultObject, path));
    }
    getEnvVarByTypeAndIndex(type, index) {
        return this.currentEnvVars[type][index];
    }
    setFormattedVars(containerType, index, environmentType, formattedPairs) {
        this.currentEnvVars[containerType][index][environmentType] = formattedPairs;
        return this;
    }
    /**
     * Return array of patches for the save operation.
     *
     *
     * @param envPath
     * @returns {Array}
     * @public
     */
    getPatches(envPath) {
        if (this.isContainerArray) {
            const envPathForIC = lodash_es__WEBPACK_IMPORTED_MODULE_1__["dropRight"](envPath).concat('initContainers');
            const op = 'add';
            const containerEnvPatch = this.currentEnvVars.containers.map((finalPairsForContainer, i) => {
                const path = `/${envPath.join('/')}/${i}/env`;
                const value = this._envVarsToNameVal(finalPairsForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV]);
                return { path, op, value };
            });
            const containerEnvFromPatch = this.currentEnvVars.containers.map((finalPairsForContainer, i) => {
                const path = `/${envPath.join('/')}/${i}/envFrom`;
                const value = this._envFromVarsToResourcePrefix(finalPairsForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV_FROM]);
                return { path, op, value };
            });
            let patches = lodash_es__WEBPACK_IMPORTED_MODULE_1__["concat"](containerEnvPatch, containerEnvFromPatch);
            if (this.hasInitContainers) {
                const envPatchForIC = this.currentEnvVars.initContainers.map((finalPairsForContainer, i) => {
                    const path = `/${envPathForIC.join('/')}/${i}/env`;
                    const value = this._envVarsToNameVal(finalPairsForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV]);
                    return { path, op, value };
                });
                const envFromPatchForIC = this.currentEnvVars.initContainers.map((finalPairsForContainer, i) => {
                    const path = `/${envPathForIC.join('/')}/${i}/envFrom`;
                    const value = this._envFromVarsToResourcePrefix(finalPairsForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV_FROM]);
                    return { path, op, value };
                });
                patches = lodash_es__WEBPACK_IMPORTED_MODULE_1__["concat"](patches, envPatchForIC, envFromPatchForIC);
            }
            return patches;
        }
        return this.currentEnvVars.buildObject.map(finalPairsForContainer => {
            const op = 'add';
            const path = `/${envPath.join('/')}/env`;
            const value = this._envVarsToNameVal(finalPairsForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV]);
            return { path, op, value };
        });
    }
    /**
     * Return array of variables for the create operation.
     *
     * @returns {Array}
     * @public
     */
    dispatchNewEnvironmentVariables() {
        return this.isCreate ? this._envVarsToNameVal(this.currentEnvVars.containers[0][_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV]) : null;
    }
    /**
     * Return env var pairs in name value notation, and strip out any pairs that have empty NAME values.
     *
     *
     * @param finalEnvPairs
     * @returns {Array}
     * @private
     */
    _envVarsToNameVal(finalEnvPairs) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](finalEnvPairs, finalEnvPair => finalEnvPair[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Name]).map(finalPairForContainer => {
            const name = finalPairForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Name];
            const value = finalPairForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["NameValueEditorPair"].Value];
            return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isObject"](value) ? { name, valueFrom: value } : { name, value };
        });
    }
    /**
     * Return env var pairs in envFrom (resource/prefix) notation, and strip out any pairs that have empty resource values.
     *
     *
     * @param finalEnvPairs
     * @returns {Array}
     * @private
     */
    _envFromVarsToResourcePrefix(finalEnvPairs) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](finalEnvPairs, finalEnvPair => !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](finalEnvPair[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvFromPair"].Resource]) && !finalEnvPair[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvFromPair"].Resource].configMapSecretRef).map(finalPairForContainer => {
            return lodash_es__WEBPACK_IMPORTED_MODULE_1__["assign"]({ prefix: finalPairForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvFromPair"].Prefix] }, finalPairForContainer[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvFromPair"].Resource]);
        });
    }
}
/** @type {(state: any, props: {obj?: object, rawEnvData?: any, readOnly: boolean, envPath: any, onChange?: (env: any) => void, addConfigMapSecret?: boolean, useLoadingInline?: boolean}) => {model: K8sKind}} */
const stateToProps = ({ k8s, UI }, { obj }) => ({
    model: k8s.getIn(['RESOURCES', 'models', Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(obj)]) || k8s.getIn(['RESOURCES', 'models', obj.kind]),
    impersonate: UI.get('impersonate'),
});
class EnvironmentPage_ extends _utils__WEBPACK_IMPORTED_MODULE_8__["PromiseComponent"] {
    /**
     * Set initial state and decide which kind of env we are setting up
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.dismissSuccess = () => {
            this.setState({ success: null });
        };
        this.reload = this._reload.bind(this);
        this.saveChanges = this._saveChanges.bind(this);
        this.updateEnvVars = this._updateEnvVars.bind(this);
        this.selectContainer = this._selectContainer.bind(this);
        const currentEnvVars = new CurrentEnvVars(this.props.rawEnvData);
        this.state = {
            currentEnvVars,
            success: null,
            containerIndex: 0,
            containerType: currentEnvVars.isContainerArray || currentEnvVars.isCreate ? 'containers' : 'buildObject',
        };
    }
    componentDidMount() {
        this._checkEditAccess();
        const { addConfigMapSecret, readOnly } = this.props;
        if (!addConfigMapSecret || readOnly) {
            const configMaps = {}, secrets = {};
            this.setState({ configMaps, secrets });
            return;
        }
        const envNamespace = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.props, 'obj.metadata.namespace');
        Promise.all([
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_9__["ConfigMapModel"], null, envNamespace).catch(err => {
                if (err.response.status !== 403) {
                    const errorMessage = err.message || 'Could not load config maps.';
                    this.setState({ errorMessage });
                }
                return {
                    configMaps: {},
                };
            }),
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_9__["SecretModel"], null, envNamespace).catch(err => {
                if (err.response.status !== 403) {
                    const errorMessage = err.message || 'Could not load secrets.';
                    this.setState({ errorMessage });
                }
                return {
                    secrets: {},
                };
            }),
        ]).then(([configMaps, secrets]) => this.setState({ configMaps, secrets }));
    }
    componentDidUpdate(prevProps) {
        const { obj, model, impersonate, readOnly, rawEnvData } = this.props;
        const { dirty } = this.state;
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](rawEnvData, prevProps.rawEnvData)) {
            this.setState(Object.assign(Object.assign({}, (!dirty && { currentEnvVars: new CurrentEnvVars(rawEnvData) })), { stale: dirty }));
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](prevProps.obj, 'metadata.uid') !== lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'metadata.uid') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](prevProps.model, 'apiGroup') !== lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](model, 'apiGroup') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](prevProps.model, 'path') !== lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](model, 'path') || prevProps.impersonate !== impersonate || prevProps.readOnly !== readOnly) {
            this._checkEditAccess();
        }
    }
    _checkEditAccess() {
        const { obj, model, impersonate, readOnly } = this.props;
        if (readOnly) {
            return;
        }
        // Only check RBAC if editing an existing resource. The form will always
        // be enabled when creating a new application (git import / deploy image).
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](obj) || !model) {
            this.setState({ allowed: true });
            return;
        }
        const { name, namespace } = obj.metadata;
        const resourceAttributes = {
            group: model.apiGroup,
            resource: model.plural,
            verb: 'patch',
            name,
            namespace,
        };
        Object(_utils__WEBPACK_IMPORTED_MODULE_8__["checkAccess"])(resourceAttributes, impersonate).then(resp => this.setState({ allowed: resp.status.allowed }));
    }
    /**
     * Callback for NVEditor update our state with new values
     * @param env
     * @param i
     */
    _updateEnvVars(env, i = 0, type = _utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV) {
        const { onChange } = this.props;
        const { currentEnvVars, containerType } = this.state;
        const currentEnv = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](currentEnvVars);
        currentEnv.setFormattedVars(containerType, i, type, env.nameValuePairs);
        this.setState({
            currentEnvVars: currentEnv,
            dirty: true,
            success: null,
        });
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["isFunction"](onChange) && onChange(currentEnv.dispatchNewEnvironmentVariables());
    }
    /**
     * Reset the page to initial state
     * @private
     */
    _reload() {
        const { rawEnvData } = this.props;
        this.setState({
            currentEnvVars: new CurrentEnvVars(rawEnvData),
            dirty: false,
            errorMessage: null,
            stale: false,
            success: null,
        });
    }
    _selectContainer(containerName) {
        const { rawEnvData } = this.props;
        let containerIndex = lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](rawEnvData.containers, { name: containerName });
        if (containerIndex !== -1) {
            return this.setState({
                containerIndex,
                containerType: 'containers',
            });
        }
        containerIndex = lodash_es__WEBPACK_IMPORTED_MODULE_1__["findIndex"](rawEnvData.initContainers, { name: containerName });
        if (containerIndex !== -1) {
            return this.setState({
                containerIndex,
                containerType: 'initContainers',
            });
        }
    }
    /**
     * Make it so. Patch the values for the env var changes made on the page.
     * 1. Validate for dup keys
     * 2. Throw out empty rows
     * 3. Use add command if we are adding new env vars, and replace if we are modifying
     * 4. Send the patch command down to REST, and update with response
     *
     * @param e
     */
    _saveChanges(e) {
        const { envPath, obj, model } = this.props;
        const { currentEnvVars } = this.state;
        e.preventDefault();
        const patches = currentEnvVars.getPatches(envPath);
        const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sPatch"])(model, obj, patches);
        this.handlePromise(promise).then(res => {
            this.setState({
                currentEnvVars: new CurrentEnvVars(res, currentEnvVars.isContainerArray, envPath),
                dirty: false,
                errorMessage: null,
                stale: false,
                success: 'Successfully updated the environment variables.',
            });
        });
    }
    render() {
        const { errorMessage, success, inProgress, currentEnvVars, stale, configMaps, secrets, containerIndex, containerType, allowed } = this.state;
        const { rawEnvData, obj, addConfigMapSecret, useLoadingInline, t } = this.props;
        const readOnly = this.props.readOnly || !allowed;
        if (!configMaps || !currentEnvVars || !secrets) {
            if (useLoadingInline) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingInline"], null);
            }
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingBox"], null);
        }
        const envVar = currentEnvVars.getEnvVarByTypeAndIndex(containerType, containerIndex);
        const containerDropdown = currentEnvVars.isContainerArray ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ContainerDropdown"], { currentKey: rawEnvData[containerType][containerIndex].name, containers: getContainersObjectForDropdown(rawEnvData.containers), initContainers: getContainersObjectForDropdown(rawEnvData.initContainers), onChange: this.selectContainer }) : null;
        const owners = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj.metadata, 'ownerReferences', []).map((o, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { key: i, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForOwnerRef"])(o), name: o.name, namespace: obj.metadata.namespace, title: o.uid, inline: true }));
        const containerVars = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            readOnly && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](owners) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__group co-toolbar__group--left" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert col-md-11 col-xs-10", variant: "info", title: t('COMMON:MSG_DETAILS_TABENVIRONMENT_1') },
                    t('COMMON:MSG_DETAILS_TABENVIRONMENT_2'),
                    " ",
                    owners.length > 1 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        "owners: ",
                        owners) : owners))),
            currentEnvVars.isContainerArray && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__group co-toolbar__group--left" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__item" }, containerType === 'containers' ? t('COMMON:MSG_DETAILS_TABENVIRONMENT_3') : t('COMMON:MSG_DETAILS_TABENVIRONMENT_10')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__item" }, containerDropdown))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_5__({ 'co-m-pane__body-group': !currentEnvVars.isCreate }) },
                !currentEnvVars.isCreate && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "co-section-heading-tertiary" },
                    t('COMMON:MSG_DETAILS_TABENVIRONMENT_4'),
                    !readOnly && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["FieldLevelHelp"], null,
                        "Define environment variables as key-value pairs to store configuration settings. You can enter text or add values from a ConfigMap or Secret. Drag and drop environment variables to change the order in which they are run. A variable can reference any other variables that come before it in the list, for example ",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, "FULLDOMAIN = $(SUBDOMAIN).example.com"),
                        ".")))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NameValueEditorComponent, { nameValueId: containerIndex, nameValuePairs: envVar[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV], updateParentData: this.updateEnvVars, addString: t('COMMON:MSG_DETAILS_TABENVIRONMENT_11'), addSecondString: t('COMMON:MSG_DETAILS_TABENVIRONMENT_12'), nameString: "Name", readOnly: readOnly, allowSorting: true, configMaps: configMaps, secrets: secrets, addConfigMapSecret: addConfigMapSecret })),
            currentEnvVars.isContainerArray && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group environment-buttons" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "co-section-heading-tertiary" },
                    t('COMMON:MSG_DETAILS_TABENVIRONMENT_7'),
                    !readOnly && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["FieldLevelHelp"], null,
                        "Add new values by referencing an existing config map or secret. Drag and drop environment variables within this section to change the order in which they are run.",
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "Note: "),
                        "If identical values exist in both lists, the single value in the list above will take precedence."))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvFromEditorComponent, { nameValueId: containerIndex, nameValuePairs: envVar[_utils__WEBPACK_IMPORTED_MODULE_8__["EnvType"].ENV_FROM], updateParentData: this.updateEnvVars, readOnly: readOnly, configMaps: configMaps, secrets: secrets, addButtonLabel: t('COMMON:MSG_DETAILS_TABENVIRONMENT_13') })))));
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_5__({ 'co-m-pane__body': !currentEnvVars.isCreate }) },
            containerVars,
            !currentEnvVars.isCreate && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form environment-buttons" },
                    errorMessage && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: errorMessage }),
                    stale && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "info", title: "The information on this page is no longer current." }, "Click Reload to update and lose edits, or Save Changes to overwrite.")),
                    success && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { isInline: true, className: "co-alert", variant: "success", title: success, action: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["AlertActionCloseButton"], { onClose: this.dismissSuccess }) }),
                    !readOnly && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ActionGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { isDisabled: inProgress, type: "submit", variant: "primary", onClick: this.saveChanges }, t('COMMON:MSG_COMMON_BUTTON_COMMIT_3')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { isDisabled: inProgress, type: "button", variant: "secondary", onClick: this.reload }, t('COMMON:MSG_COMMON_BUTTON_ETC_13')))))))));
    }
}
const EnvironmentPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(stateToProps)(Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])()(EnvironmentPage_));
EnvironmentPage_.propTypes = {
    obj: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
    rawEnvData: prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_2__["object"], prop_types__WEBPACK_IMPORTED_MODULE_2__["array"]]),
    envPath: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
    readOnly: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    addConfigMapSecret: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
    useLoadingInline: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
};
EnvironmentPage_.defaultProps = {
    obj: {},
    rawEnvData: {},
    addConfigMapSecret: true,
};


/***/ })

}]);
//# sourceMappingURL=9-f06395ba41ca1d6b6389.js.map