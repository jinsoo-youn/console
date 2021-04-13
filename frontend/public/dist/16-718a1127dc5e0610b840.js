(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./public/components/hypercloud/form/create-form.tsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/form/create-form.tsx ***!
  \***********************************************************/
/*! exports provided: WithCommonForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithCommonForm", function() { return WithCommonForm; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/devtools */ "./node_modules/@hookform/devtools/dist/index.js");
/* harmony import */ var _hookform_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hookform_devtools__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./public/components/hypercloud/form/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/section */ "./public/components/hypercloud/utils/section.tsx");











const WithCommonForm = (SubForm, params, defaultValues, modal) => {
    const FormComponent = props => {
        var _a;
        const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({ defaultValues: defaultValues });
        const kind = (_a = ___WEBPACK_IMPORTED_MODULE_8__["pluralToKind"].get(params.plural)) === null || _a === void 0 ? void 0 : _a['kind'];
        const title = `${props.titleVerb} ${(params === null || params === void 0 ? void 0 : params.type) === 'form' ? '' : params.type || 'Sample'} ${kind || ''}`;
        const [inProgress] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false); // onSubmit이나 나중에 Error관련 메서드에서 inProgress를 false로 변경해줘야함.
        const model = kind && Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["modelFor"])(kind);
        const namespaced = model === null || model === void 0 ? void 0 : model.namespaced;
        const plural = model === null || model === void 0 ? void 0 : model.plural;
        const onClick = methods.handleSubmit(data => {
            let inDo = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"](props.fixed, data);
            inDo = props.onSubmitCallback(inDo);
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sCreate"])(model, inDo)
                .then(() => {
                _utils__WEBPACK_IMPORTED_MODULE_9__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["resourceObjPath"])(inDo, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(model)));
            })
                .catch(e => {
                console.error(e.message);
            });
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_4__["FormProvider"], Object.assign({}, methods),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, title)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { className: "co-m-pane__body-group co-m-pane__form" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__name" }, title),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__heading-link" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: namespaced ? `/k8s/ns/${params.ns}/${plural}/~new` : `/k8s/cluster/${plural}/~new`, id: "yaml-link", replace: true }, "Edit YAML"))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-m-pane__explanation" }, props.explanation),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_10__["Section"], { label: "Name", id: "name", isRequired: true },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { className: "pf-c-form-control", id: "name", name: "metadata.name", ref: methods.register }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SubForm, { isCreate: props.isCreate }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_9__["ButtonBar"], { inProgress: inProgress },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"], { className: "pf-c-form" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "button", variant: "primary", id: "save-changes", onClick: onClick }, props.saveButtonText || 'Create'),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { type: "button", variant: "secondary", id: "cancel", onClick: _utils__WEBPACK_IMPORTED_MODULE_9__["history"].goBack }, "Cancel")))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_hookform_devtools__WEBPACK_IMPORTED_MODULE_5__["DevTool"], { control: methods.control }))));
    };
    return FormComponent;
};


/***/ }),

/***/ "./public/components/hypercloud/utils/dropdown.jsx":
/*!*********************************************************!*\
  !*** ./public/components/hypercloud/utils/dropdown.jsx ***!
  \*********************************************************/
/*! exports provided: Dropdown, ContainerDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerDropdown", function() { return ContainerDropdown; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _utils_resource_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/resource-icon */ "./public/components/utils/resource-icon.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");







