(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-modal"],{

/***/ "./public/components/hypercloud/modals/invite-member-modal.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/hypercloud/modals/invite-member-modal.tsx ***!
  \*********************************************************************/
/*! exports provided: InviteMemberModal, inviteMemberModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteMemberModal", function() { return InviteMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteMemberModal", function() { return inviteMemberModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hypercloud/auth */ "./public/hypercloud/auth.js");







const radioItems = (disabled) => [
    {
        title: 'User',
        value: 'User',
        disabled
    },
    {
        title: 'User Group',
        value: 'Group',
        disabled
    },
];
const dropdownItems = {
    admin: 'Admin',
    developer: 'Developer',
    guest: 'Guest',
};
const InviteMemberModal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    var _a, _b, _c;
    const [member, setMember] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]((_a = props.member) !== null && _a !== void 0 ? _a : '');
    const [type, setType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]((_b = props.type) !== null && _b !== void 0 ? _b : 'User');
    const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]((_c = props.role) !== null && _c !== void 0 ? _c : 'guest');
    const [errorMsg, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const isUpdate = props.requestType === 'update';
    const onChangeText = (e) => {
        setMember(e.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        // Append to an existing array, but handle the special case when the array is null.
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_5__["coFetchJSON"])(`/api/multi-hypercloud/cluster/member?userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__["getId"])()}&cluster=${props.clusterName}&target${type}=${member}&remoteRole=${role}`, isUpdate ? 'PUT' : 'POST')
            .then((res) => {
            props.close();
        })
            .catch((err) => {
            setError(`Fail to ${isUpdate ? 'update' : 'invite'} member. ` + err);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null,
            isUpdate ? 'Update' : 'Invite',
            " Member"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], { unsetOverflow: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_3__["Section"], { label: "User / UserGroup", id: "user", isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "hc-invite-modal__input-members" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { id: "type", currentValue: type, items: radioItems(isUpdate), onChange: ({ currentTarget }) => setType(currentTarget.value), inline: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", id: "user", name: "members", placeholder: "Insert User / User Group Name", value: member, onChange: onChangeText, required: true, disabled: isUpdate }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_3__["Section"], { label: "Role", id: "role", isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], { className: "btn-group", id: "role", name: "role", items: dropdownItems, selectedKey: role, onChange: (selection) => setRole(selection) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: errorMsg, inProgress: props.inProgress, submitText: isUpdate ? "Update" : "Invite", cancel: props.cancel })));
});
const inviteMemberModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(InviteMemberModal);


/***/ }),

/***/ "./public/components/hypercloud/utils/section.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/utils/section.tsx ***!
  \********************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Node = ({ className, children, description }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, children),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, description)));
const CombineNodes = (id, label, description, children, isRequired) => {
    // children node 개수에 따라 가로 분할 class 적용
    let isArray = Array.isArray(children);
    let className = isArray ? `col-md-${12 / children.length}` : 'col-md-12';
    return isArray ? children.map(cur => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: cur, description: description })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: children, description: description });
};
const Section = ({ id, label, description, children, isRequired = false }) => {
    let result = CombineNodes(id, label, description, children, isRequired);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=members-modal-6689675628dcf8c0cd4f.js.map