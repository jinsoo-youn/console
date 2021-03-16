(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tags"],{

/***/ "./public/components/modals/tags.tsx":
/*!*******************************************!*\
  !*** ./public/components/modals/tags.tsx ***!
  \*******************************************/
/*! exports provided: TagsModal, annotationsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModal", function() { return TagsModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationsModal", function() { return annotationsModal; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/async */ "./public/components/utils/async.tsx");






/**
 * Set up an AsyncComponent to wrap the name-value-editor to allow on demand loading to reduce the
 * vendor footprint size.
 */
const NameValueEditorComponent = (props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_async__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], Object.assign({ loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../utils/name-value-editor */ "./public/components/utils/name-value-editor.jsx")).then((c) => c.NameValueEditor) }, props)));
const TagsModal = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["withHandlePromise"])((props) => {
    // Track tags as an array instead of an object / Map so we can preserve the order during editing and so we can have
    // duplicate keys during editing. However, the ordering and any duplicate keys are lost when the form is submitted.
    const [tags, setTags] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](props.tags) ? [['', '']] : lodash_es__WEBPACK_IMPORTED_MODULE_0__["toPairs"](props.tags));
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.errorMessage);
    const submit = (e) => {
        e.preventDefault();
        // We just throw away any rows where the key is blank
        const usedTags = lodash_es__WEBPACK_IMPORTED_MODULE_0__["reject"](tags, (t) => lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](t[_utils__WEBPACK_IMPORTED_MODULE_4__["NameValueEditorPair"].Name]));
        const keys = usedTags.map((t) => t[_utils__WEBPACK_IMPORTED_MODULE_4__["NameValueEditorPair"].Name]);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["uniq"](keys).length !== keys.length) {
            setErrorMessage('Duplicate keys found.');
            return;
        }
        // Make sure to 'add' if the path does not already exist, otherwise the patch request will fail
        const op = props.tags ? 'replace' : 'add';
        const patch = [{ path: props.path, op, value: lodash_es__WEBPACK_IMPORTED_MODULE_0__["fromPairs"](usedTags) }];
        const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sPatch"])(props.kind, props.resource, patch);
        props.handlePromise(promise).then(props.close);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: submit, className: "modal-content" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, props.title),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](NameValueEditorComponent, { nameValuePairs: tags, submit: submit, updateParentData: ({ nameValuePairs }) => setTags(nameValuePairs) })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { submitText: "Save", cancel: props.cancel, errorMessage: props.errorMessage || errorMessage, inProgress: props.inProgress })));
});
const annotationsModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TagsModal, Object.assign({ path: "/metadata/annotations", tags: props.resource.metadata.annotations, title: "Edit Annotations" }, props))));
TagsModal.displayName = 'TagsModal';


/***/ })

}]);
//# sourceMappingURL=tags-17814ec46b8f55afc9e9.js.map