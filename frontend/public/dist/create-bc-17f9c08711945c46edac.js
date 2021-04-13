(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-bc"],{

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/create-bc.scss":
/*!***********************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/create-bc.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/create-bc.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/create-bc.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _wizard_pages_general_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wizard-pages/general-page */ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/general-page.tsx");
/* harmony import */ var _wizard_pages_placement_policy_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wizard-pages/placement-policy-page */ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/placement-policy-page.tsx");
/* harmony import */ var _wizard_pages_backingstore_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard-pages/backingstore-page */ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/backingstore-page.tsx");
/* harmony import */ var _wizard_pages_review_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wizard-pages/review-page */ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/review-page.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state */ "./packages/noobaa-storage-plugin/src/components/bucket-class/state.ts");
/* harmony import */ var _create_bc_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-bc.scss */ "./packages/noobaa-storage-plugin/src/components/bucket-class/create-bc.scss");
/* harmony import */ var _create_bc_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_create_bc_scss__WEBPACK_IMPORTED_MODULE_14__);















var CreateStepsBC;
(function (CreateStepsBC) {
    CreateStepsBC["GENERAL"] = "GENERAL";
    CreateStepsBC["PLACEMENT"] = "PLACEMENT";
    CreateStepsBC["BACKINGSTORE"] = "BACKINGSTORE";
    CreateStepsBC["REVIEW"] = "REVIEW";
})(CreateStepsBC || (CreateStepsBC = {}));
const CreateBucketClass = ({ match }) => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](_state__WEBPACK_IMPORTED_MODULE_13__["reducer"], _state__WEBPACK_IMPORTED_MODULE_13__["initialState"]);
    const { ns, appName } = match.params;
    const [clusterServiceVersion, setClusterServiceVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sGet"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"], appName, ns)
            .then((clusterServiceVersionObj) => {
            setClusterServiceVersion(clusterServiceVersionObj);
        })
            .catch(() => setClusterServiceVersion(null));
    }, [appName, ns]);
    const finalStep = () => {
        dispatch({ type: 'setIsLoading', value: true });
        const payload = {
            apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBucketClassModel"]),
            kind: _models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBucketClassModel"].kind,
            metadata: {
                name: state.bucketClassName,
                namespace: ns,
            },
            spec: {
                placementPolicy: {
                    tiers: [
                        {
                            placement: state.tier1Policy,
                            backingStores: [...state.tier1BackingStore],
                        },
                    ],
                },
            },
        };
        if (state.tier2Policy) {
            payload.spec.placementPolicy.tiers.push({
                placement: state.tier2Policy,
                backingStores: [...state.tier2BackingStore],
            });
        }
        const promiseObj = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sCreate"])(_models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBucketClassModel"], payload);
        promiseObj
            .then((obj) => {
            dispatch({ type: 'setIsLoading', value: false });
            _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_4__["history"].push(`/k8s/ns/${ns}/clusterserviceversions/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(clusterServiceVersion)}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBucketClassModel"])}/${Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(obj)}`);
        })
            .catch((err) => {
            dispatch({ type: 'setIsLoading', value: false });
            dispatch({ type: 'setError', value: err.message });
        });
    };
    const backingStoreNextConditions = () => {
        if (state.tier1BackingStore.length === 0)
            return false;
        if (state.tier1Policy === 'Mirror' && state.tier1BackingStore.length < 2)
            return false;
        if (state.tier2Policy === 'Mirror' && state.tier2BackingStore.length < 2)
            return false;
        if (!!state.tier2Policy && state.tier2BackingStore.length === 0)
            return false;
        return true;
    };
    const creationConditionsSatisfied = () => {
        if (!backingStoreNextConditions())
            return false;
        if (!state.bucketClassName)
            return false;
        return true;
    };
    const steps = [
        {
            id: CreateStepsBC.GENERAL,
            name: 'General',
            component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_wizard_pages_general_page__WEBPACK_IMPORTED_MODULE_9__["default"], { dispatch: dispatch, state: state }),
            enableNext: !!state.bucketClassName.trim().length,
        },
        {
            id: CreateStepsBC.PLACEMENT,
            name: 'Placement Policy',
            component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_wizard_pages_placement_policy_page__WEBPACK_IMPORTED_MODULE_10__["default"], { state: state, dispatch: dispatch }),
            enableNext: !!state.tier1Policy,
        },
        {
            id: CreateStepsBC.BACKINGSTORE,
            name: 'Backing Store',
            component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_wizard_pages_backingstore_page__WEBPACK_IMPORTED_MODULE_11__["default"], { state: state, dispatcher: dispatch }),
            enableNext: backingStoreNextConditions(),
        },
        {
            id: CreateStepsBC.REVIEW,
            name: 'Review',
            component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_wizard_pages_review_page__WEBPACK_IMPORTED_MODULE_12__["default"], { state: state }),
            nextButtonText: 'Create Bucket Class',
            enableNext: creationConditionsSatisfied(),
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbs"], { breadcrumbs: [
                        {
                            name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](clusterServiceVersion, 'spec.displayName', 'Openshift Container Storage Operator'),
                            path: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_5__["resourcePathFromModel"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_6__["ClusterServiceVersionModel"], appName, ns),
                        },
                        { name: `Create ${_models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBucketClassModel"].label}`, path: match.url },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-header-title" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], { size: "2xl", headingLevel: "h1", className: "nb-create-bc-header-title__main" }, "Create new Bucket Class"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-create-bc-header-title__info" }, "Bucket Class is a CRD representing a class for buckets that defines tiering policies and data placements for an OBC."))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-wizard" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Wizard"], { isCompactNav: true, isInPage: true, isOpen: true, title: "Create new Bucket Class", description: "NooBaa Bucket Class is a CRD representing a class for buckets that defines policies for data placement and more", steps: steps, onSave: finalStep, onClose: () => _console_internal_components_utils_router__WEBPACK_IMPORTED_MODULE_4__["history"].goBack() }))));
};
/* harmony default export */ __webpack_exports__["default"] = (CreateBucketClass);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/state.ts":
/*!*****************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/state.ts ***!
  \*****************************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
const initialState = {
    namespace: 'openshift-storage',
    bucketClassName: '',
    description: '',
    tier1Policy: 'Spread',
    tier2Policy: '',
    tier1BackingStore: [],
    tier2BackingStore: [],
    backingStores: [],
    isLoading: false,
    error: '',
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'setNamespace':
            return Object.assign({}, state, { namespace: action.name });
        case 'setBucketClassName':
            return Object.assign({}, state, { bucketClassName: action.name });
        case 'setDescription':
            return Object.assign({}, state, { description: action.value });
        case 'setPlacementPolicyTier1':
            return Object.assign({}, state, { tier1Policy: action.value });
        case 'setPlacementPolicyTier2':
            return Object.assign({}, state, { tier2Policy: action.value });
        case 'setBackingStoreTier1':
            return Object.assign({}, state, { tier1BackingStore: action.value });
        case 'setBackingStoreTier2':
            return Object.assign({}, state, { tier2BackingStore: action.value });
        case 'setBackingStores':
            return Object.assign({}, state, { backingStores: action.value });
        case 'setIsLoading':
            return Object.assign({}, state, { isLoading: action.value });
        case 'setError':
            return Object.assign({}, state, { error: action.value });
        default:
            return initialState;
    }
};


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/backingstore-page.tsx":
/*!*******************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/backingstore-page.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/noobaa-storage-plugin/src/models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _create_backingstore_page_create_bs_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../create-backingstore-page/create-bs-modal */ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs-modal.tsx");











