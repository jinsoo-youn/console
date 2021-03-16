(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./public/components/hypercloud/create-sample.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/create-sample.tsx ***!
  \********************************************************/
/*! exports provided: CreateSample, onSubmitCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSample", function() { return CreateSample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmitCallback", function() { return onSubmitCallback; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _form_create_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/create-form */ "./public/components/hypercloud/form/create-form.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _utils_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/radio */ "./public/components/hypercloud/utils/radio.tsx");
/* harmony import */ var _utils_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/section */ "./public/components/hypercloud/utils/section.tsx");
/* harmony import */ var _utils_inputSelectBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/inputSelectBox */ "./public/components/hypercloud/utils/inputSelectBox.tsx");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/dropdown */ "./public/components/hypercloud/utils/dropdown.jsx");
/* harmony import */ var _utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/resource-list-dropdown */ "./public/components/hypercloud/utils/resource-list-dropdown.tsx");
/* harmony import */ var _utils_key_value_list_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/key-value-list-editor */ "./public/components/hypercloud/utils/key-value-list-editor.tsx");
/* harmony import */ var _utils_tags_label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/tags-label */ "./public/components/hypercloud/utils/tags-label.jsx");
/* harmony import */ var _utils_number_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/number-spinner */ "./public/components/hypercloud/utils/number-spinner.tsx");
/* harmony import */ var _utils_list_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/list-view */ "./public/components/hypercloud/utils/list-view.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");















