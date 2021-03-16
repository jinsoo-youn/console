(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-bu~4a2e68d5"],{

/***/ "./packages/dev-console/src/components/charts/HorizontalStackedBars.scss":
/*!*******************************************************************************!*\
  !*** ./packages/dev-console/src/components/charts/HorizontalStackedBars.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx":
/*!******************************************************************************!*\
  !*** ./packages/dev-console/src/components/charts/HorizontalStackedBars.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalStackedBars.scss */ "./packages/dev-console/src/components/charts/HorizontalStackedBars.scss");
/* harmony import */ var _HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HorizontalStackedBars_scss__WEBPACK_IMPORTED_MODULE_2__);



const HorizontalStackedBars = ({ barGap, height, inline, values, width, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('odc-horizontal-stacked-bars', { 'is-inline': inline }), style: { height, width, ['--bar-gap']: barGap && `${barGap}px` } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "odc-horizontal-stacked-bars__bars" }, values.map(({ color, name, size }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: name, className: "odc-horizontal-stacked-bars__data-bar", style: {
                background: color,
                flexGrow: size,
            } }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalStackedBars);


/***/ }),

/***/ "./packages/topology/src/Visualization.ts":
/*!************************************************!*\
  !*** ./packages/topology/src/Visualization.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visualization; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./packages/topology/src/types.ts");
/* harmony import */ var _elements_defaultElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/defaultElementFactory */ "./packages/topology/src/elements/defaultElementFactory.ts");
/* harmony import */ var _utils_Stateful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/Stateful */ "./packages/topology/src/utils/Stateful.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class Visualization extends _utils_Stateful__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super(...arguments);
        this.elements = {};
        this.layoutFactories = [];
        this.componentFactories = [];
        this.elementFactories = [_elements_defaultElementFactory__WEBPACK_IMPORTED_MODULE_3__["default"]];
        this.eventListeners = {};
        this.store = {};
    }
    getStore() {
        return this.store;
    }
    fromModel(model) {
        const oldGraph = this.graph;
        // create elements
        if (model.graph) {
            this.graph = this.createElement(_types__WEBPACK_IMPORTED_MODULE_2__["ModelKind"].graph, model.graph);
        }
        const validIds = [];
        const idToElement = {};
        model.nodes &&
            model.nodes.forEach((n) => {
                idToElement[n.id] = n;
                this.createElement(_types__WEBPACK_IMPORTED_MODULE_2__["ModelKind"].node, n);
                validIds.push(n.id);
            });
        model.edges &&
            model.edges.forEach((e) => {
                idToElement[e.id] = e;
                this.createElement(_types__WEBPACK_IMPORTED_MODULE_2__["ModelKind"].edge, e);
                validIds.push(e.id);
            });
        // merge data
        if (model.graph && this.graph) {
            this.graph.setModel(model.graph);
        }
        const processed = {};
        // process bottom up
        const processElement = (element) => {
            if (element.children) {
                element.children.forEach((id) => processElement(idToElement[id]));
            }
            if (!processed[element.id]) {
                processed[element.id] = true;
                this.elements[element.id].setModel(element);
            }
        };
        model.nodes && model.nodes.forEach(processElement);
        model.edges && model.edges.forEach(processElement);
        // remove all stale elements
        lodash__WEBPACK_IMPORTED_MODULE_1__["forIn"](this.elements, (element) => {
            if (!Object(_types__WEBPACK_IMPORTED_MODULE_2__["isGraph"])(element) && !validIds.includes(element.getId())) {
                this.removeElement(element);
            }
        });
        if (oldGraph && oldGraph !== this.graph) {
            this.removeElement(oldGraph);
        }
        if (this.graph) {
            this.parentOrphansToGraph(this.graph);
        }
    }
    getGraph() {
        if (!this.graph) {
            throw new Error('Graph has not been set.');
        }
        return this.graph;
    }
    setGraph(graph) {
        if (this.graph !== graph) {
            if (this.graph) {
                this.graph.setController(undefined);
            }
            this.graph = graph;
            graph.setController(this);
            // TODO clean up and populate registries
        }
    }
    getElements() {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["values"](this.elements);
    }
    addElement(element) {
        if (this.elements[element.getId()]) {
            throw new Error(`Duplicate element for ID '${element.getId()}`);
        }
        element.setController(this);
        this.elements[element.getId()] = element;
    }
    removeElement(element) {
        if (this.elements[element.getId()]) {
            element.remove();
            // unparent all of the element's children such that they can be reparented
            element
                .getChildren()
                .slice()
                .forEach((child) => child.remove());
            element.destroy();
            element.setController(undefined);
            delete this.elements[element.getId()];
        }
    }
    getElementById(id) {
        return this.elements[id];
    }
    getNodeById(id) {
        const node = this.elements[id];
        if (node && Object(_types__WEBPACK_IMPORTED_MODULE_2__["isNode"])(node)) {
            return node;
        }
        return undefined;
    }
    getEdgeById(id) {
        const edge = this.elements[id];
        if (edge && Object(_types__WEBPACK_IMPORTED_MODULE_2__["isEdge"])(edge)) {
            return edge;
        }
        return undefined;
    }
    getComponent(kind, type) {
        for (const factory of this.componentFactories) {
            const component = factory(kind, type);
            if (component) {
                return component;
            }
        }
        throw new Error(`Could not find component for: Kind '${kind}', Type '${type}'`);
    }
    registerLayoutFactory(factory) {
        this.layoutFactories.unshift(factory);
    }
    getLayout(type) {
        for (const factory of this.layoutFactories) {
            const layout = factory(type, this.getGraph());
            if (layout) {
                return layout;
            }
        }
        throw new Error(`Could not find layout for type: ${type}`);
    }
    registerComponentFactory(factory) {
        this.componentFactories.unshift(factory);
    }
    registerElementFactory(factory) {
        this.elementFactories.unshift(factory);
    }
    addEventListener(type, listener) {
        if (!this.eventListeners[type]) {
            this.eventListeners[type] = [listener];
        }
        else {
            this.eventListeners[type].push(listener);
        }
        return this;
    }
    removeEventListener(type, listener) {
        if (!this.eventListeners[type]) {
            return this;
        }
        const listeners = this.eventListeners[type];
        const l = [];
        for (let i = 0, { length } = listeners; i < length; i++) {
            if (listeners[i] !== listener) {
                l.push(listeners[i]);
            }
        }
        if (l.length) {
            this.eventListeners[type] = l;
        }
        else {
            delete this.eventListeners[type];
        }
        return this;
    }
    fireEvent(type, ...args) {
        const listeners = this.eventListeners[type];
        if (listeners) {
            for (let i = 0, { length } = listeners; i < length; i++) {
                listeners[i](...args);
            }
        }
    }
    createElement(kind, elementModel) {
        const existingElement = this.elements[elementModel.id];
        if (existingElement) {
            return existingElement;
        }
        for (const factory of this.elementFactories) {
            const element = factory(kind, elementModel.type);
            if (element) {
                this.initElement(element, elementModel);
                // cast to return type
                return element;
            }
        }
        throw new Error(`Could not create element for: ${JSON.stringify(elementModel)}`);
    }
    initElement(element, model) {
        // set require fields
        element.setId(model.id);
        element.setType(model.type);
        element.setController(this);
        this.addElement(element);
    }
    parentOrphansToGraph(graph) {
        this.getElements().forEach((element) => {
            if (element !== this.graph && !element.hasParent()) {
                graph.appendChild(element);
            }
        });
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].shallow
], Visualization.prototype, "elements", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], Visualization.prototype, "graph", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].shallow
], Visualization.prototype, "store", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], Visualization.prototype, "fromModel", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], Visualization.prototype, "setGraph", null);


/***/ }),

/***/ "./packages/topology/src/anchors/AbstractAnchor.ts":
/*!*********************************************************!*\
  !*** ./packages/topology/src/anchors/AbstractAnchor.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractAnchor; });
class AbstractAnchor {
    constructor(owner, offset = 0) {
        this.owner = owner;
        this.offset = offset;
    }
    getReferencePoint() {
        return this.owner
            .getBounds()
            .getCenter()
            .translate(this.offset, this.offset);
    }
}


/***/ }),

/***/ "./packages/topology/src/anchors/CenterAnchor.ts":
/*!*******************************************************!*\
  !*** ./packages/topology/src/anchors/CenterAnchor.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenterAnchor; });
/* harmony import */ var _AbstractAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractAnchor */ "./packages/topology/src/anchors/AbstractAnchor.ts");
/* harmony import */ var _utils_anchor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/anchor-utils */ "./packages/topology/src/utils/anchor-utils.ts");


class CenterAnchor extends _AbstractAnchor__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getLocation(reference) {
        const bounds = this.owner.getBounds();
        if (this.offset === 0) {
            return bounds.getCenter();
        }
        const offset2x = this.offset * 2;
        return Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_1__["getEllipseAnchorPoint"])(bounds.getCenter(), offset2x, offset2x, reference);
    }
}


/***/ }),

/***/ "./packages/topology/src/anchors/EllipseAnchor.ts":
/*!********************************************************!*\
  !*** ./packages/topology/src/anchors/EllipseAnchor.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EllipseAnchor; });
/* harmony import */ var _utils_anchor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/anchor-utils */ "./packages/topology/src/utils/anchor-utils.ts");
/* harmony import */ var _AbstractAnchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractAnchor */ "./packages/topology/src/anchors/AbstractAnchor.ts");


class EllipseAnchor extends _AbstractAnchor__WEBPACK_IMPORTED_MODULE_1__["default"] {
    getLocation(reference) {
        const r = this.owner.getBounds();
        if (r.isEmpty()) {
            return r.getCenter();
        }
        const offset2x = this.offset * 2;
        return Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_0__["getEllipseAnchorPoint"])(r.getCenter(), r.width + offset2x, r.height + offset2x, reference);
    }
}


/***/ }),

/***/ "./packages/topology/src/anchors/RectAnchor.ts":
/*!*****************************************************!*\
  !*** ./packages/topology/src/anchors/RectAnchor.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectAnchor; });
/* harmony import */ var _utils_anchor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/anchor-utils */ "./packages/topology/src/utils/anchor-utils.ts");
/* harmony import */ var _AbstractAnchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractAnchor */ "./packages/topology/src/anchors/AbstractAnchor.ts");


class RectAnchor extends _AbstractAnchor__WEBPACK_IMPORTED_MODULE_1__["default"] {
    getLocation(reference) {
        const r = this.owner.getBounds();
        const center = r.getCenter();
        if (r.isEmpty()) {
            return center;
        }
        const offset2x = this.offset * 2;
        return Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_0__["getRectAnchorPoint"])(center, r.width + offset2x, r.height + offset2x, reference);
    }
}


/***/ }),

/***/ "./packages/topology/src/anchors/SVGAnchor.ts":
/*!****************************************************!*\
  !*** ./packages/topology/src/anchors/SVGAnchor.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVGAnchor; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _utils_anchor_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/anchor-utils */ "./packages/topology/src/utils/anchor-utils.ts");
/* harmony import */ var _AbstractAnchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractAnchor */ "./packages/topology/src/anchors/AbstractAnchor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class SVGAnchor extends _AbstractAnchor__WEBPACK_IMPORTED_MODULE_3__["default"] {
    setSVGElement(svgElement) {
        this.svgElement = svgElement;
    }
    getCircleLocation(circle, reference) {
        const center = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](circle.cx.baseVal.value, circle.cy.baseVal.value);
        this.owner.translateToParent(center);
        const diameter = circle.r.baseVal.value * 2 + this.offset * 2;
        return Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_2__["getEllipseAnchorPoint"])(center, diameter, diameter, reference);
    }
    getEllipseLocation(ellipse, reference) {
        const center = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](ellipse.cx.baseVal.value, ellipse.cy.baseVal.value);
        this.owner.translateToParent(center);
        const offset2x = this.offset * 2;
        const width = ellipse.rx.baseVal.value * 2 + offset2x;
        const height = ellipse.ry.baseVal.value * 2 + offset2x;
        return Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_2__["getEllipseAnchorPoint"])(center, width, height, reference);
    }
    getRectLocation(rect, reference) {
        const width = rect.width.baseVal.value;
        const height = rect.height.baseVal.value;
        const center = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](rect.x.baseVal.value + width / 2, rect.y.baseVal.value + height / 2);
        this.owner.translateToParent(center);
        const offset2x = this.offset * 2;
        return Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_2__["getRectAnchorPoint"])(center, width + offset2x, height + offset2x, reference);
    }
    getPathLocation(path, reference) {
        const translatedRef = reference.clone();
        this.owner.translateFromParent(translatedRef);
        const anchorPoint = Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_2__["getPathAnchorPoint"])(path, translatedRef);
        this.owner.translateToParent(anchorPoint);
        return anchorPoint;
    }
    getPolygonLocation(polygon, reference) {
        const translatedRef = reference.clone();
        this.owner.translateFromParent(translatedRef);
        const anchorPoint = Object(_utils_anchor_utils__WEBPACK_IMPORTED_MODULE_2__["getPolygonAnchorPoint"])(polygon, translatedRef);
        this.owner.translateToParent(anchorPoint);
        return anchorPoint;
    }
    getLocation(reference) {
        var _a;
        if ((_a = this.svgElement) === null || _a === void 0 ? void 0 : _a.viewportElement) {
            if (this.svgElement instanceof SVGCircleElement) {
                return this.getCircleLocation(this.svgElement, reference);
            }
            if (this.svgElement instanceof SVGEllipseElement) {
                return this.getEllipseLocation(this.svgElement, reference);
            }
            if (this.svgElement instanceof SVGRectElement) {
                return this.getRectLocation(this.svgElement, reference);
            }
            if (this.svgElement instanceof SVGPathElement) {
                return this.getPathLocation(this.svgElement, reference);
            }
            if (this.svgElement instanceof SVGPolygonElement) {
                return this.getPolygonLocation(this.svgElement, reference);
            }
        }
        return this.owner.getBounds().getCenter();
    }
    getReferencePoint() {
        var _a;
        if (((_a = this.svgElement) === null || _a === void 0 ? void 0 : _a.viewportElement) &&
            (this.svgElement instanceof SVGCircleElement ||
                this.svgElement instanceof SVGEllipseElement ||
                this.svgElement instanceof SVGRectElement ||
                this.svgElement instanceof SVGPathElement ||
                this.svgElement instanceof SVGPolygonElement)) {
            const bbox = this.svgElement.getBBox();
            const ref = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](bbox.x + bbox.width / 2, bbox.y + bbox.height / 2);
            // this touches the bounds for non-groups
            this.owner.translateToParent(ref);
            // touch the bounds to force a re-render in case this anchor is for a group
            this.owner.getBounds();
            return ref;
        }
        return super.getReferencePoint();
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], SVGAnchor.prototype, "svgElement", void 0);


/***/ }),

/***/ "./packages/topology/src/anchors/index.ts":
/*!************************************************!*\
  !*** ./packages/topology/src/anchors/index.ts ***!
  \************************************************/
/*! exports provided: AbstractAnchor, CenterAnchor, EllipseAnchor, RectAnchor, SVGAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractAnchor */ "./packages/topology/src/anchors/AbstractAnchor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractAnchor", function() { return _AbstractAnchor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CenterAnchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenterAnchor */ "./packages/topology/src/anchors/CenterAnchor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenterAnchor", function() { return _CenterAnchor__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _EllipseAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EllipseAnchor */ "./packages/topology/src/anchors/EllipseAnchor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipseAnchor", function() { return _EllipseAnchor__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RectAnchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RectAnchor */ "./packages/topology/src/anchors/RectAnchor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectAnchor", function() { return _RectAnchor__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _SVGAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SVGAnchor */ "./packages/topology/src/anchors/SVGAnchor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGAnchor", function() { return _SVGAnchor__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./packages/topology/src/behavior/dnd-types.ts":
/*!*****************************************************!*\
  !*** ./packages/topology/src/behavior/dnd-types.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/topology/src/behavior/index.ts":
/*!*************************************************!*\
  !*** ./packages/topology/src/behavior/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dnd_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dnd-types */ "./packages/topology/src/behavior/dnd-types.ts");
/* harmony import */ var _dnd_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dnd_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dnd_types__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dnd_types__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _useAnchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAnchor */ "./packages/topology/src/behavior/useAnchor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAnchor", function() { return _useAnchor__WEBPACK_IMPORTED_MODULE_1__["useAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAnchor", function() { return _useAnchor__WEBPACK_IMPORTED_MODULE_1__["withAnchor"]; });

/* harmony import */ var _useBendpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBendpoint */ "./packages/topology/src/behavior/useBendpoint.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBendpoint", function() { return _useBendpoint__WEBPACK_IMPORTED_MODULE_2__["useBendpoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithBendpoint", function() { return _useBendpoint__WEBPACK_IMPORTED_MODULE_2__["WithBendpoint"]; });

/* harmony import */ var _useDndDrag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDndDrag */ "./packages/topology/src/behavior/useDndDrag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modifiers", function() { return _useDndDrag__WEBPACK_IMPORTED_MODULE_3__["Modifiers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDndDrag", function() { return _useDndDrag__WEBPACK_IMPORTED_MODULE_3__["useDndDrag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDndDrag", function() { return _useDndDrag__WEBPACK_IMPORTED_MODULE_3__["withDndDrag"]; });

/* harmony import */ var _useDndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDndDrop */ "./packages/topology/src/behavior/useDndDrop.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDndDrop", function() { return _useDndDrop__WEBPACK_IMPORTED_MODULE_4__["useDndDrop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDndDrop", function() { return _useDndDrop__WEBPACK_IMPORTED_MODULE_4__["withDndDrop"]; });

/* harmony import */ var _useDndManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDndManager */ "./packages/topology/src/behavior/useDndManager.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchesType", function() { return _useDndManager__WEBPACK_IMPORTED_MODULE_5__["matchesType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DndManagerImpl", function() { return _useDndManager__WEBPACK_IMPORTED_MODULE_5__["DndManagerImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDndManager", function() { return _useDndManager__WEBPACK_IMPORTED_MODULE_5__["useDndManager"]; });

/* harmony import */ var _useDragNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useDragNode */ "./packages/topology/src/behavior/useDragNode.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DRAG_NODE_EVENT", function() { return _useDragNode__WEBPACK_IMPORTED_MODULE_6__["DRAG_NODE_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DRAG_NODE_START_EVENT", function() { return _useDragNode__WEBPACK_IMPORTED_MODULE_6__["DRAG_NODE_START_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DRAG_NODE_END_EVENT", function() { return _useDragNode__WEBPACK_IMPORTED_MODULE_6__["DRAG_NODE_END_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DRAG_MOVE_OPERATION", function() { return _useDragNode__WEBPACK_IMPORTED_MODULE_6__["DRAG_MOVE_OPERATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDragNode", function() { return _useDragNode__WEBPACK_IMPORTED_MODULE_6__["useDragNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDragNode", function() { return _useDragNode__WEBPACK_IMPORTED_MODULE_6__["withDragNode"]; });

/* harmony import */ var _usePanZoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usePanZoom */ "./packages/topology/src/behavior/usePanZoom.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePanZoom", function() { return _usePanZoom__WEBPACK_IMPORTED_MODULE_7__["usePanZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPanZoom", function() { return _usePanZoom__WEBPACK_IMPORTED_MODULE_7__["withPanZoom"]; });

/* harmony import */ var _useReconnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useReconnect */ "./packages/topology/src/behavior/useReconnect.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSourceDrag", function() { return _useReconnect__WEBPACK_IMPORTED_MODULE_8__["withSourceDrag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTargetDrag", function() { return _useReconnect__WEBPACK_IMPORTED_MODULE_8__["withTargetDrag"]; });

/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useSelection */ "./packages/topology/src/behavior/useSelection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_EVENT", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_9__["SELECTION_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_9__["useSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_9__["withSelection"]; });

/* harmony import */ var _useSvgAnchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useSvgAnchor */ "./packages/topology/src/behavior/useSvgAnchor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSvgAnchor", function() { return _useSvgAnchor__WEBPACK_IMPORTED_MODULE_10__["useSvgAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSvgAnchor", function() { return _useSvgAnchor__WEBPACK_IMPORTED_MODULE_10__["withSvgAnchor"]; });

/* harmony import */ var _withContextMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withContextMenu */ "./packages/topology/src/behavior/withContextMenu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withContextMenu", function() { return _withContextMenu__WEBPACK_IMPORTED_MODULE_11__["withContextMenu"]; });

/* harmony import */ var _withCreateConnector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./withCreateConnector */ "./packages/topology/src/behavior/withCreateConnector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_CONNECTOR_OPERATION", function() { return _withCreateConnector__WEBPACK_IMPORTED_MODULE_12__["CREATE_CONNECTOR_OPERATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_CONNECTOR_DROP_TYPE", function() { return _withCreateConnector__WEBPACK_IMPORTED_MODULE_12__["CREATE_CONNECTOR_DROP_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCreateConnector", function() { return _withCreateConnector__WEBPACK_IMPORTED_MODULE_12__["withCreateConnector"]; });

/* harmony import */ var _withRemoveConnector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withRemoveConnector */ "./packages/topology/src/behavior/withRemoveConnector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRemoveConnector", function() { return _withRemoveConnector__WEBPACK_IMPORTED_MODULE_13__["withRemoveConnector"]; });

















/***/ }),

/***/ "./packages/topology/src/behavior/useAnchor.tsx":
/*!******************************************************!*\
  !*** ./packages/topology/src/behavior/useAnchor.tsx ***!
  \******************************************************/
/*! exports provided: useAnchor, withAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnchor", function() { return useAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAnchor", function() { return withAnchor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");





const useAnchor = (anchorCallback, end = _types__WEBPACK_IMPORTED_MODULE_3__["AnchorEnd"].both, type) => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
    if (!Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNode"])(element)) {
        throw new Error('useAnchor must be used within the scope of a Node');
    }
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        Object(mobx__WEBPACK_IMPORTED_MODULE_1__["action"])(() => {
            const anchor = anchorCallback.prototype
                ? new anchorCallback(element)
                : anchorCallback(element);
            if (anchor) {
                element.setAnchor(anchor, end, type);
            }
        })();
    }, [anchorCallback, element, end, type]);
};
const withAnchor = (anchor, end, type) => (WrappedComponent) => {
    const Component = (props) => {
        useAnchor(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => anchor, []), end, type);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useBendpoint.tsx":
/*!*********************************************************!*\
  !*** ./packages/topology/src/behavior/useBendpoint.tsx ***!
  \*********************************************************/
/*! exports provided: useBendpoint, WithBendpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBendpoint", function() { return useBendpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithBendpoint", function() { return WithBendpoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _useDndDrag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useDndDrag */ "./packages/topology/src/behavior/useDndDrag.tsx");







const useBendpoint = (point, spec, props) => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
    if (!Object(_types__WEBPACK_IMPORTED_MODULE_5__["isEdge"])(element)) {
        throw new Error('useBendpoint must be used within the scope of an Edge');
    }
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](element);
    elementRef.current = element;
    const pointRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](point);
    pointRef.current = point;
    const [connect, dragRef] = Object(_useDndDrag__WEBPACK_IMPORTED_MODULE_6__["useDndDrag"])(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const sourceSpec = {
            item: { type: '#useBendpoint#' },
            begin: (monitor, p) => {
                return spec && spec.begin ? spec.begin(monitor, p) : undefined;
            },
            drag: (event, monitor, p) => {
                // assumes the edge is in absolute coordinate space
                pointRef.current.translate(event.dx, event.dy);
                elementRef.current.raise();
                spec && spec.drag && spec.drag(event, monitor, p);
            },
            canDrag: spec ? spec.canDrag : undefined,
            end: spec ? spec.end : undefined,
            collect: spec ? spec.collect : undefined,
        };
        return sourceSpec;
    }, [spec]), props);
    // argh react events don't play nice with d3 pan zoom double click event
    const ref = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => {
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](node).on('click', Object(mobx__WEBPACK_IMPORTED_MODULE_1__["action"])(() => {
            if (d3__WEBPACK_IMPORTED_MODULE_2__["event"].shiftKey) {
                d3__WEBPACK_IMPORTED_MODULE_2__["event"].stopPropagation();
                elementRef.current.removeBendpoint(pointRef.current);
            }
        }));
        dragRef(node);
    }, [dragRef]);
    return [connect, ref];
};
const WithBendpoint = (spec) => (WrappedComponent) => {
    const Component = (props) => {
        const [dragProps, bendpointRef] = useBendpoint(props.point, spec, props);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { bendpointRef: bendpointRef }, dragProps));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useDndDrag.tsx":
/*!*******************************************************!*\
  !*** ./packages/topology/src/behavior/useDndDrag.tsx ***!
  \*******************************************************/
/*! exports provided: Modifiers, useDndDrag, withDndDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modifiers", function() { return Modifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDndDrag", function() { return useDndDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDndDrag", function() { return withDndDrag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _utils_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCallbackRef */ "./packages/topology/src/utils/useCallbackRef.ts");
/* harmony import */ var _useDndManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useDndManager */ "./packages/topology/src/behavior/useDndManager.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const Modifiers = {
    DEFAULT: 0,
    ALT: 0x01,
    CTRL: 0x02,
    META: 0x04,
    SHIFT: 0x08,
};
const getModifiers = (event) => {
    let modifiers = Modifiers.DEFAULT;
    if (event.altKey) {
        // eslint-disable-next-line no-bitwise
        modifiers |= Modifiers.ALT;
    }
    if (event.ctrlKey) {
        // eslint-disable-next-line no-bitwise
        modifiers |= Modifiers.CTRL;
    }
    if (event.metaKey) {
        // eslint-disable-next-line no-bitwise
        modifiers |= Modifiers.META;
    }
    if (event.shiftKey) {
        // eslint-disable-next-line no-bitwise
        modifiers |= Modifiers.SHIFT;
    }
    return modifiers;
};
const getOperation = (operation) => {
    if (!operation) {
        return undefined;
    }
    if (operation.hasOwnProperty('type')) {
        return operation;
    }
    return (operation[getModifiers((d3__WEBPACK_IMPORTED_MODULE_1__["event"] && d3__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent) || d3__WEBPACK_IMPORTED_MODULE_1__["event"])] ||
        operation[Modifiers.DEFAULT]);
};
const hasOperation = (operation) => {
    return !!(operation && (operation.hasOwnProperty('type') || Object.keys(operation).length > 0));
};
const EMPTY_PROPS = Object.freeze({});
const useDndDrag = (spec, props) => {
    const specRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](spec);
    specRef.current = spec;
    const propsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](props != null ? props : EMPTY_PROPS);
    propsRef.current = props != null ? props : EMPTY_PROPS;
    const dndManager = Object(_useDndManager__WEBPACK_IMPORTED_MODULE_6__["useDndManager"])();
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](element);
    elementRef.current = element;
    const idRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    // source monitor
    const monitor = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const sourceMonitor = {
            getHandlerId: () => {
                return idRef.current;
            },
            receiveHandlerId: (sourceId) => {
                idRef.current = sourceId;
            },
            getDropHints: () => {
                return dndManager.getDropHints();
            },
            canDrag: () => {
                return dndManager.canDragSource(idRef.current);
            },
            isDragging: () => {
                return dndManager.isDraggingSource(idRef.current);
            },
            getItemType: () => {
                return dndManager.getItemType();
            },
            getItem: () => {
                return dndManager.getItem();
            },
            getDropResult: () => {
                return dndManager.getDropResult();
            },
            didDrop: () => {
                return dndManager.didDrop();
            },
            getDragEvent: () => {
                return dndManager.getDragEvent();
            },
            getOperation: () => {
                return dndManager.getOperation();
            },
            isCancelled: () => {
                return dndManager.isCancelled();
            },
        };
        return sourceMonitor;
    }, [dndManager]);
    const refCallback = Object(_utils_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__["default"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => {
        if (node) {
            let operationChangeEvents;
            let operation;
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](node).call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .container(
            // TODO bridge the gap between scene tree and dom tree
            () => d3__WEBPACK_IMPORTED_MODULE_1__["select"](node.ownerSVGElement)
                .select('[data-surface="true"]')
                .node())
                .on('start', function () {
                operation =
                    typeof specRef.current.operation === 'function'
                        ? specRef.current.operation(monitor, propsRef.current)
                        : specRef.current.operation;
                const updateOperation = () => __awaiter(this, void 0, void 0, function* () {
                    if (operation && idRef.current) {
                        const op = getOperation(operation);
                        if (dndManager.getOperation() !== op) {
                            // restart the drag with the new operation
                            if (dndManager.isDragging()) {
                                // copy the event otherwise it will be mutated by #cancel()
                                const event = Object.assign({}, dndManager.getDragEvent());
                                const cancelled = dndManager.cancel();
                                operationChangeEvents = {
                                    begin: [
                                        cancelled ? event.initialX : event.x,
                                        cancelled ? event.initialY : event.y,
                                        cancelled ? event.initialPageX : event.pageX,
                                        cancelled ? event.initialPageY : event.pageY,
                                    ],
                                    drag: [event.x, event.y, event.pageX, event.pageY],
                                };
                                yield dndManager.endDrag();
                            }
                            if (op && operationChangeEvents) {
                                dndManager.beginDrag(idRef.current, op, ...operationChangeEvents.begin);
                                dndManager.drag(...operationChangeEvents.drag);
                                operationChangeEvents = undefined;
                            }
                        }
                    }
                });
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](node.ownerDocument)
                    .on('keydown.useDndDrag', Object(mobx__WEBPACK_IMPORTED_MODULE_2__["flow"])(function* () {
                    const e = d3__WEBPACK_IMPORTED_MODULE_1__["event"];
                    if (e.key === 'Escape') {
                        if (dndManager.isDragging() && dndManager.cancel()) {
                            operationChangeEvents = undefined;
                            d3__WEBPACK_IMPORTED_MODULE_1__["select"](d3__WEBPACK_IMPORTED_MODULE_1__["event"].view).on('.drag', null);
                            d3__WEBPACK_IMPORTED_MODULE_1__["select"](node.ownerDocument).on('.useDndDrag', null);
                            yield dndManager.endDrag();
                        }
                    }
                    else {
                        yield updateOperation();
                    }
                }))
                    .on('keyup.useDndDrag', Object(mobx__WEBPACK_IMPORTED_MODULE_2__["flow"])(function* () {
                    yield updateOperation();
                }));
            })
                .on('drag', Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                const { pageX, pageY } = d3__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent;
                const { x, y } = d3__WEBPACK_IMPORTED_MODULE_1__["event"];
                if (dndManager.isDragging()) {
                    dndManager.drag(x, y, pageX, pageY);
                }
                else if (operationChangeEvents) {
                    operationChangeEvents.drag = [x, y, pageX, pageY];
                }
                else {
                    const op = getOperation(operation);
                    if (op || !hasOperation(operation)) {
                        if (idRef.current) {
                            dndManager.beginDrag(idRef.current, op, x, y, pageX, pageY);
                        }
                    }
                    else {
                        operationChangeEvents = {
                            begin: [x, y, pageX, pageY],
                            drag: [x, y, pageX, pageY],
                        };
                    }
                }
            }))
                .on('end', Object(mobx__WEBPACK_IMPORTED_MODULE_2__["flow"])(function* () {
                operationChangeEvents = undefined;
                operation = undefined;
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](node.ownerDocument).on('.useDndDrag', null);
                if (dndManager.isDragging()) {
                    dndManager.drop();
                    yield dndManager.endDrag();
                }
            }))
                .filter(() => !d3__WEBPACK_IMPORTED_MODULE_1__["event"].ctrlKey && !d3__WEBPACK_IMPORTED_MODULE_1__["event"].button && dndManager.canDragSource(idRef.current)));
        }
        return () => {
            node && d3__WEBPACK_IMPORTED_MODULE_1__["select"](node).on('mousedown.drag', null);
        };
    }, [dndManager, monitor]));
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const dragSource = {
            type: spec.item.type,
            canCancel: () => typeof specRef.current.canCancel === 'boolean'
                ? specRef.current.canCancel
                : typeof specRef.current.canCancel === 'function'
                    ? specRef.current.canCancel(monitor, propsRef.current)
                    : true,
            canDrag: () => typeof specRef.current.canDrag === 'boolean'
                ? specRef.current.canDrag
                : typeof specRef.current.canDrag === 'function'
                    ? specRef.current.canDrag(monitor, propsRef.current)
                    : true,
            beginDrag: () => specRef.current.begin ? specRef.current.begin(monitor, propsRef.current) : undefined,
            drag: () => {
                if (specRef.current.drag) {
                    const event = monitor.getDragEvent();
                    if (event) {
                        specRef.current.drag(event, monitor, propsRef.current);
                    }
                }
            },
            endDrag: () => specRef.current.end
                ? specRef.current.end(monitor.getDropResult(), monitor, propsRef.current)
                : undefined,
        };
        const [sourceId, unregister] = dndManager.registerSource(dragSource);
        monitor.receiveHandlerId(sourceId);
        return unregister;
    }, [spec.item.type, dndManager, monitor]);
    const collected = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(mobx__WEBPACK_IMPORTED_MODULE_2__["computed"])(() => spec.collect ? spec.collect(monitor, propsRef.current) : {}, { equals: mobx__WEBPACK_IMPORTED_MODULE_2__["comparer"].shallow }), [monitor, spec]);
    return [collected.get(), refCallback];
};
const withDndDrag = (spec) => (WrappedComponent) => {
    const Component = (props) => {
        // TODO fix cast to any
        const [dndDragProps, dndDragRef] = useDndDrag(spec, props);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, dndDragProps, { dndDragRef: dndDragRef }));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useDndDrop.tsx":