const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-md-4', 'col-sm-4', 'col-xs-6', 'nb-bc-bs-table__data'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-md-3', 'col-sm-4', 'col-xs-5', 'nb-bc-bs-table__data'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-md-2', 'col-sm-3', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-md-2', 'hidden-sm', 'hidden-xs'),
];
const nameMap = {
    'aws-s3': 'awsS3',
    'azure-blob': 'azureBlob',
    'google-cloud-storage': 'googleCloudStorage',
    's3-compatible': 's3Compatible',
};
const columns = [
    {
        title: 'Name',
        props: { className: tableColumnClasses[0] },
    },
    {
        title: 'BucketName',
        props: { className: tableColumnClasses[1] },
    },
    {
        title: 'Type',
        props: { className: tableColumnClasses[2] },
    },
    {
        title: 'Region',
        props: { className: tableColumnClasses[3] },
    },
];
const filterSelected = (list, tableId) => {
    const sort = (x, y) => x.id.localeCompare(y.id);
    return list.filter((e) => e.selectedBy === tableId || e.selectedBy === '').sort(sort);
};
const getTableRows = (list) => {
    return list.reduce((acc, bs) => {
        const type = nameMap[lodash__WEBPACK_IMPORTED_MODULE_2__["get"](bs, 'spec.type')];
        const obj = {
            selected: false,
            id: bs.metadata.name,
            selectedBy: '',
            cells: [
                {
                    title: (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBackingStoreModel"]), namespace: bs.metadata.namespace, name: bs.metadata.name, title: bs.metadata.uid })),
                },
                {
                    title: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](bs, ['spec', type, 'targetBucket'], '-'),
                },
                {
                    title: type,
                },
                {
                    title: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](bs, ['spec', type, 'region'], '-'),
                },
            ],
        };
        return [...acc, obj];
    }, []);
};
const filterSelectedItems = (items, tableId) => items.filter((e) => e.selectedBy === tableId).map((e) => e.id);
const getBsLabel = (policy) => policy === 'Mirror'
    ? 'Select at least 2 Backing Store resources'
    : 'Select at least 1 Backing Store resource';
