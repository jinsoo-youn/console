(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["node~node-detail"],{

/***/ "./packages/console-app/src/components/nodes/NodeDetailsConditions.tsx":
/*!*****************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeDetailsConditions.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




const NodeDetailsConditions = ({ node }) => {
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_NODECONDITIONS_1') }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-table-container" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "table" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_NODECONDITIONS_TABLEHEADER_1')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_NODECONDITIONS_TABLEHEADER_2')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_NODECONDITIONS_TABLEHEADER_3')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_NODECONDITIONS_TABLEHEADER_4')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_NODECONDITIONS_TABLEHEADER_5')))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](node.status.conditions, (c, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["CamelCaseWrap"], { value: c.type })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, c.status || '-'),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["CamelCaseWrap"], { value: c.reason })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Timestamp"], { timestamp: c.lastHeartbeatTime })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["Timestamp"], { timestamp: c.lastTransitionTime }))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeDetailsConditions);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/NodeDetailsImages.tsx":
/*!*************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeDetailsImages.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




const NodeDetailsImages = ({ node }) => {
    const images = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](node.status.images, 'names');
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-m-pane__body" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: t('COMMON:MSG_DETAILS_TABDETAILS_IMAGES_1') }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "co-table-container" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "table table--layout-fixed" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("colgroup", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("col", { className: "col-sm-10 col-xs-9" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("col", { className: "col-sm-2 col-xs-3" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_IMAGES_2')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, t('COMMON:MSG_DETAILS_TABDETAILS_IMAGES_3')))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, lodash__WEBPACK_IMPORTED_MODULE_0__["map"](images, (image, i) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "co-break-all co-select-to-copy" }, image.names.find((name) => !name.includes('@') && !name.includes('<none>')) || image.names[0]),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["units"].humanize(image.sizeBytes, 'binaryBytes', true).string || '-')))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeDetailsImages);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/NodeIPList.tsx":
/*!******************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/NodeIPList.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");



const NodeIPList = ({ ips, expand = false }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DetailPropertyList"], null, lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](ips, ['type']).map(({ type, address }) => address &&
    (expand || type === 'InternalIP') && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_console_shared__WEBPACK_IMPORTED_MODULE_2__["DetailPropertyListItem"], { key: `{${type}/${address}`, title: type.replace(/([a-z])([A-Z])/g, '$1 $2') }, address)))));
/* harmony default export */ __webpack_exports__["default"] = (NodeIPList);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/ActivityCard.tsx":
/*!***********************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/ActivityCard.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/activity-card/ActivityBody */ "./packages/console-shared/src/components/dashboard/activity-card/ActivityBody.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");












const eventsResource = {
    isList: true,
    kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["EventModel"].kind,
};
const nodeEventsFilter = (event, uid, kind, name) => {
    const { uid: objectUID, kind: objectKind, name: objectName } = (event === null || event === void 0 ? void 0 : event.involvedObject) || {};
    return objectUID === uid && objectKind === kind && objectName === name;
};
const RecentEvent = ({ node }) => {
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__["useK8sWatchResource"])(eventsResource);
    const { uid, name } = node.metadata;
    const eventsFilter = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](event => nodeEventsFilter(event, uid, _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["NodeModel"].kind, name), [uid, name]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_6__["RecentEventsBody"], { events: { data, loaded, loadError }, filter: eventsFilter });
};
const ActivityCard = () => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_10__["NodeDashboardContext"]);
    const eventsLink = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_8__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["NodeModel"], obj.metadata.name)}/events`;
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], { gradient: true, "data-test-id": "activity-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, t('SINGLE:MSG_OVERVIEW_MAIN_CARDACTIVITY_TITLE_1')),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: eventsLink }, t('SINGLE:MSG_OVERVIEW_MAIN_CARDACTIVITY_ALL_1'))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "co-project-dashboard__activity-body" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_activity_card_ActivityBody__WEBPACK_IMPORTED_MODULE_6__["OngoingActivityBody"], { loaded: true }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RecentEvent, { node: obj })))));
};
/* harmony default export */ __webpack_exports__["default"] = (ActivityCard);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/DetailsCard.tsx":
/*!**********************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/DetailsCard.tsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailsBody */ "./packages/console-shared/src/components/dashboard/details-card/DetailsBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/details-card/DetailItem */ "./packages/console-shared/src/components/dashboard/details-card/DetailItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/selectors/node */ "./packages/console-shared/src/selectors/node.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _NodeIPList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NodeIPList */ "./packages/console-app/src/components/nodes/NodeIPList.tsx");
/* harmony import */ var _NodeRoles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../NodeRoles */ "./packages/console-app/src/components/nodes/NodeRoles.tsx");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");














const DetailsCard = () => {
    var _a, _b;
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_13__["NodeDashboardContext"]);
    const detailsLink = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_10__["NodeModel"], obj.metadata.name)}/details`;
    const instanceType = (_a = obj.metadata.labels) === null || _a === void 0 ? void 0 : _a['beta.kubernetes.io/instance-type'];
    const zone = (_b = obj.metadata.labels) === null || _b === void 0 ? void 0 : _b['topology.kubernetes.io/zone'];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], { "data-test-id": "details-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Details"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: detailsLink }, "View all")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailsBody__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: "Node Name" }, obj.metadata.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: "Role" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeRoles__WEBPACK_IMPORTED_MODULE_12__["default"], { node: obj })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: "Instance Type", error: !instanceType }, instanceType),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: "Zone", error: !zone }, zone),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_details_card_DetailItem__WEBPACK_IMPORTED_MODULE_6__["default"], { isLoading: !obj, title: "Node Addresses" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeIPList__WEBPACK_IMPORTED_MODULE_11__["default"], { ips: Object(_console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_8__["getNodeAddresses"])(obj), expand: true }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DetailsCard);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/InventoryCard.tsx":
/*!************************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/InventoryCard.tsx ***!
  \************************************************************************************/
/*! exports provided: NodeInventoryItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeInventoryItem", function() { return NodeInventoryItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/InventoryItem */ "./packages/console-shared/src/components/dashboard/inventory-card/InventoryItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/inventory-card/utils */ "./packages/console-shared/src/components/dashboard/inventory-card/utils.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");












const NodeInventoryItem = ({ nodeName, model, mapper, }) => {
    const resource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        kind: model.crd ? Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_7__["referenceForModel"])(model) : model.kind,
        fieldSelector: `spec.nodeName=${nodeName}`,
        isList: true,
    }), [nodeName, model]);
    const [data, loaded, loadError] = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_8__["useK8sWatchResource"])(resource);
    const basePath = `${Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_10__["resourcePathFromModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_9__["NodeModel"], nodeName)}/pods`;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["ResourceInventoryItem"], { kind: model, isLoading: !loaded, error: !!loadError, resources: data, mapper: mapper, basePath: basePath }));
};
const InventoryCard = () => {
    var _a, _b, _c;
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_11__["NodeDashboardContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], { "data-test-id": "inventory-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Inventory")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NodeInventoryItem, { nodeName: obj.metadata.name, model: _console_internal_models__WEBPACK_IMPORTED_MODULE_9__["PodModel"], mapper: _console_shared_src_components_dashboard_inventory_card_utils__WEBPACK_IMPORTED_MODULE_6__["getPodStatusGroups"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_inventory_card_InventoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], { isLoading: !obj, title: "Image", titlePlural: "Images", count: (_b = (_a = obj.status) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.length, error: !((_c = obj.status) === null || _c === void 0 ? void 0 : _c.images) }))));
};
/* harmony default export */ __webpack_exports__["default"] = (InventoryCard);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/NodeAlerts.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/NodeAlerts.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertsBody */ "./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/AlertItem */ "./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/UtilizationItem */ "./packages/console-shared/src/components/dashboard/utilization-card/UtilizationItem.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/queries */ "./packages/console-app/src/components/nodes/node-dashboard/queries.ts");
/* harmony import */ var _console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/selectors/node */ "./packages/console-shared/src/selectors/node.ts");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_prometheus_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/prometheus-hook */ "./packages/console-shared/src/components/dashboard/utilization-card/prometheus-hook.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_app_src_components_nodes_node_dashboard_UtilizationCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/app/src/components/nodes/node-dashboard/UtilizationCard */ "./packages/console-app/src/components/nodes/node-dashboard/UtilizationCard.tsx");
/* harmony import */ var _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/shared/src/components/status/icons */ "./packages/console-shared/src/components/status/icons.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages */ "./packages/console-app/src/components/nodes/node-dashboard/messages.ts");
/* harmony import */ var _NodeHealth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NodeHealth */ "./packages/console-app/src/components/nodes/node-dashboard/NodeHealth.tsx");


















