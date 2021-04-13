(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-sign-request"],{

/***/ "./public/components/hypercloud/IR.scss":
/*!**********************************************!*\
  !*** ./public/components/hypercloud/IR.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/components/hypercloud/image-replicate.tsx":
/*!**********************************************************!*\
  !*** ./public/components/hypercloud/image-replicate.tsx ***!
  \**********************************************************/
/*! exports provided: menuActions, ImageReplicateStatus, ImageReplicateImageTable, ImageReplicateDetailsList, ImageReplicates, ImageReplicatesPage, ImageReplicatesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReplicateStatus", function() { return ImageReplicateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReplicateImageTable", function() { return ImageReplicateImageTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReplicateDetailsList", function() { return ImageReplicateDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReplicates", function() { return ImageReplicates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReplicatesPage", function() { return ImageReplicatesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageReplicatesDetailsPage", function() { return ImageReplicatesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");
/* harmony import */ var _IR_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IR.scss */ "./public/components/hypercloud/IR.scss");
/* harmony import */ var _IR_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_IR_scss__WEBPACK_IMPORTED_MODULE_9__);










const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["ImageReplicateModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_5__["ImageReplicateModel"].kind;
const tableColumnClasses = ['', '', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg', 'IR__button'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg', 'IR__button'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg', 'IR__button'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg', 'IR__button'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg', 'IR__button'), _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass];
const ImageReplicateTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_75'),
            sortField: 'spec.fromImage.registryType',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_89'),
            sortField: 'spec.fromImage.registryName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_76'),
            sortField: 'spec.toImage.registryType',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_90'),
            sortField: 'spec.toImage.registryName',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[6] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[7] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[8] },
        },
    ];
};
const ImageReplicateTableRow = ({ obj: imagereplicate, index, key, style }) => {
    var _a;
    let FROM_NAMESPACE_NAME = `${imagereplicate.spec.fromImage.registryName}(${imagereplicate.spec.fromImage.registryNamespace})`;
    let TO_NAMESPACE_NAME = `${imagereplicate.spec.toImage.registryName}(${imagereplicate.spec.toImage.registryNamespace})`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: imagereplicate.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: imagereplicate.metadata.name, namespace: imagereplicate.metadata.namespace, title: imagereplicate.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: imagereplicate.metadata.namespace, title: imagereplicate.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: (_a = imagereplicate === null || imagereplicate === void 0 ? void 0 : imagereplicate.status) === null || _a === void 0 ? void 0 : _a.state })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] }, imagereplicate.spec.fromImage.registryType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: _models__WEBPACK_IMPORTED_MODULE_5__["ExternalRegistryModel"].kind, name: imagereplicate.spec.fromImage.registryName, displayName: FROM_NAMESPACE_NAME, namespace: imagereplicate.spec.fromImage.registryNamespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[5] }, imagereplicate.spec.toImage.registryType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: _models__WEBPACK_IMPORTED_MODULE_5__["RegistryModel"].kind, name: imagereplicate.spec.toImage.registryName, displayName: TO_NAMESPACE_NAME, namespace: imagereplicate.spec.toImage.registryNamespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[7] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: imagereplicate.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[8] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: imagereplicate }))));
};
const ImageReplicateStatus = ({ result }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: result });
const ImageReplicateImageTable = ({ ds }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    const rows = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, ds.spec.fromImage.image),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, ds.spec.toImage.image)));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row co-m-table-grid__head" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, t('COMMON:MSG_DETAILS_TABDETAILS_11')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-xs-6 col-sm-4 col-md-4" }, t('COMMON:MSG_DETAILS_TABDETAILS_13'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-table-grid__body" }, rows)));
};
const ImageReplicateDetailsList = ({ ds }) => {
    var _a, _b, _c;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    let FROM_NAMESPACE_NAME = `${ds.spec.fromImage.registryName}(${ds.spec.fromImage.registryNamespace})`;
    let TO_NAMESPACE_NAME = `${ds.spec.toImage.registryName}(${ds.spec.toImage.registryNamespace})`;
    let isSigner = (_a = ds.spec) === null || _a === void 0 ? void 0 : _a.signer;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_MAIN_TABLEHEADER_3')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageReplicateStatus, { result: (_b = ds === null || ds === void 0 ? void 0 : ds.status) === null || _b === void 0 ? void 0 : _b.state })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_49')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } }, ds.spec.fromImage.registryType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_MAIN_TABLEHEADER_89')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: _models__WEBPACK_IMPORTED_MODULE_5__["ExternalRegistryModel"].kind, name: ds.spec.fromImage.registryName, displayName: FROM_NAMESPACE_NAME, title: FROM_NAMESPACE_NAME, namespace: ds.spec.fromImage.registryNamespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_51')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } }, ds.spec.toImage.registryType),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_MAIN_TABLEHEADER_90')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: _models__WEBPACK_IMPORTED_MODULE_5__["RegistryModel"].kind, name: ds.spec.toImage.registryName, displayName: TO_NAMESPACE_NAME, title: TO_NAMESPACE_NAME, namespace: ds.spec.toImage.registryNamespace })),
        isSigner && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_SIGNERS_1')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } }, (_c = ds.spec) === null || _c === void 0 ? void 0 : _c.signer)))));
};
const ImageReplicateDetails = ({ obj: imagereplicate }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(imagereplicate, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: imagereplicate })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageReplicateDetailsList, { ds: imagereplicate })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: `${t('COMMON:MSG_DETAILS_TABDETAILS_5')}` }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageReplicateImageTable, { ds: imagereplicate }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
ImageReplicateTableHeader.displayName = 'ImageReplicateTableHeader';
const ImageReplicates = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "ImageReplicates", Header: ImageReplicateTableHeader.bind(null, t), Row: ImageReplicateTableRow, virtualize: true }));
};
const ImageReplicatesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_93'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_93') }), canCreate: true, ListComponent: ImageReplicates, kind: kind }, props));
};
const ImageReplicatesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(ImageReplicateDetails)), editYaml()] }));


