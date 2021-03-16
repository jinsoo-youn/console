(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@hookform/devtools/dist/index.cjs.development.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@hookform/devtools/dist/index.cjs.development.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var littleStateMachine = __webpack_require__(/*! little-state-machine */ "./node_modules/little-state-machine/dist/little-state-machine.es.js");
var reactSimpleAnimate = __webpack_require__(/*! react-simple-animate */ "./node_modules/react-simple-animate/dist/index.js");
var styled = _interopDefault(__webpack_require__(/*! @emotion/styled */ "./node_modules/@hookform/devtools/node_modules/@emotion/styled/dist/styled.browser.esm.js"));
var get = _interopDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));
var reactHookForm = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
var isUndefined = _interopDefault(__webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js"));
var isObject = _interopDefault(__webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js"));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var colors = {
    primary: '#0e101c',
    secondary: '#bf1650',
    lightBlue: '#516391',
    blue: '#1e2a4a',
    lightPink: '#ec5990',
    errorPink: '#fbecf2',
    buttonBlue: '#191d3a',
    link: '#ff7aa8',
    green: '#1bda2b',
};

var paraGraphDefaultStyle = {
    fontSize: 14,
    lineHeight: '22px',
};
var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  margin: 0;\n  border: 0;\n  color: white;\n  padding: 5px !important;\n  border-radius: 0 !important;\n  background: ", ";\n  transition: 0.2s all;\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  appearance: none;\n  margin: 0;\n  border: 0;\n  color: white;\n  padding: 5px !important;\n  border-radius: 0 !important;\n  background: ",
    ";\n  transition: 0.2s all;\n\n  &:hover {\n    background: ", ";\n  }\n"])), function (props) {
    return props.hideBackground ? "" : colors.blue + " !important";
}, colors.lightBlue);
Button.defaultProps = { type: 'button' };
var CircleButton = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0 4px 0 auto;\n  background: none !important;\n  display: flex;\n  width: 25px;\n  height: 25px;\n  justify-content: center;\n  line-height: 14px !important;\n  border-radius: 50% !important;\n  padding: 0 !important;\n  transition: 0.2s all;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:active {\n    background: black;\n  }\n"], ["\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0 4px 0 auto;\n  background: none !important;\n  display: flex;\n  width: 25px;\n  height: 25px;\n  justify-content: center;\n  line-height: 14px !important;\n  border-radius: 50% !important;\n  padding: 0 !important;\n  transition: 0.2s all;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:active {\n    background: black;\n  }\n"])), colors.lightBlue);
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &::placeholder {\n    color: #b3b3b3;\n  }\n\n  &:focus::placeholder {\n    color: white;\n  }\n"], ["\n  &::placeholder {\n    color: #b3b3b3;\n  }\n\n  &:focus::placeholder {\n    color: white;\n  }\n"])));
var Table = styled.table(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  transition: 0.3s all;\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  transition: 0.3s all;\n\n  &:hover {\n    background: ", ";\n  }\n"])), colors.primary);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var Header = function (_a) {
    var setVisible = _a.setVisible, control = _a.control;
    return (React.createElement("header", { style: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 10,
        } },
        React.createElement("p", { style: __assign({ margin: 0, padding: 0, fontWeight: 600 }, paraGraphDefaultStyle) },
            React.createElement("span", { style: {
                    transition: '0.5s all',
                    color: control.readFormStateRef.current.isValid &&
                        control.formStateRef.current.isValid
                        ? colors.green
                        : colors.lightPink,
                } }, "\u25A0"),
            ' ',
            "RHF DevTools"),
        React.createElement(CircleButton, { title: "Close dev panel", onClick: function () { return setVisible(false); } }, "\u2715")));
};

