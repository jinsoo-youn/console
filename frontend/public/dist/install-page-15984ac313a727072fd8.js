(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["install-page"],{

/***/ "./packages/ceph-storage-plugin/src/components/independent-mode/fileUpload.scss":
/*!**************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-mode/fileUpload.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/independent-mode/fileUpload.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-mode/fileUpload.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _fileUpload_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileUpload.scss */ "./packages/ceph-storage-plugin/src/components/independent-mode/fileUpload.scss");
/* harmony import */ var _fileUpload_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fileUpload_scss__WEBPACK_IMPORTED_MODULE_2__);



const FileUpload = (props) => {
    const { onUpload } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "upload-component" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-btn" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { href: "#", variant: "secondary", className: "custom-input-btn" }, "Browse"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "file", id: "inputButton", className: "upload-btn__input", onChange: onUpload, "aria-label": "Upload File" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (FileUpload);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/independent-mode/install.scss":
/*!***********************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-mode/install.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/independent-mode/install.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-mode/install.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_actions_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/actions/features */ "./public/actions/features.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _fileUpload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fileUpload */ "./packages/ceph-storage-plugin/src/components/independent-mode/fileUpload.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./packages/ceph-storage-plugin/src/components/independent-mode/utils.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../features */ "./packages/ceph-storage-plugin/src/features.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _install_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./install.scss */ "./packages/ceph-storage-plugin/src/components/independent-mode/install.scss");
/* harmony import */ var _install_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_install_scss__WEBPACK_IMPORTED_MODULE_16__);


// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore















const InstallExternalCluster = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    const { inProgress, errorMessage, handlePromise, match: { params: { ns, appName }, }, minRequiredKeys: { configMaps, secrets: encodedKeys, storageClasses }, downloadFile, } = props;
    const [clusterServiceVersion, setClusterServiceVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [fileData, setFileData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [dataError, setDataError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    const plainKeys = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](configMaps, storageClasses);
    // File Upload handler
    const onUpload = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onload = (ev) => {
            var _a;
            const data = (_a = ev.target) === null || _a === void 0 ? void 0 : _a.result;
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isValidJSON"])(data)) {
                setDataError(Object(_utils__WEBPACK_IMPORTED_MODULE_13__["checkError"])(data, plainKeys, encodedKeys));
                setFileData(data);
            }
            else {
                setDataError('The uploaded file is not a valid JSON file');
            }
        };
        reader.readAsText(file);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const secret = {
            apiVersion: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"].apiVersion,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"].kind,
            metadata: {
                name: 'rook-ceph-external-cluster-details',
                namespace: ns,
            },
            stringData: {
                // eslint-disable-next-line @typescript-eslint/camelcase
                external_cluster_details: fileData,
            },
            type: 'Opaque',
        };
        const ocsObj = {
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["OCSServiceModel"]),
            kind: _models__WEBPACK_IMPORTED_MODULE_11__["OCSServiceModel"].kind,
            metadata: {
                name: _constants__WEBPACK_IMPORTED_MODULE_15__["OCS_INDEPENDENT_CR_NAME"],
                namespace: ns,
            },
            spec: {
                externalStorage: {
                    enable: true,
                },
                labelSelector: {
                    matchExpressions: [],
                },
            },
        };
        handlePromise(Promise.all([Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"], secret), Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_11__["OCSServiceModel"], ocsObj)]))
            .then((data) => {
            dispatch(Object(_console_internal_actions_features__WEBPACK_IMPORTED_MODULE_9__["setFlag"])(_features__WEBPACK_IMPORTED_MODULE_14__["OCS_INDEPENDENT_FLAG"], true));
            dispatch(Object(_console_internal_actions_features__WEBPACK_IMPORTED_MODULE_9__["setFlag"])(_features__WEBPACK_IMPORTED_MODULE_14__["OCS_FLAG"], true));
            _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_7__["history"].push(`/k8s/ns/${ns}/clusterserviceversions/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_10__["getName"])(clusterServiceVersion)}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_11__["OCSServiceModel"])}/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_10__["getName"])(data[data.length - 1])}`);
        })
            .catch((e) => {
            // eslint-disable-next-line no-console
            console.error(e);
        });
    };
    const onCancel = () => {
        _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_7__["history"].goBack();
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sGet"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_5__["ClusterServiceVersionModel"], appName, ns)
            .then((clusterServiceVersionObj) => {
            setClusterServiceVersion(clusterServiceVersionObj);
        })
            .catch(() => setClusterServiceVersion(null));
    }, [appName, ns]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "im-install-page" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "im-install-page__sub-header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Title"], { size: "lg", headingLevel: "h5", className: "nb-bs-page-title__main" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "im-install-page-sub-header__title" }, "Connect to external cluster")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "im--light im-install-page--margin-top" },
                    "Download ",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, "ceph-external-cluster-details-exporter.py"),
                    " script and run on the RHCS cluster, then upload the results(JSON) in the External cluster metadata field.",
                    ' ',
                    downloadFile && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { id: "downloadAnchorElem", href: downloadFile, download: "ceph-external-cluster-details-exporter.py", target: "_blank", rel: "noopener noreferrer", className: "" }, "Download Script"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Alert"], { className: "co-alert", variant: "info", title: "A bucket will be created to provide the OCS Service.", "aria-label": "Bucket created for OCS Service", isInline: true })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Form"], { className: "im-install-page__form", onSubmit: onSubmit, "aria-label": "Create External Storage Cluster" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], { label: "External cluster metadata", isRequired: true, fieldId: "cluster-metadata" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextInput"], { "aria-label": "Upload JSON File", value: "Upload Credentials file", className: "im-install-page__input-box", isDisabled: true }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fileUpload__WEBPACK_IMPORTED_MODULE_12__["default"], { onUpload: onUpload }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], { fieldId: "preview-box" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextArea"], { value: Object(_utils__WEBPACK_IMPORTED_MODULE_13__["prettifyJSON"])(fileData), className: "im-install-page__text-box", isValid: !dataError, "aria-label": "JSON data", disabled: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ButtonBar"], { errorMessage: dataError || errorMessage, inProgress: inProgress },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "submit", variant: "primary", isDisabled: lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](fileData) || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](dataError), "aria-label": "Create Button" }, "Create"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { onClick: onCancel, variant: "secondary", "aria-label": "Cancel" }, "Cancel")))))));
});
/* harmony default export */ __webpack_exports__["default"] = (InstallExternalCluster);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/independent-mode/utils.ts":
/*!*******************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/independent-mode/utils.ts ***!
  \*******************************************************************************/