const LimitLink = ({ humanize, currentKey, totalKey, limitKey, requestedKey, limitState, requestedState, Popover, }) => {
    var _a;
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_3__["NodeDashboardContext"]);
    const nodeName = obj.metadata.name;
    const nodeIp = (_a = Object(_console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_7__["getNodeAddresses"])(obj).find((addr) => addr.type === 'InternalIP')) === null || _a === void 0 ? void 0 : _a.address;
    const [queries, resourceQuotaQueries] = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => [Object(_console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["getUtilizationQueries"])(nodeName, nodeIp), Object(_console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["getResourceQutoaQueries"])(nodeName)], [nodeIp, nodeName]);
    const [current, currentError, currentValue] = Object(_console_shared_src_components_dashboard_utilization_card_prometheus_hook__WEBPACK_IMPORTED_MODULE_8__["usePrometheusQuery"])(queries[currentKey], humanize);
    const [total, totalError, totalValue] = Object(_console_shared_src_components_dashboard_utilization_card_prometheus_hook__WEBPACK_IMPORTED_MODULE_8__["usePrometheusQuery"])(queries[totalKey], humanize);
    const [limit, limitError] = Object(_console_shared_src_components_dashboard_utilization_card_prometheus_hook__WEBPACK_IMPORTED_MODULE_8__["usePrometheusQuery"])(resourceQuotaQueries[limitKey], humanize);
    const [requested, requestedError] = Object(_console_shared_src_components_dashboard_utilization_card_prometheus_hook__WEBPACK_IMPORTED_MODULE_8__["usePrometheusQuery"])(resourceQuotaQueries[requestedKey], humanize);
    const available = currentValue && totalValue ? humanize(totalValue - currentValue).string : 'Not available';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Popover, { title: "See breakdown", nodeName: nodeName, nodeIp: nodeIp, current: currentError ? 'Not available' : current.string, total: totalError ? 'Not available' : total.string, limit: limitError ? 'Not available' : limit.string, requested: requestedError ? 'Not available' : requested.string, available: available, limitState: limitState, requestedState: requestedState, position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].right }));
};
const getMessage = (limitState, { limReqErr, limReqWarn, limErr, limWarn, reqWarn }) => {
    const { limit, requested } = limitState || {};
    if (!limitState || (limit === _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__["LIMIT_STATE"].OK && requested === _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__["LIMIT_STATE"].OK)) {
        return null;
    }
    if (limit === _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__["LIMIT_STATE"].ERROR) {
        return {
            Icon: _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_11__["RedResourcesFullIcon"],
            message: requested === _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__["LIMIT_STATE"].OK ? limErr : limReqErr,
        };
    }
    if (limit === _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__["LIMIT_STATE"].WARN) {
        return {
            Icon: _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_11__["YellowResourcesAlmostFullIcon"],
            message: requested === _console_shared_src_components_dashboard_utilization_card_UtilizationItem__WEBPACK_IMPORTED_MODULE_5__["LIMIT_STATE"].OK ? limWarn : limReqWarn,
        };
    }
    return {
        Icon: _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_11__["YellowResourcesAlmostFullIcon"],
        message: reqWarn,
    };
};
const HealthChecksLink = () => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_3__["NodeDashboardContext"]);
    const { name, namespace } = Object(_console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_7__["getNodeMachineNameAndNamespace"])(obj);
    const machineResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_13__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_14__["MachineModel"]),
        name,
        namespace,
    }), [name, namespace]);
    const machine = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_15__["useK8sWatchResource"])(machineResource);
    const healthChecks = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_15__["useK8sWatchResource"])(_NodeHealth__WEBPACK_IMPORTED_MODULE_17__["machineHealthChecksResource"]);
    const healthState = Object(_NodeHealth__WEBPACK_IMPORTED_MODULE_17__["getMachineHealth"])(obj, machine, healthChecks);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_12__["DashboardCardPopupLink"], { linkTitle: "See details", popupTitle: "Health Checks", className: "co-status-card__popup" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeHealth__WEBPACK_IMPORTED_MODULE_17__["HealthChecksPopup"], { conditions: healthState.conditions, machineHealthChecks: healthState.matchingHC })));
};
const NodeAlerts = () => {
    const { cpuLimit, memoryLimit, healthCheck } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_console_app_src_components_nodes_node_dashboard_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_3__["NodeDashboardContext"]);
    const cpuMessage = getMessage(cpuLimit, {
        limReqErr: _messages__WEBPACK_IMPORTED_MODULE_16__["CPU_LIMIT_REQ_ERROR"],
        limErr: _messages__WEBPACK_IMPORTED_MODULE_16__["CPU_LIMIT_ERROR"],
        limReqWarn: _messages__WEBPACK_IMPORTED_MODULE_16__["CPU_LIMIT_REQ_WARN"],
        limWarn: _messages__WEBPACK_IMPORTED_MODULE_16__["CPU_LIMIT_WARN"],
        reqWarn: _messages__WEBPACK_IMPORTED_MODULE_16__["CPU_REQ_WARN"],
    });
    const memoryMessage = getMessage(memoryLimit, {
        limReqErr: _messages__WEBPACK_IMPORTED_MODULE_16__["MEM_LIMIT_REQ_ERROR"],
        limErr: _messages__WEBPACK_IMPORTED_MODULE_16__["MEM_LIMIT_ERROR"],
        limReqWarn: _messages__WEBPACK_IMPORTED_MODULE_16__["MEM_LIMIT_REQ_WARN"],
        limWarn: _messages__WEBPACK_IMPORTED_MODULE_16__["MEM_LIMIT_WARN"],
        reqWarn: _messages__WEBPACK_IMPORTED_MODULE_16__["MEM_REQ_WARN"],
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertsBody__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        !!(healthCheck === null || healthCheck === void 0 ? void 0 : healthCheck.failingHealthCheck) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__["StatusItem"], { Icon: _console_shared_src_components_status_icons__WEBPACK_IMPORTED_MODULE_11__["YellowExclamationTriangleIcon"], message: _messages__WEBPACK_IMPORTED_MODULE_16__["CONDITIONS_WARNING"](healthCheck.reboot) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HealthChecksLink, null))),
        !!cpuMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__["StatusItem"], { Icon: cpuMessage.Icon, message: cpuMessage.message },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LimitLink, { humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["humanizeCpuCores"], currentKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].CPU_USAGE, totalKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].CPU_TOTAL, limitKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].POD_RESOURCE_LIMIT_CPU, requestedKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].POD_RESOURCE_REQUEST_CPU, limitState: cpuLimit === null || cpuLimit === void 0 ? void 0 : cpuLimit.limit, requestedState: cpuLimit === null || cpuLimit === void 0 ? void 0 : cpuLimit.requested, Popover: _console_app_src_components_nodes_node_dashboard_UtilizationCard__WEBPACK_IMPORTED_MODULE_10__["CPUPopover"] }))),
        !!memoryMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_AlertItem__WEBPACK_IMPORTED_MODULE_4__["StatusItem"], { Icon: memoryMessage.Icon, message: memoryMessage.message },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LimitLink, { humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_9__["humanizeBinaryBytes"], currentKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].MEMORY_USAGE, totalKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].MEMORY_TOTAL, limitKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].POD_RESOURCE_LIMIT_MEMORY, requestedKey: _console_app_src_components_nodes_node_dashboard_queries__WEBPACK_IMPORTED_MODULE_6__["NodeQueries"].POD_RESOURCE_REQUEST_MEMORY, limitState: memoryLimit === null || memoryLimit === void 0 ? void 0 : memoryLimit.limit, requestedState: memoryLimit === null || memoryLimit === void 0 ? void 0 : memoryLimit.requested, Popover: _console_app_src_components_nodes_node_dashboard_UtilizationCard__WEBPACK_IMPORTED_MODULE_10__["MemoryPopover"] })))));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeAlerts);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboard.tsx":
