(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provisionedservices"],{

/***/ "./public/components/provisioned-services.tsx":
/*!****************************************************!*\
  !*** ./public/components/provisioned-services.tsx ***!
  \****************************************************/
/*! exports provided: ProvisionedServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisionedServicesPage", function() { return ProvisionedServicesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _service_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-instance */ "./public/components/service-instance.tsx");
/* harmony import */ var _service_binding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-binding */ "./public/components/service-binding.tsx");




const pages = [
    {
        href: '',
        name: 'Service Instances',
        component: _service_instance__WEBPACK_IMPORTED_MODULE_2__["ServiceInstancesPage"],
    },
    {
        href: 'servicebindings',
        name: 'Service Bindings',
        component: _service_binding__WEBPACK_IMPORTED_MODULE_3__["ServiceBindingsPage"],
    },
];
const ProvisionedServicesPage = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["PageHeading"], { detail: true, title: "Provisioned Services" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_1__["HorizontalNav"], { pages: pages, match: match, noStatusBox: true })));


/***/ })

}]);
//# sourceMappingURL=provisionedservices-89694e44e838828bd24d.js.map