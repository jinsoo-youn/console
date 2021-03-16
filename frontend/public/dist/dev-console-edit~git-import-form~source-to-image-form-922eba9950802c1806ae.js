(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-console-edit~git-import-form~source-to-image-form"],{

/***/ "./packages/dev-console/src/components/dropdown/SourceSecretDropdown.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/dropdown/SourceSecretDropdown.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");




const SourceSecretDropdown = (props) => {
    const filterData = (item) => {
        return item.type === 'kubernetes.io/basic-auth' || item.type === 'kubernetes.io/ssh-auth';
    };
    const resources = [
        {
            isList: true,
            namespace: props.namespace,
            kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["SecretModel"].kind,
            prop: 'secrets',
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["ResourceDropdown"], Object.assign({}, props, { placeholder: "Select Secret Name", resourceFilter: filterData, dataSelector: ['metadata', 'name'] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SourceSecretDropdown);


/***/ }),

/***/ "./packages/dev-console/src/components/import/builder/BuilderImageSelector.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/builder/BuilderImageSelector.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");







const BuilderImageSelector = ({ loadingImageStream, builderImages, }) => {
    const { values, setFieldValue, setFieldTouched } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const { selected, recommended, isRecommending, couldNotRecommend } = values.image;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (selected) {
            setFieldValue('image.tag', lodash__WEBPACK_IMPORTED_MODULE_1__["get"](builderImages, `${selected}.recentTag.name`, ''));
            setFieldTouched('image.tag', true);
        }
    }, [selected, setFieldValue, setFieldTouched, builderImages]);
    const fieldId = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getFieldId"])('image.name', 'selector');
    if (lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](builderImages).length === 1) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["ItemSelectorField"], { itemList: builderImages, name: "image.selected", loadingItems: loadingImageStream, recommended: recommended }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { fieldId: fieldId, label: "Builder Image" },
        isRecommending && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null),
            " Detecting recommended builder images...")),
        recommended && builderImages.hasOwnProperty(recommended) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { variant: "success", title: "Builder image(s) detected.", isInline: true },
                "Recommended builder images are represented by",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["StarIcon"], { style: { color: 'var(--pf-global--primary-color--100)' } }),
                " icon."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))),
        (couldNotRecommend || (recommended && !builderImages.hasOwnProperty(recommended))) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { variant: "warning", title: "Unable to detect the builder image.", isInline: true }, "Select the most appropriate one from the list to continue."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["ItemSelectorField"], { itemList: builderImages, name: "image.selected", loadingItems: loadingImageStream, recommended: values.image.recommended })));
};
/* harmony default export */ __webpack_exports__["default"] = (BuilderImageSelector);


/***/ }),

/***/ "./packages/dev-console/src/components/import/builder/BuilderImageTagSelector.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/builder/BuilderImageTagSelector.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _utils_safe_k8s_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/safe-k8s-hook */ "./packages/dev-console/src/utils/safe-k8s-hook.tsx");
/* harmony import */ var _ImageStreamInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageStreamInfo */ "./packages/dev-console/src/components/import/builder/ImageStreamInfo.tsx");









const BuilderImageTagSelector = ({ selectedBuilderImage, selectedImageTag, }) => {
    const { setFieldValue, setFieldError } = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])();
    const { name: imageName, tags: imageTags, displayName: imageDisplayName, imageStreamNamespace, } = selectedBuilderImage;
    const tagItems = {};
    lodash__WEBPACK_IMPORTED_MODULE_1__["each"](imageTags, ({ name }) => (tagItems[name] = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceName"], { kind: "ImageStreamTag", name: name })));
    const [imageTag, displayName] = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["getTagDataWithDisplayName"])(imageTags, selectedImageTag, imageDisplayName);
    const k8sGet = Object(_utils_safe_k8s_hook__WEBPACK_IMPORTED_MODULE_7__["useSafeK8s"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        setFieldValue('image.tagObj', imageTag);
        k8sGet(_console_internal_models__WEBPACK_IMPORTED_MODULE_4__["ImageStreamTagModel"], `${imageName}:${selectedImageTag}`, imageStreamNamespace)
            .then((imageStreamTag) => {
            const ports = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_6__["getPorts"])(imageStreamTag);
            setFieldValue('image.ports', ports);
        })
            .catch((err) => setFieldError('image.ports', err.message));
        // Find a way to use useSafeK8s hooks without adding it to the deps array.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImageTag, setFieldValue, setFieldError, imageName, imageStreamNamespace, imageTag]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["DropdownField"], { name: "image.tag", label: "Builder Image Version", items: tagItems, title: tagItems[selectedImageTag], fullWidth: true, required: true }),
        imageTag && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageStreamInfo__WEBPACK_IMPORTED_MODULE_8__["default"], { displayName: displayName, tag: imageTag })));
};
/* harmony default export */ __webpack_exports__["default"] = (BuilderImageTagSelector);


/***/ }),

/***/ "./packages/dev-console/src/components/import/builder/BuilderSection.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/builder/BuilderSection.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _BuilderImageSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderImageSelector */ "./packages/dev-console/src/components/import/builder/BuilderImageSelector.tsx");
/* harmony import */ var _BuilderImageTagSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BuilderImageTagSelector */ "./packages/dev-console/src/components/import/builder/BuilderImageTagSelector.tsx");




