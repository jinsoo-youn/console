(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kibana"],{

/***/ "./public/components/hypercloud/kibana.jsx":
/*!*************************************************!*\
  !*** ./public/components/hypercloud/kibana.jsx ***!
  \*************************************************/
/*! exports provided: KibanaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibanaPage", function() { return KibanaPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../propTypes */ "./public/propTypes.ts");



class KibanaPage_ extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.setRef = ref => (this.ref = ref);
    }
    render() {
        const { flags, location, namespace, t } = this.props;
        let url = `${document.location.origin}/api/kibana/`;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", { style: { width: '100%', height: '100vh', border: 0 }, src: url, target: "_blank" }))));
    }
}
const KibanaPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](KibanaPage_, Object.assign({}, props));
KibanaPage.propTypes = {
    namespace: _propTypes__WEBPACK_IMPORTED_MODULE_2__["namespaceProptype"],
    location: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
};


/***/ })

}]);
//# sourceMappingURL=kibana-29596394d172e35880d8.js.map