/***/ }),

/***/ "./public/components/hypercloud/image-sign-request.tsx":
/*!*************************************************************!*\
  !*** ./public/components/hypercloud/image-sign-request.tsx ***!
  \*************************************************************/
/*! exports provided: menuActions, ImageSignRequestStatus, ImageSignRequestDetailsList, ImageSignRequests, ImageSignRequestsPage, ImageSignRequestsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignRequestStatus", function() { return ImageSignRequestStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignRequestDetailsList", function() { return ImageSignRequestDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignRequests", function() { return ImageSignRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignRequestsPage", function() { return ImageSignRequestsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSignRequestsDetailsPage", function() { return ImageSignRequestsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");









const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["ImageSignRequestModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_5__["ImageSignRequestModel"].kind;
const tableColumnClasses = ['', '', '', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass];
const ImageSignRequestTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
            sortField: 'status.imageSignResponse.result',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_38'),
            sortField: 'spec.image',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_74'),
            sortField: 'spec.signer',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[4] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[5] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[6] },
        },
    ];
};
ImageSignRequestTableHeader.displayName = 'ImageSignRequestTableHeader';
const ImageSignRequestTableRow = ({ obj: signrequest, index, key, style }) => {
    var _a, _b, _c, _d;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: signrequest.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: signrequest.metadata.name, namespace: signrequest.metadata.namespace, title: signrequest.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: signrequest.metadata.namespace, title: signrequest.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: (_b = (_a = signrequest === null || signrequest === void 0 ? void 0 : signrequest.status) === null || _a === void 0 ? void 0 : _a.imageSignResponse) === null || _b === void 0 ? void 0 : _b.result })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] }, (_c = signrequest === null || signrequest === void 0 ? void 0 : signrequest.spec) === null || _c === void 0 ? void 0 : _c.image),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[4] }, (_d = signrequest === null || signrequest === void 0 ? void 0 : signrequest.spec) === null || _d === void 0 ? void 0 : _d.signer),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[5] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: signrequest.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[6] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: signrequest }))));
};
const ImageSignRequestStatus = ({ result }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: result });
const ImageSignRequestDetailsList = ({ ds }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, `${t('SINGLE:MSG_JOBS_JOBDETAILS_TABDETAILS_JOBSTATUS_2')}`),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageSignRequestStatus, { result: ds.status.imageSignResponse.result })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: `${t('COMMON:MSG_DETAILS_TABDETAILS_CONTAINERS_TABLEHEADER_3')}`, obj: ds, path: "spec.image" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["DetailsItem"], { label: `${t('COMMON:MSG_DETAILS_TABDETAILS_SIGNERS_1')}`, obj: ds, path: "spec.signer" })));
};
const ImageSignRequestDetails = ({ obj: signrequest }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_8__["ResourceLabel"])(signrequest, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: signrequest })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ImageSignRequestDetailsList, { ds: signrequest }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const ImageSignRequests = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "ImageSignRequests", Header: ImageSignRequestTableHeader.bind(null, t), Row: ImageSignRequestTableRow, virtualize: true }));
};
const ImageSignRequestsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_92'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_92') }), canCreate: true, ListComponent: ImageSignRequests, kind: kind }, props));
};
const ImageSignRequestsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(ImageSignRequestDetails)), editYaml()] }));


/***/ }),

