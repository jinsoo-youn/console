(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-hub-subscribe"],{

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-subscribe.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-subscribe.tsx ***!
  \****************************************************************************************************/
/*! exports provided: OperatorHubSubscribeForm, OperatorHubSubscribePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubSubscribeForm", function() { return OperatorHubSubscribeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubSubscribePage", function() { return OperatorHubSubscribePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _console_internal_module_k8s_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s/selector */ "./public/module/k8s/selector.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../types */ "./packages/operator-lifecycle-manager/src/types.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../index */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _clusterserviceversion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../clusterserviceversion */ "./packages/operator-lifecycle-manager/src/components/clusterserviceversion.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils */ "./packages/operator-lifecycle-manager/src/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const OperatorHubSubscribeForm = (props) => {
    var _a, _b, _c, _d, _e;
    const [targetNamespace, setTargetNamespace] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [installMode, setInstallMode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [updateChannel, setUpdateChannel] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [approval, setApproval] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_types__WEBPACK_IMPORTED_MODULE_10__["InstallPlanApproval"].Automatic);
    const [cannotResolve, setCannotResolve] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [suggestedNamespaceExists, setSuggestedNamespaceExists] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [useSuggestedNSForSingleInstallMode, setUseSuggestedNSForSingleInstallMode,] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [enableMonitoring, setEnableMonitoring] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const { name: pkgName } = props.packageManifest.data[0].metadata;
    const { provider, channels = [], packageName, catalogSource, catalogSourceNamespace, } = props.packageManifest.data[0].status;
    const selectedUpdateChannel = updateChannel || Object(_index__WEBPACK_IMPORTED_MODULE_11__["defaultChannelFor"])(props.packageManifest.data[0]);
    const selectedInstallMode = installMode ||
        Object(_index__WEBPACK_IMPORTED_MODULE_11__["supportedInstallModesFor"])(props.packageManifest.data[0])(selectedUpdateChannel).reduce((preferredInstallMode, mode) => mode.type === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces
            ? _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces
            : preferredInstallMode, _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace);
    const { currentCSVDesc } = channels.find((ch) => ch.name === selectedUpdateChannel);
    const { installModes = [] } = currentCSVDesc;
    const suggestedNamespace = (_a = currentCSVDesc.annotations) === null || _a === void 0 ? void 0 : _a['operatorframework.io/suggested-namespace'];
    const operatorRequestsMonitoring = ((_b = currentCSVDesc.annotations) === null || _b === void 0 ? void 0 : _b['operatorframework.io/cluster-monitoring']) === 'true';
    const internalObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["getInternalObjects"])(currentCSVDesc, 'annotations');
    const globalNS = ((_e = (_d = (((_c = props.operatorGroup) === null || _c === void 0 ? void 0 : _c.data) || []).find((og) => og.metadata.name === 'global-operators')) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.namespace) || 'openshift-operators';
    const items = {
        [globalNS]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceName"], { kind: "Project", name: globalNS }),
    };
    let selectedTargetNamespace = targetNamespace || props.targetNamespace;
    if (selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces) {
        if (suggestedNamespace) {
            items[suggestedNamespace] = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceName"], { kind: "Project", name: `${suggestedNamespace} (Operator recommended)` }));
            selectedTargetNamespace = targetNamespace || suggestedNamespace;
        }
        else {
            selectedTargetNamespace = globalNS;
        }
    }
    const isSuggestedNamespaceSelected = suggestedNamespace && suggestedNamespace === selectedTargetNamespace;
    const selectedApproval = approval || _types__WEBPACK_IMPORTED_MODULE_10__["InstallPlanApproval"].Automatic;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!suggestedNamespace) {
            return;
        }
        setTargetNamespace(suggestedNamespace);
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["NamespaceModel"], suggestedNamespace)
            .then(() => setSuggestedNamespaceExists(true))
            .catch(() => setSuggestedNamespaceExists(false));
    }, [suggestedNamespace]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sListPartialMetadata"])(_models__WEBPACK_IMPORTED_MODULE_8__["PackageManifestModel"], {
            ns: selectedTargetNamespace,
            fieldSelector: `metadata.name=${pkgName}`,
            labelSelector: Object(_console_internal_module_k8s_selector__WEBPACK_IMPORTED_MODULE_7__["fromRequirements"])([
                { key: 'catalog', operator: 'Equals', values: [catalogSource] },
                { key: 'catalog-namespace', operator: 'Equals', values: [catalogSourceNamespace] },
            ]),
        })
            .then((list) => setCannotResolve(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](list)))
            .catch(() => setCannotResolve(true));
    }, [
        catalogSource,
        catalogSourceNamespace,
        pkgName,
        props.packageManifest.data,
        selectedTargetNamespace,
    ]);
    const singleInstallMode = installModes.find((m) => m.type === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace);
    const supportsSingle = singleInstallMode && singleInstallMode.supported;
    const globalInstallMode = installModes.find((m) => m.type === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces);
    const supportsGlobal = globalInstallMode && globalInstallMode.supported;
    if (!supportsSingle && !supportsGlobal) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["MsgBox"], { title: `${lodash__WEBPACK_IMPORTED_MODULE_1__["get"](channels, '[0].currentCSVDesc.displayName')} can't be installed`, detail: "The operator does not support single namespace or global installation modes." }));
    }
    const descFor = (mode) => {
        if (mode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces && supportsGlobal) {
            return 'Operator will be available in all namespaces.';
        }
        if (mode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace && supportsSingle) {
            return 'Operator will be available in a single namespace only.';
        }
        return 'This mode is not supported by this Operator';
    };
    const subscriptionExists = (ns) => Object(_operator_group__WEBPACK_IMPORTED_MODULE_12__["installedFor"])(props.subscription.data)(props.operatorGroup.data)(props.packageManifest.data[0].status.packageName)(ns);
    const namespaceSupports = (ns) => (mode) => {
        const operatorGroup = props.operatorGroup.data.find((og) => og.metadata.namespace === ns);
        if (!operatorGroup || !ns) {
            return true;
        }
        return Object(_operator_group__WEBPACK_IMPORTED_MODULE_12__["supports"])([{ type: mode, supported: true }])(operatorGroup);
    };
    const conflictingProvidedAPIs = (ns) => {
        const operatorGroups = props.operatorGroup.data.filter((og) => og.status.namespaces.includes(ns) || Object(_operator_group__WEBPACK_IMPORTED_MODULE_12__["isGlobal"])(og));
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](operatorGroups)) {
            return [];
        }
        const existingAPIs = lodash__WEBPACK_IMPORTED_MODULE_1__["flatMap"](operatorGroups, _operator_group__WEBPACK_IMPORTED_MODULE_12__["providedAPIsFor"]);
        const providedAPIs = Object(_index__WEBPACK_IMPORTED_MODULE_11__["providedAPIsForChannel"])(props.packageManifest.data[0])(selectedUpdateChannel).map((desc) => Object(_index__WEBPACK_IMPORTED_MODULE_11__["referenceForProvidedAPI"])(desc));
        return lodash__WEBPACK_IMPORTED_MODULE_1__["intersection"](existingAPIs, providedAPIs);
    };
    const submit = () => __awaiter(void 0, void 0, void 0, function* () {
        // Clear any previous errors.
        setError('');
        const ns = {
            metadata: {
                name: selectedTargetNamespace,
                labels: operatorRequestsMonitoring && enableMonitoring
                    ? {
                        'openshift.io/cluster-monitoring': 'true',
                    }
                    : {},
            },
        };
        const rbacName = `${selectedTargetNamespace}-prometheus`;
        const prometheusRole = {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleModel"].kind,
            apiVersion: `${_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleModel"].apiGroup}/${_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleModel"].apiVersion}`,
            metadata: {
                name: rbacName,
                namespace: selectedTargetNamespace,
            },
            rules: [
                {
                    apiGroups: [''],
                    resources: ['services', 'endpoints', 'pods'],
                    verbs: ['get', 'list', 'watch'],
                },
            ],
        };
        const prometheusRoleBinding = {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleBindingModel"].kind,
            apiVersion: `${_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleBindingModel"].apiGroup}/${_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleBindingModel"].apiVersion}`,
            metadata: {
                name: rbacName,
                namespace: selectedTargetNamespace,
            },
            roleRef: {
                kind: 'Role',
                name: rbacName,
                apiGroup: _console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleBindingModel"].apiGroup,
            },
            subjects: [
                {
                    kind: 'ServiceAccount',
                    name: 'prometheus-operator',
                    namespace: 'openshift-monitoring',
                },
            ],
        };
        const operatorGroup = Object.assign({ apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["OperatorGroupModel"]), kind: 'OperatorGroup', metadata: {
                generateName: `${selectedTargetNamespace}-`,
                namespace: selectedTargetNamespace,
            } }, (selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces
            ? {}
            : {
                spec: {
                    targetNamespaces: [selectedTargetNamespace],
                },
            }));
        const subscription = {
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["SubscriptionModel"]),
            kind: 'Subscription',
            metadata: {
                name: packageName,
                namespace: selectedTargetNamespace,
            },
            spec: {
                source: catalogSource,
                sourceNamespace: catalogSourceNamespace,
                name: packageName,
                startingCSV: channels.find((ch) => ch.name === selectedUpdateChannel).currentCSV,
                channel: selectedUpdateChannel,
                installPlanApproval: selectedApproval,
            },
        };
        try {
            if (isSuggestedNamespaceSelected && !suggestedNamespaceExists) {
                yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["NamespaceModel"], ns);
                if (operatorRequestsMonitoring && enableMonitoring) {
                    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleModel"], prometheusRole);
                    yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["RoleBindingModel"], prometheusRoleBinding);
                }
            }
            if (!props.operatorGroup.data.some((group) => group.metadata.namespace === selectedTargetNamespace)) {
                yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_8__["OperatorGroupModel"], operatorGroup);
            }
            yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_8__["SubscriptionModel"], subscription);
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourceListPathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["ClusterServiceVersionModel"], targetNamespace || props.targetNamespace || selectedTargetNamespace));
        }
        catch (err) {
            setError(err.message || 'Could not create operator subscription.');
        }
    });
    const formValid = () => [selectedUpdateChannel, selectedInstallMode, selectedTargetNamespace, selectedApproval].some((v) => lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](v) || lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](v)) ||
        subscriptionExists(selectedTargetNamespace) ||
        !namespaceSupports(selectedTargetNamespace)(selectedInstallMode) ||
        (selectedTargetNamespace && cannotResolve) ||
        !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](conflictingProvidedAPIs(selectedTargetNamespace));
    const formError = () => {
        return ((error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: "danger", title: "An error occurred" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-pre-line" }, error)))) ||
            (!namespaceSupports(selectedTargetNamespace)(selectedInstallMode) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: "Namespace does not support installation mode" },
                "The operator group in the ",
                selectedTargetNamespace,
                " namespace does not support the",
                selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces
                    ? ' global '
                    : ' single namespace ',
                "installation mode."))) ||
            (subscriptionExists(selectedTargetNamespace) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: `Operator subscription for namespace '${selectedTargetNamespace}' already exists` }))) ||
            (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](conflictingProvidedAPIs(selectedTargetNamespace)) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: "Operator conflicts exist" },
                "Installing Operator in selected namespace would cause conflicts with another Operator providing these APIs:",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, conflictingProvidedAPIs(selectedTargetNamespace).map((gvk) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: gvk },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["kindForReference"])(gvk)),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", null,
                        "(",
                        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForReference"])(gvk),
                        ")")))))))) ||
            (selectedTargetNamespace && cannotResolve && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert", variant: "danger", title: "Operator not available for selected namespaces" }))));
    };
    const showMonitoringCheckbox = operatorRequestsMonitoring && lodash__WEBPACK_IMPORTED_MODULE_1__["startsWith"](selectedTargetNamespace, 'openshift-');
    const suggestedNamespaceDetails = isSuggestedNamespaceSelected && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: suggestedNamespaceExists ? 'warning' : 'info', title: suggestedNamespaceExists ? 'Namespace already exists' : 'Namespace creation' }, suggestedNamespaceExists ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "Namespace ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, suggestedNamespace),
            " already exists and will be used. Other users can already have access to this namespace.")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "Namespace ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, suggestedNamespace),
            " does not exist and will be created."))),
        showMonitoringCheckbox && !suggestedNamespaceExists && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-subsection" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], { id: "enable-monitoring-checkbox", label: "Enable operator recommended cluster monitoring on this namespace", onChange: setEnableMonitoring, isChecked: enableMonitoring }),
            props.packageManifest.data[0].metadata.labels['opsrc-provider'] !== 'redhat' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { isInline: true, className: "co-alert pf-c-alert--top-margin", variant: "warning", title: "Namespace monitoring" },
                "Please note that installing non Red Hat operators into openshift namespaces and enabling monitoring voids user support. Enabling cluster monitoring for non Red Hat operators can lead to malicious metrics data overriding existing cluster metrics. For more information, see the",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: `${_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["openshiftHelpBase"]}monitoring/cluster_monitoring/configuring-the-monitoring-stack.html#maintenance-and-support_configuring-monitoring`, text: "cluster monitoring documentation" }),
                ' ',
                "."))))));
    const globalNamespaceInstallMode = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { id: "dropdown-selectbox", dropDownClassName: "dropdown--full-width", menuClassName: "dropdown-menu--text-wrap", items: items, title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceName"], { kind: "Project", name: isSuggestedNamespaceSelected
                        ? `${selectedTargetNamespace} (Operator recommended)`
                        : selectedTargetNamespace }), disabled: lodash__WEBPACK_IMPORTED_MODULE_1__["size"](items) === 1, selectedKey: selectedTargetNamespace, onChange: (ns) => {
                    setTargetNamespace(ns);
                    setCannotResolve(false);
                } })),
        suggestedNamespaceDetails));
    const singleNamespaceInstallMode = !suggestedNamespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["NsDropdown"], { id: "dropdown-selectbox", selectedKey: selectedTargetNamespace, onChange: setTargetNamespace })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__["RadioInput"], { onChange: () => {
                setUseSuggestedNSForSingleInstallMode(true);
                setTargetNamespace(suggestedNamespace);
            }, value: suggestedNamespace, checked: useSuggestedNSForSingleInstallMode, title: "Operator recommended namespace:" },
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: "Project" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, suggestedNamespace)),
        useSuggestedNSForSingleInstallMode && suggestedNamespaceDetails,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__["RadioInput"], { onChange: () => {
                setUseSuggestedNSForSingleInstallMode(false);
                setTargetNamespace(null);
            }, value: suggestedNamespace, checked: !useSuggestedNSForSingleInstallMode, title: "Pick an existing namespace" }),
        !useSuggestedNSForSingleInstallMode && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["NsDropdown"], { id: "dropdown-selectbox", selectedKey: selectedTargetNamespace, onChange: setTargetNamespace }))));
    const providedAPIs = Object(_index__WEBPACK_IMPORTED_MODULE_11__["providedAPIsForChannel"])(props.packageManifest.data[0])(selectedUpdateChannel).filter((item) => !Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isInternalObject"])(internalObjects, item.name));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: "The channel to track and receive the updates from." },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "co-required" }, "Update Channel")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__["RadioGroup"], { currentValue: selectedUpdateChannel, items: channels.map((ch) => ({ value: ch.name, title: ch.name })), onChange: (e) => {
                            setUpdateChannel(e.currentTarget.value);
                            setInstallMode(null);
                        } })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "co-required" }, "Installation Mode"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__["RadioInput"], { onChange: (e) => {
                                setInstallMode(e.target.value);
                                setTargetNamespace(null);
                                setCannotResolve(false);
                            }, value: _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces, checked: selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces, disabled: !supportsGlobal, title: "All namespaces on the cluster", subTitle: "(default)" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-radio-desc" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-muted" }, descFor(_types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__["RadioInput"], { onChange: (e) => {
                                setInstallMode(e.target.value);
                                setTargetNamespace(useSuggestedNSForSingleInstallMode ? suggestedNamespace : null);
                                setCannotResolve(false);
                            }, value: _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace, checked: selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace, disabled: !supportsSingle, title: "A specific namespace on the cluster" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-radio-desc" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-muted" }, descFor(_types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace)))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "co-required" }, "Installed Namespace"),
                    selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeAllNamespaces &&
                        globalNamespaceInstallMode,
                    selectedInstallMode === _types__WEBPACK_IMPORTED_MODULE_10__["InstallModeType"].InstallModeTypeOwnNamespace &&
                        singleNamespaceInstallMode),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: "The strategy to determine either manual or automatic updates." },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "co-required" }, "Approval Strategy")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_6__["RadioGroup"], { currentValue: selectedApproval, items: [
                            { value: _types__WEBPACK_IMPORTED_MODULE_10__["InstallPlanApproval"].Automatic, title: 'Automatic' },
                            { value: _types__WEBPACK_IMPORTED_MODULE_10__["InstallPlanApproval"].Manual, title: 'Manual' },
                        ], onChange: (e) => setApproval(e.currentTarget.value) }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-section__separator" }),
            formError(),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: () => submit(), isDisabled: formValid(), variant: "primary" }, "Install"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "secondary", onClick: () => _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].push('/operatorhub') }, "Cancel"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_index__WEBPACK_IMPORTED_MODULE_11__["ClusterServiceVersionLogo"], { displayName: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](channels, '[0].currentCSVDesc.displayName'), icon: Object(_index__WEBPACK_IMPORTED_MODULE_11__["iconFor"])(props.packageManifest.data[0]), provider: provider }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "Provided APIs"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-crd-card-row" }, !providedAPIs.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No Kubernetes APIs are provided by this Operator.")) : (providedAPIs.map((api) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_clusterserviceversion__WEBPACK_IMPORTED_MODULE_13__["CRDCard"], { key: Object(_index__WEBPACK_IMPORTED_MODULE_11__["referenceForProvidedAPI"])(api), canCreate: false, crd: api, csv: null }))))))));
};
const OperatorHubSubscribe = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["StatusBox"], { data: props.packageManifest.data[0], loaded: props.loaded, loadError: props.loadError },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorHubSubscribeForm, Object.assign({}, props))));
const OperatorHubSubscribePage = (props) => {
    const search = new URLSearchParams({
        'details-item': `${new URLSearchParams(window.location.search).get('pkg')}-${new URLSearchParams(window.location.search).get('catalogNamespace')}`,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Operator Installation")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-nav-title co-m-nav-title--breadcrumbs" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbs"], { breadcrumbs: [
                    { name: 'OperatorHub', path: `/operatorhub?${search.toString()}` },
                    { name: 'Operator Installation', path: props.match.url },
                ] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, "Install Operator"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" }, "Install your Operator by subscribing to one of the update channels to keep the Operator up to date. The strategy determines either manual or automatic updates.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
                    {
                        isList: true,
                        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["OperatorGroupModel"]),
                        prop: 'operatorGroup',
                    },
                    {
                        isList: true,
                        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["PackageManifestModel"]),
                        namespace: new URLSearchParams(window.location.search).get('catalogNamespace'),
                        fieldSelector: `metadata.name=${new URLSearchParams(window.location.search).get('pkg')}`,
                        selector: {
                            matchLabels: {
                                catalog: new URLSearchParams(window.location.search).get('catalog'),
                            },
                        },
                        prop: 'packageManifest',
                    },
                    {
                        isList: true,
                        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["SubscriptionModel"]),
                        prop: 'subscription',
                    },
                ] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorHubSubscribe, Object.assign({}, props, { targetNamespace: new URLSearchParams(window.location.search).get('targetNamespace') || null }))))));
};
OperatorHubSubscribe.displayName = 'OperatorHubSubscribe';
OperatorHubSubscribeForm.displayName = 'OperatorHubSubscribeForm';
OperatorHubSubscribePage.displayName = 'OperatorHubSubscribePage';


/***/ })

}]);
//# sourceMappingURL=operator-hub-subscribe-eb774c4dd9bb5ba8a9b6.js.map