const BackingStorePage = react__WEBPACK_IMPORTED_MODULE_3__["memo"](({ backingStores, dispatcher, state }) => {
    // CR data
    const { data: backingStoreData } = backingStores;
    // CR data clones to maintain order and selection state for table rows
    const { backingStores: storeMain, namespace } = state;
    const { tier2Policy } = state;
    const showTier2Table = !!tier2Policy;
    const [searchInput, setSearchInput] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]('');
    const [searchInput2, setSearchInput2] = react__WEBPACK_IMPORTED_MODULE_3__["useState"]('');
    const [showHelp, setShowHelp] = react__WEBPACK_IMPORTED_MODULE_3__["useState"](true);
    const openModal = () => {
        Object(_create_backingstore_page_create_bs_modal__WEBPACK_IMPORTED_MODULE_10__["default"])({ namespace });
    };
    const filterSearch = (search, list) => {
        if (!search)
            return list;
        return list.filter((elem) => fuzzysearch__WEBPACK_IMPORTED_MODULE_1__(search, elem.id));
    };
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](() => {
        const stores = getTableRows(backingStoreData);
        dispatcher({ type: 'setBackingStores', value: stores });
        // eslint-disable-next-line
    }, [JSON.stringify(backingStoreData), dispatcher]);
    const onSelect = (isSelected, tableId, rowData) => {
        const selectedItem = storeMain.find((elem) => elem.id === rowData.id);
        const store = new Set(storeMain);
        store.delete(selectedItem);
        selectedItem.selected = !selectedItem.selected;
        isSelected ? (selectedItem.selectedBy = tableId) : (selectedItem.selectedBy = '');
        store.add(selectedItem);
        dispatcher({ type: 'setBackingStores', value: [...store] });
        // 0 tier-1 table, 1 tier-2 table
        const itemsTable1 = filterSelectedItems(storeMain, 0);
        dispatcher({ type: 'setBackingStoreTier1', value: itemsTable1 });
        const itemsTable2 = filterSelectedItems(storeMain, 1);
        dispatcher({ type: 'setBackingStoreTier2', value: itemsTable2 });
    };
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "nb-create-bc-step-page" },
        showHelp && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], { className: "nb-create-bc-step-page__info", isInline: true, variant: "info", title: "What is a Backing Store?", action: react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["AlertActionCloseButton"], { onClose: () => setShowHelp(false) }) },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", null, "Backing Store represents a storage target to be used as the underlying storage for the data in MCG buckets."),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", null, "Multiple types of backing-stores are supported: asws-s3, s3-compatible, google-cloud-storage, azure-blob, obc, PVC."),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: "https://github.com/noobaa/noobaa-operator/blob/master/doc/backing-store-crd.md", text: "Learn More" }))),
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Form"], { className: "nb-bc-step-page-form" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Title"], { headingLevel: "h3", size: "xl", className: "nb-bc-step-page-form__title" },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], { breakpointMods: [{ modifier: 'justify-content-space-between' }] },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FlexItem"], null,
                        "Tier 1 - Backing Store (",
                        state.tier1Policy,
                        ")"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FlexItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "link", onClick: openModal, className: "nb-bc-step-page-form__modal-launcher" },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__["PlusCircleIcon"], null),
                            " Create Backing Store")))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { className: "nb-bc-step-page-form__element", fieldId: "bs-1", label: getBsLabel(state.tier1Policy), isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { className: "nb-bc-step-page-form__element--short", placeholder: "Search Backing Store", onChange: setSearchInput, value: searchInput, type: "text", "aria-label": "Search Backing Store" })),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["Table"], { onSelect: (event, isSelected, index, rowData) => onSelect(isSelected, 0, rowData), cells: columns, rows: filterSearch(searchInput, filterSelected(storeMain, 0)), variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableVariant"].compact, gridBreakPoint: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableGridBreakpoint"].none, "aria-label": "Select Backing Store for Tier 1", className: "nb-bc-bs-page__table--short", canSelectAll: false },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableHeader"], null),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableBody"], null)),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", { className: "nb-create-bc-step-page-form__element--light-text" },
                state.tier1BackingStore.length,
                " resources selected")),
        showTier2Table && (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Form"], { className: "nb-bc-step-page-form" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Title"], { headingLevel: "h3", size: "xl" },
                "Tier 2 - Backing Store (",
                state.tier2Policy,
                ")",
                ' '),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { className: "nb-bc-step-page-form__element", fieldId: "bs-1", label: getBsLabel(state.tier2Policy), isRequired: true },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], { className: "nb-bc-step-page-form__element--short", placeholder: "Search Backing Store", onChange: (v) => setSearchInput2(v), value: searchInput2, type: "text", "aria-label": "Search Backing Store" })),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["Table"], { "aria-label": "Select Backing Store for Tier 2", onSelect: (event, isSelected, index, rowData) => onSelect(isSelected, 1, rowData), cells: columns, rows: filterSearch(searchInput2, filterSelected(storeMain, 1)), variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableVariant"].compact, gridBreakPoint: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableGridBreakpoint"].none, className: "nb-bc-bs-page__table--short", canSelectAll: false },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableHeader"], null),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__["TableBody"], null)),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", { className: "nb-create-bc-step-page-form__element--light-text" },
                state.tier2BackingStore.length,
                " resources selected")))));
});
const BackingStorePageWithFirehose = (props) => {
    const resource = [
        {
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_console_noobaa_storage_plugin_src_models__WEBPACK_IMPORTED_MODULE_8__["NooBaaBackingStoreModel"]),
            namespace: props.state.namespace,
            prop: 'backingStores',
            isList: true,
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_6__["Firehose"], { resources: resource },
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](BackingStorePage, Object.assign({}, props))));
};
/* harmony default export */ __webpack_exports__["default"] = (BackingStorePageWithFirehose);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/general-page.tsx":
/*!**************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/general-page.tsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");



const GeneralPage = ({ dispatch, state }) => {
    const [showHelp, setShowHelp] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const onChange = (value) => {
        dispatch({ type: 'setBucketClassName', name: value });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-step-page" },
        showHelp && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { isInline: true, variant: "info", title: "What is a Bucket Class?", className: "nb-create-bc-step-page__info", action: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["AlertActionCloseButton"], { onClose: () => setShowHelp(false) }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "An MCG Bucket's data location is determined by a policy called a Bucket Class"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"], { href: "https://github.com/noobaa/noobaa-operator/blob/master/doc/bucket-class-crd.md", text: "Learn More" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Form"], { className: "nb-create-bc-step-page-form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { isRequired: true, className: "nb-create-bc-step-page-form__element", fieldId: "bucketclassname-input", label: "Bucket Class Name", helperText: "A unique name for the Bucket Class within the project." },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { placeholder: "my-multi-cloud-mirror", type: "text", value: state.bucketClassName, onChange: onChange, "aria-label": "Bucket Class Name" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], { className: "nb-create-bc-step-page-form__element", fieldId: "bc-description", label: "Description(Optional)" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextArea"], { value: state.description, onChange: (data) => dispatch({ type: 'setDescription', value: data }), "aria-label": "Description of bucket class" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (GeneralPage);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/placement-policy-page.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/placement-policy-page.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



const PlacementPolicyPage = ({ dispatch, state }) => {
    const { tier1Policy, tier2Policy } = state;
    const [showHelp, setShowHelp] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
    const showTier2 = !!tier2Policy;
    const onChange = (checked, event) => {
        const { name, value } = event.target;
        if (name === 'placement-policy-1') {
            dispatch({ type: 'setPlacementPolicyTier1', value });
        }
        else if (name === 'placement-policy-2') {
            dispatch({ type: 'setPlacementPolicyTier2', value });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-step-page" },
        showHelp && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { isInline: true, variant: "info", title: "What is a Placement Policy?", className: "nb-create-bc-step-page__info", action: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["AlertActionCloseButton"], { onClose: () => setShowHelp(false) }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Data placement capabilities are built as a multi-layer structure, here are the layers bottom-up:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Spread Tier - list of backing-stores, aggregates the storage of multiple stores."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Mirroring Tier - list of spread-layers, async-mirroring to all mirrors, with locality optimization (will allocate on the closest region to the source endpoint), mirroring requires at least two backing-stores.")),
            "The number of replicas can be configured via the NooBaa management console.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Form"], { className: "nb-create-bc-step-page-form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "xl", headingLevel: "h2", className: "nb-bc-step-page-form__title" }, "Tier 1 - Policy Type"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], { value: "Spread", isChecked: tier1Policy === 'Spread', onChange: onChange, id: "radio-1", label: "Spread", name: "placement-policy-1" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-create-bc-step-page-form__element--light-text" }, "Spreading the data across the chosen resources. By default, a replica of one copy is used and does not include failure tolerance in case of resource failure."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], { value: "Mirror", isChecked: tier1Policy === 'Mirror', onChange: onChange, id: "radio-2", label: "Mirror", name: "placement-policy-1" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-create-bc-step-page-form__element--light-text" },
                ' ',
                "Full duplication of the data in each chosen resource, By default, a replica of one copy per location is used. includes failure tolerance in case of resource failure.")),
        !showTier2 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: "link", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleIcon"], null), onClick: () => dispatch({ type: 'setPlacementPolicyTier2', value: 'Spread' }), isInline: true, "data-testid": "add-tier-btn" }, "Add Tier")),
        showTier2 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Form"], { className: "nb-create-bc-step-page-form" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { headingLevel: "h2", size: "xl", className: "nb-bc-step-page-form__title" },
                "Tier 2 - Policy type",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], { variant: "link", icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["MinusCircleIcon"], null), onClick: () => dispatch({ type: 'setPlacementPolicyTier2', value: '' }), isInline: true }, "Remove Tier")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], { value: "Spread", isChecked: tier2Policy === 'Spread', onChange: onChange, id: "radio-3", label: "Spread", name: "placement-policy-2" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-create-bc-step-page-form__element--light-text" }, "Spreading the data across the chosen resources does not includes failure tolerance in case of resource failure."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], { value: "Mirror", isChecked: tier2Policy === 'Mirror', onChange: onChange, id: "radio-4", label: "Mirror", name: "placement-policy-2" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-create-bc-step-page-form__element--light-text" },
                ' ',
                "Full duplication of the data in each chosen resource, includes failure tolerance in cause of resource failure.")))));
};
/* harmony default export */ __webpack_exports__["default"] = (PlacementPolicyPage);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/review-page.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/bucket-class/wizard-pages/review-page.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");



