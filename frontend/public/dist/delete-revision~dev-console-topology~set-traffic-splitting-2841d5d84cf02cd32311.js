(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision~dev-console-topology~set-traffic-splitting"],{

/***/ "./packages/dev-console/src/actions/add-resources.tsx":
/*!************************************************************!*\
  !*** ./packages/dev-console/src/actions/add-resources.tsx ***!
  \************************************************************/
/*! exports provided: allImportResourceAccess, allCatalogImageResourceAccess, fromGit, containerImage, fromCatalog, fromDockerfile, fromDatabaseCatalog, addResourceMenu, addResourceMenuWithoutCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allImportResourceAccess", function() { return allImportResourceAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCatalogImageResourceAccess", function() { return allCatalogImageResourceAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromGit", function() { return fromGit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerImage", function() { return containerImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCatalog", function() { return fromCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDockerfile", function() { return fromDockerfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDatabaseCatalog", function() { return fromDatabaseCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResourceMenu", function() { return addResourceMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResourceMenuWithoutCatalog", function() { return addResourceMenuWithoutCatalog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _components_import_import_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/import/import-types */ "./packages/dev-console/src/components/import/import-types.ts");
/* harmony import */ var _utils_add_resources_menu_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/add-resources-menu-utils */ "./packages/dev-console/src/utils/add-resources-menu-utils.ts");




const allImportResourceAccess = 'allImportResourceAccess';
const allCatalogImageResourceAccess = 'allCatalogImageResourceAccess';
const fromGit = Object(_utils_add_resources_menu_utils__WEBPACK_IMPORTED_MODULE_3__["createKebabAction"])('From Git', react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["GitAltIcon"], null), _components_import_import_types__WEBPACK_IMPORTED_MODULE_2__["ImportOptions"].GIT, allImportResourceAccess);
const containerImage = Object(_utils_add_resources_menu_utils__WEBPACK_IMPORTED_MODULE_3__["createKebabAction"])('Container Image', react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["OsImageIcon"], null), _components_import_import_types__WEBPACK_IMPORTED_MODULE_2__["ImportOptions"].CONTAINER, allCatalogImageResourceAccess);
const fromCatalog = Object(_utils_add_resources_menu_utils__WEBPACK_IMPORTED_MODULE_3__["createKebabAction"])('From Catalog', react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["CatalogIcon"], null), _components_import_import_types__WEBPACK_IMPORTED_MODULE_2__["ImportOptions"].CATALOG);
const fromDockerfile = Object(_utils_add_resources_menu_utils__WEBPACK_IMPORTED_MODULE_3__["createKebabAction"])('From Dockerfile', react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["CubeIcon"], null), _components_import_import_types__WEBPACK_IMPORTED_MODULE_2__["ImportOptions"].DOCKERFILE, allImportResourceAccess);
const fromDatabaseCatalog = Object(_utils_add_resources_menu_utils__WEBPACK_IMPORTED_MODULE_3__["createKebabAction"])('Database', react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["DatabaseIcon"], null), _components_import_import_types__WEBPACK_IMPORTED_MODULE_2__["ImportOptions"].DATABASE);
const addResourceMenu = [
    fromGit,
    containerImage,
    fromCatalog,
    fromDockerfile,
    fromDatabaseCatalog,
];
const addResourceMenuWithoutCatalog = [
    fromGit,
    containerImage,
    fromDockerfile,
];


/***/ }),

/***/ "./packages/dev-console/src/components/import/render-utils.tsx":
/*!*********************************************************************!*\
  !*** ./packages/dev-console/src/components/import/render-utils.tsx ***!
  \*********************************************************************/
/*! exports provided: routeDecoratorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeDecoratorIcon", function() { return routeDecoratorIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _topology_components_nodes_CheIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topology/components/nodes/CheIcon */ "./packages/dev-console/src/components/topology/components/nodes/CheIcon.tsx");
/* harmony import */ var _import_validation_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-validation-utils */ "./packages/dev-console/src/components/import/import-validation-utils.ts");
/* harmony import */ var _import_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-types */ "./packages/dev-console/src/components/import/import-types.ts");





const routeDecoratorIcon = (routeURL, radius, cheEnabled) => {
    if (cheEnabled && routeURL) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_topology_components_nodes_CheIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { style: { fontSize: radius } });
    }
    switch (Object(_import_validation_utils__WEBPACK_IMPORTED_MODULE_3__["detectGitType"])(routeURL)) {
        case _import_types__WEBPACK_IMPORTED_MODULE_4__["GitTypes"].invalid:
            // Not a valid url and thus not safe to use
            return null;
        case _import_types__WEBPACK_IMPORTED_MODULE_4__["GitTypes"].github:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["GithubIcon"], { style: { fontSize: radius }, alt: "Edit Source Code" });
        case _import_types__WEBPACK_IMPORTED_MODULE_4__["GitTypes"].bitbucket:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["BitbucketIcon"], { style: { fontSize: radius }, alt: "Edit Source Code" });
        case _import_types__WEBPACK_IMPORTED_MODULE_4__["GitTypes"].gitlab:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["GitlabIcon"], { style: { fontSize: radius }, alt: "Edit Source Code" });
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["GitAltIcon"], { style: { fontSize: radius }, alt: "Edit Source Code" });
    }
};


/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.scss":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.tsx":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _TaskStatusTooltip_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskStatusTooltip.scss */ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.scss");
/* harmony import */ var _TaskStatusTooltip_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TaskStatusTooltip_scss__WEBPACK_IMPORTED_MODULE_2__);



const TaskStatusToolTip = ({ taskStatus }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-status-tooltip" }, Object.keys(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"]).map((status) => {
        const { message, pftoken } = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["getRunStatusColor"])(status);
        return taskStatus[status] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: status },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-task-status-tooltip__legend", style: { background: pftoken.value } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, status === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"].PipelineNotStarted || status === _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"].FailedToStart
                ? message
                : `${taskStatus[status]} ${message}`))) : null;
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (TaskStatusToolTip);


/***/ }),

/***/ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx":
/*!******************************************************************!*\
  !*** ./packages/dev-console/src/components/svg/SvgBoxedText.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _SvgResourceIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SvgResourceIcon */ "./packages/dev-console/src/components/svg/SvgResourceIcon.tsx");
/* harmony import */ var _SvgCircledIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SvgCircledIcon */ "./packages/dev-console/src/components/svg/SvgCircledIcon.tsx");
/* harmony import */ var _SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SvgDropShadowFilter */ "./packages/dev-console/src/components/svg/SvgDropShadowFilter.tsx");
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







const FILTER_ID = 'SvgBoxedTextDropShadowFilterId';
/**
 * Renders a `<text>` component with a `<rect>` box behind.
 */
const SvgBoxedText = (_a) => {
    var { children, className, paddingX = 0, paddingY = 0, cornerRadius = 4, x = 0, y = 0, kind, typeIconClass, typeIconPadding = 4, onMouseEnter, onMouseLeave, truncate = _const__WEBPACK_IMPORTED_MODULE_3__["RESOURCE_NAME_TRUNCATE_LENGTH"], dragRef } = _a, other = __rest(_a, ["children", "className", "paddingX", "paddingY", "cornerRadius", "x", "y", "kind", "typeIconClass", "typeIconPadding", "onMouseEnter", "onMouseLeave", "truncate", "dragRef"]);
    const [labelHover, labelHoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useHover"])();
    const [textSize, textRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useSize"])([children, className, labelHover]);
    const [iconSize, iconRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useSize"])([kind]);
    const iconSpace = kind && iconSize ? iconSize.width + paddingX : 0;
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useCombineRefs"])(dragRef, typeof truncate === 'number' ? labelHoverRef : undefined);
    const typedIconWidth = typeIconClass && iconSize ? iconSize.height + typeIconPadding * 2 : 0;
    const midX = typedIconWidth ? x + typedIconWidth / 2 : x;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: className, ref: refs },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_6__["default"], { id: FILTER_ID }),
        textSize && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["createSvgIdUrl"])(FILTER_ID), x: midX - paddingX - textSize.width / 2 - iconSpace / 2 - (typeIconClass ? 10 : 0), width: textSize.width + paddingX * 2 + iconSpace + (typeIconClass ? 10 : 0), y: y - paddingY - textSize.height / 2, height: textSize.height + paddingY * 2, rx: cornerRadius, ry: cornerRadius })),
        textSize && kind && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SvgResourceIcon__WEBPACK_IMPORTED_MODULE_4__["SvgResourceIcon"], { ref: iconRef, x: midX - textSize.width / 2 - paddingX / 2, y: y, kind: kind })),
        textSize && iconSize && typeIconClass && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SvgCircledIcon__WEBPACK_IMPORTED_MODULE_5__["default"], { x: midX - (textSize.width + iconSpace) / 2 - paddingX, y: y - iconSize.height + paddingY * 1.5, width: iconSize.height + paddingY, height: iconSize.height + paddingY, iconClass: typeIconClass, padding: typeIconPadding })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", Object.assign({}, other, { ref: textRef, x: midX + iconSpace / 2, y: y, textAnchor: "middle", dy: "0.35em", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }), truncate > 0
            ? labelHover
                ? children
                : Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["truncateMiddle"])(children, { length: truncate })
            : children)));
};
/* harmony default export */ __webpack_exports__["default"] = (SvgBoxedText);


/***/ }),

/***/ "./packages/dev-console/src/components/svg/SvgCircledIcon.tsx":
/*!********************************************************************!*\
  !*** ./packages/dev-console/src/components/svg/SvgCircledIcon.tsx ***!
  \********************************************************************/
/*! exports provided: CircledIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircledIcon", function() { return CircledIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_shared___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/ */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SvgDropShadowFilter */ "./packages/dev-console/src/components/svg/SvgDropShadowFilter.tsx");





const FILTER_ID = 'SvgTypedIconDropShadowFilterId';
const CircledIcon = ({ className, x, y, width, height, iconClass, padding = 4 }, circleRef) => {
    const [typedIconSize, typedIconRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useSize"])([]);
    let iconWidth = 0;
    let iconHeight = 0;
    if (typedIconSize) {
        ({ width: iconWidth, height: iconHeight } = typedIconSize);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: className },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_4__["default"], { id: FILTER_ID }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { ref: circleRef, filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["createSvgIdUrl"])(FILTER_ID), cx: x - iconWidth / 2, cy: y + iconHeight / 2, r: iconWidth / 2 + padding }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: typedIconRef },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", { x: x - iconWidth, y: y, width: width, height: height, xlinkHref: Object(_console_shared___WEBPACK_IMPORTED_MODULE_2__["isIconUrl"])(iconClass) ? iconClass : Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageForIconClass"])(iconClass), filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["createSvgIdUrl"])(FILTER_ID) }))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](CircledIcon));


/***/ }),

/***/ "./packages/dev-console/src/components/svg/SvgDropShadowFilter.tsx":
/*!*************************************************************************!*\
  !*** ./packages/dev-console/src/components/svg/SvgDropShadowFilter.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");


const SvgDropShadowFilter = ({ id, dx = 0, dy = 1, stdDeviation = 2, floodColor = '#030303', floodOpacity = 0.2, }) => {
    if (window.navigator.userAgent.includes('Edge')) {
        // feDropShadow is not supported by Edge
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["SVGDefs"], { id: id },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", { id: id, x: `-${stdDeviation * 12.5}%`, y: `-${stdDeviation * 12.5}%`, width: `${100 + stdDeviation * 25}%`, height: `${100 + stdDeviation * 25}%` },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", { in: "SourceAlpha", stdDeviation: stdDeviation }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", { dx: dx, dy: dy, result: "offsetblur" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feFlood", { floodColor: floodColor, floodOpacity: floodOpacity }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feComposite", { in2: "offsetblur", operator: "in" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feMerge", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feMergeNode", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feMergeNode", { in: "SourceGraphic" })))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["SVGDefs"], { id: id },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", { id: id, x: `-${stdDeviation * 12.5}%`, y: `-${stdDeviation * 12.5}%`, width: `${100 + stdDeviation * 25}%`, height: `${100 + stdDeviation * 25}%` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feDropShadow", { dx: dx, dy: dy, stdDeviation: stdDeviation, floodColor: floodColor, floodOpacity: floodOpacity }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SvgDropShadowFilter);


/***/ }),

/***/ "./packages/dev-console/src/components/svg/SvgResourceIcon.scss":
/*!**********************************************************************!*\
  !*** ./packages/dev-console/src/components/svg/SvgResourceIcon.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/svg/SvgResourceIcon.tsx":
/*!*********************************************************************!*\
  !*** ./packages/dev-console/src/components/svg/SvgResourceIcon.tsx ***!
  \*********************************************************************/
/*! exports provided: SvgResourceIcon, getKindStringAndAbbreviation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgResourceIcon", function() { return SvgResourceIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKindStringAndAbbreviation", function() { return getKindStringAndAbbreviation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _SvgResourceIcon_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SvgResourceIcon.scss */ "./packages/dev-console/src/components/svg/SvgResourceIcon.scss");
/* harmony import */ var _SvgResourceIcon_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SvgResourceIcon_scss__WEBPACK_IMPORTED_MODULE_5__);






function getKindStringAndAbbreviation(kind) {
    const kindObj = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["modelFor"])(kind);
    const kindStr = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(kindObj, 'kind', kind);
    const kindColor = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(kindObj, 'color', undefined);
    const kindAbbr = (kindObj && kindObj.abbr) || Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_4__["kindToAbbr"])(kindStr);
    return { kindStr, kindAbbr, kindColor };
}
const ForwardSvgResourceIcon = ({ kind, x, y, leftJustified }, iconRef) => {
    const { kindAbbr, kindStr, kindColor } = getKindStringAndAbbreviation(kind);
    const [textSize, textRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useSize"])([]);
    let rect = null;
    let paddingX = 0;
    let paddingY = 0;
    let width = 0;
    let height = 0;
    if (textSize) {
        ({ height, width } = textSize);
        paddingX = height / 2;
        paddingY = height / 14;
        height += paddingY * 2;
        rect = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { fill: kindColor, ref: iconRef, x: x - (leftJustified ? 0 : paddingX + width / 2), width: textSize.width + paddingX * 2, y: y - (leftJustified ? 0 : paddingY + textSize.height / 2), height: height, rx: height / 2, ry: height / 2 }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-resource-icon', {
            [`odc-resource-icon-${kindStr.toLowerCase()}`]: !kindColor,
        }) },
        rect,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, kindStr),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { ref: textRef, x: x + (leftJustified ? paddingX + width / 2 : 0), y: y + (leftJustified ? (paddingY + height) / 2 : 0), textAnchor: "middle", dy: "0.35em" }, kindAbbr)));
};
const SvgResourceIcon = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ForwardSvgResourceIcon);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/actions/graphActions.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/actions/graphActions.ts ***!
  \******************************************************************************/
/*! exports provided: graphActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphActions", function() { return graphActions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _actions_add_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/add-resources */ "./packages/dev-console/src/actions/add-resources.tsx");




const graphActions = (graphData, connectorSource) => {
    var _a, _b;
    let resourceMenu = connectorSource ? _actions_add_resources__WEBPACK_IMPORTED_MODULE_3__["addResourceMenuWithoutCatalog"] : _actions_add_resources__WEBPACK_IMPORTED_MODULE_3__["addResourceMenu"];
    const isKnativeService = ((_b = (_a = connectorSource === null || connectorSource === void 0 ? void 0 : connectorSource.getData()) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.kind) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_1__["ServiceModel"]);
    if (isKnativeService && graphData.eventSourceEnabled) {
        resourceMenu = [..._actions_add_resources__WEBPACK_IMPORTED_MODULE_3__["addResourceMenuWithoutCatalog"], _console_knative_plugin__WEBPACK_IMPORTED_MODULE_1__["addEventSource"]];
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](resourceMenu, (menuItems, menuItem) => {
        var _a, _b;
        const item = menuItem(null, graphData.namespace, false, (_b = (_a = connectorSource === null || connectorSource === void 0 ? void 0 : connectorSource.getData()) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.obj, graphData.createResourceAccess);
        if (item) {
            menuItems.push(item);
        }
        return menuItems;
    }, []);
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/actions/groupActions.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/actions/groupActions.ts ***!
  \******************************************************************************/
/*! exports provided: getGroupComponents, groupActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupComponents", function() { return getGroupComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupActions", function() { return groupActions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin */ "./packages/knative-plugin/src/index.ts");
/* harmony import */ var _actions_add_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/add-resources */ "./packages/dev-console/src/actions/add-resources.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals */ "./packages/dev-console/src/components/modals/index.ts");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");








const getGroupComponents = (groupId, topology) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["values"](topology).reduce((acc, val) => {
        const dc = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_5__["getTopologyResourceObject"])(val);
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'labels', 'app.kubernetes.io/part-of']) === groupId) {
            acc.resources.push(topology[dc.metadata.uid]);
        }
        return acc;
    }, { id: groupId, name: groupId, resources: [] });
};
const deleteGroup = (application) => {
    // accessReview needs a resource but group is not a k8s resource,
    // so currently picking the first resource to do the rbac checks (might change in future)
    const primaryResource = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](application.resources[0], ['resources', 'obj']);
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(primaryResource.kind)
        ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(primaryResource.kind)
        : Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(primaryResource));
    return {
        label: 'Delete Application',
        callback: () => {
            const reqs = [];
            Object(_modals__WEBPACK_IMPORTED_MODULE_6__["deleteResourceModal"])({
                blocking: true,
                resourceName: application.name,
                resourceType: 'Application',
                onSubmit: () => {
                    application.resources.forEach((workload) => {
                        const resource = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](workload, ['resources', 'obj']);
                        reqs.push(Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_7__["cleanUpWorkload"])(resource, workload));
                    });
                    return Promise.all(reqs);
                },
            });
        },
        accessReview: Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["asAccessReview"])(resourceModel, primaryResource, 'delete'),
    };
};
const addResourcesMenu = (graphData, application, connectorSource) => {
    var _a, _b, _c, _d, _e, _f;
    const primaryResource = (_b = (_a = application.resources[0]) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.obj;
    const connectorSourceObj = ((_d = (_c = connectorSource === null || connectorSource === void 0 ? void 0 : connectorSource.getData()) === null || _c === void 0 ? void 0 : _c.resources) === null || _d === void 0 ? void 0 : _d.obj) || {};
    const isKnativeService = ((_f = (_e = connectorSource === null || connectorSource === void 0 ? void 0 : connectorSource.getData()) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.kind) === Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(_console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["ServiceModel"]);
    let resourceMenu = _actions_add_resources__WEBPACK_IMPORTED_MODULE_4__["addResourceMenuWithoutCatalog"];
    if (isKnativeService && graphData.eventSourceEnabled) {
        resourceMenu = [..._actions_add_resources__WEBPACK_IMPORTED_MODULE_4__["addResourceMenuWithoutCatalog"], _console_knative_plugin__WEBPACK_IMPORTED_MODULE_3__["addEventSource"]];
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](resourceMenu, (menuItems, menuItem) => {
        var _a, _b;
        const item = menuItem(primaryResource, (_b = (_a = application.resources[0]) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.obj.metadata.namespace, true, connectorSourceObj, graphData.createResourceAccess);
        if (item) {
            menuItems.push(item);
        }
        return menuItems;
    }, []);
};
const groupActions = (graphData, application, connectorSource) => {
    const addItems = addResourcesMenu(graphData, application, connectorSource);
    return !connectorSource ? [deleteGroup(application), ...addItems] : addItems;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/actions/nodeActions.ts":
/*!*****************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/actions/nodeActions.ts ***!
  \*****************************************************************************/
/*! exports provided: nodeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeActions", function() { return nodeActions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");




const nodeActions = (node) => {
    const contextMenuResource = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(node);
    if (!contextMenuResource) {
        return null;
    }
    const resourceKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(contextMenuResource));
    const menuActions = [..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].getExtensionsActionsForKind(resourceKind), ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_1__["Kebab"].factory.common];
    return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](menuActions, (a) => a(resourceKind, contextMenuResource));
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/actions/regroupActions.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/actions/regroupActions.ts ***!
  \********************************************************************************/
/*! exports provided: regroupActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regroupActions", function() { return regroupActions; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals */ "./packages/dev-console/src/components/modals/index.ts");


const regroupActions = (obj, regroupChildren = false) => {
    var _a, _b;
    if (regroupChildren) {
        return [
            {
                label: 'Edit Application Grouping',
                callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_1__["groupEditApplicationModal"])({
                    group: obj,
                    blocking: true,
                }),
            },
        ];
    }
    const resource = (_b = (_a = obj.getData()) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.obj;
    if (!resource) {
        return [];
    }
    const resourceKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(resource));
    return [
        {
            label: 'Edit Application Grouping',
            callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_1__["editApplicationModal"])({
                resourceKind,
                resource,
                blocking: true,
            }),
        },
    ];
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/actions/workloadActions.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/actions/workloadActions.ts ***!
  \*********************************************************************************/
/*! exports provided: workloadActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workloadActions", function() { return workloadActions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_deployment_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/deployment-config */ "./public/components/deployment-config.tsx");
/* harmony import */ var _console_internal_components_deployment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/deployment */ "./public/components/deployment.tsx");
/* harmony import */ var _console_internal_components_stateful_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/stateful-set */ "./public/components/stateful-set.tsx");
/* harmony import */ var _console_internal_components_daemon_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/components/daemon-set */ "./public/components/daemon-set.tsx");
/* harmony import */ var _actions_modify_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/modify-application */ "./packages/dev-console/src/actions/modify-application.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");








const workloadActions = (workload, allowRegroup = true) => {
    const contextMenuResource = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_7__["getTopologyResourceObject"])(workload);
    if (!contextMenuResource) {
        return null;
    }
    const menuActions = [];
    if (allowRegroup) {
        menuActions.push(_actions_modify_application__WEBPACK_IMPORTED_MODULE_6__["ModifyApplication"]);
    }
    switch (contextMenuResource.kind) {
        case 'DeploymentConfig':
            menuActions.push(..._console_internal_components_deployment_config__WEBPACK_IMPORTED_MODULE_2__["menuActions"]);
            break;
        case 'Deployment':
            menuActions.push(..._console_internal_components_deployment__WEBPACK_IMPORTED_MODULE_3__["menuActions"]);
            break;
        case 'StatefulSet':
            menuActions.push(..._console_internal_components_stateful_set__WEBPACK_IMPORTED_MODULE_4__["menuActions"]);
            break;
        case 'DaemonSet':
            menuActions.push(..._console_internal_components_daemon_set__WEBPACK_IMPORTED_MODULE_5__["menuActions"]);
            break;
        default:
            break;
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](menuActions, (a) => a(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(contextMenuResource)), contextMenuResource));
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/AbstractSBRComponentFactory.ts":
/*!************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/AbstractSBRComponentFactory.ts ***!
  \************************************************************************************************/
/*! exports provided: AbstractSBRComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSBRComponentFactory", function() { return AbstractSBRComponentFactory; });
/* harmony import */ var _componentUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _edges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edges */ "./packages/dev-console/src/components/topology/components/edges/index.ts");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");



class AbstractSBRComponentFactory {
    constructor(serviceBinding) {
        this.withAddResourceConnector = () => Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["withCreateConnector"])(Object(_componentUtils__WEBPACK_IMPORTED_MODULE_0__["createConnectorCallback"])(this.hasServiceBinding), _edges__WEBPACK_IMPORTED_MODULE_1__["CreateConnector"]);
        this.hasServiceBinding = serviceBinding;
    }
    set serviceBinding(value) {
        this.hasServiceBinding = value;
    }
}



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/ContextMenu.scss":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/ContextMenu.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/GraphComponent.scss":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/GraphComponent.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/GraphComponent.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/GraphComponent.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");



const DRAG_ACTIVE_CLASS = 'odc-m-drag-active';
const VALID_DROP_CLASS = 'odc-m-valid-drop-target';
const GraphComponent = (props) => {
    const { dragEditInProgress, hasDropTarget, dragCreate } = props;
    const graphClasses = classnames__WEBPACK_IMPORTED_MODULE_1__('odc-graph', { 'odc-m-drag-create': dragCreate });
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const addClassList = [];
        const removeClassList = [];
        dragEditInProgress
            ? addClassList.push(DRAG_ACTIVE_CLASS)
            : removeClassList.push(DRAG_ACTIVE_CLASS);
        hasDropTarget ? addClassList.push(VALID_DROP_CLASS) : removeClassList.push(VALID_DROP_CLASS);
        if (addClassList.length) {
            addClassList.forEach((className) => document.body.classList.add(className));
        }
        if (removeClassList.length) {
            removeClassList.forEach((className) => document.body.classList.remove(className));
        }
    }, [dragEditInProgress, hasDropTarget]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: graphClasses },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["GraphComponent"], Object.assign({}, props))));
};
/* harmony default export */ __webpack_exports__["default"] = (GraphComponent);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/NodeShadows.tsx ***!
  \*********************************************************************************/
/*! exports provided: NODE_SHADOW_FILTER_ID, NODE_SHADOW_FILTER_ID_HOVER, NodeShadows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_SHADOW_FILTER_ID", function() { return NODE_SHADOW_FILTER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_SHADOW_FILTER_ID_HOVER", function() { return NODE_SHADOW_FILTER_ID_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeShadows", function() { return NodeShadows; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/SvgDropShadowFilter */ "./packages/dev-console/src/components/svg/SvgDropShadowFilter.tsx");


const NODE_SHADOW_FILTER_ID = 'NodeShadowsFilterId';
const NODE_SHADOW_FILTER_ID_HOVER = 'NodeShadowsFilterId--hover';
const NodeShadows = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_1__["default"], { id: NODE_SHADOW_FILTER_ID }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_1__["default"], { id: NODE_SHADOW_FILTER_ID_HOVER, dy: 3, stdDeviation: 7, floodOpacity: 0.24 })));



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/RegroupHint.scss":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/RegroupHint.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/RegroupHint.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/RegroupHint.tsx ***!
  \*********************************************************************************/
