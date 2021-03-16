(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cluster"],{

/***/ "./public/components/hypercloud/cluster.tsx":
/*!**************************************************!*\
  !*** ./public/components/hypercloud/cluster.tsx ***!
  \**************************************************/
/*! exports provided: menuActions, ClusterDetailsList, Clusters, ClustersPage, ClustersDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterDetailsList", function() { return ClusterDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusters", function() { return Clusters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClustersPage", function() { return ClustersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClustersDetailsPage", function() { return ClustersDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals */ "./public/components/hypercloud/modals/index.ts");
/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members */ "./public/components/hypercloud/members.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");











const ModifyClusterNodes = (kind, obj) => ({
    label: 'Edit Nodes',
    callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_8__["configureClusterNodesModal"])({
        resourceKind: kind,
        resource: obj,
    }),
    accessReview: {
        group: kind.apiGroup,
        resource: kind.plural,
        name: obj.metadata.name,
        verb: 'patch',
    },
});
const menuActions = [ModifyClusterNodes, ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["ClusterManagerModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_7__["ClusterManagerModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
const ClusterTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_58'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_59'),
            sortField: 'spec.provider',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_60'),
            sortField: 'spec.provider',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_61'),
            sortField: 'status.ready',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_62'),
            sortField: 'spec.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: 'Master Node',
            sortField: 'spec.masterNum',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: 'Worker Node',
            sortField: 'spec.workerNum',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[6] },
        },
        {
            title: 'Owner',
            // sortField: 'status.owner',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[7] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[8] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[9] },
        },
    ];
};
ClusterTableHeader.displayName = 'ClusterTableHeader';
const ClusterTableRow = ({ obj: cluster, index, key, style }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const owner = Object.keys((_a = cluster.status) === null || _a === void 0 ? void 0 : _a.owner)[0];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: cluster.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: cluster.metadata.name, displayName: cluster.fakeMetadata.fakename, title: cluster.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1]) }, cluster.spec.provider),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[2]) }, cluster.spec.provider ? "생성" : "등록"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, ((_b = cluster.status) === null || _b === void 0 ? void 0 : _b.ready) ? "준비" : "생성 중"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] }, cluster.spec.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] }, `${(_d = (_c = cluster.status) === null || _c === void 0 ? void 0 : _c.masterRun) !== null && _d !== void 0 ? _d : 0} / ${(_f = (_e = cluster.spec) === null || _e === void 0 ? void 0 : _e.masterNum) !== null && _f !== void 0 ? _f : 0}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[6] }, `${(_h = (_g = cluster.status) === null || _g === void 0 ? void 0 : _g.workerRun) !== null && _h !== void 0 ? _h : 0} / ${(_k = (_j = cluster.spec) === null || _j === void 0 ? void 0 : _j.workerNum) !== null && _k !== void 0 ? _k : 0}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[7] }, owner),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[8] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: cluster.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[9] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: kind, resource: cluster }))));
};
const ClusterDetailsList = ({ cl }) => {
    var _a, _b, _c, _d, _e, _f;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t("MSG_DETAILS_TABDETAILS_1"), obj: cl, path: "spec.provider" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_2'), obj: cl, path: "spec.provider" }, cl.spec.provider ? t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_TYPE_1') : t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_TYPE_2')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13'), obj: cl, path: "status.ready" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: cl.status.ready ? t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_STATUS_1') : t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_STATUS_2') })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Provider", obj: cl, path: "spec.provider" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Version", obj: cl, path: "spec.version" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Region", obj: cl, path: "spec.region" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Master Node", obj: cl, path: "spec.masterNum" }, `${(_b = (_a = cl.status) === null || _a === void 0 ? void 0 : _a.masterRun) !== null && _b !== void 0 ? _b : 0} / ${(_c = cl.spec.masterNum) !== null && _c !== void 0 ? _c : 0}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Master Node Type", obj: cl, path: "spec.masterType" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Worker Node", obj: cl, path: "spec.workerNum" }, `${(_e = (_d = cl.status) === null || _d === void 0 ? void 0 : _d.workerRun) !== null && _e !== void 0 ? _e : 0} / ${(_f = cl.spec.workerNum) !== null && _f !== void 0 ? _f : 0}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "Worker Node Type", obj: cl, path: "spec.workerType" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: "SSH Key", obj: cl, path: "spec.sshKey" })));
};
const KeyValuePrint = ({ obj, key }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, `${key} / ${obj[key]}`);
};
const ClusterDetails = ({ obj: cluster }) => {
    const owner = cluster.status.owner && Object.keys(cluster.status.owner)[0];
    const members = cluster.status.members && Object.keys(cluster.status.members);
    const groups = cluster.status.groups && Object.keys(cluster.status.groups);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_10__["ResourceLabel"])(cluster, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: cluster, customPathName: 'fakeMetadata.fakename', showOwner: false }),
                    cluster.status.owner && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_44'), obj: cluster, children: KeyValuePrint({ obj: cluster.status.owner, key: owner }) }),
                    cluster.status.members && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_39'), obj: cluster, children: members.map(member => KeyValuePrint({ obj: cluster.status.members, key: member })) }),
                    cluster.status.groups && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_40'), obj: cluster, children: groups.map(group => KeyValuePrint({ obj: cluster.status.groups, key: group })) })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClusterDetailsList, { cl: cluster }))))));
};
const { details, /* nodes, */ editYaml /*, events */ } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const Clusters = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Clusters", Header: ClusterTableHeader.bind(null, t), Row: ClusterTableRow, virtualize: true }));
};
const ClustersPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_84'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_84') }), ListComponent: Clusters, kind: kind }, props));
};
const ClustersDetailsPage = props => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { titleFunc: (obj) => obj.fakeMetadata.fakename, kind: kind, menuActions: menuActions, pages: [
            details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(ClusterDetails)),
            editYaml() /* nodes(ClusterNodes),  events(ResourceEventStream) */,
            {
                href: 'members',
                name: 'Members',
                component: pageProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_members__WEBPACK_IMPORTED_MODULE_9__["MembersPage"], { resource: pageProps.obj, title: "Members", userHeading: "Users", userGroupHeading: "User Groups" }),
            },
        ] })));
};