const ReviewPage = ({ state }) => {
    const { bucketClassName, description, tier1BackingStore, tier2BackingStore, tier1Policy, tier2Policy, } = state;
    const { error, isLoading } = state;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-step-page" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "xl", headingLevel: "h2" }, "Review and confirm Bucket Class settings"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-step-page-review__item" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "lg", headingLevel: "h4", className: "nb-create-bc-step-page-review__item-header" }, "Bucket Class name"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { "data-testid": "bc-name" }, bucketClassName)),
        description && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-step-page-review__item" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "lg", headingLevel: "h4", className: "nb-create-bc-step-page-review__item-header" }, "Description"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { "data-testid": "bc-desc" }, description))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bc-step-page-review__item" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "lg", headingLevel: "h4", className: "nb-create-bc-step-page-review__item-header" }, "Placement Policy Details"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-nobaa-create-bc-step-page-review__item-tier1" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "md", headingLevel: "h5", "data-testid": "tier1-policy" },
                    "Tier 1: ",
                    tier1Policy),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { "data-testid": "tier1-stores" },
                    "Selected Backing Store: ",
                    tier1BackingStore.join(', '))),
            tier2Policy && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], { size: "md", headingLevel: "h5", "data-testid": "tier2-policy" },
                    "Tier 2: ",
                    tier2Policy),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { "data-testid": "tier2-stores" },
                    "Selected Backing Store: ",
                    tier2BackingStore.join(', '))))),
        isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["LoadingInline"], null),
        !!error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Alert"], { variant: "danger", title: "Error", isInline: true }, error))));
};
/* harmony default export */ __webpack_exports__["default"] = (ReviewPage);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs-modal.tsx":
/*!****************************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs-modal.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _create_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-bs */ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.tsx");
/* harmony import */ var _create_bs_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-bs.scss */ "./packages/noobaa-storage-plugin/src/components/create-backingstore-page/create-bs.scss");
/* harmony import */ var _create_bs_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_create_bs_scss__WEBPACK_IMPORTED_MODULE_3__);




