(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-edit"],{

/***/ "./packages/dev-console/src/components/edit-application/EditApplication.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/edit-application/EditApplication.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _import_import_submit_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import/import-submit-utils */ "./packages/dev-console/src/components/import/import-submit-utils.ts");
/* harmony import */ var _import_import_validation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import/import-validation-utils */ "./packages/dev-console/src/components/import/import-validation-utils.ts");
/* harmony import */ var _import_deployImage_submit_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../import/deployImage-submit-utils */ "./packages/dev-console/src/components/import/deployImage-submit-utils.ts");
/* harmony import */ var _import_deployImage_validation_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../import/deployImage-validation-utils */ "./packages/dev-console/src/components/import/deployImage-validation-utils.ts");
/* harmony import */ var _EditApplicationForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditApplicationForm */ "./packages/dev-console/src/components/edit-application/EditApplicationForm.tsx");
/* harmony import */ var _edit_application_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-application-utils */ "./packages/dev-console/src/components/edit-application/edit-application-utils.ts");













const EditApplication = ({ perspective, namespace, appName, resources: appResources, }) => {
    const imageStreamsData = appResources.imageStreams && appResources.imageStreams.loaded
        ? appResources.imageStreams.data
        : [];
    const builderImages = !lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](imageStreamsData)
        ? Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeBuilderImages"])(imageStreamsData)
        : null;
    const initialValues = Object(_edit_application_utils__WEBPACK_IMPORTED_MODULE_12__["getInitialValues"])(appResources, appName, namespace);
    const pageHeading = Object(_edit_application_utils__WEBPACK_IMPORTED_MODULE_12__["getPageHeading"])(lodash__WEBPACK_IMPORTED_MODULE_2__["get"](initialValues, 'build.strategy', ''));
    const updateResources = (values) => {
        if (values.build.strategy) {
            const imageStream = values.image.selected && builderImages ? builderImages[values.image.selected].obj : null;
            return Object(_import_import_submit_utils__WEBPACK_IMPORTED_MODULE_7__["createOrUpdateResources"])(values, imageStream, false, false, 'update', appResources);
        }
        return Object(_import_deployImage_submit_utils__WEBPACK_IMPORTED_MODULE_9__["createOrUpdateDeployImageResources"])(values, false, 'update', appResources);
    };
    const handleSubmit = (values, actions) => {
        updateResources(values)
            .then(() => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: '' });
            Object(_import_import_submit_utils__WEBPACK_IMPORTED_MODULE_7__["handleRedirect"])(namespace, perspective);
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    const renderForm = (props) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EditApplicationForm__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props, { appResources: appResources, enableReinitialize: "true", createFlowType: pageHeading, builderImages: builderImages })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack, validationSchema: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](initialValues, 'build.strategy') ? _import_import_validation_utils__WEBPACK_IMPORTED_MODULE_8__["validationSchema"] : _import_deployImage_validation_utils__WEBPACK_IMPORTED_MODULE_10__["deployValidationSchema"], render: renderForm }));
};
const mapStateToProps = (state) => {
    const perspective = Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActivePerspective"])(state);
    return {
        perspective,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(EditApplication));


/***/ }),

/***/ "./packages/dev-console/src/components/edit-application/EditApplicationForm.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/edit-application/EditApplicationForm.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _import_git_GitSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../import/git/GitSection */ "./packages/dev-console/src/components/import/git/GitSection.tsx");
/* harmony import */ var _import_builder_BuilderSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../import/builder/BuilderSection */ "./packages/dev-console/src/components/import/builder/BuilderSection.tsx");
/* harmony import */ var _import_git_DockerSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../import/git/DockerSection */ "./packages/dev-console/src/components/import/git/DockerSection.tsx");
/* harmony import */ var _import_advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import/advanced/AdvancedSection */ "./packages/dev-console/src/components/import/advanced/AdvancedSection.tsx");
/* harmony import */ var _import_app_AppSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../import/app/AppSection */ "./packages/dev-console/src/components/import/app/AppSection.tsx");
/* harmony import */ var _import_image_search_ImageSearchSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../import/image-search/ImageSearchSection */ "./packages/dev-console/src/components/import/image-search/ImageSearchSection.tsx");
/* harmony import */ var _edit_application_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-application-utils */ "./packages/dev-console/src/components/edit-application/edit-application-utils.ts");












