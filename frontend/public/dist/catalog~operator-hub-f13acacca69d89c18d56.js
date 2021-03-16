(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog~operator-hub"],{

/***/ "./public/components/utils/tile-view-page.jsx":
/*!****************************************************!*\
  !*** ./public/components/utils/tile-view-page.jsx ***!
  \****************************************************/
/*! exports provided: FilterTypes, categorizeItems, updateActiveFilters, updateURLParams, getFilterSearchParam, TileViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTypes", function() { return FilterTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categorizeItems", function() { return categorizeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActiveFilters", function() { return updateActiveFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateURLParams", function() { return updateURLParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterSearchParam", function() { return getFilterSearchParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileViewPage", function() { return TileViewPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var patternfly_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! patternfly-react */ "./node_modules/patternfly-react/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ "./public/components/utils/router.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals */ "./public/components/modals/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");









const FilterTypes = {
    category: 'category',
    keyword: 'keyword',
};
const filterSubcategories = (category, item) => {
    if (!category.subcategories) {
        if (!category.values) {
            return [];
        }
        let values = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](item, category.field);
        if (!Array.isArray(values)) {
            values = [values];
        }
        const intersection = [category.values, values].reduce((a, b) => a.filter((c) => b.includes(c)));
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](intersection)) {
            return [category];
        }
        return [];
    }
    const matchedSubcategories = [];
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](category.subcategories, (subCategory) => {
        let values = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](item, category.field);
        if (!Array.isArray(values)) {
            values = [values];
        }
        const valuesIntersection = [subCategory.values, values].reduce((a, b) => a.filter((c) => b.includes(c)));
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](valuesIntersection)) {
            matchedSubcategories.push(subCategory, ...filterSubcategories(subCategory, item));
        }
    });
    return matchedSubcategories;
};
// categorize item under sub and main categories
const addItem = (item, category, subcategory = null) => {
    // Add the item to the category
    if (!category.items) {
        category.items = [item];
    }
    else if (!category.items.includes(item)) {
        category.items = category.items.concat(item);
    }
    // Add the item to the subcategory
    if (subcategory) {
        if (!subcategory.items) {
            subcategory.items = [item];
        }
        else if (!subcategory.items.includes(item)) {
            subcategory.items = subcategory.items.concat(item);
        }
    }
};
const isCategoryEmpty = ({ items }) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](items);
const pruneCategoriesWithNoItems = (categories) => {
    if (!categories) {
        return;
    }
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](categories, (category, key) => {
        if (isCategoryEmpty(category)) {
            delete categories[key];
        }
        else {
            pruneCategoriesWithNoItems(category.subcategories);
        }
    });
};
const processSubCategories = (category, itemsSorter) => {
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](category.subcategories, (subcategory) => {
        if (subcategory.items) {
            subcategory.numItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["size"](subcategory.items);
            subcategory.items = itemsSorter(subcategory.items);
            processSubCategories(subcategory, itemsSorter);
        }
        if (category.subcategories) {
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](category.items, (item) => {
                const included = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](category.subcategories), (subcat) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](category.subcategories[subcat].items, item));
                if (!included) {
                    let otherCategory = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](category.subcategories, 'other');
                    if (!otherCategory) {
                        otherCategory = { id: `${category.id}-other`, label: 'Other', items: [] };
                        category.subcategories.other = otherCategory;
                    }
                    otherCategory.items.push(item);
                }
            });
        }
    });
};
// calculate numItems per Category and subcategories, sort items
const processCategories = (categories, itemsSorter) => {
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](categories, (category) => {
        if (category.items) {
            category.numItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["size"](category.items);
            category.items = itemsSorter(category.items);
            processSubCategories(category, itemsSorter);
        }
    });
};
const categorize = (items, categories) => {
    // Categorize each item
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](items, (item) => {
        let itemCategorized = false;
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](categories, (category) => {
            const matchedSubcategories = filterSubcategories(category, item);
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](matchedSubcategories, (subcategory) => {
                addItem(item, category, subcategory); // add to subcategory & main category
                itemCategorized = true;
            });
        });
        if (!itemCategorized) {
            addItem(item, categories.other); // add to Other category
        }
    });
    categories.all.numItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["size"](items);
    categories.all.items = items;
};
/**
 * Creates an items array under each category and subcategory.  If no match, categorizes item
 * under 'Other' main category.
 * (exported for test purposes)
 */