const DropDownRow = react__WEBPACK_IMPORTED_MODULE_1__["memo"]((props) => {
    const { itemKey, content, onClick, hover, selected } = props;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: itemKey },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: classnames__WEBPACK_IMPORTED_MODULE_2__("pf-c-dropdown__menu-item", { hover, focus: selected }), id: `${itemKey}-link`, "data-test-id": "dropdown-menu", "data-test-dropdown-menu": itemKey, onClick: (e) => onClick(itemKey, e) }, content)));
});
const Dropdown_ = (props) => {
    const { name, ariaLabel, className, buttonClassName, menuClassName, dropDownClassName, titlePrefix, describedBy, disabled, required, methods, defaultValue } = props;
    const { register, unregister, setValue, watch } = methods ? methods : Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useFormContext"])();
    const selectedKey = watch(name, defaultValue);
    /* defaultValue를 쓰는 경우(ex.모달)에 getVaule를 해보면 form이 비어있는 경우가 있음. 초기값 세팅을 해줌. */
    defaultValue && setValue(name, selectedKey);
    const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](props.items, selectedKey, props.title));
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](!!props.active);
    const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](Object.assign({}, props.items));
    const [keyboardHoverKey, setKeyboardHoverKey] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](selectedKey);
    const dropdownElement = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    const dropdownList = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
    const onWindowClick = (event) => {
        if (active) {
            return;
        }
        const { current } = dropdownElement;
        if (!current) {
            return;
        }
        if (event.target === current || (current && current.contains(event.target))) {
            return;
        }
        hide(event);
    };
    const onClick = (selected, e) => {
        e.preventDefault();
        e.stopPropagation();
        setValue(name, selected);
        setKeyboardHoverKey(selected);
        const newTitle = items[selected];
        setTitle(newTitle);
        hide();
    };
    const toggle = (e) => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        if (active) {
            hide(e);
        }
        else {
            show();
        }
    };
    const show = () => {
        window.removeEventListener('click', onWindowClick);
        window.addEventListener('click', onWindowClick);
        setActive(true);
    };
    const hide = (e) => {
        e && e.stopPropagation();
        window.removeEventListener('click', onWindowClick);
        setActive(false);
    };
    const onKeyDown = (e) => {
        const { key } = e;
        if (key === 'Escape') {
            hide(e);
            return;
        }
        if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 'Enter') {
            return;
        }
        if (key === 'Enter') {
            if (active && items[keyboardHoverKey]) {
                onClick(keyboardHoverKey, e);
            }
            return;
        }
        const keys = lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](items);
        let index = lodash_es__WEBPACK_IMPORTED_MODULE_0__["indexOf"](keys, keyboardHoverKey);
        if (key === 'ArrowDown') {
            index += 1;
        }
        else {
            index -= 1;
        }
        // periodic boundaries
        if (index >= keys.length) {
            index = 0;
        }
        if (index < 0) {
            index = keys.length - 1;
        }
        const newKey = keys[index];
        setKeyboardHoverKey(newKey);
        e.stopPropagation();
        e.preventDefault(); // 키보드 사용시 화면 스크롤되지 않도록 처리
    };
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        register({ name }, { required });
        return () => {
            unregister(name);
            window.removeEventListener('click', onWindowClick);
        };
    }, [name, register, unregister]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        !selectedKey && props.title && setTitle(props.title);
    }, [props.title]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        setItems(props.items);
    }, [props.items]);
    const spacerBefore = props.spacerBefore || new Set();
    const headerBefore = props.headerBefore || {};
    const rows = [];
    const addItem = (key, content) => {
        const selected = key === selectedKey;
        const hover = key === keyboardHoverKey;
        const klass = classnames__WEBPACK_IMPORTED_MODULE_2__({ active: selected });
        if (spacerBefore.has(key)) {
            rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: `${key}-spacer` },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dropdown-menu__divider" })));
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["has"](headerBefore, key)) {
            rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: `${key}-header` },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dropdown-menu__header" }, headerBefore[key])));
        }
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](DropDownRow, { className: klass, key: key, itemKey: key, content: content, onClick: onClick, selected: selected, hover: hover }));
    };
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](items, (v, k) => addItem(k, v));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: className, ref: dropdownElement, style: props.style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__({ 'dropdown pf-c-dropdown': true, 'pf-m-expanded': active, 'col-md-12': true }, dropDownClassName) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { "aria-label": ariaLabel, "aria-haspopup": "true", "aria-expanded": active, "aria-describedby": describedBy, className: classnames__WEBPACK_IMPORTED_MODULE_2__('pf-c-dropdown__toggle', buttonClassName), "data-test-id": "dropdown-button", onClick: toggle, onKeyDown: onKeyDown, type: "button", id: props.id, disabled: disabled },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "pf-c-dropdown__toggle-text" },
                    titlePrefix && `${titlePrefix}: `,
                    title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["CaretDownIcon"], { className: "pf-c-dropdown__toggle-icon" })),
            active && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { ref: dropdownList, className: classnames__WEBPACK_IMPORTED_MODULE_2__('pf-c-dropdown__menu', menuClassName) }, rows)))));
};
const Dropdown = react__WEBPACK_IMPORTED_MODULE_1__["memo"](Dropdown_);
Dropdown.propTypes = {
    actionItems: prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"]({
        actionKey: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
        actionTitle: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    })),
    className: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    dropDownClassName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    headerBefore: prop_types__WEBPACK_IMPORTED_MODULE_3__["objectOf"](prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]),
    items: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"].isRequired,
    menuClassName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    buttonClassName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    spacerBefore: prop_types__WEBPACK_IMPORTED_MODULE_3__["instanceOf"](Set),
    textFilter: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"],
    defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
    methods: prop_types__WEBPACK_IMPORTED_MODULE_3__["any"]
};
const containerLabel = (container) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_icon__WEBPACK_IMPORTED_MODULE_5__["ResourceName"], { name: container ? container.name : '', kind: "Container" }));
const getSpacer = (container) => {
    const spacerBefore = new Set();
    return container ? spacerBefore.add(container.name) : spacerBefore;
};
const getHeaders = (container, initContainer) => {
    return initContainer
        ? {
            [container.name]: 'Containers',
            [initContainer.name]: 'Init Containers',
        }
        : {};
};
const ContainerDropdown_ = (props) => {
    const { name, containers, initContainers } = props;
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](containers) && lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](initContainers)) {
        return null;
    }
    const firstInitContainer = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](initContainers, { order: 0 });
    const firstContainer = lodash_es__WEBPACK_IMPORTED_MODULE_0__["find"](containers, { order: 0 });
    const spacerBefore = getSpacer(firstInitContainer);
    const headerBefore = getHeaders(firstContainer, firstInitContainer);
    const dropdownItems = lodash_es__WEBPACK_IMPORTED_MODULE_0__["mapValues"](lodash_es__WEBPACK_IMPORTED_MODULE_0__["merge"](containers, initContainers), containerLabel);
    const title = props.title || containerLabel(firstContainer);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Dropdown, { name: name, className: "btn-group", menuClassName: "dropdown-menu--text-wrap", headerBefore: headerBefore, items: dropdownItems, spacerBefore: spacerBefore, title: title }));
};
const ContainerDropdown = react__WEBPACK_IMPORTED_MODULE_1__["memo"](ContainerDropdown_);
ContainerDropdown.propTypes = {
    containers: prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_3__["object"], prop_types__WEBPACK_IMPORTED_MODULE_3__["array"]]).isRequired,
    initContainers: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
};
ContainerDropdown.defaultProps = {
    initContainers: {},
};