const BuilderSection = ({ image, builderImages }) => {
    if (!builderImages) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"], { title: "Builder", fullWidth: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BuilderImageSelector__WEBPACK_IMPORTED_MODULE_2__["default"], { loadingImageStream: !builderImages, builderImages: builderImages })),
        image.tag && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BuilderImageTagSelector__WEBPACK_IMPORTED_MODULE_3__["default"], { selectedBuilderImage: builderImages[image.selected], selectedImageTag: image.tag })))));
};
/* harmony default export */ __webpack_exports__["default"] = (BuilderSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/builder/ImageStreamInfo.tsx":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/builder/ImageStreamInfo.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/image-stream */ "./public/components/image-stream.tsx");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");






const ImageStreamInfo = ({ displayName, tag }) => {
    const annotationTags = Object(_console_internal_components_image_stream__WEBPACK_IMPORTED_MODULE_2__["getAnnotationTags"])(tag);
    const description = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](tag, 'annotations.description');
    const sampleRepo = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_5__["getSampleRepo"])(tag);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-info" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-item-details" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["ImageStreamIcon"], { tag: tag, iconSize: "large" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-section-heading co-catalog-item-details__name" }, displayName),
                annotationTags && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__tags" }, lodash__WEBPACK_IMPORTED_MODULE_1__["map"](annotationTags, (annotationTag, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__tag", key: i }, annotationTag))))))),
        description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-item-details__description" }, description),
        sampleRepo && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
            "Sample repository: ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: sampleRepo, text: sampleRepo })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageStreamInfo);


/***/ }),

/***/ "./packages/dev-console/src/components/import/git/AdvancedGitOptions.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/git/AdvancedGitOptions.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _SourceSecretSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourceSecretSelector */ "./packages/dev-console/src/components/import/git/SourceSecretSelector.tsx");






const AdvancedGitOptions = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["ExpandCollapse"], { textExpanded: "Hide Advanced Git Options", textCollapsed: "Show Advanced Git Options" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_4__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, name: "git.ref", label: "Git Reference", helpText: "Optional branch, tag, or commit." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_3__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, name: "git.dir", label: "Context Dir", helpText: "Optional subdirectory for the application source code, used as a context directory for build." }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SourceSecretSelector__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
/* harmony default export */ __webpack_exports__["default"] = (AdvancedGitOptions);


/***/ }),

/***/ "./packages/dev-console/src/components/import/git/GitSection.tsx":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/import/git/GitSection.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_git_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/git-service */ "./packages/git-service/src/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _import_validation_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../import-validation-utils */ "./packages/dev-console/src/components/import/import-validation-utils.ts");
/* harmony import */ var _utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/imagestream-utils */ "./packages/dev-console/src/utils/imagestream-utils.ts");
/* harmony import */ var _section_FormSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section/FormSection */ "./packages/dev-console/src/components/import/section/FormSection.tsx");
/* harmony import */ var _SampleRepo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SampleRepo */ "./packages/dev-console/src/components/import/git/SampleRepo.tsx");
/* harmony import */ var _AdvancedGitOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdvancedGitOptions */ "./packages/dev-console/src/components/import/git/AdvancedGitOptions.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../const */ "./packages/dev-console/src/const.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