const defaultValues = {
    // requestDo에 넣어줄 형식으로 defaultValues 작성
    metadata: {
        name: 'test-name',
        keyvaluelist: [
            { key: 'A', value: 'aaa' },
            { key: 'B', value: 'bbb' },
            { key: 'C', value: 'ccc' },
            { key: 'D', value: 'ddd' },
            { key: 'E', value: 'eee' },
        ],
        tags: ['AAA', 'BBB'],
    },
    spec: {
        resources: 'cpu',
    },
    keyValueList: [
        {
            key: 'AAA',
            value: 'aaa',
        },
        {
            key: 'BBB',
            value: 'bbb',
        },
        {
            key: 'CCC',
            value: 'ccc',
        },
        {
            key: 'DDD',
            value: 'ddd',
        },
    ],
    numList: [
        {
            name: 'Item1',
            number: 3,
        },
        {
            name: 'Item2',
            number: 5,
        },
    ],
    dropdown1: 'Ti',
};
const ClusterResourceList = [
    {
        "kind": "ClusterManager",
        "apiVersion": "cluster.tmax.io/v1alpha1",
        "metadata": {
            "name": "jmc-zgw2v",
            "uid": "1a482d7d-ac35-46d3-8496-a94688fc6d0e",
        },
        "fakeMetadata": {
            "fakename": "jmc"
        },
    },
    {
        "kind": "ClusterClaim",
        "apiVersion": "cluster.tmax.io/v1alpha1",
        "metadata": {
            "name": "example",
            "uid": "436b6e22-748e-4e04-aea5-156f2ed35fa0",
        },
    }
];
const sampleFormFactory = params => {
    return Object(_form_create_form__WEBPACK_IMPORTED_MODULE_3__["WithCommonForm"])(CreateSampleComponent, params, defaultValues);
};
const CreateSampleComponent = props => {
    const { control } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
    const [selectedClusterItems, setSelectedClusterItems] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](new Set([]));
    const updateSelectedClusterItems = (selection) => {
        const updateItems = lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](selectedClusterItems);
        updateItems.has(selection) ? updateItems.delete(selection) : updateItems.add(selection);
        setSelectedClusterItems(updateItems);
    };
    const onSelectedItemChange = (items) => {
        //DO Something
        console.log("hi");
    };
    const resources = [
        // RadioGroup 컴포넌트에 넣어줄 items
        {
            title: 'Cpu',
            value: 'cpu',
        },
        {
            title: 'Gpu',
            value: 'gpu',
        },
        {
            title: 'Memory',
            value: 'memory',
        },
    ];
    const dropdownUnits = {
        Mi: 'MiB',
        Gi: 'GiB',
        Ti: 'TiB',
    };
    const containers = { test: { name: 'test', order: 0 }, sidecar: { name: 'sidecar' }, sidecar2: { name: 'sidecar2' } };
    const initContainers = { initupload: { name: 'initupload', order: 0 }, ['place-entrypoint']: { name: 'place-entrypoint' }, ['place-entrypoint2']: { name: 'place-entrypoint2' } };
    const listHeaderFragment = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row pairs-list__heading" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "NAME"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "NUM"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 co-empty__header" })));
    const listItemRenderer = (register, item, index, ListActions, ListDefaultIcons) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row", key: item.id },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__name-field" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", name: `metadata.numList[${index}].name`, defaultValue: item.name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__value-field" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_number_spinner__WEBPACK_IMPORTED_MODULE_12__["NumberSpinner"], { initialValue: item.number, min: -15, max: 15, name: `metadata.numList[${index}].number` })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                    ListActions.remove(index);
                }, variant: "plain" }, ListDefaultIcons.deleteIcon))));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { label: "Labels", id: "label", description: "\uC774\uAC83\uC740 Label\uC785\uB2C8\uB2E4." },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], { name: "metadata.labels", id: "label", labelClassName: "co-text-sample", as: _utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"], control: control, tags: [] })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "resources", label: "Radio Group" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_radio__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], { name: "spec.resources" // 서버에 보낼 데이터에서의 path (필수)
                , items: resources, inline: false })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "cpu", label: "Input Selectbox" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_inputSelectBox__WEBPACK_IMPORTED_MODULE_7__["InputSelectBox"], { textName: "spec.cpu", id: "cpu", dropdownName: "spec.cpuRange", selectedKey: "Mi", items: dropdownUnits })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "section", label: "Grid Section", isRequired: true },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "label", label: "Label (for Section)" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], { name: "metadata.section.label", id: "label", labelClassName: "co-text-sample", as: _utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"], control: control, tags: [] })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "cpu", label: "Input Selectbox (for Section)" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_inputSelectBox__WEBPACK_IMPORTED_MODULE_7__["InputSelectBox"], { textName: "spec.section.cpu", id: "cpu", dropdownName: "spec.section.cpuRange", selectedKey: "Mi", items: dropdownUnits })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "resources", label: "Radio Group (for Section)" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_radio__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], { name: "spec.section.resources" // 서버에 보낼 데이터에서의 path (필수)
                    , items: resources, inline: false }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "dropdown", label: "Dropdown" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { name: "dropdown1", className: "btn-group", items: dropdownUnits, required: true, buttonClassName: "dropdown-btn" // 선택된 아이템 보여주는 button (title) 부분 className
                , itemClassName: "dropdown-item" // 드롭다운 아이템 리스트 전체의 className - 각 row를 의미하는 것은 아님
             }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_dropdown__WEBPACK_IMPORTED_MODULE_8__["ContainerDropdown"], { name: "containerDropdown1", containers: containers, initContainers: initContainers })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "resourcelistdropdown", label: "Resource List Dropdown" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_9__["ResourceListDropdown"], { resourceList: ClusterResourceList, selected: [...selectedClusterItems], onChange: updateSelectedClusterItems, showAll: false, title: "select Resources" // 드롭다운 title 지정
                , autocompletePlaceholder: "search by name", type: "multiple" // type: single / multiple
             }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_9__["ResourceListDropdownWithDataToolbar"], { resourceList: ClusterResourceList, showAll: true, resourceType: "Cluster and Cluster Claim" // title, placeholder, all resources, chip group 에 적용되는 문구 (title, placeholder는 직접 지정하는 것의 우선순위가 더 높음)
                , autocompletePlaceholder: "search by name" // 검색란 placeholder
                , onSelectedItemChange: onSelectedItemChange }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_9__["ResourceListDropdownWithDataToolbar"], { name: "ResourceListDropdownWithDataToolbar1", resourceList: ClusterResourceList, showAll: false, title: "select Resources" // 드롭다운 title 지정
                , resourceType: "Cluster and Cluster Claim" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "numberspinner", label: "Number Spinner" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_number_spinner__WEBPACK_IMPORTED_MODULE_12__["NumberSpinner"], { initialValue: 0, min: -5, max: 5, name: "spinner1" // 한 페이지에 spinner 여러 개 만들 경우 name에 unique한 값을 넣어줘야 됨 (한개만 만들 땐 name이 필수 아님)
             })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "tagslabel", label: "Tags Label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_tags_label__WEBPACK_IMPORTED_MODULE_11__["TagsLabel"], { name: "metadata.tags" // 서버에 보낼 데이터에서의 path (필수)
                , placeholder: "Enter tag" // tag가 없을 때 보여줄 placeholder (선택)
             })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "list", label: "Key Value List" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_key_value_list_editor__WEBPACK_IMPORTED_MODULE_10__["KeyValueListEditor"], { name: "metadata.keyvaluelist" // 서버에 보낼 데이터에서의 path (필수)
                , disableReorder: false })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "listviewsection1", label: "Default Key/Value List View" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_13__["ListView"], { name: "metadata.keyValueList", addButtonText: "Add Key/Value" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "listviewsection2", label: "Customized List View" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_13__["ListView"], { name: "metadata.numList", addButtonText: "Add Name/Num", headerFragment: listHeaderFragment, itemRenderer: listItemRenderer, defaultItem: { name: '', number: 0 } }))));
};
const CreateSample = props => {
    const formComponent = sampleFormFactory(props.match.params);
    const SampleFormComponent = formComponent;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SampleFormComponent, { fixed: {}, explanation: "", titleVerb: "Create", onSubmitCallback: onSubmitCallback, isCreate: true });
};
const onSubmitCallback = data => {
    // submit하기 전에 data를 가공해야 할 경우
    let labels = _utils__WEBPACK_IMPORTED_MODULE_4__["SelectorInput"].objectify(data.metadata.labels);
    delete data.metadata.labels;
    data = lodash_es__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"](data, { metadata: { labels: labels } });
    return data;
};


