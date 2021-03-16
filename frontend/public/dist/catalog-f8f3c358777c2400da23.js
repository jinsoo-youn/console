(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog"],{

/***/ "./public/components/catalog/catalog-item-details.jsx":
/*!************************************************************!*\
  !*** ./public/components/catalog/catalog-item-details.jsx ***!
  \************************************************************/
/*! exports provided: CatalogTileDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogTileDetails", function() { return CatalogTileDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _markdown_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../markdown-view */ "./public/components/markdown-view.tsx");








class CatalogTileDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            plans: [],
            markdown: '',
            markdownLoading: false,
        };
    }
    componentDidMount() {
        const { obj, kind, markdownDescription } = this.props.item;
        if (kind === 'ClusterServiceClass') {
            this.getPlans(obj);
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isFunction"](markdownDescription)) {
            this.setState({ markdownLoading: true });
            markdownDescription()
                .then((md) => this.setState({ markdown: md, markdownLoading: false }))
                .catch(() => this.setState({ markdownLoading: false }));
        }
        else {
            this.setState({ markdown: markdownDescription });
        }
    }
    getPlans(obj) {
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_5__["k8sGet"])(_models__WEBPACK_IMPORTED_MODULE_4__["ClusterServicePlanModel"], null, null, {
            queryParams: { fieldSelector: `spec.clusterServiceClassRef.name=${obj.metadata.name}` },
        }).then(({ items: plans }) => {
            this.setState({
                plans: lodash_es__WEBPACK_IMPORTED_MODULE_1__["orderBy"](plans, ['spec.externalMetadata.displayName', 'metadata.name']),
            });
        });
    }
    render() {
        const { obj, kind, tileProvider, tileDescription, supportUrl, longDescription, documentationUrl, sampleRepo, customProperties, } = this.props.item;
        const { plans, markdown, markdownLoading } = this.state;
        const creationTimestamp = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](obj, 'metadata.creationTimestamp');
        const supportUrlLink = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: supportUrl, text: "Get support" });
        const documentationUrlLink = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: documentationUrl, additionalClassName: "co-break-all", text: documentationUrl }));
        const sampleRepoLink = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ExternalLink"], { href: sampleRepo, additionalClassName: "co-break-all", text: sampleRepo }));
        const planItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](plans, (plan) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: plan.metadata.uid }, plan.spec.description || plan.spec.externalName)));
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body modal-body-border" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body-content" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body-inner-shadow-covers" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertiesSidePanel"], null,
                            customProperties,
                            tileProvider && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Provider", value: tileProvider }),
                            supportUrl && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Support", value: supportUrlLink }),
                            creationTimestamp && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_3__["PropertyItem"], { label: "Created At", value: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], { timestamp: creationTimestamp }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-description" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["SectionHeading"], { text: "Description" }),
                            tileDescription && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, tileDescription),
                            markdownLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LoadingBox"], { message: "Loading Markdown..." }),
                            markdown && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_markdown_view__WEBPACK_IMPORTED_MODULE_7__["SyncMarkdownView"], { content: markdown }),
                            longDescription && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, longDescription),
                            sampleRepo && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                                "Sample repository: ",
                                sampleRepoLink),
                            documentationUrl && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "h5" }, "Documentation"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, documentationUrlLink))),
                            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](plans) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "h5" }, "Service Plans"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, planItems))),
                            kind === 'ImageStream' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "The following resources will be created:"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        "A ",
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__kind-label" }, "build config"),
                                        ' ',
                                        "to build source from a Git repository."),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        "An ",
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__kind-label" }, "image stream"),
                                        ' ',
                                        "to track built images."),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        "A",
                                        ' ',
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__kind-label" }, "deployment config"),
                                        ' ',
                                        "to rollout new revisions when the image changes."),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        "A ",
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__kind-label" }, "service"),
                                        " to expose your workload inside the cluster."),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                        "An optional",
                                        ' ',
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-catalog-item-details__kind-label" }, "route"),
                                        " to expose your workload outside the cluster."))))))))));
    }
}
CatalogTileDetails.displayName = 'CatalogTileDetails';
CatalogTileDetails.propTypes = {
    items: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"],
    overlayClose: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
};


/***/ }),

/***/ "./public/components/catalog/catalog-items.tsx":
/*!*****************************************************!*\
  !*** ./public/components/catalog/catalog-items.tsx ***!
  \*****************************************************/