/*!************************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/NodeDashboard.tsx ***!
  \************************************************************************************/
/*! exports provided: ActionType, initialState, reducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/Dashboard */ "./packages/console-shared/src/components/dashboard/Dashboard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/DashboardGrid */ "./packages/console-shared/src/components/dashboard/DashboardGrid.tsx");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _InventoryCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InventoryCard */ "./packages/console-app/src/components/nodes/node-dashboard/InventoryCard.tsx");
/* harmony import */ var _DetailsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailsCard */ "./packages/console-app/src/components/nodes/node-dashboard/DetailsCard.tsx");
/* harmony import */ var _StatusCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StatusCard */ "./packages/console-app/src/components/nodes/node-dashboard/StatusCard.tsx");
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActivityCard */ "./packages/console-app/src/components/nodes/node-dashboard/ActivityCard.tsx");
/* harmony import */ var _UtilizationCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UtilizationCard */ "./packages/console-app/src/components/nodes/node-dashboard/UtilizationCard.tsx");










const leftCards = [{ Card: _DetailsCard__WEBPACK_IMPORTED_MODULE_6__["default"] }, { Card: _InventoryCard__WEBPACK_IMPORTED_MODULE_5__["default"] }];
const mainCards = [{ Card: _StatusCard__WEBPACK_IMPORTED_MODULE_7__["default"] }, { Card: _UtilizationCard__WEBPACK_IMPORTED_MODULE_9__["default"] }];
const rightCards = [{ Card: _ActivityCard__WEBPACK_IMPORTED_MODULE_8__["default"] }];
var ActionType;
(function (ActionType) {
    ActionType["CPU_LIMIT"] = "CPU_LIMIT";
    ActionType["MEMORY_LIMIT"] = "MEMORY_LIMIT";
    ActionType["HEALTH_CHECK"] = "HEALTH_CHECK";
    ActionType["OBJ"] = "OBJ";
})(ActionType || (ActionType = {}));
const initialState = (obj) => ({
    obj,
    cpuLimit: undefined,
    memoryLimit: undefined,
    healthCheck: undefined,
});
const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.CPU_LIMIT: {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](action.payload, state.cpuLimit)) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { cpuLimit: action.payload });
        }
        case ActionType.MEMORY_LIMIT: {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](action.payload, state.memoryLimit)) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { memoryLimit: action.payload });
        }
        case ActionType.HEALTH_CHECK: {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"](action.payload, state.healthCheck)) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { healthCheck: action.payload });
        }
        case ActionType.OBJ: {
            if (action.payload === state.obj) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { obj: action.payload });
        }
        default:
            return state;
    }
};
const NodeDashboard = ({ obj }) => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](reducer, initialState(obj));
    if (obj !== state.obj) {
        dispatch({ type: ActionType.OBJ, payload: obj });
    }
    const setCPULimit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((payload) => dispatch({ type: ActionType.CPU_LIMIT, payload }), []);
    const setMemoryLimit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((payload) => dispatch({ type: ActionType.MEMORY_LIMIT, payload }), []);
    const setHealthCheck = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((payload) => dispatch({ type: ActionType.HEALTH_CHECK, payload }), []);
    const context = {
        obj,
        cpuLimit: state.cpuLimit,
        memoryLimit: state.memoryLimit,
        healthCheck: state.healthCheck,
        setCPULimit,
        setMemoryLimit,
        setHealthCheck,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_4__["NodeDashboardContext"].Provider, { value: context },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_DashboardGrid__WEBPACK_IMPORTED_MODULE_3__["default"], { mainCards: mainCards, leftCards: leftCards, rightCards: rightCards }))));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeDashboard);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx ***!
  \*******************************************************************************************/
/*! exports provided: NodeDashboardContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeDashboardContext", function() { return NodeDashboardContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NodeDashboardContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
    setCPULimit: () => { },
    setMemoryLimit: () => { },
    setHealthCheck: () => { },
});


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/NodeHealth.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/NodeHealth.tsx ***!
  \*********************************************************************************/
/*! exports provided: HealthChecksPopup, machineHealthChecksResource, getMachineHealth, HealthChecksItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthChecksPopup", function() { return HealthChecksPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "machineHealthChecksResource", function() { return machineHealthChecksResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMachineHealth", function() { return getMachineHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthChecksItem", function() { return HealthChecksItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthBody */ "./packages/console-shared/src/components/dashboard/status-card/HealthBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/HealthItem */ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/internal/components/utils/k8s-watch-hook */ "./public/components/utils/k8s-watch-hook.ts");
/* harmony import */ var _console_internal_components_utils_details_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/components/utils/details-page */ "./public/components/utils/details-page.tsx");
/* harmony import */ var _console_internal_module_k8s_label_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/module/k8s/label-selector */ "./public/module/k8s/label-selector.js");
/* harmony import */ var _console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/shared/src/components/dashboard/status-card/StatusPopup */ "./packages/console-shared/src/components/dashboard/status-card/StatusPopup.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _NodeStatus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../NodeStatus */ "./packages/console-app/src/components/nodes/NodeStatus.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages */ "./packages/console-app/src/components/nodes/node-dashboard/messages.ts");
/* harmony import */ var _node_health_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node-health.scss */ "./packages/console-app/src/components/nodes/node-dashboard/node-health.scss");
/* harmony import */ var _node_health_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_node_health_scss__WEBPACK_IMPORTED_MODULE_17__);


















