(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-users-modal"],{

/***/ "./public/components/modals/add-users-modal.tsx":
/*!******************************************************!*\
  !*** ./public/components/modals/add-users-modal.tsx ***!
  \******************************************************/
/*! exports provided: AddUsersModal, addUsersModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersModal", function() { return AddUsersModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUsersModal", function() { return addUsersModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");






const AddUsersModal = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["withHandlePromise"])((props) => {
    const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](['']);
    const submit = (e) => {
        e.preventDefault();
        // Append to an existing array, but handle the special case when the array is null.
        const patch = props.group.users
            ? lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](values, (value) => ({ op: 'add', path: '/users/-', value }))
            : [{ op: 'add', path: '/users', value: values }];
        return props.handlePromise(Object(_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sPatch"])(_models__WEBPACK_IMPORTED_MODULE_2__["GroupModel"], props.group, patch)).then(props.close);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Add Users"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Add new users to group ",
                props.group.metadata.name,
                "."),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ListInput"], { label: "Users", required: true, initialValues: values, onChange: setValues })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { errorMessage: props.errorMessage, inProgress: props.inProgress, submitText: "Save", cancel: props.cancel })));
});
const addUsersModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(AddUsersModal);


/***/ })

}]);
//# sourceMappingURL=add-users-modal-73ce508e6bf78bebb1db.js.map