const CreateBackingStoreFormModal = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-create-bs__modal" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null, "Create new Backing Store"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Backing Store represents a storage target to be used as the underlying storage for the data in MCG buckets."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_create_bs__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_1__["createModalLauncher"])(CreateBackingStoreFormModal));


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/infoPage.scss":
/*!*************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/noobaa-operator/infoPage.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/infoPage.tsx":
/*!************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/noobaa-operator/infoPage.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_graphs_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/graphs/prometheus-poll-hook */ "./public/components/graphs/prometheus-poll-hook.ts");
/* harmony import */ var _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/graphs/helpers */ "./public/components/graphs/helpers.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _infoPage_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infoPage.scss */ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/infoPage.scss");
/* harmony import */ var _infoPage_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_infoPage_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./packages/noobaa-storage-plugin/src/utils.ts");









const FAQ_TEXT_1 = 'How can I access the object service?';
const FAQ_LINK_1 = 'https://access.redhat.com/documentation/en-us/red_hat_openshift_container_storage/4.2/html-single/managing_openshift_container_storage/index#accessing-the-multi-cloud-object-gateway-with-your-applications_rhocs';
const FAQ_TEXT_2 = 'How can I provide the object service to a developer?';
const FAQ_LINK_2 = 'https://access.redhat.com/documentation/en-us/red_hat_openshift_container_storage/4.2/html-single/managing_openshift_container_storage/index#adding-storage-resources-for-hybrid-or-multi-cloud';
const FAQ_TEXT_3 = 'How can I provide the object service to DevOps?';
const FAQ_LINK_3 = 'https://access.redhat.com/documentation/en-us/red_hat_openshift_container_storage/4.2/html-single/managing_openshift_container_storage/index#creating-an-object-bucket-claim-using-the-command-line-interface_rhocs';
const FAQ_TEXT_4 = 'How can I mirror data for hybrid and multi-cloud buckets?';
const FAQ_LINK_4 = 'https://access.redhat.com/documentation/en-us/red_hat_openshift_container_storage/4.2/html-single/managing_openshift_container_storage/index#mirroring-data-for-hybrid-and-multi-cloud-buckets';
const getVersion = (obj) => {
    const { image } = obj.spec;
    const version = image.split(':')[1];
    return version;
};
const NOOBAA_DASHBOARD_LINK_QUERY = 'NooBaa_system_links';
const InfoPage = ({ obj }) => {
    const [response] = Object(_console_internal_components_graphs_prometheus_poll_hook__WEBPACK_IMPORTED_MODULE_4__["usePrometheusPoll"])({
        query: NOOBAA_DASHBOARD_LINK_QUERY,
        endpoint: _console_internal_components_graphs_helpers__WEBPACK_IMPORTED_MODULE_5__["PrometheusEndpoint"].QUERY,
    });
    const systemLink = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getMetric"])(response, 'dashboard');
    const analyticsLink = `${systemLink}/analytics`;
    const bucketsLink = `${systemLink}/buckets`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-section" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-section__left" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, obj.metadata.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Labels"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LabelList"], { kind: _models__WEBPACK_IMPORTED_MODULE_6__["NooBaaSystemModel"].kind, labels: obj.metadata.labels })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Version"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, getVersion(obj)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Links"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "nb-data-section__left--block", to: "/dashboards/object-service" }, "Service Status"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { additionalClassName: "nb-data-section__left--block", href: bucketsLink, text: "Buckets List" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { additionalClassName: "nb-data-section__left--block", href: analyticsLink, text: "Analytics" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, "Maintainers"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, "Red Hat. Inc."))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-section__right" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-section__right-entry" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], { size: "xl" }, "Description"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "nb-data-section__right-entry--faded" }, "Multi Cloud Gateway is a data platform for object data federation across private and public clouds.")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "nb-data-section__right-entry" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Title"], { size: "xl" }, "FAQ"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nb-data-section__right-faq" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: FAQ_LINK_1, text: FAQ_TEXT_1 })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: FAQ_LINK_2, text: FAQ_TEXT_2 })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: FAQ_LINK_3, text: FAQ_TEXT_3 })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ExternalLink"], { href: FAQ_LINK_4, text: FAQ_TEXT_4 })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (InfoPage);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/noobaa-page.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/noobaa-operator/noobaa-page.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_edit_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/edit-yaml */ "./public/components/edit-yaml.jsx");
