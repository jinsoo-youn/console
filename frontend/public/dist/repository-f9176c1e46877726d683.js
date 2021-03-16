(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["repository"],{

/***/ "./public/components/hypercloud/repository.tsx":
/*!*****************************************************!*\
  !*** ./public/components/hypercloud/repository.tsx ***!
  \*****************************************************/
/*! exports provided: menuActions, RepositoriesPage, RepositoriesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesPage", function() { return RepositoriesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesDetailsPage", function() { return RepositoriesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models_hypercloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/hypercloud */ "./public/models/hypercloud/index.ts");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags */ "./public/components/hypercloud/tags.tsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals */ "./public/components/hypercloud/modals/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common, _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.ModifyScanning];
const kind = _models_hypercloud__WEBPACK_IMPORTED_MODULE_5__["RepositoryModel"].kind;
const tableColumnClasses = [
    '',
    classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-xl'),
    _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass,
];
const RepositoryTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: obj.metadata.name, displayName: obj.spec.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: obj.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: obj }))));
};
const RepositoryTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_DETAILS_TABREPLICASETS_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_DETAILS_TABREPLICASETS_6'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[2] },
        },
    ];
};
RepositoryTableHeader.displayName = 'RepositoryTableHeader';
const RepositoriesList = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "Repositories", Header: RepositoryTableHeader.bind(null, t), Row: RepositoryTableRow, virtualize: true })));
};
const RepositoriesPage = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])();
    const { canCreate = true, namespace, isExtRegistry } = props;
    let registry;
    if (isExtRegistry) {
        registry = props.selector.matchLabels['ext-registry'];
    }
    else {
        registry = props.selector.matchLabels.registry;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-m-expanded", style: { padding: '30px 0 0 30px' } }, isExtRegistry ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "pf-c-dropdown__toggle pf-m-primary", style: { backgroundColor: '#0066cc', color: 'white', fontSize: '14px', width: '150px', height: '25px', display: 'flex', justifyContent: 'center' }, onClick: _modals__WEBPACK_IMPORTED_MODULE_7__["scanningModal"].bind(null, { kind: 'Repository', ns: namespace, showNs: false, labelSelector: { 'ext-registry': registry }, isExtRegistry }) }, t('COMMON:MSG_DETAILS_TABREPOSITORIES_2')) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "pf-c-dropdown__toggle pf-m-primary", style: { backgroundColor: '#0066cc', color: 'white', fontSize: '14px', width: '150px', height: '25px', display: 'flex', justifyContent: 'center' }, onClick: _modals__WEBPACK_IMPORTED_MODULE_7__["scanningModal"].bind(null, { kind: 'Repository', ns: namespace, showNs: false, labelSelector: { registry }, isExtRegistry }) }, t('COMMON:MSG_DETAILS_TABREPOSITORIES_2'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ canCreate: canCreate, kind: "Repository", ListComponent: RepositoriesList }, props))));
};
const RepositoryDetails = ({ obj: repository }) => {
    const [addedTags, setAddedTags] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(repository.spec.versions);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        getScans();
    }, []);
    const isExtRegistry = repository.metadata.labels.app === 'ext-registry' ? true : false;
    const getWorstScan = (scans, tag) => {
        const res = scans[tag];
        if (res) {
            if (res.hasOwnProperty('Critical')) {
                return 'Critical';
            }
            else if (res.hasOwnProperty('High')) {
                return 'High';
            }
            else if (res.hasOwnProperty('Medium')) {
                return 'Medium';
            }
            else if (res.hasOwnProperty('Low')) {
                return 'Low';
            }
            else if (res.hasOwnProperty('Negligible')) {
                return 'Negligible';
            }
            else if (res.hasOwnProperty('Unknown')) {
                return 'Unknown';
            }
        }
        return '';
    };
    const getScans = () => __awaiter(void 0, void 0, void 0, function* () {
        const model = Object.assign({}, _models_hypercloud__WEBPACK_IMPORTED_MODULE_5__["RepositoryModel"]);
        model.apiGroup = 'registry.' + model.apiGroup;
        if (isExtRegistry) {
            model.plural = 'ext-repositories';
        }
        const scans = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_8__["k8sGet"])(model, repository.metadata.name, repository.metadata.namespace, { path: 'imagescanresults' });
        setAddedTags(addedTags.map((addedTag) => {
            addedTag.severity = getWorstScan(scans, addedTag.version);
            return addedTag;
        }));
    });
    // const showSigner = repository.metadata.labels?.app === 'registry' ? true : false;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Registry Details" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: repository, showPodSelector: false, showNodeSelector: false, showAnnotations: false, showTolerations: false })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: "Tags" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tags__WEBPACK_IMPORTED_MODULE_6__["Tags"], { repository: repository.metadata.name, tags: addedTags, namespace: repository.metadata.namespace, registry: repository.spec.registry, isExtRegistry: isExtRegistry }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const RepositoriesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [
        details(RepositoryDetails),
        editYaml(),
    ] }));