/*! exports provided: isValidJSON, createDownloadFile, checkError, getRequiredKeys, getClusterHealth, prettifyJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidJSON", function() { return isValidJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDownloadFile", function() { return createDownloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkError", function() { return checkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredKeys", function() { return getRequiredKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusterHealth", function() { return getClusterHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prettifyJSON", function() { return prettifyJSON; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");




const pluralize = (count, singular, plural = `${singular}s`) => count > 1 ? plural : singular;
const isValidJSON = (fData) => {
    try {
        JSON.parse(fData);
        return true;
    }
    catch (e) {
        return false;
    }
};
const createDownloadFile = (data) => `data:application/octet-stream;charset=utf-8,${encodeURIComponent(js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].decode(data))}`;
const checkError = (data = '{}', requiredKeys = [], requiresEncodingKeys = []) => {
    const parsedData = JSON.parse(data);
    const providedKeys = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](parsedData, (item) => item.name);
    const emptyKeys = [];
    const base64ErrorKeys = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["map"](parsedData, (item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](item.data))
            emptyKeys.push((_a = item.name) !== null && _a !== void 0 ? _a : 'Unrecongnized key');
        if (requiresEncodingKeys.includes(item.name)) {
            lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]((_b = item.data) === null || _b === void 0 ? void 0 : _b.userKey) &&
                lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]((_c = item.data) === null || _c === void 0 ? void 0 : _c.adminKey) &&
                base64ErrorKeys.push((_d = item.name) !== null && _d !== void 0 ? _d : 'Unrecognized key');
            try {
                atob((_f = (_e = item.data) === null || _e === void 0 ? void 0 : _e.userKey) !== null && _f !== void 0 ? _f : (_g = item.data) === null || _g === void 0 ? void 0 : _g.adminKey);
            }
            catch (e) {
                base64ErrorKeys.push((_h = item.name) !== null && _h !== void 0 ? _h : 'Unrecognized key');
            }
        }
    });
    // Check for missing keys
    const missingKeys = lodash__WEBPACK_IMPORTED_MODULE_0__["difference"](lodash__WEBPACK_IMPORTED_MODULE_0__["concat"](requiredKeys, requiresEncodingKeys), providedKeys);
    if (missingKeys.length > 0 && providedKeys.length > 0) {
        return `${lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"](missingKeys).join(', ')} ${pluralize(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"](missingKeys).length, 'is', 'are')} missing.`;
    }
    if (emptyKeys.length > 0) {
        return `${lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"](emptyKeys).join(', ')} ${pluralize(emptyKeys.length, 'has', 'have')} empty ${pluralize(emptyKeys.length, 'value')}.`;
    }
    if (base64ErrorKeys.length > 0) {
        return `${lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"](base64ErrorKeys).join(', ')} ${pluralize(base64ErrorKeys.length, 'key')} ${pluralize(base64ErrorKeys.length, 'has', 'have')} malformed Base64 encoding ${pluralize(base64ErrorKeys.length, 'value')}.`;
    }
    return '';
};
const getRequiredKeys = (csv) => {
    var _a, _b;
    // external.ocs.openshift.io/validation: '{"configMaps":["x", "y"], "secrets": ["x", "y", "z"], "storageClasses": ["x"]}'
    const keys = (_b = (_a = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getAnnotations"])(csv)) === null || _a === void 0 ? void 0 : _a['external.features.ocs.openshift.io/validation']) !== null && _b !== void 0 ? _b : '{}';
    return JSON.parse(keys);
};
var ClusterPhase;
(function (ClusterPhase) {
    ClusterPhase["CONNECTED"] = "Connected";
    ClusterPhase["READY"] = "Ready";
    ClusterPhase["CONNECTING"] = "Connecting";
    ClusterPhase["PROGRESSING"] = "Progressing";
    ClusterPhase["ERROR"] = "Error";
})(ClusterPhase || (ClusterPhase = {}));
const PhaseToState = Object.freeze({
    [ClusterPhase.CONNECTED]: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].OK,
    [ClusterPhase.READY]: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].OK,
    [ClusterPhase.CONNECTING]: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].UPDATING,
    [ClusterPhase.PROGRESSING]: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].UPDATING,
    [ClusterPhase.ERROR]: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].ERROR,
});
const getClusterHealth = (cluster, loaded, error) => {
    var _a, _b;
    const phase = (_a = cluster === null || cluster === void 0 ? void 0 : cluster.status) === null || _a === void 0 ? void 0 : _a.phase;
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](error)) {
        if (((_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status) === 404)
            return _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].NOT_AVAILABLE;
        return _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].ERROR;
    }
    if (!loaded)
        return _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].LOADING;
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](cluster))
        return PhaseToState[phase];
    return _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_2__["HealthState"].NOT_AVAILABLE;
};
const prettifyJSON = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](data)
    ? ''
    : (() => {
        const jsonData = JSON.parse(data);
        let container = ``;
        lodash__WEBPACK_IMPORTED_MODULE_0__["map"](jsonData, (item) => {
            var _a;
            return (container += `${lodash__WEBPACK_IMPORTED_MODULE_0__["upperCase"]((_a = item.name) !== null && _a !== void 0 ? _a : 'Unrecognized key')} = ${item.data ? JSON.stringify(item.data) : 'Unrecognized value'}\n`);
        });
        return container;
    })();


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/create-form.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/create-form.tsx ***!
  \*********************************************************************************/