/* harmony import */ var _console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/operator-lifecycle-manager */ "./packages/operator-lifecycle-manager/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");
/* harmony import */ var _infoPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infoPage */ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/infoPage.tsx");
/* harmony import */ var _resourceTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resourceTable */ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/resourceTable.tsx");









const getFireHoseResources = (namespace) => {
    const system = {
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaSystemModel"]),
        namespace,
        prop: 'obj',
        isList: false,
        name: 'noobaa',
    };
    return [system];
};
const pages = [
    {
        href: '',
        name: 'Details Page',
        component: _infoPage__WEBPACK_IMPORTED_MODULE_7__["default"],
    },
    {
        href: 'yaml',
        name: 'YAML',
        component: _console_internal_components_edit_yaml__WEBPACK_IMPORTED_MODULE_4__["EditYAML"],
    },
    {
        href: 'resources',
        path: 'resources',
        name: 'Resources',
        component: _resourceTable__WEBPACK_IMPORTED_MODULE_8__["default"],
    },
];
const NooBaaPage = (props) => {
    const { ns: namespace, appName } = props.match.params;
    const resources = getFireHoseResources(namespace);
    const [clusterServiceVersion, setClusterServiceVersion] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["k8sGet"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_5__["ClusterServiceVersionModel"], appName, namespace)
            .then((clusterServiceVersionObj) => {
            setClusterServiceVersion(clusterServiceVersionObj);
        })
            .catch(() => setClusterServiceVersion(null));
    }, [appName, namespace]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-create-operand__header-buttons" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["BreadCrumbs"], { breadcrumbs: [
                        {
                            name: lodash__WEBPACK_IMPORTED_MODULE_1__["get"](clusterServiceVersion, 'spec.displayName', 'Openshift Container Storage Operator'),
                            path: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_console_operator_lifecycle_manager__WEBPACK_IMPORTED_MODULE_5__["ClusterServiceVersionModel"], appName, namespace),
                        },
                        { name: 'Multi Cloud Gateway', path: props.match.url },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageHeading"], { title: "Multi Cloud Gateway", kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["NooBaaSystemModel"]) }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Firehose"], { resources: resources },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["HorizontalNav"], { pages: pages, match: props.match, customData: { namespace } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (NooBaaPage);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/components/noobaa-operator/resourceTable.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/components/noobaa-operator/resourceTable.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models */ "./packages/noobaa-storage-plugin/src/models.ts");








