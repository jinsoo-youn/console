(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-signer"],{

/***/ "./public/components/hypercloud/factory/table.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/factory/table.tsx ***!
  \********************************************************/
/*! exports provided: TableRow, TableData, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableData", function() { return TableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _actions_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _reducers_monitoring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reducers/monitoring */ "./public/reducers/monitoring.ts");
/* harmony import */ var _ingress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ingress */ "./public/components/ingress.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _patternfly_react_virtualized_extension__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-virtualized-extension */ "./node_modules/@patternfly/react-virtualized-extension/dist/esm/index.js");
/* harmony import */ var _factory_table_filters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../factory/table-filters */ "./public/components/factory/table-filters.ts");
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
var _a;














const rowFiltersToFilterFuncs = rowFilters => {
    return (rowFilters || []).filter(f => f.type && lodash_es__WEBPACK_IMPORTED_MODULE_0__["isFunction"](f.filter)).reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.type]: f.filter })), {});
};
const getAllTableFilters = rowFilters => (Object.assign(Object.assign({}, _factory_table_filters__WEBPACK_IMPORTED_MODULE_13__["tableFilters"]), rowFiltersToFilterFuncs(rowFilters)));
const getFilteredRows = (_filters, rowFilters, objects) => {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](_filters)) {
        return objects;
    }
    const allTableFilters = getAllTableFilters(rowFilters);
    let filteredObjects = objects;
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](_filters, (value, name) => {
        const filter = allTableFilters[name];
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isFunction"](filter)) {
            filteredObjects = lodash_es__WEBPACK_IMPORTED_MODULE_0__["filter"](filteredObjects, o => filter(value, o));
        }
    });
    return filteredObjects;
};
const filterPropType = (props, propName, componentName) => {
    if (!props) {
        return;
    }
    const allTableFilters = getAllTableFilters(props.rowFilters);
    for (const key of lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](props[propName])) {
        if (key in allTableFilters || key === 'loadTest') {
            continue;
        }
        return new Error(`Invalid prop '${propName}' in '${componentName}'. '${key}' is not a valid filter type!`);
    }
};
const sorts = {
    alertStateOrder: _reducers_monitoring__WEBPACK_IMPORTED_MODULE_6__["alertStateOrder"],
    daemonsetNumScheduled: daemonset => lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](daemonset, 'status.currentNumberScheduled')),
    dataSize: resource => lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'data')) + lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'binaryData')),
    ingressValidHosts: _ingress__WEBPACK_IMPORTED_MODULE_7__["ingressValidHosts"],
    serviceCatalogStatus: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["serviceCatalogStatus"],
    jobCompletions: job => Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["getJobTypeAndCompletions"])(job).completions,
    jobType: job => Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["getJobTypeAndCompletions"])(job).type,
    nodeReadiness: (node) => {
        let readiness = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](node, 'status.conditions');
        readiness = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](readiness, { type: 'Ready' });
        return lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](readiness, 'status');
    },
    numReplicas: resource => lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'status.replicas')),
    planExternalName: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["planExternalName"],
    namespaceCPU: (ns) => _actions_ui__WEBPACK_IMPORTED_MODULE_5__["getNamespaceMetric"](ns, 'cpu'),
    namespaceMemory: (ns) => _actions_ui__WEBPACK_IMPORTED_MODULE_5__["getNamespaceMetric"](ns, 'memory'),
    podCPU: (pod) => _actions_ui__WEBPACK_IMPORTED_MODULE_5__["getPodMetric"](pod, 'cpu'),
    podMemory: (pod) => _actions_ui__WEBPACK_IMPORTED_MODULE_5__["getPodMetric"](pod, 'memory'),
    podPhase: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["podPhase"],
    podReadiness: (pod) => Object(_module_k8s__WEBPACK_IMPORTED_MODULE_9__["podReadiness"])(pod).readyCount,
    podRestarts: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["podRestarts"],
    pvStorage: pv => { var _a, _b; return lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](Object(_utils__WEBPACK_IMPORTED_MODULE_8__["convertToBaseValue"])((_b = (_a = pv === null || pv === void 0 ? void 0 : pv.spec) === null || _a === void 0 ? void 0 : _a.capacity) === null || _b === void 0 ? void 0 : _b.storage)); },
    pvcStorage: pvc => { var _a, _b; return lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](Object(_utils__WEBPACK_IMPORTED_MODULE_8__["convertToBaseValue"])((_b = (_a = pvc === null || pvc === void 0 ? void 0 : pvc.status) === null || _a === void 0 ? void 0 : _a.capacity) === null || _b === void 0 ? void 0 : _b.storage)); },
    serviceClassDisplayName: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["serviceClassDisplayName"],
    silenceFiringAlertsOrder: _reducers_monitoring__WEBPACK_IMPORTED_MODULE_6__["silenceFiringAlertsOrder"],
    silenceStateOrder: _reducers_monitoring__WEBPACK_IMPORTED_MODULE_6__["silenceStateOrder"],
    string: val => JSON.stringify(val),
    number: val => lodash_es__WEBPACK_IMPORTED_MODULE_0__["toNumber"](val),
    getClusterOperatorStatus: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["getClusterOperatorStatus"],
    getClusterOperatorVersion: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["getClusterOperatorVersion"],
    getTemplateInstanceStatus: _module_k8s__WEBPACK_IMPORTED_MODULE_9__["getTemplateInstanceStatus"],
    nodeRoles: (node) => {
        const roles = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getNodeRoles"])(node);
        return roles.sort().join(', ');
    },
    nodeMemory: (node) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["nodeMemory"])(node),
    nodeCPU: (node) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["nodeCPU"])(node),
    nodeFS: (node) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["nodeFS"])(node),
    machinePhase: (machine) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getMachinePhase"])(machine),
    nodePods: (node) => Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["nodePods"])(node),
};
const stateToProps = ({ UI }, { customSorts = {}, data = [], defaultSortField = 'metadata.name', defaultSortFunc = undefined, defaultSortOrder = _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["SortByDirection"].asc, filters = {}, loaded = false, reduxID = null, reduxIDs = null, staticFilters = [{}], rowFilters = [] }) => {
    const allFilters = staticFilters ? Object.assign({}, filters, ...staticFilters) : filters;
    const newData = getFilteredRows(allFilters, rowFilters, data);
    const listId = reduxIDs ? reduxIDs.join(',') : reduxID;
    // Only default to 'metadata.name' if no `defaultSortFunc`
    const currentSortField = UI.getIn(['listSorts', listId, 'field'], defaultSortFunc ? undefined : defaultSortField);
    const currentSortFunc = UI.getIn(['listSorts', listId, 'func'], defaultSortFunc);
    const currentSortOrder = UI.getIn(['listSorts', listId, 'orderBy'], defaultSortOrder);
    if (loaded) {
        let sortBy = 'metadata.name';
        if (currentSortField) {
            sortBy = resource => sorts.string(lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, currentSortField, ''));
        }
        else if (currentSortFunc && customSorts[currentSortFunc]) {
            // Sort resources by a function in the 'customSorts' prop
            sortBy = customSorts[currentSortFunc];
        }
        else if (currentSortFunc && sorts[currentSortFunc]) {
            // Sort resources by a function in the 'sorts' object
            sortBy = sorts[currentSortFunc];
        }
        const getSortValue = resource => {
            const val = lodash_es__WEBPACK_IMPORTED_MODULE_0__["isFunction"](sortBy) ? sortBy(resource) : lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, sortBy);
            return val !== null && val !== void 0 ? val : '';
        };
        newData === null || newData === void 0 ? void 0 : newData.sort((a, b) => {
            var _a, _b;
            const lang = navigator.languages[0] || navigator.language;
            // Use `localCompare` with `numeric: true` for a natural sort order (e.g., pv-1, pv-9, pv-10)
            const compareOpts = { numeric: true, ignorePunctuation: true };
            const aValue = getSortValue(a);
            const bValue = getSortValue(b);
            const result = Number.isFinite(aValue) && Number.isFinite(bValue) ? aValue - bValue : `${aValue}`.localeCompare(`${bValue}`, lang, compareOpts);
            if (result !== 0) {
                return currentSortOrder === _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["SortByDirection"].asc ? result : result * -1;
            }
            // Use name as a secondary sort for a stable sort.
            const aName = ((_a = a === null || a === void 0 ? void 0 : a.metadata) === null || _a === void 0 ? void 0 : _a.name) || '';
            const bName = ((_b = b === null || b === void 0 ? void 0 : b.metadata) === null || _b === void 0 ? void 0 : _b.name) || '';
            return aName.localeCompare(bName, lang, compareOpts);
        });
    }
    return {
        currentSortField,
        currentSortFunc,
        currentSortOrder,
        data: newData,
        unfilteredData: data,
        listId,
    };
};
// Common table row/columns helper SFCs for implementing accessible data grid
const TableRow = (_a) => {
    var { id, index, trKey, style, className } = _a, props = __rest(_a, ["id", "index", "trKey", "style", "className"]);
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("tr", Object.assign({}, props, { "data-id": id, "data-index": index, "data-test-rows": "resource-row", "data-key": trKey, style: style, className: className, role: "row" }));
};
TableRow.displayName = 'TableRow';
const TableData = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("td", Object.assign({}, props, { className: className, role: "gridcell" }));
};
TableData.displayName = 'TableData';
const TableWrapper = (_a) => {
    var { virtualize, ariaLabel, ariaRowCount } = _a, props = __rest(_a, ["virtualize", "ariaLabel", "ariaRowCount"]);
    return virtualize ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object.assign({}, props, { role: "grid", "aria-label": ariaLabel, "aria-rowcount": ariaRowCount })) : react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], Object.assign({}, props));
};
const VirtualBody = props => {
    const { customData, Row, height, isScrolling, onChildScroll, data, columns, scrollTop, reveal, width } = props;
    const cellMeasurementCache = new react_virtualized__WEBPACK_IMPORTED_MODULE_11__["CellMeasurerCache"]({
        fixedWidth: true,
        minHeight: 44,
        keyMapper: rowIndex => lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.data[rowIndex], 'metadata.uid', rowIndex),
    });
    const rowRenderer = ({ index, isScrolling: scrolling, isVisible, key, style, parent }) => {
        const rowArgs = {
            obj: data[index],
            index,
            columns,
            isScrolling: scrolling,
            key,
            style,
            customData,
            reveal,
        };
        const row = Row(rowArgs);
        // do not render non visible elements (this excludes overscan)
        if (!isVisible) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_11__["CellMeasurer"], { cache: cellMeasurementCache, columnIndex: 0, key: key, parent: parent, rowIndex: index }, row));
    };
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_virtualized_extension__WEBPACK_IMPORTED_MODULE_12__["VirtualTableBody"], { autoHeight: true, className: "pf-c-table pf-m-compact pf-m-border-rows pf-c-virtualized pf-c-window-scroller", deferredMeasurementCache: cellMeasurementCache, rowHeight: cellMeasurementCache.rowHeight, height: height || 0, isScrolling: isScrolling, onScroll: onChildScroll, overscanRowCount: 10, columns: columns, rows: data, rowCount: data.length, rowRenderer: rowRenderer, scrollTop: scrollTop, width: width });
};
const Table = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(stateToProps, { sortList: _actions_ui__WEBPACK_IMPORTED_MODULE_5__["sortList"] }, null, {
    areStatesEqual: ({ UI: next }, { UI: prev }) => next.get('listSorts') === prev.get('listSorts'),
})((_a = class TableInner extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
        constructor(props) {
            super(props);
            const componentProps = lodash_es__WEBPACK_IMPORTED_MODULE_0__["pick"](props, ['data', 'filters', 'selected', 'match', 'kindObj']);
            const columns = props.Header(componentProps);
            const { currentSortField, currentSortFunc, currentSortOrder } = props;
            this._columnShift = props.onSelect ? 1 : 0; //shift indexes by 1 if select provided
            this._applySort = this._applySort.bind(this);
            this._onSort = this._onSort.bind(this);
            this._handleResize = lodash_es__WEBPACK_IMPORTED_MODULE_0__["debounce"](this._handleResize.bind(this), 100);
            let sortBy = {};
            if (currentSortField && currentSortOrder) {
                const columnIndex = lodash_es__WEBPACK_IMPORTED_MODULE_0__["findIndex"](columns, { sortField: currentSortField });
                if (columnIndex > -1) {
                    sortBy = { index: columnIndex + this._columnShift, direction: currentSortOrder };
                }
            }
            else if (currentSortFunc && currentSortOrder) {
                const columnIndex = lodash_es__WEBPACK_IMPORTED_MODULE_0__["findIndex"](columns, { sortFunc: currentSortFunc });
                if (columnIndex > -1) {
                    sortBy = { index: columnIndex + this._columnShift, direction: currentSortOrder };
                }
            }
            this.state = { sortBy };
        }
        componentDidMount() {
            const componentProps = lodash_es__WEBPACK_IMPORTED_MODULE_0__["pick"](this.props, ['data', 'filters', 'selected', 'match', 'kindObj']);
            const columns = this.props.Header(componentProps);
            const sp = new URLSearchParams(window.location.search);
            const columnIndex = lodash_es__WEBPACK_IMPORTED_MODULE_0__["findIndex"](columns, { title: sp.get('sortBy') });
            if (columnIndex > -1) {
                const sortOrder = sp.get('orderBy') || _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["SortByDirection"].asc;
                const column = columns[columnIndex];
                this._applySort(column.sortField, column.sortFunc, sortOrder, column.title);
                this.setState({
                    sortBy: {
                        index: columnIndex + this._columnShift,
                        direction: sortOrder,
                    },
                });
            }
            // re-render after resize
            window.addEventListener('resize', this._handleResize);
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this._handleResize);
        }
        _handleResize() {
            this.forceUpdate();
        }
        _applySort(sortField, sortFunc, direction, columnTitle) {
            const { sortList, listId, currentSortFunc } = this.props;
            const applySort = lodash_es__WEBPACK_IMPORTED_MODULE_0__["partial"](sortList, listId);
            applySort(sortField, sortFunc || currentSortFunc, direction, columnTitle);
        }
        _onSort(event, index, direction) {
            event.preventDefault();
            const componentProps = lodash_es__WEBPACK_IMPORTED_MODULE_0__["pick"](this.props, ['data', 'filters', 'selected', 'match', 'kindObj']);
            const columns = this.props.Header(componentProps);
            const sortColumn = columns[index - this._columnShift];
            this._applySort(sortColumn.sortField, sortColumn.sortFunc, direction, sortColumn.title);
            this.setState({
                sortBy: {
                    index,
                    direction,
                },
            });
        }
        render() {
            const { scrollElement, Rows, Row, expand, label, mock, onSelect, selectedResourcesForKind, 'aria-label': ariaLabel, reveal, virtualize = true, customData, gridBreakPoint = _patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["TableGridBreakpoint"].none, Header } = this.props;
            const { sortBy } = this.state;
            const componentProps = lodash_es__WEBPACK_IMPORTED_MODULE_0__["pick"](this.props, ['data', 'filters', 'selected', 'match', 'kindObj']);
            const columns = Header(componentProps);
            const ariaRowCount = componentProps.data && componentProps.data.length;
            const scrollNode = typeof scrollElement === 'function' ? scrollElement() : scrollElement;
            const renderVirtualizedTable = scrollContainer => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_virtualized_extension__WEBPACK_IMPORTED_MODULE_12__["WindowScroller"], { scrollElement: scrollContainer }, ({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_virtualized_extension__WEBPACK_IMPORTED_MODULE_12__["AutoSizer"], { disableHeight: true }, ({ width }) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { ref: registerChild },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](VirtualBody, { Row: Row, reveal: reveal, customData: customData, height: height, isScrolling: isScrolling, onChildScroll: onChildScroll, data: componentProps.data, columns: columns, scrollTop: scrollTop, width: width, expand: expand })))))));
            const children = mock ? (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["EmptyBox"], { label: label })) : (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TableWrapper, { virtualize: virtualize, ariaLabel: ariaLabel, ariaRowCount: ariaRowCount },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["Table"], { cells: columns, rows: virtualize ? [] : Rows({ componentProps, selectedResourcesForKind, customData }), gridBreakPoint: gridBreakPoint, onSort: this._onSort, onSelect: onSelect, sortBy: sortBy, className: "pf-m-compact pf-m-border-rows", role: virtualize ? 'presentation' : 'grid', "aria-label": virtualize ? null : ariaLabel },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["TableHeader"], null),
                    !virtualize && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_10__["TableBody"], null)),
                virtualize && (scrollNode ? renderVirtualizedTable(scrollNode) : react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["WithScrollContainer"], null, renderVirtualizedTable))));
            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" }, mock ? (children) : (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["StatusBox"], Object.assign({ skeleton: react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "loading-skeleton--table" }) }, this.props), children))));
        }
    },
    _a.propTypes = {
        customData: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
        data: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"],
        unfilteredData: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"],
        NoDataEmptyMsg: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
        EmptyMsg: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
        expand: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
        fieldSelector: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        filters: filterPropType,
        Header: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
        Row: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
        Rows: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
        loaded: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
        loadError: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_1__["object"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
        mock: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
        namespace: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        reduxID: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        reduxIDs: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"],
        selector: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
        staticFilters: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"],
        virtualize: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
        currentSortField: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        currentSortFunc: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        currentSortOrder: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
        defaultSortField: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        defaultSortFunc: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        label: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        listId: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
        sortList: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
        onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
        scrollElement: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"]([prop_types__WEBPACK_IMPORTED_MODULE_1__["object"], prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]]),
    },
    _a));


