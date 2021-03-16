(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/xterm/lib/addons/fullscreen/fullscreen.js":
/*!****************************************************************!*\
  !*** ./node_modules/xterm/lib/addons/fullscreen/fullscreen.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toggleFullScreen(term, fullscreen) {
    var fn;
    if (typeof fullscreen === 'undefined') {
        fn = (term.element.classList.contains('fullscreen')) ?
            term.element.classList.remove : term.element.classList.add;
    }
    else if (!fullscreen) {
        fn = term.element.classList.remove;
    }
    else {
        fn = term.element.classList.add;
    }
    fn = fn.bind(term.element.classList);
    fn('fullscreen');
}
exports.toggleFullScreen = toggleFullScreen;
function apply(terminalConstructor) {
    terminalConstructor.prototype.toggleFullScreen = function (fullscreen) {
        toggleFullScreen(this, fullscreen);
    };
}
exports.apply = apply;
//# sourceMappingURL=fullscreen.js.map

/***/ }),

/***/ "./public/components/pod-exec.jsx":
/*!****************************************!*\
  !*** ./public/components/pod-exec.jsx ***!
  \****************************************/
/*! exports provided: PodExec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodExec", function() { return PodExec; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux */ "./public/redux.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _reducers_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/features */ "./public/reducers/features.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terminal */ "./public/components/terminal.jsx");
/* harmony import */ var _module_ws_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../module/ws-factory */ "./public/module/ws-factory.js");
/* harmony import */ var _module_k8s__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models */ "./public/models/index.ts");













const nameWithIcon = (name) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-icon-space-r" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["ResourceIcon"], { kind: "Container" })),
    name));
