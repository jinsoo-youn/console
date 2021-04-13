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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../events */ "./public/components/events.jsx");












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
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass];
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const owner = (_b = (_a = cluster.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.owner;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: cluster.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: kind, name: cluster.metadata.name, displayName: cluster.fakeMetadata.fakename, title: cluster.metadata.uid, namespace: cluster.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1]) }, cluster.spec.provider),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[2]) }, cluster.spec.provider ? '생성' : '등록'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] }, ((_c = cluster.status) === null || _c === void 0 ? void 0 : _c.ready) ? '준비' : '생성 중'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] }, cluster.spec.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] }, `${(_e = (_d = cluster.status) === null || _d === void 0 ? void 0 : _d.masterRun) !== null && _e !== void 0 ? _e : 0} / ${(_g = (_f = cluster.spec) === null || _f === void 0 ? void 0 : _f.masterNum) !== null && _g !== void 0 ? _g : 0}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[6] }, `${(_j = (_h = cluster.status) === null || _h === void 0 ? void 0 : _h.workerRun) !== null && _j !== void 0 ? _j : 0} / ${(_l = (_k = cluster.spec) === null || _k === void 0 ? void 0 : _k.workerNum) !== null && _l !== void 0 ? _l : 0}`),
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_1'), obj: cl, path: "spec.provider" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_2'), obj: cl, path: "spec.provider" }, cl.spec.provider ? t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_TYPE_1') : t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_TYPE_2')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13'), obj: cl, path: "status.ready" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["Status"], { status: cl.status.ready ? t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_STATUS_1') : t('MULTI:MSG_MULTI_CLUSTERS_TABLECONTENTS_STATUS_2') })),
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
const { details, /* nodes, */ editYaml, events } = _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"];
const Clusters = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Clusters", Header: ClusterTableHeader.bind(null, t), Row: ClusterTableRow, virtualize: true }));
};
const ClustersPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_84'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_84') }), ListComponent: Clusters, kind: kind }, props));
};
const ClustersDetailsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { titleFunc: (obj) => obj.fakeMetadata.fakename, kind: kind, menuActions: menuActions, pages: [
            details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(ClusterDetails)),
            editYaml() /* nodes(ClusterNodes),  events(ResourceEventStream) */,
            /*{
              href: 'node',
              name: 'Node',
              component: pageProps => <MembersPage resource={pageProps.obj} title="Members" userHeading="Users" userGroupHeading="User Groups" />,
            },
            {
              href: 'namespace',
              name: 'Namespace',
              component: pageProps => <MembersPage resource={pageProps.obj} title="Members" userHeading="Users" userGroupHeading="User Groups" />,
            },
            {
              href: 'federation',
              name: 'Federation',
              component: pageProps => <MembersPage resource={pageProps.obj} title="Members" userHeading="Users" userGroupHeading="User Groups" />,
            },*/
            events(_events__WEBPACK_IMPORTED_MODULE_11__["ResourceEventStream"]),
            {
                href: 'access',
                name: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_1'),
                component: pageProps => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_members__WEBPACK_IMPORTED_MODULE_9__["MembersPage"], { clusterName: pageProps.obj.metadata.name, namespace: pageProps.obj.metadata.namespace, owner: pageProps.obj.metadata.annotations.owner, title: "Members" }),
            },
        ] })));
};


/***/ }),

/***/ "./public/components/hypercloud/members.tsx":
/*!**************************************************!*\
  !*** ./public/components/hypercloud/members.tsx ***!
  \**************************************************/
/*! exports provided: UsersTable, inviteMemberModal, modifyMemberModal, removeMemberModal, MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteMemberModal", function() { return inviteMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyMemberModal", function() { return modifyMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMemberModal", function() { return removeMemberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hypercloud_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hypercloud/auth */ "./public/hypercloud/auth.js");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../co-fetch */ "./public/co-fetch.js");











const ownerData = (owner, t) => [
    {
        cells: [`${owner.MemberName} (${t('MULTI:MSG_MULTI_CLUSTERS_MAILFORM_7')})`, owner.MemberId, 'admin'],
        obj: owner
    }
];
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),];
const MemberTableRows = (members) => {
    const data = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](members, (member) => {
        data.push({
            cells: [member.Attribute === 'user' ? member.MemberName : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["UsersIcon"], { className: 'hc-member__group-icon' }),
                    member.MemberName), member.MemberId, member.Role],
            obj: member
        });
    });
    return data;
};
const MemberTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_TABLEHEADER_2'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[0] },
            data: 'MemberName'
        },
        {
            title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_TABLEHEADER_1'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[1] },
            data: 'MemberId'
        },
        {
            title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_TABLEHEADER_3'),
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[2] },
            data: 'Role'
        },
    ];
};
MemberTableHeader.displayName = 'UserTableHeader';
const UsersTable = (props) => {
    const { isOwner, owner, members, heading, searchType, searchKey } = props;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    const ownerRow = owner ? ownerData.bind(null, owner, t)() : [];
    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [sortBy, setSortBy] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({ index: 0, sortField: 'MemberName', direction: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["SortByDirection"].asc });
    const [filteredRows, setFilteredRows] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const sortRows = ({ sortField, direction }, rows) => {
        const sortedRows = rows.sort((a, b) => {
            const compA = typeof a.obj[sortField] === 'string' ? a.obj[sortField].toLowerCase() : a.obj[sortField], compB = typeof b.obj[sortField] === 'string' ? b.obj[sortField].toLowerCase() : b.obj[sortField];
            return compA < compB ? -1 : compA > compB ? 1 : 0;
        });
        setRows(direction === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["SortByDirection"].asc ? lodash__WEBPACK_IMPORTED_MODULE_0__["concat"](ownerRow, sortedRows) : lodash__WEBPACK_IMPORTED_MODULE_0__["concat"](ownerRow, sortedRows.reverse()));
    };
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        sortRows(sortBy, MemberTableRows(members));
    }, [members]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        const filteredResult = rows.filter(row => fuzzysearch__WEBPACK_IMPORTED_MODULE_3__(lodash__WEBPACK_IMPORTED_MODULE_0__["toLower"](searchKey), lodash__WEBPACK_IMPORTED_MODULE_0__["toLower"](row.obj[searchType])));
        setFilteredRows(filteredResult);
    }, [rows, searchType, searchKey]);
    const onSort = (_event, index, direction, extraData) => {
        const sortField = extraData.column.data;
        sortRows({ sortField, direction }, rows.slice(1));
        setSortBy({
            index,
            sortField,
            direction
        });
    };
    const actionResolver = (t, rowData, { rowIndex }) => {
        if (rowData.obj.Status === 'owner') {
            return null;
        }
        return [
            {
                title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_ACTIONBUTTON_1'),
                onClick: (event, rowId, rowData, extra) => {
                    modifyMemberModal({ modalClassName: 'modal-lg', member: rowData.obj });
                }
            },
            {
                title: t('COMMON:MSG_DETAILS_TABACCESSPERMISSIONS_ACTIONBUTTON_2'),
                onClick: (event, rowId, rowData, extra) => {
                    removeMemberModal({ modalClassName: 'modal-lg', member: rowData.obj });
                }
            }
        ];
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hc-members__users" },
        heading && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: heading }),
        lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](filteredRows) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["EmptyBox"], { label: "Users" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["Table"], { "aria-label": "Users", sortBy: sortBy, onSort: onSort, cells: MemberTableHeader.bind(null, t)(), rows: filteredRows, actionResolver: isOwner && actionResolver.bind(null, t) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableHeader"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableBody"], null)))));
};
const inviteMemberModal = (props) => __webpack_require__.e(/*! import() | members-modal */ "members-modal").then(__webpack_require__.bind(null, /*! ./modals/invite-member-modal */ "./public/components/hypercloud/modals/invite-member-modal.tsx")).then((m) => m.inviteMemberModal(props));
const modifyMemberModal = (props) => __webpack_require__.e(/*! import() | modify-member-modal */ "modify-member-modal").then(__webpack_require__.bind(null, /*! ./modals/modify-member-modal */ "./public/components/hypercloud/modals/modify-member-modal.tsx")).then((m) => m.modifyMemberModal(props));
const removeMemberModal = (props) => __webpack_require__.e(/*! import() | remove-member-modal */ "remove-member-modal").then(__webpack_require__.bind(null, /*! ./modals/remove-member-modal */ "./public/components/hypercloud/modals/remove-member-modal.tsx")).then((m) => m.removeMemberModal(props));
const MembersPage = (props) => {
    const defaultOwnerData = {
        Cluster: props.clusterName,
        MemberId: props.owner,
        MemberName: "",
        Attribute: "user",
        Role: "admin",
        Status: "owner"
    };
    const [owner, setOwner] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](defaultOwnerData);
    const [members, setMembers] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [searchType, setSearchType] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('MemberName');
    const [searchKey, setSearchKey] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('');
    const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
    const onToggle = (open) => setOpen(open);
    const onSelect = event => {
        const selectedName = event.currentTarget.id;
        setSearchType(selectedName);
        setSearchKey('');
        setOpen(!isOpen);
    };
    const handleTextInputChange = value => {
        setSearchKey(value);
    };
    const dropdownItems = (t) => [
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], { key: "name", id: "MemberName", component: "button" }, t('Name')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], { key: "email", id: "MemberId", component: "button" }, t('Email')),
    ];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_10__["coFetchJSON"])(`/api/multi-hypercloud/namespaces/${props.namespace}/clustermanagers/${props.clusterName}/member?userId=${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_9__["getId"])()}${Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_9__["getUserGroup"])()}`, 'GET')
            .then((res) => {
            let idx = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](res, (mem) => mem.Status === "owner");
            idx >= 0 && setOwner(res[idx]);
            res.splice(idx, 1);
            setMembers(res);
        })
            .catch((err) => {
            console.log("Fail to get member list. " + err);
        });
    }, []);
    const isOwner = props.owner === Object(_hypercloud_auth__WEBPACK_IMPORTED_MODULE_9__["getId"])();
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'hc-members__header' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { onSelect: onSelect, toggle: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["DropdownToggle"], { id: "toggle-id", onToggle: onToggle, iconComponent: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["CaretDownIcon"] }, searchType === 'MemberId' ? t('Email') : t('Name')), isOpen: isOpen, dropdownItems: dropdownItems.bind(null, t)() }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { className: 'hc-members__search', value: searchKey, onChange: handleTextInputChange, placeholder: searchType === 'MemberId' ? t('search by email') : t('search by name') }),
            isOwner &&
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-primary-action" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "primary", id: "yaml-create", onClick: () => inviteMemberModal({ clusterName: props.clusterName, modalClassName: 'modal-lg', existMembers: members }) }, t('MULTI:MSG_MULTI_CLUSTERS_INVITEPEOPLEPOPUP_BUTTON_1')))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "hc-members__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](UsersTable, { clusterName: props.clusterName, isOwner: isOwner, owner: owner, members: members, searchType: searchType, searchKey: searchKey }))));
};


/***/ })

}]);
//# sourceMappingURL=cluster-1de2ae25463cf39db113.js.map