/***/ }),

/***/ "./public/components/hypercloud/image-signer-key.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/image-signer-key.tsx ***!
  \***********************************************************/
/*! exports provided: MaskedData, ConfigMapBinaryData, ConfigMapData, SecretValue, SecretData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedData", function() { return MaskedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMapBinaryData", function() { return ConfigMapBinaryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMapData", function() { return ConfigMapData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretValue", function() { return SecretValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretData", function() { return SecretData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/copy-to-clipboard */ "./public/components/hypercloud/utils/copy-to-clipboard.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








const MaskedData = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sr-only" }, "Value hidden"),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "aria-hidden": "true" }, "\u2022\u2022\u2022\u2022\u2022")));
const downloadBinary = (key, value) => {
    const rawBinary = window.atob(value);
    const rawBinaryLength = rawBinary.length;
    const array = new Uint8Array(new ArrayBuffer(rawBinaryLength));
    for (let i = 0; i < rawBinaryLength; i++) {
        array[i] = rawBinary.charCodeAt(i);
    }
    const blob = new Blob([array], { type: 'data:application/octet-stream;' });
    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, key);
};
const ConfigMapBinaryData = ({ data }) => {
    const dl = [];
    Object.keys(data || {})
        .sort()
        .forEach(k => {
        const value = data[k];
        dl.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { key: `${k}-k` }, k));
        dl.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: `${k}-v` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { className: "pf-m-link--align-left", type: "button", onClick: () => downloadBinary(k, value), variant: "link" }, "Save File")));
    });
    return dl.length ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null, dl) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["EmptyBox"], { label: "Binary Data" });
};
ConfigMapBinaryData.displayName = 'ConfigMapBinaryData';
const ConfigMapData = ({ data, label }) => {
    const dl = [];
    Object.keys(data || {})
        .sort()
        .forEach(k => {
        const value = data[k];
        dl.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { key: `${k}-k` }, k));
        dl.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: `${k}-v` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__["CopyToClipboard"], { value: value })));
    });
    return dl.length ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null, dl) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["EmptyBox"], { label: label });
};
ConfigMapData.displayName = 'ConfigMapData';
const SecretValue = ({ isTable, value, reveal, encoded = true }) => {
    if (!value) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "No value");
    }
    const decodedValue = encoded ? js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"].decode(value) : value;
    // const decodedValue = value;
    const visibleValue = reveal ? decodedValue : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MaskedData, null);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__["CopyToClipboard"], { value: decodedValue, visibleValue: visibleValue, isTable: isTable });
};
SecretValue.displayName = 'SecretValue';
const SecretData = ({ data, title, isTable }) => {
    const [reveal, setReveal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    const dl = [];
    Object.keys(data || {})
        .sort()
        .forEach(k => {
        dl.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { key: `${k}-k` }, `Root ${k.toUpperCase()}`));
        dl.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { key: `${k}-v` }, k === 'id' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SecretValue, { encoded: false, value: data[k], reveal: true, isTable: isTable }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SecretValue, { value: data[k], reveal: reveal, isTable: isTable })));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: title }, dl.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { type: "button", onClick: () => setReveal(!reveal), variant: "link", className: "pf-m-link--align-right" }, reveal ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["EyeSlashIcon"], { className: "co-icon-space-r" }),
            `${t('COMMON:MSG_DETAILS_TABSIGNERKEY_3')}`)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["EyeIcon"], { className: "co-icon-space-r" }),
            `${t('COMMON:MSG_DETAILS_TABSIGNERKEY_2')}`)))) : null),
        dl.length ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "secret-data" }, dl) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["EmptyBox"], { label: "Data" })));
};
SecretData.displayName = 'SecretData';