/***/ "./public/components/hypercloud/signer-policy.tsx":
/*!********************************************************!*\
  !*** ./public/components/hypercloud/signer-policy.tsx ***!
  \********************************************************/
/*! exports provided: menuActions, SignerPolicyStatus, SignerPolicies, SignerPoliciesPage, SignerPoliciesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignerPolicyStatus", function() { return SignerPolicyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignerPolicies", function() { return SignerPolicies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignerPoliciesPage", function() { return SignerPoliciesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignerPoliciesDetailsPage", function() { return SignerPoliciesDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _image_signer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-signer */ "./public/components/hypercloud/image-signer.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");










const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_5__["SignerPolicyModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_5__["SignerPolicyModel"].kind;
const tableColumnClasses = ['', classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_1__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass];
const SignerPolicyTableHeader = (t) => {
    return [
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
            sortField: 'metadata.name',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[0] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_2'),
            sortField: 'metadata.namespace',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[1] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_74'),
            sortField: 'status.imageSignResponse.result',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
SignerPolicyTableHeader.displayName = 'SignerPolicyTableHeader';
const SignerPolicyTableRow = ({ obj: signerpolicy, index, key, style }) => {
    var _a, _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: signerpolicy.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: kind, name: signerpolicy.metadata.name, namespace: signerpolicy.metadata.namespace, title: signerpolicy.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_1__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: "Namespace", name: signerpolicy.metadata.namespace, title: signerpolicy.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[2] }, (_b = (_a = signerpolicy === null || signerpolicy === void 0 ? void 0 : signerpolicy.spec) === null || _a === void 0 ? void 0 : _a.signers) === null || _b === void 0 ? void 0 : _b.length),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["Timestamp"], { timestamp: signerpolicy.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: kind, resource: signerpolicy }))));
};
const SignerPolicyStatus = ({ result }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_6__["Status"], { status: result });
const SignerPolicyDetails = ({ obj: signerpolicy }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__["ResourceLabel"])(signerpolicy, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceSummary"], { resource: signerpolicy })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body", style: { paddingLeft: '0px' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_image_signer__WEBPACK_IMPORTED_MODULE_7__["ImageSignersPage"], { isDetailPage: true }))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_4__["navFactory"];
const SignerPolicies = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], Object.assign({}, props, { "aria-label": "SignerPolicies", Header: SignerPolicyTableHeader.bind(null, t), Row: SignerPolicyTableRow, virtualize: true }));
};
const SignerPoliciesPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_96'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_96') }), canCreate: true, ListComponent: SignerPolicies, kind: kind }, props));
};
const SignerPoliciesDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["detailsPage"])(SignerPolicyDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=image-sign-request-d5b24d69faa9809b8f08.js.map