(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-projectDetails"],{

/***/ "./packages/dev-console/src/components/project-access/ProjectAccess.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/ProjectAccess.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _project_access_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-access-form-utils */ "./packages/dev-console/src/components/project-access/project-access-form-utils.ts");
/* harmony import */ var _project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-access-form-submit-utils */ "./packages/dev-console/src/components/project-access/project-access-form-submit-utils.ts");
/* harmony import */ var _project_access_form_validation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-access-form-validation-utils */ "./packages/dev-console/src/components/project-access/project-access-form-validation-utils.ts");
/* harmony import */ var _ProjectAccessForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProjectAccessForm */ "./packages/dev-console/src/components/project-access/ProjectAccessForm.tsx");
/* harmony import */ var _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-access-form-utils-types */ "./packages/dev-console/src/components/project-access/project-access-form-utils-types.ts");












const ProjectAccess = ({ formName, namespace, roleBindings }) => {
    if (!roleBindings.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](roleBindings.loadError)) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["LoadingBox"], null);
    }
    const filteredRoleBindings = Object(_project_access_form_utils__WEBPACK_IMPORTED_MODULE_7__["filterRoleBindings"])(roleBindings, _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["Roles"]);
    const userRoleBindings = Object(_project_access_form_utils__WEBPACK_IMPORTED_MODULE_7__["getUserRoleBindings"])(filteredRoleBindings);
    const initialValues = {
        projectAccess: roleBindings.loaded && userRoleBindings,
    };
    const handleSubmit = (values, actions) => {
        let newRoles = Object(_project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__["getNewRoles"])(initialValues.projectAccess, values.projectAccess);
        let removeRoles = Object(_project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__["getRemovedRoles"])(initialValues.projectAccess, values.projectAccess);
        const updateRoles = Object(_project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__["getRolesWithNameChange"])(newRoles, removeRoles);
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](updateRoles)) {
            newRoles = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](newRoles, (o1) => !updateRoles.find((o2) => o1.roleBindingName === o2.roleBindingName));
            removeRoles = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](removeRoles, (o1) => !updateRoles.find((o2) => o1.roleBindingName === o2.roleBindingName));
        }
        const roleBindingRequests = [];
        _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["roleBinding"].metadata.namespace = namespace;
        actions.setSubmitting(true);
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](updateRoles)) {
            roleBindingRequests.push(...Object(_project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__["sendRoleBindingRequest"])(_project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["Verb"].Patch, updateRoles, _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["roleBinding"]));
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](removeRoles)) {
            roleBindingRequests.push(...Object(_project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__["sendRoleBindingRequest"])(_project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["Verb"].Remove, removeRoles, _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["roleBinding"]));
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](newRoles)) {
            roleBindingRequests.push(...Object(_project_access_form_submit_utils__WEBPACK_IMPORTED_MODULE_8__["sendRoleBindingRequest"])(_project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["Verb"].Create, newRoles, _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_11__["roleBinding"]));
        }
        Promise.all(roleBindingRequests)
            .then(() => {
            actions.setSubmitting(false);
            actions.resetForm({
                values: {
                    projectAccess: values.projectAccess,
                },
                status: { success: `Successfully updated the ${formName}.` },
            });
        })
            .catch((err) => {
            actions.setSubmitting(false);
            actions.setStatus({ submitError: err.message });
        });
    };
    const handleReset = (values, actions) => {
        actions.resetForm({ status: { success: null } });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["PageHeading"], null,
            "Project Access allows you to add or remove a user's access to the project. More advanced management of role-based access control appear in",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `/k8s/ns/${Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__["getActiveNamespace"])()}/${_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["RoleModel"].plural}` }, "Roles"),
            " and",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `/k8s/ns/${Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_5__["getActiveNamespace"])()}/${_console_internal_models__WEBPACK_IMPORTED_MODULE_6__["RoleBindingModel"].plural}` }, "Role Bindings"),
            ". For more information, see the",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: "https://docs.openshift.com/container-platform/4.1/authentication/using-rbac.html", text: "role-based access control documentation" }),
            ' ',
            "."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" }, roleBindings.loadError ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["StatusBox"], { loaded: roleBindings.loaded, loadError: roleBindings.loadError })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], { initialValues: initialValues, onSubmit: handleSubmit, onReset: handleReset, validationSchema: _project_access_form_validation_utils__WEBPACK_IMPORTED_MODULE_9__["validationSchema"], render: (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProjectAccessForm__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props)) })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectAccess);