var PanelTable = function (_a) {
    var refObject = _a.refObject, hasError = _a.hasError, isDirty = _a.isDirty, fieldsValues = _a.fieldsValues, readFormStateRef = _a.readFormStateRef, isNative = _a.isNative, errorMessage = _a.errorMessage, errorType = _a.errorType, type = _a.type, isTouched = _a.isTouched, name = _a.name, collapseAll = _a.collapseAll, index = _a.index;
    var _b = React.useState(false), collapse = _b[0], setCollapse = _b[1];
    React.useEffect(function () {
        setCollapse(!collapseAll);
    }, [collapseAll]);
    var value = fieldsValues ? get(fieldsValues, name) : '';
    if (!isUndefined(value)) {
        if (isObject(value)) {
            try {
                value = (React.createElement("pre", { style: { margin: 0 } },
                    React.createElement("code", { style: { fontSize: 12 } }, JSON.stringify(value, null, 2))));
            }
            catch (_c) {
                value = React.createElement("span", null, "[Nested Object]");
            }
        }
        else if (typeof value !== 'string') {
            value = String(value);
        }
    }
    return (React.createElement(reactSimpleAnimate.Animate, { play: true, start: { opacity: 0, transform: 'translateY(10px)' }, end: { opacity: 1 }, easeType: "ease-in", delay: index * 0.1 },
        React.createElement(Table, { style: {
                padding: '10px 10px 10px',
                width: '100%',
                transition: '.3s all',
                borderLeft: "2px solid " + (hasError ? colors.secondary : colors.buttonBlue),
            } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", { valign: "top", style: { width: 100, lineHeight: '22px' } },
                        React.createElement(Button, { onClick: function () { return setCollapse(!collapse); }, title: "Toggle field table", style: {
                                border: "1px solid " + colors.lightBlue,
                                borderRadius: 2,
                                padding: '3px 5px',
                                display: 'inline-block',
                                fontSize: 10,
                                lineHeight: '12px',
                                width: 20,
                                textAlign: 'center',
                                marginRight: 10,
                            } }, collapse ? '+' : '-'),
                        React.createElement(Button, { onClick: function () {
                                if (refObject.scrollIntoView) {
                                    refObject.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, title: "Scroll into view", style: __assign({ border: "1px solid " + colors.lightBlue, borderRadius: 2, padding: '3px 5px', display: 'inline-block', fontSize: 10, lineHeight: '12px', textAlign: 'center', marginRight: 10 }, (isNative
                                ? {}
                                : { cursor: 'not-allowed', background: colors.lightBlue })) }, isNative ? 'Native' : 'Custom')),
                    React.createElement("td", { style: {
                            display: 'block',
                            maxWidth: 100,
                        } },
                        React.createElement("p", { style: __assign({ margin: 0, padding: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, paraGraphDefaultStyle), title: name }, name)))),
            !collapse && (React.createElement("tbody", null,
                type && (React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ paddingRight: 5, fontWeight: 500, verticalAlign: 'top' }, paraGraphDefaultStyle) }, "Type:"),
                    React.createElement("td", { style: __assign({ display: 'block', maxWidth: 100 }, paraGraphDefaultStyle) }, type))),
                errorType && (React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ paddingRight: 5, fontWeight: 500, verticalAlign: 'top' }, paraGraphDefaultStyle) }, "ERROR Type:"),
                    React.createElement("td", { style: __assign({ display: 'block', maxWidth: 100 }, paraGraphDefaultStyle) }, errorType))),
                errorMessage && (React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ paddingRight: 5, fontWeight: 500, verticalAlign: 'top' }, paraGraphDefaultStyle) }, "MESSAGE:"),
                    React.createElement("td", { style: __assign({ display: 'block', maxWidth: 100 }, paraGraphDefaultStyle) }, errorMessage.trim()))),
                !isUndefined(value) && (React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ paddingRight: 5, fontWeight: 500, verticalAlign: 'top' }, paraGraphDefaultStyle) }, "Value:"),
                    React.createElement("td", { "data-testid": name + "-field-value", style: __assign({ display: 'block', maxWidth: 100 }, paraGraphDefaultStyle) }, value))),
                readFormStateRef.current.touched && (React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ paddingRight: 5, fontWeight: 500, verticalAlign: 'top' }, paraGraphDefaultStyle) }, "Touched:"),
                    React.createElement("td", null,
                        React.createElement("code", { style: __assign(__assign({ color: isTouched ? colors.green : colors.lightPink }, paraGraphDefaultStyle), { fontSize: 12 }) }, isTouched ? 'true' : 'false')))),
                readFormStateRef.current.dirtyFields && (React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ paddingRight: 5, fontWeight: 500, verticalAlign: 'top' }, paraGraphDefaultStyle) }, "Dirty:"),
                    React.createElement("td", null,
                        React.createElement("code", { style: __assign(__assign({ color: isDirty ? colors.green : colors.lightPink }, paraGraphDefaultStyle), { fontSize: 12 }) }, isDirty ? 'true' : 'false')))))))));
};

var FormStateTable = function (_a) {
    var formState = _a.formState, showFormState = _a.showFormState, setShowFormState = _a.setShowFormState, readFormStateRef = _a.readFormStateRef;
    return (React.createElement("div", { style: {
            alignSelf: 'end',
        } },
        showFormState && (React.createElement("table", { style: {
                padding: 10,
                display: 'block',
                background: 'black',
                borderTop: "1px solid " + colors.lightPink,
            } },
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({ width: 90 }, paraGraphDefaultStyle) }, "Valid:"),
                    React.createElement("td", { style: __assign({ color: readFormStateRef.current.isValid && formState.isValid
                                ? colors.green
                                : colors.lightPink }, paraGraphDefaultStyle) }, readFormStateRef.current.isValid && formState.isValid
                        ? 'true'
                        : 'false')),
                React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({}, paraGraphDefaultStyle) }, "Submitted:"),
                    React.createElement("td", { style: __assign({ color: formState.isSubmitted ? colors.green : colors.lightPink }, paraGraphDefaultStyle) }, formState.isSubmitted ? 'true' : 'false')),
                React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({}, paraGraphDefaultStyle) }, "Count:"),
                    React.createElement("td", { style: __assign({ color: formState.submitCount ? colors.green : colors.lightPink }, paraGraphDefaultStyle) }, formState.submitCount)),
                React.createElement("tr", null,
                    React.createElement("td", { align: "right", style: __assign({}, paraGraphDefaultStyle) }, "Submitting:"),
                    React.createElement("td", { style: __assign({ color: formState.isSubmitting ? colors.green : colors.lightPink }, paraGraphDefaultStyle) }, formState.isSubmitting ? 'true' : 'false'))))),
        React.createElement(Button, { style: {
                margin: 0,
                width: '100%',
                padding: '8px 10px',
                textTransform: 'none',
                fontSize: 12,
                lineHeight: '14px',
            }, title: "Toggle form state panel", onClick: function () {
                setShowFormState(!showFormState);
            } },
            React.createElement("span", { style: {
                    transition: '0.5s all',
                    color: readFormStateRef.current.isValid && formState.isValid
                        ? colors.green
                        : colors.lightPink,
                } }, "\u25A0"),
            ' ',
            "Form State: ",
            showFormState ? 'OFF' : 'ON')));
};

