(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./public/components/hypercloud/utils/resource-list-dropdown.tsx":
/*!***********************************************************************!*\
  !*** ./public/components/hypercloud/utils/resource-list-dropdown.tsx ***!
  \***********************************************************************/
/*! exports provided: SingleResourceListDropdown, MultipleResourceListDropdown, ResourceListDropdown, ResourceListDropdownWithDataToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleResourceListDropdown", function() { return SingleResourceListDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleResourceListDropdown", function() { return MultipleResourceListDropdown; });
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








const autocompleteFilter = (text, item) => {
    var _a, _b;
    const { resource } = item.props;
    if (!resource) {
        return false;
    }
    return fuzzysearch__WEBPACK_IMPORTED_MODULE_4__(lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"](text), lodash_es__WEBPACK_IMPORTED_MODULE_1__["toLower"]((_b = (_a = resource.fakeMetadata) === null || _a === void 0 ? void 0 : _a.fakename) !== null && _b !== void 0 ? _b : resource.metadata.name));
};
const DropdownItem = ({ resource }) => {
    var _a, _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'co-resource-item' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-icon--fixed-width" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: resource.kind })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item__resource-name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, (_b = (_a = resource.fakeMetadata) === null || _a === void 0 ? void 0 : _a.fakename) !== null && _b !== void 0 ? _b : resource.metadata.name)))));
};
const DropdownItemWithCheckbox = ({ resource, checked }) => {
    var _a, _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'co-resource-item' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], { tabIndex: -1, id: `${resource.metadata.name}:checkbox`, checked: checked }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-icon--fixed-width" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: resource.kind })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item__resource-name" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, (_b = (_a = resource.fakeMetadata) === null || _a === void 0 ? void 0 : _a.fakename) !== null && _b !== void 0 ? _b : resource.metadata.name)))));
};
const SingleResourceListDropdown = (props) => {
    var _a, _b, _c, _d;
    const { resourceList, onChange, className, selected } = props;
    const isSelected = !!selected;
    // Create dropdown items for each resource.
    const items = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["OrderedMap"])(lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resourceList, (resource) => [
        resource.metadata.name,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DropdownItem, { resource: resource })
    ])).toJS();
    const autocompletePlaceholder = (_a = props.autocompletePlaceholder) !== null && _a !== void 0 ? _a : "Select Resource";
    const placeholder = (_b = props.placeholder) !== null && _b !== void 0 ? _b : props.resourceType;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], { menuClassName: "dropdown-menu--text-wrap", className: classnames__WEBPACK_IMPORTED_MODULE_3__('co-type-selector', className), items: items, title: (_c = props.title) !== null && _c !== void 0 ? _c : (isSelected ? items[selected] : placeholder), onChange: onChange, autocompleteFilter: (_d = props.autocompleteFilter) !== null && _d !== void 0 ? _d : autocompleteFilter, autocompletePlaceholder: autocompletePlaceholder, type: 'single' }));
};
const MultipleResourceListDropdown = (props) => {
    var _a, _b, _c;
    const { resourceList, onChange, className, selected, showAll, resourceType } = props;
    const selectedSize = selected.size;
    const isSelected = (name) => {
        return selected.has('All') || selected.has(name);
    };
    // Create dropdown items for each resource.
    const items = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["OrderedMap"])(lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](resourceList, (resource) => [
        resource.metadata.name,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DropdownItemWithCheckbox, { resource: resource, checked: isSelected(resource.metadata.name) })
    ]));
    // Add an "All" item to the top if `showAll`.
    const allItems = (showAll
        ? Object(immutable__WEBPACK_IMPORTED_MODULE_2__["OrderedMap"])({
            All: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], { id: "all-resources", checked: isSelected('All') }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-icon--fixed-width" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: "All" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-resource-item__resource-name" }, `All ${resourceType}`)))),
        }).concat(items)
        : items).toJS();
    const autocompletePlaceholder = (_a = props.autocompletePlaceholder) !== null && _a !== void 0 ? _a : "Select Resources";
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], { menuClassName: "dropdown-menu--text-wrap", className: classnames__WEBPACK_IMPORTED_MODULE_3__('co-type-selector', className), items: allItems, title: (_b = props.title) !== null && _b !== void 0 ? _b : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: "title-resource" },
            `${props.resourceType} `,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Badge"], { isRead: true }, (selected === null || selected === void 0 ? void 0 : selected.has('All')) ? 'All' : selectedSize)), onChange: onChange, autocompleteFilter: (_c = props.autocompleteFilter) !== null && _c !== void 0 ? _c : autocompleteFilter, autocompletePlaceholder: autocompletePlaceholder, type: 'multiple' }));
};
const ResourceListDropdown = (props) => {
    const { name, required, methods, useHookForm } = props;
    const { register, unregister, setValue, watch } = methods ? methods : useHookForm ? Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"])() : { register: null, unregister: null, setValue: null, watch: null };
    if (useHookForm || methods) {
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
            register({ name }, { required });
            return () => {
                unregister(name);
            };
        }, [name, register, unregister]);
    }
    const defaultValue = watch === null || watch === void 0 ? void 0 : watch(name, props.defaultValue);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        props.defaultValue && (setValue === null || setValue === void 0 ? void 0 : setValue(name, defaultValue));
    }, [props.defaultValue]);
    if (props.type === 'multiple') {
        const { resourceList } = props;
        const [selectedItems, setSelectedItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](new Set(defaultValue !== null && defaultValue !== void 0 ? defaultValue : []));
        const [selectedItemSize, setSelectedItemSize] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](selectedItems.size);
        const resourceListLength = resourceList.length;
        const allItems = new Set(resourceList.map(resource => resource.metadata.name));
        const selectAllItems = () => {
            setSelectedItems(new Set(['All']));
            setValue === null || setValue === void 0 ? void 0 : setValue(name, [...allItems]);
            setSelectedItemSize(resourceListLength);
        };
        const clearAll = () => {
            setSelectedItems(new Set([]));
            setValue === null || setValue === void 0 ? void 0 : setValue(name, []);
            setSelectedItemSize(0);
        };
        const updateSelectedItems = (selection) => {
            var _a;
            if (selection === 'All') {
                selectedItems.has(selection) ? clearAll() : selectAllItems();
            }
            else {
                if (selectedItems.has('All')) {
                    const updateItems = new Set(allItems);
                    updateItems.delete(selection);
                    setSelectedItems(updateItems);
                    setValue === null || setValue === void 0 ? void 0 : setValue(name, [...updateItems]);
                    setSelectedItemSize(resourceListLength - 1);
                }
                else {
                    const updateItems = new Set(selectedItems);
                    let updateItemSize = selectedItemSize;
                    if (updateItems.has(selection)) {
                        updateItems.delete(selection);
                        updateItemSize--;
                    }
                    else {
                        updateItems.add(selection);
                        updateItemSize++;
                    }
                    updateItemSize === resourceListLength ? selectAllItems() : setSelectedItems(updateItems);
                    setSelectedItemSize(updateItemSize);
                    setValue === null || setValue === void 0 ? void 0 : setValue(name, [...updateItems]);
                }
            }
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, selection);
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MultipleResourceListDropdown, Object.assign({}, props, { selected: selectedItems, onChange: updateSelectedItems })));
    }
    else {
        const [selectedItem, setSelectedItem] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultValue !== null && defaultValue !== void 0 ? defaultValue : '');
        const updateSelectedItem = (selection) => {
            var _a;
            setSelectedItem(selection);
            setValue === null || setValue === void 0 ? void 0 : setValue(name, selection);
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, selection);
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SingleResourceListDropdown, Object.assign({}, props, { selected: selectedItem, onChange: updateSelectedItem })));
    }
};
ResourceListDropdown.defaultProps = {
    resourceType: 'Resources',
    type: 'single',
    useHookForm: false,
};
const ResourceListDropdownWithDataToolbar = (props) => {
    var _a;
    const { resourceList } = props;
    const [selectedItems, setSelectedItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](new Set([]));
    const allItems = new Set(resourceList.map(resource => resource.metadata.name));
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        var _a;
        (_a = props.onSelectedItemChange) === null || _a === void 0 ? void 0 : _a.call(props, selectedItems);
    }, [selectedItems]);
    const updateSelectedItems = (selection) => {
        var _a;
        if (selection === 'All') {
            selectedItems.has(selection) ? clearAll() : selectAllItems();
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
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, selection);
    };
    const updateNewItems = (filter, { key }) => {
        updateSelectedItems(key);
    };
    const selectAllItems = () => {
        setSelectedItems(new Set(['All']));
    };
    const clearAll = () => {
        setSelectedItems(new Set([]));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbar"], { id: "search-toolbar", clearAllFilters: clearAll, clearFiltersButtonText: (_a = props.clearFiltersButtonText) !== null && _a !== void 0 ? _a : `Clear all ${props.resourceType}` },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbarContent"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbarItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DataToolbarFilter"], { deleteChipGroup: clearAll, chips: [...selectedItems].map(name => {
                        var _a, _b, _c, _d;
                        const item = resourceList.find(i => i.metadata.name === name);
                        return {
                            key: name,
                            node: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: (_a = item === null || item === void 0 ? void 0 : item.kind) !== null && _a !== void 0 ? _a : name }), (_d = (_c = (_b = item === null || item === void 0 ? void 0 : item.fakeMetadata) === null || _b === void 0 ? void 0 : _b.fakename) !== null && _c !== void 0 ? _c : item === null || item === void 0 ? void 0 : item.metadata.name) !== null && _d !== void 0 ? _d : name)),
                        };
                    }), deleteChip: updateNewItems, categoryName: props.resourceType },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MultipleResourceListDropdown, Object.assign({}, props, { resourceList: resourceList, selected: selectedItems, onChange: updateSelectedItems, type: "multiple" })))))));
};
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
        label && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: 'control-label ' + (isRequired ? 'co-required' : ''), htmlFor: id }, label)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, result)));
};


/***/ })

}]);
//# sourceMappingURL=15-1ec58626724ae5b80cd7.js.map