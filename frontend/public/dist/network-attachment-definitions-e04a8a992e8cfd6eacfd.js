(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-attachment-definitions"],{

/***/ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinition.tsx":
/*!*************************************************************************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinition.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: NetworkAttachmentDefinitionsList, NetworkAttachmentDefinitionsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkAttachmentDefinitionsList", function() { return NetworkAttachmentDefinitionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkAttachmentDefinitionsPage", function() { return NetworkAttachmentDefinitionsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/internal/models */ "./public/models/index.ts");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/network-attachment-definition-plugin/src/models/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../selectors */ "./packages/network-attachment-definition-plugin/src/selectors/index.ts");










const { common } = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].factory;
const menuActions = [...common];
const tableColumnClasses = [
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-6'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-4', 'col-md-4', 'hidden-sm', 'hidden-xs'),
    classnames__WEBPACK_IMPORTED_MODULE_1__('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-6'),
    _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Kebab"].columnClass,
];
const NetworkAttachmentDefinitionsHeader = () => Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["dimensifyHeader"])([
    {
        title: 'Name',
        sortField: 'name',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
    },
    {
        title: 'Namespace',
        sortField: 'namespace',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
    },
    {
        title: 'Type',
        sortField: 'type',
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__["sortable"]],
    },
    {
        title: '',
    },
], tableColumnClasses);
const NetworkAttachmentDefinitionsRow = ({ obj: { name, namespace, type, metadata, netAttachDef }, index, key, style, }) => {
    const dimensify = Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["dimensifyRow"])(tableColumnClasses);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableRow"], { id: metadata.uid, index: index, trKey: key, style: style },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"]), name: name, namespace: namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceLink"], { kind: _console_internal_models__WEBPACK_IMPORTED_MODULE_5__["NamespaceModel"].kind, name: namespace, title: namespace })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify() }, type || react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary" }, "Not available")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["TableData"], { className: dimensify(true) },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["ResourceKebab"], { actions: menuActions, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"]), resource: netAttachDef }))));
};
const getNetAttachDefsData = (nadList) => {
    return nadList
        ? nadList.map((netAttachDef) => {
            const configJSON = Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["getConfigAsJSON"])(netAttachDef);
            return {
                netAttachDef,
                metadata: { uid: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getUID"])(netAttachDef) },
                configJSON,
                // for sorting
                name: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getName"])(netAttachDef),
                namespace: Object(_console_shared__WEBPACK_IMPORTED_MODULE_7__["getNamespace"])(netAttachDef),
                type: Object(_selectors__WEBPACK_IMPORTED_MODULE_9__["getType"])(configJSON),
            };
        })
        : [];
};
const NetworkAttachmentDefinitionsList = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["Table"], { data: getNetAttachDefsData(props.data), "aria-label": _models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"].labelPlural, Header: NetworkAttachmentDefinitionsHeader, Row: NetworkAttachmentDefinitionsRow, virtualize: true, loaded: props.loaded, label: props.label }));
};
NetworkAttachmentDefinitionsList.displayName = 'NetworkAttachmentDefinitionsList';
const NetworkAttachmentDefinitionsPage = (props) => {
    var _a, _b;
    const namespace = props.namespace || ((_b = (_a = props.match) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.ns) || 'default';
    const createProps = {
        to: `/k8s/ns/${namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"])}/~new/form`,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_3__["ListPage"], Object.assign({}, props, { title: _models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"].labelPlural, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"]), ListComponent: NetworkAttachmentDefinitionsList, filterLabel: props.filterLabel, canCreate: true, createProps: createProps })));
};
NetworkAttachmentDefinitionsPage.displayName = 'NetworkAttachmentDefinitionsPage';
/* harmony default export */ __webpack_exports__["default"] = (NetworkAttachmentDefinitionsPage);


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionCreateYaml.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionCreateYaml.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _console_internal_components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/error */ "./public/components/error.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_internal_kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/kinds */ "./public/kinds.ts");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./packages/network-attachment-definition-plugin/src/constants/index.ts");
/* harmony import */ var _models_templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/templates */ "./packages/network-attachment-definition-plugin/src/models/templates/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models */ "./packages/network-attachment-definition-plugin/src/models/index.ts");