/*! exports provided: RegroupHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegroupHint", function() { return RegroupHint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _RegroupHint_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegroupHint.scss */ "./packages/dev-console/src/components/topology/components/RegroupHint.scss");
/* harmony import */ var _RegroupHint_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RegroupHint_scss__WEBPACK_IMPORTED_MODULE_3__);




const RegroupHint = () => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-regroup-hint" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["InfoCircleIcon"], { className: "odc-regroup-hint__icon" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "odc-regroup-hint__text" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["ShortcutTable"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["Shortcut"], { shift: true, drag: true }, "Edit application grouping")))));



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/componentFactory.ts":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/componentFactory.ts ***!
  \*************************************************************************************/
/*! exports provided: ComponentFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFactory", function() { return ComponentFactory; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups */ "./packages/dev-console/src/components/topology/components/groups/index.ts");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes */ "./packages/dev-console/src/components/topology/components/nodes/index.ts");
/* harmony import */ var _GraphComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphComponent */ "./packages/dev-console/src/components/topology/components/GraphComponent.tsx");
/* harmony import */ var _nodeContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodeContextMenu */ "./packages/dev-console/src/components/topology/components/nodeContextMenu.tsx");
/* harmony import */ var _componentUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony import */ var _ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContextMenu.scss */ "./packages/dev-console/src/components/topology/components/ContextMenu.scss");
/* harmony import */ var _ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _createConnection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createConnection */ "./packages/dev-console/src/components/topology/components/createConnection.tsx");
/* harmony import */ var _withEditReviewAccess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withEditReviewAccess */ "./packages/dev-console/src/components/topology/components/withEditReviewAccess.tsx");
/* harmony import */ var _edges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edges */ "./packages/dev-console/src/components/topology/components/edges/index.ts");
/* harmony import */ var _AbstractSBRComponentFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AbstractSBRComponentFactory */ "./packages/dev-console/src/components/topology/components/AbstractSBRComponentFactory.ts");












class ComponentFactory extends _AbstractSBRComponentFactory__WEBPACK_IMPORTED_MODULE_11__["AbstractSBRComponentFactory"] {
    constructor() {
        super(...arguments);
        this.getFactory = () => {
            return (kind, type) => {
                switch (type) {
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_APPLICATION_GROUP"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["applicationGroupDropTargetSpec"])(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["withContextMenu"])(_nodeContextMenu__WEBPACK_IMPORTED_MODULE_4__["groupContextMenu"])(_groups__WEBPACK_IMPORTED_MODULE_1__["Application"])));
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_WORKLOAD"]:
                        return this.withAddResourceConnector()(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["nodeDropTargetSpec"])(Object(_withEditReviewAccess__WEBPACK_IMPORTED_MODULE_9__["withEditReviewAccess"])('patch')(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDragNode"])(Object(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["nodeDragSourceSpec"])(type))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["withContextMenu"])(_nodeContextMenu__WEBPACK_IMPORTED_MODULE_4__["workloadContextMenu"])(_nodes__WEBPACK_IMPORTED_MODULE_2__["WorkloadNode"]))))));
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_CONNECTS_TO"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withTargetDrag"])(Object(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["edgeDragSourceSpec"])(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["MOVE_CONNECTOR_DROP_TYPE"], this.serviceBinding, _createConnection__WEBPACK_IMPORTED_MODULE_8__["createConnection"]))(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withRemoveConnector"])(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["removeConnectorCallback"])(_edges__WEBPACK_IMPORTED_MODULE_10__["ConnectsTo"]));
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_SERVICE_BINDING"]:
                        return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withRemoveConnector"])(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["removeConnectorCallback"])(_edges__WEBPACK_IMPORTED_MODULE_10__["ServiceBinding"]);
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_AGGREGATE_EDGE"]:
                        return _edges__WEBPACK_IMPORTED_MODULE_10__["AggregateEdge"];
                    case _const__WEBPACK_IMPORTED_MODULE_7__["TYPE_TRAFFIC_CONNECTOR"]:
                        return _edges__WEBPACK_IMPORTED_MODULE_10__["TrafficConnector"];
                    default:
                        switch (kind) {
                            case _console_topology__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].graph:
                                return Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withDndDrop"])(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["graphDropTargetSpec"])(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withPanZoom"])()(Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["withSelection"])(false, true)(Object(_componentUtils__WEBPACK_IMPORTED_MODULE_5__["withContextMenu"])(_nodeContextMenu__WEBPACK_IMPORTED_MODULE_4__["graphContextMenu"])(_GraphComponent__WEBPACK_IMPORTED_MODULE_3__["default"]))));
                            default:
                                return undefined;
                        }
                }
            };
        };
    }
}



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/componentUtils.ts":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/componentUtils.ts ***!
  \***********************************************************************************/
/*! exports provided: nodesEdgeIsDragging, nodeDragSourceSpec, nodeDropTargetSpec, graphDropTargetSpec, applicationGroupDropTargetSpec, edgeDragSourceSpec, noDropTargetSpec, createConnectorCallback, removeConnectorCallback, REGROUP_OPERATION, MOVE_CONNECTOR_DROP_TYPE, NODE_DRAG_TYPE, EDGE_DRAG_TYPE, withNoDrop, withContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodesEdgeIsDragging", function() { return nodesEdgeIsDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeDragSourceSpec", function() { return nodeDragSourceSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeDropTargetSpec", function() { return nodeDropTargetSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphDropTargetSpec", function() { return graphDropTargetSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationGroupDropTargetSpec", function() { return applicationGroupDropTargetSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edgeDragSourceSpec", function() { return edgeDragSourceSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noDropTargetSpec", function() { return noDropTargetSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnectorCallback", function() { return createConnectorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectorCallback", function() { return removeConnectorCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGROUP_OPERATION", function() { return REGROUP_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_CONNECTOR_DROP_TYPE", function() { return MOVE_CONNECTOR_DROP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_DRAG_TYPE", function() { return NODE_DRAG_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDGE_DRAG_TYPE", function() { return EDGE_DRAG_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNoDrop", function() { return withNoDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContextMenu", function() { return withContextMenu; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _createConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createConnection */ "./packages/dev-console/src/components/topology/components/createConnection.tsx");
/* harmony import */ var _removeConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeConnection */ "./packages/dev-console/src/components/topology/components/removeConnection.tsx");
/* harmony import */ var _moveNodeToGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moveNodeToGroup */ "./packages/dev-console/src/components/topology/components/moveNodeToGroup.tsx");
/* harmony import */ var _nodeContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodeContextMenu */ "./packages/dev-console/src/components/topology/components/nodeContextMenu.tsx");
/* harmony import */ var _GraphComponent_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GraphComponent.scss */ "./packages/dev-console/src/components/topology/components/GraphComponent.scss");
/* harmony import */ var _GraphComponent_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_GraphComponent_scss__WEBPACK_IMPORTED_MODULE_7__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const MOVE_CONNECTOR_DROP_TYPE = '#moveConnector#';
const NODE_DRAG_TYPE = '#node#';
const EDGE_DRAG_TYPE = '#edge#';
const MOVE_CONNECTOR_OPERATION = 'moveconnector';
const REGROUP_OPERATION = 'regroup';
const canDropEdgeOnNode = (operation, edge, node) => {
    if (edge.getSource() === node) {
        return false;
    }
    if (edge.getTarget() === node) {
        return true;
    }
    return !node.getTargetEdges().find((e) => e.getSource() === edge.getSource());
};
const highlightNode = (monitor, element) => {
    const operation = monitor.getOperation();
    if (!monitor.isDragging() || !operation) {
        return false;
    }
    if (operation.type === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_OPERATION"]) {
        return (monitor.getItem() !== element &&
            !monitor
                .getItem()
                .getSourceEdges()
                .find((e) => e.getTarget() === element));
    }
    return (operation.canDropOnNode && operation.canDropOnNode(operation.type, monitor.getItem(), element));
};
const nodeDragSourceSpec = (type, allowRegroup = true, canEdit = false) => ({
    item: { type: NODE_DRAG_TYPE },
    operation: (monitor, props) => {
        return (canEdit || props.canEdit) && allowRegroup
            ? {
                [_console_topology__WEBPACK_IMPORTED_MODULE_2__["Modifiers"].SHIFT]: { type: REGROUP_OPERATION, edit: true },
            }
            : undefined;
    },
    canCancel: (monitor) => { var _a; return ((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === REGROUP_OPERATION; },
    begin: (monitor, props) => {
        return {
            element: props.element,
            allowRegroup: (canEdit || props.canEdit) && allowRegroup,
        };
    },
    end: (dropResult, monitor, props) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!monitor.isCancelled() && ((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === REGROUP_OPERATION) {
            if (monitor.didDrop() && dropResult && props && props.element.getParent() !== dropResult) {
                const controller = props.element.getController();
                yield Object(_moveNodeToGroup__WEBPACK_IMPORTED_MODULE_5__["moveNodeToGroup"])(props.element, Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["isNode"])(dropResult) ? dropResult : null);
                // perform the optimistic update in an action so as not to render too soon
                Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(() => {
                    // FIXME: check shouldn't be necessary if we handled the async and backend data refresh correctly
                    if (controller.getNodeById(props.element.getId())) {
                        dropResult.appendChild(props.element);
                    }
                })();
            }
            else {
                // cancel operation
                return Promise.reject();
            }
        }
        return undefined;
    }),
    collect: (monitor) => {
        var _a;
        return ({
            dragging: monitor.isDragging(),
            regrouping: ((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === REGROUP_OPERATION,
        });
    },
});
const nodesEdgeIsDragging = (monitor, props) => {
    if (!monitor.isDragging()) {
        return false;
    }
    if (monitor.getOperation() === MOVE_CONNECTOR_OPERATION) {
        return monitor.getItem().getSource() === props.element;
    }
    if (monitor.getOperation() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_OPERATION"]) {
        return monitor.getItem() === props.element;
    }
    return false;
};
const nodeDropTargetSpec = {
    accept: [EDGE_DRAG_TYPE, _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]],
    canDrop: (item, monitor, props) => {
        var _a;
        if (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["isEdge"])(item)) {
            return canDropEdgeOnNode((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type, item, props.element);
        }
        if (item === props.element) {
            return false;
        }
        return !props.element.getTargetEdges().find((e) => e.getSource() === item);
    },
    collect: (monitor, props) => ({
        canDrop: highlightNode(monitor, props.element),
        dropTarget: monitor.isOver({ shallow: true }),
        edgeDragging: nodesEdgeIsDragging(monitor, props),
    }),
};
const graphDropTargetSpec = {
    accept: [NODE_DRAG_TYPE, EDGE_DRAG_TYPE, _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]],
    hitTest: () => true,
    canDrop: (item, monitor, props) => {
        var _a;
        return (monitor.isOver({ shallow: monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"] }) &&
            ((((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === REGROUP_OPERATION &&
                // FIXME: the hasParent check is necessary due to model updates during async actions
                item.element.hasParent() &&
                item.element.getParent() !== props.element) ||
                monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]));
    },
    collect: (monitor) => {
        const operation = monitor.getOperation();
        const dragEditInProgress = monitor.isDragging() && ((operation === null || operation === void 0 ? void 0 : operation.type) === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_OPERATION"] || (operation === null || operation === void 0 ? void 0 : operation.edit));
        const dragCreate = dragEditInProgress &&
            (monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"] ||
                monitor.getItemType() === MOVE_CONNECTOR_DROP_TYPE);
        return {
            dragEditInProgress,
            dragCreate,
            hasDropTarget: dragEditInProgress && monitor.hasDropTarget(),
        };
    },
    dropHint: 'create',
};
const applicationGroupDropTargetSpec = {
    accept: [NODE_DRAG_TYPE, EDGE_DRAG_TYPE, _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]],
    canDrop: (item, monitor) => {
        var _a;
        return monitor.isOver({ shallow: monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"] }) &&
            (((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === REGROUP_OPERATION ||
                monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]);
    },
    collect: (monitor) => {
        var _a, _b, _c;
        return {
            droppable: monitor.isDragging() && ((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type) === REGROUP_OPERATION,
            dropTarget: monitor.isOver({ shallow: monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"] }),
            canDrop: monitor.isDragging() &&
                (((_b = monitor.getOperation()) === null || _b === void 0 ? void 0 : _b.type) === REGROUP_OPERATION ||
                    monitor.getItemType() === _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]),
            dragRegroupable: monitor.isDragging() && ((_c = monitor.getItem()) === null || _c === void 0 ? void 0 : _c.allowRegroup),
        };
    },
    dropHint: 'create',
};
const edgeDragSourceSpec = (type, serviceBinding, callback, failureTitle = 'Error moving connection') => ({
    item: { type: EDGE_DRAG_TYPE },
    operation: { type: MOVE_CONNECTOR_OPERATION, edit: true, canDropOnNode: canDropEdgeOnNode },
    begin: (monitor, props) => {
        props.element.raise();
        return props.element;
    },
    drag: (event, monitor, props) => {
        props.element.setEndPoint(event.x, event.y);
    },
    end: (dropResult, monitor, props) => {
        var _a;
        props.element.setEndPoint();
        if (monitor.didDrop() &&
            dropResult &&
            canDropEdgeOnNode((_a = monitor.getOperation()) === null || _a === void 0 ? void 0 : _a.type, props.element, dropResult)) {
            callback(props.element.getSource(), dropResult, props.element.getTarget(), serviceBinding).catch((error) => {
                Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["errorModal"])({ title: failureTitle, error: error.message, showIcon: true });
            });
        }
    },
    collect: (monitor) => ({
        dragging: monitor.isDragging(),
    }),
});
const noDropTargetSpec = {
    accept: [NODE_DRAG_TYPE, EDGE_DRAG_TYPE, _console_topology__WEBPACK_IMPORTED_MODULE_2__["CREATE_CONNECTOR_DROP_TYPE"]],
    canDrop: () => {
        return false;
    },
};
const withNoDrop = () => {
    return Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["withDndDrop"])(noDropTargetSpec);
};
const withContextMenu = (actions) => {
    return Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["withContextMenu"])(actions, document.getElementById('popper-container'), 'odc-topology-context-menu');
};
const createConnectorCallback = (serviceBinding) => (source, target) => {
    if (source === target) {
        return null;
    }
    if (Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["isGraph"])(target)) {
        return Object(_nodeContextMenu__WEBPACK_IMPORTED_MODULE_6__["graphContextMenu"])(target, source);
    }
    if (target.isGroup()) {
        return Object(_nodeContextMenu__WEBPACK_IMPORTED_MODULE_6__["groupContextMenu"])(target, source);
    }
    Object(_createConnection__WEBPACK_IMPORTED_MODULE_3__["createConnection"])(source, target, null, serviceBinding).catch((error) => {
        Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["errorModal"])({ title: 'Error creating connection', error: error.message });
    });
    return null;
};
const removeConnectorCallback = (edge) => {
    Object(_removeConnection__WEBPACK_IMPORTED_MODULE_4__["removeConnection"])(edge).catch((error) => {
        Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["errorModal"])({ title: 'Error removing connection', error: error.message });
    });
    return null;
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/const.ts":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/const.ts ***!
  \**************************************************************************/
/*! exports provided: TYPE_WORKLOAD, TYPE_CONNECTS_TO, TYPE_AGGREGATE_EDGE, TYPE_SERVICE_BINDING, TYPE_APPLICATION_GROUP, TYPE_TRAFFIC_CONNECTOR, LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY, DEFAULT_NODE_PAD, DEFAULT_GROUP_PAD, NODE_WIDTH, NODE_HEIGHT, NODE_PADDING, GROUP_WIDTH, GROUP_HEIGHT, GROUP_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_WORKLOAD", function() { return TYPE_WORKLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CONNECTS_TO", function() { return TYPE_CONNECTS_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_AGGREGATE_EDGE", function() { return TYPE_AGGREGATE_EDGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SERVICE_BINDING", function() { return TYPE_SERVICE_BINDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_APPLICATION_GROUP", function() { return TYPE_APPLICATION_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRAFFIC_CONNECTOR", function() { return TYPE_TRAFFIC_CONNECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY", function() { return LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NODE_PAD", function() { return DEFAULT_NODE_PAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_PAD", function() { return DEFAULT_GROUP_PAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_WIDTH", function() { return NODE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_HEIGHT", function() { return NODE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_PADDING", function() { return NODE_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_WIDTH", function() { return GROUP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_HEIGHT", function() { return GROUP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP_PADDING", function() { return GROUP_PADDING; });
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");

const TYPE_WORKLOAD = 'workload';
const TYPE_CONNECTS_TO = 'connects-to';
const TYPE_AGGREGATE_EDGE = 'aggregate-edge';
const TYPE_SERVICE_BINDING = 'service-binding';
const TYPE_APPLICATION_GROUP = 'part-of';
const TYPE_TRAFFIC_CONNECTOR = 'traffic-connector';
const LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY = `${_console_shared__WEBPACK_IMPORTED_MODULE_0__["STORAGE_PREFIX"]}/last-topology-view`;
const DEFAULT_NODE_PAD = 20;
const DEFAULT_GROUP_PAD = 40;
const NODE_WIDTH = 104;
const NODE_HEIGHT = 104;
const NODE_PADDING = [0, DEFAULT_NODE_PAD];
const GROUP_WIDTH = 300;
const GROUP_HEIGHT = 180;
const GROUP_PADDING = [DEFAULT_GROUP_PAD];


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/createConnection.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/createConnection.tsx ***!
  \**************************************************************************************/
/*! exports provided: createConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return createConnection; });
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");

const createConnection = (sourceNode, targetNode, replaceTargetNode = null, serviceBindingFlag = false) => {
    return Object(_topology_utils__WEBPACK_IMPORTED_MODULE_0__["createTopologyResourceConnection"])(sourceNode.getData(), targetNode.getData(), replaceTargetNode ? replaceTargetNode.getData() : null, serviceBindingFlag);
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/AggregateEdge.scss":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/AggregateEdge.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/AggregateEdge.tsx":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/AggregateEdge.tsx ***!
  \*****************************************************************************************/
/*! exports provided: AggregateEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregateEdge", function() { return AggregateEdge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _AggregateEdge_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AggregateEdge.scss */ "./packages/dev-console/src/components/topology/components/edges/AggregateEdge.scss");
/* harmony import */ var _AggregateEdge_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AggregateEdge_scss__WEBPACK_IMPORTED_MODULE_3__);




const ObservedAggregateEdge = ({ element }) => {
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    const startPoint = element.getStartPoint();
    const endPoint = element.getEndPoint();
    const { bidirectional } = element.getData();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["Layer"], { id: hover ? 'top' : undefined },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: hoverRef, "data-test-id": "edge-handler", className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-base-edge odc-aggregate-edge', {
                'is-hover': hover,
            }) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y, strokeWidth: 10, stroke: "transparent" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { className: "odc-base-edge__link", x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y }),
            !bidirectional &&
                (!element.getSource().isCollapsed() || !element.getTarget().isCollapsed()) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["EdgeConnectorArrow"], { edge: element })))));
};
const AggregateEdge = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(ObservedAggregateEdge);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.scss":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/BaseEdge.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/BaseEdge.tsx ***!
  \************************************************************************************/
/*! exports provided: BaseEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEdge", function() { return BaseEdge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _BaseEdge_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseEdge.scss */ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.scss");
/* harmony import */ var _BaseEdge_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_BaseEdge_scss__WEBPACK_IMPORTED_MODULE_6__);







const ObservedBaseEdge = ({ element, dragging, onShowRemoveConnector, onHideRemoveConnector, children, className, }) => {
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useHover"])();
    const [selected, onSelect] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["useSelection"])(false, true);
    const startPoint = element.getStartPoint();
    const endPoint = element.getEndPoint();
    const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_5__["getTopologyResourceObject"])(element.getSource().getData());
    const resourceModel = resourceObj && Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(resourceObj));
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
        group: resourceModel === null || resourceModel === void 0 ? void 0 : resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel === null || resourceModel === void 0 ? void 0 : resourceModel.plural,
        name: resourceObj === null || resourceObj === void 0 ? void 0 : resourceObj.metadata.name,
        namespace: resourceObj === null || resourceObj === void 0 ? void 0 : resourceObj.metadata.namespace,
    });
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
        if (editAccess) {
            if (hover && !dragging) {
                onShowRemoveConnector && onShowRemoveConnector();
            }
            else {
                onHideRemoveConnector && onHideRemoveConnector();
            }
        }
    }, [hover, dragging, onShowRemoveConnector, onHideRemoveConnector, editAccess]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_4__["Layer"], { id: dragging || hover ? 'top' : undefined },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: hoverRef, "data-test-id": "edge-handler", className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, 'odc-base-edge', {
                'is-dragging': dragging,
                'is-hover': hover,
                'is-selected': selected,
            }), onClick: onSelect },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y, strokeWidth: 10, stroke: "transparent" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { className: "odc-base-edge__link", x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y }),
            children)));
};
const BaseEdge = Object(_console_topology__WEBPACK_IMPORTED_MODULE_4__["observer"])(ObservedBaseEdge);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/ConnectsTo.scss":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/ConnectsTo.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/ConnectsTo.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/ConnectsTo.tsx ***!
  \**************************************************************************************/
/*! exports provided: ConnectsTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectsTo", function() { return ConnectsTo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _BaseEdge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseEdge */ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.tsx");
/* harmony import */ var _ConnectsTo_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConnectsTo.scss */ "./packages/dev-console/src/components/topology/components/edges/ConnectsTo.scss");
/* harmony import */ var _ConnectsTo_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ConnectsTo_scss__WEBPACK_IMPORTED_MODULE_7__);
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








const ObservedConnectsTo = (_a) => {
    var { element, targetDragRef, children } = _a, others = __rest(_a, ["element", "targetDragRef", "children"]);
    const childEdges = element.getChildren();
    const sourceData = (childEdges === null || childEdges === void 0 ? void 0 : childEdges.length) > 0
        ? childEdges[0].getSource().getData()
        : element.getSource().getData();
    const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_5__["getTopologyResourceObject"])(sourceData);
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resourceObj));
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel.plural,
        name: resourceObj.metadata.name,
        namespace: resourceObj.metadata.namespace,
    });
    const edgeClasses = classnames__WEBPACK_IMPORTED_MODULE_1__('odc-connects-to', { 'odc-m-editable': editAccess });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseEdge__WEBPACK_IMPORTED_MODULE_6__["BaseEdge"], Object.assign({ className: edgeClasses, element: element }, others),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["EdgeConnectorArrow"], { dragRef: editAccess ? targetDragRef : undefined, edge: element }),
        children));
};
const ConnectsTo = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(ObservedConnectsTo);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/CreateConnector.scss":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/CreateConnector.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/CreateConnector.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/CreateConnector.tsx ***!
  \*******************************************************************************************/
/*! exports provided: CreateConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateConnector", function() { return CreateConnector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _CreateConnector_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateConnector.scss */ "./packages/dev-console/src/components/topology/components/edges/CreateConnector.scss");
/* harmony import */ var _CreateConnector_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CreateConnector_scss__WEBPACK_IMPORTED_MODULE_3__);




const CreateConnector = ({ startPoint, endPoint, dragging, hints, }) => {
    const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const unsetHandle = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        setHover(false);
        clearTimeout(unsetHandle.current);
        unsetHandle.current = window.setTimeout(() => {
            setHover(dragging);
        }, 2000);
        return () => {
            clearTimeout(unsetHandle.current);
        };
    }, [endPoint.x, endPoint.y, dragging]);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1__('odc-create-connector', { 'is-dragging': dragging });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_2__["DefaultCreateConnector"], { className: classes, startPoint: startPoint, endPoint: endPoint, dragging: dragging, hints: hints, tipContents: hover && dragging ? 'Add Resources' : null }));
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/ServiceBinding.scss":
/*!*******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/ServiceBinding.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/ServiceBinding.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/ServiceBinding.tsx ***!
  \******************************************************************************************/
/*! exports provided: ServiceBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBinding", function() { return ServiceBinding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _BaseEdge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseEdge */ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.tsx");
/* harmony import */ var _ServiceBinding_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceBinding.scss */ "./packages/dev-console/src/components/topology/components/edges/ServiceBinding.scss");
/* harmony import */ var _ServiceBinding_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ServiceBinding_scss__WEBPACK_IMPORTED_MODULE_3__);
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




const ObservedServiceBinding = (_a) => {
    var { element, targetDragRef, children } = _a, others = __rest(_a, ["element", "targetDragRef", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseEdge__WEBPACK_IMPORTED_MODULE_2__["BaseEdge"], Object.assign({ element: element }, others, { className: "odc-service-binding" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["EdgeConnectorArrow"], { dragRef: targetDragRef, edge: element }),
        children));
};
const ServiceBinding = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(ObservedServiceBinding);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/TrafficConnector.scss":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/TrafficConnector.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/TrafficConnector.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/TrafficConnector.tsx ***!
  \********************************************************************************************/
/*! exports provided: TrafficConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficConnector", function() { return TrafficConnector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _BaseEdge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseEdge */ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.tsx");
/* harmony import */ var _TrafficConnector_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrafficConnector.scss */ "./packages/dev-console/src/components/topology/components/edges/TrafficConnector.scss");
/* harmony import */ var _TrafficConnector_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TrafficConnector_scss__WEBPACK_IMPORTED_MODULE_3__);




const TrafficConnector = ({ element }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseEdge__WEBPACK_IMPORTED_MODULE_2__["BaseEdge"], { element: element, className: "odc-traffic-connector" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["EdgeConnectorArrow"], { edge: element })));



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/edges/index.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/edges/index.ts ***!
  \********************************************************************************/
/*! exports provided: BaseEdge, AggregateEdge, ConnectsTo, CreateConnector, ServiceBinding, TrafficConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseEdge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseEdge */ "./packages/dev-console/src/components/topology/components/edges/BaseEdge.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEdge", function() { return _BaseEdge__WEBPACK_IMPORTED_MODULE_0__["BaseEdge"]; });

