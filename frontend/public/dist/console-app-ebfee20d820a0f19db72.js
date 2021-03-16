(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["console-app"],{

/***/ "./packages/console-app/src/components/dashboards-page/ClusterUpdateActivity.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/console-app/src/components/dashboards-page/ClusterUpdateActivity.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityItem */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityItem.tsx");


const getVersion = (cv) => cv && cv.status.history[0] ? cv.status.history[0].version : null;
const ClusterUpdateActivity = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ resource }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityItem__WEBPACK_IMPORTED_MODULE_1__["default"], null, `Updating cluster to ${getVersion(resource)}`), (prevProps, newProps) => getVersion(prevProps.resource) === getVersion(newProps.resource));
/* harmony default export */ __webpack_exports__["default"] = (ClusterUpdateActivity);


/***/ }),

/***/ "./packages/console-app/src/components/dashboards-page/ControlPlaneStatus.tsx":
/*!************************************************************************************!*\
  !*** ./packages/console-app/src/components/dashboards-page/ControlPlaneStatus.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ "./packages/console-app/src/components/dashboards-page/status.ts");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/StatusPopup */ "./packages/console-shared/src/components/dashboard/status-card/StatusPopup.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





const ControlPlanePopup = ({ responses }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    const titles = [t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_APISERVERS_1'), t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_CONTROLLER_1'), t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_SCHEDULERS_1'), t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_APIREQUEST_1')];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_DESCRIPTION_1'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_3__["StatusPopupSection"], { firstColumn: t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_COMPONENTS_1'), secondColumn: t('SINGLE:MSG_OVERVIEW_MAIN_POPOVERCONTROLPLANE_RESPONCERATE_1') }, responses.map(({ response, error }, index) => {
            var _a;
            const health = Object(_status__WEBPACK_IMPORTED_MODULE_2__["getControlPlaneComponentHealth"])(response, error);
            const icon = health.state === _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["HealthState"].LOADING ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-health" }) : _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["healthStateMapping"][health.state].icon;
            const value = health.message || ((_a = _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_1__["healthStateMapping"][health.state]) === null || _a === void 0 ? void 0 : _a.message);
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_3__["default"], { key: titles[index], value: value, icon: icon }, titles[index]));
        }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ControlPlanePopup);


/***/ }),

/***/ "./packages/console-app/src/components/dashboards-page/OperatorStatus.tsx":
/*!********************************************************************************!*\
  !*** ./packages/console-app/src/components/dashboards-page/OperatorStatus.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/resource-link */ "./public/components/utils/resource-link.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/StatusPopup */ "./packages/console-shared/src/components/dashboard/status-card/StatusPopup.tsx");





const ClusterOperatorStatusRow = ({ operatorStatus, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_4__["default"], { value: operatorStatus.status.title, icon: operatorStatus.status.icon },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_resource_link__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ClusterOperatorModel"]), name: operatorStatus.operators[0].metadata.name, hideIcon: true, className: "co-status-popup__title" })));
/* harmony default export */ __webpack_exports__["default"] = (ClusterOperatorStatusRow);


/***/ })

}]);
//# sourceMappingURL=console-app-ebfee20d820a0f19db72.js.map