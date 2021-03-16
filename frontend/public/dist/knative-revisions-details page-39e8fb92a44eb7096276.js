(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knative-revisions-details page"],{

/***/ "./packages/knative-plugin/src/actions/delete-revision.ts":
/*!****************************************************************!*\
  !*** ./packages/knative-plugin/src/actions/delete-revision.ts ***!
  \****************************************************************/
/*! exports provided: deleteRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRevision", function() { return deleteRevision; });
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modals */ "./packages/knative-plugin/src/components/modals/index.ts");

const deleteRevision = (model, revision) => {
    return {
        label: `Delete ${model.label}`,
        callback: () => Object(_components_modals__WEBPACK_IMPORTED_MODULE_0__["deleteRevisionModal"])({
            revision,
        }),
        accessReview: {
            group: model.apiGroup,
            resource: model.plural,
            name: revision.metadata.name,
            namespace: revision.metadata.namespace,
            verb: 'delete',
        },
    };
};


/***/ }),

/***/ "./packages/knative-plugin/src/actions/getRevisionActions.ts":
/*!*******************************************************************!*\
  !*** ./packages/knative-plugin/src/actions/getRevisionActions.ts ***!
  \*******************************************************************/
/*! exports provided: getRevisionActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevisionActions", function() { return getRevisionActions; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");
/* harmony import */ var _delete_revision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-revision */ "./packages/knative-plugin/src/actions/delete-revision.ts");



const getRevisionActions = () => {
    let deleteFound = false;
    const commonActions = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].factory.common.map((action) => {
        if (action.name === 'Delete') {
            deleteFound = true;
            return _delete_revision__WEBPACK_IMPORTED_MODULE_2__["deleteRevision"];
        }
        return action;
    });
    if (!deleteFound) {
        commonActions.push(_delete_revision__WEBPACK_IMPORTED_MODULE_2__["deleteRevision"]);
    }
    return [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_1__["RevisionModel"]), ...commonActions];
};


/***/ }),

/***/ "./packages/knative-plugin/src/components/revisions/RevisionDetailsPage.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/knative-plugin/src/components/revisions/RevisionDetailsPage.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_default_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/default-resource */ "./public/components/default-resource.jsx");
/* harmony import */ var _actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/getRevisionActions */ "./packages/knative-plugin/src/actions/getRevisionActions.ts");





const RevisionsPage = (props) => {
    const pages = [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].details(Object(_console_internal_components_default_resource__WEBPACK_IMPORTED_MODULE_3__["DetailsForKind"])(props.kind)), _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["navFactory"].editYaml()];
    const menuActionsCreator = (kindObj, obj) => Object(_actions_getRevisionActions__WEBPACK_IMPORTED_MODULE_4__["getRevisionActions"])().map((action) => action(kindObj, obj));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["DetailsPage"], Object.assign({}, props, { pages: pages, menuActions: menuActionsCreator }));
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionsPage);


/***/ })

}]);
//# sourceMappingURL=knative-revisions-details page-39e8fb92a44eb7096276.js.map