const HealthChecksPopup = ({ conditions = [], machineHealthChecks, }) => {
    let conditionFailing = false;
    let reboot = false;
    const grouppedConditions = Object.values(lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"](conditions.sort((a, b) => a.type.localeCompare(b.type)), (c) => c.type)).map((cds) => {
        var _a, _b, _c;
        const failing = cds.some((c) => c.failing);
        if (failing) {
            conditionFailing = true;
            reboot =
                ((_c = (_b = (_a = machineHealthChecks === null || machineHealthChecks === void 0 ? void 0 : machineHealthChecks[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c['machine.openshift.io/remediation-strategy']) === 'external-baremetal';
        }
        return {
            title: cds[0].type,
            value: failing ? 'Failing' : 'Okay',
            icon: failing
                ? _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["healthStateMapping"][_console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].WARNING].icon
                : _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["healthStateMapping"][_console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].OK].icon,
        };
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        `${_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineHealthCheckModel"].labelPlural} automatically remediate node health issues.`,
        !!(machineHealthChecks === null || machineHealthChecks === void 0 ? void 0 : machineHealthChecks.length) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_12__["StatusPopupSection"], { firstColumn: Object(_console_internal_components_utils_details_page__WEBPACK_IMPORTED_MODULE_10__["pluralize"])(machineHealthChecks.length, _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineHealthCheckModel"].label, _console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineHealthCheckModel"].labelPlural, false) }, machineHealthChecks.map(({ metadata }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_12__["default"], { key: metadata.uid },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_13__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineHealthCheckModel"]), name: metadata.name, namespace: metadata.namespace, className: "co-status-popup__title" })))))),
        !!conditions.length && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_12__["StatusPopupSection"], { firstColumn: "Conditions", secondColumn: "Status" }, grouppedConditions.map((c) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_StatusPopup__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, c, { key: c.title }), c.title))))),
        conditionFailing && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", isInline: true, title: `${reboot ? 'Reboot' : 'Reprovision'} pending`, className: "co-node-health__popup-alert" }, Object(_messages__WEBPACK_IMPORTED_MODULE_16__["CONDITIONS_WARNING"])(reboot))),
        (machineHealthChecks === null || machineHealthChecks === void 0 ? void 0 : machineHealthChecks.length) > 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], { variant: "warning", isInline: true, title: "Multiple resources", className: "co-node-health__popup-alert" }, `Only one ${_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineHealthCheckModel"].label} resource should match this node.`))));
};
const machineHealthChecksResource = {
    isList: true,
    kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineHealthCheckModel"]),
};
const isConditionFailing = (node, { type, status, timeout }) => {
    const nodeCondition = node.status.conditions.find((c) => c.type === type && c.status === status);
    if (!nodeCondition) {
        return false;
    }
    const transitionTime = new Date(nodeCondition.lastTransitionTime).getTime();
    const currentTime = new Date().getTime();
    const withTO = transitionTime + 1000 * parseInt(timeout, 10);
    return withTO < currentTime;
};
const getMachineHealth = (node, machine, healthChecks) => {
    const [mData, mLoaded, mLoadError] = machine;
    const [hcData, hcLoaded, hcLoadError] = healthChecks;
    if (mLoadError || hcLoadError) {
        return {
            state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].NOT_AVAILABLE,
        };
    }
    if (!mLoaded || !hcLoaded) {
        return {
            state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].LOADING,
        };
    }
    const matchingHC = hcData.filter((hc) => {
        var _a;
        const selector = new _console_internal_module_k8s_label_selector__WEBPACK_IMPORTED_MODULE_11__["LabelSelector"](((_a = hc.spec) === null || _a === void 0 ? void 0 : _a.selector) || {});
        return selector.matches(mData);
    });
    if (!matchingHC.length) {
        return {
            state: _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].NOT_AVAILABLE,
            noIcon: true,
            details: 'Not configured',
        };
    }
    let failingConditions = 0;
    const conditions = lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"](matchingHC.map((hc) => hc.spec.unhealthyConditions.map((c) => {
        const failing = isConditionFailing(node, c);
        if (failing) {
            failingConditions++;
        }
        return Object.assign(Object.assign({}, c), { failing });
    })));
    return {
        state: failingConditions || matchingHC.length > 1 ? _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].WARNING : _console_shared_src_components_dashboard_status_card_states__WEBPACK_IMPORTED_MODULE_5__["HealthState"].OK,
        details: matchingHC.length > 1
            ? 'Multiple resources'
            : failingConditions
                ? `${Object(_console_internal_components_utils_details_page__WEBPACK_IMPORTED_MODULE_10__["pluralize"])(failingConditions, 'condition')} failing`
                : `${Object(_console_internal_components_utils_details_page__WEBPACK_IMPORTED_MODULE_10__["pluralize"])(conditions.length, 'condition')} passing`,
        conditions,
        matchingHC,
    };
};
const HealthChecksItem = () => {
    const { obj, setHealthCheck } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_14__["NodeDashboardContext"]);
    const { name, namespace } = Object(_console_shared__WEBPACK_IMPORTED_MODULE_6__["getNodeMachineNameAndNamespace"])(obj);
    const machineResource = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_8__["referenceForModel"])(_console_internal_models__WEBPACK_IMPORTED_MODULE_7__["MachineModel"]),
        name,
        namespace,
    }), [name, namespace]);
    const machine = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__["useK8sWatchResource"])(machineResource);
    const healthChecks = Object(_console_internal_components_utils_k8s_watch_hook__WEBPACK_IMPORTED_MODULE_9__["useK8sWatchResource"])(machineHealthChecksResource);
    const healthState = getMachineHealth(obj, machine, healthChecks);
    let failingHealthCheck = false;
    let reboot = false;
    lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](healthState.conditions, (c) => {
        var _a, _b, _c, _d;
        if (c.failing) {
            failingHealthCheck = true;
            reboot =
                ((_d = (_c = (_b = (_a = healthState.matchingHC) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.annotations) === null || _d === void 0 ? void 0 : _d['machine.openshift.io/remediation-strategy']) === 'external-baremetal';
            return false;
        }
        return true;
    });
    setHealthCheck({
        failingHealthCheck,
        reboot,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthItem__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ title: "Health Checks", popupTitle: "Health Checks" }, healthState),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HealthChecksPopup, { conditions: healthState.conditions, machineHealthChecks: healthState.matchingHC })));
};
const NodeHealth = () => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_14__["NodeDashboardContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_status_card_HealthBody__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], { className: "co-overview-status__health", gutter: "md" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeStatus__WEBPACK_IMPORTED_MODULE_15__["default"], { node: obj, className: "co-node-health__status" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GalleryItem"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HealthChecksItem, null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (NodeHealth);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/StatusCard.tsx":
/*!*********************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/StatusCard.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardBody */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardBody.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var _NodeHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NodeHealth */ "./packages/console-app/src/components/nodes/node-dashboard/NodeHealth.tsx");
/* harmony import */ var _NodeAlerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NodeAlerts */ "./packages/console-app/src/components/nodes/node-dashboard/NodeAlerts.tsx");








const StatusCard = () => {
    const { obj } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_5__["NodeDashboardContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], { gradient: true, "data-test-id": "status-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Status")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardBody__WEBPACK_IMPORTED_MODULE_2__["default"], { isLoading: !obj },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeHealth__WEBPACK_IMPORTED_MODULE_6__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NodeAlerts__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (StatusCard);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/UtilizationCard.tsx":
/*!**************************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/UtilizationCard.tsx ***!
  \**************************************************************************************/
/*! exports provided: CPUPopover, MemoryPopover, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPUPopover", function() { return CPUPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryPopover", function() { return MemoryPopover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/shared/src/components/dashboard/duration-hook */ "./packages/console-shared/src/components/dashboard/duration-hook.ts");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/TopConsumerPopover */ "./packages/console-shared/src/components/dashboard/utilization-card/TopConsumerPopover.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCard */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCard.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardHeader */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardHeader.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/shared/src/components/dashboard/dashboard-card/DashboardCardTitle */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardTitle.tsx");
/* harmony import */ var _console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared/src/components/dashboard/utilization-card/UtilizationBody */ "./packages/console-shared/src/components/dashboard/utilization-card/UtilizationBody.tsx");
/* harmony import */ var _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared/src/graph-helper/data-utils */ "./packages/console-shared/src/graph-helper/data-utils.ts");
/* harmony import */ var _console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @console/shared/src/selectors/node */ "./packages/console-shared/src/selectors/node.ts");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @console/internal/components/dashboard/dashboards-page/cluster-dashboard/utilization-card */ "./public/components/dashboard/dashboards-page/cluster-dashboard/utilization-card.tsx");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./queries */ "./packages/console-app/src/components/nodes/node-dashboard/queries.ts");
/* harmony import */ var _NodeDashboardContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeDashboardContext */ "./packages/console-app/src/components/nodes/node-dashboard/NodeDashboardContext.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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
















