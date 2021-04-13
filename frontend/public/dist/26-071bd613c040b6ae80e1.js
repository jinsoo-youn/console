(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ 204:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 205:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 206:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 207:
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 208:
/*!***********************!*\
  !*** chalk (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 209:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=26-071bd613c040b6ae80e1.js.map