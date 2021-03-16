(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostNICs.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostNICs.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/metal3-plugin/src/selectors/index.ts");





const NICsTableHeader = () => [
    { title: 'Name', sortField: 'name', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'Model', sortField: 'model', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'PXE', sortField: 'pxe', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'IP', sortField: 'ip', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'Speed', sortField: 'speedGbps', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'MAC Address', sortField: 'mac', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
    { title: 'VLAN ID', sortField: 'vlanId', transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]] },
];
const NICsTableRow = ({ obj: nic, index, key, style }) => {
    const { ip, mac, model, name, pxe, speedGbps, vlanId } = nic;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: ip, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, model),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, pxe ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OutlinedCheckSquareIcon"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OutlinedSquareIcon"], null)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, ip),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null,
            speedGbps,
            " Gbps"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, mac),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], null, vlanId)));
};
const BareMetalHostNICs = ({ obj: host, loadError }) => {
    const nics = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getHostNICs"])(host);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], { data: nics, "aria-label": "Bare Metal Host NICs", Header: NICsTableHeader, Row: NICsTableRow, loaded: !!host, loadError: loadError }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BareMetalHostNICs);


/***/ }),

/***/ "./packages/metal3-plugin/src/components/baremetal-nodes/NICsPage.tsx":
/*!****************************************************************************!*\
  !*** ./packages/metal3-plugin/src/components/baremetal-nodes/NICsPage.tsx ***!
  \****************************************************************************/
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
/* harmony import */ var _baremetal_hosts_BareMetalHostNICs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../baremetal-hosts/BareMetalHostNICs */ "./packages/metal3-plugin/src/components/baremetal-hosts/BareMetalHostNICs.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");







const bareMetalHosts = {
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_2__["BareMetalHostModel"]),
    namespaced: true,
    isList: true,
};
const NICsPage = ({ obj }) => {
    const [hosts, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_1__["useK8sWatchResource"])(bareMetalHosts);
    let host;
    if (loaded) {
        const hostsByMachineName = Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["createBasicLookup"])(hosts, _selectors__WEBPACK_IMPORTED_MODULE_4__["getHostMachineName"]);
        host = hostsByMachineName[Object(_console_shared__WEBPACK_IMPORTED_MODULE_3__["getNodeMachineName"])(obj)];
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_baremetal_hosts_BareMetalHostNICs__WEBPACK_IMPORTED_MODULE_5__["default"], { obj: host, loadError: loadError });
};
/* harmony default export */ __webpack_exports__["default"] = (NICsPage);


/***/ })

}]);
//# sourceMappingURL=35-fc8765d500709ea304b3.js.map