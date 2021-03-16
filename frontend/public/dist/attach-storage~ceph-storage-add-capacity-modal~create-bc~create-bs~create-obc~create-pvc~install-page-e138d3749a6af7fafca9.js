(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attach-storage~ceph-storage-add-capacity-modal~create-bc~create-bs~create-obc~create-pvc~install-page"],{

/***/ "./public/components/storage-class.tsx":
/*!*********************************************!*\
  !*** ./public/components/storage-class.tsx ***!
  \*********************************************/
/*! exports provided: StorageClassReference, isDefaultClass, StorageClassList, StorageClassPage, StorageClassDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassReference", function() { return StorageClassReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefaultClass", function() { return isDefaultClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassList", function() { return StorageClassList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassPage", function() { return StorageClassPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassDetailsPage", function() { return StorageClassDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");









const StorageClassReference = 'StorageClass';
const { common } = _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].factory;
const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_7__["StorageClassModel"]), ...common];
const defaultClassAnnotation = 'storageclass.kubernetes.io/is-default-class';
const betaDefaultStorageClassAnnotation = 'storageclass.beta.kubernetes.io/is-default-class';
const isDefaultClass = (storageClass) => {
    const annotations = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](storageClass, 'metadata.annotations') || {};
    return (annotations[defaultClassAnnotation] === 'true' ||
        annotations[betaDefaultStorageClassAnnotation] === 'true');
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-5', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-5', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_3__('col-sm-2', 'hidden-xs'),
    _utils__WEBPACK_IMPORTED_MODULE_6__["Kebab"].columnClass,
];
const StorageClassTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_30'),
            sortField: 'provisioner',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_31'),
            sortField: 'reclaimPolicy',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[3] },
        },
    ];
};
StorageClassTableHeader.displayName = 'StorageClassTableHeader';
const StorageClassTableRow = ({ obj, index, key, style, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[0], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: StorageClassReference, name: obj.metadata.name }, isDefaultClass(obj) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "small text-muted co-resource-item__help-text" }, "\u2013 Default")))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_3__(tableColumnClasses[1], 'co-break-word') }, obj.provisioner),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, obj.reclaimPolicy || '-'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceKebab"], { actions: menuActions, kind: StorageClassReference, resource: obj }))));
};
const StorageClassDetails = ({ obj }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(obj, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceSummary"], { resource: obj },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_50'), obj: obj, path: "provisioner" }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: `${t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_51')}`, obj: obj, path: "reclaimPolicy" }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_52')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, isDefaultClass(obj).toString()),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_53'), obj: obj, path: "volumeBindingMode" }))))));
};
const StorageClassList = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Storage Classes", Header: StorageClassTableHeader.bind(null, t), Row: StorageClassTableRow, virtualize: true }));
};
StorageClassList.displayName = 'StorageClassList';
const StorageClassPage = (props) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, lodash_es__WEBPACK_IMPORTED_MODULE_1__["omit"](props, 'mock'), { title: t('COMMON:MSG_LNB_MENU_53'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_53') }), kind: StorageClassReference, ListComponent: StorageClassList, canCreate: true, filterLabel: props.filterLabel })));
};
const pages = [_utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].details(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["detailsPage"])(StorageClassDetails)), _utils__WEBPACK_IMPORTED_MODULE_6__["navFactory"].editYaml()];
const StorageClassDetailsPage = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: StorageClassReference, menuActions: menuActions, pages: pages })));
};
StorageClassDetailsPage.displayName = 'StorageClassDetailsPage';


/***/ }),

/***/ "./public/components/utils/storage-class-dropdown.tsx":
/*!************************************************************!*\
  !*** ./public/components/utils/storage-class-dropdown.tsx ***!
  \************************************************************/
/*! exports provided: StorageClassDropdownInner, StorageClassDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassDropdownInner", function() { return StorageClassDropdownInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageClassDropdown", function() { return StorageClassDropdown; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./public/components/utils/index.tsx");
/* harmony import */ var _storage_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-class */ "./public/components/storage-class.tsx");