/*!*******************************************************!*\
  !*** ./packages/topology/src/behavior/useDndDrop.tsx ***!
  \*******************************************************/
/*! exports provided: useDndDrop, withDndDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDndDrop", function() { return useDndDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDndDrop", function() { return withDndDrop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var point_in_svg_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! point-in-svg-path */ "./node_modules/point-in-svg-path/index.js");
/* harmony import */ var point_in_svg_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(point_in_svg_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _useDndManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useDndManager */ "./packages/topology/src/behavior/useDndManager.tsx");



// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore





const EMPTY_PROPS = Object.freeze({});
const useDndDrop = (spec, props) => {
    const specRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](spec);
    specRef.current = spec;
    const propsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](props != null ? props : EMPTY_PROPS);
    propsRef.current = props != null ? props : EMPTY_PROPS;
    const dndManager = Object(_useDndManager__WEBPACK_IMPORTED_MODULE_7__["useDndManager"])();
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const idRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const monitor = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const targetMonitor = {
            getHandlerId: () => {
                return idRef.current;
            },
            receiveHandlerId: (sourceId) => {
                idRef.current = sourceId;
            },
            canDrop: () => {
                return dndManager.canDropOnTarget(idRef.current);
            },
            isDragging: () => {
                return dndManager.isDragging();
            },
            hasDropTarget: () => {
                return dndManager.hasDropTarget();
            },
            getDropHints: () => {
                return dndManager.getDropHints();
            },
            isOver(options) {
                return dndManager.isOverTarget(idRef.current, options);
            },
            getItemType: () => {
                return dndManager.getItemType();
            },
            getItem: () => {
                return dndManager.getItem();
            },
            getDropResult: () => {
                return dndManager.getDropResult();
            },
            didDrop: () => {
                return dndManager.didDrop();
            },
            getDragEvent: () => {
                return dndManager.getDragEvent();
            },
            getOperation: () => {
                return dndManager.getOperation();
            },
            isCancelled: () => {
                return dndManager.isCancelled();
            },
        };
        return targetMonitor;
    }, [dndManager]);
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](element);
    elementRef.current = element;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const dropTarget = {
            type: spec.accept,
            dropHint: () => {
                return typeof specRef.current.dropHint === 'string'
                    ? specRef.current.dropHint
                    : typeof specRef.current.dropHint === 'function'
                        ? specRef.current.dropHint(monitor.getItem(), monitor, propsRef.current)
                        : elementRef.current.getType();
            },
            hitTest: (x, y) => {
                if (specRef.current.hitTest) {
                    return specRef.current.hitTest(x, y, propsRef.current);
                }
                if (nodeRef.current) {
                    if (!(nodeRef.current instanceof SVGGraphicsElement)) {
                        return false;
                    }
                    // Rounding the coordinates due to an issue with `point-in-svg-path` returning false
                    // when the coordinates clearly are within the path.
                    const point = _geom_Point__WEBPACK_IMPORTED_MODULE_6__["default"].singleUse(Math.round(x), Math.round(y));
                    // Translate to this element's coordinates.
                    // Assumes the node is not within an svg element containing another transform.
                    elementRef.current.translateFromAbsolute(point);
                    // perform a fast bounds check
                    const { x: bboxx, y: bboxy, width, height } = nodeRef.current.getBBox();
                    if (point.x < bboxx ||
                        point.x > bboxx + width ||
                        point.y < bboxy ||
                        point.y > bboxy + height) {
                        return false;
                    }
                    if (nodeRef.current instanceof SVGPathElement) {
                        const d = nodeRef.current.getAttribute('d');
                        return Object(point_in_svg_path__WEBPACK_IMPORTED_MODULE_3__["pointInSvgPath"])(d, point.x, point.y);
                    }
                    if (nodeRef.current instanceof SVGCircleElement) {
                        const { cx, cy, r } = nodeRef.current;
                        return (Math.sqrt((point.x - cx.animVal.value) ** 2 + (point.y - cy.animVal.value) ** 2) <
                            r.animVal.value);
                    }
                    if (nodeRef.current instanceof SVGEllipseElement) {
                        const { cx, cy, rx, ry } = nodeRef.current;
                        return ((point.x - cx.animVal.value) ** 2 / rx.animVal.value ** 2 +
                            (point.y - cy.animVal.value) ** 2 / ry.animVal.value ** 2 <=
                            1);
                    }
                    if (nodeRef.current instanceof SVGPolygonElement) {
                        const arr = (nodeRef.current.getAttribute('points') || '')
                            .replace(/,/g, ' ')
                            .split(' ')
                            .map((s) => +s);
                        const points = [];
                        for (let i = 0; i < arr.length; i += 2) {
                            points.push(arr.slice(i, i + 2));
                        }
                        return d3__WEBPACK_IMPORTED_MODULE_1__["polygonContains"](points, [point.x, point.y]);
                    }
                    // TODO support round rect
                    // already passed the bbox test
                    return true;
                }
                return false;
            },
            hover: () => {
                specRef.current.hover &&
                    specRef.current.hover(monitor.getItem(), monitor, propsRef.current);
            },
            canDrop: () => typeof specRef.current.canDrop === 'boolean'
                ? specRef.current.canDrop
                : typeof specRef.current.canDrop === 'function'
                    ? specRef.current.canDrop(monitor.getItem(), monitor, propsRef.current)
                    : true,
            drop: () => specRef.current.drop
                ? specRef.current.drop(monitor.getItem(), monitor, propsRef.current)
                : !monitor.didDrop()
                    ? elementRef.current
                    : undefined,
        };
        const [targetId, unregister] = dndManager.registerTarget(dropTarget);
        monitor.receiveHandlerId(targetId);
        return unregister;
    }, [spec.accept, dndManager, monitor]);
    const collected = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(mobx__WEBPACK_IMPORTED_MODULE_4__["computed"])(() => spec.collect ? spec.collect(monitor, propsRef.current) : {}, { equals: mobx__WEBPACK_IMPORTED_MODULE_4__["comparer"].shallow }), [monitor, spec]);
    return [collected.get(), nodeRef];
};
const withDndDrop = (spec) => (WrappedComponent) => {
    const Component = (props) => {
        // TODO fix cast to any
        const [dndDropProps, dndDropRef] = useDndDrop(spec, props);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, dndDropProps, { dndDropRef: dndDropRef }));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useDndManager.tsx":
/*!**********************************************************!*\
  !*** ./packages/topology/src/behavior/useDndManager.tsx ***!
  \**********************************************************/
/*! exports provided: matchesType, DndManagerImpl, useDndManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesType", function() { return matchesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndManagerImpl", function() { return DndManagerImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDndManager", function() { return useDndManager; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_ControllerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ControllerContext */ "./packages/topology/src/utils/ControllerContext.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let nextUniqueId = 0;
const getNextUniqueId = () => {
    return nextUniqueId++;
};
const matchesType = (targetType, draggedItemType) => {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType)
        ? targetType.some((t) => t === draggedItemType)
        : targetType === draggedItemType;
};
class DndManagerImpl {
    constructor(state) {
        // TODO are these really required to be observable?
        this.sources = {};
        this.targets = {};
        this.state = state;
    }
    get dropHints() {
        return this.state.targetIds
            ? this.state.targetIds
                .map((id) => {
                const target = this.getTarget(id);
                return target ? target.dropHint(this) : [];
            })
                .filter((x) => x)
            : [];
    }
    registerSource(source) {
        const key = `S${getNextUniqueId()}`;
        this.sources[key] = source;
        return [
            key,
            () => {
                delete this.sources[key];
            },
        ];
    }
    registerTarget(target) {
        const key = `T${getNextUniqueId()}`;
        this.targets[key] = target;
        return [
            key,
            () => {
                delete this.targets[key];
            },
        ];
    }
    getDropHints() {
        return this.dropHints;
    }
    canDragSource(sourceId) {
        const source = this.getSource(sourceId);
        if (!source || this.isDragging()) {
            return false;
        }
        return source && source.canDrag(this);
    }
    canDropOnTarget(targetId) {
        const target = this.getTarget(targetId);
        if (!target || !this.isDragging() || this.didDrop()) {
            return false;
        }
        const draggedItemType = this.getItemType();
        return matchesType(target.type, draggedItemType) && target.canDrop(this);
    }
    isDragging() {
        return !!this.state.isDragging;
    }
    isDraggingSource(sourceId) {
        return this.state.sourceId != null && this.state.sourceId === sourceId;
    }
    isOverTarget(targetId, options = { shallow: false }) {
        if (!targetId) {
            return false;
        }
        const { shallow } = options;
        if (!this.isDragging()) {
            return false;
        }
        const target = this.targets[targetId];
        const draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType(target.type, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        }
        return index > -1;
    }
    getItemType() {
        return this.state.itemType;
    }
    getItem() {
        return this.state.item;
    }
    getSourceId() {
        return this.state.sourceId;
    }
    getTargetIds() {
        return this.state.targetIds || [];
    }
    hasDropTarget() {
        return !!this.getTargetIds().find((id) => this.canDropOnTarget(id));
    }
    getDropResult() {
        return this.state.dropResult;
    }
    didDrop() {
        return !!this.state.didDrop;
    }
    getDragEvent() {
        return this.state.event;
    }
    getOperation() {
        return this.state.operation;
    }
    isCancelled() {
        return !!this.state.cancelled;
    }
    beginDrag(sourceIds, operation, x, y, pageX, pageY) {
        const ids = Array.isArray(sourceIds) ? sourceIds : [sourceIds];
        if (ids.length) {
            let sourceId = null;
            for (let i = ids.length - 1; i >= 0; i--) {
                if (this.canDragSource(ids[i])) {
                    sourceId = ids[i];
                    break;
                }
            }
            if (sourceId) {
                const source = this.getSource(sourceId);
                if (source) {
                    this.state.sourceId = sourceId;
                    this.state.itemType = source.type;
                    this.state.event = {
                        initialPageX: pageX,
                        initialPageY: pageY,
                        pageX,
                        pageY,
                        initialX: x,
                        initialY: y,
                        x,
                        y,
                        dx: 0,
                        dy: 0,
                    };
                    this.state.operation = operation;
                    this.state.isDragging = true;
                    this.state.item = source.beginDrag(this);
                }
            }
        }
        this.performHitTests();
    }
    hover(targetIds) {
        const ids = targetIds.filter((id) => this.getTarget(id));
        this.state.targetIds = ids;
        ids.forEach((id) => {
            const target = this.getTarget(id);
            if (target) {
                target.hover(this);
            }
        });
    }
    endDrag() {
        return __awaiter(this, void 0, void 0, function* () {
            const source = this.getSource(this.getSourceId());
            try {
                if (source) {
                    yield source.endDrag(this);
                }
            }
            finally {
                // clear state
                delete this.state.didDrop;
                delete this.state.dropResult;
                delete this.state.event;
                delete this.state.isDragging;
                delete this.state.item;
                delete this.state.sourceId;
                delete this.state.targetIds;
                delete this.state.operation;
                delete this.state.cancelled;
            }
        });
    }
    drop() {
        this.getTargetIds()
            .filter((id) => this.canDropOnTarget(id))
            .reverse()
            .forEach((id, idx) => {
            const target = this.getTarget(id);
            if (target) {
                let result = target.drop(this);
                if (typeof result === 'undefined') {
                    result = idx === 0 ? {} : this.state.dropResult;
                }
                this.state.dropResult = result;
                this.state.didDrop = true;
            }
        });
    }
    drag(x, y, pageX, pageY) {
        if (!this.state.event) {
            throw new Error('Drag event not initialized');
        }
        this.state.event.dx = x - this.state.event.x;
        this.state.event.dy = y - this.state.event.y;
        this.state.event.x = x;
        this.state.event.y = y;
        this.state.event.pageX = pageX;
        this.state.event.pageY = pageY;
        const source = this.getSource(this.getSourceId());
        if (source) {
            source.drag(this);
        }
        this.performHitTests();
    }
    cancel() {
        if (!this.state.event) {
            throw new Error('Drag event not initialized');
        }
        if (this.state.cancelled) {
            return true;
        }
        const source = this.getSource(this.getSourceId());
        if (source && source.canCancel(this)) {
            this.state.cancelled = true;
            this.drag(this.state.event.initialX, this.state.event.initialY, this.state.event.pageX, this.state.event.pageY);
            return true;
        }
        return false;
    }
    performHitTests() {
        const draggedItemType = this.getItemType();
        const event = this.getDragEvent();
        if (event && draggedItemType) {
            const targetIds = [];
            Object.keys(this.targets).forEach((targetId) => {
                const target = this.getTarget(targetId);
                if (target &&
                    matchesType(target.type, draggedItemType) &&
                    target.hitTest(event.x, event.y)) {
                    targetIds.push(targetId);
                }
            });
            this.hover(targetIds);
        }
    }
    getSource(sourceId) {
        return sourceId ? this.sources[sourceId] : undefined;
    }
    getTarget(targetId) {
        return targetId ? this.targets[targetId] : undefined;
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__["observable"].shallow
], DndManagerImpl.prototype, "sources", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__["observable"].shallow
], DndManagerImpl.prototype, "targets", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__["computed"]
], DndManagerImpl.prototype, "dropHints", null);
const useDndManager = () => {
    const controller = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ControllerContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const store = controller.getStore();
    let { dndManager } = store;
    if (!dndManager) {
        const state = controller.getState();
        let { dragDrop } = state;
        if (!dragDrop) {
            dragDrop = mobx__WEBPACK_IMPORTED_MODULE_1__["observable"].object({});
            state.dragDrop = dragDrop;
        }
        dndManager = new DndManagerImpl(dragDrop);
        store.dndManager = dndManager;
    }
    return dndManager;
};


/***/ }),

/***/ "./packages/topology/src/behavior/useDragNode.tsx":
/*!********************************************************!*\
  !*** ./packages/topology/src/behavior/useDragNode.tsx ***!
  \********************************************************/
/*! exports provided: DRAG_NODE_EVENT, DRAG_NODE_START_EVENT, DRAG_NODE_END_EVENT, DRAG_MOVE_OPERATION, useDragNode, withDragNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_NODE_EVENT", function() { return DRAG_NODE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_NODE_START_EVENT", function() { return DRAG_NODE_START_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_NODE_END_EVENT", function() { return DRAG_NODE_END_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_MOVE_OPERATION", function() { return DRAG_MOVE_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragNode", function() { return useDragNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDragNode", function() { return withDragNode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _useDndDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDndDrag */ "./packages/topology/src/behavior/useDndDrag.tsx");
/* harmony import */ var _useDndManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useDndManager */ "./packages/topology/src/behavior/useDndManager.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const DRAG_NODE_EVENT = 'drag_node';
const DRAG_NODE_START_EVENT = `${DRAG_NODE_EVENT}_start`;
const DRAG_NODE_END_EVENT = `${DRAG_NODE_EVENT}_end`;
const DRAG_MOVE_OPERATION = 'move.useDragNode';
const defaultOperation = {
    [_useDndDrag__WEBPACK_IMPORTED_MODULE_5__["Modifiers"].DEFAULT]: { type: DRAG_MOVE_OPERATION },
};
const useDragNode = (spec, props) => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    if (!Object(_types__WEBPACK_IMPORTED_MODULE_4__["isNode"])(element)) {
        throw new Error('useDragNode must be used within the scope of a Node');
    }
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](element);
    elementRef.current = element;
    const dndManager = Object(_useDndManager__WEBPACK_IMPORTED_MODULE_6__["useDndManager"])();
    return Object(_useDndDrag__WEBPACK_IMPORTED_MODULE_5__["useDndDrag"])(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const sourceSpec = {
            item: (spec && spec.item) || { type: '#useDragNode#' },
            operation: (monitor, p) => {
                if (spec) {
                    const operation = typeof spec.operation === 'function' ? spec.operation(monitor, p) : spec.operation;
                    if (typeof operation === 'object' && Object.keys(operation).length > 0) {
                        return Object.assign(Object.assign({}, defaultOperation), operation);
                    }
                }
                return defaultOperation;
            },
            begin: (monitor, p) => {
                elementRef.current.raise();
                if (elementRef.current.isGroup()) {
                    elementRef.current.getChildren().forEach((c) => {
                        c.raise();
                    });
                }
                const result = spec && spec.begin && spec.begin(monitor, p);
                elementRef.current
                    .getController()
                    .fireEvent(DRAG_NODE_START_EVENT, elementRef.current, monitor.getDragEvent(), monitor.getOperation());
                return result || elementRef.current;
            },
            drag: (event, monitor, p) => {
                const { dx, dy } = event;
                function moveElement(e) {
                    let moved = true;
                    if (e.isGroup()) {
                        const nodeChildren = e.getChildren().filter(_types__WEBPACK_IMPORTED_MODULE_4__["isNode"]);
                        if (nodeChildren.length) {
                            moved = false;
                            nodeChildren.forEach(moveElement);
                        }
                    }
                    if (moved) {
                        e.setPosition(e
                            .getPosition()
                            .clone()
                            .translate(dx, dy));
                    }
                }
                moveElement(elementRef.current);
                spec && spec.drag && spec.drag(event, monitor, p);
                elementRef.current
                    .getController()
                    .fireEvent(DRAG_NODE_EVENT, elementRef.current, event, monitor.getOperation());
            },
            canDrag: spec ? spec.canDrag : undefined,
            end: (dropResult, monitor, p) => __awaiter(void 0, void 0, void 0, function* () {
                // FIXME: Get the controller up front due it issues with model updates during dnd operations
                const controller = elementRef.current.getController();
                if (spec && spec.end) {
                    try {
                        yield spec.end(dropResult, monitor, p);
                    }
                    catch (_a) {
                        dndManager.cancel();
                    }
                }
                Object(mobx__WEBPACK_IMPORTED_MODULE_1__["action"])(() => {
                    controller.fireEvent(DRAG_NODE_END_EVENT, elementRef.current, monitor.getDragEvent(), monitor.getOperation());
                })();
            }),
            collect: spec ? spec.collect : undefined,
            canCancel: spec ? spec.canCancel : true,
        };
        return sourceSpec;
    }, [spec, dndManager]), props);
};
const withDragNode = (spec) => (WrappedComponent) => {
    const Component = (props) => {
        // TODO fix cast to any
        const [dragNodeProps, dragNodeRef] = useDragNode(spec, props);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { dragNodeRef: dragNodeRef }, dragNodeProps));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/usePanZoom.tsx":