/* harmony import */ var _AggregateEdge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AggregateEdge */ "./packages/dev-console/src/components/topology/components/edges/AggregateEdge.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AggregateEdge", function() { return _AggregateEdge__WEBPACK_IMPORTED_MODULE_1__["AggregateEdge"]; });

/* harmony import */ var _ConnectsTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectsTo */ "./packages/dev-console/src/components/topology/components/edges/ConnectsTo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectsTo", function() { return _ConnectsTo__WEBPACK_IMPORTED_MODULE_2__["ConnectsTo"]; });

/* harmony import */ var _CreateConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateConnector */ "./packages/dev-console/src/components/topology/components/edges/CreateConnector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateConnector", function() { return _CreateConnector__WEBPACK_IMPORTED_MODULE_3__["CreateConnector"]; });

/* harmony import */ var _ServiceBinding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceBinding */ "./packages/dev-console/src/components/topology/components/edges/ServiceBinding.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceBinding", function() { return _ServiceBinding__WEBPACK_IMPORTED_MODULE_4__["ServiceBinding"]; });

/* harmony import */ var _TrafficConnector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrafficConnector */ "./packages/dev-console/src/components/topology/components/edges/TrafficConnector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrafficConnector", function() { return _TrafficConnector__WEBPACK_IMPORTED_MODULE_5__["TrafficConnector"]; });









/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/Application.scss":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/Application.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/Application.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/Application.tsx ***!
  \****************************************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _topology_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../topology-types */ "./packages/dev-console/src/components/topology/topology-types.ts");
/* harmony import */ var _RegroupHint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RegroupHint */ "./packages/dev-console/src/components/topology/components/RegroupHint.tsx");
/* harmony import */ var _ApplicationNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApplicationNode */ "./packages/dev-console/src/components/topology/components/groups/ApplicationNode.tsx");
/* harmony import */ var _ApplicationGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationGroup */ "./packages/dev-console/src/components/topology/components/groups/ApplicationGroup.tsx");
/* harmony import */ var _Application_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Application.scss */ "./packages/dev-console/src/components/topology/components/groups/Application.scss");
/* harmony import */ var _Application_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Application_scss__WEBPACK_IMPORTED_MODULE_6__);







const ObservedApplication = ({ element, selected, onSelect, dndDropRef, droppable, canDrop, dropTarget, dragRegroupable, onContextMenu, contextMenuOpen, dragging, }) => {
    const needsHintRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const needsHint = dropTarget && !canDrop && dragRegroupable;
        if (needsHint !== needsHintRef.current) {
            needsHintRef.current = needsHint;
            element
                .getController()
                .fireEvent(_topology_types__WEBPACK_IMPORTED_MODULE_2__["SHOW_GROUPING_HINT_EVENT"], element, needsHint ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RegroupHint__WEBPACK_IMPORTED_MODULE_3__["RegroupHint"], null) : null);
        }
    }, [dropTarget, canDrop, element, dragRegroupable]);
    if (element.isCollapsed()) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationNode__WEBPACK_IMPORTED_MODULE_4__["default"], { element: element, selected: selected, onSelect: onSelect, dndDropRef: dndDropRef, canDrop: canDrop, dropTarget: dropTarget, onContextMenu: onContextMenu, contextMenuOpen: contextMenuOpen, dragging: dragging }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ApplicationGroup__WEBPACK_IMPORTED_MODULE_5__["default"], { element: element, selected: selected, onSelect: onSelect, dndDropRef: dndDropRef, canDrop: canDrop, dropTarget: dropTarget, droppable: droppable, onContextMenu: onContextMenu, contextMenuOpen: contextMenuOpen, dragging: dragging }));
};
const Application = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["observer"])(ObservedApplication);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/ApplicationGroup.tsx":
/*!*********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/ApplicationGroup.tsx ***!
  \*********************************************************************************************/
/*! exports provided: computeLabelLocation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLabelLocation", function() { return computeLabelLocation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-polygon */ "./node_modules/d3-polygon/src/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
/* harmony import */ var _svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _NodeShadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");








// Return the point whose Y is the largest value.
// If multiple points are found, compute the center X between them
// export for testing only
function computeLabelLocation(points) {
    let lowPoints;
    const threshold = 5;
    lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](points, (p) => {
        const delta = !lowPoints ? Infinity : Math.round(p[1]) - Math.round(lowPoints[0][1]);
        if (delta > threshold) {
            lowPoints = [p];
        }
        else if (Math.abs(delta) <= threshold) {
            lowPoints.push(p);
        }
    });
    return [
        (lodash__WEBPACK_IMPORTED_MODULE_2__["minBy"](lowPoints, (p) => p[0])[0] + lodash__WEBPACK_IMPORTED_MODULE_2__["maxBy"](lowPoints, (p) => p[0])[0]) / 2,
        lowPoints[0][1],
        // use the max size value
        lodash__WEBPACK_IMPORTED_MODULE_2__["maxBy"](lowPoints, (p) => p[2])[2],
    ];
}
const ApplicationGroup = ({ element, selected, onSelect, dndDropRef, droppable, canDrop, dropTarget, onContextMenu, contextMenuOpen, dragging, }) => {
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useHover"])();
    const [labelHover, labelHoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useHover"])();
    const labelLocation = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const pathRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const dragNodeRef = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useDragNode"])()[1];
    const dragLabelRef = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useDragNode"])()[1];
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useCombineRefs"])(hoverRef, dragNodeRef);
    const [filtered] = Object(_filters__WEBPACK_IMPORTED_MODULE_5__["useSearchFilter"])(element.getLabel());
    const displayFilters = Object(_filters__WEBPACK_IMPORTED_MODULE_5__["useDisplayFilters"])();
    const showLabels = displayFilters.showLabels || hover;
    // cast to number and coerce
    const padding = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["maxPadding"])(element.getStyle().padding);
    const hullPadding = (point) => (point[2] || 0) + padding;
    if (!droppable || !pathRef.current || !labelLocation.current) {
        const children = element.getNodes().filter((c) => c.isVisible());
        if (children.length === 0) {
            return null;
        }
        const points = [];
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](children, (c) => {
            if (c.getNodeShape() === _console_topology__WEBPACK_IMPORTED_MODULE_3__["NodeShape"].circle) {
                const bounds = c.getBounds();
                const { width, height } = bounds;
                const { x, y } = bounds.getCenter();
                const radius = Math.max(width, height) / 2;
                points.push([x, y, radius]);
            }
            else {
                // add all 4 corners
                const { width, height, x, y } = c.getBounds();
                points.push([x, y, 0]);
                points.push([x + width, y, 0]);
                points.push([x, y + height, 0]);
                points.push([x + width, y + height, 0]);
            }
        });
        const hullPoints = points.length > 2 ? Object(d3_polygon__WEBPACK_IMPORTED_MODULE_1__["polygonHull"])(points) : points;
        if (!hullPoints) {
            return null;
        }
        // change the box only when not dragging
        pathRef.current = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["hullPath"])(hullPoints, hullPadding);
        // Compute the location of the group label.
        labelLocation.current = computeLabelLocation(hullPoints);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: labelHoverRef, onContextMenu: onContextMenu, onClick: onSelect, className: classnames__WEBPACK_IMPORTED_MODULE_4__('odc-application-group', {
            'is-dragging': dragging,
            'is-highlight': canDrop,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeShadows__WEBPACK_IMPORTED_MODULE_7__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_3__["Layer"], { id: "groups" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: refs, onContextMenu: onContextMenu, onClick: onSelect, className: classnames__WEBPACK_IMPORTED_MODULE_4__('odc-application-group', {
                    'is-dragging': dragging,
                    'is-highlight': canDrop,
                    'is-selected': selected,
                    'is-dropTarget': canDrop && dropTarget,
                    'is-filtered': filtered,
                }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { ref: dndDropRef, className: "odc-application-group__bg", filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["createSvgIdUrl"])(hover || labelHover || dragging || contextMenuOpen || dropTarget
                        ? _NodeShadows__WEBPACK_IMPORTED_MODULE_7__["NODE_SHADOW_FILTER_ID_HOVER"]
                        : _NodeShadows__WEBPACK_IMPORTED_MODULE_7__["NODE_SHADOW_FILTER_ID"]), d: pathRef.current }))),
        showLabels && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "odc-application-group__label", kind: "application", x: labelLocation.current[0], y: labelLocation.current[1] + hullPadding(labelLocation.current) + 24, paddingX: 8, paddingY: 5, dragRef: dragLabelRef }, element.getLabel()))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["observer"])(ApplicationGroup));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/ApplicationNode.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/ApplicationNode.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _filters_useSearchFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../filters/useSearchFilter */ "./packages/dev-console/src/components/topology/filters/useSearchFilter.ts");
/* harmony import */ var _NodeShadows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _GroupNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupNode */ "./packages/dev-console/src/components/topology/components/groups/GroupNode.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models */ "./packages/dev-console/src/models/index.ts");









const ApplicationNode = ({ element, selected, onSelect, dndDropRef, canDrop, dropTarget, onContextMenu, contextMenuOpen, dragging, }) => {
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useAnchor"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => new _console_topology__WEBPACK_IMPORTED_MODULE_3__["RectAnchor"](node, 1.5), []));
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useHover"])();
    const dragNodeRef = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useDragNode"])()[1];
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useCombineRefs"])(dragNodeRef, hoverRef);
    const [filtered] = Object(_filters_useSearchFilter__WEBPACK_IMPORTED_MODULE_4__["useSearchFilter"])(element.getLabel());
    const { width, height } = element.getDimensions();
    const resourcesData = {};
    lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](element.getData().groupResources, (res) => {
        const a = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_6__["getTopologyResourceObject"])(res);
        resourcesData[a.kind] = [...(resourcesData[a.kind] ? resourcesData[a.kind] : []), a];
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { ref: refs, onContextMenu: onContextMenu, onClick: onSelect, className: classnames__WEBPACK_IMPORTED_MODULE_2__('odc-application-group', {
            'is-highlight': canDrop,
            'is-dragging': dragging,
            'is-selected': selected,
            'is-dropTarget': canDrop && dropTarget,
            'is-filtered': filtered,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeShadows__WEBPACK_IMPORTED_MODULE_5__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { ref: dndDropRef, filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["createSvgIdUrl"])(hover || dragging || contextMenuOpen || dropTarget
                ? _NodeShadows__WEBPACK_IMPORTED_MODULE_5__["NODE_SHADOW_FILTER_ID_HOVER"]
                : _NodeShadows__WEBPACK_IMPORTED_MODULE_5__["NODE_SHADOW_FILTER_ID"]), className: "odc-application-group__bg", x: 0, y: 0, width: width, height: height, rx: "5", ry: "5" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_GroupNode__WEBPACK_IMPORTED_MODULE_7__["GroupNode"], { element: element, kind: _models__WEBPACK_IMPORTED_MODULE_8__["ApplicationModel"].kind, groupResources: element.getData().groupResources })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["observer"])(ApplicationNode));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/GroupNode.scss":
/*!***************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/GroupNode.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/GroupNode.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/GroupNode.tsx ***!
  \**************************************************************************************/
/*! exports provided: GroupNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupNode", function() { return GroupNode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../const */ "./packages/dev-console/src/const.ts");
/* harmony import */ var _svg_SvgCircledIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../svg/SvgCircledIcon */ "./packages/dev-console/src/components/svg/SvgCircledIcon.tsx");
/* harmony import */ var _svg_SvgResourceIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../svg/SvgResourceIcon */ "./packages/dev-console/src/components/svg/SvgResourceIcon.tsx");
/* harmony import */ var _ResourceKindsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResourceKindsInfo */ "./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.tsx");
/* harmony import */ var _GroupNode_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GroupNode.scss */ "./packages/dev-console/src/components/topology/components/groups/GroupNode.scss");
/* harmony import */ var _GroupNode_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_GroupNode_scss__WEBPACK_IMPORTED_MODULE_8__);









const TOP_MARGIN = 20;
const LEFT_MARGIN = 20;
const TEXT_MARGIN = 10;
const truncateOptions = {
    length: _const__WEBPACK_IMPORTED_MODULE_4__["RESOURCE_NAME_TRUNCATE_LENGTH"],
};
const GroupNode = ({ element, groupResources, children, kind, emptyValue, typeIconClass, }) => {
    const [textHover, textHoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useHover"])();
    const [iconSize, iconRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["useSize"])([kind]);
    const iconWidth = iconSize ? iconSize.width : 0;
    const iconHeight = iconSize ? iconSize.height : 0;
    const title = element.getLabel();
    const { width, height } = element.getDimensions();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        typeIconClass && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgCircledIcon__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "odc-group-node__type-icon", x: 10, y: -10, width: 20, height: 20, iconClass: typeIconClass })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgResourceIcon__WEBPACK_IMPORTED_MODULE_6__["SvgResourceIcon"], { ref: iconRef, x: LEFT_MARGIN, y: TOP_MARGIN - 2, kind: kind, leftJustified: true }),
        title && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { content: title, position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TooltipPosition"].top, trigger: "manual", isVisible: textHover && Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["shouldTruncate"])(title) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", { ref: textHoverRef, className: "odc-group-node__title", x: LEFT_MARGIN + iconWidth + TEXT_MARGIN, y: TOP_MARGIN + iconHeight, textAnchor: "start", dy: "-0.25em" }, Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["truncateMiddle"])(title, truncateOptions)))),
        (children || groupResources || emptyValue) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(${LEFT_MARGIN}, ${TOP_MARGIN + iconHeight})` },
            (groupResources || emptyValue) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ResourceKindsInfo__WEBPACK_IMPORTED_MODULE_7__["ResourceKindsInfo"], { groupResources: groupResources, emptyValue: emptyValue, width: width - LEFT_MARGIN, height: height - TOP_MARGIN - iconHeight })),
            children))));
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.scss":
/*!***********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.tsx":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.tsx ***!
  \**********************************************************************************************/
/*! exports provided: ResourceKindsInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceKindsInfo", function() { return ResourceKindsInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _ResourceKindsInfo_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResourceKindsInfo.scss */ "./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.scss");
/* harmony import */ var _ResourceKindsInfo_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ResourceKindsInfo_scss__WEBPACK_IMPORTED_MODULE_5__);






const ResourceKindsInfo = ({ groupResources, emptyValue, width, height, }) => {
    const resourcesData = {};
    lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](groupResources, (res) => {
        const a = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(res);
        const kindObj = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(a));
        const key = kindObj.abbr || a.kind;
        resourcesData[key] = [...(resourcesData[key] ? resourcesData[key] : []), a];
    });
    const resourceTypes = lodash__WEBPACK_IMPORTED_MODULE_1__["keys"](resourcesData);
    if (!resourceTypes.length) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: width, height: height },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-resource-kinds-info" }, emptyValue)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: width, height: height },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-resource-kinds-info" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "odc-resource-kinds-info__table" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", { className: "odc-resource-kinds-info__body" }, resourceTypes.map((key) => {
                    const kindObj = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(resourcesData[key][0]));
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: key, className: "odc-resource-kinds-info__row" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "odc-resource-kinds-info__count" }, resourcesData[key].length),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "odc-resource-kinds-info__resource-icon" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceIcon"], { kind: kindObj.crd ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceForModel"])(kindObj) : kindObj.kind })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: "odc-resource-kinds-info__kind" }, resourcesData[key].length > 1 ? kindObj.labelPlural : kindObj.label)));
                }))))));
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/groups/index.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/groups/index.ts ***!
  \*********************************************************************************/
/*! exports provided: GroupNode, Application, ResourceKindsInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupNode */ "./packages/dev-console/src/components/topology/components/groups/GroupNode.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupNode", function() { return _GroupNode__WEBPACK_IMPORTED_MODULE_0__["GroupNode"]; });

/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application */ "./packages/dev-console/src/components/topology/components/groups/Application.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _Application__WEBPACK_IMPORTED_MODULE_1__["Application"]; });

/* harmony import */ var _ResourceKindsInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceKindsInfo */ "./packages/dev-console/src/components/topology/components/groups/ResourceKindsInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceKindsInfo", function() { return _ResourceKindsInfo__WEBPACK_IMPORTED_MODULE_2__["ResourceKindsInfo"]; });






/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/index.ts":
/*!**************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/index.ts ***!
  \**************************************************************************/
/*! exports provided: TYPE_WORKLOAD, TYPE_CONNECTS_TO, TYPE_AGGREGATE_EDGE, TYPE_SERVICE_BINDING, TYPE_APPLICATION_GROUP, TYPE_TRAFFIC_CONNECTOR, LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY, DEFAULT_NODE_PAD, DEFAULT_GROUP_PAD, NODE_WIDTH, NODE_HEIGHT, NODE_PADDING, GROUP_WIDTH, GROUP_HEIGHT, GROUP_PADDING, AbstractSBRComponentFactory, nodesEdgeIsDragging, nodeDragSourceSpec, nodeDropTargetSpec, graphDropTargetSpec, applicationGroupDropTargetSpec, edgeDragSourceSpec, noDropTargetSpec, createConnectorCallback, removeConnectorCallback, REGROUP_OPERATION, MOVE_CONNECTOR_DROP_TYPE, NODE_DRAG_TYPE, EDGE_DRAG_TYPE, withNoDrop, withContextMenu, ComponentFactory, NODE_SHADOW_FILTER_ID, NODE_SHADOW_FILTER_ID_HOVER, NodeShadows, createMenuItems, workloadContextMenu, noRegroupWorkloadContextMenu, groupContextMenu, nodeContextMenu, graphContextMenu, regroupContextMenu, regroupGroupContextMenu, withEditReviewAccess, moveNodeToGroup, createConnection, removeConnection, BaseNode, WorkloadNode, Decorator, BaseEdge, AggregateEdge, ConnectsTo, CreateConnector, ServiceBinding, TrafficConnector, GroupNode, Application, ResourceKindsInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_WORKLOAD", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TYPE_WORKLOAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_CONNECTS_TO", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TYPE_CONNECTS_TO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_AGGREGATE_EDGE", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TYPE_AGGREGATE_EDGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_SERVICE_BINDING", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TYPE_SERVICE_BINDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_APPLICATION_GROUP", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TYPE_APPLICATION_GROUP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRAFFIC_CONNECTOR", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TYPE_TRAFFIC_CONNECTOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NODE_PAD", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_NODE_PAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_PAD", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_GROUP_PAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_WIDTH", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["NODE_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_HEIGHT", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["NODE_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_PADDING", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["NODE_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUP_WIDTH", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["GROUP_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUP_HEIGHT", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["GROUP_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUP_PADDING", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["GROUP_PADDING"]; });

/* harmony import */ var _AbstractSBRComponentFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractSBRComponentFactory */ "./packages/dev-console/src/components/topology/components/AbstractSBRComponentFactory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractSBRComponentFactory", function() { return _AbstractSBRComponentFactory__WEBPACK_IMPORTED_MODULE_1__["AbstractSBRComponentFactory"]; });

/* harmony import */ var _componentUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentUtils */ "./packages/dev-console/src/components/topology/components/componentUtils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodesEdgeIsDragging", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["nodesEdgeIsDragging"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeDragSourceSpec", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["nodeDragSourceSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeDropTargetSpec", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["nodeDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphDropTargetSpec", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["graphDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applicationGroupDropTargetSpec", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["applicationGroupDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edgeDragSourceSpec", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["edgeDragSourceSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noDropTargetSpec", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["noDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConnectorCallback", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["createConnectorCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnectorCallback", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["removeConnectorCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGROUP_OPERATION", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["REGROUP_OPERATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOVE_CONNECTOR_DROP_TYPE", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["MOVE_CONNECTOR_DROP_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_DRAG_TYPE", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["NODE_DRAG_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDGE_DRAG_TYPE", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["EDGE_DRAG_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withNoDrop", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["withNoDrop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withContextMenu", function() { return _componentUtils__WEBPACK_IMPORTED_MODULE_2__["withContextMenu"]; });

/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentFactory */ "./packages/dev-console/src/components/topology/components/componentFactory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactory", function() { return _componentFactory__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"]; });

/* harmony import */ var _NodeShadows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_SHADOW_FILTER_ID", function() { return _NodeShadows__WEBPACK_IMPORTED_MODULE_4__["NODE_SHADOW_FILTER_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_SHADOW_FILTER_ID_HOVER", function() { return _NodeShadows__WEBPACK_IMPORTED_MODULE_4__["NODE_SHADOW_FILTER_ID_HOVER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeShadows", function() { return _NodeShadows__WEBPACK_IMPORTED_MODULE_4__["NodeShadows"]; });

/* harmony import */ var _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodeContextMenu */ "./packages/dev-console/src/components/topology/components/nodeContextMenu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMenuItems", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["createMenuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "workloadContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["workloadContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noRegroupWorkloadContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["noRegroupWorkloadContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["groupContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["nodeContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["graphContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regroupContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["regroupContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regroupGroupContextMenu", function() { return _nodeContextMenu__WEBPACK_IMPORTED_MODULE_5__["regroupGroupContextMenu"]; });

/* harmony import */ var _withEditReviewAccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withEditReviewAccess */ "./packages/dev-console/src/components/topology/components/withEditReviewAccess.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEditReviewAccess", function() { return _withEditReviewAccess__WEBPACK_IMPORTED_MODULE_6__["withEditReviewAccess"]; });

/* harmony import */ var _moveNodeToGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moveNodeToGroup */ "./packages/dev-console/src/components/topology/components/moveNodeToGroup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveNodeToGroup", function() { return _moveNodeToGroup__WEBPACK_IMPORTED_MODULE_7__["moveNodeToGroup"]; });

/* harmony import */ var _createConnection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createConnection */ "./packages/dev-console/src/components/topology/components/createConnection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return _createConnection__WEBPACK_IMPORTED_MODULE_8__["createConnection"]; });

/* harmony import */ var _removeConnection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./removeConnection */ "./packages/dev-console/src/components/topology/components/removeConnection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnection", function() { return _removeConnection__WEBPACK_IMPORTED_MODULE_9__["removeConnection"]; });

/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes */ "./packages/dev-console/src/components/topology/components/nodes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _nodes__WEBPACK_IMPORTED_MODULE_10__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkloadNode", function() { return _nodes__WEBPACK_IMPORTED_MODULE_10__["WorkloadNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decorator", function() { return _nodes__WEBPACK_IMPORTED_MODULE_10__["Decorator"]; });

/* harmony import */ var _edges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edges */ "./packages/dev-console/src/components/topology/components/edges/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEdge", function() { return _edges__WEBPACK_IMPORTED_MODULE_11__["BaseEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AggregateEdge", function() { return _edges__WEBPACK_IMPORTED_MODULE_11__["AggregateEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectsTo", function() { return _edges__WEBPACK_IMPORTED_MODULE_11__["ConnectsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateConnector", function() { return _edges__WEBPACK_IMPORTED_MODULE_11__["CreateConnector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceBinding", function() { return _edges__WEBPACK_IMPORTED_MODULE_11__["ServiceBinding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrafficConnector", function() { return _edges__WEBPACK_IMPORTED_MODULE_11__["TrafficConnector"]; });

/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./groups */ "./packages/dev-console/src/components/topology/components/groups/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupNode", function() { return _groups__WEBPACK_IMPORTED_MODULE_12__["GroupNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _groups__WEBPACK_IMPORTED_MODULE_12__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceKindsInfo", function() { return _groups__WEBPACK_IMPORTED_MODULE_12__["ResourceKindsInfo"]; });
















/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/moveNodeToGroup.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/moveNodeToGroup.tsx ***!
  \*************************************************************************************/
/*! exports provided: moveNodeToGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveNodeToGroup", function() { return moveNodeToGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");



const moveNodeToGroup = (node, targetGroup) => {
    const sourceGroup = node.getParent() !== node.getGraph() ? node.getParent() : undefined;
    if (sourceGroup === targetGroup) {
        return Promise.reject();
    }
    if (sourceGroup) {
        const title = targetGroup ? 'Move Component Node' : 'Remove Component Node from Application';
        const message = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "Are you sure you want to ",
            targetGroup ? 'move' : 'remove',
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, node.getLabel()),
            " from ",
            sourceGroup.getLabel(),
            targetGroup ? ` to ${targetGroup.getLabel()}` : '',
            "?"));
        const btnText = targetGroup ? 'Move' : 'Remove';
        return new Promise((resolve, reject) => {
            Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["confirmModal"])({
                title,
                message,
                btnText,
                close: () => {
                    reject();
                },
                cancel: () => {
                    reject();
                },
                executeFn: () => {
                    return Object(_topology_utils__WEBPACK_IMPORTED_MODULE_2__["updateTopologyResourceApplication"])(node.getData(), targetGroup ? targetGroup.getLabel() : null)
                        .then(resolve)
                        .catch((err) => {
                        const error = err.message;
                        Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["errorModal"])({ error });
                        reject(err);
                    });
                },
            });
        });
    }
    return Object(_topology_utils__WEBPACK_IMPORTED_MODULE_2__["updateTopologyResourceApplication"])(node.getData(), targetGroup.getLabel()).catch((err) => {
        const error = err.message;
        Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_1__["errorModal"])({ error });
    });
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodeContextMenu.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodeContextMenu.tsx ***!
  \*************************************************************************************/
/*! exports provided: createMenuItems, workloadContextMenu, noRegroupWorkloadContextMenu, groupContextMenu, nodeContextMenu, graphContextMenu, regroupContextMenu, regroupGroupContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuItems", function() { return createMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workloadContextMenu", function() { return workloadContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noRegroupWorkloadContextMenu", function() { return noRegroupWorkloadContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupContextMenu", function() { return groupContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeContextMenu", function() { return nodeContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphContextMenu", function() { return graphContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regroupContextMenu", function() { return regroupContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regroupGroupContextMenu", function() { return regroupGroupContextMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _actions_workloadActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/workloadActions */ "./packages/dev-console/src/components/topology/actions/workloadActions.ts");
/* harmony import */ var _actions_groupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/groupActions */ "./packages/dev-console/src/components/topology/actions/groupActions.ts");
/* harmony import */ var _actions_nodeActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/nodeActions */ "./packages/dev-console/src/components/topology/actions/nodeActions.ts");
/* harmony import */ var _actions_graphActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/graphActions */ "./packages/dev-console/src/components/topology/actions/graphActions.ts");
/* harmony import */ var _actions_regroupActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/regroupActions */ "./packages/dev-console/src/components/topology/actions/regroupActions.ts");








const onKebabOptionClick = (option) => {
    if (option.callback) {
        option.callback();
    }
    if (option.href) {
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["history"].push(option.href);
    }
};
const createMenuItems = (actions) => actions.map((option) => Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["isKebabSubMenu"])(option) ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["ContextSubMenuItem"], { label: option.label, key: option.label }, createMenuItems(option.children))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_topology__WEBPACK_IMPORTED_MODULE_1__["ContextMenuItem"], { key: option.label, component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["KebabItem"], { option: option, onClick: () => onKebabOptionClick(option) }) })));
const workloadContextMenu = (element) => createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_workloadActions__WEBPACK_IMPORTED_MODULE_3__["workloadActions"])(element.getData())));
const noRegroupWorkloadContextMenu = (element) => createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_workloadActions__WEBPACK_IMPORTED_MODULE_3__["workloadActions"])(element.getData(), false)));
const groupContextMenu = (element, connectorSource) => {
    const applicationData = {
        id: element.getId(),
        name: element.getLabel(),
        resources: element.getData().groupResources,
    };
    const graphData = element.getGraph().getData();
    return createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_groupActions__WEBPACK_IMPORTED_MODULE_4__["groupActions"])(graphData, applicationData, connectorSource)));
};
const nodeContextMenu = (element) => createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_nodeActions__WEBPACK_IMPORTED_MODULE_5__["nodeActions"])(element.getData())));
const graphContextMenu = (graph, connectorSource) => createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_graphActions__WEBPACK_IMPORTED_MODULE_6__["graphActions"])(graph.getData(), connectorSource)));
const regroupContextMenu = (element) => createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_regroupActions__WEBPACK_IMPORTED_MODULE_7__["regroupActions"])(element)));
const regroupGroupContextMenu = (element) => createMenuItems(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["kebabOptionsToMenu"])(Object(_actions_regroupActions__WEBPACK_IMPORTED_MODULE_7__["regroupActions"])(element, true)));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/BaseNode.scss":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/BaseNode.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/BaseNode.tsx":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/BaseNode.tsx ***!
  \************************************************************************************/
/*! exports provided: BaseNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return BaseNode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../svg/SvgBoxedText */ "./packages/dev-console/src/components/svg/SvgBoxedText.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
/* harmony import */ var _NodeShadows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NodeShadows */ "./packages/dev-console/src/components/topology/components/NodeShadows.tsx");
/* harmony import */ var _BaseNode_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BaseNode.scss */ "./packages/dev-console/src/components/topology/components/nodes/BaseNode.scss");
/* harmony import */ var _BaseNode_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_BaseNode_scss__WEBPACK_IMPORTED_MODULE_9__);










const ObservedBaseNode = ({ className, outerRadius, innerRadius, icon, kind, element, selected, onSelect, children, attachments, dragNodeRef, dndDropRef, canDrop, dragging, edgeDragging, dropTarget, onHideCreateConnector, onShowCreateConnector, onContextMenu, contextMenuOpen, }) => {
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useHover"])();
    Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useAnchor"])(_console_topology__WEBPACK_IMPORTED_MODULE_2__["EllipseAnchor"]);
    const { width, height } = element.getDimensions();
    const cx = width / 2;
    const cy = height / 2;
    const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_6__["getTopologyResourceObject"])(element.getData());
    const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_3__["referenceFor"])(resourceObj));
    const iconRadius = innerRadius * 0.9;
    const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["useAccessReview"])({
        group: resourceModel.apiGroup,
        verb: 'patch',
        resource: resourceModel.plural,
        name: resourceObj.metadata.name,
        namespace: resourceObj.metadata.namespace,
    });
    const [filtered] = Object(_filters__WEBPACK_IMPORTED_MODULE_7__["useSearchFilter"])(element.getLabel());
    const displayFilters = Object(_filters__WEBPACK_IMPORTED_MODULE_7__["useDisplayFilters"])();
    const showLabels = displayFilters.showLabels || hover;
    const refs = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["useCombineRefs"])(hoverRef, dragNodeRef);
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
        if (editAccess) {
            if (hover) {
                onShowCreateConnector && onShowCreateConnector();
            }
            else {
                onHideCreateConnector && onHideCreateConnector();
            }
        }
    }, [hover, onShowCreateConnector, onHideCreateConnector, editAccess]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('odc-base-node', className, {
            'is-hover': hover || contextMenuOpen,
            'is-highlight': canDrop,
            'is-dragging': dragging || edgeDragging,
            'is-dropTarget': canDrop && dropTarget,
            'is-filtered': filtered,
            'is-selected': selected,
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeShadows__WEBPACK_IMPORTED_MODULE_8__["NodeShadows"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { "data-test-id": "base-node-handler", onClick: onSelect, onContextMenu: editAccess ? onContextMenu : null, ref: refs },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { className: "odc-base-node__bg", ref: dndDropRef, cx: cx, cy: cy, r: outerRadius, filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["createSvgIdUrl"])(hover || dragging || edgeDragging || dropTarget || contextMenuOpen
                    ? _NodeShadows__WEBPACK_IMPORTED_MODULE_8__["NODE_SHADOW_FILTER_ID_HOVER"]
                    : _NodeShadows__WEBPACK_IMPORTED_MODULE_8__["NODE_SHADOW_FILTER_ID"]) }),
            icon && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", { x: cx - iconRadius, y: cy - iconRadius, width: iconRadius * 2, height: iconRadius * 2, xlinkHref: icon })),
            showLabels && (kind || element.getLabel()) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgBoxedText__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "odc-base-node__label", x: cx, y: cy + outerRadius + 24, paddingX: 8, paddingY: 4, kind: kind }, element.getLabel())),
            children),
        attachments));
};
const BaseNode = Object(_console_topology__WEBPACK_IMPORTED_MODULE_2__["observer"])(ObservedBaseNode);



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/CheIcon.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/CheIcon.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CheIcon = ({ style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { height: "1em", width: "1em", version: "1.1", viewBox: "0 0 47 57", style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { fillRule: "evenodd", stroke: "none", strokeWidth: "1", fill: "none" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M0.032227,30.88l-0.032227-17.087,23.853-13.793,23.796,13.784-14.691,8.51-9.062-5.109-23.864,13.695z", fill: "#fdb940" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M0,43.355l23.876,13.622,23.974-13.937v-16.902l-23.974,13.506-23.876-13.506v17.217z", fill: "#525c86" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (CheIcon);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/Decorator.scss":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/Decorator.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/Decorator.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/Decorator.tsx ***!
  \*************************************************************************************/
/*! exports provided: Decorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decorator", function() { return Decorator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _svg_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../svg/SvgDropShadowFilter */ "./packages/dev-console/src/components/svg/SvgDropShadowFilter.tsx");
/* harmony import */ var _Decorator_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decorator.scss */ "./packages/dev-console/src/components/topology/components/nodes/Decorator.scss");
/* harmony import */ var _Decorator_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Decorator_scss__WEBPACK_IMPORTED_MODULE_3__);




const FILTER_ID = 'DecoratorDropShadowFilterId';
const HOVER_FILTER_ID = 'DecoratorDropShadowHoverFilterId';
const Decorator = ({ x, y, radius, onClick, children, href, external, circleRef, }) => {
    const [hover, hoverRef] = Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["useHover"])();
    const decorator = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: "odc-decorator", onClick: (e) => {
            e.stopPropagation();
            onClick && onClick(e);
        }, ref: hoverRef },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_2__["default"], { id: FILTER_ID, stdDeviation: 1, floodOpacity: 0.5 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_svg_SvgDropShadowFilter__WEBPACK_IMPORTED_MODULE_2__["default"], { id: HOVER_FILTER_ID, dy: 3, stdDeviation: 5, floodOpacity: 0.5 }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { ref: circleRef, className: "odc-decorator__bg", cx: x, cy: y, r: radius, filter: Object(_console_topology__WEBPACK_IMPORTED_MODULE_1__["createSvgIdUrl"])(hover ? HOVER_FILTER_ID : FILTER_ID) }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(${x}, ${y})` }, children)));
    if (href) {
        return (
        /*
        // @ts-ignore */
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "odc-decorator__link", xlinkHref: href, target: external ? '_blank' : null }, decorator));
    }
    return decorator;
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/PodSet.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/PodSet.tsx ***!
  \**********************************************************************************/
