(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-obc"],{

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/create-obc.scss":
/*!************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/create-obc.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/create-obc.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/create-obc.tsx ***!
  \***********************************************************************************************/
/*! exports provided: CreateOBCPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOBCPage", function() { return CreateOBCPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/storage-class-dropdown */ "./public/components/utils/storage-class-dropdown.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/noobaa-storage-plugin/src/models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _object_bucket_page_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../object-bucket-page/state */ "./packages/noobaa-storage-plugin/src/components/object-bucket-page/state.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./packages/noobaa-storage-plugin/src/constants/index.ts");
/* harmony import */ var _create_obc_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-obc.scss */ "./packages/noobaa-storage-plugin/src/components/object-bucket-claim-page/create-obc.scss");
/* harmony import */ var _create_obc_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_create_obc_scss__WEBPACK_IMPORTED_MODULE_11__);












const CreateOBCPage = (props) => {
    var _a, _b, _c;
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](_object_bucket_page_state__WEBPACK_IMPORTED_MODULE_9__["commonReducer"], _object_bucket_page_state__WEBPACK_IMPORTED_MODULE_9__["defaultState"]);
    const namespace = (_b = (_a = props === null || props === void 0 ? void 0 : props.match) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.ns;
    const isNoobaa = (_c = state.scProvisioner) === null || _c === void 0 ? void 0 : _c.includes(_constants__WEBPACK_IMPORTED_MODULE_10__["NB_PROVISIONER"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const obj = {
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["apiVersionForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaObjectBucketClaimModel"]),
            kind: _console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaObjectBucketClaimModel"].kind,
            metadata: {
                namespace,
            },
            spec: {
                ssl: false,
            },
        };
        if (state.scName) {
            obj.spec.storageClassName = state.scName;
        }
        if (state.name) {
            obj.metadata.name = state.name;
            obj.spec.generateBucketName = state.name;
        }
        else {
            obj.metadata.generateName = 'bucketclaim-';
            obj.spec.generateBucketName = 'bucket-';
        }
        if (state.bucketClass && isNoobaa) {
            obj.spec.additionalConfig = { bucketclass: state.bucketClass };
        }
        dispatch({ type: 'setPayload', payload: obj });
    }, [namespace, state.name, state.scName, state.bucketClass, isNoobaa]);
    const save = (e) => {
        e.preventDefault();
        dispatch({ type: 'setProgress' });
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaObjectBucketClaimModel"], state.payload)
            .then((resource) => {
            dispatch({ type: 'unsetProgress' });
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourceObjPath"])(resource, Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceFor"])(resource)));
        })
            .catch((err) => {
            dispatch({ type: 'setError', message: err.message });
            dispatch({ type: 'unsetProgress' });
        });
    };
    const onScChange = (sc) => {
        dispatch({ type: 'setStorage', name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["getName"])(sc) });
        dispatch({ type: 'setProvisioner', name: sc === null || sc === void 0 ? void 0 : sc.provisioner });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Create Object Bucket Claim")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name" }, "Create Object Bucket Claim"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__heading-link" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourcePathFromModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaObjectBucketClaimModel"], null, namespace)}/~new`, replace: true }, "Edit YAML"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "co-m-pane__body-group", onSubmit: save },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label", htmlFor: "obc-name" }, "Object Bucket Claim Name"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: (e) => dispatch({ type: 'setName', name: e.currentTarget.value }), placeholder: "my-object-bucket", "aria-describedby": "obc-name-help", id: "obc-name", name: "obcName", pattern: "[a-z0-9](?:[-a-z0-9]*[a-z0-9])?" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block", id: "obc-name-help" }, "If not provided, a generic name will be generated.")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_4__["StorageClassDropdown"], { onChange: onScChange, required: true, name: "storageClass", hideClassName: "co-required", filter: _console_shared__WEBPACK_IMPORTED_MODULE_8__["isObjectSC"], id: "sc-dropdown" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, "Defines the object-store service and the bucket provisioner.")),
                    isNoobaa && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "obc-name" }, "Bucket Class"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: [
                                {
                                    isList: true,
                                    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaBucketClassModel"]),
                                    namespace: _constants__WEBPACK_IMPORTED_MODULE_10__["OCS_NS"],
                                    prop: 'bucketClass',
                                },
                            ] },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["ResourceDropdown"], { onChange: (sc) => dispatch({ type: 'setBucketClass', name: sc }), dataSelector: ['metadata', 'name'], selectedKey: state.bucketClass, placeholder: "Select Bucket Class", dropDownClassName: "dropdown--full-width", className: "nb-create-obc__bc-dropdown", id: "bc-dropdown" })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ButtonBar"], { errorMessage: state.error, inProgress: state.progress },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["ActionGroup"], { className: "pf-c-form" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Button"], { type: "submit", variant: "primary" }, "Create"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Button"], { onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].goBack, type: "button", variant: "secondary" }, "Cancel"))))));
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/object-bucket-page/state.ts":
/*!***********************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/object-bucket-page/state.ts ***!
  \***********************************************************************************/
/*! exports provided: defaultState, commonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonReducer", function() { return commonReducer; });
const defaultState = {
    name: '',
    scName: '',
    scProvisioner: '',
    progress: false,
    error: '',
    payload: {},
    sizeUnit: 'GiB',
    sizeValue: '',
    bucketClass: 'noobaa-default-bucket-class',
};
const commonReducer = (state, action) => {
    switch (action.type) {
        case 'setName':
            return Object.assign({}, state, { name: action.name });
        case 'setStorage':
            return Object.assign({}, state, { scName: action.name });
        case 'setProvisioner':
            return Object.assign({}, state, { scProvisioner: action.name });
        case 'setProgress':
            return Object.assign({}, state, { progress: true });
        case 'unsetProgress':
            return Object.assign({}, state, { progress: false });
        case 'setError':
            return Object.assign({}, state, { error: action.message });
        case 'setSize':
            return Object.assign({}, state, { sizeUnit: action.unit, sizeValue: action.value });
        case 'setPayload':
            return Object.assign({}, state, { payload: action.payload });
        case 'setBucketClass':
            return Object.assign({}, state, { bucketClass: action.name });
        default:
            return defaultState;
    }
};


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
//# sourceMappingURL=create-obc-89e0d2b95fd2c429e2ca.js.map