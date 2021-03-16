(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-hub"],{

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/index.ts":
/*!**********************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/index.ts ***!
  \**********************************************************************************/
/*! exports provided: ProviderType, InstalledState, CapabilityLevel, InfraFeatures, OperatorHubCSVAnnotationKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderType", function() { return ProviderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalledState", function() { return InstalledState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapabilityLevel", function() { return CapabilityLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfraFeatures", function() { return InfraFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubCSVAnnotationKey", function() { return OperatorHubCSVAnnotationKey; });
var ProviderType;
(function (ProviderType) {
    ProviderType["RedHat"] = "Red Hat";
    ProviderType["Certified"] = "Certified";
    ProviderType["Community"] = "Community";
    ProviderType["Custom"] = "Custom";
    ProviderType["Marketplace"] = "Marketplace";
})(ProviderType || (ProviderType = {}));
var InstalledState;
(function (InstalledState) {
    InstalledState["Installed"] = "Installed";
    InstalledState["NotInstalled"] = "Not Installed";
})(InstalledState || (InstalledState = {}));
var CapabilityLevel;
(function (CapabilityLevel) {
    CapabilityLevel["BasicInstall"] = "Basic Install";
    CapabilityLevel["SeamlessUpgrades"] = "Seamless Upgrades";
    CapabilityLevel["FullLifecycle"] = "Full Lifecycle";
    CapabilityLevel["DeepInsights"] = "Deep Insights";
})(CapabilityLevel || (CapabilityLevel = {}));
var InfraFeatures;
(function (InfraFeatures) {
    InfraFeatures["Disconnected"] = "Disconnected";
    InfraFeatures["Proxy"] = "Proxy";
    InfraFeatures["FipsMode"] = "FIPS Mode";
})(InfraFeatures || (InfraFeatures = {}));
var OperatorHubCSVAnnotationKey;
(function (OperatorHubCSVAnnotationKey) {
    OperatorHubCSVAnnotationKey["certifiedLevel"] = "certifiedLevel";
    OperatorHubCSVAnnotationKey["healthIndex"] = "healthIndex";
    OperatorHubCSVAnnotationKey["repository"] = "repository";
    OperatorHubCSVAnnotationKey["containerImage"] = "containerImage";
    OperatorHubCSVAnnotationKey["createdAt"] = "createdAt";
    OperatorHubCSVAnnotationKey["support"] = "support";
    OperatorHubCSVAnnotationKey["description"] = "description";
    OperatorHubCSVAnnotationKey["categories"] = "categories";
    OperatorHubCSVAnnotationKey["capabilities"] = "capabilities";
    OperatorHubCSVAnnotationKey["actionText"] = "marketplace.openshift.io/action-text";
    OperatorHubCSVAnnotationKey["remoteWorkflow"] = "marketplace.openshift.io/remote-workflow";
    OperatorHubCSVAnnotationKey["supportWorkflow"] = "marketplace.openshift.io/support-workflow";
    OperatorHubCSVAnnotationKey["infrastructureFeatures"] = "operators.openshift.io/infrastructure-features";
    OperatorHubCSVAnnotationKey["validSubscription"] = "operators.openshift.io/valid-subscription";
    OperatorHubCSVAnnotationKey["tags"] = "tags";
})(OperatorHubCSVAnnotationKey || (OperatorHubCSVAnnotationKey = {}));


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-community-provider-modal.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-community-provider-modal.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: OperatorHubCommunityProviderModal, communityOperatorWarningModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubCommunityProviderModal", function() { return OperatorHubCommunityProviderModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "communityOperatorWarningModal", function() { return communityOperatorWarningModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");






class OperatorHubCommunityProviderModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onIgnoreChange = (checked) => {
            this.setState({ ignoreWarnings: checked });
        };
        this.submit = (event) => {
            event.preventDefault();
            this.props.showCommunityOperators(this.state.ignoreWarnings);
            this.props.close();
        };
        this.state = {
            ignoreWarnings: false,
        };
    }
    render() {
        const { ignoreWarnings } = this.state;
        const submitButtonContent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "Continue");
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit, className: "modal-content co-modal-ignore-warning" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalTitle"], null, "Show Community Operator"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-modal-ignore-warning__content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-modal-ignore-warning__icon" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["InfoCircleIcon"], null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                            "Community Operators are operators which have not been vetted or verified by Red Hat. Community Operators should be used with caution because their stability is unknown. Red Hat provides no support for Community Operators.",
                            _console_shared__WEBPACK_IMPORTED_MODULE_3__["RH_OPERATOR_SUPPORT_POLICY_LINK"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-modal-ignore-warning__link" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["ExternalLink"], { href: _console_shared__WEBPACK_IMPORTED_MODULE_3__["RH_OPERATOR_SUPPORT_POLICY_LINK"], text: "Learn more about Red Hat\u2019s third party software support policy" })))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], { className: "co-modal-ignore-warning__checkbox", onChange: this.onIgnoreChange, isChecked: ignoreWarnings, id: "do-not-show-warning", label: "Do not show this warning again" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["ModalSubmitFooter"], { submitText: submitButtonContent, inProgress: false, errorMessage: "", cancel: this.props.close })));
    }
}
const communityOperatorWarningModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_4__["createModalLauncher"])(OperatorHubCommunityProviderModal);


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-item-details.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-item-details.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: OperatorHubItemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubItemDetails", function() { return OperatorHubItemDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _clusterserviceversion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clusterserviceversion */ "./packages/operator-lifecycle-manager/src/components/clusterserviceversion.tsx");









