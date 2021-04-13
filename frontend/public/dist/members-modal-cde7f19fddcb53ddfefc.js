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
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









const radioItems = (t) => [
    {
        title: t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_RADIOBUTTON_1'),
        value: 'user'
    },
    {
        title: t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_RADIOBUTTON_2'),
        value: 'group'
    },
];
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
const InviteMemberModal = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])((props) => {
    const [type, setType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('user');
    const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('admin');
    const [errorMsg, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [selectedMember, selectMember] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [inProgress, setProgress] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        clearSelection();
    }, [type]);
    const clearSelection = () => {
        selectMember('');
    };
    const submit = (e) => {
        e.preventDefault();
        // Append to an existing array, but handle the special case when the array is null.
        setProgress(true);
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_6__["coFetchJSON"])(`/api/multi-hypercloud/namespaces/${props.namespace}/clustermanagers/${props.clusterName}/member_invitation/${type}/${selectedMember}?userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_7__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_7__["getUserGroup"])()}&remoteRole=${role}`, 'POST')
            .then((res) => {
            setProgress(false);
            props.close();
        })
            .catch((err) => {
            clearSelection();
            setProgress(false);
            setError(err);
        });
    };
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: 'form', className: 'modal-content ' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_TITLE_1')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], { unsetOverflow: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_3__["Section"], { id: 'user' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'hc-invite-modal__input-members' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { id: 'type', currentValue: type, items: radioItems.bind(null, t)(), onChange: ({ currentTarget }) => { setType(currentTarget.value); clearSelection(); }, inline: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'hc-invite-modal__members' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextInput"], { type: "text", name: "selected-member", value: selectedMember, onChange: selectMember })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, type === 'user' ? t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_SUBMESSAGE_1').split('\n').map(line => {
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                            line,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)));
                    }) : t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_SUBMESSAGE_2').split('\n').map(line => {
                        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                            line,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)));
                    })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_3__["Section"], { label: t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_LABEL_1'), id: 'role', isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { id: 'role', currentValue: role, items: roleItems.bind(null, t)(), onChange: ({ currentTarget }) => setRole(currentTarget.value) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: errorMsg, inProgress: inProgress, submitText: t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_BUTTON_3'), cancelText: t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_BUTTON_2'), cancel: props.cancel })));
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
        label && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=members-modal-cde7f19fddcb53ddfefc.js.map