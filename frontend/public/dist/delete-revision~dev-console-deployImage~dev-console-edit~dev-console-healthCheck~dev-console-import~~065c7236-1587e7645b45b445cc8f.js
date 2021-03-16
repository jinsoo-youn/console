(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision~dev-console-deployImage~dev-console-edit~dev-console-healthCheck~dev-console-import~~065c7236"],{

/***/ "./packages/dev-console/src/components/health-checks/health-checks-probe-validation-utils.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/health-checks/health-checks-probe-validation-utils.ts ***!
  \***************************************************************************************************/
/*! exports provided: MAX_INT32, healthChecksValidationSchema, healthChecksProbesValidationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_INT32", function() { return MAX_INT32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthChecksValidationSchema", function() { return healthChecksValidationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthChecksProbesValidationSchema", function() { return healthChecksProbesValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const pathRegex = /^\/.*$/;
const MAX_INT32 = 2147483647;
const healthChecksValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    containerName: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
    showForm: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
    enabled: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
    modified: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"](),
    data: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('showForm', {
        is: true,
        then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
            periodSeconds: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .integer('Value must be an integer.')
                .min(1, 'Period must be greater than or equal to 1.')
                .max(MAX_INT32, 'Value is larger than maximum value allowed.'),
            initialDelaySeconds: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .integer('Value must be an integer.')
                .min(0, 'Initial Delay must be greater than or equal to 0.')
                .max(MAX_INT32, 'Value is larger than maximum value allowed.'),
            failureThreshold: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .integer('Value must be an integer.')
                .min(1, 'Failure Threshold must be greater than or equal to 1.'),
            timeoutSeconds: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .integer('Value must be an integer.')
                .min(1, 'Timeout must be greater than or equal to 1.')
                .max(MAX_INT32, 'Value is larger than maximum value allowed.'),
            successThreshold: yup__WEBPACK_IMPORTED_MODULE_0__["number"]()
                .integer('Value must be an integer.')
                .min(1, 'Success Threshold must be greater than or equal to 1.')
                .max(MAX_INT32, 'Value is larger than maximum value allowed.'),
            requestType: yup__WEBPACK_IMPORTED_MODULE_0__["string"](),
            httpGet: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('requestType', {
                is: 'httpGet',
                then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                    path: yup__WEBPACK_IMPORTED_MODULE_0__["string"]()
                        .matches(pathRegex, { message: 'Path must start with /.', excludeEmptyString: true }),
                    port: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Required'),
                }),
            }),
            tcpSocket: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('requestType', {
                is: 'tcpSocket',
                then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                    port: yup__WEBPACK_IMPORTED_MODULE_0__["number"]().required('Required'),
                }),
            }),
            exec: yup__WEBPACK_IMPORTED_MODULE_0__["object"]().when('requestType', {
                is: 'command',
                then: yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
                    command: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required')),
                }),
            }),
        }),
    }),
});
const healthChecksProbesValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    readinessProbe: healthChecksValidationSchema,
    livenessProbe: healthChecksValidationSchema,
    startupProbe: healthChecksValidationSchema,
});


/***/ }),

/***/ "./packages/dev-console/src/components/import/import-validation-utils.ts":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/import-validation-utils.ts ***!
  \*******************************************************************************/
/*! exports provided: validationSchema, detectGitType, detectGitRepoName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationSchema", function() { return validationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectGitType", function() { return detectGitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectGitRepoName", function() { return detectGitRepoName; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _validation_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-schema */ "./packages/dev-console/src/components/import/validation-schema.ts");
/* harmony import */ var _health_checks_health_checks_probe_validation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../health-checks/health-checks-probe-validation-utils */ "./packages/dev-console/src/components/health-checks/health-checks-probe-validation-utils.ts");





const validationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    name: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["nameValidationSchema"],
    project: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["projectNameValidationSchema"],
    application: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["applicationNameValidationSchema"],
    image: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["imageValidationSchema"],
    git: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["gitValidationSchema"],
    docker: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["dockerValidationSchema"],
    deployment: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["deploymentValidationSchema"],
    serverless: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["serverlessValidationSchema"],
    route: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["routeValidationSchema"],
    limits: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["limitsValidationSchema"],
    build: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["buildValidationSchema"],
    resources: _validation_schema__WEBPACK_IMPORTED_MODULE_3__["resourcesValidationSchema"],
    healthChecks: _health_checks_health_checks_probe_validation_utils__WEBPACK_IMPORTED_MODULE_4__["healthChecksProbesValidationSchema"],
});
const hasDomain = (url, domain) => {
    return url.includes(`https://${domain}/`) || url.includes(`@${domain}:`);
};
const detectGitType = (url) => {
    if (!_validation_schema__WEBPACK_IMPORTED_MODULE_3__["gitUrlRegex"].test(url)) {
        // Not a URL
        return _import_types__WEBPACK_IMPORTED_MODULE_2__["GitTypes"].invalid;
    }
    if (hasDomain(url, 'github.com')) {
        return _import_types__WEBPACK_IMPORTED_MODULE_2__["GitTypes"].github;
    }
    if (hasDomain(url, 'bitbucket.org')) {
        return _import_types__WEBPACK_IMPORTED_MODULE_2__["GitTypes"].bitbucket;
    }
    if (hasDomain(url, 'gitlab.com')) {
        return _import_types__WEBPACK_IMPORTED_MODULE_2__["GitTypes"].gitlab;
    }
    // Not a known URL
    return _import_types__WEBPACK_IMPORTED_MODULE_2__["GitTypes"].unsure;
};
const detectGitRepoName = (url) => {
    if (!_validation_schema__WEBPACK_IMPORTED_MODULE_3__["gitUrlRegex"].test(url)) {
        return undefined;
    }
    return lodash__WEBPACK_IMPORTED_MODULE_1__["kebabCase"](url.split('/').pop());
};


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
//# sourceMappingURL=delete-revision~dev-console-deployImage~dev-console-edit~dev-console-healthCheck~dev-console-import~~065c7236-1587e7645b45b445cc8f.js.map