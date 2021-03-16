(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configure-unschedulable-modal"],{

/***/ "./packages/console-app/src/components/nodes/modals/ConfigureUnschedulableModal.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/modals/ConfigureUnschedulableModal.tsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _k8s_requests_nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../k8s/requests/nodes */ "./packages/console-app/src/k8s/requests/nodes.ts");




const ConfigureUnschedulableModal = ({ handlePromise, resource, close, cancel, errorMessage, inProgress, }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handlePromise(Object(_k8s_requests_nodes__WEBPACK_IMPORTED_MODULE_3__["makeNodeUnschedulable"])(resource))
            .then(close)
            .catch((error) => {
            throw error;
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: handleSubmit, name: "form", className: "modal-content " },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, "Mark as Unschedulable"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, "Unschedulable nodes won't accept new pods. This is useful for scheduling maintenance or preparing to decommission a node."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { errorMessage: errorMessage, inProgress: inProgress, submitText: "Mark Unschedulable", cancel: cancel })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["withHandlePromise"])(ConfigureUnschedulableModal)));


/***/ })

}]);
//# sourceMappingURL=configure-unschedulable-modal-e74a24af32ef75d947b1.js.map