const CapabilityLevel = ({ capabilityLevel }) => {
    const levels = [
        'Basic Install',
        'Seamless Upgrades',
        'Full Lifecycle',
        'Deep Insights',
        'Auto Pilot',
    ];
    const capabilityLevelIndex = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](levels, capabilityLevel);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "properties-side-panel-pf-property-value__capability-levels" }, levels.map((level, i) => {
        const active = capabilityLevelIndex >= i;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('properties-side-panel-pf-property-value__capability-level', {
                'properties-side-panel-pf-property-value__capability-level--active': active,
            }), key: level },
            active && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["CheckCircleIcon"], { color: "var(--pf-global--primary-color--100)", className: "properties-side-panel-pf-property-value__capability-level-icon", title: "Checked" })),
            level));
    })));
};
const OperatorHubItemDetails = ({ item, namespace, }) => {
    if (!item) {
        return null;
    }
    const { installed, provider, providerType, longDescription, description, version, repository, containerImage, createdAt, support, capabilityLevel, marketplaceSupportWorkflow, infraFeatures, validSubscription, } = item;
    const notAvailable = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "properties-side-panel-pf-property-label" }, "N/A");
    const getHintBlock = () => {
        if (installed) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["HintBlock"], { className: "co-catalog-page__hint", title: "Installed Operator" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    "This Operator has been installed on the cluster.",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: `/k8s/${namespace ? `ns/${namespace}` : 'all-namespaces'}/clusterserviceversions` }, "View it here."))));
        }
        if (providerType === 'Community') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["HintBlock"], { className: "co-catalog-page__hint", title: "Community Operator" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "This is a community provided operator. These are operators which have not been vetted or verified by Red Hat. Community Operators should be used with caution because their stability is unknown. Red Hat provides no support for Community Operators."),
                _console_shared__WEBPACK_IMPORTED_MODULE_7__["RH_OPERATOR_SUPPORT_POLICY_LINK"] && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-modal-ignore-warning__link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: _console_shared__WEBPACK_IMPORTED_MODULE_7__["RH_OPERATOR_SUPPORT_POLICY_LINK"], text: "Learn more about Red Hat\u2019s third party software support policy" })))));
        }
        if (providerType === 'Marketplace') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["HintBlock"], { title: "Marketplace Operator" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "This Operator is purchased through Red Hat Marketplace. After completing the purchase process, you can install the Operator on this or other OpenShift clusters. Visit Red Hat Marketplace for more details and to track your usage of this application."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: "https://marketplace.redhat.com/en-us?utm_source=openshift_console", text: "Learn more about the Red Hat Marketplace" }))));
        }
        return null;
    };
    const mappedData = (data) => Array.isArray(data) ? data.map((d) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: d }, d)) : notAvailable;
    const mappedInfraFeatures = mappedData(infraFeatures);
    const mappedValidSubscription = mappedData(validSubscription);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body modal-body-border" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body-inner-shadow-covers" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertiesSidePanel"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Operator Version", value: version || notAvailable }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Capability Level", value: capabilityLevel ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CapabilityLevel, { capabilityLevel: capabilityLevel })) : (notAvailable) }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Provider Type", value: providerType || notAvailable }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Provider", value: provider || notAvailable }),
                        infraFeatures && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Infrastructure Features", value: mappedInfraFeatures })),
                        validSubscription && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Valid Subscriptions", value: mappedValidSubscription })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Repository", value: repository || notAvailable }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Container Image", value: containerImage || notAvailable }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Created At", value: createdAt || notAvailable }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Support", value: marketplaceSupportWorkflow ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: marketplaceSupportWorkflow, text: "Get support" })) : (support || notAvailable) })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-description" },
                        getHintBlock(),
                        longDescription ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_clusterserviceversion__WEBPACK_IMPORTED_MODULE_8__["MarkdownView"], { content: longDescription }) : description))))));
};
OperatorHubItemDetails.defaultProps = {
    item: null,
};
OperatorHubItemDetails.displayName = 'OperatorHubItemDetails';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-items.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-items.tsx ***!
  \************************************************************************************************/