const getPodConsumers = (query, nodeName) => ({
    query,
    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_10__["PodModel"],
    fieldSelector: `spec.nodeName=${nodeName}`,
    metric: 'pod',
});
const getProjectConsumers = (query) => ({
    query,
    model: _console_internal_models__WEBPACK_IMPORTED_MODULE_10__["ProjectModel"],
    metric: 'namespace',
});
const CPUPopover = (_a) => {
    var { nodeName, nodeIp, current, title, position = _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].top } = _a, rest = __rest(_a, ["nodeName", "nodeIp", "current", "title", "position"]);
    const consumers = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const queries = Object(_queries__WEBPACK_IMPORTED_MODULE_13__["getTopConsumerQueries"])(nodeIp);
        return [getProjectConsumers(queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PROJECTS_BY_CPU]), getPodConsumers(queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PODS_BY_CPU], nodeName)];
    }, [nodeIp, nodeName]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["default"], { current: title, title: "CPU", consumers: consumers, humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeCpuCores"], position: position },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["LimitsBody"], Object.assign({}, rest, { current: current }))));
};
const MemoryPopover = (_a) => {
    var { nodeName, nodeIp, current, title, position = _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].top } = _a, rest = __rest(_a, ["nodeName", "nodeIp", "current", "title", "position"]);
    const consumers = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const queries = Object(_queries__WEBPACK_IMPORTED_MODULE_13__["getTopConsumerQueries"])(nodeIp);
        return [getProjectConsumers(queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PROJECTS_BY_MEMORY]), getPodConsumers(queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PODS_BY_MEMORY], nodeName)];
    }, [nodeIp, nodeName]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["default"], { current: title, title: "Memory", consumers: consumers, humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeBinaryBytes"], position: position },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["LimitsBody"], Object.assign({}, rest, { current: current }))));
};
const UtilizationCard = () => {
    var _a;
    const [timestamps, setTimestamps] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();
    const [duration, setDuration] = Object(_console_shared_src_components_dashboard_duration_hook__WEBPACK_IMPORTED_MODULE_2__["useMetricDuration"])();
    const { obj, setCPULimit, setMemoryLimit } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_NodeDashboardContext__WEBPACK_IMPORTED_MODULE_14__["NodeDashboardContext"]);
    const { t } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_15__["useTranslation"])();
    const nodeName = obj.metadata.name;
    const nodeIp = (_a = Object(_console_shared_src_selectors_node__WEBPACK_IMPORTED_MODULE_9__["getNodeAddresses"])(obj).find(addr => addr.type === 'InternalIP')) === null || _a === void 0 ? void 0 : _a.address;
    const [queries, multilineQueries, resourceQuotaQueries, consumers] = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        const topConsumerQueries = Object(_queries__WEBPACK_IMPORTED_MODULE_13__["getTopConsumerQueries"])(nodeIp);
        return [
            Object(_queries__WEBPACK_IMPORTED_MODULE_13__["getUtilizationQueries"])(nodeName, nodeIp),
            Object(_queries__WEBPACK_IMPORTED_MODULE_13__["getMultilineQueries"])(nodeName, nodeIp),
            Object(_queries__WEBPACK_IMPORTED_MODULE_13__["getResourceQutoaQueries"])(nodeName),
            [
                [getProjectConsumers(topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PROJECTS_BY_FILESYSTEM]), getPodConsumers(topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PODS_BY_FILESYSTEM], nodeName)],
                [getProjectConsumers(topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PROJECTS_BY_NETWORK_IN]), getPodConsumers(topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PODS_BY_NETWORK_IN], nodeName)],
                [getProjectConsumers(topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PROJECTS_BY_NETWORK_OUT]), getPodConsumers(topConsumerQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].PODS_BY_NETWORK_OUT], nodeName)],
            ],
        ];
    }, [nodeIp, nodeName]);
    const cpuPopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CPUPopover, Object.assign({}, props, { title: props.current, nodeIp: nodeIp, nodeName: nodeName })), [nodeIp, nodeName]);
    const memPopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]((props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MemoryPopover, Object.assign({}, props, { title: props.current, nodeIp: nodeIp, nodeName: nodeName })), [nodeIp, nodeName]);
    const filesystemPopover = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Filesystem", current: current, consumers: consumers[0], humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeBinaryBytes"], position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].top }), [consumers]);
    const networkPopoverIn = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Network In", current: current, consumers: consumers[1], humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeDecimalBytesPerSec"], position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].top }), [consumers]);
    const networkPopoverOut = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](({ current }) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_TopConsumerPopover__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Network Out", current: current, consumers: consumers[2], humanize: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeDecimalBytesPerSec"], position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["PopoverPosition"].top }), [consumers]);
    const networkPopovers = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => [networkPopoverIn, networkPopoverOut], [networkPopoverIn, networkPopoverOut]);
    let durationItems = {
        ['ONE_HR']: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_1_1'),
        ['SIX_HR']: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_6_1'),
        ['TWENTY_FOUR_HR']: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_24_1'),
    };
    let durationValues = {
        [t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_1_1')]: '1 Hour',
        [t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_6_1')]: '6 Hours',
        [t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_24_1')]: '24 Hours',
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        durationItems = {
            ['ONE_HR']: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_1_1'),
            ['SIX_HR']: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_6_1'),
            ['TWENTY_FOUR_HR']: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_24_1'),
        };
        durationValues = {
            [t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_1_1')]: '1 Hour',
            [t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_6_1')]: '6 Hours',
            [t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_24_1')]: '24 Hours',
        };
    }, [duration]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCard__WEBPACK_IMPORTED_MODULE_4__["default"], { "data-test-id": "utilization-card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_dashboard_card_DashboardCardTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Utilization"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], { items: durationItems, onChange: setDuration, selectedKey: durationValues[duration], title: duration })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_shared_src_components_dashboard_utilization_card_UtilizationBody__WEBPACK_IMPORTED_MODULE_7__["default"], { timestamps: timestamps },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_12__["PrometheusUtilizationItem"], { title: t('COMMON:MSG_DETAILS_TABNODE_TABLEHEADER_3'), humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeCpuCores"], utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].CPU_USAGE], totalQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].CPU_TOTAL], limitQuery: resourceQuotaQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].POD_RESOURCE_LIMIT_CPU], requestQuery: resourceQuotaQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].POD_RESOURCE_REQUEST_CPU], TopConsumerPopover: cpuPopover, duration: duration, setTimestamps: setTimestamps, setLimitReqState: setCPULimit }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_12__["PrometheusUtilizationItem"], { title: t('COMMON:MSG_DETAILS_TABNODE_TABLEHEADER_4'), humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeBinaryBytes"], utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].MEMORY_USAGE], totalQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].MEMORY_TOTAL], limitQuery: resourceQuotaQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].POD_RESOURCE_LIMIT_MEMORY], requestQuery: resourceQuotaQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].POD_RESOURCE_REQUEST_MEMORY], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_8__["ByteDataTypes"].BinaryBytes, TopConsumerPopover: memPopover, duration: duration, setLimitReqState: setMemoryLimit }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_12__["PrometheusUtilizationItem"], { title: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_81'), humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeBinaryBytes"], utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].FILESYSTEM_USAGE], totalQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].FILESYSTEM_TOTAL], byteDataType: _console_shared_src_graph_helper_data_utils__WEBPACK_IMPORTED_MODULE_8__["ByteDataTypes"].BinaryBytes, TopConsumerPopover: filesystemPopover, duration: duration }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_12__["PrometheusMultilineUtilizationItem"], { title: t('SINGLE:MSG_OVERVIEW_MAIN_CARDCLUSTERUTILIZATION_NETWORK_1'), humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeDecimalBytesPerSec"], queries: multilineQueries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].NETWORK_UTILIZATION], TopConsumerPopovers: networkPopovers, duration: duration }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_dashboard_dashboards_page_cluster_dashboard_utilization_card__WEBPACK_IMPORTED_MODULE_12__["PrometheusUtilizationItem"], { title: t('COMMON:MSG_DETAILS_TABDETAILS_DETAILS_78'), humanizeValue: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_11__["humanizeNumber"], utilizationQuery: queries[_queries__WEBPACK_IMPORTED_MODULE_13__["NodeQueries"].POD_COUNT], duration: duration }))));
};
/* harmony default export */ __webpack_exports__["default"] = (UtilizationCard);


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/messages.ts":
/*!******************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/messages.ts ***!
  \******************************************************************************/