/***/ }),

/***/ "./public/components/hypercloud/image-signer.tsx":
/*!*******************************************************!*\
  !*** ./public/components/hypercloud/image-signer.tsx ***!
  \*******************************************************/
/*! exports provided: menuActions, ImageSignerDetailsList, ImageSigners, ImageSignersPage, ImageSignersDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignerDetailsList", function() { return ImageSignerDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSigners", function() { return ImageSigners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignersPage", function() { return ImageSignersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignersDetailsPage", function() { return ImageSignersDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _image_signer_key__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-signer-key */ "./public/components/hypercloud/image-signer-key.tsx");
/* harmony import */ var _targets_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./targets-table */ "./public/components/hypercloud/targets-table.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");












const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["ImageSignerModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_6__["ImageSignerModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const ImageSignerTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_71'),
            sortField: 'spec.team',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_72'),
            sortField: 'spec.email',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_73'),
            sortField: 'spec.phone',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
ImageSignerTableHeader.displayName = 'ImageSignerTableHeader';
const ImageSignerTableRow = ({ obj: imagesigner, index, key, style }) => {
    var _a, _b, _c;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: imagesigner.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: imagesigner.metadata.name, namespace: imagesigner.metadata.namespace, title: imagesigner.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1]) }, (_a = imagesigner === null || imagesigner === void 0 ? void 0 : imagesigner.spec) === null || _a === void 0 ? void 0 : _a.team),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[2]) }, (_b = imagesigner === null || imagesigner === void 0 ? void 0 : imagesigner.spec) === null || _b === void 0 ? void 0 : _b.email),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[3]) }, (_c = imagesigner === null || imagesigner === void 0 ? void 0 : imagesigner.spec) === null || _c === void 0 ? void 0 : _c.phone),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: imagesigner.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: imagesigner }))));
};
const ImageSignerDetailsList = ({ ds: imagesigner }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_7'), obj: imagesigner, path: "spec.team" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_8'), obj: imagesigner, path: "spec.email" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_9'), obj: imagesigner, path: "spec.phone" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_10'), obj: imagesigner, path: "spec.description" })));
};
// const TargetsTable: React.FC = props => <Table {...props} aria-label="ImageSigners" Header={ImageSignerKeyTargetTableHeader} Row={ImageSignerKeyTargetTableRow} virtualize />;
const ImageSignerDetails = ({ obj: imagesigner }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(imagesigner, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: imagesigner, showOwner: false }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABREPLICASETS_5'), obj: imagesigner, path: "spec.owner" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageSignerDetailsList, { ds: imagesigner }))))));
};
const fetchSignerKey = singerkey => {
    const url = `/api/kubernetes/apis/tmax.io/v1/signerkeys/${singerkey}`;
    return Object(_co_fetch__WEBPACK_IMPORTED_MODULE_7__["coFetchJSON"])(url).then(response => {
        console.log(response);
        return response;
    });
};
const SignerKeyDetails = ({ obj: imagesigner }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]([]);
    const [root, setRoot] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
        id: '',
        key: '',
        passPhrase: '',
    });
    // const [targets, setTargets] = React.useState({
    //   id: '',
    //   key: '',
    //   passPhrase: '',
    // });
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        var _a;
        fetchSignerKey((_a = imagesigner === null || imagesigner === void 0 ? void 0 : imagesigner.metadata) === null || _a === void 0 ? void 0 : _a.name).then(data => {
            const preData = [];
            setRoot(data.spec.root);
            lodash_es__WEBPACK_IMPORTED_MODULE_0__["forEach"](data.spec.targets, (value, key) => {
                preData.push(value);
            });
            console.log('확인해봐라:', preData);
            setData(preData);
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-12" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_image_signer_key__WEBPACK_IMPORTED_MODULE_8__["SecretData"], { data: root, title: `${t('COMMON:MSG_DETAILS_TABSIGNERKEY_1')} ${t('COMMON:MSG_DETAILS_TABOVERVIEW_1')}`, isTable: false })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_targets_table__WEBPACK_IMPORTED_MODULE_9__["TargetsTable"], { resource: data, heading: `${t('COMMON:MSG_DETAILS_TABDETAILS_METRICS_TABLEHEADER_5')}` }))));
};
const { details, editYaml, signerKey } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const ImageSigners = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "ImageSigners", Header: ImageSignerTableHeader.bind(null, t), Row: ImageSignerTableRow, virtualize: true }));
};
const ImageSignersPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_91'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_91') }), canCreate: props.isDetailPage ? false : true, ListComponent: ImageSigners, kind: kind }, props));
};
const ImageSignersDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(ImageSignerDetails)), editYaml(), signerKey(SignerKeyDetails)] }));