/*! exports provided: catalogCategories, groupItems, CatalogTileViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogCategories", function() { return catalogCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupItems", function() { return groupItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogTileViewPage", function() { return CatalogTileViewPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imgs/logos/catalog-icon.svg */ "./public/imgs/logos/catalog-icon.svg");
/* harmony import */ var _imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/router */ "./public/components/utils/router.ts");
/* harmony import */ var _catalog_item_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _catalog_item_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catalog-item-details */ "./public/components/catalog/catalog-item-details.jsx");
/* harmony import */ var _utils_tile_view_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/tile-view-page */ "./public/components/utils/tile-view-page.jsx");











const catalogCategories = {
    languages: {
        id: 'languages',
        label: 'Languages',
        field: 'tags',
        subcategories: {
            java: { id: 'java', label: 'Java', values: ['java'] },
            javascript: {
                id: 'javascript',
                label: 'JavaScript',
                field: 'tags',
                values: ['javascript', 'nodejs', 'js'],
            },
            dotnet: { id: 'dotnet', label: '.NET', field: 'tags', values: ['dotnet'] },
            perl: { id: 'perl', label: 'Perl', field: 'tags', values: ['perl'] },
            ruby: { id: 'ruby', label: 'Ruby', field: 'tags', values: ['ruby'] },
            php: { id: 'php', label: 'PHP', field: 'tags', values: ['php'] },
            python: { id: 'python', label: 'Python', field: 'tags', values: ['python'] },
            golang: { id: 'golang', label: 'Go', field: 'tags', values: ['golang', 'go'] },
        },
    },
    databases: {
        id: 'databases',
        label: 'Databases',
        field: 'tags',
        subcategories: {
            mongodb: { id: 'mongodb', label: 'Mongo', field: 'tags', values: ['mongodb'] },
            mysql: { id: 'mysql', label: 'MySQL', field: 'tags', values: ['mysql'] },
            postgresql: { id: 'postgresql', label: 'Postgres', field: 'tags', values: ['postgresql'] },
            mariadb: { id: 'mariadb', label: 'MariaDB', field: 'tags', values: ['mariadb'] },
        },
    },
    middleware: {
        id: 'middleware',
        label: 'Middleware',
        field: 'tags',
        subcategories: {
            integration: {
                id: 'integration',
                label: 'Integration',
                field: 'tags',
                values: ['amq', 'fuse', 'jboss-fuse', 'sso', '3scale'],
            },
            processAutomation: {
                id: 'processAutomation',
                label: 'Process Automation',
                field: 'tags',
                values: ['decisionserver', 'processserver'],
            },
            analyticsData: {
                id: 'analyticsData',
                label: 'Analytics & Data',
                field: 'tags',
                values: ['datagrid', 'datavirt'],
            },
            runtimes: {
                id: 'runtimes',
                label: 'Runtimes & Frameworks',
                field: 'tags',
                values: ['eap', 'httpd', 'tomcat'],
            },
        },
    },
    cicd: {
        id: 'cicd',
        label: 'CI/CD',
        field: 'tags',
        subcategories: {
            jenkins: { id: 'jenkins', label: 'Jenkins', field: 'tags', values: ['jenkins'] },
            pipelines: { id: 'pipelines', label: 'Pipelines', field: 'tags', values: ['pipelines'] },
        },
    },
    virtualization: {
        id: 'virtualization',
        label: 'Virtualization',
        field: 'tags',
        subcategories: {
            vms: { id: 'vms', label: 'Virtual Machines', field: 'tags', values: ['virtualmachine'] },
        },
    },
};
const pageDescription = 'Add shared apps, services, or source-to-image builders to your project from the Developer ' +
    'Catalog. Cluster admins can install additional apps which will show up here automatically.';