const GitSection = ({ showSample }) => {
    const { values, setFieldValue, setFieldTouched, touched, dirty } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const tag = values.image.tagObj;
    const sampleRepo = showSample && Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["getSampleRepo"])(tag);
    const { application = {}, name: nameTouched, git = {}, image = {} } = touched;
    const { type: gitTypeTouched } = git;
    const { name: applicationNameTouched } = application;
    const { selected: imageSelectorTouched } = image;
    const [validated, setValidated] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].default);
    const handleGitUrlChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((url, ref) => __awaiter(void 0, void 0, void 0, function* () {
        setFieldValue('git.isUrlValidating', true);
        setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].default);
        const gitType = Object(_import_validation_utils__WEBPACK_IMPORTED_MODULE_6__["detectGitType"])(url);
        const gitRepoName = Object(_import_validation_utils__WEBPACK_IMPORTED_MODULE_6__["detectGitRepoName"])(url);
        const showGitType = gitType === _import_types__WEBPACK_IMPORTED_MODULE_5__["GitTypes"].unsure;
        setFieldValue('git.type', gitType);
        setFieldValue('git.showGitType', showGitType);
        showGitType && setFieldTouched('git.type', false);
        const gitService = Object(_console_git_service__WEBPACK_IMPORTED_MODULE_3__["getGitService"])({ url, ref }, gitType);
        const isReachable = gitService && (yield gitService.isRepoReachable());
        setFieldValue('git.isUrlValidating', false);
        if (isReachable) {
            setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].success);
            gitRepoName && !values.name && setFieldValue('name', gitRepoName);
            gitRepoName &&
                !values.application.name &&
                values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_11__["UNASSIGNED_KEY"] &&
                setFieldValue('application.name', `${gitRepoName}-app`);
            setFieldValue('image.isRecommending', true);
            const buildTools = yield gitService.detectBuildTypes();
            setFieldValue('image.isRecommending', false);
            if (buildTools.length > 0) {
                const buildTool = buildTools[0].buildType;
                setFieldValue('image.couldNotRecommend', false);
                setFieldValue('image.recommended', buildTool);
            }
            else {
                setFieldValue('image.couldNotRecommend', true);
                setFieldValue('image.recommended', '');
            }
        }
        else {
            setFieldValue('image.recommended', '');
            setFieldValue('image.couldNotRecommend', false);
            setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].error);
        }
    }), [
        setFieldTouched,
        setFieldValue,
        values.application.name,
        values.application.selectedKey,
        values.name,
    ]);
    const debouncedHandleGitUrlChange = Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["useDebounceCallback"])(handleGitUrlChange, [handleGitUrlChange]);
    const handleGitUrlBlur = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        const { url } = values.git;
        const gitRepoName = Object(_import_validation_utils__WEBPACK_IMPORTED_MODULE_6__["detectGitRepoName"])(url);
        gitRepoName && setFieldValue('name', gitRepoName);
        gitRepoName &&
            !values.application.name &&
            values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_11__["UNASSIGNED_KEY"] &&
            setFieldValue('application.name', `${gitRepoName}-app`);
        setFieldTouched('git.url', true);
    }, [
        setFieldTouched,
        setFieldValue,
        values.application.name,
        values.application.selectedKey,
        values.git,
    ]);
    const fillSample = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        const url = sampleRepo;
        const ref = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["getSampleRef"])(tag);
        const dir = Object(_utils_imagestream_utils__WEBPACK_IMPORTED_MODULE_7__["getSampleContextDir"])(tag);
        const gitType = Object(_import_validation_utils__WEBPACK_IMPORTED_MODULE_6__["detectGitType"])(url);
        const name = values.name || values.image.selected;
        values.name !== name && setFieldValue('name', name);
        !values.application.name &&
            values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_11__["UNASSIGNED_KEY"] &&
            setFieldValue('application.name', `${name}-app`);
        setFieldValue('git.url', url);
        setFieldValue('git.dir', dir);
        setFieldValue('git.ref', ref);
        setFieldValue('git.type', gitType);
        setFieldTouched('git.url', true);
    }, [
        sampleRepo,
        setFieldTouched,
        setFieldValue,
        tag,
        values.application.name,
        values.application.selectedKey,
        values.image.selected,
        values.name,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const { url, ref } = values.git;
        !dirty && url && handleGitUrlChange(url, ref);
    }, [dirty, handleGitUrlChange, values.git]);
    const getHelpText = () => {
        if (values.git.isUrlValidating) {
            return 'Validating...';
        }
        if (validated === _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].success) {
            return 'Validated';
        }
        if (validated === _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].error) {
            return 'Git repository is not reachable.';
        }
        return '';
    };
    const resetFields = () => {
        if (!imageSelectorTouched) {
            setFieldValue('image.selected', '');
            setFieldValue('image.tag', '');
        }
        values.image.recommended && setFieldValue('image.recommended', '');
        values.image.couldNotRecommend && setFieldValue('image.couldNotRecommend', false);
        if (values.formType === 'edit') {
            values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_11__["UNASSIGNED_KEY"] &&
                values.application.selectedKey === _const__WEBPACK_IMPORTED_MODULE_11__["CREATE_APPLICATION_KEY"] &&
                !applicationNameTouched &&
                setFieldValue('application.name', '');
            return;
        }
        !nameTouched && setFieldValue('name', '');
        values.application.selectedKey !== _const__WEBPACK_IMPORTED_MODULE_11__["UNASSIGNED_KEY"] &&
            !applicationNameTouched &&
            setFieldValue('application.name', '');
    };
    Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["useFormikValidationFix"])(values.git.url);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_section_FormSection__WEBPACK_IMPORTED_MODULE_8__["default"], { title: "Git" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["InputField"], { type: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInputTypes"].text, name: "git.url", label: "Git Repo URL", helpText: getHelpText(), helpTextInvalid: getHelpText(), validated: validated, onChange: (e) => {
                resetFields();
                setValidated(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ValidatedOptions"].default);
                debouncedHandleGitUrlChange(e.target.value, values.git.ref);
            }, onBlur: handleGitUrlBlur, "data-test-id": "git-form-input-url", required: true }),
        values.git.showGitType && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_4__["DropdownField"], { name: "git.type", label: "Git Type", items: _import_types__WEBPACK_IMPORTED_MODULE_5__["GitReadableTypes"], title: _import_types__WEBPACK_IMPORTED_MODULE_5__["GitReadableTypes"][values.git.type], fullWidth: true, required: true }),
            !gitTypeTouched && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { isInline: true, variant: "info", title: "Defaulting Git Type to Other" }, "We failed to detect the git type.")))),
        sampleRepo && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SampleRepo__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: fillSample }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AdvancedGitOptions__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (GitSection);


/***/ }),

/***/ "./packages/dev-console/src/components/import/git/SampleRepo.tsx":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/import/git/SampleRepo.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");



const SampleRepo = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], { isHidden: false },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object.assign({}, props, { type: "button", variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ButtonVariant"].link, isInline: true }),
        "Try Sample ",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["LevelUpAltIcon"], null))));
/* harmony default export */ __webpack_exports__["default"] = (SampleRepo);


/***/ }),