/***/ }),

/***/ "./packages/dev-console/src/components/project-access/ProjectAccessForm.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/ProjectAccessForm.tsx ***!
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




var accessRoles;
(function (accessRoles) {
    accessRoles[""] = "Select a role";
    accessRoles["admin"] = "Admin";
    accessRoles["edit"] = "Edit";
    accessRoles["view"] = "View";
})(accessRoles || (accessRoles = {}));
const ProjectAccessForm = ({ handleSubmit, handleReset, isSubmitting, status, errors, dirty, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: handleSubmit },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["MultiColumnField"], { name: "projectAccess", addLabel: "Add Access", headers: ['Name', 'Role'], emptyValues: { user: '', role: '' }, toolTip: "Remove Access" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { name: "user", type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, placeholder: "Name" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["DropdownField"], { name: "role", items: accessRoles, fullWidth: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["FormFooter"], { handleReset: handleReset, isSubmitting: isSubmitting, errorMessage: status && status.submitError, successMessage: status && !dirty && status.success, disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), showAlert: dirty }))));
/* harmony default export */ __webpack_exports__["default"] = (ProjectAccessForm);


/***/ }),

/***/ "./packages/dev-console/src/components/project-access/ProjectAccessPage.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/ProjectAccessPage.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ProjectAccess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectAccess */ "./packages/dev-console/src/components/project-access/ProjectAccess.tsx");



const ProjectAccessPage = ({ customData }) => {
    const { activeNamespace } = customData;
    const props = {
        formName: 'project access',
        namespace: activeNamespace,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Firehose"], { resources: [
            {
                namespace: activeNamespace,
                kind: 'RoleBinding',
                prop: 'roleBindings',
                isList: true,
                optional: true,
            },
        ] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProjectAccess__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectAccessPage);


/***/ }),

/***/ "./packages/dev-console/src/components/project-access/project-access-form-submit-utils.ts":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/project-access-form-submit-utils.ts ***!
  \************************************************************************************************/
/*! exports provided: getRolesWithNameChange, sendK8sRequest, generateRoleBindingName, getNewRoles, getRemovedRoles, sendRoleBindingRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRolesWithNameChange", function() { return getRolesWithNameChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendK8sRequest", function() { return sendK8sRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRoleBindingName", function() { return generateRoleBindingName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewRoles", function() { return getNewRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRemovedRoles", function() { return getRemovedRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRoleBindingRequest", function() { return sendRoleBindingRequest; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _import_import_submit_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../import/import-submit-utils */ "./packages/dev-console/src/components/import/import-submit-utils.ts");
/* harmony import */ var _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-access-form-utils-types */ "./packages/dev-console/src/components/project-access/project-access-form-utils-types.ts");





const getRolesWithNameChange = (newRoles, removeRoles) => {
    const createRoles = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](newRoles, 'roleBindingName');
    const deleteRoles = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](removeRoles, (o1) => createRoles.find((o2) => o1.roleBindingName === o2.roleBindingName));
    const rolesWithNameChange = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](createRoles, (o1) => deleteRoles.find((o2) => o1.roleBindingName === o2.roleBindingName && o1.user !== o2.user && o1.role === o2.role));
    return rolesWithNameChange;
};
const sendK8sRequest = (verb, roleBinding) => {
    switch (verb) {
        case _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_4__["Verb"].Create:
            return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sCreate"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RoleBindingModel"], roleBinding);
        case _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_4__["Verb"].Remove:
            return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sKill"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RoleBindingModel"], roleBinding);
        case _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_4__["Verb"].Patch:
            return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sPatch"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_2__["RoleBindingModel"], { metadata: roleBinding.metadata }, [
                { op: 'replace', path: `/subjects/0`, value: roleBinding.subjects[0] },
            ]);
        default:
            return null;
    }
};
const generateRoleBindingName = (username, role) => {
    return `${username}-${role}-${Object(_import_import_submit_utils__WEBPACK_IMPORTED_MODULE_3__["generateSecret"])()}`;
};
const getNewRoles = (initialRoles, formValues) => {
    const newRoles = lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"](lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](formValues, (o1) => !initialRoles.find((o2) => o1.user === o2.user && o1.role === o2.role)), function (user) {
        return JSON.stringify([user.user, user.role]);
    });
    return newRoles;
};
const getRemovedRoles = (initialRoles, formValues) => {
    const removeRoles = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](initialRoles, (o1) => !formValues.find((o2) => o1.user === o2.user && o1.role === o2.role));
    return removeRoles;
};
const sendRoleBindingRequest = (verb, roles, roleBinding) => {
    const finalArray = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](roles, (user) => {
        const roleBindingName = verb === _project_access_form_utils_types__WEBPACK_IMPORTED_MODULE_4__["Verb"].Create ? generateRoleBindingName(user.user, user.role) : user.roleBindingName;
        roleBinding.subjects[0].name = user.user;
        roleBinding.roleRef.name = user.role;
        roleBinding.metadata.name = roleBindingName;
        finalArray.push(sendK8sRequest(verb, roleBinding));
    });
    return finalArray;
};


