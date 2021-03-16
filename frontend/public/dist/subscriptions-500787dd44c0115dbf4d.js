(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscriptions"],{

/***/ "./packages/operator-lifecycle-manager/src/components/modals/installplan-approval-modal.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/installplan-approval-modal.tsx ***!
  \**************************************************************************************************/
/*! exports provided: InstallPlanApprovalModal, createInstallPlanApprovalModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallPlanApprovalModal", function() { return InstallPlanApprovalModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstallPlanApprovalModal", function() { return createInstallPlanApprovalModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types */ "./packages/operator-lifecycle-manager/src/types.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");








const getApprovalStrategy = (props) => (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(props.obj) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["SubscriptionModel"]) &&
    lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.obj, 'spec.installPlanApproval')) ||
    (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(props.obj) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["InstallPlanModel"]) &&
        lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.obj, 'spec.approval')) ||
    _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Automatic;
class InstallPlanApprovalModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.props = props;
        this.state.selectedApprovalStrategy = getApprovalStrategy(props);
    }
    submit(event) {
        event.preventDefault();
        const updatedObj = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.props.obj);
        if (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(updatedObj) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["SubscriptionModel"])) {
            updatedObj.spec.installPlanApproval = this.state.selectedApprovalStrategy;
        }
        else if (Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(updatedObj) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["InstallPlanModel"])) {
            updatedObj.spec.approval = this.state.selectedApprovalStrategy;
        }
        this.handlePromise(this.props.k8sUpdate(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceFor"])(this.props.obj)), updatedObj))
            .then(() => this.props.close())
            .catch((err) => this.setState({ errorMessage: err }));
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit.bind(this), name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], { className: "modal-header" }, "Change Update Approval Strategy"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "What strategy is used for approving updates?")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-row row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__["RadioInput"], { onChange: (e) => this.setState({ selectedApprovalStrategy: e.target.value }), value: _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Automatic, checked: this.state.selectedApprovalStrategy === _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Automatic, title: _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Automatic, subTitle: "(default)" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-radio-desc" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-muted" }, "New updates will be installed as soon as they become available.")))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__["RadioInput"], { onChange: (e) => this.setState({ selectedApprovalStrategy: e.target.value }), value: _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Manual, checked: this.state.selectedApprovalStrategy === _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Manual, title: _types__WEBPACK_IMPORTED_MODULE_6__["InstallPlanApproval"].Manual },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-radio-desc" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "text-muted" }, "New updates need to be manually approved before installation begins.")))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { inProgress: this.state.inProgress, errorMessage: this.state.errorMessage, cancel: () => this.props.cancel(), submitText: "Save", submitDisabled: getApprovalStrategy(this.props) === this.state.selectedApprovalStrategy })));
    }
}
const createInstallPlanApprovalModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(InstallPlanApprovalModal);


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/modals/subscription-channel-modal.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/subscription-channel-modal.tsx ***!
  \**************************************************************************************************/
/*! exports provided: SubscriptionChannelModal, createSubscriptionChannelModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionChannelModal", function() { return SubscriptionChannelModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubscriptionChannelModal", function() { return createSubscriptionChannelModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/radio */ "./public/components/radio.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");