/***/ "./packages/dev-console/src/components/import/git/SourceSecretSelector.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/import/git/SourceSecretSelector.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/secrets/create-secret */ "./public/components/secrets/create-secret.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _dropdown_SourceSecretDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dropdown/SourceSecretDropdown */ "./packages/dev-console/src/components/dropdown/SourceSecretDropdown.tsx");
/* harmony import */ var _CreateSecretModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CreateSecretModal */ "./packages/dev-console/src/components/import/CreateSecretModal.tsx");







const CREATE_SOURCE_SECRET = 'create-source-secret';
const SourceSecretSelector = () => {
    const [secret] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])('git.secret');
    const { values, setFieldValue } = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormikContext"])();
    const handleSave = (name) => {
        setFieldValue('git.secret', name);
    };
    const handleDropdownChange = (key) => {
        if (key === CREATE_SOURCE_SECRET) {
            setFieldValue('git.secret', secret.value);
            Object(_CreateSecretModal__WEBPACK_IMPORTED_MODULE_6__["secretModalLauncher"])({
                namespace: values.project.name,
                save: handleSave,
                secretType: _console_internal_components_secrets_create_secret__WEBPACK_IMPORTED_MODULE_3__["SecretTypeAbstraction"].source,
            });
        }
        else {
            setFieldValue('git.secret', key);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: Object(_console_shared__WEBPACK_IMPORTED_MODULE_4__["getFieldId"])('source-secret', 'dropdown'), label: "Source Secret", helperText: "Secret with credentials for pulling your source code." },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_SourceSecretDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], { dropDownClassName: "dropdown--full-width", menuClassName: "dropdown-menu--text-wrap", namespace: values.project.name, actionItems: [
                    {
                        actionTitle: 'Create New Secret',
                        actionKey: CREATE_SOURCE_SECRET,
                    },
                ], selectedKey: secret.value, title: secret.value, onChange: handleDropdownChange }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SourceSecretSelector);


/***/ }),

/***/ "./packages/dev-console/src/utils/safe-k8s-hook.tsx":
/*!**********************************************************!*\
  !*** ./packages/dev-console/src/utils/safe-k8s-hook.tsx ***!
  \**********************************************************/
/*! exports provided: useSafeK8s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSafeK8s", function() { return useSafeK8s; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");


const useSafeK8s = () => {
    const controller = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        controller.current = new AbortController();
        return () => {
            mounted.current = false;
            controller.current.abort();
        };
    }, []);
    return (kind, name, ns, opts = {}) => {
        return new Promise((resolve, reject) => {
            Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sGet"])(kind, name, ns, Object.assign({ signal: controller.current.signal }, opts))
                .then((data) => mounted.current && resolve(data))
                .catch((error) => mounted.current && reject(error));
        });
    };
};


/***/ }),

/***/ "./packages/git-service/src/index.ts":
/*!*******************************************!*\
  !*** ./packages/git-service/src/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./packages/git-service/src/types/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./packages/git-service/src/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GithubService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitbucketService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["BitbucketService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitlabService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GitlabService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGitService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["getGitService"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/git-service/src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectBuildTypes", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["detectBuildTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isModernWebApp", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isModernWebApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DockerFileParser", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["DockerFileParser"]; });






/***/ }),

/***/ "./packages/git-service/src/services/base-service.ts":
/*!***********************************************************!*\
  !*** ./packages/git-service/src/services/base-service.ts ***!
  \***********************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./packages/git-service/src/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class BaseService {
    constructor(gitsource) {
        this.gitsource = gitsource;
    }
    /**
     * Detect build types for given gitsource, It runs regular expressions on file list
     * and returns list of build types matched.
     */
    detectBuildTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fileList = yield this.getRepoFileList();
                const buildTypes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["detectBuildTypes"])(fileList.files);
                if (fileList.files.includes('package.json')) {
                    const packageJsonContent = yield this.getPackageJsonContent();
                    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isModernWebApp"])(packageJsonContent)) {
                        return buildTypes.sort((a, b) => {
                            if (b.buildType === 'modern-webapp')
                                return 1;
                            if (a.buildType === 'modern-webapp')
                                return -1;
                            return 0;
                        });
                    }
                }
                return buildTypes;
            }
            catch (e) {
                return [];
            }
        });
    }
}


/***/ }),

/***/ "./packages/git-service/src/services/bitbucket-service.ts":
/*!****************************************************************!*\
  !*** ./packages/git-service/src/services/bitbucket-service.ts ***!
  \****************************************************************/
