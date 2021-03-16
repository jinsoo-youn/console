(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["git-import-form"],{

/***/ "./packages/dev-console/src/components/import/GitImportForm.tsx":
/*!**********************************************************************!*\
  !*** ./packages/dev-console/src/components/import/GitImportForm.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/form-utils */ "./packages/console-shared/src/components/form-utils/index.ts");
/* harmony import */ var _git_GitSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./git/GitSection */ "./packages/dev-console/src/components/import/git/GitSection.tsx");
/* harmony import */ var _builder_BuilderSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./builder/BuilderSection */ "./packages/dev-console/src/components/import/builder/BuilderSection.tsx");
/* harmony import */ var _app_AppSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/AppSection */ "./packages/dev-console/src/components/import/app/AppSection.tsx");
/* harmony import */ var _advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advanced/AdvancedSection */ "./packages/dev-console/src/components/import/advanced/AdvancedSection.tsx");
/* harmony import */ var _git_DockerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./git/DockerSection */ "./packages/dev-console/src/components/import/git/DockerSection.tsx");
/* harmony import */ var _pipeline_PipelineSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipeline/PipelineSection */ "./packages/dev-console/src/components/import/pipeline/PipelineSection.tsx");
/* harmony import */ var _section_ResourceSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section/ResourceSection */ "./packages/dev-console/src/components/import/section/ResourceSection.tsx");











const GitImportForm = ({ values, errors, handleSubmit, handleReset, builderImages, status, isSubmitting, dirty, projects, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: handleSubmit, "data-test-id": "import-git-form" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_git_GitSection__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_builder_BuilderSection__WEBPACK_IMPORTED_MODULE_5__["default"], { image: values.image, builderImages: builderImages }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_git_DockerSection__WEBPACK_IMPORTED_MODULE_8__["default"], { buildStrategy: values.build.strategy }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_AppSection__WEBPACK_IMPORTED_MODULE_6__["default"], { project: values.project, noProjectsAvailable: projects.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](projects.data) }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_ResourceSection__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_PipelineSection__WEBPACK_IMPORTED_MODULE_9__["default"], { builderImages: builderImages }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_7__["default"], { values: values }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_form_utils__WEBPACK_IMPORTED_MODULE_3__["FormFooter"], { handleReset: handleReset, errorMessage: status && status.submitError, isSubmitting: isSubmitting, submitLabel: "Create", sticky: true, disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel" })));
/* harmony default export */ __webpack_exports__["default"] = (GitImportForm);


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
//# sourceMappingURL=git-import-form-788a76f0f12e112af499.js.map