/*!*******************************************************!*\
  !*** ./packages/topology/src/behavior/usePanZoom.tsx ***!
  \*******************************************************/
/*! exports provided: usePanZoom, withPanZoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanZoom", function() { return usePanZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPanZoom", function() { return withPanZoom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _utils_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCallbackRef */ "./packages/topology/src/utils/useCallbackRef.ts");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../const */ "./packages/topology/src/const.ts");









// Used to send events prevented by d3.zoom to the document allowing modals, dropdowns, etc, to close
const propagatePanZoomMouseEvent = (e) => {
    document.dispatchEvent(new MouseEvent(e.type, e));
};
const usePanZoom = () => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
    if (!Object(_types__WEBPACK_IMPORTED_MODULE_7__["isGraph"])(element)) {
        throw new Error('usePanZoom must be used within the scope of a Graph');
    }
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](element);
    elementRef.current = element;
    return Object(_utils_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__["default"])((node) => {
        let disposeListener;
        if (node) {
            // TODO fix any type
            const $svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](node.ownerSVGElement);
            if (node && node.ownerSVGElement) {
                node.ownerSVGElement.addEventListener('mousedown', propagatePanZoomMouseEvent);
                node.ownerSVGElement.addEventListener('click', propagatePanZoomMouseEvent);
            }
            const zoom = d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]()
                .scaleExtent(elementRef.current.getScaleExtent())
                .on('zoom', Object(mobx__WEBPACK_IMPORTED_MODULE_3__["action"])(() => {
                elementRef.current.setPosition(new _geom_Point__WEBPACK_IMPORTED_MODULE_6__["default"](d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform.x, d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform.y));
                elementRef.current.setScale(d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform.k);
            }))
                .filter(() => {
                if (d3__WEBPACK_IMPORTED_MODULE_1__["event"].ctrlKey || d3__WEBPACK_IMPORTED_MODULE_1__["event"].button) {
                    return false;
                }
                // only allow zoom from double clicking the graph directly
                if (d3__WEBPACK_IMPORTED_MODULE_1__["event"].type === 'dblclick') {
                    // check if target is not within a node or edge
                    const svg = node.ownerSVGElement;
                    let p = d3__WEBPACK_IMPORTED_MODULE_1__["event"].target;
                    while (p && p !== svg) {
                        if (p instanceof Element) {
                            const kind = p.getAttribute(_const__WEBPACK_IMPORTED_MODULE_8__["ATTR_DATA_KIND"]);
                            if (kind) {
                                if (kind !== _types__WEBPACK_IMPORTED_MODULE_7__["ModelKind"].graph) {
                                    return false;
                                }
                                break;
                            }
                        }
                        p = p.parentNode;
                    }
                }
                return true;
            });
            zoom($svg);
            // Update the d3 transform whenever the scale or bounds change.
            // This is kinda hacky because when d3 has already made the most recent transform update,
            // we listen for the model change, due to the above, only to update the d3 transform again.
            disposeListener = Object(mobx__WEBPACK_IMPORTED_MODULE_3__["autorun"])(() => {
                const scale = elementRef.current.getScale();
                const scaleExtent = elementRef.current.getScaleExtent();
                // update the min scaling value such that the user can zoom out to the new scale in case
                // it is smaller than the default zoom out scale
                zoom.scaleExtent([Math.min(scale, scaleExtent[0]), scaleExtent[1]]);
                const b = elementRef.current.getBounds();
                // update d3 zoom data directly
                // eslint-disable-next-line no-underscore-dangle
                Object.assign($svg.node().__zoom, {
                    k: scale,
                    x: b.x,
                    y: b.y,
                });
            });
            // disable double click zoom
            // $svg.on('dblclick.zoom', null);
        }
        return () => {
            disposeListener && disposeListener();
            if (node) {
                // remove all zoom listeners
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](node.ownerSVGElement).on('.zoom', null);
                if (node.ownerSVGElement) {
                    node.ownerSVGElement.removeEventListener('mousedown', propagatePanZoomMouseEvent);
                    node.ownerSVGElement.removeEventListener('click', propagatePanZoomMouseEvent);
                }
            }
        };
    });
};
const withPanZoom = () => (WrappedComponent) => {
    const Component = (props) => {
        const panZoomRef = usePanZoom();
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { panZoomRef: panZoomRef }));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useReconnect.tsx":
/*!*********************************************************!*\
  !*** ./packages/topology/src/behavior/useReconnect.tsx ***!
  \*********************************************************/
/*! exports provided: withSourceDrag, withTargetDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSourceDrag", function() { return withSourceDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTargetDrag", function() { return withTargetDrag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _useDndDrag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDndDrag */ "./packages/topology/src/behavior/useDndDrag.tsx");



const withSourceDrag = (spec) => (WrappedComponent) => {
    const Component = (props) => {
        // TODO fix cast to any
        const [dndDragProps, dndDragRef] = Object(_useDndDrag__WEBPACK_IMPORTED_MODULE_2__["useDndDrag"])(spec, props);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { sourceDragRef: dndDragRef }, dndDragProps));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Component);
};
const withTargetDrag = (spec) => (WrappedComponent) => {
    const Component = (props) => {
        // TODO fix cast to any
        const [dndDragProps, dndDragRef] = Object(_useDndDrag__WEBPACK_IMPORTED_MODULE_2__["useDndDrag"])(spec, props);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { targetDragRef: dndDragRef }, dndDragProps));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useSelection.tsx":
/*!*********************************************************!*\
  !*** ./packages/topology/src/behavior/useSelection.tsx ***!
  \*********************************************************/
/*! exports provided: SELECTION_EVENT, useSelection, withSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_EVENT", function() { return SELECTION_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return useSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSelection", function() { return withSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");




const SELECTION_EVENT = 'selection';
const useSelection = (multi = false, controlled = false) => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const elementRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](element);
    elementRef.current = element;
    const selected = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(mobx__WEBPACK_IMPORTED_MODULE_1__["computed"])(() => {
        const { selectedIds } = element.getController().getState();
        return !!selectedIds && selectedIds.includes(element.getId());
    }), [element]);
    const onSelect = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](Object(mobx__WEBPACK_IMPORTED_MODULE_1__["action"])((e) => {
        e.stopPropagation();
        const id = elementRef.current.getId();
        const state = elementRef.current.getController().getState();
        const idx = state.selectedIds ? state.selectedIds.indexOf(id) : -1;
        let selectedIds;
        let raise = false;
        if (multi && (e.ctrlKey || e.metaKey)) {
            if (!state.selectedIds) {
                raise = true;
                selectedIds = [id];
            }
            else {
                selectedIds = [...state.selectedIds];
                if (idx === -1) {
                    raise = true;
                    selectedIds.push(id);
                }
                else {
                    selectedIds.splice(idx, 1);
                }
            }
        }
        else if (idx === -1 || multi) {
            raise = true;
            selectedIds = [id];
        }
        else {
            selectedIds = [];
        }
        if (!controlled) {
            state.selectedIds = selectedIds;
        }
        elementRef.current.getController().fireEvent(SELECTION_EVENT, selectedIds);
        if (raise) {
            elementRef.current.raise();
        }
    }), []);
    return [selected.get(), onSelect];
};
const withSelection = (multi = false, controlled = false) => (WrappedComponent) => {
    const Component = (props) => {
        const [selected, onSelect] = useSelection(multi, controlled);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { selected: selected, onSelect: onSelect }));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/useSvgAnchor.tsx":
/*!*********************************************************!*\
  !*** ./packages/topology/src/behavior/useSvgAnchor.tsx ***!
  \*********************************************************/
/*! exports provided: useSvgAnchor, withSvgAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSvgAnchor", function() { return useSvgAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSvgAnchor", function() { return withSvgAnchor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _anchors_SVGAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anchors/SVGAnchor */ "./packages/topology/src/anchors/SVGAnchor.ts");





const useSvgAnchor = (end = _types__WEBPACK_IMPORTED_MODULE_2__["AnchorEnd"].both, type = '') => {
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    if (!Object(_types__WEBPACK_IMPORTED_MODULE_2__["isNode"])(element)) {
        throw new Error('useSvgAnchor must be used within the scope of a Node');
    }
    const setAnchorSvgRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](Object(mobx__WEBPACK_IMPORTED_MODULE_1__["action"])((node) => {
        if (node) {
            const anchor = new _anchors_SVGAnchor__WEBPACK_IMPORTED_MODULE_4__["default"](element);
            anchor.setSVGElement(node);
            element.setAnchor(anchor, end, type);
        }
    }), [element, type, end]);
    return setAnchorSvgRef;
};
const withSvgAnchor = (end, type) => () => (WrappedComponent) => {
    const Component = (props) => {
        const svgAnchorRef = useSvgAnchor(end, type);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { svgAnchorRef: svgAnchorRef }));
    };
    return Component;
};


/***/ }),

/***/ "./packages/topology/src/behavior/withContextMenu.tsx":
/*!************************************************************!*\
  !*** ./packages/topology/src/behavior/withContextMenu.tsx ***!
  \************************************************************/
/*! exports provided: withContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContextMenu", function() { return withContextMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _components_contextmenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contextmenu/ContextMenu */ "./packages/topology/src/components/contextmenu/ContextMenu.tsx");




const withContextMenu = (actions, container, className, atPoint = true) => (WrappedComponent) => {
    const Component = (props) => {
        const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
        const [reference, setReference] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
        const onContextMenu = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((e) => {
            e.preventDefault();
            e.stopPropagation();
            setReference(atPoint
                ? {
                    x: e.pageX,
                    y: e.pageY,
                }
                : e.currentTarget);
        }, []);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { onContextMenu: onContextMenu, contextMenuOpen: !!reference })),
            reference ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_contextmenu_ContextMenu__WEBPACK_IMPORTED_MODULE_3__["default"], { reference: reference, container: container, className: className, open: true, onRequestClose: () => setReference(null) }, actions(element))) : null));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/withCreateConnector.tsx":
/*!****************************************************************!*\
  !*** ./packages/topology/src/behavior/withCreateConnector.tsx ***!
  \****************************************************************/
/*! exports provided: CREATE_CONNECTOR_OPERATION, CREATE_CONNECTOR_DROP_TYPE, withCreateConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CONNECTOR_OPERATION", function() { return CREATE_CONNECTOR_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CONNECTOR_DROP_TYPE", function() { return CREATE_CONNECTOR_DROP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCreateConnector", function() { return withCreateConnector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_svg_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/svg-utils */ "./packages/topology/src/utils/svg-utils.ts");
/* harmony import */ var _components_DefaultCreateConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DefaultCreateConnector */ "./packages/topology/src/components/DefaultCreateConnector.tsx");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _components_layers_Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layers/Layer */ "./packages/topology/src/components/layers/Layer.tsx");
/* harmony import */ var _components_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contextmenu */ "./packages/topology/src/components/contextmenu/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _useDndDrag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useDndDrag */ "./packages/topology/src/behavior/useDndDrag.tsx");









const CREATE_CONNECTOR_OPERATION = '#createconnector#';
const CREATE_CONNECTOR_DROP_TYPE = '#createConnector#';
const DEFAULT_HANDLE_ANGLE = 12 * (Math.PI / 180);
const DEFAULT_HANDLE_LENGTH = 32;
const CreateConnectorWidget = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])((props) => {
    var _a;
    const { element, onKeepAlive, onCreate, ConnectorComponent, handleAngle = DEFAULT_HANDLE_ANGLE, handleLength = DEFAULT_HANDLE_LENGTH, contextMenuClass, } = props;
    const [prompt, setPrompt] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const hintsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const spec = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const dragSourceSpec = {
            item: { type: CREATE_CONNECTOR_DROP_TYPE },
            operation: { type: CREATE_CONNECTOR_OPERATION },
            begin: (monitor, dragProps) => {
                setActive(true);
                return dragProps.element;
            },
            drag: (event, monitor, p) => {
                p.element.raise();
            },
            end: (dropResult, monitor, dragProps) => {
                const event = monitor.getDragEvent();
                if ((Object(_types__WEBPACK_IMPORTED_MODULE_7__["isNode"])(dropResult) || Object(_types__WEBPACK_IMPORTED_MODULE_7__["isGraph"])(dropResult)) && event) {
                    const choices = dragProps.onCreate(dragProps.element, dropResult, event);
                    if (choices && choices.length) {
                        setPrompt({ element: dragProps.element, target: dropResult, event, choices });
                        return;
                    }
                }
                setActive(false);
                dragProps.onKeepAlive(false);
            },
            collect: (monitor) => ({
                dragging: !!monitor.getItem(),
                event: monitor.isDragging() ? monitor.getDragEvent() : undefined,
                hints: monitor.getDropHints(),
            }),
        };
        return dragSourceSpec;
    }, [setActive]);
    const [{ dragging, event, hints }, dragRef] = Object(_useDndDrag__WEBPACK_IMPORTED_MODULE_8__["useDndDrag"])(spec, props);
    if (!active && dragging && !event) {
        // another connector is dragging right now
        return null;
    }
    if (dragging) {
        // store the latest hints
        hintsRef.current = hints;
    }
    const dragEvent = prompt ? prompt.event : event;
    let startPoint;
    let endPoint;
    if (dragEvent) {
        endPoint = new _geom_Point__WEBPACK_IMPORTED_MODULE_4__["default"](dragEvent.x, dragEvent.y);
        startPoint = element.getAnchor(_types__WEBPACK_IMPORTED_MODULE_7__["AnchorEnd"].source).getLocation(endPoint);
    }
    else {
        const bounds = element.getBounds();
        const referencePoint = new _geom_Point__WEBPACK_IMPORTED_MODULE_4__["default"](bounds.right(), Math.tan(handleAngle) * (bounds.width / 2) + bounds.y + bounds.height / 2);
        startPoint = element.getAnchor(_types__WEBPACK_IMPORTED_MODULE_7__["AnchorEnd"].source).getLocation(referencePoint);
        endPoint = new _geom_Point__WEBPACK_IMPORTED_MODULE_4__["default"](Math.cos(handleAngle) * handleLength + startPoint.x, Math.sin(handleAngle) * handleLength + startPoint.y);
    }
    // bring into the coordinate space of the element
    element.translateFromParent(startPoint);
    element.translateFromParent(endPoint);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layers_Layer__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "top" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: "topology-create-connector", ref: dragRef, onMouseEnter: !active ? () => onKeepAlive(true) : undefined, onMouseLeave: !active ? () => onKeepAlive(false) : undefined },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ConnectorComponent, { startPoint: startPoint, endPoint: endPoint, dragging: dragging, hints: hintsRef.current || [] }),
                !active && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: Object(_utils_svg_utils__WEBPACK_IMPORTED_MODULE_2__["hullPath"])([
                        [startPoint.x, startPoint.y],
                        [endPoint.x, endPoint.y],
                    ], 7), fillOpacity: "0" })))),
        prompt && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenu"], { reference: { x: prompt.event.pageX, y: prompt.event.pageY }, className: contextMenuClass, open: true, onRequestClose: () => {
                setActive(false);
                onKeepAlive(false);
            } }, react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"]((_a = prompt.choices) === null || _a === void 0 ? void 0 : _a[0])
            ? prompt.choices
            : prompt.choices.map((c) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuItem"], { key: c.label, onClick: () => {
                    onCreate(prompt.element, prompt.target, prompt.event, c);
                } }, c.label)))))));
});
const withCreateConnector = (onCreate, ConnectorComponent = _components_DefaultCreateConnector__WEBPACK_IMPORTED_MODULE_3__["default"], contextMenuClass, options) => (WrappedComponent) => {
    const Component = (props) => {
        const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
        const [alive, setKeepAlive] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
        const onShowCreateConnector = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => setShow(true), []);
        const onHideCreateConnector = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => setShow(false), []);
        const onKeepAlive = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((isAlive) => setKeepAlive(isAlive), [
            setKeepAlive,
        ]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { onShowCreateConnector: onShowCreateConnector, onHideCreateConnector: onHideCreateConnector })),
            (show || alive) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CreateConnectorWidget, Object.assign({}, options, { element: props.element, onCreate: onCreate, onKeepAlive: onKeepAlive, ConnectorComponent: ConnectorComponent, contextMenuClass: contextMenuClass })))));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/behavior/withRemoveConnector.tsx":
/*!****************************************************************!*\
  !*** ./packages/topology/src/behavior/withRemoveConnector.tsx ***!
  \****************************************************************/
/*! exports provided: withRemoveConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRemoveConnector", function() { return withRemoveConnector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _components_DefaultRemoveConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DefaultRemoveConnector */ "./packages/topology/src/components/DefaultRemoveConnector.tsx");



const defaultRenderRemove = (edge, onRemove) => {
    const removeEdge = () => {
        onRemove(edge);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_DefaultRemoveConnector__WEBPACK_IMPORTED_MODULE_2__["default"], { startPoint: edge.getStartPoint(), endPoint: edge.getEndPoint(), onRemove: removeEdge }));
};
const withRemoveConnector = (onRemove, renderRemove = defaultRenderRemove) => (WrappedComponent) => {
    const Component = (props) => {
        const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
        const onShowRemoveConnector = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => setShow(true), []);
        const onHideRemoveConnector = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => setShow(false), []);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, Object.assign({}, props, { onShowRemoveConnector: onShowRemoveConnector, onHideRemoveConnector: onHideRemoveConnector }), show && renderRemove(props.element, onRemove)));
    };
    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Component);
};


/***/ }),

/***/ "./packages/topology/src/components/ConnectorArrow.scss":
/*!**************************************************************!*\
  !*** ./packages/topology/src/components/ConnectorArrow.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/topology/src/components/ConnectorArrow.tsx":
/*!*************************************************************!*\
  !*** ./packages/topology/src/components/ConnectorArrow.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _ConnectorArrow_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectorArrow.scss */ "./packages/topology/src/components/ConnectorArrow.scss");
/* harmony import */ var _ConnectorArrow_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ConnectorArrow_scss__WEBPACK_IMPORTED_MODULE_3__);




const pointsStringFromPoints = (points) => {
    return lodash__WEBPACK_IMPORTED_MODULE_2__["reduce"](points, (result, nextPoint) => {
        return `${result} ${nextPoint[0]},${nextPoint[1]}`;
    }, '');
};
const ConnectorArrow = ({ startPoint, endPoint, className = '', isTarget = true, size = 10, dragRef, }) => {
    if (!startPoint || !endPoint) {
        return null;
    }
    const arrowEndPoint = isTarget
        ? [endPoint.x, endPoint.y]
        : [startPoint.x, startPoint.y];
    const prevPoint = isTarget
        ? [startPoint.x, startPoint.y]
        : [endPoint.x, endPoint.y];
    const length = Math.sqrt((arrowEndPoint[0] - prevPoint[0]) ** 2 + (arrowEndPoint[1] - prevPoint[1]) ** 2);
    if (!length) {
        return null;
    }
    const ratio = (length - size) / length;
    const arrowStartPoint = [
        prevPoint[0] + (arrowEndPoint[0] - prevPoint[0]) * ratio,
        prevPoint[1] + (arrowEndPoint[1] - prevPoint[1]) * ratio,
    ];
    const arrowPoints = [
        [0, size / 2],
        [0, -size / 2],
        [size, 0],
    ];
    const padding = Math.max(size, 8);
    const deltaY = padding / 2;
    const boundingBox = [
        [0, -deltaY],
        [padding, -deltaY],
        [padding, deltaY],
        [0, deltaY],
    ];
    const angleDeg = 180 -
        (Math.atan2(arrowEndPoint[1] - prevPoint[1], prevPoint[0] - arrowEndPoint[0]) * 180) / Math.PI;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(${arrowStartPoint[0]}, ${arrowStartPoint[1]}) rotate(${angleDeg})`, ref: dragRef, className: classnames__WEBPACK_IMPORTED_MODULE_1__('topology-connector-arrow', className) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { points: pointsStringFromPoints(arrowPoints) }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { points: pointsStringFromPoints(boundingBox), fillOpacity: 0, strokeWidth: 0 })));
};
/* harmony default export */ __webpack_exports__["default"] = (ConnectorArrow);


/***/ }),

/***/ "./packages/topology/src/components/DefaultCreateConnector.scss":
/*!**********************************************************************!*\
  !*** ./packages/topology/src/components/DefaultCreateConnector.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/topology/src/components/DefaultCreateConnector.tsx":
/*!*********************************************************************!*\
  !*** ./packages/topology/src/components/DefaultCreateConnector.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _ConnectorArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConnectorArrow */ "./packages/topology/src/components/ConnectorArrow.tsx");
/* harmony import */ var _DefaultCreateConnector_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultCreateConnector.scss */ "./packages/topology/src/components/DefaultCreateConnector.scss");
/* harmony import */ var _DefaultCreateConnector_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DefaultCreateConnector_scss__WEBPACK_IMPORTED_MODULE_5__);






const cursorSize = 20;
const DefaultCreateConnector = ({ startPoint, endPoint, hints, tipContents, className, }) => {
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1__('topology-default-create-connector', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { className: classes },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { className: "topology-default-create-connector__line", x1: startPoint.x, y1: startPoint.y, x2: endPoint.x, y2: endPoint.y }),
        hints && hints[hints.length - 1] === 'create' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(${endPoint.x - cursorSize / 2},${endPoint.y - cursorSize / 2})`, className: "topology-default-create-connector__create" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { className: "topology-default-create-connector__create__bg", cx: cursorSize / 2, cy: cursorSize / 2, r: cursorSize / 2 }),
            tipContents ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { content: tipContents, trigger: "manual", isVisible: true, tippyProps: { duration: 0, delay: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["AddCircleOIcon"], { className: "topology-default-create-connector__create__cursor", style: { fontSize: cursorSize } }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["AddCircleOIcon"], { className: "topology-default-create-connector__create__cursor", style: { fontSize: cursorSize } })))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConnectorArrow__WEBPACK_IMPORTED_MODULE_4__["default"], { startPoint: startPoint, endPoint: endPoint }))));
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultCreateConnector);


/***/ }),

/***/ "./packages/topology/src/components/DefaultRemoveConnector.tsx":
/*!*********************************************************************!*\
  !*** ./packages/topology/src/components/DefaultRemoveConnector.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



function computeTooltipPosition(startPoint, endPoint) {
    const angle = Math.abs((Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) * 180) / Math.PI);
    return angle < 135 && angle > 90
        ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TooltipPosition"].left
        : angle > 45 && angle <= 90
            ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TooltipPosition"].right
            : _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TooltipPosition"].top;
}
const DefaultRemoveConnector = ({ startPoint, endPoint, onRemove, size = 14, }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { content: "Delete Connector", position: computeTooltipPosition(startPoint, endPoint) },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(${startPoint.x + (endPoint.x - startPoint.x) * 0.5}, ${startPoint.y +
            (endPoint.y - startPoint.y) * 0.5})`, onClick: (e) => {
            e.stopPropagation();
            onRemove();
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { className: "topology-connector__remove-bg", cx: 0, cy: 0, r: size }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { transform: `translate(-${size / 2}, -${size / 2})` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["TrashIcon"], { className: "topology-connector__remove-icon", style: { fontSize: size }, alt: "Delete Connector" })))));
/* harmony default export */ __webpack_exports__["default"] = (DefaultRemoveConnector);


