(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "./public/components/user.tsx":
/*!************************************!*\
  !*** ./public/components/user.tsx ***!
  \************************************/
/*! exports provided: UserList, UserPage, UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _actions_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _RBAC__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RBAC */ "./public/components/RBAC/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};













const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-sm-4', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_12__["Kebab"].columnClass,
];
const UserTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Full Name',
            sortField: 'fullName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Identities',
            sortField: 'identities[0]',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
UserTableHeader.displayName = 'UserTableHeader';
const UserKebab_ = ({ user, startImpersonate, }) => {
    const impersonateAction = (kind, obj) => ({
        label: `Impersonate User "${obj.metadata.name}"`,
        callback: () => startImpersonate('User', obj.metadata.name),
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_12__["ResourceKebab"], { actions: [impersonateAction, ..._utils__WEBPACK_IMPORTED_MODULE_12__["Kebab"].factory.common], kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["UserModel"]), resource: user }));
};
const UserKebab = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
    startImpersonate: _actions_ui__WEBPACK_IMPORTED_MODULE_7__["startImpersonate"],
})(UserKebab_);
const UserTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_12__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["UserModel"]), name: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[1] }, obj.fullName || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[2] }, lodash_es__WEBPACK_IMPORTED_MODULE_3__["map"](obj.identities, (identity) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: identity }, identity)))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UserKebab, { user: obj }))));
};
const EmptyMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_12__["MsgBox"], { title: "No Users Found" });
const oAuthResourcePath = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["OAuthModel"], 'cluster');
const noDataDetail = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Add identity providers (IDPs) to the OAuth configuration to allow others to log\u00A0in."),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: oAuthResourcePath },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "primary" }, "Add IDP")))));
const NoDataEmptyMsg = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_12__["MsgBox"], { title: "No Users Found", detail: noDataDetail });
const UserList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["Table"], Object.assign({}, props, { "aria-label": "Users", Header: UserTableHeader, Row: UserTableRow, EmptyMsg: EmptyMsg, NoDataEmptyMsg: NoDataEmptyMsg, virtualize: true })));
const UserPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["ListPage"], Object.assign({}, props, { title: "Users", helpText: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-help-text" }, "Users are automatically added the first time they log\u00A0in."), kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["UserModel"]), ListComponent: UserList, canCreate: false })));
const RoleBindingsTab = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RBAC__WEBPACK_IMPORTED_MODULE_11__["RoleBindingsPage"], { showTitle: false, staticFilters: [{ 'role-binding-user': obj.metadata.name }] }));
const UserDetails = ({ obj }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_12__["SectionHeading"], { text: "User Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_12__["ResourceSummary"], { resource: obj },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Full Name"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, obj.fullName || '-'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Identities"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, lodash_es__WEBPACK_IMPORTED_MODULE_3__["map"](obj.identities, (identity) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: identity }, identity)))))));
};
const UserDetailsPage_ = (_a) => {
    var { startImpersonate } = _a, props = __rest(_a, ["startImpersonate"]);
    const impersonateAction = (kind, obj) => ({
        label: `Impersonate User "${obj.metadata.name}"`,
        callback: () => startImpersonate('User', obj.metadata.name),
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["DetailsPage"], Object.assign({}, props, { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["UserModel"]), menuActions: [impersonateAction, ..._utils__WEBPACK_IMPORTED_MODULE_12__["Kebab"].factory.common], pages: [
            _utils__WEBPACK_IMPORTED_MODULE_12__["navFactory"].details(UserDetails),
            _utils__WEBPACK_IMPORTED_MODULE_12__["navFactory"].editYaml(),
            _utils__WEBPACK_IMPORTED_MODULE_12__["navFactory"].roles(RoleBindingsTab),
        ] })));
};
const UserDetailsPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
    startImpersonate: _actions_ui__WEBPACK_IMPORTED_MODULE_7__["startImpersonate"],
})(UserDetailsPage_);


/***/ })

}]);
//# sourceMappingURL=user-6d4e568c35366df11712.js.map