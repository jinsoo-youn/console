(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["command-line-tools"],{

/***/ "./public/components/command-line-tools.tsx":
/*!**************************************************!*\
  !*** ./public/components/command-line-tools.tsx ***!
  \**************************************************/
/*! exports provided: CommandLineTools, CommandLineToolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandLineTools", function() { return CommandLineTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandLineToolsPage", function() { return CommandLineToolsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _markdown_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./markdown-view */ "./public/components/markdown-view.tsx");
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









const CommandLineTools = ({ obj }) => {
    const title = 'Command Line Tools';
    const data = lodash_es__WEBPACK_IMPORTED_MODULE_2__["sortBy"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["get"](obj, 'data'), 'spec.displayName');
    const cliData = lodash_es__WEBPACK_IMPORTED_MODULE_2__["remove"](data, (item) => item.metadata.name === 'oc-cli-downloads');
    const additionalCommandLineTools = lodash_es__WEBPACK_IMPORTED_MODULE_2__["map"](cliData.concat(data), (tool) => {
        const displayName = tool.spec.displayName;
        const defaultLinkText = `Download ${displayName}`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: tool.metadata.uid },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "co-section-heading", "data-test-id": displayName }, displayName),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_markdown_view__WEBPACK_IMPORTED_MODULE_8__["SyncMarkdownView"], { content: tool.spec.description, exactHeight: true }),
            tool.spec.links.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: tool.spec.links[0].href, text: tool.spec.links[0].text || defaultLinkText }))),
            tool.spec.links.length > 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, lodash_es__WEBPACK_IMPORTED_MODULE_2__["map"](tool.spec.links, (link, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: i },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: link.href, text: link.text || defaultLinkText }))))))));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name" }, title)),
            window.SERVER_FLAGS.requestTokenURL && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], { href: window.SERVER_FLAGS.requestTokenURL, text: "Copy Login Command" }))),
            additionalCommandLineTools)));
};
const CommandLineToolsPage = Object(_reducers_features__WEBPACK_IMPORTED_MODULE_5__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_3__["FLAGS"].CONSOLE_CLI_DOWNLOAD)((_a) => {
    var { flags } = _a, props = __rest(_a, ["flags"]);
    const resources = flags[_console_shared__WEBPACK_IMPORTED_MODULE_3__["FLAGS"].CONSOLE_CLI_DOWNLOAD]
        ? [
            {
                kind: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_6__["ConsoleCLIDownloadModel"]),
                isList: true,
                prop: 'obj',
            },
        ]
        : [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CommandLineTools, Object.assign({}, props))));
});


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
//# sourceMappingURL=command-line-tools-8dd31dda9bb11ca0852c.js.map