/***/ }),

/***/ "./packages/topology/src/components/EdgeConnectorArrow.tsx":
/*!*****************************************************************!*\
  !*** ./packages/topology/src/components/EdgeConnectorArrow.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _ConnectorArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectorArrow */ "./packages/topology/src/components/ConnectorArrow.tsx");
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




const EdgeConnectorArrow = (_a) => {
    var { edge, isTarget = true } = _a, others = __rest(_a, ["edge", "isTarget"]);
    const bendPoints = edge.getBendpoints();
    const startPoint = isTarget
        ? lodash__WEBPACK_IMPORTED_MODULE_2__["last"](bendPoints) || edge.getStartPoint()
        : lodash__WEBPACK_IMPORTED_MODULE_2__["head"](bendPoints) || edge.getEndPoint();
    const endPoint = isTarget ? edge.getEndPoint() : edge.getStartPoint();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConnectorArrow__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({ startPoint: startPoint, endPoint: endPoint }, others));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(EdgeConnectorArrow));


/***/ }),

/***/ "./packages/topology/src/components/ElementWrapper.tsx":
/*!*************************************************************!*\
  !*** ./packages/topology/src/components/ElementWrapper.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./packages/topology/src/const.ts");





// in a separate component so that changes to behaviors do not re-render children
const ElementComponent = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ element }) => {
    const kind = element.getKind();
    const type = element.getType();
    const Component = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        return element.getController().getComponent(kind, type);
    }, [element, kind, type]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, { value: element },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, element.getState(), { element: element }))));
});
const ElementChildren = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ element }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        element
            .getChildren()
            .filter(_types__WEBPACK_IMPORTED_MODULE_3__["isEdge"])
            .map((e) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementWrapper, { key: e.getId(), element: e }))),
        element
            .getChildren()
            .filter(_types__WEBPACK_IMPORTED_MODULE_3__["isNode"])
            .map((e) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementWrapper, { key: e.getId(), element: e })))));
});
const ElementWrapper = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ element }) => {
    if (!element.isVisible()) {
        return null;
    }
    if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isEdge"])(element)) {
        const source = element.getSourceAnchorNode();
        const target = element.getTargetAnchorNode();
        if ((source && !source.isVisible()) || (target && !target.isVisible())) {
            return null;
        }
    }
    const commonAttrs = {
        [_const__WEBPACK_IMPORTED_MODULE_4__["ATTR_DATA_ID"]]: element.getId(),
        [_const__WEBPACK_IMPORTED_MODULE_4__["ATTR_DATA_KIND"]]: element.getKind(),
        [_const__WEBPACK_IMPORTED_MODULE_4__["ATTR_DATA_TYPE"]]: element.getType(),
    };
    if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isGraph"])(element)) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", Object.assign({}, commonAttrs),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementComponent, { element: element })));
    }
    if (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNode"])(element) && (!element.isGroup() || element.isCollapsed())) {
        const { x, y } = element.getPosition();
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", Object.assign({}, commonAttrs, { transform: `translate(${x}, ${y})` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementComponent, { element: element }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementChildren, { element: element })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", Object.assign({}, commonAttrs),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementComponent, { element: element }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementChildren, { element: element })));
});
/* harmony default export */ __webpack_exports__["default"] = (ElementWrapper);


/***/ }),

/***/ "./packages/topology/src/components/GraphComponent.tsx":
/*!*************************************************************!*\
  !*** ./packages/topology/src/components/GraphComponent.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _layers_LayersProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/LayersProvider */ "./packages/topology/src/components/layers/LayersProvider.tsx");
/* harmony import */ var _ElementWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ElementWrapper */ "./packages/topology/src/components/ElementWrapper.tsx");




// This inner Component will prevent the re-rendering of all children when the transform changes
const ElementChildren = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ element }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        element.getEdges().map((e) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ElementWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], { key: e.getId(), element: e }))),
        element.getNodes().map((e) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ElementWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], { key: e.getId(), element: e })))));
});
// This inner Component will prevent re-rendering layers when the transform changes
const Inner = react__WEBPACK_IMPORTED_MODULE_0__["memo"](Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ element }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layers_LayersProvider__WEBPACK_IMPORTED_MODULE_2__["default"], { layers: element.getLayers() },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ElementChildren, { element: element })))));
const GraphComponent = ({ element, panZoomRef, dndDropRef, onSelect, onContextMenu, }) => {
    const layout = element.getLayout();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        element.layout();
        // Only re-run if the layout changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [layout]);
    const { x, y, width, height } = element.getBounds();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { ref: dndDropRef, x: 0, y: 0, width: width, height: height, fillOpacity: 0, onClick: onSelect, onContextMenu: onContextMenu }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { "data-surface": "true", ref: panZoomRef, transform: `translate(${x}, ${y}) scale(${element.getScale()})` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Inner, { element: element }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(GraphComponent));


/***/ }),

/***/ "./packages/topology/src/components/VisualizationSurface.scss":
/*!********************************************************************!*\
  !*** ./packages/topology/src/components/VisualizationSurface.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/topology/src/components/VisualizationSurface.tsx":
/*!*******************************************************************!*\
  !*** ./packages/topology/src/components/VisualizationSurface.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-measure */ "./node_modules/react-measure/dist/index.esm.js");
/* harmony import */ var _utils_ControllerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ControllerContext */ "./packages/topology/src/utils/ControllerContext.ts");
/* harmony import */ var _defs_SVGDefsProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defs/SVGDefsProvider */ "./packages/topology/src/components/defs/SVGDefsProvider.tsx");
/* harmony import */ var _ElementWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementWrapper */ "./packages/topology/src/components/ElementWrapper.tsx");
/* harmony import */ var _geom_Dimensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geom/Dimensions */ "./packages/topology/src/geom/Dimensions.ts");
/* harmony import */ var _VisualizationSurface_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VisualizationSurface.scss */ "./packages/topology/src/components/VisualizationSurface.scss");
/* harmony import */ var _VisualizationSurface_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_VisualizationSurface_scss__WEBPACK_IMPORTED_MODULE_9__);




// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore-next-line






function stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
}
const VisualizationSurface = ({ visualization, state }) => {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        state && visualization.setState(state);
    }, [visualization, state]);
    const onMeasure = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"](Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])((contentRect) => {
        visualization
            .getGraph()
            .setDimensions(new _geom_Dimensions__WEBPACK_IMPORTED_MODULE_8__["default"](contentRect.client.width, contentRect.client.height));
    }), 100, { leading: true, trailing: true }), [visualization]);
    // dispose of onMeasure
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => () => onMeasure.cancel(), [onMeasure]);
    const graph = visualization.getGraph();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_ControllerContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, { value: visualization },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_measure__WEBPACK_IMPORTED_MODULE_4__["default"], { client: true, onResize: onMeasure }, ({ measureRef }) => (
        // render an outer div because react-measure doesn't seem to fire events properly on svg resize
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "data-test-id": "topology", className: "topology-visualization-surface", ref: measureRef },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: "topology-visualization-surface__svg", onContextMenu: stopEvent },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_defs_SVGDefsProvider__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ElementWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], { element: graph }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(VisualizationSurface));


/***/ }),

/***/ "./packages/topology/src/components/contextmenu/ContextMenu.scss":
/*!***********************************************************************!*\
  !*** ./packages/topology/src/components/contextmenu/ContextMenu.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/topology/src/components/contextmenu/ContextMenu.tsx":
/*!**********************************************************************!*\
  !*** ./packages/topology/src/components/contextmenu/ContextMenu.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-styles/css/components/Dropdown/dropdown */ "./node_modules/@patternfly/react-styles/css/components/Dropdown/dropdown.js");
/* harmony import */ var _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_shared_src_components_popper_Popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/popper/Popper */ "./packages/console-shared/src/components/popper/Popper.tsx");
/* harmony import */ var _ContextMenu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextMenu.scss */ "./packages/topology/src/components/contextmenu/ContextMenu.scss");
/* harmony import */ var _ContextMenu_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_4__);
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



// FIXME fully qualified due to the effect of long build times on storybook


const ContextMenu = (_a) => {
    var { children, open = true, onRequestClose } = _a, other = __rest(_a, ["children", "open", "onRequestClose"]);
    const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](!!open);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        setOpen(open);
    }, [open]);
    const handleOnRequestClose = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => {
        onRequestClose ? onRequestClose() : setOpen(false);
    }, [onRequestClose]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_popper_Popper__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, other, { closeOnEsc: true, closeOnOutsideClick: true, open: isOpen, onRequestClose: handleOnRequestClose }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownContext"].Provider, { value: {
                onSelect: handleOnRequestClose,
                toggleTextClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownToggleText,
                toggleIconClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownToggleIcon,
                menuClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownMenu,
                itemClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownMenuItem,
                toggleClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownToggle,
                baseClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdown,
                baseComponent: 'div',
                sectionClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownGroup,
                sectionTitleClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownGroupTitle,
                sectionComponent: 'section',
                disabledClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.modifiers.disabled,
                hoverClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.modifiers.hover,
                separatorClass: _patternfly_react_styles_css_components_Dropdown_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.dropdownSeparator,
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pf-c-dropdown pf-m-expanded topology-context-menu" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], { className: "pf-c-dropdown__menu ", autoFocus: true }, children)))));
};
/* harmony default export */ __webpack_exports__["default"] = (ContextMenu);


/***/ }),

/***/ "./packages/topology/src/components/contextmenu/ContextSubMenuItem.scss":
/*!******************************************************************************!*\
  !*** ./packages/topology/src/components/contextmenu/ContextSubMenuItem.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/topology/src/components/contextmenu/ContextSubMenuItem.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/topology/src/components/contextmenu/ContextSubMenuItem.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_popper_Popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/popper/Popper */ "./packages/console-shared/src/components/popper/Popper.tsx");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _ContextSubMenuItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextSubMenuItem.scss */ "./packages/topology/src/components/contextmenu/ContextSubMenuItem.scss");
/* harmony import */ var _ContextSubMenuItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContextSubMenuItem_scss__WEBPACK_IMPORTED_MODULE_4__);
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


// FIXME fully qualified due to the effect of long build times on storybook



const ContextSubMenuItem = (_a) => {
    var { label, children } = _a, other = __rest(_a, ["label", "children"]);
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const subMenuRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const referenceCb = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](() => nodeRef.current || { x: 0, y: 0 }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], Object.assign({}, other, { className: "topology-context-sub-menu", component: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { ref: nodeRef, type: "button", 
                // prevent this DropdownItem from executing like a normal action item
                onClick: (e) => e.stopPropagation(), 
                // mouse enter will open the sub menu
                onMouseEnter: () => setOpen(true), onMouseLeave: (e) => {
                    // if the mouse leaves this item, close the sub menu only if the mouse did not enter the sub menu itself
                    if (!subMenuRef.current || !subMenuRef.current.contains(e.relatedTarget)) {
                        setOpen(false);
                    }
                }, onKeyDown: (e) => {
                    // open the sub menu on enter or right arrow
                    if (e.keyCode === 39 || e.keyCode === 13) {
                        setOpen(true);
                        e.stopPropagation();
                    }
                } },
                label,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["AngleRightIcon"], { className: "topology-context-sub-menu__arrow" })) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_popper_Popper__WEBPACK_IMPORTED_MODULE_2__["default"], { open: open, placement: "right-start", closeOnEsc: true, closeOnOutsideClick: true, onRequestClose: (e) => {
                // only close the sub menu if clicking anywhere outside the menu item that owns the sub menu
                if (!e || !nodeRef.current || !nodeRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }, reference: referenceCb, 
            // use the parent node to capture the li
            container: nodeRef.current ? nodeRef.current.parentElement : nodeRef.current, returnFocus: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: subMenuRef, role: "presentation", className: "pf-c-dropdown pf-m-expanded", onMouseLeave: (e) => {
                    // only close the sub menu if the mouse does not enter the item
                    if (!nodeRef.current || !nodeRef.current.contains(e.relatedTarget)) {
                        setOpen(false);
                    }
                }, onKeyDown: (e) => {
                    // close the sub menu on left arrow
                    if (e.keyCode === 37) {
                        setOpen(false);
                        e.stopPropagation();
                    }
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], { className: "pf-c-dropdown__menu", autoFocus: true }, children)))));
};
/* harmony default export */ __webpack_exports__["default"] = (ContextSubMenuItem);


/***/ }),

/***/ "./packages/topology/src/components/contextmenu/index.ts":
/*!***************************************************************!*\
  !*** ./packages/topology/src/components/contextmenu/index.ts ***!
  \***************************************************************/
/*! exports provided: ContextMenu, ContextSubMenuItem, ContextMenuItem, ContextMenuSeparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu */ "./packages/topology/src/components/contextmenu/ContextMenu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return _ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ContextSubMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextSubMenuItem */ "./packages/topology/src/components/contextmenu/ContextSubMenuItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextSubMenuItem", function() { return _ContextSubMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuItem", function() { return _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuSeparator", function() { return _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["DropdownSeparator"]; });



// re-export dropdown components as context menu components



/***/ }),

/***/ "./packages/topology/src/components/defs/SVGDefs.tsx":
/*!***********************************************************!*\
  !*** ./packages/topology/src/components/defs/SVGDefs.tsx ***!
  \***********************************************************/
/*! exports provided: SVGDefsSetter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGDefsSetter", function() { return SVGDefsSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVGDefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SVGDefsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGDefsContext */ "./packages/topology/src/components/defs/SVGDefsContext.ts");


class SVGDefsSetter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    componentDidMount() {
        const { addDef, id, children } = this.props;
        addDef(id, children);
    }
    componentDidUpdate() {
        const { addDef, id, children } = this.props;
        addDef(id, children);
    }
    componentWillUnmount() {
        const { removeDef, id } = this.props;
        removeDef(id);
    }
    render() {
        return null;
    }
}
SVGDefsSetter.contextType = _SVGDefsContext__WEBPACK_IMPORTED_MODULE_1__["default"];
/**
 * Contributes `children` to the parent SVG `<defs>` element.
 * A contribution is assumed to be static in nature in that the children will never change
 * for a given ID. This is because there may be multiple children referencing the same defs contribution.
 * The assumption must be that there is not a single owner but many owners and therefore each
 * owner must be contributing the same def.
 */
class SVGDefs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SVGDefsContext__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, null, ({ addDef, removeDef }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SVGDefsSetter, Object.assign({}, this.props, { addDef: addDef, removeDef: removeDef })))));
    }
}


/***/ }),

/***/ "./packages/topology/src/components/defs/SVGDefsContext.ts":
/*!*****************************************************************!*\
  !*** ./packages/topology/src/components/defs/SVGDefsContext.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SVGDefsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["default"] = (SVGDefsContext);


/***/ }),

/***/ "./packages/topology/src/components/defs/SVGDefsProvider.tsx":
/*!*******************************************************************!*\
  !*** ./packages/topology/src/components/defs/SVGDefsProvider.tsx ***!
  \*******************************************************************/
/*! exports provided: Defs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Defs", function() { return Defs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SVGDefsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGDefsContext */ "./packages/topology/src/components/defs/SVGDefsContext.ts");


class Defs extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    setDefs(defs) {
        // setting the state will re-render this component
        this.setState({ defs: Object.assign({}, defs) });
    }
    render() {
        const { defs } = this.state;
        return defs ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, Object.keys(defs).map((id) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: id }, defs[id].node))))) : null;
    }
}
/**
 * Renders a `<defs>` element and sets up a {@link SVGDefsContext} provider such that child components
 * may contribute to the `<defs>` without the parent component needing explicit knowledge of each contribution.
 * This helps decouple the parent implementation from the children and ensures that duplicate defs entries,
 * such as filters, are eliminated.
 */
class SVGDefsProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.defsRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        this.defs = {};
        this.contextValue = {
            addDef: (id, node) => {
                const defObj = this.defs[id];
                if (defObj) {
                    defObj.count++;
                }
                else {
                    this.defs[id] = {
                        count: 1,
                        node,
                    };
                    this.updateDefs();
                }
            },
            removeDef: (id) => {
                const defObj = this.defs[id];
                if (--defObj.count === 0) {
                    delete this.defs[id];
                    this.updateDefs();
                }
            },
        };
    }
    updateDefs() {
        // Set the defs directly on the child component so that only it will re-render.
        // Does not use `setState` because otherwise all child components would be re-renders again
        // when only the `Defs` component needs to be rendered.
        this.defsRef.current && this.defsRef.current.setDefs(this.defs);
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SVGDefsContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, { value: this.contextValue },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Defs, { ref: this.defsRef }),
            this.props.children));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (SVGDefsProvider);


/***/ }),

/***/ "./packages/topology/src/components/defs/index.ts":
/*!********************************************************!*\
  !*** ./packages/topology/src/components/defs/index.ts ***!
  \********************************************************/
/*! exports provided: SVGDefs, SVGDefsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SVGDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGDefs */ "./packages/topology/src/components/defs/SVGDefs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGDefs", function() { return _SVGDefs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SVGDefsProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVGDefsProvider */ "./packages/topology/src/components/defs/SVGDefsProvider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGDefsProvider", function() { return _SVGDefsProvider__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/topology/src/components/index.ts":
/*!***************************************************!*\
  !*** ./packages/topology/src/components/index.ts ***!
  \***************************************************/
/*! exports provided: ConnectorArrow, EdgeConnectorArrow, GraphComponent, VisualizationSurface, DefaultCreateConnector, ContextMenu, ContextSubMenuItem, ContextMenuItem, ContextMenuSeparator, SVGDefs, SVGDefsProvider, Layer, LayersProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contextmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contextmenu */ "./packages/topology/src/components/contextmenu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return _contextmenu__WEBPACK_IMPORTED_MODULE_0__["ContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextSubMenuItem", function() { return _contextmenu__WEBPACK_IMPORTED_MODULE_0__["ContextSubMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuItem", function() { return _contextmenu__WEBPACK_IMPORTED_MODULE_0__["ContextMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuSeparator", function() { return _contextmenu__WEBPACK_IMPORTED_MODULE_0__["ContextMenuSeparator"]; });

/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defs */ "./packages/topology/src/components/defs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGDefs", function() { return _defs__WEBPACK_IMPORTED_MODULE_1__["SVGDefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGDefsProvider", function() { return _defs__WEBPACK_IMPORTED_MODULE_1__["SVGDefsProvider"]; });

/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers */ "./packages/topology/src/components/layers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layers__WEBPACK_IMPORTED_MODULE_2__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayersProvider", function() { return _layers__WEBPACK_IMPORTED_MODULE_2__["LayersProvider"]; });

/* harmony import */ var _ConnectorArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectorArrow */ "./packages/topology/src/components/ConnectorArrow.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectorArrow", function() { return _ConnectorArrow__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _EdgeConnectorArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EdgeConnectorArrow */ "./packages/topology/src/components/EdgeConnectorArrow.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeConnectorArrow", function() { return _EdgeConnectorArrow__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _GraphComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GraphComponent */ "./packages/topology/src/components/GraphComponent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return _GraphComponent__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _VisualizationSurface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VisualizationSurface */ "./packages/topology/src/components/VisualizationSurface.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationSurface", function() { return _VisualizationSurface__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _DefaultCreateConnector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultCreateConnector */ "./packages/topology/src/components/DefaultCreateConnector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultCreateConnector", function() { return _DefaultCreateConnector__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./packages/topology/src/components/layers/Layer.tsx":
/*!***********************************************************!*\
  !*** ./packages/topology/src/components/layers/Layer.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _LayersContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayersContext */ "./packages/topology/src/components/layers/LayersContext.ts");
/* harmony import */ var _LayerContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayerContainer */ "./packages/topology/src/components/layers/LayerContainer.tsx");






const ORDER_KEY = '__order__';
const compare = (a, b) => {
    if (a === b) {
        return 0;
    }
    const ao = a[ORDER_KEY];
    const bo = b[ORDER_KEY];
    if (ao == null || bo == null) {
        return 0;
    }
    for (let i = 0; i < ao.length; i++) {
        if (ao[i] !== bo[i]) {
            return ao[i] - bo[i];
        }
    }
    return ao.length === bo.length ? 0 : ao.length - bo.length;
};
const LayerDelegate = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(({ id, children, orderKey }) => {
    const getLayerNode = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_LayersContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const layerNode = getLayerNode(id);
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    const order = id ? (orderKey != null ? orderKey : element.getOrderKey()) : undefined;
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        // TODO use bisection search
        if (nodeRef.current && layerNode != null) {
            nodeRef.current[ORDER_KEY] = order;
            const { childNodes } = layerNode;
            // childNodes is not an array, disable false positive
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < childNodes.length; i++) {
                const result = compare(nodeRef.current, childNodes[i]);
                if (result < 0) {
                    if (i > 0 && childNodes[i - 1] !== nodeRef.current) {
                        layerNode.insertBefore(nodeRef.current, childNodes[i]);
                    }
                    return;
                }
            }
            if (childNodes[childNodes.length - 1] !== nodeRef.current) {
                layerNode.appendChild(nodeRef.current);
            }
        }
    }, [order, layerNode]);
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LayerContainer__WEBPACK_IMPORTED_MODULE_5__["default"], { ref: nodeRef }, children), layerNode);
});
const Layer = ({ id, children, orderKey }) => {
    return id ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LayerDelegate, { id: id, orderKey: orderKey }, children)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Layer);


/***/ }),

/***/ "./packages/topology/src/components/layers/LayerContainer.tsx":
/*!********************************************************************!*\
  !*** ./packages/topology/src/components/layers/LayerContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _utils_ElementContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const */ "./packages/topology/src/const.ts");





const LayerContainer = ({ children }, ref) => {
    // accumulate parent positions
    const element = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_utils_ElementContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
    let p = element;
    let x = 0;
    let y = 0;
    while (Object(_types__WEBPACK_IMPORTED_MODULE_3__["isNode"])(p)) {
        if (!p.isGroup() || p.isCollapsed()) {
            const { x: px, y: py } = p.getPosition();
            x += px;
            y += py;
        }
        p = p.getParent();
    }
    const commonAttrs = {
        [_const__WEBPACK_IMPORTED_MODULE_4__["ATTR_DATA_ID"]]: element.getId(),
        [_const__WEBPACK_IMPORTED_MODULE_4__["ATTR_DATA_KIND"]]: element.getKind(),
        [_const__WEBPACK_IMPORTED_MODULE_4__["ATTR_DATA_TYPE"]]: element.getType(),
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", Object.assign({ ref: ref, transform: `translate(${x}, ${y})` }, commonAttrs), children));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](LayerContainer)));


/***/ }),

/***/ "./packages/topology/src/components/layers/LayersContext.ts":
/*!******************************************************************!*\
  !*** ./packages/topology/src/components/layers/LayersContext.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LayersContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["default"] = (LayersContext);


/***/ }),

/***/ "./packages/topology/src/components/layers/LayersProvider.tsx":
/*!********************************************************************!*\
  !*** ./packages/topology/src/components/layers/LayersProvider.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayersProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const */ "./packages/topology/src/const.ts");
/* harmony import */ var _LayersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayersContext */ "./packages/topology/src/components/layers/LayersContext.ts");



class LayersProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.contextValue = (id) => {
            if (this.state[id]) {
                return this.state[id];
            }
            throw new Error(`Unknown layer '${id}'`);
        };
        this.setDomLayers = (node, id) => {
            if (node && this.state[id] !== node) {
                this.setState((state) => (Object.assign(Object.assign({}, state), { [id]: node })));
            }
        };
        this.getLayerNode = (id) => {
            const node = this.state[id];
            if (node) {
                return node;
            }
            throw new Error(`Unknown layer '${id}'`);
        };
        this.state = {};
    }
    render() {
        const { layers, children } = this.props;
        if (layers && !layers.includes(_const__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LAYER"])) {
            throw new Error('Missing default layer.');
        }
        const layerIds = layers || [_const__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LAYER"]];
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LayersContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, { value: this.contextValue }, layerIds.map((id) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { key: id, "data-layer-id": id, ref: (r) => this.setDomLayers(r, id) }, id === _const__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LAYER"] && this.state[id] ? children : undefined)))));
    }
}


/***/ }),

/***/ "./packages/topology/src/components/layers/index.ts":
/*!**********************************************************!*\
  !*** ./packages/topology/src/components/layers/index.ts ***!
  \**********************************************************/