/*! exports provided: BitbucketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitbucketService", function() { return BitbucketService; });
/* harmony import */ var parse_bitbucket_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse-bitbucket-url */ "./node_modules/parse-bitbucket-url/index.js");
/* harmony import */ var parse_bitbucket_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parse_bitbucket_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./packages/git-service/src/types/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-service */ "./packages/git-service/src/services/base-service.ts");
/* harmony import */ var _console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/co-fetch */ "./public/co-fetch.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class BitbucketService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(gitsource) {
        super(gitsource);
        this.baseURL = 'https://api.bitbucket.org/2.0';
        this.getAuthProvider = () => {
            switch (this.gitsource.secretType) {
                case _types__WEBPACK_IMPORTED_MODULE_1__["SecretType"].BASIC_AUTH: {
                    const { username, password } = this.gitsource.secretContent;
                    return { type: 'basic', username, password };
                }
                case _types__WEBPACK_IMPORTED_MODULE_1__["SecretType"].NO_AUTH:
                    return null;
                default:
                    return null;
            }
        };
        this.getRepoMetadata = () => {
            const { name, owner, host, branch } = parse_bitbucket_url__WEBPACK_IMPORTED_MODULE_0__(this.gitsource.url);
            return { repoName: name, owner, host, defaultBranch: this.gitsource.ref || branch };
        };
        this.isRepoReachable = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}`;
            try {
                const data = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                return data.slug === this.metadata.repoName;
            }
            catch (e) {
                return false;
            }
        });
        this.getRepoBranchList = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}/refs/branches`;
            try {
                const data = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                const list = data.values.map((b) => b.name);
                return { branches: list };
            }
            catch (e) {
                return { branches: [] };
            }
        });
        this.getRepoFileList = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}/src/${this.metadata.defaultBranch}/?pagelen=50`;
            try {
                const data = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                const files = data.values.map((f) => f.path);
                return { files };
            }
            catch (e) {
                return { files: [] };
            }
        });
        this.getRepoLanguageList = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}`;
            try {
                const data = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                return { languages: [data.language] };
            }
            catch (e) {
                return { languages: [] };
            }
        });
        this.isDockerfilePresent = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}/src/${this.metadata.defaultBranch}/Dockerfile`;
            try {
                yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                return true;
            }
            catch (e) {
                return false;
            }
        });
        this.getDockerfileContent = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}/src/${this.metadata.defaultBranch}/Dockerfile`;
            try {
                const data = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                return data;
            }
            catch (e) {
                return null;
            }
        });
        this.getPackageJsonContent = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/repositories/${this.metadata.owner}/${this.metadata.repoName}/src/${this.metadata.defaultBranch}/package.json`;
            try {
                const data = yield Object(_console_internal_co_fetch__WEBPACK_IMPORTED_MODULE_3__["coFetchJSON"])(url);
                return data;
            }
            catch (e) {
                return null;
            }
        });
        this.metadata = this.getRepoMetadata();
    }
}


/***/ }),

/***/ "./packages/git-service/src/services/git-service.ts":
/*!**********************************************************!*\
  !*** ./packages/git-service/src/services/git-service.ts ***!
  \**********************************************************/
/*! exports provided: getGitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGitService", function() { return getGitService; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./packages/git-service/src/types/index.ts");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-service */ "./packages/git-service/src/services/github-service.ts");
/* harmony import */ var _bitbucket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitbucket-service */ "./packages/git-service/src/services/bitbucket-service.ts");
/* harmony import */ var _gitlab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gitlab-service */ "./packages/git-service/src/services/gitlab-service.ts");




function getGitService(gitSource, gitProvider) {
    switch (gitProvider) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["GitProvider"].GITHUB:
            return new _github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"](gitSource);
        case _types__WEBPACK_IMPORTED_MODULE_0__["GitProvider"].BITBUCKET:
            return new _bitbucket_service__WEBPACK_IMPORTED_MODULE_2__["BitbucketService"](gitSource);
        case _types__WEBPACK_IMPORTED_MODULE_0__["GitProvider"].GITLAB:
            return new _gitlab_service__WEBPACK_IMPORTED_MODULE_3__["GitlabService"](gitSource);
        default:
            return null;
    }
}


/***/ }),

/***/ "./packages/git-service/src/services/github-service.ts":
/*!*************************************************************!*\
  !*** ./packages/git-service/src/services/github-service.ts ***!
  \*************************************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @octokit/rest */ "./node_modules/@octokit/rest/index.js");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! git-url-parse */ "./node_modules/git-url-parse/lib/index.js");
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(git_url_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./packages/git-service/src/types/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-service */ "./packages/git-service/src/services/base-service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class GithubService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(gitsource) {
        super(gitsource);
        this.getAuthProvider = () => {
            switch (this.gitsource.secretType) {
                case _types__WEBPACK_IMPORTED_MODULE_2__["SecretType"].BASIC_AUTH: {
                    const { username, password } = this.gitsource.secretContent;
                    return { username, password };
                }
                case _types__WEBPACK_IMPORTED_MODULE_2__["SecretType"].NO_AUTH:
                    return null;
                default:
                    return null;
            }
        };
        this.getRepoMetadata = () => {
            const { name, owner, source } = git_url_parse__WEBPACK_IMPORTED_MODULE_1__(this.gitsource.url);
            return { repoName: name, owner, host: source, defaultBranch: this.gitsource.ref || 'master' };
        };
        this.isRepoReachable = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.repos.get({
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                });
                return resp.status === 200;
            }
            catch (e) {
                return false;
            }
        });
        this.getRepoBranchList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.repos.listBranches({
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                });
                const list = resp.data.map((r) => {
                    return r.name;
                });
                return { branches: list };
            }
            catch (e) {
                return { branches: [] };
            }
        });
        this.getRepoFileList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.git.getTree({
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    tree_sha: this.metadata.defaultBranch,
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                });
                let files = [];
                if (resp.status === 200) {
                    files = resp.data.tree.map((t) => t.path);
                }
                return { files };
            }
            catch (e) {
                return { files: [] };
            }
        });
        this.getRepoLanguageList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.repos.listLanguages({
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                });
                if (resp.status === 200) {
                    return { languages: Object.keys(resp.data) };
                }
                return { languages: [] };
            }
            catch (e) {
                return { languages: [] };
            }
        });
        this.isDockerfilePresent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.repos.getContents({
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                    path: 'Dockerfile',
                });
                return resp.status === 200;
            }
            catch (e) {
                return false;
            }
        });
        this.getDockerfileContent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.repos.getContents({
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                    path: 'Dockerfile',
                });
                if (resp.status === 200) {
                    // eslint-disable-next-line dot-notation
                    return Buffer.from(resp.data['content'], 'base64').toString();
                }
                return null;
            }
            catch (e) {
                return null;
            }
        });
        this.getPackageJsonContent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.client.repos.getContents({
                    owner: this.metadata.owner,
                    repo: this.metadata.repoName,
                    path: 'package.json',
                });
                if (resp.status === 200) {
                    // eslint-disable-next-line dot-notation
                    return Buffer.from(resp.data['content'], 'base64').toString();
                }
                return null;
            }
            catch (e) {
                return null;
            }
        });
        const opts = this.getAuthProvider();
        this.metadata = this.getRepoMetadata();
        this.client = new _octokit_rest__WEBPACK_IMPORTED_MODULE_0__({ auth: opts });
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./packages/git-service/src/services/gitlab-service.ts":
/*!*************************************************************!*\
  !*** ./packages/git-service/src/services/gitlab-service.ts ***!
  \*************************************************************/
/*! exports provided: GitlabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitlabService", function() { return GitlabService; });
/* harmony import */ var gitlab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gitlab */ "./node_modules/gitlab/dist/index.browser.js");
/* harmony import */ var gitlab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gitlab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! git-url-parse */ "./node_modules/git-url-parse/lib/index.js");
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(git_url_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./packages/git-service/src/types/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-service */ "./packages/git-service/src/services/base-service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class GitlabService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(gitsource) {
        super(gitsource);
        this.getRepo = () => __awaiter(this, void 0, void 0, function* () {
            if (this.repo) {
                return Promise.resolve(this.repo);
            }
            const repo = yield this.client.Projects.show(this.metadata.fullName);
            if (!repo || repo.path_with_namespace !== this.metadata.fullName) {
                throw new Error('Unable to find repo');
            }
            this.repo = repo;
            return Promise.resolve(this.repo);
        });
        this.getAuthProvider = () => {
            switch (this.gitsource.secretType) {
                case _types__WEBPACK_IMPORTED_MODULE_2__["SecretType"].PERSONAL_ACCESS_TOKEN || _types__WEBPACK_IMPORTED_MODULE_2__["SecretType"].OAUTH:
                    return this.gitsource.secretContent;
                default:
                    return null;
            }
        };
        this.getProjectId = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const repo = yield this.getRepo();
                return repo.id;
            }
            catch (e) {
                throw e;
            }
        });
        this.isRepoReachable = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getRepo();
                return true;
            }
            catch (e) {
                return false;
            }
        });
        this.getRepoBranchList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projectID = yield this.getProjectId();
                const resp = yield this.client.Branches.all(projectID);
                const list = resp.map((b) => b.name);
                return { branches: list };
            }
            catch (e) {
                return { branches: [] };
            }
        });
        this.getRepoFileList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projectID = yield this.getProjectId();
                const resp = yield this.client.Repositories.tree(projectID);
                const files = resp.reduce((acc, file) => {
                    if (file.type === 'blob')
                        acc.push(file.path);
                    return acc;
                }, []);
                return { files };
            }
            catch (e) {
                return { files: [] };
            }
        });
        this.getRepoLanguageList = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projectID = yield this.getProjectId();
                const resp = yield this.client.Projects.languages(projectID);
                return { languages: Object.keys(resp) };
            }
            catch (e) {
                return { languages: [] };
            }
        });
        this.isDockerfilePresent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projectID = yield this.getProjectId();
                yield this.client.RepositoryFiles.showRaw(projectID, 'Dockerfile', this.metadata.defaultBranch);
                return true;
            }
            catch (e) {
                return false;
            }
        });
        this.getDockerfileContent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projectID = yield this.getProjectId();
                return yield this.client.RepositoryFiles.showRaw(projectID, 'Dockerfile', this.metadata.defaultBranch);
            }
            catch (e) {
                return null;
            }
        });
        this.getPackageJsonContent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projectID = yield this.getProjectId();
                return yield this.client.RepositoryFiles.showRaw(projectID, 'package.json', this.metadata.defaultBranch);
            }
            catch (e) {
                return null;
            }
        });
        this.metadata = this.getRepoMetadata();
        const token = this.getAuthProvider();
        this.client = new gitlab__WEBPACK_IMPORTED_MODULE_0__["Gitlab"]({
            host: this.metadata.host,
            token,
        });
        this.repo = null;
    }
    getRepoMetadata() {
        const { name, owner, protocol, source, full_name: fullName } = git_url_parse__WEBPACK_IMPORTED_MODULE_1__(this.gitsource.url);
        const host = `${protocol}://${source}`;
        return {
            repoName: name,
            owner,
            host,
            defaultBranch: this.gitsource.ref || 'master',
            fullName,
        };
    }
}