/***/ }),

/***/ "./public/components/hypercloud/targets-table.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/targets-table.tsx ***!
  \********************************************************/
/*! exports provided: TargetsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetsTable", function() { return TargetsTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _hypercloud_factory_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hypercloud/factory/table */ "./public/components/hypercloud/factory/table.tsx");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _image_signer_key__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-signer-key */ "./public/components/hypercloud/image-signer-key.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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









const targetRowColumnClasses = [classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-5'), classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-7'), classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-2', 'col-md-2', 'col-sm-4', 'hidden-xs')];
const TargetsTableHeader = () => {
    return [
        {
            title: 'ID',
            sortField: 'id',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: targetRowColumnClasses[0] },
        },
        {
            title: 'Key',
            sortField: 'key',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: targetRowColumnClasses[1] },
        },
        {
            title: 'PassPhrase',
            sortField: 'passPhrase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: targetRowColumnClasses[2] },
        },
    ];
};
TargetsTableHeader.displayName = 'TargetsTableHeader';
const TargetsTableRows = props => {
    const { obj, index, key, style, reveal } = props;
    console.log(obj);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hypercloud_factory_table__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: 'target-table', index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hypercloud_factory_table__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: targetRowColumnClasses[0] }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_signer_key__WEBPACK_IMPORTED_MODULE_7__["SecretValue"], { encoded: false, value: obj.id, reveal: true, isTable: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hypercloud_factory_table__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(targetRowColumnClasses[1]) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_signer_key__WEBPACK_IMPORTED_MODULE_7__["SecretValue"], { value: obj.key, reveal: reveal, isTable: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hypercloud_factory_table__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(targetRowColumnClasses[2]) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_signer_key__WEBPACK_IMPORTED_MODULE_7__["SecretValue"], { value: obj.passPhrase, reveal: reveal, isTable: true }))));
};
const TargetsTable = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    const { resource } = props, tableProps = __rest(props, ["resource"]);
    const [reveal, setReveal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const data = resource;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        props.heading && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: props.heading }, resource.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "button", onClick: () => setReveal(!reveal), variant: "link", className: "pf-m-link--align-right" }, reveal ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["EyeSlashIcon"], { className: "co-icon-space-r" }),
            `${t('COMMON:MSG_DETAILS_TABSIGNERKEY_3')}`)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["EyeIcon"], { className: "co-icon-space-r" }),
            `${t('COMMON:MSG_DETAILS_TABSIGNERKEY_2')}`)))) : null)),
        resource.length <= 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_2__["EmptyBox"], { label: "Targets" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hypercloud_factory_table__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, tableProps, { "aria-label": "Targets", loaded: true, reveal: reveal, label: props.heading, data: data, Header: TargetsTableHeader, Row: TargetsTableRows, virtualize: true }))));
};
TargetsTable.displayName = 'TargetsTable';
// type SecretValueProps = {
//   value: string;
//   encoded?: boolean;
//   reveal: boolean;
// };