/*! exports provided: CreateOCSServiceForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOCSServiceForm", function() { return CreateOCSServiceForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/actions/features */ "./public/actions/features.ts");
/* harmony import */ var _constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/ocs-install */ "./packages/ceph-storage-plugin/src/constants/ocs-install.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _modals_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/storage-class-dropdown */ "./packages/ceph-storage-plugin/src/components/modals/storage-class-dropdown.tsx");
/* harmony import */ var _utils_osd_size_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/osd-size-dropdown */ "./packages/ceph-storage-plugin/src/utils/osd-size-dropdown.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");
/* harmony import */ var _node_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node-list */ "./packages/ceph-storage-plugin/src/components/ocs-install/node-list.tsx");
/* harmony import */ var _pvs_available_capacity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pvs-available-capacity */ "./packages/ceph-storage-plugin/src/components/ocs-install/pvs-available-capacity.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../features */ "./packages/ceph-storage-plugin/src/features.ts");
/* harmony import */ var _ocs_install_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ocs-install.scss */ "./packages/ceph-storage-plugin/src/components/ocs-install/ocs-install.scss");
/* harmony import */ var _ocs_install_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_ocs_install_scss__WEBPACK_IMPORTED_MODULE_19__);


// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore


















const makeLabelNodesRequest = (selectedNodes) => {
    const patch = [
        {
            op: 'add',
            path: '/metadata/labels/cluster.ocs.openshift.io~1openshift-storage',
            value: '',
        },
    ];
    return lodash__WEBPACK_IMPORTED_MODULE_1__["reduce"](selectedNodes, (accumulator, node) => {
        return Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["hasLabel"])(node, _selectors__WEBPACK_IMPORTED_MODULE_15__["cephStorageLabel"])
            ? accumulator
            : [...accumulator, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NodeModel"], node, patch)];
    }, []);
};
const makeOCSRequest = (selectedData, storageClass, osdSize) => {
    const promises = makeLabelNodesRequest(selectedData);
    const ocsObj = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](_constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["ocsRequestData"]);
    // for baremetal infra
    if ((storageClass === null || storageClass === void 0 ? void 0 : storageClass.provisioner) === _constants__WEBPACK_IMPORTED_MODULE_11__["NO_PROVISIONER"]) {
        ocsObj.spec.monDataDirHostPath = '/var/lib/rook';
        ocsObj.spec.storageDeviceSets[0].portable = false;
    }
    const scName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(storageClass);
    ocsObj.spec.storageDeviceSets[0].dataPVCTemplate.spec.storageClassName = scName;
    ocsObj.spec.storageDeviceSets[0].dataPVCTemplate.spec.resources.requests.storage = osdSize;
    return Promise.all(promises).then(() => {
        if (!scName) {
            throw new Error('No StorageClass selected');
        }
        return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_12__["OCSServiceModel"], ocsObj);
    });
};
const CreateOCSServiceForm = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["withHandlePromise"])((props) => {
    var _a;
    const { handlePromise, errorMessage, inProgress, match: { params: { appName, ns }, }, } = props;
    const [selectedNodes, setSelectedNodes] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [visibleRows, setVisibleRows] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [osdSize, setOSDSize] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["defaultRequestSize"].NON_BAREMETAL);
    const [storageClass, setStorageClass] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    const submit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line promise/catch-or-return
        handlePromise(makeOCSRequest(selectedNodes, storageClass, osdSize)).then(() => {
            dispatch(Object(_console_internal_actions_features__WEBPACK_IMPORTED_MODULE_9__["setFlag"])(_features__WEBPACK_IMPORTED_MODULE_18__["OCS_CONVERGED_FLAG"], true));
            dispatch(Object(_console_internal_actions_features__WEBPACK_IMPORTED_MODULE_9__["setFlag"])(_features__WEBPACK_IMPORTED_MODULE_18__["OCS_FLAG"], true));
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["history"].push(`/k8s/ns/${ns}/clusterserviceversions/${appName}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["OCSServiceModel"])}/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(_constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["ocsRequestData"])}`);
        });
    };
    const handleStorageClass = (sc) => {
        setStorageClass(sc);
        const provisioner = sc === null || sc === void 0 ? void 0 : sc.provisioner; // required if user selects 'No Default Storage Class' option
        if (provisioner === _constants__WEBPACK_IMPORTED_MODULE_11__["NO_PROVISIONER"]) {
            setOSDSize(_constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["defaultRequestSize"].BAREMETAL); // for baremetal environment, set requested capacity as 1 Byte
        }
        else {
            setOSDSize(_constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["defaultRequestSize"].NON_BAREMETAL);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], { className: "co-m-pane__body-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: "select-nodes", label: "Nodes" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Selected nodes will be labeled with",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, "cluster.ocs.openshift.io/openshift-storage=\"\""),
                " to create the OCS Service unless they are already labeled."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Alert"], { className: "co-alert", variant: "info", title: "A bucket will be created to provide the OCS Service.", isInline: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-legend", "data-test-id": "warning" }, "Select at least 3 nodes in different failure domains with minimum requirements of 16 CPUs and 64 GiB of RAM per node."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "3 selected nodes are used for initial deployment. The remaining selected nodes will be used by OpenShift as scheduling targets for OCS scaling."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_6__["NodeModel"].kind, showTitle: false, ListComponent: _node_list__WEBPACK_IMPORTED_MODULE_16__["default"], customData: { selectedNodes, setSelectedNodes, visibleRows, setVisibleRows } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: "select-sc", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                "Storage Class",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["FieldLevelHelp"], null, _constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["storageClassTooltip"])) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-ocs-install__ocs-service-capacity--dropdown" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modals_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_13__["OCSStorageClassDropdown"], { onChange: handleStorageClass, "data-test-id": "ocs-dropdown" })),
            (storageClass === null || storageClass === void 0 ? void 0 : storageClass.provisioner) === _constants__WEBPACK_IMPORTED_MODULE_11__["NO_PROVISIONER"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pvs_available_capacity__WEBPACK_IMPORTED_MODULE_17__["PVsAvailableCapacity"], { replica: _constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["ocsRequestData"].spec.storageDeviceSets[0].replica, "data-test-id": "ceph-ocs-install-pvs-available-capacity", sc: storageClass }))),
        (storageClass === null || storageClass === void 0 ? void 0 : storageClass.provisioner) !== _constants__WEBPACK_IMPORTED_MODULE_11__["NO_PROVISIONER"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: "select-osd-size", label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                "OCS Service Capacity",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["FieldLevelHelp"], null, _constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["labelTooltip"])) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_osd_size_dropdown__WEBPACK_IMPORTED_MODULE_14__["OSDSizeDropdown"], { className: "ceph-ocs-install__ocs-service-capacity--dropdown", selectedKey: osdSize, onChange: setOSDSize, "data-test-id": "osd-dropdown" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ButtonBar"], { errorMessage: errorMessage, inProgress: inProgress },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "primary", onClick: submit, isDisabled: ((_a = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.length) !== null && _a !== void 0 ? _a : 0) < _constants_ocs_install__WEBPACK_IMPORTED_MODULE_10__["minSelectedNode"] }, "Create"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["history"].goBack }, "Cancel")))));
});


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/install-page.scss":
/*!***********************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/install-page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/install-page.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/install-page.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/selectors/common */ "./packages/console-shared/src/selectors/common.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _independent_mode_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../independent-mode/utils */ "./packages/ceph-storage-plugin/src/components/independent-mode/utils.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/ceph-storage-plugin/src/models.ts");
/* harmony import */ var _independent_mode_install__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../independent-mode/install */ "./packages/ceph-storage-plugin/src/components/independent-mode/install.tsx");
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-form */ "./packages/ceph-storage-plugin/src/components/ocs-install/create-form.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");
/* harmony import */ var _install_page_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./install-page.scss */ "./packages/ceph-storage-plugin/src/components/ocs-install/install-page.scss");
/* harmony import */ var _install_page_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_install_page_scss__WEBPACK_IMPORTED_MODULE_11__);