/*! exports provided: CONDITIONS_WARNING, CPU_LIMIT_REQ_ERROR, CPU_LIMIT_ERROR, CPU_LIMIT_WARN, CPU_LIMIT_REQ_WARN, CPU_REQ_WARN, MEM_LIMIT_REQ_ERROR, MEM_LIMIT_ERROR, MEM_LIMIT_WARN, MEM_LIMIT_REQ_WARN, MEM_REQ_WARN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONDITIONS_WARNING", function() { return CONDITIONS_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPU_LIMIT_REQ_ERROR", function() { return CPU_LIMIT_REQ_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPU_LIMIT_ERROR", function() { return CPU_LIMIT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPU_LIMIT_WARN", function() { return CPU_LIMIT_WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPU_LIMIT_REQ_WARN", function() { return CPU_LIMIT_REQ_WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPU_REQ_WARN", function() { return CPU_REQ_WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEM_LIMIT_REQ_ERROR", function() { return MEM_LIMIT_REQ_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEM_LIMIT_ERROR", function() { return MEM_LIMIT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEM_LIMIT_WARN", function() { return MEM_LIMIT_WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEM_LIMIT_REQ_WARN", function() { return MEM_LIMIT_REQ_WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEM_REQ_WARN", function() { return MEM_REQ_WARN; });
const CONDITIONS_WARNING = (reboot = false) => `One or more health check remediation conditions have been met. The node will ${reboot ? 'reboot' : 'reprovision'} automatically.`;
const CPU_LIMIT_REQ_ERROR = 'This node’s CPU resources are overcommitted. The total CPU resource limit of all pods exceeds the node’s total capacity. The total CPU requested is also approaching the node’s capacity. Pod performance will be throttled under high load, and new pods may not be schedulable on this node.';
const CPU_LIMIT_ERROR = 'This node’s CPU resources are overcommitted. The total CPU resource limit of all pods exceeds the node’s total capacity. Pod performance will be throttled under high load.';
const CPU_LIMIT_WARN = 'The total CPU resource limit of all pods on this node is approaching the node’s capacity. Pod performance may be throttled under high load.';
const CPU_LIMIT_REQ_WARN = 'The total CPU resource limit and amount requested by all pods on this node is approaching the node’s capacity. Pod performance may be throttled under high load, and new pods may not be schedulable.';
const CPU_REQ_WARN = 'The total CPU requested by all pods on this node is approaching the node’s capacity. New pods may not be schedulable on this node.';
const MEM_LIMIT_REQ_ERROR = 'This node’s memory resources are overcommitted. The total memory resource limit of all pods exceeds the node’s total capacity. The total memory requested is also approaching the node’s capacity. Pods will be terminated under high load, and new pods may not be schedulable on this node.';
const MEM_LIMIT_ERROR = 'This node’s memory resources are overcommitted. The total memory resource limit of all pods exceeds the node’s total capacity. Pods will be terminated under high load.';
const MEM_LIMIT_WARN = 'The total memory resource limit of all pods on this node is approaching the node’s capacity. Pods may be terminated if the limit is reached under high load.';
const MEM_LIMIT_REQ_WARN = 'The total memory resource limit and amount requested by all pods on this node is approaching the node’s capacity. Pods may be terminated if the limit is reached under high load, and new pods may not be schedulable on this node.';
const MEM_REQ_WARN = 'The total memory requested by all pods on this node is approaching the node’s capacity. New pods may not be schedulable on this node.';


/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/node-health.scss":
/*!***********************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/node-health.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./packages/console-app/src/components/nodes/node-dashboard/queries.ts":
/*!*****************************************************************************!*\
  !*** ./packages/console-app/src/components/nodes/node-dashboard/queries.ts ***!
  \*****************************************************************************/
