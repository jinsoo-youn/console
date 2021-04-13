(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-import"],{

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

/***/ "./packages/dev-console/src/components/import/ImportForm.tsx":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/components/import/ImportForm.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/reducers/ui */ "./public/reducers/ui.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _import_submit_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./import-submit-utils */ "./packages/dev-console/src/components/import/import-submit-utils.ts");
/* harmony import */ var _import_validation_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./import-validation-utils */ "./packages/dev-console/src/components/import/import-validation-utils.ts");
/* harmony import */ var _health_checks_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../health-checks/health-checks-probe-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-utils.ts");














const ImportForm = ({ namespace, imageStreams, importData, contextualSource, perspective, activeApplication, projects, serviceBindingAvailable, }) => {
    const initialValues = {
        name: '',
        project: {
            name: namespace || '',
            displayName: '',
            description: '',
        },
        application: {
            initial: Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_8__["sanitizeApplicationValue"])(activeApplication),
            name: Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_8__["sanitizeApplicationValue"])(activeApplication),
            selectedKey: activeApplication,
        },
        git: {
            url: '',
            type: '',
            ref: '',
            dir: '/',
            showGitType: false,
            secret: '',
            isUrlValidating: false,
        },
        docker: {
            dockerfilePath: 'Dockerfile',
            containerPort: 8080,
        },
        image: {
            selected: '',
            recommended: '',
            tag: '',
            tagObj: {},
            ports: [],
            isRecommending: false,
            couldNotRecommend: false,
        },
        route: {
            disable: false,
            create: true,
            targetPort: '',
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
        resources: _import_types__WEBPACK_IMPORTED_MODULE_10__["Resources"].Kubernetes,
        resourceTypesNotValid: contextualSource ? [_import_types__WEBPACK_IMPORTED_MODULE_10__["Resources"].KnativeService] : [],
        serverless: {
            scaling: {
                minpods: 0,
                maxpods: '',
                concurrencytarget: '',
                concurrencylimit: '',
            },
        },
        pipeline: {
            enabled: false,
        },
        build: {
            env: [],
            triggers: {
                webhook: true,
                image: true,
                config: true,
            },
            strategy: importData.buildStrategy || 'Source',
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
        healthChecks: _health_checks_health_checks_probe_utils__WEBPACK_IMPORTED_MODULE_13__["healthChecksProbeInitialData"],
    };
    const builderImages = imageStreams && imageStreams.loaded && Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["normalizeBuilderImages"])(imageStreams.data);
    const handleSubmit = (values, actions) => {
        const imageStream = builderImages && builderImages[values.image.selected].obj;
        const createNewProject = projects.loaded && lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](projects.data);
        const { project: { name: projectName }, } = values;
        const resourceActions = Object(_import_submit_utils__WEBPACK_IMPORTED_MODULE_11__["createOrUpdateResources"])(values, imageStream, createNewProject, true).then(() => Object(_import_submit_utils__WEBPACK_IMPORTED_MODULE_11__["createOrUpdateResources"])(values, imageStream));
        if (contextualSource) {
            resourceActions
                .then((resources) => Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_8__["doContextualBinding"])(resources, contextualSource, serviceBindingAvailable))
                .catch(() => { });
        }
        resourceActions
            .then(() => {
            actions.setSubmitting(false);
            Object(_import_submit_utils__WEBPACK_IMPORTED_MODULE_11__["handleRedirect"])(projectName, perspective);
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    const renderForm = (props) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], Object.assign({}, props, { projects: projects, builderImages: builderImages, loader: importData.loader })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].goBack, validationSchema: _import_validation_utils__WEBPACK_IMPORTED_MODULE_12__["validationSchema"], render: renderForm }));
};
const mapStateToProps = (state, ownProps) => {
    const perspective = Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActivePerspective"])(state);
    const activeApplication = ownProps.forApplication || Object(_console_internal_reducers_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveApplication"])(state);
    return {
        perspective,
        activeApplication: activeApplication !== _console_shared__WEBPACK_IMPORTED_MODULE_6__["ALL_APPLICATIONS_KEY"] ? activeApplication : '',
        serviceBindingAvailable: state.FLAGS.get(_const__WEBPACK_IMPORTED_MODULE_9__["ALLOW_SERVICE_BINDING"]),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(ImportForm));


/***/ }),

/***/ "./packages/dev-console/src/components/import/ImportPage.tsx":
/*!*******************************************************************!*\
  !*** ./packages/dev-console/src/components/import/ImportPage.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _QueryFocusApplication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../QueryFocusApplication */ "./packages/dev-console/src/components/QueryFocusApplication.tsx");
/* harmony import */ var _ImportForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImportForm */ "./packages/dev-console/src/components/import/ImportForm.tsx");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");









