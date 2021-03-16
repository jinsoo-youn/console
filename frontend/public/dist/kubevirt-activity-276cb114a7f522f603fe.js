(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kubevirt-activity"],{

/***/ "./packages/kubevirt-plugin/src/components/dashboards-page/overview-dashboard/activity.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/dashboards-page/overview-dashboard/activity.tsx ***!
  \*************************************************************************************************/
/*! exports provided: DiskImportActivity, V2VImportActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiskImportActivity", function() { return DiskImportActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V2VImportActivity", function() { return V2VImportActivity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityItem */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityItem.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/kubevirt-plugin/src/components/dashboards-page/overview-dashboard/utils.ts");
/* harmony import */ var _vm_templates_vm_template_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vm-templates/vm-template-link */ "./packages/kubevirt-plugin/src/components/vm-templates/vm-template-link.tsx");









const DiskImportActivity = ({ resource }) => {
    var _a;
    const progress = parseInt((_a = resource === null || resource === void 0 ? void 0 : resource.status) === null || _a === void 0 ? void 0 : _a.progress, 10);
    const { kind, name, uid } = resource.metadata.ownerReferences[0];
    const model = _utils__WEBPACK_IMPORTED_MODULE_7__["diskImportKindMapping"][kind];
    const ownerLink = model === _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["TemplateModel"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_vm_templates_vm_template_link__WEBPACK_IMPORTED_MODULE_8__["VMTemplateLink"], { name: name, namespace: resource.metadata.namespace, uid: uid })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(model), name: name, namespace: resource.metadata.namespace }));
    const title = `Importing ${model === _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["TemplateModel"] ? `${_models__WEBPACK_IMPORTED_MODULE_6__["VirtualMachineModel"].label} ${model.label}` : model.label} disk`;
    return Number.isNaN(progress) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_2__["default"], null, title),
        ownerLink)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_2__["ActivityProgress"], { title: title, progress: progress }, ownerLink));
};
const V2VImportActivity = ({ resource }) => {
    const vmName = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resource.metadata.ownerReferences, '[0].name');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_2__["ActivityProgress"], { title: "Importing VM (v2v)", progress: parseInt(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resource.metadata.annotations, 'v2vConversionProgress', '0'), 10) }, vmName && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["VirtualMachineModel"]), name: vmName, namespace: resource.metadata.namespace }))));
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/components/vm-templates/vm-template-link.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/components/vm-templates/vm-template-link.tsx ***!
  \***********************************************************************************/
/*! exports provided: VMTemplateLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMTemplateLink", function() { return VMTemplateLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");




const VMTemplateLink = ({ name, namespace, uid }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ResourceIcon"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["TemplateModel"].kind }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${namespace}/vmtemplates/${name}`, title: uid, "data-test-id": name, className: "co-resource-item__resource-name" }, name)));


/***/ })

}]);
//# sourceMappingURL=kubevirt-activity-276cb114a7f522f603fe.js.map