var MODES;
(function (MODES) {
    MODES["CONVERGED"] = "Converged";
    MODES["INDEPENDENT"] = "Independent";
})(MODES || (MODES = {}));
// eslint-disable-next-line no-shadow
const InstallCluster = ({ match }) => {
    const { params: { ns, appName }, url, } = match;
    const [isIndependent, setIsIndependent] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [independentReqdKeys, setIndependentReqdKeys] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [downloadFile, setDownloadFile] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [mode, setMode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](MODES.CONVERGED);
    const [clusterServiceVersion, setClusterServiceVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const handleModeChange = (_checked, event) => {
        const { value } = event.currentTarget;
        setMode(value);
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_2__["ClusterServiceVersionModel"], appName, ns)
            .then((clusterServiceVersionObj) => {
            var _a;
            const isIndependentSupported = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getAnnotations"])(clusterServiceVersionObj)[_constants__WEBPACK_IMPORTED_MODULE_10__["OCS_SUPPORT_ANNOTATION"]].includes('external');
            if (isIndependentSupported) {
                setIsIndependent(true);
                const { configMaps = [], secrets = [], storageClasses = [] } = Object(_independent_mode_utils__WEBPACK_IMPORTED_MODULE_6__["getRequiredKeys"])(clusterServiceVersionObj);
                setIndependentReqdKeys({ configMaps, secrets, storageClasses });
                setDownloadFile(Object(_independent_mode_utils__WEBPACK_IMPORTED_MODULE_6__["createDownloadFile"])((_a = Object(_console_shared_src_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getAnnotations"])(clusterServiceVersionObj)) === null || _a === void 0 ? void 0 : _a['external.features.ocs.openshift.io/export-script']));
            }
            try {
                setClusterServiceVersion(clusterServiceVersionObj);
            }
            catch (e) {
                setClusterServiceVersion(null);
            }
        })
            .catch(() => setClusterServiceVersion(null));
    }, [appName, ns]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header-buttons" }, clusterServiceVersion !== null && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbs"], { breadcrumbs: [
                    {
                        name: clusterServiceVersion.spec.displayName,
                        path: url.replace('/~new', ''),
                    },
                    { name: `Create ${_models__WEBPACK_IMPORTED_MODULE_7__["OCSServiceModel"].label}`, path: url },
                ] }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-create-operand__header-text" }, "Create Storage Cluster"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, "OCS runs as a cloud-native service for optimal integration with applications in need of storage, and handles the scenes such as provisioning and management.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
            isIndependent && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-install__select-mode" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], { headingLevel: "h5", size: "lg", className: "ceph-install-select-mode__title" }, "Select Mode"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-install-select-mode" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Radio"], { value: MODES.CONVERGED, isChecked: mode === MODES.CONVERGED, onChange: handleModeChange, id: "radio-1", className: "ceph-install--no-margin", label: "Internal", name: "converged-mode" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-install-select-mode" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Radio"], { value: MODES.INDEPENDENT, isChecked: mode === MODES.INDEPENDENT, onChange: handleModeChange, id: "radio-2", label: "External", name: "independent-mode", className: "ceph-install--no-margin" })))),
            (isIndependent === false || mode === MODES.CONVERGED) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_create_form__WEBPACK_IMPORTED_MODULE_9__["CreateOCSServiceForm"], { match: match })),
            mode === MODES.INDEPENDENT && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_independent_mode_install__WEBPACK_IMPORTED_MODULE_8__["default"], { match: match, minRequiredKeys: independentReqdKeys, downloadFile: downloadFile })))));
};
/* harmony default export */ __webpack_exports__["default"] = (InstallCluster);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/node-list.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/node-list.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/ */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils_install__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/install */ "./packages/ceph-storage-plugin/src/utils/install.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selectors */ "./packages/ceph-storage-plugin/src/selectors/index.ts");
/* harmony import */ var _ocs_install_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ocs-install.scss */ "./packages/ceph-storage-plugin/src/components/ocs-install/ocs-install.scss");
/* harmony import */ var _ocs_install_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ocs_install_scss__WEBPACK_IMPORTED_MODULE_8__);









