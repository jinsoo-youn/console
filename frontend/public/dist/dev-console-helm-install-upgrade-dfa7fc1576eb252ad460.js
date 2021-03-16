(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-helm-install-upgrade"],{

/***/ "./packages/dev-console/src/components/helm/HelmInstallUpgradePage.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/HelmInstallUpgradePage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");
/* harmony import */ var _helm_validation_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helm-validation-utils */ "./packages/dev-console/src/components/helm/helm-validation-utils.ts");
/* harmony import */ var _helm_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _form_HelmInstallUpgradeForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/HelmInstallUpgradeForm */ "./packages/dev-console/src/components/helm/form/HelmInstallUpgradeForm.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const HelmInstallUpgradePage = ({ location, match, }) => {
    const searchParams = new URLSearchParams(location.search);
    const chartURL = decodeURIComponent(searchParams.get('chartURL'));
    const namespace = match.params.ns || searchParams.get('preselected-ns');
    const releaseName = match.params.releaseName || '';
    const helmChartName = searchParams.get('chartName');
    const helmActionOrigin = searchParams.get('actionOrigin');
    const [chartDataLoaded, setChartDataLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [chartName, setChartName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [chartHasValues, setChartHasValues] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const [YAMLData, setYAMLData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [activeChartVersion, setActiveChartVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const helmAction = chartURL !== 'null' ? _helm_types__WEBPACK_IMPORTED_MODULE_10__["HelmActionType"].Install : _helm_types__WEBPACK_IMPORTED_MODULE_10__["HelmActionType"].Upgrade;
    const config = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_helm_utils__WEBPACK_IMPORTED_MODULE_12__["getHelmActionConfig"])(helmAction, releaseName, namespace, helmActionOrigin, chartURL), [chartURL, helmAction, helmActionOrigin, namespace, releaseName]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let ignore = false;
        const fetchHelmRelease = () => __awaiter(void 0, void 0, void 0, function* () {
            let res;
            try {
                res = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_6__["coFetchJSON"])(config.helmReleaseApi);
            }
            catch (_a) { } // eslint-disable-line no-empty
            if (ignore)
                return;
            if (helmAction === _helm_types__WEBPACK_IMPORTED_MODULE_10__["HelmActionType"].Install) {
                const chartValues = Object(_helm_utils__WEBPACK_IMPORTED_MODULE_12__["getChartValuesYAML"])(res);
                setYAMLData(chartValues);
                setChartHasValues(!!chartValues);
            }
            else {
                const chart = res === null || res === void 0 ? void 0 : res.chart;
                const releaseValues = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](res === null || res === void 0 ? void 0 : res.config) ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeDump"])(res === null || res === void 0 ? void 0 : res.config) : '';
                const chartValues = Object(_helm_utils__WEBPACK_IMPORTED_MODULE_12__["getChartValuesYAML"])(chart);
                const values = releaseValues || chartValues;
                setYAMLData(values);
                setChartHasValues(!!values);
                setChartName(chart.metadata.name);
                setActiveChartVersion(chart.metadata.version);
            }
            setChartDataLoaded(true);
        });
        fetchHelmRelease();
        return () => {
            ignore = true;
        };
    }, [config.helmReleaseApi, helmAction]);
    const initialValues = {
        helmReleaseName: releaseName || helmChartName || '',
        helmChartURL: chartURL,
        chartName,
        chartValuesYAML: YAMLData,
        chartVersion: activeChartVersion,
    };
    const handleSubmit = (values, actions) => {
        actions.setStatus({ isSubmitting: true });
        const { helmReleaseName, helmChartURL, chartValuesYAML } = values;
        let valuesObj;
        if (chartValuesYAML) {
            try {
                valuesObj = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeLoad"])(chartValuesYAML);
            }
            catch (err) {
                actions.setStatus({ submitError: `Invalid YAML - ${err}` });
                return;
            }
        }
        const payload = Object.assign(Object.assign({ namespace, name: helmReleaseName }, (helmChartURL !== 'null' || undefined
            ? // eslint-disable-next-line @typescript-eslint/camelcase
                { chart_url: helmChartURL }
            : {})), (valuesObj ? { values: valuesObj } : {}));
        const isGoingToTopology = helmAction === _helm_types__WEBPACK_IMPORTED_MODULE_10__["HelmActionType"].Install || helmActionOrigin === _helm_types__WEBPACK_IMPORTED_MODULE_10__["HelmActionOrigins"].topology;
        config
            .fetch('/api/helm/release', payload, null, -1)
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            let redirect = config.redirectURL;
            if (isGoingToTopology && ((_a = res === null || res === void 0 ? void 0 : res.info) === null || _a === void 0 ? void 0 : _a.notes)) {
                const options = {
                    queryParams: { labelSelector: `name=${res.name},version=${res.version},owner=helm` },
                };
                let secret;
                try {
                    secret = yield Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_9__["k8sGet"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_8__["SecretModel"], null, res.namespace, options);
                }
                catch (err) {
                    console.error(err); // eslint-disable-line no-console
                }
                const secretId = (_d = (_c = (_b = secret === null || secret === void 0 ? void 0 : secret.items) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.uid;
                if (secretId) {
                    redirect = `${config.redirectURL}?selectId=${secretId}&selectTab=Release+Notes`;
                }
            }
            actions.setStatus({ isSubmitting: false });
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].push(redirect);
        }))
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message, isSubmitting: false });
        });
    };
    if (!chartDataLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["LoadingBox"], null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_13__["default"], { variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_13__["NamespacedPageVariants"].light, disabled: true, hideApplications: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, config.title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["PageHeading"], { title: config.title }, chartHasValues && config.subTitle),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["PageBody"], { flexLayout: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["history"].goBack, validationSchema: Object(_helm_validation_utils__WEBPACK_IMPORTED_MODULE_11__["getHelmActionValidationSchema"])(helmAction) }, (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_HelmInstallUpgradeForm__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, props, { chartHasValues: chartHasValues, submitLabel: helmAction })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmInstallUpgradePage);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/form/HelmChartVersionDropdown.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/form/HelmChartVersionDropdown.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _helm_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helm-utils */ "./packages/dev-console/src/components/helm/helm-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const HelmChartVersionDropdown = ({ chartVersion, chartName, }) => {
    const { setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormikContext"])();
    const [helmChartVersions, setHelmChartVersions] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    const [helmChartEntries, setHelmChartEntries] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let ignore = false;
        const fetchChartVersions = () => __awaiter(void 0, void 0, void 0, function* () {
            let json;
            try {
                const response = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_5__["coFetch"])('/api/helm/charts/index.yaml');
                const yaml = yield response.text();
                json = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeLoad"])(yaml);
            }
            catch (_a) {
                if (ignore)
                    return;
            }
            if (ignore)
                return;
            setHelmChartEntries(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](json, ['entries', chartName]));
            setHelmChartVersions(Object(_helm_utils__WEBPACK_IMPORTED_MODULE_7__["getChartVersions"])(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](json, ['entries', chartName])));
        });
        fetchChartVersions();
        return () => {
            ignore = true;
        };
    }, [chartName]);
    const onChartVersionChange = (value) => {
        if (chartVersion === value)
            return;
        const chartURL = Object(_helm_utils__WEBPACK_IMPORTED_MODULE_7__["getChartURL"])(helmChartEntries, value);
        setFieldValue('chartVersion', value);
        setFieldValue('helmChartURL', chartURL);
        Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_5__["coFetchJSON"])(`/api/helm/chart?url=${chartURL}`)
            .then((res) => {
            const chartValues = Object(_helm_utils__WEBPACK_IMPORTED_MODULE_7__["getChartValuesYAML"])(res);
            setFieldValue('chartValuesYAML', chartValues);
        })
            .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["GridItem"], { span: 6 },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["DropdownField"], { name: "chartVersion", label: "Chart Version", items: helmChartVersions, helpText: 'Select the version to upgrade to.', disabled: lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](helmChartVersions), title: chartVersion, onChange: onChartVersionChange, required: true, fullWidth: true })));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmChartVersionDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/form/HelmInstallUpgradeForm.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/form/HelmInstallUpgradeForm.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import/section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");
