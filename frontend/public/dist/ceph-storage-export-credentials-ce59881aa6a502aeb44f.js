(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ceph-storage-export-credentials"],{

/***/ "./packages/ceph-storage-plugin/src/components/converged-credentials/credentials.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/ceph-storage-plugin/src/components/converged-credentials/credentials.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./packages/ceph-storage-plugin/src/constants/index.ts");






const createJSONFile = (data) => `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
const ExportCredentials = (props) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const [payload, setPayload] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Promise.all([
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["SecretModel"], 'rook-ceph-mon', _constants__WEBPACK_IMPORTED_MODULE_5__["CEPH_STORAGE_NAMESPACE"]),
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ConfigMapModel"], 'rook-ceph-mon-endpoints', _constants__WEBPACK_IMPORTED_MODULE_5__["CEPH_STORAGE_NAMESPACE"]),
        ])
            .then((data) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const fsid = js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].decode((_b = (_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.fsid);
            const adminSecret = js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].decode((_d = (_c = data === null || data === void 0 ? void 0 : data[0]) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d['admin-secret']);
            const monIP = (_g = (_f = (_e = data === null || data === void 0 ? void 0 : data[1]) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.data.split(',')) === null || _g === void 0 ? void 0 : _g[0];
            setPayload(createJSONFile({
                admin: adminSecret,
                monData: monIP,
                // Todo(bipuladh): Change this when OCS supports multiple NS's
                clusterName: _constants__WEBPACK_IMPORTED_MODULE_5__["CEPH_STORAGE_NAMESPACE"],
                fsid,
            }));
            ref.current.click();
            props.close();
        })
            .catch((err) => {
            // eslint-disable-next-line no-console
            console.error('Error exporting credentials', err);
            props.close();
        });
        // No need to run the effect multiple times
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { id: "downloadAnchorElem", href: payload, download: "credentials.json", ref: ref, target: "_blank", rel: "noopener noreferrer" }, "Download"));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(ExportCredentials));


/***/ })

}]);
//# sourceMappingURL=ceph-storage-export-credentials-ce59881aa6a502aeb44f.js.map