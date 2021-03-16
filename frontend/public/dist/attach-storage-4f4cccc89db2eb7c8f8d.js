(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attach-storage"],{

/***/ "./public/components/container-selector.tsx":
/*!**************************************************!*\
  !*** ./public/components/container-selector.tsx ***!
  \**************************************************/
/*! exports provided: ContainerSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerSelector", function() { return ContainerSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");


const ContainerSelector = ({ containers, onChange, selected, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-form__checkbox-row" }, containers.map((container) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { key: container.name, label: `${container.name} from image ${container.image}`, id: container.name, isChecked: selected.includes(container.name), onChange: onChange })))));


/***/ }),

/***/ "./public/components/storage/attach-storage.tsx":
/*!******************************************************!*\
  !*** ./public/components/storage/attach-storage.tsx ***!
  \******************************************************/
/*! exports provided: AttachStorageForm, AttachStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachStorageForm", function() { return AttachStorageForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachStorage", function() { return AttachStorage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../kinds */ "./public/kinds.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkbox */ "./public/components/checkbox.tsx");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../radio */ "./public/components/radio.tsx");
/* harmony import */ var _create_pvc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-pvc */ "./public/components/storage/create-pvc.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _container_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../container-selector */ "./public/components/container-selector.tsx");












const PVCDropdown = (props) => {
    const kind = 'PersistentVolumeClaim';
    const { namespace, selectedKey } = props;
    const resources = [{ kind, namespace }];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ListDropdown"], Object.assign({}, props, { desc: "Persistent Volume Claim", resources: resources, selectedKeyKind: kind, placeholder: "Select claim", selectedKey: selectedKey })));
};
const AttachStorageForm = (props) => {
    const [obj, setObj] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const [inProgress, setInProgress] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [useContainerSelector, setUseContainerSelector] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [claimName, setClaimName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [volumeName, setVolumeName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [mountPath, setMountPath] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [subPath, setSubPath] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [mountAsReadOnly, setMountAsReadOnly] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [selectedContainers, setSelectedContainers] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [volumeAlreadyMounted, setVolumeAlreadyMounted] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [showCreatePVC, setShowCreatePVC] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('existing');
    const [newPVCObj, setNewPVCObj] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
    const { kindObj, resourceName, namespace } = props;
    const supportedKinds = [
        'Deployment',
        'DeploymentConfig',
        'ReplicaSet',
        'ReplicationController',
        'StatefulSet',
        'DaemonSet',
    ];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        // Get the current resource so we can add to its definition
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sGet"])(kindObj, resourceName, namespace).then(setObj);
    }, [kindObj, resourceName, namespace]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        // If the PVC or its name changes, check if there is already a volume with that name
        const newClaimName = showCreatePVC === 'existing' ? claimName : lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](newPVCObj, 'metadata.name', '');
        const volumes = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.template.spec.volumes');
        const volume = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](volumes, {
            persistentVolumeClaim: {
                claimName: newClaimName,
            },
        });
        const newVolumeName = volume ? volume.name : newClaimName;
        const newVolumeAlreadyMounted = !!volume;
        setVolumeName(newVolumeName);
        setVolumeAlreadyMounted(newVolumeAlreadyMounted);
    }, [newPVCObj, obj, claimName, showCreatePVC]);
    if (!kindObj || !lodash_es__WEBPACK_IMPORTED_MODULE_0__["includes"](supportedKinds, kindObj.kind)) {
        setError('Unsupported kind.');
        return;
    }
    const handleShowCreatePVCChange = (event) => {
        setShowCreatePVC(event.currentTarget.value);
    };
    const handleSelectContainers = () => {
        setUseContainerSelector(!useContainerSelector);
        setSelectedContainers([]);
    };
    const handleContainerSelectionChange = (checked, event) => {
        const checkedItems = [...selectedContainers];
        checked
            ? checkedItems.push(event.currentTarget.id)
            : lodash_es__WEBPACK_IMPORTED_MODULE_0__["pull"](checkedItems, event.currentTarget.id);
        setSelectedContainers(checkedItems);
    };
    const isContainerSelected = ({ name }) => {
        return !useContainerSelector || selectedContainers.includes(name);
    };
    const getMountPaths = (podTemplate) => {
        const containers = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](podTemplate, 'spec.containers', []);
        return containers.reduce((acc, container) => {
            if (!isContainerSelected(container)) {
                return acc;
            }
            const mountPaths = lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](container.volumeMounts, 'mountPath');
            return acc.concat(mountPaths);
        }, []);
    };
    const validateMountPaths = (path) => {
        const existingMountPaths = getMountPaths(obj.spec.template);
        const err = existingMountPaths.includes(path) ? 'Mount path is already in use.' : '';
        setError(err);
    };
    // Add logic to check this handler for if a mount path is not unique
    const handleMountPathChange = (event) => {
        setMountPath(event.currentTarget.value);
        // Look at the existing mount paths so that we can warn if the new value is not unique.
        validateMountPaths(event.currentTarget.value);
    };
    const handleSubPathChange = (event) => {
        setSubPath(event.currentTarget.value);
    };
    const handlePVCChange = (newClaimName) => {
        setClaimName(newClaimName);
    };
    const onMountAsReadOnlyChanged = () => {
        setMountAsReadOnly(!mountAsReadOnly);
    };
    const createPVCIfNecessary = () => {
        return showCreatePVC === 'new'
            ? Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_10__["PersistentVolumeClaimModel"], newPVCObj).then((claim) => claim.metadata.name)
            : Promise.resolve(claimName);
    };
    const getVolumePatches = (pvClaimName) => {
        const mount = {
            name: volumeName,
            mountPath,
            subPath,
            readOnly: mountAsReadOnly,
        };
        const containers = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.template.spec.containers', []);
        const patches = containers.reduce((patch, container, i) => {
            // Only add to selected containers
            if (isContainerSelected(container)) {
                if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](container.volumeMounts)) {
                    patch.push({
                        op: 'add',
                        path: `/spec/template/spec/containers/${i}/volumeMounts`,
                        value: [mount],
                    });
                }
                else {
                    patch.push({
                        op: 'add',
                        path: `/spec/template/spec/containers/${i}/volumeMounts/-`,
                        value: mount,
                    });
                }
            }
            return patch;
        }, []);
        const volume = {
            name: volumeName,
            persistentVolumeClaim: {
                claimName: pvClaimName,
            },
        };
        if (!volumeAlreadyMounted) {
            const existingVolumes = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.template.spec.volumes');
            const volumePatch = lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](existingVolumes)
                ? { op: 'add', path: '/spec/template/spec/volumes', value: [volume] }
                : { op: 'add', path: '/spec/template/spec/volumes/-', value: volume };
            return [...patches, volumePatch];
        }
        return patches;
    };
    const save = (event) => {
        event.preventDefault();
        if (useContainerSelector && selectedContainers.length === 0) {
            setError('You must choose at least one container to mount to.');
            return;
        }
        setInProgress(true);
        createPVCIfNecessary().then((pvClaimName) => {
            return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sPatch"])(kindObj, obj, getVolumePatches(pvClaimName)).then((resource) => {
                setInProgress(false);
                _utils__WEBPACK_IMPORTED_MODULE_6__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["resourceObjPath"])(resource, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceFor"])(resource)));
            });
        }, (err) => {
            setError(err.message);
            setInProgress(false);
        });
    };
    const title = 'Add Storage';
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { className: "co-m-pane__body-group co-m-pane__form", onSubmit: save },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-m-pane__heading" }, title),
            kindObj && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__explanation" },
                "Add a persistent volume claim to",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { inline: true, kind: kindObj.kind, name: resourceName, namespace: namespace }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required" }, "Persistent Volume Claim"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_8__["RadioInput"], { title: "Use existing claim", value: "existing", key: "existing", onChange: handleShowCreatePVCChange, checked: showCreatePVC === 'existing', name: "showCreatePVC" })),
            showCreatePVC === 'existing' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-form-subsection" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PVCDropdown, { namespace: namespace, onChange: handlePVCChange, id: "claimName", selectedKey: claimName }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_8__["RadioInput"], { title: "Create new claim", value: "new", key: "new", onChange: handleShowCreatePVCChange, checked: showCreatePVC === 'new', name: "showCreatePVC" })),
            showCreatePVC === 'new' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-form-subsection" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_create_pvc__WEBPACK_IMPORTED_MODULE_9__["CreatePVCForm"], { onChange: setNewPVCObj, namespace: namespace }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label co-required", htmlFor: "mount-path" }, "Mount Path"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: handleMountPathChange, "aria-describedby": "mount-path-help", name: "mountPath", id: "mount-path", value: mountPath, required: true }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "mount-path-help" }, "Mount path for the volume inside the container."))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], { label: "Mount as read-only", onChange: onMountAsReadOnlyChanged, checked: mountAsReadOnly, name: "mountAsReadOnly" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label", htmlFor: "subpath" }, "Subpath"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", type: "text", onChange: handleSubPathChange, "aria-describedby": "subpath-help", id: "subpath", name: "subPath", value: subPath }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "subpath-help" }, "Optional path within the volume from which it will be mounted into the container. Defaults to the root of volume."))),
            !useContainerSelector && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "The volume will be mounted into all containers. You can",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: handleSelectContainers, variant: "link", isInline: true }, "select specific containers"),
                ' ',
                "instead.")),
            useContainerSelector && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-group co-break-word" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label" }, "Containers"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", onClick: handleSelectContainers, variant: "link" }, "(use all containers)"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_container_selector__WEBPACK_IMPORTED_MODULE_11__["ContainerSelector"], { containers: obj.spec.template.spec.containers, selected: selectedContainers, onChange: handleContainerSelectionChange }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: "subpath-help" }, "Select which containers to mount volume into."))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ButtonBar"], { errorMessage: error, inProgress: inProgress },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ActionGroup"], { className: "pf-c-form" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "submit", variant: "primary", id: "save-changes" }, "Save"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", variant: "secondary", onClick: _utils__WEBPACK_IMPORTED_MODULE_6__["history"].goBack }, "Cancel"))))));
};
const AttachStorage_ = ({ kindObj, kindsInFlight, match: { params } }) => {
    if (!kindObj && kindsInFlight) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LoadingBox"], null);
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AttachStorageForm, { namespace: params.ns, resourceName: params.name, kindObj: kindObj });
};
const AttachStorage = Object(_kinds__WEBPACK_IMPORTED_MODULE_4__["connectToPlural"])(AttachStorage_);


/***/ })

}]);
//# sourceMappingURL=attach-storage-4f4cccc89db2eb7c8f8d.js.map