const CreateNetAttachDefYAMLConnected = Object(_console_internal_kinds__WEBPACK_IMPORTED_MODULE_4__["connectToPlural"])(({ match, kindsInFlight, kindObj }) => {
    if (!kindObj) {
        if (kindsInFlight) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["LoadingBox"], null);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_error__WEBPACK_IMPORTED_MODULE_2__["ErrorPage404"], null);
    }
    const template = _models_templates__WEBPACK_IMPORTED_MODULE_7__["NetworkAttachmentDefinitionsYAMLTemplates"].getIn(['default']);
    const obj = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoad"])(template);
    obj.kind = kindObj.kind;
    obj.metadata = obj.metadata || {};
    obj.metadata.namespace = match.params.ns || 'default';
    const netAttachDefTemplatePath = (o) => Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["resourcePathFromModel"])(_models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"], Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getName"])(o), Object(_console_shared__WEBPACK_IMPORTED_MODULE_5__["getNamespace"])(o));
    const DroppableEditYAML = () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! @console/internal/components/droppable-edit-yaml */ "./public/components/droppable-edit-yaml.tsx")).then((c) => c.DroppableEditYAML);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["AsyncComponent"], { loader: DroppableEditYAML, obj: obj, create: true, kind: kindObj.kind, resourceObjPath: netAttachDefTemplatePath, header: _constants__WEBPACK_IMPORTED_MODULE_6__["NET_ATTACH_DEF_HEADER_LABEL"] }));
});
/* harmony default export */ __webpack_exports__["default"] = ((props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CreateNetAttachDefYAMLConnected, Object.assign({}, props, { plural: _models__WEBPACK_IMPORTED_MODULE_8__["NetworkAttachmentDefinitionModel"].plural }))));


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionDetails.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionDetails.tsx ***!
  \********************************************************************************************************************************************/
/*! exports provided: getBasicID, prefixedID, DetailsItem, NetAttachDefinitionSummary, NetworkAttachmentDefinitionDetails, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasicID", function() { return getBasicID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixedID", function() { return prefixedID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsItem", function() { return DetailsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetAttachDefinitionSummary", function() { return NetAttachDefinitionSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkAttachmentDefinitionDetails", function() { return NetworkAttachmentDefinitionDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/shared/src */ "./packages/console-shared/src/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./packages/network-attachment-definition-plugin/src/selectors/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./packages/network-attachment-definition-plugin/src/constants/index.ts");






const NET_ATTACH_DEF_DETAILS_HEADING = 'Network Attachment Definition Details';
const getBasicID = (entity) => `${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["getNamespace"])(entity)}-${Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["getName"])(entity)}`;
const prefixedID = (idPrefix, id) => idPrefix && id ? `${idPrefix}-${id}` : null;
// FIXME: Use DetailsItem from common console utils.
const DetailsItem = ({ title, isNotAvail = false, idValue, valueClassName, children, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, title),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", { id: idValue, className: valueClassName }, isNotAvail ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "text-secondary" }, "Not available") : children)));
};
const NetAttachDefinitionSummary = ({ netAttachDef, }) => {
    const name = Object(_console_shared_src__WEBPACK_IMPORTED_MODULE_3__["getName"])(netAttachDef);
    const description = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getDescription"])(netAttachDef);
    const type = Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getType"])(Object(_selectors__WEBPACK_IMPORTED_MODULE_4__["getConfigAsJSON"])(netAttachDef));
    const id = getBasicID(netAttachDef);
    // FIXME: This should use ResourceSummary like all other details pages.
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DetailsItem, { title: "Name", idValue: prefixedID(id, 'name'), isNotAvail: !name }, name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DetailsItem, { title: "Description", idValue: prefixedID(id, 'description'), isNotAvail: !description }, description),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DetailsItem, { title: "Type", idValue: prefixedID(id, 'type'), isNotAvail: !type }, lodash__WEBPACK_IMPORTED_MODULE_1__["get"](_constants__WEBPACK_IMPORTED_MODULE_5__["networkTypes"], [type], null) || type)));
};
const NetworkAttachmentDefinitionDetails = (props) => {
    const { obj: netAttachDef } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["StatusBox"], { data: netAttachDef, loaded: !!netAttachDef },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["ScrollToTopOnMount"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_2__["SectionHeading"], { text: NET_ATTACH_DEF_DETAILS_HEADING }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-sm-6" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NetAttachDefinitionSummary, { netAttachDef: netAttachDef }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (NetworkAttachmentDefinitionDetails);


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionDetailsPage.tsx":
/*!************************************************************************************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionDetailsPage.tsx ***!
  \************************************************************************************************************************************************/
/*! exports provided: NetworkAttachmentDefinitionsDetailsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkAttachmentDefinitionsDetailsPage", function() { return NetworkAttachmentDefinitionsDetailsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @console/internal/components/factory */ "./public/components/factory/index.tsx");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.. */ "./packages/network-attachment-definition-plugin/src/index.ts");
/* harmony import */ var _NetworkAttachmentDefinitionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkAttachmentDefinitionDetails */ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionDetails.tsx");






