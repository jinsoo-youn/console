(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modify-member-modal"],{

/***/ "./public/components/hypercloud/modals/modify-member-modal.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/hypercloud/modals/modify-member-modal.tsx ***!
  \*********************************************************************/
/*! exports provided: ModifyMemberModal, modifyMemberModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyMemberModal", function() { return ModifyMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyMemberModal", function() { return modifyMemberModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








const roleItems = (t) => [
    {
        title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_RADIOBUTTON_1'),
        value: 'admin',
    },
    {
        title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_RADIOBUTTON_2'),
        value: 'developer',
    },
    {
        title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_RADIOBUTTON_3'),
        value: 'guest'
    },
];
const ModifyMemberModal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.member.Role);
    const [errorMsg, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const submit = (e) => {
        e.preventDefault();
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_5__["coFetchJSON"])(`/api/multi-hypercloud/namespaces/${props.member.Namespace}/clustermanagers/${props.member.Cluster}/update_role/${props.member.Attribute}/${props.member.MemberId}?userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__["getUserGroup"])()}&remoteRole=${role}`, 'PUT')
            .then((res) => {
            props.close();
        })
            .catch((err) => {
            setError(err);
        });
    };
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, t('MULTI:MSG_MULTI_CLUSTERS_CHANGEPERMISSIONSPOPUP_TITLE_1')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], { className: "modal-body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_3__["Section"], { id: 'role' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { id: 'role', currentValue: role, items: roleItems.bind(null, t)(), onChange: ({ currentTarget }) => setRole(currentTarget.value) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: errorMsg, inProgress: props.inProgress, submitText: t('COMMON:MSG_COMMON_BUTTON_COMMIT_3'), cancelText: t('COMMON:MSG_COMMON_BUTTON_COMMIT_2'), cancel: props.cancel })));
});
const modifyMemberModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(ModifyMemberModal);


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
        label && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=modify-member-modal-850ecf9204c41ced5598.js.map