// Filter property white list
const filterGroups = ['kind'];
// initialFilters cannot be typed as it has multiple usages
const getAvailableFilters = (initialFilters) => {
    const filters = lodash_es__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](initialFilters);
    filters.kind = {
        ClusterServiceVersion: {
            label: 'Operator Backed',
            value: 'InstalledOperator',
            active: true,
        },
        HelmChart: {
            label: 'Helm Charts',
            value: 'HelmChart',
            active: false,
        },
        ImageStream: {
            label: 'Builder Image',
            value: 'ImageStream',
            active: false,
        },
        Template: {
            label: 'Template',
            value: 'Template',
            active: false,
        },
        ClusterServiceClass: {
            label: 'Service Class',
            value: 'ClusterServiceClass',
            active: false,
        },
    };
    return filters;
};
const filterPreference = ['kind'];
const filterGroupNameMap = {
    kind: 'Type',
};
const GroupByTypes = {
    Operator: 'Operator',
    None: 'None',
};
const keywordCompare = (filterString, item) => {
    if (!filterString) {
        return true;
    }
    if (!item) {
        return false;
    }
    return (item.tileName.toLowerCase().includes(filterString) ||
        (item.tileDescription && item.tileDescription.toLowerCase().includes(filterString)) ||
        (item.tags && item.tags.includes(filterString)));
};
const setURLParams = (params) => {
    const url = new URL(window.location.href);
    const searchParams = `?${params.toString()}${url.hash}`;
    _utils_router__WEBPACK_IMPORTED_MODULE_7__["history"].replace(`${url.pathname}${searchParams}`);
};
const sortByOperators = (items) => {
    const sortedItemsByOperators = {};
    lodash_es__WEBPACK_IMPORTED_MODULE_1__["forEach"](Object.keys(items).sort(), (key) => (sortedItemsByOperators[key] = items[key]));
    return sortedItemsByOperators;
};
const groupItems = (items, groupBy) => {
    if (groupBy === GroupByTypes.Operator) {
        const installedOperators = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](items, (item) => item.kind === 'InstalledOperator');
        const nonOperators = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](items, (item) => item.kind !== 'InstalledOperator');
        let groupedOperators = lodash_es__WEBPACK_IMPORTED_MODULE_1__["groupBy"](installedOperators, (item) => item.obj.csv.spec.displayName);
        groupedOperators = sortByOperators(groupedOperators);
        const groupAllItems = Object.assign(Object.assign({}, groupedOperators), { 'Non Operators': nonOperators });
        return groupAllItems;
    }
    return items;
};
class CatalogTileViewPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.openOverlay = (detailsItem) => {
            const params = new URLSearchParams(window.location.search);
            params.set('details-item', lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](detailsItem, 'obj.metadata.uid'));
            setURLParams(params);
            this.setState({ detailsItem });
        };
        this.closeOverlay = () => {
            const params = new URLSearchParams(window.location.search);
            params.delete('details-item');
            setURLParams(params);
            this.setState({ detailsItem: null });
        };
        this.renderTile = (item) => {
            if (!item) {
                return null;
            }
            const { obj, tileName, tileProvider, tileDescription, kind } = item;
            const uid = obj.metadata.uid;
            const vendor = tileProvider ? `provided by ${tileProvider}` : null;
            const { kind: filters } = getAvailableFilters({ kind });
            const filter = lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](filters, ['value', kind]);
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_5__["CatalogTile"], Object.assign({ className: "co-catalog-tile", key: uid, onClick: () => this.openOverlay(item), title: tileName, badges: [
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_5__["CatalogTileBadge"], { key: "type" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Badge"], { isRead: true }, filter.label)),
                ] }, this.getIconProps(item), { vendor: vendor, description: tileDescription, "data-test": `${kind}-${obj.metadata.name}` })));
        };
        this.renderModal = (detailsItem) => {
            if (!detailsItem) {
                return null;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Modal"], { className: "co-catalog-page__overlay co-catalog-page__overlay--right", header: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_5__["CatalogItemHeader"], Object.assign({ title: detailsItem.tileName, vendor: detailsItem.tileProvider ? `Provided by ${detailsItem.tileProvider}` : null }, this.getIconProps(detailsItem))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog-page__overlay-actions" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "pf-c-button pf-m-primary co-catalog-page__overlay-action", to: detailsItem.href, role: "button", title: detailsItem.createLabel, onClick: this.closeOverlay }, detailsItem.createLabel))), isOpen: !!detailsItem, onClose: this.closeOverlay, title: detailsItem.tileName },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_catalog_item_details__WEBPACK_IMPORTED_MODULE_9__["CatalogTileDetails"], { item: detailsItem, closeOverlay: this.closeOverlay })));
        };
        this.getIconProps = (item) => {
            const { tileImgUrl, tileIconClass } = item;
            if (tileImgUrl) {
                return { iconImg: tileImgUrl, iconClass: null };
            }
            else if (tileIconClass) {
                return { iconImg: null, iconClass: Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_8__["normalizeIconClass"])(tileIconClass) };
            }
            return { iconImg: _imgs_logos_catalog_icon_svg__WEBPACK_IMPORTED_MODULE_3__, iconClass: null };
        };
        this.state = { detailsItem: null };
    }
    componentDidMount() {
        const { items } = this.props;
        const searchParams = new URLSearchParams(window.location.search);
        const detailsItemID = searchParams.get('details-item');
        const detailsItem = detailsItemID && lodash_es__WEBPACK_IMPORTED_MODULE_1__["find"](items, (item) => detailsItemID === lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](item, 'obj.metadata.uid'));
        this.setState({ detailsItem });
    }
    render() {
        const { items } = this.props;
        const { detailsItem } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_tile_view_page__WEBPACK_IMPORTED_MODULE_10__["TileViewPage"], { items: items, itemsSorter: (itemsToSort) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["sortBy"](itemsToSort, ({ tileName }) => tileName.toLowerCase()), getAvailableCategories: () => catalogCategories, 
                // TODO(alecmerdler): Dynamic filters for each Operator and its provided APIs
                getAvailableFilters: getAvailableFilters, filterGroups: filterGroups, storeFilterKey: _console_shared__WEBPACK_IMPORTED_MODULE_6__["DEV_CATALOG_FILTER_KEY"], filterGroupNameMap: filterGroupNameMap, keywordCompare: keywordCompare, filterRetentionPreference: filterPreference, renderTile: this.renderTile, pageDescription: pageDescription, emptyStateInfo: "No developer catalog items are being shown due to the filters being applied.", groupItems: groupItems, groupByTypes: GroupByTypes }),
            this.renderModal(detailsItem)));
    }
}
CatalogTileViewPage.displayName = `CatalogTileViewPage`;