/* harmony import */ var _HelmChartVersionDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HelmChartVersionDropdown */ "./packages/dev-console/src/components/helm/form/HelmChartVersionDropdown.tsx");







const HelmInstallUpgradeForm = ({ chartHasValues, errors, handleSubmit, handleReset, status, isSubmitting, submitLabel, values, dirty, }) => {
    const { chartName, chartVersion } = values;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["FlexForm"], { onSubmit: handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_import_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], { fullWidth: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], { gutter: 'md' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], { span: submitLabel === _helm_types__WEBPACK_IMPORTED_MODULE_5__["HelmActionType"].Install ? 12 : 6 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, name: "helmReleaseName", label: "Release Name", helpText: "A unique name for the Helm Chart release.", required: true, isDisabled: !!chartVersion })),
                chartVersion && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HelmChartVersionDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], { chartName: chartName, chartVersion: chartVersion })))),
        chartHasValues && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["YAMLEditorField"], { name: "chartValuesYAML", onSave: handleSubmit }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["FormFooter"], { handleReset: handleReset, errorMessage: status && status.submitError, isSubmitting: (status === null || status === void 0 ? void 0 : status.isSubmitting) || isSubmitting, submitLabel: submitLabel, disableSubmit: (chartVersion && !dirty) || (status === null || status === void 0 ? void 0 : status.isSubmitting) || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel" })));
};
/* harmony default export */ __webpack_exports__["default"] = (HelmInstallUpgradeForm);


