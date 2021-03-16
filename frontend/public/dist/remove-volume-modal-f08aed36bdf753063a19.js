(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remove-volume-modal"],{

/***/ "./public/components/modals/remove-volume-modal.tsx":
/*!**********************************************************!*\
  !*** ./public/components/modals/remove-volume-modal.tsx ***!
  \**********************************************************/
/*! exports provided: RemoveVolumeModal, removeVolumeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveVolumeModal", function() { return RemoveVolumeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeVolumeModal", function() { return removeVolumeModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _module_k8s___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s/ */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");





const RemoveVolumeModal = (props) => {
    const [inProgress, setInProgress] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const getRemoveVolumePatch = (resource, rowVolumeData) => {
        const containers = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.template.spec.containers', []);
        const patches = [];
        let allowRemoveVolume = true;
        containers.forEach((container, i) => {
            const mounts = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](container, 'volumeMounts', []);
            mounts.forEach((mount, j) => {
                if (mount.name !== rowVolumeData.name) {
                    return;
                }
                if (mount.mountPath === rowVolumeData.mountPath &&
                    container.name === rowVolumeData.container) {
                    patches.push({
                        op: 'remove',
                        path: `/spec/template/spec/containers/${i}/volumeMounts/${j}`,
                    });
                }
                else {
                    allowRemoveVolume = false;
                }
            });
        });
        // if the mountCount is greater than zero, then the volume is still being used at a different mount point or in a different container
        // Either way, we cannot give the cmd to remove it
        if (allowRemoveVolume) {
            const volumes = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.template.spec.volumes', []);
            const volumeIndex = volumes.findIndex((v) => v.name === rowVolumeData.name);
            if (volumeIndex > -1) {
                patches.push({ op: 'remove', path: `/spec/template/spec/volumes/${volumeIndex}` });
            }
        }
        return patches;
    };
    const submit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setInProgress(true);
        const { kind, resource, volume } = props;
        Object(_module_k8s___WEBPACK_IMPORTED_MODULE_3__["k8sPatch"])(kind, resource, getRemoveVolumePatch(resource, volume))
            .then(() => {
            setInProgress(false);
            props.close();
        })
            .catch(({ message: errMessage }) => {
            setErrorMessage(errMessage);
            setInProgress(false);
        });
    };
    const { kind, resource, volume } = props;
    const type = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](Object(_module_k8s___WEBPACK_IMPORTED_MODULE_3__["getVolumeType"])(volume.volumeDetail), 'id', '');
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Remove Volume?"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], { className: "modal-body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                "Are you sure you want to remove volume",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", { className: "co-break-word" }, volume.name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    ' ',
                    "from ",
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, kind.label),
                    ": ",
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, resource.metadata.name),
                    "?")),
            type && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "control-label" },
                    "Note: This will not remove the underlying ",
                    type,
                    ".")))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: inProgress, submitDanger: true, submitText: "Remove Volume", cancel: props.cancel })));
};
const removeVolumeModal = Object(_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(RemoveVolumeModal);


/***/ })

}]);
//# sourceMappingURL=remove-volume-modal-f08aed36bdf753063a19.js.map