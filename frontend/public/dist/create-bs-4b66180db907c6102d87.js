(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-bs"],{

/***/ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs-page.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs-page.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_operator_lifecycle_manager_src_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/operator-lifecycle-manager/src/models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _create_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-bs */ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.tsx");
/* harmony import */ var _create_bs_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-bs.scss */ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.scss");
/* harmony import */ var _create_bs_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_create_bs_scss__WEBPACK_IMPORTED_MODULE_9__);










const CreateBackingStoreFormPage = ({ match }) => {
    const [showHelp, setShowHelp] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const [clusterServiceVersion, setClusterServiceVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const { ns, appName } = match.params;
    const onCancel = () => {
        _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_3__["history"].goBack();
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sGet"])(_console_operator_lifecycle_manager_src_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"], appName, ns)
            .then((clusterServiceVersionObj) => {
            setClusterServiceVersion(clusterServiceVersionObj);
        })
            .catch(() => setClusterServiceVersion(null));
    }, [appName, ns]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbs"], { breadcrumbs: [
                        {
                            name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](clusterServiceVersion, 'spec.displayName', 'Openshift Container Storage Operator'),
                            path: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["resourcePathFromModel"])(_console_operator_lifecycle_manager_src_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"], appName, ns),
                        },
                        { name: `Create ${_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"].label}`, path: match.url },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-bs-page-title" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], { size: "2xl", headingLevel: "h1", className: "nb-bs-page-title__main" }, "Create new Backing Store"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-bs-page-title__info" }, "Storage targets that are used to store chunks of data on MCG buckets."))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-bs-page" },
            showHelp && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, variant: "info", title: "What is a Backing Store?", action: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["AlertActionCloseButton"], { onClose: () => setShowHelp(false) }) },
                "A backing store represents a storage target to be used as the underlying storage layer in MCG buckets.",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                "Multiple types of backing stores are supported: AWS S3, S3 Compatible, Google Cloud Storage, Azure Blob, PVC.")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_create_bs__WEBPACK_IMPORTED_MODULE_8__["default"], { cancel: onCancel, isPage: true, namespace: ns, className: "nb-bs-page-form__short", csv: clusterServiceVersion }))));
};
/* harmony default export */ __webpack_exports__["default"] = (CreateBackingStoreFormPage);


/***/ })

}]);
//# sourceMappingURL=create-bs-4b66180db907c6102d87.js.map