/*! exports provided: Layer, LayersProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./packages/topology/src/components/layers/Layer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LayersProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayersProvider */ "./packages/topology/src/components/layers/LayersProvider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayersProvider", function() { return _LayersProvider__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./packages/topology/src/const.ts":
/*!****************************************!*\
  !*** ./packages/topology/src/const.ts ***!
  \****************************************/
/*! exports provided: ATTR_DATA_KIND, ATTR_DATA_TYPE, ATTR_DATA_ID, TOP_LAYER, DEFAULT_LAYER, GROUPS_LAYER, BOTTOM_LAYER, DEFAULT_LAYERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_DATA_KIND", function() { return ATTR_DATA_KIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_DATA_TYPE", function() { return ATTR_DATA_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTR_DATA_ID", function() { return ATTR_DATA_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_LAYER", function() { return TOP_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAYER", function() { return DEFAULT_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS_LAYER", function() { return GROUPS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM_LAYER", function() { return BOTTOM_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAYERS", function() { return DEFAULT_LAYERS; });
const ATTR_DATA_KIND = 'data-kind';
const ATTR_DATA_TYPE = 'data-type';
const ATTR_DATA_ID = 'data-id';
const TOP_LAYER = 'top';
const DEFAULT_LAYER = 'default';
const GROUPS_LAYER = 'groups';
const BOTTOM_LAYER = 'bottom';
const DEFAULT_LAYERS = [BOTTOM_LAYER, GROUPS_LAYER, DEFAULT_LAYER, TOP_LAYER];


/***/ }),

/***/ "./packages/topology/src/elements/BaseEdge.ts":
/*!****************************************************!*\
  !*** ./packages/topology/src/elements/BaseEdge.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseEdge; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./packages/topology/src/utils/index.ts");
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseElement */ "./packages/topology/src/elements/BaseElement.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class BaseEdge extends _BaseElement__WEBPACK_IMPORTED_MODULE_4__["default"] {
    get sourceAnchor() {
        return this.getSourceAnchorNode().getAnchor(_types__WEBPACK_IMPORTED_MODULE_2__["AnchorEnd"].source, this.getType());
    }
    get targetAnchor() {
        return this.getTargetAnchorNode().getAnchor(_types__WEBPACK_IMPORTED_MODULE_2__["AnchorEnd"].target, this.getType());
    }
    getKind() {
        return _types__WEBPACK_IMPORTED_MODULE_2__["ModelKind"].edge;
    }
    getSource() {
        if (!this.source) {
            throw new Error(`Edge with ID '${this.getId()}' has no source.`);
        }
        return this.source;
    }
    setSource(source) {
        this.source = source;
    }
    getTarget() {
        if (!this.target) {
            throw new Error(`Edge with ID '${this.getId()}' has no target.`);
        }
        return this.target;
    }
    setTarget(target) {
        this.target = target;
    }
    getSourceAnchorNode() {
        if (!this.source) {
            throw new Error(`Edge with ID '${this.getId()}' has no source.`);
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTopCollapsedParent"])(this.source);
    }
    getTargetAnchorNode() {
        if (!this.target) {
            throw new Error(`Edge with ID '${this.getId()}' has no target.`);
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTopCollapsedParent"])(this.target);
    }
    getBendpoints() {
        return this.bendpoints || [];
    }
    setBendpoints(points) {
        this.bendpoints = points;
    }
    removeBendpoint(point) {
        if (this.bendpoints) {
            if (typeof point === 'number') {
                this.bendpoints.splice(point, 1);
            }
            else {
                const idx = this.bendpoints.indexOf(point);
                if (idx !== -1) {
                    this.bendpoints.splice(idx, 1);
                }
            }
        }
    }
    getStartPoint() {
        if (this.startPoint) {
            return this.startPoint;
        }
        const bendpoints = this.getBendpoints();
        let referencePoint;
        if (bendpoints && bendpoints.length > 0) {
            [referencePoint] = bendpoints;
        }
        else if (this.endPoint) {
            referencePoint = this.endPoint;
        }
        else {
            referencePoint = this.targetAnchor.getReferencePoint();
        }
        return this.sourceAnchor.getLocation(referencePoint);
    }
    setStartPoint(x, y) {
        if (x == null || y == null) {
            this.startPoint = undefined;
        }
        else {
            this.startPoint = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
        }
    }
    getEndPoint() {
        if (this.endPoint) {
            return this.endPoint;
        }
        const bendpoints = this.getBendpoints();
        let referencePoint;
        if (bendpoints && bendpoints.length > 0) {
            referencePoint = bendpoints[bendpoints.length - 1];
        }
        else if (this.startPoint) {
            referencePoint = this.startPoint;
        }
        else {
            referencePoint = this.sourceAnchor.getReferencePoint();
        }
        return this.targetAnchor.getLocation(referencePoint);
    }
    setEndPoint(x, y) {
        if (x == null || y == null) {
            this.endPoint = undefined;
        }
        else {
            this.endPoint = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
        }
    }
    setModel(model) {
        super.setModel(model);
        if (model.source) {
            const node = this.getController().getNodeById(model.source);
            if (!node) {
                throw new Error(`No source node found with ID '${model.source}'.`);
            }
            this.source = node;
        }
        if (model.target) {
            const node = this.getController().getNodeById(model.target);
            if (!node) {
                throw new Error(`No target node found with ID '${model.target}'.`);
            }
            this.target = node;
        }
        if ('bendpoints' in model) {
            this.bendpoints = model.bendpoints ? model.bendpoints.map((b) => new _geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](b[0], b[1])) : [];
        }
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseEdge.prototype, "source", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseEdge.prototype, "target", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].shallow
], BaseEdge.prototype, "bendpoints", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseEdge.prototype, "startPoint", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseEdge.prototype, "endPoint", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseEdge.prototype, "sourceAnchor", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseEdge.prototype, "targetAnchor", null);


/***/ }),

/***/ "./packages/topology/src/elements/BaseElement.ts":
/*!*******************************************************!*\
  !*** ./packages/topology/src/elements/BaseElement.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseElement; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _utils_Stateful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Stateful */ "./packages/topology/src/utils/Stateful.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class BaseElement extends _utils_Stateful__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super(...arguments);
        this.id = '';
        this.type = '';
        this.visible = true;
        this.children = [];
        this.style = {};
    }
    get ordering() {
        if (!this.parent) {
            return [];
        }
        const idx = this.parent.getChildren().indexOf(this);
        const result = [...this.parent.getOrderKey(), idx];
        return result;
    }
    getLabel() {
        return this.label || '';
    }
    setLabel(label) {
        this.label = label;
    }
    getOrderKey() {
        return this.ordering;
    }
    getController() {
        if (!this.controller) {
            throw new Error(`GraphElement with ID '${this.getId()}' has no controller.`);
        }
        return this.controller;
    }
    setController(controller) {
        this.controller = controller;
    }
    getGraph() {
        // TODO fix project eslint rules
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let p = this;
        while (!Object(_types__WEBPACK_IMPORTED_MODULE_2__["isGraph"])(p)) {
            p = p.getParent();
        }
        return p;
    }
    getParent() {
        if (!this.parent) {
            throw new Error(`GraphElement with ID '${this.getId()}' has no parent.`);
        }
        return this.parent;
    }
    setParent(parent) {
        if (this.parent !== parent) {
            if (this.parent) {
                this.remove();
            }
            this.parent = parent;
        }
    }
    hasParent() {
        return this.parent !== undefined;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    setVisible(visible) {
        if (this.visible !== visible) {
            this.visible = visible;
            if (this.controller) {
                this.controller.fireEvent(_types__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_VISIBILITY_CHANGE_EVENT"], { visible, target: this });
            }
        }
    }
    isVisible() {
        return (this.visible &&
            (!this.parent ||
                (this.parent.isVisible() && (!Object(_types__WEBPACK_IMPORTED_MODULE_2__["isNode"])(this.parent) || !this.parent.isCollapsed()))));
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getStyle() {
        return this.style;
    }
    getChildren() {
        return this.children;
    }
    insertChild(child, index) {
        if (this.children.length === 0 ||
            index >= this.children.length ||
            this.children[index] !== child) {
            const idx = this.children.indexOf(child);
            if (idx !== -1) {
                this.children.splice(idx, 1);
                this.children.splice(index, 0, child);
            }
            else {
                // remove from old parent
                child.remove();
                child.setParent(this);
                this.children.splice(index, 0, child);
                if (this.controller) {
                    this.controller.fireEvent(_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CHILD_EVENT"], { target: this, child });
                }
            }
        }
    }
    appendChild(child) {
        if (this.children.length === 0 || this.children[this.children.length - 1] !== child) {
            const idx = this.children.indexOf(child);
            if (idx !== -1) {
                this.children.splice(idx, 1);
                this.children.push(child);
            }
            else {
                // remove from old parent
                child.remove();
                child.setParent(this);
                this.children.push(child);
                if (this.controller) {
                    this.controller.fireEvent(_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CHILD_EVENT"], { target: this, child });
                }
            }
        }
    }
    removeChild(child) {
        if (this.children) {
            const idx = this.children.indexOf(child);
            if (idx !== -1) {
                this.children.splice(idx, 1);
                child.setParent(undefined);
                if (this.controller) {
                    this.controller.fireEvent(_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CHILD_EVENT"], { target: this, child });
                }
            }
        }
    }
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }
    setModel(model) {
        if ('type' in model) {
            this.setType(model.type);
        }
        if ('visible' in model) {
            this.setVisible(!!model.visible);
        }
        if (Array.isArray(model.children)) {
            const controller = this.getController();
            const childElements = model.children.map((id) => {
                const element = controller.getElementById(id);
                if (!element) {
                    throw new Error(`No element found with ID '${id}'.`);
                }
                return element;
            });
            // remove children
            lodash__WEBPACK_IMPORTED_MODULE_1__["difference"](this.children, childElements).forEach((child) => this.removeChild(child));
            // add children
            const toAdd = lodash__WEBPACK_IMPORTED_MODULE_1__["difference"](childElements, this.children);
            toAdd.reverse().forEach((child) => this.insertChild(child, 0));
        }
        if ('data' in model) {
            this.data = model.data;
        }
        if ('label' in model) {
            this.label = model.label;
        }
        if ('style' in model) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["merge"](this.style, model.style);
        }
    }
    raise() {
        const { parent } = this;
        if (parent) {
            parent.appendChild(this);
            parent.raise();
        }
    }
    translateToAbsolute(t) {
        this.translateToParent(t);
        const { parent } = this;
        if (parent) {
            parent.translateToAbsolute(t);
        }
    }
    translateFromAbsolute(t) {
        const { parent } = this;
        if (parent) {
            parent.translateFromAbsolute(t);
        }
        this.translateFromParent(t);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    translateToParent(t) {
        // nothing to do
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    translateFromParent(t) {
        // nothing to do
    }
    destroy() {
        // nothing to do
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseElement.prototype, "type", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseElement.prototype, "data", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseElement.prototype, "parent", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseElement.prototype, "visible", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].shallow
], BaseElement.prototype, "children", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseElement.prototype, "controller", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseElement.prototype, "label", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseElement.prototype, "style", void 0);
__decorate([
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["computed"])({ equals: lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"] })
], BaseElement.prototype, "ordering", null);


/***/ }),

/***/ "./packages/topology/src/elements/BaseGraph.ts":
/*!*****************************************************!*\
  !*** ./packages/topology/src/elements/BaseGraph.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseGraph; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _geom_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geom/Rect */ "./packages/topology/src/geom/Rect.ts");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _geom_Dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geom/Dimensions */ "./packages/topology/src/geom/Dimensions.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./packages/topology/src/const.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseElement */ "./packages/topology/src/elements/BaseElement.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class BaseGraph extends _BaseElement__WEBPACK_IMPORTED_MODULE_6__["default"] {
    constructor() {
        super(...arguments);
        this.layers = _const__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_LAYERS"];
        this.scale = 1;
        this.dimensions = new _geom_Dimensions__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.scaleExtent = [0.25, 4];
        this.panIntoView = (nodeElement, { offset = 0, minimumVisible = 0 } = {}) => {
            if (!nodeElement) {
                return;
            }
            const { x: viewX, y: viewY, width: viewWidth, height: viewHeight } = this.getBounds();
            const boundingBox = nodeElement
                .getBounds()
                .clone()
                .scale(this.scale)
                .translate(viewX, viewY);
            const { x, y, width, height } = boundingBox;
            let move = false;
            const panOffset = offset * this.scale;
            const minVisibleSize = minimumVisible * this.scale;
            const newLocation = {
                x: viewX,
                y: viewY,
            };
            if (x + width - minVisibleSize < 0) {
                newLocation.x -= x - panOffset;
                move = true;
            }
            if (x + minVisibleSize > viewWidth) {
                newLocation.x -= x + width - viewWidth + panOffset;
                move = true;
            }
            if (y + height - minVisibleSize < 0) {
                newLocation.y -= y - panOffset;
                move = true;
            }
            if (y + minVisibleSize > viewHeight) {
                newLocation.y -= y + height - viewHeight + panOffset;
                move = true;
            }
            if (move) {
                this.setBounds(new _geom_Rect__WEBPACK_IMPORTED_MODULE_1__["default"](newLocation.x, newLocation.y, viewWidth, viewHeight));
            }
        };
    }
    get edges() {
        return this.getChildren().filter(_types__WEBPACK_IMPORTED_MODULE_5__["isEdge"]);
    }
    get nodes() {
        return this.getChildren().filter(_types__WEBPACK_IMPORTED_MODULE_5__["isNode"]);
    }
    getKind() {
        return _types__WEBPACK_IMPORTED_MODULE_5__["ModelKind"].graph;
    }
    getLayers() {
        return this.layers;
    }
    setLayers(layers) {
        this.layers = layers;
    }
    getScaleExtent() {
        return this.scaleExtent;
    }
    setScaleExtent(scaleExtent) {
        this.scaleExtent = scaleExtent;
    }
    getBounds() {
        const { position: { x, y }, dimensions: { width, height }, } = this;
        return new _geom_Rect__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, width, height);
    }
    setBounds(bounds) {
        const { width, height } = this.dimensions;
        if (bounds.width !== width || bounds.height !== height) {
            this.dimensions = new _geom_Dimensions__WEBPACK_IMPORTED_MODULE_3__["default"](bounds.width, bounds.height);
        }
        const { x, y } = this.position;
        if (bounds.x !== x || bounds.y !== y) {
            this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_2__["default"](bounds.x, bounds.y);
        }
    }
    getPosition() {
        return this.position;
    }
    setPosition(point) {
        this.position = point;
    }
    getDimensions() {
        return this.dimensions;
    }
    setDimensions(dimensions) {
        this.dimensions = dimensions;
    }
    getNodes() {
        return this.nodes;
    }
    getEdges() {
        return this.edges;
    }
    getLayout() {
        return this.layoutType;
    }
    setLayout(layout) {
        if (layout === this.layoutType) {
            return;
        }
        if (this.currentLayout) {
            this.currentLayout.destroy();
        }
        this.layoutType = layout;
        this.currentLayout = layout ? this.getController().getLayout(layout) : undefined;
    }
    layout() {
        if (this.currentLayout) {
            this.currentLayout.layout();
        }
    }
    getScale() {
        return this.scale;
    }
    setScale(scale) {
        this.scale = scale;
    }
    reset() {
        this.scale = 1;
        this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
    }
    scaleBy(scale, location) {
        const b = this.getBounds();
        let { x, y } = b;
        const c = location || b.getCenter().translate(-x, -y);
        x = (c.x - x) / this.scale;
        y = (c.y - y) / this.scale;
        const newScale = Math.max(Math.min(this.scale * scale, this.scaleExtent[1]), this.scaleExtent[0]);
        this.setScale(newScale);
        x = c.x - x * this.scale;
        y = c.y - y * this.scale;
        this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_2__["default"](x, y);
    }
    fit(padding = 0) {
        let rect;
        this.getNodes().forEach((c) => {
            const b = c.getBounds();
            if (!rect) {
                rect = b.clone();
            }
            else {
                rect.union(b);
            }
        });
        if (!rect) {
            return;
        }
        const { width, height } = rect;
        if (width === 0 || height === 0) {
            return;
        }
        const { width: fullWidth, height: fullHeight } = this.getDimensions();
        const midX = rect.x + width / 2;
        const midY = rect.y + height / 2;
        // set the max scale to be the current zoom level or 1
        const maxScale = Math.max(this.getScale(), 1);
        // compute the scale
        const scale = Math.min(1 /
            Math.max(width / Math.max(1, fullWidth - padding), height / Math.max(1, fullHeight - padding)), maxScale);
        // translate to center
        const tx = fullWidth / 2 - midX * scale;
        const ty = fullHeight / 2 - midY * scale;
        // TODO should scale and bound be kept in a single geom Transform object instead of separately?
        this.scale = scale;
        this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_2__["default"](tx, ty);
    }
    setModel(model) {
        var _a;
        super.setModel(model);
        if ('layers' in model && model.layers) {
            this.setLayers(model.layers);
        }
        if ('layout' in model) {
            this.setLayout(model.layout);
        }
        if (((_a = model.scaleExtent) === null || _a === void 0 ? void 0 : _a.length) === 2) {
            this.setScaleExtent(model.scaleExtent);
        }
        if ('scale' in model && typeof model.scale === 'number') {
            this.setScale(+model.scale);
        }
        let p;
        if ('x' in model && model.x != null) {
            if (!p) {
                p = this.position.clone();
            }
            p.x = model.x;
        }
        if ('y' in model && model.y != null) {
            if (!p) {
                p = this.position.clone();
            }
            p.y = model.y;
        }
        if (p) {
            this.setPosition(p);
        }
    }
    translateToAbsolute() {
        // do nothing
    }
    translateFromAbsolute() {
        // do nothing
    }
    destroy() {
        if (this.currentLayout) {
            this.currentLayout.destroy();
        }
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseGraph.prototype, "layers", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseGraph.prototype, "scale", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseGraph.prototype, "layoutType", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseGraph.prototype, "dimensions", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseGraph.prototype, "position", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseGraph.prototype, "scaleExtent", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseGraph.prototype, "edges", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseGraph.prototype, "nodes", null);


/***/ }),

/***/ "./packages/topology/src/elements/BaseNode.ts":
/*!****************************************************!*\
  !*** ./packages/topology/src/elements/BaseNode.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseNode; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _anchors_CenterAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../anchors/CenterAnchor */ "./packages/topology/src/anchors/CenterAnchor.ts");
/* harmony import */ var _geom_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geom/Rect */ "./packages/topology/src/geom/Rect.ts");
/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseElement */ "./packages/topology/src/elements/BaseElement.ts");
/* harmony import */ var _geom_Dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geom/Dimensions */ "./packages/topology/src/geom/Dimensions.ts");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const createAnchorKey = (end = _types__WEBPACK_IMPORTED_MODULE_1__["AnchorEnd"].both, type = '') => `${end}:${type}`;
class BaseNode extends _BaseElement__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super(...arguments);
        this.anchors = {
            [createAnchorKey()]: new _anchors_CenterAnchor__WEBPACK_IMPORTED_MODULE_2__["default"](this),
        };
        this.dimensions = new _geom_Dimensions__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.group = false;
        this.collapsed = false;
    }
    get nodes() {
        if (this.isCollapsed()) {
            return [];
        }
        return this.getChildren().filter(_types__WEBPACK_IMPORTED_MODULE_1__["isNode"]);
    }
    get groupBounds() {
        const children = this.getChildren()
            .filter(_types__WEBPACK_IMPORTED_MODULE_1__["isNode"])
            .filter((n) => n.isVisible());
        if (!children.length) {
            return this.getInternalBounds();
        }
        let rect;
        children.forEach((c) => {
            if (Object(_types__WEBPACK_IMPORTED_MODULE_1__["isNode"])(c)) {
                const { padding } = c.getStyle();
                const b = c.getBounds();
                // Currently non-group nodes do not include their padding in the bounds
                if (!c.isGroup() && padding) {
                    b.padding(c.getStyle().padding);
                }
                if (!rect) {
                    rect = b.clone();
                }
                else {
                    rect.union(b);
                }
            }
        });
        if (!rect) {
            rect = new _geom_Rect__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        const { padding } = this.getStyle();
        return rect.padding(padding);
    }
    get sourceEdges() {
        return this.getGraph()
            .getEdges()
            .filter((e) => e.getSource() === this);
    }
    get targetEdges() {
        return this.getGraph()
            .getEdges()
            .filter((e) => e.getTarget() === this);
    }
    getChildren() {
        if (this.isCollapsed()) {
            return super.getChildren().filter(_types__WEBPACK_IMPORTED_MODULE_1__["isEdge"]);
        }
        return super.getChildren();
    }
    getKind() {
        return _types__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].node;
    }
    getInternalBounds() {
        const { position, dimensions } = this;
        return new _geom_Rect__WEBPACK_IMPORTED_MODULE_3__["default"](position.x, position.y, dimensions.width, dimensions.height);
    }
    getBounds() {
        return this.group && !this.collapsed ? this.groupBounds : this.getInternalBounds();
    }
    setBounds(bounds) {
        const { width, height } = this.dimensions;
        if (bounds.width !== width || bounds.height !== height) {
            this.dimensions = new _geom_Dimensions__WEBPACK_IMPORTED_MODULE_5__["default"](bounds.width, bounds.height);
        }
        const { x, y } = this.position;
        if (bounds.x !== x || bounds.y !== y) {
            this.position = new _geom_Point__WEBPACK_IMPORTED_MODULE_6__["default"](bounds.x, bounds.y);
        }
    }
    getPosition() {
        return this.position;
    }
    setPosition(point) {
        this.position = point;
    }
    getDimensions() {
        return this.dimensions;
    }
    setDimensions(dimensions) {
        this.dimensions = dimensions;
    }
    getAnchor(end, type) {
        let anchor = this.anchors[createAnchorKey(end, type)];
        if (!anchor && type) {
            anchor = this.anchors[createAnchorKey(end)];
        }
        if (!anchor && (end === _types__WEBPACK_IMPORTED_MODULE_1__["AnchorEnd"].source || end === _types__WEBPACK_IMPORTED_MODULE_1__["AnchorEnd"].target)) {
            anchor = this.anchors[createAnchorKey(_types__WEBPACK_IMPORTED_MODULE_1__["AnchorEnd"].both, type)];
            if (!anchor && type) {
                anchor = this.anchors[createAnchorKey(_types__WEBPACK_IMPORTED_MODULE_1__["AnchorEnd"].both)];
            }
        }
        return anchor;
    }
    setAnchor(anchor, end, type) {
        const key = createAnchorKey(end, type);
        if (anchor) {
            this.anchors[key] = anchor;
        }
        else {
            delete this.anchors[key];
        }
    }
    getNodes() {
        return this.nodes;
    }
    isGroup() {
        return this.group;
    }
    setGroup(group) {
        this.group = group;
    }
    isCollapsed() {
        return this.collapsed;
    }
    setCollapsed(collapsed) {
        if (collapsed !== this.collapsed) {
            // Get the location prior to the collapse change and apply it after the collapse.
            // This updates the new node(s) location(s) to be what the node was originally, basically
            // keeping the nodes ln place so the layout doesn't start fresh (putting the new nodes at 0,0
            // TODO: Update to better position the nodes at a point location rather than relying on the setCenter updating the nodes.
            const prevCenter = this.getBounds().getCenter();
            this.collapsed = collapsed;
            this.setBounds(this.getBounds().setCenter(prevCenter.x, prevCenter.y));
            this.getController().fireEvent(_types__WEBPACK_IMPORTED_MODULE_1__["NODE_COLLAPSE_CHANGE_EVENT"], { node: this });
        }
    }
    getNodeShape() {
        return this.shape || (this.group ? _types__WEBPACK_IMPORTED_MODULE_1__["NodeShape"].rect : _types__WEBPACK_IMPORTED_MODULE_1__["NodeShape"].circle);
    }
    setNodeShape(shape) {
        this.shape = shape;
    }
    getSourceEdges() {
        return this.sourceEdges;
    }
    getTargetEdges() {
        return this.targetEdges;
    }
    setModel(model) {
        super.setModel(model);
        let d;
        let p;
        if ('width' in model && model.width != null) {
            if (!d) {
                d = this.dimensions.clone();
            }
            d.width = model.width;
        }
        if ('height' in model && model.height != null) {
            if (!d) {
                d = this.dimensions.clone();
            }
            d.height = model.height;
        }
        if (d) {
            this.setDimensions(d);
        }
        if ('x' in model && model.x != null) {
            if (!p) {
                p = this.position.clone();
            }
            p.x = model.x;
        }
        if ('y' in model && model.y != null) {
            if (!p) {
                p = this.position.clone();
            }
            p.y = model.y;
        }
        if (p) {
            this.setPosition(p);
        }
        if ('group' in model) {
            this.setGroup(!!model.group);
        }
        if ('shape' in model) {
            this.shape = model.shape;
        }
        if ('collapsed' in model) {
            this.setCollapsed(!!model.collapsed);
        }
    }
    translateToParent(t) {
        if (!this.group || this.isCollapsed()) {
            const { x, y } = this.getPosition();
            t.translate(x, y);
        }
    }
    translateFromParent(t) {
        if (!this.group || this.isCollapsed()) {
            const { x, y } = this.getPosition();
            t.translate(-x, -y);
        }
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].shallow
], BaseNode.prototype, "anchors", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseNode.prototype, "dimensions", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].ref
], BaseNode.prototype, "position", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseNode.prototype, "nodes", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseNode.prototype, "group", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseNode.prototype, "collapsed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], BaseNode.prototype, "shape", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseNode.prototype, "groupBounds", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseNode.prototype, "sourceEdges", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]
], BaseNode.prototype, "targetEdges", null);