/***/ }),

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
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sCreate"])(model, inDo);
            _utils__WEBPACK_IMPORTED_MODULE_9__["history"].push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["resourceObjPath"])(inDo, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceFor"])(model)));
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
    const { register, unregister, setValue, watch } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useFormContext"])();
    const { name, ariaLabel, className, buttonClassName, menuClassName, dropDownClassName, titlePrefix, describedBy, disabled, required } = props;
    const selectedKey = watch(name);
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
    };
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        register({ name }, { required });
        return () => {
            unregister(name);
            window.removeEventListener('click', onWindowClick);
        };
    }, [name, register, unregister]);
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
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__({ 'dropdown pf-c-dropdown': true, 'pf-m-expanded': active }, dropDownClassName) },
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
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
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

/***/ "./public/components/hypercloud/utils/inputSelectBox.tsx":
/*!***************************************************************!*\
  !*** ./public/components/hypercloud/utils/inputSelectBox.tsx ***!
  \***************************************************************/
/*! exports provided: InputSelectBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectBox", function() { return InputSelectBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dropdown */ "./public/components/utils/dropdown.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");




const InputSelectBox = props => {
    const { register, control } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useFormContext"])();
    const { items, textName, dropdownName, selectedKey, placeholder, required, minValue, inputClassName, id } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-input-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('pf-c-form-control', inputClassName), ref: register, id: id, type: "number", placeholder: placeholder, name: textName, required: required, min: minValue }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], { as: _utils_dropdown__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], control: control, selectedKey: selectedKey, name: dropdownName, className: "btn-group", items: items, required: required })));
};


/***/ }),

/***/ "./public/components/hypercloud/utils/key-value-list-editor.tsx":
/*!**********************************************************************!*\
  !*** ./public/components/hypercloud/utils/key-value-list-editor.tsx ***!
  \**********************************************************************/