/***/ }),

/***/ "./packages/dev-console/src/components/helm/helm-validation-utils.ts":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/helm/helm-validation-utils.ts ***!
  \***************************************************************************/
/*! exports provided: getHelmActionValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmActionValidationSchema", function() { return getHelmActionValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_validation_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import/validation-schema */ "./packages/dev-console/src/components/import/validation-schema.ts");
/* harmony import */ var _helm_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helm-types */ "./packages/dev-console/src/components/helm/helm-types.ts");



const getHelmActionValidationSchema = (helmAction) => {
    switch (helmAction) {
        case _helm_types__WEBPACK_IMPORTED_MODULE_2__["HelmActionType"].Install:
            return yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                helmReleaseName: _import_validation_schema__WEBPACK_IMPORTED_MODULE_1__["nameValidationSchema"],
            });
        case _helm_types__WEBPACK_IMPORTED_MODULE_2__["HelmActionType"].Upgrade:
            return yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
                chartVersion: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
            });
        default:
            return null;
    }
};


/***/ }),

/***/ "./packages/dev-console/src/components/import/section/FormSection.scss":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/import/section/FormSection.tsx":
/*!****************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/section/FormSection.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormSection.scss */ "./packages/dev-console/src/components/import/section/FormSection.scss");
/* harmony import */ var _FormSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormSection_scss__WEBPACK_IMPORTED_MODULE_3__);




const flexStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 'var(--pf-global--spacer--md) 0',
};
const FormSection = ({ title, subTitle, fullWidth, children, flexLayout, extraMargin, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pf-c-form', {
        'co-m-pane__form': !fullWidth,
        'odc-form-section--extra-margin': extraMargin,
    }), style: flexLayout ? flexStyle : {} },
    title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "odc-form-section__heading" }, title),
    subTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false }, subTitle),
    children));
