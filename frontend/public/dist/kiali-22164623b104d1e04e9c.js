(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kiali"],{

/***/ "./public/components/hypercloud/kiali.jsx":
/*!************************************************!*\
  !*** ./public/components/hypercloud/kiali.jsx ***!
  \************************************************/
/*! exports provided: KialiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KialiPage", function() { return KialiPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../propTypes */ "./public/propTypes.ts");





const updateUrlParams = (k, v) => {
    const url = new URL(window.location);
    const sp = new URLSearchParams(window.location.search);
    sp.set(k, v);
    _utils__WEBPACK_IMPORTED_MODULE_3__["history"].push(`${url.pathname}?${sp.toString()}${url.hash}`);
};
const updateKind = kind => updateUrlParams('kind', encodeURIComponent(kind));
class KialiPage_ extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.setRef = ref => (this.ref = ref);
        this.onSelectorChange = k => {
            updateKind(k);
            this.ref && this.ref.focus();
        };
    }
    render() {
        const { flags, location, namespace, t } = this.props;
        // if (flagPending(flags.OPENSHIFT) || flagPending(flags.PROJECTS_AVAILABLE)) {
        //     return null;
        // }
        let url = `${document.location.origin}/api/kiali/`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Kiali")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_3__["PageHeading"], { title: "Kiali" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", { style: { width: '100%', height: '100vh', border: 0 }, src: url, target: "_blank" }))));
    }
}
const KialiPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](KialiPage_, Object.assign({}, props));
// export const KialiPage = connectToFlags(FLAGS.OPENSHIFT, FLAGS.PROJECT)(KialiPage_)
KialiPage.propTypes = {
    namespace: _propTypes__WEBPACK_IMPORTED_MODULE_4__["namespaceProptype"],
    location: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
};


/***/ })

}]);
//# sourceMappingURL=kiali-22164623b104d1e04e9c.js.map