const EditApplicationForm = ({ handleSubmit, handleReset, values, createFlowType, builderImages, dirty, errors, status, isSubmitting, appResources, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { title: createFlowType, style: { padding: '0px' } }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: handleSubmit },
        createFlowType !== _edit_application_utils__WEBPACK_IMPORTED_MODULE_11__["CreateApplicationFlow"].Container && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_git_GitSection__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        createFlowType === _edit_application_utils__WEBPACK_IMPORTED_MODULE_11__["CreateApplicationFlow"].Git && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_builder_BuilderSection__WEBPACK_IMPORTED_MODULE_6__["default"], { image: values.image, builderImages: builderImages })),
        createFlowType === _edit_application_utils__WEBPACK_IMPORTED_MODULE_11__["CreateApplicationFlow"].Dockerfile && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_git_DockerSection__WEBPACK_IMPORTED_MODULE_7__["default"], { buildStrategy: values.build.strategy })),
        createFlowType === _edit_application_utils__WEBPACK_IMPORTED_MODULE_11__["CreateApplicationFlow"].Container && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_image_search_ImageSearchSection__WEBPACK_IMPORTED_MODULE_10__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_app_AppSection__WEBPACK_IMPORTED_MODULE_9__["default"], { project: values.project }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_8__["default"], { values: values, appResources: appResources }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["FormFooter"], { handleReset: handleReset, errorMessage: status && status.submitError, isSubmitting: isSubmitting, submitLabel: "Save", disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel", sticky: true }))));
/* harmony default export */ __webpack_exports__["default"] = (EditApplicationForm);


/***/ }),

/***/ "./packages/dev-console/src/components/edit-application/EditApplicationPage.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/edit-application/EditApplicationPage.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _EditApplication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditApplication */ "./packages/dev-console/src/components/edit-application/EditApplication.tsx");








const INSTANCE_LABEL = 'app.kubernetes.io/instance';
const EditApplicationComponentLoader = (props) => {
    const { loaded } = props;
    return loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EditApplication__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["LoadingBox"], null);
};
const EditApplicationPage = ({ match, location }) => {
    const namespace = match.params.ns;
    const queryParams = new URLSearchParams(location.search);
    const editAppResourceKind = queryParams.get('kind');
    const appName = queryParams.get('name');
    const appResources = [
        {
            kind: 'Service',
            prop: 'service',
            name: appName,
            namespace,
            optional: true,
        },
        {
            kind: 'BuildConfig',
            prop: 'buildConfig',
            name: appName,
            namespace,
            optional: true,
        },
        {
            kind: 'Route',
            prop: 'route',
            name: appName,
            namespace,
            optional: true,
        },
        {
            kind: 'ImageStream',
            prop: 'imageStream',
            isList: true,
            namespace,
            selector: {
                matchLabels: { [INSTANCE_LABEL]: appName },
            },
            optional: true,
        },
        {
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_2__["ImageStreamModel"].kind,
            prop: 'imageStreams',
            isList: true,
            namespace: 'openshift',
            optional: true,
        },
    ];
    let kind = editAppResourceKind;
    if (kind === _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].kind) {
        kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"]);
    }
    appResources.push({
        kind,
        prop: 'editAppResource',
        name: appName,
        namespace,
        optional: true,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_6__["default"], { disabled: true, variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_6__["NamespacedPageVariants"].light },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Edit")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: appResources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EditApplicationComponentLoader, { namespace: namespace, appName: appName })))));
};
/* harmony default export */ __webpack_exports__["default"] = (EditApplicationPage);


/***/ }),

/***/ "./packages/dev-console/src/components/import/git/DockerSection.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/git/DockerSection.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");




const DockerSection = ({ buildStrategy }) => buildStrategy === 'Docker' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Dockerfile" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].text, name: "docker.dockerfilePath", label: "Dockerfile Path", helpText: "Allows the builds to use a different path to locate your Dockerfile, relative to the Context Dir field." }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInputTypes"].number, name: "docker.containerPort", label: "Container Port", helpText: "Port number the container exposes.", style: { maxWidth: '100%' } })));
/* harmony default export */ __webpack_exports__["default"] = (DockerSection);


/***/ })

}]);
//# sourceMappingURL=dev-console-edit-c16e59987463a5c3575d.js.map