/* harmony default export */ __webpack_exports__["default"] = (FormSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/validation-schema.ts":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/validation-schema.ts ***!
  \*************************************************************************/
/*! exports provided: gitUrlRegex, nameValidationSchema, projectNameValidationSchema, applicationNameValidationSchema, deploymentValidationSchema, resourcesValidationSchema, serverlessValidationSchema, routeValidationSchema, limitsValidationSchema, imageValidationSchema, gitValidationSchema, dockerValidationSchema, buildValidationSchema, searchTermValidationSchema, isiValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gitUrlRegex", function() { return gitUrlRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameValidationSchema", function() { return nameValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectNameValidationSchema", function() { return projectNameValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationNameValidationSchema", function() { return applicationNameValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deploymentValidationSchema", function() { return deploymentValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourcesValidationSchema", function() { return resourcesValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverlessValidationSchema", function() { return serverlessValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeValidationSchema", function() { return routeValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitsValidationSchema", function() { return limitsValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageValidationSchema", function() { return imageValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gitValidationSchema", function() { return gitValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dockerValidationSchema", function() { return dockerValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildValidationSchema", function() { return buildValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTermValidationSchema", function() { return searchTermValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isiValidationSchema", function() { return isiValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/yup-validation-util */ "./packages/dev-console/src/utils/yup-validation-util.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");






const hostnameRegex = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/;
const pathRegex = /^\/.*$/;
const nameRegex = /^([a-z]([-a-z0-9]*[a-z0-9])?)*$/;
const projectNameRegex = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/;
const gitUrlRegex = /^((((ssh|git|https?:?):\/\/:?)(([^\s@]+@|[^@]:?)[-\w.]+(:\d\d+:?)?(\/[-\w.~/?[\]!$&'()*+,;=:@%]*:?)?:?))|([^\s@]+@[-\w.]+:[-\w.~/?[\]!$&'()*+,;=:@%]*?:?))$/;
const nameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
    .matches(nameRegex, {
    message: 'Name must consist of lower-case letters, numbers and hyphens. It must start with a letter and end with a letter or number.',
    excludeEmptyString: true,
})
    .max(253, 'Cannot be longer than 253 characters.')
    .required('Required');
const projectNameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(projectNameRegex, "Name must consist of lower case alphanumeric characters or '-' and must start and end with an alphanumeric character.")
        .required('Required'),
});
const applicationNameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    selectedKey: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .max(63, 'Cannot be longer than 63 characters.')
        .when('selectedKey', {
        is: _const__WEBPACK_IMPORTED_MODULE_4__["CREATE_APPLICATION_KEY"],
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    }),
});
const deploymentValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    replicas: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
        .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
        .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Replicas must be an Integer.'))
        .min(0, 'Replicas must be greater than or equal to 0.')
        .max(Number.MAX_SAFE_INTEGER, `Replicas must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`)
        .test({
        name: 'isEmpty',
        test: (value) => value !== undefined,
        message: 'This field cannot be empty.',
    }),
});
const resourcesValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
    .oneOf([_import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].OpenShift, _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].Kubernetes, _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].KnativeService])
    .required();
const serverlessValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('resources', {
    is: _import_types__WEBPACK_IMPORTED_MODULE_5__["Resources"].KnativeService,
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        scaling: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            minpods: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Min Pods must be an Integer.'))
                .min(0, 'Min Pods must be greater than or equal to 0.')
                .max(Number.MAX_SAFE_INTEGER, `Min Pods must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`),
            maxpods: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Max Pods must be an Integer.'))
                .min(1, 'Max Pods must be greater than or equal to 1.')
                .max(Number.MAX_SAFE_INTEGER, `Max Pods must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`)
                .test({
                test(limit) {
                    const { minpods } = this.parent;
                    return limit ? limit >= minpods : true;
                },
                message: 'Max Pods must be greater than or equal to Min Pods.',
            }),
            concurrencytarget: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Concurrency Target must be an Integer.'))
                .min(0, 'Concurrency Target must be greater than or equal to 0.')
                .max(Number.MAX_SAFE_INTEGER, `Concurrency Target must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`),
            concurrencylimit: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .transform((cv) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](cv) ? undefined : cv))
                .test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Concurrency Limit must be an Integer.'))
                .min(0, 'Concurrency Limit must be greater than or equal to 0.')
                .max(Number.MAX_SAFE_INTEGER, `Concurrency Limit must be lesser than or equal to ${Number.MAX_SAFE_INTEGER}.`),
        }),
    }),
});
const routeValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    secure: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
    tls: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('secure', {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
            termination: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Please select a termination type.'),
        }),
    }),
    hostname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(hostnameRegex, {
        message: 'Hostname must consist of lower-case letters, numbers, periods, and hyphens. It must start and end with a letter or number.',
        excludeEmptyString: true,
    })
        .max(253, 'Cannot be longer than 253 characters.'),
    path: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(pathRegex, { message: 'Path must start with /.', excludeEmptyString: true }),
    unknownTargetPort: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .matches(/^\d+$/, { message: 'Port must be an Integer.', excludeEmptyString: true }),
});
const limitsValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    cpu: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        request: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((request) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](request) ? undefined : request))
            .min(0, 'Request must be greater than or equal to 0.')
            .test({
            test(request) {
                const { requestUnit, limit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`) <=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`));
                }
                return true;
            },
            message: 'CPU request must be less than or equal to limit.',
        }),
        requestUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be millicores or cores.').ensure(),
        limitUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be millicores or cores.').ensure(),
        limit: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((limit) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](limit) ? undefined : limit))
            .min(0, 'Limit must be greater than or equal to 0.')
            .test({
            test(limit) {
                const { request, requestUnit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`) >=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`));
                }
                return true;
            },
            message: 'CPU limit must be greater than or equal to request.',
        }),
    }),
    memory: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        request: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((request) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](request) ? undefined : request))
            .min(0, 'Request must be greater than or equal to 0.')
            .test({
            test(request) {
                const { requestUnit, limit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`) <=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`));
                }
                return true;
            },
            message: 'Memory request must be less than or equal to limit.',
        }),
        requestUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be Mi or Gi.'),
        limit: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
            .transform((limit) => (lodash__WEBPACK_IMPORTED_MODULE_1__["isNaN"](limit) ? undefined : limit))
            .min(0, 'Limit must be greater than or equal to 0.')
            .test({
            test(limit) {
                const { request, requestUnit, limitUnit } = this.parent;
                if (limit !== undefined) {
                    return (Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${request}${requestUnit}`) <=
                        Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["convertToBaseValue"])(`${limit}${limitUnit}`));
                }
                return true;
            },
            message: 'Memory limit must be greater than or equal to request.',
        }),
        limitUnit: yup__WEBPACK_IMPORTED_MODULE_0__["string"]('Unit must be Mi or Gi.'),
    }),
});
const imageValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('build', {
    is: (build) => build.strategy !== 'Docker',
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        selected: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        tag: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    }),
});
const gitValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    url: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
        .max(2000, 'Please enter a URL that is less then 2000 characters.')
        .matches(gitUrlRegex, 'Invalid Git URL.')
        .required('Required'),
    type: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().when('showGitType', {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('We failed to detect the git type. Please choose a git type.'),
    }),
    showGitType: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
});
const dockerValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('build', {
    is: (build) => build.strategy === 'Docker',
    then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        containerPort: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().test(Object(_utils_yup_validation_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])('Container port should be an Integer')),
    }),
});
const buildValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    strategy: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
});
const searchTermValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required');
const isiValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    image: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().required('Required'),
    tag: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    status: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
});


/***/ }),

/***/ "./packages/dev-console/src/utils/yup-validation-util.ts":
/*!***************************************************************!*\
  !*** ./packages/dev-console/src/utils/yup-validation-util.ts ***!
  \***************************************************************/
/*! exports provided: isInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
const isInteger = (message) => ({
    test(value) {
        return value == null || Number.isInteger(value);
    },
    message,
});


/***/ })

}]);
//# sourceMappingURL=dev-console-helm-install-upgrade-dfa7fc1576eb252ad460.js.map