/***/ }),

/***/ "./packages/git-service/src/services/index.ts":
/*!****************************************************!*\
  !*** ./packages/git-service/src/services/index.ts ***!
  \****************************************************/
/*! exports provided: GithubService, BitbucketService, GitlabService, getGitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-service */ "./packages/git-service/src/services/github-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return _github_service__WEBPACK_IMPORTED_MODULE_0__["GithubService"]; });

/* harmony import */ var _bitbucket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bitbucket-service */ "./packages/git-service/src/services/bitbucket-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitbucketService", function() { return _bitbucket_service__WEBPACK_IMPORTED_MODULE_1__["BitbucketService"]; });

/* harmony import */ var _gitlab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gitlab-service */ "./packages/git-service/src/services/gitlab-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitlabService", function() { return _gitlab_service__WEBPACK_IMPORTED_MODULE_2__["GitlabService"]; });

/* harmony import */ var _git_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./git-service */ "./packages/git-service/src/services/git-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGitService", function() { return _git_service__WEBPACK_IMPORTED_MODULE_3__["getGitService"]; });







/***/ }),

/***/ "./packages/git-service/src/types/auth.ts":
/*!************************************************!*\
  !*** ./packages/git-service/src/types/auth.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/git-service/src/types/build-tools.ts":
/*!*******************************************************!*\
  !*** ./packages/git-service/src/types/build-tools.ts ***!
  \*******************************************************/