// pod exec WS protocol is FD prefixed, base64 encoded data (sometimes json stringified)
// Channel 0 is STDIN, 1 is STDOUT, 2 is STDERR (if TTY is not requested), and 3 is a special error channel - 4 is C&C
// The server only reads from STDIN, writes to the other three.
// see also: https://github.com/kubernetes/kubernetes/pull/13885
const NO_SH = 'starting container process caused "exec: \\"sh\\": executable file not found in $PATH"';
const PodExec = Object(_reducers_features__WEBPACK_IMPORTED_MODULE_7__["connectToFlags"])(_console_shared__WEBPACK_IMPORTED_MODULE_8__["FLAGS"].OPENSHIFT)(class PodExec extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            containers: [],
            activeContainer: lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](props, 'obj.spec.containers[0].name'),
        };
        this.terminal = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        this.onResize = (rows, cols) => this.onResize_(rows, cols);
        this.onData = (d) => this.onData_(d);
        this.onChangeContainer = (index) => this.onChangeContainer_(index);
    }
    connect_() {
        const { metadata } = this.props.obj;
        const { activeContainer } = this.state;
        const usedClient = this.props.flags[_console_shared__WEBPACK_IMPORTED_MODULE_8__["FLAGS"].OPENSHIFT] ? 'oc' : 'kubectl';
        const params = {
            ns: metadata.namespace,
            name: metadata.name,
            path: 'exec',
            queryParams: {
                stdout: 1,
                stdin: 1,
                stderr: 1,
                tty: 1,
                container: activeContainer,
                command: ['sh', '-i', '-c', 'TERM=xterm sh']
                    .map((c) => encodeURIComponent(c))
                    .join('&command='),
            },
        };
        if (this.ws) {
            this.ws.destroy();
            const { current } = this.terminal;
            current && current.onConnectionClosed(`connecting to ${activeContainer}`);
        }
        const impersonate = _redux__WEBPACK_IMPORTED_MODULE_5__["default"].getState().UI.get('impersonate', {});
        const subprotocols = (impersonate.subprotocols || []).concat('base64.channel.k8s.io');
        let previous;
        this.ws = new _module_ws_factory__WEBPACK_IMPORTED_MODULE_10__["WSFactory"](`${metadata.name}-terminal`, {
            host: 'auto',
            reconnect: true,
            path: Object(_module_k8s__WEBPACK_IMPORTED_MODULE_11__["resourceURL"])(_models__WEBPACK_IMPORTED_MODULE_12__["PodModel"], params),
            jsonParse: false,
            subprotocols,
        })
            .onmessage((raw) => {
            const { current } = this.terminal;
            // error channel
            if (raw[0] === '3') {
                if (previous.includes(NO_SH)) {
                    current.reset();
                    current.onConnectionClosed(`This container doesn't have a /bin/sh shell. Try specifying your command in a terminal with:\r\n\r\n ${usedClient} -n ${metadata.namespace} exec ${metadata.name} -ti <command>`);
                    this.ws.destroy();
                    previous = '';
                    return;
                }
            }
            const data = js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].decode(raw.slice(1));
            current && current.onDataReceived(data);
            previous = data;
        })
            .onopen(() => {
            const { current } = this.terminal;
            current && current.reset();
            previous = '';
            this.setState({ open: true, error: null });
        })
            .onclose((evt) => {
            if (!evt || evt.wasClean === true) {
                return;
            }
            const error = evt.reason || 'The terminal connection has closed.';
            this.setState({ error });
            this.terminal.current && this.terminal.current.onConnectionClosed(error);
            this.ws.destroy();
        }) // eslint-disable-next-line no-console
            .onerror((evt) => console.error(`WS error?! ${evt}`));
    }
    componentDidMount() {
        this.connect_();
    }
    componentWillUnmount() {
        this.ws && this.ws.destroy();
        delete this.ws;
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const containers = lodash_es__WEBPACK_IMPORTED_MODULE_1__["get"](nextProps.obj, 'spec.containers', []).map((n) => n.name);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_1__["isEqual"](containers, prevState.containers)) {
            return null;
        }
        return { containers };
    }
    onChangeContainer_(index) {
        const name = this.state.containers[index];
        if (!name) {
            // eslint-disable-next-line no-console
            console.warn(`no name, how did that happen? ${index}`);
            return;
        }
        if (name === this.state.activeContainer) {
            return;
        }
        this.setState({ activeContainer: name }, () => {
            this.connect_();
            this.terminal.current && this.terminal.current.focus();
        });
    }
    onResize_(rows, cols) {
        const data = js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encode(JSON.stringify({ Height: rows, Width: cols }));
        this.ws && this.ws.send(`4${data}`);
    }
    setFullscreen(fullscreen) {
        this.terminal.current.setFullscreen(fullscreen);
    }
    onData_(data) {
        this.ws && this.ws.send(`0${js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encode(data)}`);
    }
    render() {
        const { containers, activeContainer, open, error } = this.state;
        const { message } = this.props;
        let contents = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LoadingBox"], null);
        if (error) {
            contents = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-center cos-error-title" }, error);
        }
        else if (open) {
            contents = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_terminal__WEBPACK_IMPORTED_MODULE_9__["Terminal"], { onResize: this.onResize, onData: this.onData, ref: this.terminal });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__group co-toolbar__group--left" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__item" }, "Connecting to"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__item" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], { className: "btn-group", items: lodash_es__WEBPACK_IMPORTED_MODULE_1__["mapValues"](containers, nameWithIcon), title: nameWithIcon(activeContainer || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_6__["LoadingInline"], null)), onChange: this.onChangeContainer }))),
                !error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__group co-toolbar__group--right" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-toolbar__item" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], { variant: "link", className: "pf-m-link--align-right", onClick: () => this.setFullscreen(true) },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__["ExpandIcon"], { className: "co-icon-space-r" }),
                            "Expand"))))),
            message,
            contents));
    }
});


/***/ }),

/***/ "./public/components/terminal.jsx":
/*!****************************************!*\
  !*** ./public/components/terminal.jsx ***!
  \****************************************/
/*! exports provided: Terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xterm */ "./node_modules/xterm/lib/public/Terminal.js");
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xterm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xterm/lib/addons/fit/fit */ "./node_modules/xterm/lib/addons/fit/fit.js");
/* harmony import */ var xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xterm_lib_addons_fullscreen_fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xterm/lib/addons/fullscreen/fullscreen */ "./node_modules/xterm/lib/addons/fullscreen/fullscreen.js");
/* harmony import */ var xterm_lib_addons_fullscreen_fullscreen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xterm_lib_addons_fullscreen_fullscreen__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







