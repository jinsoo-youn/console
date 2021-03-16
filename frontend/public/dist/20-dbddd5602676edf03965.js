(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./packages/operator-lifecycle-manager/src/components/create-catalog-source.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/create-catalog-source.tsx ***!
  \**************************************************************************************/
/*! exports provided: CreateCatalogSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCatalogSource", function() { return CreateCatalogSource; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");







var AvailabilityValue;
(function (AvailabilityValue) {
    AvailabilityValue["ALL_NAMESPACES"] = "0";
    AvailabilityValue["SINGLE_NAMESPACE"] = "1";
})(AvailabilityValue || (AvailabilityValue = {}));
const availabilityKinds = [
    {
        value: AvailabilityValue.ALL_NAMESPACES,
        title: 'Cluster-wide catalog source',
        desc: 'Catalog will be available in all namespaces',
    },
    {
        value: AvailabilityValue.SINGLE_NAMESPACE,
        title: 'Namespace catalog source',
        desc: 'Catalog will only be available in a single namespace',
    },
];
const CreateCatalogSource = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])(({ handlePromise, inProgress, errorMessage }) => {
    const [availability, setAvailability] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](AvailabilityValue.ALL_NAMESPACES);
    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [displayName, setDisplayName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [namespace, setNamespace] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [publisher, setPublisher] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const onSave = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((e) => {
        e.preventDefault();
        return handlePromise(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_6__["CatalogSourceModel"], {
            apiVersion: `${_models__WEBPACK_IMPORTED_MODULE_6__["CatalogSourceModel"].apiGroup}/${_models__WEBPACK_IMPORTED_MODULE_6__["CatalogSourceModel"].apiVersion}`,
            kind: _models__WEBPACK_IMPORTED_MODULE_6__["CatalogSourceModel"].kind,
            metadata: {
                name,
                namespace: availability === AvailabilityValue.ALL_NAMESPACES
                    ? 'openshift-marketplace'
                    : namespace,
            },
            spec: {
                displayName,
                image,
                publisher,
                sourceType: 'grpc',
            },
        })).then(() => _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].goBack());
    }, [availability, displayName, handlePromise, image, name, namespace, publisher]);
    const onNamespaceChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((value) => {
        setNamespace(value);
    }, []);
    const onAvailabiltiyChange = ({ target: { value } }) => {
        setAvailability(value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Create Catalog Source")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" }, "Create Catalog Source"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-m-pane__explanation" }, "Create a catalog source in order to make operators available in OperatorHub."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Form"], { onSubmit: onSave },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "catalog-source-name", isRequired: true, label: "Catalog source name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: "catalog-source-name", isRequired: true, name: "catalog-source-name", onChange: setName, placeholder: "e.g. custom-catalog-source", type: "text", value: name })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "catalog-source-display-name", label: "Display name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: "catalog-source-display-name", name: "caltalog-source-display-name", onChange: setDisplayName, placeholder: "e.g. Custom Catalog Source", type: "text", value: displayName })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "catalog-source-publisher", label: "Publisher name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { id: "catalog-source-publisher", isRequired: true, name: "catalog-source-publisher", onChange: setPublisher, placeholder: "e.g. John Doe", type: "text", value: publisher })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { label: "Image (URL of container image)", isRequired: true, fieldId: "catalog-source-image", helperText: "URL of container image hosted on a registry" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { "aria-describedby": "catalog-source-image-helper", isRequired: true, type: "text", id: "catalog-source-image", name: "catalog-source-image", onChange: setImage, placeholder: "e.g. quay.io/johndoe/catalog-registry:latest", value: image })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "catalog-source-availability", label: "Availability" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"], { currentValue: availability, items: availabilityKinds, onChange: onAvailabiltiyChange })),
            availability === AvailabilityValue.SINGLE_NAMESPACE && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], { fieldId: "catalog-source-namespace", label: "Namespace", isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["NsDropdown"], { selectedKey: namespace, onChange: onNamespaceChange, id: "catalog-source-namespace" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ButtonBar"], { errorMessage: errorMessage, inProgress: inProgress },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ActionGroup"], { className: "pf-c-form__group--no-top-margin" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "submit", variant: "primary", id: "save-changes" }, "Create"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", variant: "secondary", id: "cancel", onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].goBack }, "Cancel"))))));
});


/***/ })

}]);
//# sourceMappingURL=20-dbddd5602676edf03965.js.map