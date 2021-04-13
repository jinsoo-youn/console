(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-scan-request"],{

/***/ "./public/components/hypercloud/image-scan-request.tsx":
/*!*************************************************************!*\
  !*** ./public/components/hypercloud/image-scan-request.tsx ***!
  \*************************************************************/
/*! exports provided: menuActions, ImageScanRequestStatus, ImageScanRequestDetailsList, ScanResultRow, ScanResultTable, ImageScanRequests, ImageScanRequestsPage, ImageScanRequestsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuActions", function() { return menuActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageScanRequestStatus", function() { return ImageScanRequestStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageScanRequestDetailsList", function() { return ImageScanRequestDetailsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanResultRow", function() { return ScanResultRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanResultTable", function() { return ScanResultTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageScanRequests", function() { return ImageScanRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageScanRequestsPage", function() { return ImageScanRequestsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageScanRequestsDetailsPage", function() { return ImageScanRequestsDetailsPage; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./public/models/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/hypercloud/resource-plural */ "./public/models/hypercloud/resource-plural.ts");










const menuActions = [..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].getExtensionsActionsForKind(_models__WEBPACK_IMPORTED_MODULE_6__["ImageScanRequestModel"]), ..._utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].factory.common];
const kind = _models__WEBPACK_IMPORTED_MODULE_6__["ImageScanRequestModel"].kind;
const tableColumnClasses = ['', '', classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'), classnames__WEBPACK_IMPORTED_MODULE_2__('pf-m-hidden', 'pf-m-visible-on-lg'), _utils__WEBPACK_IMPORTED_MODULE_5__["Kebab"].columnClass];
const ImageScanRequestTableHeader = (t) => {
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
            sortField: 'status.status',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[2] },
        },
        {
            title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
            sortField: 'metadata.creationTimestamp',
            transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__["sortable"]],
            props: { className: tableColumnClasses[3] },
        },
        {
            title: '',
            props: { className: tableColumnClasses[4] },
        },
    ];
};
ImageScanRequestTableHeader.displayName = 'ImageScanRequestTableHeader';
const ImageScanRequestTableRow = ({ obj: scanrequest, index, key, style }) => {
    var _a;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableRow"], { id: scanrequest.metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[0] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: kind, name: scanrequest.metadata.name, namespace: scanrequest.metadata.namespace, title: scanrequest.metadata.uid })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: classnames__WEBPACK_IMPORTED_MODULE_2__(tableColumnClasses[1], 'co-break-word') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceLink"], { kind: "Namespace", name: scanrequest.metadata.namespace, title: scanrequest.metadata.namespace })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[2] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["Status"], { status: (_a = scanrequest === null || scanrequest === void 0 ? void 0 : scanrequest.status) === null || _a === void 0 ? void 0 : _a.status })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[3] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], { timestamp: scanrequest.metadata.creationTimestamp })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["TableData"], { className: tableColumnClasses[4] },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceKebab"], { actions: menuActions, kind: kind, resource: scanrequest }))));
};
const ImageScanRequestStatus = ({ result }) => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_7__["Status"], { status: result });
const ImageScanRequestDetailsList = ({ ds, summary }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    let imageResult = [];
    ds.spec.scanTargets.forEach(target => {
        target.images.forEach(image => {
            imageResult.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, image));
        });
    });
    const getImageResult = status => {
        if (status === 'Pending' || !status) {
            return '이미지 스캔대기 중입니다.';
        }
        else if (status === 'Scanning') {
            return '이미지를 스캔 중입니다.';
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", { className: "co-m-pane__details" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_MAIN_TABLEHEADER_3')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageScanRequestStatus, { result: (_a = ds === null || ds === void 0 ? void 0 : ds.status) === null || _a === void 0 ? void 0 : _a.status })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_42')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } }, getImageResult((_b = ds === null || ds === void 0 ? void 0 : ds.status) === null || _b === void 0 ? void 0 : _b.status)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_5')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } }, (_c = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _c === void 0 ? void 0 : _c.scanTargets.map(cur => `${cur === null || cur === void 0 ? void 0 : cur.registryUrl}/${cur === null || cur === void 0 ? void 0 : cur.images[0]}`)),
        ((_d = ds === null || ds === void 0 ? void 0 : ds.status) === null || _d === void 0 ? void 0 : _d.status) === 'Success' && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_21')),
        ((_e = ds === null || ds === void 0 ? void 0 : ds.status) === null || _e === void 0 ? void 0 : _e.status) === 'Success' && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", { style: { display: 'flex', flexDirection: 'column' } }, lodash_es__WEBPACK_IMPORTED_MODULE_0__["keys"](summary).map(cur => {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, `${cur}: ${summary[cur]}`);
        }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_15')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, ((_f = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _f === void 0 ? void 0 : _f.insecure) ? t('COMMON:MSG_DETAILS_TABDETAILS_46') : t('COMMON:MSG_DETAILS_TABDETAILS_45')),
        ((_g = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _g === void 0 ? void 0 : _g.maxFixable) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_43')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, (_h = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _h === void 0 ? void 0 : _h.maxFixable),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, t('COMMON:MSG_DETAILS_TABDETAILS_44')),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, ((_j = ds === null || ds === void 0 ? void 0 : ds.spec) === null || _j === void 0 ? void 0 : _j.sendReport) ? t('COMMON:MSG_DETAILS_TABDETAILS_47') : t('COMMON:MSG_DETAILS_TABDETAILS_48'))));
};
const ScanResultRow = ({ scanList }) => {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6 col-md-6 col-sm-6 col-xs-6" }, scanList === null || scanList === void 0 ? void 0 : scanList.image),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6 col-md-6 col-sm-6 hidden-xs" }, scanList === null || scanList === void 0 ? void 0 : scanList.summary)));
};
const ScanResultTable = ({ heading, scanList }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: heading }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid co-m-table-grid--bordered" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row co-m-table-grid__head" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6 col-md-6 col-sm-6 col-xs-6" }, `${t('COMMON:MSG_DETAILS_CONTAINER_IMAGEDETAILS_1')}`),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6 col-md-6 col-sm-6 col-xs-6" }, `${t('COMMON:MSG_DETAILS_TABDETAILS_21')}`)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-table-grid__body" }, scanList.map((c, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ScanResultRow, { key: i, scanList: c })))))));
};
const ImageScanRequestDetails = ({ obj: scanrequest }) => {
    var _a, _b;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    const summary = {};
    for (const key in (_a = scanrequest.status) === null || _a === void 0 ? void 0 : _a.results) {
        const result = (_b = scanrequest.status) === null || _b === void 0 ? void 0 : _b.results[key];
        // let summary = { image: '', summaries: [] };
        for (const statusKey in result.summary) {
            const isKeyExist = lodash_es__WEBPACK_IMPORTED_MODULE_0__["has"](summary, statusKey);
            if (isKeyExist) {
                summary[statusKey] += scanrequest.status.results[key].summary[statusKey];
            }
            else {
                summary[statusKey] = scanrequest.status.results[key].summary[statusKey];
            }
        }
    }
    // [outdate] previous version
    // for (const key in scanrequest.status?.results) {
    //   let summary = { image: '', summary: '' };
    //   summary.image = key;
    //   for (const statusKey in scanrequest.status.results[key].summary) {
    //     summary.summary += `${statusKey} ${scanrequest.status.results[key].summary[statusKey]}, `;
    //   }
    //   summary.summary = summary.summary.substr(0, summary.summary.length - 2);
    //   summaries.push(summary);
    // }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_1', { 0: Object(_models_hypercloud_resource_plural__WEBPACK_IMPORTED_MODULE_9__["ResourceLabel"])(scanrequest, t) }) }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils__WEBPACK_IMPORTED_MODULE_5__["ResourceSummary"], { resource: scanrequest })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-lg-6" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageScanRequestDetailsList, { ds: scanrequest, summary: summary }))))));
};
const { details, editYaml } = _utils__WEBPACK_IMPORTED_MODULE_5__["navFactory"];
const ImageScanRequests = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["Table"], Object.assign({}, props, { "aria-label": "ImageScanRequests", Header: ImageScanRequestTableHeader.bind(null, t), Row: ImageScanRequestTableRow, virtualize: true }));
};
const ImageScanRequestsPage = props => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])();
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["ListPage"], Object.assign({ title: t('COMMON:MSG_LNB_MENU_95'), createButtonText: t('COMMON:MSG_MAIN_CREATEBUTTON_1', { 0: t('COMMON:MSG_LNB_MENU_95') }), canCreate: true, ListComponent: ImageScanRequests, kind: kind }, props));
};
const ImageScanRequestsDetailsPage = props => react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_factory__WEBPACK_IMPORTED_MODULE_4__["DetailsPage"], Object.assign({}, props, { kind: kind, menuActions: menuActions, pages: [details(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["detailsPage"])(ImageScanRequestDetails)), editYaml()] }));


/***/ })

}]);
//# sourceMappingURL=image-scan-request-96ccb8dca12ba8b08d57.js.map