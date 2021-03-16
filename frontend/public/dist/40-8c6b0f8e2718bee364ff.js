(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./public/components/hypercloud/notary.tsx":
/*!*************************************************!*\
  !*** ./public/components/hypercloud/notary.tsx ***!
  \*************************************************/
/*! exports provided: NotaryDetailsList, NotaryDetails, NotariesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaryDetailsList", function() { return NotaryDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaryDetails", function() { return NotaryDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotariesDetailsPage", function() { return NotariesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");






const NotaryDetailsList = ({ ds }) => {
    var _a;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["DetailsItem"], { label: "Server URL", obj: ds, path: "status.notaryURL" }, ds.status.notaryURL),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABNOTARY_2'), obj: ds, path: "spec.authConfig" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                "realm: ",
                ds.spec.authConfig.realm),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                "issuer: ",
                ds.spec.authConfig.issuer),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                "service: ",
                ds.spec.authConfig.service)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["DetailsItem"], { label: t('SINGLE:MSG_IMAGEREGISTRIES_CREATEFORM_DIV2_13'), obj: ds, path: "spec.serviceType" }, ds.spec.serviceType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["DetailsItem"], { label: t('COMMON:MSG_LNB_MENU_52'), obj: ds, path: "spec.persistentVolumeClaim" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])({ kind: 'PersistentVolumeClaim', apiVersion: 'v1' }), name: ((_a = ds.spec.persistentVolumeClaim.exist) === null || _a === void 0 ? void 0 : _a.pvcName) ? ds.spec.persistentVolumeClaim.exist.pvcName : `hpcd-notary-db-${ds.metadata.name}` }))));
};
const NotaryDetails = props => {
    var _a;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
    const obj = props.resources.obj.data;
    return (Object.keys(obj).length !== 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: `${t('COMMON:MSG_DETAILS_TABNOTARY_1')} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NotaryDetailsList, { ds: obj })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["SectionHeading"], { text: `${t('COMMON:MSG_DETAILS_TABNOTARY_5')}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_conditions__WEBPACK_IMPORTED_MODULE_3__["Conditions"], { conditions: (_a = obj.status) === null || _a === void 0 ? void 0 : _a.conditions, showMessage: false, showReason: false }))));
};
const NotariesDetailsPage = props => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: [
        {
            kind: props.kind,
            kindObj: props.kindObj,
            name: props.name,
            namespace: props.namespace,
            isList: false,
            prop: 'obj',
        },
    ] },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NotaryDetails, Object.assign({}, props))));


/***/ })

}]);
//# sourceMappingURL=40-8c6b0f8e2718bee364ff.js.map