/***/ }),

/***/ "./public/components/hypercloud/utils/copy-to-clipboard.tsx":
/*!******************************************************************!*\
  !*** ./public/components/hypercloud/utils/copy-to-clipboard.tsx ***!
  \******************************************************************/
/*! exports provided: CopyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboard", function() { return CopyToClipboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");





const CopyToClipboard = react__WEBPACK_IMPORTED_MODULE_0__["memo"](props => {
    const [copied, setCopied] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const tooltipText = copied ? 'Copied' : 'Copy to Clipboard';
    const tooltipContent = [
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-nowrap", key: "nowrap" }, tooltipText),
    ];
    // Default to value if no visible value was specified.
    const visibleValue = lodash_es__WEBPACK_IMPORTED_MODULE_1__["isNil"](props.visibleValue) ? props.value : props.visibleValue;
    const border = props.isTable ? '0px' : '1px solid #ccc';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-copy-to-clipboard" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", { className: "co-pre-wrap co-copy-to-clipboard__text", style: { border: border } }, visibleValue),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: tooltipContent, trigger: "click mouseenter focus", exitDelay: 1250 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboard"], { text: props.value, onCopy: () => setCopied(true) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { variant: "plain", onMouseEnter: () => setCopied(false), className: "co-copy-to-clipboard__btn pf-c-clipboard-copy__group-copy", type: "button" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["CopyIcon"], null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sr-only" }, "Copy to Clipboard"))))));
});
CopyToClipboard.displayName = 'CopyToClipboard';


/***/ })

}]);
//# sourceMappingURL=image-signer-5baf8e5b6f7842a6335d.js.map