/*! exports provided: NodeQueries, getMultilineQueries, getResourceQutoaQueries, getUtilizationQueries, getTopConsumerQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeQueries", function() { return NodeQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultilineQueries", function() { return getMultilineQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceQutoaQueries", function() { return getResourceQutoaQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUtilizationQueries", function() { return getUtilizationQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopConsumerQueries", function() { return getTopConsumerQueries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

var NodeQueries;
(function (NodeQueries) {
    NodeQueries["CPU_USAGE"] = "CPU_USAGE";
    NodeQueries["CPU_TOTAL"] = "CPU_TOTAL";
    NodeQueries["MEMORY_USAGE"] = "MEMORY_USAGE";
    NodeQueries["MEMORY_TOTAL"] = "MEMORY_TOTAL";
    NodeQueries["POD_COUNT"] = "POD_COUNT";
    NodeQueries["PODS_BY_CPU"] = "PODS_BY_CPU";
    NodeQueries["PODS_BY_MEMORY"] = "PODS_BY_MEMORY";
    NodeQueries["PODS_BY_FILESYSTEM"] = "PODS_BY_FILESYSTEM";
    NodeQueries["PODS_BY_NETWORK_IN"] = "PODS_BY_NETWORK_IN";
    NodeQueries["PODS_BY_NETWORK_OUT"] = "PODS_BY_NETWORK_OUT";
    NodeQueries["PROJECTS_BY_CPU"] = "PROJECTS_BY_CPU";
    NodeQueries["PROJECTS_BY_MEMORY"] = "PROJECTS_BY_MEMORY";
    NodeQueries["PROJECTS_BY_FILESYSTEM"] = "PROJECTS_BY_FILESYSTEM";
    NodeQueries["PROJECTS_BY_NETWORK_IN"] = "PROJECTS_BY_NETWORK_IN";
    NodeQueries["PROJECTS_BY_NETWORK_OUT"] = "PROJECTS_BY_NETWORK_OUT";
    NodeQueries["FILESYSTEM_USAGE"] = "FILESYSTEM_USAGE";
    NodeQueries["FILESYSTEM_TOTAL"] = "FILESYSTEM_TOTAL";
    NodeQueries["NETWORK_IN_UTILIZATION"] = "NETWORK_IN_UTILIZATION";
    NodeQueries["NETWORK_OUT_UTILIZATION"] = "NETWORK_OUT_UTILIZATION";
    NodeQueries["NETWORK_UTILIZATION"] = "NETWORK_UTILIZATION";
    NodeQueries["POD_RESOURCE_LIMIT_CPU"] = "POD_RESOURCE_LIMIT_CPU";
    NodeQueries["POD_RESOURCE_LIMIT_MEMORY"] = "POD_RESOURCE_LIMIT_MEMORY";
    NodeQueries["POD_RESOURCE_REQUEST_CPU"] = "POD_RESOURCE_REQUEST_CPU";
    NodeQueries["POD_RESOURCE_REQUEST_MEMORY"] = "POD_RESOURCE_REQUEST_MEMORY";
})(NodeQueries || (NodeQueries = {}));
// const queries = {
//   [NodeQueries.CPU_USAGE]: _.template(`instance:node_cpu:rate:sum{instance='<%= node %>'}`),
//   [NodeQueries.CPU_TOTAL]: _.template(`instance:node_num_cpu:sum{instance='<%= node %>'}`),
//   [NodeQueries.MEMORY_USAGE]: _.template(`node_memory_MemTotal_bytes{instance='<%= node %>'} - node_memory_MemAvailable_bytes{instance='<%= node %>'}`),
//   [NodeQueries.MEMORY_TOTAL]: _.template(`node_memory_MemTotal_bytes{instance='<%= node %>'}`),
//   [NodeQueries.POD_COUNT]: _.template(`kubelet_running_pod_count{instance=~'<%= ipAddress %>:.*'}`),
//   [NodeQueries.FILESYSTEM_USAGE]: _.template(`instance:node_filesystem_usage:sum{instance='<%= node %>'}`),
//   [NodeQueries.FILESYSTEM_TOTAL]: _.template(`node_filesystem_size_bytes{instance='<%= node %>'}`),
//   [NodeQueries.NETWORK_IN_UTILIZATION]: _.template(`instance:node_network_receive_bytes:rate:sum{instance='<%= node %>'}`),
//   [NodeQueries.NETWORK_OUT_UTILIZATION]: _.template(`instance:node_network_transmit_bytes:rate:sum{instance='<%= node %>'}`),
// };
const queries = {
    [NodeQueries.CPU_USAGE]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_cpu:rate:sum{instance='<%= ipAddress %>'}`),
    [NodeQueries.CPU_TOTAL]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_num_cpu:sum{instance='<%= ipAddress %>'}`),
    [NodeQueries.MEMORY_USAGE]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`node_memory_MemTotal_bytes{instance='<%= ipAddress %>'} - node_memory_MemAvailable_bytes{instance='<%= ipAddress %>'}`),
    [NodeQueries.MEMORY_TOTAL]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`node_memory_MemTotal_bytes{instance='<%= ipAddress %>'}`),
    [NodeQueries.POD_COUNT]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`kubelet_running_pods{instance=~'<%= podCountIp %>'}`),
    [NodeQueries.FILESYSTEM_USAGE]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_filesystem_usage:sum{instance='<%= ipAddress %>'}`),
    [NodeQueries.FILESYSTEM_TOTAL]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`node_filesystem_size_bytes{instance='<%= ipAddress %>'}`),
    [NodeQueries.NETWORK_IN_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_network_receive_bytes:rate:sum{instance='<%= ipAddress %>'}`),
    [NodeQueries.NETWORK_OUT_UTILIZATION]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`instance:node_network_transmit_bytes:rate:sum{instance='<%= ipAddress %>'}`),
};
const top25Queries = {
    [NodeQueries.PODS_BY_CPU]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_cpu_usage_seconds_total{container="",pod!="", instance=~'<%= ipAddress %>:.*'}[5m])) by (pod, namespace)))`),
    [NodeQueries.PODS_BY_MEMORY]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(avg_over_time(container_memory_working_set_bytes{container="",pod!="",instance=~'<%= ipAddress %>:.*'}[5m])) BY (pod, namespace)))`),
    [NodeQueries.PODS_BY_FILESYSTEM]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(container_fs_usage_bytes{instance=~'<%= ipAddress %>:.*'}) BY (pod, namespace)))`),
    [NodeQueries.PODS_BY_NETWORK_IN]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_network_receive_bytes_total{ container="POD", pod!= "", instance=~'<%= ipAddress %>:.*'}[5m])) BY (pod, namespace)))`),
    [NodeQueries.PODS_BY_NETWORK_OUT]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_network_transmit_bytes_total{ container="POD", pod!= "", instance=~'<%= ipAddress %>:.*'}[5m])) BY (pod, namespace)))`),
    [NodeQueries.PROJECTS_BY_CPU]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_cpu_usage_seconds_total{container="",pod!="", instance=~'<%= ipAddress %>:.*'}[5m])) by (namespace)))`),
    [NodeQueries.PROJECTS_BY_MEMORY]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(avg_over_time(container_memory_working_set_bytes{container="",pod!="",instance=~'<%= ipAddress %>:.*'}[5m])) BY (namespace)))`),
    [NodeQueries.PROJECTS_BY_FILESYSTEM]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(container_fs_usage_bytes{instance=~'<%= ipAddress %>:.*'}) BY (namespace)))`),
    [NodeQueries.PROJECTS_BY_NETWORK_IN]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_network_receive_bytes_total{ container="POD", pod!= "", instance=~'<%= ipAddress %>:.*'}[5m])) BY (namespace)))`),
    [NodeQueries.PROJECTS_BY_NETWORK_OUT]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`topk(25, sort_desc(sum(rate(container_network_transmit_bytes_total{ container="POD", pod!= "", instance=~'<%= ipAddress %>:.*'}[5m])) BY (namespace)))`),
};
const resourceQuotaQueries = {
    [NodeQueries.POD_RESOURCE_LIMIT_CPU]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(
      max by (namespace, pod, container) (
          kube_pod_container_resource_limits_cpu_cores{node='<%= node %>', job="kube-state-metrics"}
      ) * on(namespace, pod) group_left() max by (namespace, pod) (
          kube_pod_status_phase{phase=~"Pending|Running"} == 1
      )
    )`),
    [NodeQueries.POD_RESOURCE_LIMIT_MEMORY]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(
      max by (namespace, pod, container) (
          kube_pod_container_resource_limits_memory_bytes{node='<%= node %>', job="kube-state-metrics"}
      ) * on(namespace, pod) group_left() max by (namespace, pod) (
          kube_pod_status_phase{phase=~"Pending|Running"} == 1
      )
    )`),
    [NodeQueries.POD_RESOURCE_REQUEST_CPU]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(
      max by (namespace, pod, container) (
          kube_pod_container_resource_requests_cpu_cores{node='<%= node %>', job="kube-state-metrics"}
      ) * on(namespace, pod) group_left() max by (namespace, pod) (
          kube_pod_status_phase{phase=~"Pending|Running"} == 1
      )
    )`),
    [NodeQueries.POD_RESOURCE_REQUEST_MEMORY]: lodash__WEBPACK_IMPORTED_MODULE_0__["template"](`sum(
      max by (namespace, pod, container) (
          kube_pod_container_resource_requests_memory_bytes{node='<%= node %>', job="kube-state-metrics"}
      ) * on(namespace, pod) group_left() max by (namespace, pod) (
          kube_pod_status_phase{phase=~"Pending|Running"} == 1
      )
    )`),
};
// export const getMultilineQueries = (node: string): { [key: string]: QueryWithDescription[] } => ({
//   [NodeQueries.NETWORK_UTILIZATION]: [
//     {
//       query: queries[NodeQueries.NETWORK_IN_UTILIZATION]({ node }),
//       desc: 'In',
//     },
//     {
//       query: queries[NodeQueries.NETWORK_OUT_UTILIZATION]({ node }),
//       desc: 'Out',
//     },
//   ],
// });
const getMultilineQueries = (node, ipAddress) => {
    ipAddress = ipAddress + ':9100';
    return {
        [NodeQueries.NETWORK_UTILIZATION]: [
            {
                query: queries[NodeQueries.NETWORK_IN_UTILIZATION]({ ipAddress }),
                desc: 'In',
            },
            {
                query: queries[NodeQueries.NETWORK_OUT_UTILIZATION]({ ipAddress }),
                desc: 'Out',
            },
        ],
    };
};
const getResourceQutoaQueries = (node) => ({
    [NodeQueries.POD_RESOURCE_LIMIT_CPU]: resourceQuotaQueries[NodeQueries.POD_RESOURCE_LIMIT_CPU]({
        node,
    }),
    [NodeQueries.POD_RESOURCE_LIMIT_MEMORY]: resourceQuotaQueries[NodeQueries.POD_RESOURCE_LIMIT_MEMORY]({ node }),
    [NodeQueries.POD_RESOURCE_REQUEST_CPU]: resourceQuotaQueries[NodeQueries.POD_RESOURCE_REQUEST_CPU]({
        node,
    }),
    [NodeQueries.POD_RESOURCE_REQUEST_MEMORY]: resourceQuotaQueries[NodeQueries.POD_RESOURCE_REQUEST_MEMORY]({ node }),
});
// export const getUtilizationQueries = (node: string, ipAddress: string) => ({
//   [NodeQueries.CPU_USAGE]: queries[NodeQueries.CPU_USAGE]({ node }),
//   [NodeQueries.CPU_TOTAL]: queries[NodeQueries.CPU_TOTAL]({ node }),
//   [NodeQueries.MEMORY_USAGE]: queries[NodeQueries.MEMORY_USAGE]({ node }),
//   [NodeQueries.MEMORY_TOTAL]: queries[NodeQueries.MEMORY_TOTAL]({ node }),
//   [NodeQueries.POD_COUNT]: queries[NodeQueries.POD_COUNT]({ ipAddress }),
//   [NodeQueries.FILESYSTEM_USAGE]: queries[NodeQueries.FILESYSTEM_USAGE]({
//     node,
//   }),
//   [NodeQueries.FILESYSTEM_TOTAL]: queries[NodeQueries.FILESYSTEM_TOTAL]({
//     node,
//   }),
// });
const getUtilizationQueries = (node, ipAddress) => {
    let podCountIp = ipAddress + ':10250';
    ipAddress = ipAddress + ':9100';
    return {
        [NodeQueries.CPU_USAGE]: queries[NodeQueries.CPU_USAGE]({ ipAddress }),
        [NodeQueries.CPU_TOTAL]: queries[NodeQueries.CPU_TOTAL]({ ipAddress }),
        [NodeQueries.MEMORY_USAGE]: queries[NodeQueries.MEMORY_USAGE]({ ipAddress }),
        [NodeQueries.MEMORY_TOTAL]: queries[NodeQueries.MEMORY_TOTAL]({ ipAddress }),
        [NodeQueries.POD_COUNT]: queries[NodeQueries.POD_COUNT]({ podCountIp }),
        [NodeQueries.FILESYSTEM_USAGE]: queries[NodeQueries.FILESYSTEM_USAGE]({
            ipAddress,
        }),
        [NodeQueries.FILESYSTEM_TOTAL]: queries[NodeQueries.FILESYSTEM_TOTAL]({
            ipAddress,
        }),
    };
};
const getTopConsumerQueries = (ipAddress) => ({
    [NodeQueries.PODS_BY_CPU]: top25Queries[NodeQueries.PODS_BY_CPU]({ ipAddress }),
    [NodeQueries.PODS_BY_MEMORY]: top25Queries[NodeQueries.PODS_BY_MEMORY]({ ipAddress }),
    [NodeQueries.PODS_BY_FILESYSTEM]: top25Queries[NodeQueries.PODS_BY_FILESYSTEM]({ ipAddress }),
    [NodeQueries.PODS_BY_NETWORK_IN]: top25Queries[NodeQueries.PODS_BY_NETWORK_IN]({ ipAddress }),
    [NodeQueries.PODS_BY_NETWORK_OUT]: top25Queries[NodeQueries.PODS_BY_NETWORK_OUT]({
        ipAddress,
    }),
    [NodeQueries.PROJECTS_BY_CPU]: top25Queries[NodeQueries.PROJECTS_BY_CPU]({ ipAddress }),
    [NodeQueries.PROJECTS_BY_MEMORY]: top25Queries[NodeQueries.PROJECTS_BY_MEMORY]({ ipAddress }),
    [NodeQueries.PROJECTS_BY_FILESYSTEM]: top25Queries[NodeQueries.PROJECTS_BY_FILESYSTEM]({
        ipAddress,
    }),
    [NodeQueries.PROJECTS_BY_NETWORK_IN]: top25Queries[NodeQueries.PROJECTS_BY_NETWORK_IN]({
        ipAddress,
    }),
    [NodeQueries.PROJECTS_BY_NETWORK_OUT]: top25Queries[NodeQueries.PROJECTS_BY_NETWORK_OUT]({
        ipAddress,
    }),
});


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx":
/*!************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/AlertItem.tsx ***!
  \************************************************************************************/