/***/ }),

/***/ "./packages/topology/src/elements/defaultElementFactory.ts":
/*!*****************************************************************!*\
  !*** ./packages/topology/src/elements/defaultElementFactory.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _BaseEdge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseEdge */ "./packages/topology/src/elements/BaseEdge.ts");
/* harmony import */ var _BaseGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseGraph */ "./packages/topology/src/elements/BaseGraph.ts");
/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseNode */ "./packages/topology/src/elements/BaseNode.ts");




const defaultElementFactory = (kind) => {
    switch (kind) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].graph:
            return new _BaseGraph__WEBPACK_IMPORTED_MODULE_2__["default"]();
        case _types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].node:
            return new _BaseNode__WEBPACK_IMPORTED_MODULE_3__["default"]();
        case _types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].edge:
            return new _BaseEdge__WEBPACK_IMPORTED_MODULE_1__["default"]();
        default:
            return undefined;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (defaultElementFactory);


/***/ }),

/***/ "./packages/topology/src/elements/index.ts":
/*!*************************************************!*\
  !*** ./packages/topology/src/elements/index.ts ***!
  \*************************************************/
/*! exports provided: BaseEdge, BaseElement, BaseGraph, BaseNode, defaultElementFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseEdge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseEdge */ "./packages/topology/src/elements/BaseEdge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEdge", function() { return _BaseEdge__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseElement */ "./packages/topology/src/elements/BaseElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _BaseElement__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BaseGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseGraph */ "./packages/topology/src/elements/BaseGraph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseGraph", function() { return _BaseGraph__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseNode */ "./packages/topology/src/elements/BaseNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _BaseNode__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _defaultElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultElementFactory */ "./packages/topology/src/elements/defaultElementFactory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultElementFactory", function() { return _defaultElementFactory__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./packages/topology/src/geom/Dimensions.ts":
/*!**************************************************!*\
  !*** ./packages/topology/src/geom/Dimensions.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dimensions; });
class Dimensions {
    constructor(width = 0, height = 0) {
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    static singleUse(width = 0, height = 0) {
        Dimensions.SINGLETON.width = width;
        Dimensions.SINGLETON.height = height;
        return Dimensions.SINGLETON;
    }
    static fromDimensions(dimension) {
        return new Dimensions(dimension.width, dimension.height);
    }
    isEmpty() {
        return this.width <= 0 || this.height <= 0;
    }
    setSize(w, h) {
        this.width = w;
        this.height = h;
        return this;
    }
    scale(scaleX, scaleY) {
        const sy = scaleY != null ? scaleY : scaleX;
        this.width *= scaleX;
        this.height *= sy;
        return this;
    }
    resize(dw, dh) {
        this.width += dw;
        this.height += dh;
        return this;
    }
    expand(h, v) {
        this.height += v * 2;
        this.width += h * 2;
        return this;
    }
    clone() {
        return Dimensions.fromDimensions(this);
    }
    equals(r) {
        return r.width === this.width && r.height === this.height;
    }
}
Dimensions.EMPTY = new Dimensions();
Dimensions.SINGLETON = new Dimensions();


/***/ }),

/***/ "./packages/topology/src/geom/Point.ts":
/*!*********************************************!*\
  !*** ./packages/topology/src/geom/Point.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static singleUse(x = 0, y = 0) {
        Point.SINGLETON.x = x;
        Point.SINGLETON.y = y;
        return Point.SINGLETON;
    }
    static fromPoint(point) {
        return new Point(point.x, point.y);
    }
    setLocation(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    scale(scaleX, scaleY) {
        this.x *= scaleX;
        this.y *= scaleY != null ? scaleY : scaleX;
        return this;
    }
    clone() {
        return Point.fromPoint(this);
    }
    equals(p) {
        return p.x === this.x && p.y === this.y;
    }
}
Point.EMPTY = new Point();
Point.SINGLETON = new Point();


/***/ }),

/***/ "./packages/topology/src/geom/Rect.ts":
/*!********************************************!*\
  !*** ./packages/topology/src/geom/Rect.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./packages/topology/src/geom/Point.ts");

class Rect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    static singleUse(x = 0, y = 0, width = 0, height = 0) {
        Rect.SINGLETON.x = x;
        Rect.SINGLETON.y = y;
        Rect.SINGLETON.width = width;
        Rect.SINGLETON.height = height;
        return Rect.SINGLETON;
    }
    static fromRect(rect) {
        return new Rect(rect.x, rect.y, rect.width, rect.height);
    }
    isEmpty() {
        return this.width <= 0 || this.height <= 0;
    }
    setLocation(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    setSize(w, h) {
        this.width = w;
        this.height = h;
        return this;
    }
    getCenter() {
        return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + this.width / 2, this.y + this.height / 2);
    }
    setCenter(x, y) {
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
        return this;
    }
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    scale(scaleX, scaleY) {
        const sy = scaleY != null ? scaleY : scaleX;
        const xx = this.x;
        const yy = this.y;
        this.x *= scaleX;
        this.y *= sy;
        this.width = (xx + this.width) * scaleX - this.x;
        this.height = (yy + this.height) * sy - this.y;
        return this;
    }
    resize(dw, dh) {
        this.width += dw;
        this.height += dh;
        return this;
    }
    bottom() {
        return this.y + this.height;
    }
    right() {
        return this.x + this.width;
    }
    union({ x, y, width, height }) {
        const right = Math.max(this.x + this.width, x + width);
        const bottom = Math.max(this.y + this.height, y + height);
        this.x = Math.min(this.x, x);
        this.y = Math.min(this.y, y);
        this.width = right - this.x;
        this.height = bottom - this.y;
        return this;
    }
    expand(h, v) {
        this.y -= v;
        this.height += v * 2;
        this.x -= h;
        this.width += h * 2;
        return this;
    }
    //
    // Padding Format:  [all], [vertical, horizontal], [top, horizontal, bottom], [top, right, bottom, left]
    //
    padding(padding) {
        if (padding) {
            if (typeof padding === 'number') {
                this.expand(padding, padding);
            }
            else if (padding.length === 1) {
                this.expand(padding[0], padding[0]);
            }
            else if (padding.length === 2) {
                this.expand(padding[1], padding[0]);
            }
            else if (padding.length === 3) {
                this.y -= padding[0];
                this.height += padding[0] + padding[2];
                this.width += padding[1];
            }
            else if (padding.length === 4) {
                this.y -= padding[0];
                this.height += padding[0] + padding[2];
                this.x -= padding[1];
                this.width += padding[1] + padding[3];
            }
        }
        return this;
    }
    setBounds(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return this;
    }
    clone() {
        return Rect.fromRect(this);
    }
    equals(r) {
        return r.x === this.x && r.y === this.y && r.width === this.width && r.height === this.height;
    }
}
Rect.EMPTY = new Rect();
Rect.SINGLETON = new Rect();


/***/ }),

/***/ "./packages/topology/src/geom/index.ts":
/*!*********************************************!*\
  !*** ./packages/topology/src/geom/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./packages/topology/src/geom/Point.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _Point__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect */ "./packages/topology/src/geom/Rect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _Rect__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./packages/topology/src/geom/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["Point","Rect","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/***/ }),

/***/ "./packages/topology/src/geom/types.ts":
/*!*********************************************!*\
  !*** ./packages/topology/src/geom/types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/topology/src/index.ts":
/*!****************************************!*\
  !*** ./packages/topology/src/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors */ "./packages/topology/src/anchors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractAnchor", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["AbstractAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenterAnchor", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["CenterAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipseAnchor", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["EllipseAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectAnchor", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["RectAnchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGAnchor", function() { return _anchors__WEBPACK_IMPORTED_MODULE_0__["SVGAnchor"]; });

/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./behavior */ "./packages/topology/src/behavior/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _behavior__WEBPACK_IMPORTED_MODULE_1__) if(["Visualization","AbstractAnchor","CenterAnchor","EllipseAnchor","RectAnchor","SVGAnchor","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _behavior__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./packages/topology/src/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectorArrow", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ConnectorArrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeConnectorArrow", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["EdgeConnectorArrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["GraphComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationSurface", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["VisualizationSurface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultCreateConnector", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["DefaultCreateConnector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextSubMenuItem", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ContextSubMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuItem", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ContextMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuSeparator", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["ContextMenuSeparator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGDefs", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["SVGDefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGDefsProvider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["SVGDefsProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayersProvider", function() { return _components__WEBPACK_IMPORTED_MODULE_2__["LayersProvider"]; });

/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./packages/topology/src/const.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATTR_DATA_KIND", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["ATTR_DATA_KIND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATTR_DATA_TYPE", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["ATTR_DATA_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATTR_DATA_ID", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["ATTR_DATA_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOP_LAYER", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["TOP_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAYER", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GROUPS_LAYER", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["GROUPS_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOTTOM_LAYER", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["BOTTOM_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAYERS", function() { return _const__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_LAYERS"]; });

/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements */ "./packages/topology/src/elements/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEdge", function() { return _elements__WEBPACK_IMPORTED_MODULE_4__["BaseEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _elements__WEBPACK_IMPORTED_MODULE_4__["BaseElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseGraph", function() { return _elements__WEBPACK_IMPORTED_MODULE_4__["BaseGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _elements__WEBPACK_IMPORTED_MODULE_4__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultElementFactory", function() { return _elements__WEBPACK_IMPORTED_MODULE_4__["defaultElementFactory"]; });

/* harmony import */ var _geom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geom */ "./packages/topology/src/geom/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _geom__WEBPACK_IMPORTED_MODULE_5__) if(["Visualization","AbstractAnchor","CenterAnchor","EllipseAnchor","RectAnchor","SVGAnchor","ConnectorArrow","EdgeConnectorArrow","GraphComponent","VisualizationSurface","DefaultCreateConnector","ContextMenu","ContextSubMenuItem","ContextMenuItem","ContextMenuSeparator","SVGDefs","SVGDefsProvider","Layer","LayersProvider","ATTR_DATA_KIND","ATTR_DATA_TYPE","ATTR_DATA_ID","TOP_LAYER","DEFAULT_LAYER","GROUPS_LAYER","BOTTOM_LAYER","DEFAULT_LAYERS","BaseEdge","BaseElement","BaseGraph","BaseNode","defaultElementFactory","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _geom__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts */ "./packages/topology/src/layouts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceLayout", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["ForceLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["BaseLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutNode", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["LayoutNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGroup", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["LayoutGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutLink", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["LayoutLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_DEFAULTS", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_DEFAULTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaLayout", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["ColaLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaNode", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["ColaNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaGroup", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["ColaGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaLink", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["ColaLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreLayout", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["DagreLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreNode", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["DagreNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreLink", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["DagreLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreGroup", function() { return _layouts__WEBPACK_IMPORTED_MODULE_6__["DagreGroup"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/topology/src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerContext", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["ControllerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementContext", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["ElementContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["useCallbackRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCombineRefs", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["useCombineRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["useHover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEllipseAnchorPoint", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getEllipseAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRectAnchorPoint", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getRectAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPathAnchorPoint", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getPathAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPolygonAnchorPoint", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getPolygonAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupNodeElements", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["groupNodeElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leafNodeElements", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["leafNodeElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopCollapsedParent", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getTopCollapsedParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClosestVisibleParent", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getClosestVisibleParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementPadding", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getElementPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGroupPadding", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["getGroupPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxPadding", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["maxPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSvgIdUrl", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["createSvgIdUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vecScale", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["vecScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vecSum", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["vecSum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unitNormal", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["unitNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boundingBoxForLine", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["boundingBoxForLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hullPath", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["hullPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["useSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAggregateEdges", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["createAggregateEdges"]; });

/* harmony import */ var _mobx_exports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobx-exports */ "./packages/topology/src/mobx-exports.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _mobx_exports__WEBPACK_IMPORTED_MODULE_8__["observer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./packages/topology/src/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnchorEnd", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["AnchorEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeShape", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["NodeShape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelKind", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["ModelKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isGraph", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["isGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["isNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["isEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_CHILD_EVENT", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["ADD_CHILD_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_VISIBILITY_CHANGE_EVENT", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["ELEMENT_VISIBILITY_CHANGE_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CHILD_EVENT", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["REMOVE_CHILD_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_COLLAPSE_CHANGE_EVENT", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["NODE_COLLAPSE_CHANGE_EVENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GRAPH_LAYOUT_END_EVENT", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["GRAPH_LAYOUT_END_EVENT"]; });

/* harmony import */ var _Visualization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Visualization */ "./packages/topology/src/Visualization.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Visualization", function() { return _Visualization__WEBPACK_IMPORTED_MODULE_10__["default"]; });














/***/ }),

/***/ "./packages/topology/src/layouts/BaseLayout.ts":
/*!*****************************************************!*\
  !*** ./packages/topology/src/layouts/BaseLayout.ts ***!
  \*****************************************************/
/*! exports provided: BaseLayout, LayoutNode, LayoutGroup, LayoutLink, LAYOUT_DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return BaseLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutNode", function() { return LayoutNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGroup", function() { return LayoutGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutLink", function() { return LayoutLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_DEFAULTS", function() { return LAYOUT_DEFAULTS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");
/* harmony import */ var _utils_element_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/element-utils */ "./packages/topology/src/utils/element-utils.ts");
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../behavior */ "./packages/topology/src/behavior/index.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements */ "./packages/topology/src/elements/index.ts");
/* harmony import */ var _ForceSimulation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForceSimulation */ "./packages/topology/src/layouts/ForceSimulation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class LayoutNode {
    constructor(node, distance, index = -1) {
        // isFixed is used locally for Force simulation during drag events
        this.isFixed = false;
        this.node = node;
        this.distance = distance;
        this.index = index;
        // Currently we support only fixed node sizes, this will need to change if/when dynamic node sizes are supported
        const bounds = this.nodeBounds;
        this.nodeWidth = bounds.width + this.distance * 2;
        this.nodeHeight = bounds.height + this.distance * 2;
        this.nodeRadius = Math.max(bounds.width, bounds.height) / 2;
    }
    get element() {
        return this.node;
    }
    get id() {
        return this.node.getId();
    }
    get x() {
        return this.xx || this.node.getBounds().getCenter().x;
    }
    set x(x) {
        if (!Number.isNaN(x)) {
            this.xx = x;
        }
    }
    get y() {
        return this.yy || this.node.getBounds().getCenter().y;
    }
    set y(y) {
        if (!Number.isNaN(y)) {
            this.yy = y;
        }
    }
    get fx() {
        return this.isFixed ? this.node.getBounds().getCenter().x : undefined;
    }
    get fy() {
        return this.isFixed ? this.node.getBounds().getCenter().y : undefined;
    }
    setPosition(x, y) {
        this.node.setBounds(this.node
            .getBounds()
            .clone()
            .setCenter(x, y));
    }
    get nodeBounds() {
        const { padding } = this.node.getStyle();
        // Currently non-group nodes do not include their padding in the bounds
        if (!this.node.isGroup() && padding) {
            return this.node
                .getBounds()
                .clone()
                .padding(padding);
        }
        return this.node.getBounds();
    }
    get width() {
        return this.nodeWidth;
    }
    get height() {
        return this.nodeHeight;
    }
    update() {
        if (this.xx != null && this.yy != null) {
            this.node.setBounds(this.node
                .getBounds()
                .clone()
                .setCenter(this.xx, this.yy));
        }
        this.xx = undefined;
        this.yy = undefined;
    }
    get radius() {
        return this.nodeRadius;
    }
    get collisionRadius() {
        return this.radius + this.distance;
    }
}
class LayoutGroup {
    constructor(node, padding, index) {
        this.node = node;
        this.padding = padding;
        this.index = index;
    }
    get element() {
        return this.node;
    }
    get id() {
        return this.node.getId();
    }
}
class LayoutLink {
    constructor(edge, source, target, isFalse = false) {
        this.edge = edge;
        this.sourceNode = source;
        this.targetNode = target;
        this.isFalse = isFalse;
    }
    get element() {
        return this.edge;
    }
    get id() {
        return this.edge.getId();
    }
    get source() {
        return this.sourceNode;
    }
    get target() {
        return this.targetNode;
    }
}
const LAYOUT_DEFAULTS = {
    linkDistance: 60,
    nodeDistance: 35,
    groupDistance: 35,
    collideDistance: 0,
    simulationSpeed: 10,
    chargeStrength: 0,
    allowDrag: true,
    layoutOnDrag: true,
};
class BaseLayout {
    constructor(graph, options) {
        this.scheduleRestart = false;
        this.nodes = [];
        this.edges = [];
        this.groups = [];
        this.nodesMap = {};
        this.handleDragStart = (element, event, operation) => {
            this.initDrag(element, event, operation);
            if (!this.options.layoutOnDrag) {
                return;
            }
            if (operation.type !== _behavior__WEBPACK_IMPORTED_MODULE_4__["DRAG_MOVE_OPERATION"]) {
                this.forceSimulation.stopSimulation();
                return;
            }
            const id = element.getId();
            let found = false;
            const dragNode = this.nodes.find((node) => node.id === id);
            if (dragNode) {
                dragNode.isFixed = true;
                found = true;
            }
            if (!found) {
                const dragGroup = this.groups.find((group) => group.id === id);
                if (dragGroup) {
                    const groupNodes = dragGroup.leaves;
                    groupNodes.forEach((node) => {
                        node.isFixed = true;
                    });
                    found = true;
                }
            }
            if (found) {
                this.forceSimulation.alphaTarget(0.1);
                this.forceSimulation.restart();
            }
        };
        this.handleDragEnd = (element, event, operation) => {
            this.endDrag(element, event, operation);
            if (!this.options.layoutOnDrag) {
                return;
            }
            if (operation.type !== _behavior__WEBPACK_IMPORTED_MODULE_4__["DRAG_MOVE_OPERATION"]) {
                this.forceSimulation.restart();
                return;
            }
            const id = element.getId();
            const dragNode = this.nodes.find((node) => node.id === id);
            if (dragNode) {
                dragNode.isFixed = false;
            }
            else {
                const dragGroup = this.groups.find((group) => group.id === id);
                if (dragGroup) {
                    const groupNodes = dragGroup.leaves;
                    groupNodes.forEach((node) => {
                        node.isFixed = false;
                    });
                }
            }
            this.forceSimulation.alphaTarget(0);
        };
        this.layout = () => {
            this.stopListening();
            this.runLayout(true);
            this.startListening();
        };
        this.handleChildAdded = ({ child }) => {
            if (!this.nodesMap[child.getId()]) {
                this.scheduleRestart = true;
                this.scheduleLayout();
            }
        };
        this.handleChildRemoved = ({ child }) => {
            if (this.nodesMap[child.getId()]) {
                this.scheduleRestart = true;
                this.scheduleLayout();
            }
        };
        this.handleElementVisibilityChange = (event) => {
            if (event.visible === (this.nodesMap[event.target.getId()] === undefined)) {
                this.scheduleRestart = true;
                this.scheduleLayout();
            }
        };
        this.handleNodeCollapse = ({ node }) => {
            if (!node.isCollapsed()) {
                this.scheduleRestart = true;
                this.scheduleLayout();
            }
        };
        this.scheduleLayout = () => {
            if (!this.scheduleHandle) {
                this.scheduleHandle = window.requestAnimationFrame(() => {
                    delete this.scheduleHandle;
                    this.runLayout(false, this.scheduleRestart);
                    this.scheduleRestart = false;
                });
            }
        };
        this.getFixedNodeDistance = (link) => {
            return Math.sqrt((link.sourceNode.x - link.targetNode.x) ** 2 + (link.sourceNode.y - link.targetNode.y) ** 2);
        };
        // Default is to clear any initial bend points
        this.initializeEdgeBendpoints = (edge) => {
            // remove any bendpoints
            if (edge.getBendpoints().length > 0) {
                edge.setBendpoints([]);
            }
        };
        this.graph = graph;
        this.options = Object.assign(Object.assign({}, LAYOUT_DEFAULTS), options);
        if (this.options.allowDrag) {
            graph
                .getController()
                .addEventListener(_behavior__WEBPACK_IMPORTED_MODULE_4__["DRAG_NODE_START_EVENT"], this.handleDragStart)
                .addEventListener(_behavior__WEBPACK_IMPORTED_MODULE_4__["DRAG_NODE_END_EVENT"], this.handleDragEnd);
        }
        this.forceSimulation = new _ForceSimulation__WEBPACK_IMPORTED_MODULE_6__["ForceSimulation"](this.options);
    }
    destroy() {
        if (this.options.allowDrag) {
            this.graph
                .getController()
                .removeEventListener(_behavior__WEBPACK_IMPORTED_MODULE_4__["DRAG_NODE_START_EVENT"], this.handleDragStart)
                .removeEventListener(_behavior__WEBPACK_IMPORTED_MODULE_4__["DRAG_NODE_END_EVENT"], this.handleDragEnd);
        }
        this.stopListening();
        this.forceSimulation.destroy();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initDrag(element, event, operation) { }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endDrag(element, event, operation) { }
    startListening() {
        const controller = this.graph.getController();
        if (controller) {
            controller.addEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CHILD_EVENT"], this.handleChildAdded);
            controller.addEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CHILD_EVENT"], this.handleChildRemoved);
            controller.addEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_VISIBILITY_CHANGE_EVENT"], this.handleElementVisibilityChange);
            controller.addEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["NODE_COLLAPSE_CHANGE_EVENT"], this.handleNodeCollapse);
        }
    }
    stopListening() {
        const controller = this.graph.getController();
        if (this.scheduleHandle) {
            window.cancelAnimationFrame(this.scheduleHandle);
        }
        if (controller) {
            controller.removeEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["ADD_CHILD_EVENT"], this.handleChildAdded);
            controller.removeEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CHILD_EVENT"], this.handleChildRemoved);
            controller.removeEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_VISIBILITY_CHANGE_EVENT"], this.handleElementVisibilityChange);
            controller.removeEventListener(_types__WEBPACK_IMPORTED_MODULE_2__["NODE_COLLAPSE_CHANGE_EVENT"], this.handleNodeCollapse);
        }
    }
    getLayoutNode(nodes, node) {
        if (!node) {
            return undefined;
        }
        let layoutNode = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](nodes, { id: node.getId() });
        if (!layoutNode && lodash__WEBPACK_IMPORTED_MODULE_0__["size"](node.getChildren())) {
            layoutNode = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](nodes, { id: node.getChildren()[0].getId() });
        }
        if (!layoutNode) {
            layoutNode = this.getLayoutNode(nodes, Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_3__["getClosestVisibleParent"])(node));
        }
        return layoutNode;
    }
    getFauxEdges(groups, nodes) {
        const fauxEdges = [];
        groups.forEach((group) => {
            const groupNodes = group.element.getNodes();
            for (let i = 0; i < groupNodes.length; i++) {
                for (let j = i + 1; j < groupNodes.length; j++) {
                    const fauxEdge = new _elements__WEBPACK_IMPORTED_MODULE_5__["BaseEdge"]();
                    const source = this.getLayoutNode(nodes, groupNodes[i]);
                    const target = this.getLayoutNode(nodes, groupNodes[j]);
                    if (source && target) {
                        const link = this.createLayoutLink(fauxEdge, source, target, true);
                        fauxEdge.setController(target.element.getController());
                        fauxEdges.push(link);
                    }
                }
            }
        });
        return fauxEdges;
    }
    createLayoutNode(node, nodeDistance, index) {
        return new LayoutNode(node, nodeDistance, index);
    }
    createLayoutLink(edge, source, target, isFalse = false) {
        return new LayoutLink(edge, source, target, isFalse);
    }
    createLayoutGroup(node, padding, index) {
        return new LayoutGroup(node, padding, index);
    }
    getNodes(leafNodes, nodeDistance) {
        return leafNodes.map((n, index) => this.createLayoutNode(n, nodeDistance, index));
    }
    getLinks(edges) {
        const links = [];
        edges.forEach((e) => {
            const source = this.getLayoutNode(this.nodes, e.getSource());
            const target = this.getLayoutNode(this.nodes, e.getTarget());
            if (source && target) {
                this.initializeEdgeBendpoints(e);
                links.push(this.createLayoutLink(e, source, target));
            }
        });
        return links;
    }
    // Turn empty groups into nodes
    getNodesFromGroups(groups, nodeDistance, nodeCount) {
        let count = 0;
        const groupNodes = [];
        groups.forEach((group) => {
            if (group.getChildren().filter((c) => c.isVisible()).length === 0) {
                groupNodes.push(this.createLayoutNode(group, nodeDistance, nodeCount + count++));
            }
        });
        return groupNodes;
    }
    getGroups(groups, nodes, padding) {
        let nodeIndex = nodes.length;
        // Create groups only for those with children
        const layoutGroups = groups
            .filter((g) => g.getChildren().filter((c) => c.isVisible()).length > 0)
            .map((group) => this.createLayoutGroup(group, padding, nodeIndex++));
        layoutGroups.forEach((groupNode) => {
            const leaves = [];
            const leafElements = groupNode.element
                .getChildren()
                .filter((node) => !node.isGroup() || node.getChildren().length === 0);
            leafElements.forEach((leaf) => {
                const layoutLeaf = nodes.find((n) => n.id === leaf.getId());
                if (layoutLeaf) {
                    leaves.push(layoutLeaf);
                    layoutLeaf.parent = groupNode;
                }
            });
            groupNode.leaves = leaves;
            const childGroups = [];
            const groupElements = groupNode.element
                .getChildren()
                .filter((node) => node.isGroup() && !node.isCollapsed());
            groupElements.forEach((group) => {
                const layoutGroup = layoutGroups.find((g) => g.id === group.getId());
                if (layoutGroup) {
                    childGroups.push(layoutGroup);
                    layoutGroup.parent = groupNode;
                }
            });
            groupNode.groups = childGroups;
        });
        return layoutGroups;
    }
    initializeNodePositions(newNodes, graph, force = false) {
        const { width, height } = graph.getBounds();
        const cx = width / 2;
        const cy = height / 2;
        newNodes.forEach((node) => {
            // only init position for nodes that are still at 0, 0
            const { x, y } = node.element.getPosition();
            if (force || (x === 0 && y === 0)) {
                node.setPosition(cx, cy);
            }
        });
    }
    setupLayout(graph, // eslint-disable-line @typescript-eslint/no-unused-vars
    nodes, // eslint-disable-line @typescript-eslint/no-unused-vars
    edges, // eslint-disable-line @typescript-eslint/no-unused-vars
    groups) { }
    updateExistingNodes(existingNodes) {
        existingNodes.forEach((n) => {
            n.isFixed = true;
        });
    }
    stopSimulation() {
        this.forceSimulation.haltForceSimulation();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    startLayout(graph, initialRun, addingNodes) { }
    updateLayout() {
        this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
        this.forceSimulation.alpha(0.2);
    }
    runLayout(initialRun, restart = true) {
        const prevGroups = this.groups;
        // create datum
        const leafNodes = Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_3__["leafNodeElements"])(this.graph.getNodes()).filter((n) => n.isVisible());
        const groups = Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_3__["groupNodeElements"])(this.graph.getNodes()).filter((g) => g.isVisible());
        this.nodes = this.getNodes(leafNodes, this.options.nodeDistance);
        const groupNodes = this.getNodesFromGroups(groups, this.options.nodeDistance, this.nodes.length);
        if (groupNodes) {
            this.nodes.push(...groupNodes);
        }
        this.groups = this.getGroups(groups, this.nodes, this.options.groupDistance);
        const newNodes = initialRun
            ? this.nodes
            : this.nodes.filter((node) => !this.nodesMap[node.element.getId()]);
        let addingNodes = restart && newNodes.length > 0;
        if (!initialRun && restart && !addingNodes) {
            this.groups.forEach((group) => {
                const prevGroup = prevGroups.find((g) => g.element.getId() === group.element.getId());
                if (!prevGroup) {
                    addingNodes = true;
                    newNodes.push(...group.leaves);
                }
                else {
                    group.leaves.forEach((node) => {
                        if (!prevGroup.leaves.find((l) => l.element.getId() === node.element.getId())) {
                            newNodes.push(node);
                        }
                    });
                }
            });
            addingNodes = newNodes.length > 0;
        }
        this.edges = this.getLinks(this.graph.getEdges());
        // initialize new node positions
        this.initializeNodePositions(newNodes, this.graph, initialRun);
        // re-create the nodes map
        this.nodesMap = this.nodes.reduce((acc, n) => {
            acc[n.id] = n;
            return acc;
        }, {});
        // Add faux edges to keep grouped items together
        this.edges.push(...this.getFauxEdges(this.groups, this.nodes));
        this.setupLayout(this.graph, this.nodes, this.edges, this.groups);
        this.updateExistingNodes(this.nodes.filter((n) => !newNodes.includes(n)));
        if (initialRun || addingNodes) {
            // Reset the force simulation
            this.stopSimulation();
            this.startLayout(this.graph, initialRun, addingNodes);
        }
        else if (restart && this.options.layoutOnDrag) {
            this.updateLayout();
        }
        this.graph.getController().fireEvent(_types__WEBPACK_IMPORTED_MODULE_2__["GRAPH_LAYOUT_END_EVENT"], { graph: this.graph });
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__["action"]
], BaseLayout.prototype, "runLayout", null);



/***/ }),

/***/ "./packages/topology/src/layouts/ColaLayout.ts":
/*!*****************************************************!*\
  !*** ./packages/topology/src/layouts/ColaLayout.ts ***!
  \*****************************************************/
/*! exports provided: ColaLayout, ColaNode, ColaGroup, ColaLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaLayout", function() { return ColaLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaNode", function() { return ColaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaGroup", function() { return ColaGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaLink", function() { return ColaLink; });
/* harmony import */ var webcola__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webcola */ "./node_modules/webcola/dist/index.js");
/* harmony import */ var webcola__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webcola__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_element_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/element-utils */ "./packages/topology/src/utils/element-utils.ts");
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseLayout */ "./packages/topology/src/layouts/BaseLayout.ts");





class ColaNode extends _BaseLayout__WEBPACK_IMPORTED_MODULE_4__["LayoutNode"] {
    constructor(node, distance, index = -1) {
        super(node, distance, index);
        // fixed is used by Cola during node additions: 1 for fixed
        this.fixed = 0;
        // TODO: Investigate why the issue with rectangular nodes causing the layout to become vertical
        //       this setting will be a problem if nodes can change size dynamically
        // Cola layout has issues with non-square nodes
        const maxDimension = Math.max(this.nodeWidth, this.nodeHeight);
        this.nodeWidth = maxDimension;
        this.nodeHeight = maxDimension;
    }
}
class ColaGroup extends _BaseLayout__WEBPACK_IMPORTED_MODULE_4__["LayoutGroup"] {
}
class ColaLink extends _BaseLayout__WEBPACK_IMPORTED_MODULE_4__["LayoutLink"] {
    constructor(edge, source, target) {
        super(edge, source, target);
    }
}
const COLA_LAYOUT_DEFAULTS = {
    maxTicks: 300,
    initialUnconstrainedIterations: 200,
    initialUserConstraintIterations: 50,
    initialAllConstraintsIterations: 150,
    gridSnapIterations: 50,
};
class ColaLayout extends _BaseLayout__WEBPACK_IMPORTED_MODULE_4__["BaseLayout"] {
    constructor(graph, options) {
        super(graph, options);
        this.tickCount = 0;
        this.destroyed = false;
        this.getLinkDistance = (link) => {
            let distance = this.options.linkDistance + link.source.radius + link.target.radius;
            if (link.source.element.getParent() !== link.target.element.getParent()) {
                distance += Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_3__["getGroupPadding"])(link.source.element.getParent());
                distance += Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_3__["getGroupPadding"])(link.target.element.getParent());
            }
            return distance;
        };
        this.colaOptions = Object.assign(Object.assign({}, COLA_LAYOUT_DEFAULTS), options);
        this.initializeLayout();
    }
    initializeLayout() {
        this.d3Cola = webcola__WEBPACK_IMPORTED_MODULE_0__["d3adaptor"](d3__WEBPACK_IMPORTED_MODULE_1__);
        this.d3Cola.handleDisconnected(true);
        this.d3Cola.avoidOverlaps(true);
        this.d3Cola.linkDistance(this.getLinkDistance);
        this.d3Cola.on('tick', () => {
            this.tickCount++;
            if (this.tickCount === 1 || this.tickCount % this.options.simulationSpeed === 0) {
                Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => this.nodes.forEach((d) => d.update()))();
            }
            if (this.colaOptions.maxTicks >= 0 && this.tickCount > this.colaOptions.maxTicks) {
                this.d3Cola.stop();
            }
        });
        this.d3Cola.on('end', () => {
            this.tickCount = 0;
            Object(mobx__WEBPACK_IMPORTED_MODULE_2__["action"])(() => {
                if (this.destroyed) {
                    return;
                }
                this.nodes.forEach((d) => {
                    d.update();
                    d.fixed = 0;
                });
                if (this.options.layoutOnDrag) {
                    this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
                }
            })();
        });
    }
    destroy() {
        super.destroy();
        this.destroyed = true;
        this.d3Cola.stop();
    }
    initDrag() {
        // Set the alpha to 0 to halt any ticks that may be occurring
        this.d3Cola.alpha(0);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getConstraints(nodes, groups, edges) {
        return [];
    }
    createLayoutNode(node, nodeDistance, index) {
        return new ColaNode(node, nodeDistance, index);
    }
    createLayoutLink(edge, source, target) {
        return new ColaLink(edge, source, target);
    }
    createLayoutGroup(node, padding, index) {
        return new ColaGroup(node, padding, index);
    }
    setupLayout(graph, nodes, edges, groups) {
        const { width, height } = graph.getBounds();
        this.d3Cola.size([width, height]);
        // Get any custom constraints
        this.d3Cola.constraints(this.getConstraints(nodes, groups, edges));
        this.d3Cola.nodes(nodes);
        this.d3Cola.links(edges);
        this.d3Cola.groups(groups);
    }
    updateExistingNodes(existingNodes) {
        existingNodes.forEach((n) => {
            n.fixed = 1;
        });
    }
    startLayout(graph, initialRun, addingNodes) {
        // start the layout
        this.d3Cola.alpha(0.2);
        this.tickCount = 0;
        this.d3Cola.start(addingNodes ? 0 : this.colaOptions.initialUnconstrainedIterations, addingNodes ? 0 : this.colaOptions.initialUserConstraintIterations, addingNodes ? 0 : this.colaOptions.initialAllConstraintsIterations, addingNodes ? 0 : this.colaOptions.gridSnapIterations, true, !addingNodes);
    }
}



/***/ }),

/***/ "./packages/topology/src/layouts/DagreLayout.ts":
/*!******************************************************!*\
  !*** ./packages/topology/src/layouts/DagreLayout.ts ***!
  \******************************************************/
/*! exports provided: DagreLayout, DagreNode, DagreLink, DagreGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagreLayout", function() { return DagreLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagreNode", function() { return DagreNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagreLink", function() { return DagreLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagreGroup", function() { return DagreGroup; });
/* harmony import */ var dagre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dagre */ "./node_modules/dagre/index.js");
/* harmony import */ var dagre__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dagre__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseLayout */ "./packages/topology/src/layouts/BaseLayout.ts");




class DagreNode extends _BaseLayout__WEBPACK_IMPORTED_MODULE_3__["LayoutNode"] {
    getUpdatableNode() {
        return {
            id: this.id,
            width: this.width,
            height: this.height,
            x: this.x,
            y: this.y,
        };
    }
    updateToNode(updatedNode) {
        if (updatedNode) {
            this.x = updatedNode.x;
            this.y = updatedNode.y;
            this.update();
        }
    }
}
class DagreGroup extends _BaseLayout__WEBPACK_IMPORTED_MODULE_3__["LayoutGroup"] {
}
class DagreLink extends _BaseLayout__WEBPACK_IMPORTED_MODULE_3__["LayoutLink"] {
    updateBendpoints() {
        if (this.points && !this.isFalse && this.points.length > 2) {
            this.element.setBendpoints(this.points.slice(1, -1).map((point) => new _geom_Point__WEBPACK_IMPORTED_MODULE_2__["default"](point.x, point.y)));
        }
    }
}
class DagreLayout extends _BaseLayout__WEBPACK_IMPORTED_MODULE_3__["BaseLayout"] {
    constructor(graph, options) {
        super(graph, options);
        this.dagreOptions = Object.assign(Object.assign(Object.assign({}, this.options), { marginx: 0, marginy: 0, nodesep: this.options.nodeDistance, edgesep: this.options.linkDistance, ranker: 'tight-tree', rankdir: 'TB' }), options);
    }
    createLayoutNode(node, nodeDistance, index) {
        return new DagreNode(node, nodeDistance, index);
    }
    createLayoutLink(edge, source, target, isFalse) {
        return new DagreLink(edge, source, target, isFalse);
    }
    createLayoutGroup(node, padding, index) {
        return new DagreGroup(node, padding, index);
    }
    updateEdgeBendpoints(edges) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](edges, (edge) => {
            const link = edge;
            link.updateBendpoints();
        });
    }
    startLayout(graph, initialRun, addingNodes) {
        if (initialRun || addingNodes) {
            const dagreGraph = new dagre__WEBPACK_IMPORTED_MODULE_0__["graphlib"].Graph({ compound: true });
            dagreGraph.setGraph(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](this.dagreOptions, Object.keys(_BaseLayout__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_DEFAULTS"])));
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.groups, (group) => {
                dagreGraph.setNode(group.id, group);
                dagreGraph.setParent(group.id, group.element.getParent().getId());
            });
            const updatedNodes = [];
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.nodes, (node) => {
                const updateNode = node.getUpdatableNode();
                updatedNodes.push(updateNode);
                dagreGraph.setNode(node.id, updateNode);
                dagreGraph.setParent(node.id, node.element.getParent().getId());
            });
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.edges, (dagreEdge) => {
                dagreGraph.setEdge(dagreEdge.source.id, dagreEdge.target.id, dagreEdge);
            });
            dagre__WEBPACK_IMPORTED_MODULE_0__["layout"](dagreGraph);
            this.nodes.forEach((node) => {
                node.updateToNode(updatedNodes.find((n) => n.id === node.id));
            });
            this.updateEdgeBendpoints(this.edges);
        }
        if (this.options.layoutOnDrag) {
            this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
        }
    }
}



/***/ }),

/***/ "./packages/topology/src/layouts/ForceLayout.ts":
/*!******************************************************!*\
  !*** ./packages/topology/src/layouts/ForceLayout.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForceLayout; });
/* harmony import */ var _utils_element_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/element-utils */ "./packages/topology/src/utils/element-utils.ts");
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLayout */ "./packages/topology/src/layouts/BaseLayout.ts");


class ForceLayout extends _BaseLayout__WEBPACK_IMPORTED_MODULE_1__["BaseLayout"] {
    constructor(graph, options) {
        super(graph, Object.assign(Object.assign({}, options), { layoutOnDrag: true }));
        this.getLinkDistance = (e) => {
            let distance = this.options.linkDistance + e.source.radius + e.target.radius;
            if (!e.isFalse && e.source.element.getParent() !== e.target.element.getParent()) {
                // find the group padding
                distance += Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_0__["getGroupPadding"])(e.source.element.getParent());
                distance += Object(_utils_element_utils__WEBPACK_IMPORTED_MODULE_0__["getGroupPadding"])(e.target.element.getParent());
            }
            return distance;
        };
    }
    startLayout(graph) {
        const { width, height } = graph.getBounds();
        const cx = width / 2;
        const cy = height / 2;
        this.forceSimulation.forceCenter(cx, cy);
        this.forceSimulation.alpha(1);
        this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getLinkDistance);
        this.forceSimulation.restart();
    }
    updateLayout() {
        this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
        this.forceSimulation.alpha(0.2);
        this.forceSimulation.restart();
    }
}