const ImportFlows = {
    git: {
        type: _import_types__WEBPACK_IMPORTED_MODULE_8__["ImportTypes"].git,
        title: 'Import from git',
        buildStrategy: 'Source',
        loader: () => Promise.all(/*! import() | git-import-form */[__webpack_require__.e(0), __webpack_require__.e("vendors~PipelineBuilderPage~catalog~delete-revision~dev-console-topology~git-import-form~metal3-bare~955c3309"), __webpack_require__.e("vendors~PipelineBuilderPage~delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-b~94769298"), __webpack_require__.e(1), __webpack_require__.e("vendors~dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("PipelineBuilderPage~delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-builder-e~ccd3ad45"), __webpack_require__.e("PipelineBuilderPage~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeli~6e8dac17"), __webpack_require__.e("dev-console-deployImage~dev-console-edit~dev-console-healthCheck~git-import-form~source-to-image-form"), __webpack_require__.e("dev-console-deployImage~dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("git-import-form~source-to-image-form"), __webpack_require__.e("git-import-form")]).then(__webpack_require__.bind(null, /*! ./GitImportForm */ "./packages/dev-console/src/components/import/GitImportForm.tsx")).then((m) => m.default),
    },
    docker: {
        type: _import_types__WEBPACK_IMPORTED_MODULE_8__["ImportTypes"].docker,
        title: 'Import from Dockerfile',
        buildStrategy: 'Docker',
        loader: () => Promise.all(/*! import() | git-import-form */[__webpack_require__.e(0), __webpack_require__.e("vendors~PipelineBuilderPage~catalog~delete-revision~dev-console-topology~git-import-form~metal3-bare~955c3309"), __webpack_require__.e("vendors~PipelineBuilderPage~delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-b~94769298"), __webpack_require__.e(1), __webpack_require__.e("vendors~dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("PipelineBuilderPage~delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-builder-e~ccd3ad45"), __webpack_require__.e("PipelineBuilderPage~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeli~6e8dac17"), __webpack_require__.e("dev-console-deployImage~dev-console-edit~dev-console-healthCheck~git-import-form~source-to-image-form"), __webpack_require__.e("dev-console-deployImage~dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("git-import-form~source-to-image-form"), __webpack_require__.e("git-import-form")]).then(__webpack_require__.bind(null, /*! ./GitImportForm */ "./packages/dev-console/src/components/import/GitImportForm.tsx")).then((m) => m.default),
    },
    s2i: {
        type: _import_types__WEBPACK_IMPORTED_MODULE_8__["ImportTypes"].s2i,
        title: 'Create Source-to-Image Application',
        buildStrategy: 'Source',
        loader: () => Promise.all(/*! import() | source-to-image-form */[__webpack_require__.e(0), __webpack_require__.e("vendors~PipelineBuilderPage~catalog~delete-revision~dev-console-topology~git-import-form~metal3-bare~955c3309"), __webpack_require__.e("vendors~PipelineBuilderPage~delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-b~94769298"), __webpack_require__.e(1), __webpack_require__.e("vendors~dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("PipelineBuilderPage~delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-builder-e~ccd3ad45"), __webpack_require__.e("PipelineBuilderPage~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-builder-page~pipeli~6e8dac17"), __webpack_require__.e("dev-console-deployImage~dev-console-edit~dev-console-healthCheck~git-import-form~source-to-image-form"), __webpack_require__.e("dev-console-deployImage~dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("dev-console-edit~git-import-form~source-to-image-form"), __webpack_require__.e("git-import-form~source-to-image-form"), __webpack_require__.e("source-to-image-form")]).then(__webpack_require__.bind(null, /*! ./SourceToImageForm */ "./packages/dev-console/src/components/import/SourceToImageForm.tsx")).then((m) => m.default),
    },
};
const ImportPage = ({ match, location }) => {
    const namespace = match.params.ns;
    const searchParams = new URLSearchParams(location.search);
    const imageStreamName = searchParams.get('imagestream');
    const imageStreamNamespace = searchParams.get('imagestream-ns');
    const preselectedNamespace = searchParams.get('preselected-ns');
    const importType = searchParams.get('importType');
    let importData;
    let resources;
    if (imageStreamName && imageStreamNamespace) {
        importData = ImportFlows.s2i;
        resources = [
            {
                kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ImageStreamModel"].kind,
                prop: 'imageStreams',
                isList: false,
                name: imageStreamName,
                namespace: imageStreamNamespace,
            },
            {
                kind: 'Project',
                prop: 'projects',
                isList: true,
            },
        ];
    }
    else if (importType === _import_types__WEBPACK_IMPORTED_MODULE_8__["ImportTypes"].docker) {
        importData = ImportFlows.docker;
        resources = [
            {
                kind: 'Project',
                prop: 'projects',
                isList: true,
            },
        ];
    }
    else {
        importData = ImportFlows.git;
        resources = [
            {
                kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_3__["ImageStreamModel"].kind,
                prop: 'imageStreams',
                isList: true,
                namespace: 'openshift',
            },
            {
                kind: 'Project',
                prop: 'projects',
                isList: true,
            },
        ];
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QueryFocusApplication__WEBPACK_IMPORTED_MODULE_6__["default"], null, (application) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["default"], { disabled: true, variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_5__["NamespacedPageVariants"].light },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, importData.title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageHeading"], { title: importData.title }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body", style: { paddingBottom: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImportForm__WEBPACK_IMPORTED_MODULE_7__["default"], { forApplication: application, contextualSource: searchParams.get(_const__WEBPACK_IMPORTED_MODULE_4__["QUERY_PROPERTIES"].CONTEXT_SOURCE), namespace: namespace || preselectedNamespace, importData: importData })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (ImportPage);


/***/ })

}]);
//# sourceMappingURL=dev-console-import-244b9ecec9f2ee313d09.js.map