/*! exports provided: podSetInnerRadius, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "podSetInnerRadius", function() { return podSetInnerRadius; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const calculateInnerPodStatusRadius = (outerPodStatusInnerRadius, outerPodStatusWidth) => {
    const innerPodStatusWidth = outerPodStatusWidth * 0.6;
    const spaceBwOuterAndInnerPodStatus = 3;
    const innerPodStatusOuterRadius = outerPodStatusInnerRadius - spaceBwOuterAndInnerPodStatus;
    const innerPodStatusInnerRadius = innerPodStatusOuterRadius - innerPodStatusWidth;
    return { innerPodStatusOuterRadius, innerPodStatusInnerRadius };
};
const podSetInnerRadius = (size, data) => {
    const { podStatusInnerRadius, podStatusStrokeWidth } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["calculateRadius"])(size);
    let radius = podStatusInnerRadius;
    if (Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["podDataInProgress"])(data.dc, data.current, data.isRollingOut)) {
        const { innerPodStatusInnerRadius } = calculateInnerPodStatusRadius(radius, podStatusStrokeWidth);
        radius = innerPodStatusInnerRadius;
    }
    const { podStatusStrokeWidth: innerStrokeWidth, podStatusInset } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["calculateRadius"])(radius * 2);
    return radius - innerStrokeWidth - podStatusInset;
};
const PodSet = ({ size, data, x = 0, y = 0, showPodCount }) => {
    const { podStatusOuterRadius, podStatusInnerRadius, podStatusStrokeWidth } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["calculateRadius"])(size);
    const { innerPodStatusOuterRadius, innerPodStatusInnerRadius } = calculateInnerPodStatusRadius(podStatusInnerRadius, podStatusStrokeWidth);
    const { inProgressDeploymentData, completedDeploymentData } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getPodData"])(data.dc, data.pods, data.current, data.previous, data.isRollingOut);
    const obj = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(data, ['current', 'obj'], null) || data.dc;
    const { title, subTitle, titleComponent } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["podRingLabel"])(obj, data.dc.kind, data === null || data === void 0 ? void 0 : data.pods);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodStatus"], { key: inProgressDeploymentData ? 'deploy' : 'notDeploy', x: x - size / 2, y: y - size / 2, innerRadius: podStatusInnerRadius, outerRadius: podStatusOuterRadius, data: completedDeploymentData, size: size, subTitle: showPodCount && subTitle, title: showPodCount && title, titleComponent: showPodCount && titleComponent }),
        inProgressDeploymentData && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodStatus"], { x: x - size / 2, y: y - size / 2, innerRadius: innerPodStatusInnerRadius, outerRadius: innerPodStatusOuterRadius, data: inProgressDeploymentData, size: size }))));
};
/* harmony default export */ __webpack_exports__["default"] = (PodSet);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/WorkloadNode.scss":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/WorkloadNode.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/WorkloadNode.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/WorkloadNode.tsx ***!
  \****************************************************************************************/
/*! exports provided: WorkloadNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkloadNode", function() { return WorkloadNode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _import_render_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../import/render-utils */ "./packages/dev-console/src/components/import/render-utils.tsx");
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Decorator */ "./packages/dev-console/src/components/topology/components/nodes/Decorator.tsx");
/* harmony import */ var _PodSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PodSet */ "./packages/dev-console/src/components/topology/components/nodes/PodSet.tsx");
/* harmony import */ var _build_decorators_BuildDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./build-decorators/BuildDecorator */ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/BuildDecorator.tsx");
/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseNode */ "./packages/dev-console/src/components/topology/components/nodes/BaseNode.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _filters_useDisplayFilters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../filters/useDisplayFilters */ "./packages/dev-console/src/components/topology/filters/useDisplayFilters.ts");
/* harmony import */ var _WorkloadNode_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WorkloadNode.scss */ "./packages/dev-console/src/components/topology/components/nodes/WorkloadNode.scss");
/* harmony import */ var _WorkloadNode_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_WorkloadNode_scss__WEBPACK_IMPORTED_MODULE_13__);
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














const ObservedWorkloadNode = (_a) => {
    var { element, urlAnchorRef, canDrop, dropTarget, serviceBinding, cheURL } = _a, rest = __rest(_a, ["element", "urlAnchorRef", "canDrop", "dropTarget", "serviceBinding", "cheURL"]);
    const { width, height } = element.getDimensions();
    const workloadData = element.getData().data;
    const filters = Object(_filters_useDisplayFilters__WEBPACK_IMPORTED_MODULE_12__["useDisplayFilters"])();
    const size = Math.min(width, height);
    const { donutStatus, editURL, vcsURI } = workloadData;
    const { radius, decoratorRadius } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["calculateRadius"])(size);
    const cheEnabled = !!cheURL;
    const cx = width / 2;
    const cy = height / 2;
    const editUrl = editURL || Object(_topology_utils__WEBPACK_IMPORTED_MODULE_11__["getEditURL"])(vcsURI, cheURL);
    const repoIcon = Object(_import_render_utils__WEBPACK_IMPORTED_MODULE_6__["routeDecoratorIcon"])(editUrl, decoratorRadius, cheEnabled);
    const tipContent = `Create a ${serviceBinding && element.getData().operatorBackedService ? 'binding' : 'visual'} connector`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { content: tipContent, trigger: "manual", isVisible: dropTarget && canDrop, tippyProps: { duration: 0, delay: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseNode__WEBPACK_IMPORTED_MODULE_10__["BaseNode"], Object.assign({ className: "odc-workload-node", outerRadius: radius, innerRadius: Object(_PodSet__WEBPACK_IMPORTED_MODULE_8__["podSetInnerRadius"])(size, donutStatus), icon: !filters.podCount ? workloadData.builderImage : undefined, kind: workloadData.kind, element: element, dropTarget: dropTarget, canDrop: canDrop }, rest, { attachments: [
                    repoIcon && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { key: "edit", content: "Edit Source Code", position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TooltipPosition"].right },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Decorator__WEBPACK_IMPORTED_MODULE_7__["Decorator"], { x: cx + radius - decoratorRadius * 0.7, y: cy + radius - decoratorRadius * 0.7, radius: decoratorRadius, href: editUrl, external: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(-${decoratorRadius / 2}, -${decoratorRadius / 2})` }, repoIcon)))),
                    workloadData.url && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { key: "route", content: "Open URL", position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TooltipPosition"].right },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Decorator__WEBPACK_IMPORTED_MODULE_7__["Decorator"], { x: cx + radius - decoratorRadius * 0.7, y: cy + -radius + decoratorRadius * 0.7, radius: decoratorRadius, href: workloadData.url, external: true, circleRef: urlAnchorRef },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(-${decoratorRadius / 2}, -${decoratorRadius / 2})` },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["ExternalLinkAltIcon"], { style: { fontSize: decoratorRadius }, alt: "Open URL" }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_build_decorators_BuildDecorator__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "build", workloadData: workloadData, x: cx - radius + decoratorRadius * 0.7, y: cy + radius - decoratorRadius * 0.7, radius: decoratorRadius }),
                ] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PodSet__WEBPACK_IMPORTED_MODULE_8__["default"], { size: size, x: cx, y: cy, data: donutStatus, showPodCount: filters.podCount })))));
};
const mapStateToProps = (state) => {
    const consoleLinks = state.UI.get('consoleLinks');
    return {
        cheURL: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_11__["getCheURL"])(consoleLinks),
        serviceBinding: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_11__["getServiceBindingStatus"])(state),
    };
};
const WorkloadNode = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(_console_topology__WEBPACK_IMPORTED_MODULE_3__["observer"])(ObservedWorkloadNode));



/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/BuildDecorator.tsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/build-decorators/BuildDecorator.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Decorator */ "./packages/dev-console/src/components/topology/components/nodes/Decorator.tsx");
/* harmony import */ var _build_decorator_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-decorator-utils */ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/build-decorator-utils.tsx");