const { common } = _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].factory;
const menuActions = [
    ..._console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["Kebab"].getExtensionsActionsForKind(___WEBPACK_IMPORTED_MODULE_4__["NetworkAttachmentDefinitionModel"]),
    ...common,
];
const NetworkAttachmentDefinitionsDetailsPage = (props) => {
    const overviewPage = {
        href: '',
        name: 'Details',
        component: _NetworkAttachmentDefinitionDetails__WEBPACK_IMPORTED_MODULE_5__["NetworkAttachmentDefinitionDetails"],
    };
    const pages = [overviewPage, _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_3__["navFactory"].editYaml()];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_factory__WEBPACK_IMPORTED_MODULE_2__["DetailsPage"], Object.assign({}, props, { pages: pages, kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_1__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_4__["NetworkAttachmentDefinitionModel"]), menuActions: menuActions })));
};
/* harmony default export */ __webpack_exports__["default"] = (NetworkAttachmentDefinitionsDetailsPage);


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionsForm.tsx":
/*!******************************************************************************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkAttachmentDefinitionsForm.tsx ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var patternfly_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! patternfly-react */ "./node_modules/patternfly-react/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @console/internal/module/k8s */ "./public/module/k8s/index.ts");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _console_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @console/shared */ "./packages/console-shared/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../.. */ "./packages/network-attachment-definition-plugin/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./packages/network-attachment-definition-plugin/src/constants/index.ts");
/* harmony import */ var _NetworkTypeOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkTypeOptions */ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkTypeOptions.tsx");












