(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-deployImage"],{

/***/ "./packages/dev-console/src/components/QueryFocusApplication.tsx":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/QueryFocusApplication.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");






const QueryFocusApplication = ({ children, application, onSetApp, }) => {
    const originalApp = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](application);
    const desiredApplication = new URLSearchParams(window.location.search).get(_const__WEBPACK_IMPORTED_MODULE_4__["QUERY_PROPERTIES"].APPLICATION);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const originalApplication = originalApp.current;
        const sanitizedApp = Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_5__["sanitizeApplicationValue"])(desiredApplication);
        if (sanitizedApp && sanitizedApp !== originalApplication) {
            onSetApp(sanitizedApp);
        }
        return () => {
            if (application !== originalApplication) {
                onSetApp(originalApplication);
            }
        };
    }, [desiredApplication, onSetApp, originalApp, application]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children(desiredApplication));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    application: Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_3__["getActiveApplication"])(state),
}), {
    onSetApp: _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_2__["setActiveApplication"],
})(QueryFocusApplication));


/***/ }),

/***/ "./packages/dev-console/src/components/import/DeployImage.tsx":
/*!********************************************************************!*\
  !*** ./packages/dev-console/src/components/import/DeployImage.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _deployImage_submit_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deployImage-submit-utils */ "./packages/dev-console/src/components/import/deployImage-submit-utils.ts");
/* harmony import */ var _deployImage_validation_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deployImage-validation-utils */ "./packages/dev-console/src/components/import/deployImage-validation-utils.ts");
/* harmony import */ var _DeployImageForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DeployImageForm */ "./packages/dev-console/src/components/import/DeployImageForm.tsx");
/* harmony import */ var _health_checks_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../health-checks/health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-utils.ts");













const DeployImage = ({ namespace, projects, activeApplication, contextualSource, serviceBindingAvailable, }) => {
    const initialValues = {
        project: {
            name: namespace || '',
            displayName: '',
            description: '',
        },
        application: {
            initial: Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeApplicationValue"])(activeApplication),
            name: Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeApplicationValue"])(activeApplication),
            selectedKey: activeApplication,
        },
        name: '',
        searchTerm: '',
        registry: 'external',
        imageStream: {
            image: '',
            tag: '',
            namespace: namespace || '',
            grantAccess: true,
        },
        isi: {
            name: '',
            image: {},
            tag: '',
            status: { metadata: {}, status: '' },
            ports: [],
        },
        image: {
            name: '',
            image: {},
            tag: '',
            status: { metadata: {}, status: '' },
            ports: [],
        },
        isSearchingForImage: false,
        serverless: {
            scaling: {
                minpods: 0,
                maxpods: '',
                concurrencytarget: '',
                concurrencylimit: '',
            },
        },
        route: {
            disable: false,
            create: true,
            targetPort: '',
            unknownTargetPort: '',
            defaultUnknownPort: 8080,
            path: '',
            hostname: '',
            secure: false,
            tls: {
                termination: '',
                insecureEdgeTerminationPolicy: '',
                caCertificate: '',
                certificate: '',
                destinationCACertificate: '',
                privateKey: '',
            },
        },
        resources: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes,
        resourceTypesNotValid: contextualSource ? [_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService] : [],
        build: {
            env: [],
            triggers: {
                webhook: true,
                image: true,
                config: true,
            },
            strategy: 'Source',
        },
        deployment: {
            env: [],
            triggers: {
                image: true,
                config: true,
            },
            replicas: 1,
        },
        labels: {},
        env: {},
        limits: {
            cpu: {
                request: '',
                requestUnit: 'm',
                defaultRequestUnit: 'm',
                limit: '',
                limitUnit: 'm',
                defaultLimitUnit: 'm',
            },
            memory: {
                request: '',
                requestUnit: 'Mi',
                defaultRequestUnit: 'Mi',
                limit: '',
                limitUnit: 'Mi',
                defaultLimitUnit: 'Mi',
            },
        },
        healthChecks: _health_checks_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_12__["healthChecksProbeInitialData"],
    };
    const handleSubmit = (values, actions) => {
        const { project: { name: projectName }, } = values;
        const resourceActions = Object(_deployImage_submit_utils__WEBPACK_IMPORTED_MODULE_9__["createOrUpdateDeployImageResources"])(values, true).then(() => {
            const requests = Object(_deployImage_submit_utils__WEBPACK_IMPORTED_MODULE_9__["createOrUpdateDeployImageResources"])(values);
            return requests;
        });
        if (contextualSource) {
            resourceActions
                .then((resources) => Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_6__["doContextualBinding"])(resources, contextualSource, serviceBindingAvailable))
                .catch(() => { });
        }
        resourceActions
            .then(() => {
            actions.setSubmitting(false);
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].push(`/topology/ns/${projectName}`);
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["history"].goBack, validationSchema: _deployImage_validation_utils__WEBPACK_IMPORTED_MODULE_10__["deployValidationSchema"], render: (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DeployImageForm__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props, { projects: projects })) }));
};
const mapStateToProps = (state, ownProps) => {
    const activeApplication = ownProps.forApplication || Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_5__["getActiveApplication"])(state);
    return {
        activeApplication: activeApplication !== _console_shared__WEBPACK_IMPORTED_MODULE_3__["ALL_APPLICATIONS_KEY"] ? activeApplication : '',
        serviceBindingAvailable: state.FLAGS.get(_const__WEBPACK_IMPORTED_MODULE_7__["ALLOW_SERVICE_BINDING"]),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(DeployImage));


/***/ }),