const getSelectedChannel = (props) => props.subscription.spec.channel || props.pkg.status.channels[0].name;
class SubscriptionChannelModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.props = props;
        this.state.selectedChannel = getSelectedChannel(props);
    }
    submit(event) {
        event.preventDefault();
        const updatedSub = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.props.subscription);
        updatedSub.spec.channel = this.state.selectedChannel;
        this.handlePromise(this.props.k8sUpdate(_models__WEBPACK_IMPORTED_MODULE_6__["SubscriptionModel"], updatedSub))
            .then(() => this.props.close())
            .catch((err) => this.setState({ errorMessage: err }));
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this.submit.bind(this), name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], { className: "modal-header" }, "Change Subscription Update Channel"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Which channel is used to receive updates?")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-form-row row" }, this.props.pkg.status.channels.map((channel) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: channel.name, className: "col-sm-12" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_radio__WEBPACK_IMPORTED_MODULE_5__["RadioInput"], { onChange: (e) => this.setState({ selectedChannel: e.target.value }), value: channel.name, checked: this.state.selectedChannel === channel.name, title: channel.name, subTitle: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { linkTo: false, name: channel.currentCSV, title: channel.currentCSV, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"]) }) })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { inProgress: this.state.inProgress, errorMessage: this.state.errorMessage, cancel: () => this.props.cancel(), submitText: "Save", submitDisabled: this.state.selectedChannel === getSelectedChannel(this.props) })));
    }
}
const createSubscriptionChannelModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(SubscriptionChannelModal);


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/modals/uninstall-operator-modal.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/modals/uninstall-operator-modal.tsx ***!
  \************************************************************************************************/
/*! exports provided: UninstallOperatorModal, createUninstallOperatorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UninstallOperatorModal", function() { return UninstallOperatorModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUninstallOperatorModal", function() { return createUninstallOperatorModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/operator-lifecycle-manager/src/models.ts");







const UninstallOperatorModal = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["withHandlePromise"])((props) => {
    var _a, _b;
    const submit = (event) => {
        event.preventDefault();
        const { subscription, k8sKill } = props;
        const deleteOptions = {
            kind: 'DeleteOptions',
            apiVersion: 'v1',
            propagationPolicy: 'Foreground',
        };
        const promises = [k8sKill(_models__WEBPACK_IMPORTED_MODULE_6__["SubscriptionModel"], subscription, {}, deleteOptions)].concat(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'status.installedCSV')
            ? k8sKill(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"], {
                metadata: {
                    name: subscription.status.installedCSV,
                    namespace: subscription.metadata.namespace,
                },
            }, {}, deleteOptions).catch(() => Promise.resolve())
            : []);
        props
            .handlePromise(Promise.all(promises))
            .then(() => {
            props.close();
            if (window.location.pathname.split('/').includes(subscription.metadata.name) ||
                window.location.pathname.split('/').includes(subscription.status.installedCSV)) {
                _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourceListPathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"], Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_4__["getActiveNamespace"])()));
            }
        })
            .catch(lodash__WEBPACK_IMPORTED_MODULE_1__["noop"]);
    };
    const name = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.csv, 'spec.displayName') || props.subscription.spec.name;
    const context = props.subscription.metadata.namespace === 'openshift-operators' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "all namespaces")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        "namespace ",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, props.subscription.metadata.namespace)));
    const uninstallMessage = (_b = (_a = props.csv) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.annotations['operator.openshift.io/uninstall-message'];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: submit, name: "form", className: "modal-content co-catalog-install-modal" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], { className: "modal-header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_5__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Uninstall Operator?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
            "This will remove operator ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, name),
            " from ",
            context,
            ". Removing the operator will not remove any of its custom resource definitions or managed resources. If your operator has deployed applications on the cluster or configured off-cluster resources, these will continue to run and need to be cleaned up manually.",
            uninstallMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Message from operator developer"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, uninstallMessage)))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["ModalSubmitFooter"], { inProgress: props.inProgress, errorMessage: props.errorMessage, cancel: props.cancel, submitDanger: true, submitText: "Uninstall" })));
});
const createUninstallOperatorModal = Object(_console_internal_components_factory_modal__WEBPACK_IMPORTED_MODULE_2__["createModalLauncher"])(UninstallOperatorModal);
UninstallOperatorModal.displayName = 'UninstallOperatorModal';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx":
/*!*******************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/operator-group.tsx ***!
  \*******************************************************************************/
/*! exports provided: targetNamespacesFor, operatorNamespaceFor, operatorGroupFor, NoOperatorGroupMsg, OperatorGroupSelector, requireOperatorGroup, supports, isGlobal, isSingle, subscriptionFor, installedFor, providedAPIsFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetNamespacesFor", function() { return targetNamespacesFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorNamespaceFor", function() { return operatorNamespaceFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorGroupFor", function() { return operatorGroupFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOperatorGroupMsg", function() { return NoOperatorGroupMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorGroupSelector", function() { return OperatorGroupSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireOperatorGroup", function() { return requireOperatorGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGlobal", function() { return isGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingle", function() { return isSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionFor", function() { return subscriptionFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedFor", function() { return installedFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providedAPIsFor", function() { return providedAPIsFor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_utils_status_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/status-box */ "./public/components/utils/status-box.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils/async */ "./public/components/utils/async.tsx");
/* harmony import */ var _console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/actions/ui */ "./public/actions/ui.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/types.ts");









const targetNamespacesFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.targetNamespaces']);
const operatorNamespaceFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.operatorNamespace']);
const operatorGroupFor = (obj) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, ['metadata', 'annotations', 'olm.operatorGroup']);
const NoOperatorGroupMsg = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_status_box__WEBPACK_IMPORTED_MODULE_3__["MsgBox"], { title: "Namespace Not Enabled", detail: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
        "The Operator Lifecycle Manager will not watch this namespace because it is not configured with an OperatorGroup.",
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/ns/${Object(_console_internal_actions_ui__WEBPACK_IMPORTED_MODULE_6__["getActiveNamespace"])()}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"])}/~new` }, "Create one here.")) }));
const OperatorGroupSelector = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_async__WEBPACK_IMPORTED_MODULE_5__["AsyncComponent"], { loader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @console/internal/components/utils/list-dropdown */ "./public/components/utils/list-dropdown.jsx")).then((m) => m.ListDropdown), onChange: props.onChange ||
        function () {
            return null;
        }, desc: "Operator Groups", placeholder: "Select Operator Group", selectedKeyKind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"]), dataFilter: props.dataFilter, resources: [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["OperatorGroupModel"]),
            fieldSelector: `metadata.name!=${props.excludeName}`,
        },
    ] }));
const requireOperatorGroup = (Component) => {
    var _a;
    return _a = class RequireOperatorGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
            render() {
                const namespaceEnabled = !lodash__WEBPACK_IMPORTED_MODULE_1__["get"](this.props.operatorGroup, 'loaded') || !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.props.operatorGroup.data);
                return namespaceEnabled ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, this.props)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NoOperatorGroupMsg, null);
            }
        },
        _a.WrappedComponent = Component,
        _a;
};
/**
 * Logic consistent with https://github.com/operator-framework/operator-lifecycle-manager/blob/4ef074e4207f5518d95ddf8c378036dfc4270dda/pkg/api/apis/operators/v1alpha1/clusterserviceversion.go#L165.
 */
const supports = (set) => (obj) => {
    const namespaces = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'namespaces') || [];
    const supportedModes = set.filter(({ supported }) => supported).map(({ type }) => type);
    if (namespaces.length === 0) {
        return false;
    }
    if (namespaces.length === 1) {
        if (namespaces[0] === obj.metadata.namespace) {
            return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeOwnNamespace);
        }
        if (namespaces[0] === '') {
            return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeAllNamespaces);
        }
        return supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeSingleNamespace);
    }
    if (namespaces.length > 1 &&
        !supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeMultiNamespace)) {
        return false;
    }
    if (namespaces.length > 1) {
        if (namespaces.includes(obj.metadata.namespace) &&
            !supportedModes.includes(_types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeOwnNamespace)) {
            return false;
        }
        if (namespaces.includes('')) {
            return false;
        }
    }
    return true;
};
const isGlobal = (obj) => supports([{ type: _types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeAllNamespaces, supported: true }])(obj);
const isSingle = (obj) => supports([{ type: _types__WEBPACK_IMPORTED_MODULE_8__["InstallModeType"].InstallModeTypeSingleNamespace, supported: true }])(obj);
/**
 * Determines if a given Operator package has a `Subscription` that makes it available in the given namespace.
 * Finds any `Subscriptions` for the given package, matches them to their `OperatorGroup`, and checks if the `OperatorGroup` is targeting the given namespace or if it is global.
 */
