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
        const { kind, showNs, resource, message, modelKind } = this.props;
        const { selected, resources } = this.state;
        const label = kind || (modelKind === null || modelKind === void 0 ? void 0 : modelKind.kind) || (resource === null || resource === void 0 ? void 0 : resource.kind);
        const name = ((_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.name) || (resource === null || resource === void 0 ? void 0 : resource.version);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { onSubmit: this._submit, name: "form", className: "modal-content" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory_modal__WEBPACK_IMPORTED_MODULE_3__["ModalTitle"], null, "Image Scan Request Creation"),
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
const scanningModal = Object(_factory_modal__WEBPACK_IMPORTED_MODULE_3__["createModalLauncher"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseScanningModal, Object.assign({}, props))));


/***/ }),

/***/ "./public/components/hypercloud/utils/resource-list-dropdown.tsx":
/*!***********************************************************************!*\
  !*** ./public/components/hypercloud/utils/resource-list-dropdown.tsx ***!
  \***********************************************************************/
/*! exports provided: ResourceListDropdown, ResourceListDropdownWithDataToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceListDropdown", function() { return ResourceListDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceListDropdownWithDataToolbar", function() { return ResourceListDropdownWithDataToolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");








const DropdownItem = ({ resource, checked }) => {
    var _a, _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'co-resource-item' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], { tabIndex: -1, id: `${resource.metadata.uid}:checkbox`, checked: checked }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-icon--fixed-width" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: resource.kind })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item__resource-name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, (_b = (_a = resource.fakeMetadata) === null || _a === void 0 ? void 0 : _a.fakename) !== null && _b !== void 0 ? _b : resource.metadata.name)))));
};
const ResourceListDropdown = (props) => {
    var _a, _b, _c;
    const { name, required, resourceList, onChange, showAll, className, type, useHookForm } = props;
    const selected = name ? props.selected : props.selected;
    if (useHookForm && name) {
        const { register, unregister, setValue } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"])();
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
            setValue(name, selected);
        }, [selected]);
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
            register({ name }, { required });
            return () => {
                unregister(name);
            };
        }, [name, register, unregister]);
    }
    const isSelected = (uid) => {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](selected, 'All') || lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](selected, uid);
    };
    // Create dropdown items for each resource.
    const items = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["OrderedMap"])(lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resourceList, (resource) => [
        resource.metadata.uid,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DropdownItem, { resource: resource, checked: isSelected(resource.metadata.uid) })
    ]));
    // Add an "All" item to the top if `showAll`.
    const allItems = (showAll
        ? Object(immutable__WEBPACK_IMPORTED_MODULE_2__["OrderedMap"])({
            All: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], { id: "all-resources", checked: isSelected('All') }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-icon--fixed-width" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: "All" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item__resource-name" }, `All ${props.resourceType}`)))),
        }).concat(items)
        : items).toJS();
    const autocompleteFilter = (text, item) => {
        var _a, _b;
        const { resource } = item.props;
        if (!resource) {
            return false;
        }
        return fuzzysearch__WEBPACK_IMPORTED_MODULE_4__(lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"](text), lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"]((_b = (_a = resource.fakeMetadata) === null || _a === void 0 ? void 0 : _a.fakename) !== null && _b !== void 0 ? _b : resource.metadata.name));
    };
    const autocompletePlaceholder = (_a = props.autocompletePlaceholder) !== null && _a !== void 0 ? _a : "Select Resource";
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], { menuClassName: "dropdown-menu--text-wrap", className: classnames__WEBPACK_IMPORTED_MODULE_3__('co-type-selector', className), items: allItems, title: (_b = props.title) !== null && _b !== void 0 ? _b : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: "title-resource" },
            `${props.resourceType} `,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Badge"], { isRead: true }, selected.length === 1 && selected[0] === 'All' ? 'All' : selected.length)), onChange: onChange, autocompleteFilter: autocompleteFilter, autocompletePlaceholder: (_c = props.autocompleteFilter) !== null && _c !== void 0 ? _c : autocompletePlaceholder, type: type }));
};
ResourceListDropdown.defaultProps = {
    resourceType: "Resources",
    useHookForm: false,
};
const ResourceListDropdownWithDataToolbar_ = (props, ref) => {
    const { resourceList } = props;
    const [selectedItems, setSelectedItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](new Set([]));
    const allItems = new Set(resourceList.map(resource => resource.metadata.uid));
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        var _a;
        (_a = props.onSelectedItemChange) === null || _a === void 0 ? void 0 : _a.call(props, selectedItems);
    }, [selectedItems]);
    const updateSelectedItems = (selection) => {
        if (selection === 'All') {
            selectedItems.has(selection) ? clearSelectedItems() : selectAllItems();
        }
        else {
            if (selectedItems.has('All')) {
                const updateItems = new Set(allItems);
                updateItems.delete(selection);
                setSelectedItems(updateItems);
            }
            else {
                const updateItems = new Set(selectedItems);
                updateItems.has(selection) ? updateItems.delete(selection) : updateItems.add(selection);
                updateItems.size === resourceList.length ? selectAllItems() : setSelectedItems(updateItems);
            }
        }
    };
    const updateNewItems = (filter, { key }) => {
        updateSelectedItems(key);
    };
    const selectAllItems = () => {
        setSelectedItems(new Set(['All']));
    };
    const clearSelectedItems = () => {
        setSelectedItems(new Set([]));
    };
    const clearAll = () => {
        clearSelectedItems();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbar"], { id: "search-toolbar", clearAllFilters: clearAll, clearFiltersButtonText: `Clear all ${props.resourceType}` },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbarContent"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbarItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbarFilter"], { deleteChipGroup: clearSelectedItems, chips: [...selectedItems].map(uid => {
                        var _a, _b, _c, _d;
                        const item = resourceList.find(i => i.metadata.uid === uid);
                        return {
                            key: uid,
                            node: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: (_a = item === null || item === void 0 ? void 0 : item.kind) !== null && _a !== void 0 ? _a : uid }), (_d = (_c = (_b = item === null || item === void 0 ? void 0 : item.fakeMetadata) === null || _b === void 0 ? void 0 : _b.fakename) !== null && _c !== void 0 ? _c : item === null || item === void 0 ? void 0 : item.metadata.name) !== null && _d !== void 0 ? _d : uid)),
                        };
                    }), deleteChip: updateNewItems, categoryName: props.resourceType },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ResourceListDropdown, Object.assign({ resourceList: resourceList, selected: [...selectedItems], onChange: updateSelectedItems, type: "multiple" }, props)))))));
};
const ResourceListDropdownWithDataToolbar = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ResourceListDropdownWithDataToolbar_);
ResourceListDropdownWithDataToolbar.defaultProps = {
    resourceType: "Resources",
};


/***/ }),

/***/ "./public/components/hypercloud/utils/section.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/utils/section.tsx ***!
  \********************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Node = ({ className, children, description }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, children),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "help-block" }, description)));
const CombineNodes = (id, label, description, children, isRequired) => {
    // children node 개수에 따라 가로 분할 class 적용
    let isArray = Array.isArray(children);
    let className = isArray ? `col-md-${12 / children.length}` : 'col-md-12';
    return isArray ? children.map(cur => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: cur, description: description })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Node, { className: className, children: children, description: description });
};
const Section = ({ id, label, description, children, isRequired = false }) => {
    let result = CombineNodes(id, label, description, children, isRequired);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=scanning-modal-98171cb331264520acd8.js.map