const categorizeItems = (items, itemsSorter, initCategories) => {
    const allCategory = { id: 'all', label: 'All Items' };
    const otherCategory = { id: 'other', label: 'Other' };
    const categories = Object.assign(Object.assign({ all: allCategory }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](initCategories)), { other: otherCategory });
    categorize(items, categories);
    pruneCategoriesWithNoItems(categories);
    processCategories(categories, itemsSorter);
    return categories;
};
const clearItemsFromCategories = (categories) => {
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](categories, (category) => {
        category.numItems = 0;
        category.items = [];
        clearItemsFromCategories(category.subcategories);
    });
};
const filterByKeyword = (items, filters, compFunction) => {
    const { keyword } = filters;
    if (!keyword || !keyword.active) {
        return items;
    }
    const filterString = keyword.value.toLowerCase();
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](items, (item) => compFunction(filterString, item));
};
const filterByGroup = (items, filters) => {
    // Filter items by each filter group
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](filters, (filtered, group, key) => {
        if (key === FilterTypes.keyword) {
            return filtered;
        }
        // Only apply active filters
        const activeFilters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](group, 'active');
        if (activeFilters.length) {
            const values = lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](activeFilters, (filterValues, filter) => {
                filterValues.push(filter.value, ...lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filter, 'synonyms', []));
                return filterValues;
            }, []);
            filtered[key] = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](items, (item) => {
                if (Array.isArray(item[key])) {
                    return item[key].some((f) => values.includes(f));
                }
                return values.includes(item[key]);
            });
        }
        return filtered;
    }, {});
};
const filterItems = (items, filters, keywordCompare) => {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](filters)) {
        return items;
    }
    // Filter items by keyword first
    const filteredByKeyword = filterByKeyword(items, filters, keywordCompare);
    // Apply each filter property individually. Example:
    //  filteredByGroup = {
    //    provider: [/*array of items filtered by provider*/],
    //    healthIndex: [/*array of items filtered by healthIndex*/],
    //  };
    const filteredByGroup = filterByGroup(filteredByKeyword, filters);
    // Intersection of individually applied filters is all filters
    // In the case no filters are active, returns items filteredByKeyword
    return [...lodash_es__WEBPACK_IMPORTED_MODULE_1__["values"](filteredByGroup), filteredByKeyword].reduce((a, b) => a.filter((c) => b.includes(c)));
};
const recategorizeItems = (items, itemsSorter, filters, keywordCompare, categories) => {
    const filteredItems = filterItems(items, filters, keywordCompare);
    const newCategories = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](categories);
    clearItemsFromCategories(newCategories);
    categorize(filteredItems, newCategories);
    processCategories(newCategories, itemsSorter);
    return newCategories;
};
const isActiveTab = (activeId, category) => {
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](category.subcategories, activeId);
};
const hasActiveDescendant = (activeId, category) => {
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](category.subcategories, activeId)) {
        return true;
    }
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["some"](category.subcategories, (subcategory) => hasActiveDescendant(activeId, subcategory));
};
const findActiveCategory = (activeId, categories) => {
    let activeCategory = null;
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](categories, (category) => {
        if (activeCategory) {
            return;
        }
        if (category.id === activeId) {
            activeCategory = category;
        }
        else {
            activeCategory = findActiveCategory(activeId, category.subcategories);
        }
    });
    return activeCategory;
};
const determineAvailableFilters = (initialFilters, items, filterGroups) => {
    const filters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](initialFilters);
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterGroups, (field) => {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](items, (item) => {
            const value = item[field];
            if (value) {
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](filters, [field, value], {
                    label: value,
                    value,
                    active: false,
                });
            }
        });
    });
    return filters;
};
const getActiveFilters = (keywordFilter, groupFilters, activeFilters, categoryFilter = null, storeFilterKey = null, filterRetentionPreference = null) => {
    activeFilters.keyword.value = keywordFilter || '';
    activeFilters.keyword.active = !!keywordFilter;
    const userFilters = storeFilterKey ? localStorage.getItem(storeFilterKey) : null;
    if (userFilters) {
        try {
            const lastFilters = JSON.parse(userFilters);
            if (lastFilters) {
                if (filterRetentionPreference) {
                    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterRetentionPreference, (filterGroup) => {
                        if (!groupFilters || !groupFilters[filterGroup]) {
                            if (lastFilters[filterGroup]) {
                                activeFilters[filterGroup] = lastFilters[filterGroup];
                            }
                        }
                    });
                }
            }
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.error('Failed parsing user filter settings.');
        }
    }
    if (categoryFilter) {
        // removing default and localstore filters if category filters are present over URL
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](activeFilters.kind), (key) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, ['kind', key, 'active'], false));
    }
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forOwn"](groupFilters, (filterValues, filterType) => {
        // removing default and localstore filters if Filters are present over URL
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](activeFilters[filterType]), (key) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, [filterType, key, 'active'], false));
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterValues, (filterValue) => {
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, [filterType, filterValue, 'active'], true);
        });
    });
    return activeFilters;
};
const updateActiveFilters = (activeFilters, filterType, id, value) => {
    if (filterType === FilterTypes.keyword) {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, 'keyword.value', value);
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, 'keyword.active', !!value);
    }
    else {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, [filterType, id, 'active'], value);
    }
    return activeFilters;
};
const clearActiveFilters = (activeFilters, filterGroups) => {
    // Clear the keyword filter
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, 'keyword.value', '');
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, 'keyword.active', false);
    // Clear the group filters
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterGroups, (field) => {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](activeFilters[field]), (key) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](activeFilters, [field, key, 'active'], false));
    });
    return activeFilters;
};
const getFilterGroupCounts = (items, itemsSorter, filterGroups, selectedCategoryId, filters, categories, keywordCompare) => {
    // Filter only by keyword
    const filteredItems = filterByKeyword(items, filters, keywordCompare);
    const categoriesForCounts = recategorizeItems(filteredItems, itemsSorter, [], keywordCompare, categories);
    const activeCategory = findActiveCategory(selectedCategoryId, categoriesForCounts);
    const activeItems = activeCategory ? activeCategory.items : [];
    const newFilterCounts = {};
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterGroups, (filterGroup) => {
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](filters[filterGroup]), (key) => {
            const filterValues = [
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filters, [filterGroup, key, 'value']),
                ...lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filters, [filterGroup, key, 'synonyms'], []),
            ];
            const matchedItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](activeItems, (item) => {
                if (Array.isArray(item[filterGroup])) {
                    return item[filterGroup].some((f) => filterValues.includes(f));
                }
                return filterValues.includes(item[filterGroup]);
            });
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](newFilterCounts, [filterGroup, key], lodash_es__WEBPACK_IMPORTED_MODULE_1__["size"](matchedItems));
        });
    });
    return newFilterCounts;
};
const setURLParams = (params) => {
    const location = window.location;
    const url = new URL(location);
    const searchParams = `?${params.toString()}${url.hash}`;
    _router__WEBPACK_IMPORTED_MODULE_6__["history"].replace(`${url.pathname}${searchParams}`);
};
const updateURLParams = (paramName, value) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
        params.set(paramName, Array.isArray(value) ? JSON.stringify(value) : value);
    }
    else {
        params.delete(paramName);
    }
    setURLParams(params);
};
const clearFilterURLParams = (selectedCategoryId) => {
    const params = new URLSearchParams();
    if (selectedCategoryId) {
        params.set(FilterTypes.category, selectedCategoryId);
    }
    setURLParams(params);
};
const getActiveValuesFromURL = (availableFilters, filterGroups, groupByTypes, storeFilterKey, filterRetentionPreference) => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get(FilterTypes.category);
    const keywordFilter = searchParams.get(FilterTypes.keyword);
    const selectedCategoryId = categoryParam || 'all';
    let groupBy = '';
    if (groupByTypes) {
        groupBy = searchParams.get('groupBy') || groupByTypes.None;
    }
    const groupFilters = {};
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterGroups, (filterGroup) => {
        const groupFilterParam = searchParams.get(filterGroup);
        if (!groupFilterParam) {
            return;
        }
        try {
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](groupFilters, filterGroup, JSON.parse(groupFilterParam));
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.warn('could not update filters from url params: could not parse search params', e);
        }
    });
    const activeFilters = getActiveFilters(keywordFilter, groupFilters, availableFilters, categoryParam, storeFilterKey, filterRetentionPreference);
    return { selectedCategoryId, activeFilters, groupBy };
};
const getFilterSearchParam = (groupFilter) => {
    const activeValues = lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["keys"](groupFilter), (result, typeKey) => {
        return groupFilter[typeKey].active ? result.concat(typeKey) : result;
    }, []);
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](activeValues) ? '' : JSON.stringify(activeValues);
};
const defaultFilters = {
    keyword: {
        value: '',
        active: false,
    },
};
class TileViewPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        const { items, itemsSorter, getAvailableCategories, groupByTypes } = this.props;
        const categories = getAvailableCategories(items);
        this.state = {
            categories: categorizeItems(items, itemsSorter, categories),
            selectedCategoryId: 'all',
            activeFilters: defaultFilters,
            filterCounts: null,
            filterGroupsShowAll: {},
            groupBy: groupByTypes ? groupByTypes.None : '',
        };
        this.onUpdateFilters = this.onUpdateFilters.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.renderFilterGroup = this.renderFilterGroup.bind(this);
        this.onShowAllToggle = this.onShowAllToggle.bind(this);
        this.onGroupChange = this.onGroupChange.bind(this);
    }
    componentDidMount() {
        const { items, filterGroups, getAvailableFilters, groupByTypes, storeFilterKey, filterRetentionPreference, } = this.props;
        const { categories } = this.state;
        const availableFilters = getAvailableFilters(defaultFilters, items, filterGroups);
        const activeValues = getActiveValuesFromURL(availableFilters, filterGroups, groupByTypes, storeFilterKey, filterRetentionPreference);
        this.setState(Object.assign(Object.assign({}, this.getUpdatedState(categories, activeValues.selectedCategoryId, activeValues.activeFilters)), { groupBy: activeValues.groupBy }));
        this.filterByKeywordInput.focus({ preventScroll: true });
    }
    componentWillUnmount() {
        this.unmounted = true;
    }
    componentDidUpdate(prevProps) {
        const { activeFilters, selectedCategoryId, groupBy } = this.state;
        const { items, itemsSorter, filterGroups, getAvailableCategories, getAvailableFilters, } = this.props;
        if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](items, prevProps.items)) {
            const availableFilters = getAvailableFilters(defaultFilters, items, filterGroups);
            const availableCategories = getAvailableCategories(items);
            const categories = categorizeItems(items, itemsSorter, availableCategories);
            const newActiveFilters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](availableFilters, (updatedFilters, filterGroup, filterGroupName) => {
                if (filterGroupName === FilterTypes.keyword) {
                    updatedFilters.keyword = activeFilters.keyword;
                    return updatedFilters;
                }
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](filterGroup, (filterItem, filterItemName) => {
                    updatedFilters[filterGroupName][filterItemName].active = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](activeFilters, [filterGroupName, filterItemName, 'active'], false);
                });
                return updatedFilters;
            }, availableFilters);
            this.updateMountedState(Object.assign(Object.assign({}, this.getUpdatedState(categories, selectedCategoryId, newActiveFilters)), { groupBy }));
        }
    }
    getUpdatedState(categories, selectedCategoryId, activeFilters) {
        const { items, itemsSorter, keywordCompare, filterGroups } = this.props;
        if (!items) {
            return;
        }
        const newCategories = recategorizeItems(items, itemsSorter, activeFilters, keywordCompare, categories);
        return {
            activeFilters,
            selectedCategoryId,
            categories: newCategories,
            filterCounts: getFilterGroupCounts(items, itemsSorter, filterGroups, selectedCategoryId, activeFilters, newCategories, keywordCompare),
        };
    }
    // This function is necessary due to calls to history.replace un-mounting the component before returning
    updateMountedState(newState) {
        if (!this.unmounted) {
            this.setState(newState);
        }
    }
    storeFilters(filters) {
        if (this.props.storeFilterKey && this.props.filterRetentionPreference) {
            const storeFilters = {};
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["each"](this.props.filterRetentionPreference, (filterGroup) => {
                if (filters[filterGroup]) {
                    storeFilters[filterGroup] = filters[filterGroup];
                }
            });
            localStorage.setItem(this.props.storeFilterKey, JSON.stringify(storeFilters));
        }
    }
    clearFilters() {
        const { filterGroups } = this.props;
        const { activeFilters, categories, selectedCategoryId } = this.state;
        clearFilterURLParams(selectedCategoryId);
        const clearedFilters = clearActiveFilters(activeFilters, filterGroups);
        this.updateMountedState(this.getUpdatedState(categories, selectedCategoryId, clearedFilters));
        // Don't take focus if a modal was opened while the page was loading.
        if (!Object(_modals__WEBPACK_IMPORTED_MODULE_7__["isModalOpen"])()) {
            this.filterByKeywordInput.focus({ preventScroll: true });
        }
        this.storeFilters(clearedFilters);
    }
    selectCategory(categoryId) {
        const { activeFilters, categories } = this.state;
        updateURLParams(FilterTypes.category, categoryId);
        this.updateMountedState(this.getUpdatedState(categories, categoryId, activeFilters));
    }
    onUpdateFilters(updatedFilters) {
        const { selectedCategoryId, categories } = this.state;
        this.updateMountedState(this.getUpdatedState(categories, selectedCategoryId, updatedFilters));
    }
    onFilterChange(filterType, id, value) {
        const { activeFilters, selectedCategoryId, categories } = this.state;
        if (filterType === FilterTypes.keyword) {
            updateURLParams(FilterTypes.keyword, `${value}`);
        }
        else {
            const groupFilter = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](activeFilters[filterType]);
            lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](groupFilter, [id, 'active'], value);
            updateURLParams(filterType, getFilterSearchParam(groupFilter));
        }
        const updatedFilters = updateActiveFilters(activeFilters, filterType, id, value);
        this.updateMountedState(this.getUpdatedState(categories, selectedCategoryId, updatedFilters));
        this.storeFilters(updatedFilters);
    }
    onKeywordChange(value) {
        this.onFilterChange('keyword', null, value);
    }
    onShowAllToggle(groupName) {
        const { filterGroupsShowAll } = this.state;
        const updatedShow = lodash_es__WEBPACK_IMPORTED_MODULE_1__["clone"](filterGroupsShowAll);
        lodash_es__WEBPACK_IMPORTED_MODULE_1__["set"](updatedShow, groupName, !lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filterGroupsShowAll, groupName, false));
        this.setState({ filterGroupsShowAll: updatedShow });
    }
    onGroupChange(value) {
        const { groupByTypes } = this.props;
        updateURLParams('groupBy', value === groupByTypes.None ? `` : `${value}`);
        this.updateMountedState({ groupBy: value });
    }
    renderTabs(category, selectedCategoryId) {
        const { id, label, subcategories, numItems } = category;
        const active = id === selectedCategoryId;
        const shown = id === 'all';
        const tabClasses = `text-capitalize${!numItems ? ' co-catalog-tab__empty' : ''}`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["VerticalTabsTab"], { key: id, title: label, active: active, className: tabClasses, onActivate: () => this.selectCategory(id), hasActiveDescendant: hasActiveDescendant(selectedCategoryId, category), shown: shown }, subcategories && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["VerticalTabs"], { restrictTabs: true, activeTab: isActiveTab(selectedCategoryId, category) }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](subcategories, (subcategory) => this.renderTabs(subcategory, selectedCategoryId))))));
    }
    renderCategoryTabs(selectedCategoryId) {
        const { categories } = this.state;
        const activeTab = lodash_es__WEBPACK_IMPORTED_MODULE_1__["has"](categories, selectedCategoryId);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["VerticalTabs"], { restrictTabs: true, activeTab: activeTab, shown: "true" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](categories, (category) => this.renderTabs(category, selectedCategoryId))));
    }
    renderFilterGroup(filterGroup, groupName, activeFilters, filterCounts, onFilterChange, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    onUpdateFilters) {
        const { filterGroupNameMap } = this.props;
        const { filterGroupsShowAll } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["FilterSidePanelCategory"], { key: groupName, title: filterGroupNameMap[groupName] || groupName, onShowAllToggle: () => this.onShowAllToggle(groupName), showAll: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filterGroupsShowAll, groupName, false), "data-test-group-name": groupName }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](filterGroup, (filter, filterName) => {
            const { label, active } = filter;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["FilterSidePanelCategoryItem"], { key: filterName, count: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](filterCounts, [groupName, filterName], 0), checked: active, onClick: (e) => onFilterChange(groupName, filterName, e.target.checked), title: label, "data-test": `${groupName}-${lodash_es__WEBPACK_IMPORTED_MODULE_1__["kebabCase"](filterName)}` }, label));
        })));
    }
    renderSidePanel() {
        let { renderFilterGroup } = this.props;
        const { activeFilters, filterCounts } = this.state;
        renderFilterGroup = renderFilterGroup || this.renderFilterGroup;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["FilterSidePanel"], null, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](activeFilters, (filterGroup, groupName) => {
            if (groupName === FilterTypes.keyword) {
                return;
            }
            return renderFilterGroup(filterGroup, groupName, activeFilters, filterCounts, this.onFilterChange, this.onUpdateFilters);
        })));
    }
    renderEmptyState() {
        const { emptyStateTitle, emptyStateInfo } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["EmptyStateVariant"].full },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], { headingLevel: "h2", size: "lg" }, emptyStateTitle),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["EmptyStateBody"], null, emptyStateInfo),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["EmptyStateSecondaryActions"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { variant: "link", onClick: () => this.clearFilters(), "data-test-id": "catalog-clear-filters" }, "Clear All Filters"))));
    }
    renderItems(items, renderTile) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Gallery"], { gutter: "sm", className: "co-catalog-tile-view" }, lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](items, (item) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["GalleryItem"], { key: item.uid ? `gallery-${item.uid}` : `gallery-${item.obj.metadata.uid}` }, renderTile(item))))));
    }
    renderGroupedItems(items, groupBy, renderTile, groupItems) {
        const groupedItems = groupItems(items, groupBy);
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](groupedItems, (value, key) => value.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: key, className: "co-catalog-page__grouped-items" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], { className: "co-catalog-page__group-title", headingLevel: "h2", size: "lg" },
                key,
                " (",
                lodash_es__WEBPACK_IMPORTED_MODULE_1__["size"](value),
                ")"),
            this.renderItems(value, renderTile))));
    }
    render() {
        const { renderTile, groupItems, groupByTypes } = this.props;
        const { activeFilters, selectedCategoryId, categories, groupBy } = this.state;
        let activeCategory = findActiveCategory(selectedCategoryId, categories);
        if (!activeCategory) {
            activeCategory = findActiveCategory('all', categories);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__tabs" },
                this.renderCategoryTabs(activeCategory.id),
                this.renderSidePanel()),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__content" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__heading text-capitalize" }, activeCategory.label),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__filter" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["FormControl"], { className: "co-catalog-page__input", type: "text", inputRef: (ref) => (this.filterByKeywordInput = ref), placeholder: "Filter by keyword...", bsClass: "pf-c-form-control", value: activeFilters.keyword.value, onChange: (e) => this.onKeywordChange(e.target.value), "aria-label": "Filter by keyword..." }),
                            groupItems && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { className: "co-catalog-page__btn-group__group-by", menuClassName: "dropdown-menu--text-wrap", items: groupByTypes, onChange: (e) => this.onGroupChange(e), titlePrefix: "Group By", title: groupBy }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__num-items" },
                            activeCategory.numItems,
                            " items"))),
                activeCategory.numItems > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__grid" }, groupItems && groupBy !== groupByTypes.None
                    ? this.renderGroupedItems(activeCategory.items, groupBy, renderTile, groupItems)
                    : this.renderItems(activeCategory.items, renderTile))),
                activeCategory.numItems === 0 && this.renderEmptyState())));
    }
}
TileViewPage.displayName = 'TileViewPage';
TileViewPage.propTypes = {
    items: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"],
    itemsSorter: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired,
    storeFilterKey: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    getAvailableCategories: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired,
    getAvailableFilters: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    filterRetentionPreference: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"],
    filterGroups: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
    filterGroupNameMap: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
    renderFilterGroup: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    keywordCompare: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired,
    renderTile: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired,
    emptyStateTitle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    emptyStateInfo: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    groupItems: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
    groupByTypes: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
};
TileViewPage.defaultProps = {
    items: null,
    getAvailableFilters: determineAvailableFilters,
    filterGroupNameMap: {},
    renderFilterGroup: null,
    emptyStateTitle: 'No Results Match the Filter Criteria',
    emptyStateInfo: 'No items are being shown due to the filters being applied.',
};


/***/ })

}]);
//# sourceMappingURL=catalog~operator-hub-f13acacca69d89c18d56.js.map