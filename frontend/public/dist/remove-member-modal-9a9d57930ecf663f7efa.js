(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remove-member-modal"],{

/***/ "./public/components/hypercloud/modals/remove-member-modal.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/hypercloud/modals/remove-member-modal.tsx ***!
  \*********************************************************************/
/*! exports provided: RemoveMemberModal, removeMemberModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveMemberModal", function() { return RemoveMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMemberModal", function() { return removeMemberModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");







const RemoveMemberModal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    const [errorMsg, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const submit = (e) => {
        e.preventDefault(); ///cluster/cho/remove_member/group/ck1-3?userId=kubernetes-admin&userGroup=hypercloud5
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_4__["coFetchJSON"])(`/api/multi-hypercloud/namespaces/${props.member.Namespace}/clustermanagers/${props.member.Cluster}/remove_member/${props.member.Attribute}/${props.member.MemberId}?userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_5__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_5__["getUserGroup"])()}`, 'POST')
            .then((res) => {
            props.close();
        })
            .catch((err) => {
            setError(err);
        });
    };
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            t('MULTI:MSG_MULTI_CLUSTERS_DELETEPEPLEPOPUP_TITLE_1')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], { className: "modal-body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, t('MULTI:MSG_MULTI_CLUSTERS_DELETEPEPLEPOPUP_MAINMESSAGE_1', { 0: props.member.MemberId.length > 0 ? `${props.member.MemberName}(${props.member.MemberId})` : props.member.MemberName, 1: props.member.Cluster }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: errorMsg, inProgress: props.inProgress, submitText: t('MULTI:MSG_MULTI_CLUSTERS_DELETEACCESSMEMBER_2'), cancelText: t('MULTI:MSG_MULTI_CLUSTERS_DELETEACCESSMEMBER_1'), cancel: props.cancel })));
});
const removeMemberModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(RemoveMemberModal);


/***/ })

}]);
//# sourceMappingURL=remove-member-modal-9a9d57930ecf663f7efa.js.map