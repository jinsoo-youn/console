(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remove-user-modal"],{

/***/ "./public/components/modals/remove-user-modal.tsx":
/*!********************************************************!*\
  !*** ./public/components/modals/remove-user-modal.tsx ***!
  \********************************************************/
/*! exports provided: RemoveUserModal, removeUserModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUserModal", function() { return RemoveUserModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserModal", function() { return removeUserModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");







const RemoveUserModal = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["withHandlePromise"])((props) => {
    const submit = (e) => {
        e.preventDefault();
        const value = lodash_es__WEBPACK_IMPORTED_MODULE_0__["filter"](props.group.users, (user) => user !== props.user);
        const patch = [{ op: 'replace', path: '/users', value }];
        return props.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_3__["GroupModel"], props.group, patch)).then(props.close);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Remove User from Group?"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], null,
            "Remove user ",
            props.user,
            " from group ",
            props.group.metadata.name,
            "?"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_5__["ModalSubmitFooter"], { errorMessage: props.errorMessage, inProgress: props.inProgress, submitText: "Remove", cancel: props.cancel, submitDanger: true })));
});
const removeUserModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_5__["createModalLauncher"])(RemoveUserModal);


/***/ })

}]);
//# sourceMappingURL=remove-user-modal-5a44aa2bd0bb057247fc.js.map