/*! exports provided: Maven, Gradle, Golang, Ruby, NodeJS, ModernWebApp, PHP, Python, Perl, Dotnet, BuildTools, WebAppDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maven", function() { return Maven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradle", function() { return Gradle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Golang", function() { return Golang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruby", function() { return Ruby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeJS", function() { return NodeJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernWebApp", function() { return ModernWebApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHP", function() { return PHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Python", function() { return Python; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perl", function() { return Perl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dotnet", function() { return Dotnet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildTools", function() { return BuildTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAppDependencies", function() { return WebAppDependencies; });
const Maven = {
    name: 'Maven',
    type: 'java',
    language: 'java',
    expectedRegexps: RegExp([`pom.xml`].join('|')),
    expectedFiles: ['pom.xml'],
};
const Gradle = {
    name: 'Gradle',
    type: 'java',
    language: 'java',
    expectedRegexps: RegExp([`.*gradle.*`].join('|')),
    expectedFiles: ['build.gradle', 'gradlew', 'gradlew.bat'],
};
const Golang = {
    name: 'Golang',
    type: 'golang',
    language: 'go',
    expectedRegexps: RegExp([`main.go`, `Gopkg.toml`, `glide.yaml`].join('|')),
    expectedFiles: ['main.go', 'Gopkg.toml', 'glide.yaml'],
};
const Ruby = {
    name: 'Ruby',
    type: 'ruby',
    language: 'ruby',
    expectedRegexps: RegExp([`Gemfile`, `Rakefile`, `config.ru`].join('|')),
    expectedFiles: ['Gemfile', 'Rakefile', 'config.ru'],
};
const NodeJS = {
    name: 'NodeJS',
    type: 'nodejs',
    language: 'javascript',
    expectedRegexps: RegExp([`app.json`, `package.json`, `gulpfile.js`, `Gruntfile.js`].join('|')),
    expectedFiles: ['app.json', 'package.json', 'gulpfile.js', 'Gruntfile.js'],
};
const ModernWebApp = {
    name: 'Modern Web App',
    type: 'modern-webapp',
    language: 'javascript',
    expectedRegexps: RegExp([`app.json`, `package.json`, `gulpfile.js`, `Gruntfile.js`].join('|')),
    expectedFiles: ['app.json', 'package.json', 'gulpfile.js', 'Gruntfile.js'],
};
const PHP = {
    name: 'PHP',
    type: 'php',
    language: 'php',
    expectedRegexps: RegExp([`index.php`, `composer.json`].join('|')),
    expectedFiles: ['index.php', 'composer.json'],
};
const Python = {
    name: 'Python',
    type: 'python',
    language: 'python',
    expectedRegexps: RegExp([`requirements.txt`, `setup.py`].join('|')),
    expectedFiles: ['requirements.txt', 'setup.py'],
};
const Perl = {
    name: 'Perl',
    type: 'perl',
    language: 'perl',
    expectedRegexps: RegExp([`index.pl`, `cpanfile`].join('|')),
    expectedFiles: ['index.pl', 'cpanfile'],
};
const Dotnet = {
    name: 'Dotnet',
    type: 'dotnet',
    language: 'C#',
    expectedRegexps: RegExp([`project.json`, `.*.csproj`].join('|')),
    expectedFiles: ['project.json', 'app.csproj'],
};
const BuildTools = [
    Dotnet,
    Golang,
    Gradle,
    Maven,
    NodeJS,
    ModernWebApp,
    Perl,
    PHP,
    Python,
    Ruby,
];
const WebAppDependencies = [
    'react',
    'angular',
    '@angular/core',
    'vue',
    'knockout',
    'knockback',
];


/***/ }),

/***/ "./packages/git-service/src/types/git.ts":
/*!***********************************************!*\
  !*** ./packages/git-service/src/types/git.ts ***!
  \***********************************************/
