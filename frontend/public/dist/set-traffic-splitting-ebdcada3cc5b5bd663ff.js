(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["set-traffic-splitting"],{

/***/ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplitting.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/traffic-splitting/TrafficSplitting.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/traffic-splitting-utils */ "./packages/knative-plugin/src/utils/traffic-splitting-utils.ts");
/* harmony import */ var _TrafficSplittingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrafficSplittingModal */ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingModal.tsx");







const TrafficSplitting = ({ service, revisions, cancel, close, }) => {
    const traffic = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](service, ['status', 'traffic'], [{ percent: 0, tag: '', revisionName: '' }]);
    const revisionItems = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_5__["getRevisionItems"])(revisions);
    const initialValues = {
        trafficSplitting: traffic.map((t) => ({
            percent: t.percent,
            tag: t.tag || '',
            revisionName: t.revisionName || '',
        })),
    };
    const handleSubmit = (values, action) => {
        const obj = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_5__["constructObjForUpdate"])(values.trafficSplitting, service);
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sUpdate"])(_models__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"], obj)
            .then(() => {
            action.setSubmitting(false);
            action.setStatus({ error: '' });
            close();
        })
            .catch((err) => {
            action.setStatus({ error: err.message || 'An error occurred. Please try again' });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: cancel, initialStatus: { error: '' } }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TrafficSplittingModal__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, { cancel: cancel, revisionItems: revisionItems })))));
};
/* harmony default export */ __webpack_exports__["default"] = (TrafficSplitting);


/***/ }),

/***/ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingController.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingController.tsx ***!
  \*************************************************************************************************/
/*! exports provided: trafficModalLauncher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficModalLauncher", function() { return trafficModalLauncher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/traffic-splitting-utils */ "./packages/knative-plugin/src/utils/traffic-splitting-utils.ts");
/* harmony import */ var _TrafficSplitting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrafficSplitting */ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplitting.tsx");





const Controller = (props) => {
    const { loaded, obj, resources } = props;
    const revisions = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_3__["transformTrafficSplittingData"])(obj, resources);
    return loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TrafficSplitting__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { service: obj, revisions: revisions })) : null;
};
const TrafficSplittingController = (props) => {
    const { metadata: { namespace }, } = props.obj;
    const resources = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_3__["knativeServingResourcesTrafficSplitting"])(namespace);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Controller, Object.assign({}, props))));
};
const trafficModalLauncher = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(TrafficSplittingController);
/* harmony default export */ __webpack_exports__["default"] = (TrafficSplittingController);


/***/ }),

/***/ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingFields.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingFields.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const TrafficSplittingFields = ({ revisionItems, values }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["MultiColumnField"], { name: "trafficSplitting", addLabel: "Add Revision", headers: [{ name: 'Split', required: true }, 'Tag', { name: 'Revision', required: true }], emptyValues: { percent: '', tag: '', revisionName: '' }, disableDeleteRow: values.trafficSplitting.length === 1, spans: [2, 3, 7] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { name: "percent", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].number, style: { maxWidth: '100%' }, required: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { name: "tag", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DropdownField"], { name: "revisionName", items: revisionItems, title: "Select a revision", fullWidth: true, required: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (TrafficSplittingFields);


/***/ }),

/***/ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingModal.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingModal.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _TrafficSplittingFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrafficSplittingFields */ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingFields.tsx");



const TrafficSplittingModal = (props) => {
    const { handleSubmit, cancel, isSubmitting, status } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "modal-content", onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, "Set Traffic Distribution"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Set traffic distribution for the Revisions of the Knative Service"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TrafficSplittingFields__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_1__["ModalSubmitFooter"], { inProgress: isSubmitting, submitText: "Save", cancel: cancel, errorMessage: status.error })));
};
/* harmony default export */ __webpack_exports__["default"] = (TrafficSplittingModal);


/***/ }),

/***/ "./packages/knative-plugin/src/utils/traffic-splitting-utils.ts":
/*!**********************************************************************!*\
  !*** ./packages/knative-plugin/src/utils/traffic-splitting-utils.ts ***!
  \**********************************************************************/
/*! exports provided: getRevisionItems, constructObjForUpdate, transformTrafficSplittingData, knativeServingResourcesTrafficSplitting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevisionItems", function() { return getRevisionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructObjForUpdate", function() { return constructObjForUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformTrafficSplittingData", function() { return transformTrafficSplittingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knativeServingResourcesTrafficSplitting", function() { return knativeServingResourcesTrafficSplitting; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _topology_knative_topology_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../topology/knative-topology-utils */ "./packages/knative-plugin/src/topology/knative-topology-utils.ts");
/* harmony import */ var _get_knative_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-knative-resources */ "./packages/knative-plugin/src/utils/get-knative-resources.ts");



const getRevisionItems = (revisions) => {
    return revisions.reduce((acc, currValue) => {
        acc[currValue.metadata.name] = currValue.metadata.name;
        return acc;
    }, {});
};
const constructObjForUpdate = (traffic, service) => {
    const obj = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](service, 'status');
    return Object.assign(Object.assign({}, obj), { spec: Object.assign(Object.assign({}, obj.spec), { traffic }) });
};
const transformTrafficSplittingData = (obj, resources) => {
    const { revisions } = Object(_topology_knative_topology_utils__WEBPACK_IMPORTED_MODULE_1__["getKnativeServiceData"])(obj, resources);
    return revisions;
};
const knativeServingResourcesTrafficSplitting = (namespace) => [
    ...Object(_get_knative_resources__WEBPACK_IMPORTED_MODULE_2__["knativeServingResourcesRevision"])(namespace),
    ...Object(_get_knative_resources__WEBPACK_IMPORTED_MODULE_2__["knativeServingResourcesConfigurations"])(namespace),
];


/***/ })

}]);
//# sourceMappingURL=set-traffic-splitting-ebdcada3cc5b5bd663ff.js.map