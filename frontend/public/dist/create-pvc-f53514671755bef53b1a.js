(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-pvc"],{

/***/ "./public/components/checkbox.tsx":
/*!****************************************!*\
  !*** ./public/components/checkbox.tsx ***!
  \****************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Checkbox = ({ name, label, checked, onChange }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-checkbox", name: name, onChange: onChange, checked: checked, type: "checkbox" }),
            label))));


/***/ }),

/***/ "./public/components/storage/create-pvc.tsx":
/*!**************************************************!*\
  !*** ./public/components/storage/create-pvc.tsx ***!
  \**************************************************/
/*! exports provided: CreatePVCForm, CreatePVCPage, CreatePVC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePVCForm", function() { return CreatePVCForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePVCPage", function() { return CreatePVCPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePVC", function() { return CreatePVC; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/utils */ "./packages/console-shared/src/utils/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/storage-class-dropdown */ "./public/components/utils/storage-class-dropdown.tsx");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../radio */ "./public/components/radio.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../checkbox */ "./public/components/checkbox.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");












const NameValueEditorComponent = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then((c) => c.NameValueEditor) }, props)));
const cephRBDProvisionerSuffix = 'rbd.csi.ceph.com';
//See https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes for more details
const provisionerAccessModeMapping = {
    'kubernetes.io/no-provisioner': ['ReadWriteOnce'],
    'kubernetes.io/aws-ebs': ['ReadWriteOnce'],
    'kubernetes.io/gce-pd': ['ReadWriteOnce', 'ReadOnlyMany'],
    'kubernetes.io/glusterfs': ['ReadWriteOnce', 'ReadWriteMany', 'ReadOnlyMany'],
    'kubernetes.io/cinder': ['ReadWriteOnce'],
    'kubernetes.io/azure-file': ['ReadWriteOnce', 'ReadWriteMany', 'ReadOnlyMany'],
    'kubernetes.io/azure-disk': ['ReadWriteOnce'],
    'kubernetes.io/quobyte': ['ReadWriteOnce', 'ReadWriteMany', 'ReadOnlyMany'],
    'kubernetes.io/rbd': ['ReadWriteOnce', 'ReadOnlyMany'],
    'kubernetes.io/vsphere-volume': ['ReadWriteOnce', 'ReadWriteMany'],
    'kubernetes.io/portworx-volume': ['ReadWriteOnce', 'ReadWriteMany'],
    'kubernetes.io/scaleio': ['ReadWriteOnce', 'ReadOnlyMany'],
    'kubernetes.io/storageos': ['ReadWriteOnce'],
};
// This form is done a little odd since it is used in both its own page and as
// a sub form inside the attach storage page.
const CreatePVCForm = (props) => {
    const [accessModeHelp, setAccessModeHelp] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('Permissions to the mounted drive.');
    const [allowedAccessModes, setAllowedAccessModes] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([
        'ReadWriteOnce',
        'ReadWriteMany',
        'ReadOnlyMany',
    ]);
    const [storageClass, setStorageClass] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [pvcName, setPvcName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [accessMode, setAccessMode] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('ReadWriteOnce');
    const [requestSizeValue, setRequestSizeValue] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [requestSizeUnit, setRequestSizeUnit] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('Gi');
    const [useSelector, setUseSelector] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [nameValuePairs, setNameValuePairs] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([['', '']]);
    const [storageProvisioner, setStorageProvisioner] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const accessModeRadios = [
        {
            value: 'ReadWriteOnce',
            title: 'Single User (RWO)',
        },
        {
            value: 'ReadWriteMany',
            title: 'Shared Access (RWX)',
        },
        {
            value: 'ReadOnlyMany',
            title: 'Read Only (ROX)',
        },
    ];
    const dropdownUnits = {
        Mi: 'MiB',
        Gi: 'GiB',
        Ti: 'TiB',
    };
    const { namespace, onChange } = props;
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        const getSelector = () => {
            if (!useSelector) {
                return null;
            }
            const matchLabels = lodash_es__WEBPACK_IMPORTED_MODULE_0__["reduce"](nameValuePairs, (acc, [key, value]) => {
                return key ? Object.assign(Object.assign({}, acc), { [key]: value }) : acc;
            }, {});
            return lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](matchLabels) ? null : { matchLabels };
        };
        const updatePVC = () => {
            const obj = {
                apiVersion: 'v1',
                kind: 'PersistentVolumeClaim',
                metadata: {
                    name: pvcName,
                    namespace,
                },
                spec: {
                    accessModes: [accessMode],
                    resources: {
                        requests: {
                            storage: `${requestSizeValue}${requestSizeUnit}`,
                        },
                    },
                },
            };
            // Add the selector only if specified.
            const selector = getSelector();
            if (selector) {
                obj.spec.selector = selector;
            }
            if (storageClass) {
                obj.spec.storageClassName = storageClass;
                // should set block only for RBD + RWX
                if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["endsWith"](storageProvisioner, cephRBDProvisionerSuffix) &&
                    accessMode === 'ReadWriteMany') {
                    obj.spec.volumeMode = 'Block';
                }
            }
            return obj;
        };
        onChange(updatePVC);
    }, [
        accessMode,
        namespace,
        nameValuePairs,
        pvcName,
        onChange,
        storageClass,
        requestSizeValue,
        requestSizeUnit,
        useSelector,
        storageProvisioner,
    ]);
    const handleNameValuePairs = ({ nameValuePairs: updatedNameValuePairs }) => {
        setNameValuePairs(updatedNameValuePairs);
    };
    const getAccessModeForProvisioner = (provisioner) => {
        return provisioner && Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__["isCephProvisioner"])(provisioner)
            ? ['ReadWriteOnce', 'ReadWriteMany']
            : ['ReadWriteOnce', 'ReadWriteMany', 'ReadOnlyMany'];
    };
    const handleStorageClass = (updatedStorageClass) => {
        var _a;
        const provisioner = (updatedStorageClass === null || updatedStorageClass === void 0 ? void 0 : updatedStorageClass.provisioner) || '';
        //if the provisioner is unknown or no storage class selected, user should be able to set any access mode
        const modes = provisionerAccessModeMapping[provisioner]
            ? provisionerAccessModeMapping[provisioner]
            : getAccessModeForProvisioner(provisioner);
        //setting message to display for various modes when a storage class of a know provisioner is selected
        const displayMessage = provisionerAccessModeMapping[provisioner] || Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__["isCephProvisioner"])(provisioner)
            ? 'Access mode is set by storage class and cannot be changed.'
            : 'Permissions to the mounted drive.';
        setAccessMode('ReadWriteOnce');
        setAccessModeHelp(displayMessage);
        //setting accessMode to default with the change to Storage Class selection
        setAllowedAccessModes(modes);
        setStorageClass((_a = updatedStorageClass === null || updatedStorageClass === void 0 ? void 0 : updatedStorageClass.metadata) === null || _a === void 0 ? void 0 : _a.name);
        setStorageProvisioner(provisioner);
    };
    const handleRequestSizeInputChange = (obj) => {
        setRequestSizeValue(obj.value);
        setRequestSizeUnit(obj.unit);
    };
    const handleUseSelector = (event) => {
        setUseSelector(event.currentTarget.checked);
    };
    const handlePvcName = (event) => {
        setPvcName(event.currentTarget.value);
    };
    const handleAccessMode = (event) => {
        setAccessMode(event.currentTarget.value);
    };
    const onlyPvcSCs = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"]((sc) => !Object(_console_shared_src_utils__WEBPACK_IMPORTED_MODULE_5__["isObjectSC"])(sc), []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_storage_class_dropdown__WEBPACK_IMPORTED_MODULE_8__["StorageClassDropdown"], { onChange: handleStorageClass, id: "storageclass-dropdown", describedBy: "storageclass-dropdown-help", required: false, name: "storageClass", filter: onlyPvcSCs })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "pvc-name" }, "Persistent Volume Claim Name"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: handlePvcName, placeholder: "my-storage-claim", "aria-describedby": "pvc-name-help", id: "pvc-name", name: "pvcName", required: true }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "pvc-name-help" }, "A unique name for the storage claim within the project.")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "access-mode" }, "Access Mode"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            accessModeRadios.map((radio) => {
                let radioObj = null;
                const disabled = !allowedAccessModes.includes(radio.value);
                allowedAccessModes.forEach((mode) => {
                    const checked = !disabled ? radio.value === accessMode : radio.value === mode;
                    radioObj = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_9__["RadioInput"], Object.assign({}, radio, { key: radio.value, onChange: handleAccessMode, inline: true, disabled: disabled, checked: checked, "aria-describedby": "access-mode-help", name: "accessMode" })));
                });
                return radioObj;
            }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "access-mode-help" }, accessModeHelp)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "request-size-input" }, "Size"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["RequestSizeInput"], { name: "requestSize", required: true, onChange: handleRequestSizeInputChange, defaultRequestSizeUnit: requestSizeUnit, defaultRequestSizeValue: requestSizeValue, dropdownUnits: dropdownUnits, describedBy: "request-size-help", inputID: "request-size-input" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "request-size-help" }, "Desired storage capacity."),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], { label: "Use label selectors to request storage", onChange: handleUseSelector, checked: useSelector, name: "showLabelSelector" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
            useSelector && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NameValueEditorComponent, { nameValuePairs: nameValuePairs, valueString: "Selector", nameString: "Label", addString: "Add Value", readOnly: false, allowSorting: false, updateParentData: handleNameValuePairs })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "label-selector-help" }, "Use label selectors to define how storage is created."))));
};
const CreatePVCPage = (props) => {
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [inProgress, setInProgress] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [pvcObj, setPvcObj] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const title = 'Create Persistent Volume Claim';
    const { namespace } = props;
    const save = (e) => {
        e.preventDefault();
        setInProgress(true);
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_11__["PersistentVolumeClaimModel"], pvcObj).then((resource) => {
            setInProgress(false);
            _utils__WEBPACK_IMPORTED_MODULE_7__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["resourceObjPath"])(resource, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceFor"])(resource)));
        }, ({ message }) => {
            setError(message || 'Could not create persistent volume claim.');
            setInProgress(false);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__name" }, title),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__heading-link" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `/k8s/ns/${namespace}/persistentvolumeclaims/~new`, id: "yaml-link", replace: true }, "Edit YAML"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { className: "co-m-pane__body-group", onSubmit: save },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CreatePVCForm, { onChange: setPvcObj, namespace: namespace }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ButtonBar"], { errorMessage: error, inProgress: inProgress },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ActionGroup"], { className: "pf-c-form" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { id: "save-changes", type: "submit", variant: "primary" }, "Create"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { onClick: _utils__WEBPACK_IMPORTED_MODULE_7__["history"].goBack, type: "button", variant: "secondary" }, "Cancel"))))));
};
const CreatePVC = ({ match: { params } }) => {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CreatePVCPage, { namespace: params.ns });
};


/***/ })

}]);
//# sourceMappingURL=create-pvc-f53514671755bef53b1a.js.map