const buildConfig = (name, networkType, typeParamsData) => {
    const config = {
        name,
        type: networkType,
        cniVersion: '0.3.1',
    };
    let ipam = {};
    try {
        ipam = JSON.parse(lodash__WEBPACK_IMPORTED_MODULE_3__["get"](typeParamsData, 'ipam.value', {}));
    }
    catch (e) {
        console.error(e); // eslint-disable-line no-console
    }
    if (networkType === 'cnv-bridge') {
        // cnv-bridge should not define type on root
        delete config.type;
        const vlan = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](typeParamsData, 'vlanTagNum.value', '');
        config.plugins = [
            {
                type: 'cnv-bridge',
                bridge: lodash__WEBPACK_IMPORTED_MODULE_3__["get"](typeParamsData, 'bridge.value', ''),
                vlan: lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](vlan) ? undefined : vlan,
                ipam,
            },
            { type: 'cnv-tuning' },
        ];
    }
    else if (networkType === 'sriov') {
        config.ipam = ipam;
    }
    return config;
};
const getResourceName = (networkType, typeParamsData) => {
    return networkType === 'cnv-bridge'
        ? `bridge.network.kubevirt.io/${lodash__WEBPACK_IMPORTED_MODULE_3__["get"](typeParamsData, 'bridge.value', '')}`
        : `openshift.io/${lodash__WEBPACK_IMPORTED_MODULE_3__["get"](typeParamsData, 'resourceName.value', '')}`;
};
const createNetAttachDef = (e, description, name, networkType, typeParamsData, namespace, setError, setLoading) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const config = JSON.stringify(buildConfig(name, networkType, typeParamsData));
    const annotations = {
        'k8s.v1.cni.cncf.io/resourceName': getResourceName(networkType, typeParamsData),
    };
    if (description !== '') {
        annotations.description = description;
    }
    const newNetAttachDef = {
        apiVersion: `${___WEBPACK_IMPORTED_MODULE_9__["NetworkAttachmentDefinitionModel"].apiGroup}/${___WEBPACK_IMPORTED_MODULE_9__["NetworkAttachmentDefinitionModel"].apiVersion}`,
        kind: ___WEBPACK_IMPORTED_MODULE_9__["NetworkAttachmentDefinitionModel"].kind,
        metadata: {
            name,
            namespace,
            annotations: {
                'k8s.v1.cni.cncf.io/resourceName': getResourceName(networkType, typeParamsData),
                description: lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](description) ? undefined : description,
            },
        },
        spec: {
            config,
        },
    };
    Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["k8sCreate"])(___WEBPACK_IMPORTED_MODULE_9__["NetworkAttachmentDefinitionModel"], newNetAttachDef)
        .then(() => {
        setLoading(false);
        _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["history"].push(Object(_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["resourcePathFromModel"])(___WEBPACK_IMPORTED_MODULE_9__["NetworkAttachmentDefinitionModel"], name, namespace));
    })
        .catch((err) => {
        setError(err);
        setLoading(false);
        console.error(err); // eslint-disable-line no-console
    });
};
const handleNameChange = (enteredName, fieldErrors, setName, setFieldErrors) => {
    const fieldErrorsUpdate = Object.assign({}, fieldErrors);
    delete fieldErrorsUpdate.nameValidationMsg;
    const nameValidation = Object(_console_shared__WEBPACK_IMPORTED_MODULE_8__["validateDNS1123SubdomainValue"])(enteredName);
    if (lodash__WEBPACK_IMPORTED_MODULE_3__["get"](nameValidation, 'type', null) === _console_shared__WEBPACK_IMPORTED_MODULE_8__["ValidationErrorType"].Error) {
        fieldErrorsUpdate.nameValidationMsg = nameValidation.message;
    }
    setName(enteredName);
    setFieldErrors(fieldErrorsUpdate);
};
const getNetworkTypes = (hasSriovNetNodePolicyCRD, hasHyperConvergedCRD) => {
    const types = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_constants__WEBPACK_IMPORTED_MODULE_10__["networkTypes"]);
    if (!hasSriovNetNodePolicyCRD) {
        delete types.sriov;
    }
    if (!hasHyperConvergedCRD) {
        delete types['cnv-bridge'];
    }
    return types;
};
const allTypeParamFieldsValid = (typeParamsData) => {
    return !lodash__WEBPACK_IMPORTED_MODULE_3__["some"](typeParamsData, ({ validationMsg }) => validationMsg !== null);
};
const allRequiredFieldsFilled = (name, networkType, typeParamsData) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](name) || networkType === null) {
        return false;
    }
    const allParamsForType = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](_constants__WEBPACK_IMPORTED_MODULE_10__["networkTypeParams"], [networkType]);
    const requiredKeys = lodash__WEBPACK_IMPORTED_MODULE_3__["keys"](allParamsForType).filter((key) => lodash__WEBPACK_IMPORTED_MODULE_3__["get"](allParamsForType, [key, 'required'], false));
    return lodash__WEBPACK_IMPORTED_MODULE_3__["every"](requiredKeys, (key) => {
        const value = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](typeParamsData, [key, 'value']);
        return !lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](value);
    });
};
const validateForm = (fieldErrors, name, networkType, typeParamsData, setError) => {
    setError(null);
    const nameIsValid = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](fieldErrors, 'nameValidationMsg', '') === '';
    return (nameIsValid &&
        allRequiredFieldsFilled(name, networkType, typeParamsData) &&
        allTypeParamFieldsValid(typeParamsData));
};
const NetworkAttachmentDefinitionFormBase = (props) => {
    const { loaded, match, resources, hasSriovNetNodePolicyCRD, hasHyperConvergedCRD } = props;
    const namespace = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](match, 'params.ns', 'default');
    const sriovNetNodePoliciesData = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](resources, 'sriovnetworknodepolicies.data', []);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](hasSriovNetNodePolicyCRD && !loaded);
    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [description, setDescription] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
    const [networkType, setNetworkType] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [typeParamsData, setTypeParamsData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
    const [fieldErrors, setFieldErrors] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
    const networkTypeDropdownItems = getNetworkTypes(hasSriovNetNodePolicyCRD, hasHyperConvergedCRD);
    const formIsValid = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => validateForm(fieldErrors, name, networkType, typeParamsData, setError), [fieldErrors, name, networkType, typeParamsData]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => setLoading(hasSriovNetNodePolicyCRD && !loaded), [
        hasSriovNetNodePolicyCRD,
        resources,
        loaded,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__body co-m-pane__form" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "co-m-pane__heading co-m-pane__heading--baseline" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__name" }, "Create Network Attachment Definition"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-m-pane__heading-link" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: `/k8s/ns/${namespace}/${Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_9__["NetworkAttachmentDefinitionModel"])}/~new`, id: "yaml-link", replace: true }, "Edit YAML"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["Form"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { fieldId: "basic-settings-name", validationState: fieldErrors.nameValidationMsg ? 'error' : null },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "network-attachment-definition-name" }, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["FormControl"], { type: "text", bsClass: "pf-c-form-control", placeholder: name, id: "network-attachment-definition-name", onChange: (e) => handleNameChange(e.target.value, fieldErrors, setName, setFieldErrors), value: name }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["HelpBlock"], null, fieldErrors.nameValidationMsg || null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { fieldId: "basic-settings-description" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { htmlFor: "network-attachment-definition-description" }, "Description"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["FormControl"], { type: "text", bsClass: "pf-c-form-control", id: "network-attachment-definition-description", onChange: (e) => setDescription(e.target.value), value: description })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], { fieldId: "basic-settings-network-type" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "control-label co-required", htmlFor: "network-type" }, "Network Type"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], { id: "network-type", title: "Network Type", items: networkTypeDropdownItems, dropDownClassName: "dropdown--full-width", selectedKey: networkType, onChange: (e) => setNetworkType(e), disabled: lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](networkTypeDropdownItems) })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "co-form-subsection" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NetworkTypeOptions__WEBPACK_IMPORTED_MODULE_11__["default"], { networkType: networkType, setTypeParamsData: setTypeParamsData, sriovNetNodePoliciesData: sriovNetNodePoliciesData, typeParamsData: typeParamsData })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["ButtonBar"], { errorMessage: error ? error.message : '', inProgress: loading },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ActionGroup"], { className: "pf-c-form" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { id: "save-changes", isDisabled: !formIsValid, onClick: (e) => createNetAttachDef(e, description, name, networkType, typeParamsData, namespace, setError, setLoading), type: "submit", variant: "primary" }, "Create"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], { id: "cancel", onClick: _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["history"].goBack, type: "button", variant: "secondary" }, "Cancel"))))));
};
const mapStateToProps = ({ k8s }) => {
    const kindsInFlight = k8s.getIn(['RESOURCES', 'inFlight']);
    const k8sModels = k8s.getIn(['RESOURCES', 'models']);
    return {
        // FIXME: These should be feature flags.
        // TODO: Change back when ready to add back SR-IOV support
        // hasSriovNetNodePolicyCRD:
        //   !kindsInFlight && !!k8sModels.get(referenceForModel(SriovNetworkNodePolicyModel)),
        hasSriovNetNodePolicyCRD: false,
        hasHyperConvergedCRD: !kindsInFlight && !!k8sModels.get(Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_9__["HyperConvergedModel"])),
    };
};
const networkAttachmentDefinitionFormResources = [
    {
        model: ___WEBPACK_IMPORTED_MODULE_9__["SriovNetworkNodePolicyModel"],
        kind: Object(_console_internal_module_k8s__WEBPACK_IMPORTED_MODULE_6__["referenceForModel"])(___WEBPACK_IMPORTED_MODULE_9__["SriovNetworkNodePolicyModel"]),
        isList: true,
        prop: 'sriovnetworknodepolicies',
        optional: true,
    },
];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)((props) => {
    const { hasSriovNetNodePolicyCRD } = props;
    const resources = hasSriovNetNodePolicyCRD ? networkAttachmentDefinitionFormResources : [];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_7__["Firehose"], { resources: resources },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NetworkAttachmentDefinitionFormBase, Object.assign({}, props))));
}));


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkTypeOptions.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/components/network-attachment-definitions/NetworkTypeOptions.tsx ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var patternfly_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! patternfly-react */ "./node_modules/patternfly-react/dist/esm/index.js");
/* harmony import */ var _console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @console/internal/components/utils */ "./public/components/utils/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./packages/network-attachment-definition-plugin/src/constants/index.ts");