/***/ }),

/***/ "./public/components/catalog/catalog-page.tsx":
/*!****************************************************!*\
  !*** ./public/components/catalog/catalog-page.tsx ***!
  \****************************************************/
/*! exports provided: CatalogListPage, Catalog, CatalogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogListPage", function() { return CatalogListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalog", function() { return Catalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogPage", function() { return CatalogPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-catalog-view-extension */ "./node_modules/@patternfly/react-catalog-view-extension/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _catalog_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog-items */ "./public/components/catalog/catalog-items.tsx");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _start_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../start-guide */ "./public/components/start-guide.tsx");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _image_stream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image-stream */ "./public/components/image-stream.tsx");
/* harmony import */ var _catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../plugins */ "./public/plugins.ts");
/* harmony import */ var _co_fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../co-fetch */ "./public/co-fetch.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















class CatalogListPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        const items = this.getItems();
        this.state = { items };
    }
    componentDidUpdate(prevProps) {
        const { clusterServiceClasses, templateMetadata, projectTemplateMetadata, imageStreams, helmCharts, namespace, loaded, } = this.props;
        if ((!prevProps.loaded && loaded) ||
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](namespace, prevProps.namespace) ||
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](clusterServiceClasses, prevProps.clusterServiceClasses) ||
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](templateMetadata, prevProps.templateMetadata) ||
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](projectTemplateMetadata, prevProps.projectTemplateMetadata) ||
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](imageStreams, prevProps.imageStreams) ||
            !lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](helmCharts, prevProps.helmCharts)) {
            const items = this.getItems();
            this.setState({ items });
        }
    }
    getItems() {
        const extensionItems = lodash_es__WEBPACK_IMPORTED_MODULE_1__["flatten"](_plugins__WEBPACK_IMPORTED_MODULE_14__["registry"]
            .getDevCatalogModels()
            .filter(({ properties }) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.props, Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(properties.model)))
            .map(({ properties }) => properties.normalize(lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](this.props, [Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(properties.model), 'data']))));
        const { clusterServiceClasses, imageStreams, templateMetadata, projectTemplateMetadata, helmCharts, loaded, } = this.props;
        let clusterServiceClassItems = [];
        let imageStreamItems = [];
        let templateItems = [];
        let projectTemplateItems = [];
        let helmChartItems = [];
        if (!loaded) {
            return [];
        }
        if (clusterServiceClasses) {
            clusterServiceClassItems = this.normalizeClusterServiceClasses(clusterServiceClasses.data);
        }
        if (imageStreams) {
            imageStreamItems = this.normalizeImageStreams(imageStreams.data);
        }
        // Templates are not passed as a Firehose item since we only request template metadata.
        if (templateMetadata) {
            templateItems = this.normalizeTemplates(templateMetadata);
        }
        // Templates are not passed as a Firehose item since we only request template metadata.
        if (projectTemplateMetadata) {
            projectTemplateItems = this.normalizeTemplates(projectTemplateMetadata);
        }
        if (helmCharts) {
            helmChartItems = this.normalizeHelmCharts(helmCharts);
        }
        const items = [
            ...clusterServiceClassItems,
            ...imageStreamItems,
            ...templateItems,
            ...extensionItems,
            ...projectTemplateItems,
            ...helmChartItems,
        ];
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["sortBy"](items, 'tileName');
    }
    normalizeClusterServiceClasses(serviceClasses) {
        const { namespace = '' } = this.props;
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](serviceClasses, (acc, serviceClass) => {
            // Prefer native templates to template-service-broker service classes.
            if (serviceClass.status.removedFromBrokerCatalog ||
                serviceClass.spec.clusterServiceBrokerName === 'template-service-broker') {
                return acc;
            }
            const iconClass = Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getServiceClassIcon"])(serviceClass);
            const tileImgUrl = Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getServiceClassImage"])(serviceClass);
            acc.push({
                obj: serviceClass,
                kind: 'ClusterServiceClass',
                tileName: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["serviceClassDisplayName"])(serviceClass),
                tileIconClass: tileImgUrl ? null : iconClass,
                tileImgUrl,
                tileDescription: serviceClass.spec.description,
                tileProvider: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.providerDisplayName'),
                tags: serviceClass.spec.tags,
                createLabel: 'Create Service Instance',
                href: `/catalog/create-service-instance?cluster-service-class=${serviceClass.metadata.name}&preselected-ns=${namespace}`,
                supportUrl: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.supportUrl'),
                longDescription: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.longDescription'),
                documentationUrl: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](serviceClass, 'spec.externalMetadata.documentationUrl'),
            });
            return acc;
        }, []);
    }
    normalizeTemplates(templates) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](templates, (acc, template) => {
            const { name, namespace, annotations = {} } = template.metadata;
            const tags = (annotations.tags || '').split(/\s*,\s*/);
            if (tags.includes('hidden')) {
                return acc;
            }
            const iconClass = Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getTemplateIcon"])(template);
            const tileImgUrl = Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getImageForIconClass"])(iconClass);
            const tileIconClass = tileImgUrl ? null : iconClass;
            acc.push({
                obj: template,
                kind: 'Template',
                tileName: annotations[_console_shared__WEBPACK_IMPORTED_MODULE_5__["ANNOTATIONS"].displayName] || name,
                tileIconClass,
                tileImgUrl,
                tileDescription: annotations.description,
                tags,
                createLabel: 'Instantiate Template',
                tileProvider: annotations[_console_shared__WEBPACK_IMPORTED_MODULE_5__["ANNOTATIONS"].providerDisplayName],
                documentationUrl: annotations[_console_shared__WEBPACK_IMPORTED_MODULE_5__["ANNOTATIONS"].documentationURL],
                supportUrl: annotations[_console_shared__WEBPACK_IMPORTED_MODULE_5__["ANNOTATIONS"].supportURL],
                href: `/catalog/instantiate-template?template=${name}&template-ns=${namespace}&preselected-ns=${this
                    .props.namespace || ''}`,
            });
            return acc;
        }, []);
    }
    normalizeHelmCharts(chartEntries) {
        const { namespace: currentNamespace = '' } = this.props;
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](chartEntries, (normalizedCharts, charts) => {
            charts.forEach((chart) => {
                var _a, _b;
                const tags = chart.keywords;
                const chartName = chart.name;
                const chartVersion = chart.version;
                const appVersion = chart.appVersion;
                const tileName = `${lodash_es__WEBPACK_IMPORTED_MODULE_1__["startCase"](chartName)} v${chart.version}`;
                const tileImgUrl = chart.icon || Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getImageForIconClass"])('icon-helm');
                const chartURL = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](chart, 'urls.0');
                const encodedChartURL = encodeURIComponent(chartURL);
                const markdownDescription = () => __awaiter(this, void 0, void 0, function* () {
                    var _c;
                    let chartData;
                    try {
                        chartData = yield Object(_co_fetch__WEBPACK_IMPORTED_MODULE_15__["coFetchJSON"])(`/api/helm/chart?url=${chartURL}`);
                    }
                    catch (_d) {
                        return null;
                    }
                    const readmeFile = (_c = chartData === null || chartData === void 0 ? void 0 : chartData.files) === null || _c === void 0 ? void 0 : _c.find((file) => file.name === 'README.md');
                    const readmeData = (readmeFile === null || readmeFile === void 0 ? void 0 : readmeFile.data) && atob(readmeFile === null || readmeFile === void 0 ? void 0 : readmeFile.data);
                    return readmeData && `## README\n${readmeData}`;
                });
                const maintainers = ((_a = chart.maintainers) === null || _a === void 0 ? void 0 : _a.length) > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (_b = chart.maintainers) === null || _b === void 0 ? void 0 : _b.map((maintainer) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    maintainer.name,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: `mailto:${maintainer.email}` }, maintainer.email),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))))));
                const homePage = chart.home && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["ExternalLink"], { href: chart.home, additionalClassName: "co-break-all", text: chart.home }));
                const customProperties = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_4__["PropertyItem"], { label: "Chart Version", value: chartVersion }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_4__["PropertyItem"], { label: "App Version", value: appVersion }),
                    homePage && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_4__["PropertyItem"], { label: "Home Page", value: homePage }),
                    maintainers && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_catalog_view_extension__WEBPACK_IMPORTED_MODULE_4__["PropertyItem"], { label: "Maintainers", value: maintainers })));
                const obj = Object.assign(Object.assign({}, chart), { metadata: { uid: chart.digest, creationTimestamp: chart.created } });
                normalizedCharts.push({
                    obj,
                    kind: 'HelmChart',
                    tileName,
                    tileIconClass: null,
                    tileImgUrl,
                    tileDescription: chart.description,
                    tags,
                    createLabel: 'Install Helm Chart',
                    markdownDescription,
                    customProperties,
                    href: `/catalog/helm-install?chartName=${chartName}&chartURL=${encodedChartURL}&preselected-ns=${currentNamespace}`,
                });
            });
            return normalizedCharts;
        }, []);
    }
    normalizeImageStreams(imageStreams) {
        const builderimageStreams = lodash_es__WEBPACK_IMPORTED_MODULE_1__["filter"](imageStreams, _image_stream__WEBPACK_IMPORTED_MODULE_11__["isBuilder"]);
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["map"](builderimageStreams, (imageStream) => {
            const { namespace: currentNamespace = '' } = this.props;
            const { name, namespace } = imageStream.metadata;
            const tag = Object(_image_stream__WEBPACK_IMPORTED_MODULE_11__["getMostRecentBuilderTag"])(imageStream);
            const tileName = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, ['metadata', 'annotations', _console_shared__WEBPACK_IMPORTED_MODULE_5__["ANNOTATIONS"].displayName]) || name;
            const iconClass = Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getImageStreamIcon"])(tag);
            const tileImgUrl = Object(_catalog_item_icon__WEBPACK_IMPORTED_MODULE_12__["getImageForIconClass"])(iconClass);
            const tileIconClass = tileImgUrl ? null : iconClass;
            const tileDescription = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](tag, 'annotations.description');
            const tags = Object(_image_stream__WEBPACK_IMPORTED_MODULE_11__["getAnnotationTags"])(tag);
            const createLabel = 'Create Application';
            const tileProvider = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](tag, ['annotations', _console_shared__WEBPACK_IMPORTED_MODULE_5__["ANNOTATIONS"].providerDisplayName]);
            const href = `/catalog/source-to-image?imagestream=${name}&imagestream-ns=${namespace}&preselected-ns=${currentNamespace}`;
            const builderImageTag = lodash_es__WEBPACK_IMPORTED_MODULE_1__["head"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](imageStream, 'spec.tags'));
            const sampleRepo = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](builderImageTag, 'annotations.sampleRepo');
            return {
                obj: imageStream,
                kind: 'ImageStream',
                tileName,
                tileIconClass,
                tileImgUrl,
                tileDescription,
                tags,
                createLabel,
                tileProvider,
                href,
                sampleRepo,
            };
        });
    }
    render() {
        const { loaded, loadError } = this.props;
        const { items } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["StatusBox"], { skeleton: _utils__WEBPACK_IMPORTED_MODULE_10__["skeletonCatalog"], data: items, loaded: loaded, loadError: loadError, label: "Resources" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_catalog_items__WEBPACK_IMPORTED_MODULE_6__["CatalogTileViewPage"], { items: items })));
    }
}
const Catalog = Object(_reducers_features__WEBPACK_IMPORTED_MODULE_9__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_5__["FLAGS"].OPENSHIFT, _console_shared__WEBPACK_IMPORTED_MODULE_5__["FLAGS"].SERVICE_CATALOG, ..._plugins__WEBPACK_IMPORTED_MODULE_14__["registry"].getDevCatalogModels().map(({ properties }) => properties.flag))((props) => {
    const { flags, mock, namespace } = props;
    const openshiftFlag = flags[_console_shared__WEBPACK_IMPORTED_MODULE_5__["FLAGS"].OPENSHIFT];
    const serviceCatalogFlag = flags[_console_shared__WEBPACK_IMPORTED_MODULE_5__["FLAGS"].SERVICE_CATALOG];
    const [templateMetadata, setTemplateMetadata] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [templateError, setTemplateError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [projectTemplateMetadata, setProjectTemplateMetadata] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [projectTemplateError, setProjectTemplateError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [helmCharts, setHelmCharts] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const loadTemplates = openshiftFlag && !mock;
    // Load templates from the shared `openshift` namespace. Don't use Firehose
    // for templates so that we can request only metadata. This keeps the request
    // much smaller.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!loadTemplates) {
            return;
        }
        Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sListPartialMetadata"])(_models__WEBPACK_IMPORTED_MODULE_13__["TemplateModel"], { ns: 'openshift' })
            .then((metadata) => {
            setTemplateMetadata(metadata);
            setTemplateError(null);
        })
            .catch(setTemplateError);
    }, [loadTemplates]);
    // Load templates for the current project.
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (!loadTemplates) {
            return;
        }
        // Don't load templates from the `openshift` namespace twice if it's the current namespace
        if (!namespace || namespace === 'openshift') {
            setProjectTemplateMetadata([]);
            setProjectTemplateError(null);
        }
        else {
            Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["k8sListPartialMetadata"])(_models__WEBPACK_IMPORTED_MODULE_13__["TemplateModel"], { ns: namespace })
                .then((metadata) => {
                setProjectTemplateMetadata(metadata);
                setProjectTemplateError(null);
            })
                .catch(setTemplateError);
        }
    }, [loadTemplates, namespace]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(_co_fetch__WEBPACK_IMPORTED_MODULE_15__["coFetch"])('/api/helm/charts/index.yaml').then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const yaml = yield res.text();
            const json = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(yaml);
            setHelmCharts(json.entries);
        }));
    }, []);
    const error = templateError || projectTemplateError;
    if (error) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["LoadError"], { message: error.message, label: "Templates", className: "loading-box loading-box__errored" }));
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["some"](flags, (flag) => Object(_reducers_features__WEBPACK_IMPORTED_MODULE_9__["flagPending"])(flag))) {
        return null;
    }
    const resources = [
        ...(serviceCatalogFlag
            ? [
                {
                    isList: true,
                    kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_13__["ClusterServiceClassModel"]),
                    namespaced: false,
                    prop: 'clusterServiceClasses',
                },
            ]
            : []),
        ...(openshiftFlag
            ? [
                {
                    isList: true,
                    kind: 'ImageStream',
                    namespace: 'openshift',
                    prop: 'imageStreams',
                },
            ]
            : []),
        ..._plugins__WEBPACK_IMPORTED_MODULE_14__["registry"]
            .getDevCatalogModels()
            .filter(({ properties }) => !properties.flag || flags[properties.flag])
            .map(({ properties }) => ({
            isList: true,
            kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(properties.model),
            namespaced: properties.model.namespaced,
            namespace,
            prop: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(properties.model),
        })),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog__body" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["Firehose"], { resources: mock ? [] : resources },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CatalogListPage, Object.assign({ namespace: namespace, templateMetadata: templateMetadata, projectTemplateMetadata: projectTemplateMetadata, helmCharts: helmCharts }, props)))));
});
const CatalogPage = Object(_start_guide__WEBPACK_IMPORTED_MODULE_8__["withStartGuide"])(({ match, noProjectsAvailable }) => {
    const namespace = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](match, 'params.ns');
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Developer Catalog")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-page__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-catalog" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_10__["PageHeading"], { title: "Developer Catalog" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "co-catalog-page__description" }, "Add shared apps, services, or source-to-image builders to your project from the Developer Catalog. Cluster admins can install additional apps which will show up here automatically."),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Catalog, { namespace: namespace, mock: noProjectsAvailable })))));
});
CatalogPage.displayName = 'CatalogPage';
Catalog.displayName = 'Catalog';


