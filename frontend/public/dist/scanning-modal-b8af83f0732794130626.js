(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanning-modal"],{

/***/ "./public/components/hypercloud/modals/scanning-modal.jsx":
/*!****************************************************************!*\
  !*** ./public/components/hypercloud/modals/scanning-modal.jsx ***!
  \****************************************************************/
/*! exports provided: scanningModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanningModal", function() { return scanningModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _factory_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../factory/modal */ "./public/components/factory/modal.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/resource-list-dropdown */ "./public/components/hypercloud/utils/resource-list-dropdown.tsx");
/* harmony import */ var _module_k8s_k8s_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../module/k8s/k8s-models */ "./public/module/k8s/k8s-models.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class BaseScanningModal extends _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["PromiseComponent"] {
    constructor(props) {
        super(props);
        this.successSubmit = ({ imageScanRequestName }) => {
            var _a;
            const { resource } = this.props;
            const namespace = ((_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.namespace) || this.state.namespace || (resource === null || resource === void 0 ? void 0 : resource.namespace);
            this.props.close();
            _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["history"].push(`/k8s/ns/${namespace}/imagescanrequests/${imageScanRequestName}`);
        };
        this.onChangeName = (e) => {
            this.setState({ name: e.target.value });
        };
        this.onChangeNamespace = (e) => {
            this.setState({ namespace: e.target.value });
        };
        this.onSelectedItemChange = (items) => {
            const resource = [...items][0] === 'All' ? this.state.resources.map(res => res.metadata.name)
                : [...items].map(item => { var _a; return (_a = this.state.resources.find(res => res.metadata.uid === item)) === null || _a === void 0 ? void 0 : _a.metadata.name; });
            this.setState({ resource });
        };
        this._submit = this._submit.bind(this);
        this._cancel = props.cancel.bind(this);
        this.state = Object.assign(this.state, {
            name: '',
            dataList: [],
            namespaces: [],
            namespace: '',
            resources: [],
            resource: [],
        });
    }
    componentDidMount() {
        const { showNs } = this.props;
        showNs && this.getNamespaceList();
        const { ns } = this.props;
        this.setState({ namespace: ns });
    }
    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.resource && prevState.namespace !== this.state.namespace) {
            return this.getResourceList();
        }
    }
    getNamespaceList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { ns } = this.props;
            const list = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sList"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["NamespaceModel"]);
            const namespaces = list.map(item => item.metadata.name);
            const namespace = ns || namespaces[0];
            this.setState({ namespaces, namespace });
        });
    }
    getResourceList() {
        return __awaiter(this, void 0, void 0, function* () {
            const { kind, ns, labelSelector } = this.props;
            const resources = yield Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sList"])(Object(_module_k8s_k8s_models__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(kind), { ns: this.state.namespace, labelSelector });
            return this.setState({ resources });
        });
    }
    _submit(e) {
        var _a;
        e.preventDefault();
        let { kind, ns, modelKind, resource, labelSelector, isExtRegistry } = this.props;
        let registries;
        kind = kind || (resource === null || resource === void 0 ? void 0 : resource.kind);
        let modelPlural = 'scans';
        if (kind === 'ExternalRegistry' || (modelKind === null || modelKind === void 0 ? void 0 : modelKind.kind) === 'ExternalRegistry') {
            isExtRegistry = true;
        }
        if (isExtRegistry) {
            modelPlural = 'ext-scans';
        }
        if (kind === 'Registry' || (modelKind === null || modelKind === void 0 ? void 0 : modelKind.kind) === 'Registry') {
            if (resource) {
                registries = [{
                        'name': resource.metadata.name,
                        'repositories': [
                            {
                                'name': '*'
                            }
                        ]
                    }];
            }
            else {
                registries = this.state.resource.map(selectedItem => ({
                    'name': selectedItem,
                    'repositories': [
                        {
                            'name': '*'
                        }
                    ]
                }));
            }
        }
        else if (kind === 'ExternalRegistry' || (modelKind === null || modelKind === void 0 ? void 0 : modelKind.kind) === 'ExternalRegistry') {
            if (resource) {
                registries = [{
                        'name': resource.metadata.name,
                        'repositories': [
                            {
                                'name': '*'
                            }
                        ]
                    }];
            }
            else {
                registries = this.state.resource.map(selectedItem => ({
                    'name': selectedItem,
                    'repositories': [
                        {
                            'name': '*'
                        }
                    ]
                }));
            }
        }
        else if (kind === 'Repository' || (modelKind === null || modelKind === void 0 ? void 0 : modelKind.kind) === 'Repository') {
            if (resource) {
                registries = [{
                        'name': resource.spec.registry,
                        'repositories': [
                            {
                                'name': resource.metadata.name,
                                'versions': [
                                    '*'
                                ]
                            }
                        ]
                    }];
            }
            else {
                const reg = isExtRegistry ? labelSelector['ext-registry'] : labelSelector.registry;
                registries = [{
                        'name': reg,
                        'repositories': this.state.resource.map(selectedItem => ({
                            'name': selectedItem,
                            'versions': [
                                '*'
                            ]
                        }))
                    }];
            }
        }
        else if (kind === 'Tag') {
            registries = [{
                    'name': resource.registry,
                    'repositories': [
                        {
                            'name': resource.repository,
                            'versions': [
                                resource.version
                            ]
                        }
                    ]
                }];
        }
        const data = { registries };
        const opts = {
            ns: (this.state.namespace !== '' && this.state.namespace) || ((_a = resource.metadata) === null || _a === void 0 ? void 0 : _a.namespace) || resource.namespace,
            plural: 'scans',
            name: this.state.name,
        };
        let model = kind ? Object(_module_k8s_k8s_models__WEBPACK_IMPORTED_MODULE_6__["modelFor"])(kind) : modelKind;
        model = model || { apiVersion: 'v1' };
        model.apiGroup = 'registry.tmax.io';
        model.plural = modelPlural;
        const promise = Object(_module_k8s__WEBPACK_IMPORTED_MODULE_2__["k8sCreateUrl"])(model, data, opts);
        this.handlePromise(promise)
            .then(this.successSubmit);
    }
    render() {
        var _a;
        const { kind, showNs, resource, message, modelKind, t } = this.props;
        const { selected, resources } = this.state;
        const label = Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabelPlural"])({ kind: kind || (modelKind === null || modelKind === void 0 ? void 0 : modelKind.kind) || (resource === null || resource === void 0 ? void 0 : resource.kind) }, t);
        const name = ((_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.name) || (resource === null || resource === void 0 ? void 0 : resource.version);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, t('COMMON:MSG_COMMON_ACTIONBUTTON_20')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], { unsetOverflow: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" }, message || '')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m=-form-row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12", style: { marginBottom: '15px' } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "Name", id: "name", isRequired: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "pf-c-form-control", id: "name", name: "metadata.name", onChange: this.onChangeName, value: this.state.name }))),
                    showNs && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12", style: { marginBottom: '15px' } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_4__["Section"], { label: "Namespace", id: "namespace", isRequired: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "col-sm-12", value: this.state.namespace, onChange: this.onChangeNamespace }, this.state.namespaces.map(namespace => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: namespace, value: namespace }, namespace))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label co-required', htmlFor: label }, label),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-search-group" }, resource ?
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, name) :
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_5__["ResourceListDropdownWithDataToolbar"], { resourceList: resources, showAll: true, resourceType: label, autocompletePlaceholder: "search by name" // 검색란 placeholder
                                , onSelectedItemChange: this.onSelectedItemChange }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalSubmitFooter"], { errorMessage: this.state.errorMessage, inProgress: this.state.inProgress, submitText: "Confirm", cancel: this._cancel })));
    }
}
;
const scanningModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["withTranslation"])()(BaseScanningModal));


/***/ })

}]);
//# sourceMappingURL=scanning-modal-b8af83f0732794130626.js.map