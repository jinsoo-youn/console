(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision"],{

/***/ "./packages/knative-plugin/src/components/revisions/DeleteRevisionModal.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/DeleteRevisionModal.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _traffic_splitting_TrafficSplittingFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../traffic-splitting/TrafficSplittingFields */ "./packages/knative-plugin/src/components/traffic-splitting/TrafficSplittingFields.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const */ "./packages/knative-plugin/src/const.ts");







const DeleteRevisionModal = (props) => {
    const { deleteRevision, handleSubmit, handleReset, isSubmitting, status, showTraffic } = props;
    const serviceName = deleteRevision.metadata.labels[_const__WEBPACK_IMPORTED_MODULE_6__["KNATIVE_SERVING_LABEL"]];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "modal-content", onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Delete ",
            _models__WEBPACK_IMPORTED_MODULE_4__["RevisionModel"].label,
            "?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "Are you sure you want to delete",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, deleteRevision.metadata.name),
                " from",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "co-break-word" }, serviceName),
                " in namespace",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, deleteRevision.metadata.namespace),
                "?"),
            showTraffic && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { isInline: true, className: "co-alert", variant: "default", title: "Update the traffic distribution among the remaining Revisions" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_traffic_splitting_TrafficSplittingFields__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { inProgress: isSubmitting, submitText: "Delete", cancel: handleReset, errorMessage: status.error, submitDanger: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteRevisionModal);


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/DeleteRevisionModalController.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/DeleteRevisionModalController.tsx ***!
  \********************************************************************************************/
/*! exports provided: deleteRevisionModalLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRevisionModalLauncher", function() { return deleteRevisionModalLauncher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../const */ "./packages/knative-plugin/src/const.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/traffic-splitting-utils */ "./packages/knative-plugin/src/utils/traffic-splitting-utils.ts");
/* harmony import */ var _DeleteRevisionModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteRevisionModal */ "./packages/knative-plugin/src/components/revisions/DeleteRevisionModal.tsx");











const Controller = ({ loaded, resources, revision, cancel, close }) => {
    var _a, _b;
    if (!loaded) {
        return null;
    }
    const service = resources.services.data.find((s) => {
        return revision.metadata.labels[_const__WEBPACK_IMPORTED_MODULE_7__["KNATIVE_SERVING_LABEL"]] === s.metadata.name;
    });
    const revisions = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_9__["transformTrafficSplittingData"])(service, resources).filter((r) => revision.metadata.uid !== r.metadata.uid);
    if (revisions.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "modal-content", onSubmit: close },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["ModalTitle"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["RedExclamationCircleIcon"], { className: "co-icon-space-r" }),
                "Unable to delete ",
                _models__WEBPACK_IMPORTED_MODULE_8__["RevisionModel"].label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "You cannot delete the last ",
                    _models__WEBPACK_IMPORTED_MODULE_8__["RevisionModel"].label,
                    " for the ",
                    _models__WEBPACK_IMPORTED_MODULE_8__["ServiceModel"].label,
                    ".")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"], { inProgress: false },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"], { className: "pf-c-form pf-c-form__actions--right pf-c-form__group--no-top-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: "secondary", "data-test-id": "modal-cancel-action", onClick: close }, "OK")))));
    }
    const revisionItems = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_9__["getRevisionItems"])(revisions);
    const traffic = (_b = (_a = service === null || service === void 0 ? void 0 : service.status) === null || _a === void 0 ? void 0 : _a.traffic) !== null && _b !== void 0 ? _b : [{ percent: 0, tag: '', revisionName: '' }];
    const deleteTraffic = traffic.find((t) => t.revisionName === revision.metadata.name);
    const initialValues = {
        trafficSplitting: traffic.reduce((acc, t) => {
            if (!t.revisionName || revisions.find((r) => r.metadata.name === t.revisionName)) {
                acc.push({
                    percent: t.percent,
                    tag: t.tag || '',
                    revisionName: t.revisionName || '',
                });
            }
            return acc;
        }, []),
    };
    if (initialValues.trafficSplitting.length === 0 && revisions.length > 0) {
        initialValues.trafficSplitting.push({
            percent: 0,
            tag: '',
            revisionName: revisions[0].metadata.name,
        });
    }
    const deleteRevision = (action) => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sKill"])(_models__WEBPACK_IMPORTED_MODULE_8__["RevisionModel"], revision)
            .then(() => {
            close();
            // If we are currently on the deleted revision's page, redirect to the list page
            const re = new RegExp(`/${revision.metadata.name}(/|$)`);
            if (re.test(window.location.pathname)) {
                _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourceListPathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["RevisionModel"], revision.metadata.namespace));
            }
        })
            .catch((err) => {
            action.setStatus({ error: err.message || 'An error occurred. Please try again' });
        });
    };
    const handleSubmit = (values, action) => {
        const obj = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_9__["constructObjForUpdate"])(values.trafficSplitting, service);
        if (!deleteTraffic || deleteTraffic.percent === 0) {
            deleteRevision(action);
            return;
        }
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["k8sUpdate"])(_models__WEBPACK_IMPORTED_MODULE_8__["ServiceModel"], obj)
            .then(() => {
            deleteRevision(action);
        })
            .catch((err) => {
            action.setStatus({ error: err.message || 'An error occurred. Please try again' });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: cancel, initialStatus: { error: '' } }, (modalProps) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DeleteRevisionModal__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, modalProps, { revisionItems: revisionItems, deleteRevision: revision, showTraffic: (deleteTraffic === null || deleteTraffic === void 0 ? void 0 : deleteTraffic.percent) > 0 })))));
};
const DeleteRevisionModalController = (props) => {
    const { metadata: { namespace }, } = props.revision;
    const resources = Object(_utils_traffic_splitting_utils__WEBPACK_IMPORTED_MODULE_9__["knativeServingResourcesTrafficSplitting"])(namespace);
    resources.push({
        isList: true,
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["ServiceModel"]),
        namespace,
        prop: 'services',
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Controller, Object.assign({}, props))));
};
const deleteRevisionModalLauncher = Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_6__["createModalLauncher"])(DeleteRevisionModalController);


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
//# sourceMappingURL=delete-revision-a008658e134381e3f27a.js.map