/***/ }),

/***/ "./public/components/hypercloud/members.tsx":
/*!**************************************************!*\
  !*** ./public/components/hypercloud/members.tsx ***!
  \**************************************************/
/*! exports provided: UsersTable, UserGroupsTable, inviteMemberModal, removeMemberModal, MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsTable", function() { return UserGroupsTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteMemberModal", function() { return inviteMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMemberModal", function() { return removeMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hypercloud/auth */ "./public/hypercloud/auth.js");







const getRowUserData = (users) => {
    const data = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](users, (role, name) => {
        data.push([name, role]);
    });
    return data;
};
const UsersTableHeader = [
    {
        title: 'Name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
    },
    {
        title: 'Role',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
    },
];
const getRowUserGroupData = (userGroups) => {
    const data = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](userGroups, (role, name) => {
        data.push([name, role]);
    });
    return data;
};
const UserGroupsTableHeader = [
    {
        title: 'Name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
    },
    {
        title: 'Role',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["sortable"]],
    },
];
const UsersTable = (props) => {
    const { clusterName, isOwner, users, heading } = props;
    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](getRowUserData(users));
    const [sortBy, setSortBy] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({ index: 0, direction: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["SortByDirection"].asc });
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        setRows(getRowUserData(users));
    }, [users]);
    const onSort = (_event, index, direction) => {
        const sortedRows = rows.sort((a, b) => {
            const compA = typeof a[index] === 'string' ? a[index].toLowerCase() : a[index], compB = typeof b[index] === 'string' ? b[index].toLowerCase() : b[index];
            return compA < compB ? -1 : compA > compB ? 1 : 0;
        });
        setSortBy({
            index,
            direction
        });
        setRows(direction === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["SortByDirection"].asc ? sortedRows : sortedRows.reverse());
    };
    const userActions = [
        {
            title: 'Update User',
            onClick: (event, rowId, rowData, extra) => {
                inviteMemberModal({ clusterName, modalClassName: 'modal-lg', type: 'User', member: rowData[0], role: rowData[1], requestType: 'update' });
            }
        },
        {
            title: 'Delete User',
            onClick: (event, rowId, rowData, extra) => {
                console.log('clicked on Some action, on row: ', rowId);
                removeMemberModal({ clusterName, modalClassName: 'modal-lg', type: 'User', member: rowData[0] });
            }
        }
    ];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hc-members__users" },
        heading && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: heading }),
        lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](rows) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["EmptyBox"], { label: "Users" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["Table"], { "aria-label": "Users", sortBy: sortBy, onSort: onSort, cells: UsersTableHeader, rows: rows, actions: isOwner && userActions },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableHeader"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableBody"], null)))));
};
const UserGroupsTable = (props) => {
    const { clusterName, isOwner, groups, heading } = props;
    const data = getRowUserGroupData(groups);
    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](data);
    const [sortBy, setSortBy] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({ index: 0, direction: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["SortByDirection"].asc });
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        setRows(getRowUserGroupData(groups));
    }, [groups]);
    const onSort = (_event, index, direction) => {
        const sortedRows = rows.sort((a, b) => {
            const compA = typeof a[index] === 'string' ? a[index].toLowerCase() : a[index], compB = typeof b[index] === 'string' ? b[index].toLowerCase() : b[index];
            return compA < compB ? -1 : compA > compB ? 1 : 0;
        });
        setSortBy({
            index,
            direction
        });
        setRows(direction === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["SortByDirection"].asc ? sortedRows : sortedRows.reverse());
    };
    const userGroupActions = [
        {
            title: 'Update User Group',
            onClick: (event, rowId, rowData, extra) => {
                inviteMemberModal({ clusterName, modalClassName: 'modal-lg', type: 'Group', member: rowData[0], role: rowData[1], requestType: 'update' });
            }
        },
        {
            title: 'Delete User Group',
            onClick: (event, rowId, rowData, extra) => {
                removeMemberModal({ clusterName, modalClassName: 'modal-lg', type: 'Group', member: rowData[0] });
            }
        }
    ];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hc-members__user-groups" },
        heading && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: heading }),
        lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](data) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["EmptyBox"], { label: "UserGroups" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["Table"], { "aria-label": "UserGroups", sortBy: sortBy, onSort: onSort, cells: UserGroupsTableHeader, rows: rows, actions: isOwner && userGroupActions },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableHeader"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableBody"], null)))));
};
const inviteMemberModal = (props) => __webpack_require__.e(/*! import() | members-modal */ "members-modal").then(__webpack_require__.bind(null, /*! ./modals/invite-member-modal */ "./public/components/hypercloud/modals/invite-member-modal.tsx")).then((m) => m.inviteMemberModal(props));
const removeMemberModal = (props) => __webpack_require__.e(/*! import() | remove-member-modal */ "remove-member-modal").then(__webpack_require__.bind(null, /*! ./modals/remove-member-modal */ "./public/components/hypercloud/modals/remove-member-modal.tsx")).then((m) => m.removeMemberModal(props));
const MembersPage = (props) => {
    const isOwner = Object.keys(props.resource.status.owner)[0] === Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_6__["getId"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["PageHeading"], { title: props.title, className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-m-nav-title--row') }, isOwner &&
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-primary-action" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "primary", id: "yaml-create", onClick: () => inviteMemberModal({ clusterName: props.resource.metadata.name, modalClassName: 'modal-lg' }) }, "Invite Member"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hc-members__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](UsersTable, { clusterName: props.resource.metadata.name, isOwner: isOwner, users: props.resource.status.members, heading: props.userHeading }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](UserGroupsTable, { clusterName: props.resource.metadata.name, isOwner: isOwner, groups: props.resource.status.groups, heading: props.userGroupHeading }))));
};


/***/ })

}]);
//# sourceMappingURL=cluster-8b3489471898488fc97f.js.map