function setVisible(state, payload) {
    return __assign(__assign({}, state), { visible: payload });
}
function setCollapse(state, payload) {
    return __assign(__assign({}, state), { isCollapse: payload });
}

var Panel = (function (_a) {
    var _b = _a.control, fieldsRef = _b.fieldsRef, getValues = _b.getValues, readFormStateRef = _b.readFormStateRef, formStateRef = _b.formStateRef;
    var _c = littleStateMachine.useStateMachine(setCollapse), state = _c.state, action = _c.action;
    var _d = React.useState({}), setData = _d[1];
    var _e = React.useState(false), showFormState = _e[0], setShowFormState = _e[1];
    var fieldsValues = getValues();
    var _f = reactHookForm.useForm(), register = _f.register, watch = _f.watch;
    var searchTerm = watch('search', '');
    React.useEffect(function () {
        setData({});
    }, []);
    return (React.createElement("div", { style: {
            display: 'grid',
            gridTemplateRows: '56px auto',
            height:  'calc(100vh - 40px)',
        } },
        React.createElement("div", { style: {
                display: 'grid',
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: '28px 28px',
            } },
            React.createElement(Button, { style: {
                    borderRight: "1px solid " + colors.primary,
                    textTransform: 'none',
                    fontSize: 11,
                    lineHeight: 1,
                }, title: "Update values and state the form", onClick: function () { return setData({}); } }, "\u267A UPDATE"),
            React.createElement(Button, { style: {
                    borderRight: "1px solid " + colors.primary,
                    textTransform: 'none',
                    fontSize: 11,
                    lineHeight: 1,
                }, title: "Toggle entire fields", onClick: function () {
                    action(!state.isCollapse);
                } }, state.isCollapse ? '[-] COLLAPSE' : '[+] EXPAND'),
            React.createElement(Input, { style: {
                    display: 'inline-block',
                    borderRadius: 0,
                    width: '100%',
                    margin: 0,
                    padding: '5px 10px',
                    WebkitAppearance: 'none',
                    appearance: 'none',
                    fontSize: 14,
                    border: 0,
                    color: 'white',
                    gridColumnStart: 1,
                    gridColumnEnd: 4,
                    background: 'black',
                }, name: "search", ref: register, placeholder: "Filter name...", type: "search" })),
        React.createElement("div", { style: {
                overflow: 'auto',
            } }, Object.entries(fieldsRef.current)
            .filter(function (_a) {
            var name = _a[0];
            return ((name &&
                name.toLowerCase &&
                name.toLowerCase().includes(searchTerm)) ||
                (!name && !searchTerm) ||
                searchTerm === '') &&
                name;
        })
            .map(function (_a, index) {
            var name = _a[0], value = _a[1];
            var error = get(formStateRef.current.errors, name);
            var errorMessage = get(error, 'message', undefined);
            var errorType = get(error, 'type', undefined);
            var type = get(value, 'ref.type', undefined);
            var isTouched = !!get(formStateRef.current.touched, name);
            var isNative = value.ref.type;
            var isDirty = !!get(formStateRef.current.dirtyFields, name);
            var hasError = !!error;
            var ref = get(value, 'ref');
            return (React.createElement("section", { key: "" + name + index, style: {
                    borderBottom: "1px dashed " + colors.secondary,
                    margin: 0,
                } },
                React.createElement(PanelTable, { refObject: ref, index: index, collapseAll: state.isCollapse, name: name, isTouched: isTouched, type: type, hasError: hasError, isNative: isNative, errorMessage: errorMessage, errorType: errorType, readFormStateRef: readFormStateRef, isDirty: isDirty, fieldsValues: fieldsValues })));
        })),
        React.createElement(FormStateTable, { readFormStateRef: readFormStateRef, formState: formStateRef.current, showFormState: showFormState, setShowFormState: setShowFormState })));
});

var Logo = function (_a) {
    var style = _a.style, setVisible = _a.setVisible;
    return (React.createElement("svg", { fill: "white", viewBox: "0 0 100 100", style: __assign({ height: 14, padding: 3, borderRadius: 2, background: colors.lightPink }, style), onClick: function () {
            setVisible(true);
        }, "aria-label": "React Hook Form Logo" },
        React.createElement("path", { d: "M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z" }),
        React.createElement("path", { style: { transform: 'translateX(-25px)' }, d: "M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" }),
        React.createElement("path", { d: "M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" }),
        React.createElement("path", { style: { transform: 'translateX(-25px)' }, d: "M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" }),
        React.createElement("path", { d: "M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" })));
};