/***/ }),

/***/ "./packages/dev-console/src/components/project-access/project-access-form-utils-types.ts":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/project-access-form-utils-types.ts ***!
  \***********************************************************************************************/
/*! exports provided: Verb, Roles, roleBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verb", function() { return Verb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleBinding", function() { return roleBinding; });
var Verb;
(function (Verb) {
    Verb["Create"] = "Create";
    Verb["Remove"] = "Remove";
    Verb["Patch"] = "Patch";
})(Verb || (Verb = {}));
var Roles;
(function (Roles) {
    Roles["view"] = "view";
    Roles["admin"] = "admin";
    Roles["edit"] = "edit";
})(Roles || (Roles = {}));
const roleBinding = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBinding',
    metadata: {
        name: '',
        namespace: '',
    },
    roleRef: {
        apiGroup: 'rbac.authorization.k8s.io',
        kind: 'ClusterRole',
        name: '',
    },
    subjects: [
        {
            apiGroup: 'rbac.authorization.k8s.io',
            kind: 'User',
            name: '',
        },
    ],
};


/***/ }),

/***/ "./packages/dev-console/src/components/project-access/project-access-form-utils.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/project-access-form-utils.ts ***!
  \*****************************************************************************************/
/*! exports provided: filterRoleBindings, getUserRoleBindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRoleBindings", function() { return filterRoleBindings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRoleBindings", function() { return getUserRoleBindings; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterRoleBindings = (roleBindings, roles) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](roleBindings.data, (user) => lodash__WEBPACK_IMPORTED_MODULE_0__["keys"](roles).includes(user.roleRef.name));
};
const getUserRoleBindings = (roleBindings) => {
    let userRoleBindings = [];
    roleBindings.map((user) => (userRoleBindings = [
        ...userRoleBindings,
        ...[
            {
                roleBindingName: user.metadata.name,
                user: user.subjects[0].name,
                role: user.roleRef.name,
            },
        ],
    ]));
    return userRoleBindings;
};


/***/ }),

/***/ "./packages/dev-console/src/components/project-access/project-access-form-validation-utils.ts":
/*!****************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/project-access/project-access-form-validation-utils.ts ***!
  \****************************************************************************************************/
/*! exports provided: validationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationSchema", function() { return validationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const validationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
    projectAccess: yup__WEBPACK_IMPORTED_MODULE_0__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
        user: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
        role: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Required'),
    })),
});


/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.scss":
/*!***************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/projects/ProjectListPage.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/ProjectListPage.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectListPage.scss */ "./packages/dev-console/src/components/projects/ProjectListPage.scss");
/* harmony import */ var _ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProjectListPage_scss__WEBPACK_IMPORTED_MODULE_4__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