const subscriptionFor = (allSubscriptions = []) => (allGroups = []) => (pkgName) => (ns = '') => {
    return allSubscriptions
        .filter((sub) => sub.spec.name === pkgName)
        .find((sub) => allGroups.some((og) => og.metadata.namespace === sub.metadata.namespace &&
        (isGlobal(og) || lodash__WEBPACK_IMPORTED_MODULE_1__["get"](og.status, 'namespaces', []).includes(ns))));
};
const installedFor = (allSubscriptions = []) => (allGroups = []) => (pkgName) => (ns = '') => {
    return !lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](subscriptionFor(allSubscriptions)(allGroups)(pkgName)(ns));
};
const providedAPIsFor = (og) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](og.metadata.annotations, 'olm.providedAPIs', '')
    .split(',')
    .map((api) => ({
    group: api
        .split('.')
        .slice(2)
        .join('.'),
    version: api.split('.')[1],
    kind: api.split('.')[0],
}))
    .map(({ group, version, kind }) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForGroupVersionKind"])(group)(version)(kind));
NoOperatorGroupMsg.displayName = 'NoOperatorGroupMsg';


/***/ }),

/***/ "./packages/operator-lifecycle-manager/src/components/subscription.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/operator-lifecycle-manager/src/components/subscription.tsx ***!
  \*****************************************************************************/
/*! exports provided: catalogSourceForSubscription, installedCSVForSubscription, packageForSubscription, installPlanForSubscription, SubscriptionTableHeader, SubscriptionTableRow, SubscriptionsList, SubscriptionsPage, SubscriptionDetails, SubscriptionUpdates, SubscriptionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogSourceForSubscription", function() { return catalogSourceForSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedCSVForSubscription", function() { return installedCSVForSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageForSubscription", function() { return packageForSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installPlanForSubscription", function() { return installPlanForSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionTableHeader", function() { return SubscriptionTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionTableRow", function() { return SubscriptionTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsList", function() { return SubscriptionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPage", function() { return SubscriptionsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionDetails", function() { return SubscriptionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionUpdates", function() { return SubscriptionUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionDetailsPage", function() { return SubscriptionDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models */ "./packages/operator-lifecycle-manager/src/models.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../types */ "./packages/operator-lifecycle-manager/src/types.ts");
/* harmony import */ var _operator_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./operator-group */ "./packages/operator-lifecycle-manager/src/components/operator-group.tsx");
/* harmony import */ var _modals_uninstall_operator_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/uninstall-operator-modal */ "./packages/operator-lifecycle-manager/src/components/modals/uninstall-operator-modal.tsx");
/* harmony import */ var _modals_subscription_channel_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/subscription-channel-modal */ "./packages/operator-lifecycle-manager/src/components/modals/subscription-channel-modal.tsx");
/* harmony import */ var _modals_installplan_approval_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/installplan-approval-modal */ "./packages/operator-lifecycle-manager/src/components/modals/installplan-approval-modal.tsx");


