/*! exports provided: getProviderValue, keywordCompare, OperatorHubTileView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProviderValue", function() { return getProviderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keywordCompare", function() { return keywordCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubTileView", function() { return OperatorHubTileView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_components_utils_tile_view_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils/tile-view-page */ "./public/components/utils/tile-view-page.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _operator_hub_item_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operator-hub-item-details */ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-item-details.tsx");
/* harmony import */ var _operator_hub_community_provider_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operator-hub-community-provider-modal */ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-community-provider-modal.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index */ "./packages/operator-lifecycle-manager/src/components/operator-hub/index.ts");















const osBaseLabel = 'operatorframework.io/os.';
const targetGOOSLabel = window.SERVER_FLAGS.GOOS ? `${osBaseLabel}${window.SERVER_FLAGS.GOOS}` : '';
const archBaseLabel = 'operatorframework.io/arch.';
const targetGOARCHLabel = window.SERVER_FLAGS.GOARCH
    ? `${archBaseLabel}${window.SERVER_FLAGS.GOARCH}`
    : '';
// if no label present, these are the assumed defaults
const archDefaultAMD64Label = 'operatorframework.io/arch.amd64';
const osDefaultLinuxLabel = 'operatorframework.io/os.linux';
const filterByArchAndOS = (items) => {
    if (!window.SERVER_FLAGS.GOARCH || !window.SERVER_FLAGS.GOOS) {
        return items;
    }
    return items.filter((item) => {
        var _a, _b;
        // - if the operator has no flags, treat it with the defaults
        // - if it has any flags, it must list all flags (no defaults applied)
        const relevantLabels = lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"]((_b = (_a = item === null || item === void 0 ? void 0 : item.obj) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.labels, (result, value, label) => {
            if (label.includes(archBaseLabel) && value === 'supported') {
                result.arch.push(label);
            }
            if (label.includes(osBaseLabel) && value === 'supported') {
                result.os.push(label);
            }
            return result;
        }, {
            arch: [],
            os: [],
        });
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](relevantLabels.os)) {
            relevantLabels.os.push(osDefaultLinuxLabel);
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](relevantLabels.os)) {
            relevantLabels.arch.push(archDefaultAMD64Label);
        }
        return (lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](relevantLabels.os, targetGOOSLabel) &&
            lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](relevantLabels.arch, targetGOARCHLabel));
    });
};
const badge = (text) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: "1", className: "pf-c-badge pf-m-read" }, text));
/**
 * Filter property white list
 */