const handleTypeParamChange = (paramKey, event, elemType, networkType, setTypeParamsData, typeParamsData) => {
    const paramsUpdate = Object.assign({}, typeParamsData);
    if (elemType === _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].CHECKBOX) {
        paramsUpdate[paramKey] = { value: event.target.checked };
    }
    else if (event.target) {
        paramsUpdate[paramKey] = { value: event.target.value };
    }
    else {
        paramsUpdate[paramKey] = { value: event };
    }
    lodash__WEBPACK_IMPORTED_MODULE_2__["forOwn"](paramsUpdate, (value, key) => {
        if (key === paramKey) {
            const validation = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](_constants__WEBPACK_IMPORTED_MODULE_5__["networkTypeParams"][networkType], [key, 'validation'], null);
            paramsUpdate[key].validationMsg = validation ? validation(paramsUpdate) : null;
        }
    });
    setTypeParamsData(paramsUpdate);
};
const getSriovNetNodePolicyResourceNames = (sriovNetNodePoliciesData) => {
    const resourceNames = {};
    sriovNetNodePoliciesData.forEach((policy) => {
        const resourceName = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](policy, 'spec.resourceName', '');
        if (resourceName !== '') {
            resourceNames[resourceName] = resourceName;
        }
    });
    return resourceNames;
};
/* harmony default export */ __webpack_exports__["default"] = ((props) => {
    const { networkType, setTypeParamsData, sriovNetNodePoliciesData, typeParamsData } = props;
    const params = networkType && _constants__WEBPACK_IMPORTED_MODULE_5__["networkTypeParams"][networkType];
    if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](params)) {
        return null;
    }
    if (networkType === 'sriov') {
        params.resourceName.values = getSriovNetNodePolicyResourceNames(sriovNetNodePoliciesData);
    }
    const dynamicContent = lodash__WEBPACK_IMPORTED_MODULE_2__["map"](params, (parameter, key) => {
        const validationMsg = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](typeParamsData, [key, 'validationMsg'], null);
        const elemType = lodash__WEBPACK_IMPORTED_MODULE_2__["get"](parameter, 'type');
        let children;
        switch (elemType) {
            case _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].TEXTAREA:
                children = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('control-label', {
                            'co-required': parameter.required,
                        }) }, lodash__WEBPACK_IMPORTED_MODULE_2__["get"](parameter, 'name', key)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["FormControl"], { componentClass: _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].TEXTAREA, bsClass: "pf-c-form-control", value: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](typeParamsData, `${key}.value`, ''), onChange: (event) => handleTypeParamChange(key, event, _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].TEXTAREA, networkType, setTypeParamsData, typeParamsData) }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["HelpBlock"], null, validationMsg || null)));
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].CHECKBOX:
                children = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkbox" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "create-storage-class-form__checkbox", onChange: (event) => handleTypeParamChange(key, event, _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].CHECKBOX, networkType, setTypeParamsData, typeParamsData), checked: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](typeParamsData, `${key}.value`, false), id: `network-type-params-${key}-checkbox` }),
                            lodash__WEBPACK_IMPORTED_MODULE_2__["get"](parameter, 'name', key))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["HelpBlock"], null, validationMsg || null)));
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].DROPDOWN:
                children = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('control-label', { 'co-required': parameter.required }) }, lodash__WEBPACK_IMPORTED_MODULE_2__["get"](parameter, 'name', key)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_console_internal_components_utils__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], { title: parameter.hintText, items: parameter.values, dropDownClassName: "dropdown--full-width", selectedKey: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](typeParamsData, `${key}.value`), onChange: (event) => handleTypeParamChange(key, event, _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].DROPDOWN, networkType, setTypeParamsData, typeParamsData) }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["HelpBlock"], null, validationMsg || null)));
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].TEXT:
            default:
                children = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: classnames__WEBPACK_IMPORTED_MODULE_1__('control-label', {
                            'co-required': parameter.required,
                        }) }, lodash__WEBPACK_IMPORTED_MODULE_2__["get"](parameter, 'name', key)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["FormControl"], { type: "text", bsClass: "pf-c-form-control", value: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](typeParamsData, `${key}.value`, ''), onChange: (event) => handleTypeParamChange(key, event, _constants__WEBPACK_IMPORTED_MODULE_5__["ELEMENT_TYPES"].TEXT, networkType, setTypeParamsData, typeParamsData) }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["HelpBlock"], null, validationMsg || null)));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](patternfly_react__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { key: key, controlId: `network-type-parameters-${key}`, validationState: lodash__WEBPACK_IMPORTED_MODULE_2__["get"](typeParamsData, `${key}.validationMsg`, null) ? 'error' : null }, children));
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, dynamicContent);
});


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/constants/index.ts":
/*!******************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/constants/index.ts ***!
  \******************************************************************************/