xterm__WEBPACK_IMPORTED_MODULE_2__["Terminal"].applyAddon(xterm_lib_addons_fit_fit__WEBPACK_IMPORTED_MODULE_3__);
xterm__WEBPACK_IMPORTED_MODULE_2__["Terminal"].applyAddon(xterm_lib_addons_fullscreen_fullscreen__WEBPACK_IMPORTED_MODULE_4__);
class Terminal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = { height: 0, width: 0 };
        this.innerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        this.outerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        this.isFullscreen = false;
        this.onResize = () => this.onResize_();
        this.onDataReceived = (data) => this.terminal && this.terminal.write(data);
        this.terminal = new xterm__WEBPACK_IMPORTED_MODULE_2__["Terminal"](Object.assign({}, this.props.options));
        this.terminal.on('data', this.props.onData);
    }
    reset() {
        const terminal = this.terminal;
        if (!terminal) {
            return;
        }
        terminal.reset();
        terminal.clear();
        terminal.setOption('disableStdin', false);
    }
    focus() {
        this.terminal && this.terminal.focus();
    }
    enableiOSFix() {
        document.getElementsByClassName('pf-c-page__main')[0].classList.add('default-overflow');
        document.getElementById('content-scrollable').classList.add('default-overflow');
    }
    disableiOSFix() {
        document.getElementsByClassName('pf-c-page__main')[0].classList.remove('default-overflow');
        document.getElementById('content-scrollable').classList.remove('default-overflow');
    }
    setFullscreen(fullscreen) {
        this.terminal.toggleFullScreen(fullscreen);
        this.isFullscreen = fullscreen;
        this.focus();
        this.onResize();
        // fix iOS bug where masthead overlays fullscreen terminal
        // see https://bugs.webkit.org/show_bug.cgi?id=160953
        fullscreen ? this.enableiOSFix() : this.disableiOSFix();
    }
    onConnectionClosed(reason) {
        const terminal = this.terminal;
        if (!terminal) {
            return;
        }
        this.setFullscreen(false);
        terminal.write(`\x1b[31m${reason || 'disconnected'}\x1b[m\r\n`);
        terminal.cursorHidden = true;
        terminal.setOption('disableStdin', true);
        terminal.refresh(terminal.y, terminal.y);
    }
    componentDidMount() {
        this.terminal.open(this.innerRef.current);
        this.focus();
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        this.terminal && this.terminal.destroy();
        window.removeEventListener('resize', this.onResize);
    }
    onResize_() {
        const node = this.outerRef.current;
        if (!node) {
            return;
        }
        const pageRect = document.getElementsByClassName('pf-c-page')[0].getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const { padding } = this.props;
        // This assumes we want to fill everything below and to the right.  In full-screen, fill entire viewport
        const height = Math.floor(pageRect.bottom - (this.isFullscreen ? 0 : nodeRect.top) - padding);
        const width = Math.floor(bodyRect.width - (this.isFullscreen ? 0 : nodeRect.left) - (this.isFullscreen ? 10 : padding));
        if (height === this.state.height && width === this.state.width) {
            return;
        }
        // rerender with correct dimensions
        this.setState({ height, width }, () => {
            const terminal = this.terminal;
            if (!terminal) {
                return;
            }
            // tell the terminal to resize itself
            terminal.fit();
            // update the pty
            this.props.onResize(terminal.rows, terminal.cols);
        });
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: this.outerRef, style: this.state, className: this.props.className },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: this.innerRef, className: "console" }, this.isFullscreen && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], { className: "console-collapse-link", onClick: () => this.setFullscreen(false), variant: "link" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["CompressIcon"], { className: "co-icon-space-r" }),
                "Collapse")))));
    }
}
Terminal.propTypes = {
    onData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onResize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
};
Terminal.defaultProps = {
    padding: 30,
    options: {
        fontFamily: 'monospace',
        fontSize: 16,
        cursorBlink: false,
        cols: 80,
        rows: 25,
    },
};


/***/ })

}]);
//# sourceMappingURL=31-3a43362b25cd347f3beb.js.map