const operatorHubFilterGroups = [
    'providerType',
    'provider',
    'installState',
    'capabilityLevel',
    'infraFeatures',
];
const operatorHubFilterMap = {
    providerType: 'Provider Type',
    provider: 'Provider',
    installState: 'Install State',
    capabilityLevel: 'Capability Level',
    infraFeatures: 'Infrastructure Features',
};
const COMMUNITY_PROVIDER_TYPE = 'Community';
const MARKETPLACE_PROVIDER_TYPE = 'Marketplace';
const ignoredProviderTails = [', Inc.', ', Inc', ' Inc.', ' Inc', ', LLC', ' LLC'];
const determineCategories = (items) => {
    const newCategories = {};
    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](items, (item) => {
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](item.categories, (category) => {
            if (!newCategories[category]) {
                newCategories[category] = {
                    id: category,
                    label: category,
                    field: 'categories',
                    values: [category],
                };
            }
        });
    });
    const sortedKeys = lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](newCategories).sort((key1, key2) => key1.toLowerCase().localeCompare(key2.toLowerCase()));
    return lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"](sortedKeys, (categories, key) => {
        categories[key] = newCategories[key];
        return categories;
    }, {});
};
const getProviderValue = (value) => {
    if (!value) {
        return value;
    }
    const providerTail = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](ignoredProviderTails, (tail) => value.endsWith(tail));
    if (providerTail) {
        return value.substring(0, value.indexOf(providerTail));
    }
    return value;
};
const providerSort = (provider) => {
    if (provider.value.toLowerCase() === 'red hat') {
        return '';
    }
    return provider.value;
};
const providerTypeSort = (provider) => {
    switch (provider.value) {
        case _index__WEBPACK_IMPORTED_MODULE_14__["ProviderType"].RedHat:
            return 0;
        case _index__WEBPACK_IMPORTED_MODULE_14__["ProviderType"].Certified:
            return 1;
        case _index__WEBPACK_IMPORTED_MODULE_14__["ProviderType"].Community:
            return 2;
        case _index__WEBPACK_IMPORTED_MODULE_14__["ProviderType"].Marketplace:
            return 3;
        default:
            return 4;
    }
};
const installedStateSort = (provider) => {
    switch (provider.value) {
        case _index__WEBPACK_IMPORTED_MODULE_14__["InstalledState"].Installed:
            return 0;
        case _index__WEBPACK_IMPORTED_MODULE_14__["InstalledState"].NotInstalled:
            return 1;
        default:
            return 3;
    }
};
const capabilityLevelSort = (provider) => {
    switch (provider.value) {
        case _index__WEBPACK_IMPORTED_MODULE_14__["CapabilityLevel"].BasicInstall:
            return 0;
        case _index__WEBPACK_IMPORTED_MODULE_14__["CapabilityLevel"].SeamlessUpgrades:
            return 1;
        case _index__WEBPACK_IMPORTED_MODULE_14__["CapabilityLevel"].FullLifecycle:
            return 2;
        case _index__WEBPACK_IMPORTED_MODULE_14__["CapabilityLevel"].DeepInsights:
            return 3;
        default:
            return 5;
    }
};
const infraFeaturesSort = (infrastructure) => {
    switch (infrastructure.value) {
        case _index__WEBPACK_IMPORTED_MODULE_14__["InfraFeatures"].Disconnected:
            return 0;
        case _index__WEBPACK_IMPORTED_MODULE_14__["InfraFeatures"].Proxy:
            return 1;
        case _index__WEBPACK_IMPORTED_MODULE_14__["InfraFeatures"].FipsMode:
            return 2;
        default:
            return 3;
    }
};
const sortFilterValues = (values, field) => {
    let sorter = ['value'];
    if (field === 'provider') {
        sorter = providerSort;
    }
    if (field === 'providerType') {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](values, [providerTypeSort, 'value']);
    }
    if (field === 'installState') {
        sorter = installedStateSort;
    }
    if (field === 'capabilityLevel') {
        sorter = capabilityLevelSort;
    }
    if (field === 'infraFeatures') {
        sorter = infraFeaturesSort;
    }
    return lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](values, sorter);
};
const determineAvailableFilters = (initialFilters, items, filterGroups) => {
    const filters = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](initialFilters);
    // Always show both install state filters
    filters.installState = {
        Installed: {
            label: 'Installed',
            value: 'Installed',
            active: false,
        },
        'Not Installed': {
            label: 'Not Installed',
            value: 'Not Installed',
            active: false,
        },
    };
    lodash__WEBPACK_IMPORTED_MODULE_2__["each"](filterGroups, (field) => {
        const values = [];
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](items, (item) => {
            let value = item[field];
            let synonyms;
            if (field === 'provider') {
                value = getProviderValue(value);
                synonyms = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](ignoredProviderTails, (tail) => `${value}${tail}`);
            }
            if (value !== undefined && !Array.isArray(value)) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["some"](values, { value })) {
                    values.push({
                        label: value,
                        synonyms,
                        value,
                        active: false,
                    });
                }
            }
            if (Array.isArray(value)) {
                lodash__WEBPACK_IMPORTED_MODULE_2__["each"](value, (v) => {
                    if (!lodash__WEBPACK_IMPORTED_MODULE_2__["some"](values, { v })) {
                        values.push({
                            label: v,
                            synonyms,
                            value: v,
                            active: false,
                        });
                    }
                });
            }
        });
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](sortFilterValues(values, field), (nextValue) => lodash__WEBPACK_IMPORTED_MODULE_2__["set"](filters, [field, nextValue.value], nextValue));
    });
    return filters;
};
const keywordCompare = (filterString, item) => {
    if (!filterString) {
        return true;
    }
    if (!item) {
        return false;
    }
    return (item.name.toLowerCase().includes(filterString) ||
        lodash__WEBPACK_IMPORTED_MODULE_2__["get"](item, 'obj.metadata.name', '')
            .toLowerCase()
            .includes(filterString) ||
        (item.description && item.description.toLowerCase().includes(filterString)) ||
        (item.tags && item.tags.includes(filterString)));
};
const setURLParams = (params) => {
    const url = new URL(window.location.href);
    const searchParams = `?${params.toString()}${url.hash}`;
    _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_9__["history"].replace(`${url.pathname}${searchParams}`);
};
const OperatorHubTileView = (props) => {
    const [detailsItem, setDetailsItem] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [showDetails, setShowDetails] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const filteredItems = filterByArchAndOS(props.items);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const detailsItemID = new URLSearchParams(window.location.search).get('details-item');
        const currentItem = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](filteredItems, { uid: detailsItemID });
        setDetailsItem(currentItem);
        setShowDetails(!lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"](currentItem));
    }, [filteredItems]);
    const showCommunityOperator = (item) => (ignoreWarning = false) => {
        const params = new URLSearchParams(window.location.search);
        params.set('details-item', item.uid);
        setURLParams(params);
        setDetailsItem(item);
        setShowDetails(true);
        if (ignoreWarning) {
            localStorage.setItem(_console_shared__WEBPACK_IMPORTED_MODULE_8__["COMMUNITY_PROVIDERS_WARNING_LOCAL_STORAGE_KEY"], 'true');
        }
    };
    const openOverlay = (item) => {
        const ignoreWarning = localStorage.getItem(_console_shared__WEBPACK_IMPORTED_MODULE_8__["COMMUNITY_PROVIDERS_WARNING_LOCAL_STORAGE_KEY"]) === 'true';
        if (!ignoreWarning && item.providerType === COMMUNITY_PROVIDER_TYPE) {
            Object(_operator_hub_community_provider_modal__WEBPACK_IMPORTED_MODULE_13__["communityOperatorWarningModal"])({
                showCommunityOperators: (ignore) => showCommunityOperator(item)(ignore),
            });
        }
        else {
            const params = new URLSearchParams(window.location.search);
            params.set('details-item', item.uid);
            setURLParams(params);
            setDetailsItem(item);
            setShowDetails(true);
        }
    };
    const closeOverlay = () => {
        const params = new URLSearchParams(window.location.search);
        params.delete('details-item');
        setURLParams(params);
        setDetailsItem(null);
        setShowDetails(false);
    };
    const renderTile = (item) => {
        if (!item) {
            return null;
        }
        const { uid, name, imgUrl, provider, description, installed } = item;
        const vendor = provider ? `provided by ${provider}` : null;
        const badges = [COMMUNITY_PROVIDER_TYPE, MARKETPLACE_PROVIDER_TYPE].includes(item.providerType)
            ? [badge(item.providerType)]
            : [];
        const icon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "catalog-tile-pf-icon", loading: "lazy", src: imgUrl, alt: "" });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["CatalogTile"], { className: "co-catalog-tile", key: uid, title: name, badges: badges, icon: icon, vendor: vendor, description: description, onClick: () => openOverlay(item), footer: installed ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_8__["GreenCheckCircleIcon"], null),
                " Installed")) : null, "data-test": uid }));
    };
    const createLink = detailsItem &&
        `/operatorhub/subscribe?pkg=${detailsItem.obj.metadata.name}&catalog=${detailsItem.catalogSource}&catalogNamespace=${detailsItem.catalogSourceNamespace}&targetNamespace=${props.namespace}`;
    const uninstallLink = () => detailsItem &&
        `/k8s/ns/${detailsItem.subscription.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_11__["SubscriptionModel"].plural}/${detailsItem.subscription.metadata.name}?showDelete=true`;
    if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](filteredItems)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["EmptyStateVariant"].full, className: "co-status-card__alerts-msg" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Title"], { headingLevel: "h5", size: "lg" }, "No operators available"),
                window.SERVER_FLAGS.GOOS && window.SERVER_FLAGS.GOARCH && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["EmptyStateBody"], null,
                    "There are no operators that match operating system ",
                    window.SERVER_FLAGS.GOOS,
                    " and architecture ",
                    window.SERVER_FLAGS.GOARCH,
                    ".")))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_tile_view_page__WEBPACK_IMPORTED_MODULE_10__["TileViewPage"], { items: filteredItems, itemsSorter: (itemsToSort) => lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](itemsToSort, ({ name }) => name.toLowerCase()), getAvailableCategories: determineCategories, getAvailableFilters: determineAvailableFilters, filterGroups: operatorHubFilterGroups, filterGroupNameMap: operatorHubFilterMap, keywordCompare: keywordCompare, renderTile: renderTile, emptyStateInfo: "No OperatorHub items are being shown due to the filters being applied." }),
        detailsItem && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Modal"], { className: "co-catalog-page__overlay co-catalog-page__overlay--right", "data-test-id": "operator-modal-box", header: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["CatalogItemHeader"], { iconClass: detailsItem.iconClass, iconImg: detailsItem.imgUrl, title: detailsItem.name, vendor: `${detailsItem.version} provided by ${detailsItem.provider}`, "data-test-id": "operator-modal-header" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-actions" },
                    detailsItem.marketplaceRemoteWorkflow && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { additionalClassName: "pf-c-button pf-m-primary co-catalog-page__overlay-action", href: detailsItem.marketplaceRemoteWorkflow, text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-action-label" }, detailsItem.marketplaceActionText || 'Purchase'),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["ExternalLinkAltIcon"], { className: "co-catalog-page__overlay-action-icon" })) })),
                    !detailsItem.installed ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__('pf-c-button', { 'pf-m-secondary': detailsItem.marketplaceRemoteWorkflow }, { 'pf-m-primary': !detailsItem.marketplaceRemoteWorkflow }, 'co-catalog-page__overlay-action'), "data-test-id": "operator-install-btn", to: createLink }, "Install")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Button"], { className: "co-catalog-page__overlay-action", "data-test-id": "operator-uninstall-btn", isDisabled: !detailsItem.installed, onClick: () => _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_9__["history"].push(uninstallLink()), variant: "secondary" }, "Uninstall")))), isOpen: !!detailsItem && showDetails, onClose: closeOverlay, title: detailsItem.name },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_operator_hub_item_details__WEBPACK_IMPORTED_MODULE_12__["OperatorHubItemDetails"], { namespace: props.namespace, item: detailsItem })))));
};
OperatorHubTileView.displayName = 'OperatorHubTileView';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-page.tsx":
/*!***********************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-page.tsx ***!
  \***********************************************************************************************/
