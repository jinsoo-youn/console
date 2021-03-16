(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-helm-rollback"],{

/***/ "./packages/dev-console/src/components/helm/HelmReleaseRollbackPage.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/HelmReleaseRollbackPage.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");
/* harmony import */ var _helm_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _form_HelmReleaseRollbackForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/HelmReleaseRollbackForm */ "./packages/dev-console/src/components/helm/form/HelmReleaseRollbackForm.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const HelmReleaseRollbackPage = ({ match }) => {
    const { releaseName, ns: namespace } = match.params;
    const actionOrigin = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["getQueryArgument"])('actionOrigin');
    const [releaseHistory, setReleaseHistory] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const config = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_helm_utils__WEBPACK_IMPORTED_MODULE_7__["getHelmActionConfig"])(_helm_types__WEBPACK_IMPORTED_MODULE_6__["HelmActionType"].Rollback, releaseName, namespace, actionOrigin), [actionOrigin, namespace, releaseName]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let ignore = false;
        const fetchReleaseHistory = () => __awaiter(void 0, void 0, void 0, function* () {
            let res;
            try {
                res = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_4__["coFetchJSON"])(config.helmReleaseApi);
            }
            catch (_a) { } // eslint-disable-line no-empty
            if (ignore)
                return;
            (res === null || res === void 0 ? void 0 : res.length) > 0 && setReleaseHistory(res);
        });
        fetchReleaseHistory();
        return () => {
            ignore = true;
        };
    }, [config.helmReleaseApi]);
    const initialValues = {
        revision: -1,
    };
    const handleSubmit = (values, actions) => {
        actions.setStatus({ isSubmitting: true });
        const payload = {
            namespace,
            name: releaseName,
            version: values.revision,
        };
        config
            .fetch('/api/helm/release', payload, null, -1)
            .then(() => {
            actions.setStatus({ isSubmitting: false });
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].push(config.redirectURL);
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_8__["NamespacedPageVariants"].light, disabled: true, hideApplications: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, config.title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["PageHeading"], { title: config.title },
            "Select the version to rollback ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, releaseName),
            " to, from the table below:"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["PageBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack }, (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_HelmReleaseRollbackForm__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, { releaseHistory: releaseHistory }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseRollbackPage);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/form/HelmReleaseRollbackForm.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/form/HelmReleaseRollbackForm.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _rollback_RevisionListHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rollback/RevisionListHeader */ "./packages/dev-console/src/components/helm/form/rollback/RevisionListHeader.tsx");
/* harmony import */ var _rollback_RevisionListRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rollback/RevisionListRow */ "./packages/dev-console/src/components/helm/form/rollback/RevisionListRow.tsx");








const HelmReleaseRollbackForm = ({ errors, handleSubmit, handleReset, status, isSubmitting, dirty, releaseHistory, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "revision-list-field", label: "Revision History", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], { data: releaseHistory, defaultSortField: "version", defaultSortOrder: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__["SortByDirection"].desc, "aria-label": "CustomResources", Header: _rollback_RevisionListHeader__WEBPACK_IMPORTED_MODULE_6__["default"], Row: _rollback_RevisionListRow__WEBPACK_IMPORTED_MODULE_7__["default"], loaded: !!releaseHistory, virtualize: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["FormFooter"], { handleReset: handleReset, errorMessage: status === null || status === void 0 ? void 0 : status.submitError, isSubmitting: (status === null || status === void 0 ? void 0 : status.isSubmitting) || isSubmitting, submitLabel: "Rollback", disableSubmit: (status === null || status === void 0 ? void 0 : status.isSubmitting) || !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel", sticky: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmReleaseRollbackForm);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/form/rollback/RevisionListHeader.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/form/rollback/RevisionListHeader.tsx ***!
  \***************************************************************************************/
/*! exports provided: tableColumnClasses, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableColumnClasses", function() { return tableColumnClasses; });
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");


const tableColumnClasses = {
    input: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].columnClass,
    revision: 'col-lg-1 col-md-3 col-sm-3 col-xs-3',
    updated: 'col-lg-2 col-md-3 col-sm-5 col-xs-5',
    status: 'col-lg-1 col-md-2 hidden-sm hidden-xs',
    chartName: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    chartVersion: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    appVersion: 'col-lg-2 hidden-md hidden-sm hidden-xs',
    description: 'col-lg-2 hidden-md hidden-sm hidden-xs',
};
const RevisionListHeader = () => {
    return [
        {
            title: '',
            props: { className: tableColumnClasses.input },
        },
        {
            title: 'Revision',
            sortField: 'version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.revision },
        },
        {
            title: 'Updated',
            sortField: 'info.last_deployed',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.updated },
        },
        {
            title: 'Status',
            sortField: 'info.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.status },
        },
        {
            title: 'Chart Name',
            sortField: 'chart.metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.chartName },
        },
        {
            title: 'Chart Version',
            sortField: 'chart.metadata.version',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.chartVersion },
        },
        {
            title: 'App Version',
            sortField: 'chart.metadata.appVersion',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_0__["sortable"]],
            props: { className: tableColumnClasses.appVersion },
        },
        {
            title: 'Description',
            props: { className: tableColumnClasses.description },
        },
    ];
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionListHeader);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/form/rollback/RevisionListRow.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/form/rollback/RevisionListRow.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RevisionListHeader */ "./packages/dev-console/src/components/helm/form/rollback/RevisionListHeader.tsx");






const RevisionListRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: obj.revision, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].input },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["RadioButtonField"], { value: obj.version, name: "revision" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].revision }, obj.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].updated },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: obj.info.last_deployed })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Status"], { status: lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"](obj.info.status) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].chartName }, obj.chart.metadata.name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].chartVersion }, obj.chart.metadata.version),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].appVersion }, obj.chart.metadata.appVersion),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: _RevisionListHeader__WEBPACK_IMPORTED_MODULE_5__["tableColumnClasses"].description }, obj.info.description)));
};
/* harmony default export */ __webpack_exports__["default"] = (RevisionListRow);


/***/ })

}]);
//# sourceMappingURL=dev-console-helm-rollback-cedd7b507d15c1a680a5.js.map