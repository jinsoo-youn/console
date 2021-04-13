(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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
/* harmony import */ var _utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/resource-dropdown */ "./public/components/hypercloud/utils/resource-dropdown.tsx");
/* harmony import */ var _utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/resource-list-dropdown */ "./public/components/hypercloud/utils/resource-list-dropdown.tsx");
/* harmony import */ var _utils_key_value_list_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/key-value-list-editor */ "./public/components/hypercloud/utils/key-value-list-editor.tsx");
/* harmony import */ var _utils_tags_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/tags-label */ "./public/components/hypercloud/utils/tags-label.jsx");
/* harmony import */ var _utils_number_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/number-spinner */ "./public/components/hypercloud/utils/number-spinner.tsx");
/* harmony import */ var _utils_list_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/list-view */ "./public/components/hypercloud/utils/list-view.tsx");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
















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
    const updateSelectedClusterItems = (selection) => {
        //Do Something
        console.log('updateSelectedClusterItems: ', selection);
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
    const listItemRenderer = (register, name, item, index, ListActions, ListDefaultIcons) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row", key: item.id },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__name-field" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: register(), className: "pf-c-form-control", name: `metadata.numList[${index}].name`, defaultValue: item.name })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-4 pairs-list__value-field" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_number_spinner__WEBPACK_IMPORTED_MODULE_13__["NumberSpinner"], { initialValue: item.number, min: -15, max: 15, name: `metadata.numList[${index}].number` })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-xs-1 pairs-list__action" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Button"], { type: "button", "data-test-id": "pairs-list__delete-btn", className: "pairs-list__span-btns", onClick: () => {
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
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "resourcedropdown", label: "Resource Dropdown" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_9__["ResourceDropdown"], { name: "RD-single", placeholder: "select one deployment", resources: [
                    {
                        kind: 'Deployment',
                        namespace: 'catalog',
                        prop: 'deployment'
                    },
                ], type: 'single', useHookForm: true }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_dropdown__WEBPACK_IMPORTED_MODULE_9__["ResourceDropdown"], { name: "RD-multiple", resources: [
                    {
                        kind: 'Pod',
                        namespace: 'default',
                        prop: 'pod',
                    },
                ], defaultValue: ["new-pipeline-test-shtehy-sum-params-qkg57-pod-l47lv"], type: 'multiple', showAll: true, useHookForm: true })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "resourcelistdropdown", label: "Resource List Dropdown" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_10__["ResourceListDropdown"], { resourceList: ClusterResourceList, autocompletePlaceholder: "search by name", placeholder: "Resource Dropdown" // *single에서만 사용 가능
                , type: "single" // 필수 type: single / multiple
             }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_10__["ResourceListDropdown"], { name: "RLD-multiple", resourceList: ClusterResourceList, onChange: updateSelectedClusterItems, resourceType: "Cluster and Cluster Claim", autocompletePlaceholder: "search by name", type: "multiple" // 필수 type: single / multiple
                , useHookForm: true }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_10__["ResourceListDropdownWithDataToolbar"] // react hook form 사용하지 않는 예시
            , { resourceList: ClusterResourceList, showAll: true, resourceType: "Cluster and Cluster Claim" // title, placeholder, all resources, chip group 에 적용되는 문구 (title, placeholder는 직접 지정하는 것의 우선순위가 더 높음)
                , autocompletePlaceholder: "search by name" // 검색란 placeholder
                , onSelectedItemChange: onSelectedItemChange }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_10__["ResourceListDropdownWithDataToolbar"] // react hook form 사용하는 예시
            , { name: "ResourceListDropdownWithDataToolbar1", resourceList: ClusterResourceList, showAll: false, title: "select Resources" // 드롭다운 title 지정
                , resourceType: "Cluster and Cluster Claim", useHookForm: true })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "numberspinner", label: "Number Spinner" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_number_spinner__WEBPACK_IMPORTED_MODULE_13__["NumberSpinner"], { initialValue: 0, min: -5, max: 5, name: "spinner1" // 한 페이지에 spinner 여러 개 만들 경우 name에 unique한 값을 넣어줘야 됨 (한개만 만들 땐 name이 필수 아님)
             })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "tagslabel", label: "Tags Label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_tags_label__WEBPACK_IMPORTED_MODULE_12__["TagsLabel"], { name: "metadata.tags" // 서버에 보낼 데이터에서의 path (필수)
                , placeholder: "Enter tag" // tag가 없을 때 보여줄 placeholder (선택)
             })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "list", label: "Key Value List" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_key_value_list_editor__WEBPACK_IMPORTED_MODULE_11__["KeyValueListEditor"], { name: "metadata.keyvaluelist" // 서버에 보낼 데이터에서의 path (필수)
                , disableReorder: false })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "listviewsection1", label: "Default Key/Value List View" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_14__["ListView"], { name: "metadata.keyValueList", addButtonText: "Add Key/Value" })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_section__WEBPACK_IMPORTED_MODULE_6__["Section"], { id: "listviewsection2", label: "Customized List View" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_list_view__WEBPACK_IMPORTED_MODULE_14__["ListView"], { name: "metadata.numList", addButtonText: "Add Name/Num", headerFragment: listHeaderFragment, itemRenderer: listItemRenderer, defaultItem: { name: '', number: 0 } }))));
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

/***/ "./public/components/hypercloud/utils/resource-dropdown.tsx":
/*!******************************************************************!*\
  !*** ./public/components/hypercloud/utils/resource-dropdown.tsx ***!
  \******************************************************************/
/*! exports provided: ResourceDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDropdown", function() { return ResourceDropdown; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _resource_list_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-list-dropdown */ "./public/components/hypercloud/utils/resource-list-dropdown.tsx");
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




const ResourceDropdownWrapper_ = (props) => {
    const getItems = (resources) => {
        const items = [];
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](resources, (resource, k) => {
            if (resource.loaded) {
                const kind = resource.kind;
                lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](resource.data, (item) => {
                    item.kind = kind;
                    items.push(item);
                });
            }
        });
        return items;
    };
    //const [title, setTitle] = React.useState(props.loaded ? props.placeholder : <LoadingInline />);
    const [rows, setRows] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.loaded ? getItems(props.resources) : []);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
        if (props.loaded) {
            //setTitle(props.placeholder);
            setRows(getItems(props.resources));
        }
    }, [props.loaded]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resource_list_dropdown__WEBPACK_IMPORTED_MODULE_3__["ResourceListDropdown"], Object.assign({}, props, { title: !props.loaded ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingInline"], null) : props.title, resourceList: rows, autocompletePlaceholder: "search by name" })));
};
const ResourceDropdown = (_a) => {
    var { resources } = _a, props = __rest(_a, ["resources"]);
    resources.map((resource) => Object.assign(resource, { isList: true }));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResourceDropdownWrapper_, Object.assign({}, props))));
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
//# sourceMappingURL=27-a7bb293f91da6d72b9cf.js.map