/***/ }),

/***/ "./public/components/hypercloud/utils/list-view.tsx":
/*!**********************************************************!*\
  !*** ./public/components/hypercloud/utils/list-view.tsx ***!
  \**********************************************************/
/*! exports provided: ListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");




const ListView = ({ name, methods, defaultItem = { key: '', value: '' }, itemRenderer, headerFragment, addButtonText }) => {
    const { control, register, getValues } = methods ? methods : Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["useFormContext"])();
    const { fields, append, remove } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["useFieldArray"])({ control, name: name });
    const DefaultListHeaderFragment = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row pairs-list__heading" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "KEY"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "VALUE"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 co-empty__header" })));
    const DefaultListItemRenderer = (register, name, item, index, ListActions, ListDefaultIcons) => {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row", key: item.id },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__name-field" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", name: `${name}[${index}].key`, defaultValue: item.key })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__value-field" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", name: `${name}[${index}].value`, defaultValue: item.value })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                        ListActions.remove(index);
                    }, variant: "plain" }, ListDefaultIcons.deleteIcon))));
    };
    const deleteIcon = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleIcon"], { className: "pairs-list__side-btn pairs-list__delete-icon" }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "sr-only" }, "Delete")));
    const ListActions = {
        append: append,
        remove: remove,
        getValues: getValues,
    };
    const ListDefaultIcons = {
        deleteIcon: deleteIcon,
    };
    const itemList = itemRenderer ? fields.map((item, index) => itemRenderer(register, name, item, index, ListActions, ListDefaultIcons)) : fields.map((item, index) => DefaultListItemRenderer(register, name, item, index, ListActions, ListDefaultIcons));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        headerFragment ? headerFragment : DefaultListHeaderFragment,
        itemList,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row col-xs-12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], { className: "pf-m-link--align-left", "data-test-id": "pairs-list__add-btn", onClick: () => {
                    append(defaultItem);
                }, type: "button", variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                !!addButtonText ? addButtonText : 'Add'))));
};


/***/ }),

/***/ "./public/components/hypercloud/utils/radio.tsx":
/*!******************************************************!*\
  !*** ./public/components/hypercloud/utils/radio.tsx ***!
  \******************************************************/
/*! exports provided: RadioInput, RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioInput", function() { return RadioInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");




const RadioInput = props => {
    const { register } = props.methods ? props.methods : Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useFormContext"])();
    const inputProps = lodash_es__WEBPACK_IMPORTED_MODULE_0__["omit"](props, ['title', 'subTitle', 'desc', 'children', 'inline']);
    const inputElement = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_2__({ 'radio-inline': props.inline, 'co-disabled': props.disabled }) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object.assign({ type: "radio", ref: register, value: props.item }, inputProps)),
            props.title,
            " ",
            props.subTitle && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "co-no-bold" }, props.subTitle)),
        props.desc && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "co-m-radio-desc text-muted" }, props.desc),
        props.children));
    return props.inline ? inputElement : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "radio" }, inputElement);
};
const RadioGroup = ({ inline = false, items, id = JSON.stringify(items), name, methods }) => {
    const radios = items.map(({ desc, title, subTitle, value, disabled }) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RadioInput, { name: name, key: value, desc: desc, title: title, subTitle: subTitle, item: value, disabled: disabled, inline: inline, methods: methods }));
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-radio-group', { 'co-radio-group--inline': inline }) }, radios);
};
RadioInput.displayName = 'RadioInput';
RadioGroup.displayName = 'RadioGroup';


/***/ })

}]);
//# sourceMappingURL=16-718a1127dc5e0610b840.js.map