var PanelShadow = function (_a) {
    var visible = _a.visible;
    return (React.createElement(reactSimpleAnimate.Animate, { play: visible, duration: 0.1, start: {
            transform: 'translateX(8px)',
        }, end: {
            transform: 'translateX(0)',
        }, delay: 0.3 },
        React.createElement("div", { style: {
                position: 'relative',
            } },
            React.createElement("div", { style: {
                    position: 'fixed',
                    height: '100vh',
                    width: 250,
                    zIndex: 99998,
                    background: 'black',
                    top: 7,
                    right: 7,
                    boxShadow: 'rgba(15, 15, 29, 0.4) -3px 3px 6px 0px',
                } }),
            React.createElement("span", { style: {
                    width: 0,
                    height: 0,
                    position: 'fixed',
                    zIndex: 99998,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderRight: "10px solid black",
                    right: 247,
                    top: -3,
                } }),
            React.createElement("span", { style: {
                    width: 0,
                    height: 0,
                    position: 'fixed',
                    zIndex: 99998,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderRight: "10px solid " + colors.buttonBlue,
                    right: 247,
                    top: 37,
                } }),
            React.createElement("span", { style: {
                    width: 10,
                    height: 21,
                    position: 'fixed',
                    zIndex: 99998,
                    right: 247,
                    top: 47,
                    background: colors.buttonBlue,
                } }),
            React.createElement("span", { style: {
                    width: 0,
                    height: 0,
                    position: 'fixed',
                    zIndex: 99998,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: "10px solid " + colors.buttonBlue,
                    right: 247,
                    top: 55,
                } }))));
};

var DevToolUI = function (_a) {
    var control = _a.control;
    var _b = littleStateMachine.useStateMachine(setVisible), state = _b.state, action = _b.action;
    return (React.createElement(React.Fragment, null,
        React.createElement(reactSimpleAnimate.Animate, { play: !state.visible, duration: 0.2, start: {
                position: 'fixed',
                top: 0,
                right: 0,
                transform: 'translateX(0)',
                zIndex: 99999,
            }, end: {
                top: 0,
                right: 0,
                position: 'fixed',
                transform: 'translateX(280px)',
                zIndex: 99999,
            } },
            React.createElement("div", { style: {
                    position: 'fixed',
                    height: '100vh',
                    width: 250,
                    zIndex: 99999,
                    background: colors.buttonBlue,
                    top: 0,
                    right: 0,
                    display: 'grid',
                    textAlign: 'left',
                    color: 'white',
                    fontSize: 14,
                    gridTemplateRows: '40px auto',
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                } },
                React.createElement(Header, { setVisible: action, control: control }),
                React.createElement(Panel, { control: control })),
            React.createElement(PanelShadow, { visible: state.visible })),
        !state.visible && (React.createElement(Button, { title: "Show dev panel", hideBackground: true, style: {
                position: 'fixed',
                zIndex: 99999,
                top: 3,
                right: 3,
                padding: 3,
                margin: 0,
                background: 'none',
            } },
            React.createElement(Logo, { setVisible: action })))));
};

if (typeof window !== 'undefined') {
    littleStateMachine.setStorageType(window.localStorage);
}
littleStateMachine.createStore({
    visible: true,
    isCollapse: false,
    filterName: '',
}, {
    name: '__REACT_HOOK_FORM_DEVTOOLS__',
});
var DevTool = function (_a) {
    var control = _a.control;
    return (React.createElement(littleStateMachine.StateMachineProvider, null,
        React.createElement(DevToolUI, { control: control })));
};

exports.DevTool = DevTool;
//# sourceMappingURL=index.cjs.development.js.map


/***/ }),