const ProjectListPage = (_a) => {
    var { badge, title, children, listComponent } = _a, listPageProps = __rest(_a, ["badge", "title", "children", "listComponent"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-project-list-page" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { title: title, badge: badge }, children),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", { className: "odc-project-list-page__section-border" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ListPage"], Object.assign({}, listPageProps, { showTitle: false, kind: "Project", ListComponent: listComponent || _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_2__["ProjectsTable"], canCreate: false, filterLabel: "by name or display name", textFilter: "project-name" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectListPage);


/***/ }),

/***/ "./packages/dev-console/src/components/projects/details/ProjectDetailsPage.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/projects/details/ProjectDetailsPage.tsx ***!
  \*************************************************************************************/
/*! exports provided: PROJECT_DETAILS_ALL_NS_PAGE_URI, PageContents, ProjectDetailsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_DETAILS_ALL_NS_PAGE_URI", function() { return PROJECT_DETAILS_ALL_NS_PAGE_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContents", function() { return PageContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPage", function() { return ProjectDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/namespace */ "./public/components/namespace.jsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_dashboard_project_dashboard_project_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/dashboard/project-dashboard/project-dashboard */ "./public/components/dashboard/project-dashboard/project-dashboard.tsx");
/* harmony import */ var _console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _NamespacedPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../NamespacedPage */ "./packages/dev-console/src/components/NamespacedPage.tsx");
/* harmony import */ var _project_access_ProjectAccessPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../project-access/ProjectAccessPage */ "./packages/dev-console/src/components/project-access/ProjectAccessPage.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ProjectListPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ProjectListPage */ "./packages/dev-console/src/components/projects/ProjectListPage.tsx");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};












const PROJECT_DETAILS_ALL_NS_PAGE_URI = '/project-details/all-namespaces';
const handleNamespaceChange = (newNamespace) => {
    if (newNamespace === _console_shared__WEBPACK_IMPORTED_MODULE_2__["ALL_NAMESPACES_KEY"]) {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(PROJECT_DETAILS_ALL_NS_PAGE_URI);
    }
};
const PageContents = (_a) => {
    var { noProjectsAvailable, match } = _a, props = __rest(_a, ["noProjectsAvailable", "match"]);
    const activeNamespace = match.params.ns;
    const canListRoleBindings = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])({
        group: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["RoleBindingModel"].apiGroup,
        resource: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["RoleBindingModel"].plural,
        verb: 'list',
        namespace: activeNamespace,
    });
    const canCreateRoleBindings = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["useAccessReview"])({
        group: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["RoleBindingModel"].apiGroup,
        resource: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["RoleBindingModel"].plural,
        verb: 'create',
        namespace: activeNamespace,
    });
    return !noProjectsAvailable && activeNamespace ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { match: match, breadcrumbsFor: () => [], name: activeNamespace, kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ProjectModel"].kind, kindObj: _console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ProjectModel"], menuActions: _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_3__["projectMenuActions"], customData: { activeNamespace, hideHeading: true }, pages: [
            {
                href: '',
                name: 'Overview',
                component: _console_internal_components_dashboard_project_dashboard_project_dashboard__WEBPACK_IMPORTED_MODULE_6__["ProjectDashboard"],
            },
            {
                href: 'details',
                name: 'Details',
                component: _console_internal_components_namespace__WEBPACK_IMPORTED_MODULE_3__["NamespaceDetails"],
            },
            canListRoleBindings &&
                canCreateRoleBindings && {
                href: 'access',
                name: 'Project Access',
                component: _project_access_ProjectAccessPage__WEBPACK_IMPORTED_MODULE_9__["default"],
            },
        ] }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ProjectListPage__WEBPACK_IMPORTED_MODULE_11__["default"], { title: "Project Details" }, "Select a project to view its details"));
};
const PageContentsWithStartGuide = Object(_console_internal_components_start_guide__WEBPACK_IMPORTED_MODULE_7__["withStartGuide"])(PageContents);
const ProjectDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_10__["Helmet"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Project Details")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NamespacedPage__WEBPACK_IMPORTED_MODULE_8__["default"], { hideApplications: true, variant: _NamespacedPage__WEBPACK_IMPORTED_MODULE_8__["NamespacedPageVariants"].light, onNamespaceChange: handleNamespaceChange },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PageContentsWithStartGuide, Object.assign({}, props)))));
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailsPage);


/***/ })

}]);
//# sourceMappingURL=dev-console-projectDetails-9d6ddde64c76cbdb1be1.js.map