/*! exports provided: NET_ATTACH_DEF_HEADER_LABEL, ELEMENT_TYPES, networkTypes, NetworkTypes, networkTypeParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NET_ATTACH_DEF_HEADER_LABEL", function() { return NET_ATTACH_DEF_HEADER_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_TYPES", function() { return ELEMENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkTypes", function() { return networkTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkTypes", function() { return NetworkTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "networkTypeParams", function() { return networkTypeParams; });
const NET_ATTACH_DEF_HEADER_LABEL = 'Create Network Attachment Definition';
const ELEMENT_TYPES = {
    CHECKBOX: 'checkbox',
    DROPDOWN: 'dropdown',
    TEXT: 'text',
    TEXTAREA: 'textarea',
};
const networkTypes = {
    sriov: 'SR-IOV',
    'cnv-bridge': 'CNV Linux bridge',
};
var NetworkTypes;
(function (NetworkTypes) {
    NetworkTypes["SRIOV"] = "SR-IOV";
    NetworkTypes["CNV-Bridge"] = "CNV Linux bridge";
})(NetworkTypes || (NetworkTypes = {}));
const networkTypeParams = {
    sriov: {
        resourceName: {
            name: 'Resource Name',
            values: {},
            required: true,
            type: ELEMENT_TYPES.DROPDOWN,
        },
        vlanTagNum: {
            name: 'VLAN Tag Number',
            hintText: 'Ex: 100',
            type: ELEMENT_TYPES.TEXT,
        },
        ipam: {
            name: 'IP Address Management',
            type: ELEMENT_TYPES.TEXTAREA,
        },
    },
    'cnv-bridge': {
        bridge: {
            name: 'Bridge Name',
            required: true,
            type: ELEMENT_TYPES.TEXT,
        },
        vlanTagNum: {
            name: 'VLAN Tag Number',
            hintText: 'Ex: 100',
            type: ELEMENT_TYPES.TEXT,
        },
    },
};


/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/index.ts":
/*!********************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/index.ts ***!
  \********************************************************************/
