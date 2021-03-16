(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-bc~create-bs"],{

/***/ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.scss":
/*!***********************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_components_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/internal/components/utils/storage-class-dropdown */ "./public/components/utils/storage-class-dropdown.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _create_bs_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-bs.scss */ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.scss");
/* harmony import */ var _create_bs_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_create_bs_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
















const PROVIDERS = (() => {
    const values = lodash__WEBPACK_IMPORTED_MODULE_2__["values"](_constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"]);
    return lodash__WEBPACK_IMPORTED_MODULE_2__["zipObject"](values, values);
})();
const awsRegionItems = lodash__WEBPACK_IMPORTED_MODULE_2__["zipObject"](_constants__WEBPACK_IMPORTED_MODULE_15__["AWS_REGIONS"], _constants__WEBPACK_IMPORTED_MODULE_15__["AWS_REGIONS"]);
const externalProviders = [
    _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AWS,
    _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AZURE,
    _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].S3,
    _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].GCP,
    _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].IBM,
];
const endpointSupported = [_constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].S3, _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].IBM];
/**
 * aws-s3, s3 compatible, IBM COS share the same form
 */
const S3EndPointType = (props) => {
    const [showSecret, setShowSecret] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true);
    const { provider, namespace, state, dispatch } = props;
    const targetLabel = provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AZURE ? 'Target Blob Container' : 'Target Bucket';
    const credentialField1Label = provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AZURE ? 'Account Name' : 'Access Key';
    const credentialField2Label = provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AZURE ? 'Account Key' : 'Secret Key';
    const resources = [
        {
            isList: true,
            namespace,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"].kind,
            prop: 'secrets',
        },
    ];
    const switchToSecret = () => {
        setShowSecret(true);
        dispatch({ type: 'setAccessKey', value: '' });
        dispatch({ type: 'setSecretKey', value: '' });
    };
    const switchToCredentials = () => {
        setShowSecret(false);
        dispatch({ type: 'setSecretName', value: '' });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AWS && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Region", fieldId: "region", className: "nb-bs-form-entry", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { className: "nb-bs-form-entry__dropdown", menuClassName: "nb-bs-form-entry__dropdown--short", buttonClassName: "nb-bs-form-entry__dropdown", onChange: (e) => {
                    dispatch({ type: 'setRegion', value: e });
                }, items: awsRegionItems, selectedKey: _constants__WEBPACK_IMPORTED_MODULE_15__["AWS_REGIONS"][0], "aria-label": "Region Dropdown" }))),
        endpointSupported.includes(provider) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Endpoint", fieldId: "endpoint", className: "nb-bs-form-entry", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { onChange: (e) => {
                    dispatch({ type: 'setEndpoint', value: e });
                }, value: state.endpoint, "aria-label": "Endpoint Address" }))),
        showSecret ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Secret", fieldId: "secret-dropdown", className: "nb-bs-form-entry nb-bs-form-entry--full-width", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { resources: resources },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["ResourceDropdown"], { selectedKey: state.secretName, placeholder: "Select Secret", className: "nb-bs-form-entry__dropdown nb-bs-form-entry__dropdown--full-width", buttonClassName: "nb-bs-form-entry__dropdown", dataSelector: ['metadata', 'name'], onChange: (e) => dispatch({ type: 'setSecretName', value: e }) })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "plain", onClick: switchToCredentials }, "Switch to Credentials")))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: credentialField1Label, fieldId: "acess-key" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { value: state.accessKey, onChange: (e) => {
                            dispatch({ type: 'setAccessKey', value: e });
                        }, "aria-label": "Access Key Field" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "plain", onClick: switchToSecret }, "Switch to Secret"))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { className: "nb-bs-form-entry", label: credentialField2Label, fieldId: "secret-key" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { value: state.secretKey, onChange: (e) => {
                        dispatch({ type: 'setSecretKey', value: e });
                    }, "aria-label": "Secret Key Field", type: "password" })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: targetLabel, fieldId: "target-bucket", className: "nb-bs-form-entry", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { value: state.target, onChange: (e) => dispatch({ type: 'setTarget', value: e }), "aria-label": targetLabel }))));
};
const PVCType = ({ state, dispatch }) => {
    const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('50');
    const [, updateState] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]();
    const units = {
        GiB: 'GiB',
        TiB: 'TiB',
    };
    // Noobaa expected Ti console standrad is to show TiB
    const unitConverter = {
        GiB: 'Gi',
        TiB: 'Ti',
    };
    // Fix for updating the storage class by force rerender
    const forceUpdate = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](() => updateState({}), []);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        forceUpdate();
    }, [forceUpdate, state.storageClass]);
    const onChange = (event) => {
        const { value, unit } = event;
        const input = `${value}${unitConverter[unit]}`;
        setSize(value);
        dispatch({ type: 'setVolumeSize', value: input });
    };
    const substract = () => {
        if (state.numVolumes > 1) {
            dispatch({ type: 'setVolumes', value: state.numVolumes - 1 });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Number of Volumes", fieldId: "set-volumes", className: "nb-bs-form-entry nb-bs-form-entry--short", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["MinusIcon"], { onClick: substract }),
                    ' '),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { value: state.numVolumes, "aria-label": "Number of Volumes" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PlusIcon"], { onClick: () => dispatch({ type: 'setVolumes', value: state.numVolumes + 1 }) }),
                    ' '))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Volume Size", fieldId: "volume-size", className: "nb-bs-form-entry nb-bs-form-entry--short", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["RequestSizeInput"], { name: "Volume Size", onChange: onChange, dropdownUnits: units, defaultRequestSizeUnit: "GiB", defaultRequestSizeValue: size })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { fieldId: "storage-class", className: "nb-bs-form-entry", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_12__["StorageClassDropdown"], { onChange: (sc) => dispatch({ type: 'setStorageClass', value: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(sc) }), defaultClass: "ocs-storagecluster-ceph-rbd", id: "sc-dropdown", required: true }))));
};
const gcpHelpText = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_9__["DashboardCardPopupLink"], { linkTitle: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["HelpIcon"], null),
        " Where can I find google cloud credentials?"), popupTitle: " " },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        "Service account keys are needed for Google Cloud Storage authentication. The keys can be found in the service accounts page in the GCP console.",
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ExternalLink"], { href: "https://cloud.google.com/iam/docs/service-accounts#service_account_keys", text: "Learn more" }))));
const GCPEndpointType = (props) => {
    const [fileData, setFileData] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [inputData, setInputData] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const { state, dispatch } = props;
    const onUpload = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (ev) => {
            const data = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](ev, 'target.result');
            setFileData(data);
            setInputData(file.name);
            dispatch({ type: 'setGcpJSON', value: data });
        };
        reader.readAsText(file);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { className: "nb-bs-form-entry", helperText: "Upload a .json file with the service account keys provided by google cloud storage.", label: "Secret Key", fieldId: "secret-key", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { isReadOnly: true, value: inputData, className: "nb-bs-form-entry__file-name", placeholder: "Upload JSON", "aria-label": "Uploaded File Name" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "inputbtn nb-bs-form-entry-upload-btn" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { href: "#", variant: "secondary", className: "custom-input-btn nb-bs-form-entry-upload-btn__button" }, "Browse"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "file", id: "inputButton", className: "nb-bs-form-entry-upload-btn__input", onChange: onUpload, "aria-label": "Upload File" })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { className: "nb-bs-form-entry", helperText: gcpHelpText, fieldId: "gcp-data" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextArea"], { "aria-label": "cluster-metadata", className: "nb-bs-form-entry__data-dump", value: fileData })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { className: "nb-bs-form-entry", label: "Target Bucket", fieldId: "target-bucket", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { value: state.target, onChange: (e) => {
                    dispatch({ type: 'setTarget', value: e });
                }, "aria-label": "Target Bucket" }))));
};
const initialState = {
    secretName: '',
    secretKey: '',
    accessKey: '',
    region: _constants__WEBPACK_IMPORTED_MODULE_15__["AWS_REGIONS"][0],
    gcpJSON: '',
    target: '',
    endpoint: '',
    numVolumes: 1,
    volumeSize: '50Gi',
    storageClass: '',
};
const providerDataReducer = (state, action) => {
    const { value } = action;
    switch (action.type) {
        case 'setSecretName':
            return Object.assign({}, state, { secretName: value });
        case 'setSecretKey':
            return Object.assign({}, state, { secretKey: value });
        case 'setAccessKey':
            return Object.assign({}, state, { accessKey: value });
        case 'setRegion':
            return Object.assign({}, state, { region: value });
        case 'setGcpJSON':
            return Object.assign({}, state, { gcpJSON: value });
        case 'setTarget':
            return Object.assign({}, state, { target: value });
        case 'setEndpoint':
            return Object.assign({}, state, { endpoint: value });
        case 'setVolumes':
            return Object.assign({}, state, { numVolumes: value });
        case 'setVolumeSize':
            return Object.assign({}, state, { volumeSize: value });
        case 'setStorageClass':
            return Object.assign({}, state, { storageClass: value });
        default:
            return initialState;
    }
};
const secretPayloadCreator = (provider, namespace, secretName, field1, field2 = '') => {
    const payload = {
        apiVersion: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getAPIVersion"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"]),
        kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"].kind,
        stringData: {},
        metadata: {
            name: secretName,
            namespace,
        },
        type: _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_10__["SecretType"].opaque,
    };
    switch (provider) {
        case _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AZURE:
            payload.stringData = {
                AccountName: field1,
                AccountKey: field2,
            };
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].GCP:
            payload.stringData = {
                GoogleServiceAccountPrivateKeyJson: field1,
            };
            break;
        case _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].IBM:
            payload.stringData = {
                IBM_COS_ACCESS_KEY_ID: field1,
                IBM_COS_SECRET_ACCESS_KEY: field2,
            };
            break;
        default:
            payload.stringData = {
                AWS_ACCESS_KEY_ID: field1,
                AWS_SECRET_ACCESS_KEY: field2,
            };
            break;
    }
    return payload;
};
const CreateBackingStoreForm = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["withHandlePromise"])((props) => {
    const [bsName, setBsName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [provider, setProvider] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AWS);
    const [providerDataState, providerDataDispatch] = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](providerDataReducer, initialState);
    const { cancel, className, close, inProgress, errorMessage, handlePromise, isPage, csv, namespace, } = props;
    const onSubmit = (event) => {
        event.preventDefault();
        /** Create a secret if secret ==='' */
        let { secretName } = providerDataState;
        const promises = [];
        if (!secretName && provider !== _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].PVC) {
            secretName = bsName.concat('-secret');
            const { secretKey, accessKey, gcpJSON } = providerDataState;
            const secretPayload = secretPayloadCreator(provider, namespace, secretName, accessKey || gcpJSON, secretKey);
            providerDataDispatch({ type: 'setSecretName', value: secretName });
            promises.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"], secretPayload));
        }
        /** Payload for bs */
        const bsPayload = {
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["NooBaaBackingStoreModel"]),
            kind: _models__WEBPACK_IMPORTED_MODULE_13__["NooBaaBackingStoreModel"].kind,
            metadata: {
                namespace,
                name: bsName,
            },
            spec: {
                type: _constants__WEBPACK_IMPORTED_MODULE_15__["NOOBAA_TYPE_MAP"][provider],
                ssl: false,
            },
        };
        if (provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].PVC) {
            // eslint-disable-next-line
            bsPayload.spec['pvPool'] = {
                numVolumes: providerDataState.numVolumes,
                storageClass: providerDataState.storageClass,
                resources: {
                    requests: {
                        storage: providerDataState.volumeSize,
                    },
                },
            };
        }
        else if (externalProviders.includes(provider)) {
            bsPayload.spec = Object.assign(Object.assign({}, bsPayload.spec), { [_constants__WEBPACK_IMPORTED_MODULE_15__["PROVIDERS_NOOBAA_MAP"][provider]]: {
                    [_constants__WEBPACK_IMPORTED_MODULE_15__["BUCKET_LABEL_NOOBAA_MAP"][provider]]: providerDataState.target,
                    secret: {
                        name: secretName,
                        namespace,
                    },
                } });
        }
        if (provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].S3) {
            // eslint-disable-next-line
            bsPayload.spec['s3Compatible'] = Object.assign(Object.assign({}, bsPayload.spec['s3Compatible']), { endpoint: providerDataState.endpoint });
        }
        else if (provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].IBM) {
            bsPayload.spec.ibmCos = Object.assign(Object.assign({}, bsPayload.spec.ibmCos), { endpoint: providerDataState.endpoint });
        }
        // Add region in the end
        if (provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AWS) {
            bsPayload.spec.awsS3 = Object.assign(Object.assign({}, bsPayload.spec.awsS3), { region: providerDataState.region });
        }
        promises.push(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_13__["NooBaaBackingStoreModel"], bsPayload));
        return handlePromise(Promise.all(promises)).then((resource) => {
            const lastIndex = resource.length - 1;
            if (isPage)
                _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_11__["history"].push(`/k8s/ns/${namespace}/clusterserviceversions/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(csv)}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["NooBaaBackingStoreModel"])}/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(resource[lastIndex])}`);
            else
                close();
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], { className: classnames__WEBPACK_IMPORTED_MODULE_0__('nb-bs-form', className), onSubmit: onSubmit },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Backing Store Name", fieldId: "backingstore-name", className: "nb-bs-form-entry", helperText: "A unique name for the Backing Store within the project", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { onChange: setBsName, value: bsName, placeholder: "my-backingstore", "aria-label": "Backing Store Name" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { label: "Provider", fieldId: "provider-name", className: "nb-bs-form-entry", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], { className: "nb-bs-form-entry__dropdown", buttonClassName: "nb-bs-form-entry__dropdown", onChange: setProvider, items: PROVIDERS, selectedKey: provider })),
        provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].GCP && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GCPEndpointType, { state: providerDataState, dispatch: providerDataDispatch })),
        (provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AWS ||
            provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].S3 ||
            provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].IBM ||
            provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].AZURE) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](S3EndPointType, { provider: provider, namespace: "openshift-storage", state: providerDataState, dispatch: providerDataDispatch })),
        provider === _constants__WEBPACK_IMPORTED_MODULE_15__["BC_PROVIDERS"].PVC && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PVCType, { state: providerDataState, dispatch: providerDataDispatch })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], { errorMessage: errorMessage, inProgress: inProgress },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary" }, "Create Backing Store"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: cancel, variant: "secondary" }, "Cancel")))));
});
/* harmony default export */ __webpack_exports__["default"] = (CreateBackingStoreForm);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/constants/index.ts":
/*!***************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/constants/index.ts ***!
  \***************************************************************/