/***/ }),

/***/ "./public/components/markdown-view.tsx":
/*!*********************************************!*\
  !*** ./public/components/markdown-view.tsx ***!
  \*********************************************/
/*! exports provided: SyncMarkdownView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncMarkdownView", function() { return SyncMarkdownView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/dist/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_3__);




const tableTags = ['table', 'thead', 'tbody', 'tr', 'th', 'td'];
const markdownConvert = (markdown) => {
    const unsafeHtml = new showdown__WEBPACK_IMPORTED_MODULE_2__["Converter"]({
        tables: true,
        openLinksInNewWindow: true,
        strikethrough: true,
        emoji: true,
    }).makeHtml(markdown);
    return sanitize_html__WEBPACK_IMPORTED_MODULE_3__(unsafeHtml, {
        allowedTags: [
            'b',
            'i',
            'strike',
            's',
            'del',
            'em',
            'strong',
            'a',
            'p',
            'h1',
            'h2',
            'h3',
            'h4',
            'ul',
            'ol',
            'li',
            'code',
            'pre',
            ...tableTags,
        ],
        allowedAttributes: {
            a: ['href', 'target', 'rel'],
        },
        allowedSchemes: ['http', 'https', 'mailto'],
        transformTags: {
            a: sanitize_html__WEBPACK_IMPORTED_MODULE_3__["simpleTransform"]('a', { rel: 'noopener noreferrer' }, true),
        },
    });
};
class SyncMarkdownView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.updateDimensions();
    }
    updateDimensions() {
        var _a, _b;
        if (!((_b = (_a = this.frame) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.document.body.firstChild)) {
            return;
        }
        this.frame.style.height = `${this.frame.contentWindow.document.body.firstChild.scrollHeight}px`;
        // Let the new height take effect, then reset again once we recompute
        setTimeout(() => {
            if (this.props.exactHeight) {
                this.frame.style.height = `${this.frame.contentWindow.document.body.firstChild.scrollHeight}px`;
            }
            else {
                // Increase by 15px for the case where a horizontal scrollbar might appear
                this.frame.style.height = `${this.frame.contentWindow.document.body.firstChild
                    .scrollHeight + 15}px`;
            }
        });
    }
    render() {
        // Find the app's stylesheets and inject them into the frame to ensure consistent styling.
        const filteredLinks = Array.from(document.getElementsByTagName('link')).filter((l) => lodash_es__WEBPACK_IMPORTED_MODULE_1__["includes"](l.href, 'app-bundle'));
        const linkRefs = lodash_es__WEBPACK_IMPORTED_MODULE_1__["reduce"](filteredLinks, (refs, link) => `${refs}
        <link rel="stylesheet" href="${link.href}">`, '');
        const contents = `
      ${linkRefs}
      <style type="text/css">
      body {
        background-color: transparent !important;
        color: ${this.props.content ? '#333' : '#999'};
        font-family: var(--pf-global--FontFamily--sans-serif);
        min-width: auto !important;
      }
      table {
        display: block;
        margin-bottom: 11.5px;
        overflow-x: auto;
      }
      td,
      th {
        border-bottom: 1px solid #ededed;
        padding: 10px;
        vertical-align: top;
      }
      th {
        padding-top: 0;
      }
      ${this.props.styles ? this.props.styles : ''}
      </style>
      <body class="pf-m-redhat-font"><div style="overflow-y: auto;">${markdownConvert(this.props.content || 'Not available')}</div></body>`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", { sandbox: "allow-popups allow-same-origin", srcDoc: contents, style: { border: '0px', display: 'block', width: '100%', height: '0' }, ref: (r) => (this.frame = r), onLoad: () => this.updateDimensions() }));
    }
}


/***/ }),

/***/ 202:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 203:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 204:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 205:
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 206:
/*!***********************!*\
  !*** chalk (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 207:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=catalog-f8f3c358777c2400da23.js.map