const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-1', 'col-sm-1', 'col-xs-1'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-4', 'col-sm-8', 'col-xs-11'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-2', 'col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-2', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-1', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-md-2', 'hidden-sm', 'hidden-xs'),
];
const getColumns = () => {
    return [
        {
            title: 'Name',
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Role',
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Location',
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'CPU',
            props: { className: tableColumnClasses[4] },
        },
        {
            title: 'Memory',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
const getSelected = (selected, nodeUID) => selected.map((node) => node.metadata.uid).includes(nodeUID);
const getRows = ({ componentProps, customData }) => {
    const { data } = componentProps;
    const { selectedNodes, setSelectedNodes, setVisibleRows, visibleRows } = customData;
    const filteredData = data.filter((node) => Object(_utils_install__WEBPACK_IMPORTED_MODULE_6__["hasOCSTaint"])(node) || !Object(_utils_install__WEBPACK_IMPORTED_MODULE_6__["hasTaints"])(node));
    const rows = filteredData.map((node) => {
        var _a;
        const roles = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNodeRoles"])(node).sort();
        const cpuSpec = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNodeCPUCapacity"])(node);
        const memSpec = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNodeAllocatableMemory"])(node);
        const cells = [
            {
                title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils___WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Node", name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getName"])(node), title: node.metadata.uid }),
            },
            {
                title: roles.join(', ') || '-',
            },
            {
                title: ((_a = node.metadata.labels) === null || _a === void 0 ? void 0 : _a['failure-domain.beta.kubernetes.io/zone']) || '-',
            },
            {
                title: `${Object(_console_internal_components_utils___WEBPACK_IMPORTED_MODULE_4__["humanizeCpuCores"])(cpuSpec).string || '-'}`,
            },
            {
                title: `${Object(_utils_install__WEBPACK_IMPORTED_MODULE_6__["getConvertedUnits"])(memSpec)}`,
            },
        ];
        return {
            cells,
            selected: lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"](selectedNodes)
                ? getSelected(selectedNodes, node.metadata.uid)
                : Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["hasLabel"])(node, _selectors__WEBPACK_IMPORTED_MODULE_7__["cephStorageLabel"]),
            props: {
                id: node.metadata.uid,
            },
        };
    });
    if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](filteredData, visibleRows)) {
        setVisibleRows(filteredData);
        if (!selectedNodes && filteredData.length) {
            const preSelected = filteredData.filter((row) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["hasLabel"])(row, _selectors__WEBPACK_IMPORTED_MODULE_7__["cephStorageLabel"]));
            setSelectedNodes(preSelected);
        }
    }
    return rows;
};
const NodeTable = (props) => {
    const { selectedNodes, setSelectedNodes, visibleRows } = props.customData;
    const onSelect = (_event, isSelected, rowIndex, rowData) => {
        var _a;
        const selectedUIDs = (_a = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.map((node) => node.metadata.uid)) !== null && _a !== void 0 ? _a : [];
        const visibleUIDs = visibleRows === null || visibleRows === void 0 ? void 0 : visibleRows.map((row) => row.metadata.uid);
        if (rowIndex === -1) {
            if (isSelected) {
                const uniqueUIDs = lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"]([...visibleUIDs, ...selectedUIDs]);
                setSelectedNodes(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"]([...visibleRows, ...selectedNodes].filter((node) => uniqueUIDs.includes(node.metadata.uid)), (n) => n.metadata.uid));
            }
            else {
                setSelectedNodes(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](selectedNodes.filter((node) => !visibleUIDs.includes(node.metadata.uid)), (n) => n.metadata.uid));
            }
        }
        else {
            const uniqueUIDs = lodash__WEBPACK_IMPORTED_MODULE_1__["xor"](selectedUIDs, [rowData.props.id]);
            const data = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"]([...visibleRows, ...selectedNodes].filter((node) => uniqueUIDs.includes(node.metadata.uid)), (n) => n.metadata.uid);
            setSelectedNodes(data);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ceph-node-list__max-height" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({ "aria-label": "Node Table", "data-test-id": "select-nodes-table" }, props, { Rows: getRows, Header: getColumns, virtualize: false, onSelect: onSelect }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "control-label help-block", "data-test-id": "nodes-selected" }, `${Object(_console_internal_components_utils___WEBPACK_IMPORTED_MODULE_4__["pluralize"])((selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.length) || 0, 'node')} selected`)));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeTable);


/***/ }),

/***/ "./packages/ceph-storage-plugin/src/components/ocs-install/ocs-install.scss":
/*!**********************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/ocs-install/ocs-install.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/ceph-storage-plugin/src/utils/install.ts":
/*!***********************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/utils/install.ts ***!
  \***********************************************************/
/*! exports provided: hasTaints, hasOCSTaint, getConvertedUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTaints", function() { return hasTaints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOCSTaint", function() { return hasOCSTaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertedUnits", function() { return getConvertedUnits; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _constants_ocs_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ocs-install */ "./packages/ceph-storage-plugin/src/constants/ocs-install.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");



const hasTaints = (node) => {
    var _a;
    return !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]((_a = node.spec) === null || _a === void 0 ? void 0 : _a.taints);
};
const hasOCSTaint = (node) => {
    var _a;
    const taints = ((_a = node.spec) === null || _a === void 0 ? void 0 : _a.taints) || [];
    return taints.some((taint) => lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](taint, _constants_ocs_install__WEBPACK_IMPORTED_MODULE_1__["ocsTaint"]));
};
const getConvertedUnits = (value) => {
    var _a;
    return (_a = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["humanizeBinaryBytes"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(value)).string) !== null && _a !== void 0 ? _a : '-';
};


/***/ })

}]);
//# sourceMappingURL=install-page-15984ac313a727072fd8.js.map