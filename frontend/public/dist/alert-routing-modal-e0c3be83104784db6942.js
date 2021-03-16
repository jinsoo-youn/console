(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-routing-modal"],{

/***/ "./public/components/modals/alert-routing-modal.tsx":
/*!**********************************************************!*\
  !*** ./public/components/modals/alert-routing-modal.tsx ***!
  \**********************************************************/
/*! exports provided: AlertRoutingModal, createAlertRoutingModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertRoutingModal", function() { return AlertRoutingModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlertRoutingModal", function() { return createAlertRoutingModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _monitoring_alert_manager_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../monitoring/alert-manager-utils */ "./public/components/monitoring/alert-manager-utils.tsx");




const updateAlertRoutingProperty = (config, propertyName, newValue, oldValue) => {
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](newValue, oldValue)) {
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](newValue)) {
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["unset"](config, ['route', propertyName]); // unset so global/default value will be used
        }
        else {
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](config, ['route', propertyName], newValue);
        }
    }
};
const AlertRoutingModal = ({ config, secret, cancel, close, }) => {
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [inProgress, setInProgress] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const submit = (event) => {
        event.preventDefault();
        let groupByNew = event.target.elements['input-group-by'].value.replace(/\s+/g, '');
        const groupWaitNew = event.target.elements['input-group-wait'].value;
        const groupIntervalNew = event.target.elements['input-group-interval'].value;
        const repeatIntervalNew = event.target.elements['input-repeat-interval'].value;
        const groupByOld = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'group_by'], []);
        const groupWaitOld = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'group_wait'], '');
        const groupIntervalOld = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'group_interval'], '');
        const repeatIntervalOld = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'repeat_interval'], '');
        groupByNew = groupByNew === '' ? [] : groupByNew.split(',');
        updateAlertRoutingProperty(config, 'group_by', groupByNew, groupByOld);
        updateAlertRoutingProperty(config, 'group_wait', groupWaitNew, groupWaitOld);
        updateAlertRoutingProperty(config, 'group_interval', groupIntervalNew, groupIntervalOld);
        updateAlertRoutingProperty(config, 'repeat_interval', repeatIntervalNew, repeatIntervalOld);
        setInProgress(true);
        Object(_monitoring_alert_manager_utils__WEBPACK_IMPORTED_MODULE_3__["patchAlertmanagerConfig"])(secret, config).then(close, (err) => {
            setErrorMessage(err.message);
            setInProgress(false);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], { className: "modal-header" }, "Edit Routing Configuration"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "group-by", className: "control-label" }, "Group By")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-col col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-inline" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-input-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { placeholder: "cluster, alertname", type: "text", className: "pf-c-form-control", id: "input-group-by", "data-test-id": "input-group-by", defaultValue: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'group_by']), "aria-describedby": "input-group-by-help" }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "group-wait", className: "control-label" }, "Group Wait")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-col col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-inline" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-input-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { placeholder: "30s", type: "text", className: "pf-c-form-control", id: "input-group-wait", "data-test-id": "input-group-wait", defaultValue: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'group_wait']), "aria-describedby": "input-group-wait-help" }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "group-interval", className: "control-label" }, "Group Interval")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-col col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-inline" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-input-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { placeholder: "5m", type: "text", className: "pf-c-form-control", id: "input-group-interval", "data-test-id": "input-group-interval", defaultValue: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'group_interval']), "aria-describedby": "input-group-interval-help" }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "repeat-interval", className: "control-label" }, "Repeat Interval")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-col col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-inline" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-input-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { placeholder: "3h", type: "text", className: "pf-c-form-control", id: "input-repeat-interval", "data-test-id": "input-repeat-interval", defaultValue: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](config, ['route', 'repeat_interval']), "aria-describedby": "input-repeat-interval-help" })))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { inProgress: inProgress, errorMessage: errorMessage, cancel: cancel, submitText: "Save" })));
};
const createAlertRoutingModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(AlertRoutingModal);


/***/ })

}]);
//# sourceMappingURL=alert-routing-modal-e0c3be83104784db6942.js.map