(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["source-to-image-form"],{

/***/ "./packages/dev-console/src/components/import/SourceToImageForm.tsx":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/SourceToImageForm.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_form_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/form-utils */ "./packages/console-shared/src/components/form-utils/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _git_GitSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./git/GitSection */ "./packages/dev-console/src/components/import/git/GitSection.tsx");
/* harmony import */ var _builder_BuilderSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./builder/BuilderSection */ "./packages/dev-console/src/components/import/builder/BuilderSection.tsx");
/* harmony import */ var _app_AppSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/AppSection */ "./packages/dev-console/src/components/import/app/AppSection.tsx");
/* harmony import */ var _advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advanced/AdvancedSection */ "./packages/dev-console/src/components/import/advanced/AdvancedSection.tsx");
/* harmony import */ var _section_ResourceSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/ResourceSection */ "./packages/dev-console/src/components/import/section/ResourceSection.tsx");
/* harmony import */ var _pipeline_PipelineSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipeline/PipelineSection */ "./packages/dev-console/src/components/import/pipeline/PipelineSection.tsx");










const SourceToImageForm = ({ values, errors, handleSubmit, handleReset, builderImages, status, isSubmitting, dirty, projects, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Form"], { onSubmit: handleSubmit },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_builder_BuilderSection__WEBPACK_IMPORTED_MODULE_5__["default"], { image: values.image, builderImages: builderImages }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_git_GitSection__WEBPACK_IMPORTED_MODULE_4__["default"], { showSample: true }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_AppSection__WEBPACK_IMPORTED_MODULE_6__["default"], { project: values.project, noProjectsAvailable: projects.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](projects.data) }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_ResourceSection__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipeline_PipelineSection__WEBPACK_IMPORTED_MODULE_9__["default"], { builderImages: builderImages }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_advanced_AdvancedSection__WEBPACK_IMPORTED_MODULE_7__["default"], { values: values }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_form_utils__WEBPACK_IMPORTED_MODULE_2__["FormFooter"], { handleReset: handleReset, errorMessage: status && status.submitError, isSubmitting: isSubmitting, submitLabel: "Create", disableSubmit: !dirty || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](errors), resetLabel: "Cancel", sticky: true })));
/* harmony default export */ __webpack_exports__["default"] = (SourceToImageForm);


/***/ })

}]);
//# sourceMappingURL=source-to-image-form-c6bd2c7024e58b5c597f.js.map