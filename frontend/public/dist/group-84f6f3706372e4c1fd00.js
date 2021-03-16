(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group"],{

/***/ "./public/components/group.tsx":
/*!*************************************!*\
  !*** ./public/components/group.tsx ***!
  \*************************************/
/*! exports provided: GroupList, GroupPage, GroupDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupList", function() { return GroupList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPage", function() { return GroupPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailsPage", function() { return GroupDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _RBAC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RBAC */ "./public/components/RBAC/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");










const addUsers = (kind, group) => ({
    label: 'Add Users',
    callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["addUsersModal"])({
        group,
    }),
    accessReview: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["asAccessReview"])(kind, group, 'patch'),
});
const removeUser = (group, user) => {
    return {
        label: 'Remove User',
        callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_7__["removeUserModal"])({
            group,
            user,
        }),
        accessReview: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["asAccessReview"])(_models__WEBPACK_IMPORTED_MODULE_4__["GroupModel"], group, 'patch'),
    };
};
const menuActions = [addUsers, ..._utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].factory.common];
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_2__('col-sm-4', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"].columnClass,
];
const GroupTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Users',
            sortField: 'users.length',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
GroupTableHeader.displayName = 'GroupTableHeader';
const GroupTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["GroupModel"]), name: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[1] }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["size"](obj.users)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceKebab"], { actions: menuActions, kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["GroupModel"]), resource: obj }))));
};
const GroupList = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Groups", Header: GroupTableHeader, Row: GroupTableRow, virtualize: true })));
const GroupPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({}, props, { title: "Groups", kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["GroupModel"]), ListComponent: GroupList, canCreate: true })));
const UserKebab = ({ group, user }) => {
    const options = [removeUser(group, user)];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["Kebab"], { options: options });
};
const UsersTable = ({ group, users }) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](users) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["EmptyBox"], { label: "Users" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, users.map((user) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: user },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceLink"], { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["UserModel"]), name: user })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "dropdown-kebab-pf pf-c-table__action" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UserKebab, { group: group, user: user }))))))));
};
const GroupDetails = ({ obj }) => {
    const users = obj.users ? [...obj.users].sort() : [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Group Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceSummary"], { resource: obj })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["SectionHeading"], { text: "Users" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UsersTable, { group: obj, users: users }))));
};
const RoleBindingsTab = ({ obj }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RBAC__WEBPACK_IMPORTED_MODULE_8__["RoleBindingsPage"], { showTitle: false, staticFilters: [{ 'role-binding-group': obj.metadata.name }] }));
const GroupDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["GroupModel"]), menuActions: menuActions, pages: [
        _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].details(GroupDetails),
        _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].editYaml(),
        _utils__WEBPACK_IMPORTED_MODULE_9__["navFactory"].roles(RoleBindingsTab),
    ] })));


/***/ })

}]);
//# sourceMappingURL=group-84f6f3706372e4c1fd00.js.map