/***/ "./packages/dev-console/src/components/import/DeployImageForm.tsx":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/DeployImageForm.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_form_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/form-utils */ "./packages/console-shared/src/components/form-utils/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _image_search_ImageSearchSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-search/ImageSearchSection */ "./packages/dev-console/src/components/import/image-search/ImageSearchSection.tsx");
/* harmony import */ var _app_AppSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/AppSection */ "./packages/dev-console/src/components/import/app/AppSection.tsx");
/* harmony import */ var _advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced/AdvancedSection */ "./packages/dev-console/src/components/import/advanced/AdvancedSection.tsx");
/* harmony import */ var _section_ResourceSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section/ResourceSection */ "./packages/dev-console/src/components/import/section/ResourceSection.tsx");








const DeployImageForm = ({ values, errors, handleSubmit, handleReset, status, isSubmitting, dirty, projects, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], { className: "co-deploy-image", "data-test-id": "deploy-image-form", onSubmit: handleSubmit },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_search_ImageSearchSection__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_AppSection__WEBPACK_IMPORTED_MODULE_5__["default"], { project: values.project, noProjectsAvailable: projects.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](projects.data) }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_ResourceSection__WEBPACK_IMPORTED_MODULE_7__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_6__["default"], { values: values }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_form_utils__WEBPACK_IMPORTED_MODULE_2__["FormFooter"], { handleReset: handleReset, errorMessage: status && status.submitError, isSubmitting: isSubmitting, submitLabel: "Create", sticky: true, disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel" })));
/* harmony default export */ __webpack_exports__["default"] = (DeployImageForm);


/***/ }),

/***/ "./packages/dev-console/src/components/import/DeployImagePage.tsx":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/DeployImagePage.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _QueryFocusApplication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../QueryFocusApplication */ "./packages/dev-console/src/components/QueryFocusApplication.tsx");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _DeployImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeployImage */ "./packages/dev-console/src/components/import/DeployImage.tsx");







const DeployImagePage = ({ match, location }) => {
    const namespace = match.params.ns;
    const params = new URLSearchParams(location.search);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["default"], { disabled: true, variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["NamespacedPageVariants"].light },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Deploy Image")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageHeading"], { title: "Deploy Image" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body", style: { paddingBottom: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QueryFocusApplication__WEBPACK_IMPORTED_MODULE_4__["default"], null, (desiredApplication) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: [{ kind: 'Project', prop: 'projects', isList: true }] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DeployImage__WEBPACK_IMPORTED_MODULE_6__["default"], { forApplication: desiredApplication, namespace: namespace, contextualSource: params.get(_const__WEBPACK_IMPORTED_MODULE_3__["QUERY_PROPERTIES"].CONTEXT_SOURCE) })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DeployImagePage);


/***/ }),

/***/ "./packages/dev-console/src/components/import/section/ResourceSection.scss":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/ResourceSection.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/section/ResourceSection.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/ResourceSection.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _FormSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _ResourceSection_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ResourceSection.scss */ "./packages/dev-console/src/components/import/section/ResourceSection.scss");
/* harmony import */ var _ResourceSection_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ResourceSection_scss__WEBPACK_IMPORTED_MODULE_10__);











const createHelpText = (k8sModel, helpText) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-resource-section__help-text" },
            k8sModel.apiGroup,
            "/",
            k8sModel.kind),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, helpText)));
};
const ResourceSection = ({ flags }) => {
    const [field] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('resourceTypesNotValid');
    const invalidTypes = field.value || [];
    const radioOptions = [];
    if (!invalidTypes.includes(_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes)) {
        radioOptions.push({
            label: _import_types__WEBPACK_IMPORTED_MODULE_8__["ReadableResourcesNames"][_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes],
            value: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].Kubernetes,
            children: createHelpText(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentModel"], `A ${_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentModel"].label} enables declarative updates for Pods and ReplicaSets.`),
        });
    }
    if (!invalidTypes.includes(_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].OpenShift)) {
        radioOptions.push({
            label: _import_types__WEBPACK_IMPORTED_MODULE_8__["ReadableResourcesNames"][_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].OpenShift],
            value: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].OpenShift,
            children: createHelpText(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentConfigModel"], `A ${_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["DeploymentConfigModel"].label} defines the template for a pod \
        and manages deploying new images or configuration changes`),
        });
    }
    const knativeServiceAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["useAccessReview"])({
        group: _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].apiGroup,
        resource: _console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"].plural,
        namespace: Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_7__["getActiveNamespace"])(),
        verb: 'create',
    });
    const canIncludeKnative = !invalidTypes.includes(_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService) &&
        flags[_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["FLAG_KNATIVE_SERVING_SERVICE"]] &&
        knativeServiceAccess;
    if (canIncludeKnative) {
        radioOptions.push({
            label: _import_types__WEBPACK_IMPORTED_MODULE_8__["ReadableResourcesNames"][_import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService],
            value: _import_types__WEBPACK_IMPORTED_MODULE_8__["Resources"].KnativeService,
            children: createHelpText(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["ServiceModel"], `A Knative Service enables scaling to zero when idle`),
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FormSection__WEBPACK_IMPORTED_MODULE_9__["default"], { title: "Resources", fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Select the resource type to generate"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["RadioGroupField"], { name: "resources", options: radioOptions })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_reducers_features__WEBPACK_IMPORTED_MODULE_2__["connectToFlags"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_4__["FLAG_KNATIVE_SERVING_SERVICE"])(ResourceSection));


/***/ })

}]);
//# sourceMappingURL=dev-console-deployImage-31bd97f2be6686e9fd5a.js.map