/*! exports provided: NetworkAttachmentDefinitionModel, SriovNetworkNodePolicyModel, HyperConvergedModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./packages/network-attachment-definition-plugin/src/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkAttachmentDefinitionModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["NetworkAttachmentDefinitionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SriovNetworkNodePolicyModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["SriovNetworkNodePolicyModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HyperConvergedModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["HyperConvergedModel"]; });




/***/ }),

/***/ "./packages/network-attachment-definition-plugin/src/selectors/index.ts":
/*!******************************************************************************!*\
  !*** ./packages/network-attachment-definition-plugin/src/selectors/index.ts ***!
  \******************************************************************************/
/*! exports provided: getConfigAsJSON, getType, getDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigAsJSON", function() { return getConfigAsJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash-es/lodash.js");

const getConfigAsJSON = (obj) => {
    try {
        return JSON.parse(lodash__WEBPACK_IMPORTED_MODULE_0__["get"](obj, 'spec.config'));
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.error('Unable to parse network attachment definition configuration');
        return null;
    }
};
const getType = (config) => {
    return lodash__WEBPACK_IMPORTED_MODULE_0__["get"](config, 'type') === undefined ? null : config.type;
};
const getDescription = (netAttachDef) => lodash__WEBPACK_IMPORTED_MODULE_0__["get"](netAttachDef, 'metadata.annotations.description');


/***/ })

}]);
//# sourceMappingURL=network-attachment-definitions-e04a8a992e8cfd6eacfd.js.map