/*! exports provided: KeyValueListEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueListEditor", function() { return KeyValueListEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");






const KeyValueListEditor = ({ name, disableReorder = false }) => {
    const { control, register, getValues } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
    const { fields, append, remove, move } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFieldArray"])({ control, name: name });
    const deleteIcon = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["MinusCircleIcon"], { className: "pairs-list__side-btn pairs-list__delete-icon" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "sr-only" }, "Delete")));
    // 중복되는 key 유무에 대한 validation
    const validateKey = keyInput => {
        let count = 0;
        const itemArray = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](getValues(), name);
        for (let item of itemArray) {
            if (keyInput === item['key'] && ++count > 1) {
                return false;
            }
        }
        return true;
    };
    const validateValue = valueInput => {
        // value에 대한 validation은 아직 없음
        return true;
    };
    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        move(result.source.index, result.destination.index);
    };
    const renderList = () => {
        return fields.map((item, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Draggable"], { draggableId: item.id, index: index, key: item.id }, provided => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ ref: provided.innerRef }, provided.draggableProps),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ className: 'col-xs-1 pairs-list__action ' + (disableReorder ? 'hide' : '') }, provided.dragHandleProps),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PficonDragdropIcon"], { className: "vertical-center" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-5 pairs-list__name-field" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", ref: register({ validate: validateKey }), name: `${name}[${index}].key`, defaultValue: item.key })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-5 pairs-list__value-field" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", className: "pf-c-form-control", ref: register({ validate: validateValue }), name: `${name}[${index}].value`, defaultValue: item.value })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
                    remove(index);
                }, variant: "plain" }, deleteIcon))))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row pairs-list__heading" },
            !disableReorder && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-1 co-empty__header" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-5 text-secondary text-uppercase" }, "KEY"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-5 text-secondary text-uppercase" }, "VALUE"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-1 co-empty__header" })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["DragDropContext"], { onDragEnd: onDragEnd },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__["Droppable"], { droppableId: "list" }, provided => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({ ref: provided.innerRef }, provided.droppableProps),
                    renderList(),
                    provided.placeholder))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "pf-m-link--align-left", "data-test-id": "pairs-list__add-btn", onClick: () => {
                        append({ key: '', value: '' });
                    }, type: "button", variant: "link" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PlusCircleIcon"], { "data-test-id": "pairs-list__add-icon", className: "co-icon-space-r" }),
                    "Add")))));
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




const ListView = ({ name, defaultItem = { key: '', value: '' }, itemRenderer, headerFragment, addButtonText }) => {
    const { control, register, getValues } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["useFormContext"])();
    const { fields, append, remove } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["useFieldArray"])({ control, name: name });
    const DefaultListHeaderFragment = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row pairs-list__heading" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "KEY"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 text-secondary text-uppercase" }, "VALUE"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 co-empty__header" })));
    const DefaultListItemRenderer = (register, item, index, ListActions, ListDefaultIcons) => {
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
    const itemList = itemRenderer ? fields.map((item, index) => itemRenderer(register, item, index, ListActions, ListDefaultIcons)) : fields.map((item, index) => DefaultListItemRenderer(register, item, index, ListActions, ListDefaultIcons));
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

/***/ "./public/components/hypercloud/utils/number-spinner.tsx":
/*!***************************************************************!*\
  !*** ./public/components/hypercloud/utils/number-spinner.tsx ***!
  \***************************************************************/
