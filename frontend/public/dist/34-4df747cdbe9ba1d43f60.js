(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDisks.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDisks.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");





const DisksTableHeader = () => [
    { title: 'Name', sortField: 'name', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Size', sortField: 'sizeBytes', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Type', sortField: 'rotational', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Model', sortField: 'model', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Serial Number', sortField: 'serialNumber', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'Vendor', sortField: 'vendor', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
    { title: 'HCTL', sortField: 'hctl', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_1__["sortable"]] },
];
const DisksTableRow = ({ obj, index, key, style }) => {
    const { hctl, model, name, rotational, serialNumber, sizeBytes, vendor } = obj;
    const { string: size } = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["humanizeDecimalBytes"])(sizeBytes);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableRow"], { id: name, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, size),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, rotational ? 'Rotational' : 'SSD'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, model),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, serialNumber),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, vendor),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["TableData"], null, hctl)));
};
const BareMetalHostDisks = ({ obj: host, loadError }) => {
    const disks = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getHostStorage"])(host);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["Table"], { data: disks, "aria-label": "Bare Metal Host Disks", Header: DisksTableHeader, Row: DisksTableRow, loaded: !!host, loadError: loadError }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostDisks);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/DisksPage.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/DisksPage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./packages/metal3-plugin/src/models.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");
/* harmony import */ var _baremetal_hosts_BareMetalHostDisks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../baremetal-hosts/BareMetalHostDisks */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostDisks.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");







const bareMetalHosts = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["BareMetalHostModel"]),
    namespaced: true,
    isList: true,
};
const DisksPage = ({ obj }) => {
    const [hosts, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__["useK8sWatchResource"])(bareMetalHosts);
    let host;
    if (loaded) {
        const hostsByMachineName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["createBasicLookup"])(hosts, _selectors__WEBPACK_IMPORTED_MODULE_4__["getHostMachineName"]);
        host = hostsByMachineName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNodeMachineName"])(obj)];
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_baremetal_hosts_BareMetalHostDisks__WEBPACK_IMPORTED_MODULE_5__["default"], { obj: host, loadError: loadError });
};
/* harmony default export */ __webpack_exports__["default"] = (DisksPage);


/***/ })

}]);
//# sourceMappingURL=34-4df747cdbe9ba1d43f60.js.map