/***/ }),

/***/ "./packages/topology/src/layouts/ForceSimulation.ts":
/*!**********************************************************!*\
  !*** ./packages/topology/src/layouts/ForceSimulation.ts ***!
  \**********************************************************/
/*! exports provided: ForceSimulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceSimulation", function() { return ForceSimulation; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");


class ForceSimulation {
    constructor(options) {
        this.destroyed = false;
        this.options = Object.assign({
            collideDistance: 0,
            simulationSpeed: 10,
            chargeStrength: 0,
        }, options);
        this.setupForceSimulation();
    }
    setupForceSimulation() {
        this.simulation = d3__WEBPACK_IMPORTED_MODULE_0__["forceSimulation"]();
        this.simulation.force('collide', d3__WEBPACK_IMPORTED_MODULE_0__["forceCollide"]()
            .radius((d) => d.collisionRadius + this.options.collideDistance));
        this.simulation.force('charge', d3__WEBPACK_IMPORTED_MODULE_0__["forceManyBody"]().strength(this.options.chargeStrength));
        this.simulation.alpha(0);
        this.forceLink = d3__WEBPACK_IMPORTED_MODULE_0__["forceLink"]()
            .id((e) => e.id);
        this.simulation.force('link', this.forceLink);
        this.simulation.on('tick', Object(mobx__WEBPACK_IMPORTED_MODULE_1__["action"])(() => {
            // speed up the simulation
            for (let i = 0; i < this.options.simulationSpeed; i++) {
                this.simulation.tick();
            }
            this.simulation.nodes().forEach((d) => !this.destroyed && d.update());
        }));
    }
    destroy() {
        this.destroyed = true;
        this.simulation.stop();
    }
    useForceSimulation(nodes, links, distance) {
        this.forceLink.distance(distance);
        // first remove the links so that the layout doesn't error
        this.forceLink.links([]);
        this.simulation.nodes([...nodes]);
        this.forceLink.links([...links]);
    }
    haltForceSimulation() {
        this.simulation.alpha(0);
        this.simulation.nodes([]);
        this.forceLink.links([]);
    }
    forceCenter(cx, cy) {
        this.simulation.force('center', d3__WEBPACK_IMPORTED_MODULE_0__["forceCenter"](cx, cy));
    }
    stopSimulation() {
        this.simulation.stop();
    }
    restart() {
        this.simulation.restart();
    }
    alpha(value) {
        this.simulation.alpha(value);
    }
    alphaTarget(value) {
        this.simulation.alphaTarget(value);
    }
}



/***/ }),

/***/ "./packages/topology/src/layouts/index.ts":
/*!************************************************!*\
  !*** ./packages/topology/src/layouts/index.ts ***!
  \************************************************/
/*! exports provided: ForceLayout, BaseLayout, LayoutNode, LayoutGroup, LayoutLink, LAYOUT_DEFAULTS, ColaLayout, ColaNode, ColaGroup, ColaLink, DagreLayout, DagreNode, DagreLink, DagreGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLayout */ "./packages/topology/src/layouts/BaseLayout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["BaseLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutNode", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["LayoutNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGroup", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["LayoutGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutLink", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["LayoutLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_DEFAULTS", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["LAYOUT_DEFAULTS"]; });

/* harmony import */ var _ColaLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColaLayout */ "./packages/topology/src/layouts/ColaLayout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaLayout", function() { return _ColaLayout__WEBPACK_IMPORTED_MODULE_1__["ColaLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaNode", function() { return _ColaLayout__WEBPACK_IMPORTED_MODULE_1__["ColaNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaGroup", function() { return _ColaLayout__WEBPACK_IMPORTED_MODULE_1__["ColaGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColaLink", function() { return _ColaLayout__WEBPACK_IMPORTED_MODULE_1__["ColaLink"]; });

/* harmony import */ var _DagreLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DagreLayout */ "./packages/topology/src/layouts/DagreLayout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreLayout", function() { return _DagreLayout__WEBPACK_IMPORTED_MODULE_2__["DagreLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreNode", function() { return _DagreLayout__WEBPACK_IMPORTED_MODULE_2__["DagreNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreLink", function() { return _DagreLayout__WEBPACK_IMPORTED_MODULE_2__["DagreLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagreGroup", function() { return _DagreLayout__WEBPACK_IMPORTED_MODULE_2__["DagreGroup"]; });

/* harmony import */ var _ForceLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForceLayout */ "./packages/topology/src/layouts/ForceLayout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceLayout", function() { return _ForceLayout__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./packages/topology/src/mobx-exports.ts":
/*!***********************************************!*\
  !*** ./packages/topology/src/mobx-exports.ts ***!
  \***********************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"]; });


// re-exports observer for ease of use externally



/***/ }),

/***/ "./packages/topology/src/types.ts":
/*!****************************************!*\
  !*** ./packages/topology/src/types.ts ***!
  \****************************************/
/*! exports provided: AnchorEnd, NodeShape, ModelKind, isGraph, isNode, isEdge, ADD_CHILD_EVENT, ELEMENT_VISIBILITY_CHANGE_EVENT, REMOVE_CHILD_EVENT, NODE_COLLAPSE_CHANGE_EVENT, GRAPH_LAYOUT_END_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorEnd", function() { return AnchorEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeShape", function() { return NodeShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelKind", function() { return ModelKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraph", function() { return isGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHILD_EVENT", function() { return ADD_CHILD_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_VISIBILITY_CHANGE_EVENT", function() { return ELEMENT_VISIBILITY_CHANGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CHILD_EVENT", function() { return REMOVE_CHILD_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_COLLAPSE_CHANGE_EVENT", function() { return NODE_COLLAPSE_CHANGE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPH_LAYOUT_END_EVENT", function() { return GRAPH_LAYOUT_END_EVENT; });
var AnchorEnd;
(function (AnchorEnd) {
    AnchorEnd[AnchorEnd["target"] = 0] = "target";
    AnchorEnd[AnchorEnd["source"] = 1] = "source";
    AnchorEnd[AnchorEnd["both"] = 2] = "both";
})(AnchorEnd || (AnchorEnd = {}));
var NodeShape;
(function (NodeShape) {
    NodeShape[NodeShape["circle"] = 0] = "circle";
    NodeShape[NodeShape["rect"] = 1] = "rect";
})(NodeShape || (NodeShape = {}));
var ModelKind;
(function (ModelKind) {
    ModelKind["graph"] = "graph";
    ModelKind["node"] = "node";
    ModelKind["edge"] = "edge";
})(ModelKind || (ModelKind = {}));
const isGraph = (element) => {
    return element && element.getKind() === ModelKind.graph;
};
const isNode = (element) => {
    return element && element.getKind() === ModelKind.node;
};
const isEdge = (element) => {
    return element && element.getKind() === ModelKind.edge;
};
const ADD_CHILD_EVENT = 'element-add-child';
const ELEMENT_VISIBILITY_CHANGE_EVENT = 'element-visibility-change';
const REMOVE_CHILD_EVENT = 'element-remove-child';
const NODE_COLLAPSE_CHANGE_EVENT = 'node-collapse-change';
const GRAPH_LAYOUT_END_EVENT = 'graph-layout-end';


/***/ }),

/***/ "./packages/topology/src/utils/ControllerContext.ts":
/*!**********************************************************!*\
  !*** ./packages/topology/src/utils/ControllerContext.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ControllerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["default"] = (ControllerContext);


/***/ }),

/***/ "./packages/topology/src/utils/ElementContext.ts":
/*!*******************************************************!*\
  !*** ./packages/topology/src/utils/ElementContext.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ElementContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
/* harmony default export */ __webpack_exports__["default"] = (ElementContext);


/***/ }),

/***/ "./packages/topology/src/utils/Stateful.ts":
/*!*************************************************!*\
  !*** ./packages/topology/src/utils/Stateful.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stateful; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Stateful {
    constructor() {
        this.state = {};
    }
    getState() {
        return this.state;
    }
    setState(state) {
        if (state) {
            Object.assign(this.state, state);
        }
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"].shallow
], Stateful.prototype, "state", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], Stateful.prototype, "setState", null);


/***/ }),

/***/ "./packages/topology/src/utils/anchor-utils.ts":
/*!*****************************************************!*\
  !*** ./packages/topology/src/utils/anchor-utils.ts ***!
  \*****************************************************/
/*! exports provided: getEllipseAnchorPoint, getRectAnchorPoint, getPathAnchorPoint, getPolygonAnchorPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEllipseAnchorPoint", function() { return getEllipseAnchorPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRectAnchorPoint", function() { return getRectAnchorPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathAnchorPoint", function() { return getPathAnchorPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPolygonAnchorPoint", function() { return getPolygonAnchorPoint; });
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geom/Point */ "./packages/topology/src/geom/Point.ts");