const kindsFilterMap = Object.freeze({
    BackingStore: {
        title: _models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"].label,
        kind: [_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"].kind],
    },
    BucketClass: {
        title: _models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"].label,
        kind: [_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"].kind],
    },
});
const resourceTableFilter = {
    filterGroupName: 'Type',
    type: 'noobaa-resources-type',
    reducer: (r) => r.kind,
    items: lodash__WEBPACK_IMPORTED_MODULE_1__["map"](kindsFilterMap, ({ title }, id) => ({ id, title })),
    filter: (groups, resource) => {
        const { kind } = resource;
        return groups.selected.has(kind) || !lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](groups.all, kind) || lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](groups.selected);
    },
};
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-3', 'col-md-2', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-2', 'col-md-2', 'col-sm-4', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-2', 'col-md-2', 'col-sm-4', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-2', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_0__('col-lg-3', 'col-md-3', 'hidden-sm', 'hidden-xs'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].columnClass,
];
const ResourceTableHeader = () => {
    return [
        {
            title: 'Name',
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: 'Type',
            sortField: 'kind',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: 'Status',
            sortField: 'status.phase',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: 'Namespace',
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: 'Created',
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
ResourceTableHeader.displayName = 'ResourceTableHeader';
const getModelFromKind = (name) => name === 'BucketClass' ? _models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"] : _models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"];
const ResourceTableRow = ({ obj, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableRow"], { id: obj.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(getModelFromKind(obj.kind)), name: obj.metadata.name, namespace: obj.metadata.namespace, title: obj.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[1] },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(getModelFromKind(obj.kind)), name: obj.kind })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[2] }, obj.status.phase),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_0__(tableColumnClasses[3], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceLink"], { kind: "Namespace", name: obj.metadata.namespace, title: obj.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[4] }, obj.metadata.creationTimestamp),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["ResourceKebab"], { actions: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory.common, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(getModelFromKind(obj.kind)), resource: obj }))));
};
const getFireHoseResources = (namespace) => {
    const backingStore = {
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"]),
        namespace,
        namespaced: true,
        prop: 'bs',
        isList: true,
    };
    const bucketClass = {
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"]),
        namespaced: true,
        namespace,
        prop: 'bc',
        isList: true,
    };
    return [backingStore, bucketClass];
};
const ListComponent = (props) => (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "NooBaa Resources", Header: ResourceTableHeader, Row: ResourceTableRow, virtualize: true })));
const flattenResources = (resources) => {
    const { bc, bs } = resources;
    const loaded = lodash__WEBPACK_IMPORTED_MODULE_1__["every"](resources, (resource) => resource.loaded && lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resource.loadError));
    if (!loaded)
        return [];
    const bcData = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](bc) ? bc.data : [];
    const bsData = !lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](bs) ? bs.data : [];
    const data = bcData.concat(bsData);
    return data;
};
const getOperatorPathFromMatch = (matchObj) => {
    const { url } = matchObj;
    const parts = url.split('/');
    return parts.slice(0, -2).join('/');
};
const MCGResourceList = (props) => {
    const { customData: { namespace }, match: matchObj, } = props;
    const operatorPath = getOperatorPathFromMatch(matchObj);
    const createItems = {
        [_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"].label]: _models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"].label,
        [_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"].label]: _models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"].label,
    };
    const createItemsMap = {
        [createItems[_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"].label]]: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBackingStoreModel"]),
        [createItems[_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"].label]]: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_7__["NooBaaBucketClassModel"]),
    };
    const createProps = {
        items: createItems,
        createLink: (type) => `${operatorPath}/${createItemsMap[type]}/~new`,
    };
    return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_5__["MultiListPage"], Object.assign({}, props, { rowFilters: [resourceTableFilter], ListComponent: ListComponent, resources: getFireHoseResources(namespace), flatten: flattenResources, createButtonText: "Create New", canCreate: true, createProps: createProps })));
};
/* harmony default export */ __webpack_exports__["default"] = (MCGResourceList);


/***/ }),

/***/ "./packages/noobaa-storage-plugin/src/utils.ts":
/*!*****************************************************!*\
  !*** ./packages/noobaa-storage-plugin/src/utils.ts ***!
  \*****************************************************/
/*! exports provided: filterNooBaaAlerts, getGaugeValue, getMetric, getPhase, isBound, getSCProvisioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNooBaaAlerts", function() { return filterNooBaaAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeValue", function() { return getGaugeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetric", function() { return getMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhase", function() { return getPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBound", function() { return isBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSCProvisioner", function() { return getSCProvisioner; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const filterNooBaaAlerts = (alerts) => alerts.filter((alert) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](alert, 'annotations.storage_type') === 'NooBaa');
const getGaugeValue = (data) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](data, 'data.result[0].value[1]');
const getMetric = (result, metric) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](result, ['data', 'result', '0', 'metric', metric], null);
const getPhase = (obj) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'status.phase', 'Lost');
};
const isBound = (obj) => getPhase(obj) === 'Bound';
const getSCProvisioner = (obj) => obj.provisioner;


/***/ })

}]);
//# sourceMappingURL=create-bc-17f9c08711945c46edac.js.map