/*! exports provided: NumberSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberSpinner", function() { return NumberSpinner; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






const NumberSpinner = (_a) => {
    var { className, initialValue, min, max, name } = _a, inputProps = __rest(_a, ["className", "initialValue", "min", "max", "name"]);
    const { register } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"])();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](initialValue);
    const changeValueBy = operation => {
        setValue(lodash_es__WEBPACK_IMPORTED_MODULE_0__["toInteger"](value) + operation);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: () => changeValueBy(-1), type: "button", variant: "plain", isDisabled: !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isNil"](min) && value <= min, "aria-label": "Decrement", className: "co-m-number-spinner__button" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["MinusSquareIcon"], { className: "co-m-number-spinner__down-icon" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", Object.assign({ name: name, type: "number", ref: register({ min: min, max: max }), value: value, onChange: (e) => setValue(e.target.value), className: classnames__WEBPACK_IMPORTED_MODULE_2__(className, 'co-m-number-spinner__input', 'hc-number-spinner__input') }, inputProps)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: () => changeValueBy(1), type: "button", variant: "plain", isDisabled: !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isNil"](max) && value >= max, "aria-label": "Increment", className: "co-m-number-spinner__button" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__["PlusSquareIcon"], { className: "co-m-number-spinner__up-icon" }))));
};
NumberSpinner.defaultProps = {
    name: 'numberSpinner',
    initialValue: 0,
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
    const { register } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useFormContext"])();
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
const RadioGroup = ({ inline = false, items, id = JSON.stringify(items), name }) => {
    const radios = items.map(({ desc, title, subTitle, value, disabled }) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RadioInput, { name: name, key: value, desc: desc, title: title, subTitle: subTitle, item: value, disabled: disabled, inline: inline }));
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2__('co-radio-group', { 'co-radio-group--inline': inline }) }, radios);
};
RadioInput.displayName = 'RadioInput';
RadioGroup.displayName = 'RadioGroup';


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


/***/ }),

/***/ "./public/components/hypercloud/utils/tags-label.jsx":
/*!***********************************************************!*\
  !*** ./public/components/hypercloud/utils/tags-label.jsx ***!
  \***********************************************************/
/*! exports provided: TagsLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsLabel", function() { return TagsLabel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tagsinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tagsinput */ "./node_modules/react-tagsinput/react-tagsinput.js");
/* harmony import */ var react_tagsinput__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");







const TagsLabel = ({ name, placeholder = '' }) => {
    const { control, setValue, getValues, watch } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"])();
    const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
    const [isInputValid, setIsInputValid] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
    const [isEmpty, setIsEmpty] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(watch(name) === undefined);
    // An array of key codes that add a tag, default is [9, 13] (Tab and Enter).
    const addKeys = [13];
    // An array of key codes that remove a tag, default is [8] (Backspace).
    const removeKeys = inputValue.length ? [] : [8];
    const isTagValid = inputValue => {
        // 지금은 한글이 있는지만 validation
        const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(inputValue);
        return !hasKorean;
    };
    const handleInputChange = e => {
        const inputValue = e.target.value;
        // If the user deletes an existing inputValue, set isInputValid back to true
        if (inputValue === '') {
            setInputValue(inputValue);
            setIsInputValid(true);
            return;
        }
        setInputValue(inputValue);
        setIsInputValid(isTagValid(inputValue));
    };
    const handleChange = (tags, changed) => {
        const newTag = changed[0];
        if (!isTagValid(newTag)) {
            setIsInputValid(false);
            return;
        }
        setValue(name, tags);
        setIsEmpty(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](tags));
        setInputValue('');
        setIsInputValid(true);
    };
    const renderTag = ({ tag, key, onRemove, getTagDisplayValue }) => {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classnames__WEBPACK_IMPORTED_MODULE_3__('tag-item', 'co-m-label', 'co-text-pod'), key: key },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "tag-item__content" }, getTagDisplayValue(tag)),
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "remove-button", onClick: () => onRemove(key) }, "\u00D7")));
    };
    const inputProps = {
        className: classnames__WEBPACK_IMPORTED_MODULE_3__('input', { 'invalid-tag': !isInputValid }),
        spellCheck: 'false',
        value: inputValue,
        placeholder: isEmpty ? placeholder : '',
        id: 'tags-input',
        onChange: handleInputChange,
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_hook_form__WEBPACK_IMPORTED_MODULE_5__["Controller"], { control: control, name: name, render: ({ value }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-search-input pf-c-form-control" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tags-input", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_tagsinput__WEBPACK_IMPORTED_MODULE_4___default.a, { onChange: handleChange, value: value ? value : [], className: "tags", renderTag: renderTag, inputProps: inputProps, addKeys: addKeys, removeKeys: removeKeys, addOnBlur: true })))) }));
};
TagsLabel.propTypes = {
    name: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
};


/***/ })

}]);
//# sourceMappingURL=25-8f249ec9e7925344e9a6.js.map