/***/ }),

/***/ "./public/components/hypercloud/tags.tsx":
/*!***********************************************!*\
  !*** ./public/components/hypercloud/tags.tsx ***!
  \***********************************************/
/*! exports provided: menuActions, Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models_hypercloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/hypercloud */ "./public/models/hypercloud/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_expandable_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/expandable-table */ "./public/components/hypercloud/utils/expandable-table.tsx");
/* harmony import */ var _utils_expandable_inner_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/expandable-inner-table */ "./public/components/hypercloud/utils/expandable-inner-table.tsx");








const menuActions = [_utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.ModifyScanning];
const tableColumnClasses = [
    _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass,
];
const Tags = ({ tags, namespace, repository, registry, isExtRegistry }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TagsListTable, { tags: tags, namespace: namespace, repository: repository, registry: registry, isExtRegistry: isExtRegistry }))));
};
const TagsListTable = ({ tags, namespace, repository, registry, isExtRegistry }) => {
    const TagsListHeaderColumns = [
        'Name',
        'Signer',
        {
            title: 'Scan Result',
            cellTransforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["compoundExpand"]],
        },
        'Created Time',
        {
            title: '',
            props: { className: tableColumnClasses[0] }
        }
    ];
    const rowRenderer = (index, obj) => {
        obj.registry = registry;
        obj.repository = repository;
        obj.kind = 'Tag';
        obj.namespace = namespace;
        obj.isExtRegistry = isExtRegistry;
        return [
            {
                title: obj === null || obj === void 0 ? void 0 : obj.version,
            },
            {
                title: obj === null || obj === void 0 ? void 0 : obj.signer,
            },
            {
                title: obj === null || obj === void 0 ? void 0 : obj.severity,
                props: {
                    isOpen: false,
                },
            },
            {
                title: obj === null || obj === void 0 ? void 0 : obj.createdAt
            },
            {
                title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: 'Tag', resource: obj }),
                props: { className: tableColumnClasses[0] }
            }
        ];
    };
    const innerRenderer = parentItem => {
        const ScanResultTableRow = obj => {
            return [
                {
                    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: obj.link, target: "_blank" }, obj.name),
                    textValue: obj.name,
                },
                {
                    title: obj.severity,
                    textValue: obj.severity,
                },
                {
                    title: obj.version,
                    textValue: obj.version,
                },
            ];
        };
        const ScanResultTableHeader = [
            {
                title: 'Vulnerability',
                sortFunc: 'string',
                transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            },
            {
                title: 'Status',
                transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            },
            {
                title: 'Fixable Version',
                transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["sortable"]],
            },
        ];
        const model = Object.assign({}, _models_hypercloud__WEBPACK_IMPORTED_MODULE_3__["RepositoryModel"]);
        model.apiGroup = 'registry.' + model.apiGroup;
        if (isExtRegistry) {
            model.plural = 'ext-repositories';
        }
        return Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sGet"])(model, repository, namespace, { path: `imagescanresults/${parentItem.version}` })
            .then(res => {
            const innerItemsData = [];
            const resObj = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](res, parentItem.version);
            for (const proerty in resObj) {
                for (let i = 0; i < resObj[proerty].length; ++i) {
                    innerItemsData.push({
                        severity: resObj[proerty][i].Severity,
                        name: resObj[proerty][i].Name,
                        version: resObj[proerty][i].NamespaceName,
                        link: resObj[proerty][i].Link
                    });
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_expandable_inner_table__WEBPACK_IMPORTED_MODULE_7__["ExpandableInnerTable"], { "aria-label": "Scan Result", header: ScanResultTableHeader, Row: ScanResultTableRow, data: innerItemsData });
        })
            .catch(err => {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, err);
        });
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_expandable_table__WEBPACK_IMPORTED_MODULE_6__["SingleExpandableTable"], { header: TagsListHeaderColumns, itemList: tags, rowRenderer: rowRenderer, innerRenderer: innerRenderer, compoundParent: 2 });
};