/*! exports provided: OperatorHubList, OperatorHubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubList", function() { return OperatorHubList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHubPage", function() { return OperatorHubPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/error/error-boundary */ "./packages/console-shared/src/components/error/error-boundary.tsx");
/* harmony import */ var _console_internal_components_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/error */ "./public/components/error.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_module_k8s_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/module/k8s/selector */ "./public/module/k8s/selector.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .. */ "./packages/operator-lifecycle-manager/src/components/index.tsx");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _operator_hub_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operator-hub-utils */ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-utils.ts");
/* harmony import */ var _operator_hub_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operator-hub-items */ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-items.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index */ "./packages/operator-lifecycle-manager/src/components/operator-hub/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
















const ANNOTATIONS_WITH_JSON = [
    _index__WEBPACK_IMPORTED_MODULE_14__["OperatorHubCSVAnnotationKey"].infrastructureFeatures,
    _index__WEBPACK_IMPORTED_MODULE_14__["OperatorHubCSVAnnotationKey"].validSubscription,
];
const OperatorHubList = (props) => {
    const { operatorGroup, subscription, loaded, loadError, namespace = '' } = props;
    // FIXME optional chaining
    const marketplaceItems = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.marketplacePackageManifest, 'data', []);
    const localItems = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props, 'packageManifest.data', []); // FIXME optional chaining
    const getPackageStatus = (pkg) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](pkg, 'status'); // FIXME optional chaining and/or is this needed?
    const items = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        return marketplaceItems
            .concat(localItems)
            .filter((pkg) => {
            // if a package does not have status.defaultChannel, exclude it so the app doesn't fail
            const { defaultChannel } = getPackageStatus(pkg);
            if (!defaultChannel) {
                // eslint-disable-next-line no-console
                console.warn(`PackageManifest ${pkg.metadata.name} has no status.defaultChannel and has been excluded`);
                return false;
            }
            return true;
        })
            .map((pkg) => {
            const { channels, defaultChannel } = getPackageStatus(pkg);
            const { currentCSVDesc } = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](channels || [], { name: defaultChannel });
            // FIXME optional chaining
            const currentCSVAnnotations = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](currentCSVDesc, 'annotations', {});
            const [infraFeatures, validSubscription] = ANNOTATIONS_WITH_JSON.map((annotationKey) => {
                return Object(_console_shared__WEBPACK_IMPORTED_MODULE_15__["parseJSONAnnotation"])(currentCSVAnnotations, annotationKey, () => 
                // eslint-disable-next-line no-console
                console.warn(`Error parsing annotation in PackageManifest ${pkg.metadata.name}`));
            });
            const { certifiedLevel, healthIndex, repository, containerImage, createdAt, support, capabilities: capabilityLevel, [_index__WEBPACK_IMPORTED_MODULE_14__["OperatorHubCSVAnnotationKey"].actionText]: marketplaceActionText, [_index__WEBPACK_IMPORTED_MODULE_14__["OperatorHubCSVAnnotationKey"].remoteWorkflow]: marketplaceRemoteWorkflow, [_index__WEBPACK_IMPORTED_MODULE_14__["OperatorHubCSVAnnotationKey"].supportWorkflow]: marketplaceSupportWorkflow, } = currentCSVAnnotations;
            return {
                obj: pkg,
                kind: _models__WEBPACK_IMPORTED_MODULE_9__["PackageManifestModel"].kind,
                name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](currentCSVDesc, 'displayName', pkg.metadata.name),
                uid: `${pkg.metadata.name}-${pkg.status.catalogSource}-${pkg.status.catalogSourceNamespace}`,
                installed: Object(_operator_group__WEBPACK_IMPORTED_MODULE_11__["installedFor"])(subscription.data)(operatorGroup.data)(pkg.status.packageName)(namespace),
                subscription: Object(_operator_group__WEBPACK_IMPORTED_MODULE_11__["subscriptionFor"])(subscription.data)(operatorGroup.data)(pkg.status.packageName)(namespace),
                // FIXME: Just use `installed`
                installState: Object(_operator_group__WEBPACK_IMPORTED_MODULE_11__["installedFor"])(subscription.data)(operatorGroup.data)(pkg.status.packageName)(namespace)
                    ? _index__WEBPACK_IMPORTED_MODULE_14__["InstalledState"].Installed
                    : _index__WEBPACK_IMPORTED_MODULE_14__["InstalledState"].NotInstalled,
                imgUrl: Object(___WEBPACK_IMPORTED_MODULE_10__["iconFor"])(pkg),
                description: currentCSVAnnotations.description || currentCSVDesc.description,
                longDescription: currentCSVDesc.description || currentCSVAnnotations.description,
                provider: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](pkg, 'status.provider.name', lodash__WEBPACK_IMPORTED_MODULE_1__["get"](pkg, 'metadata.labels.provider')),
                providerType: Object(_operator_hub_utils__WEBPACK_IMPORTED_MODULE_12__["getOperatorProviderType"])(pkg),
                tags: [],
                version: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](currentCSVDesc, 'version'),
                categories: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](currentCSVAnnotations, 'categories', '') // FIXME optional chaining
                    .split(',')
                    .map((category) => category.trim()),
                catalogSource: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](pkg, 'status.catalogSource'),
                catalogSourceNamespace: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](pkg, 'status.catalogSourceNamespace'),
                certifiedLevel,
                healthIndex,
                repository,
                containerImage,
                createdAt,
                support,
                capabilityLevel,
                marketplaceActionText,
                marketplaceRemoteWorkflow,
                marketplaceSupportWorkflow,
                validSubscription,
                infraFeatures,
            };
        });
    }, [localItems, marketplaceItems, namespace, operatorGroup.data, subscription.data]);
    const uniqueItems = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](items, 'uid');
    if (uniqueItems.length !== items.length) {
        // eslint-disable-next-line no-console
        console.warn(`${items.length - uniqueItems.length} duplicate packagemanifests returned from olm query.`);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["StatusBox"], { skeleton: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["skeletonCatalog"], data: items, loaded: loaded, loadError: loadError, label: "Resources", EmptyMsg: () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["MsgBox"], { title: "No OperatorHub Items Found", detail: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                "Please check that the OperatorHub is running and that you have created a valid OperatorSource. For more information about OperatorHub, please click",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: "https://github.com/operator-framework/operator-marketplace", text: "here" }),
                ".") })) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_operator_hub_items__WEBPACK_IMPORTED_MODULE_13__["OperatorHubTileView"], { items: uniqueItems, namespace: namespace })));
};
const OperatorHubPage = Object(_console_shared_src_components_error_error_boundary__WEBPACK_IMPORTED_MODULE_5__["withFallback"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "OperatorHub")),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-page__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["PageHeading"], { title: "OperatorHub" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-page__description" },
                "Discover Operators from the Kubernetes community and Red Hat partners, curated by Red Hat. You can purchase commercial software through",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: "https://marketplace.redhat.com/en-us?utm_source=openshift_console", text: "Red Hat Marketplace" }),
                ". You can install Operators on your clusters to provide optional add-ons and shared services to your developers. After installation, the Operator capabilities will appear in the ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "/catalog" }, "Developer Catalog"),
                " providing a self-service experience."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog__body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: [
                        {
                            isList: true,
                            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["OperatorGroupModel"]),
                            prop: 'operatorGroup',
                        },
                        {
                            isList: true,
                            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["PackageManifestModel"]),
                            namespace: props.match.params.ns,
                            selector: { 'openshift-marketplace': 'true' },
                            prop: 'marketplacePackageManifest',
                        },
                        {
                            isList: true,
                            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["PackageManifestModel"]),
                            namespace: props.match.params.ns,
                            selector: Object(_console_internal_module_k8s_selector__WEBPACK_IMPORTED_MODULE_8__["fromRequirements"])([
                                { key: 'opsrc-owner-name', operator: 'DoesNotExist' },
                                { key: 'csc-owner-name', operator: 'DoesNotExist' },
                            ]),
                            prop: 'packageManifest',
                        },
                        {
                            isList: true,
                            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_9__["SubscriptionModel"]),
                            prop: 'subscription',
                        },
                    ] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OperatorHubList, Object.assign({}, props, { namespace: props.match.params.ns })))))))), _console_internal_components_error__WEBPACK_IMPORTED_MODULE_6__["ErrorBoundaryFallback"]);
OperatorHubList.displayName = 'OperatorHubList';
OperatorHubPage.displayName = 'OperatorHubPage';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-utils.ts":
/*!***********************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-hub/operator-hub-utils.ts ***!
  \***********************************************************************************************/
/*! exports provided: operatorProviderTypeMap, getOperatorProviderType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorProviderTypeMap", function() { return operatorProviderTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorProviderType", function() { return getOperatorProviderType; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const operatorProviderTypeMap = {
    redhat: 'Red Hat',
    marketplace: 'Marketplace',
    certified: 'Certified',
    community: 'Community',
};
const getCustomOperatorProviderType = (packageManifest) => packageManifest.status.catalogSourceDisplayName || packageManifest.status.catalogSource;
const getOperatorProviderType = (packageManifest) => {
    const srcProvider = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](packageManifest, 'metadata.labels.opsrc-provider');
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](operatorProviderTypeMap, srcProvider, getCustomOperatorProviderType(packageManifest));
};


/***/ })

}]);
//# sourceMappingURL=operator-hub-7cc21f1ea09aa7741695.js.map