const getEllipseAnchorPoint = (center, width, height, reference) => {
    const { x, y } = reference;
    if (width === 0 || height === 0 || (center.x === x && center.y === y)) {
        return center;
    }
    const dispX = (center.x - x) / (width / 2);
    const dispY = (center.y - y) / (height / 2);
    const len = Math.sqrt(dispX * dispX + dispY * dispY);
    const newLength = len - 1;
    const lenProportion = newLength / len;
    return new _geom_Point__WEBPACK_IMPORTED_MODULE_0__["default"]((center.x - x) * lenProportion + x, (center.y - y) * lenProportion + y);
};
const getRectAnchorPoint = (center, width, height, reference) => {
    let dx = reference.x - center.x;
    let dy = reference.y - center.y;
    if ((dx === 0 && dy === 0) || (width === 0 && height === 0)) {
        return center;
    }
    const scale = 0.5 /
        Math.max(width === 0 ? 0 : Math.abs(dx) / width, height === 0 ? 0 : Math.abs(dy) / height);
    dx *= scale;
    dy *= scale;
    return center.clone().translate(dx, dy);
};
const svgPointToPoint = (p) => {
    return new _geom_Point__WEBPACK_IMPORTED_MODULE_0__["default"](p.x, p.y);
};
const distanceToPoint = (p, reference) => {
    const dx = p.x - reference.x;
    const dy = p.y - reference.y;
    return dx * dx + dy * dy;
};
const isBetween = (a, b1, b2) => {
    return Math.ceil(a) >= Math.min(b1, b2) && Math.floor(a) <= Math.max(b1, b2);
};
const getLinesIntersection = (line1, line2) => {
    const line1xDelta = line1[0].x - line1[1].x;
    const line1yDelta = line1[0].y - line1[1].y;
    const line2xDelta = line2[0].x - line2[1].x;
    const line2yDelta = line2[0].y - line2[1].y;
    const denominator = line1xDelta * line2yDelta - line1yDelta * line2xDelta;
    if (denominator === 0) {
        // parallel lines do not intersect
        return null;
    }
    const d1 = line1[0].x * line1[1].y - line1[0].y * line1[1].x;
    const d2 = line2[0].x * line2[1].y - line2[0].y * line2[1].x;
    const xValue = d1 * line2xDelta - line1xDelta * d2;
    const yValue = d1 * line2yDelta - d2 * line1yDelta;
    const intersection = new _geom_Point__WEBPACK_IMPORTED_MODULE_0__["default"](xValue / denominator, yValue / denominator);
    if (!isBetween(intersection.x, line1[0].x, line1[1].x) ||
        !isBetween(intersection.y, line1[0].y, line1[1].y) ||
        !isBetween(intersection.x, line2[0].x, line2[1].x) ||
        !isBetween(intersection.y, line2[0].y, line2[1].y)) {
        // intersection is not in range
        return null;
    }
    return intersection;
};
const getPathIntersectionPoint = (pathNode, line) => {
    const pathLength = pathNode.getTotalLength();
    const numSegments = Math.min(Math.round(pathLength / 5), 100);
    for (let i = 0; i < numSegments; i++) {
        const pos1 = pathNode.getPointAtLength((pathLength * i) / numSegments);
        const pos2 = pathNode.getPointAtLength((pathLength * (i + 1)) / numSegments);
        const intersectPoint = getLinesIntersection([svgPointToPoint(pos1), svgPointToPoint(pos2)], line);
        if (intersectPoint) {
            return intersectPoint;
        }
    }
    // No intersection found, return the center point
    const pathBox = pathNode.getBBox();
    return new _geom_Point__WEBPACK_IMPORTED_MODULE_0__["default"](pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2);
};
const getPathClosestPoint = (pathNode, reference) => {
    const pathLength = pathNode.getTotalLength();
    let precision = 8;
    let best = pathNode.getPointAtLength(0);
    let bestLength = 0;
    let bestDistance = Infinity;
    // linear scan for coarse approximation
    for (let scanLength = 0; scanLength <= pathLength; scanLength += precision) {
        const scan = pathNode.getPointAtLength(scanLength);
        const scanDistance = distanceToPoint(svgPointToPoint(scan), reference);
        if (scanDistance < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }
    // binary search for precise estimate
    precision /= 2;
    while (precision > 0.5) {
        const beforeLength = bestLength - precision;
        const before = pathNode.getPointAtLength(beforeLength);
        const beforeDistance = distanceToPoint(svgPointToPoint(before), reference);
        if (beforeLength >= 0 && beforeDistance < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        }
        else {
            const afterLength = bestLength + precision;
            const after = pathNode.getPointAtLength(afterLength);
            const afterDistance = distanceToPoint(svgPointToPoint(after), reference);
            if (afterLength <= pathLength && afterDistance < bestDistance) {
                best = after;
                bestLength = afterLength;
                bestDistance = afterDistance;
            }
            else {
                precision /= 2;
            }
        }
    }
    return svgPointToPoint(best);
};
const getPathAnchorPoint = (pathNode, reference, useClosestPathPoint = false) => {
    if (useClosestPathPoint) {
        return getPathClosestPoint(pathNode, reference);
    }
    const pathBox = pathNode.getBBox();
    const pathCenter = new _geom_Point__WEBPACK_IMPORTED_MODULE_0__["default"](pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2);
    return getPathIntersectionPoint(pathNode, [reference, pathCenter]);
};
const getPolygonAnchorPoint = (polygonNode, reference) => {
    const polygonBox = polygonNode.getBBox();
    const polygonCenter = new _geom_Point__WEBPACK_IMPORTED_MODULE_0__["default"](polygonBox.x + polygonBox.width / 2, polygonBox.y + polygonBox.height / 2);
    const { points } = polygonNode;
    let bestPoint = polygonCenter;
    let bestDistance = Infinity;
    for (let i = 0; i < points.length; i++) {
        const intersectPoint = getLinesIntersection([svgPointToPoint(points[i]), svgPointToPoint(points[i === points.length - 1 ? 0 : i + 1])], [polygonCenter, reference]);
        if (intersectPoint) {
            const intersectDistance = distanceToPoint(intersectPoint, reference);
            if (intersectDistance < bestDistance) {
                bestPoint = intersectPoint;
                bestDistance = intersectDistance;
            }
        }
    }
    return bestPoint;
};



/***/ }),

/***/ "./packages/topology/src/utils/createAggregateEdges.ts":
/*!*************************************************************!*\
  !*** ./packages/topology/src/utils/createAggregateEdges.ts ***!
  \*************************************************************/
/*! exports provided: createAggregateEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAggregateEdges", function() { return createAggregateEdges; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const getNodeParent = (nodeId, nodes) => {
    return nodes.find((n) => { var _a; return (_a = n.children) === null || _a === void 0 ? void 0 : _a.includes(nodeId); });
};
const getDisplayedNodeForNode = (nodeId, nodes) => {
    if (!nodeId || !nodes) {
        return '';
    }
    let displayedNode = nodes && nodes.find((n) => n.id === nodeId);
    let parent = displayedNode ? getNodeParent(displayedNode.id, nodes) : null;
    while (parent) {
        if (parent.collapsed) {
            displayedNode = parent;
        }
        parent = getNodeParent(parent.id, nodes);
    }
    return displayedNode ? displayedNode.id : '';
};
const createAggregateEdges = (aggregateEdgeType, edges, nodes) => {
    const aggregateEdges = [];
    return lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"](edges, (newEdges, edge) => {
        const source = getDisplayedNodeForNode(edge.source, nodes);
        const target = getDisplayedNodeForNode(edge.target, nodes);
        // Make sure visible is defined so that changes override what could already be in the element
        edge.visible = 'visible' in edge ? edge.visible : true;
        if (source !== edge.source || target !== edge.target) {
            if (source !== target) {
                const existing = aggregateEdges.find((e) => (e.source === source || e.source === target) &&
                    (e.target === target || e.target === source));
                if (existing) {
                    // At least one other edge, add this edge and add the aggregate edge to the edges
                    // Add this edge to the aggregate and set it not visible
                    existing.children && existing.children.push(edge.id);
                    edge.visible = false;
                    // Hide edges that are depicted by this aggregate edge
                    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](existing.children, (existingChild) => {
                        const updateEdge = newEdges.find((newEdge) => newEdge.id === existingChild);
                        if (updateEdge) {
                            updateEdge.visible = false;
                        }
                    });
                    // Update the aggregate edges bidirectional flag
                    existing.data.bidirectional =
                        existing.data.bidirectional || existing.source !== edge.source;
                    // Check if this edge has already been added
                    if (!newEdges.find((e) => (e.source === source || e.source === target) &&
                        (e.target === target || e.target === source))) {
                        newEdges.push(existing);
                    }
                }
                else {
                    const newEdge = {
                        data: { bidirectional: false },
                        children: [edge.id],
                        source,
                        target,
                        id: `aggregate_${source}_${target}`,
                        type: aggregateEdgeType,
                    };
                    aggregateEdges.push(newEdge);
                }
            }
            else {
                // Hide edges that connect to a non-visible node to its ancestor
                edge.visible = false;
            }
        }
        newEdges.push(edge);
        return newEdges;
    }, []);
};



/***/ }),

/***/ "./packages/topology/src/utils/element-utils.ts":
/*!******************************************************!*\
  !*** ./packages/topology/src/utils/element-utils.ts ***!
  \******************************************************/
/*! exports provided: groupNodeElements, leafNodeElements, getTopCollapsedParent, getClosestVisibleParent, getElementPadding, getGroupPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupNodeElements", function() { return groupNodeElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leafNodeElements", function() { return leafNodeElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopCollapsedParent", function() { return getTopCollapsedParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestVisibleParent", function() { return getClosestVisibleParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementPadding", function() { return getElementPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupPadding", function() { return getGroupPadding; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./packages/topology/src/types.ts");


const groupNodeElements = (nodes) => {
    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["size"](nodes)) {
        return [];
    }
    const groupNodes = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](nodes, (nextNode) => {
        if (Object(_types__WEBPACK_IMPORTED_MODULE_1__["isNode"])(nextNode) && nextNode.isGroup() && !nextNode.isCollapsed()) {
            groupNodes.push(nextNode);
            groupNodes.push(...groupNodeElements(nextNode.getChildren()));
        }
    });
    return groupNodes;
};
const leafNodeElements = (nodeElements) => {
    const nodes = [];
    if (!nodeElements) {
        return nodes;
    }
    if (Array.isArray(nodeElements)) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](nodeElements, (nodeElement) => {
            nodes.push(...leafNodeElements(nodeElement));
        });
        return nodes;
    }
    if (nodeElements.isGroup() && !nodeElements.isCollapsed()) {
        const leafNodes = [];
        const children = nodeElements.getChildren();
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["size"](children)) {
            lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](children.filter((e) => Object(_types__WEBPACK_IMPORTED_MODULE_1__["isNode"])(e)), (element) => {
                leafNodes.push(...leafNodeElements(element));
            });
        }
        return leafNodes;
    }
    return [nodeElements];
};
const getTopCollapsedParent = (node) => {
    let returnNode = node;
    try {
        let parent = !Object(_types__WEBPACK_IMPORTED_MODULE_1__["isGraph"])(node) && node.getParent();
        while (parent && !Object(_types__WEBPACK_IMPORTED_MODULE_1__["isGraph"])(parent)) {
            if (parent.isCollapsed()) {
                returnNode = parent;
            }
            parent = parent.getParent();
        }
        // eslint-disable-next-line no-empty
    }
    catch (e) { }
    return returnNode;
};
const getClosestVisibleParent = (node) => {
    if (!node) {
        return null;
    }
    let returnNode = null;
    try {
        let parent = node.getParent();
        while (parent) {
            if (!parent.isVisible()) {
                // parent isn't visible so no descendant could be visible
                returnNode = null;
            }
            else if (parent.isCollapsed() || !returnNode) {
                // parent is collapsed, no descendant is visible, but parent is
                returnNode = parent;
            }
            parent = parent.getParent();
        }
        // eslint-disable-next-line no-empty
    }
    catch (e) { }
    return returnNode;
};
const getElementPadding = (element) => {
    const stylePadding = element.getStyle().padding;
    if (!stylePadding) {
        return 0;
    }
    if (Array.isArray(stylePadding)) {
        // For a padding that is not consistent on all sides, use the max padding
        return stylePadding.reduce((val, current) => {
            return Math.max(val, current);
        }, 0);
    }
    return stylePadding;
};
const getGroupPadding = (element, padding = 0) => {
    if (Object(_types__WEBPACK_IMPORTED_MODULE_1__["isGraph"])(element)) {
        return padding;
    }
    let newPadding = padding;
    if (Object(_types__WEBPACK_IMPORTED_MODULE_1__["isNode"])(element) && element.isGroup() && !element.isCollapsed()) {
        newPadding += getElementPadding(element);
    }
    if (element.getParent()) {
        return getGroupPadding(element.getParent(), newPadding);
    }
    return newPadding;
};



/***/ }),

/***/ "./packages/topology/src/utils/geom-utils.ts":
/*!***************************************************!*\
  !*** ./packages/topology/src/utils/geom-utils.ts ***!
  \***************************************************/
/*! exports provided: maxPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPadding", function() { return maxPadding; });
const maxPadding = (padding) => {
    if (typeof padding === 'number') {
        return +padding;
    }
    if (Array.isArray(padding)) {
        return padding.reduce((max, p) => Math.max(max, p), 0);
    }
    return 0;
};


/***/ }),

/***/ "./packages/topology/src/utils/index.ts":
/*!**********************************************!*\
  !*** ./packages/topology/src/utils/index.ts ***!
  \**********************************************/
/*! exports provided: ControllerContext, ElementContext, useCallbackRef, useCombineRefs, useHover, getEllipseAnchorPoint, getRectAnchorPoint, getPathAnchorPoint, getPolygonAnchorPoint, groupNodeElements, leafNodeElements, getTopCollapsedParent, getClosestVisibleParent, getElementPadding, getGroupPadding, maxPadding, createSvgIdUrl, vecScale, vecSum, unitNormal, boundingBoxForLine, hullPath, useSize, createAggregateEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchor-utils */ "./packages/topology/src/utils/anchor-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEllipseAnchorPoint", function() { return _anchor_utils__WEBPACK_IMPORTED_MODULE_0__["getEllipseAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRectAnchorPoint", function() { return _anchor_utils__WEBPACK_IMPORTED_MODULE_0__["getRectAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPathAnchorPoint", function() { return _anchor_utils__WEBPACK_IMPORTED_MODULE_0__["getPathAnchorPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPolygonAnchorPoint", function() { return _anchor_utils__WEBPACK_IMPORTED_MODULE_0__["getPolygonAnchorPoint"]; });

/* harmony import */ var _ControllerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControllerContext */ "./packages/topology/src/utils/ControllerContext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerContext", function() { return _ControllerContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ElementContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementContext */ "./packages/topology/src/utils/ElementContext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementContext", function() { return _ElementContext__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _element_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-utils */ "./packages/topology/src/utils/element-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupNodeElements", function() { return _element_utils__WEBPACK_IMPORTED_MODULE_3__["groupNodeElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leafNodeElements", function() { return _element_utils__WEBPACK_IMPORTED_MODULE_3__["leafNodeElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTopCollapsedParent", function() { return _element_utils__WEBPACK_IMPORTED_MODULE_3__["getTopCollapsedParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClosestVisibleParent", function() { return _element_utils__WEBPACK_IMPORTED_MODULE_3__["getClosestVisibleParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementPadding", function() { return _element_utils__WEBPACK_IMPORTED_MODULE_3__["getElementPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGroupPadding", function() { return _element_utils__WEBPACK_IMPORTED_MODULE_3__["getGroupPadding"]; });

/* harmony import */ var _geom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geom-utils */ "./packages/topology/src/utils/geom-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxPadding", function() { return _geom_utils__WEBPACK_IMPORTED_MODULE_4__["maxPadding"]; });

/* harmony import */ var _svg_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg-utils */ "./packages/topology/src/utils/svg-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSvgIdUrl", function() { return _svg_utils__WEBPACK_IMPORTED_MODULE_5__["createSvgIdUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vecScale", function() { return _svg_utils__WEBPACK_IMPORTED_MODULE_5__["vecScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vecSum", function() { return _svg_utils__WEBPACK_IMPORTED_MODULE_5__["vecSum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unitNormal", function() { return _svg_utils__WEBPACK_IMPORTED_MODULE_5__["unitNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boundingBoxForLine", function() { return _svg_utils__WEBPACK_IMPORTED_MODULE_5__["boundingBoxForLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hullPath", function() { return _svg_utils__WEBPACK_IMPORTED_MODULE_5__["hullPath"]; });

/* harmony import */ var _useCallbackRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useCallbackRef */ "./packages/topology/src/utils/useCallbackRef.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useCallbackRef__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useCombineRefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useCombineRefs */ "./packages/topology/src/utils/useCombineRefs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCombineRefs", function() { return _useCombineRefs__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useHover */ "./packages/topology/src/utils/useHover.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useSize */ "./packages/topology/src/utils/useSize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return _useSize__WEBPACK_IMPORTED_MODULE_9__["useSize"]; });

/* harmony import */ var _createAggregateEdges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createAggregateEdges */ "./packages/topology/src/utils/createAggregateEdges.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAggregateEdges", function() { return _createAggregateEdges__WEBPACK_IMPORTED_MODULE_10__["createAggregateEdges"]; });














/***/ }),

/***/ "./packages/topology/src/utils/svg-utils.ts":
/*!**************************************************!*\
  !*** ./packages/topology/src/utils/svg-utils.ts ***!
  \**************************************************/
/*! exports provided: createSvgIdUrl, vecScale, vecSum, unitNormal, boundingBoxForLine, hullPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgIdUrl", function() { return createSvgIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecScale", function() { return vecScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecSum", function() { return vecSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitNormal", function() { return unitNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundingBoxForLine", function() { return boundingBoxForLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hullPath", function() { return hullPath; });
function createSvgIdUrl(id) {
    return `url(${`${window.location.pathname}${window.location.search}`}#${id})`;
}
// Returns the vector 'v' scaled by 'scale'.
function vecScale(scale, v) {
    return [scale * v[0], scale * v[1]];
}
// Returns the sum of two vectors, or a combination of a point and a vector.
function vecSum(pv1, pv2) {
    return [pv1[0] + pv2[0], pv1[1] + pv2[1]];
}
// Returns the unit normal to the line segment from p0 to p1.
function unitNormal(p0, p1) {
    const n = [p0[1] - p1[1], p1[0] - p0[0]];
    const nLength = Math.sqrt(n[0] * n[0] + n[1] * n[1]);
    return nLength > 0 ? [n[0] / nLength, n[1] / nLength] : [0, 0];
}
// Returns the path for a rounded hull around a single point (a circle).
function roundedHull1(polyPoints, hp) {
    const padding = hp(polyPoints[0]);
    const p1 = [polyPoints[0][0], polyPoints[0][1] - padding];
    const p2 = [polyPoints[0][0], polyPoints[0][1] + padding];
    return `M ${p1} A ${padding},${padding},0,0,0,${p2} A ${padding},${padding},0,0,0,${p1}`;
}
// Returns the path for a rounded hull around two points (a "capsule" shape).
function boundingBoxForLine(startPoint, endPoint, padding = 0) {
    const hp = typeof padding === 'number' ? () => padding : padding;
    const offsetVector1 = vecScale(hp(startPoint), unitNormal(startPoint, endPoint));
    const invOffsetVector1 = vecScale(-1, offsetVector1);
    const offsetVector2 = vecScale(hp(endPoint), unitNormal(startPoint, endPoint));
    const invOffsetVector2 = vecScale(-1, offsetVector2);
    const p0 = vecSum(startPoint, offsetVector1);
    const p1 = vecSum(endPoint, offsetVector2);
    const p2 = vecSum(endPoint, invOffsetVector2);
    const p3 = vecSum(startPoint, invOffsetVector1);
    return [p0, p1, p2, p3];
}
// Returns the path for a rounded hull around two points (a "capsule" shape).
function roundedHull2(polyPoints, hp) {
    const points = boundingBoxForLine(polyPoints[0], polyPoints[1], hp);
    return `M ${points[0]} L ${points[1]} A ${hp(polyPoints[1])},${hp(polyPoints[1])},0,0,0,${points[2]} ${' '}
   L ${points[3]} A ${hp(polyPoints[0])},${hp(polyPoints[0])},0,0,0,${points[0]}`;
}
// Returns the SVG path data string representing the polygon, expanded and rounded.
function hullPath(polyPoints, hullPadding = 0) {
    const hp = typeof hullPadding === 'number' ? () => hullPadding : hullPadding;
    // Handle special cases
    if (!polyPoints || polyPoints.length < 1) {
        return '';
    }
    if (polyPoints.length === 1) {
        return roundedHull1(polyPoints, hp);
    }
    if (polyPoints.length === 2) {
        return roundedHull2(polyPoints, hp);
    }
    const segments = new Array(polyPoints.length);
    // Calculate each offset (outwards) segment of the convex hull.
    for (let segmentIndex = 0; segmentIndex < segments.length; ++segmentIndex) {
        const p0 = segmentIndex === 0 ? polyPoints[polyPoints.length - 1] : polyPoints[segmentIndex - 1];
        const p1 = polyPoints[segmentIndex];
        // Compute the offset vector for the line segment, with length = hullPadding.
        // const offset = vecScale(hullPadding, unitNormal(p0, p1));
        segments[segmentIndex] = [
            vecSum(p0, vecScale(hp(p0), unitNormal(p0, p1))),
            vecSum(p1, vecScale(hp(p1), unitNormal(p0, p1))),
        ];
    }
    return segments
        .map((segment, index) => {
        const p0 = index === 0 ? polyPoints[polyPoints.length - 1] : polyPoints[index - 1];
        return `${index === 0 ? `M ${segments[segments.length - 1][1]} ` : ''}A ${hp(p0)},${hp(p0)},0,0,0,${segment[0]} L ${segment[1]}`;
    })
        .join(' ');
}


/***/ }),

/***/ "./packages/topology/src/utils/useCallbackRef.ts":
/*!*******************************************************!*\
  !*** ./packages/topology/src/utils/useCallbackRef.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCallbackRef(rawCallback) {
    const cleanupRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(((node) => {
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }
        if (node) {
            cleanupRef.current = rawCallback(node);
        }
    }), [rawCallback]);
    return callback;
}


/***/ }),

/***/ "./packages/topology/src/utils/useCombineRefs.ts":
/*!*******************************************************!*\
  !*** ./packages/topology/src/utils/useCombineRefs.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _console_shared_src_utils_useCombineRefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @console/shared/src/utils/useCombineRefs */ "./packages/console-shared/src/utils/useCombineRefs.ts");
// FIXME fully qualified due to the effect of long build times on storybook

/* harmony default export */ __webpack_exports__["default"] = (_console_shared_src_utils_useCombineRefs__WEBPACK_IMPORTED_MODULE_0__["useCombineRefs"]);


/***/ }),

/***/ "./packages/topology/src/utils/useHover.ts":
/*!*************************************************!*\
  !*** ./packages/topology/src/utils/useHover.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCallbackRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCallbackRef */ "./packages/topology/src/utils/useCallbackRef.ts");


const useHover = (delayIn = 200, delayOut = 200) => {
    const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
    const unmountRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
    // need to ensure we do not start the unset timer on unmount
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => () => {
        unmountRef.current = true;
    }, []);
    // The unset handle needs to be referred by listeners in different closures.
    const unsetHandle = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const callbackRef = Object(_useCallbackRef__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => {
        if (node) {
            // store locally instead of a ref because it only needs to be referred by inner closures
            let delayHandle;
            const delayedStateChange = (newState, delay) => {
                clearTimeout(unsetHandle.current);
                clearTimeout(delayHandle);
                if (delay != null) {
                    delayHandle = window.setTimeout(() => {
                        clearTimeout(unsetHandle.current);
                        setHover(newState);
                    }, delay);
                }
                else {
                    setHover(newState);
                }
            };
            const onMouseEnter = () => {
                delayedStateChange(true, delayIn);
            };
            const onMouseLeave = () => {
                delayedStateChange(false, delayOut);
            };
            node.addEventListener('mouseenter', onMouseEnter);
            node.addEventListener('mouseleave', onMouseLeave);
            return () => {
                node.removeEventListener('mouseenter', onMouseEnter);
                node.removeEventListener('mouseleave', onMouseLeave);
                clearTimeout(delayHandle);
                if (!unmountRef.current) {
                    // Queue the unset in case reattaching to a new node in the same location.
                    // This can happen with layers. Rendering a node to a new layer will unmount the old node
                    // and remount a new node at the same location. This will prevent flickering and getting
                    // stuck in a hover state.
                    unsetHandle.current = window.setTimeout(() => setHover(false), Math.max(delayIn, delayOut));
                }
            };
        }
        return undefined;
    }, [delayIn, delayOut]));
    return [hover, callbackRef];
};
/* harmony default export */ __webpack_exports__["default"] = (useHover);


/***/ }),

/***/ "./packages/topology/src/utils/useSize.ts":
/*!************************************************!*\
  !*** ./packages/topology/src/utils/useSize.ts ***!
  \************************************************/
/*! exports provided: useSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return useSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EMPTY = [];
const useSize = (dependencies = EMPTY) => {
    const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const sizeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    sizeRef.current = size;
    const callbackRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((node) => {
        if (node != null) {
            const bb = node.getBBox();
            if (!sizeRef.current ||
                sizeRef.current.width !== bb.width ||
                sizeRef.current.height !== bb.height) {
                setSize({ width: bb.width, height: bb.height });
            }
        }
        // dynamic dependencies
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
    return [size, callbackRef];
};


/***/ })

}]);
//# sourceMappingURL=delete-revision~dev-console-topology~git-import-form~pipeline~pipeline-builder-edit-page~pipeline-bu~4a2e68d5-27f150ec7666587683b8.js.map