/***/ }),

/***/ "./public/components/hypercloud/utils/expandable-inner-table.tsx":
/*!***********************************************************************!*\
  !*** ./public/components/hypercloud/utils/expandable-inner-table.tsx ***!
  \***********************************************************************/
/*! exports provided: ExpandableInnerTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableInnerTable", function() { return ExpandableInnerTable; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");




const ExpandableInnerTable = ({ data, header, Row }) => {
    const [sortBy, setSortBy] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        index: 0,
        direction: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["SortByDirection"].asc,
    });
    const [rows, setRows] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        const preData = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["forEach"](data, (value, index) => {
            preData.push({ cells: Row(value) });
        });
        setRows(preData);
    }, []);
    const onSort = (_event, index, direction) => {
        if (direction === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["SortByDirection"].asc) {
            // MEMO: 오름차순 정렬
            const sortedRows = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](rows).sort((a, b) => {
                if (a.cells[index].textValue < b.cells[index].textValue) {
                    return -1;
                }
                return a.cells[index].textValue > b.cells[index].textValue ? 1 : 0;
            });
            setSortBy({
                index,
                direction,
            });
            setRows(sortedRows);
        }
        else {
            // MEMO: 내림차순 정렬
            const sortedRows = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](rows).sort((a, b) => {
                if (a.cells[index].textValue < b.cells[index].textValue) {
                    return 1;
                }
                return a.cells[index].textValue > b.cells[index].textValue ? -1 : 0;
            });
            setSortBy({
                index,
                direction,
            });
            setRows(sortedRows);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["Table"], { cells: header, rows: rows, className: "pf-m-compact pf-m-border-rows", "aria-label": "inner-table-label", sortBy: sortBy, onSort: onSort },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null))));
};


/***/ }),

/***/ "./public/components/hypercloud/utils/expandable-table.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/hypercloud/utils/expandable-table.tsx ***!
  \*****************************************************************/
/*! exports provided: SingleExpandableTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleExpandableTable", function() { return SingleExpandableTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const SingleExpandableTable = ({ header, itemList, rowRenderer, innerRenderer, compoundParent }) => {
    const [tableRows, setTableRows] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const preData = [];
        itemList
            .reduce((result, item, index) => {
            return result.then(() => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b, _c, _d;
                const innerTable = yield innerRenderer(item);
                if (!!innerTable) {
                    preData.push({
                        isOpen: false,
                        cells: rowRenderer(index, item, (_b = (_a = innerTable.props) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length),
                    });
                    if (((_d = (_c = innerTable.props) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                        let parentValue = index * 2;
                        preData.push({
                            parent: parentValue,
                            compoundParent: compoundParent,
                            cells: [
                                {
                                    title: innerTable,
                                    props: { colSpan: header.length, className: 'pf-m-no-padding' },
                                },
                            ],
                        });
                    }
                    else {
                        let parentValue = index * 2;
                        preData.push({
                            parent: parentValue,
                            compoundParent: compoundParent,
                            cells: [
                                {
                                    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "...No Data..."),
                                    props: { colSpan: header.length, className: 'pf-m-no-padding' },
                                },
                            ],
                        });
                    }
                }
            }));
        }, Promise.resolve())
            .then(() => {
            setTableRows(lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](preData));
        });
    }, [itemList]);
    // function delay() {
    //   return new Promise(resolve => setTimeout(resolve, 300));
    // }
    const onExpand = (event, rowIndex, colIndex, isOpen, rowData, extraData) => {
        let rows = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](tableRows);
        if (!isOpen) {
            rows[rowIndex].cells.forEach((cell) => {
                if (cell.props)
                    cell.props.isOpen = false;
            });
            rows[rowIndex].cells[colIndex].props.isOpen = true;
            rows[rowIndex].isOpen = true;
        }
        else {
            rows[rowIndex].cells[colIndex].props.isOpen = false;
            rows[rowIndex].isOpen = rows[rowIndex].cells.some((cell) => cell.props && cell.props.isOpen);
        }
        setTableRows(rows);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["Table"], { "aria-label": "Compound expandable table", onExpand: onExpand, rows: tableRows, cells: header },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null)));
};


/***/ })

}]);
//# sourceMappingURL=repository-f9176c1e46877726d683.js.map