/* Component StorageClassDropdown - creates a dropdown list of storage classes */
class StorageClassDropdownInner extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            items: {},
            name: this.props.name,
            selectedKey: null,
            title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_3__["LoadingInline"], null),
            defaultClass: this.props.defaultClass,
        };
        this.autocompleteFilter = (text, item) => fuzzysearch__WEBPACK_IMPORTED_MODULE_2__(text, item.props.name);
        this.getTitle = (storageClass) => {
            return storageClass.kindLabel ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_3__["ResourceName"], { kind: "StorageClass", name: storageClass.name })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, storageClass.name));
        };
        this.onChange = (key) => {
            const storageClass = lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](this.state, ['items', key], {});
            this.setState({
                selectedKey: key,
                title: this.getTitle(storageClass),
            }, () => this.props.onChange(storageClass.resource));
        };
    }
    UNSAFE_componentWillMount() {
        this.UNSAFE_componentWillReceiveProps(this.props);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { loaded, loadError, resources } = nextProps;
        if (loadError) {
            this.setState({
                title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "cos-error-title" },
                    "Error Loading ",
                    nextProps.desc),
            });
            return;
        }
        if (!loaded) {
            return;
        }
        const state = {
            items: {},
            title: {},
            defaultClass: '',
        };
        let unorderedItems = {};
        const noStorageClass = 'No default storage class';
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["map"](resources.StorageClass.data, (resource) => {
            unorderedItems[resource.metadata.name] = {
                kindLabel: 'StorageClass',
                name: resource.metadata.name,
                description: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'metadata.annotations.description', ''),
                default: Object(_storage_class__WEBPACK_IMPORTED_MODULE_4__["isDefaultClass"])(resource),
                accessMode: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['metadata', 'annotations', 'storage.alpha.openshift.io/access-mode'], ''),
                provisioner: resource.provisioner,
                type: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'parameters.type', ''),
                zone: lodash_es__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'parameters.zone', ''),
                resource,
            };
        });
        //Filter if user provides a custom function
        if (nextProps.filter) {
            unorderedItems = Object.keys(unorderedItems)
                .filter((sc) => nextProps.filter(unorderedItems[sc]))
                .reduce((acc, key) => {
                acc[key] = unorderedItems[key];
                return acc;
            }, {});
        }
        // Determine if there is a default storage class
        state.defaultClass = lodash_es__WEBPACK_IMPORTED_MODULE_0__["findKey"](unorderedItems, 'default');
        const { selectedKey } = this.state;
        if (!state.defaultClass) {
            // Add No Storage Class option if there is not a default storage class
            unorderedItems[''] = { kindLabel: '', name: noStorageClass };
        }
        if (!this.props.loaded || !selectedKey) {
            state.title = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "text-muted" }, "Select storage class");
        }
        const selectedItem = unorderedItems[selectedKey || state.defaultClass];
        if (selectedItem) {
            state.title = this.getTitle(selectedItem);
        }
        Object.keys(unorderedItems)
            .sort()
            .forEach((key) => {
            state.items[key] = unorderedItems[key];
        });
        this.setState(state);
    }
    componentDidUpdate() {
        const { defaultClass, selectedKey } = this.state;
        if (!selectedKey && defaultClass) {
            this.onChange(defaultClass);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEqual"](this.state, nextState);
    }
    render() {
        const { id, loaded, describedBy } = this.props;
        const items = {};
        lodash_es__WEBPACK_IMPORTED_MODULE_0__["each"](this.state.items, (props, key) => (items[key] = key ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StorageClassDropdownEntry, Object.assign({}, props))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StorageClassDropdownNoStorageClassOption, Object.assign({}, props)))));
        const { selectedKey, defaultClass } = this.state;
        // Only show the dropdown if 'no storage class' is not the only option which depends on defaultClass
        const itemsAvailableToShow = defaultClass || lodash_es__WEBPACK_IMPORTED_MODULE_0__["size"](items) > 1;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, loaded && itemsAvailableToShow && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: this.props.hideClassName
                    ? `${this.props.hideClassName} control-label`
                    : 'control-label', htmlFor: id }, "Storage Class"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_3__["Dropdown"], { className: "co-storage-class-dropdown", dropDownClassName: "dropdown--full-width", autocompleteFilter: this.autocompleteFilter, autocompletePlaceholder: "Select storage class", items: items, selectedKey: selectedKey, title: this.state.title, onChange: this.onChange, id: id, menuClassName: "dropdown-menu--text-wrap" }),
            describedBy && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "help-block", id: describedBy }, "Storage class for the new claim."))))));
    }
}
const StorageClassDropdown = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_3__["Firehose"], { resources: [{ kind: 'StorageClass', prop: 'StorageClass', isList: true }] },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StorageClassDropdownInner, Object.assign({}, props))));
};
const StorageClassDropdownEntry = (props) => {
    const storageClassProperties = [
        props.default ? ' (default)' : '',
        props.description,
        props.accessMode,
        props.provisioner,
        props.type,
        props.zone,
    ];
    const storageClassDescriptionLine = lodash_es__WEBPACK_IMPORTED_MODULE_0__["compact"](storageClassProperties).join(' | ');
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "co-resource-item" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](___WEBPACK_IMPORTED_MODULE_3__["ResourceIcon"], { kind: props.kindLabel }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "co-resource-item__resource-name" },
            props.name,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "text-muted small" },
                " ",
                storageClassDescriptionLine))));
};
const StorageClassDropdownNoStorageClassOption = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "co-resource-item" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "co-resource-item__resource-name" }, props.name)));
};


/***/ })

}]);
//# sourceMappingURL=attach-storage~ceph-storage-add-capacity-modal~create-bc~create-bs~create-obc~create-pvc~install-page-e138d3749a6af7fafca9.js.map