const BuildDecorator = ({ workloadData, radius, x, y }) => {
    const { decoratorIcon, linkRef, tooltipContent } = Object(_build_decorator_utils__WEBPACK_IMPORTED_MODULE_4__["getBuildDecoratorParts"])(workloadData);
    if (!decoratorIcon && !tooltipContent) {
        return null;
    }
    let decoratorContent = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Decorator__WEBPACK_IMPORTED_MODULE_3__["Decorator"], { x: x, y: y, radius: radius },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(-${radius / 2}, -${radius / 2})` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("foreignObject", { width: radius, height: radius, style: { fontSize: radius } }, decoratorIcon))));
    if (linkRef) {
        decoratorContent = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: linkRef, className: "odc-decorator__link" }, decoratorContent));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { key: "build", content: tooltipContent, position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TooltipPosition"].left }, decoratorContent));
};
/* harmony default export */ __webpack_exports__["default"] = (BuildDecorator);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/PipelineBuildDecoratorTooltip.scss":
/*!***************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/build-decorators/PipelineBuildDecoratorTooltip.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/PipelineBuildDecoratorTooltip.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/build-decorators/PipelineBuildDecoratorTooltip.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/pipeline-augment */ "./packages/dev-console/src/utils/pipeline-augment.ts");
/* harmony import */ var _charts_HorizontalStackedBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../charts/HorizontalStackedBars */ "./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx");
/* harmony import */ var _pipelineruns_status_TaskStatusTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pipelineruns/status/TaskStatusTooltip */ "./packages/dev-console/src/components/pipelineruns/status/TaskStatusTooltip.tsx");
/* harmony import */ var _PipelineBuildDecoratorTooltip_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PipelineBuildDecoratorTooltip.scss */ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/PipelineBuildDecoratorTooltip.scss");
/* harmony import */ var _PipelineBuildDecoratorTooltip_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PipelineBuildDecoratorTooltip_scss__WEBPACK_IMPORTED_MODULE_4__);





const PipelineBuildDecoratorTooltip = ({ pipeline, status, }) => {
    if (!pipeline || !status) {
        return null;
    }
    const taskStatus = Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["getTaskStatus"])(pipeline.latestRun, pipeline);
    const pipelineBars = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_charts_HorizontalStackedBars__WEBPACK_IMPORTED_MODULE_2__["default"], { height: "1em", inline: true, values: Object.keys(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"]).map((rStatus) => ({
            color: Object(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["getRunStatusColor"])(_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"][rStatus]).pftoken.value,
            name: rStatus,
            size: taskStatus[_utils_pipeline_augment__WEBPACK_IMPORTED_MODULE_1__["runStatus"][rStatus]],
        })) }));
    const breakdownInfo = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pipelineruns_status_TaskStatusTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { taskStatus: taskStatus });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-build-decorator-tooltip" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-build-decorator-tooltip__title" },
            "Pipeline ",
            status),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-build-decorator-tooltip__status-bars-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-build-decorator-tooltip__status-bars-title" }, "Task Status"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-build-decorator-tooltip__status-bars" }, pipelineBars)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-pipeline-build-decorator-tooltip__status-breakdown" }, breakdownInfo)));
};
/* harmony default export */ __webpack_exports__["default"] = (PipelineBuildDecoratorTooltip);


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/build-decorator-utils.tsx":
/*!******************************************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/build-decorators/build-decorator-utils.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: getBuildDecoratorParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuildDecoratorParts", function() { return getBuildDecoratorParts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models */ "./packages/dev-console/src/models/index.ts");
/* harmony import */ var _utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/pipeline-utils */ "./packages/dev-console/src/utils/pipeline-utils.ts");
/* harmony import */ var _PipelineBuildDecoratorTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PipelineBuildDecoratorTooltip */ "./packages/dev-console/src/components/topology/components/nodes/build-decorators/PipelineBuildDecoratorTooltip.tsx");







const getBuildDecoratorParts = (workloadData) => {
    const { build, connectedPipeline } = workloadData;
    let tooltipContent = null;
    let decoratorIcon = null;
    let linkRef = null;
    let currentPipelineStatus = null;
    if (connectedPipeline) {
        const { pipelineRuns, pipeline } = connectedPipeline;
        currentPipelineStatus = Object(_utils_pipeline_utils__WEBPACK_IMPORTED_MODULE_5__["constructCurrentPipeline"])(pipeline, pipelineRuns);
    }
    if (currentPipelineStatus) {
        const { currentPipeline, status } = currentPipelineStatus;
        tooltipContent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PipelineBuildDecoratorTooltip__WEBPACK_IMPORTED_MODULE_6__["default"], { pipeline: currentPipeline, status: status });
        decoratorIcon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: status, iconOnly: true, noTooltip: true });
        linkRef = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["PipelineRunModel"], currentPipeline.latestRun.metadata.name, currentPipeline.latestRun.metadata.namespace)}/logs`;
    }
    else if (build) {
        tooltipContent = `Build ${build.status && build.status.phase}`;
        decoratorIcon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: build.status.phase, iconOnly: true, noTooltip: true });
        linkRef = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_3__["BuildModel"], build.metadata.name, build.metadata.namespace)}/logs`;
    }
    return {
        tooltipContent,
        decoratorIcon,
        linkRef,
    };
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/nodes/index.ts":
/*!********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/nodes/index.ts ***!
  \********************************************************************************/
/*! exports provided: BaseNode, WorkloadNode, Decorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseNode */ "./packages/dev-console/src/components/topology/components/nodes/BaseNode.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _BaseNode__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]; });

/* harmony import */ var _WorkloadNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkloadNode */ "./packages/dev-console/src/components/topology/components/nodes/WorkloadNode.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkloadNode", function() { return _WorkloadNode__WEBPACK_IMPORTED_MODULE_1__["WorkloadNode"]; });

/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Decorator */ "./packages/dev-console/src/components/topology/components/nodes/Decorator.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decorator", function() { return _Decorator__WEBPACK_IMPORTED_MODULE_2__["Decorator"]; });






/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/removeConnection.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/removeConnection.tsx ***!
  \**************************************************************************************/
/*! exports provided: removeConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnection", function() { return removeConnection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/modals */ "./public/components/modals/index.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");




const removeConnection = (edge) => {
    const message = edge.getType() === 'service-binding' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Deleting the binding connector deletes the config details of the source and removes the binding resources. Are you sure you want to delete the binding connector?")) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Deleting the visual connector removes the `connects-to` annotation from the resources. Are you sure you want to delete the visual connector?"));
    return Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_2__["confirmModal"])({
        title: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["YellowExclamationTriangleIcon"], { className: "co-icon-space-r" }),
            " Delete Connector?")),
        message,
        btnText: 'Delete',
        submitDanger: true,
        executeFn: () => {
            return Object(_topology_utils__WEBPACK_IMPORTED_MODULE_3__["removeTopologyResourceConnection"])(edge.getSource().getData(), edge.getTarget().getData(), edge.getData().data && edge.getData().data.sbr, edge.getType()).catch((err) => {
                err && Object(_console_internal_components_modals__WEBPACK_IMPORTED_MODULE_2__["errorModal"])({ error: err.message });
            });
        },
    });
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/components/withEditReviewAccess.tsx":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/components/withEditReviewAccess.tsx ***!
  \******************************************************************************************/
/*! exports provided: withEditReviewAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEditReviewAccess", function() { return withEditReviewAccess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");





const withEditReviewAccess = (verb) => (WrappedComponent) => {
    const Component = (props) => {
        const resourceObj = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_4__["getTopologyResourceObject"])(props.element.getData());
        const resourceModel = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_2__["referenceFor"])(resourceObj));
        const editAccess = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["useAccessReview"])({
            group: resourceModel.apiGroup,
            verb,
            resource: resourceModel.plural,
            name: resourceObj.metadata.name,
            namespace: resourceObj.metadata.namespace,
        });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { canEdit: editAccess }));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Component);
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/data-transforms/data-transformer.ts":
/*!******************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/data-transforms/data-transformer.ts ***!
  \******************************************************************************************/
/*! exports provided: getFilteredTrafficWorkload, getTrafficConnectors, transformTopologyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredTrafficWorkload", function() { return getFilteredTrafficWorkload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrafficConnectors", function() { return getTrafficConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformTopologyData", function() { return transformTopologyData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_knative_plugin_src_topology_data_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/knative-plugin/src/topology/data-transformer */ "./packages/knative-plugin/src/topology/data-transformer.ts");
/* harmony import */ var _console_kubevirt_plugin_src_topology_kubevirt_data_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/kubevirt-plugin/src/topology/kubevirt-data-transformer */ "./packages/kubevirt-plugin/src/topology/kubevirt-data-transformer.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _transform_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");
/* harmony import */ var _operators_operators_data_transformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../operators/operators-data-transformer */ "./packages/dev-console/src/components/topology/operators/operators-data-transformer.ts");
/* harmony import */ var _helm_helm_data_transformer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helm/helm-data-transformer */ "./packages/dev-console/src/components/topology/helm/helm-data-transformer.ts");










const getFilteredTrafficWorkload = (nodes) => nodes.filter(({ data }) => data.nodeType === _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_WORKLOAD"]);
const getTrafficConnectors = (trafficData, resources) => {
    const filteredWorkload = getFilteredTrafficWorkload(trafficData.nodes);
    return trafficData.edges.reduce((acc, { data }) => {
        const { data: sourceTrafficNode } = filteredWorkload.find((wrkld) => wrkld.data.id === data.source);
        const { data: targetTrafficNode } = filteredWorkload.find((wrkld) => wrkld.data.id === data.target);
        const sourceResourceNode = resources.find((res) => {
            return res.metadata.name === sourceTrafficNode[sourceTrafficNode.nodeType];
        });
        const targetResourceNode = resources.find((res) => res.metadata.name === targetTrafficNode[targetTrafficNode.nodeType]);
        return sourceResourceNode && targetResourceNode
            ? [
                ...acc,
                {
                    id: `${sourceResourceNode.metadata.uid}_${targetResourceNode.metadata.uid}`,
                    type: _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_TRAFFIC_CONNECTOR"],
                    source: sourceResourceNode.metadata.uid,
                    target: targetResourceNode.metadata.uid,
                    data: data.traffic,
                },
            ]
            : acc;
    }, []);
};
const getBaseTopologyDataModel = (resources, allResources, installedOperators, utils, transformBy, serviceBindingRequests) => {
    const baseDataModel = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    const transformResourceData = Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["createInstanceForResource"])(resources, utils, installedOperators);
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](transformBy, (key) => {
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](resources[key].data)) {
            const typedDataModel = {
                graph: { nodes: [], edges: [], groups: [] },
                topology: {},
            };
            transformResourceData[key](resources[key].data).forEach((item) => {
                const { obj: deploymentConfig } = item;
                const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deploymentConfig, ['metadata', 'uid']);
                typedDataModel.topology[uid] = Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["createTopologyNodeData"])(item, _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_WORKLOAD"], Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_2__["getImageForIconClass"])(`icon-openshift`));
                typedDataModel.graph.nodes.push(Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["getTopologyNodeItem"])(deploymentConfig, _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_WORKLOAD"]));
                typedDataModel.graph.edges.push(...Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["getTopologyEdgeItems"])(deploymentConfig, allResources, serviceBindingRequests));
                Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["mergeGroup"])(Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["getTopologyGroupItems"])(deploymentConfig), typedDataModel.graph.groups);
            });
            Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["addToTopologyDataModel"])(typedDataModel, baseDataModel);
        }
    });
    return baseDataModel;
};
/**
 * Tranforms the k8s resources objects into topology data
 */
const transformTopologyData = (resources, transformBy, utils, trafficData, helmResourcesMap) => {
    const installedOperators = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, 'clusterServiceVersions.data');
    const serviceBindingRequests = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, 'serviceBindingRequests.data');
    const topologyGraphAndNodeData = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    // TODO: plugin
    const allResourceTypes = [..._topology_utils__WEBPACK_IMPORTED_MODULE_6__["allowedResources"], ..._console_kubevirt_plugin_src_topology_kubevirt_data_transformer__WEBPACK_IMPORTED_MODULE_4__["kubevirtAllowedResources"]];
    const allResourcesList = lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"](allResourceTypes.map((resourceKind) => {
        return resources[resourceKind]
            ? resources[resourceKind].data.map((res) => {
                const resKind = resources[resourceKind].kind;
                let kind = resKind;
                let apiVersion;
                if (resKind && Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["isGroupVersionKind"])(resKind)) {
                    kind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["kindForReference"])(resKind);
                    apiVersion = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForReference"])(resKind);
                }
                return Object.assign({ kind,
                    apiVersion }, res);
            })
            : [];
    }));
    if (trafficData) {
        topologyGraphAndNodeData.graph.edges = getTrafficConnectors(trafficData, allResourcesList);
    }
    // Copy the resources into a mutable list of resources, we don't want to effect the incoming lists
    const dataResources = Object.keys(resources).reduce((obj, key) => {
        obj[key] = Object.assign(Object.assign({}, resources[key]), { data: [...resources[key].data] });
        return obj;
    }, {});
    // TODO: plugins
    const knativeModel = Object(_console_knative_plugin_src_topology_data_transformer__WEBPACK_IMPORTED_MODULE_3__["getKnativeTopologyDataModel"])(dataResources, allResourcesList, installedOperators, utils);
    Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["addToTopologyDataModel"])(knativeModel, topologyGraphAndNodeData);
    const operatorsModel = Object(_operators_operators_data_transformer__WEBPACK_IMPORTED_MODULE_8__["getOperatorTopologyDataModel"])(dataResources, allResourcesList, installedOperators, utils, transformBy, serviceBindingRequests);
    Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["addToTopologyDataModel"])(operatorsModel, topologyGraphAndNodeData);
    const helmModel = Object(_helm_helm_data_transformer__WEBPACK_IMPORTED_MODULE_9__["getHelmTopologyDataModel"])(dataResources, allResourcesList, installedOperators, utils, transformBy, serviceBindingRequests, helmResourcesMap);
    Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["addToTopologyDataModel"])(helmModel, topologyGraphAndNodeData);
    const vmsModel = Object(_console_kubevirt_plugin_src_topology_kubevirt_data_transformer__WEBPACK_IMPORTED_MODULE_4__["getKubevirtTopologyDataModel"])(dataResources, allResourcesList, installedOperators, utils, transformBy, serviceBindingRequests);
    Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["addToTopologyDataModel"])(vmsModel, topologyGraphAndNodeData);
    const baseModel = getBaseTopologyDataModel(dataResources, allResourcesList, installedOperators, utils, transformBy, serviceBindingRequests);
    Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["addToTopologyDataModel"])(baseModel, topologyGraphAndNodeData);
    return topologyGraphAndNodeData;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/data-transforms/index.ts":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/data-transforms/index.ts ***!
  \*******************************************************************************/
/*! exports provided: getFilteredTrafficWorkload, getTrafficConnectors, transformTopologyData, dataObjectFromModel, createInstanceForResource, createTopologyNodeData, getTopologyNodeItem, getTopologyEdgeItems, getTopologyGroupItems, mergeGroup, mergeGroups, addToTopologyDataModel, topologyModelFromDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-transformer */ "./packages/dev-console/src/components/topology/data-transforms/data-transformer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTrafficWorkload", function() { return _data_transformer__WEBPACK_IMPORTED_MODULE_0__["getFilteredTrafficWorkload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTrafficConnectors", function() { return _data_transformer__WEBPACK_IMPORTED_MODULE_0__["getTrafficConnectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformTopologyData", function() { return _data_transformer__WEBPACK_IMPORTED_MODULE_0__["transformTopologyData"]; });

/* harmony import */ var _transform_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataObjectFromModel", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["dataObjectFromModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstanceForResource", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["createInstanceForResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTopologyNodeData", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["createTopologyNodeData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyNodeItem", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologyNodeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyEdgeItems", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologyEdgeItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyGroupItems", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologyGroupItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeGroup", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["mergeGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeGroups", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["mergeGroups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToTopologyDataModel", function() { return _transform_utils__WEBPACK_IMPORTED_MODULE_1__["addToTopologyDataModel"]; });

/* harmony import */ var _topology_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topology-model */ "./packages/dev-console/src/components/topology/data-transforms/topology-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topologyModelFromDataModel", function() { return _topology_model__WEBPACK_IMPORTED_MODULE_2__["topologyModelFromDataModel"]; });






/***/ }),

/***/ "./packages/dev-console/src/components/topology/data-transforms/topology-model.ts":
/*!****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/data-transforms/topology-model.ts ***!
  \****************************************************************************************/
/*! exports provided: topologyModelFromDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topologyModelFromDataModel", function() { return topologyModelFromDataModel; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_knative_plugin_src_topology_knative_topology_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/knative-plugin/src/topology/knative-topology-model */ "./packages/knative-plugin/src/topology/knative-topology-model.ts");
/* harmony import */ var _console_kubevirt_plugin_src_topology_kubevirt_topology_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/kubevirt-plugin/src/topology/kubevirt-topology-model */ "./packages/kubevirt-plugin/src/topology/kubevirt-topology-model.ts");
/* harmony import */ var _helm_helm_topology_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helm/helm-topology-model */ "./packages/dev-console/src/components/topology/helm/helm-topology-model.ts");
/* harmony import */ var _operators_operators_topology_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/operators-topology-model */ "./packages/dev-console/src/components/topology/operators/operators-topology-model.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _transform_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");








const getApplicationGroupForNode = (node, groups) => {
    const group = groups.find((g) => g.children.includes(node.id));
    if (!group) {
        return null;
    }
    if (group.type === _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_APPLICATION_GROUP"]) {
        return group;
    }
    return getApplicationGroupForNode(group, groups);
};
const topologyModelFromDataModel = (dataModel, application = _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ALL_APPLICATIONS_KEY"], filters) => {
    const groupNodes = dataModel.graph.groups.map((d) => {
        // TODO: Change to use plugins
        let node = Object(_console_knative_plugin_src_topology_knative_topology_model__WEBPACK_IMPORTED_MODULE_2__["getKnativeGroupModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        node = Object(_console_kubevirt_plugin_src_topology_kubevirt_topology_model__WEBPACK_IMPORTED_MODULE_3__["getKubevirtGroupModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        node = Object(_helm_helm_topology_model__WEBPACK_IMPORTED_MODULE_4__["getHelmGroupModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        node = Object(_operators_operators_topology_model__WEBPACK_IMPORTED_MODULE_5__["getOperatorGroupModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        const data = dataModel.topology[d.id] || Object(_transform_utils__WEBPACK_IMPORTED_MODULE_7__["dataObjectFromModel"])(d);
        data.groupResources = d.nodes.map((id) => dataModel.topology[id]);
        return {
            width: _components_const__WEBPACK_IMPORTED_MODULE_6__["GROUP_WIDTH"],
            height: _components_const__WEBPACK_IMPORTED_MODULE_6__["GROUP_HEIGHT"],
            id: d.id,
            group: true,
            type: d.type,
            visible: d.type !== _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_APPLICATION_GROUP"] ||
                application === _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ALL_APPLICATIONS_KEY"] ||
                d.name === application,
            collapsed: filters && d.type === _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_APPLICATION_GROUP"] && !filters.display.appGrouping,
            data,
            children: d.nodes,
            label: d.name,
            style: {
                padding: _components_const__WEBPACK_IMPORTED_MODULE_6__["GROUP_PADDING"],
            },
        };
    });
    const nodes = dataModel.graph.nodes.map((d) => {
        // TODO: Change to use plugins
        let node = Object(_console_knative_plugin_src_topology_knative_topology_model__WEBPACK_IMPORTED_MODULE_2__["getKnativeNodeModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        node = Object(_console_kubevirt_plugin_src_topology_kubevirt_topology_model__WEBPACK_IMPORTED_MODULE_3__["getKubevirtNodeModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        node = Object(_helm_helm_topology_model__WEBPACK_IMPORTED_MODULE_4__["getHelmNodeModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        node = Object(_operators_operators_topology_model__WEBPACK_IMPORTED_MODULE_5__["getOperatorNodeModel"])(d, dataModel, filters);
        if (node) {
            return node;
        }
        return {
            width: _components_const__WEBPACK_IMPORTED_MODULE_6__["NODE_WIDTH"],
            height: _components_const__WEBPACK_IMPORTED_MODULE_6__["NODE_HEIGHT"],
            id: d.id,
            type: d.type,
            label: dataModel.topology[d.id].name,
            data: dataModel.topology[d.id],
            visible: true,
            style: {
                padding: _components_const__WEBPACK_IMPORTED_MODULE_6__["NODE_PADDING"],
            },
        };
    });
    const allNodes = [...nodes, ...groupNodes];
    // Flag any hidden nodes
    if (application !== _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ALL_APPLICATIONS_KEY"]) {
        const allGroups = [...groupNodes, ...nodes.filter((n) => n.group)];
        allNodes
            .filter((g) => g.type !== _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_APPLICATION_GROUP"])
            .forEach((g) => {
            const group = getApplicationGroupForNode(g, allGroups);
            const hidden = application !== _console_shared_src__WEBPACK_IMPORTED_MODULE_1__["ALL_APPLICATIONS_KEY"] && (!group || application !== group.label);
            g.visible = !hidden;
        });
    }
    // create links from data, only include those which have a valid source and target
    const edges = dataModel.graph.edges
        .filter((d) => {
        return allNodes.find((n) => n.id === d.source) && allNodes.find((n) => n.id === d.target);
    })
        .map((d) => {
        // TODO: Change to use plugins
        let edge = Object(_console_knative_plugin_src_topology_knative_topology_model__WEBPACK_IMPORTED_MODULE_2__["getKnativeEdgeModel"])(d, dataModel, filters);
        if (edge) {
            return edge;
        }
        edge = Object(_console_kubevirt_plugin_src_topology_kubevirt_topology_model__WEBPACK_IMPORTED_MODULE_3__["getKubevirtEdgeModel"])(d, dataModel, filters);
        if (edge) {
            return edge;
        }
        edge = Object(_helm_helm_topology_model__WEBPACK_IMPORTED_MODULE_4__["getHelmEdgeModel"])(d, dataModel, filters);
        if (edge) {
            return edge;
        }
        edge = Object(_operators_operators_topology_model__WEBPACK_IMPORTED_MODULE_5__["getOperatorEdgeModel"])(d, dataModel, filters);
        if (edge) {
            return edge;
        }
        return {
            data: d,
            source: d.source,
            target: d.target,
            id: `${d.source}_${d.target}`,
            type: d.type,
        };
    });
    // create topology model
    const model = {
        nodes: allNodes,
        edges: Object(_console_topology__WEBPACK_IMPORTED_MODULE_0__["createAggregateEdges"])(_components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_AGGREGATE_EDGE"], edges, allNodes),
    };
    return model;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts ***!
  \*****************************************************************************************/
/*! exports provided: dataObjectFromModel, createInstanceForResource, createTopologyNodeData, getTopologyNodeItem, getTopologyEdgeItems, getTopologyGroupItems, mergeGroup, mergeGroups, addToTopologyDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataObjectFromModel", function() { return dataObjectFromModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstanceForResource", function() { return createInstanceForResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopologyNodeData", function() { return createTopologyNodeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyNodeItem", function() { return getTopologyNodeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyEdgeItems", function() { return getTopologyEdgeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyGroupItems", function() { return getTopologyGroupItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeGroup", function() { return mergeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeGroups", function() { return mergeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToTopologyDataModel", function() { return addToTopologyDataModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/knative-plugin/src/topology/const */ "./packages/knative-plugin/src/topology/const.ts");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");








const dataObjectFromModel = (node) => {
    return {
        id: node.id,
        name: node.name,
        type: node.type,
        resources: null,
        operatorBackedService: false,
        data: null,
    };
};
/**
 * create instance of TransformResourceData, return object containing all methods
 */
const createInstanceForResource = (resources, utils, installedOperators) => {
    const transformResourceData = new _console_shared__WEBPACK_IMPORTED_MODULE_2__["TransformResourceData"](resources, utils, installedOperators);
    return {
        deployments: transformResourceData.createDeploymentItems,
        deploymentConfigs: transformResourceData.createDeploymentConfigItems,
        daemonSets: transformResourceData.createDaemonSetItems,
        statefulSets: transformResourceData.createStatefulSetItems,
    };
};
/**
 * create all data that need to be shown on a topology data
 */
const createTopologyNodeData = (dc, type, defaultIcon, operatorBackedService = false) => {
    var _a, _b;
    const { obj: deploymentConfig, current, previous, isRollingOut, buildConfigs, pipelines = [], pipelineRuns = [], } = dc;
    const dcUID = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deploymentConfig, 'metadata.uid');
    const deploymentsLabels = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deploymentConfig, 'metadata.labels', {});
    const deploymentsAnnotations = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deploymentConfig, 'metadata.annotations', {});
    const builderImageIcon = Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageForIconClass"])(`icon-${deploymentsLabels['app.openshift.io/runtime']}`) ||
        Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_3__["getImageForIconClass"])(`icon-${deploymentsLabels['app.kubernetes.io/name']}`);
    return {
        id: dcUID,
        name: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deploymentConfig, 'metadata.name') || deploymentsLabels['app.kubernetes.io/instance'],
        type,
        resources: Object.assign(Object.assign({}, dc), { isOperatorBackedService: operatorBackedService }),
        pods: dc.pods,
        operatorBackedService,
        data: {
            url: Object(_topology_utils__WEBPACK_IMPORTED_MODULE_7__["getRoutesURL"])(dc),
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(deploymentConfig),
            editURL: deploymentsAnnotations['app.openshift.io/edit-url'],
            vcsURI: deploymentsAnnotations['app.openshift.io/vcs-uri'],
            builderImage: builderImageIcon || defaultIcon,
            isKnativeResource: type && (type === _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_4__["TYPE_EVENT_SOURCE"] || type === _console_knative_plugin_src_topology_const__WEBPACK_IMPORTED_MODULE_4__["TYPE_KNATIVE_REVISION"])
                ? true
                : Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["isKnativeServing"])(deploymentConfig, 'metadata.labels'),
            build: (_b = (_a = buildConfigs === null || buildConfigs === void 0 ? void 0 : buildConfigs[0]) === null || _a === void 0 ? void 0 : _a.builds) === null || _b === void 0 ? void 0 : _b[0],
            connectedPipeline: {
                pipeline: pipelines[0],
                pipelineRuns,
            },
            donutStatus: {
                pods: dc.pods,
                current,
                previous,
                isRollingOut,
                dc: deploymentConfig,
            },
        },
    };
};
/**
 * create node data for graphs
 */
const getTopologyNodeItem = (dc, type, children) => {
    const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'uid']);
    const name = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'name']);
    const label = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'labels', 'app.openshift.io/instance']);
    return Object.assign({ id: uid, type: type || _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_WORKLOAD"], name: label || name }, (children && children.length && { children }));
};
/**
 * create edge data for graph
 */
const getTopologyEdgeItems = (dc, resources, sbrs) => {
    const annotations = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, 'metadata.annotations');
    const edges = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_5__["edgesFromAnnotations"])(annotations), (edge) => {
        // handles multiple edges
        const targetNode = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](lodash__WEBPACK_IMPORTED_MODULE_0__["find"](resources, (deployment) => {
            var _a, _b, _c, _d, _e;
            let name;
            if (typeof edge === 'string') {
                name = (_c = (_b = (_a = deployment.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b['app.kubernetes.io/instance']) !== null && _c !== void 0 ? _c : (_d = deployment.metadata) === null || _d === void 0 ? void 0 : _d.name;
                return name === edge;
            }
            name = (_e = deployment.metadata) === null || _e === void 0 ? void 0 : _e.name;
            const { apiVersion: edgeApiVersion, kind: edgeKind, name: edgeName } = edge;
            const { kind, apiVersion } = deployment;
            let edgeExists = name === edgeName && kind === edgeKind;
            if (apiVersion) {
                edgeExists = edgeExists && apiVersion === edgeApiVersion;
            }
            return edgeExists;
        }), ['metadata', 'uid']);
        const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'uid']);
        if (targetNode) {
            edges.push({
                id: `${uid}_${targetNode}`,
                type: _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_CONNECTS_TO"],
                source: uid,
                target: targetNode,
            });
        }
    });
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_5__["edgesFromServiceBinding"])(dc, sbrs), (sbr) => {
        // look for multiple backing services first in `backingServiceSelectors`
        // followed by a fallback to the single reference in `backingServiceSelector`
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](sbr.spec.backingServiceSelectors || [sbr.spec.backingServiceSelector], (bss) => {
            var _a, _b;
            if (bss) {
                // handles multiple edges
                const targetResource = resources.find((deployment) => {
                    var _a, _b, _c, _d, _e, _f;
                    return ((_c = (_b = (_a = deployment === null || deployment === void 0 ? void 0 : deployment.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.kind) === bss.kind &&
                        ((_f = (_e = (_d = deployment === null || deployment === void 0 ? void 0 : deployment.metadata) === null || _d === void 0 ? void 0 : _d.ownerReferences) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.name) === bss.resourceRef;
                });
                const target = (_a = targetResource === null || targetResource === void 0 ? void 0 : targetResource.metadata) === null || _a === void 0 ? void 0 : _a.uid;
                const source = (_b = dc === null || dc === void 0 ? void 0 : dc.metadata) === null || _b === void 0 ? void 0 : _b.uid;
                if (source && target) {
                    edges.push({
                        id: `${source}_${target}`,
                        type: _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_SERVICE_BINDING"],
                        source,
                        target,
                        data: { sbr },
                    });
                }
            }
        });
    });
    return edges;
};
/**
 * create groups data for graph
 */
const getTopologyGroupItems = (dc) => {
    const groupName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'labels', 'app.kubernetes.io/part-of']);
    if (!groupName) {
        return null;
    }
    return {
        id: `group:${groupName}`,
        type: _components_const__WEBPACK_IMPORTED_MODULE_6__["TYPE_APPLICATION_GROUP"],
        name: groupName,
        nodes: [lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'uid'])],
    };
};
const mergeGroup = (newGroup, existingGroups) => {
    if (!newGroup) {
        return;
    }
    // find and add the groups
    const existingGroup = existingGroups.find((g) => g.id === newGroup.id);
    if (!existingGroup) {
        existingGroups.push(newGroup);
    }
    else {
        newGroup.nodes.forEach((id) => {
            if (!existingGroup.nodes.includes(id)) {
                existingGroup.nodes.push(id);
            }
        });
    }
};
const mergeGroups = (newGroups, existingGroups) => {
    if (!newGroups || !newGroups.length) {
        return;
    }
    newGroups.forEach((newGroup) => {
        mergeGroup(newGroup, existingGroups);
    });
};
const addToTopologyDataModel = (newModel, graphModel) => {
    graphModel.graph.nodes.push(...newModel.graph.nodes);
    graphModel.graph.edges.push(...newModel.graph.edges);
    mergeGroups(newModel.graph.groups, graphModel.graph.groups);
    graphModel.topology = Object.assign(Object.assign({}, graphModel.topology), newModel.topology);
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/filter-types.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/filter-types.ts ***!
  \******************************************************************************/
/*! exports provided: TOPOLOGY_SEARCH_FILTER_KEY, FILTER_ACTIVE_CLASS, ShowFiltersKeyValue, ExpandFiltersKeyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPOLOGY_SEARCH_FILTER_KEY", function() { return TOPOLOGY_SEARCH_FILTER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_ACTIVE_CLASS", function() { return FILTER_ACTIVE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFiltersKeyValue", function() { return ShowFiltersKeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandFiltersKeyValue", function() { return ExpandFiltersKeyValue; });
const TOPOLOGY_SEARCH_FILTER_KEY = 'searchQuery';
const FILTER_ACTIVE_CLASS = 'odc-m-filter-active';
var ShowFiltersKeyValue;
(function (ShowFiltersKeyValue) {
    ShowFiltersKeyValue["podCount"] = "Pod Count";
    ShowFiltersKeyValue["eventSources"] = "Event Sources";
    ShowFiltersKeyValue["virtualMachines"] = "Virtual Machines";
    ShowFiltersKeyValue["showLabels"] = "Show Labels";
})(ShowFiltersKeyValue || (ShowFiltersKeyValue = {}));
var ExpandFiltersKeyValue;
(function (ExpandFiltersKeyValue) {
    ExpandFiltersKeyValue["appGrouping"] = "Application Groupings";
    ExpandFiltersKeyValue["helmGrouping"] = "Helm Releases";
    ExpandFiltersKeyValue["knativeServices"] = "Knative Services";
    ExpandFiltersKeyValue["operatorGrouping"] = "Operator Groupings";
})(ExpandFiltersKeyValue || (ExpandFiltersKeyValue = {}));


/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/filter-utils.ts":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/filter-utils.ts ***!
  \******************************************************************************/
/*! exports provided: getTopologyFilters, getTopologySearchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyFilters", function() { return getTopologyFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologySearchQuery", function() { return getTopologySearchQuery; });
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/reducer */ "./packages/dev-console/src/components/topology/redux/reducer.ts");
/* harmony import */ var _filter_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-types */ "./packages/dev-console/src/components/topology/filters/filter-types.ts");



const getTopologyFilters = (state) => {
    var _a, _b;
    const topology = (_b = (_a = state === null || state === void 0 ? void 0 : state.plugins) === null || _a === void 0 ? void 0 : _a.devconsole) === null || _b === void 0 ? void 0 : _b.topology;
    return topology ? topology.get('filters') : Object(_redux_reducer__WEBPACK_IMPORTED_MODULE_1__["getDefaultTopologyFilters"])();
};
const getTopologySearchQuery = () => { var _a; return (_a = Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_0__["getQueryArgument"])(_filter_types__WEBPACK_IMPORTED_MODULE_2__["TOPOLOGY_SEARCH_FILTER_KEY"])) !== null && _a !== void 0 ? _a : ''; };


/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/index.ts":
/*!***********************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/index.ts ***!
  \***********************************************************************/
/*! exports provided: TOPOLOGY_SEARCH_FILTER_KEY, FILTER_ACTIVE_CLASS, ShowFiltersKeyValue, ExpandFiltersKeyValue, getTopologyFilters, getTopologySearchQuery, useSearchFilter, useDisplayFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-types */ "./packages/dev-console/src/components/topology/filters/filter-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPOLOGY_SEARCH_FILTER_KEY", function() { return _filter_types__WEBPACK_IMPORTED_MODULE_0__["TOPOLOGY_SEARCH_FILTER_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILTER_ACTIVE_CLASS", function() { return _filter_types__WEBPACK_IMPORTED_MODULE_0__["FILTER_ACTIVE_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowFiltersKeyValue", function() { return _filter_types__WEBPACK_IMPORTED_MODULE_0__["ShowFiltersKeyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandFiltersKeyValue", function() { return _filter_types__WEBPACK_IMPORTED_MODULE_0__["ExpandFiltersKeyValue"]; });

/* harmony import */ var _filter_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-utils */ "./packages/dev-console/src/components/topology/filters/filter-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyFilters", function() { return _filter_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologyFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologySearchQuery", function() { return _filter_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologySearchQuery"]; });

/* harmony import */ var _useSearchFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSearchFilter */ "./packages/dev-console/src/components/topology/filters/useSearchFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchFilter", function() { return _useSearchFilter__WEBPACK_IMPORTED_MODULE_2__["useSearchFilter"]; });

/* harmony import */ var _useDisplayFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDisplayFilters */ "./packages/dev-console/src/components/topology/filters/useDisplayFilters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDisplayFilters", function() { return _useDisplayFilters__WEBPACK_IMPORTED_MODULE_3__["useDisplayFilters"]; });







/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/useDisplayFilters.ts":
/*!***********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/useDisplayFilters.ts ***!
  \***********************************************************************************/
/*! exports provided: useDisplayFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDisplayFilters", function() { return useDisplayFilters; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _filter_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-utils */ "./packages/dev-console/src/components/topology/filters/filter-utils.ts");
// FIXME upgrading redux types is causing many errors at this time
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore


const useDisplayFilters = () => {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])((state) => Object(_filter_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologyFilters"])(state).display);
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/filters/useSearchFilter.ts":
/*!*********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/filters/useSearchFilter.ts ***!
  \*********************************************************************************/
/*! exports provided: useSearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearchFilter", function() { return useSearchFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");
/* harmony import */ var fuzzysearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuzzysearch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _filter_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-utils */ "./packages/dev-console/src/components/topology/filters/filter-utils.ts");




const fuzzyCaseInsensitive = (a, b) => fuzzysearch__WEBPACK_IMPORTED_MODULE_1__(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toLower"])(a), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toLower"])(b));
const useSearchFilter = (text) => {
    const searchQuery = Object(_filter_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologySearchQuery"])();
    const filtered = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => fuzzyCaseInsensitive(searchQuery, text), [
        searchQuery,
        text,
    ]);
    return [filtered && !!searchQuery, searchQuery];
};



/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/components/const.ts":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/components/const.ts ***!
  \*******************************************************************************/
/*! exports provided: TYPE_HELM_RELEASE, TYPE_HELM_WORKLOAD, HELM_GROUP_WIDTH, HELM_GROUP_HEIGHT, HELM_GROUP_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_HELM_RELEASE", function() { return TYPE_HELM_RELEASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_HELM_WORKLOAD", function() { return TYPE_HELM_WORKLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELM_GROUP_WIDTH", function() { return HELM_GROUP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELM_GROUP_HEIGHT", function() { return HELM_GROUP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELM_GROUP_PADDING", function() { return HELM_GROUP_PADDING; });
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");

const TYPE_HELM_RELEASE = 'helm-release';
const TYPE_HELM_WORKLOAD = 'helm-workload';
const HELM_GROUP_WIDTH = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_WIDTH"];
const HELM_GROUP_HEIGHT = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_HEIGHT"];
const HELM_GROUP_PADDING = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_PADDING"];


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/helm-data-transformer.ts":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/helm-data-transformer.ts ***!
  \************************************************************************************/
/*! exports provided: isHelmReleaseNode, getTopologyHelmReleaseGroupItem, getHelmTopologyDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHelmReleaseNode", function() { return isHelmReleaseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyHelmReleaseGroupItem", function() { return getTopologyHelmReleaseGroupItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmTopologyDataModel", function() { return getHelmTopologyDataModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/const */ "./packages/dev-console/src/components/topology/helm/components/const.ts");
/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony import */ var _data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-transforms/transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");






const isHelmReleaseNode = (obj, helmResourcesMap) => {
    if (helmResourcesMap) {
        return helmResourcesMap.hasOwnProperty(Object(_topology_utils__WEBPACK_IMPORTED_MODULE_4__["getHelmReleaseKey"])(obj));
    }
    return false;
};
const getTopologyHelmReleaseGroupItem = (obj, helmResourcesMap, secrets) => {
    const resourceKindName = Object(_topology_utils__WEBPACK_IMPORTED_MODULE_4__["getHelmReleaseKey"])(obj);
    const helmResources = helmResourcesMap[resourceKindName];
    const releaseName = helmResources === null || helmResources === void 0 ? void 0 : helmResources.releaseName;
    const releaseVersion = helmResources === null || helmResources === void 0 ? void 0 : helmResources.releaseVersion;
    const releaseNotes = helmResources === null || helmResources === void 0 ? void 0 : helmResources.releaseNotes;
    const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, ['metadata', 'uid'], null);
    const returnData = { groups: [], dataModel: {} };
    if (!releaseName) {
        return returnData;
    }
    const secret = secrets.find((nextSecret) => {
        var _a;
        const { labels } = nextSecret.metadata;
        return ((_a = labels === null || labels === void 0 ? void 0 : labels.name) === null || _a === void 0 ? void 0 : _a.includes(releaseName)) && (labels === null || labels === void 0 ? void 0 : labels.version) === releaseVersion.toString();
    });
    if (secret) {
        const appGroup = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["getTopologyGroupItems"])(secret);
        if (appGroup) {
            Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["mergeGroup"])(appGroup, returnData.groups);
        }
    }
    const helmGroup = {
        id: secret ? secret.metadata.uid : `${_components_const__WEBPACK_IMPORTED_MODULE_3__["TYPE_HELM_RELEASE"]}:${releaseName}`,
        type: _components_const__WEBPACK_IMPORTED_MODULE_3__["TYPE_HELM_RELEASE"],
        name: releaseName,
        nodes: [uid],
    };
    const dataModel = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["dataObjectFromModel"])(helmGroup);
    const { kind, apiVersion } = _console_internal_models__WEBPACK_IMPORTED_MODULE_1__["SecretModel"];
    dataModel.resources = {
        obj: secret ? Object.assign(Object.assign({}, secret), { kind, apiVersion }) : null,
        buildConfigs: null,
        services: null,
        routes: null,
    };
    dataModel.data = {
        chartIcon: helmResources === null || helmResources === void 0 ? void 0 : helmResources.chartIcon,
        manifestResources: (helmResources === null || helmResources === void 0 ? void 0 : helmResources.manifestResources) || [],
        releaseNotes,
    };
    returnData.dataModel[helmGroup.id] = dataModel;
    returnData.groups.push(helmGroup);
    return returnData;
};
const getHelmTopologyDataModel = (resources, allResources, installedOperators, utils, transformBy, serviceBindingRequests, helmResourcesMap) => {
    const helmDataModel = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    const helmResources = {};
    const transformResourceData = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["createInstanceForResource"])(resources, utils, installedOperators);
    const secrets = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, 'secrets.data', []);
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](transformBy, (key) => {
        helmResources[key] = [];
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](resources[key].data)) {
            const typedDataModel = {
                graph: { nodes: [], edges: [], groups: [] },
                topology: {},
            };
            transformResourceData[key](resources[key].data).forEach((item) => {
                const { obj: deploymentConfig } = item;
                const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](deploymentConfig, ['metadata', 'uid']);
                if (isHelmReleaseNode(deploymentConfig, helmResourcesMap)) {
                    helmResources[key].push(uid);
                    typedDataModel.topology[uid] = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["createTopologyNodeData"])(item, _components_const__WEBPACK_IMPORTED_MODULE_3__["TYPE_HELM_WORKLOAD"], Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_2__["getImageForIconClass"])(`icon-openshift`));
                    typedDataModel.graph.nodes.push(Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["getTopologyNodeItem"])(deploymentConfig, _components_const__WEBPACK_IMPORTED_MODULE_3__["TYPE_HELM_WORKLOAD"]));
                    typedDataModel.graph.edges.push(...Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["getTopologyEdgeItems"])(deploymentConfig, allResources, serviceBindingRequests));
                    const { groups, dataModel } = getTopologyHelmReleaseGroupItem(deploymentConfig, helmResourcesMap, secrets);
                    Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["mergeGroups"])(groups, typedDataModel.graph.groups);
                    typedDataModel.topology = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](typedDataModel.topology, dataModel);
                }
            });
            Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_5__["addToTopologyDataModel"])(typedDataModel, helmDataModel);
        }
    });
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](transformBy, (key) => {
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](resources[key].data) && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](helmResources[key])) {
            resources[key].data = resources[key].data.filter((resource) => !helmResources[key].find((uid) => uid === resource.metadata.uid));
        }
    });
    return helmDataModel;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/helm/helm-topology-model.ts":
/*!**********************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/helm/helm-topology-model.ts ***!
  \**********************************************************************************/
/*! exports provided: getHelmGroupModel, getHelmNodeModel, getHelmEdgeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmGroupModel", function() { return getHelmGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmNodeModel", function() { return getHelmNodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmEdgeModel", function() { return getHelmEdgeModel; });
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/const */ "./packages/dev-console/src/components/topology/helm/components/const.ts");
/* harmony import */ var _data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-transforms/transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getHelmGroupModel = (d, model, filters) => {
    if (d.type === _components_const__WEBPACK_IMPORTED_MODULE_0__["TYPE_HELM_RELEASE"]) {
        const data = model.topology[d.id] || Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_1__["dataObjectFromModel"])(d);
        data.groupResources = d.nodes.map((id) => model.topology[id]);
        return {
            width: _components_const__WEBPACK_IMPORTED_MODULE_0__["HELM_GROUP_WIDTH"],
            height: _components_const__WEBPACK_IMPORTED_MODULE_0__["HELM_GROUP_HEIGHT"],
            id: d.id,
            group: true,
            type: d.type,
            visible: true,
            collapsed: filters && !filters.display.helmGrouping,
            data,
            children: d.nodes,
            label: d.name,
            style: {
                padding: _components_const__WEBPACK_IMPORTED_MODULE_0__["HELM_GROUP_PADDING"],
            },
        };
    }
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getHelmNodeModel = (d, model, filters) => {
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getHelmEdgeModel = (d, model, filters) => {
    return null;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/index.ts":
/*!***************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/index.ts ***!
  \***************************************************************/
/*! exports provided: GraphElementType, SHOW_GROUPING_HINT_EVENT, allowedResources, getServiceBindingStatus, getCheURL, getEditURL, getHelmReleaseKey, isHelmReleaseNode, getKialiLink, filterBasedOnActiveApplication, getRoutesURL, getTopologyResourceObject, updateTopologyResourceApplication, createTopologyResourceConnection, removeTopologyResourceConnection, getFilteredTrafficWorkload, getTrafficConnectors, transformTopologyData, dataObjectFromModel, createInstanceForResource, createTopologyNodeData, getTopologyNodeItem, getTopologyEdgeItems, getTopologyGroupItems, mergeGroup, mergeGroups, addToTopologyDataModel, topologyModelFromDataModel, TYPE_WORKLOAD, TYPE_CONNECTS_TO, TYPE_AGGREGATE_EDGE, TYPE_SERVICE_BINDING, TYPE_APPLICATION_GROUP, TYPE_TRAFFIC_CONNECTOR, LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY, DEFAULT_NODE_PAD, DEFAULT_GROUP_PAD, NODE_WIDTH, NODE_HEIGHT, NODE_PADDING, GROUP_WIDTH, GROUP_HEIGHT, GROUP_PADDING, AbstractSBRComponentFactory, nodesEdgeIsDragging, nodeDragSourceSpec, nodeDropTargetSpec, graphDropTargetSpec, applicationGroupDropTargetSpec, edgeDragSourceSpec, noDropTargetSpec, createConnectorCallback, removeConnectorCallback, REGROUP_OPERATION, MOVE_CONNECTOR_DROP_TYPE, NODE_DRAG_TYPE, EDGE_DRAG_TYPE, withNoDrop, withContextMenu, ComponentFactory, NODE_SHADOW_FILTER_ID, NODE_SHADOW_FILTER_ID_HOVER, NodeShadows, createMenuItems, workloadContextMenu, noRegroupWorkloadContextMenu, groupContextMenu, nodeContextMenu, graphContextMenu, regroupContextMenu, regroupGroupContextMenu, withEditReviewAccess, moveNodeToGroup, createConnection, removeConnection, TOPOLOGY_SEARCH_FILTER_KEY, FILTER_ACTIVE_CLASS, ShowFiltersKeyValue, ExpandFiltersKeyValue, getTopologyFilters, getTopologySearchQuery, useSearchFilter, useDisplayFilters, BaseNode, WorkloadNode, Decorator, BaseEdge, AggregateEdge, ConnectsTo, CreateConnector, ServiceBinding, TrafficConnector, GroupNode, Application, ResourceKindsInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topology_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topology-types */ "./packages/dev-console/src/components/topology/topology-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphElementType", function() { return _topology_types__WEBPACK_IMPORTED_MODULE_0__["GraphElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_GROUPING_HINT_EVENT", function() { return _topology_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_GROUPING_HINT_EVENT"]; });

/* harmony import */ var _topology_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topology-utils */ "./packages/dev-console/src/components/topology/topology-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowedResources", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["allowedResources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServiceBindingStatus", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getServiceBindingStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheURL", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getCheURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEditURL", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getEditURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHelmReleaseKey", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getHelmReleaseKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHelmReleaseNode", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["isHelmReleaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKialiLink", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getKialiLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterBasedOnActiveApplication", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["filterBasedOnActiveApplication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRoutesURL", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getRoutesURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyResourceObject", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["getTopologyResourceObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateTopologyResourceApplication", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["updateTopologyResourceApplication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTopologyResourceConnection", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["createTopologyResourceConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTopologyResourceConnection", function() { return _topology_utils__WEBPACK_IMPORTED_MODULE_1__["removeTopologyResourceConnection"]; });

/* harmony import */ var _data_transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-transforms */ "./packages/dev-console/src/components/topology/data-transforms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilteredTrafficWorkload", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["getFilteredTrafficWorkload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTrafficConnectors", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["getTrafficConnectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformTopologyData", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["transformTopologyData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataObjectFromModel", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["dataObjectFromModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstanceForResource", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["createInstanceForResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTopologyNodeData", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["createTopologyNodeData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyNodeItem", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["getTopologyNodeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyEdgeItems", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["getTopologyEdgeItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyGroupItems", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["getTopologyGroupItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeGroup", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["mergeGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeGroups", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["mergeGroups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToTopologyDataModel", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["addToTopologyDataModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topologyModelFromDataModel", function() { return _data_transforms__WEBPACK_IMPORTED_MODULE_2__["topologyModelFromDataModel"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./packages/dev-console/src/components/topology/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_WORKLOAD", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TYPE_WORKLOAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_CONNECTS_TO", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TYPE_CONNECTS_TO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_AGGREGATE_EDGE", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TYPE_AGGREGATE_EDGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_SERVICE_BINDING", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TYPE_SERVICE_BINDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_APPLICATION_GROUP", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TYPE_APPLICATION_GROUP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRAFFIC_CONNECTOR", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TYPE_TRAFFIC_CONNECTOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["LAST_TOPOLOGY_VIEW_LOCAL_STORAGE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NODE_PAD", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_NODE_PAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_PAD", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_GROUP_PAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_WIDTH", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NODE_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_HEIGHT", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NODE_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_PADDING", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NODE_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUP_WIDTH", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["GROUP_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUP_HEIGHT", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["GROUP_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUP_PADDING", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["GROUP_PADDING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractSBRComponentFactory", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["AbstractSBRComponentFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodesEdgeIsDragging", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["nodesEdgeIsDragging"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeDragSourceSpec", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["nodeDragSourceSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeDropTargetSpec", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["nodeDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphDropTargetSpec", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["graphDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applicationGroupDropTargetSpec", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["applicationGroupDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edgeDragSourceSpec", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["edgeDragSourceSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noDropTargetSpec", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["noDropTargetSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConnectorCallback", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["createConnectorCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnectorCallback", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["removeConnectorCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGROUP_OPERATION", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["REGROUP_OPERATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOVE_CONNECTOR_DROP_TYPE", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["MOVE_CONNECTOR_DROP_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_DRAG_TYPE", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NODE_DRAG_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDGE_DRAG_TYPE", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["EDGE_DRAG_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withNoDrop", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["withNoDrop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["withContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactory", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ComponentFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_SHADOW_FILTER_ID", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_SHADOW_FILTER_ID_HOVER", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NODE_SHADOW_FILTER_ID_HOVER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeShadows", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["NodeShadows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMenuItems", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["createMenuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "workloadContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["workloadContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noRegroupWorkloadContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["noRegroupWorkloadContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["groupContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["nodeContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["graphContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regroupContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["regroupContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regroupGroupContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["regroupGroupContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEditReviewAccess", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["withEditReviewAccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveNodeToGroup", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["moveNodeToGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["createConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnection", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["removeConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkloadNode", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["WorkloadNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decorator", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Decorator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEdge", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["BaseEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AggregateEdge", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["AggregateEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectsTo", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ConnectsTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateConnector", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["CreateConnector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceBinding", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ServiceBinding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrafficConnector", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["TrafficConnector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupNode", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["GroupNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceKindsInfo", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ResourceKindsInfo"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters */ "./packages/dev-console/src/components/topology/filters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOPOLOGY_SEARCH_FILTER_KEY", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["TOPOLOGY_SEARCH_FILTER_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILTER_ACTIVE_CLASS", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["FILTER_ACTIVE_CLASS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowFiltersKeyValue", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["ShowFiltersKeyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandFiltersKeyValue", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["ExpandFiltersKeyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologyFilters", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["getTopologyFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopologySearchQuery", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["getTopologySearchQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchFilter", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["useSearchFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDisplayFilters", function() { return _filters__WEBPACK_IMPORTED_MODULE_4__["useDisplayFilters"]; });








/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/components/const.ts":
/*!************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/components/const.ts ***!
  \************************************************************************************/
/*! exports provided: TYPE_OPERATOR_BACKED_SERVICE, TYPE_OPERATOR_WORKLOAD, OPERATOR_GROUP_WIDTH, OPERATOR_GROUP_HEIGHT, OPERATOR_GROUP_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_OPERATOR_BACKED_SERVICE", function() { return TYPE_OPERATOR_BACKED_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_OPERATOR_WORKLOAD", function() { return TYPE_OPERATOR_WORKLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GROUP_WIDTH", function() { return OPERATOR_GROUP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GROUP_HEIGHT", function() { return OPERATOR_GROUP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GROUP_PADDING", function() { return OPERATOR_GROUP_PADDING; });
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/const */ "./packages/dev-console/src/components/topology/components/const.ts");

const TYPE_OPERATOR_BACKED_SERVICE = 'operator-backed-service';
const TYPE_OPERATOR_WORKLOAD = 'operator-workload';
const OPERATOR_GROUP_WIDTH = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_WIDTH"];
const OPERATOR_GROUP_HEIGHT = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_HEIGHT"];
const OPERATOR_GROUP_PADDING = _components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_PADDING"];


/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/operators-data-transformer.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/operators-data-transformer.ts ***!
  \**********************************************************************************************/
/*! exports provided: getOperatorTopologyDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorTopologyDataModel", function() { return getOperatorTopologyDataModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-transforms/transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");




const getOperatorTopologyDataModel = (resources, allResources, installedOperators, utils, transformBy, serviceBindingRequests) => {
    const operatorsDataModel = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    const operatorBackedServiceKindMap = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getOperatorBackedServiceKindMap"])(installedOperators);
    const operatorMap = {};
    const obsGroups = {};
    const transformResourceData = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["createInstanceForResource"])(resources, utils, installedOperators);
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](transformBy, (key) => {
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](resources[key].data)) {
            const typedDataModel = {
                graph: { nodes: [], edges: [], groups: [] },
                topology: {},
            };
            transformResourceData[key](resources[key].data, true).forEach((item) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                const { obj: deploymentConfig } = item;
                const uid = (_a = deploymentConfig === null || deploymentConfig === void 0 ? void 0 : deploymentConfig.metadata) === null || _a === void 0 ? void 0 : _a.uid;
                const ownerReference = (_c = (_b = deploymentConfig === null || deploymentConfig === void 0 ? void 0 : deploymentConfig.metadata) === null || _b === void 0 ? void 0 : _b.ownerReferences) === null || _c === void 0 ? void 0 : _c[0];
                const ownerUid = ownerReference === null || ownerReference === void 0 ? void 0 : ownerReference.uid;
                const nodeResourceKind = ownerReference === null || ownerReference === void 0 ? void 0 : ownerReference.kind;
                const operatorBackedServiceKind = operatorBackedServiceKindMap === null || operatorBackedServiceKindMap === void 0 ? void 0 : operatorBackedServiceKindMap[nodeResourceKind];
                const appGroup = (_e = (_d = deploymentConfig === null || deploymentConfig === void 0 ? void 0 : deploymentConfig.metadata) === null || _d === void 0 ? void 0 : _d.labels) === null || _e === void 0 ? void 0 : _e['app.kubernetes.io/part-of'];
                let operator = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](installedOperators, {
                    metadata: { uid: ownerUid },
                });
                if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](operator)) {
                    operator = operatorBackedServiceKind;
                }
                const csvIcon = ((_g = (_f = operatorBackedServiceKind === null || operatorBackedServiceKind === void 0 ? void 0 : operatorBackedServiceKind.spec) === null || _f === void 0 ? void 0 : _f.icon) === null || _g === void 0 ? void 0 : _g[0]) || ((_j = (_h = operator === null || operator === void 0 ? void 0 : operator.spec) === null || _h === void 0 ? void 0 : _h.icon) === null || _j === void 0 ? void 0 : _j[0]);
                const operatorName = appGroup
                    ? `${appGroup}:${operator.metadata.name}`
                    : operator.metadata.name;
                typedDataModel.topology[uid] = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["createTopologyNodeData"])(item, _components_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_OPERATOR_BACKED_SERVICE"], Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getImageForCSVIcon"])(csvIcon) || Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getDefaultOperatorIcon"])(), true);
                typedDataModel.graph.nodes.push(Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodeItem"])(deploymentConfig, _components_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_OPERATOR_WORKLOAD"]));
                typedDataModel.graph.edges.push(...Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyEdgeItems"])(deploymentConfig, allResources, serviceBindingRequests));
                operatorMap[operatorName] = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, operator, {
                    metadata: {
                        uid: `${operatorName}:${operator.metadata.uid}`,
                    },
                });
                if (!(operatorName in obsGroups)) {
                    obsGroups[operatorName] = [];
                }
                obsGroups[operatorName].push(deploymentConfig.metadata.uid);
                if (appGroup) {
                    const newGroup = Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyGroupItems"])(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, deploymentConfig, {
                        metadata: {
                            uid: `${operatorName}:${operator.metadata.uid}`,
                        },
                    }));
                    Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["mergeGroup"])(newGroup, typedDataModel.graph.groups);
                }
            });
            Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["addToTopologyDataModel"])(typedDataModel, operatorsDataModel);
        }
    });
    lodash__WEBPACK_IMPORTED_MODULE_0__["forIn"](obsGroups, (children, grp) => {
        var _a, _b, _c;
        const groupDataModel = {
            graph: { nodes: [], edges: [], groups: [] },
            topology: {},
        };
        groupDataModel.graph.nodes.push(Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodeItem"])(operatorMap[grp], _components_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_OPERATOR_BACKED_SERVICE"], children));
        groupDataModel.topology[operatorMap[grp].metadata.uid] = {
            id: operatorMap[grp].metadata.uid,
            name: operatorMap[grp].metadata.name,
            type: _components_const__WEBPACK_IMPORTED_MODULE_2__["TYPE_OPERATOR_BACKED_SERVICE"],
            resources: {
                obj: operatorMap[grp],
                buildConfigs: [],
                routes: [],
                services: [],
                isOperatorBackedService: true,
            },
            operatorBackedService: true,
            data: {
                builderImage: Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getImageForCSVIcon"])((_c = (_b = (_a = operatorMap === null || operatorMap === void 0 ? void 0 : operatorMap[grp]) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.icon) === null || _c === void 0 ? void 0 : _c[0]) || Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_1__["getDefaultOperatorIcon"])(),
            },
        };
        Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_3__["addToTopologyDataModel"])(groupDataModel, operatorsDataModel);
    });
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](transformBy, (key) => {
        const operatorResources = transformResourceData[key](resources[key].data, true);
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](resources[key].data) && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](operatorResources)) {
            resources[key].data = resources[key].data.filter((resource) => !operatorResources.find((operatorResource) => operatorResource.obj.metadata.uid === resource.metadata.uid));
        }
    });
    return operatorsDataModel;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/operators/operators-topology-model.ts":
/*!********************************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/operators/operators-topology-model.ts ***!
  \********************************************************************************************/
/*! exports provided: getOperatorGroupModel, getOperatorNodeModel, getOperatorEdgeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorGroupModel", function() { return getOperatorGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorNodeModel", function() { return getOperatorNodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorEdgeModel", function() { return getOperatorEdgeModel; });
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-transforms/transform-utils */ "./packages/dev-console/src/components/topology/data-transforms/transform-utils.ts");
/* harmony import */ var _console_topology_src_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/topology/src/types */ "./packages/topology/src/types.ts");



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOperatorGroupModel = (d, model, filters) => {
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOperatorNodeModel = (d, model, filters) => {
    if (d.type === _components_const__WEBPACK_IMPORTED_MODULE_0__["TYPE_OPERATOR_BACKED_SERVICE"]) {
        const data = model.topology[d.id] || Object(_data_transforms_transform_utils__WEBPACK_IMPORTED_MODULE_1__["dataObjectFromModel"])(d);
        data.groupResources = d.children && d.children.map((id) => model.topology[id]);
        return {
            width: _components_const__WEBPACK_IMPORTED_MODULE_0__["OPERATOR_GROUP_WIDTH"],
            height: _components_const__WEBPACK_IMPORTED_MODULE_0__["OPERATOR_GROUP_HEIGHT"],
            id: d.id,
            type: d.type,
            label: model.topology[d.id].name,
            data,
            visible: true,
            collapsed: filters && d.type === _components_const__WEBPACK_IMPORTED_MODULE_0__["TYPE_OPERATOR_BACKED_SERVICE"] && !filters.display.operatorGrouping,
            children: d.children,
            group: true,
            shape: _console_topology_src_types__WEBPACK_IMPORTED_MODULE_2__["NodeShape"].rect,
            style: {
                padding: _components_const__WEBPACK_IMPORTED_MODULE_0__["OPERATOR_GROUP_PADDING"],
            },
        };
    }
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOperatorEdgeModel = (d, model, filters) => {
    return null;
};


/***/ }),

/***/ "./packages/dev-console/src/components/topology/topology-types.ts":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/topology-types.ts ***!
  \************************************************************************/
/*! exports provided: GraphElementType, SHOW_GROUPING_HINT_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphElementType", function() { return GraphElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_GROUPING_HINT_EVENT", function() { return SHOW_GROUPING_HINT_EVENT; });
var GraphElementType;
(function (GraphElementType) {
    GraphElementType["node"] = "node";
    GraphElementType["edge"] = "edge";
    GraphElementType["group"] = "group";
})(GraphElementType || (GraphElementType = {}));
const SHOW_GROUPING_HINT_EVENT = 'show-regroup-hint';


/***/ }),

/***/ "./packages/dev-console/src/components/topology/topology-utils.ts":
/*!************************************************************************!*\
  !*** ./packages/dev-console/src/components/topology/topology-utils.ts ***!
  \************************************************************************/
/*! exports provided: allowedResources, getServiceBindingStatus, getCheURL, getEditURL, getHelmReleaseKey, isHelmReleaseNode, getKialiLink, filterBasedOnActiveApplication, getRoutesURL, getTopologyResourceObject, updateTopologyResourceApplication, createTopologyResourceConnection, removeTopologyResourceConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedResources", function() { return allowedResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceBindingStatus", function() { return getServiceBindingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheURL", function() { return getCheURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditURL", function() { return getEditURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelmReleaseKey", function() { return getHelmReleaseKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHelmReleaseNode", function() { return isHelmReleaseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKialiLink", function() { return getKialiLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBasedOnActiveApplication", function() { return filterBasedOnActiveApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutesURL", function() { return getRoutesURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologyResourceObject", function() { return getTopologyResourceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTopologyResourceApplication", function() { return updateTopologyResourceApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopologyResourceConnection", function() { return createTopologyResourceConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTopologyResourceConnection", function() { return removeTopologyResourceConnection; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/routes */ "./public/components/routes.tsx");
/* harmony import */ var _utils_application_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/application-utils */ "./packages/dev-console/src/utils/application-utils.ts");
/* harmony import */ var _operators_components_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/components/const */ "./packages/dev-console/src/components/topology/operators/components/const.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../const */ "./packages/dev-console/src/const.ts");






const allowedResources = ['deployments', 'deploymentConfigs', 'daemonSets', 'statefulSets'];
const getServiceBindingStatus = ({ FLAGS }) => FLAGS.get(_const__WEBPACK_IMPORTED_MODULE_5__["ALLOW_SERVICE_BINDING"]);
const getCheURL = (consoleLinks) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](lodash__WEBPACK_IMPORTED_MODULE_0__["find"](consoleLinks, ['metadata.name', 'che']), 'spec.href', '');
const getEditURL = (gitURL, cheURL) => {
    return gitURL && cheURL ? `${cheURL}/f?url=${gitURL}&policies.create=peruser` : gitURL;
};
const getHelmReleaseKey = (resource) => `${resource.kind}---${resource.metadata.name}`;
const isHelmReleaseNode = (obj, helmResourcesMap) => {
    if (helmResourcesMap) {
        return helmResourcesMap.hasOwnProperty(getHelmReleaseKey(obj));
    }
    return false;
};
const getKialiLink = (consoleLinks, namespace) => {
    var _a, _b;
    const kialiLink = (_b = (_a = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](consoleLinks, ['metadata.name', `kiali-namespace-${namespace}`])) === null || _a === void 0 ? void 0 : _a.spec) === null || _b === void 0 ? void 0 : _b.href;
    return kialiLink || '';
};
/**
 * filter data based on the active application
 */
const filterBasedOnActiveApplication = (data, application) => {
    const PART_OF = 'app.kubernetes.io/part-of';
    if (!application) {
        return data;
    }
    return data.filter((dc) => {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](dc, ['metadata', 'labels', PART_OF]) === application;
    });
};
/**
 * get the route data
 */
const getRouteData = (ksroutes, resource) => {
    if (ksroutes && ksroutes.length > 0 && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](ksroutes[0].status)) {
        const trafficData = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](ksroutes[0].status.traffic, {
            revisionName: resource.obj.metadata.name,
        });
        return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](trafficData, 'url', ksroutes[0].status.url);
    }
    return null;
};
/**
 * get routes url
 */
const getRoutesURL = (resource) => {
    const { routes, ksroutes } = resource;
    if (routes.length > 0 && !lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](routes[0].spec)) {
        return Object(_console_internal_components_routes__WEBPACK_IMPORTED_MODULE_2__["getRouteWebURL"])(routes[0]);
    }
    return getRouteData(ksroutes, resource);
};
const getTopologyResourceObject = (topologyObject) => {
    if (!topologyObject) {
        return null;
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](topologyObject, ['resources', 'obj']);
};
const updateTopologyResourceApplication = (item, application) => {
    if (!item || !lodash__WEBPACK_IMPORTED_MODULE_0__["size"](item.resources)) {
        return Promise.reject();
    }
    const resources = [];
    const updates = [];
    resources.push(getTopologyResourceObject(item));
    if (item.type === _operators_components_const__WEBPACK_IMPORTED_MODULE_4__["TYPE_OPERATOR_BACKED_SERVICE"]) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](item.groupResources, (groupResource) => {
            resources.push(getTopologyResourceObject(groupResource));
        });
    }
    for (const resource of resources) {
        const resourceKind = Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(resource));
        if (!resourceKind) {
            return Promise.reject(new Error(`Unable to update application, invalid resource type: ${resource.kind}`));
        }
        updates.push(Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["updateResourceApplication"])(resourceKind, resource, application));
    }
    return Promise.all(updates);
};
const createTopologyResourceConnection = (source, target, replaceTarget = null, serviceBindingFlag) => {
    if (!source || !target || source === target) {
        return Promise.reject(new Error('Can not create a connection from a node to itself.'));
    }
    const sourceObj = getTopologyResourceObject(source);
    const targetObj = getTopologyResourceObject(target);
    const replaceTargetObj = replaceTarget && getTopologyResourceObject(replaceTarget);
    if (serviceBindingFlag && target.operatorBackedService) {
        if (replaceTarget) {
            return new Promise((resolve, reject) => {
                Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["createServiceBinding"])(sourceObj, targetObj)
                    .then(() => {
                    // eslint-disable-next-line promise/no-nesting
                    Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["removeResourceConnection"])(sourceObj, replaceTargetObj)
                        .then(resolve)
                        .catch(reject);
                })
                    .catch(reject);
            });
        }
        return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["createServiceBinding"])(sourceObj, targetObj);
    }
    return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["createResourceConnection"])(sourceObj, targetObj, replaceTargetObj);
};
const removeTopologyResourceConnection = (source, target, sbr, edgeType) => {
    if (!source || !target) {
        return Promise.reject();
    }
    const sourceObj = getTopologyResourceObject(source);
    const targetObj = getTopologyResourceObject(target);
    if (edgeType === 'service-binding') {
        return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["removeServiceBinding"])(sbr);
    }
    return Object(_utils_application_utils__WEBPACK_IMPORTED_MODULE_3__["removeResourceConnection"])(sourceObj, targetObj);
};


/***/ }),

/***/ "./packages/knative-plugin/src/topology/const.ts":
/*!*******************************************************!*\
  !*** ./packages/knative-plugin/src/topology/const.ts ***!
  \*******************************************************/
/*! exports provided: TYPE_EVENT_SOURCE, TYPE_EVENT_SOURCE_LINK, TYPE_KNATIVE_SERVICE, TYPE_REVISION_TRAFFIC, TYPE_KNATIVE_REVISION, KNATIVE_GROUP_NODE_WIDTH, KNATIVE_GROUP_NODE_HEIGHT, KNATIVE_GROUP_NODE_PADDING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_EVENT_SOURCE", function() { return TYPE_EVENT_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_EVENT_SOURCE_LINK", function() { return TYPE_EVENT_SOURCE_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_KNATIVE_SERVICE", function() { return TYPE_KNATIVE_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_REVISION_TRAFFIC", function() { return TYPE_REVISION_TRAFFIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_KNATIVE_REVISION", function() { return TYPE_KNATIVE_REVISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNATIVE_GROUP_NODE_WIDTH", function() { return KNATIVE_GROUP_NODE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNATIVE_GROUP_NODE_HEIGHT", function() { return KNATIVE_GROUP_NODE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KNATIVE_GROUP_NODE_PADDING", function() { return KNATIVE_GROUP_NODE_PADDING; });
/* harmony import */ var _console_dev_console_src_components_topology_components_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/dev-console/src/components/topology/components/const */ "./packages/dev-console/src/components/topology/components/const.ts");

const TYPE_EVENT_SOURCE = 'event-source';
const TYPE_EVENT_SOURCE_LINK = 'event-source-link';
const TYPE_KNATIVE_SERVICE = 'knative-service';
const TYPE_REVISION_TRAFFIC = 'revision-traffic';
const TYPE_KNATIVE_REVISION = 'knative-revision';
const KNATIVE_GROUP_NODE_WIDTH = _console_dev_console_src_components_topology_components_const__WEBPACK_IMPORTED_MODULE_0__["GROUP_WIDTH"];
const KNATIVE_GROUP_NODE_HEIGHT = 100;
const KNATIVE_GROUP_NODE_PADDING = [
    _console_dev_console_src_components_topology_components_const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_GROUP_PAD"],
    _console_dev_console_src_components_topology_components_const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_GROUP_PAD"],
    _console_dev_console_src_components_topology_components_const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_GROUP_PAD"] + 10,
    _console_dev_console_src_components_topology_components_const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_GROUP_PAD"],
];


/***/ }),

/***/ "./packages/knative-plugin/src/topology/data-transformer.ts":
/*!******************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/data-transformer.ts ***!
  \******************************************************************/
/*! exports provided: filterNonKnativeDeployments, getKnativeTopologyDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNonKnativeDeployments", function() { return filterNonKnativeDeployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeTopologyDataModel", function() { return getKnativeTopologyDataModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch-dynamic-eventsources-utils */ "./packages/knative-plugin/src/utils/fetch-dynamic-eventsources-utils.ts");
/* harmony import */ var _knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knative-topology-utils */ "./packages/knative-plugin/src/topology/knative-topology-utils.ts");





/**
 * Filter out deployments not created via revisions/eventsources
 */
const filterNonKnativeDeployments = (resources, eventSources) => {
    const KNATIVE_CONFIGURATION = 'serving.knative.dev/configuration';
    const isEventSourceKind = (uid) => uid && !!(eventSources === null || eventSources === void 0 ? void 0 : eventSources.find((eventSource) => { var _a; return ((_a = eventSource.metadata) === null || _a === void 0 ? void 0 : _a.uid) === uid; }));
    return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](resources, (d) => {
        var _a, _b;
        return (!lodash__WEBPACK_IMPORTED_MODULE_0__["get"](d, ['metadata', 'labels', KNATIVE_CONFIGURATION], false) &&
            !isEventSourceKind((_b = (_a = d.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b[0].uid));
    });
};
const addKnativeTopologyData = (topologyDataModel, knativeResources, allResources, type, resources, operatorBackedServiceKindMap, utils) => {
    if (!(knativeResources === null || knativeResources === void 0 ? void 0 : knativeResources.length)) {
        return;
    }
    const knativeResourceDataModel = Object(_knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__["transformKnNodeData"])(knativeResources, type, resources, allResources, operatorBackedServiceKindMap, utils);
    Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_2__["addToTopologyDataModel"])(knativeResourceDataModel, topologyDataModel);
};
const getKnativeEventSources = (resources) => {
    const evenSourceProps = Object(_utils_fetch_dynamic_eventsources_utils__WEBPACK_IMPORTED_MODULE_3__["getDynamicEventSourcesModelRefs"])();
    return evenSourceProps.reduce((acc, currProp) => {
        var _a, _b;
        const currPropResource = (_b = (_a = resources[currProp]) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : [];
        return [...acc, ...currPropResource];
    }, []);
};
const getKnativeTopologyDataModel = (resources, allResources, installedOperators, utils) => {
    const knativeTopologyDataModel = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    const operatorBackedServiceKindMap = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getOperatorBackedServiceKindMap"])(installedOperators);
    const knSvcResources = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, ['ksservices', 'data'], []);
    const knEventSources = getKnativeEventSources(resources);
    const knRevResources = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, ['revisions', 'data'], []);
    addKnativeTopologyData(knativeTopologyDataModel, knSvcResources, allResources, _knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__["NodeType"].KnService, resources, operatorBackedServiceKindMap, utils);
    addKnativeTopologyData(knativeTopologyDataModel, knEventSources, allResources, _knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__["NodeType"].EventSource, resources, operatorBackedServiceKindMap, utils);
    addKnativeTopologyData(knativeTopologyDataModel, knRevResources, allResources, _knative_topology_utils__WEBPACK_IMPORTED_MODULE_4__["NodeType"].Revision, resources, operatorBackedServiceKindMap, utils);
    const deploymentResources = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, ['deployments', 'data'], []);
    resources.deployments.data = filterNonKnativeDeployments(deploymentResources, knEventSources);
    return knativeTopologyDataModel;
};


/***/ }),

/***/ "./packages/knative-plugin/src/topology/knative-topology-model.ts":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/knative-topology-model.ts ***!
  \************************************************************************/
/*! exports provided: getKnativeGroupModel, getKnativeNodeModel, getKnativeEdgeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeGroupModel", function() { return getKnativeGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeNodeModel", function() { return getKnativeNodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeEdgeModel", function() { return getKnativeEdgeModel; });
/* harmony import */ var _console_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/topology */ "./packages/topology/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./packages/knative-plugin/src/topology/const.ts");



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getKnativeGroupModel = (d, model, filters) => {
    return null;
};
const getKnativeNodeModel = (d, model, filters) => {
    if (d.type === _const__WEBPACK_IMPORTED_MODULE_2__["TYPE_EVENT_SOURCE"]) {
        const hidden = filters && !filters.display.eventSources;
        return {
            width: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["NODE_WIDTH"],
            height: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["NODE_HEIGHT"],
            id: d.id,
            type: d.type,
            visible: !hidden,
            label: model.topology[d.id].name,
            data: model.topology[d.id],
            style: {
                padding: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["NODE_PADDING"],
            },
        };
    }
    if (d.type === _const__WEBPACK_IMPORTED_MODULE_2__["TYPE_KNATIVE_SERVICE"]) {
        const data = model.topology[d.id] || Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_1__["dataObjectFromModel"])(d);
        data.groupResources = d.children && d.children.map((id) => model.topology[id]);
        return {
            width: _const__WEBPACK_IMPORTED_MODULE_2__["KNATIVE_GROUP_NODE_WIDTH"],
            height: _const__WEBPACK_IMPORTED_MODULE_2__["KNATIVE_GROUP_NODE_HEIGHT"],
            id: d.id,
            type: d.type,
            visible: true,
            label: model.topology[d.id].name,
            data,
            collapsed: filters && !filters.display.knativeServices,
            children: d.children,
            group: true,
            shape: _console_topology__WEBPACK_IMPORTED_MODULE_0__["NodeShape"].rect,
            style: {
                padding: _const__WEBPACK_IMPORTED_MODULE_2__["KNATIVE_GROUP_NODE_PADDING"],
            },
        };
    }
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getKnativeEdgeModel = (d, model, filters) => {
    return null;
};


/***/ }),

/***/ "./packages/knative-plugin/src/topology/knative-topology-utils.ts":
/*!************************************************************************!*\
  !*** ./packages/knative-plugin/src/topology/knative-topology-utils.ts ***!
  \************************************************************************/
/*! exports provided: NodeType, EdgeType, getEventSourceStatus, getParentResource, filterRevisionsByActiveApplication, getKnativeServiceData, filterRevisionsBaseOnTrafficStatus, getKnativeTopologyNodeItems, getEventTopologyEdgeItems, getTrafficTopologyEdgeItems, createTopologyServiceNodeData, transformKnNodeData, createKnativeEventSourceSink, createTopologySinkConnection, createSinkConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeType", function() { return EdgeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventSourceStatus", function() { return getEventSourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentResource", function() { return getParentResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRevisionsByActiveApplication", function() { return filterRevisionsByActiveApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeServiceData", function() { return getKnativeServiceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRevisionsBaseOnTrafficStatus", function() { return filterRevisionsBaseOnTrafficStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKnativeTopologyNodeItems", function() { return getKnativeTopologyNodeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTopologyEdgeItems", function() { return getEventTopologyEdgeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrafficTopologyEdgeItems", function() { return getTrafficTopologyEdgeItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopologyServiceNodeData", function() { return createTopologyServiceNodeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformKnNodeData", function() { return transformKnNodeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKnativeEventSourceSink", function() { return createKnativeEventSourceSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopologySinkConnection", function() { return createTopologySinkConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSinkConnection", function() { return createSinkConnection; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./packages/knative-plugin/src/const.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./packages/knative-plugin/src/models.ts");








var NodeType;
(function (NodeType) {
    NodeType["EventSource"] = "event-source";
    NodeType["KnService"] = "knative-service";
    NodeType["Revision"] = "knative-revision";
})(NodeType || (NodeType = {}));
var EdgeType;
(function (EdgeType) {
    EdgeType["Traffic"] = "revision-traffic";
    EdgeType["EventSource"] = "event-source-link";
})(EdgeType || (EdgeType = {}));
/**
 * returns if event source is enabled or not
 * @param Flags
 */
const getEventSourceStatus = ({ FLAGS }) => FLAGS.get(_const__WEBPACK_IMPORTED_MODULE_6__["FLAG_KNATIVE_EVENTING"]);
/**
 * fetch the parent resource from a resource
 * @param resource
 * @param resources
 */
const getParentResource = (resource, resources) => {
    const parentUids = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['metadata', 'ownerReferences'], []), (owner) => owner.uid);
    const [resourcesParent] = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](resources, ({ metadata: { uid } }) => parentUids.includes(uid));
    return resourcesParent;
};
/**
 * Filters revision based on active application
 * @param revisions
 * @param resources
 * @param application
 */
const filterRevisionsByActiveApplication = (revisions, resources, application) => {
    const filteredRevisions = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](revisions, (revision) => {
        const configuration = getParentResource(revision, resources.configurations.data);
        const service = getParentResource(configuration, resources.ksservices.data);
        const hasTraffic = service &&
            service.status &&
            lodash__WEBPACK_IMPORTED_MODULE_0__["find"](service.status.traffic, { revisionName: revision.metadata.name });
        const isServicePartofGroup = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["filterBasedOnActiveApplication"])([service], application).length > 0;
        if (hasTraffic && isServicePartofGroup) {
            filteredRevisions.push(revision);
        }
    });
    return filteredRevisions;
};
/**
 * Forms data with respective revisions, configurations, routes based on kntaive service
 */
const getKnativeServiceData = (resource, resources, utils) => {
    const configurations = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getOwnedResources"])(resource, resources.configurations.data);
    const revisions = configurations && configurations.length
        ? Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getOwnedResources"])(configurations[0], resources.revisions.data)
        : undefined;
    const revisionsDeploymentData = lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](revisions, (acc, revision) => {
        let revisionDep = revision;
        let pods;
        if (resources.deployments) {
            const transformResourceData = new _console_shared__WEBPACK_IMPORTED_MODULE_2__["TransformResourceData"](resources);
            const associatedDeployment = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getOwnedResources"])(revision, resources.deployments.data);
            if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](associatedDeployment)) {
                const depObj = Object.assign(Object.assign({}, associatedDeployment[0]), { apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentModel"]), kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentModel"].kind });
                const replicaSets = transformResourceData.getReplicaSetsForResource(depObj);
                const [current, previous] = replicaSets;
                pods = [...lodash__WEBPACK_IMPORTED_MODULE_0__["get"](current, 'pods', []), ...lodash__WEBPACK_IMPORTED_MODULE_0__["get"](previous, 'pods', [])];
                revisionDep = Object.assign(Object.assign({}, revisionDep), { resources: { pods, current } });
            }
        }
        acc.revisionsDep.push(revisionDep);
        pods && acc.allPods.push(...pods);
        return acc;
    }, { revisionsDep: [], allPods: [] });
    const ksroutes = resources.ksroutes
        ? Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getOwnedResources"])(resource, resources.ksroutes.data)
        : undefined;
    const buildConfigs = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getBuildConfigsForResource"])(resource, resources);
    const overviewItem = {
        configurations,
        revisions: revisionsDeploymentData.revisionsDep,
        ksroutes,
        buildConfigs,
        pods: revisionsDeploymentData.allPods,
    };
    if (utils) {
        return utils.reduce((acc, element) => {
            return Object.assign(Object.assign({}, acc), element(resource, resources));
        }, overviewItem);
    }
    return overviewItem;
};
/**
 * Rollup data for deployments for revisions/ event sources
 */
const createKnativeDeploymentItems = (resource, resources, utils) => {
    const transformResourceData = new _console_shared__WEBPACK_IMPORTED_MODULE_2__["TransformResourceData"](resources, utils);
    const associatedDeployment = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getOwnedResources"])(resource, resources.deployments.data);
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](associatedDeployment)) {
        const depObj = Object.assign(Object.assign({}, associatedDeployment[0]), { apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["apiVersionForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentModel"]), kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["DeploymentModel"].kind });
        const replicaSets = transformResourceData.getReplicaSetsForResource(depObj);
        const [current, previous] = replicaSets;
        const isRollingOut = !!current && !!previous;
        const buildConfigs = transformResourceData.getBuildConfigsForResource(depObj);
        const services = transformResourceData.getServicesForResource(depObj);
        const routes = transformResourceData.getRoutesForServices(services);
        const alerts = Object.assign(Object.assign({}, Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getResourcePausedAlert"])(depObj)), Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getBuildAlerts"])(buildConfigs));
        const overviewItems = {
            obj: resource,
            alerts,
            buildConfigs,
            current,
            isRollingOut,
            previous,
            pods: [...lodash__WEBPACK_IMPORTED_MODULE_0__["get"](current, 'pods', []), ...lodash__WEBPACK_IMPORTED_MODULE_0__["get"](previous, 'pods', [])],
            routes,
            services,
        };
        if (utils) {
            return utils.reduce((acc, element) => {
                return Object.assign(Object.assign({}, acc), element(depObj, resources));
            }, overviewItems);
        }
        return overviewItems;
    }
    const knResources = getKnativeServiceData(resource, resources, utils);
    return Object.assign({ obj: resource, buildConfigs: [], routes: [], services: [] }, knResources);
};
/**
 * only get revision which are included in traffic data
 */
const filterRevisionsBaseOnTrafficStatus = (resource, revisions) => {
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'status.traffic', null))
        return undefined;
    return resource.status.traffic.reduce((acc, curr) => {
        const el = revisions.find((rev) => curr.revisionName === rev.metadata.name);
        return el ? [...acc, el] : acc;
    }, []);
};
/**
 * Form Node data for revisions/event/service sources
 */
const getKnativeTopologyNodeItems = (resource, type, resources) => {
    const nodes = [];
    const children = [];
    if (type === NodeType.KnService && resources && resources.configurations) {
        const configurations = Object(_console_shared__WEBPACK_IMPORTED_MODULE_2__["getOwnedResources"])(resource, resources.configurations.data);
        const configUidData = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](configurations[0], ['metadata', 'uid']);
        const ChildData = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](resources.revisions.data, {
            metadata: {
                ownerReferences: [{ uid: configUidData }],
            },
        });
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](filterRevisionsBaseOnTrafficStatus(resource, ChildData), (c) => {
            const uidRev = c.metadata.uid;
            children.push(uidRev);
            nodes.push(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodeItem"])(c, NodeType.Revision));
        });
    }
    nodes.push(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodeItem"])(resource, type, children));
    return nodes;
};
/**
 * Form Edge data for event sources
 */
const getEventTopologyEdgeItems = (resource, { data }) => {
    const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['metadata', 'uid']);
    const sinkSvc = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.sink.ref', null) || lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, 'spec.sink', null);
    const edges = [];
    if (sinkSvc && sinkSvc.kind === _models__WEBPACK_IMPORTED_MODULE_7__["ServiceModel"].kind) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](data, (res) => {
            const resname = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](res, ['metadata', 'name']);
            const resUid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](res, ['metadata', 'uid']);
            if (resname === sinkSvc.name) {
                edges.push({
                    id: `${uid}_${resUid}`,
                    type: EdgeType.EventSource,
                    source: uid,
                    target: resUid,
                });
            }
        });
    }
    return edges;
};
/**
 * Form Edge data for service sources with traffic data
 */
const getTrafficTopologyEdgeItems = (resource, { data }) => {
    const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['metadata', 'uid']);
    const trafficSvc = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resource, ['status', 'traffic'], []);
    const edges = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](trafficSvc, (res) => {
        const resname = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](res, ['revisionName']);
        const trafficPercent = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](res, ['percent']);
        const revisionObj = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](data, (rev) => {
            const revname = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](rev, ['metadata', 'name']);
            return revname === resname;
        });
        const resUid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](revisionObj, ['metadata', 'uid'], null);
        if (resUid) {
            const revisionIndex = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](edges, (edge) => edge.id === `${uid}_${resUid}`);
            if (revisionIndex >= 0) {
                edges[revisionIndex].data.percent += trafficPercent;
            }
            else {
                edges.push({
                    id: `${uid}_${resUid}`,
                    type: EdgeType.Traffic,
                    source: uid,
                    target: resUid,
                    data: { percent: trafficPercent },
                });
            }
        }
    });
    return edges;
};
/**
 * create all data that need to be shown on a topology data for knative service
 */
const createTopologyServiceNodeData = (svcRes, operatorBackedServiceKindMap, type) => {
    var _a, _b, _c, _d;
    const { pipelines = [], pipelineRuns = [] } = svcRes;
    const { obj: knativeSvc } = svcRes;
    const uid = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](knativeSvc, 'metadata.uid');
    const labels = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](knativeSvc, 'metadata.labels', {});
    const annotations = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](knativeSvc, 'metadata.annotations', {});
    const nodeResourceKind = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](knativeSvc, 'metadata.ownerReferences[0].kind');
    return {
        id: uid,
        name: lodash__WEBPACK_IMPORTED_MODULE_0__["get"](knativeSvc, 'metadata.name') || labels['app.kubernetes.io/instance'],
        type,
        resources: Object.assign({}, svcRes),
        operatorBackedService: nodeResourceKind in operatorBackedServiceKindMap,
        data: {
            url: ((_a = knativeSvc.status) === null || _a === void 0 ? void 0 : _a.url) || '',
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(knativeSvc),
            editURL: annotations['app.openshift.io/edit-url'],
            vcsURI: annotations['app.openshift.io/vcs-uri'],
            isKnativeResource: true,
            connectedPipeline: {
                pipeline: pipelines[0],
                pipelineRuns,
            },
            build: (_d = (_c = (_b = svcRes.buildConfigs) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.builds) === null || _d === void 0 ? void 0 : _d[0],
        },
    };
};
const transformKnNodeData = (knResourcesData, type, resources, allResources, operatorBackedServiceKindMap, utils) => {
    const knDataModel = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    const serviceBindingRequests = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](resources, 'serviceBindingRequests.data');
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](knResourcesData, (res) => {
        const { uid } = res.metadata;
        const item = createKnativeDeploymentItems(res, resources, utils);
        switch (type) {
            case NodeType.EventSource: {
                knDataModel.topology[uid] = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["createTopologyNodeData"])(item, type, Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_4__["getImageForIconClass"])(`icon-openshift`));
                knDataModel.graph.nodes.push(...getKnativeTopologyNodeItems(res, type, resources));
                knDataModel.graph.edges.push(...getEventTopologyEdgeItems(res, resources.ksservices));
                const newGroup = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyGroupItems"])(res);
                Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["mergeGroup"])(newGroup, knDataModel.graph.groups);
                break;
            }
            case NodeType.Revision: {
                const revisionItem = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](item, ['pipelines', 'pipelineRuns', 'buildConfigs']);
                knDataModel.topology[uid] = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["createTopologyNodeData"])(revisionItem, type, Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_4__["getImageForIconClass"])(`icon-openshift`));
                break;
            }
            case NodeType.KnService: {
                knDataModel.topology[uid] = createTopologyServiceNodeData(item, operatorBackedServiceKindMap, type);
                knDataModel.graph.nodes.push(...getKnativeTopologyNodeItems(res, type, resources));
                knDataModel.graph.edges.push(...getTrafficTopologyEdgeItems(res, resources.revisions), ...Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyEdgeItems"])(res, allResources, serviceBindingRequests));
                const newGroup = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyGroupItems"])(res);
                Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["mergeGroup"])(newGroup, knDataModel.graph.groups);
                break;
            }
            default:
                break;
        }
    });
    return knDataModel;
};
const createKnativeEventSourceSink = (source, target) => {
    if (!source || !target || source === target) {
        return Promise.reject();
    }
    const targetName = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](target, 'metadata.name');
    const eventSourceObj = lodash__WEBPACK_IMPORTED_MODULE_0__["omit"](source, 'status');
    const sink = {
        ref: {
            apiVersion: target.apiVersion,
            kind: target.kind,
            name: targetName,
        },
    };
    const updatePayload = Object.assign(Object.assign({}, eventSourceObj), { spec: Object.assign(Object.assign({}, eventSourceObj.spec), { sink }) });
    return Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["k8sUpdate"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["modelFor"])(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceFor"])(source)), updatePayload);
};
const createTopologySinkConnection = (source, target) => {
    if (!source || !target || source === target) {
        return Promise.reject();
    }
    const sourceObj = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(source);
    const targetObj = Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyResourceObject"])(target);
    return createKnativeEventSourceSink(sourceObj, targetObj);
};
const createSinkConnection = (sourceNode, targetNode) => {
    return createTopologySinkConnection(sourceNode.getData(), targetNode.getData());
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/components/const.ts":
/*!*******************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/components/const.ts ***!
  \*******************************************************************/
/*! exports provided: TYPE_VIRTUAL_MACHINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_VIRTUAL_MACHINE", function() { return TYPE_VIRTUAL_MACHINE; });
const TYPE_VIRTUAL_MACHINE = 'virtual-machine';


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/kubevirt-data-transformer.ts":
/*!****************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/kubevirt-data-transformer.ts ***!
  \****************************************************************************/
/*! exports provided: kubevirtAllowedResources, getOperatingSystemImage, createVMOverviewItem, createVMOverviewItems, getKubevirtTopologyDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kubevirtAllowedResources", function() { return kubevirtAllowedResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatingSystemImage", function() { return getOperatingSystemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVMOverviewItem", function() { return createVMOverviewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVMOverviewItems", function() { return createVMOverviewItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKubevirtTopologyDataModel", function() { return getKubevirtTopologyDataModel; });
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/catalog/catalog-item-icon */ "./public/components/catalog/catalog-item-icon.tsx");
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./packages/kubevirt-plugin/src/models/index.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/const */ "./packages/kubevirt-plugin/src/topology/components/const.ts");
/* harmony import */ var _selectors_pod_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectors/pod/selectors */ "./packages/kubevirt-plugin/src/selectors/pod/selectors.ts");
/* harmony import */ var _statuses_vm_vm_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../statuses/vm/vm-status */ "./packages/kubevirt-plugin/src/statuses/vm/vm-status.ts");








const kubevirtAllowedResources = ['virtualmachines'];
const getOperatingSystemImage = (vm, templates) => {
    var _a, _b;
    const templateName = (_b = (_a = vm.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b['vm.kubevirt.io/template'];
    const template = templateName && templates.find((t) => t.metadata.name === templateName);
    if (!template) {
        return '';
    }
    return Object(_console_internal_components_catalog_catalog_item_icon__WEBPACK_IMPORTED_MODULE_2__["getImageForIconClass"])(template.metadata.annotations.iconClass);
};
const createVMOverviewItem = (vm, vmi, resources) => {
    const obj = Object.assign(Object.assign({}, vm), { apiVersion: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["apiVersionForModel"])(_models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"]), kind: _models__WEBPACK_IMPORTED_MODULE_4__["VirtualMachineModel"].kind });
    const { visibleReplicationControllers } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getReplicationControllersForResource"])(obj, resources);
    const [current, previous] = visibleReplicationControllers;
    const buildConfigs = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getBuildConfigsForResource"])(obj, resources);
    const services = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getServicesForResource"])(obj, resources);
    const routes = Object(_console_shared__WEBPACK_IMPORTED_MODULE_1__["getRoutesForServices"])(services, resources);
    const laucherPod = Object(_selectors_pod_selectors__WEBPACK_IMPORTED_MODULE_6__["findVMIPod"])(vmi, resources.pods.data);
    const pods = laucherPod ? [laucherPod] : [];
    return {
        buildConfigs,
        current,
        obj,
        previous,
        pods,
        routes,
        services,
        isMonitorable: false,
        isOperatorBackedService: false,
    };
};
const createVMOverviewItems = (resources) => {
    var _a;
    if (!((_a = resources.virtualmachines) === null || _a === void 0 ? void 0 : _a.data.length)) {
        return [];
    }
    return resources.virtualmachines.data.map((vm) => {
        const { name } = vm.metadata;
        const vmis = resources.virtualmachineinstances.data;
        const vmi = vmis.find((instance) => instance.metadata.name === name);
        return createVMOverviewItem(vm, vmi, resources);
    });
};
const createTopologyVMNodeData = (vmOverview, resources) => {
    var _a, _b, _c, _d, _e;
    const vm = vmOverview.obj;
    const { uid, name, labels } = vm.metadata;
    const vmis = (_a = resources.virtualmachineinstances) === null || _a === void 0 ? void 0 : _a.data;
    const vmi = vmis.find((instance) => instance.metadata.name === name);
    const pods = (_b = resources.pods) === null || _b === void 0 ? void 0 : _b.data;
    const migrations = (_c = resources.migrations) === null || _c === void 0 ? void 0 : _c.data;
    const dataVolumes = (_d = resources.dataVolumes) === null || _d === void 0 ? void 0 : _d.data;
    const vmImports = (_e = resources.vmImports) === null || _e === void 0 ? void 0 : _e.data;
    const vmStatusBundle = Object(_statuses_vm_vm_status__WEBPACK_IMPORTED_MODULE_7__["getVMStatus"])({
        vm,
        vmi,
        pods,
        migrations,
        dataVolumes,
        vmImports,
    });
    return {
        id: uid,
        name: name || labels['app.kubernetes.io/instance'],
        type: _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_VIRTUAL_MACHINE"],
        resources: vmOverview,
        operatorBackedService: false,
        data: {
            url: Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getRoutesURL"])(vmOverview),
            kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_0__["referenceFor"])(vm),
            vmi,
            vmStatusBundle,
            osImage: getOperatingSystemImage(vm, resources.virtualmachinetemplates.data),
        },
    };
};
const getKubevirtTopologyDataModel = (resources, allResources, installedOperators, utils, transformBy, serviceBindingRequests) => {
    var _a;
    const vmsDataModel = {
        graph: { nodes: [], edges: [], groups: [] },
        topology: {},
    };
    const vmsResources = [];
    if ((_a = resources.virtualmachines) === null || _a === void 0 ? void 0 : _a.data.length) {
        const typedDataModel = {
            graph: { nodes: [], edges: [], groups: [] },
            topology: {},
        };
        const vmOverviewItems = createVMOverviewItems(resources);
        vmOverviewItems.forEach((vmOverview) => {
            const vm = vmOverview.obj;
            const { uid } = vm.metadata;
            vmsResources.push(uid);
            typedDataModel.topology[uid] = createTopologyVMNodeData(vmOverview, resources);
            typedDataModel.graph.nodes.push(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyNodeItem"])(vm, _components_const__WEBPACK_IMPORTED_MODULE_5__["TYPE_VIRTUAL_MACHINE"]));
            typedDataModel.graph.edges.push(...Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyEdgeItems"])(vm, allResources, serviceBindingRequests));
            Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["mergeGroup"])(Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["getTopologyGroupItems"])(vm), typedDataModel.graph.groups);
        });
        Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_3__["addToTopologyDataModel"])(typedDataModel, vmsDataModel);
    }
    return vmsDataModel;
};


/***/ }),

/***/ "./packages/kubevirt-plugin/src/topology/kubevirt-topology-model.ts":
/*!**************************************************************************!*\
  !*** ./packages/kubevirt-plugin/src/topology/kubevirt-topology-model.ts ***!
  \**************************************************************************/
/*! exports provided: getKubevirtGroupModel, getKubevirtNodeModel, getKubevirtEdgeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKubevirtGroupModel", function() { return getKubevirtGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKubevirtNodeModel", function() { return getKubevirtNodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKubevirtEdgeModel", function() { return getKubevirtEdgeModel; });
/* harmony import */ var _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/dev-console/src/components/topology */ "./packages/dev-console/src/components/topology/index.ts");
/* harmony import */ var _components_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/const */ "./packages/kubevirt-plugin/src/topology/components/const.ts");


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getKubevirtGroupModel = (d, model, filters) => {
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getKubevirtNodeModel = (d, model, filters) => {
    if (d.type === _components_const__WEBPACK_IMPORTED_MODULE_1__["TYPE_VIRTUAL_MACHINE"]) {
        const data = model.topology[d.id] || Object(_console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_0__["dataObjectFromModel"])(d);
        const hidden = filters && !filters.display.virtualMachines;
        return {
            width: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_0__["NODE_WIDTH"],
            height: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_0__["NODE_HEIGHT"],
            id: d.id,
            type: d.type,
            label: model.topology[d.id].name,
            data,
            visible: !hidden,
            style: {
                padding: _console_dev_console_src_components_topology__WEBPACK_IMPORTED_MODULE_0__["NODE_PADDING"],
            },
        };
    }
    return null;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getKubevirtEdgeModel = (d, model, filters) => {
    return null;
};


/***/ }),

/***/ "./public/components/daemon-set.tsx":
/*!******************************************!*\
  !*** ./public/components/daemon-set.tsx ***!
  \******************************************/
/*! exports provided: menuActions, DaemonSetDetailsList, DaemonSets, DaemonSetsPage, DaemonSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetDetailsList", function() { return DaemonSetDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSets", function() { return DaemonSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetsPage", function() { return DaemonSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaemonSetsDetailsPage", function() { return DaemonSetsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");













const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__["AddHealthChecks"], _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["DaemonSetModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_5__["EditHealthChecks"], ..._utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].factory.common];
const kind = 'DaemonSet';
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_7__["Kebab"].columnClass];
const DaemonSetTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortFunc: 'daemonsetNumScheduled',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_15'),
            sortField: 'metadata.labels',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_16'),
            sortField: 'spec.selector',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[5] },
        },
    ];
};
DaemonSetTableHeader.displayName = 'DaemonSetTableHeader';
const DaemonSetTableRow = ({ obj: daemonset, index, key, style }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableRow"], { id: daemonset.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: kind, name: daemonset.metadata.name, namespace: daemonset.metadata.namespace, title: daemonset.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceLink"], { kind: "Namespace", name: daemonset.metadata.namespace, title: daemonset.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: `/k8s/ns/${daemonset.metadata.namespace}/daemonsets/${daemonset.metadata.name}/pods`, title: "pods" },
                daemonset.status.currentNumberScheduled,
                " of ",
                daemonset.status.desiredNumberScheduled,
                " pods")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LabelList"], { kind: kind, labels: daemonset.metadata.labels })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["Selector"], { selector: daemonset.spec.selector, namespace: daemonset.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceKebab"], { actions: menuActions, kind: kind, resource: daemonset }))));
};
const DaemonSetDetailsList = ({ ds }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_38'), obj: ds, path: "status.currentNumberScheduled" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_39'), obj: ds, path: "status.desiredNumberScheduled" })));
};
const DaemonSetDetails = ({ obj: daemonset }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_12__["ResourceLabel"])(daemonset, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["PodRingController"], { namespace: daemonset.metadata.namespace, kind: daemonset.kind, render: d => {
                    return d.loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_11__["PodRing"], { key: daemonset.metadata.uid, pods: d.data[daemonset.metadata.uid].pods, obj: daemonset, resourceKind: _models__WEBPACK_IMPORTED_MODULE_10__["DaemonSetModel"], enableScaling: false }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["LoadingInline"], null);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ResourceSummary"], { resource: daemonset, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DaemonSetDetailsList, { ds: daemonset })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["ContainerTable"], { containers: daemonset.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: daemonset, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') }))));
};
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const EnvironmentTab = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const { details, pods, editYaml, envEditor, events } = _utils__WEBPACK_IMPORTED_MODULE_7__["navFactory"];
const DaemonSets = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["Table"], Object.assign({}, props, { "aria-label": "Daemon Sets", Header: DaemonSetTableHeader.bind(null, t), Row: DaemonSetTableRow, virtualize: true }));
};
const DaemonSetsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_30'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_30') }), canCreate: true, ListComponent: DaemonSets, kind: kind }, props));
};
const DaemonSetPods = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_7__["PodsComponent"], Object.assign({}, props, { customData: { showNodes: true } }));
const DaemonSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["detailsPage"])(DaemonSetDetails)), editYaml(), pods(DaemonSetPods), envEditor(EnvironmentTab), events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"])] }));


/***/ }),

/***/ "./public/components/deployment.tsx":
/*!******************************************!*\
  !*** ./public/components/deployment.tsx ***!
  \******************************************/
/*! exports provided: menuActions, DeploymentDetailsList, DeploymentsDetailsPage, DeploymentsList, DeploymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentDetailsList", function() { return DeploymentDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsDetailsPage", function() { return DeploymentsDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsList", function() { return DeploymentsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsPage", function() { return DeploymentsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals */ "./public/components/modals/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conditions */ "./public/components/conditions.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _replicaset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./replicaset */ "./public/components/replicaset.jsx");
/* harmony import */ var _workload_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workload-table */ "./public/components/workload-table.tsx");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");















const deploymentsReference = 'Deployment';
const { ModifyCount, AddStorage, common } = _utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].factory;
const UpdateStrategy = (kind, deployment) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return {
        label: t('COMMON:MSG_MAIN_ACTIONBUTTON_8'),
        callback: () => Object(_modals__WEBPACK_IMPORTED_MODULE_6__["configureUpdateStrategyModal"])({ deployment }),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: deployment.metadata.name,
            namespace: deployment.metadata.namespace,
            verb: 'patch',
        },
    };
};
const PauseAction = (kind, obj) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return {
        label: obj.spec.paused ? t('COMMON:MSG_MAIN_ACTIONBUTTON_37') : t('COMMON:MSG_MAIN_ACTIONBUTTON_12'),
        callback: () => Object(_utils__WEBPACK_IMPORTED_MODULE_11__["togglePaused"])(kind, obj).catch(err => Object(_modals__WEBPACK_IMPORTED_MODULE_6__["errorModal"])({ error: err.message })),
        accessReview: {
            group: kind.apiGroup,
            resource: kind.plural,
            name: obj.metadata.name,
            namespace: obj.metadata.namespace,
            verb: 'patch',
        },
    };
};
const menuActions = [ModifyCount, PauseAction, _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["AddHealthChecks"], AddStorage, UpdateStrategy, ..._utils__WEBPACK_IMPORTED_MODULE_11__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["EditHealthChecks"], ...common];
const DeploymentDetailsList = ({ deployment }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_25'), obj: deployment, path: "spec.strategy.type" }),
        deployment.spec.strategy.type === 'RollingUpdate' && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_26'), obj: deployment, path: "spec.strategy.rollingUpdate.maxUnavailable" },
                deployment.spec.strategy.rollingUpdate.maxUnavailable || 1,
                " of ",
                Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.replicas, 'pod')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_27'), obj: deployment, path: "spec.strategy.rollingUpdate.maxSurge" },
                deployment.spec.strategy.rollingUpdate.maxSurge || 1,
                " greater than ",
                Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.replicas, 'pod')))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_28'), obj: deployment, path: "spec.progressDeadlineSeconds" }, deployment.spec.progressDeadlineSeconds ? Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.progressDeadlineSeconds, 'second') : 'Not Configured'),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["DetailsItem"], { label: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_29'), obj: deployment, path: "spec.minReadySeconds" }, deployment.spec.minReadySeconds ? Object(_utils__WEBPACK_IMPORTED_MODULE_11__["pluralize"])(deployment.spec.minReadySeconds, 'second') : 'Not Configured')));
};
DeploymentDetailsList.displayName = 'DeploymentDetailsList';
const DeploymentDetails = ({ obj: deployment }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_14__["ResourceLabel"])(deployment, t) }) }),
            deployment.spec.paused && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["WorkloadPausedAlert"], { obj: deployment, model: _models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["PodRingController"], { namespace: deployment.metadata.namespace, kind: deployment.kind, render: d => {
                    return d.loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_2__["default"], { key: deployment.metadata.uid, podData: d.data[deployment.metadata.uid], obj: deployment, resourceKind: _models__WEBPACK_IMPORTED_MODULE_4__["DeploymentModel"], path: "/spec/replicas" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["LoadingInline"], null);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ResourceSummary"], { resource: deployment, showPodSelector: true, showNodeSelector: true, showTolerations: true },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_13')),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, deployment.status.availableReplicas === deployment.status.updatedReplicas && deployment.spec.replicas === deployment.status.availableReplicas ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: "Up to date" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_1__["Status"], { status: "Updating" })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DeploymentDetailsList, { deployment: deployment }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["ContainerTable"], { containers: deployment.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: deployment, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONDITIONS_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_conditions__WEBPACK_IMPORTED_MODULE_7__["Conditions"], { conditions: deployment.status.conditions }))));
};
DeploymentDetails.displayName = 'DeploymentDetails';
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_11__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const environmentComponent = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const ReplicaSetsTab = ({ obj }) => {
    const { metadata: { namespace }, spec: { selector }, } = obj;
    // Hide the create button to avoid confusion when showing replica sets for an object.
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_replicaset__WEBPACK_IMPORTED_MODULE_12__["ReplicaSetsPage"], { showTitle: false, namespace: namespace, selector: selector, canCreate: false });
};
const { details, editYaml, pods, envEditor, events } = _utils__WEBPACK_IMPORTED_MODULE_11__["navFactory"];
const DeploymentsDetailsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["DetailsPage"], Object.assign({}, props, { kind: deploymentsReference, menuActions: menuActions, pages: [
            details(DeploymentDetails),
            editYaml(),
            {
                href: 'replicasets',
                name: t('COMMON:MSG_LNB_MENU_31'),
                component: ReplicaSetsTab,
            },
            pods(),
            envEditor(environmentComponent),
            events(_events__WEBPACK_IMPORTED_MODULE_8__["ResourceEventStream"]),
        ] })));
};
DeploymentsDetailsPage.displayName = 'DeploymentsDetailsPage';
const kind = 'Deployment';
const DeploymentTableRow = ({ obj, index, key, style }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_workload_table__WEBPACK_IMPORTED_MODULE_13__["WorkloadTableRow"], { obj: obj, index: index, rowKey: key, style: style, menuActions: menuActions, kind: kind });
};
const DeploymentTableHeader = (t) => {
    return Object(_workload_table__WEBPACK_IMPORTED_MODULE_13__["WorkloadTableHeader"])(t);
};
DeploymentTableHeader.displayName = 'DeploymentTableHeader';
const DeploymentsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["Table"], Object.assign({}, props, { "aria-label": "Deployments", Header: DeploymentTableHeader.bind(null, t), Row: DeploymentTableRow, virtualize: true }));
};
DeploymentsList.displayName = 'DeploymentsList';
const DeploymentsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_10__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_24'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_24') }), kind: deploymentsReference, canCreate: true, ListComponent: DeploymentsList }, props));
};
DeploymentsPage.displayName = 'DeploymentsPage';


/***/ }),

/***/ "./public/components/stateful-set.tsx":
/*!********************************************!*\
  !*** ./public/components/stateful-set.tsx ***!
  \********************************************/
/*! exports provided: menuActions, StatefulSetsList, StatefulSetsPage, StatefulSetsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetsList", function() { return StatefulSetsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetsPage", function() { return StatefulSetsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulSetsDetailsPage", function() { return StatefulSetsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/pod/PodRingSet */ "./packages/console-shared/src/components/pod/PodRingSet.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/app/src/actions/modify-health-checks */ "./packages/console-app/src/actions/modify-health-checks.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./public/components/events.jsx");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "./public/components/factory/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _workload_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workload-table */ "./public/components/workload-table.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _volumes_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./volumes-table */ "./public/components/volumes-table.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");












const { AddStorage, common, ModifyCount } = _utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].factory;
const menuActions = [_console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["AddHealthChecks"], ModifyCount, AddStorage, ..._utils__WEBPACK_IMPORTED_MODULE_8__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_10__["StatefulSetModel"]), _console_app_src_actions_modify_health_checks__WEBPACK_IMPORTED_MODULE_3__["EditHealthChecks"], ...common];
const kind = 'StatefulSet';
const StatefulSetTableRow = ({ obj, index, key, style }) => {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_workload_table__WEBPACK_IMPORTED_MODULE_7__["WorkloadTableRow"], { obj: obj, index: index, rowKey: key, style: style, menuActions: menuActions, kind: kind });
};
const StatefulSetTableHeader = (t) => {
    return Object(_workload_table__WEBPACK_IMPORTED_MODULE_7__["WorkloadTableHeader"])(t);
};
StatefulSetTableHeader.displayName = 'StatefulSetTableHeader';
const StatefulSetDetails = ({ obj: ss }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_11__["ResourceLabel"])(ss, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["PodRingController"], { namespace: ss.metadata.namespace, kind: ss.kind, render: d => {
                    return d.loaded ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_pod_PodRingSet__WEBPACK_IMPORTED_MODULE_1__["default"], { key: ss.metadata.uid, podData: d.data[ss.metadata.uid], obj: ss, resourceKind: _models__WEBPACK_IMPORTED_MODULE_10__["StatefulSetModel"], path: "/spec/replicas" }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["LoadingInline"], null);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ResourceSummary"], { resource: ss, showPodSelector: true, showNodeSelector: true, showTolerations: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_1') }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["ContainerTable"], { containers: ss.spec.template.spec.containers })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_volumes_table__WEBPACK_IMPORTED_MODULE_9__["VolumesTable"], { resource: ss, heading: t('COMMON:MSG_DETAILS_TABDETAILS_VOLUMES_TABLEHEADER_1') }))));
};
const EnvironmentPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["AsyncComponent"], Object.assign({ loader: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./environment.jsx */ "./public/components/environment.jsx")).then(c => c.EnvironmentPage) }, props));
const envPath = ['spec', 'template', 'spec', 'containers'];
const EnvironmentTab = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EnvironmentPage, { obj: props.obj, rawEnvData: props.obj.spec.template.spec, envPath: envPath, readOnly: false });
const StatefulSetsList = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["Table"], Object.assign({}, props, { "aria-label": "Stateful Sets", Header: StatefulSetTableHeader.bind(null, t), Row: StatefulSetTableRow, virtualize: true }));
};
const StatefulSetsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["ListPage"], Object.assign({}, props, { title: t('COMMON:MSG_LNB_MENU_25'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_25') }), ListComponent: StatefulSetsList, kind: kind, canCreate: true }));
};
const StatefulSetPods = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_8__["PodsComponent"], Object.assign({}, props, { customData: { showNodes: true } }));
const pages = [_utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].details(StatefulSetDetails), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].editYaml(), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].pods(StatefulSetPods), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].envEditor(EnvironmentTab), _utils__WEBPACK_IMPORTED_MODULE_8__["navFactory"].events(_events__WEBPACK_IMPORTED_MODULE_4__["ResourceEventStream"])];
const StatefulSetsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: pages }));


/***/ })

}]);
//# sourceMappingURL=delete-revision~dev-console-topology~set-traffic-splitting-2841d5d84cf02cd32311.js.map