const catalogSourceForSubscription = (catalogSources = [], subscription) => lodash__WEBPACK_IMPORTED_MODULE_1__["find"](catalogSources, {
    metadata: {
        name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'spec.source'),
        namespace: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'spec.sourceNamespace'),
    },
});
const installedCSVForSubscription = (clusterServiceVersions = [], subscription) => lodash__WEBPACK_IMPORTED_MODULE_1__["find"](clusterServiceVersions, {
    metadata: {
        name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'status.installedCSV'),
    },
});
const packageForSubscription = (packageManifests = [], subscription) => lodash__WEBPACK_IMPORTED_MODULE_1__["find"](packageManifests, {
    metadata: {
        name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'spec.name'),
    },
    status: {
        packageName: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'spec.name'),
        catalogSource: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'spec.source'),
        catalogSourceNamespace: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'spec.sourceNamespace'),
    },
});
const installPlanForSubscription = (installPlans = [], subscription) => lodash__WEBPACK_IMPORTED_MODULE_1__["find"](installPlans, {
    metadata: {
        name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](subscription, 'status.installplan.name'),
    },
});
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-md-3', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-md-3', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-lg-2', 'col-md-3', 'col-sm-4', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-lg-2', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_4__('col-lg-2', 'hidden-md', 'hidden-sm', 'hidden-xs'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].columnClass,
];
const SubscriptionTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Channel',
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Approval Strategy',
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
SubscriptionTableHeader.displayName = 'SubscriptionTableHeader';
const subscriptionState = (state) => {
    switch (state) {
        case _types__WEBPACK_IMPORTED_MODULE_13__["SubscriptionState"].SubscriptionStateUpgradeAvailable:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["YellowExclamationTriangleIcon"], null),
                " Upgrade available"));
        case _types__WEBPACK_IMPORTED_MODULE_13__["SubscriptionState"].SubscriptionStateUpgradePending:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["InProgressIcon"], { className: "text-primary" }),
                " Upgrading"));
        case _types__WEBPACK_IMPORTED_MODULE_13__["SubscriptionState"].SubscriptionStateAtLatest:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["GreenCheckCircleIcon"], null),
                " Up to date"));
        default:
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](state) ? 'text-muted' : '' }, state || 'Unknown failure'));
    }
};
const menuActions = [
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory.Edit,
    (kind, obj) => ({
        label: 'Remove Subscription',
        callback: () => Object(_modals_uninstall_operator_modal__WEBPACK_IMPORTED_MODULE_15__["createUninstallOperatorModal"])({ k8sKill: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sKill"], k8sGet: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sGet"], k8sPatch: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sPatch"], subscription: obj }),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: obj.metadata.name,
            namespace: obj.metadata.namespace,
            verb: 'delete',
        },
    }),
    (kind, obj) => {
        const installedCSV = lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'status.installedCSV');
        return {
            label: `View ${_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"].kind}...`,
            href: `/k8s/ns/${obj.metadata.namespace}/${_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"].plural}/${installedCSV}`,
            hidden: !installedCSV,
        };
    },
];
const SubscriptionTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]), name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.name })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace, displayName: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[2] }, subscriptionState(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'state'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_4__(tableColumnClasses[3], 'co-truncate', 'co-select-to-copy') }, obj.spec.channel || 'default'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[4] }, obj.spec.installPlanApproval || 'Automatic'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceKebab"], { actions: menuActions, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]), resource: obj }))));
};
const SubscriptionsList = Object(_operator_group__WEBPACK_IMPORTED_MODULE_14__["requireOperatorGroup"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["Table"], Object.assign({}, props, { "aria-label": "Operator Subscriptions", Header: SubscriptionTableHeader, Row: SubscriptionTableRow, EmptyMsg: () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["MsgBox"], { title: "No Subscriptions Found", detail: "Each namespace can subscribe to a single channel of a package for automatic updates." })), virtualize: true }))));
const SubscriptionsPage = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["MultiListPage"], Object.assign({}, props, { resources: [
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]),
                namespace: props.namespace,
                namespaced: true,
                prop: 'subscription',
            },
            {
                kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["OperatorGroupModel"]),
                namespace: props.namespace,
                namespaced: true,
                prop: 'operatorGroup',
            },
        ], flatten: (resources) => lodash__WEBPACK_IMPORTED_MODULE_1__["get"](resources.subscription, 'data', []), title: "Subscriptions", canCreate: true, createProps: { to: '/operatorhub' }, createButtonText: "Create Subscription", ListComponent: SubscriptionsList, filterLabel: "Subscriptions by package" })));
};
const SubscriptionDetails = ({ catalogSources = [], clusterServiceVersions = [], installPlans = [], obj, packageManifests = [], }) => {
    var _a, _b, _c;
    const catalogSource = catalogSourceForSubscription(catalogSources, obj);
    const installedCSV = installedCSVForSubscription(clusterServiceVersions, obj);
    const installPlan = installPlanForSubscription(installPlans, obj);
    const installStatusPhase = (_a = installPlan === null || installPlan === void 0 ? void 0 : installPlan.status) === null || _a === void 0 ? void 0 : _a.phase;
    const installFailedCondition = (_c = (_b = installPlan === null || installPlan === void 0 ? void 0 : installPlan.status) === null || _b === void 0 ? void 0 : _b.conditions) === null || _c === void 0 ? void 0 : _c.find(({ type, status }) => type === 'Installed' && status === 'False');
    const installFailedMessage = (installFailedCondition === null || installFailedCondition === void 0 ? void 0 : installFailedCondition.message) || (installFailedCondition === null || installFailedCondition === void 0 ? void 0 : installFailedCondition.reason) || 'Install plan failed';
    const pkg = packageForSubscription(packageManifests, obj);
    if (new URLSearchParams(window.location.search).has('showDelete')) {
        Object(_modals_uninstall_operator_modal__WEBPACK_IMPORTED_MODULE_15__["createUninstallOperatorModal"])({ k8sKill: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sKill"], k8sGet: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sGet"], k8sPatch: _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sPatch"], subscription: obj })
            .result.then(() => Object(_console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_9__["removeQueryArgument"])('showDelete'))
            .catch(lodash__WEBPACK_IMPORTED_MODULE_1__["noop"]);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
        !catalogSource && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Alert"], { isInline: true, className: "co-alert", variant: "warning", title: "Catalog Source Removed" }, "The catalog source for this operator has been removed. The catalog source must be added back in order for this operator to receive any updates.")),
        installStatusPhase === _types__WEBPACK_IMPORTED_MODULE_13__["InstallPlanPhase"].InstallPlanPhaseFailed && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Alert"], { isInline: true, className: "co-alert co-alert--scrollable", variant: "danger", title: installStatusPhase }, installFailedMessage)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: "Subscription Details" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubscriptionUpdates, { catalogSource: catalogSource, pkg: pkg, obj: obj, installedCSV: installedCSV, installPlan: installPlan })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: obj, showAnnotations: false })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Installed Version"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, installedCSV ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getName"])(installedCSV), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getNamespace"])(installedCSV), title: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getName"])(installedCSV) })) : ('None')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Starting Version"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, obj.spec.startingCSV || 'None'),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Catalog Source"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, catalogSource ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getName"])(catalogSource), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getNamespace"])(catalogSource), title: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getName"])(catalogSource) })) : ('None')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Install Plan"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, installPlan ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]), name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getName"])(installPlan), namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getNamespace"])(installPlan), title: Object(_console_shared__WEBPACK_IMPORTED_MODULE_11__["getName"])(installPlan) })) : ('None'))))))));
};
class SubscriptionUpdates extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            waitingForUpdate: false,
            installPlanApproval: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.obj, 'spec.installPlanApproval'),
            channel: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](props.obj, 'spec.channel'),
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const stillWaiting = prevState.waitingForUpdate &&
            lodash__WEBPACK_IMPORTED_MODULE_1__["get"](nextProps, 'obj.spec.channel') === prevState.channel &&
            lodash__WEBPACK_IMPORTED_MODULE_1__["get"](nextProps, 'obj.spec.installPlanApproval') === prevState.installPlanApproval;
        return stillWaiting
            ? null
            : {
                waitingForUpdate: false,
                channel: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](nextProps, 'obj.spec.channel'),
                installPlanApproval: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](nextProps, 'obj.spec.installPlanApproval'),
            };
    }
    render() {
        const { catalogSource, installedCSV, obj, pkg } = this.props;
        const k8sUpdateAndWait = (...args) => Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["k8sUpdate"])(...args).then(() => this.setState({ waitingForUpdate: true }));
        const channelModal = () => Object(_modals_subscription_channel_modal__WEBPACK_IMPORTED_MODULE_16__["createSubscriptionChannelModal"])({ subscription: obj, pkg, k8sUpdate: k8sUpdateAndWait });
        const approvalModal = () => Object(_modals_installplan_approval_modal__WEBPACK_IMPORTED_MODULE_17__["createInstallPlanApprovalModal"])({ obj, k8sUpdate: k8sUpdateAndWait });
        const installPlanPhase = (installPlan) => {
            switch (lodash__WEBPACK_IMPORTED_MODULE_1__["get"](installPlan, 'status.phase')) {
                case _types__WEBPACK_IMPORTED_MODULE_13__["InstallPlanPhase"].InstallPlanPhaseRequiresApproval:
                    return '1 requires approval';
                case _types__WEBPACK_IMPORTED_MODULE_13__["InstallPlanPhase"].InstallPlanPhaseFailed:
                    return '1 failed';
                default:
                    return '1 installing';
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__row row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section col-sm-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Channel"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, this.state.waitingForUpdate ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingInline"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "button", isInline: true, onClick: channelModal, variant: "link", isDisabled: !pkg },
                            obj.spec.channel || 'default',
                            pkg && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section col-sm-3" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Approval"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, this.state.waitingForUpdate ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingInline"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { type: "button", isInline: true, onClick: approvalModal, variant: "link" },
                            obj.spec.installPlanApproval || 'Automatic',
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__["PencilAltIcon"], { className: "co-icon-space-l pf-c-button-icon--plain" })))))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__section co-detail-table__section--last col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", { className: "co-detail-table__section-header" }, "Upgrade Status"),
                        catalogSource ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, subscriptionState(lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'state')))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["WarningStatus"], { title: "Cannot update" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-muted" }, "Catalog source was removed")))),
                    catalogSource && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__bracket" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-detail-table__breakdown" },
                            lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'installedCSV') && installedCSV ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/k8s/ns/${obj.metadata.namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"])}/${lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'installedCSV')}` }, "1 installed")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "0 installed")),
                            lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'state') ===
                                _types__WEBPACK_IMPORTED_MODULE_13__["SubscriptionState"].SubscriptionStateUpgradePending &&
                                lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'installplan') &&
                                this.props.installPlan ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/k8s/ns/${obj.metadata.namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"])}/${lodash__WEBPACK_IMPORTED_MODULE_1__["get"](obj.status, 'installplan.name')}` },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, installPlanPhase(this.props.installPlan)))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "0 installing")))))))));
    }
}
const SubscriptionDetailsPage = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"], Object.assign({}, props, { namespace: props.match.params.ns, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["SubscriptionModel"]), name: props.match.params.name, pages: [_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(SubscriptionDetails), _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml()], resources: [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["PackageManifestModel"]),
            isList: true,
            namespace: props.namespace,
            prop: 'packageManifests',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["InstallPlanModel"]),
            isList: true,
            namespace: props.namespace,
            prop: 'installPlans',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["ClusterServiceVersionModel"]),
            namespace: props.namespace,
            isList: true,
            prop: 'clusterServiceVersions',
        },
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_10__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_12__["CatalogSourceModel"]),
            isList: true,
            prop: 'catalogSources',
        },
    ], menuActions: menuActions })));
SubscriptionsList.displayName = 'SubscriptionsList';
SubscriptionsPage.displayName = 'SubscriptionsPage';
SubscriptionDetails.displayName = 'SubscriptionDetails';
SubscriptionDetailsPage.displayName = 'SubscriptionDetailsPage';


/***/ })

}]);
//# sourceMappingURL=subscriptions-500787dd44c0115dbf4d.js.map