/*! exports provided: StatusItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusItem", function() { return StatusItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _console_internal_components_notification_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/notification-drawer */ "./public/components/notification-drawer.tsx");
/* harmony import */ var _console_internal_components_utils_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils/timestamp */ "./public/components/utils/timestamp.tsx");
/* harmony import */ var _console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/monitoring */ "./public/components/monitoring.tsx");
/* harmony import */ var _status_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../status/icons */ "./packages/console-shared/src/components/status/icons.tsx");
/* harmony import */ var _alert_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-utils */ "./packages/console-shared/src/components/dashboard/status-card/alert-utils.ts");







const getSeverityIcon = (severity) => {
    switch (severity) {
        case 'critical':
            return _status_icons__WEBPACK_IMPORTED_MODULE_5__["RedExclamationCircleIcon"];
        case 'warning':
        default:
            return _status_icons__WEBPACK_IMPORTED_MODULE_5__["YellowExclamationTriangleIcon"];
    }
};
const StatusItem = ({ Icon, timestamp, message, children }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-icon co-dashboard-icon" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, null)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-text" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-message" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-health-card__alert-item-timestamp co-status-card__health-item-text text-secondary" }, timestamp && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils_timestamp__WEBPACK_IMPORTED_MODULE_3__["Timestamp"], { simple: true, timestamp: timestamp })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-status-card__health-item-text co-break-word" }, message)),
            children && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-status-card__alert-item-more" }, children))));
};
const AlertItem = ({ alert }) => {
    const action = _console_internal_components_notification_drawer__WEBPACK_IMPORTED_MODULE_2__["alertActions"].get(alert.rule.name);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusItem, { Icon: getSeverityIcon(Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertSeverity"])(alert)), timestamp: Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertTime"])(alert), message: Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertDescription"])(alert) || Object(_alert_utils__WEBPACK_IMPORTED_MODULE_6__["getAlertMessage"])(alert) }, action ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: action.path }, action.text)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: Object(_console_internal_components_monitoring__WEBPACK_IMPORTED_MODULE_4__["alertURL"])(alert, alert.rule.id) }, "View details"))));
};
/* harmony default export */ __webpack_exports__["default"] = (AlertItem);


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/AlertsBody.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");



const AlertsBody = ({ error = false, children }) => (error || !!react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).length) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-card__body--no-padding co-status-card__alerts-body co-dashboard-card__body--top-margin" }, error ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateVariant"].full, className: "co-status-card__alerts-msg" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], { className: "co-status-card__alerts-icon", icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["UnknownIcon"] }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "Alerts could not be loaded."))) : (children)));
/* harmony default export */ __webpack_exports__["default"] = (AlertsBody);


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx":
/*!*************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/status-card/HealthItem.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-card/DashboardCardLink */ "./packages/console-shared/src/components/dashboard/dashboard-card/DashboardCardLink.tsx");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states */ "./packages/console-shared/src/components/dashboard/status-card/states.tsx");




const HealthItemIcon = ({ state }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-icon" }, (_states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][state] || _states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][_states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].UNKNOWN]).icon));
const HealthItem = react__WEBPACK_IMPORTED_MODULE_0__["memo"](({ className, state, title, details, popupTitle, noIcon = false, children }) => {
    const detailMessage = details || (_states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][state] || _states__WEBPACK_IMPORTED_MODULE_3__["healthStateMapping"][_states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].UNKNOWN]).message;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('co-status-card__health-item', className) },
        state === _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "skeleton-health" })) : (!noIcon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HealthItemIcon, { state: state })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "co-dashboard-text--small co-status-card__health-item-text" }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).length && state !== _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dashboard_card_DashboardCardLink__WEBPACK_IMPORTED_MODULE_2__["DashboardCardPopupLink"], { linkTitle: title, popupTitle: popupTitle, className: "co-status-card__popup" }, children)) : (title)),
            state !== _states__WEBPACK_IMPORTED_MODULE_3__["HealthState"].LOADING && detailMessage && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-dashboard-text--small co-status-card__health-item-text co-status-card__health-item-subtitle" }, detailMessage)))));
});
/* harmony default export */ __webpack_exports__["default"] = (HealthItem);


/***/ }),

/***/ "./packages/console-shared/src/components/dashboard/utilization-card/prometheus-hook.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/console-shared/src/components/dashboard/utilization-card/prometheus-hook.ts ***!
  \**********************************************************************************************/
/*! exports provided: usePrometheusQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrometheusQuery", function() { return usePrometheusQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _console_internal_actions_dashboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/actions/dashboards */ "./public/actions/dashboards.ts");
/* harmony import */ var _console_internal_reducers_dashboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/reducers/dashboards */ "./public/reducers/dashboards.ts");
/* harmony import */ var _console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/graphs/utils */ "./public/components/graphs/utils.ts");

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: FIXME missing exports due to out-of-sync @types/react-redux version




const usePrometheusQuery = (query, humanize) => {
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        dispatch(Object(_console_internal_actions_dashboards__WEBPACK_IMPORTED_MODULE_2__["watchPrometheusQuery"])(query));
        return () => {
            dispatch(Object(_console_internal_actions_dashboards__WEBPACK_IMPORTED_MODULE_2__["stopWatchPrometheusQuery"])(query));
        };
    }, [dispatch, query]);
    const queryResult = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({ dashboards }) => dashboards.getIn([_console_internal_reducers_dashboards__WEBPACK_IMPORTED_MODULE_3__["RESULTS_TYPE"].PROMETHEUS, query]));
    const results = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
        var _a;
        if (!queryResult || !queryResult.get('data')) {
            return [{}, null, null];
        }
        const value = (_a = Object(_console_internal_components_graphs_utils__WEBPACK_IMPORTED_MODULE_4__["getInstantVectorStats"])(queryResult.get('data'))[0]) === null || _a === void 0 ? void 0 : _a.y;
        return [humanize(value), queryResult.get('loadError'), value];
    }, [queryResult, humanize]);
    return results;
};


/***/ })

}]);
//# sourceMappingURL=node~node-detail-14d59dfcd732a559f844.js.map