/***/ "./node_modules/@hookform/devtools/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@hookform/devtools/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./index.cjs.development.js */ "./node_modules/@hookform/devtools/dist/index.cjs.development.js")
}


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@hookform/devtools/node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@hookform/devtools/node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@hookform/devtools/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*********************************************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@hookform/devtools/node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@hookform/devtools/node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@hookform/devtools/node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@hookform/devtools/node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@hookform/devtools/node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@hookform/devtools/node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)jsx.*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/css/dist/css.browser.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@hookform/devtools/node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \*******************************************************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@hookform/devtools/node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@hookform/devtools/node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@hookform/devtools/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***********************************************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@hookform/devtools/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@hookform/devtools/node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@hookform/devtools/node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@hookform/devtools/node_modules/@emotion/serialize/dist/serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( true && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/styled/dist/styled.browser.esm.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/styled/dist/styled.browser.esm.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@hookform/devtools/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"].bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ __webpack_exports__["default"] = (newStyled);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***********************************************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@hookform/devtools/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@hookform/devtools/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/little-state-machine/dist/little-state-machine.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/little-state-machine/dist/little-state-machine.es.js ***!
  \***************************************************************************/
/*! exports provided: StateMachineContext, StateMachineProvider, createStore, setStorageType, useStateMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachineContext", function() { return StateMachineContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMachineProvider", function() { return StateMachineProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageType", function() { return setStorageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateMachine", function() { return useStateMachine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const STORE_DEFAULT_NAME = '__STATE_MACHINE__';
const STORE_ACTION_NAME = '__STATE_MACHINE_ACTION_NAME__';
const STATE_MACHINE_DEBUG_NAME = '___STATE_MACHINE_DEBUG__';

var getBrowserStoreData = (storageType, storeName) => {
    const sessionStorageData = storageType.getItem(storeName);
    try {
        return sessionStorageData ? JSON.parse(sessionStorageData) : undefined;
    }
    catch (_a) {
        return undefined;
    }
};

function storeFactory(storageType, name) {
    const storeName = name || STORE_DEFAULT_NAME;
    let store = getBrowserStoreData(storageType, storeName);
    const getName = () => storeName;
    const set = (value) => {
        store = value;
    };
    const get = () => store;
    return {
        set,
        get,
        getName,
    };
}

var isUndefined = (val) => val === undefined;

function setUpDevTools(isDevMode, storageType, getName, getStore) {
    if (typeof window === 'undefined' || !isDevMode)
        return;
    // @ts-ignore
    window.STATE_MACHINE_DEBUG = (value) => storageType.setItem(STATE_MACHINE_DEBUG_NAME, value);
    // @ts-ignore
    window.STATE_MACHINE_RESET = () => storageType.clear();
    // @ts-ignore
    window.STATE_MACHINE_GET_STORE = () => storageType.getItem(getName());
    // @ts-ignore
    window.STATE_MACHINE_SAVE_TO = name => window.localStorage.setItem(name, JSON.stringify(getStore()));
    // @ts-ignore
    window.STATE_MACHINE_LOAD = ({ storeName, data, }) => storageType.setItem(getName() || STATE_MACHINE_DEBUG_NAME, data || window.localStorage.getItem(storeName) || '');
}

var StateMachineContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
    store: {},
    updateStore: (payload) => payload,
});

var transformStore = ({ transform, externalStoreName, storageType, store, }) => transform({
    externalStoreData: getBrowserStoreData(storageType, externalStoreName),
    currentStoreData: store,
});

function getSyncStoreData(defaultStoreData, options, storageType) {
    let store = defaultStoreData;
    const syncStoreOption = options.syncStores;
    if (!syncStoreOption)
        return store;
    try {
        if (Array.isArray(syncStoreOption)) {
            syncStoreOption.forEach(option => {
                store = transformStore({
                    transform: option.transform,
                    externalStoreName: option.externalStoreName,
                    storageType,
                    store,
                });
            });
        }
        else if (syncStoreOption.externalStoreName &&
            typeof syncStoreOption.transform === 'function' &&
            typeof syncStoreOption.externalStoreName === 'string') {
            return transformStore({
                transform: syncStoreOption.transform,
                externalStoreName: syncStoreOption.externalStoreName,
                storageType,
                store,
            });
        }
        else {
            Object.entries(syncStoreOption).forEach(([key, values]) => {
                const browserStore = getBrowserStoreData(storageType, key);
                values.forEach((value) => {
                    store = Object.assign(Object.assign({}, store), {
                        [value]: Object.assign(Object.assign({}, store[value]), browserStore[value]),
                    });
                });
            });
        }
    }
    catch (_a) {
        return store;
    }
    return store;
}

const isClient = typeof window !== 'undefined';
const isDevMode = "development" !== 'production';
let storageType = isClient
    ? window.sessionStorage
    : {
        getItem: payload => payload,
        setItem: (payload) => payload,
        clear: () => { },
        length: 0,
        key: (payload) => payload.toString(),
        removeItem: () => { },
    };
let getStore;
let setStore;
let getName;
let middleWaresArray = [];
const middleWare = (data = '') => {
    if (data && isClient) {
        // @ts-ignore
        window[STORE_ACTION_NAME] = data;
    }
    return data;
};
function setStorageType(type) {
    storageType = type;
}
function createStore(defaultStoreData, options = {
    name: STORE_DEFAULT_NAME,
    middleWares: [],
    syncStores: undefined,
}) {
    const storeName = options ? options.name : STORE_DEFAULT_NAME;
    const methods = storeFactory(storageType, storeName);
    if (isDevMode && isClient) {
        // @ts-ignore
        window['STATE_MACHINE_NAME'] = storeName;
    }
    getName = methods.getName;
    getStore = methods.get;
    setStore = methods.set;
    middleWaresArray = options.middleWares;
    setUpDevTools(isDevMode, storageType, getName, getStore);
    setStore(getSyncStoreData(getStore() || defaultStoreData, options, storageType));
}
function StateMachineProvider(props) {
    const [globalState, updateStore] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getStore());
    const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
        store: globalState,
        updateStore,
    }), [globalState]);
    // @ts-ignore
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(StateMachineContext.Provider, Object.assign({ value: value }, props));
}
const actionTemplate = ({ options, callback, updateStore, }) => (payload) => {
    let result;
    const debugName = callback ? callback.name : '';
    if (isDevMode) {
        middleWare(debugName);
    }
    if (callback) {
        result = callback(getStore(), payload);
    }
    setStore(isUndefined(result) ? getStore() : result);
    storageType.setItem(getName(), JSON.stringify(getStore()));
    if (isUndefined(options) ||
        (options && options.shouldReRenderApp !== false)) {
        let pipeData = getStore();
        if (Array.isArray(middleWaresArray) && middleWaresArray.length) {
            pipeData = middleWaresArray.reduce((currentValue, currentFunction) => currentFunction(currentValue) || currentValue, pipeData);
        }
        updateStore(pipeData);
    }
};
function useStateMachine(updateStoreFunction, options) {
    const { store: globalState, updateStore } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StateMachineContext);
    if (updateStoreFunction && Object.keys(updateStoreFunction).length) {
        return {
            actions: Object.entries(updateStoreFunction).reduce((previous, [key, callback]) => (Object.assign(Object.assign({}, previous), { [key]: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(actionTemplate({
                    options,
                    callback,
                    updateStore,
                }), []) })), {}),
            action: p => p,
            state: globalState,
        };
    }
    return {
        actions: {},
        action: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(updateStoreFunction
            ? actionTemplate({
                options,
                callback: updateStoreFunction,
                updateStore,
            })
            : () => { }, []),
        state: globalState,
    };
}




/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/react-simple-animate/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-simple-animate/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var calculateTotalDuration = ({ duration = 0.3, delay = 0, overlay = 0, }) => duration + delay - overlay || 0;

var isUndefined = (val) => val === undefined;

function getSequenceId(sequenceIndex, sequenceId, defaultValue) {
    if (isUndefined(sequenceId) && isUndefined(sequenceIndex)) {
        return defaultValue || 0;
    }
    if (sequenceIndex && sequenceIndex >= 0) {
        return sequenceIndex;
    }
    if (sequenceId) {
        return sequenceId;
    }
    return 0;
}

const DEFAULT_DURATION = 0.3;
const DEFAULT_EASE_TYPE = 'linear';
const DEFAULT_DIRECTION = 'normal';
const DEFAULT_FILLMODE = 'none';
const RUNNING = 'running';
const ALL = 'all';

const AnimateContext = React.createContext({
    animationStates: {},
    register: (data) => { },
});
function AnimateGroup({ play, sequences = [], children, }) {
    const [animationStates, setAnimationStates] = React.useState({});
    const animationsRef = React.useRef({});
    const register = React.useCallback((data) => {
        const { sequenceIndex, sequenceId } = data;
        if (!isUndefined(sequenceId) || !isUndefined(sequenceIndex)) {
            animationsRef.current[getSequenceId(sequenceIndex, sequenceId)] = data;
        }
    }, []);
    React.useEffect(() => {
        const sequencesToAnimate = Array.isArray(sequences) && sequences.length
            ? sequences
            : Object.values(animationsRef.current);
        const localAnimationState = {};
        (play ? sequencesToAnimate : [...sequencesToAnimate].reverse()).reduce((previous, { sequenceId, sequenceIndex, duration = DEFAULT_DURATION, delay, overlay, }, currentIndex) => {
            const id = getSequenceId(sequenceIndex, sequenceId, currentIndex);
            const currentTotalDuration = calculateTotalDuration({
                duration,
                delay,
                overlay,
            });
            const totalDuration = currentTotalDuration + previous;
            localAnimationState[id] = {
                play,
                pause: !play,
                delay: currentIndex === 0
                    ? delay || 0
                    : delay
                        ? previous + delay
                        : previous,
                controlled: true,
            };
            return totalDuration;
        }, 0);
        setAnimationStates(localAnimationState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [play]);
    return (React.createElement(AnimateContext.Provider, { value: { animationStates, register } }, children));
}

var secToMs = (ms) => (ms || 0) * 1000;

function Animate(props) {
    const { play, children, render, start, end, complete = '', onComplete, delay = 0, duration = DEFAULT_DURATION, easeType = DEFAULT_EASE_TYPE, sequenceId, sequenceIndex, } = props;
    const onCompleteTimeRef = React.useRef();
    const [style, setStyle] = React.useState(start || {});
    const { register, animationStates = {} } = React.useContext(AnimateContext);
    const id = getSequenceId(sequenceIndex, sequenceId);
    React.useEffect(() => {
        if ((!isUndefined(sequenceIndex) && sequenceIndex >= 0) || sequenceId) {
            register(props);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        const animationState = animationStates[id] || {};
        setStyle(Object.assign(Object.assign({}, (play || animationState.play ? end : start)), { transition: `${ALL} ${duration}s ${easeType} ${parseFloat(animationState.delay || delay)}s` }));
        if (play && (complete || onComplete)) {
            onCompleteTimeRef.current = setTimeout(() => {
                complete && setStyle(complete);
                onComplete && onComplete();
            }, secToMs(parseFloat(animationState.delay || delay) + duration));
        }
        return () => onCompleteTimeRef.current && clearTimeout(onCompleteTimeRef.current);
    }, [
        id,
        animationStates,
        play,
        duration,
        easeType,
        delay,
        onComplete,
        start,
        end,
        complete,
    ]);
    return render ? render({ style }) : React.createElement("div", { style: style }, children);
}

var camelCaseToDash = (camelCase) => camelCase ? camelCase.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`) : '';

const generateKeyframes = keyframes => {
    const animationLength = keyframes.length;
    return keyframes.reduce((previous, keyframe, currentIndex) => {
        const keyframePercentage = animationLength === 2
            ? currentIndex * 100
            : parseFloat((100 / (animationLength - 1)).toFixed(2)) * currentIndex;
        if (typeof keyframe === 'string') {
            return `${previous} ${keyframePercentage}% {${keyframe}}`;
        }
        const keys = Object.keys(keyframe);
        if (keys.length && isNaN(+keys[0])) {
            const keyframeContent = keys.reduce((acc, key) => `${acc} ${camelCaseToDash(key)}: ${keyframe[key]};`, '');
            return `${previous} ${keyframePercentage}% {${keyframeContent}}`;
        }
        return `${previous} ${Object.keys(keyframe)[0]}% {${Object.values(keyframe)[0]}}`;
    }, '');
};
function createStyle({ keyframes, animationName, }) {
    return `@keyframes ${animationName} {${generateKeyframes(keyframes)}}`;
}

function createTag({ keyframes, animationName, }) {
    let styleTag = document.querySelector('style[data-id=rsi]');
    let index;
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.setAttribute('data-id', 'rsi');
        document.head.appendChild(styleTag);
    }
    try {
        // @ts-ignore
        index = styleTag.sheet.cssRules.length;
    }
    catch (e) {
        index = 0;
    }
    try {
        // @ts-ignore
        styleTag.sheet.insertRule(createStyle({
            keyframes,
            animationName,
        }), index);
    }
    catch (e) {
        console.error('react simple animate, error found during insert style ', e); // eslint-disable-line no-console
    }
    return {
        styleTag,
        index,
    };
}

var deleteRules = (sheet, deleteName) => {
    const index = Object.values(sheet.cssRules).findIndex(({ name }) => name === deleteName);
    if (index >= 0) {
        sheet.deleteRule(index);
    }
};

var createRandomName = () => `RSI-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

var getPlayState = (pause) => (pause ? 'paused' : RUNNING);

function AnimateKeyframes(props) {
    const { children, play = false, pause = false, render, duration = DEFAULT_DURATION, delay = 0, easeType = DEFAULT_EASE_TYPE, direction = DEFAULT_DIRECTION, fillMode = DEFAULT_FILLMODE, iterationCount = 1, sequenceIndex, keyframes, sequenceId, } = props;
    let pauseValue;
    const animationNameRef = React.useRef({
        forward: '',
        reverse: '',
    });
    const controlled = React.useRef(false);
    const styleTagRef = React.useRef({
        forward: { sheet: {} },
        reverse: { sheet: {} },
    });
    const id = getSequenceId(sequenceIndex, sequenceId);
    const { register, animationStates = {} } = React.useContext(AnimateContext);
    const animateState = animationStates[id] || {};
    const [, forceUpdate] = React.useState(false);
    React.useEffect(() => {
        const styleTag = styleTagRef.current;
        const animationName = animationNameRef.current;
        animationNameRef.current.forward = createRandomName();
        let result = createTag({
            animationName: animationNameRef.current.forward,
            keyframes,
        });
        animationNameRef.current.reverse = createRandomName();
        styleTagRef.current.forward = result.styleTag;
        result = createTag({
            animationName: animationNameRef.current.reverse,
            keyframes: keyframes.reverse(),
        });
        styleTagRef.current.reverse = result.styleTag;
        register(props);
        if (play) {
            forceUpdate(true);
        }
        return () => {
            deleteRules(styleTag.forward.sheet, animationName.forward);
            deleteRules(styleTag.reverse.sheet, animationName.reverse);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (animateState.controlled && !controlled.current) {
        pauseValue = animateState.pause;
        if (!animateState.pause) {
            controlled.current = true;
        }
    }
    else {
        pauseValue = pause;
    }
    const style = {
        animation: `${duration}s ${easeType} ${animateState.delay || delay}s ${iterationCount} ${direction} ${fillMode} ${getPlayState(pauseValue)} ${((animateState.controlled ? animateState.play : play)
            ? animationNameRef.current.forward
            : animationNameRef.current.reverse) || ''}`,
    };
    return render ? render({ style }) : React.createElement("div", { style: style || {} }, children);
}

function useAnimate(props) {
    const { start, end, complete, onComplete, delay = 0, duration = DEFAULT_DURATION, easeType = DEFAULT_EASE_TYPE, } = props;
    const transition = React.useMemo(() => `${ALL} ${duration}s ${easeType} ${delay}s`, [duration, easeType, delay]);
    const [animate, setAnimate] = React.useState({
        isPlaying: false,
        style: Object.assign(Object.assign({}, start), { transition }),
    });
    const { isPlaying, style } = animate;
    const onCompleteTimeRef = React.useRef();
    React.useEffect(() => {
        if ((onCompleteTimeRef.current || complete) && isPlaying) {
            onCompleteTimeRef.current = setTimeout(() => {
                if (onComplete) {
                    onComplete();
                }
                if (complete) {
                    setAnimate(Object.assign(Object.assign({}, animate), { style: complete }));
                }
            }, secToMs(delay + duration));
        }
        return () => onCompleteTimeRef.current && clearTimeout(onCompleteTimeRef.current);
    }, [isPlaying]);
    return {
        isPlaying,
        style,
        play: React.useCallback((isPlaying) => {
            setAnimate(Object.assign(Object.assign({}, animate), { style: Object.assign(Object.assign({}, (isPlaying ? end : start)), { transition }), isPlaying }));
        }, []),
    };
}

function useAnimateKeyframes(props) {
    const { duration = DEFAULT_DURATION, delay = 0, easeType = DEFAULT_EASE_TYPE, direction = DEFAULT_DIRECTION, fillMode = DEFAULT_FILLMODE, iterationCount = 1, keyframes, } = props;
    const animationNameRef = React.useRef({
        forward: '',
        reverse: '',
    });
    const styleTagRef = React.useRef({
        forward: { sheet: {} },
        reverse: { sheet: {} },
    });
    const { register } = React.useContext(AnimateContext);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isPaused, setIsPaused] = React.useState(false);
    const playRef = React.useRef();
    React.useEffect(() => {
        const styleTag = styleTagRef.current;
        const animationName = animationNameRef.current;
        animationNameRef.current.forward = createRandomName();
        let result = createTag({
            animationName: animationNameRef.current.forward,
            keyframes,
        });
        styleTagRef.current.forward = result.styleTag;
        animationNameRef.current.reverse = createRandomName();
        result = createTag({
            animationName: animationNameRef.current.reverse,
            keyframes: keyframes.reverse(),
        });
        styleTagRef.current.reverse = result.styleTag;
        register(props);
        return () => {
            deleteRules(styleTag.forward.sheet, animationName.forward);
            deleteRules(styleTag.reverse.sheet, animationName.reverse);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    playRef.current = playRef.current
        ? playRef.current
        : (isPlay) => setIsPlaying(isPlay);
    const style = {
        animation: `${duration}s ${easeType} ${delay}s ${iterationCount} ${direction} ${fillMode} ${getPlayState(isPaused)} ${(isPlaying
            ? animationNameRef.current.forward
            : animationNameRef.current.reverse) || ''}`,
    };
    return {
        style,
        play: playRef.current,
        pause: setIsPaused,
        isPlaying,
    };
}

function createArrayWithNumbers(length) {
    return Array.from({ length }, () => null);
}

function useAnimateGroup(props) {
    const { sequences = [] } = props;
    const defaultArray = createArrayWithNumbers(sequences.length).map((_, index) => props.sequences[index].start);
    const [styles, setStyles] = React.useState(defaultArray);
    const [isPlaying, setPlaying] = React.useState(false);
    const animationNamesRef = React.useRef([]);
    const styleTagRef = React.useRef([]);
    const playRef = React.useRef();
    React.useEffect(() => {
        sequences.forEach(({ keyframes = false }, i) => {
            if (!Array.isArray(keyframes)) {
                return;
            }
            if (!animationNamesRef.current[i]) {
                animationNamesRef.current[i] = {};
                styleTagRef.current[i] = {};
            }
            animationNamesRef.current[i].forward = createRandomName();
            let result = createTag({
                animationName: animationNamesRef.current[i].forward,
                keyframes,
            });
            styleTagRef.current[i].forward = result.styleTag;
            animationNamesRef.current[i].reverse = createRandomName();
            result = createTag({
                animationName: animationNamesRef.current[i].reverse,
                keyframes: keyframes.reverse(),
            });
            styleTagRef.current[i].reverse = result.styleTag;
        });
        return () => Object.values(animationNamesRef).forEach(({ forward, reverse }, i) => {
            if (!styleTagRef[i]) {
                return;
            }
            deleteRules(styleTagRef[i].sheet, forward);
            deleteRules(styleTagRef[i].sheet, reverse);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    playRef.current = playRef.current
        ? playRef.current
        : (isPlay) => {
            let totalDuration = 0;
            const animationRefWithOrder = isPlay
                ? animationNamesRef.current
                : [...animationNamesRef.current].reverse();
            const styles = (isPlay ? sequences : [...sequences].reverse()).map((current, currentIndex) => {
                const { duration = DEFAULT_DURATION, delay = 0, overlay, keyframes, iterationCount = 1, easeType = DEFAULT_EASE_TYPE, direction = DEFAULT_DIRECTION, fillMode = DEFAULT_FILLMODE, end = {}, start = {}, } = current;
                const delayDuration = currentIndex === 0 ? delay : totalDuration;
                const transition = `${ALL} ${duration}s ${easeType} ${delayDuration}s`;
                totalDuration =
                    calculateTotalDuration({ duration, delay, overlay }) +
                        totalDuration;
                return keyframes
                    ? {
                        animation: `${duration}s ${easeType} ${delayDuration}s ${iterationCount} ${direction} ${fillMode} ${RUNNING} ${isPlay
                            ? animationRefWithOrder[currentIndex].forward
                            : animationRefWithOrder[currentIndex].reverse}`,
                    }
                    : Object.assign(Object.assign({}, (isPlay ? end : start)), { transition });
            });
            setStyles(isPlay ? styles : [...styles].reverse());
            setPlaying(!isPlaying);
        };
    return { styles, play: playRef.current, isPlaying };
}

exports.Animate = Animate;
exports.AnimateGroup = AnimateGroup;
exports.AnimateKeyframes = AnimateKeyframes;
exports.useAnimate = useAnimate;
exports.useAnimateGroup = useAnimateGroup;
exports.useAnimateKeyframes = useAnimateKeyframes;


/***/ })

}]);
//# sourceMappingURL=15-9f1a4adea9bd0120d02c.js.map