/*! exports provided: SecretType, GitProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretType", function() { return SecretType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitProvider", function() { return GitProvider; });
var SecretType;
(function (SecretType) {
    SecretType[SecretType["NO_AUTH"] = 0] = "NO_AUTH";
    SecretType[SecretType["BASIC_AUTH"] = 1] = "BASIC_AUTH";
    SecretType[SecretType["SSH"] = 2] = "SSH";
    SecretType[SecretType["PERSONAL_ACCESS_TOKEN"] = 3] = "PERSONAL_ACCESS_TOKEN";
    SecretType[SecretType["OAUTH"] = 4] = "OAUTH";
})(SecretType || (SecretType = {}));
var GitProvider;
(function (GitProvider) {
    GitProvider["GITHUB"] = "github";
    GitProvider["BITBUCKET"] = "bitbucket";
    GitProvider["GITLAB"] = "gitlab";
})(GitProvider || (GitProvider = {}));


/***/ }),

/***/ "./packages/git-service/src/types/index.ts":
/*!*************************************************!*\
  !*** ./packages/git-service/src/types/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./packages/git-service/src/types/auth.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _auth__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _auth__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repo */ "./packages/git-service/src/types/repo.ts");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_repo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _repo__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _repo__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _git__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./git */ "./packages/git-service/src/types/git.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecretType", function() { return _git__WEBPACK_IMPORTED_MODULE_2__["SecretType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GitProvider", function() { return _git__WEBPACK_IMPORTED_MODULE_2__["GitProvider"]; });

/* harmony import */ var _build_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build-tools */ "./packages/git-service/src/types/build-tools.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maven", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Maven"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gradle", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Gradle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Golang", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Golang"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ruby", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Ruby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeJS", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["NodeJS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModernWebApp", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["ModernWebApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PHP", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["PHP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Python", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Python"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Perl", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Perl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dotnet", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["Dotnet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildTools", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["BuildTools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebAppDependencies", function() { return _build_tools__WEBPACK_IMPORTED_MODULE_3__["WebAppDependencies"]; });







/***/ }),

/***/ "./packages/git-service/src/types/repo.ts":
/*!************************************************!*\
  !*** ./packages/git-service/src/types/repo.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/git-service/src/utils/build-tool-detector.ts":
/*!***************************************************************!*\
  !*** ./packages/git-service/src/utils/build-tool-detector.ts ***!
  \***************************************************************/
/*! exports provided: detectBuildTypes, isModernWebApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBuildTypes", function() { return detectBuildTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModernWebApp", function() { return isModernWebApp; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./packages/git-service/src/types/index.ts");

function detectBuildTypes(files) {
    const buildTypes = _types__WEBPACK_IMPORTED_MODULE_0__["BuildTools"].map((t) => {
        const matchedFiles = files.filter((f) => t.expectedRegexps.test(f));
        return { buildType: t.type, language: t.language, files: matchedFiles };
    });
    return buildTypes
        .filter((b) => b.files.length > 0)
        .sort((a, b) => b.files.length - a.files.length);
}
function isModernWebApp(packageJsonContent) {
    const packageJson = JSON.parse(packageJsonContent);
    let isWebApp = false;
    _types__WEBPACK_IMPORTED_MODULE_0__["WebAppDependencies"].forEach((dep) => {
        if (dep in packageJson.dependencies) {
            isWebApp = true;
        }
    });
    return isWebApp;
}


/***/ }),

/***/ "./packages/git-service/src/utils/dockerfile-parser.ts":
/*!*************************************************************!*\
  !*** ./packages/git-service/src/utils/dockerfile-parser.ts ***!
  \*************************************************************/
/*! exports provided: DockerFileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DockerFileParser", function() { return DockerFileParser; });
/* harmony import */ var docker_file_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! docker-file-parser */ "./node_modules/docker-file-parser/index.js");
/* harmony import */ var docker_file_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(docker_file_parser__WEBPACK_IMPORTED_MODULE_0__);

class DockerFileParser {
    constructor(content) {
        this.content = content;
        this.parsedCommands = this.parse();
    }
    parse() {
        return Object(docker_file_parser__WEBPACK_IMPORTED_MODULE_0__["parse"])(this.content);
    }
    getContainerPort() {
        const cmd = this.parsedCommands.filter((c) => c.name === 'EXPOSE');
        if (cmd.length > 0) {
            const exposeCommand = cmd[0];
            if (exposeCommand.args.length > 0)
                return Number(exposeCommand.args[0]);
        }
        return null;
    }
}


/***/ }),

/***/ "./packages/git-service/src/utils/index.ts":
/*!*************************************************!*\
  !*** ./packages/git-service/src/utils/index.ts ***!
  \*************************************************/
/*! exports provided: detectBuildTypes, isModernWebApp, DockerFileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build_tool_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-tool-detector */ "./packages/git-service/src/utils/build-tool-detector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectBuildTypes", function() { return _build_tool_detector__WEBPACK_IMPORTED_MODULE_0__["detectBuildTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isModernWebApp", function() { return _build_tool_detector__WEBPACK_IMPORTED_MODULE_0__["isModernWebApp"]; });

/* harmony import */ var _dockerfile_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dockerfile-parser */ "./packages/git-service/src/utils/dockerfile-parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DockerFileParser", function() { return _dockerfile_parser__WEBPACK_IMPORTED_MODULE_1__["DockerFileParser"]; });





/***/ })

}]);
//# sourceMappingURL=dev-console-edit~git-import-form~source-to-image-form-922eba9950802c1806ae.js.map