/*! exports provided: ACCOUNTS, PROVIDERS, BY_IOPS, BY_LOGICAL_USAGE, BY_PHYSICAL_VS_LOGICAL_USAGE, BY_EGRESS, PROJECTS, BUCKET_CLASS, OCS_NS, NB_PROVISIONER, CHART_LABELS, BC_PROVIDERS, PROVIDERS_NOOBAA_MAP, BUCKET_LABEL_NOOBAA_MAP, NOOBAA_TYPE_MAP, AWS_REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNTS", function() { return ACCOUNTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDERS", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_IOPS", function() { return BY_IOPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_LOGICAL_USAGE", function() { return BY_LOGICAL_USAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_PHYSICAL_VS_LOGICAL_USAGE", function() { return BY_PHYSICAL_VS_LOGICAL_USAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BY_EGRESS", function() { return BY_EGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_CLASS", function() { return BUCKET_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCS_NS", function() { return OCS_NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_PROVISIONER", function() { return NB_PROVISIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_LABELS", function() { return CHART_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BC_PROVIDERS", function() { return BC_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDERS_NOOBAA_MAP", function() { return PROVIDERS_NOOBAA_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_LABEL_NOOBAA_MAP", function() { return BUCKET_LABEL_NOOBAA_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOOBAA_TYPE_MAP", function() { return NOOBAA_TYPE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_REGIONS", function() { return AWS_REGIONS; });
const ACCOUNTS = 'Accounts';
const PROVIDERS = 'Providers';
const BY_IOPS = 'I/O Operations';
const BY_LOGICAL_USAGE = 'Logical Used Capacity';
const BY_PHYSICAL_VS_LOGICAL_USAGE = 'Physical Vs Logical Usage';
const BY_EGRESS = 'Egress';
const PROJECTS = 'Projects';
const BUCKET_CLASS = 'Bucket Class';
const OCS_NS = 'openshift-storage';
const NB_PROVISIONER = 'noobaa.io/obc';
const CHART_LABELS = {
    [BY_LOGICAL_USAGE]: 'Logical used capacity per account',
    [BY_PHYSICAL_VS_LOGICAL_USAGE]: 'Physical vs. Logical used capacity',
    [BY_EGRESS]: 'Egress Per Provider',
    [BY_IOPS]: 'I/O Operations count',
};
var BC_PROVIDERS;
(function (BC_PROVIDERS) {
    BC_PROVIDERS["AWS"] = "AWS S3";
    BC_PROVIDERS["S3"] = "S3 Compatible";
    BC_PROVIDERS["PVC"] = "PVC";
    BC_PROVIDERS["GCP"] = "Google cloud storage";
    BC_PROVIDERS["AZURE"] = "Azure Blob";
    BC_PROVIDERS["IBM"] = "IBM COS";
})(BC_PROVIDERS || (BC_PROVIDERS = {}));
const PROVIDERS_NOOBAA_MAP = {
    [BC_PROVIDERS.AWS]: 'awsS3',
    [BC_PROVIDERS.S3]: 's3Compatible',
    [BC_PROVIDERS.AZURE]: 'azureBlob',
    [BC_PROVIDERS.GCP]: 'googleCloudStorage',
    [BC_PROVIDERS.PVC]: 'pvPool',
    [BC_PROVIDERS.IBM]: 'ibmCos',
};
const BUCKET_LABEL_NOOBAA_MAP = {
    [BC_PROVIDERS.AWS]: 'targetBucket',
    [BC_PROVIDERS.S3]: 'targetBucket',
    [BC_PROVIDERS.AZURE]: 'targetBlobContainer',
    [BC_PROVIDERS.GCP]: 'targetBucket',
    [BC_PROVIDERS.IBM]: 'targetBucket',
};
const NOOBAA_TYPE_MAP = {
    [BC_PROVIDERS.AWS]: 'aws-s3',
    [BC_PROVIDERS.S3]: 's3-compatible',
    [BC_PROVIDERS.AZURE]: 'azure-blob',
    [BC_PROVIDERS.GCP]: 'google-cloud-storage',
    [BC_PROVIDERS.PVC]: 'pv-pool',
    [BC_PROVIDERS.IBM]: 'ibm-cos',
};
const AWS_REGIONS = [
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'ca-central-1',
    'eu-central-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'eu-north-1',
    'ap-east-1',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-south-1',
    'me-south-1',
    'sa-east-1',
];


/***/ })

}]);
//# sourceMappingURL=create-bc~create-bs-64115045e489bf4b1c78.js.map